// The chapter runtime: builds a LevelDef into a playable diorama — world,
// entities, puzzles, enemies, weapons, hearts, collectibles, win/fail flow.

import * as THREE from 'three';
import type { GameContext, Scene } from '../main';
import type { EntityDef, LevelDef, WeaponId } from '../types';
import { World } from '../world';
import { Player } from '../player';
import { Sky } from '../art/sky';
import { PAL } from '../art/palette';
import { emissiveMat, mat } from '../art/toon';
import { makeSign, makePolaroid, makeHeartPiece, makeGoldenDuck } from '../art/kit';
import { InteractManager } from '../interact';
import { evaluate, type PuzzleInputs } from '../puzzles';
import { Weapons, WEAPON_NAMES } from '../weapons';
import { PatrolDuck, Crab, Wisp, Drone, type Enemy } from '../enemies';

interface Pickup {
  obj: THREE.Object3D;
  kind: 'piece' | 'goldenDuck' | 'pearl' | 'weapon';
  id?: number;
  weapon?: WeaponId;
  needs?: WeaponId;
  taken: boolean;
}

interface HazardRect {
  min: THREE.Vector3;
  max: THREE.Vector3;
  kind: 'mud' | 'water' | 'thorns' | 'fall';
}

export class PlayScene implements Scene {
  readonly scene = new THREE.Scene();
  protected world: World;
  protected player: Player;
  private sky: Sky;
  protected im = new InteractManager();
  protected weapons: Weapons;
  protected enemies: Enemy[] = [];
  private pickups: Pickup[] = [];
  private hazards: HazardRect[] = [];
  private secretWalls: { mesh: THREE.Mesh; found: boolean }[] = [];
  private goalPos = new THREE.Vector3();
  private spawnPos = new THREE.Vector3();
  private spawnYaw = 0;
  protected hearts = 3;
  protected maxHearts = 3;
  private iframes = 0;
  protected runTime = 0;
  protected deaths = 0;
  private switchLatch: Record<string, boolean> = {};
  private done = false;
  protected drone: Drone | null = null;
  protected rotors: { id: string; obj: THREE.Group; states: number; state: number; kind: 'barrier' | 'mirror' }[] = [];
  protected slots: { id: string; obj: THREE.Group; sum: number; label: THREE.Mesh }[] = [];
  protected valves: { id: string; obj: THREE.Group; state: number }[] = [];
  protected zones: { id: string; pos: THREE.Vector3; radius: number; label: string; used: boolean }[] = [];
  /** chapter hook: an interact zone was triggered */
  protected onZone: ((id: string) => void) | null = null;
  /** exact amounts per slot (from logic rules) for overpay detection */
  private slotTargets: Record<string, number> = {};

  constructor(protected ctx: GameContext, protected def: LevelDef) {
    for (const r of def.logic ?? []) {
      if ('paidExact' in r.when) this.slotTargets[r.when.paidExact.slot] = r.when.paidExact.amount;
    }
    this.world = new World(def);
    this.scene.add(this.world.group);
    this.scene.fog = new THREE.FogExp2(PAL.midnight, def.fogDensity ?? 0.016);

    this.sky = new Sky();
    this.sky.set({ top: PAL.midnight, horizon: PAL.horizonGlow, glow: def.skyGlow });
    this.scene.add(this.sky.group);

    const hemi = new THREE.HemisphereLight(0x7d8fd0, 0x141a38, 1.15);
    this.scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xa8b8ff, 1.5);
    sun.position.set(18, 34, -14);
    if (ctx.tier === 'ultra') {
      sun.castShadow = true;
      sun.shadow.mapSize.set(2048, 2048);
      const s = 46;
      sun.shadow.camera.left = -s;
      sun.shadow.camera.right = s;
      sun.shadow.camera.top = s;
      sun.shadow.camera.bottom = -s;
      sun.shadow.camera.far = 130;
      sun.shadow.bias = -0.0008;
    }
    this.scene.add(sun);

    this.player = new Player();
    this.scene.add(this.player.rig.group);
    this.weapons = new Weapons(this.scene);
    this.weapons.setLoadout(ctx.save.data.weapons, ctx.save.data.weaponTiers);
    this.weapons.onHitTarget = (id) => {
      this.switchLatch[id] = true;
      void ctx.audio.play('correct', 0.5);
    };
    this.weapons.onBonk = () => {
      void ctx.audio.play('quack', 0.6);
      this.ctx.camera.kick(0.15);
    };

