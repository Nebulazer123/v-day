(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oo="180",Fc=0,Lo=1,Oc=2,Ga=1,Va=2,hn=3,An=0,Le=1,Je=2,wn=0,ui=1,Io=2,Uo=3,zo=4,kc=5,On=100,Bc=101,Hc=102,Gc=103,Vc=104,Wc=200,Xc=201,jc=202,qc=203,mr=204,gr=205,Yc=206,Kc=207,$c=208,Zc=209,Jc=210,Qc=211,tl=212,el=213,nl=214,_r=0,xr=1,vr=2,pi=3,yr=4,Mr=5,Sr=6,Er=7,ao=0,il=1,sl=2,Tn=0,rl=1,ol=2,al=3,Wa=4,cl=5,ll=6,hl=7,Xa=300,mi=301,gi=302,br=303,wr=304,Ts=306,Tr=1e3,Bn=1001,Ar=1002,Ke=1003,ul=1004,Xi=1005,Qe=1006,Is=1007,Hn=1008,en=1009,ja=1010,qa=1011,Ui=1012,co=1013,Vn=1014,un=1015,Bi=1016,lo=1017,ho=1018,zi=1020,Ya=35902,Ka=35899,$a=1021,Za=1022,Ye=1023,Ni=1026,Fi=1027,Ja=1028,uo=1029,Qa=1030,fo=1031,po=1033,ms=33776,gs=33777,_s=33778,xs=33779,Rr=35840,Cr=35841,Pr=35842,Dr=35843,Lr=36196,Ir=37492,Ur=37496,zr=37808,Nr=37809,Fr=37810,Or=37811,kr=37812,Br=37813,Hr=37814,Gr=37815,Vr=37816,Wr=37817,Xr=37818,jr=37819,qr=37820,Yr=37821,Kr=36492,$r=36494,Zr=36495,Jr=36283,Qr=36284,to=36285,eo=36286,dl=3200,fl=3201,tc=0,pl=1,En="",Ue="srgb",_i="srgb-linear",Es="linear",Zt="srgb",qn=7680,No=519,ml=512,gl=513,_l=514,ec=515,xl=516,vl=517,yl=518,Ml=519,Fo=35044,Oo="300 es",tn=2e3,bs=2001;class Mi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ko=1234567;const Li=Math.PI/180,xi=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function mo(i,t){return(i%t+t)%t}function Sl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function El(i,t,e){return i!==t?(e-i)/(t-i):0}function Ii(i,t,e){return(1-e)*i+e*t}function bl(i,t,e,n){return Ii(i,t,1-Math.exp(-e*n))}function wl(i,t=1){return t-Math.abs(mo(i,t*2)-t)}function Tl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Al(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cl(i,t){return i+Math.random()*(t-i)}function Pl(i){return i*(.5-Math.random())}function Dl(i){i!==void 0&&(ko=i);let t=ko+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(i){return i*Li}function Il(i){return i*xi}function Ul(i){return(i&i-1)===0&&i!==0}function zl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fl(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function li(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:Li,RAD2DEG:xi,generateUUID:Si,clamp:Vt,euclideanModulo:mo,mapLinear:Sl,inverseLerp:El,lerp:Ii,damp:bl,pingpong:wl,smoothstep:Tl,smootherstep:Al,randInt:Rl,randFloat:Cl,randFloatSpread:Pl,seededRandom:Dl,degToRad:Ll,radToDeg:Il,isPowerOfTwo:Ul,ceilPowerOfTwo:zl,floorPowerOfTwo:Nl,setQuaternionFromProperEuler:Fl,normalize:Ce,denormalize:li};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Hi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||c!==d||l!==p||u!==g){let m=1-a;const f=c*d+l*p+u*g+h*x,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const R=Math.sqrt(w),T=Math.atan2(R,f*E);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const S=a*E;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,h=h*m+x*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Us.copy(this).projectOnVector(t),this.sub(Us)}reflect(t){return this.sub(Us.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Us=new C,Bo=new Hi;class zt{constructor(t,e,n,s,r,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],E=s[1],w=s[4],S=s[7],R=s[2],T=s[5],P=s[8];return r[0]=o*x+a*E+c*R,r[3]=o*m+a*w+c*T,r[6]=o*f+a*S+c*P,r[1]=l*x+u*E+h*R,r[4]=l*m+u*w+h*T,r[7]=l*f+u*S+h*P,r[2]=d*x+p*E+g*R,r[5]=d*m+p*w+g*T,r[8]=d*f+p*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,p=l*r-o*c,g=e*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(s*l-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(zs.makeScale(t,e)),this}rotate(t){return this.premultiply(zs.makeRotation(-t)),this}translate(t,e){return this.premultiply(zs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zs=new zt;function nc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Oi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ol(){const i=Oi("canvas");return i.style.display="block",i}const Ho={};function ki(i){i in Ho||(Ho[i]=!0,console.warn(i))}function kl(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Go=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bl(){const i={enabled:!0,workingColorSpace:_i,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Zt&&(s.r=dn(s.r),s.g=dn(s.g),s.b=dn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Zt&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===En?Es:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_i]:{primaries:t,whitePoint:n,transfer:Es,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:Go,fromXYZ:Vo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}const qt=Bl();function dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class Hl{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yn===void 0&&(Yn=Oi("canvas")),Yn.width=t.width,Yn.height=t.height;const s=Yn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=dn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(dn(e[n]/255)*255):e[n]=dn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gl=0;class go{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ns(s[o].image)):r.push(Ns(s[o]))}else r=Ns(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vl=0;const Fs=new C;class Te extends Mi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Bn,s=Bn,r=Qe,o=Hn,a=Ye,c=en,l=Te.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=Si(),this.name="",this.source=new go(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fs).x}get height(){return this.source.getSize(Fs).y}get depth(){return this.source.getSize(Fs).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tr:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tr:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Xa;Te.DEFAULT_ANISOTROPY=1;class Jt{constructor(t=0,e=0,n=0,s=1){Jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,S=(p+1)/2,R=(f+1)/2,T=(u+d)/4,P=(h+x)/4,I=(g+m)/4;return w>S&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=P/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-x)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wl extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Jt(0,0,t,e),this.scissorTest=!1,this.viewport=new Jt(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Te(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new go(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Wl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ic extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xl extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(We.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(We.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=We.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,We):We.fromBufferAttribute(r,o),We.applyMatrix4(t.matrixWorld),this.expandByPoint(We);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,We),We.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),qi.subVectors(this.max,Ti),Kn.subVectors(t.a,Ti),$n.subVectors(t.b,Ti),Zn.subVectors(t.c,Ti),gn.subVectors($n,Kn),_n.subVectors(Zn,$n),Pn.subVectors(Kn,Zn);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-Pn.z,Pn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,Pn.z,0,-Pn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-Pn.y,Pn.x,0];return!Os(e,Kn,$n,Zn,qi)||(e=[1,0,0,0,1,0,0,0,1],!Os(e,Kn,$n,Zn,qi))?!1:(Yi.crossVectors(gn,_n),e=[Yi.x,Yi.y,Yi.z],Os(e,Kn,$n,Zn,qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,We).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(We).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const rn=[new C,new C,new C,new C,new C,new C,new C,new C],We=new C,ji=new Gi,Kn=new C,$n=new C,Zn=new C,gn=new C,_n=new C,Pn=new C,Ti=new C,qi=new C,Yi=new C,Dn=new C;function Os(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Dn.fromArray(i,r);const a=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=t.dot(Dn),l=e.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const jl=new Gi,Ai=new C,ks=new C;class As{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ai.subVectors(t,this.center);const e=Ai.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ai,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ai.copy(t.center).add(ks)),this.expandByPoint(Ai.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const on=new C,Bs=new C,Ki=new C,xn=new C,Hs=new C,$i=new C,Gs=new C;class sc{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.origin).addScaledVector(this.direction,e),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bs.copy(t).add(e).multiplyScalar(.5),Ki.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(Bs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ki),a=xn.dot(this.direction),c=-xn.dot(Ki),l=xn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Bs).addScaledVector(Ki,d),p}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),s=on.dot(on)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,s,r){Hs.subVectors(e,t),$i.subVectors(n,t),Gs.crossVectors(Hs,$i);let o=this.direction.dot(Gs),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,t);const c=a*this.direction.dot($i.crossVectors(xn,$i));if(c<0)return null;const l=a*this.direction.dot(Hs.cross(xn));if(l<0||c+l>o)return null;const u=-a*xn.dot(Gs);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,o,a,c,l,u,h,d,p,g,x,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,u,h,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,p=c*h,g=l*u,x=l*h;e[0]=d-x*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,x=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*h,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=x-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+x,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ql,t,Yl)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),vn.crossVectors(n,Oe),vn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),vn.crossVectors(n,Oe)),vn.normalize(),Zi.crossVectors(Oe,vn),s[0]=vn.x,s[4]=Zi.x,s[8]=Oe.x,s[1]=vn.y,s[5]=Zi.y,s[9]=Oe.y,s[2]=vn.z,s[6]=Zi.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],E=n[3],w=n[7],S=n[11],R=n[15],T=s[0],P=s[4],I=s[8],M=s[12],y=s[1],D=s[5],N=s[9],B=s[13],j=s[2],W=s[6],X=s[10],Z=s[14],H=s[3],ot=s[7],ut=s[11],bt=s[15];return r[0]=o*T+a*y+c*j+l*H,r[4]=o*P+a*D+c*W+l*ot,r[8]=o*I+a*N+c*X+l*ut,r[12]=o*M+a*B+c*Z+l*bt,r[1]=u*T+h*y+d*j+p*H,r[5]=u*P+h*D+d*W+p*ot,r[9]=u*I+h*N+d*X+p*ut,r[13]=u*M+h*B+d*Z+p*bt,r[2]=g*T+x*y+m*j+f*H,r[6]=g*P+x*D+m*W+f*ot,r[10]=g*I+x*N+m*X+f*ut,r[14]=g*M+x*B+m*Z+f*bt,r[3]=E*T+w*y+S*j+R*H,r[7]=E*P+w*D+S*W+R*ot,r[11]=E*I+w*N+S*X+R*ut,r[15]=E*M+w*B+S*Z+R*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+n*o*p+r*a*u-n*l*u)+f*(-s*a*u-e*c*h+e*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],E=h*m*l-x*d*l+x*c*p-a*m*p-h*c*f+a*d*f,w=g*d*l-u*m*l-g*c*p+o*m*p+u*c*f-o*d*f,S=u*x*l-g*h*l+g*a*p-o*x*p-u*a*f+o*h*f,R=g*h*c-u*x*c-g*a*d+o*x*d+u*a*m-o*h*m,T=e*E+n*w+s*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=E*P,t[1]=(x*d*r-h*m*r-x*s*p+n*m*p+h*s*f-n*d*f)*P,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*P,t[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*p-n*c*p)*P,t[4]=w*P,t[5]=(u*m*r-g*d*r+g*s*p-e*m*p-u*s*f+e*d*f)*P,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*P,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*p+e*c*p)*P,t[8]=S*P,t[9]=(g*h*r-u*x*r-g*n*p+e*x*p+u*n*f-e*h*f)*P,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*f+e*a*f)*P,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*p-e*a*p)*P,t[12]=R*P,t[13]=(u*x*s-g*h*s+g*n*d-e*x*d-u*n*m+e*h*m)*P,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*P,t[15]=(o*h*s-u*a*s+u*n*c-e*h*c-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,p=r*u,g=r*h,x=o*u,m=o*h,f=a*h,E=c*l,w=c*u,S=c*h,R=n.x,T=n.y,P=n.z;return s[0]=(1-(x+f))*R,s[1]=(p+S)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(d+f))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+w)*P,s[9]=(m-E)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Jn.set(s[0],s[1],s[2]).length();const o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Xe.copy(this);const l=1/r,u=1/o,h=1/a;return Xe.elements[0]*=l,Xe.elements[1]*=l,Xe.elements[2]*=l,Xe.elements[4]*=u,Xe.elements[5]*=u,Xe.elements[6]*=u,Xe.elements[8]*=h,Xe.elements[9]*=h,Xe.elements[10]*=h,e.setFromRotationMatrix(Xe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=tn,c=!1){const l=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===tn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===bs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=tn,c=!1){const l=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===tn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===bs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Jn=new C,Xe=new ae,ql=new C(0,0,0),Yl=new C(1,1,1),vn=new C,Zi=new C,Oe=new C,Wo=new ae,Xo=new Hi;class nn{constructor(t=0,e=0,n=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class rc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Kl=0;const jo=new C,Qn=new Hi,an=new ae,Ji=new C,Ri=new C,$l=new C,Zl=new Hi,qo=new C(1,0,0),Yo=new C(0,1,0),Ko=new C(0,0,1),$o={type:"added"},Jl={type:"removed"},ti={type:"childadded",child:null},Vs={type:"childremoved",child:null};class ge extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new C,e=new nn,n=new Hi,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new zt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(t,e){return Qn.setFromAxisAngle(t,e),this.quaternion.premultiply(Qn),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(Ko,t)}translateOnAxis(t,e){return jo.copy(t).applyQuaternion(this.quaternion),this.position.add(jo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(Ko,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ri,Ji,this.up):an.lookAt(Ji,Ri,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),Qn.setFromRotationMatrix(an),this.quaternion.premultiply(Qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($o),ti.child=t,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jl),Vs.child=t,this.dispatchEvent(Vs),Vs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($o),ti.child=t,this.dispatchEvent(ti),ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,$l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Zl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ge.DEFAULT_UP=new C(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new C,cn=new C,Ws=new C,ln=new C,ei=new C,ni=new C,Zo=new C,Xs=new C,js=new C,qs=new C,Ys=new Jt,Ks=new Jt,$s=new Jt;class qe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),je.subVectors(t,e),s.cross(je);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){je.subVectors(s,e),cn.subVectors(n,e),Ws.subVectors(t,e);const o=je.dot(je),a=je.dot(cn),c=je.dot(Ws),l=cn.dot(cn),u=cn.dot(Ws),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ys.setScalar(0),Ks.setScalar(0),$s.setScalar(0),Ys.fromBufferAttribute(t,e),Ks.fromBufferAttribute(t,n),$s.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ys,r.x),o.addScaledVector(Ks,r.y),o.addScaledVector($s,r.z),o}static isFrontFacing(t,e,n,s){return je.subVectors(n,e),cn.subVectors(t,e),je.cross(cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),je.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return qe.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ei.subVectors(s,n),ni.subVectors(r,n),Xs.subVectors(t,n);const c=ei.dot(Xs),l=ni.dot(Xs);if(c<=0&&l<=0)return e.copy(n);js.subVectors(t,s);const u=ei.dot(js),h=ni.dot(js);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(ei,o);qs.subVectors(t,r);const p=ei.dot(qs),g=ni.dot(qs);if(g>=0&&p<=g)return e.copy(r);const x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ni,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Zo.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(Zo,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(ei,o).addScaledVector(ni,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Qi={h:0,s:0,l:0};function Zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=mo(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zs(o,r,t+1/3),this.g=Zs(o,r,t),this.b=Zs(o,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=oc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=dn(t.r),this.g=dn(t.g),this.b=dn(t.b),this}copyLinearToSRGB(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return qt.workingToColorSpace(we.copy(this),t),Math.round(Vt(we.r*255,0,255))*65536+Math.round(Vt(we.g*255,0,255))*256+Math.round(Vt(we.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=Ue){qt.workingToColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(Qi);const n=Ii(yn.h,Qi.h,e),s=Ii(yn.s,Qi.s,e),r=Ii(yn.l,Qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Nt;Nt.NAMES=oc;let Ql=0;class Ei extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=ui,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=gr,this.blendEquation=On,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qn,this.stencilZFail=qn,this.stencilZPass=qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==gr&&(n.blendDst=this.blendDst),this.blendEquation!==On&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pn extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new C,ts=new Ht;let th=0;class Be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:th++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=li(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=li(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=li(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=li(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=li(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fo&&(t.usage=this.usage),t}}class ac extends Be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cc extends Be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let eh=0;const Ve=new ae,Js=new ge,ii=new C,ke=new Gi,Ci=new Gi,Me=new C;class Ae extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nc(t)?cc:ac)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ii).negate(),this.translate(ii.x,ii.y,ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ci.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(ke.min,Ci.min),ke.expandByPoint(Me),Me.addVectors(ke.max,Ci.max),ke.expandByPoint(Me)):(ke.expandByPoint(Ci.min),ke.expandByPoint(Ci.max))}ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Me.fromBufferAttribute(a,l),c&&(ii.fromBufferAttribute(t,l),Me.add(ii)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new C,c[I]=new C;const l=new C,u=new C,h=new C,d=new Ht,p=new Ht,g=new Ht,x=new C,m=new C;function f(I,M,y){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),a[I].add(x),a[M].add(x),a[y].add(x),c[I].add(m),c[M].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,M=E.length;I<M;++I){const y=E[I],D=y.start,N=y.count;for(let B=D,j=D+N;B<j;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const w=new C,S=new C,R=new C,T=new C;function P(I){R.fromBufferAttribute(s,I),T.copy(R);const M=a[I];w.copy(M),w.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(T,M);const D=S.dot(c[I])<0?-1:1;o.setXYZW(I,w.x,w.y,w.z,D)}for(let I=0,M=E.length;I<M;++I){const y=E[I],D=y.start,N=y.count;for(let B=D,j=D+N;B<j;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new Be(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new ae,Ln=new sc,es=new As,Qo=new C,ns=new C,is=new C,ss=new C,Qs=new C,rs=new C,ta=new C,os=new C;class ht extends ge{constructor(t=new Ae,e=new pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){rs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Qs.fromBufferAttribute(h,t),o?rs.addScaledVector(Qs,u):rs.addScaledVector(Qs.sub(e),u))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(es.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(es,Qo)===null||Ln.origin.distanceToSquared(Qo)>(t.far-t.near)**2))&&(Jo.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Jo),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,R=w;S<R;S+=3){const T=a.getX(S),P=a.getX(S+1),I=a.getX(S+2);s=as(this,f,t,n,l,u,h,T,P,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=as(this,o,t,n,l,u,h,E,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=E,R=w;S<R;S+=3){const T=S,P=S+1,I=S+2;s=as(this,f,t,n,l,u,h,T,P,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const E=m,w=m+1,S=m+2;s=as(this,o,t,n,l,u,h,E,w,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function nh(i,t,e,n,s,r,o,a){let c;if(t.side===Le?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===An,a),c===null)return null;os.copy(a),os.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:i}}function as(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ns),i.getVertexPosition(c,is),i.getVertexPosition(l,ss);const u=nh(i,t,e,n,ns,is,ss,ta);if(u){const h=new C;qe.getBarycoord(ta,ns,is,ss,h),s&&(u.uv=qe.getInterpolatedAttribute(s,a,c,l,h,new Ht)),r&&(u.uv1=qe.getInterpolatedAttribute(r,a,c,l,h,new Ht)),o&&(u.normal=qe.getInterpolatedAttribute(o,a,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new C,materialIndex:0};qe.getNormal(ns,is,ss,d.normal),u.face=d,u.barycoord=h}return u}class oe extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(h,2));function g(x,m,f,E,w,S,R,T,P,I,M){const y=S/P,D=R/I,N=S/2,B=R/2,j=T/2,W=P+1,X=I+1;let Z=0,H=0;const ot=new C;for(let ut=0;ut<X;ut++){const bt=ut*D-B;for(let Bt=0;Bt<W;Bt++){const te=Bt*y-N;ot[x]=te*E,ot[m]=bt*w,ot[f]=j,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=T>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Bt/P),h.push(1-ut/I),Z+=1}}for(let ut=0;ut<I;ut++)for(let bt=0;bt<P;bt++){const Bt=d+bt+W*ut,te=d+bt+W*(ut+1),ie=d+(bt+1)+W*(ut+1),Yt=d+(bt+1)+W*ut;c.push(Bt,te,Yt),c.push(te,ie,Yt),H+=6}a.addGroup(p,H,M),p+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Pe(i){const t={};for(let e=0;e<i.length;e++){const n=vi(i[e]);for(const s in n)t[s]=n[s]}return t}function ih(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function lc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const sh={clone:vi,merge:Pe};var rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rh,this.fragmentShader=oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=ih(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new C,ea=new Ht,na=new Ht;class ze extends hc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Li*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(Li*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,ea,na),e.subVectors(na,ea)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Li*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class ah extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(si,ri,t,e);s.layers=this.layers,this.add(s);const r=new ze(si,ri,t,e);r.layers=this.layers,this.add(r);const o=new ze(si,ri,t,e);o.layers=this.layers,this.add(o);const a=new ze(si,ri,t,e);a.layers=this.layers,this.add(a);const c=new ze(si,ri,t,e);c.layers=this.layers,this.add(c);const l=new ze(si,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uc extends Te{constructor(t=[],e=mi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ch extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new oe(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:wn});r.uniforms.tEquirect.value=e;const o=new ht(s,r),a=e.minFilter;return e.minFilter===Hn&&(e.minFilter=Qe),new ah(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class kt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lh={type:"move"};class tr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lh)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new kt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rs{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(t),this.density=e}clone(){return new Rs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dc extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const er=new C,hh=new C,uh=new zt;class Nn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross(hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||uh.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new As,dh=new Ht(.5,.5),cs=new C;class _o{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=tn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],p=r[7],g=r[8],x=r[9],m=r[10],f=r[11],E=r[12],w=r[13],S=r[14],R=r[15];if(s[0].setComponents(l-o,p-u,f-g,R-E).normalize(),s[1].setComponents(l+o,p+u,f+g,R+E).normalize(),s[2].setComponents(l+a,p+h,f+x,R+w).normalize(),s[3].setComponents(l-a,p-h,f-x,R-w).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,p-d,f-m,R-S).normalize();else if(s[4].setComponents(l-c,p-d,f-m,R-S).normalize(),e===tn)s[5].setComponents(l+c,p+d,f+m,R+S).normalize();else if(e===bs)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(t){In.center.set(0,0,0);const e=dh.distanceTo(t.center);return In.radius=.7071067811865476+e,In.applyMatrix4(t.matrixWorld),this.intersectsSphere(In)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(cs.x=s.normal.x>0?t.max.x:t.min.x,cs.y=s.normal.y>0?t.max.y:t.min.y,cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fc extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ia=new ae,no=new sc,ls=new As,hs=new C;class fh extends ge{constructor(t=new Ae,e=new fc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;ia.copy(s).invert(),no.copy(t.ray).applyMatrix4(ia);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=d,x=p;g<x;g++){const m=l.getX(g);hs.fromBufferAttribute(h,m),sa(hs,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,x=p;g<x;g++)hs.fromBufferAttribute(h,g),sa(hs,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sa(i,t,e,n,s,r,o){const a=no.distanceSqToPoint(i);if(a<e){const c=new C;no.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pc extends Te{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mc extends Te{constructor(t,e,n=Vn,s,r,o,a=Ke,c=Ke,l,u=Ni,h=1){if(u!==Ni&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new go(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class gc extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xo extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new C,u=new Ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const p=n+h/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Se extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;E(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2));function E(){const S=new C,R=new C;let T=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const M=[],y=I/r,D=y*(e-t)+t;for(let N=0;N<=s;N++){const B=N/s,j=B*c+a,W=Math.sin(j),X=Math.cos(j);R.x=D*W,R.y=-y*n+m,R.z=D*X,h.push(R.x,R.y,R.z),S.set(W,P,X).normalize(),d.push(S.x,S.y,S.z),p.push(B,1-y),M.push(g++)}x.push(M)}for(let I=0;I<s;I++)for(let M=0;M<r;M++){const y=x[M][I],D=x[M+1][I],N=x[M+1][I+1],B=x[M][I+1];(t>0||M!==0)&&(u.push(y,D,B),T+=3),(e>0||M!==r-1)&&(u.push(D,N,B),T+=3)}l.addGroup(f,T,0),f+=T}function w(S){const R=g,T=new Ht,P=new C;let I=0;const M=S===!0?t:e,y=S===!0?1:-1;for(let N=1;N<=s;N++)h.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const D=g;for(let N=0;N<=s;N++){const j=N/s*c+a,W=Math.cos(j),X=Math.sin(j);P.x=M*X,P.y=m*y,P.z=M*W,h.push(P.x,P.y,P.z),d.push(0,y,0),T.x=W*.5+.5,T.y=X*.5*y+.5,p.push(T.x,T.y),g++}for(let N=0;N<s;N++){const B=R+N,j=D+N;S===!0?u.push(j,j+1,B):u.push(j+1,j,B),I+=3}l.addGroup(f,I,S===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vo extends Se{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new vo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yo extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const w=new C,S=new C,R=new C;for(let T=0;T<e.length;T+=3)p(e[T+0],w),p(e[T+1],S),p(e[T+2],R),c(w,S,R,E)}function c(E,w,S,R){const T=R+1,P=[];for(let I=0;I<=T;I++){P[I]=[];const M=E.clone().lerp(S,I/T),y=w.clone().lerp(S,I/T),D=T-I;for(let N=0;N<=D;N++)N===0&&I===T?P[I][N]=M:P[I][N]=M.clone().lerp(y,N/D)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const y=Math.floor(M/2);M%2===0?(d(P[I][y+1]),d(P[I+1][y]),d(P[I][y])):(d(P[I][y+1]),d(P[I+1][y+1]),d(P[I+1][y]))}}function l(E){const w=new C;for(let S=0;S<r.length;S+=3)w.x=r[S+0],w.y=r[S+1],w.z=r[S+2],w.normalize().multiplyScalar(E),r[S+0]=w.x,r[S+1]=w.y,r[S+2]=w.z}function u(){const E=new C;for(let w=0;w<r.length;w+=3){E.x=r[w+0],E.y=r[w+1],E.z=r[w+2];const S=m(E)/2/Math.PI+.5,R=f(E)/Math.PI+.5;o.push(S,1-R)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const w=o[E+0],S=o[E+2],R=o[E+4],T=Math.max(w,S,R),P=Math.min(w,S,R);T>.9&&P<.1&&(w<.2&&(o[E+0]+=1),S<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,w){const S=E*3;w.x=t[S+0],w.y=t[S+1],w.z=t[S+2]}function g(){const E=new C,w=new C,S=new C,R=new C,T=new Ht,P=new Ht,I=new Ht;for(let M=0,y=0;M<r.length;M+=9,y+=6){E.set(r[M+0],r[M+1],r[M+2]),w.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),T.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),R.copy(E).add(w).add(S).divideScalar(3);const D=m(R);x(T,y+0,E,D),x(P,y+2,w,D),x(I,y+4,S,D)}}function x(E,w,S,R){R<0&&E.x===1&&(o[w]=E.x-1),S.x===0&&S.z===0&&(o[w]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.vertices,t.indices,t.radius,t.details)}}class Mo extends yo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mo(t.radius,t.detail)}}class mn extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<u;f++){const E=f*d-o;for(let w=0;w<l;w++){const S=w*h-r;g.push(S,-E,0),x.push(0,0,1),m.push(w/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const w=E+l*f,S=E+l*(f+1),R=E+1+l*(f+1),T=E+1+l*f;p.push(w,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}class De extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new C,d=new C,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const E=[],w=f/n;let S=0;f===0&&o===0?S=.5/e:f===n&&c===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const T=R/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+w*a),h.y=t*Math.cos(o+w*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(T+S,1-w),E.push(l++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const w=u[f][E+1],S=u[f][E],R=u[f+1][E],T=u[f+1][E+1];(f!==0||o>0)&&p.push(w,S,T),(f!==n-1||c<Math.PI)&&p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xn extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new C,h=new C,d=new C;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const x=g/s*r,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(x,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class So extends Ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ph extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class mh extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class gh{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const _h=new gh;class Eo{constructor(t){this.manager=t!==void 0?t:_h,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi=new WeakMap;class xh extends Eo{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=nr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let h=oi.get(o);h===void 0&&(h=[],oi.set(o,h)),h.push({onLoad:e,onError:s})}return o}const a=Oi("img");function c(){u(),e&&e(this);const h=oi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}oi.delete(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),nr.remove(`image:${t}`);const d=oi.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(h)}oi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),nr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class vh extends Eo{constructor(t){super(t)}load(t,e,n,s){const r=new Te,o=new xh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Cs extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _c extends Cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ir=new ae,ra=new C,oa=new C;class bo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ra.setFromMatrixPosition(t.matrixWorld),e.position.copy(ra),oa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(oa),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class yh extends bo{constructor(){super(new ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=xi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Mh extends Cs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new yh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const aa=new ae,Pi=new C,sr=new C;class Sh extends bo{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Pi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pi),sr.copy(n.position),sr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sr),n.updateMatrixWorld(),s.makeTranslation(-Pi.x,-Pi.y,-Pi.z),aa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(aa,n.coordinateSystem,n.reversedDepth)}}class yi extends Cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class xc extends hc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Eh extends bo{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vc extends Cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Eh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bh extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function ca(i,t,e,n){const s=wh(n);switch(e){case $a:return i*t;case Ja:return i*t/s.components*s.byteLength;case uo:return i*t/s.components*s.byteLength;case Qa:return i*t*2/s.components*s.byteLength;case fo:return i*t*2/s.components*s.byteLength;case Za:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case po:return i*t*4/s.components*s.byteLength;case ms:case gs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _s:case xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cr:case Dr:return Math.max(i,16)*Math.max(t,8)/4;case Rr:case Pr:return Math.max(i,8)*Math.max(t,8)/2;case Lr:case Ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Br:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case qr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kr:case $r:case Zr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Jr:case Qr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case to:case eo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wh(i){switch(i){case en:case ja:return{byteLength:1,components:1};case Ui:case qa:case Bi:return{byteLength:2,components:1};case lo:case ho:return{byteLength:2,components:4};case Vn:case co:case un:return{byteLength:4,components:1};case Ya:case Ka:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Th(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ph=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$h=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",su=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ru=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,au=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Du=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ou=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ku=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ku=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ju=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ud=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,md=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Md=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Td=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ad=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Id=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Ah,alphahash_pars_fragment:Rh,alphamap_fragment:Ch,alphamap_pars_fragment:Ph,alphatest_fragment:Dh,alphatest_pars_fragment:Lh,aomap_fragment:Ih,aomap_pars_fragment:Uh,batching_pars_vertex:zh,batching_vertex:Nh,begin_vertex:Fh,beginnormal_vertex:Oh,bsdfs:kh,iridescence_fragment:Bh,bumpmap_pars_fragment:Hh,clipping_planes_fragment:Gh,clipping_planes_pars_fragment:Vh,clipping_planes_pars_vertex:Wh,clipping_planes_vertex:Xh,color_fragment:jh,color_pars_fragment:qh,color_pars_vertex:Yh,color_vertex:Kh,common:$h,cube_uv_reflection_fragment:Zh,defaultnormal_vertex:Jh,displacementmap_pars_vertex:Qh,displacementmap_vertex:tu,emissivemap_fragment:eu,emissivemap_pars_fragment:nu,colorspace_fragment:iu,colorspace_pars_fragment:su,envmap_fragment:ru,envmap_common_pars_fragment:ou,envmap_pars_fragment:au,envmap_pars_vertex:cu,envmap_physical_pars_fragment:vu,envmap_vertex:lu,fog_vertex:hu,fog_pars_vertex:uu,fog_fragment:du,fog_pars_fragment:fu,gradientmap_pars_fragment:pu,lightmap_pars_fragment:mu,lights_lambert_fragment:gu,lights_lambert_pars_fragment:_u,lights_pars_begin:xu,lights_toon_fragment:yu,lights_toon_pars_fragment:Mu,lights_phong_fragment:Su,lights_phong_pars_fragment:Eu,lights_physical_fragment:bu,lights_physical_pars_fragment:wu,lights_fragment_begin:Tu,lights_fragment_maps:Au,lights_fragment_end:Ru,logdepthbuf_fragment:Cu,logdepthbuf_pars_fragment:Pu,logdepthbuf_pars_vertex:Du,logdepthbuf_vertex:Lu,map_fragment:Iu,map_pars_fragment:Uu,map_particle_fragment:zu,map_particle_pars_fragment:Nu,metalnessmap_fragment:Fu,metalnessmap_pars_fragment:Ou,morphinstance_vertex:ku,morphcolor_vertex:Bu,morphnormal_vertex:Hu,morphtarget_pars_vertex:Gu,morphtarget_vertex:Vu,normal_fragment_begin:Wu,normal_fragment_maps:Xu,normal_pars_fragment:ju,normal_pars_vertex:qu,normal_vertex:Yu,normalmap_pars_fragment:Ku,clearcoat_normal_fragment_begin:$u,clearcoat_normal_fragment_maps:Zu,clearcoat_pars_fragment:Ju,iridescence_pars_fragment:Qu,opaque_fragment:td,packing:ed,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:sd,dithering_pars_fragment:rd,roughnessmap_fragment:od,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ld,shadowmap_vertex:hd,shadowmask_pars_fragment:ud,skinbase_vertex:dd,skinning_pars_vertex:fd,skinning_vertex:pd,skinnormal_vertex:md,specularmap_fragment:gd,specularmap_pars_fragment:_d,tonemapping_fragment:xd,tonemapping_pars_fragment:vd,transmission_fragment:yd,transmission_pars_fragment:Md,uv_pars_fragment:Sd,uv_pars_vertex:Ed,uv_vertex:bd,worldpos_vertex:wd,background_vert:Td,background_frag:Ad,backgroundCube_vert:Rd,backgroundCube_frag:Cd,cube_vert:Pd,cube_frag:Dd,depth_vert:Ld,depth_frag:Id,distanceRGBA_vert:Ud,distanceRGBA_frag:zd,equirect_vert:Nd,equirect_frag:Fd,linedashed_vert:Od,linedashed_frag:kd,meshbasic_vert:Bd,meshbasic_frag:Hd,meshlambert_vert:Gd,meshlambert_frag:Vd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:jd,meshnormal_frag:qd,meshphong_vert:Yd,meshphong_frag:Kd,meshphysical_vert:$d,meshphysical_frag:Zd,meshtoon_vert:Jd,meshtoon_frag:Qd,points_vert:tf,points_frag:ef,shadow_vert:nf,shadow_frag:sf,sprite_vert:rf,sprite_frag:of},rt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ze={basic:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Pe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Pe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Pe([rt.points,rt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Pe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Pe([rt.common,rt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Pe([rt.sprite,rt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Pe([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Pe([rt.lights,rt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ze.physical={uniforms:Pe([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const us={r:0,b:0,g:0},Un=new nn,af=new ae;function cf(i,t,e,n,s,r,o){const a=new Nt(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function x(w){let S=!1;const R=g(w);R===null?f(a,c):R&&R.isColor&&(f(R,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){const R=g(S);R&&(R.isCubeTexture||R.mapping===Ts)?(u===void 0&&(u=new ht(new oe(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:vi(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Un.copy(S.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(af.makeRotationFromEuler(Un)),u.material.toneMapped=qt.getTransfer(R.colorSpace)!==Zt,(h!==R||d!==R.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new ht(new mn(2,2),new fn({name:"BackgroundMaterial",uniforms:vi(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=qt.getTransfer(R.colorSpace)!==Zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,S){w.getRGB(us,lc(i)),n.buffers.color.setClear(us.r,us.g,us.b,S,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:x,addToRenderList:m,dispose:E}}function lf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,D,N,B,j){let W=!1;const X=h(B,N,D);r!==X&&(r=X,l(r.object)),W=p(y,B,N,j),W&&g(y,B,N,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(y,D,N,B),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,D,N){const B=N.wireframe===!0;let j=n[y.id];j===void 0&&(j={},n[y.id]=j);let W=j[D.id];W===void 0&&(W={},j[D.id]=W);let X=W[B];return X===void 0&&(X=d(c()),W[B]=X),X}function d(y){const D=[],N=[],B=[];for(let j=0;j<e;j++)D[j]=0,N[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:B,object:y,attributes:{},index:null}}function p(y,D,N,B){const j=r.attributes,W=D.attributes;let X=0;const Z=N.getAttributes();for(const H in Z)if(Z[H].location>=0){const ut=j[H];let bt=W[H];if(bt===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),ut===void 0||ut.attribute!==bt||bt&&ut.data!==bt.data)return!0;X++}return r.attributesNum!==X||r.index!==B}function g(y,D,N,B){const j={},W=D.attributes;let X=0;const Z=N.getAttributes();for(const H in Z)if(Z[H].location>=0){let ut=W[H];ut===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const bt={};bt.attribute=ut,ut&&ut.data&&(bt.data=ut.data),j[H]=bt,X++}r.attributes=j,r.attributesNum=X,r.index=B}function x(){const y=r.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function m(y){f(y,0)}function f(y,D){const N=r.newAttributes,B=r.enabledAttributes,j=r.attributeDivisors;N[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),j[y]!==D&&(i.vertexAttribDivisor(y,D),j[y]=D)}function E(){const y=r.newAttributes,D=r.enabledAttributes;for(let N=0,B=D.length;N<B;N++)D[N]!==y[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function w(y,D,N,B,j,W,X){X===!0?i.vertexAttribIPointer(y,D,N,j,W):i.vertexAttribPointer(y,D,N,B,j,W)}function S(y,D,N,B){x();const j=B.attributes,W=N.getAttributes(),X=D.defaultAttributeValues;for(const Z in W){const H=W[Z];if(H.location>=0){let ot=j[Z];if(ot===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const ut=ot.normalized,bt=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;const te=Bt.buffer,ie=Bt.type,Yt=Bt.bytesPerElement,q=ie===i.INT||ie===i.UNSIGNED_INT||ot.gpuType===co;if(ot.isInterleavedBufferAttribute){const J=ot.data,pt=J.stride,Dt=ot.offset;if(J.isInstancedInterleavedBuffer){for(let Et=0;Et<H.locationSize;Et++)f(H.location+Et,J.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Et=0;Et<H.locationSize;Et++)m(H.location+Et);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Et=0;Et<H.locationSize;Et++)w(H.location+Et,bt/H.locationSize,ie,ut,pt*Yt,(Dt+bt/H.locationSize*Et)*Yt,q)}else{if(ot.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)f(H.location+J,ot.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);i.bindBuffer(i.ARRAY_BUFFER,te);for(let J=0;J<H.locationSize;J++)w(H.location+J,bt/H.locationSize,ie,ut,bt*Yt,bt/H.locationSize*J*Yt,q)}}else if(X!==void 0){const ut=X[Z];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(H.location,ut);break;case 3:i.vertexAttrib3fv(H.location,ut);break;case 4:i.vertexAttrib4fv(H.location,ut);break;default:i.vertexAttrib1fv(H.location,ut)}}}}E()}function R(){I();for(const y in n){const D=n[y];for(const N in D){const B=D[N];for(const j in B)u(B[j].object),delete B[j];delete D[N]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const N in D){const B=D[N];for(const j in B)u(B[j].object),delete B[j];delete D[N]}delete n[y.id]}function P(y){for(const D in n){const N=n[D];if(N[y.id]===void 0)continue;const B=N[y.id];for(const j in B)u(B[j].object),delete B[j];delete N[y.id]}}function I(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function hf(i,t,e){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function uf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Ye&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==en&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==un&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:R,maxSamples:T}}function df(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Nn,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,w=E*4;let S=f.clippingState||null;c.value=S,S=u(g,d,w,p);for(let R=0;R!==w;++R)S[R]=e[R];f.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const f=p+x*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,S=p;w!==x;++w,S+=4)o.copy(h[w]).applyMatrix4(E,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ff(i){let t=new WeakMap;function e(o,a){return a===br?o.mapping=mi:a===wr&&(o.mapping=gi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===wr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ch(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const hi=4,la=[.125,.215,.35,.446,.526,.582],kn=20,rr=new xc,ha=new Nt;let or=null,ar=0,cr=0,lr=!1;const Fn=(1+Math.sqrt(5))/2,ai=1/Fn,ua=[new C(-Fn,ai,0),new C(Fn,ai,0),new C(-ai,0,Fn),new C(ai,0,Fn),new C(0,Fn,-ai),new C(0,Fn,ai),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],pf=new C;class da{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=pf}=r;or=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(or,ar,cr),this._renderer.xr.enabled=lr,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),or=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Bi,format:Ye,colorSpace:_i,depthBuffer:!1},s=fa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(r)),this._blurMaterial=gf(r,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,rr)}_sceneToCubeUV(t,e,n,s,r){const c=new ze(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ha),h.toneMapping=Tn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const x=new pn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new ht(new oe,x);let f=!1;const E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,f=!0):(x.color.copy(ha),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[w],r.y,r.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[w]));const R=this._cubeSize;ds(s,S*R,w>2?R:0,R,R),h.setRenderTarget(s),f&&h.render(m,c),h.render(t,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===mi||t.mapping===gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pa());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ua[(s-r-1)%ua.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ht(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const f=[];let E=0;for(let P=0;P<kn;++P){const I=P/x,M=Math.exp(-I*I/2);f.push(M),P===0?E+=M:P<m&&(E+=2*M)}for(let P=0;P<f.length;P++)f[P]=f[P]/E;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const S=this._sizeLods[s],R=3*S*(s>w-hi?s-w+hi:0),T=4*(this._cubeSize-S);ds(e,R,T,3*S,2*S),c.setRenderTarget(e),c.render(h,rr)}}function mf(i){const t=[],e=[],n=[];let s=i;const r=i-hi+1+la.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-hi?c=la[o-i+hi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,x=3,m=2,f=1,E=new Float32Array(x*g*p),w=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,I=T>2?0:-1,M=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(M,x*g*T),w.set(d,m*g*T);const y=[T,T,T,T,T,T];S.set(y,f*g*T)}const R=new Ae;R.setAttribute("position",new Be(E,x)),R.setAttribute("uv",new Be(w,m)),R.setAttribute("faceIndex",new Be(S,f)),t.push(R),s>hi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fa(i,t,e){const n=new Wn(i,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gf(i,t,e){const n=new Float32Array(kn),s=new C(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function pa(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ma(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _f(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===br||c===wr,u=c===mi||c===gi;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new da(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return l&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new da(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vf(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let w=0,S=E.length;w<S;w+=3){const R=E[w+0],T=E[w+1],P=E[w+2];d.push(R,T,T,P,P,R)}}else if(g!==void 0){const E=g.array;x=g.version;for(let w=0,S=E.length/3-1;w<S;w+=3){const R=w+0,T=w+1,P=w+2;d.push(R,T,T,P,P,R)}}else return;const m=new(nc(d)?cc:ac)(d,1);m.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function yf(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function l(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*x[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Mf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sf(i,t,e){const n=new WeakMap,s=new Jt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,T=1;R>t.maxTextureSize&&(T=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*T*4*h),I=new ic(P,R,T,h);I.type=un,I.needsUpdate=!0;const M=S*4;for(let D=0;D<h;D++){const N=f[D],B=E[D],j=w[D],W=R*T*4*D;for(let X=0;X<N.count;X++){const Z=X*M;g===!0&&(s.fromBufferAttribute(N,X),P[W+Z+0]=s.x,P[W+Z+1]=s.y,P[W+Z+2]=s.z,P[W+Z+3]=0),x===!0&&(s.fromBufferAttribute(B,X),P[W+Z+4]=s.x,P[W+Z+5]=s.y,P[W+Z+6]=s.z,P[W+Z+7]=0),m===!0&&(s.fromBufferAttribute(j,X),P[W+Z+8]=s.x,P[W+Z+9]=s.y,P[W+Z+10]=s.z,P[W+Z+11]=j.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Ht(R,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ef(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Mc=new Te,ga=new mc(1,1),Sc=new ic,Ec=new Xl,bc=new uc,_a=[],xa=[],va=new Float32Array(16),ya=new Float32Array(9),Ma=new Float32Array(4);function bi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=_a[s];if(r===void 0&&(r=new Float32Array(s),_a[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ps(i,t){let e=xa[t];e===void 0&&(e=new Int32Array(t),xa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function bf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Rf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Ma.set(n),i.uniformMatrix2fv(this.addr,!1,Ma),ve(e,n)}}function Cf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;ya.set(n),i.uniformMatrix3fv(this.addr,!1,ya),ve(e,n)}}function Pf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;va.set(n),i.uniformMatrix4fv(this.addr,!1,va),ve(e,n)}}function Df(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function If(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function zf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Nf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Ff(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function kf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ga.compareFunction=ec,r=ga):r=Mc,e.setTexture2D(t||r,s)}function Bf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ec,s)}function Hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bc,s)}function Gf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sc,s)}function Vf(i){switch(i){case 5126:return bf;case 35664:return wf;case 35665:return Tf;case 35666:return Af;case 35674:return Rf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return Lf;case 35668:case 35672:return If;case 35669:case 35673:return Uf;case 5125:return zf;case 36294:return Nf;case 36295:return Ff;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return kf;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return Gf}}function Wf(i,t){i.uniform1fv(this.addr,t)}function Xf(i,t){const e=bi(t,this.size,2);i.uniform2fv(this.addr,e)}function jf(i,t){const e=bi(t,this.size,3);i.uniform3fv(this.addr,e)}function qf(i,t){const e=bi(t,this.size,4);i.uniform4fv(this.addr,e)}function Yf(i,t){const e=bi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kf(i,t){const e=bi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $f(i,t){const e=bi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zf(i,t){i.uniform1iv(this.addr,t)}function Jf(i,t){i.uniform2iv(this.addr,t)}function Qf(i,t){i.uniform3iv(this.addr,t)}function tp(i,t){i.uniform4iv(this.addr,t)}function ep(i,t){i.uniform1uiv(this.addr,t)}function np(i,t){i.uniform2uiv(this.addr,t)}function ip(i,t){i.uniform3uiv(this.addr,t)}function sp(i,t){i.uniform4uiv(this.addr,t)}function rp(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Mc,r[o])}function op(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ec,r[o])}function ap(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||bc,r[o])}function cp(i,t,e){const n=this.cache,s=t.length,r=Ps(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Sc,r[o])}function lp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return jf;case 35666:return qf;case 35674:return Yf;case 35675:return Kf;case 35676:return $f;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return cp}}class hp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vf(e.type)}}class up{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=lp(e.type)}}class dp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const hr=/(\w+)(\])?(\[|\.)?/g;function Sa(i,t){i.seq.push(t),i.map[t.id]=t}function fp(i,t,e){const n=i.name,s=n.length;for(hr.lastIndex=0;;){const r=hr.exec(n),o=hr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Sa(e,l===void 0?new hp(a,i,t):new up(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new dp(a),Sa(e,h)),e=h}}}class vs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fp(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ea(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pp=37297;let mp=0;function gp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ba=new zt;function _p(i){qt._getMatrix(ba,qt.workingColorSpace,i);const t=`mat3( ${ba.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Es:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+gp(i.getShaderSource(t),a)}else return r}function xp(i,t){const e=_p(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function vp(i,t){let e;switch(t){case rl:e="Linear";break;case ol:e="Reinhard";break;case al:e="Cineon";break;case Wa:e="ACESFilmic";break;case ll:e="AgX";break;case hl:e="Neutral";break;case cl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fs=new C;function yp(){qt.getLuminanceCoefficients(fs);const i=fs.x.toFixed(4),t=fs.y.toFixed(4),e=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function Sp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ep(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Di(i){return i!==""}function Ta(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Aa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bp=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(i){return i.replace(bp,Tp)}const wp=new Map;function Tp(i,t){let e=Ot[t];if(e===void 0){const n=wp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const Ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ra(i){return i.replace(Ap,Rp)}function Rp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ca(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Cp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ga?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mi:case gi:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gi:t="ENVMAP_MODE_REFRACTION";break}return t}function Lp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ao:t="ENVMAP_BLENDING_MULTIPLY";break;case il:t="ENVMAP_BLENDING_MIX";break;case sl:t="ENVMAP_BLENDING_ADD";break}return t}function Ip(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Up(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Cp(e),l=Pp(e),u=Dp(e),h=Lp(e),d=Ip(e),p=Mp(e),g=Sp(r),x=s.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Di).join(`
`),f.length>0&&(f+=`
`)):(m=[Ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),f=[Ca(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Tn?"#define TONE_MAPPING":"",e.toneMapping!==Tn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Tn?vp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,xp("linearToOutputTexel",e.outputColorSpace),yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=io(o),o=Ta(o,e),o=Aa(o,e),a=io(a),a=Ta(a,e),a=Aa(a,e),o=Ra(o),a=Ra(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=E+m+o,S=E+f+a,R=Ea(s,s.VERTEX_SHADER,w),T=Ea(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(R)||"",j=s.getShaderInfoLog(T)||"",W=N.trim(),X=B.trim(),Z=j.trim();let H=!0,ot=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,T);else{const ut=wa(s,R,"vertex"),bt=wa(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ut+`
`+bt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||Z==="")&&(ot=!1);ot&&(D.diagnostics={runnable:H,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(R),s.deleteShader(T),I=new vs(s,x),M=Ep(s,x)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,pp)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}let zp=0;class Np{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Fp(t),e.set(t,n)),n}}class Fp{constructor(t){this.id=zp++,this.code=t,this.usedTimes=0}}function Op(i,t,e,n,s,r,o){const a=new rc,c=new Np,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,D,N,B){const j=N.fog,W=B.geometry,X=M.isMeshStandardMaterial?N.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),H=Z&&Z.mapping===Ts?Z.image.height:null,ot=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,bt=ut!==void 0?ut.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let te,ie,Yt,q;if(ot){const Kt=Ze[ot];te=Kt.vertexShader,ie=Kt.fragmentShader}else te=M.vertexShader,ie=M.fragmentShader,c.update(M),Yt=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const J=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Dt=B.isInstancedMesh===!0,Et=B.isBatchedMesh===!0,Wt=!!M.map,Ee=!!M.matcap,A=!!Z,se=!!M.aoMap,It=!!M.lightMap,Ct=!!M.bumpMap,_t=!!M.normalMap,re=!!M.displacementMap,xt=!!M.emissiveMap,Ft=!!M.metalnessMap,ye=!!M.roughnessMap,de=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,V=M.sheen>0,$=M.transmission>0,G=de&&!!M.anisotropyMap,St=b&&!!M.clearcoatMap,it=b&&!!M.clearcoatNormalMap,vt=b&&!!M.clearcoatRoughnessMap,yt=F&&!!M.iridescenceMap,et=F&&!!M.iridescenceThicknessMap,lt=V&&!!M.sheenColorMap,Rt=V&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,at=!!M.specularColorMap,Ut=!!M.specularIntensityMap,L=$&&!!M.transmissionMap,nt=$&&!!M.thicknessMap,st=!!M.gradientMap,ft=!!M.alphaMap,Q=M.alphaTest>0,Y=!!M.alphaHash,gt=!!M.extensions;let Lt=Tn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Lt=i.toneMapping);const ee={shaderID:ot,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:ie,defines:M.defines,customVertexShaderID:Yt,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Et,batchingColor:Et&&B._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&B.instanceColor!==null,instancingMorph:Dt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:_i,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:Ee,envMap:A,envMapMode:A&&Z.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:It,bumpMap:Ct,normalMap:_t,displacementMap:d&&re,emissiveMap:xt,normalMapObjectSpace:_t&&M.normalMapType===pl,normalMapTangentSpace:_t&&M.normalMapType===tc,metalnessMap:Ft,roughnessMap:ye,anisotropy:de,anisotropyMap:G,clearcoat:b,clearcoatMap:St,clearcoatNormalMap:it,clearcoatRoughnessMap:vt,dispersion:_,iridescence:F,iridescenceMap:yt,iridescenceThicknessMap:et,sheen:V,sheenColorMap:lt,sheenRoughnessMap:Rt,specularMap:Mt,specularColorMap:at,specularIntensityMap:Ut,transmission:$,transmissionMap:L,thicknessMap:nt,gradientMap:st,opaque:M.transparent===!1&&M.blending===ui&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:Q,alphaHash:Y,combine:M.combine,mapUv:Wt&&x(M.map.channel),aoMapUv:se&&x(M.aoMap.channel),lightMapUv:It&&x(M.lightMap.channel),bumpMapUv:Ct&&x(M.bumpMap.channel),normalMapUv:_t&&x(M.normalMap.channel),displacementMapUv:re&&x(M.displacementMap.channel),emissiveMapUv:xt&&x(M.emissiveMap.channel),metalnessMapUv:Ft&&x(M.metalnessMap.channel),roughnessMapUv:ye&&x(M.roughnessMap.channel),anisotropyMapUv:G&&x(M.anisotropyMap.channel),clearcoatMapUv:St&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(M.sheenRoughnessMap.channel),specularMapUv:Mt&&x(M.specularMap.channel),specularColorMapUv:at&&x(M.specularColorMap.channel),specularIntensityMapUv:Ut&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:nt&&x(M.thicknessMap.channel),alphaMapUv:ft&&x(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||de),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Wt||ft),fog:!!j,useFog:M.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:xt&&M.emissiveMap.isVideoTexture===!0&&qt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Je,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:gt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&M.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ee.vertexUv1s=l.has(1),ee.vertexUv2s=l.has(2),ee.vertexUv3s=l.has(3),l.clear(),ee}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(E(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const y=g[M.type];let D;if(y){const N=Ze[y];D=sh.clone(N.uniforms)}else D=M.uniforms;return D}function R(M,y){let D;for(let N=0,B=u.length;N<B;N++){const j=u[N];if(j.cacheKey===y){D=j,++D.usedTimes;break}}return D===void 0&&(D=new Up(i,y,M,r),u.push(D)),D}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function P(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:I}}function kp(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Pa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Da(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function a(h,d,p,g,x,m){const f=o(h,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(h,d,p,g,x,m){const f=o(h,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(h,d){e.length>1&&e.sort(h||Bp),n.length>1&&n.sort(d||Pa),s.length>1&&s.sort(d||Pa)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Hp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Da,i.set(n,[o])):s>=r.length?(o=new Da,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Nt};break;case"SpotLight":e={position:new C,direction:new C,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function Vp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wp=0;function Xp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jp(i){const t=new Gp,e=Vp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new ae,o=new ae;function a(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,E=0,w=0,S=0,R=0,T=0,P=0;l.sort(Xp);for(let M=0,y=l.length;M<y;M++){const D=l[M],N=D.color,B=D.intensity,j=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=N.r*B,h+=N.g*B,d+=N.b*B;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],B);P++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=X,p++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(N).multiplyScalar(B),X.distance=j,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[x]=X;const Z=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,Z.updateMatrices(D),D.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=W,S++}x++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(N).multiplyScalar(B),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const Z=D.shadow,H=e.get(D);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,w++}n.point[g]=X,g++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(B),X.groundColor.copy(D.groundColor).multiplyScalar(B),n.hemi[f]=X,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==w||I.numSpotShadows!==S||I.numSpotMaps!==R||I.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=w,I.numSpotShadows=S,I.numSpotMaps=R,I.numLightProbes=P,n.version=Wp++)}function c(l,u){let h=0,d=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const w=l[f];if(w.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(w.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function La(i){const t=new jp(i),e=[],n=[];function s(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qp(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new La(i),t.set(s,[a])):r>=o.length?(a=new La(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Yp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $p(i,t,e){let n=new _o;const s=new Ht,r=new Ht,o=new Jt,a=new ph({depthPacking:fl}),c=new mh,l={},u=e.maxTextureSize,h={[An]:Le,[Le]:An,[Je]:Je},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Yp,fragmentShader:Kp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ht(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ga;let f=this.type;this.render=function(T,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(wn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==hn&&this.type===hn,j=f===hn&&this.type!==hn;for(let W=0,X=T.length;W<X;W++){const Z=T[W],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();if(s.multiply(ot),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,H.mapSize.y=r.y)),H.map===null||B===!0||j===!0){const bt=this.type!==hn?{minFilter:Ke,magFilter:Ke}:{};H.map!==null&&H.map.dispose(),H.map=new Wn(s.x,s.y,bt),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ut=H.getViewportCount();for(let bt=0;bt<ut;bt++){const Bt=H.getViewport(bt);o.set(r.x*Bt.x,r.y*Bt.y,r.x*Bt.z,r.y*Bt.w),N.viewport(o),H.updateMatrices(Z,bt),n=H.getFrustum(),S(P,I,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===hn&&E(H,I),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,D)};function E(T,P){const I=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,I,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,I,p,x,null)}function w(T,P,I,M){let y=null;const D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=y.uuid,B=P.uuid;let j=l[N];j===void 0&&(j={},l[N]=j);let W=j[B];W===void 0&&(W=y.clone(),j[B]=W,P.addEventListener("dispose",R)),y=W}if(y.visible=P.visible,y.wireframe=P.wireframe,M===hn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:h[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=I}return y}function S(T,P,I,M,y){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===hn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const B=t.update(T),j=T.material;if(Array.isArray(j)){const W=B.groups;for(let X=0,Z=W.length;X<Z;X++){const H=W[X],ot=j[H.materialIndex];if(ot&&ot.visible){const ut=w(T,ot,M,y);T.onBeforeShadow(i,T,P,I,B,ut,H),i.renderBufferDirect(I,null,B,ut,T,H),T.onAfterShadow(i,T,P,I,B,ut,H)}}}else if(j.visible){const W=w(T,j,M,y);T.onBeforeShadow(i,T,P,I,B,W,null),i.renderBufferDirect(I,null,B,W,T,null),T.onAfterShadow(i,T,P,I,B,W,null)}}const N=T.children;for(let B=0,j=N.length;B<j;B++)S(N[B],P,I,M,y)}function R(T){T.target.removeEventListener("dispose",R);for(const I in l){const M=l[I],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Zp={[_r]:xr,[vr]:Sr,[yr]:Er,[pi]:Mr,[xr]:_r,[Sr]:vr,[Er]:yr,[Mr]:pi};function Jp(i,t){function e(){let L=!1;const nt=new Jt;let st=null;const ft=new Jt(0,0,0,0);return{setMask:function(Q){st!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),st=Q)},setLocked:function(Q){L=Q},setClear:function(Q,Y,gt,Lt,ee){ee===!0&&(Q*=Lt,Y*=Lt,gt*=Lt),nt.set(Q,Y,gt,Lt),ft.equals(nt)===!1&&(i.clearColor(Q,Y,gt,Lt),ft.copy(nt))},reset:function(){L=!1,st=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,nt=!1,st=null,ft=null,Q=null;return{setReversed:function(Y){if(nt!==Y){const gt=t.get("EXT_clip_control");Y?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=Y;const Lt=Q;Q=null,this.setClear(Lt)}},getReversed:function(){return nt},setTest:function(Y){Y?J(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Y){st!==Y&&!L&&(i.depthMask(Y),st=Y)},setFunc:function(Y){if(nt&&(Y=Zp[Y]),ft!==Y){switch(Y){case _r:i.depthFunc(i.NEVER);break;case xr:i.depthFunc(i.ALWAYS);break;case vr:i.depthFunc(i.LESS);break;case pi:i.depthFunc(i.LEQUAL);break;case yr:i.depthFunc(i.EQUAL);break;case Mr:i.depthFunc(i.GEQUAL);break;case Sr:i.depthFunc(i.GREATER);break;case Er:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=Y}},setLocked:function(Y){L=Y},setClear:function(Y){Q!==Y&&(nt&&(Y=1-Y),i.clearDepth(Y),Q=Y)},reset:function(){L=!1,st=null,ft=null,Q=null,nt=!1}}}function s(){let L=!1,nt=null,st=null,ft=null,Q=null,Y=null,gt=null,Lt=null,ee=null;return{setTest:function(Kt){L||(Kt?J(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(Kt){nt!==Kt&&!L&&(i.stencilMask(Kt),nt=Kt)},setFunc:function(Kt,sn,$e){(st!==Kt||ft!==sn||Q!==$e)&&(i.stencilFunc(Kt,sn,$e),st=Kt,ft=sn,Q=$e)},setOp:function(Kt,sn,$e){(Y!==Kt||gt!==sn||Lt!==$e)&&(i.stencilOp(Kt,sn,$e),Y=Kt,gt=sn,Lt=$e)},setLocked:function(Kt){L=Kt},setClear:function(Kt){ee!==Kt&&(i.clearStencil(Kt),ee=Kt)},reset:function(){L=!1,nt=null,st=null,ft=null,Q=null,Y=null,gt=null,Lt=null,ee=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,w=null,S=null,R=null,T=null,P=new Nt(0,0,0),I=0,M=!1,y=null,D=null,N=null,B=null,j=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Z>=2);let ot=null,ut={};const bt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),te=new Jt().fromArray(bt),ie=new Jt().fromArray(Bt);function Yt(L,nt,st,ft){const Q=new Uint8Array(4),Y=i.createTexture();i.bindTexture(L,Y),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<st;gt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(nt+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Y}const q={};q[i.TEXTURE_2D]=Yt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(pi),Ct(!1),_t(Lo),J(i.CULL_FACE),se(wn);function J(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function pt(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Dt(L,nt){return h[L]!==nt?(i.bindFramebuffer(L,nt),h[L]=nt,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=nt),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function Et(L,nt){let st=p,ft=!1;if(L){st=d.get(nt),st===void 0&&(st=[],d.set(nt,st));const Q=L.textures;if(st.length!==Q.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,gt=Q.length;Y<gt;Y++)st[Y]=i.COLOR_ATTACHMENT0+Y;st.length=Q.length,ft=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ft=!0);ft&&i.drawBuffers(st)}function Wt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const Ee={[On]:i.FUNC_ADD,[Bc]:i.FUNC_SUBTRACT,[Hc]:i.FUNC_REVERSE_SUBTRACT};Ee[Gc]=i.MIN,Ee[Vc]=i.MAX;const A={[Wc]:i.ZERO,[Xc]:i.ONE,[jc]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[$c]:i.DST_COLOR,[Yc]:i.DST_ALPHA,[qc]:i.ONE_MINUS_SRC_COLOR,[gr]:i.ONE_MINUS_SRC_ALPHA,[Zc]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA,[Qc]:i.CONSTANT_COLOR,[tl]:i.ONE_MINUS_CONSTANT_COLOR,[el]:i.CONSTANT_ALPHA,[nl]:i.ONE_MINUS_CONSTANT_ALPHA};function se(L,nt,st,ft,Q,Y,gt,Lt,ee,Kt){if(L===wn){x===!0&&(pt(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),L!==kc){if(L!==m||Kt!==M){if((f!==On||S!==On)&&(i.blendEquation(i.FUNC_ADD),f=On,S=On),Kt)switch(L){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case Uo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,w=null,R=null,T=null,P.set(0,0,0),I=0,m=L,M=Kt}return}Q=Q||nt,Y=Y||st,gt=gt||ft,(nt!==f||Q!==S)&&(i.blendEquationSeparate(Ee[nt],Ee[Q]),f=nt,S=Q),(st!==E||ft!==w||Y!==R||gt!==T)&&(i.blendFuncSeparate(A[st],A[ft],A[Y],A[gt]),E=st,w=ft,R=Y,T=gt),(Lt.equals(P)===!1||ee!==I)&&(i.blendColor(Lt.r,Lt.g,Lt.b,ee),P.copy(Lt),I=ee),m=L,M=!1}function It(L,nt){L.side===Je?pt(i.CULL_FACE):J(i.CULL_FACE);let st=L.side===Le;nt&&(st=!st),Ct(st),L.blending===ui&&L.transparent===!1?se(wn):se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ft=L.stencilWrite;a.setTest(ft),ft&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function _t(L){L!==Fc?(J(i.CULL_FACE),L!==D&&(L===Lo?i.cullFace(i.BACK):L===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=L}function re(L){L!==N&&(X&&i.lineWidth(L),N=L)}function xt(L,nt,st){L?(J(i.POLYGON_OFFSET_FILL),(B!==nt||j!==st)&&(i.polygonOffset(nt,st),B=nt,j=st)):pt(i.POLYGON_OFFSET_FILL)}function Ft(L){L?J(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function ye(L){L===void 0&&(L=i.TEXTURE0+W-1),ot!==L&&(i.activeTexture(L),ot=L)}function de(L,nt,st){st===void 0&&(ot===null?st=i.TEXTURE0+W-1:st=ot);let ft=ut[st];ft===void 0&&(ft={type:void 0,texture:void 0},ut[st]=ft),(ft.type!==L||ft.texture!==nt)&&(ot!==st&&(i.activeTexture(st),ot=st),i.bindTexture(L,nt||q[L]),ft.type=L,ft.texture=nt)}function b(){const L=ut[ot];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(L){te.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function Rt(L){ie.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Mt(L,nt){let st=l.get(nt);st===void 0&&(st=new WeakMap,l.set(nt,st));let ft=st.get(L);ft===void 0&&(ft=i.getUniformBlockIndex(nt,L.name),st.set(L,ft))}function at(L,nt){const ft=l.get(nt).get(L);c.get(nt)!==ft&&(i.uniformBlockBinding(nt,ft,L.__bindingPointIndex),c.set(nt,ft))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ot=null,ut={},h={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,E=null,w=null,S=null,R=null,T=null,P=new Nt(0,0,0),I=0,M=!1,y=null,D=null,N=null,B=null,j=null,te.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pt,bindFramebuffer:Dt,drawBuffers:Et,useProgram:Wt,setBlending:se,setMaterial:It,setFlipSided:Ct,setCullFace:_t,setLineWidth:re,setPolygonOffset:xt,setScissorTest:Ft,activeTexture:ye,bindTexture:de,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:yt,texImage3D:et,updateUBOMapping:Mt,uniformBlockBinding:at,texStorage2D:it,texStorage3D:vt,texSubImage2D:V,texSubImage3D:$,compressedTexSubImage2D:G,compressedTexSubImage3D:St,scissor:lt,viewport:Rt,reset:Ut}}function Qp(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):Oi("canvas")}function x(b,_,F){let V=1;const $=de(b);if(($.width>F||$.height>F)&&(V=F/Math.max($.width,$.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const G=Math.floor(V*$.width),St=Math.floor(V*$.height);h===void 0&&(h=g(G,St));const it=_?g(G,St):h;return it.width=G,it.height=St,it.getContext("2d").drawImage(b,0,0,G,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+G+"x"+St+")."),it}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,_,F,V,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let G=_;if(_===i.RED&&(F===i.FLOAT&&(G=i.R32F),F===i.HALF_FLOAT&&(G=i.R16F),F===i.UNSIGNED_BYTE&&(G=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.R8UI),F===i.UNSIGNED_SHORT&&(G=i.R16UI),F===i.UNSIGNED_INT&&(G=i.R32UI),F===i.BYTE&&(G=i.R8I),F===i.SHORT&&(G=i.R16I),F===i.INT&&(G=i.R32I)),_===i.RG&&(F===i.FLOAT&&(G=i.RG32F),F===i.HALF_FLOAT&&(G=i.RG16F),F===i.UNSIGNED_BYTE&&(G=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RG8UI),F===i.UNSIGNED_SHORT&&(G=i.RG16UI),F===i.UNSIGNED_INT&&(G=i.RG32UI),F===i.BYTE&&(G=i.RG8I),F===i.SHORT&&(G=i.RG16I),F===i.INT&&(G=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGB8UI),F===i.UNSIGNED_SHORT&&(G=i.RGB16UI),F===i.UNSIGNED_INT&&(G=i.RGB32UI),F===i.BYTE&&(G=i.RGB8I),F===i.SHORT&&(G=i.RGB16I),F===i.INT&&(G=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),F===i.UNSIGNED_INT&&(G=i.RGBA32UI),F===i.BYTE&&(G=i.RGBA8I),F===i.SHORT&&(G=i.RGBA16I),F===i.INT&&(G=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),_===i.RGBA){const St=$?Es:qt.getTransfer(V);F===i.FLOAT&&(G=i.RGBA32F),F===i.HALF_FLOAT&&(G=i.RGBA16F),F===i.UNSIGNED_BYTE&&(G=St===Zt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(b,_){let F;return b?_===null||_===Vn||_===zi?F=i.DEPTH24_STENCIL8:_===un?F=i.DEPTH32F_STENCIL8:_===Ui&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===zi?F=i.DEPTH_COMPONENT24:_===un?F=i.DEPTH_COMPONENT32F:_===Ui&&(F=i.DEPTH_COMPONENT16),F}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ke&&b.minFilter!==Qe?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){const _=b.target;_.removeEventListener("dispose",T),I(_),_.isVideoTexture&&u.delete(_)}function P(b){const _=b.target;_.removeEventListener("dispose",P),y(_)}function I(b){const _=n.get(b);if(_.__webglInit===void 0)return;const F=b.source,V=d.get(F);if(V){const $=V[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(b),Object.keys(V).length===0&&d.delete(F)}n.remove(b)}function M(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const F=b.source,V=d.get(F);delete V[_.__cacheKey],o.memory.textures--}function y(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let $=0;$<_.__webglFramebuffer[V].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[V][$]);else i.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)i.deleteFramebuffer(_.__webglFramebuffer[V]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=b.textures;for(let V=0,$=F.length;V<$;V++){const G=n.get(F[V]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(F[V])}n.remove(b)}let D=0;function N(){D=0}function B(){const b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function j(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function W(b,_){const F=n.get(b);if(b.isVideoTexture&&Ft(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&F.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,b,_);return}}else b.isExternalTexture&&(F.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function X(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Z(b,_){const F=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){q(F,b,_);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(b,_){const F=n.get(b);if(b.version>0&&F.__version!==b.version){J(F,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ot={[Tr]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[Ar]:i.MIRRORED_REPEAT},ut={[Ke]:i.NEAREST,[ul]:i.NEAREST_MIPMAP_NEAREST,[Xi]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Is]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},bt={[ml]:i.NEVER,[Ml]:i.ALWAYS,[gl]:i.LESS,[ec]:i.LEQUAL,[_l]:i.EQUAL,[yl]:i.GEQUAL,[xl]:i.GREATER,[vl]:i.NOTEQUAL};function Bt(b,_){if(_.type===un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Qe||_.magFilter===Is||_.magFilter===Xi||_.magFilter===Hn||_.minFilter===Qe||_.minFilter===Is||_.minFilter===Xi||_.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ot[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ot[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ot[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ut[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ut[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,bt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ke||_.minFilter!==Xi&&_.minFilter!==Hn||_.type===un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(b,_){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));const V=_.source;let $=d.get(V);$===void 0&&($={},d.set(V,$));const G=j(_);if(G!==b.__cacheKey){$[G]===void 0&&($[G]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[G].usedTimes++;const St=$[b.__cacheKey];St!==void 0&&($[b.__cacheKey].usedTimes--,St.usedTimes===0&&M(_)),b.__cacheKey=G,b.__webglTexture=$[G].texture}return F}function ie(b,_,F){return Math.floor(Math.floor(b/F)/_)}function Yt(b,_,F,V){const G=b.updateRanges;if(G.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,V,_.data);else{G.sort((et,lt)=>et.start-lt.start);let St=0;for(let et=1;et<G.length;et++){const lt=G[St],Rt=G[et],Mt=lt.start+lt.count,at=ie(Rt.start,_.width,4),Ut=ie(lt.start,_.width,4);Rt.start<=Mt+1&&at===Ut&&ie(Rt.start+Rt.count-1,_.width,4)===at?lt.count=Math.max(lt.count,Rt.start+Rt.count-lt.start):(++St,G[St]=Rt)}G.length=St+1;const it=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let et=0,lt=G.length;et<lt;et++){const Rt=G[et],Mt=Math.floor(Rt.start/4),at=Math.ceil(Rt.count/4),Ut=Mt%_.width,L=Math.floor(Mt/_.width),nt=at,st=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Ut,L,nt,st,F,V,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,it),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function q(b,_,F){let V=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=i.TEXTURE_3D);const $=te(b,_),G=_.source;e.bindTexture(V,b.__webglTexture,i.TEXTURE0+F);const St=n.get(G);if(G.version!==St.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const it=qt.getPrimaries(qt.workingColorSpace),vt=_.colorSpace===En?null:qt.getPrimaries(_.colorSpace),yt=_.colorSpace===En||it===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let et=x(_.image,!1,s.maxTextureSize);et=ye(_,et);const lt=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type);let Mt=w(_.internalFormat,lt,Rt,_.colorSpace,_.isVideoTexture);Bt(V,_);let at;const Ut=_.mipmaps,L=_.isVideoTexture!==!0,nt=St.__version===void 0||$===!0,st=G.dataReady,ft=R(_,et);if(_.isDepthTexture)Mt=S(_.format===Fi,_.type),nt&&(L?e.texStorage2D(i.TEXTURE_2D,1,Mt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Mt,et.width,et.height,0,lt,Rt,null));else if(_.isDataTexture)if(Ut.length>0){L&&nt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,Ut[0].width,Ut[0].height);for(let Q=0,Y=Ut.length;Q<Y;Q++)at=Ut[Q],L?st&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(i.TEXTURE_2D,Q,Mt,at.width,at.height,0,lt,Rt,at.data);_.generateMipmaps=!1}else L?(nt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,et.width,et.height),st&&Yt(_,et,lt,Rt)):e.texImage2D(i.TEXTURE_2D,0,Mt,et.width,et.height,0,lt,Rt,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,Ut[0].width,Ut[0].height,et.depth);for(let Q=0,Y=Ut.length;Q<Y;Q++)if(at=Ut[Q],_.format!==Ye)if(lt!==null)if(L){if(st)if(_.layerUpdates.size>0){const gt=ca(at.width,at.height,_.format,_.type);for(const Lt of _.layerUpdates){const ee=at.data.subarray(Lt*gt/at.data.BYTES_PER_ELEMENT,(Lt+1)*gt/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Lt,at.width,at.height,1,lt,ee)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,et.depth,lt,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Mt,at.width,at.height,et.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?st&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,et.depth,lt,Rt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Mt,at.width,at.height,et.depth,0,lt,Rt,at.data)}else{L&&nt&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,Ut[0].width,Ut[0].height);for(let Q=0,Y=Ut.length;Q<Y;Q++)at=Ut[Q],_.format!==Ye?lt!==null?L?st&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Mt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?st&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(i.TEXTURE_2D,Q,Mt,at.width,at.height,0,lt,Rt,at.data)}else if(_.isDataArrayTexture)if(L){if(nt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,et.width,et.height,et.depth),st)if(_.layerUpdates.size>0){const Q=ca(et.width,et.height,_.format,_.type);for(const Y of _.layerUpdates){const gt=et.data.subarray(Y*Q/et.data.BYTES_PER_ELEMENT,(Y+1)*Q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,et.width,et.height,1,lt,Rt,gt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,lt,Rt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,et.width,et.height,et.depth,0,lt,Rt,et.data);else if(_.isData3DTexture)L?(nt&&e.texStorage3D(i.TEXTURE_3D,ft,Mt,et.width,et.height,et.depth),st&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,lt,Rt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,et.width,et.height,et.depth,0,lt,Rt,et.data);else if(_.isFramebufferTexture){if(nt)if(L)e.texStorage2D(i.TEXTURE_2D,ft,Mt,et.width,et.height);else{let Q=et.width,Y=et.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,Mt,Q,Y,0,lt,Rt,null),Q>>=1,Y>>=1}}else if(Ut.length>0){if(L&&nt){const Q=de(Ut[0]);e.texStorage2D(i.TEXTURE_2D,ft,Mt,Q.width,Q.height)}for(let Q=0,Y=Ut.length;Q<Y;Q++)at=Ut[Q],L?st&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,lt,Rt,at):e.texImage2D(i.TEXTURE_2D,Q,Mt,lt,Rt,at);_.generateMipmaps=!1}else if(L){if(nt){const Q=de(et);e.texStorage2D(i.TEXTURE_2D,ft,Mt,Q.width,Q.height)}st&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,Rt,et)}else e.texImage2D(i.TEXTURE_2D,0,Mt,lt,Rt,et);m(_)&&f(V),St.__version=G.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function J(b,_,F){if(_.image.length!==6)return;const V=te(b,_),$=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const G=n.get($);if($.version!==G.__version||V===!0){e.activeTexture(i.TEXTURE0+F);const St=qt.getPrimaries(qt.workingColorSpace),it=_.colorSpace===En?null:qt.getPrimaries(_.colorSpace),vt=_.colorSpace===En||St===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const yt=_.isCompressedTexture||_.image[0].isCompressedTexture,et=_.image[0]&&_.image[0].isDataTexture,lt=[];for(let Y=0;Y<6;Y++)!yt&&!et?lt[Y]=x(_.image[Y],!0,s.maxCubemapSize):lt[Y]=et?_.image[Y].image:_.image[Y],lt[Y]=ye(_,lt[Y]);const Rt=lt[0],Mt=r.convert(_.format,_.colorSpace),at=r.convert(_.type),Ut=w(_.internalFormat,Mt,at,_.colorSpace),L=_.isVideoTexture!==!0,nt=G.__version===void 0||V===!0,st=$.dataReady;let ft=R(_,Rt);Bt(i.TEXTURE_CUBE_MAP,_);let Q;if(yt){L&&nt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ut,Rt.width,Rt.height);for(let Y=0;Y<6;Y++){Q=lt[Y].mipmaps;for(let gt=0;gt<Q.length;gt++){const Lt=Q[gt];_.format!==Ye?Mt!==null?L?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,0,0,Lt.width,Lt.height,Mt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,Ut,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,0,0,Lt.width,Lt.height,Mt,at,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt,Ut,Lt.width,Lt.height,0,Mt,at,Lt.data)}}}else{if(Q=_.mipmaps,L&&nt){Q.length>0&&ft++;const Y=de(lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(et){L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,lt[Y].width,lt[Y].height,Mt,at,lt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,lt[Y].width,lt[Y].height,0,Mt,at,lt[Y].data);for(let gt=0;gt<Q.length;gt++){const ee=Q[gt].image[Y].image;L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,0,0,ee.width,ee.height,Mt,at,ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,Ut,ee.width,ee.height,0,Mt,at,ee.data)}}else{L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Mt,at,lt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ut,Mt,at,lt[Y]);for(let gt=0;gt<Q.length;gt++){const Lt=Q[gt];L?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,0,0,Mt,at,Lt.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,gt+1,Ut,Mt,at,Lt.image[Y])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),G.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function pt(b,_,F,V,$,G){const St=r.convert(F.format,F.colorSpace),it=r.convert(F.type),vt=w(F.internalFormat,St,it,F.colorSpace),yt=n.get(_),et=n.get(F);if(et.__renderTarget=_,!yt.__hasExternalTextures){const lt=Math.max(1,_.width>>G),Rt=Math.max(1,_.height>>G);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,G,vt,lt,Rt,_.depth,0,St,it,null):e.texImage2D($,G,vt,lt,Rt,0,St,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),xt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,$,et.__webglTexture,0,re(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,$,et.__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(b,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const V=_.depthTexture,$=V&&V.isDepthTexture?V.type:null,G=S(_.stencilBuffer,$),St=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=re(_);xt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,G,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,G,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,G,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,b)}else{const V=_.textures;for(let $=0;$<V.length;$++){const G=V[$],St=r.convert(G.format,G.colorSpace),it=r.convert(G.type),vt=w(G.internalFormat,St,it,G.colorSpace),yt=re(_);F&&xt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,_.width,_.height):xt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,vt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,vt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=n.get(_.depthTexture);V.__renderTarget=_,(!V.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const $=V.__webglTexture,G=re(_);if(_.depthTexture.format===Ni)xt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===Fi)xt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Wt(b){const _=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",$)};V.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=V}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=b.texture.mipmaps;V&&V.length>0?Et(_.__webglFramebuffer[0],b):Et(_.__webglFramebuffer,b)}else if(F){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=i.createRenderbuffer(),Dt(_.__webglDepthbuffer[V],b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,G)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Dt(_.__webglDepthbuffer,b,!1);else{const $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,G)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(b,_,F){const V=n.get(b);_!==void 0&&pt(V.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Wt(b)}function A(b){const _=b.texture,F=n.get(b),V=n.get(_);b.addEventListener("dispose",P);const $=b.textures,G=b.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=_.version,o.memory.textures++),G){F.__webglFramebuffer=[];for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[it]=[];for(let vt=0;vt<_.mipmaps.length;vt++)F.__webglFramebuffer[it][vt]=i.createFramebuffer()}else F.__webglFramebuffer[it]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let it=0;it<_.mipmaps.length;it++)F.__webglFramebuffer[it]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let it=0,vt=$.length;it<vt;it++){const yt=n.get($[it]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&xt(b)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let it=0;it<$.length;it++){const vt=$[it];F.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[it]);const yt=r.convert(vt.format,vt.colorSpace),et=r.convert(vt.type),lt=w(vt.internalFormat,yt,et,vt.colorSpace,b.isXRRenderTarget===!0),Rt=re(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,lt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,F.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(F.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let it=0;it<6;it++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)pt(F.__webglFramebuffer[it][vt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt);else pt(F.__webglFramebuffer[it],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(_)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,vt=$.length;it<vt;it++){const yt=$[it],et=n.get(yt);let lt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),Bt(lt,yt),pt(F.__webglFramebuffer,b,yt,i.COLOR_ATTACHMENT0+it,lt,0),m(yt)&&f(lt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(it=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,V.__webglTexture),Bt(it,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)pt(F.__webglFramebuffer[vt],b,_,i.COLOR_ATTACHMENT0,it,vt);else pt(F.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,it,0);m(_)&&f(it),e.unbindTexture()}b.depthBuffer&&Wt(b)}function se(b){const _=b.textures;for(let F=0,V=_.length;F<V;F++){const $=_[F];if(m($)){const G=E(b),St=n.get($).__webglTexture;e.bindTexture(G,St),f(G),e.unbindTexture()}}}const It=[],Ct=[];function _t(b){if(b.samples>0){if(xt(b)===!1){const _=b.textures,F=b.width,V=b.height;let $=i.COLOR_BUFFER_BIT;const G=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(b),it=_.length>1;if(it)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const vt=b.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);const et=n.get(_[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,F,V,0,0,F,V,$,i.NEAREST),c===!0&&(It.length=0,Ct.length=0,It.push(i.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(It.push(G),Ct.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);const et=n.get(_[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function re(b){return Math.min(s.maxSamples,b.samples)}function xt(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ft(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function ye(b,_){const F=b.colorSpace,V=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||F!==_i&&F!==En&&(qt.getTransfer(F)===Zt?(V!==Ye||$!==en)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function de(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ee,this.setupRenderTarget=A,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=xt}function tm(i,t){function e(n,s=En){let r;const o=qt.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===lo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ya)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ka)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ja)return i.BYTE;if(n===qa)return i.SHORT;if(n===Ui)return i.UNSIGNED_SHORT;if(n===co)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===$a)return i.ALPHA;if(n===Za)return i.RGB;if(n===Ye)return i.RGBA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Qa)return i.RG;if(n===fo)return i.RG_INTEGER;if(n===po)return i.RGBA_INTEGER;if(n===ms||n===gs||n===_s||n===xs)if(o===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ms)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ms)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_s)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rr||n===Cr||n===Pr||n===Dr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lr||n===Ir||n===Ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lr||n===Ir)return o===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zr||n===Nr||n===Fr||n===Or||n===kr||n===Br||n===Hr||n===Gr||n===Vr||n===Wr||n===Xr||n===jr||n===qr||n===Yr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Br)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yr)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===$r||n===Zr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kr)return o===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$r)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jr||n===Qr||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class im{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new gc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fn({vertexShader:em,fragmentShader:nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sm extends Mi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new im,f={},E=e.getContextAttributes();let w=null,S=null;const R=[],T=[],P=new Ht;let I=null;const M=new ze;M.viewport=new Jt;const y=new ze;y.viewport=new Jt;const D=[M,y],N=new bh;let B=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=R[q];return J===void 0&&(J=new tr,R[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=R[q];return J===void 0&&(J=new tr,R[q]=J),J.getGripSpace()},this.getHand=function(q){let J=R[q];return J===void 0&&(J=new tr,R[q]=J),J.getHandSpace()};function W(q){const J=T.indexOf(q.inputSource);if(J===-1)return;const pt=R[J];pt!==void 0&&(pt.update(q.inputSource,q.frame,l||o),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let q=0;q<R.length;q++){const J=T[q];J!==null&&(T[q]=null,R[q].disconnect(J))}B=null,j=null,m.reset();for(const q in f)delete f[q];t.setRenderTarget(w),p=null,d=null,h=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?Fi:Ni,Dt=E.stencil?zi:Vn);const Wt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Wn(d.textureWidth,d.textureHeight,{format:Ye,type:en,depthTexture:new mc(d.textureWidth,d.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Wn(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:en,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(q){for(let J=0;J<q.removed.length;J++){const pt=q.removed[J],Dt=T.indexOf(pt);Dt>=0&&(T[Dt]=null,R[Dt].disconnect(pt))}for(let J=0;J<q.added.length;J++){const pt=q.added[J];let Dt=T.indexOf(pt);if(Dt===-1){for(let Wt=0;Wt<R.length;Wt++)if(Wt>=T.length){T.push(pt),Dt=Wt;break}else if(T[Wt]===null){T[Wt]=pt,Dt=Wt;break}if(Dt===-1)break}const Et=R[Dt];Et&&Et.connect(pt)}}const H=new C,ot=new C;function ut(q,J,pt){H.setFromMatrixPosition(J.matrixWorld),ot.setFromMatrixPosition(pt.matrixWorld);const Dt=H.distanceTo(ot),Et=J.projectionMatrix.elements,Wt=pt.projectionMatrix.elements,Ee=Et[14]/(Et[10]-1),A=Et[14]/(Et[10]+1),se=(Et[9]+1)/Et[5],It=(Et[9]-1)/Et[5],Ct=(Et[8]-1)/Et[0],_t=(Wt[8]+1)/Wt[0],re=Ee*Ct,xt=Ee*_t,Ft=Dt/(-Ct+_t),ye=Ft*-Ct;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(Ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Et[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const de=Ee+Ft,b=A+Ft,_=re-ye,F=xt+(Dt-ye),V=se*A/b*de,$=It*A/b*de;q.projectionMatrix.makePerspective(_,F,V,$,de,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function bt(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,pt=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),N.near=y.near=M.near=J,N.far=y.far=M.far=pt,(B!==N.near||j!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,j=N.far),N.layers.mask=q.layers.mask|6,M.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const Dt=q.parent,Et=N.cameras;bt(N,Dt);for(let Wt=0;Wt<Et.length;Wt++)bt(Et[Wt],Dt);Et.length===2?ut(N,M,y):N.projectionMatrix.copy(M.projectionMatrix),Bt(q,N,Dt)};function Bt(q,J,pt){pt===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(q){return f[q]};let te=null;function ie(q,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Dt=!1;pt.length!==N.cameras.length&&(N.cameras.length=0,Dt=!0);for(let A=0;A<pt.length;A++){const se=pt[A];let It=null;if(p!==null)It=p.getViewport(se);else{const _t=h.getViewSubImage(d,se);It=_t.viewport,A===0&&(t.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(S))}let Ct=D[A];Ct===void 0&&(Ct=new ze,Ct.layers.enable(A),Ct.viewport=new Jt,D[A]=Ct),Ct.matrix.fromArray(se.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(se.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(It.x,It.y,It.width,It.height),A===0&&(N.matrix.copy(Ct.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Dt===!0&&N.cameras.push(Ct)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const A=h.getDepthInformation(pt[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let A=0;A<pt.length;A++){const se=pt[A].camera;if(se){let It=f[se];It||(It=new gc,f[se]=It);const Ct=h.getCameraImage(se);It.sourceTexture=Ct}}}}for(let pt=0;pt<R.length;pt++){const Dt=T[pt],Et=R[pt];Dt!==null&&Et!==void 0&&Et.update(Dt,J,l||o)}te&&te(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Yt=new yc;Yt.setAnimationLoop(ie),this.setAnimationLoop=function(q){te=q},this.dispose=function(){}}}const zn=new nn,rm=new ae;function om(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,lc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,w,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Le&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Le&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),w=E.envMap,S=E.envMapRotation;w&&(m.envMap.value=w,zn.copy(S),zn.x*=-1,zn.y*=-1,zn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),m.envMapRotation.value.setFromMatrix4(rm.makeRotationFromEuler(zn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function am(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,w){const S=w.program;n.uniformBlockBinding(E,S)}function l(E,w){let S=s[E.id];S===void 0&&(g(E),S=u(E),s[E.id]=S,E.addEventListener("dispose",m));const R=w.program;n.updateUBOMapping(E,R);const T=t.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function u(E){const w=h();E.__bindingPointIndex=w;const S=i.createBuffer(),R=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=s[E.id],S=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,P=S.length;T<P;T++){const I=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,y=I.length;M<y;M++){const D=I[M];if(p(D,T,M,R)===!0){const N=D.__offset,B=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let W=0;W<B.length;W++){const X=B[W],Z=x(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,N+j,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,w,S,R){const T=E.value,P=w+"_"+S;if(R[P]===void 0)return typeof T=="number"||typeof T=="boolean"?R[P]=T:R[P]=T.clone(),!0;{const I=R[P];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return R[P]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(E){const w=E.uniforms;let S=0;const R=16;for(let P=0,I=w.length;P<I;P++){const M=Array.isArray(w[P])?w[P]:[w[P]];for(let y=0,D=M.length;y<D;y++){const N=M[y],B=Array.isArray(N.value)?N.value:[N.value];for(let j=0,W=B.length;j<W;j++){const X=B[j],Z=x(X),H=S%R,ot=H%Z.boundary,ut=H+ot;S+=ot,ut!==0&&R-ut<Z.storage&&(S+=R-ut),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Z.storage}}}const T=S%R;return T>0&&(S+=R-T),E.__size=S,E.__cache={},this}function x(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class cm{constructor(t={}){const{canvas:e=Ol(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const E=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Ue;let T=0,P=0,I=null,M=-1,y=null;const D=new Jt,N=new Jt;let B=null;const j=new Nt(0);let W=0,X=e.width,Z=e.height,H=1,ot=null,ut=null;const bt=new Jt(0,0,X,Z),Bt=new Jt(0,0,X,Z);let te=!1;const ie=new _o;let Yt=!1,q=!1;const J=new ae,pt=new C,Dt=new Jt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Ee(){return I===null?H:1}let A=n;function se(v,U){return e.getContext(v,U)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${oo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Q,!1),A===null){const U="webgl2";if(A=se(U,v),A===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let It,Ct,_t,re,xt,Ft,ye,de,b,_,F,V,$,G,St,it,vt,yt,et,lt,Rt,Mt,at,Ut;function L(){It=new xf(A),It.init(),Mt=new tm(A,It),Ct=new uf(A,It,t,Mt),_t=new Jp(A,It),Ct.reversedDepthBuffer&&d&&_t.buffers.depth.setReversed(!0),re=new Mf(A),xt=new kp,Ft=new Qp(A,It,_t,xt,Ct,Mt,re),ye=new ff(S),de=new _f(S),b=new Th(A),at=new lf(A,b),_=new vf(A,b,re,at),F=new Ef(A,_,b,re),et=new Sf(A,Ct,Ft),it=new df(xt),V=new Op(S,ye,de,It,Ct,at,it),$=new om(S,xt),G=new Hp,St=new qp(It),yt=new cf(S,ye,de,_t,F,p,c),vt=new $p(S,F,Ct),Ut=new am(A,re,Ct,_t),lt=new hf(A,It,re),Rt=new yf(A,It,re),re.programs=V.programs,S.capabilities=Ct,S.extensions=It,S.properties=xt,S.renderLists=G,S.shadowMap=vt,S.state=_t,S.info=re}L();const nt=new sm(S,A);this.xr=nt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=It.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=It.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(X,Z,!1))},this.getSize=function(v){return v.set(X,Z)},this.setSize=function(v,U,O=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,Z=U,e.width=Math.floor(v*H),e.height=Math.floor(U*H),O===!0&&(e.style.width=v+"px",e.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(X*H,Z*H).floor()},this.setDrawingBufferSize=function(v,U,O){X=v,Z=U,H=O,e.width=Math.floor(v*O),e.height=Math.floor(U*O),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(bt)},this.setViewport=function(v,U,O,k){v.isVector4?bt.set(v.x,v.y,v.z,v.w):bt.set(v,U,O,k),_t.viewport(D.copy(bt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Bt)},this.setScissor=function(v,U,O,k){v.isVector4?Bt.set(v.x,v.y,v.z,v.w):Bt.set(v,U,O,k),_t.scissor(N.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(v){_t.setScissorTest(te=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,O=!0){let k=0;if(v){let z=!1;if(I!==null){const tt=I.texture.format;z=tt===po||tt===fo||tt===uo}if(z){const tt=I.texture.type,ct=tt===en||tt===Vn||tt===Ui||tt===zi||tt===lo||tt===ho,mt=yt.getClearColor(),dt=yt.getClearAlpha(),At=mt.r,Pt=mt.g,wt=mt.b;ct?(g[0]=At,g[1]=Pt,g[2]=wt,g[3]=dt,A.clearBufferuiv(A.COLOR,0,g)):(x[0]=At,x[1]=Pt,x[2]=wt,x[3]=dt,A.clearBufferiv(A.COLOR,0,x))}else k|=A.COLOR_BUFFER_BIT}U&&(k|=A.DEPTH_BUFFER_BIT),O&&(k|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),yt.dispose(),G.dispose(),St.dispose(),xt.dispose(),ye.dispose(),de.dispose(),F.dispose(),at.dispose(),Ut.dispose(),V.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",$e),nt.removeEventListener("sessionend",To),Rn.stop()};function st(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=re.autoReset,U=vt.enabled,O=vt.autoUpdate,k=vt.needsUpdate,z=vt.type;L(),re.autoReset=v,vt.enabled=U,vt.autoUpdate=O,vt.needsUpdate=k,vt.type=z}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){const U=v.target;U.removeEventListener("dispose",Y),gt(U)}function gt(v){Lt(v),xt.remove(v)}function Lt(v){const U=xt.get(v).programs;U!==void 0&&(U.forEach(function(O){V.releaseProgram(O)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,O,k,z,tt){U===null&&(U=Et);const ct=z.isMesh&&z.matrixWorld.determinant()<0,mt=Dc(v,U,O,k,z);_t.setMaterial(k,ct);let dt=O.index,At=1;if(k.wireframe===!0){if(dt=_.getWireframeAttribute(O),dt===void 0)return;At=2}const Pt=O.drawRange,wt=O.attributes.position;let Gt=Pt.start*At,$t=(Pt.start+Pt.count)*At;tt!==null&&(Gt=Math.max(Gt,tt.start*At),$t=Math.min($t,(tt.start+tt.count)*At)),dt!==null?(Gt=Math.max(Gt,0),$t=Math.min($t,dt.count)):wt!=null&&(Gt=Math.max(Gt,0),$t=Math.min($t,wt.count));const he=$t-Gt;if(he<0||he===1/0)return;at.setup(z,k,mt,O,dt);let ne,Qt=lt;if(dt!==null&&(ne=b.get(dt),Qt=Rt,Qt.setIndex(ne)),z.isMesh)k.wireframe===!0?(_t.setLineWidth(k.wireframeLinewidth*Ee()),Qt.setMode(A.LINES)):Qt.setMode(A.TRIANGLES);else if(z.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),_t.setLineWidth(Tt*Ee()),z.isLineSegments?Qt.setMode(A.LINES):z.isLineLoop?Qt.setMode(A.LINE_LOOP):Qt.setMode(A.LINE_STRIP)}else z.isPoints?Qt.setMode(A.POINTS):z.isSprite&&Qt.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Qt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Tt=z._multiDrawStarts,ce=z._multiDrawCounts,jt=z._multiDrawCount,Ne=dt?b.get(dt).bytesPerElement:1,jn=xt.get(k).currentProgram.getUniforms();for(let Fe=0;Fe<jt;Fe++)jn.setValue(A,"_gl_DrawID",Fe),Qt.render(Tt[Fe]/Ne,ce[Fe])}else if(z.isInstancedMesh)Qt.renderInstances(Gt,he,z.count);else if(O.isInstancedBufferGeometry){const Tt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ce=Math.min(O.instanceCount,Tt);Qt.renderInstances(Gt,he,ce)}else Qt.render(Gt,he)};function ee(v,U,O){v.transparent===!0&&v.side===Je&&v.forceSinglePass===!1?(v.side=Le,v.needsUpdate=!0,Wi(v,U,O),v.side=An,v.needsUpdate=!0,Wi(v,U,O),v.side=Je):Wi(v,U,O)}this.compile=function(v,U,O=null){O===null&&(O=v),f=St.get(O),f.init(U),w.push(f),O.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),v!==O&&v.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const k=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const tt=z.material;if(tt)if(Array.isArray(tt))for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];ee(mt,O,z),k.add(mt)}else ee(tt,O,z),k.add(tt)}),f=w.pop(),k},this.compileAsync=function(v,U,O=null){const k=this.compile(v,U,O);return new Promise(z=>{function tt(){if(k.forEach(function(ct){xt.get(ct).currentProgram.isReady()&&k.delete(ct)}),k.size===0){z(v);return}setTimeout(tt,10)}It.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Kt=null;function sn(v){Kt&&Kt(v)}function $e(){Rn.stop()}function To(){Rn.start()}const Rn=new yc;Rn.setAnimationLoop(sn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(v){Kt=v,nt.setAnimationLoop(v),v===null?Rn.stop():Rn.start()},nt.addEventListener("sessionstart",$e),nt.addEventListener("sessionend",To),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,I),f=St.get(v,w.length),f.init(U),w.push(f),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ie.setFromProjectionMatrix(J,tn,U.reversedDepth),q=this.localClippingEnabled,Yt=it.init(this.clippingPlanes,q),m=G.get(v,E.length),m.init(),E.push(m),nt.enabled===!0&&nt.isPresenting===!0){const tt=S.xr.getDepthSensingMesh();tt!==null&&Ds(tt,U,-1/0,S.sortObjects)}Ds(v,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ot,ut),Wt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Wt&&yt.addToRenderList(m,v),this.info.render.frame++,Yt===!0&&it.beginShadows();const O=f.state.shadowsArray;vt.render(O,v,U),Yt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,z=m.transmissive;if(f.setupLights(),U.isArrayCamera){const tt=U.cameras;if(z.length>0)for(let ct=0,mt=tt.length;ct<mt;ct++){const dt=tt[ct];Ro(k,z,v,dt)}Wt&&yt.render(v);for(let ct=0,mt=tt.length;ct<mt;ct++){const dt=tt[ct];Ao(m,v,dt,dt.viewport)}}else z.length>0&&Ro(k,z,v,U),Wt&&yt.render(v),Ao(m,v,U);I!==null&&P===0&&(Ft.updateMultisampleRenderTarget(I),Ft.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(S,v,U),at.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],Yt===!0&&it.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Ds(v,U,O,k){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ie.intersectsSprite(v)){k&&Dt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);const ct=F.update(v),mt=v.material;mt.visible&&m.push(v,ct,mt,O,Dt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ie.intersectsObject(v))){const ct=F.update(v),mt=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Dt.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Dt.copy(ct.boundingSphere.center)),Dt.applyMatrix4(v.matrixWorld).applyMatrix4(J)),Array.isArray(mt)){const dt=ct.groups;for(let At=0,Pt=dt.length;At<Pt;At++){const wt=dt[At],Gt=mt[wt.materialIndex];Gt&&Gt.visible&&m.push(v,ct,Gt,O,Dt.z,wt)}}else mt.visible&&m.push(v,ct,mt,O,Dt.z,null)}}const tt=v.children;for(let ct=0,mt=tt.length;ct<mt;ct++)Ds(tt[ct],U,O,k)}function Ao(v,U,O,k){const z=v.opaque,tt=v.transmissive,ct=v.transparent;f.setupLightsView(O),Yt===!0&&it.setGlobalState(S.clippingPlanes,O),k&&_t.viewport(D.copy(k)),z.length>0&&Vi(z,U,O),tt.length>0&&Vi(tt,U,O),ct.length>0&&Vi(ct,U,O),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Ro(v,U,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Wn(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Bi:en,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[k.id],ct=k.viewport||D;tt.setSize(ct.z*S.transmissionResolutionScale,ct.w*S.transmissionResolutionScale);const mt=S.getRenderTarget(),dt=S.getActiveCubeFace(),At=S.getActiveMipmapLevel();S.setRenderTarget(tt),S.getClearColor(j),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),Wt&&yt.render(O);const Pt=S.toneMapping;S.toneMapping=Tn;const wt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),Yt===!0&&it.setGlobalState(S.clippingPlanes,k),Vi(v,O,k),Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let $t=0,he=U.length;$t<he;$t++){const ne=U[$t],Qt=ne.object,Tt=ne.geometry,ce=ne.material,jt=ne.group;if(ce.side===Je&&Qt.layers.test(k.layers)){const Ne=ce.side;ce.side=Le,ce.needsUpdate=!0,Co(Qt,O,k,Tt,ce,jt),ce.side=Ne,ce.needsUpdate=!0,Gt=!0}}Gt===!0&&(Ft.updateMultisampleRenderTarget(tt),Ft.updateRenderTargetMipmap(tt))}S.setRenderTarget(mt,dt,At),S.setClearColor(j,W),wt!==void 0&&(k.viewport=wt),S.toneMapping=Pt}function Vi(v,U,O){const k=U.isScene===!0?U.overrideMaterial:null;for(let z=0,tt=v.length;z<tt;z++){const ct=v[z],mt=ct.object,dt=ct.geometry,At=ct.group;let Pt=ct.material;Pt.allowOverride===!0&&k!==null&&(Pt=k),mt.layers.test(O.layers)&&Co(mt,U,O,dt,Pt,At)}}function Co(v,U,O,k,z,tt){v.onBeforeRender(S,U,O,k,z,tt),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(S,U,O,k,v,tt),z.transparent===!0&&z.side===Je&&z.forceSinglePass===!1?(z.side=Le,z.needsUpdate=!0,S.renderBufferDirect(O,U,k,z,v,tt),z.side=An,z.needsUpdate=!0,S.renderBufferDirect(O,U,k,z,v,tt),z.side=Je):S.renderBufferDirect(O,U,k,z,v,tt),v.onAfterRender(S,U,O,k,z,tt)}function Wi(v,U,O){U.isScene!==!0&&(U=Et);const k=xt.get(v),z=f.state.lights,tt=f.state.shadowsArray,ct=z.state.version,mt=V.getParameters(v,z.state,tt,U,O),dt=V.getProgramCacheKey(mt);let At=k.programs;k.environment=v.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(v.isMeshStandardMaterial?de:ye).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,At===void 0&&(v.addEventListener("dispose",Y),At=new Map,k.programs=At);let Pt=At.get(dt);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===ct)return Do(v,mt),Pt}else mt.uniforms=V.getUniforms(v),v.onBeforeCompile(mt,S),Pt=V.acquireProgram(mt,dt),At.set(dt,Pt),k.uniforms=mt.uniforms;const wt=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(wt.clippingPlanes=it.uniform),Do(v,mt),k.needsLights=Ic(v),k.lightsStateVersion=ct,k.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMap.value=z.state.directionalShadowMap,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotShadowMap.value=z.state.spotShadowMap,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMap.value=z.state.pointShadowMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Pt,k.uniformsList=null,Pt}function Po(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=vs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Do(v,U){const O=xt.get(v);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Dc(v,U,O,k,z){U.isScene!==!0&&(U=Et),Ft.resetTextureUnits();const tt=U.fog,ct=k.isMeshStandardMaterial?U.environment:null,mt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:_i,dt=(k.isMeshStandardMaterial?de:ye).get(k.envMap||ct),At=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Pt=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),wt=!!O.morphAttributes.position,Gt=!!O.morphAttributes.normal,$t=!!O.morphAttributes.color;let he=Tn;k.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(he=S.toneMapping);const ne=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qt=ne!==void 0?ne.length:0,Tt=xt.get(k),ce=f.state.lights;if(Yt===!0&&(q===!0||v!==y)){const Re=v===y&&k.id===M;it.setState(k,v,Re)}let jt=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ce.state.version||Tt.outputColorSpace!==mt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==dt||k.fog===!0&&Tt.fog!==tt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==it.numPlanes||Tt.numIntersection!==it.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==Pt||Tt.morphTargets!==wt||Tt.morphNormals!==Gt||Tt.morphColors!==$t||Tt.toneMapping!==he||Tt.morphTargetsCount!==Qt)&&(jt=!0):(jt=!0,Tt.__version=k.version);let Ne=Tt.currentProgram;jt===!0&&(Ne=Wi(k,U,z));let jn=!1,Fe=!1,wi=!1;const le=Ne.getUniforms(),He=Tt.uniforms;if(_t.useProgram(Ne.program)&&(jn=!0,Fe=!0,wi=!0),k.id!==M&&(M=k.id,Fe=!0),jn||y!==v){_t.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),le.setValue(A,"projectionMatrix",v.projectionMatrix),le.setValue(A,"viewMatrix",v.matrixWorldInverse);const Ie=le.map.cameraPosition;Ie!==void 0&&Ie.setValue(A,pt.setFromMatrixPosition(v.matrixWorld)),Ct.logarithmicDepthBuffer&&le.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&le.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Fe=!0,wi=!0)}if(z.isSkinnedMesh){le.setOptional(A,z,"bindMatrix"),le.setOptional(A,z,"bindMatrixInverse");const Re=z.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),le.setValue(A,"boneTexture",Re.boneTexture,Ft))}z.isBatchedMesh&&(le.setOptional(A,z,"batchingTexture"),le.setValue(A,"batchingTexture",z._matricesTexture,Ft),le.setOptional(A,z,"batchingIdTexture"),le.setValue(A,"batchingIdTexture",z._indirectTexture,Ft),le.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&le.setValue(A,"batchingColorTexture",z._colorsTexture,Ft));const Ge=O.morphAttributes;if((Ge.position!==void 0||Ge.normal!==void 0||Ge.color!==void 0)&&et.update(z,O,Ne),(Fe||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,le.setValue(A,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(He.envMap.value=dt,He.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(He.envMapIntensity.value=U.environmentIntensity),Fe&&(le.setValue(A,"toneMappingExposure",S.toneMappingExposure),Tt.needsLights&&Lc(He,wi),tt&&k.fog===!0&&$.refreshFogUniforms(He,tt),$.refreshMaterialUniforms(He,k,H,Z,f.state.transmissionRenderTarget[v.id]),vs.upload(A,Po(Tt),He,Ft)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(vs.upload(A,Po(Tt),He,Ft),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&le.setValue(A,"center",z.center),le.setValue(A,"modelViewMatrix",z.modelViewMatrix),le.setValue(A,"normalMatrix",z.normalMatrix),le.setValue(A,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Re=k.uniformsGroups;for(let Ie=0,Ls=Re.length;Ie<Ls;Ie++){const Cn=Re[Ie];Ut.update(Cn,Ne),Ut.bind(Cn,Ne)}}return Ne}function Lc(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Ic(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,U,O){const k=xt.get(v);k.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),xt.get(v.texture).__webglTexture=U,xt.get(v.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:O,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const O=xt.get(v);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0};const Uc=A.createFramebuffer();this.setRenderTarget=function(v,U=0,O=0){I=v,T=U,P=O;let k=!0,z=null,tt=!1,ct=!1;if(v){const dt=xt.get(v);if(dt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(A.FRAMEBUFFER,null),k=!1;else if(dt.__webglFramebuffer===void 0)Ft.setupRenderTarget(v);else if(dt.__hasExternalTextures)Ft.rebindTextures(v,xt.get(v.texture).__webglTexture,xt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const wt=v.depthTexture;if(dt.__boundDepthTexture!==wt){if(wt!==null&&xt.has(wt)&&(v.width!==wt.image.width||v.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(v)}}const At=v.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);const Pt=xt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?z=Pt[U][O]:z=Pt[U],tt=!0):v.samples>0&&Ft.useMultisampledRTT(v)===!1?z=xt.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?z=Pt[O]:z=Pt,D.copy(v.viewport),N.copy(v.scissor),B=v.scissorTest}else D.copy(bt).multiplyScalar(H).floor(),N.copy(Bt).multiplyScalar(H).floor(),B=te;if(O!==0&&(z=Uc),_t.bindFramebuffer(A.FRAMEBUFFER,z)&&k&&_t.drawBuffers(v,z),_t.viewport(D),_t.scissor(N),_t.setScissorTest(B),tt){const dt=xt.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,O)}else if(ct){const dt=U;for(let At=0;At<v.textures.length;At++){const Pt=xt.get(v.textures[At]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+At,Pt.__webglTexture,O,dt)}}else if(v!==null&&O!==0){const dt=xt.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,dt.__webglTexture,O)}M=-1},this.readRenderTargetPixels=function(v,U,O,k,z,tt,ct,mt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt){_t.bindFramebuffer(A.FRAMEBUFFER,dt);try{const At=v.textures[mt],Pt=At.format,wt=At.type;if(!Ct.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-k&&O>=0&&O<=v.height-z&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+mt),A.readPixels(U,O,k,z,Mt.convert(Pt),Mt.convert(wt),tt))}finally{const At=I!==null?xt.get(I).__webglFramebuffer:null;_t.bindFramebuffer(A.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(v,U,O,k,z,tt,ct,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=xt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ct!==void 0&&(dt=dt[ct]),dt)if(U>=0&&U<=v.width-k&&O>=0&&O<=v.height-z){_t.bindFramebuffer(A.FRAMEBUFFER,dt);const At=v.textures[mt],Pt=At.format,wt=At.type;if(!Ct.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Gt),A.bufferData(A.PIXEL_PACK_BUFFER,tt.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+mt),A.readPixels(U,O,k,z,Mt.convert(Pt),Mt.convert(wt),0);const $t=I!==null?xt.get(I).__webglFramebuffer:null;_t.bindFramebuffer(A.FRAMEBUFFER,$t);const he=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await kl(A,he,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Gt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,tt),A.deleteBuffer(Gt),A.deleteSync(he),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,O=0){const k=Math.pow(2,-O),z=Math.floor(v.image.width*k),tt=Math.floor(v.image.height*k),ct=U!==null?U.x:0,mt=U!==null?U.y:0;Ft.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,O,0,0,ct,mt,z,tt),_t.unbindTexture()};const zc=A.createFramebuffer(),Nc=A.createFramebuffer();this.copyTextureToTexture=function(v,U,O=null,k=null,z=0,tt=null){tt===null&&(z!==0?(ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=z,z=0):tt=0);let ct,mt,dt,At,Pt,wt,Gt,$t,he;const ne=v.isCompressedTexture?v.mipmaps[tt]:v.image;if(O!==null)ct=O.max.x-O.min.x,mt=O.max.y-O.min.y,dt=O.isBox3?O.max.z-O.min.z:1,At=O.min.x,Pt=O.min.y,wt=O.isBox3?O.min.z:0;else{const Ge=Math.pow(2,-z);ct=Math.floor(ne.width*Ge),mt=Math.floor(ne.height*Ge),v.isDataArrayTexture?dt=ne.depth:v.isData3DTexture?dt=Math.floor(ne.depth*Ge):dt=1,At=0,Pt=0,wt=0}k!==null?(Gt=k.x,$t=k.y,he=k.z):(Gt=0,$t=0,he=0);const Qt=Mt.convert(U.format),Tt=Mt.convert(U.type);let ce;U.isData3DTexture?(Ft.setTexture3D(U,0),ce=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ft.setTexture2DArray(U,0),ce=A.TEXTURE_2D_ARRAY):(Ft.setTexture2D(U,0),ce=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=A.getParameter(A.UNPACK_ROW_LENGTH),Ne=A.getParameter(A.UNPACK_IMAGE_HEIGHT),jn=A.getParameter(A.UNPACK_SKIP_PIXELS),Fe=A.getParameter(A.UNPACK_SKIP_ROWS),wi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ne.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ne.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,At),A.pixelStorei(A.UNPACK_SKIP_ROWS,Pt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,wt);const le=v.isDataArrayTexture||v.isData3DTexture,He=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Ge=xt.get(v),Re=xt.get(U),Ie=xt.get(Ge.__renderTarget),Ls=xt.get(Re.__renderTarget);_t.bindFramebuffer(A.READ_FRAMEBUFFER,Ie.__webglFramebuffer),_t.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Cn=0;Cn<dt;Cn++)le&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xt.get(v).__webglTexture,z,wt+Cn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xt.get(U).__webglTexture,tt,he+Cn)),A.blitFramebuffer(At,Pt,ct,mt,Gt,$t,ct,mt,A.DEPTH_BUFFER_BIT,A.NEAREST);_t.bindFramebuffer(A.READ_FRAMEBUFFER,null),_t.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||xt.has(v)){const Ge=xt.get(v),Re=xt.get(U);_t.bindFramebuffer(A.READ_FRAMEBUFFER,zc),_t.bindFramebuffer(A.DRAW_FRAMEBUFFER,Nc);for(let Ie=0;Ie<dt;Ie++)le?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ge.__webglTexture,z,wt+Ie):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ge.__webglTexture,z),He?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.__webglTexture,tt,he+Ie):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Re.__webglTexture,tt),z!==0?A.blitFramebuffer(At,Pt,ct,mt,Gt,$t,ct,mt,A.COLOR_BUFFER_BIT,A.NEAREST):He?A.copyTexSubImage3D(ce,tt,Gt,$t,he+Ie,At,Pt,ct,mt):A.copyTexSubImage2D(ce,tt,Gt,$t,At,Pt,ct,mt);_t.bindFramebuffer(A.READ_FRAMEBUFFER,null),_t.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else He?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(ce,tt,Gt,$t,he,ct,mt,dt,Qt,Tt,ne.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(ce,tt,Gt,$t,he,ct,mt,dt,Qt,ne.data):A.texSubImage3D(ce,tt,Gt,$t,he,ct,mt,dt,Qt,Tt,ne):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,tt,Gt,$t,ct,mt,Qt,Tt,ne.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,tt,Gt,$t,ne.width,ne.height,Qt,ne.data):A.texSubImage2D(A.TEXTURE_2D,tt,Gt,$t,ct,mt,Qt,Tt,ne);A.pixelStorei(A.UNPACK_ROW_LENGTH,jt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ne),A.pixelStorei(A.UNPACK_SKIP_PIXELS,jn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Fe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,wi),tt===0&&U.generateMipmaps&&A.generateMipmap(ce),_t.unbindTexture()},this.initRenderTarget=function(v){xt.get(v).__webglFramebuffer===void 0&&Ft.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ft.setTextureCube(v,0):v.isData3DTexture?Ft.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ft.setTexture2DArray(v,0):Ft.setTexture2D(v,0),_t.unbindTexture()},this.resetState=function(){T=0,P=0,I=null,_t.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Ia={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ShiftLeft:"pounce",ShiftRight:"pounce",KeyE:"interact",Enter:"interact",KeyF:"fire",Escape:"pause"};class lm{constructor(t){this.el=t,this.isTouch=matchMedia("(pointer: coarse)").matches,addEventListener("keydown",e=>{const n=Ia[e.code];if(!n){/^Digit[1-4]$/.test(e.code)&&this.edges.add("slot"+e.code.slice(5));return}e.code==="Space"&&e.preventDefault(),this.keys[n]||this.edges.add(n),this.keys[n]=!0}),addEventListener("keyup",e=>{const n=Ia[e.code];n&&(this.keys[n]=!1)}),addEventListener("blur",()=>{Object.keys(this.keys).forEach(e=>this.keys[e]=!1)}),t.addEventListener("pointerdown",e=>this.onDown(e)),t.addEventListener("pointermove",e=>this.onMove(e)),t.addEventListener("pointerup",e=>this.onUp(e)),t.addEventListener("pointercancel",e=>this.onUp(e)),t.addEventListener("wheel",e=>{this.wheelDelta+=Math.sign(e.deltaY)},{passive:!0}),t.addEventListener("contextmenu",e=>{e.preventDefault(),this.edges.add("pounce")}),document.addEventListener("touchmove",e=>e.preventDefault(),{passive:!1})}keys={up:!1,down:!1,left:!1,right:!1,jump:!1,pounce:!1,interact:!1,fire:!1,pause:!1};edges=new Set;wheelDelta=0;mouseDragX=0;dragging=!1;lastX=0;joyId=null;joyStart={x:0,y:0};joyVec={x:0,y:0};touchButtons=new Map;isTouch;setTouchButton(t,e){const n=this.touchButtons.get(t)??!1;e&&!n&&this.edges.add(t),this.touchButtons.set(t,e)}onDown(t){if(this.el.setPointerCapture?.(t.pointerId),this.edges.add("any"),t.pointerType==="touch"&&t.clientX<innerWidth*.45&&this.joyId===null){this.joyId=t.pointerId,this.joyStart={x:t.clientX,y:t.clientY},this.joyVec={x:0,y:0};return}t.pointerType==="mouse"&&t.button===0&&(this.dragging=!0,this.lastX=t.clientX,this.edges.add("fire"))}onMove(t){if(t.pointerId===this.joyId){const e=(t.clientX-this.joyStart.x)/60,n=(t.clientY-this.joyStart.y)/60,s=Math.hypot(e,n),r=s>1?1/s:1;this.joyVec={x:e*r,y:-n*r};return}this.dragging&&(this.mouseDragX+=(t.clientX-this.lastX)/innerWidth,this.lastX=t.clientX),t.pointerType==="touch"&&t.clientX>innerWidth*.5&&(this.mouseDragX+=(t.movementX??0)/innerWidth)}onUp(t){t.pointerId===this.joyId&&(this.joyId=null,this.joyVec={x:0,y:0}),t.pointerType==="mouse"&&(this.dragging=!1)}pollGamepad(t){const e=navigator.getGamepads?.()[0];if(!e)return;const n=r=>Math.abs(r)>.18?r:0;t.moveX+=n(e.axes[0]??0),t.moveY+=-n(e.axes[1]??0),e.buttons[0]?.pressed?(this.gpHeld.has(0)||(t.jumpPressed=!0,this.gpHeld.add(0)),t.jump=!0):this.gpHeld.delete(0);const s=(r,o)=>{e.buttons[r]?.pressed?this.gpHeld.has(r)||(t[o]=!0,this.gpHeld.add(r)):this.gpHeld.delete(r)};s(1,"pounce"),s(2,"interact"),s(5,"fire")}gpHeld=new Set;poll(){let t=(this.keys.right?1:0)-(this.keys.left?1:0),e=(this.keys.up?1:0)-(this.keys.down?1:0);const n=Math.hypot(t,e);n>1&&(t/=n,e/=n),t+=this.joyVec.x,e+=this.joyVec.y;const s={moveX:Math.max(-1,Math.min(1,t)),moveY:Math.max(-1,Math.min(1,e)),jump:this.keys.jump||(this.touchButtons.get("jump")??!1),jumpPressed:this.edges.has("jump"),pounce:this.edges.has("pounce"),interact:this.edges.has("interact"),fire:this.edges.has("fire"),cycle:this.wheelDelta===0?0:Math.sign(this.wheelDelta),camNudge:Math.max(-1,Math.min(1,this.mouseDragX*4)),pause:this.edges.has("pause"),any:this.edges.size>0};return this.pollGamepad(s),this.edges.clear(),this.wheelDelta=0,this.mouseDragX*=.82,s}}const hm="../../assets/sfx/",um="../../music/gluesong.mp3";class dm{constructor(t,e){this.onMuteChange=e,this.muted=t,this.music=new Audio(new URL(um,document.baseURI).href),this.music.loop=!0,this.music.volume=.28,this.music.muted=!0,this.music.play().then(()=>{this.muted||(this.music.muted=!1)}).catch(()=>{});const n=()=>{this.unlocked=!0,this.ensureCtx(),this.muted||(this.music.muted=!1,this.music.play().catch(()=>{})),removeEventListener("pointerdown",n),removeEventListener("keydown",n)};addEventListener("pointerdown",n),addEventListener("keydown",n),document.addEventListener("visibilitychange",()=>{document.hidden?this.music.pause():!this.muted&&this.unlocked&&this.music.play().catch(()=>{})})}ctx=null;buffers=new Map;music;engineOsc=null;engineGain=null;muted;unlocked=!1;ensureCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setMuted(t){this.muted=t,this.music.muted=t,!t&&this.unlocked&&this.music.play().catch(()=>{}),this.engineGain&&(this.engineGain.gain.value=t?0:.05),this.onMuteChange(t)}musicVolume(t){this.music.volume=t}async play(t,e=.5,n=1){if(this.muted||!this.unlocked)return;const s=this.ensureCtx();let r=this.buffers.get(t);if(!r)try{const c=await fetch(new URL(`${hm}${t}.wav`,document.baseURI).href);r=await s.decodeAudioData(await c.arrayBuffer()),this.buffers.set(t,r)}catch{return}const o=s.createBufferSource();o.buffer=r,o.playbackRate.value=n;const a=s.createGain();a.gain.value=e,o.connect(a).connect(s.destination),o.start()}engine(t,e=0){if(!this.unlocked)return;const n=this.ensureCtx();if(t&&!this.engineOsc){this.engineOsc=n.createOscillator(),this.engineOsc.type="sawtooth",this.engineGain=n.createGain(),this.engineGain.gain.value=this.muted?0:.05;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=260,this.engineOsc.connect(s).connect(this.engineGain).connect(n.destination),this.engineOsc.start()}this.engineOsc&&(this.engineOsc.frequency.value=46+e*60),!t&&this.engineOsc&&(this.engineOsc.stop(),this.engineOsc.disconnect(),this.engineOsc=null)}}const Ua="duck-job-v1";function so(){return{v:1,chaptersDone:[],pieces:[],ducks:[],weapons:[],weaponTiers:{},grades:{},pearls:0,gear:{owned:[],collar:null,charms:[],snacks:[]},bountiesCleared:0,secrets:{},muted:!1,tier:null}}function fm(i){const t=so();if(typeof i!="object"||i===null)return t;const e=i,n=s=>Array.isArray(s)?s:[];if(t.chaptersDone=n(e.chaptersDone).filter(s=>typeof s=="string"),t.pieces=n(e.pieces).filter(s=>typeof s=="string"),t.ducks=n(e.ducks).filter(s=>typeof s=="number"),t.weapons=n(e.weapons).filter(s=>s==="ball"||s==="boba"||s==="whistle"||s==="ankh"),typeof e.weaponTiers=="object"&&e.weaponTiers!==null&&(t.weaponTiers=e.weaponTiers),typeof e.grades=="object"&&e.grades!==null&&(t.grades=e.grades),typeof e.pearls=="number"&&isFinite(e.pearls)&&(t.pearls=Math.max(0,Math.floor(e.pearls))),typeof e.gear=="object"&&e.gear!==null){const s=e.gear;t.gear.owned=n(s.owned).filter(r=>typeof r=="string"),t.gear.collar=typeof s.collar=="string"?s.collar:null,t.gear.charms=n(s.charms).filter(r=>typeof r=="string"),t.gear.snacks=n(s.snacks).filter(r=>typeof r=="string")}return typeof e.bountiesCleared=="number"&&(t.bountiesCleared=e.bountiesCleared),typeof e.secrets=="object"&&e.secrets!==null&&(t.secrets=e.secrets),typeof e.muted=="boolean"&&(t.muted=e.muted),(e.tier==="ultra"||e.tier==="mobile")&&(t.tier=e.tier),t}class pm{data;constructor(){this.data=this.load()}load(){try{const t=localStorage.getItem(Ua);return t?fm(JSON.parse(t)):so()}catch{return so()}}write(){try{localStorage.setItem(Ua,JSON.stringify(this.data))}catch{}}patch(t){t(this.data),this.write()}}const K={midnight:725030,dockWater:1319498,horizonGlow:2833006,asphalt:1712448,concrete:3818600,sand:13218185,pine:1915445,grass:2377020,victoryRed:13904426,taillight:16720418,bentley:14262363,bentleyEar:11763521,duck:16765503,duckBill:16747586,heartNeon:16731533,ramenGold:16758311,taroPurple:11765995,crtGreen:3407752,grandmaLilac:13350888,edwardPale:14542832,lincolnMud:5984834,star:16774872},ur=i=>`#${i.toString(16).padStart(6,"0")}`,mm=`
.dj-hud { position: fixed; inset: 0; pointer-events: none; z-index: 10;
  font-family: 'Nunito', system-ui, sans-serif; color: #fff; }
.dj-card { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px; padding: 8px 14px; }
.dj-top { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 14px; display: flex; gap: 10px; align-items: center; }
.dj-hearts { font-size: 18px; letter-spacing: 2px; }
.dj-pearls { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${ur(K.taroPurple)}; }
.dj-pieces { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${ur(K.heartNeon)}; }
.dj-chapter { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 50%; transform: translateX(-50%); text-align: center;
  transition: opacity 0.6s; opacity: 0; }
.dj-chapter .t { font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: 16px; letter-spacing: 3px; color: #fff; text-transform: uppercase; }
.dj-chapter .s { font-size: 12px; color: rgba(255,255,255,0.75); font-style: italic; }
.dj-toast { position: absolute; bottom: 18%; left: 50%; transform: translateX(-50%);
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px;
  letter-spacing: 1.5px; padding: 10px 20px; opacity: 0; transition: opacity 0.3s, transform 0.3s;
  white-space: nowrap; max-width: 92vw; }
.dj-toast.show { opacity: 1; transform: translateX(-50%) translateY(-6px); }
.dj-prompt { position: absolute; bottom: 26%; left: 50%; transform: translateX(-50%);
  font-weight: 800; font-size: 14px; opacity: 0; transition: opacity 0.2s;
  color: ${ur(K.crtGreen)}; }
.dj-prompt.show { opacity: 1; }
.dj-corner { position: absolute; right: 14px; top: max(12px, env(safe-area-inset-top));
  display: flex; gap: 8px; pointer-events: auto; }
.dj-btn { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; color: #fff;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 13px;
  padding: 8px 12px; cursor: pointer; touch-action: manipulation; }
.dj-btn:hover { background: rgba(40,50,90,0.7); }
.dj-touch { position: absolute; inset: 0; display: none; }
.dj-touch.on { display: block; }
.dj-tbtn { position: absolute; width: 62px; height: 62px; border-radius: 50%;
  background: rgba(255,255,255,0.1); border: 1.5px solid rgba(255,255,255,0.3);
  color: #fff; font-weight: 800; font-size: 11px; pointer-events: auto;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Space Grotesk', sans-serif; touch-action: none; user-select: none; }
.dj-tbtn:active { background: rgba(255,77,141,0.35); }
.dj-overlay { position: absolute; inset: 0; display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: 16px;
  background: rgba(6,9,24,0.72); backdrop-filter: blur(8px); pointer-events: auto; }
.dj-overlay h1 { font-family: 'Space Grotesk', sans-serif; letter-spacing: 4px; }
.dj-fade { position: absolute; inset: 0; background: #06091a; opacity: 0;
  transition: opacity 0.4s; }
`;class gm{constructor(t,e,n){this.onMute=e,this.onPause=n;const s=document.createElement("style");s.textContent=mm,document.head.appendChild(s),this.root=document.createElement("div"),this.root.className="dj-hud",this.root.innerHTML=`
      <div class="dj-top">
        <div class="dj-card dj-hearts" data-r="hearts"></div>
        <div class="dj-card dj-pearls" data-r="pearls"></div>
        <div class="dj-card dj-pieces" data-r="pieces"></div>
      </div>
      <div class="dj-chapter" data-r="chapter"><div class="t"></div><div class="s"></div></div>
      <div class="dj-card dj-toast" data-r="toast"></div>
      <div class="dj-prompt" data-r="prompt"></div>
      <div class="dj-corner">
        <button class="dj-btn" data-r="mute">♪</button>
        <button class="dj-btn" data-r="pause">II</button>
      </div>
      <div class="dj-touch" data-r="touch"></div>
      <div class="dj-fade" data-r="fade"></div>
    `,t.appendChild(this.root);const r=o=>this.root.querySelector(`[data-r="${o}"]`);this.hearts=r("hearts"),this.pearls=r("pearls"),this.pieces=r("pieces"),this.chapter=r("chapter"),this.toastEl=r("toast"),this.promptEl=r("prompt"),this.fadeEl=r("fade"),this.touchLayer=r("touch"),r("mute").addEventListener("click",()=>this.onMute()),r("pause").addEventListener("click",()=>this.onPause()),this.setHearts(3,3),this.setPearls(0),this.setPieces(0)}root;hearts;pearls;pieces;chapter;toastEl;promptEl;fadeEl;touchLayer;toastTimer=0;chapterTimer=0;buildTouchControls(t){if(!t.isTouch)return;this.touchLayer.classList.add("on");const e=(n,s,r,o)=>{const a=document.createElement("div");a.className="dj-tbtn",a.textContent=n,a.style.right=`${r}px`,a.style.bottom=`calc(${o}px + env(safe-area-inset-bottom))`,a.addEventListener("pointerdown",c=>{c.stopPropagation(),t.setTouchButton(s,!0)}),a.addEventListener("pointerup",()=>t.setTouchButton(s,!1)),a.addEventListener("pointercancel",()=>t.setTouchButton(s,!1)),this.touchLayer.appendChild(a)};e("JUMP","jump",24,96),e("DASH","pounce",96,44),e("USE","interact",24,170),e("FIRE","fire",96,122)}setHearts(t,e){this.hearts.textContent="❤".repeat(t)+"♡".repeat(Math.max(0,e-t))}setPearls(t){this.pearls.textContent=`⬤ ${t}`}setPieces(t){this.pieces.textContent=`✉ ${t}/7`}chapterCard(t,e){this.chapter.querySelector(".t").textContent=t,this.chapter.querySelector(".s").textContent=e,this.chapter.style.opacity="1",this.chapterTimer=4.4}toast(t,e=2.6){this.toastEl.textContent=t,this.toastEl.classList.add("show"),this.toastTimer=e}prompt(t){t?(this.promptEl.textContent=t,this.promptEl.classList.add("show")):this.promptEl.classList.remove("show")}fade(t){this.fadeEl.style.opacity=t?"1":"0"}update(t){this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&this.toastEl.classList.remove("show")),this.chapterTimer>0&&(this.chapterTimer-=t,this.chapterTimer<=0&&(this.chapter.style.opacity="0"))}overlay(){const t=document.createElement("div");return t.className="dj-overlay",this.root.appendChild(t),t}}class _m{cam;zones=[];defaultOffset=new C(0,6,-8);curOffset=new C(0,6,-8);curFov=55;nudgeYaw=0;shakeAmp=0;shakeT=0;lookTarget=new C;constructor(t){this.cam=new ze(55,t,.1,900)}configure(t,e){this.zones=t,this.defaultOffset.set(e.x,e.y,e.z),this.curOffset.copy(this.defaultOffset)}kick(t=.25){this.shakeAmp=Math.max(this.shakeAmp,t)}snapTo(t){this.cam.position.copy(t).add(this.curOffset),this.lookTarget.copy(t)}update(t,e,n,s){let r=this.defaultOffset,o=55,a=.35;for(const h of this.zones)if(e.x>=h.min.x&&e.x<=h.max.x&&e.y>=h.min.y&&e.y<=h.max.y&&e.z>=h.min.z&&e.z<=h.max.z){r=new C(h.offset.x,h.offset.y,h.offset.z),o=h.fov??55,a=h.lookAhead??.35;break}this.curOffset.x=me.damp(this.curOffset.x,r.x,2.5,t),this.curOffset.y=me.damp(this.curOffset.y,r.y,2.5,t),this.curOffset.z=me.damp(this.curOffset.z,r.z,2.5,t),this.curFov=me.damp(this.curFov,o,2.5,t),Math.abs(this.cam.fov-this.curFov)>.05&&(this.cam.fov=this.curFov,this.cam.updateProjectionMatrix()),this.nudgeYaw=me.damp(this.nudgeYaw,s*.5,4,t);const c=new C(e.x+n.x*a,e.y+.6,e.z+n.z*a);this.lookTarget.x=me.damp(this.lookTarget.x,c.x,6,t),this.lookTarget.y=me.damp(this.lookTarget.y,c.y,6,t),this.lookTarget.z=me.damp(this.lookTarget.z,c.z,6,t);const l=this.curOffset.clone().applyAxisAngle(xm,this.nudgeYaw),u=e.clone().add(l);this.cam.position.x=me.damp(this.cam.position.x,u.x,5,t),this.cam.position.y=me.damp(this.cam.position.y,u.y,5,t),this.cam.position.z=me.damp(this.cam.position.z,u.z,5,t),this.shakeAmp>.001&&(this.shakeT+=t*40,this.cam.position.x+=Math.sin(this.shakeT*1.1)*this.shakeAmp*.12,this.cam.position.y+=Math.cos(this.shakeT*1.7)*this.shakeAmp*.1,this.shakeAmp=me.damp(this.shakeAmp,0,7,t)),this.cam.lookAt(this.lookTarget)}get yaw(){const t=new C;return this.cam.getWorldDirection(t),Math.atan2(-t.x,-t.z)}}const xm=new C(0,1,0),ci=250,bn=6,ys=[{id:"ch1",z:45,name:"THE GYM"},{id:"ch2",z:72,name:"LINCOLN AFTER DARK"},{id:"ch3",z:99,name:"HAYDEN'S TOLL BRIDGE"},{id:"ch4",z:126,name:"THE BEACH"},{id:"ch5",z:153,name:"THE DOCK & STARS"},{id:"ch6",z:180,name:"TWILIGHT FOREST"},{id:"ch7",z:207,name:"SUNRISE POINT"}],ws=-62;function vm(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:(ci-100)/2},size:{x:bn*2+6,y:.5,z:ci+120},color:K.asphalt});for(let t=-70;t<ci;t+=6)i.push({kind:"box",pos:{x:0,y:.01,z:t},size:{x:.22,y:.02,z:2.6},color:12568286,ghost:!0});i.push({kind:"box",pos:{x:0,y:-.6,z:60},size:{x:220,y:.5,z:420},color:922672,ghost:!0});for(const t of[-1,1])i.push({kind:"box",pos:{x:(bn+1.6)*t,y:-.2,z:(ci-100)/2},size:{x:2.4,y:.6,z:ci+120},color:K.concrete});for(const t of ys)i.push({kind:"box",pos:{x:bn+5,y:-.18,z:t.z},size:{x:7,y:.56,z:10},color:K.asphalt});return i.push({kind:"box",pos:{x:-14,y:-.18,z:ws},size:{x:14,y:.56,z:16},color:K.concrete}),i.push({kind:"box",pos:{x:-16,y:1.6,z:ws},size:{x:7,y:3.2,z:10},color:2765650}),{id:"hub",name:"THE HIGHWAY",tagline:"the ducks stole the letter. drive.",skyGlow:K.heartNeon,fogDensity:.011,prims:i,entities:[{type:"spawn",pos:{x:-2,y:0,z:2},yaw:Math.PI/2}],cameraZones:[],cameraOffset:{x:0,y:5.2,z:-7.5},parSeconds:0,bounds:{min:{x:-40,y:-10,z:-90},max:{x:40,y:30,z:ci+20}}}}function ym(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ae;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(t){let p;if(e)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(e){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=za(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][d]);const g=za(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function za(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new Be(o,e,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,p=u.count;d<p;d++)for(let g=0;g<e;g++){const x=u.getComponent(d,g);a.setComponent(d+h,g,x)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function Mm(i){const t=new So({color:i.color,emissive:i.emissive??0,emissiveIntensity:i.emissiveIntensity??1,flatShading:i.flatShading??!0,transparent:i.transparent??!1,opacity:i.opacity??1}),e=i.rim??.25,n=i.gloss??0;return t.onBeforeCompile=s=>{s.uniforms.djRim={value:e},s.uniforms.djGloss={value:n},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float djRim;
uniform float djGloss;`).replace("#include <opaque_fragment>",`
        {
          // rim light: view-facing falloff tinted toward the sky color
          vec3 dj_view = normalize(vViewPosition);
          float dj_fres = pow(1.0 - abs(dot(normalize(normal), dj_view)), 3.0);
          outgoingLight += dj_fres * djRim * vec3(0.45, 0.55, 0.9);
          // cheap tight specular for glossy paint
          if (djGloss > 0.001) {
            vec3 dj_h = normalize(dj_view + vec3(0.35, 0.85, 0.4));
            float dj_spec = pow(max(dot(normalize(normal), dj_h), 0.0), 90.0);
            outgoingLight += dj_spec * djGloss * vec3(1.0);
          }
        }
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`dj-toon-${e}-${n}`,t}const Na=new Map;function Xt(i,t={}){const e=JSON.stringify([i,t]);let n=Na.get(e);return n||(n=Mm({color:i,...t}),Na.set(e,n)),n}function _e(i,t=1.6){return Xt(i,{emissive:i,emissiveIntensity:t,rim:0})}const Fa=i=>new C(i.x,i.y,i.z);function Sm(i){if(i.kind==="cylinder")return new Se(i.size.x/2,i.size.x/2,i.size.y,12);if(i.kind==="ramp"){const t=new Ae,e=i.size.x/2,n=i.size.y,s=i.size.z/2,r=new Float32Array([-e,0,-s,e,0,-s,e,0,s,-e,0,-s,e,0,s,-e,0,s,-e,0,-s,-e,n,s,e,n,s,-e,0,-s,e,n,s,e,0,-s,-e,0,s,-e,n,s,e,n,s,-e,0,s,e,n,s,e,0,s,-e,0,-s,-e,0,s,-e,n,s,e,0,-s,e,n,s,e,0,s]);return t.setAttribute("position",new Be(r,3)),t.computeVertexNormals(),t}return new oe(i.size.x,i.size.y,i.size.z)}class wc{group=new kt;colliders=[];constructor(t){const e=new Map;for(const n of t.prims){if(!n.invisible){const s=Sm(n),r=new ae().makeRotationY(n.yaw??0).setPosition(n.pos.x,n.pos.y+(n.kind==="ramp",0),n.pos.z);n.kind==="box"||n.kind,s.applyMatrix4(r);const o=JSON.stringify([n.color,n.emissive??0,n.emissiveIntensity??0]),a=e.get(o)??[];a.push(s),e.set(o,a)}n.ghost||this.colliders.push(this.makeCollider(n))}for(const[n,s]of e){const[r,o,a]=JSON.parse(n),c=ym(s,!1);if(!c)continue;const l=new ht(c,o?Xt(r,{emissive:o,emissiveIntensity:a}):Xt(r));l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),s.forEach(u=>u.dispose())}}makeCollider(t){return t.kind==="ramp"?{kind:"ramp",center:Fa(t.pos),half:new C(t.size.x/2,t.size.y,t.size.z/2),yaw:t.yaw??0,enabled:!0}:{kind:"box",center:Fa({x:t.pos.x,y:t.pos.y,z:t.pos.z}),half:new C(t.size.x/2,t.size.y/2,t.size.z/2),yaw:t.yaw??0,enabled:!0}}addCollider(t){return this.colliders.push(t),t}groundAt(t,e,n){let s=-1/0;const r=new C;for(const o of this.colliders){if(!o.enabled||(r.set(t-o.center.x,0,e-o.center.z),o.yaw&&r.applyAxisAngle(dr,-o.yaw),Math.abs(r.x)>o.half.x||Math.abs(r.z)>o.half.z))continue;let a;if(o.kind==="ramp"){const c=(r.z+o.half.z)/(o.half.z*2);a=o.center.y+c*o.half.y}else a=o.center.y+o.half.y;a<=n+.35&&a>s&&(s=a)}return s}resolveWalls(t,e,n){const s=new C;for(const r of this.colliders){if(!r.enabled||r.kind==="ramp")continue;const o=r.center.y+r.half.y,a=r.center.y-r.half.y;if(o<t.y+.3||a>t.y+n)continue;s.set(t.x-r.center.x,0,t.z-r.center.z),r.yaw&&s.applyAxisAngle(dr,-r.yaw);const c=r.half.x+e-Math.abs(s.x),l=r.half.z+e-Math.abs(s.z);c<=0||l<=0||(c<l?s.x+=c*Math.sign(s.x||1):s.z+=l*Math.sign(s.z||1),r.yaw&&s.applyAxisAngle(dr,r.yaw),t.x=r.center.x+s.x,t.z=r.center.z+s.z)}}}const dr=new C(0,1,0);function fe(i,t,e,n,s={}){const r=new ht(new oe(i,t,e),Xt(n,s));return r.castShadow=!0,r.receiveShadow=!0,r}function Gn(i,t,e,n,s=10,r={}){const o=new ht(new Se(i,t,e,s),Xt(n,r));return o.castShadow=!0,o.receiveShadow=!0,o}function Ms(i,t,e=10,n={}){const s=new ht(new De(i,e,Math.max(6,e-2)),Xt(t,n));return s.castShadow=!0,s.receiveShadow=!0,s}function Tc(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");e(s);const r=new pc(n);return r.anisotropy=4,r}function Em(){const i=new kt,t=new kt,e=fe(.62,.42,.95,K.bentley);e.position.y=.42,t.add(e);const n=fe(.56,.34,.3,K.bentley);n.position.set(0,.38,.45),t.add(n);const s=new kt;s.position.set(0,.72,.55);const r=fe(.46,.4,.42,K.bentley);s.add(r);const o=fe(.26,.2,.24,K.bentleyEar);o.position.set(0,-.08,.3),s.add(o);const a=fe(.1,.08,.06,2234900);a.position.set(0,-.03,.44),s.add(a);for(const g of[-1,1]){const x=Ms(.045,1577484,8);x.position.set(.12*g,.08,.22),s.add(x)}const c=g=>{const x=new kt;x.position.set(.2*g,.18,-.02);const m=fe(.1,.62,.3,K.bentleyEar);return m.position.y=-.28,x.add(m),x.rotation.z=.5*g,s.add(x),x},l=c(1),u=c(-1);t.add(s);const h=[];for(const[g,x]of[[-.22,.32],[.22,.32],[-.22,-.34],[.22,-.34]]){const m=new kt;m.position.set(g,.24,x);const f=fe(.14,.34,.16,K.bentley);f.position.y=-.14,m.add(f),t.add(m),h.push(m)}const d=new kt;d.position.set(0,.55,-.48);const p=fe(.09,.09,.34,K.bentleyEar);return p.position.z=-.15,d.add(p),d.rotation.x=-.7,t.add(d),i.add(t),{group:i,earL:l,earR:u,tail:d,head:s,body:t,legs:h}}function bm(){const i=new kt,t={gloss:.85,rim:.35,flatShading:!1,emissive:4851720,emissiveIntensity:1},e=fe(1.76,.42,4.1,K.victoryRed,t);e.position.y=.5,i.add(e);const n=new ht(new Se(.62,.86,1.5,4,1),Xt(K.victoryRed,t));n.geometry.rotateY(Math.PI/4),n.geometry.scale(1.42,1,.5),n.rotation.x=Math.PI/2,n.position.set(0,.48,2.5),n.castShadow=!0,i.add(n);const s=fe(1.3,.34,1.5,1778744,{gloss:.7,rim:.45,flatShading:!1});s.position.set(0,.88,-.5),i.add(s);const r=new ht(new Se(.66,.66,1.26,3,1),Xt(1778744,{gloss:.7,rim:.45,flatShading:!1}));r.geometry.scale(1,1,.42),r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2,r.position.set(0,.74,.42),r.castShadow=!0,i.add(r);const o=fe(1.7,.16,.7,K.victoryRed,t);o.position.set(0,.66,-1.85),i.add(o);const a=fe(1.5,.06,.18,K.victoryRed,t);a.position.set(0,.78,-2.08),i.add(a);const c=[];for(const p of[-.62,-.28,.28,.62]){const g=new ht(new Se(.11,.11,.05,14),_e(K.taillight,2.6));g.rotation.x=Math.PI/2,g.position.set(p,.55,-2.12),i.add(g),c.push(g)}for(const p of[-.24,-.1,.1,.24]){const g=Gn(.05,.05,.12,13159894,10,{gloss:.5,flatShading:!1});g.rotation.x=Math.PI/2,g.position.set(p,.3,-2.1),i.add(g)}const l=[];for(const p of[-.55,.55]){const g=fe(.3,.09,.06,K.star,{emissive:K.star,emissiveIntensity:1.2});g.position.set(p,.56,2.94),i.add(g);const x=new Mh(16773836,0,40,.5,.45,1.2);x.position.set(p,.6,2.9),x.target.position.set(p*1.2,0,14),i.add(x,x.target),l.push(x)}const u=[];for(const[p,g]of[[-.85,1.55],[.85,1.55],[-.85,-1.45],[.85,-1.45]]){const x=new kt,m=Gn(.36,.36,.26,1053471,14,{rim:.1,flatShading:!1});m.rotation.z=Math.PI/2,x.add(m);const f=Gn(.18,.18,.28,13159894,8,{gloss:.6,flatShading:!1});f.rotation.z=Math.PI/2,x.add(f),x.position.set(p,.36,g),i.add(x),u.push(x)}const h=Tc(128,64,p=>{p.fillStyle="#e8e4d8",p.fillRect(0,0,128,64),p.fillStyle="#14224A",p.font='bold 34px "Space Grotesk", sans-serif',p.textAlign="center",p.textBaseline="middle",p.fillText("LAINIE",64,36)}),d=new ht(new mn(.5,.25),new pn({map:h}));return d.position.set(0,.36,-2.145),d.rotation.y=Math.PI,i.add(d),{group:i,wheels:u,headlights:l,taillights:c}}function Ac(i=K.duck){const t=new kt,e=Ms(.22,i,10);e.scale.set(1,.85,1.25),e.position.y=.24,t.add(e);const n=new kt;n.position.set(0,.5,.14);const s=Ms(.13,i,10);n.add(s);const r=fe(.12,.05,.14,K.duckBill);r.position.set(0,-.02,.15),n.add(r);for(const a of[-1,1]){const c=Ms(.025,1577484,6);c.position.set(.07*a,.05,.09),n.add(c)}t.add(n);const o=a=>{const c=new kt;c.position.set(.2*a,.28,0);const l=fe(.06,.16,.3,i);return l.position.y=-.06,c.add(l),t.add(c),c};return{group:t,head:n,wingL:o(1),wingR:o(-1)}}function Oa(){const i=new kt,t=Gn(.06,.09,5.4,2765650,8);t.position.y=2.7,i.add(t);const e=fe(.1,.08,1.6,2765650);e.position.set(0,5.3,.7),i.add(e);const n=fe(.24,.1,.5,K.ramenGold,{emissive:K.ramenGold,emissiveIntensity:1.8});return n.position.set(0,5.22,1.35),i.add(n),i}function wm(i){const t=new kt,e=fe(.08,.3,i,5857663,{gloss:.25,flatShading:!1});e.position.y=.62,t.add(e);const n=Math.max(2,Math.round(i/2.4));for(let s=0;s<n;s++){const r=fe(.1,.62,.12,3818600);r.position.set(0,.31,-i/2+(s+.5)*(i/n)),t.add(r)}return t}function Rc(i=4,t=K.pine){const e=new kt,n=Gn(.1,.16,i*.3,3811870,7);n.position.y=i*.15,e.add(n);let s=i*.28,r=i*.24;for(let o=0;o<3;o++){const a=new ht(new vo(r,i*.32,8),Xt(t));a.castShadow=!0,a.position.y=s+i*.14,e.add(a),s+=i*.22,r*=.72}return e}function ro(i,t={}){const e=t.w??3,n=t.h??1.4,s=Tc(512,Math.round(512*n/e),c=>{const l=c.canvas.height;c.fillStyle=t.bg??"#14224A",c.fillRect(0,0,512,l),c.strokeStyle=t.fg??"#FF4D8D",c.lineWidth=8,c.strokeRect(10,10,492,l-20),c.fillStyle=t.fg??"#FF4D8D",c.textAlign="center",c.textBaseline="middle";const u=Math.min(54,(l-40)/i.length-6);c.font=`700 ${u}px "Space Grotesk", sans-serif`,i.forEach((h,d)=>{c.fillText(h,256,l/(i.length+1)*(d+1)+4)})}),r=new kt,o=new ht(new mn(e,n),new pn({map:s}));o.position.y=2.2,r.add(o);const a=new yi(t.glow??K.heartNeon,6,6);a.position.set(0,2.2,.4),r.add(a);for(const c of[-1,1]){const l=Gn(.05,.05,2.2,2765650,6);l.position.set((e/2-.2)*c,1.1,0),r.add(l)}return r}function Tm(i,t=1.1){const e=new kt,n=fe(t,t*1.16,.04,16118504,{rim:.1,flatShading:!1});e.add(n);const s=new vh().load(i);s.colorSpace=Ue;const r=new ht(new mn(t*.86,t*.86),new pn({map:s}));return r.position.set(0,t*.07,.025),e.add(r),e}function Am(){const i=new kt,t=fe(.5,.02,.6,16118504,{rim:.05});t.rotation.z=.08,i.add(t);const e=Gn(.09,.09,.05,K.heartNeon,12,{emissive:K.heartNeon,emissiveIntensity:1.4});return e.position.y=.04,i.add(e),i}function Rm(){const i=Ac(K.ramenGold);return i.group.traverse(t=>{t instanceof ht&&t.material instanceof So&&(t.material=Xt(K.ramenGold,{emissive:K.ramenGold,emissiveIntensity:.5,gloss:.7,flatShading:!1}))}),i.group}const Cm={walkSpeed:5.2,accel:42,friction:26,gravity:24,jumpVel:8.6,jumpCutMultiplier:2.6,coyoteTime:.12,jumpBuffer:.15,pounceSpeed:11.5,pounceTime:.28,pounceCooldown:.9,maxFall:22,speedMultiplier:1};function Pm(){return{vx:0,vy:0,vz:0,grounded:!1,coyote:0,buffer:0,pouncing:0,pounceCd:0,jumpHeld:!1,facingX:0,facingZ:1,justJumped:!1,justLanded:!1,justPounced:!1}}function Dm(i,t,e,n,s,r){i.justJumped=!1,i.justLanded=!1,i.justPounced=!1;const o=i.grounded,a=s<=r+.02&&i.vy<=.001&&r>-1/0;if(i.grounded=a,a?(i.coyote=e.coyoteTime,o||(i.justLanded=!0)):i.coyote=Math.max(0,i.coyote-n),i.buffer=t.jumpPressed?e.jumpBuffer:Math.max(0,i.buffer-n),i.pounceCd=Math.max(0,i.pounceCd-n),t.pounce&&i.pounceCd<=0&&i.pouncing<=0){const l=Math.hypot(t.x,t.y),u=l>.15?t.x/l:i.facingX,h=l>.15?t.y/l:i.facingZ;i.vx=u*e.pounceSpeed*e.speedMultiplier,i.vz=h*e.pounceSpeed*e.speedMultiplier,a?i.vy=2.2:i.vy=Math.max(i.vy,2.2),i.pouncing=e.pounceTime,i.pounceCd=e.pounceCooldown,i.grounded=!1,i.justPounced=!0}if(i.pouncing>0)i.pouncing-=n,i.vy-=e.gravity*.55*n;else{const l=e.walkSpeed*e.speedMultiplier,u=Math.hypot(t.x,t.y);if(u>.05){const p=t.x/Math.max(u,1),g=t.y/Math.max(u,1);i.vx=ps(i.vx,p*l*Math.min(u,1),e.accel*n),i.vz=ps(i.vz,g*l*Math.min(u,1),e.accel*n),i.facingX=p,i.facingZ=g}else i.vx=ps(i.vx,0,e.friction*n),i.vz=ps(i.vz,0,e.friction*n);i.buffer>0&&(i.grounded||i.coyote>0)&&(i.vy=e.jumpVel,i.buffer=0,i.coyote=0,i.grounded=!1,i.justJumped=!0);const d=i.vy>0&&!t.jumpHeld?e.gravity*e.jumpCutMultiplier:e.gravity;i.grounded?i.vy=Math.max(0,i.vy):i.vy=Math.max(-e.maxFall,i.vy-d*n)}let c=i.vy*n;return i.vy<=0&&r>-1/0&&s+c<=r&&(c=r-s,i.vy=0),{dx:i.vx*n,dy:c,dz:i.vz*n}}function ps(i,t,e){return i<t?Math.min(t,i+e):Math.max(t,i-e)}class Cc{rig;pos=new C;state=Pm();cfg={...Cm};radius=.34;height=.9;squash=0;t=0;events={jumped:!1,landed:!1,pounced:!1};constructor(){this.rig=Em()}spawnAt(t,e,n,s=0){this.pos.set(t,e,n),this.state.vx=this.state.vy=this.state.vz=0,this.state.facingX=Math.sin(s),this.state.facingZ=Math.cos(s),this.rig.group.position.copy(this.pos)}update(t,e,n,s){const r=Math.cos(s),o=Math.sin(s),a=e.moveX*r-e.moveY*o,c=-e.moveX*o-e.moveY*r,l=n.groundAt(this.pos.x,this.pos.z,this.pos.y+.3),u=Dm(this.state,{x:a,y:c,jumpPressed:e.jumpPressed,jumpHeld:e.jump,pounce:e.pounce},this.cfg,t,this.pos.y,l);this.pos.x+=u.dx,this.pos.y+=u.dy,this.pos.z+=u.dz,n.resolveWalls(this.pos,this.radius,this.height),this.events={jumped:this.state.justJumped,landed:this.state.justLanded,pounced:this.state.justPounced},this.t+=t;const h=this.rig.group;h.position.copy(this.pos);const d=Math.hypot(this.state.vx,this.state.vz);if(d>.4){const E=Math.atan2(this.state.facingX,this.state.facingZ);h.rotation.y=Lm(h.rotation.y,E,14,t)}this.state.justLanded&&(this.squash=1),(this.state.justJumped||this.state.justPounced)&&(this.squash=-.7),this.squash=ka(this.squash,0,9,t);const p=1-this.squash*.25,g=1+this.squash*.18;this.rig.body.scale.set(g,p,g);const x=Math.min(1,d/this.cfg.walkSpeed),m=this.t*13;this.rig.legs.forEach((E,w)=>{const S=w%2===0?0:Math.PI;E.rotation.x=Math.sin(m+S)*.7*x});const f=-this.state.vy*.05+Math.sin(m)*.12*x;this.rig.earL.rotation.z=.5+f,this.rig.earR.rotation.z=-.5-f,this.rig.earL.rotation.x=this.state.grounded?0:-.6,this.rig.earR.rotation.x=this.state.grounded?0:-.6,this.rig.tail.rotation.x=-.7+Math.sin(this.t*8)*.25*(.4+x),this.rig.body.rotation.x=this.state.pouncing>0?-.35:ka(this.rig.body.rotation.x,0,10,t)}}function ka(i,t,e,n){return me.damp(i,t,e,n)}function Lm(i,t,e,n){let s=(t-i)%(Math.PI*2);return s>Math.PI&&(s-=Math.PI*2),s<-Math.PI&&(s+=Math.PI*2),i+s*(1-Math.exp(-14*n))}class Im{rig;state={z:0,x:0,speed:0,driving:!1};maxSpeed=26;laneHalf=5.4;speedMultiplier=1;constructor(){this.rig=bm()}place(t,e,n=0){this.state.x=t,this.state.z=e,this.rig.group.position.set(t,0,e),this.rig.group.rotation.y=n}setHeadlights(t){for(const e of this.rig.headlights)e.intensity=t?260:0}update(t,e,n){const s=this.state,r=n*this.maxSpeed*this.speedMultiplier;s.speed=me.damp(s.speed,r,1.6,t),s.z+=s.speed*t,s.x+=e*9*t*Math.min(1,Math.abs(s.speed)/6+.2),s.x=me.clamp(s.x,-this.laneHalf,this.laneHalf);const o=this.rig.group;o.position.set(s.x,0,s.z),o.rotation.y=e*-.18*Math.sign(s.speed||1);const a=s.speed*t*2.6;for(const c of this.rig.wheels)c.rotation.x+=a;o.rotation.z=me.damp(o.rotation.z,e*-.06,6,t)}}const Um=`
  varying vec3 vWorld;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,zm=`
  varying vec3 vWorld;
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uGlow;
  uniform float uGlowStrength;
  uniform float uSun;         // 0 = night, 1 = full sunrise
  void main() {
    float h = clamp(normalize(vWorld).y, 0.0, 1.0);
    vec3 col = mix(uHorizon, uTop, pow(h, 0.55));
    // volumetric-ish horizon band
    float band = exp(-h * 6.0);
    col += uGlow * band * uGlowStrength;
    // sunrise: warm disc glow low on the horizon
    if (uSun > 0.001) {
      vec3 dir = normalize(vWorld);
      float d = max(dot(dir, normalize(vec3(0.0, 0.06, -1.0))), 0.0);
      col += uSun * (vec3(1.0, 0.72, 0.35) * pow(d, 18.0) * 2.2
                   + vec3(1.0, 0.5, 0.45) * pow(d, 4.0) * 0.6);
    }
    gl_FragColor = vec4(col, 1.0);
  }
`;class Pc{group=new kt;uniforms;stars;starMat;constructor(){this.uniforms={uTop:{value:new Nt(K.midnight)},uHorizon:{value:new Nt(K.horizonGlow)},uGlow:{value:new Nt(K.heartNeon)},uGlowStrength:{value:.22},uSun:{value:0}};const t=new ht(new De(420,24,16),new fn({vertexShader:Um,fragmentShader:zm,uniforms:this.uniforms,side:Le,depthWrite:!1,fog:!1}));t.renderOrder=-100,this.group.add(t);const e=700,n=new Float32Array(e*3);for(let r=0;r<e;r++){const o=Math.random()*Math.PI*2,a=Math.acos(Math.random()*.85),c=400;n[r*3]=c*Math.sin(a)*Math.cos(o),n[r*3+1]=c*Math.cos(a)+10,n[r*3+2]=c*Math.sin(a)*Math.sin(o)}const s=new Ae;s.setAttribute("position",new Be(n,3)),this.starMat=new fc({color:K.star,size:1.6,sizeAttenuation:!0,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),this.stars=new fh(s,this.starMat),this.stars.renderOrder=-99,this.group.add(this.stars)}set(t){this.uniforms.uTop.value.setHex(t.top),this.uniforms.uHorizon.value.setHex(t.horizon),this.uniforms.uGlow.value.setHex(t.glow),this.uniforms.uGlowStrength.value=t.glowStrength??.22}setSunrise(t){this.uniforms.uSun.value=t;const e=new Nt(K.midnight).lerp(new Nt(3821455),t),n=new Nt(K.horizonGlow).lerp(new Nt(16751186),t);this.uniforms.uTop.value.copy(e),this.uniforms.uHorizon.value.copy(n),this.starMat.opacity=.85*(1-t)}update(t){this.stars.rotation.y+=t*.004}}const Nm=new C(0,.6,-.2);class Fm{constructor(t){this.ctx=t;const e=vm();this.world=new wc(e),this.scene.add(this.world.group),this.scene.fog=new Rs(K.midnight,e.fogDensity??.011),this.sky=new Pc,this.sky.set({top:K.midnight,horizon:K.horizonGlow,glow:e.skyGlow}),this.scene.add(this.sky.group);const n=new _c(8228816,1317432,1.15);this.scene.add(n),this.sun=new vc(11057407,1.5),this.sun.position.set(20,40,-20),t.tier==="ultra"&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-50,this.sun.shadow.camera.right=50,this.sun.shadow.camera.top=60,this.sun.shadow.camera.bottom=-60,this.sun.shadow.camera.far=140,this.sun.shadow.bias=-8e-4),this.scene.add(this.sun);for(let o=-70;o<245;o+=22){const a=Oa();a.position.set(-8.4,0,o),a.rotation.y=Math.PI/2,this.scene.add(a);const c=Oa();if(c.position.set(bn+2.4,0,o+11),c.rotation.y=-Math.PI/2,this.scene.add(c),this.ctx.tier==="ultra"&&o%44===0){const l=new yi(K.ramenGold,30,16,1.8);l.position.set(-7.4,5,o+1.3),this.scene.add(l)}}for(const o of[-1,1])for(let a=-60;a<240;a+=24){if(o===1&&ys.some(l=>Math.abs(l.z-a)<12))continue;const c=wm(22);c.position.set((bn+3)*o,0,a+11),this.scene.add(c)}const s=Om(7);for(let o=0;o<60;o++){const a=s()>.5?1:-1,c=Rc(3+s()*4);c.position.set(a*(bn+10+s()*22),0,-80+s()*330),this.scene.add(c)}for(const o of ys){const a=this.isUnlocked(o.id),c=ro([`EXIT ${o.id.slice(2)}`,o.name],a?{}:{fg:"#5b6070"});c.position.set(bn+8.4,0,o.z),c.rotation.y=-Math.PI/2,this.scene.add(c)}const r=ro(["GRANDMA'S","DINER"],{fg:"#CBB7E8",glow:K.grandmaLilac});r.position.set(-14,0,ws+9),r.rotation.y=Math.PI/2,this.scene.add(r),this.car=new Im,this.car.place(2.4,6,0),this.car.setHeadlights(!1),this.scene.add(this.car.rig.group),this.player=new Cc,this.player.spawnAt(-2,0,2,Math.PI/2),this.scene.add(this.player.rig.group),t.camera.configure([],{x:0,y:5.2,z:-7.5}),t.camera.snapTo(this.player.pos),t.hud.chapterCard("THE HIGHWAY","the ducks stole the letter. drive.")}scene=new dc;world;player;car;sky;mode="walk";exitCooldown=0;reverseTime=0;dinerFound=!1;sun;isUnlocked(t){if(t==="ch1")return!0;const e=Number(t.slice(2));return this.ctx.save.data.chaptersDone.includes(`ch${e-1}`)}update(t){const e=this.ctx.input.poll();if(this.sky.update(t),this.exitCooldown=Math.max(0,this.exitCooldown-t),this.mode==="walk"){this.player.update(t,e,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.35),this.player.events.landed&&this.ctx.audio.play("land",.25),this.player.events.pounced&&(this.ctx.audio.play("whoosh",.4),this.ctx.camera.kick(.18));const n=this.player.pos.distanceTo(this.car.rig.group.position);this.ctx.hud.prompt(n<3.2?"[E] TAKE THE CORVETTE":null),n<3.2&&e.interact&&(this.mode="drive",this.player.rig.group.visible=!1,this.car.setHeadlights(!0),this.ctx.audio.engine(!0,0),this.ctx.audio.play("click",.5),this.ctx.hud.toast("BENTLEY CAN DRIVE. DO NOT ASK."),this.ctx.camera.configure([],{x:0,y:4.6,z:-9.5})),this.ctx.camera.update(t,this.player.pos,new C(this.player.state.vx,0,this.player.state.vz),e.camNudge)}else{const n=e.moveX,s=e.moveY;if(this.car.update(t,n,s),this.ctx.audio.engine(!0,Math.abs(this.car.state.speed)/this.car.maxSpeed),this.player.pos.copy(this.car.rig.group.position).add(Nm),this.car.state.speed<-3?this.reverseTime+=t:this.reverseTime=0,!this.dinerFound&&(this.reverseTime>4||this.car.state.z<ws+20)&&(this.dinerFound=!0,this.ctx.save.patch(r=>{r.secrets.diner=!0}),this.ctx.hud.toast("GRANDMA'S DINER FOUND. SHE SAYS SPEAK UP.",3.5),this.ctx.audio.play("ding",.6)),this.ctx.hud.prompt(Math.abs(this.car.state.speed)<1.5?"[E] HOP OUT":null),e.interact&&Math.abs(this.car.state.speed)<1.5&&(this.mode="walk",this.player.rig.group.visible=!0,this.player.spawnAt(this.car.state.x-2.2,0,this.car.state.z,0),this.car.setHeadlights(!1),this.ctx.audio.engine(!1),this.ctx.camera.configure([],{x:0,y:5.2,z:-7.5})),this.exitCooldown<=0){for(const r of ys)if(Math.abs(this.car.state.z-r.z)<4&&this.car.state.x>bn-2.2){if(this.isUnlocked(r.id)){this.exitCooldown=99,this.ctx.audio.engine(!1),this.ctx.audio.play("insertcoin",.6),this.ctx.go("play",{id:r.id});return}else this.ctx.hud.toast("EXIT LOCKED. FINISH THE PREVIOUS CHAPTER.",2.2),this.ctx.audio.play("wrong",.4);this.exitCooldown=3}}this.car.state.z=me.clamp(this.car.state.z,-85,245),this.ctx.camera.update(t,this.car.rig.group.position,new C(0,0,this.car.state.speed*.4),e.camNudge)}e.pause&&this.ctx.togglePause()}dispose(){this.ctx.audio.engine(!1)}}function Om(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function km(i,t){const e=new Set;for(const n of i)if("plates"in n.when)n.when.plates.every(s=>t.plates[s])&&e.add(n.open);else if("switches"in n.when)n.when.switches.every(s=>t.switches[s])&&e.add(n.open);else if("rotors"in n.when){const s=n.when.rotors;Object.keys(s).every(r=>(t.rotors?.[r]??-1)===s[r])&&e.add(n.open)}else"paidExact"in n.when?(t.paid?.[n.when.paidExact.slot]??0)===n.when.paidExact.amount&&e.add(n.open):t.keyNear[n.open]&&e.add(n.open);return e}function Bm(i,t,e){return e?i===t:i>=t}class Hm{constructor(t,e,n,s,r){this.id=t,this.kind=e,this.weight=n,this.value=s,this.obj=Gm(e,n),this.obj.position.copy(r),this.home=r.clone()}obj;carried=!1;home;get pos(){return this.obj.position}}function Gm(i,t){const e=new kt;if(i==="dumbbell"){const n=.16+t*.08,s=new ht(new Se(.05,.05,.7,8),Xt(13159894,{gloss:.4,flatShading:!1}));s.rotation.z=Math.PI/2,s.position.y=n,e.add(s);for(const o of[-.3,.3]){const a=new ht(new Se(n,n,.12,12),Xt(3094614,{gloss:.3,flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(o,n,0),e.add(a)}const r=new ht(new oe(.16,.16,.02),_e(K.ramenGold,.8));r.position.set(0,n+.16,0),e.add(r),e.weightScale=n}else if(i==="block"){const n=new ht(new oe(.8,.8,.8),Xt(9072461));n.position.y=.4,n.castShadow=!0,e.add(n)}else if(i==="coin"){const n=new ht(new Se(.22,.22,.06,14),_e(K.ramenGold,1.2));n.position.y=.35,e.add(n)}else if(i==="key"){const n=new ht(new Se(.05,.05,.5,8),_e(K.crtGreen,1.1));n.rotation.x=Math.PI/2,n.position.y=.4,e.add(n);const s=new ht(new Xn(.14,.05,8,12),_e(K.crtGreen,1.1));s.position.set(0,.4,-.3),e.add(s)}else{const n=new ht(new oe(.9,1.2,.08),Xt(14542832,{gloss:.9,rim:.5,flatShading:!1}));n.position.y=.6,e.add(n)}return e.traverse(n=>{n.castShadow=!0}),e}class Vm{constructor(t,e,n,s){this.id=t,this.pos=e,this.needWeight=n,this.exact=s,this.obj=new ht(new Se(.9,1,.12,16),Xt(2305102,{emissive:K.heartNeon,emissiveIntensity:.12})),this.obj.position.copy(e),this.obj.position.y+=.06,this.obj.receiveShadow=!0}obj;satisfied=!1;restingWeight=0;setSatisfied(t){if(t===this.satisfied)return;this.satisfied=t;const e=this.obj.material;e.emissive.setHex(t?K.crtGreen:K.heartNeon),e.emissiveIntensity=t?.9:.12}}class Wm{constructor(t,e,n,s,r,o,a=!1,c){this.id=t,this.needsKey=r,this.isLift=a,this.obj=new ht(new oe(n.x,n.y,n.z),Xt(s,{emissive:s,emissiveIntensity:.14})),this.obj.position.copy(e),this.obj.castShadow=!0,this.closedY=e.y,this.openY=a&&c?c.y:e.y-n.y-.2,this.collider=o.addCollider({kind:"box",center:this.obj.position,half:new C(n.x/2,n.y/2,n.z/2),yaw:0,enabled:!0})}obj;collider;open=!1;closedY;openY;update(t){const e=this.open?this.openY:this.closedY;this.obj.position.y=me.damp(this.obj.position.y,e,3,t)}}class Xm{carriables=[];plates=[];gates=[];carrying=null;add(t,e,n){if(t.type==="carry"){const s=new Hm(t.id,t.kind,t.weight??1,t.value??0,new C(t.pos.x,t.pos.y,t.pos.z));this.carriables.push(s),n.add(s.obj)}else if(t.type==="plate"){const s=new Vm(t.id,new C(t.pos.x,t.pos.y,t.pos.z),t.needWeight??1,t.exactWeight??!1);this.plates.push(s),n.add(s.obj)}else if(t.type==="door"||t.type==="lift"){const s=new Wm(t.id,new C(t.pos.x,t.pos.y,t.pos.z),new C(t.size.x,t.size.y,t.size.z),t.color??K.dockWater,t.type==="door"?t.needsKey??!1:!1,e,t.type==="lift",t.type==="lift"?new C(t.to.x,t.to.y,t.to.z):void 0);this.gates.push(s),n.add(s.obj)}}nearest(t){let e=null,n=2.1;for(const s of this.carriables){if(s.carried)continue;const r=s.pos.distanceTo(t.pos);r<n&&(n=r,e=s)}return e}interact(t){if(this.carrying){const n=this.carrying;return n.carried=!1,n.pos.set(t.pos.x+t.state.facingX*.9,t.pos.y,t.pos.z+t.state.facingZ*.9),this.carrying=null,"dropped"}const e=this.nearest(t);return e?(e.carried=!0,this.carrying=e,"picked"):null}update(t,e,n){if(this.carrying)this.carrying.pos.set(e.pos.x,e.pos.y+1.25,e.pos.z),this.carrying.obj.rotation.y+=t*1.5;else for(const s of this.carriables){if(s.carried)continue;const r=n.groundAt(s.pos.x,s.pos.z,s.pos.y+.4);r>-1/0&&Math.abs(s.pos.y-r)>.01&&(s.pos.y=me.damp(s.pos.y,r,10,t))}for(const s of this.plates){let r=0;for(const c of this.carriables){if(c.carried)continue;const l=c.pos.x-s.pos.x,u=c.pos.z-s.pos.z;l*l+u*u<1&&Math.abs(c.pos.y-s.pos.y)<.6&&(r+=c.weight)}const o=e.pos.x-s.pos.x,a=e.pos.z-s.pos.z;o*o+a*a<1&&Math.abs(e.pos.y-s.pos.y)<.7&&(r+=1),s.restingWeight=r,s.setSatisfied(Bm(r,s.needWeight,s.exact))}for(const s of this.gates)s.update(t),s.collider.center.copy(s.obj.position)}}const fr={ball:"BALL LAUNCHER",boba:"BOBA BLASTER",whistle:"DUCK WHISTLE",ankh:"THE ANKH"};class jm{constructor(t){this.scene=t,t.add(this.group);for(let e=0;e<12;e++){const n=new ht(new De(.14,10,8),_e(K.crtGreen,.9));n.visible=!1,this.group.add(n),this.pool.push({obj:n,vel:new C,life:0,active:!1,kind:"ball"})}this.ankhLight=new yi(K.grandmaLilac,0,9,1.6),t.add(this.ankhLight)}owned=[];tiers={};equipped=null;pool=[];group=new kt;switchTargets=[];bobaSpots=[];whistleCd=0;allyDuck=null;allyTarget=null;ankhActive=!1;ankhLight;onHitTarget=null;onBonk=null;onBobaPlatform=null;setLoadout(t,e){this.owned=[...t],this.tiers={...e},!this.equipped&&this.owned.length&&(this.equipped=this.owned[0])}cycle(t){if(!this.owned.length)return;const e=this.equipped?this.owned.indexOf(this.equipped):0;this.equipped=this.owned[(e+t+this.owned.length)%this.owned.length]}fire(t){if(!this.equipped)return null;const e=this.equipped;if(e==="ball"||e==="boba"){const n=this.pool.find(s=>!s.active);return n?(n.active=!0,n.kind=e,n.life=2.6,n.obj.material.color.setHex(e==="ball"?K.crtGreen:K.taroPurple),n.obj.material.emissive.setHex(e==="ball"?K.crtGreen:K.taroPurple),n.obj.visible=!0,n.obj.position.set(t.pos.x,t.pos.y+.8,t.pos.z),n.vel.set(t.state.facingX,.42,t.state.facingZ).normalize().multiplyScalar(13.5),e):null}return e==="whistle"?this.whistleCd>0?null:(this.whistleCd=this.tiers.whistle===2?4:8,this.summonAlly(t),e):e==="ankh"?(this.ankhActive=!this.ankhActive,e):null}summonAlly(t){if(!this.allyDuck){const e=new kt,n=new ht(new De(.2,10,8),Xt(K.duck,{flatShading:!1}));n.position.y=.2,e.add(n);const s=new ht(new De(.11,8,6),Xt(K.duck,{flatShading:!1}));s.position.set(0,.44,.1),e.add(s);const r=new ht(new oe(.1,.04,.12),Xt(K.duckBill));r.position.set(0,.42,.22),e.add(r),this.scene.add(e),this.allyDuck=e}this.allyDuck.visible=!0,this.allyDuck.position.set(t.pos.x+1,t.pos.y+2,t.pos.z),this.allyTarget=null}sendAlly(t){this.allyDuck?.visible&&(this.allyTarget=t.clone())}addSwitchTarget(t,e){const n=new kt,s=new ht(new Xn(.34,.07,8,16),_e(K.ramenGold,1.4));n.add(s);const r=new ht(new De(.12,8,6),_e(K.heartNeon,1.2));n.add(r),n.position.copy(e),this.group.add(n),this.switchTargets.push({id:t,obj:n,hit:!1})}addBobaSpot(t){const e=new ht(new xo(.45,12),new pn({color:K.taroPurple,transparent:!0,opacity:.35,side:Je}));e.position.copy(t),e.rotation.x=-Math.PI/2,this.group.add(e);const n={pos:t.clone(),filled:!1};return this.bobaSpots.push(n),n}update(t,e,n,s){this.whistleCd=Math.max(0,this.whistleCd-t);for(const r of this.pool){if(!r.active)continue;r.life-=t,r.vel.y-=14*t,r.obj.position.addScaledVector(r.vel,t);const o=this.tiers.ball===2&&r.kind==="ball",a=n.groundAt(r.obj.position.x,r.obj.position.z,r.obj.position.y+.2);r.obj.position.y<a+.14&&(o&&r.life>.4?(r.obj.position.y=a+.14,r.vel.y=Math.abs(r.vel.y)*.72):r.life=0);for(const c of this.switchTargets)!c.hit&&r.obj.position.distanceTo(c.obj.position)<.55&&(c.hit=!0,c.obj.children[1].scale.setScalar(1.6),this.onHitTarget?.(c.id),r.life=0);if(r.kind==="boba"){for(const c of this.bobaSpots)if(!c.filled&&r.obj.position.distanceTo(c.pos)<.8){c.filled=!0;const l=new ht(new Se(.7,.62,.3,12),Xt(K.taroPurple,{emissive:K.taroPurple,emissiveIntensity:.5,flatShading:!1}));l.position.copy(c.pos),this.group.add(l),n.addCollider({kind:"box",center:l.position,half:new C(.65,.15,.65),yaw:0,enabled:!0}),this.onBobaPlatform?.(c),r.life=0}}for(const c of s)c.alive&&r.obj.position.distanceTo(c.obj.position)<.7&&c.bonk(r.vel)&&(this.onBonk?.(),r.life=0);r.life<=0&&(r.active=!1,r.obj.visible=!1)}if(this.allyDuck?.visible&&this.allyTarget){const r=this.allyTarget.clone().sub(this.allyDuck.position);r.length()>.3&&(this.allyDuck.position.addScaledVector(r.normalize(),4.5*t),this.allyDuck.rotation.y=Math.atan2(r.x,r.z))}if(this.ankhActive&&this.equipped==="ankh"){this.ankhLight.intensity=26,this.ankhLight.position.set(e.pos.x,e.pos.y+1.4,e.pos.z);const r=this.tiers.ankh===2?10:6;for(const o of s){const a=o;typeof a.stunned=="number"&&o.obj.position.distanceTo(e.pos)<r&&(a.stunned=Math.max(a.stunned,1.5))}}else this.ankhLight.intensity=0}}class qm{constructor(t,e=2.2){this.waypoints=t,this.speed=e,this.rig=Ac(),this.obj=this.rig.group,this.obj.position.copy(t[0])}rig;obj;alive=!0;idx=0;t=Math.random()*10;stunned=0;knock=new C;bonk(t){return this.stunned>0?!1:(this.stunned=2.2,this.knock.copy(t).setY(0).normalize().multiplyScalar(6),!0)}update(t,e,n){if(this.t+=t,this.stunned>0){this.stunned-=t,this.obj.position.addScaledVector(this.knock,t),this.knock.multiplyScalar(1-4*t),this.obj.rotation.z=Math.sin(this.t*30)*.3*Math.min(1,this.stunned);return}this.obj.rotation.z=0;const r=this.waypoints[this.idx].clone().sub(this.obj.position).setY(0);r.length()<.4?this.idx=(this.idx+1)%this.waypoints.length:(r.normalize(),this.obj.position.addScaledVector(r,this.speed*t),this.obj.rotation.y=Math.atan2(r.x,r.z)),this.obj.rotation.z=Math.sin(this.t*9)*.12,this.rig.wingL.rotation.z=.3+Math.sin(this.t*9)*.15,this.rig.wingR.rotation.z=-.3-Math.sin(this.t*9)*.15,this.obj.position.distanceTo(e.pos)<.85&&n("duck")}}class Ym{constructor(t,e=3){this.range=e,this.origin=t.clone(),this.obj=new kt;const n=new ht(new De(.3,10,8),Xt(13915434,{gloss:.3,flatShading:!1}));n.scale.set(1.4,.7,1),n.position.y=.25,n.castShadow=!0,this.obj.add(n);for(const s of[-1,1]){const r=new ht(new De(.14,8,6),Xt(13915434,{flatShading:!1}));r.position.set(.45*s,.22,.25),this.obj.add(r)}this.obj.position.copy(t)}obj;alive=!0;t=Math.random()*7;origin;bonk(){return!1}update(t,e,n){this.t+=t,this.obj.position.x=this.origin.x+Math.sin(this.t*1.6)*this.range,this.obj.rotation.y=Math.cos(this.t*1.6)>0?Math.PI/2:-Math.PI/2,this.obj.position.distanceTo(e.pos)<.8&&n("crab")}}class Km{constructor(t,e=2.4){this.radius=e,this.origin=t.clone(),this.obj=new kt;const n=new ht(new De(.16,10,8),_e(K.edwardPale,2.2));this.obj.add(n);const s=new ht(new De(.3,10,8),new pn({color:K.edwardPale,transparent:!0,opacity:.22}));this.obj.add(s),this.obj.position.copy(t)}obj;alive=!0;t=Math.random()*9;origin;stunned=0;bonk(){return!1}update(t,e,n){if(this.t+=t,this.stunned>0){this.stunned-=t,this.obj.position.y=this.origin.y+Math.sin(this.t*40)*.05;return}this.obj.position.set(this.origin.x+Math.cos(this.t*1.1)*this.radius,this.origin.y+Math.sin(this.t*2.3)*.5,this.origin.z+Math.sin(this.t*1.1)*this.radius),this.obj.position.distanceTo(e.pos)<.7&&n("sparkle")}}class $m{obj;alive=!0;t=0;target=null;onSteal=null;constructor(t){this.obj=new kt;const e=new ht(new oe(.5,.2,.5),Xt(3818600,{gloss:.4,flatShading:!1}));this.obj.add(e);for(const[s,r]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]]){const o=new ht(new Se(.14,.14,.02,8),Xt(5857663));o.position.set(s,.14,r),this.obj.add(o)}const n=new ht(new De(.07,8,6),_e(K.ramenGold,2));n.position.set(0,-.05,.26),this.obj.add(n),this.obj.position.copy(t),this.obj.position.y+=2.4}bonk(){return!1}update(t,e,n){if(this.t+=t,this.obj.position.y+=Math.sin(this.t*3)*.004,this.obj.rotation.y+=t*.8,this.target){const s=this.target.clone().sub(this.obj.position);s.y=0,s.length()<.6?(this.onSteal?.(),this.target=null):this.obj.position.addScaledVector(s.normalize(),3.4*t)}}}class fi{constructor(t,e){this.ctx=t,this.def=e;for(const r of e.logic??[])"paidExact"in r.when&&(this.slotTargets[r.when.paidExact.slot]=r.when.paidExact.amount);this.world=new wc(e),this.scene.add(this.world.group),this.scene.fog=new Rs(K.midnight,e.fogDensity??.016),this.sky=new Pc,this.sky.set({top:K.midnight,horizon:K.horizonGlow,glow:e.skyGlow}),this.scene.add(this.sky.group);const n=new _c(8228816,1317432,1.15);this.scene.add(n);const s=new vc(11057407,1.5);if(s.position.set(18,34,-14),t.tier==="ultra"){s.castShadow=!0,s.shadow.mapSize.set(2048,2048);const r=46;s.shadow.camera.left=-r,s.shadow.camera.right=r,s.shadow.camera.top=r,s.shadow.camera.bottom=-r,s.shadow.camera.far=130,s.shadow.bias=-8e-4}this.scene.add(s),this.player=new Cc,this.scene.add(this.player.rig.group),this.weapons=new jm(this.scene),this.weapons.setLoadout(t.save.data.weapons,t.save.data.weaponTiers),this.weapons.onHitTarget=r=>{this.switchLatch[r]=!0,t.audio.play("correct",.5)},this.weapons.onBonk=()=>{t.audio.play("quack",.6),this.ctx.camera.kick(.15)};for(const r of e.entities)this.spawnEntity(r);this.player.spawnAt(this.spawnPos.x,this.spawnPos.y,this.spawnPos.z,this.spawnYaw),t.camera.configure(e.cameraZones,e.cameraOffset),t.camera.snapTo(this.player.pos),t.hud.chapterCard(e.name,e.tagline),t.hud.setHearts(this.hearts,this.maxHearts),t.audio.play("levelstart",.5)}scene=new dc;world;player;sky;im=new Xm;weapons;enemies=[];pickups=[];hazards=[];secretWalls=[];goalPos=new C;spawnPos=new C;spawnYaw=0;hearts=3;maxHearts=3;iframes=0;runTime=0;deaths=0;switchLatch={};done=!1;drone=null;rotors=[];slots=[];valves=[];zones=[];onZone=null;slotTargets={};spawnEntity(t){const e=n=>new C(n.x,n.y,n.z);switch(t.type){case"spawn":this.spawnPos.copy(e(t.pos)),this.spawnYaw=t.yaw??0;break;case"goal":{this.goalPos.copy(e(t.pos));const n=new kt,s=new ht(new Xn(1.15,.13,10,24),_e(K.heartNeon,1.8));s.position.y=1.4,n.add(s);const r=new yi(K.heartNeon,30,10,1.6);r.position.y=1.4,n.add(r),n.position.copy(this.goalPos),this.scene.add(n);break}case"letterPiece":{const n=Am();n.position.copy(e(t.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"piece",taken:this.ctx.save.data.pieces.includes(this.def.id)}),this.pickups[this.pickups.length-1].taken&&(n.visible=!1);break}case"goldenDuck":{const n=Rm();n.position.copy(e(t.pos)),this.scene.add(n);const s=this.ctx.save.data.ducks.includes(t.id);s&&(n.visible=!1),this.pickups.push({obj:n,kind:"goldenDuck",id:t.id,needs:t.needs,taken:s});break}case"pearl":{const n=new ht(new De(.16,10,8),_e(K.taroPurple,1.2));n.position.copy(e(t.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"pearl",taken:!1});break}case"weaponPickup":{if(this.ctx.save.data.weapons.includes(t.weapon))break;const n=new kt,s=new ht(new Se(.5,.62,.5,12),Xt(2305102));s.position.y=.25,n.add(s);const r=new ht(new Mo(.32),_e(K.crtGreen,1.6));r.position.y=1.1,n.add(r);const o=new yi(K.crtGreen,20,7,1.6);o.position.y=1.2,n.add(o),n.position.copy(e(t.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"weapon",weapon:t.weapon,taken:!1});break}case"duck":this.addEnemy(new qm((t.patrol??[t.pos]).map(e),t.speed));break;case"crab":this.addEnemy(new Ym(e(t.pos),t.range));break;case"wisp":this.addEnemy(new Km(e(t.pos),t.radius));break;case"drone":{this.drone=new $m(e(t.pos)),this.addEnemy(this.drone);break}case"hazard":{const n=e(t.shape.pos),s=e(t.shape.size).multiplyScalar(.5);if(this.hazards.push({min:n.clone().sub(s),max:n.clone().add(s),kind:t.kind}),t.kind==="mud"){const r=new ht(new oe(t.shape.size.x,.08,t.shape.size.z),Xt(K.lincolnMud,{rim:0}));r.position.set(n.x,t.shape.pos.y+t.shape.size.y/2,n.z),this.scene.add(r)}break}case"carry":case"plate":case"door":case"lift":this.im.add(t,this.world,this.scene);break;case"switchTarget":this.weapons.addSwitchTarget(t.id,e(t.pos)),this.switchLatch[t.id]=!1;break;case"rotor":{const n=new kt,s=new ht(new Se(.5,.6,.5,10),Xt(2765650));if(s.position.y=.25,n.add(s),t.kind==="mirror"){const o=new ht(new oe(1.6,1.1,.1),Xt(14542832,{gloss:.95,rim:.5,flatShading:!1,emissive:2240580,emissiveIntensity:.6}));o.position.y=1.1,o.rotation.y=Math.PI/4,n.add(o)}else{const o=new ht(new oe(.3,.2,2.4),_e(K.ramenGold,1.3));o.position.y=.6,n.add(o)}const r=t.state??0;n.rotation.y=t.kind==="mirror"?r*Math.PI/2:r*Math.PI*2/t.states,n.position.copy(e(t.pos)),this.scene.add(n),this.rotors.push({id:t.id,obj:n,states:t.states,state:r,kind:t.kind});break}case"slot":{const n=new kt,s=new ht(new oe(1.2,1.3,1.2),Xt(3818600));s.position.y=.65,n.add(s);const r=new ht(new oe(.5,.1,.3),_e(K.ramenGold,1.5));r.position.set(0,1.36,0),n.add(r);const o=new ht(new mn(1.4,.5),new pn({transparent:!0}));o.position.set(0,1.9,0),n.add(o),n.position.copy(e(t.pos)),this.scene.add(n),this.slots.push({id:t.id,obj:n,sum:0,label:o}),this.updateSlotLabel(this.slots[this.slots.length-1]);break}case"valve":{const n=new kt,s=new ht(new Se(.12,.16,1,8),Xt(3818600));s.position.y=.5,n.add(s);const r=new ht(new Xn(.4,.08,8,14),_e(K.crtGreen,.8));r.position.y=1.1,r.rotation.x=Math.PI/2,n.add(r),n.position.copy(e(t.pos)),this.scene.add(n),this.valves.push({id:t.id,obj:n,state:0});break}case"interactZone":this.zones.push({id:t.id,pos:e(t.pos),radius:t.radius,label:t.label,used:!1});break;case"bobaSpot":this.weapons.addBobaSpot(e(t.pos));break;case"secretWall":{const n=new ht(new oe(t.size.x,t.size.y,t.size.z),Xt(t.color,{}));n.position.copy(e(t.pos)),this.scene.add(n),this.secretWalls.push({mesh:n,found:!1});break}case"sign":{const n=ro(t.lines,t.fg?{fg:t.fg}:{});n.position.copy(e(t.pos)),n.rotation.y=t.yaw??0,this.scene.add(n);break}case"polaroid":{const n=Tm(new URL(`../../${t.photo}`,document.baseURI).href);n.position.copy(e(t.pos)),n.rotation.y=t.yaw??0,this.scene.add(n);break}}}allyFetch=null;collect(t){t.taken=!0,t.obj.visible=!1,t.kind==="piece"?(this.ctx.save.patch(e=>{e.pieces.includes(this.def.id)||e.pieces.push(this.def.id)}),this.ctx.hud.setPieces(this.ctx.save.data.pieces.length),this.ctx.hud.toast("LETTER PIECE RECOVERED ✉",2.2),this.ctx.audio.play("sparkle",.7)):t.kind==="goldenDuck"&&t.id!==void 0?(this.ctx.save.patch(e=>{e.ducks.includes(t.id)||e.ducks.push(t.id)}),this.ctx.hud.toast(`GOLDEN DUCK ${this.ctx.save.data.ducks.length}/21`,2.2),this.ctx.audio.play("quack",.7,.8)):t.kind==="pearl"?(this.ctx.save.patch(e=>{e.pearls+=1}),this.ctx.hud.setPearls(this.ctx.save.data.pearls),this.ctx.audio.play("coin",.4)):t.kind==="weapon"&&t.weapon&&(this.ctx.save.patch(e=>{e.weapons.includes(t.weapon)||e.weapons.push(t.weapon)}),this.weapons.setLoadout(this.ctx.save.data.weapons,this.ctx.save.data.weaponTiers),this.weapons.equipped=t.weapon,this.ctx.hud.toast(`${fr[t.weapon]} ACQUIRED`,3),this.ctx.audio.play("fanfare",.6))}updateSlotLabel(t){const e=this.slotTargets[t.id],n=document.createElement("canvas");n.width=256,n.height=96;const s=n.getContext("2d");s.fillStyle="rgba(10,14,32,0.85)",s.fillRect(0,0,256,96),s.fillStyle="#FFB627",s.font='700 40px "Space Grotesk", sans-serif',s.textAlign="center",s.fillText(`${t.sum}${e!==void 0?" / "+e:""}`,128,60);const r=new pc(n),o=t.label.material;o.map?.dispose(),o.map=r,o.needsUpdate=!0}addEnemy(t){this.enemies.push(t),this.scene.add(t.obj)}hurt(t){this.iframes>0||this.done||(this.hearts-=1,this.iframes=1.2,this.deaths+=this.hearts<=0?1:0,this.ctx.hud.setHearts(Math.max(0,this.hearts),this.maxHearts),this.ctx.audio.play("hit",.55),this.ctx.camera.kick(.4),this.hearts<=0?(this.ctx.audio.play("powerdown",.6),this.ctx.hud.toast("RUN OVER. THE DUCKS ARE LAUGHING.",2.6),this.hearts=this.maxHearts,this.ctx.hud.setHearts(this.hearts,this.maxHearts),this.respawn()):(this.player.state.vx*=-1.6,this.player.state.vz*=-1.6))}respawn(){this.player.spawnAt(this.spawnPos.x,this.spawnPos.y,this.spawnPos.z,this.spawnYaw),this.ctx.camera.snapTo(this.player.pos)}update(t){if(this.done)return;const e=this.ctx.input.poll();if(this.sky.update(t),this.runTime+=t,this.iframes=Math.max(0,this.iframes-t),this.player.rig.group.visible=this.iframes<=0||Math.floor(this.iframes*14)%2===0,this.player.update(t,e,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.3),this.player.events.landed&&this.ctx.audio.play("land",.22),this.player.events.pounced){this.ctx.audio.play("whoosh",.4),this.ctx.camera.kick(.15);for(const h of this.enemies)h.alive&&h.obj.position.distanceTo(this.player.pos)<1.2&&h.bonk(new C(this.player.state.facingX,0,this.player.state.facingZ))&&this.ctx.audio.play("quack",.6)}const n=this.zones.find(h=>!h.used&&h.pos.distanceTo(this.player.pos)<h.radius),s=this.slots.find(h=>h.obj.position.distanceTo(this.player.pos)<2.2),r=this.rotors.find(h=>h.obj.position.distanceTo(this.player.pos)<2),o=this.valves.find(h=>h.obj.position.distanceTo(this.player.pos)<2),a=this.im.nearest(this.player),c=this.im.carrying?.kind==="coin";if(n?this.ctx.hud.prompt(`[E] ${n.label}`):s&&c?this.ctx.hud.prompt("[E] INSERT COIN"):r?this.ctx.hud.prompt("[E] ROTATE"):o?this.ctx.hud.prompt("[E] TURN VALVE"):this.im.carrying?this.ctx.hud.prompt("[E] PUT DOWN"):a?this.ctx.hud.prompt("[E] PICK UP"):this.ctx.hud.prompt(null),e.interact)if(n)n.used=!0,this.onZone?.(n.id);else if(s&&c&&this.im.carrying){const h=this.im.carrying;s.sum+=h.value||1,this.im.carrying=null,h.carried=!1,h.obj.visible=!1,h.pos.set(0,-100,0),this.ctx.audio.play("register",.6);const d=this.slotTargets[s.id];if(d!==void 0&&s.sum>d){s.sum=0,this.ctx.hud.toast('OVERPAID. "NO REFUNDS." — HAYDEN',2.6),this.ctx.audio.play("error",.6);for(const p of this.im.carriables)p.kind==="coin"&&(p.obj.visible=!0,p.pos.copy(p.home))}this.updateSlotLabel(s)}else r?(r.state=(r.state+1)%r.states,r.obj.rotation.y=r.kind==="mirror"?r.state*Math.PI/2:r.state*Math.PI*2/r.states,this.ctx.audio.play("click",.55)):o?(o.state=(o.state+1)%3,o.obj.rotation.y+=1.2,this.ctx.audio.play("reel",.5)):this.im.interact(this.player)&&this.ctx.audio.play("pop",.45);if(this.im.update(t,this.player,this.world),e.cycle&&(this.weapons.cycle(e.cycle),this.weapons.equipped&&this.ctx.hud.toast(fr[this.weapons.equipped],1)),e.fire){const h=this.weapons.fire(this.player);if((h==="ball"||h==="boba")&&this.ctx.audio.play("boing",.4),h==="ankh"&&this.ctx.audio.play("sparkle",.5),h==="whistle"){this.ctx.audio.play("quack",.7,1.4);const d=this.pickups.find(p=>!p.taken&&p.kind==="goldenDuck"&&p.needs==="whistle"&&p.obj.position.distanceTo(this.player.pos)<16);d&&(this.weapons.sendAlly(d.obj.position),this.allyFetch=d)}}this.allyFetch&&!this.allyFetch.taken&&this.weapons.allyDuck?.visible&&this.weapons.allyDuck.position.distanceTo(this.allyFetch.obj.position)<.6&&this.collect(this.allyFetch),this.weapons.update(t,this.player,this.world,this.enemies);const l={plates:{},switches:this.switchLatch,keyNear:{},rotors:Object.fromEntries(this.rotors.map(h=>[h.id,h.state])),paid:Object.fromEntries(this.slots.map(h=>[h.id,h.sum]))};for(const h of this.im.plates)l.plates[h.id]=h.satisfied;for(const h of this.im.gates)if(h.needsKey){const d=this.im.carrying?.kind==="key"?this.im.carrying:this.im.carriables.find(p=>p.kind==="key");l.keyNear[h.id]=!!d&&d.pos.distanceTo(h.obj.position)<3.2}const u=km(this.def.logic??[],l);for(const h of this.im.gates){const d=u.has(h.id);d&&!h.open&&this.ctx.audio.play("ding",.5),h.open=d}for(const h of this.enemies)h.alive&&h.update(t,this.player,d=>this.hurt(d));if(this.drone&&!this.drone.target){const h=this.im.carriables.find(d=>d.kind==="coin"&&!d.carried&&d.obj.visible&&d.pos.distanceTo(d.home)>1.5);h&&(this.drone.target=h.pos,this.drone.onSteal=()=>{h.pos.copy(h.home),this.ctx.hud.toast("DRONE REPOSSESSED A COIN. — HAYDEN",2),this.ctx.audio.play("chatter",.4)})}for(const h of this.hazards){const d=this.player.pos;if(d.x>h.min.x&&d.x<h.max.x&&d.y>h.min.y-.2&&d.y<h.max.y+.5&&d.z>h.min.z&&d.z<h.max.z){h.kind==="water"&&this.ctx.audio.play("splash",.5),this.hurt(h.kind),this.respawn();break}}this.player.pos.y<this.def.bounds.min.y&&(this.hurt("fall"),this.respawn());for(const h of this.secretWalls){const d=h.mesh.position.distanceTo(this.player.pos);if(!h.found&&d<1.4){h.found=!0;const p=h.mesh.material;p.transparent=!0,p.opacity=.3,this.ctx.hud.toast("SECRET ROOM. OBVIOUSLY.",2.4),this.ctx.audio.play("sparkle",.6),this.ctx.save.patch(g=>{g.secrets[`${this.def.id}-room`]=!0})}else if(h.found){const p=h.mesh.material;p.transparent=!0,p.opacity=d<3?.3:.95}}for(const h of this.pickups)if(!h.taken&&(h.obj.rotation.y+=t*2,h.obj.position.distanceTo(this.player.pos)<1.1)){if(h.kind==="goldenDuck"&&h.needs&&!this.ctx.save.data.weapons.includes(h.needs)){this.ctx.hud.toast(`THIS DUCK RESPECTS ONLY THE ${fr[h.needs]}.`,2);continue}this.collect(h)}this.player.pos.distanceTo(this.goalPos)<1.6&&this.finish(),this.onUpdate(t,e),this.ctx.camera.update(t,this.player.pos,new C(this.player.state.vx,0,this.player.state.vz),e.camNudge),e.pause&&this.ctx.togglePause()}onUpdate(t,e){}finish(){if(this.done)return;this.done=!0,this.ctx.audio.play("win",.7);const t=!this.ctx.save.data.chaptersDone.includes(this.def.id);this.ctx.save.patch(e=>{e.chaptersDone.includes(this.def.id)||e.chaptersDone.push(this.def.id),e.pearls+=t?100:25}),this.ctx.hud.setPearls(this.ctx.save.data.pearls),this.ctx.hud.toast(t?"CHAPTER CLEAR. +100 ⬤":"CHAPTER CLEAR AGAIN. +25 ⬤",3),setTimeout(()=>this.ctx.go("hub"),1800)}dispose(){this.ctx.hud.prompt(null)}}const Ss={low:-1.6,mid:-.6,high:.7};function Zm(){const i=[],t=K.sand;return i.push({kind:"box",pos:{x:0,y:-.25,z:-16},size:{x:44,y:.5,z:16},color:t}),i.push({kind:"box",pos:{x:0,y:-1.15,z:0},size:{x:44,y:.5,z:16},color:11902844}),i.push({kind:"box",pos:{x:0,y:-.25,z:16},size:{x:26,y:.5,z:16},color:t}),i.push({kind:"box",pos:{x:0,y:1.2,z:21},size:{x:10,y:2.4,z:1},color:14205331}),i.push({kind:"cylinder",pos:{x:-5.5,y:1.6,z:21},size:{x:2,y:3.2,z:2},color:14205331}),i.push({kind:"cylinder",pos:{x:5.5,y:1.6,z:21},size:{x:2,y:3.2,z:2},color:14205331}),i.push({kind:"box",pos:{x:-3.4,y:.5,z:19.4},size:{x:3,y:1,z:3},color:14205331}),i.push({kind:"box",pos:{x:3.4,y:1,z:19.4},size:{x:3,y:2,z:3},color:14205331}),i.push({kind:"box",pos:{x:18,y:1.5,z:10},size:{x:6,y:5,z:10},color:3817557}),i.push({kind:"box",pos:{x:18,y:-.25,z:2},size:{x:8,y:.5,z:6},color:t}),i.push({kind:"box",pos:{x:-16,y:.6,z:-6},size:{x:6,y:1.2,z:6},color:14205331}),i.push({kind:"box",pos:{x:-19,y:1.4,z:0},size:{x:5,y:1.4,z:5},color:14205331}),i.push({kind:"box",pos:{x:-16,y:2.3,z:6},size:{x:4,y:1.2,z:4},color:14205331}),{id:"ch4",name:"THE BEACH",tagline:"sand in the corvette. we do not speak of it.",skyGlow:5093631,fogDensity:.014,prims:i,cameraOffset:{x:0,y:7.2,z:-9},cameraZones:[{min:{x:-13,y:-2,z:10},max:{x:13,y:5,z:26},offset:{x:0,y:5.4,z:-10.5},fov:50}],parSeconds:240,bounds:{min:{x:-26,y:-8,z:-28},max:{x:26,y:30,z:28}},logic:[{when:{plates:["pa","pb","pc"]},open:"castle"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-22},yaw:0},{type:"goal",pos:{x:0,y:.6,z:22.5}},{type:"sign",pos:{x:6,y:0,z:-20},lines:["THE BEACH","shoes: optional. crabs: not."],yaw:Math.PI},{type:"sign",pos:{x:-8,y:0,z:-12},lines:["TIDE MACHINE","low · mid · high"],fg:"#4DB8FF"},{type:"valve",id:"tide",pos:{x:-6,y:0,z:-12}},{type:"carry",id:"b1",pos:{x:-8,y:-.9,z:-2},kind:"block",weight:2},{type:"carry",id:"b2",pos:{x:4,y:-.9,z:2},kind:"block",weight:2},{type:"carry",id:"b3",pos:{x:12,y:-.9,z:-4},kind:"block",weight:2},{type:"plate",id:"pa",pos:{x:0,y:-.9,z:6},needWeight:2},{type:"plate",id:"pb",pos:{x:-3.4,y:1,z:19.4},needWeight:2},{type:"plate",id:"pc",pos:{x:3.4,y:2,z:19.4},needWeight:2},{type:"door",id:"castle",pos:{x:0,y:1,z:21},size:{x:2.4,y:2,z:1.2},color:K.heartNeon},{type:"crab",pos:{x:-6,y:-.9,z:0},range:4},{type:"crab",pos:{x:8,y:-.9,z:4},range:3},{type:"crab",pos:{x:2,y:0,z:-10},range:5},{type:"interactZone",id:"rescue",pos:{x:-16,y:2.9,z:6},radius:2,label:"HELP THE DUCK"},{type:"weaponPickup",weapon:"whistle",pos:{x:-16,y:2.9,z:6}},{type:"letterPiece",pos:{x:6,y:-.7,z:8}},{type:"secretWall",pos:{x:15.4,y:1,z:5.2},size:{x:.8,y:3,z:4},color:3817557},{type:"polaroid",pos:{x:18,y:1.2,z:4},photo:"assets/photos/couple_snow.jpeg",yaw:-1.2},{type:"goldenDuck",id:11,pos:{x:20,y:.4,z:2}},{type:"pearl",pos:{x:19,y:.5,z:3.5}},{type:"pearl",pos:{x:21,y:.5,z:3.5}},{type:"goldenDuck",id:10,pos:{x:-19,y:2.6,z:0}},{type:"goldenDuck",id:12,pos:{x:18,y:4.6,z:10},needs:"boba"},{type:"bobaSpot",pos:{x:14.6,y:1.4,z:8}},{type:"bobaSpot",pos:{x:15.5,y:3,z:10}},{type:"pearl",pos:{x:0,y:.4,z:-18}},{type:"pearl",pos:{x:-10,y:.4,z:-14}},{type:"pearl",pos:{x:-16,y:1.6,z:-6}},{type:"pearl",pos:{x:0,y:-.7,z:2}},{type:"pearl",pos:{x:10,y:-.7,z:0}},{type:"pearl",pos:{x:0,y:.6,z:18}}]}}const Jm=[Ss.low,Ss.mid,Ss.high];class Qm extends fi{water;waterY=Ss.low;announced=-1;constructor(t){super(t,Zm()),this.water=new ht(new mn(60,40),new So({color:K.dockWater,transparent:!0,opacity:.78,emissive:1718894,emissiveIntensity:.5})),this.water.rotation.x=-Math.PI/2,this.water.position.set(0,this.waterY,2),this.scene.add(this.water),this.onZone=e=>{e==="rescue"&&(this.ctx.hud.toast("THE DUCK IS FINE. THE DUCK IS GRATEFUL.",2.6),this.ctx.audio.play("quack",.8,1.2))}}onUpdate(t){const e=this.valves.find(s=>s.id==="tide");if(!e)return;const n=Jm[e.state];e.state!==this.announced&&(this.announced=e.state,this.ctx.hud.toast(["TIDE: LOW","TIDE: MID","TIDE: HIGH"][e.state],1.6)),this.waterY=me.damp(this.waterY,n,1.2,t),this.water.position.y=this.waterY,this.water.position.y+=Math.sin(this.runTime*1.4)*.05;for(const s of this.im.carriables){if(s.kind!=="block"||s.carried)continue;const r=this.water.position.y;r>s.pos.y&&(s.pos.y=r)}this.player.pos.y<this.water.position.y-.35&&(this.ctx.audio.play("splash",.6),this.hurt("water"),this.respawn())}}const tg={x:0,z:-10},eg={x:12,z:14},Ba={m1:0,m2:0,m3:1,m4:1,m5:0};function ng(i){const t={m1:{x:0,z:-2},m2:{x:8,z:-2},m3:{x:8,z:8},m4:{x:-8,z:8},m5:{x:-8,z:14}};return Object.keys(t).map(e=>({pos:t[e],state:i[e]??0}))}function ig(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:-14},size:{x:34,y:.5,z:10},color:K.grass});const n=(s,r,o,a)=>{i.push({kind:"box",pos:{x:s,y:-.15,z:r},size:{x:o,y:.3,z:a},color:6508858})};n(0,-4,3.4,12),n(4,-2,12,3),n(8,3,3,13),n(0,8,19,3),n(-8,11,3,9),n(2,14,17,3.4),n(12,14,5,5);for(const[s,r]of[[0,-2],[8,-2],[8,8],[-8,8],[-8,14],[12,14],[4,8],[0,14]])i.push({kind:"cylinder",pos:{x:s,y:-1.4,z:r},size:{x:.5,y:2.6,z:.5},color:3813154});return i.push({kind:"box",pos:{x:4,y:-2.4,z:1.5},size:{x:4.4,y:.3,z:4.4},color:2765650}),i.push({kind:"box",pos:{x:0,y:-3.1,z:4},size:{x:80,y:.4,z:70},color:K.dockWater,ghost:!0}),i.push({kind:"cylinder",pos:{x:0,y:.25,z:-10},size:{x:1,y:.5,z:1},color:3094614}),i.push({kind:"box",pos:{x:0,y:.95,z:-10},size:{x:.42,y:.42,z:.42},color:K.star,emissive:K.star,emissiveIntensity:2.6,ghost:!0}),i.push({kind:"cylinder",pos:{x:12,y:1.2,z:14},size:{x:.7,y:2,z:.7},color:3094614}),{id:"ch5",name:"THE DOCK & STARS",tagline:"lying on the dock. watching.",skyGlow:10336511,fogDensity:.017,prims:i,cameraOffset:{x:0,y:6.6,z:-9.4},cameraZones:[],parSeconds:260,bounds:{min:{x:-24,y:-8,z:-22},max:{x:24,y:30,z:26}},logic:[],entities:[{type:"spawn",pos:{x:0,y:0,z:-13},yaw:0},{type:"goal",pos:{x:12,y:0,z:17}},{type:"sign",pos:{x:4,y:0,z:-13},lines:["THE DOCK","mind the cold water"],yaw:Math.PI},{type:"sign",pos:{x:-3.4,y:0,z:-9},lines:["ROUTE THE STARLIGHT","into the telescope"],fg:"#9DB8FF"},{type:"rotor",id:"m1",pos:{x:0,y:0,z:-2},states:2,state:1,kind:"mirror"},{type:"rotor",id:"m2",pos:{x:8,y:0,z:-2},states:2,state:1,kind:"mirror"},{type:"rotor",id:"m3",pos:{x:8,y:0,z:8},states:2,state:0,kind:"mirror"},{type:"rotor",id:"m4",pos:{x:-8,y:0,z:8},states:2,state:0,kind:"mirror"},{type:"rotor",id:"m5",pos:{x:-8,y:0,z:14},states:2,state:1,kind:"mirror"},{type:"wisp",pos:{x:4,y:1,z:3},radius:2.4},{type:"wisp",pos:{x:-3,y:1.2,z:11},radius:2.6},{type:"letterPiece",pos:{x:0,y:.4,z:8}},{type:"secretWall",pos:{x:4,y:-1.2,z:3.9},size:{x:4.4,y:2.2,z:.5},color:2765650},{type:"weaponPickup",weapon:"ankh",pos:{x:4,y:-2.1,z:.2}},{type:"sign",pos:{x:5.5,y:-2.4,z:2.6},lines:["the safety-pin tattoo","ascended. she still hates it."],fg:"#CBB7E8"},{type:"goldenDuck",id:14,pos:{x:2.6,y:-1.9,z:.2}},{type:"goldenDuck",id:13,pos:{x:0,y:1,z:16}},{type:"goldenDuck",id:15,pos:{x:17,y:.6,z:8},needs:"ankh"},{type:"hazard",kind:"water",shape:{pos:{x:0,y:-2.8,z:4},size:{x:80,y:1.2,z:70}}},{type:"pearl",pos:{x:0,y:.3,z:-6}},{type:"pearl",pos:{x:4,y:.3,z:-2}},{type:"pearl",pos:{x:8,y:.3,z:4}},{type:"pearl",pos:{x:0,y:.3,z:8}},{type:"pearl",pos:{x:-8,y:.3,z:11}},{type:"pearl",pos:{x:6,y:.3,z:14}}]}}const sg={px:[1,0],nx:[-1,0],pz:[0,1],nz:[0,-1]},rg={pz:"px",nz:"nx",px:"pz",nx:"nz"},og={pz:"nx",nz:"px",px:"nz",nx:"pz"};function ag(i,t,e,n,s=60,r=1.1){const o=[{...i}];let a={...i},c=t;const l=new Set;for(let u=0;u<12;u++){const[h,d]=sg[c];let p=1/0,g=null;for(const x of e){if(l.has(x))continue;const m=x.pos.x-a.x,f=x.pos.z-a.z,E=m*h+f*d,w=Math.abs(m*d-f*h);E>.4&&E<p&&w<r&&(p=E,g=x)}{const x=n.x-a.x,m=n.z-a.z,f=x*h+m*d,E=Math.abs(x*d-m*h);if(f>.4&&E<r&&f<p)return o.push({x:a.x+h*f,z:a.z+d*f}),{points:o,hitTarget:!0}}if(!g||p>s)return o.push({x:a.x+h*Math.min(s,24),z:a.z+d*Math.min(s,24)}),{points:o,hitTarget:!1};a={x:g.pos.x,z:g.pos.z},o.push({...a}),l.add(g),c=g.state%2===0?rg[c]:og[c]}return{points:o,hitTarget:!1}}class cg{constructor(t,e=K.star){this.y=t,this.color=e}group=new kt;segments=[];render(t){for(;this.segments.length<t.points.length-1;){const e=new ht(new oe(.09,.09,1),_e(this.color,2.4));this.group.add(e),this.segments.push(e)}for(let e=0;e<this.segments.length;e++){const n=this.segments[e];if(e>=t.points.length-1){n.visible=!1;continue}const s=t.points[e],r=t.points[e+1],o=Math.hypot(r.x-s.x,r.z-s.z);n.visible=o>.01,n.scale.z=o,n.position.set((s.x+r.x)/2,this.y,(s.z+r.z)/2),n.rotation.y=Math.atan2(r.x-s.x,r.z-s.z)}}}class lg extends fi{beam=new cg(1.1);solved=!1;constellation=null;goalBlocker;constructor(t){super(t,ig()),this.scene.add(this.beam.group),this.goalBlocker=this.world.addCollider({kind:"box",center:new C(10.2,1,14),half:new C(.4,2,2.6),yaw:0,enabled:!0})}onUpdate(t){const e={};for(const s of this.rotors)e[s.id]=s.state;const n=ag(tg,"pz",ng(e),eg);this.beam.render(n),n.hitTarget&&!this.solved&&(this.solved=!0,this.goalBlocker.enabled=!1,this.ctx.audio.play("sparkle",.8),this.ctx.audio.play("win",.5),this.ctx.hud.toast("THE SKY REMEMBERS. GO LOOK.",3),this.igniteConstellation(),this.ctx.camera.kick(.3),Object.keys(Ba).every(r=>e[r]===Ba[r])||this.ctx.hud.toast("AN UNCONVENTIONAL ROUTING. RESPECT.",2.5))}igniteConstellation(){if(this.constellation)return;this.constellation=new kt;const t=n=>{const s=16*Math.sin(n)**3,r=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);return[s,r]};for(let n=0;n<26;n++){const[s,r]=t(n/26*Math.PI*2),o=new ht(new De(.28,8,6),_e(K.star,3));o.position.set(s*.9,18+r*.9,40),this.constellation.add(o)}const e=new yi(K.heartNeon,300,80,1.4);e.position.set(0,18,38),this.constellation.add(e),this.scene.add(this.constellation)}}const Sn={x:0,z:18},hg=[{id:"sk1",x:-8,z:6},{id:"sk2",x:0,z:2},{id:"sk3",x:9,z:8}];function ug(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:44,y:.5,z:52},color:1386543}),i.push({kind:"box",pos:{x:0,y:1.2,z:18},size:{x:6,y:2.4,z:5},color:3817557}),i.push({kind:"box",pos:{x:0,y:.6,z:24},size:{x:10,y:1.2,z:4},color:1386543});for(const[e,n,s]of[[-10,-2,2.2],[6,-6,1.8],[12,2,2.6],[-14,10,2],[-4,12,1.6],[10,14,2]])i.push({kind:"box",pos:{x:e,y:s/2,z:n},size:{x:s,y:s,z:s},color:3225935});return i.push({kind:"box",pos:{x:18,y:-.15,z:-8},size:{x:8,y:.3,z:3},color:4016747,invisible:!0}),i.push({kind:"box",pos:{x:24,y:-.25,z:-8},size:{x:6,y:.5,z:8},color:3225935}),{id:"ch6",name:"TWILIGHT FOREST",tagline:"he sparkles. that's not a personality.",skyGlow:14542832,fogDensity:.035,prims:i,cameraOffset:{x:0,y:6,z:-8.8},cameraZones:[{min:{x:-20,y:-1,z:-14},max:{x:20,y:4,z:14},offset:{x:0,y:4.6,z:-7.6},fov:58}],parSeconds:260,bounds:{min:{x:-24,y:-6,z:-20},max:{x:30,y:30,z:30}},logic:[],entities:[{type:"spawn",pos:{x:0,y:0,z:-16},yaw:0},{type:"goal",pos:{x:0,y:1.2,z:24}},{type:"sign",pos:{x:5,y:0,z:-14},lines:["TWILIGHT FOREST","sparkle warning: severe"],yaw:Math.PI,fg:"#DDE7F0"},{type:"carry",id:"s1",pos:{x:-14,y:0,z:-8},kind:"mirrorShield",weight:2},{type:"carry",id:"s2",pos:{x:14,y:0,z:-2},kind:"mirrorShield",weight:2},{type:"carry",id:"s3",pos:{x:-6,y:0,z:14},kind:"mirrorShield",weight:2},{type:"wisp",pos:{x:-6,y:1,z:2},radius:3},{type:"wisp",pos:{x:8,y:1.2,z:10},radius:2.4},{type:"wisp",pos:{x:2,y:1,z:-8},radius:3.4},{type:"letterPiece",pos:{x:-18,y:.4,z:4}},{type:"goldenDuck",id:17,pos:{x:24,y:.5,z:-8}},{type:"polaroid",pos:{x:26,y:1.2,z:-10},photo:"assets/photos/bentley.jpeg",yaw:-.8},{type:"pearl",pos:{x:23,y:.5,z:-6}},{type:"pearl",pos:{x:25,y:.5,z:-6}},{type:"sign",pos:{x:24,y:0,z:-11},lines:["GLITTER STASH","he has a problem."],fg:"#DDE7F0"},{type:"goldenDuck",id:16,pos:{x:12,y:3,z:2}},{type:"goldenDuck",id:18,pos:{x:-14,y:4.5,z:10},needs:"whistle"},{type:"pearl",pos:{x:0,y:.4,z:-10}},{type:"pearl",pos:{x:-10,y:.4,z:0}},{type:"pearl",pos:{x:10,y:.4,z:6}},{type:"pearl",pos:{x:0,y:.4,z:10}}]}}class dg extends fi{edward;beamArm;sweepAngle=0;reflections=0;reflectedThisPass=new Set;lastSector=0;sockets=[];yeeted=!1;goalBlocker;constructor(t){super(t,ug());const e=(()=>{let o=11;return()=>(o=o*16807%2147483647)/2147483647})();for(let o=0;o<40;o++){const a=Rc(2.5+e()*3.5,1915445),c=-21+e()*42,l=-18+e()*40;Math.hypot(c-Sn.x,l-Sn.z)<7||Math.abs(c)+Math.abs(l)<6||(a.position.set(c,0,l),this.scene.add(a))}this.edward=new kt;const n=new ht(new oe(.6,1.5,.4),Xt(2764613,{flatShading:!1}));n.position.y=3.15,this.edward.add(n);const s=new ht(new oe(.4,.45,.4),Xt(K.edwardPale,{gloss:.9,rim:.6,flatShading:!1}));s.position.y=4.1,this.edward.add(s);const r=new ht(new oe(.44,.18,.44),Xt(7034163));r.position.y=4.38,this.edward.add(r),this.edward.position.set(Sn.x,0,Sn.z),this.scene.add(this.edward),this.beamArm=new ht(new oe(.24,.24,30),_e(K.edwardPale,2)),this.beamArm.position.set(Sn.x,1.2,Sn.z),this.scene.add(this.beamArm);for(const o of hg){const a=new ht(new Xn(.8,.09,8,18),new pn({color:K.grandmaLilac,transparent:!0,opacity:.16}));a.rotation.x=Math.PI/2,a.position.set(o.x,.12,o.z),this.scene.add(a),this.sockets.push({id:o.id,pos:new C(o.x,0,o.z),ring:a,filled:!1})}this.goalBlocker=this.world.addCollider({kind:"box",center:new C(0,1.5,21.4),half:new C(5,2.5,.5),yaw:0,enabled:!0})}onUpdate(t){if(this.yeeted)return;const e=this.weapons.ankhActive&&this.weapons.equipped==="ankh";for(const a of this.sockets)if(a.ring.material.opacity=a.filled?.9:e?.85:.16,!a.filled){const c=this.im.carriables.find(l=>l.kind==="mirrorShield"&&!l.carried&&l.pos.distanceTo(a.pos)<1.2);c&&(a.filled=!0,c.pos.set(a.pos.x,0,a.pos.z),this.ctx.audio.play("correct",.6),this.ctx.hud.toast(`SHIELD SET. ${this.sockets.filter(l=>l.filled).length}/3`,1.8))}this.sweepAngle+=t*.85;const n=new C(Math.sin(this.sweepAngle),0,Math.cos(this.sweepAngle));this.beamArm.position.set(Sn.x+n.x*15,1.2,Sn.z+n.z*15),this.beamArm.rotation.y=Math.atan2(n.x,n.z);const s=Math.floor(this.sweepAngle/(Math.PI*2));s!==this.lastSector&&(this.lastSector=s,this.reflectedThisPass.clear());const r=this.player.pos.clone().sub(this.edward.position).setY(0),o=r.dot(n);if(o>1&&o<30){const a=Math.abs(r.x*n.z-r.z*n.x),c=this.world.groundAt(this.player.pos.x,this.player.pos.z,this.player.pos.y+2.5)>this.player.pos.y+.5;a<.9&&!c&&this.player.pos.y<2.5&&this.hurt("sparkle");for(const l of this.sockets){if(!l.filled||this.reflectedThisPass.has(l.id))continue;const u=l.pos.clone().sub(this.edward.position).setY(0),h=u.dot(n),d=Math.abs(u.x*n.z-u.z*n.x);h>1&&h<30&&d<1.1&&(this.reflectedThisPass.add(l.id),this.reflections++,this.ctx.audio.play("sparkle",.8,.8),this.ctx.camera.kick(.35),this.ctx.hud.toast(`REFLECTED. ${this.reflections}/3`,1.6),this.reflections>=3&&this.yeet())}}}yeet(){this.yeeted=!0,this.goalBlocker.enabled=!1,this.beamArm.visible=!1,this.ctx.audio.play("howl",.8),this.ctx.hud.toast("EDWARD HAS LEFT THE TREELINE. TEAM-ROCKET STYLE.",3.2);const t=this.edward.position.clone(),e=this.runTime,n=()=>{const s=this.runTime-e;s>2.4||!this.edward.parent||(this.edward.position.set(t.x+s*9,s*14-2.2*s*s,t.z+s*16),this.edward.rotation.z+=.12,requestAnimationFrame(n))};n(),this.ctx.camera.kick(.5)}}function fg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:46,y:.5,z:34},color:1844296}),i.push({kind:"box",pos:{x:18,y:-.25,z:-6},size:{x:12,y:.5,z:8},color:1844296}),i.push({kind:"box",pos:{x:0,y:-.25,z:19},size:{x:8,y:.5,z:8},color:K.concrete}),i.push({kind:"box",pos:{x:0,y:1.6,z:-17},size:{x:46,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-12.75,y:1.6,z:17},size:{x:20.5,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:12.75,y:1.6,z:17},size:{x:20.5,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-23,y:1.6,z:0},size:{x:.8,y:3.2,z:34},color:2568282}),i.push({kind:"box",pos:{x:23,y:1.6,z:5.25},size:{x:.8,y:3.2,z:23.5},color:2568282}),i.push({kind:"box",pos:{x:23,y:1.6,z:-12.75},size:{x:.8,y:3.2,z:8.5},color:2568282}),i.push({kind:"box",pos:{x:24.4,y:1.6,z:-6},size:{x:.8,y:3.2,z:9},color:2568282}),i.push({kind:"box",pos:{x:18.7,y:1.6,z:-1.6},size:{x:12,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:18.7,y:1.6,z:-10.4},size:{x:12,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-19.5,y:2.85,z:0},size:{x:6,y:.4,z:8},color:3094614}),i.push({kind:"box",pos:{x:0,y:4.6,z:0},size:{x:40,y:.3,z:1.2},color:3292003}),i.push({kind:"box",pos:{x:-14,y:3.4,z:3.5},size:{x:1.6,y:.3,z:1.6},color:3752558}),i.push({kind:"box",pos:{x:-9,y:4,z:1.8},size:{x:1.6,y:.3,z:1.6},color:3752558}),i.push({kind:"box",pos:{x:-19,y:5.4,z:-13},size:{x:4,y:.4,z:4},color:3752558});for(const n of[-10,-6,-2])i.push({kind:"box",pos:{x:8,y:.35,z:n},size:{x:2.6,y:.7,z:1},color:3094614});return i.push({kind:"box",pos:{x:14,y:.8,z:10},size:{x:6,y:1.6,z:1.2},color:3094614}),{id:"ch1",name:"THE GYM",tagline:"it started at the gym.",skyGlow:K.ramenGold,fogDensity:.012,prims:i,cameraOffset:{x:0,y:6.9,z:-8.2},cameraZones:[{min:{x:-23,y:-1,z:-10},max:{x:-8,y:4,z:10},offset:{x:4,y:8.5,z:-8},fov:50}],parSeconds:170,bounds:{min:{x:-30,y:-6,z:-24},max:{x:30,y:30,z:26}},logic:[{when:{plates:["pl","pr"]},open:"lift1"},{when:{key:!0},open:"gate"},{when:{switches:["st1"]},open:"bonus"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-11},yaw:0},{type:"goal",pos:{x:0,y:0,z:20}},{type:"sign",pos:{x:5,y:0,z:-13},lines:["LAINIE FITNESS","members: 2 (+1 dog)"],yaw:Math.PI},{type:"plate",id:"pl",pos:{x:-14,y:0,z:-4},needWeight:3,exactWeight:!0},{type:"plate",id:"pr",pos:{x:-14,y:0,z:4},needWeight:3,exactWeight:!0},{type:"carry",id:"d1",pos:{x:-9,y:0,z:-8},kind:"dumbbell",weight:1},{type:"carry",id:"d2",pos:{x:-7,y:0,z:1},kind:"dumbbell",weight:2},{type:"carry",id:"d3",pos:{x:-17,y:0,z:9},kind:"dumbbell",weight:3},{type:"carry",id:"d4",pos:{x:-5,y:0,z:7},kind:"dumbbell",weight:1},{type:"sign",pos:{x:-14,y:0,z:-9.5},lines:["BALANCE.","both sides. exactly."],fg:"#33FF88"},{type:"lift",id:"lift1",pos:{x:-11,y:.2,z:0},size:{x:2.6,y:.4,z:2.6},to:{x:-11,y:2.8,z:0},color:3752558},{type:"carry",id:"key",pos:{x:-19.5,y:3.1,z:0},kind:"key"},{type:"door",id:"gate",pos:{x:0,y:1.5,z:17},size:{x:4,y:3,z:.7},color:K.heartNeon,needsKey:!0},{type:"duck",pos:{x:4,y:0,z:4},patrol:[{x:4,y:0,z:4},{x:10,y:0,z:4},{x:10,y:0,z:-2},{x:4,y:0,z:-2}]},{type:"duck",pos:{x:-4,y:0,z:10},patrol:[{x:-4,y:0,z:10},{x:4,y:0,z:12}],speed:3},{type:"letterPiece",pos:{x:0,y:.6,z:0}},{type:"secretWall",pos:{x:23,y:1.6,z:-6},size:{x:.8,y:3.2,z:4.9},color:2568282},{type:"weaponPickup",weapon:"ball",pos:{x:20,y:0,z:-6}},{type:"polaroid",pos:{x:22.5,y:1.4,z:-8.8},photo:"assets/photos/couple_mirror1.jpeg",yaw:-.6},{type:"goldenDuck",id:2,pos:{x:17,y:.4,z:-8.5}},{type:"goldenDuck",id:1,pos:{x:0,y:5.2,z:0}},{type:"goldenDuck",id:3,pos:{x:-19,y:6,z:-13},needs:"boba"},{type:"bobaSpot",pos:{x:-19,y:3.6,z:-9.5}},{type:"bobaSpot",pos:{x:-19,y:4.6,z:-11.2}},{type:"switchTarget",id:"st1",pos:{x:12,y:2.6,z:15}},{type:"door",id:"bonus",pos:{x:16,y:1.2,z:16.6},size:{x:2.2,y:2.4,z:.7},color:K.ramenGold},{type:"pearl",pos:{x:16,y:.5,z:18.5}},{type:"pearl",pos:{x:17,y:.5,z:18.5}},{type:"pearl",pos:{x:15,y:.5,z:18.5}},{type:"pearl",pos:{x:-3,y:.4,z:-8}},{type:"pearl",pos:{x:-8,y:.4,z:-5}},{type:"pearl",pos:{x:-11,y:3.4,z:0}},{type:"pearl",pos:{x:-14,y:4,z:3.5}},{type:"pearl",pos:{x:-9,y:4.6,z:1.8}},{type:"pearl",pos:{x:6,y:.4,z:12}}]}}function pg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:16,y:.5,z:60},color:1580862}),i.push({kind:"box",pos:{x:16,y:-.25,z:18},size:{x:20,y:.5,z:14},color:1580862});const n=[[-11,2.2,-20,6,10],[-11,1.8,-6,6,8],[-11,2.6,8,6,9],[-11,2,20,6,8],[11,2.2,-22,6,8],[11,1.6,-10,6,7],[11,2.4,2,6,8],[16,2.2,27.5,16,5],[27.5,2,18,5,12]];for(const[s,r,o,a,c]of n)i.push({kind:"box",pos:{x:s,y:r/2,z:o},size:{x:a,y:r,z:c},color:2305104});return i.push({kind:"box",pos:{x:-7.9,y:2.4,z:8},size:{x:.2,y:1,z:1.4},color:K.ramenGold,emissive:K.ramenGold,emissiveIntensity:1.6,ghost:!0}),i.push({kind:"box",pos:{x:22,y:1.6,z:12.4},size:{x:8,y:3.2,z:.8},color:2305104}),i.push({kind:"box",pos:{x:22,y:1.6,z:23.6},size:{x:8,y:3.2,z:.8},color:2305104}),i.push({kind:"box",pos:{x:25.6,y:1.6,z:18},size:{x:.8,y:3.2,z:12},color:2305104}),i.push({kind:"box",pos:{x:0,y:-.25,z:36},size:{x:10,y:.5,z:12},color:K.concrete}),i.push({kind:"box",pos:{x:-13,y:-.25,z:-14},size:{x:10,y:.5,z:10},color:1580862}),{id:"ch2",name:"LINCOLN AFTER DARK",tagline:"population: small. exits: one.",skyGlow:K.taroPurple,fogDensity:.02,prims:i,cameraOffset:{x:0,y:7.2,z:-8.6},cameraZones:[{min:{x:8,y:-1,z:12},max:{x:28,y:4,z:24},offset:{x:-5,y:6.5,z:-6},fov:52}],parSeconds:200,bounds:{min:{x:-22,y:-6,z:-32},max:{x:32,y:30,z:44}},logic:[{when:{rotors:{r1:1,r2:0,r3:3,r4:2}},open:"exit"},{when:{switches:["jar1"]},open:"shopdoor"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-26},yaw:0},{type:"goal",pos:{x:0,y:0,z:40}},{type:"sign",pos:{x:4.5,y:0,z:-24},lines:["LINCOLN, MAINE","famous for: nothing"],yaw:Math.PI},{type:"sign",pos:{x:-5,y:0,z:30},lines:["ONE (1) EXIT","power required"],fg:"#33FF88"},{type:"rotor",id:"r1",pos:{x:-4,y:0,z:-14},states:4,state:3,kind:"barrier"},{type:"rotor",id:"r2",pos:{x:4,y:0,z:-2},states:4,state:2,kind:"barrier"},{type:"rotor",id:"r3",pos:{x:-4,y:0,z:10},states:4,state:1,kind:"barrier"},{type:"rotor",id:"r4",pos:{x:3,y:0,z:24},states:4,state:0,kind:"barrier"},{type:"door",id:"exit",pos:{x:0,y:1.5,z:33},size:{x:6,y:3,z:.7},color:K.crtGreen},{type:"hazard",kind:"mud",shape:{pos:{x:-3,y:0,z:-8},size:{x:5,y:.4,z:4}}},{type:"hazard",kind:"mud",shape:{pos:{x:5,y:0,z:5},size:{x:5,y:.4,z:5}}},{type:"hazard",kind:"mud",shape:{pos:{x:-2,y:0,z:17},size:{x:6,y:.4,z:4}}},{type:"duck",pos:{x:0,y:0,z:6},patrol:[{x:-5,y:0,z:6},{x:5,y:0,z:6}]},{type:"duck",pos:{x:2,y:0,z:20},patrol:[{x:2,y:0,z:20},{x:-4,y:0,z:26},{x:4,y:0,z:28}],speed:2.8},{type:"duck",pos:{x:14,y:0,z:18},patrol:[{x:12,y:0,z:15},{x:20,y:0,z:21}],speed:3.2},{type:"switchTarget",id:"jar1",pos:{x:21,y:3.8,z:13}},{type:"door",id:"shopdoor",pos:{x:18.4,y:1.4,z:18},size:{x:.7,y:2.8,z:4},color:K.taroPurple},{type:"weaponPickup",weapon:"boba",pos:{x:22.5,y:0,z:18}},{type:"sign",pos:{x:20,y:0,z:10},lines:["BOBA SHOP","opening: never"],fg:"#B388EB",yaw:.4},{type:"pearl",pos:{x:24,y:.5,z:15}},{type:"pearl",pos:{x:24,y:.5,z:21}},{type:"letterPiece",pos:{x:-6.5,y:.5,z:8}},{type:"secretWall",pos:{x:-13,y:1.6,z:-9.6},size:{x:8,y:3.2,z:.8},color:2305104},{type:"polaroid",pos:{x:-13,y:1.3,z:-16},photo:"assets/photos/couple_mirror2.jpeg"},{type:"goldenDuck",id:5,pos:{x:-16,y:.4,z:-16}},{type:"pearl",pos:{x:-10,y:.5,z:-16}},{type:"pearl",pos:{x:-12,y:.5,z:-17}},{type:"goldenDuck",id:4,pos:{x:11,y:3,z:2}},{type:"goldenDuck",id:6,pos:{x:-11,y:6,z:8},needs:"whistle"},{type:"carry",id:"block1",pos:{x:7,y:0,z:-3},kind:"block",weight:2},{type:"pearl",pos:{x:0,y:.4,z:-18}},{type:"pearl",pos:{x:-2,y:.4,z:0}},{type:"pearl",pos:{x:3,y:.4,z:14}},{type:"pearl",pos:{x:0,y:.4,z:28}},{type:"pearl",pos:{x:11,y:3.2,z:0}}]}}function mg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:-12},size:{x:18,y:.5,z:24},color:1844032}),i.push({kind:"box",pos:{x:0,y:-.25,z:12},size:{x:8,y:.5,z:24},color:K.concrete}),i.push({kind:"box",pos:{x:0,y:-.25,z:32},size:{x:14,y:.5,z:16},color:1844032}),i.push({kind:"box",pos:{x:0,y:-4,z:12},size:{x:60,y:.5,z:24},color:K.dockWater,ghost:!0});for(const e of[-1,1])i.push({kind:"box",pos:{x:3.8*e,y:.5,z:12},size:{x:.4,y:1,z:24},color:3818600});return i.push({kind:"box",pos:{x:6.5,y:-2.2,z:10},size:{x:5,y:.4,z:6},color:2765650}),i.push({kind:"box",pos:{x:3.4,y:1.4,z:-1},size:{x:2.6,y:2.8,z:2.6},color:3818600}),i.push({kind:"box",pos:{x:3.4,y:3,z:-1},size:{x:3.2,y:.3,z:3.2},color:5857663}),i.push({kind:"box",pos:{x:7,y:.5,z:-4},size:{x:1.4,y:1,z:1.4},color:4864808}),i.push({kind:"box",pos:{x:6,y:1,z:-2},size:{x:1.4,y:2,z:1.4},color:4864808}),i.push({kind:"cylinder",pos:{x:-6,y:1.5,z:-6},size:{x:1,y:3,z:1},color:3818600}),{id:"ch3",name:"HAYDEN'S TOLL BRIDGE",tagline:"this dash will be invoiced.",skyGlow:K.ramenGold,fogDensity:.016,prims:i,cameraOffset:{x:0,y:7,z:-8.6},cameraZones:[{min:{x:-4,y:-1,z:2},max:{x:4,y:4,z:24},offset:{x:-9,y:4.5,z:0},fov:54}],parSeconds:210,bounds:{min:{x:-20,y:-8,z:-26},max:{x:20,y:30,z:42}},logic:[{when:{paidExact:{slot:"till",amount:7}},open:"tollgate"},{when:{switches:["jar"]},open:"jarhatch"}],entities:[{type:"spawn",pos:{x:-3,y:0,z:-20},yaw:0},{type:"goal",pos:{x:0,y:0,z:36}},{type:"sign",pos:{x:-5,y:0,z:-3},lines:["TOLL: 7 ⬤ EXACT","itemized: crossing 5,","convenience 1, vibes 1"],fg:"#FFB627"},{type:"sign",pos:{x:5.5,y:0,z:-18},lines:["HAYDEN LLC","no refunds. ever."],yaw:Math.PI},{type:"slot",id:"till",pos:{x:1.4,y:0,z:-1},accepts:"coin"},{type:"door",id:"tollgate",pos:{x:0,y:1.4,z:1},size:{x:7.4,y:2.8,z:.6},color:K.ramenGold},{type:"carry",id:"c1",pos:{x:-6,y:0,z:-14},kind:"coin",weight:0,value:2},{type:"carry",id:"c2",pos:{x:6,y:0,z:-10},kind:"coin",weight:0,value:1},{type:"carry",id:"c3",pos:{x:-6,y:3.2,z:-6},kind:"coin",weight:0,value:2},{type:"carry",id:"c4",pos:{x:3.4,y:3.4,z:-1},kind:"coin",weight:0,value:2},{type:"carry",id:"c5",pos:{x:0,y:0,z:-7},kind:"coin",weight:0,value:5},{type:"switchTarget",id:"jar",pos:{x:-6,y:3.6,z:-6}},{type:"door",id:"jarhatch",pos:{x:-6,y:.9,z:-5.2},size:{x:1.2,y:1.8,z:.3},color:5857663},{type:"drone",pos:{x:0,y:0,z:-6}},{type:"duck",pos:{x:-2,y:0,z:28},patrol:[{x:-4,y:0,z:26},{x:4,y:0,z:30}]},{type:"duck",pos:{x:2,y:0,z:34},patrol:[{x:4,y:0,z:32},{x:-4,y:0,z:36}],speed:3},{type:"letterPiece",pos:{x:0,y:.5,z:12}},{type:"secretWall",pos:{x:6.5,y:-1,z:13.2},size:{x:5,y:2.2,z:.6},color:2765650},{type:"goldenDuck",id:8,pos:{x:6.5,y:-1.8,z:8}},{type:"pearl",pos:{x:5.5,y:-1.8,z:9}},{type:"pearl",pos:{x:7.5,y:-1.8,z:9}},{type:"pearl",pos:{x:6.5,y:-1.8,z:11}},{type:"sign",pos:{x:6.5,y:-2.2,z:12},lines:["HAYDEN'S VAULT","shhh."],fg:"#FFB627"},{type:"goldenDuck",id:7,pos:{x:3.4,y:3.9,z:-1}},{type:"goldenDuck",id:9,pos:{x:-8,y:-1.5,z:16},needs:"ankh"},{type:"hazard",kind:"water",shape:{pos:{x:0,y:-3.6,z:12},size:{x:60,y:1.4,z:24}}},{type:"pearl",pos:{x:0,y:.4,z:-16}},{type:"pearl",pos:{x:2,y:.4,z:6}},{type:"pearl",pos:{x:-2,y:.4,z:18}},{type:"pearl",pos:{x:0,y:.4,z:26}}]}}const Ha={ch1:i=>new fi(i,fg()),ch2:i=>new fi(i,pg()),ch3:i=>new fi(i,mg()),ch4:i=>new Qm(i),ch5:i=>new lg(i),ch6:i=>new dg(i)},pr=1/120,gg=.1;class _g{ctx;current=null;accumulator=0;lastTime=performance.now();paused=!1;pauseOverlay=null;constructor(){const t=document.getElementById("app"),e=document.createElement("canvas");e.className="game",t.appendChild(e);const n=new pm,s=matchMedia("(pointer: coarse)").matches,r=n.data.tier??(s?"mobile":"ultra"),o=new cm({canvas:e,antialias:!0,powerPreference:"high-performance"});o.outputColorSpace=Ue,o.toneMapping=Wa,o.toneMappingExposure=1.05,r==="ultra"?(o.shadowMap.enabled=!0,o.shadowMap.type=Va,o.setPixelRatio(Math.min(devicePixelRatio,3))):o.setPixelRatio(Math.min(devicePixelRatio,2)),o.setSize(innerWidth,innerHeight);const a=new _m(innerWidth/innerHeight),c=new lm(e),l=new dm(n.data.muted,h=>n.patch(d=>{d.muted=h})),u=new gm(t,()=>l.setMuted(!l.muted),()=>this.togglePause());u.buildTouchControls(c),u.setPearls(n.data.pearls),u.setPieces(n.data.pieces.length),this.ctx={renderer:o,camera:a,input:c,audio:l,save:n,hud:u,tier:r,go:(h,d)=>this.go(h,d),togglePause:()=>this.togglePause()},addEventListener("resize",()=>this.onResize()),visualViewport?.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&!this.paused&&this.togglePause()}),e.addEventListener("webglcontextlost",h=>h.preventDefault()),new URLSearchParams(location.search).has("debug")&&(window.__dj={go:(h,d)=>this.go(h,d),state:()=>({scene:this.current?.constructor.name,paused:this.paused,save:this.ctx.save.data}),ctx:this.ctx}),this.go("hub"),requestAnimationFrame(h=>this.frame(h))}go(t,e){this.ctx.hud.fade(!0);const n=()=>{this.current?.dispose();const s=typeof e?.id=="string"?e.id:null;t==="play"&&s&&Ha[s]?this.current=Ha[s](this.ctx):this.current=new Fm(this.ctx),this.ctx.hud.fade(!1)};this.current?setTimeout(n,420):n()}onResize(){this.ctx.renderer.setSize(innerWidth,innerHeight),this.ctx.camera.cam.aspect=innerWidth/innerHeight,this.ctx.camera.cam.updateProjectionMatrix()}togglePause(){if(this.paused=!this.paused,this.paused){const t=this.ctx.hud.overlay();t.innerHTML=`
        <h1>PAUSED</h1>
        <button class="dj-btn" data-a="resume">RESUME</button>
        <button class="dj-btn" data-a="tier">QUALITY: ${this.ctx.tier.toUpperCase()}</button>
        <button class="dj-btn" data-a="mute">${this.ctx.audio.muted?"UNMUTE":"MUTE"} MUSIC</button>
      `,t.querySelector('[data-a="resume"]').addEventListener("click",()=>this.togglePause()),t.querySelector('[data-a="tier"]').addEventListener("click",()=>{const e=this.ctx.tier==="ultra"?"mobile":"ultra";this.ctx.save.patch(n=>{n.tier=e}),location.reload()}),t.querySelector('[data-a="mute"]').addEventListener("click",()=>{this.ctx.audio.setMuted(!this.ctx.audio.muted),this.togglePause()}),this.pauseOverlay=t}else this.pauseOverlay?.remove(),this.pauseOverlay=null,this.lastTime=performance.now()}frame(t){requestAnimationFrame(s=>this.frame(s));const e=Math.min(gg,(t-this.lastTime)/1e3);if(this.lastTime=t,this.paused||!this.current)return;this.accumulator+=e;let n=0;for(;this.accumulator>=pr&&n<12;)this.current.update(pr),this.accumulator-=pr,n++;this.ctx.hud.update(e),this.ctx.renderer.render(this.current.scene,this.ctx.camera.cam)}}new _g;
