// Grandma's Diner shop overlay: buy gear with pearls, equip collar/charms,
// capsule pop on purchase. DOM-driven; the 3D world idles behind it.

import { CATALOG, itemPrice, canBuy, type GearItem } from './economy';
import type { GameContext } from './main';

const CAT_LABELS: Record<string, string> = {
  snack: 'SNACKS (one run each)',
  collar: 'COLLARS (wear one)',
  charm: 'CHARMS (equip two)',
  weaponTier: 'WEAPON UPGRADES',
  cosmetic: 'DRIP',
};

export function openShop(ctx: GameContext, onClose: () => void): void {
  const o = ctx.hud.overlay();
  o.style.justifyContent = 'flex-start';
  o.style.overflowY = 'auto';
  o.style.padding = '30px 16px';

  const render = (): void => {
    const d = ctx.save.data;
    const coupon = d.gear.charms.includes('coupon');
    const sections = (['snack', 'collar', 'charm', 'weaponTier', 'cosmetic'] as const)
      .map((cat) => {
        const items = CATALOG.filter((i) => i.category === cat)
          .map((i) => {
            const owned = i.category === 'snack'
              ? d.gear.snacks.filter((s) => s === i.id).length
              : d.gear.owned.includes(i.id);
            const price = itemPrice(i, coupon);
            const buyable = canBuy(i, d.pearls, d.gear.owned, coupon);
            const equipped = (i.category === 'collar' && d.gear.collar === i.id) ||
              (i.category === 'charm' && d.gear.charms.includes(i.id));
            let action = '';
            if (i.category === 'snack') {
              action = `<button class="dj-btn" data-buy="${i.id}" ${d.pearls < price ? 'disabled' : ''}>BUY ${price}⬤${owned ? ` (×${owned})` : ''}</button>`;
            } else if (typeof owned === 'boolean' && owned) {
              if (i.category === 'collar' || i.category === 'charm') {
                action = `<button class="dj-btn" data-equip="${i.id}" style="${equipped ? 'background:#33FF8833' : ''}">${equipped ? 'EQUIPPED' : 'EQUIP'}</button>`;
              } else {
                action = `<span style="color:#33FF88;font-weight:800">OWNED</span>`;
              }
            } else {
              action = `<button class="dj-btn" data-buy="${i.id}" ${!buyable ? 'disabled' : ''}>BUY ${price}⬤</button>`;
            }
            return `<div style="display:flex;align-items:center;gap:12px;justify-content:space-between;padding:6px 0">
              <div style="min-width:0"><b>${i.emoji} ${i.name}</b><div style="font-size:12px;opacity:0.75">${i.desc}</div></div>
              <div style="flex-shrink:0">${action}</div></div>`;
          })
          .join('');
        return `<div class="dj-card" style="width:min(520px,92vw);margin-bottom:12px;padding:14px 18px">
          <div style="font-family:'Space Grotesk';letter-spacing:2px;color:#CBB7E8;margin-bottom:6px">${CAT_LABELS[cat]}</div>${items}</div>`;
      })
      .join('');
    o.innerHTML = `
      <h1 style="letter-spacing:4px">GRANDMA'S DINER</h1>
      <div style="opacity:0.8;font-style:italic">"SPEAK UP. ALSO, BUY SOMETHING." — ${'⬤'.repeat(0)} <b style="color:#B388EB">${d.pearls} ⬤</b></div>
      ${sections}
      <button class="dj-btn" data-a="close" style="margin-bottom:30px">LEAVE (SHE WAVES)</button>
    `;
    o.querySelectorAll('[data-buy]').forEach((b) => {
      b.addEventListener('click', () => {
        const item = CATALOG.find((i) => i.id === (b as HTMLElement).dataset.buy)! as GearItem;
        const price = itemPrice(item, ctx.save.data.gear.charms.includes('coupon'));
        if (ctx.save.data.pearls < price) return;
        ctx.save.patch((dd) => {
          dd.pearls -= price;
          if (item.category === 'snack') dd.gear.snacks.push(item.id);
          else dd.gear.owned.push(item.id);
          // auto-equip when the slot is free
          if (item.category === 'collar' && !dd.gear.collar) dd.gear.collar = item.id;
          if (item.category === 'charm' && dd.gear.charms.length < 2) dd.gear.charms.push(item.id);
          if (item.category === 'weaponTier') {
            const w = item.id.replace('II', '') as 'ball' | 'whistle' | 'ankh';
            dd.weaponTiers[w] = 2;
          }
        });
        ctx.hud.setPearls(ctx.save.data.pearls);
        void ctx.audio.play('register', 0.7);
        void ctx.audio.play('fanfare', 0.35, 1.2);
        ctx.hud.toast(`CAPSULE POP — ${item.emoji} ${item.name}`, 2.4);
        render();
      });
    });
    o.querySelectorAll('[data-equip]').forEach((b) => {
      b.addEventListener('click', () => {
        const id = (b as HTMLElement).dataset.equip!;
        const item = CATALOG.find((i) => i.id === id)!;
        ctx.save.patch((dd) => {
          if (item.category === 'collar') {
            dd.gear.collar = dd.gear.collar === id ? null : id;
          } else if (item.category === 'charm') {
            if (dd.gear.charms.includes(id)) dd.gear.charms = dd.gear.charms.filter((c) => c !== id);
            else {
              if (dd.gear.charms.length >= 2) dd.gear.charms.shift();
              dd.gear.charms.push(id);
            }
          }
        });
        void ctx.audio.play('click', 0.5);
        render();
      });
    });
    o.querySelector('[data-a="close"]')!.addEventListener('click', () => {
      o.remove();
      onClose();
    });
  };
  render();
}