    for (const e of def.entities) this.spawnEntity(e);

    this.player.spawnAt(this.spawnPos.x, this.spawnPos.y, this.spawnPos.z, this.spawnYaw);
    ctx.camera.configure(def.cameraZones, def.cameraOffset);
    ctx.camera.snapTo(this.player.pos);
    ctx.hud.chapterCard(def.name, def.tagline);
    ctx.hud.setHearts(this.hearts, this.maxHearts);
    void ctx.audio.play('levelstart', 0.5);
  }

  private spawnEntity(e: EntityDef): void {
    const v = (p: { x: number; y: number; z: number }): THREE.Vector3 => new THREE.Vector3(p.x, p.y, p.z);
    switch (e.type) {
      case 'spawn':
        this.spawnPos.copy(v(e.pos));
        this.spawnYaw = e.yaw ?? 0;
        break;
      case 'goal': {
        this.goalPos.copy(v(e.pos));
        const gate = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.13, 10, 24), emissiveMat(PAL.heartNeon, 1.8));
        ring.position.y = 1.4;
        gate.add(ring);
        const glow = new THREE.PointLight(PAL.heartNeon, 30, 10, 1.6);
        glow.position.y = 1.4;
        gate.add(glow);
        gate.position.copy(this.goalPos);
        this.scene.add(gate);
        break;
      }
      case 'letterPiece': {
        const p = makeHeartPiece();
        p.position.copy(v(e.pos));
        this.scene.add(p);
        this.pickups.push({ obj: p, kind: 'piece', taken: this.ctx.save.data.pieces.includes(this.def.id) });
        if (this.pickups[this.pickups.length - 1].taken) p.visible = false;
        break;
      }
      case 'goldenDuck': {
        const d = makeGoldenDuck();
        d.position.copy(v(e.pos));
        this.scene.add(d);
        const taken = this.ctx.save.data.ducks.includes(e.id);
        if (taken) d.visible = false;
        this.pickups.push({ obj: d, kind: 'goldenDuck', id: e.id, needs: e.needs, taken });
        break;
      }
      case 'pearl': {
        const m = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), emissiveMat(PAL.taroPurple, 1.2));
        m.position.copy(v(e.pos));
        this.scene.add(m);
        this.pickups.push({ obj: m, kind: 'pearl', taken: false });
        break;
      }
      case 'weaponPickup': {
        if (this.ctx.save.data.weapons.includes(e.weapon)) break;
        const g = new THREE.Group();
        const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.62, 0.5, 12), mat(0x232c4e));
        ped.position.y = 0.25;
        g.add(ped);
        const orb = new THREE.Mesh(new THREE.OctahedronGeometry(0.32), emissiveMat(PAL.crtGreen, 1.6));
        orb.position.y = 1.1;
        g.add(orb);
        const glow = new THREE.PointLight(PAL.crtGreen, 20, 7, 1.6);
        glow.position.y = 1.2;
        g.add(glow);
        g.position.copy(v(e.pos));
        this.scene.add(g);
        this.pickups.push({ obj: g, kind: 'weapon', weapon: e.weapon, taken: false });
        break;
      }
      case 'duck':
        this.addEnemy(new PatrolDuck((e.patrol ?? [e.pos]).map(v), e.speed));
        break;
      case 'crab':
        this.addEnemy(new Crab(v(e.pos), e.range));
        break;
      case 'wisp':
        this.addEnemy(new Wisp(v(e.pos), e.radius));
        break;
      case 'drone': {
        this.drone = new Drone(v(e.pos));
        this.addEnemy(this.drone);
        break;
      }
      case 'hazard': {
        const c = v(e.shape.pos);
        const h = v(e.shape.size).multiplyScalar(0.5);
        this.hazards.push({ min: c.clone().sub(h), max: c.clone().add(h), kind: e.kind });
        if (e.kind === 'mud') {
          const m = new THREE.Mesh(
            new THREE.BoxGeometry(e.shape.size.x, 0.08, e.shape.size.z),
            mat(PAL.lincolnMud, { rim: 0 })
          );
          m.position.set(c.x, e.shape.pos.y + e.shape.size.y / 2, c.z);
          this.scene.add(m);
        }
        break;
      }
      case 'carry':
      case 'plate':
      case 'door':
      case 'lift':
        this.im.add(e, this.world, this.scene);
        break;
      case 'switchTarget':
        this.weapons.addSwitchTarget(e.id, v(e.pos));
        this.switchLatch[e.id] = false;
        break;
      case 'rotor': {
        const g = new THREE.Group();
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.5, 10), mat(0x2a3352));
        base.position.y = 0.25;
        g.add(base);
        // glowing wire arm shows routing direction
        const arm = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 2.4), emissiveMat(PAL.ramenGold, 1.3));
        arm.position.y = 0.6;
        g.add(arm);
        const state = e.state ?? 0;
        g.rotation.y = (state * Math.PI * 2) / e.states;
        g.position.copy(v(e.pos));
        this.scene.add(g);
        this.rotors.push({ id: e.id, obj: g, states: e.states, state, kind: e.kind });
        break;
      }
      case 'slot': {
        const g = new THREE.Group();
        const booth = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.3, 1.2), mat(0x3a4468));
        booth.position.y = 0.65;
        g.add(booth);
        const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.3), emissiveMat(PAL.ramenGold, 1.5));
        mouth.position.set(0, 1.36, 0);
        g.add(mouth);
        const label = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.5), new THREE.MeshBasicMaterial({ transparent: true }));
        label.position.set(0, 1.9, 0);
        g.add(label);
        g.position.copy(v(e.pos));
        this.scene.add(g);
        this.slots.push({ id: e.id, obj: g, sum: 0, label });
        this.updateSlotLabel(this.slots[this.slots.length - 1]);
        break;
      }
      case 'valve': {
        const g = new THREE.Group();
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 1, 8), mat(0x3a4468));
        post.position.y = 0.5;
        g.add(post);
        const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.08, 8, 14), emissiveMat(PAL.crtGreen, 0.8));
        wheel.position.y = 1.1;
        wheel.rotation.x = Math.PI / 2;
        g.add(wheel);
        g.position.copy(v(e.pos));
        this.scene.add(g);
        this.valves.push({ id: e.id, obj: g, state: 0 });
        break;
      }
      case 'interactZone':
        this.zones.push({ id: e.id, pos: v(e.pos), radius: e.radius, label: e.label, used: false });
        break;
      case 'bobaSpot':
        this.weapons.addBobaSpot(v(e.pos));
        break;
      case 'secretWall': {
        const m = new THREE.Mesh(
          new THREE.BoxGeometry(e.size.x, e.size.y, e.size.z),
          mat(e.color, {})
        );
        m.position.copy(v(e.pos));
        this.scene.add(m);
        this.secretWalls.push({ mesh: m, found: false });
        break;
      }
      case 'sign': {
        const s = makeSign(e.lines, e.fg ? { fg: e.fg } : {});
        s.position.copy(v(e.pos));
        s.rotation.y = e.yaw ?? 0;
        this.scene.add(s);
        break;
      }
      case 'polaroid': {
        const p = makePolaroid(new URL(`../../${e.photo}`, document.baseURI).href);
        p.position.copy(v(e.pos));
        p.rotation.y = e.yaw ?? 0;
        this.scene.add(p);
        break;
      }
      default:
        break;
    }
  }

  protected allyFetch: Pickup | null = null;

  protected collect(p: Pickup): void {
    p.taken = true;
    p.obj.visible = false;
    if (p.kind === 'piece') {
      this.ctx.save.patch((d) => { if (!d.pieces.includes(this.def.id)) d.pieces.push(this.def.id); });
      this.ctx.hud.setPieces(this.ctx.save.data.pieces.length);
      this.ctx.hud.toast('LETTER PIECE RECOVERED ✉', 2.2);
      void this.ctx.audio.play('sparkle', 0.7);
    } else if (p.kind === 'goldenDuck' && p.id !== undefined) {
      this.ctx.save.patch((d) => { if (!d.ducks.includes(p.id!)) d.ducks.push(p.id!); });
      this.ctx.hud.toast(`GOLDEN DUCK ${this.ctx.save.data.ducks.length}/21`, 2.2);
      void this.ctx.audio.play('quack', 0.7, 0.8);
    } else if (p.kind === 'pearl') {
      this.ctx.save.patch((d) => { d.pearls += 1; });
      this.ctx.hud.setPearls(this.ctx.save.data.pearls);
      void this.ctx.audio.play('coin', 0.4);
    } else if (p.kind === 'weapon' && p.weapon) {
      this.ctx.save.patch((d) => { if (!d.weapons.includes(p.weapon!)) d.weapons.push(p.weapon!); });
      this.weapons.setLoadout(this.ctx.save.data.weapons, this.ctx.save.data.weaponTiers);
      this.weapons.equipped = p.weapon;
      this.ctx.hud.toast(`${WEAPON_NAMES[p.weapon]} ACQUIRED`, 3);
      void this.ctx.audio.play('fanfare', 0.6);
    }
  }

  private updateSlotLabel(slot: { sum: number; label: THREE.Mesh; id: string }): void {
    const target = this.slotTargets[slot.id];
    const c = document.createElement('canvas');
    c.width = 256;
    c.height = 96;
    const g = c.getContext('2d')!;
    g.fillStyle = 'rgba(10,14,32,0.85)';
    g.fillRect(0, 0, 256, 96);
    g.fillStyle = '#FFB627';
    g.font = '700 40px "Space Grotesk", sans-serif';
    g.textAlign = 'center';
    g.fillText(`${slot.sum}${target !== undefined ? ' / ' + target : ''}`, 128, 60);
    const tex = new THREE.CanvasTexture(c);
    const m = slot.label.material as THREE.MeshBasicMaterial;
    m.map?.dispose();
    m.map = tex;
    m.needsUpdate = true;
  }

  protected addEnemy(e: Enemy): void {
    this.enemies.push(e);
    this.scene.add(e.obj);
  }

  protected hurt(_kind: string): void {
    if (this.iframes > 0 || this.done) return;
    this.hearts -= 1;
    this.iframes = 1.2;
    this.deaths += this.hearts <= 0 ? 1 : 0;
    this.ctx.hud.setHearts(Math.max(0, this.hearts), this.maxHearts);
    void this.ctx.audio.play('hit', 0.55);
    this.ctx.camera.kick(0.4);
    if (this.hearts <= 0) {
      // run ends — soft: refill and restart the chapter (economy sting later)
      void this.ctx.audio.play('powerdown', 0.6);
      this.ctx.hud.toast('RUN OVER. THE DUCKS ARE LAUGHING.', 2.6);
      this.hearts = this.maxHearts;
      this.ctx.hud.setHearts(this.hearts, this.maxHearts);
      this.respawn();
    } else {
      // knockback
      this.player.state.vx *= -1.6;
      this.player.state.vz *= -1.6;
    }
  }

  protected respawn(): void {
    this.player.spawnAt(this.spawnPos.x, this.spawnPos.y, this.spawnPos.z, this.spawnYaw);
    this.ctx.camera.snapTo(this.player.pos);
  }

  update(dt: number): void {
    if (this.done) return;
    const intents = this.ctx.input.poll();
    this.sky.update(dt);
    this.runTime += dt;
    this.iframes = Math.max(0, this.iframes - dt);
    // flicker during i-frames
    this.player.rig.group.visible = this.iframes <= 0 || Math.floor(this.iframes * 14) % 2 === 0;

    this.player.update(dt, intents, this.world, this.ctx.camera.yaw);
    if (this.player.events.jumped) void this.ctx.audio.play('jump', 0.3);
    if (this.player.events.landed) void this.ctx.audio.play('land', 0.22);
    if (this.player.events.pounced) {
      void this.ctx.audio.play('whoosh', 0.4);
      this.ctx.camera.kick(0.15);
      // pounce bonks
      for (const e of this.enemies) {
        if (e.alive && e.obj.position.distanceTo(this.player.pos) < 1.2) {
          if (e.bonk(new THREE.Vector3(this.player.state.facingX, 0, this.player.state.facingZ))) {
            void this.ctx.audio.play('quack', 0.6);
          }
        }
      }
    }

    // interactions (priority: zone > slot deposit > rotor > valve > carry)
    const nearZone = this.zones.find((z) => !z.used && z.pos.distanceTo(this.player.pos) < z.radius);
    const nearSlot = this.slots.find((s) => s.obj.position.distanceTo(this.player.pos) < 2.2);
    const nearRotor = this.rotors.find((r) => r.obj.position.distanceTo(this.player.pos) < 2);
    const nearValve = this.valves.find((vv) => vv.obj.position.distanceTo(this.player.pos) < 2);
    const nearC = this.im.nearest(this.player);
    const carryingCoin = this.im.carrying?.kind === 'coin';

    if (nearZone) this.ctx.hud.prompt(`[E] ${nearZone.label}`);
    else if (nearSlot && carryingCoin) this.ctx.hud.prompt('[E] INSERT COIN');
    else if (nearRotor) this.ctx.hud.prompt('[E] ROTATE');
    else if (nearValve) this.ctx.hud.prompt('[E] TURN VALVE');
    else if (this.im.carrying) this.ctx.hud.prompt('[E] PUT DOWN');
    else if (nearC) this.ctx.hud.prompt('[E] PICK UP');
    else this.ctx.hud.prompt(null);

    if (intents.interact) {
      if (nearZone) {
        nearZone.used = true;
        this.onZone?.(nearZone.id);
      } else if (nearSlot && carryingCoin && this.im.carrying) {
        const coin = this.im.carrying;
        nearSlot.sum += coin.value || 1;
        this.im.carrying = null;
        coin.carried = false;
        coin.obj.visible = false;
        coin.pos.set(0, -100, 0);
        void this.ctx.audio.play('register', 0.6);
        const target = this.slotTargets[nearSlot.id];
        if (target !== undefined && nearSlot.sum > target) {
          nearSlot.sum = 0;
          this.ctx.hud.toast('OVERPAID. "NO REFUNDS." — HAYDEN', 2.6);
          void this.ctx.audio.play('error', 0.6);
          // coins come back out at their homes
          for (const c of this.im.carriables) {
            if (c.kind === 'coin') {
              c.obj.visible = true;
              c.pos.copy(c.home);
            }
          }
        }
        this.updateSlotLabel(nearSlot);
      } else if (nearRotor) {
        nearRotor.state = (nearRotor.state + 1) % nearRotor.states;
        nearRotor.obj.rotation.y = (nearRotor.state * Math.PI * 2) / nearRotor.states;
        void this.ctx.audio.play('click', 0.55);
      } else if (nearValve) {
        nearValve.state = (nearValve.state + 1) % 3;
        nearValve.obj.rotation.y += 1.2;
        void this.ctx.audio.play('reel', 0.5);
      } else {
        const r = this.im.interact(this.player);
        if (r) void this.ctx.audio.play('pop', 0.45);
      }
    }
    this.im.update(dt, this.player, this.world);

    // weapons
    if (intents.cycle) {
      this.weapons.cycle(intents.cycle);
      if (this.weapons.equipped) this.ctx.hud.toast(WEAPON_NAMES[this.weapons.equipped], 1);
    }
    if (intents.fire) {
      const fired = this.weapons.fire(this.player);
      if (fired === 'ball' || fired === 'boba') void this.ctx.audio.play('boing', 0.4);
      if (fired === 'ankh') void this.ctx.audio.play('sparkle', 0.5);
      if (fired === 'whistle') {
        void this.ctx.audio.play('quack', 0.7, 1.4);
        // the summoned duck fetches the nearest whistle-gated pickup
        const target = this.pickups.find(
          (p) => !p.taken && p.kind === 'goldenDuck' && p.needs === 'whistle' &&
            p.obj.position.distanceTo(this.player.pos) < 16
        );
        if (target) {
          this.weapons.sendAlly(target.obj.position);
          this.allyFetch = target;
        }
      }
    }
    if (this.allyFetch && !this.allyFetch.taken && this.weapons.allyDuck?.visible) {
      if (this.weapons.allyDuck.position.distanceTo(this.allyFetch.obj.position) < 0.6) {
        this.collect(this.allyFetch);
      }
    }
    this.weapons.update(dt, this.player, this.world, this.enemies);

    // puzzle graph
    const inputs: PuzzleInputs = {
      plates: {},
      switches: this.switchLatch,
      keyNear: {},
      rotors: Object.fromEntries(this.rotors.map((r) => [r.id, r.state])),
      paid: Object.fromEntries(this.slots.map((s) => [s.id, s.sum])),
    };
    for (const p of this.im.plates) inputs.plates[p.id] = p.satisfied;
    for (const g of this.im.gates) {
      if (g.needsKey) {
        const key = this.im.carrying?.kind === 'key' ? this.im.carrying : this.im.carriables.find((c) => c.kind === 'key');
        inputs.keyNear[g.id] = !!key && key.pos.distanceTo(g.obj.position) < 3.2;
      }
    }
    const open = evaluate(this.def.logic ?? [], inputs);
    for (const g of this.im.gates) {
      const shouldOpen = open.has(g.id);
      if (shouldOpen && !g.open) void this.ctx.audio.play('ding', 0.5);
      g.open = shouldOpen;
    }

    // enemies
    for (const e of this.enemies) {
      if (e.alive) e.update(dt, this.player, (k) => this.hurt(k));
    }

    // Hayden's drone re-collects loose coins that aren't home
    if (this.drone && !this.drone.target) {
      const loose = this.im.carriables.find(
        (c) => c.kind === 'coin' && !c.carried && c.obj.visible && c.pos.distanceTo(c.home) > 1.5
      );
      if (loose) {
        this.drone.target = loose.pos;
        this.drone.onSteal = () => {
          loose.pos.copy(loose.home);
          this.ctx.hud.toast('DRONE REPOSSESSED A COIN. — HAYDEN', 2);
          void this.ctx.audio.play('chatter', 0.4);
        };
      }
    }

    // hazards
    for (const h of this.hazards) {
      const p = this.player.pos;
      if (p.x > h.min.x && p.x < h.max.x && p.y > h.min.y - 0.2 && p.y < h.max.y + 0.5 && p.z > h.min.z && p.z < h.max.z) {
        if (h.kind === 'water') void this.ctx.audio.play('splash', 0.5);
        this.hurt(h.kind);
        this.respawn();
        break;
      }
    }
    // kill plane
    if (this.player.pos.y < this.def.bounds.min.y) {
      this.hurt('fall');
      this.respawn();
    }

    // secret walls
    for (const s of this.secretWalls) {
      const d = s.mesh.position.distanceTo(this.player.pos);
      if (!s.found && d < 1.4) {
        s.found = true;
        const m = s.mesh.material as THREE.MeshLambertMaterial;
        m.transparent = true;
        m.opacity = 0.3;
        this.ctx.hud.toast('SECRET ROOM. OBVIOUSLY.', 2.4);
        void this.ctx.audio.play('sparkle', 0.6);
        this.ctx.save.patch((dd) => { dd.secrets[`${this.def.id}-room`] = true; });
      } else if (s.found) {
        const m = s.mesh.material as THREE.MeshLambertMaterial;
        m.transparent = true;
        m.opacity = d < 3 ? 0.3 : 0.95;
      }
    }

    // pickups
    for (const p of this.pickups) {
      if (p.taken) continue;
      p.obj.rotation.y += dt * 2;
      if (p.obj.position.distanceTo(this.player.pos) < 1.1) {
        if (p.kind === 'goldenDuck' && p.needs && !this.ctx.save.data.weapons.includes(p.needs)) {
          this.ctx.hud.toast(`THIS DUCK RESPECTS ONLY THE ${WEAPON_NAMES[p.needs]}.`, 2);
          continue;
        }
        this.collect(p);
      }
    }

    // goal
    if (this.player.pos.distanceTo(this.goalPos) < 1.6) {
      this.finish();
    }

    this.onUpdate(dt, intents);

    this.ctx.camera.update(
      dt,
      this.player.pos,
      new THREE.Vector3(this.player.state.vx, 0, this.player.state.vz),
      intents.camNudge
    );

    if (intents.pause) this.ctx.togglePause();
  }

  /** chapter-specific hooks */
  protected onUpdate(_dt: number, _intents: ReturnType<GameContext['input']['poll']>): void {}

  protected finish(): void {
    if (this.done) return;
    this.done = true;
    void this.ctx.audio.play('win', 0.7);
    const first = !this.ctx.save.data.chaptersDone.includes(this.def.id);
    this.ctx.save.patch((d) => {
      if (!d.chaptersDone.includes(this.def.id)) d.chaptersDone.push(this.def.id);
      d.pearls += first ? 100 : 25;
    });
    this.ctx.hud.setPearls(this.ctx.save.data.pearls);
    this.ctx.hud.toast(first ? 'CHAPTER CLEAR. +100 ⬤' : 'CHAPTER CLEAR AGAIN. +25 ⬤', 3);
    setTimeout(() => this.ctx.go('hub'), 1800);
  }

  dispose(): void {
    this.ctx.hud.prompt(null);
  }
}
