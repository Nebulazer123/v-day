(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="180",rl=0,ea=1,ol=2,fc=1,pc=2,fn=3,Pn=0,Ue=1,tn=2,gn=0,mi=1,Is=2,na=3,ia=4,al=5,Gn=100,cl=101,ll=102,hl=103,ul=104,dl=200,fl=201,pl=202,ml=203,Ir=204,Ur=205,gl=206,xl=207,_l=208,vl=209,yl=210,Ml=211,Sl=212,El=213,bl=214,zr=0,Nr=1,Fr=2,_i=3,Or=4,kr=5,Br=6,Hr=7,To=0,wl=1,Tl=2,Cn=0,Al=1,Rl=2,Cl=3,mc=4,Pl=5,Dl=6,Ll=7,gc=300,vi=301,yi=302,Gr=303,Vr=304,Os=306,Wr=1e3,Xn=1001,Xr=1002,$e=1003,Il=1004,ts=1005,en=1006,Ys=1007,jn=1008,sn=1009,xc=1010,_c=1011,Gi=1012,Ao=1013,Yn=1014,mn=1015,xn=1016,Ro=1017,Co=1018,Vi=1020,vc=35902,yc=35899,Mc=1021,Sc=1022,Ke=1023,Wi=1026,Xi=1027,Ec=1028,Po=1029,bc=1030,Do=1031,Lo=1033,bs=33776,ws=33777,Ts=33778,As=33779,jr=35840,qr=35841,Yr=35842,Kr=35843,$r=36196,Zr=37492,Jr=37496,Qr=37808,to=37809,eo=37810,no=37811,io=37812,so=37813,ro=37814,oo=37815,ao=37816,co=37817,lo=37818,ho=37819,uo=37820,fo=37821,po=36492,mo=36494,go=36495,xo=36283,_o=36284,vo=36285,yo=36286,Ul=3200,zl=3201,wc=0,Nl=1,Rn="",Fe="srgb",Mi="srgb-linear",Us="linear",Jt="srgb",Zn=7680,sa=519,Fl=512,Ol=513,kl=514,Tc=515,Bl=516,Hl=517,Gl=518,Vl=519,ra=35044,oa="300 es",nn=2e3,zs=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let aa=1234567;const Bi=Math.PI/180,Si=180/Math.PI;function Ri(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Io(i,t){return(i%t+t)%t}function Wl(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Xl(i,t,e){return i!==t?(e-i)/(t-i):0}function Hi(i,t,e){return(1-e)*i+e*t}function jl(i,t,e,n){return Hi(i,t,1-Math.exp(-e*n))}function ql(i,t=1){return t-Math.abs(Io(i,t*2)-t)}function Yl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Kl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function $l(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zl(i,t){return i+Math.random()*(t-i)}function Jl(i){return i*(.5-Math.random())}function Ql(i){i!==void 0&&(aa=i);let t=aa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function th(i){return i*Bi}function eh(i){return i*Si}function nh(i){return(i&i-1)===0&&i!==0}function ih(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function rh(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:Bi,RAD2DEG:Si,generateUUID:Ri,clamp:Wt,euclideanModulo:Io,mapLinear:Wl,inverseLerp:Xl,lerp:Hi,damp:jl,pingpong:ql,smoothstep:Yl,smootherstep:Kl,randInt:$l,randFloat:Zl,randFloatSpread:Jl,seededRandom:Ql,degToRad:th,radToDeg:eh,isPowerOfTwo:nh,ceilPowerOfTwo:ih,floorPowerOfTwo:sh,setQuaternionFromProperEuler:rh,normalize:Pe,denormalize:fi};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-a;const f=c*u+l*p+h*g+d*_,E=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const C=Math.sqrt(b),A=Math.atan2(C,f*E);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const M=a*E;if(c=c*m+u*M,l=l*m+p*M,h=h*m+g*M,d=d*m+_*M,m===1-a){const C=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=C,l*=C,h*=C,d*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-a*p,t[e+2]=l*g+h*p+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ca.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ca.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new T,ca=new Yi;class Ot{constructor(t,e,n,s,r,o,a,c,l){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],b=s[4],M=s[7],C=s[2],A=s[5],P=s[8];return r[0]=o*_+a*E+c*C,r[3]=o*m+a*b+c*A,r[6]=o*f+a*M+c*P,r[1]=l*_+h*E+d*C,r[4]=l*m+h*b+d*A,r[7]=l*f+h*M+d*P,r[2]=u*_+p*E+g*C,r[5]=u*m+p*b+g*A,r[8]=u*f+p*M+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=e*d+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=u*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new Ot;function Ac(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=ji("canvas");return i.style.display="block",i}const la={};function qi(i){i in la||(la[i]=!0,console.warn(i))}function ah(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ha=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ua=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ch(){const i={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Jt&&(s.r=_n(s.r),s.g=_n(s.g),s.b=_n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Jt&&(s.r=gi(s.r),s.g=gi(s.g),s.b=gi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rn?Us:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mi]:{primaries:t,whitePoint:n,transfer:Us,toXYZ:ha,fromXYZ:ua,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:ha,fromXYZ:ua,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}const qt=ch();function _n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class lh{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Jn===void 0&&(Jn=ji("canvas")),Jn.width=t.width,Jn.height=t.height;const s=Jn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Jn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ji("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hh=0;class Uo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Ri(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zs(s[o].image)):r.push(Zs(s[o]))}else r=Zs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uh=0;const Js=new T;class Re extends Ai{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=Xn,s=Xn,r=en,o=jn,a=Ke,c=sn,l=Re.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Ri(),this.name="",this.source=new Uo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Js).x}get height(){return this.source.getSize(Js).y}get depth(){return this.source.getSize(Js).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wr:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case Xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wr:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case Xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=gc;Re.DEFAULT_ANISOTROPY=1;class Qt{constructor(t=0,e=0,n=0,s=1){Qt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(l+1)/2,M=(p+1)/2,C=(f+1)/2,A=(h+u)/4,P=(d+_)/4,I=(g+m)/4;return b>M&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=P/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=I/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=I/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends Ai{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Qt(0,0,t,e),this.scissorTest=!1,this.viewport=new Qt(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Uo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends dh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rc extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fh extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(t.matrixWorld),this.union(es)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),ns.subVectors(this.max,Ii),Qn.subVectors(t.a,Ii),ti.subVectors(t.b,Ii),ei.subVectors(t.c,Ii),Mn.subVectors(ti,Qn),Sn.subVectors(ei,ti),Un.subVectors(Qn,ei);let e=[0,-Mn.z,Mn.y,0,-Sn.z,Sn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,Sn.z,0,-Sn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-Sn.y,Sn.x,0,-Un.y,Un.x,0];return!Qs(e,Qn,ti,ei,ns)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,Qn,ti,ei,ns))?!1:(is.crossVectors(Mn,Sn),e=[is.x,is.y,is.z],Qs(e,Qn,ti,ei,ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const cn=[new T,new T,new T,new T,new T,new T,new T,new T],Xe=new T,es=new Ki,Qn=new T,ti=new T,ei=new T,Mn=new T,Sn=new T,Un=new T,Ii=new T,ns=new T,is=new T,zn=new T;function Qs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zn.fromArray(i,r);const a=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),c=t.dot(zn),l=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const ph=new Ki,Ui=new T,tr=new T;class ks{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ph.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ui,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(tr)),this.expandByPoint(Ui.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ln=new T,er=new T,ss=new T,En=new T,nr=new T,rs=new T,ir=new T;class Cc{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){er.copy(t).add(e).multiplyScalar(.5),ss.copy(e).sub(t).normalize(),En.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ss),a=En.dot(this.direction),c=-En.dot(ss),l=En.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(er).addScaledVector(ss,u),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,s,r){nr.subVectors(e,t),rs.subVectors(n,t),ir.crossVectors(nr,rs);let o=this.direction.dot(ir),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);const c=a*this.direction.dot(rs.crossVectors(En,rs));if(c<0)return null;const l=a*this.direction.dot(nr.cross(En));if(l<0||c+l>o)return null;const h=-a*En.dot(ir);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,h,d,u,p,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,p,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),o=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mh,t,gh)}lookAt(t,e,n){const s=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),bn.crossVectors(n,Be),bn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),bn.crossVectors(n,Be)),bn.normalize(),os.crossVectors(Be,bn),s[0]=bn.x,s[4]=os.x,s[8]=Be.x,s[1]=bn.y,s[5]=os.y,s[9]=Be.y,s[2]=bn.z,s[6]=os.z,s[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],b=n[7],M=n[11],C=n[15],A=s[0],P=s[4],I=s[8],S=s[12],y=s[1],D=s[5],N=s[9],H=s[13],q=s[2],X=s[6],j=s[10],Z=s[14],G=s[3],at=s[7],ut=s[11],bt=s[15];return r[0]=o*A+a*y+c*q+l*G,r[4]=o*P+a*D+c*X+l*at,r[8]=o*I+a*N+c*j+l*ut,r[12]=o*S+a*H+c*Z+l*bt,r[1]=h*A+d*y+u*q+p*G,r[5]=h*P+d*D+u*X+p*at,r[9]=h*I+d*N+u*j+p*ut,r[13]=h*S+d*H+u*Z+p*bt,r[2]=g*A+_*y+m*q+f*G,r[6]=g*P+_*D+m*X+f*at,r[10]=g*I+_*N+m*j+f*ut,r[14]=g*S+_*H+m*Z+f*bt,r[3]=E*A+b*y+M*q+C*G,r[7]=E*P+b*D+M*X+C*at,r[11]=E*I+b*N+M*j+C*ut,r[15]=E*S+b*H+M*Z+C*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*p-n*c*p)+_*(+e*c*p-e*l*u+r*o*u-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*d+e*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],E=d*m*l-_*u*l+_*c*p-a*m*p-d*c*f+a*u*f,b=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,M=h*_*l-g*d*l+g*a*p-o*_*p-h*a*f+o*d*f,C=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,A=e*E+n*b+s*M+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=E*P,t[1]=(_*u*r-d*m*r-_*s*p+n*m*p+d*s*f-n*u*f)*P,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*f+n*c*f)*P,t[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*p-n*c*p)*P,t[4]=b*P,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*f+e*u*f)*P,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*P,t[7]=(o*u*r-h*c*r+h*s*l-e*u*l-o*s*p+e*c*p)*P,t[8]=M*P,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*P,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*P,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*P,t[12]=C*P,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*m+e*d*m)*P,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*P,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*u+e*a*u)*P,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,E=c*l,b=c*h,M=c*d,C=n.x,A=n.y,P=n.z;return s[0]=(1-(_+f))*C,s[1]=(p+M)*C,s[2]=(g-b)*C,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(u+f))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+b)*P,s[9]=(m-E)*P,s[10]=(1-(u+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ni.set(s[0],s[1],s[2]).length();const o=ni.set(s[4],s[5],s[6]).length(),a=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],je.copy(this);const l=1/r,h=1/o,d=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=d,je.elements[9]*=d,je.elements[10]*=d,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=nn,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let g,_;if(c)g=r/(o-r),_=o*r/(o-r);else if(a===nn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===zs)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=nn,c=!1){const l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s);let g,_;if(c)g=1/(o-r),_=o/(o-r);else if(a===nn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===zs)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new T,je=new le,mh=new T(0,0,0),gh=new T(1,1,1),bn=new T,os=new T,Be=new T,da=new le,fa=new Yi;class rn{constructor(t=0,e=0,n=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return da.makeRotationFromQuaternion(t),this.setFromRotationMatrix(da,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fa.setFromEuler(this),this.setFromQuaternion(fa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Pc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xh=0;const pa=new T,ii=new Yi,hn=new le,as=new T,zi=new T,_h=new T,vh=new Yi,ma=new T(1,0,0),ga=new T(0,1,0),xa=new T(0,0,1),_a={type:"added"},yh={type:"removed"},si={type:"childadded",child:null},sr={type:"childremoved",child:null};class xe extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new T,e=new rn,n=new Yi,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Ot}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(ma,t)}rotateY(t){return this.rotateOnAxis(ga,t)}rotateZ(t){return this.rotateOnAxis(xa,t)}translateOnAxis(t,e){return pa.copy(t).applyQuaternion(this.quaternion),this.position.add(pa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ma,t)}translateY(t){return this.translateOnAxis(ga,t)}translateZ(t){return this.translateOnAxis(xa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(zi,as,this.up):hn.lookAt(as,zi,this.up),this.quaternion.setFromRotationMatrix(hn),s&&(hn.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(hn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_a),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yh),sr.child=t,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_a),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,_h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,vh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}xe.DEFAULT_UP=new T(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qe=new T,un=new T,rr=new T,dn=new T,ri=new T,oi=new T,va=new T,or=new T,ar=new T,cr=new T,lr=new Qt,hr=new Qt,ur=new Qt;class Ye{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qe.subVectors(t,e),s.cross(qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qe.subVectors(s,e),un.subVectors(n,e),rr.subVectors(t,e);const o=qe.dot(qe),a=qe.dot(un),c=qe.dot(rr),l=un.dot(un),h=un.dot(rr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(o,dn.y),c.addScaledVector(a,dn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return lr.setScalar(0),hr.setScalar(0),ur.setScalar(0),lr.fromBufferAttribute(t,e),hr.fromBufferAttribute(t,n),ur.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lr,r.x),o.addScaledVector(hr,r.y),o.addScaledVector(ur,r.z),o}static isFrontFacing(t,e,n,s){return qe.subVectors(n,e),un.subVectors(t,e),qe.cross(un).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qe.subVectors(this.c,this.b),un.subVectors(this.a,this.b),qe.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ri.subVectors(s,n),oi.subVectors(r,n),or.subVectors(t,n);const c=ri.dot(or),l=oi.dot(or);if(c<=0&&l<=0)return e.copy(n);ar.subVectors(t,s);const h=ri.dot(ar),d=oi.dot(ar);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ri,o);cr.subVectors(t,r);const p=ri.dot(cr),g=oi.dot(cr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(oi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return va.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(va,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(ri,o).addScaledVector(oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function dr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Dt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=Io(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=dr(o,r,t+1/3),this.g=dr(o,r,t),this.b=dr(o,r,t-1/3)}return qt.colorSpaceToWorking(this,s),this}setStyle(t,e=Fe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){const n=Dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return qt.workingToColorSpace(Ae.copy(this),t),Math.round(Wt(Ae.r*255,0,255))*65536+Math.round(Wt(Ae.g*255,0,255))*256+Math.round(Wt(Ae.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Fe){qt.workingToColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(cs);const n=Hi(wn.h,cs.h,e),s=Hi(wn.s,cs.s,e),r=Hi(wn.l,cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Dt;Dt.NAMES=Dc;let Mh=0;class Ci extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=mi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ir,this.blendDst=Ur,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=_i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ir&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vn extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new T,ls=new Ct;let Sh=0;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ra,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),s=Pe(s,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ra&&(t.usage=this.usage),t}}class Lc extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ic extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eh=0;const We=new le,fr=new xe,ai=new T,He=new Ki,Ni=new Ki,Ee=new T;class Me extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Ic:Lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return fr.lookAt(t),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(Ee.addVectors(He.min,Ni.min),He.expandByPoint(Ee),Ee.addVectors(He.max,Ni.max),He.expandByPoint(Ee)):(He.expandByPoint(Ni.min),He.expandByPoint(Ni.max))}He.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ee.fromBufferAttribute(a,l),c&&(ai.fromBufferAttribute(t,l),Ee.add(ai)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new T,c[I]=new T;const l=new T,h=new T,d=new T,u=new Ct,p=new Ct,g=new Ct,_=new T,m=new T;function f(I,S,y){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),u.fromBufferAttribute(r,I),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(_),a[S].add(_),a[y].add(_),c[I].add(m),c[S].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let I=0,S=E.length;I<S;++I){const y=E[I],D=y.start,N=y.count;for(let H=D,q=D+N;H<q;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new T,M=new T,C=new T,A=new T;function P(I){C.fromBufferAttribute(s,I),A.copy(C);const S=a[I];b.copy(S),b.sub(C.multiplyScalar(C.dot(S))).normalize(),M.crossVectors(A,S);const D=M.dot(c[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,D)}for(let I=0,S=E.length;I<S;++I){const y=E[I],D=y.start,N=y.count;for(let H=D,q=D+N;H<q;H+=3)P(t.getX(H+0)),P(t.getX(H+1)),P(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new T,r=new T,o=new T,a=new T,c=new T,l=new T,h=new T,d=new T;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new ze(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ya=new le,Nn=new Cc,hs=new ks,Ma=new T,us=new T,ds=new T,fs=new T,pr=new T,ps=new T,Sa=new T,ms=new T;class et extends xe{constructor(t=new Me,e=new vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(pr.fromBufferAttribute(d,t),o?ps.addScaledVector(pr,h):ps.addScaledVector(pr.sub(e),h))}e.add(ps)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(hs.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(hs,Ma)===null||Nn.origin.distanceToSquared(Ma)>(t.far-t.near)**2))&&(ya.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(ya),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,C=b;M<C;M+=3){const A=a.getX(M),P=a.getX(M+1),I=a.getX(M+2);s=gs(this,f,t,n,l,h,d,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=gs(this,o,t,n,l,h,d,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,C=b;M<C;M+=3){const A=M,P=M+1,I=M+2;s=gs(this,f,t,n,l,h,d,A,P,I),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,b=m+1,M=m+2;s=gs(this,o,t,n,l,h,d,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function bh(i,t,e,n,s,r,o,a){let c;if(t.side===Ue?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pn,a),c===null)return null;ms.copy(a),ms.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ms);return l<e.near||l>e.far?null:{distance:l,point:ms.clone(),object:i}}function gs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,us),i.getVertexPosition(c,ds),i.getVertexPosition(l,fs);const h=bh(i,t,e,n,us,ds,fs,Sa);if(h){const d=new T;Ye.getBarycoord(Sa,us,ds,fs,d),s&&(h.uv=Ye.getInterpolatedAttribute(s,a,c,l,d,new Ct)),r&&(h.uv1=Ye.getInterpolatedAttribute(r,a,c,l,d,new Ct)),o&&(h.normal=Ye.getInterpolatedAttribute(o,a,c,l,d,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new T,materialIndex:0};Ye.getNormal(us,ds,fs,u.normal),h.face=u,h.barycoord=d}return h}class Yt extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(d,2));function g(_,m,f,E,b,M,C,A,P,I,S){const y=M/P,D=C/I,N=M/2,H=C/2,q=A/2,X=P+1,j=I+1;let Z=0,G=0;const at=new T;for(let ut=0;ut<j;ut++){const bt=ut*D-H;for(let Gt=0;Gt<X;Gt++){const ne=Gt*y-N;at[_]=ne*E,at[m]=bt*b,at[f]=q,l.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[f]=A>0?1:-1,h.push(at.x,at.y,at.z),d.push(Gt/P),d.push(1-ut/I),Z+=1}}for(let ut=0;ut<I;ut++)for(let bt=0;bt<P;bt++){const Gt=u+bt+X*ut,ne=u+bt+X*(ut+1),oe=u+(bt+1)+X*(ut+1),Kt=u+(bt+1)+X*ut;c.push(Gt,ne,Kt),c.push(ne,oe,Kt),G+=6}a.addGroup(p,G,S),p+=G,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ei(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Ei(i[e]);for(const s in n)t[s]=n[s]}return t}function wh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ns={clone:Ei,merge:De};var Th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Th,this.fragmentShader=Ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=wh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class zc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tn=new T,Ea=new Ct,ba=new Ct;class Le extends zc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Si*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Si*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z),Tn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tn.x,Tn.y).multiplyScalar(-t/Tn.z)}getViewSize(t,e){return this.getViewBounds(t,Ea,ba),e.subVectors(ba,Ea)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,li=1;class Rh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(ci,li,t,e);s.layers=this.layers,this.add(s);const r=new Le(ci,li,t,e);r.layers=this.layers,this.add(r);const o=new Le(ci,li,t,e);o.layers=this.layers,this.add(o);const a=new Le(ci,li,t,e);a.layers=this.layers,this.add(a);const c=new Le(ci,li,t,e);c.layers=this.layers,this.add(c);const l=new Le(ci,li,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nc extends Re{constructor(t=[],e=vi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ch extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Nc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:gn});r.uniforms.tEquirect.value=e;const o=new et(s,r),a=e.minFilter;return e.minFilter===jn&&(e.minFilter=en),new Rh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Ht extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ph={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ph)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Pi{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Dt(t),this.density=e}clone(){return new Pi(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $i extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gr=new T,Dh=new T,Lh=new Ot;class Bn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=gr.subVectors(n,e).cross(Dh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lh.getNormalMatrix(t),s=this.coplanarPoint(gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new ks,Ih=new Ct(.5,.5),xs=new T;class zo{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=nn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],E=r[12],b=r[13],M=r[14],C=r[15];if(s[0].setComponents(l-o,p-h,f-g,C-E).normalize(),s[1].setComponents(l+o,p+h,f+g,C+E).normalize(),s[2].setComponents(l+a,p+d,f+_,C+b).normalize(),s[3].setComponents(l-a,p-d,f-_,C-b).normalize(),n)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(l-c,p-u,f-m,C-M).normalize();else if(s[4].setComponents(l-c,p-u,f-m,C-M).normalize(),e===nn)s[5].setComponents(l+c,p+u,f+m,C+M).normalize();else if(e===zs)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(t){Fn.center.set(0,0,0);const e=Ih.distanceTo(t.center);return Fn.radius=.7071067811865476+e,Fn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xs.x=s.normal.x>0?t.max.x:t.min.x,xs.y=s.normal.y>0?t.max.y:t.min.y,xs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class No extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const wa=new le,Mo=new Cc,_s=new ks,vs=new T;class Fc extends xe{constructor(t=new Me,e=new No){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;wa.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(wa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);vs.fromBufferAttribute(d,m),Ta(vs,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)vs.fromBufferAttribute(d,g),Ta(vs,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ta(i,t,e,n,s,r,o){const a=Mo.distanceSqToPoint(i);if(a<e){const c=new T;Mo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Oc extends Re{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kc extends Re{constructor(t,e,n=Yn,s,r,o,a=$e,c=$e,l,h=Wi,d=1){if(h!==Wi&&h!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Uo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bc extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bs extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new T,h=new Ct;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class de extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(u,3)),this.setAttribute("uv",new ee(p,2));function E(){const M=new T,C=new T;let A=0;const P=(e-t)/n;for(let I=0;I<=r;I++){const S=[],y=I/r,D=y*(e-t)+t;for(let N=0;N<=s;N++){const H=N/s,q=H*c+a,X=Math.sin(q),j=Math.cos(q);C.x=D*X,C.y=-y*n+m,C.z=D*j,d.push(C.x,C.y,C.z),M.set(X,P,j).normalize(),u.push(M.x,M.y,M.z),p.push(H,1-y),S.push(g++)}_.push(S)}for(let I=0;I<s;I++)for(let S=0;S<r;S++){const y=_[S][I],D=_[S+1][I],N=_[S+1][I+1],H=_[S][I+1];(t>0||S!==0)&&(h.push(y,D,H),A+=3),(e>0||S!==r-1)&&(h.push(D,N,H),A+=3)}l.addGroup(f,A,0),f+=A}function b(M){const C=g,A=new Ct,P=new T;let I=0;const S=M===!0?t:e,y=M===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const D=g;for(let N=0;N<=s;N++){const q=N/s*c+a,X=Math.cos(q),j=Math.sin(q);P.x=S*j,P.y=m*y,P.z=S*X,d.push(P.x,P.y,P.z),u.push(0,y,0),A.x=X*.5+.5,A.y=j*.5*y+.5,p.push(A.x,A.y),g++}for(let N=0;N<s;N++){const H=C+N,q=D+N;M===!0?h.push(q,q+1,H):h.push(q+1,q,H),I+=3}l.addGroup(f,I,M===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fo extends de{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Fo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oo extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new T,M=new T,C=new T;for(let A=0;A<e.length;A+=3)p(e[A+0],b),p(e[A+1],M),p(e[A+2],C),c(b,M,C,E)}function c(E,b,M,C){const A=C+1,P=[];for(let I=0;I<=A;I++){P[I]=[];const S=E.clone().lerp(M,I/A),y=b.clone().lerp(M,I/A),D=A-I;for(let N=0;N<=D;N++)N===0&&I===A?P[I][N]=S:P[I][N]=S.clone().lerp(y,N/D)}for(let I=0;I<A;I++)for(let S=0;S<2*(A-I)-1;S++){const y=Math.floor(S/2);S%2===0?(u(P[I][y+1]),u(P[I+1][y]),u(P[I][y])):(u(P[I][y+1]),u(P[I+1][y+1]),u(P[I+1][y]))}}function l(E){const b=new T;for(let M=0;M<r.length;M+=3)b.x=r[M+0],b.y=r[M+1],b.z=r[M+2],b.normalize().multiplyScalar(E),r[M+0]=b.x,r[M+1]=b.y,r[M+2]=b.z}function h(){const E=new T;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];const M=m(E)/2/Math.PI+.5,C=f(E)/Math.PI+.5;o.push(M,1-C)}g(),d()}function d(){for(let E=0;E<o.length;E+=6){const b=o[E+0],M=o[E+2],C=o[E+4],A=Math.max(b,M,C),P=Math.min(b,M,C);A>.9&&P<.1&&(b<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function p(E,b){const M=E*3;b.x=t[M+0],b.y=t[M+1],b.z=t[M+2]}function g(){const E=new T,b=new T,M=new T,C=new T,A=new Ct,P=new Ct,I=new Ct;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),A.set(o[y+0],o[y+1]),P.set(o[y+2],o[y+3]),I.set(o[y+4],o[y+5]),C.copy(E).add(b).add(M).divideScalar(3);const D=m(C);_(A,y+0,E,D),_(P,y+2,b,D),_(I,y+4,M,D)}}function _(E,b,M,C){C<0&&E.x===1&&(o[b]=E.x-1),M.x===0&&M.z===0&&(o[b]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function f(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.vertices,t.indices,t.radius,t.details)}}class ko extends Oo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ko(t.radius,t.detail)}}class yn extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*u-o;for(let b=0;b<l;b++){const M=b*d-r;g.push(M,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const b=E+l*f,M=E+l*(f+1),C=E+1+l*(f+1),A=E+1+l*f;p.push(b,M,A),p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bo extends Me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,p=new T,g=new Ct;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,b=E,M=E+n+1,C=E+n+2,A=E+1;a.push(b,M,A),a.push(M,C,A)}}this.setIndex(a),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class be extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new T,u=new T,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],b=f/n;let M=0;f===0&&o===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const A=C/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),d.y=t*Math.cos(o+b*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+M,1-b),E.push(l++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<e;E++){const b=h[f][E+1],M=h[f][E],C=h[f+1][E],A=h[f+1][E+1];(f!==0||o>0)&&p.push(b,M,A),(f!==n-1||c<Math.PI)&&p.push(M,C,A)}this.setIndex(p),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class on extends Me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new T,d=new T,u=new T;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class bi extends Ci{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uh extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zh extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xr={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Nh{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Fh=new Nh;class Ho{constructor(t){this.manager=t!==void 0?t:Fh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ho.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi=new WeakMap;class Oh extends Ho{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=xr.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=hi.get(o);d===void 0&&(d=[],hi.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=ji("img");function c(){h(),e&&e(this);const d=hi.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}hi.delete(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),xr.remove(`image:${t}`);const u=hi.get(this)||[];for(let p=0;p<u.length;p++){const g=u[p];g.onError&&g.onError(d)}hi.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),xr.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class kh extends Ho{constructor(t){super(t)}load(t,e,n,s){const r=new Re,o=new Oh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Hs extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Gs extends Hs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _r=new le,Aa=new T,Ra=new T;class Go{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Aa),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),_r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bh extends Go{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Si*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Hc extends Hs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ca=new le,Fi=new T,vr=new T;class Hh extends Go{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new Qt(2,1,1,1),new Qt(0,1,1,1),new Qt(3,1,1,1),new Qt(1,1,1,1),new Qt(3,0,1,1),new Qt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Fi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fi),vr.copy(n.position),vr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(vr),n.updateMatrixWorld(),s.makeTranslation(-Fi.x,-Fi.y,-Fi.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca,n.coordinateSystem,n.reversedDepth)}}class Dn extends Hs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vo extends zc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Gh extends Go{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wo extends Hs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Gh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vh extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Wh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pa(i,t,e,n){const s=Xh(n);switch(e){case Mc:return i*t;case Ec:return i*t/s.components*s.byteLength;case Po:return i*t/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case Do:return i*t*2/s.components*s.byteLength;case Sc:return i*t*3/s.components*s.byteLength;case Ke:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case bs:case ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qr:case Kr:return Math.max(i,16)*Math.max(t,8)/4;case jr:case Yr:return Math.max(i,8)*Math.max(t,8)/2;case $r:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xo:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vo:case yo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xh(i){switch(i){case sn:case xc:return{byteLength:1,components:1};case Gi:case _c:case xn:return{byteLength:2,components:1};case Ro:case Co:return{byteLength:2,components:4};case Yn:case Ao:case mn:return{byteLength:4,components:1};case vc:case yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function jh(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
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
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eu=`#ifdef USE_BATCHING
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
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ou=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gu=`#define PI 3.141592653589793
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
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",bu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Du=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uu=`#ifdef USE_GRADIENTMAP
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
}`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ou=`uniform bool receiveShadow;
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
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wu=`PhysicalMaterial material;
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
#endif`,Xu=`struct PhysicalMaterial {
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
}`,ju=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$u=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ed=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nd=`#if defined( USE_POINTS_UV )
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
#endif`,id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ad=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
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
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ed=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dd=`float getShadowMask() {
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
}`,Ld=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Nd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
}`,tf=`#define DISTANCE
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
}`,ef=`#define DISTANCE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,of=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define MATCAP
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
}`,df=`#define MATCAP
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
}`,ff=`#define NORMAL
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
}`,pf=`#define NORMAL
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
}`,mf=`#define PHONG
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
}`,gf=`#define PHONG
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
}`,xf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,vf=`#define TOON
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
}`,yf=`#define TOON
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
}`,Mf=`uniform float size;
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#include <common>
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
}`,bf=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,Bt={alphahash_fragment:qh,alphahash_pars_fragment:Yh,alphamap_fragment:Kh,alphamap_pars_fragment:$h,alphatest_fragment:Zh,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:tu,batching_pars_vertex:eu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:ou,bumpmap_pars_fragment:au,clipping_planes_fragment:cu,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:xu,defaultnormal_vertex:_u,displacementmap_pars_vertex:vu,displacementmap_vertex:yu,emissivemap_fragment:Mu,emissivemap_pars_fragment:Su,colorspace_fragment:Eu,colorspace_pars_fragment:bu,envmap_fragment:wu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Au,envmap_pars_vertex:Ru,envmap_physical_pars_fragment:ku,envmap_vertex:Cu,fog_vertex:Pu,fog_pars_vertex:Du,fog_fragment:Lu,fog_pars_fragment:Iu,gradientmap_pars_fragment:Uu,lightmap_pars_fragment:zu,lights_lambert_fragment:Nu,lights_lambert_pars_fragment:Fu,lights_pars_begin:Ou,lights_toon_fragment:Bu,lights_toon_pars_fragment:Hu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Vu,lights_physical_fragment:Wu,lights_physical_pars_fragment:Xu,lights_fragment_begin:ju,lights_fragment_maps:qu,lights_fragment_end:Yu,logdepthbuf_fragment:Ku,logdepthbuf_pars_fragment:$u,logdepthbuf_pars_vertex:Zu,logdepthbuf_vertex:Ju,map_fragment:Qu,map_pars_fragment:td,map_particle_fragment:ed,map_particle_pars_fragment:nd,metalnessmap_fragment:id,metalnessmap_pars_fragment:sd,morphinstance_vertex:rd,morphcolor_vertex:od,morphnormal_vertex:ad,morphtarget_pars_vertex:cd,morphtarget_vertex:ld,normal_fragment_begin:hd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:vd,opaque_fragment:yd,packing:Md,premultiplied_alpha_fragment:Sd,project_vertex:Ed,dithering_fragment:bd,dithering_pars_fragment:wd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Cd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Dd,skinbase_vertex:Ld,skinning_pars_vertex:Id,skinning_vertex:Ud,skinnormal_vertex:zd,specularmap_fragment:Nd,specularmap_pars_fragment:Fd,tonemapping_fragment:Od,tonemapping_pars_fragment:kd,transmission_fragment:Bd,transmission_pars_fragment:Hd,uv_pars_fragment:Gd,uv_pars_vertex:Vd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:jd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:Kd,cube_vert:$d,cube_frag:Zd,depth_vert:Jd,depth_frag:Qd,distanceRGBA_vert:tf,distanceRGBA_frag:ef,equirect_vert:nf,equirect_frag:sf,linedashed_vert:rf,linedashed_frag:of,meshbasic_vert:af,meshbasic_frag:cf,meshlambert_vert:lf,meshlambert_frag:hf,meshmatcap_vert:uf,meshmatcap_frag:df,meshnormal_vert:ff,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:xf,meshphysical_frag:_f,meshtoon_vert:vf,meshtoon_frag:yf,points_vert:Mf,points_frag:Sf,shadow_vert:Ef,shadow_frag:bf,sprite_vert:wf,sprite_frag:Tf},ot={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Qe={basic:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:De([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:De([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:De([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:De([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:De([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:De([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:De([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:De([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:De([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:De([ot.common,ot.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:De([ot.lights,ot.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Qe.physical={uniforms:De([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ys={r:0,b:0,g:0},On=new rn,Af=new le;function Rf(i,t,e,n,s,r,o){const a=new Dt(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function _(b){let M=!1;const C=g(b);C===null?f(a,c):C&&C.isColor&&(f(C,1),M=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const C=g(M);C&&(C.isCubeTexture||C.mapping===Os)?(h===void 0&&(h=new et(new Yt(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Ei(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),On.copy(M.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Af.makeRotationFromEuler(On)),h.material.toneMapped=qt.getTransfer(C.colorSpace)!==Jt,(d!==C||u!==C.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new et(new yn(2,2),new Ie({name:"BackgroundMaterial",uniforms:Ei(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=qt.getTransfer(C.colorSpace)!==Jt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=C,u=C.version,p=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function f(b,M){b.getRGB(ys,Uc(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,M,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,f(a,c)},render:_,addToRenderList:m,dispose:E}}function Cf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(y,D,N,H,q){let X=!1;const j=d(H,N,D);r!==j&&(r=j,l(r.object)),X=p(y,H,N,q),X&&g(y,H,N,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(y,D,N,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function d(y,D,N){const H=N.wireframe===!0;let q=n[y.id];q===void 0&&(q={},n[y.id]=q);let X=q[D.id];X===void 0&&(X={},q[D.id]=X);let j=X[H];return j===void 0&&(j=u(c()),X[H]=j),j}function u(y){const D=[],N=[],H=[];for(let q=0;q<e;q++)D[q]=0,N[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,D,N,H){const q=r.attributes,X=D.attributes;let j=0;const Z=N.getAttributes();for(const G in Z)if(Z[G].location>=0){const ut=q[G];let bt=X[G];if(bt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),ut===void 0||ut.attribute!==bt||bt&&ut.data!==bt.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function g(y,D,N,H){const q={},X=D.attributes;let j=0;const Z=N.getAttributes();for(const G in Z)if(Z[G].location>=0){let ut=X[G];ut===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const bt={};bt.attribute=ut,ut&&ut.data&&(bt.data=ut.data),q[G]=bt,j++}r.attributes=q,r.attributesNum=j,r.index=H}function _(){const y=r.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function m(y){f(y,0)}function f(y,D){const N=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;N[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),q[y]!==D&&(i.vertexAttribDivisor(y,D),q[y]=D)}function E(){const y=r.newAttributes,D=r.enabledAttributes;for(let N=0,H=D.length;N<H;N++)D[N]!==y[N]&&(i.disableVertexAttribArray(N),D[N]=0)}function b(y,D,N,H,q,X,j){j===!0?i.vertexAttribIPointer(y,D,N,q,X):i.vertexAttribPointer(y,D,N,H,q,X)}function M(y,D,N,H){_();const q=H.attributes,X=N.getAttributes(),j=D.defaultAttributeValues;for(const Z in X){const G=X[Z];if(G.location>=0){let at=q[Z];if(at===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ut=at.normalized,bt=at.itemSize,Gt=t.get(at);if(Gt===void 0)continue;const ne=Gt.buffer,oe=Gt.type,Kt=Gt.bytesPerElement,Y=oe===i.INT||oe===i.UNSIGNED_INT||at.gpuType===Ao;if(at.isInterleavedBufferAttribute){const J=at.data,pt=J.stride,Ut=at.offset;if(J.isInstancedInterleavedBuffer){for(let Et=0;Et<G.locationSize;Et++)f(G.location+Et,J.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Et=0;Et<G.locationSize;Et++)m(G.location+Et);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Et=0;Et<G.locationSize;Et++)b(G.location+Et,bt/G.locationSize,oe,ut,pt*Kt,(Ut+bt/G.locationSize*Et)*Kt,Y)}else{if(at.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)f(G.location+J,at.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let J=0;J<G.locationSize;J++)b(G.location+J,bt/G.locationSize,oe,ut,bt*Kt,bt/G.locationSize*J*Kt,Y)}}else if(j!==void 0){const ut=j[Z];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(G.location,ut);break;case 3:i.vertexAttrib3fv(G.location,ut);break;case 4:i.vertexAttrib4fv(G.location,ut);break;default:i.vertexAttrib1fv(G.location,ut)}}}}E()}function C(){I();for(const y in n){const D=n[y];for(const N in D){const H=D[N];for(const q in H)h(H[q].object),delete H[q];delete D[N]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const N in D){const H=D[N];for(const q in H)h(H[q].object),delete H[q];delete D[N]}delete n[y.id]}function P(y){for(const D in n){const N=n[D];if(N[y.id]===void 0)continue;const H=N[y.id];for(const q in H)h(H[q].object),delete H[q];delete N[y.id]}}function I(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Pf(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Df(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Ke&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const I=P===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==sn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mn&&!I)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function Lf(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Bn,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:n,b=E*4;let M=f.clippingState||null;c.value=M,M=h(g,u,b,p);for(let C=0;C!==b;++C)M[C]=e[C];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,M=p;b!==_;++b,M+=4)o.copy(d[b]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function If(i){let t=new WeakMap;function e(o,a){return a===Gr?o.mapping=vi:a===Vr&&(o.mapping=yi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gr||a===Vr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ch(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const pi=4,Da=[.125,.215,.35,.446,.526,.582],Vn=20,yr=new Vo,La=new Dt;let Mr=null,Sr=0,Er=0,br=!1;const Hn=(1+Math.sqrt(5))/2,ui=1/Hn,Ia=[new T(-Hn,ui,0),new T(Hn,ui,0),new T(-ui,0,Hn),new T(ui,0,Hn),new T(0,Hn,-ui),new T(0,Hn,ui),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Uf=new T;class Ua{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Uf}=r;Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mr,Sr,Er),this._renderer.xr.enabled=br,t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mr=this._renderer.getRenderTarget(),Sr=this._renderer.getActiveCubeFace(),Er=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:xn,format:Ke,colorSpace:Mi,depthBuffer:!1},s=za(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zf(r)),this._blurMaterial=Nf(r,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,n,s,r){const c=new Le(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(La),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new vn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),m=new et(new Yt,_);let f=!1;const E=t.background;E?E.isColor&&(_.color.copy(E),t.background=null,f=!0):(_.color.copy(La),f=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[b],r.y,r.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[b]));const C=this._cubeSize;Ms(s,M*C,b>2?C:0,C,C),d.setRenderTarget(s),f&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===vi||t.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,yr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ia[(s-r-1)%Ia.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new et(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vn;m>Vn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vn}`);const f=[];let E=0;for(let P=0;P<Vn;++P){const I=P/_,S=Math.exp(-I*I/2);f.push(S),P===0?E+=S:P<m&&(E+=2*S)}for(let P=0;P<f.length;P++)f[P]=f[P]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;const M=this._sizeLods[s],C=3*M*(s>b-pi?s-b+pi:0),A=4*(this._cubeSize-M);Ms(e,C,A,3*M,2*M),c.setRenderTarget(e),c.render(d,yr)}}function zf(i){const t=[],e=[],n=[];let s=i;const r=i-pi+1+Da.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-pi?c=Da[o-i+pi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let A=0;A<p;A++){const P=A%3*2/3-1,I=A>2?0:-1,S=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];E.set(S,_*g*A),b.set(u,m*g*A);const y=[A,A,A,A,A,A];M.set(y,f*g*A)}const C=new Me;C.setAttribute("position",new ze(E,_)),C.setAttribute("uv",new ze(b,m)),C.setAttribute("faceIndex",new ze(M,f)),t.push(C),s>pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function za(i,t,e){const n=new Ze(i,t,e);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nf(i,t,e){const n=new Float32Array(Vn),s=new T(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Na(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Fa(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function Ff(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Gr||c===Vr,h=c===vi||c===yi;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ua(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ua(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Of(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function kf(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],i.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,M=E.length;b<M;b+=3){const C=E[b+0],A=E[b+1],P=E[b+2];u.push(C,A,A,P,P,C)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const C=b+0,A=b+1,P=b+2;u.push(C,A,A,P,P,C)}}else return;const m=new(Ac(u)?Ic:Lc)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Bf(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function l(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E]*_[E];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Hf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Gf(i,t,e){const n=new WeakMap,s=new Qt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let y=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const P=new Float32Array(C*A*4*d),I=new Rc(P,C,A,d);I.type=mn,I.needsUpdate=!0;const S=M*4;for(let D=0;D<d;D++){const N=f[D],H=E[D],q=b[D],X=C*A*4*D;for(let j=0;j<N.count;j++){const Z=j*S;g===!0&&(s.fromBufferAttribute(N,j),P[X+Z+0]=s.x,P[X+Z+1]=s.y,P[X+Z+2]=s.z,P[X+Z+3]=0),_===!0&&(s.fromBufferAttribute(H,j),P[X+Z+4]=s.x,P[X+Z+5]=s.y,P[X+Z+6]=s.z,P[X+Z+7]=0),m===!0&&(s.fromBufferAttribute(q,j),P[X+Z+8]=s.x,P[X+Z+9]=s.y,P[X+Z+10]=s.z,P[X+Z+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:I,size:new Ct(C,A)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Vf(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const Vc=new Re,Oa=new kc(1,1),Wc=new Rc,Xc=new fh,jc=new Nc,ka=[],Ba=[],Ha=new Float32Array(16),Ga=new Float32Array(9),Va=new Float32Array(4);function Di(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=ka[s];if(r===void 0&&(r=new Float32Array(s),ka[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vs(i,t){let e=Ba[t];e===void 0&&(e=new Int32Array(t),Ba[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Xf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function Yf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Va.set(n),i.uniformMatrix2fv(this.addr,!1,Va),ye(e,n)}}function Kf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Ga.set(n),i.uniformMatrix3fv(this.addr,!1,Ga),ye(e,n)}}function $f(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Ha.set(n),i.uniformMatrix4fv(this.addr,!1,Ha),ye(e,n)}}function Zf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function Qf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function ep(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function np(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Oa.compareFunction=Tc,r=Oa):r=Vc,e.setTexture2D(t||r,s)}function op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xc,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jc,s)}function cp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wc,s)}function lp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return jf;case 35666:return qf;case 35674:return Yf;case 35675:return Kf;case 35676:return $f;case 5124:case 35670:return Zf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return tp;case 5125:return ep;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return ap;case 36289:case 36303:case 36311:case 36292:return cp}}function hp(i,t){i.uniform1fv(this.addr,t)}function up(i,t){const e=Di(t,this.size,2);i.uniform2fv(this.addr,e)}function dp(i,t){const e=Di(t,this.size,3);i.uniform3fv(this.addr,e)}function fp(i,t){const e=Di(t,this.size,4);i.uniform4fv(this.addr,e)}function pp(i,t){const e=Di(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mp(i,t){const e=Di(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gp(i,t){const e=Di(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xp(i,t){i.uniform1iv(this.addr,t)}function _p(i,t){i.uniform2iv(this.addr,t)}function vp(i,t){i.uniform3iv(this.addr,t)}function yp(i,t){i.uniform4iv(this.addr,t)}function Mp(i,t){i.uniform1uiv(this.addr,t)}function Sp(i,t){i.uniform2uiv(this.addr,t)}function Ep(i,t){i.uniform3uiv(this.addr,t)}function bp(i,t){i.uniform4uiv(this.addr,t)}function wp(i,t,e){const n=this.cache,s=t.length,r=Vs(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vc,r[o])}function Tp(i,t,e){const n=this.cache,s=t.length,r=Vs(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Xc,r[o])}function Ap(i,t,e){const n=this.cache,s=t.length,r=Vs(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jc,r[o])}function Rp(i,t,e){const n=this.cache,s=t.length,r=Vs(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Wc,r[o])}function Cp(i){switch(i){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return xp;case 35667:case 35671:return _p;case 35668:case 35672:return vp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return Ep;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}class Pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lp(e.type)}}class Dp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cp(e.type)}}class Lp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Wa(i,t){i.seq.push(t),i.map[t.id]=t}function Ip(i,t,e){const n=i.name,s=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),o=wr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wa(e,l===void 0?new Pp(a,i,t):new Dp(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Lp(a),Wa(e,d)),e=d}}}class Rs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ip(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Up=37297;let zp=0;function Np(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ja=new Ot;function Fp(i){qt._getMatrix(ja,qt.workingColorSpace,i);const t=`mat3( ${ja.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Us:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function qa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Np(i.getShaderSource(t),a)}else return r}function Op(i,t){const e=Fp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function kp(i,t){let e;switch(t){case Al:e="Linear";break;case Rl:e="Reinhard";break;case Cl:e="Cineon";break;case mc:e="ACESFilmic";break;case Dl:e="AgX";break;case Ll:e="Neutral";break;case Pl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ss=new T;function Bp(){qt.getLuminanceCoefficients(Ss);const i=Ss.x.toFixed(4),t=Ss.y.toFixed(4),e=Ss.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function Gp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ki(i){return i!==""}function Ya(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ka(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(i){return i.replace(Wp,jp)}const Xp=new Map;function jp(i,t){let e=Bt[t];if(e===void 0){const n=Xp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(i){return i.replace(qp,Yp)}function Yp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Za(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Jp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case To:t="ENVMAP_BLENDING_MULTIPLY";break;case wl:t="ENVMAP_BLENDING_MIX";break;case Tl:t="ENVMAP_BLENDING_ADD";break}return t}function Qp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Kp(e),l=$p(e),h=Zp(e),d=Jp(e),u=Qp(e),p=Hp(e),g=Gp(r),_=s.createProgram();let m,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(m=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?kp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Op("linearToOutputTexel",e.outputColorSpace),Bp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ki).join(`
`)),o=So(o),o=Ya(o,e),o=Ka(o,e),a=So(a),a=Ya(a,e),a=Ka(a,e),o=$a(o),a=$a(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=E+m+o,M=E+f+a,C=Xa(s,s.VERTEX_SHADER,b),A=Xa(s,s.FRAGMENT_SHADER,M);s.attachShader(_,C),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(C)||"",q=s.getShaderInfoLog(A)||"",X=N.trim(),j=H.trim(),Z=q.trim();let G=!0,at=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,C,A);else{const ut=qa(s,C,"vertex"),bt=qa(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ut+`
`+bt)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(j===""||Z==="")&&(at=!1);at&&(D.diagnostics={runnable:G,programLog:X,vertexShader:{log:j,prefix:m},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(C),s.deleteShader(A),I=new Rs(s,_),S=Vp(s,_)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Up)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let em=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new im(t),e.set(t,n)),n}}class im{constructor(t){this.id=em++,this.code=t,this.usedTimes=0}}function sm(i,t,e,n,s,r,o){const a=new Pc,c=new nm,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,D,N,H){const q=N.fog,X=H.geometry,j=S.isMeshStandardMaterial?N.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),G=Z&&Z.mapping===Os?Z.image.height:null,at=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=ut!==void 0?ut.length:0;let Gt=0;X.morphAttributes.position!==void 0&&(Gt=1),X.morphAttributes.normal!==void 0&&(Gt=2),X.morphAttributes.color!==void 0&&(Gt=3);let ne,oe,Kt,Y;if(at){const $t=Qe[at];ne=$t.vertexShader,oe=$t.fragmentShader}else ne=S.vertexShader,oe=S.fragmentShader,c.update(S),Kt=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const J=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ut=H.isInstancedMesh===!0,Et=H.isBatchedMesh===!0,Xt=!!S.map,we=!!S.matcap,R=!!Z,ae=!!S.aoMap,Nt=!!S.lightMap,Lt=!!S.bumpMap,xt=!!S.normalMap,ce=!!S.displacementMap,_t=!!S.emissiveMap,kt=!!S.metalnessMap,Se=!!S.roughnessMap,pe=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,F=S.iridescence>0,W=S.sheen>0,$=S.transmission>0,V=pe&&!!S.anisotropyMap,St=w&&!!S.clearcoatMap,st=w&&!!S.clearcoatNormalMap,vt=w&&!!S.clearcoatRoughnessMap,yt=F&&!!S.iridescenceMap,nt=F&&!!S.iridescenceThicknessMap,ht=W&&!!S.sheenColorMap,Pt=W&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,ct=!!S.specularColorMap,Ft=!!S.specularIntensityMap,L=$&&!!S.transmissionMap,it=$&&!!S.thicknessMap,rt=!!S.gradientMap,ft=!!S.alphaMap,Q=S.alphaTest>0,K=!!S.alphaHash,gt=!!S.extensions;let zt=Cn;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(zt=i.toneMapping);const ie={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:ne,fragmentShader:oe,defines:S.defines,customVertexShaderID:Kt,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Et,batchingColor:Et&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Mi,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:we,envMap:R,envMapMode:R&&Z.mapping,envMapCubeUVHeight:G,aoMap:ae,lightMap:Nt,bumpMap:Lt,normalMap:xt,displacementMap:u&&ce,emissiveMap:_t,normalMapObjectSpace:xt&&S.normalMapType===Nl,normalMapTangentSpace:xt&&S.normalMapType===wc,metalnessMap:kt,roughnessMap:Se,anisotropy:pe,anisotropyMap:V,clearcoat:w,clearcoatMap:St,clearcoatNormalMap:st,clearcoatRoughnessMap:vt,dispersion:x,iridescence:F,iridescenceMap:yt,iridescenceThicknessMap:nt,sheen:W,sheenColorMap:ht,sheenRoughnessMap:Pt,specularMap:Mt,specularColorMap:ct,specularIntensityMap:Ft,transmission:$,transmissionMap:L,thicknessMap:it,gradientMap:rt,opaque:S.transparent===!1&&S.blending===mi&&S.alphaToCoverage===!1,alphaMap:ft,alphaTest:Q,alphaHash:K,combine:S.combine,mapUv:Xt&&_(S.map.channel),aoMapUv:ae&&_(S.aoMap.channel),lightMapUv:Nt&&_(S.lightMap.channel),bumpMapUv:Lt&&_(S.bumpMap.channel),normalMapUv:xt&&_(S.normalMap.channel),displacementMapUv:ce&&_(S.displacementMap.channel),emissiveMapUv:_t&&_(S.emissiveMap.channel),metalnessMapUv:kt&&_(S.metalnessMap.channel),roughnessMapUv:Se&&_(S.roughnessMap.channel),anisotropyMapUv:V&&_(S.anisotropyMap.channel),clearcoatMapUv:St&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&_(S.sheenRoughnessMap.channel),specularMapUv:Mt&&_(S.specularMap.channel),specularColorMapUv:ct&&_(S.specularColorMap.channel),specularIntensityMapUv:Ft&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:ft&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(xt||pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Xt||ft),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:_t&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:gt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)y.push(D),y.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(E(y,S),b(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function b(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){const y=g[S.type];let D;if(y){const N=Qe[y];D=Ns.clone(N.uniforms)}else D=S.uniforms;return D}function C(S,y){let D;for(let N=0,H=h.length;N<H;N++){const q=h[N];if(q.cacheKey===y){D=q,++D.usedTimes;break}}return D===void 0&&(D=new tm(i,y,S,r),h.push(D)),D}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function P(S){c.remove(S)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:C,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:I}}function rm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ja(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qa(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,u,p,g,_,m){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||om),n.length>1&&n.sort(u||Ja),s.length>1&&s.sort(u||Ja)}function h(){for(let d=t,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function am(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qa,i.set(n,[o])):s>=r.length?(o=new Qa,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Dt};break;case"SpotLight":e={position:new T,direction:new T,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function lm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hm=0;function um(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dm(i){const t=new cm,e=lm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);const s=new T,r=new le,o=new le;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,b=0,M=0,C=0,A=0,P=0;l.sort(um);for(let S=0,y=l.length;S<y;S++){const D=l[S],N=D.color,H=D.intensity,q=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=N.r*H,d+=N.g*H,u+=N.b*H;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],H);P++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=j,p++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(N).multiplyScalar(H),j.distance=q,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[_]=j;const Z=D.shadow;if(D.map&&(n.spotLightMap[C]=D.map,C++,Z.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,D.castShadow){const G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=X,M++}_++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(N).multiplyScalar(H),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=j,m++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Z=D.shadow,G=e.get(D);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=j,g++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(H),j.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[f]=j,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==E||I.numPointShadows!==b||I.numSpotShadows!==M||I.numSpotMaps!==C||I.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=E,I.numPointShadows=b,I.numSpotShadows=M,I.numSpotMaps=C,I.numLightProbes=P,n.version=hm++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const b=l[f];if(b.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[u];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function tc(i){const t=new dm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function fm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new tc(i),t.set(s,[a])):r>=o.length?(a=new tc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mm=`uniform sampler2D shadow_pass;
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
}`;function gm(i,t,e){let n=new zo;const s=new Ct,r=new Ct,o=new Qt,a=new Uh({depthPacking:zl}),c=new zh,l={},h=e.maxTextureSize,d={[Pn]:Ue,[Ue]:Pn,[tn]:tn},u=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:pm,fragmentShader:mm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Me;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let f=this.type;this.render=function(A,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),N=i.state;N.setBlending(gn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=f!==fn&&this.type===fn,q=f===fn&&this.type!==fn;for(let X=0,j=A.length;X<j;X++){const Z=A[X],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const at=G.getFrameExtents();if(s.multiply(at),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||H===!0||q===!0){const bt=this.type!==fn?{minFilter:$e,magFilter:$e}:{};G.map!==null&&G.map.dispose(),G.map=new Ze(s.x,s.y,bt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ut=G.getViewportCount();for(let bt=0;bt<ut;bt++){const Gt=G.getViewport(bt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),N.viewport(o),G.updateMatrices(Z,bt),n=G.getFrustum(),M(P,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===fn&&E(G,I),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,D)};function E(A,P){const I=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ze(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,I,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,I,p,_,null)}function b(A,P,I,S){let y=null;const D=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)y=D;else if(y=I.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=y.uuid,H=P.uuid;let q=l[N];q===void 0&&(q={},l[N]=q);let X=q[H];X===void 0&&(X=y.clone(),q[H]=X,P.addEventListener("dispose",C)),y=X}if(y.visible=P.visible,y.wireframe=P.wireframe,S===fn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:d[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=i.properties.get(y);N.light=I}return y}function M(A,P,I,S,y){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===fn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const H=t.update(A),q=A.material;if(Array.isArray(q)){const X=H.groups;for(let j=0,Z=X.length;j<Z;j++){const G=X[j],at=q[G.materialIndex];if(at&&at.visible){const ut=b(A,at,S,y);A.onBeforeShadow(i,A,P,I,H,ut,G),i.renderBufferDirect(I,null,H,ut,A,G),A.onAfterShadow(i,A,P,I,H,ut,G)}}}else if(q.visible){const X=b(A,q,S,y);A.onBeforeShadow(i,A,P,I,H,X,null),i.renderBufferDirect(I,null,H,X,A,null),A.onAfterShadow(i,A,P,I,H,X,null)}}const N=A.children;for(let H=0,q=N.length;H<q;H++)M(N[H],P,I,S,y)}function C(A){A.target.removeEventListener("dispose",C);for(const I in l){const S=l[I],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const xm={[zr]:Nr,[Fr]:Br,[Or]:Hr,[_i]:kr,[Nr]:zr,[Br]:Fr,[Hr]:Or,[kr]:_i};function _m(i,t){function e(){let L=!1;const it=new Qt;let rt=null;const ft=new Qt(0,0,0,0);return{setMask:function(Q){rt!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),rt=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,gt,zt,ie){ie===!0&&(Q*=zt,K*=zt,gt*=zt),it.set(Q,K,gt,zt),ft.equals(it)===!1&&(i.clearColor(Q,K,gt,zt),ft.copy(it))},reset:function(){L=!1,rt=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,it=!1,rt=null,ft=null,Q=null;return{setReversed:function(K){if(it!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),it=K;const zt=Q;Q=null,this.setClear(zt)}},getReversed:function(){return it},setTest:function(K){K?J(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(K){rt!==K&&!L&&(i.depthMask(K),rt=K)},setFunc:function(K){if(it&&(K=xm[K]),ft!==K){switch(K){case zr:i.depthFunc(i.NEVER);break;case Nr:i.depthFunc(i.ALWAYS);break;case Fr:i.depthFunc(i.LESS);break;case _i:i.depthFunc(i.LEQUAL);break;case Or:i.depthFunc(i.EQUAL);break;case kr:i.depthFunc(i.GEQUAL);break;case Br:i.depthFunc(i.GREATER);break;case Hr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(it&&(K=1-K),i.clearDepth(K),Q=K)},reset:function(){L=!1,rt=null,ft=null,Q=null,it=!1}}}function s(){let L=!1,it=null,rt=null,ft=null,Q=null,K=null,gt=null,zt=null,ie=null;return{setTest:function($t){L||($t?J(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!L&&(i.stencilMask($t),it=$t)},setFunc:function($t,an,Je){(rt!==$t||ft!==an||Q!==Je)&&(i.stencilFunc($t,an,Je),rt=$t,ft=an,Q=Je)},setOp:function($t,an,Je){(K!==$t||gt!==an||zt!==Je)&&(i.stencilOp($t,an,Je),K=$t,gt=an,zt=Je)},setLocked:function($t){L=$t},setClear:function($t){ie!==$t&&(i.clearStencil($t),ie=$t)},reset:function(){L=!1,it=null,rt=null,ft=null,Q=null,K=null,gt=null,zt=null,ie=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,M=null,C=null,A=null,P=new Dt(0,0,0),I=0,S=!1,y=null,D=null,N=null,H=null,q=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=Z>=2);let at=null,ut={};const bt=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),ne=new Qt().fromArray(bt),oe=new Qt().fromArray(Gt);function Kt(L,it,rt,ft){const Q=new Uint8Array(4),K=i.createTexture();i.bindTexture(L,K),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<rt;gt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(it+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return K}const Y={};Y[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(_i),Lt(!1),xt(ea),J(i.CULL_FACE),ae(gn);function J(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function pt(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ut(L,it){return d[L]!==it?(i.bindFramebuffer(L,it),d[L]=it,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Et(L,it){let rt=p,ft=!1;if(L){rt=u.get(it),rt===void 0&&(rt=[],u.set(it,rt));const Q=L.textures;if(rt.length!==Q.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let K=0,gt=Q.length;K<gt;K++)rt[K]=i.COLOR_ATTACHMENT0+K;rt.length=Q.length,ft=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,ft=!0);ft&&i.drawBuffers(rt)}function Xt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}const we={[Gn]:i.FUNC_ADD,[cl]:i.FUNC_SUBTRACT,[ll]:i.FUNC_REVERSE_SUBTRACT};we[hl]=i.MIN,we[ul]=i.MAX;const R={[dl]:i.ZERO,[fl]:i.ONE,[pl]:i.SRC_COLOR,[Ir]:i.SRC_ALPHA,[yl]:i.SRC_ALPHA_SATURATE,[_l]:i.DST_COLOR,[gl]:i.DST_ALPHA,[ml]:i.ONE_MINUS_SRC_COLOR,[Ur]:i.ONE_MINUS_SRC_ALPHA,[vl]:i.ONE_MINUS_DST_COLOR,[xl]:i.ONE_MINUS_DST_ALPHA,[Ml]:i.CONSTANT_COLOR,[Sl]:i.ONE_MINUS_CONSTANT_COLOR,[El]:i.CONSTANT_ALPHA,[bl]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(L,it,rt,ft,Q,K,gt,zt,ie,$t){if(L===gn){_===!0&&(pt(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),L!==al){if(L!==m||$t!==S){if((f!==Gn||M!==Gn)&&(i.blendEquation(i.FUNC_ADD),f=Gn,M=Gn),$t)switch(L){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFunc(i.ONE,i.ONE);break;case na:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ia:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case na:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ia:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,b=null,C=null,A=null,P.set(0,0,0),I=0,m=L,S=$t}return}Q=Q||it,K=K||rt,gt=gt||ft,(it!==f||Q!==M)&&(i.blendEquationSeparate(we[it],we[Q]),f=it,M=Q),(rt!==E||ft!==b||K!==C||gt!==A)&&(i.blendFuncSeparate(R[rt],R[ft],R[K],R[gt]),E=rt,b=ft,C=K,A=gt),(zt.equals(P)===!1||ie!==I)&&(i.blendColor(zt.r,zt.g,zt.b,ie),P.copy(zt),I=ie),m=L,S=!1}function Nt(L,it){L.side===tn?pt(i.CULL_FACE):J(i.CULL_FACE);let rt=L.side===Ue;it&&(rt=!rt),Lt(rt),L.blending===mi&&L.transparent===!1?ae(gn):ae(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const ft=L.stencilWrite;a.setTest(ft),ft&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),_t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function xt(L){L!==rl?(J(i.CULL_FACE),L!==D&&(L===ea?i.cullFace(i.BACK):L===ol?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),D=L}function ce(L){L!==N&&(j&&i.lineWidth(L),N=L)}function _t(L,it,rt){L?(J(i.POLYGON_OFFSET_FILL),(H!==it||q!==rt)&&(i.polygonOffset(it,rt),H=it,q=rt)):pt(i.POLYGON_OFFSET_FILL)}function kt(L){L?J(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Se(L){L===void 0&&(L=i.TEXTURE0+X-1),at!==L&&(i.activeTexture(L),at=L)}function pe(L,it,rt){rt===void 0&&(at===null?rt=i.TEXTURE0+X-1:rt=at);let ft=ut[rt];ft===void 0&&(ft={type:void 0,texture:void 0},ut[rt]=ft),(ft.type!==L||ft.texture!==it)&&(at!==rt&&(i.activeTexture(rt),at=rt),i.bindTexture(L,it||Y[L]),ft.type=L,ft.texture=it)}function w(){const L=ut[at];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(L){ne.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ne.copy(L))}function Pt(L){oe.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function Mt(L,it){let rt=l.get(it);rt===void 0&&(rt=new WeakMap,l.set(it,rt));let ft=rt.get(L);ft===void 0&&(ft=i.getUniformBlockIndex(it,L.name),rt.set(L,ft))}function ct(L,it){const ft=l.get(it).get(L);c.get(it)!==ft&&(i.uniformBlockBinding(it,ft,L.__bindingPointIndex),c.set(it,ft))}function Ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},at=null,ut={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,E=null,b=null,M=null,C=null,A=null,P=new Dt(0,0,0),I=0,S=!1,y=null,D=null,N=null,H=null,q=null,ne.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pt,bindFramebuffer:Ut,drawBuffers:Et,useProgram:Xt,setBlending:ae,setMaterial:Nt,setFlipSided:Lt,setCullFace:xt,setLineWidth:ce,setPolygonOffset:_t,setScissorTest:kt,activeTexture:Se,bindTexture:pe,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:yt,texImage3D:nt,updateUBOMapping:Mt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:vt,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:St,scissor:ht,viewport:Pt,reset:Ft}}function vm(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):ji("canvas")}function _(w,x,F){let W=1;const $=pe(w);if(($.width>F||$.height>F)&&(W=F/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(W*$.width),St=Math.floor(W*$.height);d===void 0&&(d=g(V,St));const st=x?g(V,St):d;return st.width=V,st.height=St,st.getContext("2d").drawImage(w,0,0,V,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+St+")."),st}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,x,F,W,$=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=x;if(x===i.RED&&(F===i.FLOAT&&(V=i.R32F),F===i.HALF_FLOAT&&(V=i.R16F),F===i.UNSIGNED_BYTE&&(V=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.R8UI),F===i.UNSIGNED_SHORT&&(V=i.R16UI),F===i.UNSIGNED_INT&&(V=i.R32UI),F===i.BYTE&&(V=i.R8I),F===i.SHORT&&(V=i.R16I),F===i.INT&&(V=i.R32I)),x===i.RG&&(F===i.FLOAT&&(V=i.RG32F),F===i.HALF_FLOAT&&(V=i.RG16F),F===i.UNSIGNED_BYTE&&(V=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RG8UI),F===i.UNSIGNED_SHORT&&(V=i.RG16UI),F===i.UNSIGNED_INT&&(V=i.RG32UI),F===i.BYTE&&(V=i.RG8I),F===i.SHORT&&(V=i.RG16I),F===i.INT&&(V=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGB8UI),F===i.UNSIGNED_SHORT&&(V=i.RGB16UI),F===i.UNSIGNED_INT&&(V=i.RGB32UI),F===i.BYTE&&(V=i.RGB8I),F===i.SHORT&&(V=i.RGB16I),F===i.INT&&(V=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),F===i.UNSIGNED_INT&&(V=i.RGBA32UI),F===i.BYTE&&(V=i.RGBA8I),F===i.SHORT&&(V=i.RGBA16I),F===i.INT&&(V=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),x===i.RGBA){const St=$?Us:qt.getTransfer(W);F===i.FLOAT&&(V=i.RGBA32F),F===i.HALF_FLOAT&&(V=i.RGBA16F),F===i.UNSIGNED_BYTE&&(V=St===Jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function M(w,x){let F;return w?x===null||x===Yn||x===Vi?F=i.DEPTH24_STENCIL8:x===mn?F=i.DEPTH32F_STENCIL8:x===Gi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===Vi?F=i.DEPTH_COMPONENT24:x===mn?F=i.DEPTH_COMPONENT32F:x===Gi&&(F=i.DEPTH_COMPONENT16),F}function C(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==$e&&w.minFilter!==en?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&h.delete(x)}function P(w){const x=w.target;x.removeEventListener("dispose",P),y(x)}function I(w){const x=n.get(w);if(x.__webglInit===void 0)return;const F=w.source,W=u.get(F);if(W){const $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(w),Object.keys(W).length===0&&u.delete(F)}n.remove(w)}function S(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const F=w.source,W=u.get(F);delete W[x.__cacheKey],o.memory.textures--}function y(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[W][$]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=w.textures;for(let W=0,$=F.length;W<$;W++){const V=n.get(F[W]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(F[W])}n.remove(w)}let D=0;function N(){D=0}function H(){const w=D;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),D+=1,w}function q(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function X(w,x){const F=n.get(w);if(w.isVideoTexture&&kt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){const W=w.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function j(w,x){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Y(F,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function Z(w,x){const F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){Y(F,w,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function G(w,x){const F=n.get(w);if(w.version>0&&F.__version!==w.version){J(F,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}const at={[Wr]:i.REPEAT,[Xn]:i.CLAMP_TO_EDGE,[Xr]:i.MIRRORED_REPEAT},ut={[$e]:i.NEAREST,[Il]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ys]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},bt={[Fl]:i.NEVER,[Vl]:i.ALWAYS,[Ol]:i.LESS,[Tc]:i.LEQUAL,[kl]:i.EQUAL,[Gl]:i.GEQUAL,[Bl]:i.GREATER,[Hl]:i.NOTEQUAL};function Gt(w,x){if(x.type===mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===en||x.magFilter===Ys||x.magFilter===ts||x.magFilter===jn||x.minFilter===en||x.minFilter===Ys||x.minFilter===ts||x.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,at[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,at[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,at[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ut[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ut[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$e||x.minFilter!==ts&&x.minFilter!==jn||x.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ne(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const W=x.source;let $=u.get(W);$===void 0&&($={},u.set(W,$));const V=q(x);if(V!==w.__cacheKey){$[V]===void 0&&($[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[V].usedTimes++;const St=$[w.__cacheKey];St!==void 0&&($[w.__cacheKey].usedTimes--,St.usedTimes===0&&S(x)),w.__cacheKey=V,w.__webglTexture=$[V].texture}return F}function oe(w,x,F){return Math.floor(Math.floor(w/F)/x)}function Kt(w,x,F,W){const V=w.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,W,x.data);else{V.sort((nt,ht)=>nt.start-ht.start);let St=0;for(let nt=1;nt<V.length;nt++){const ht=V[St],Pt=V[nt],Mt=ht.start+ht.count,ct=oe(Pt.start,x.width,4),Ft=oe(ht.start,x.width,4);Pt.start<=Mt+1&&ct===Ft&&oe(Pt.start+Pt.count-1,x.width,4)===ct?ht.count=Math.max(ht.count,Pt.start+Pt.count-ht.start):(++St,V[St]=Pt)}V.length=St+1;const st=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),yt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let nt=0,ht=V.length;nt<ht;nt++){const Pt=V[nt],Mt=Math.floor(Pt.start/4),ct=Math.ceil(Pt.count/4),Ft=Mt%x.width,L=Math.floor(Mt/x.width),it=ct,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,Ft,L,it,rt,F,W,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,yt)}}function Y(w,x,F){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);const $=ne(w,x),V=x.source;e.bindTexture(W,w.__webglTexture,i.TEXTURE0+F);const St=n.get(V);if(V.version!==St.__version||$===!0){e.activeTexture(i.TEXTURE0+F);const st=qt.getPrimaries(qt.workingColorSpace),vt=x.colorSpace===Rn?null:qt.getPrimaries(x.colorSpace),yt=x.colorSpace===Rn||st===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let nt=_(x.image,!1,s.maxTextureSize);nt=Se(x,nt);const ht=r.convert(x.format,x.colorSpace),Pt=r.convert(x.type);let Mt=b(x.internalFormat,ht,Pt,x.colorSpace,x.isVideoTexture);Gt(W,x);let ct;const Ft=x.mipmaps,L=x.isVideoTexture!==!0,it=St.__version===void 0||$===!0,rt=V.dataReady,ft=C(x,nt);if(x.isDepthTexture)Mt=M(x.format===Xi,x.type),it&&(L?e.texStorage2D(i.TEXTURE_2D,1,Mt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,nt.width,nt.height,0,ht,Pt,null));else if(x.isDataTexture)if(Ft.length>0){L&&it&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,Ft[0].width,Ft[0].height);for(let Q=0,K=Ft.length;Q<K;Q++)ct=Ft[Q],L?rt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,Pt,ct.data):e.texImage2D(i.TEXTURE_2D,Q,Mt,ct.width,ct.height,0,ht,Pt,ct.data);x.generateMipmaps=!1}else L?(it&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,nt.width,nt.height),rt&&Kt(x,nt,ht,Pt)):e.texImage2D(i.TEXTURE_2D,0,Mt,nt.width,nt.height,0,ht,Pt,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,Ft[0].width,Ft[0].height,nt.depth);for(let Q=0,K=Ft.length;Q<K;Q++)if(ct=Ft[Q],x.format!==Ke)if(ht!==null)if(L){if(rt)if(x.layerUpdates.size>0){const gt=Pa(ct.width,ct.height,x.format,x.type);for(const zt of x.layerUpdates){const ie=ct.data.subarray(zt*gt/ct.data.BYTES_PER_ELEMENT,(zt+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,zt,ct.width,ct.height,1,ht,ie)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,nt.depth,ht,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Mt,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,nt.depth,ht,Pt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Mt,ct.width,ct.height,nt.depth,0,ht,Pt,ct.data)}else{L&&it&&e.texStorage2D(i.TEXTURE_2D,ft,Mt,Ft[0].width,Ft[0].height);for(let Q=0,K=Ft.length;Q<K;Q++)ct=Ft[Q],x.format!==Ke?ht!==null?L?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Mt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?rt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ct.width,ct.height,ht,Pt,ct.data):e.texImage2D(i.TEXTURE_2D,Q,Mt,ct.width,ct.height,0,ht,Pt,ct.data)}else if(x.isDataArrayTexture)if(L){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Mt,nt.width,nt.height,nt.depth),rt)if(x.layerUpdates.size>0){const Q=Pa(nt.width,nt.height,x.format,x.type);for(const K of x.layerUpdates){const gt=nt.data.subarray(K*Q/nt.data.BYTES_PER_ELEMENT,(K+1)*Q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ht,Pt,gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,Pt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,nt.width,nt.height,nt.depth,0,ht,Pt,nt.data);else if(x.isData3DTexture)L?(it&&e.texStorage3D(i.TEXTURE_3D,ft,Mt,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,Pt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,nt.width,nt.height,nt.depth,0,ht,Pt,nt.data);else if(x.isFramebufferTexture){if(it)if(L)e.texStorage2D(i.TEXTURE_2D,ft,Mt,nt.width,nt.height);else{let Q=nt.width,K=nt.height;for(let gt=0;gt<ft;gt++)e.texImage2D(i.TEXTURE_2D,gt,Mt,Q,K,0,ht,Pt,null),Q>>=1,K>>=1}}else if(Ft.length>0){if(L&&it){const Q=pe(Ft[0]);e.texStorage2D(i.TEXTURE_2D,ft,Mt,Q.width,Q.height)}for(let Q=0,K=Ft.length;Q<K;Q++)ct=Ft[Q],L?rt&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ht,Pt,ct):e.texImage2D(i.TEXTURE_2D,Q,Mt,ht,Pt,ct);x.generateMipmaps=!1}else if(L){if(it){const Q=pe(nt);e.texStorage2D(i.TEXTURE_2D,ft,Mt,Q.width,Q.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Pt,nt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,ht,Pt,nt);m(x)&&f(W),St.__version=V.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,F){if(x.image.length!==6)return;const W=ne(w,x),$=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);const V=n.get($);if($.version!==V.__version||W===!0){e.activeTexture(i.TEXTURE0+F);const St=qt.getPrimaries(qt.workingColorSpace),st=x.colorSpace===Rn?null:qt.getPrimaries(x.colorSpace),vt=x.colorSpace===Rn||St===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!yt&&!nt?ht[K]=_(x.image[K],!0,s.maxCubemapSize):ht[K]=nt?x.image[K].image:x.image[K],ht[K]=Se(x,ht[K]);const Pt=ht[0],Mt=r.convert(x.format,x.colorSpace),ct=r.convert(x.type),Ft=b(x.internalFormat,Mt,ct,x.colorSpace),L=x.isVideoTexture!==!0,it=V.__version===void 0||W===!0,rt=$.dataReady;let ft=C(x,Pt);Gt(i.TEXTURE_CUBE_MAP,x);let Q;if(yt){L&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ft,Pt.width,Pt.height);for(let K=0;K<6;K++){Q=ht[K].mipmaps;for(let gt=0;gt<Q.length;gt++){const zt=Q[gt];x.format!==Ke?Mt!==null?L?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,zt.width,zt.height,Mt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ft,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,zt.width,zt.height,Mt,ct,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Ft,zt.width,zt.height,0,Mt,ct,zt.data)}}}else{if(Q=x.mipmaps,L&&it){Q.length>0&&ft++;const K=pe(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Ft,K.width,K.height)}for(let K=0;K<6;K++)if(nt){L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,Mt,ct,ht[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,ht[K].width,ht[K].height,0,Mt,ct,ht[K].data);for(let gt=0;gt<Q.length;gt++){const ie=Q[gt].image[K].image;L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,ie.width,ie.height,Mt,ct,ie.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ft,ie.width,ie.height,0,Mt,ct,ie.data)}}else{L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Mt,ct,ht[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ft,Mt,ct,ht[K]);for(let gt=0;gt<Q.length;gt++){const zt=Q[gt];L?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,Mt,ct,zt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Ft,Mt,ct,zt.image[K])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),V.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function pt(w,x,F,W,$,V){const St=r.convert(F.format,F.colorSpace),st=r.convert(F.type),vt=b(F.internalFormat,St,st,F.colorSpace),yt=n.get(x),nt=n.get(F);if(nt.__renderTarget=x,!yt.__hasExternalTextures){const ht=Math.max(1,x.width>>V),Pt=Math.max(1,x.height>>V);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,V,vt,ht,Pt,x.depth,0,St,st,null):e.texImage2D($,V,vt,ht,Pt,0,St,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),_t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,nt.__webglTexture,0,ce(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,nt.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,V=M(x.stencilBuffer,$),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=ce(x);_t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,V,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,V,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,V,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,w)}else{const W=x.textures;for(let $=0;$<W.length;$++){const V=W[$],St=r.convert(V.format,V.colorSpace),st=r.convert(V.type),vt=b(V.internalFormat,St,st,V.colorSpace),yt=ce(x);F&&_t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,vt,x.width,x.height):_t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,vt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,vt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const $=W.__webglTexture,V=ce(x);if(x.depthTexture.format===Wi)_t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===Xi)_t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Xt(w){const x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const W=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const W=w.texture.mipmaps;W&&W.length>0?Et(x.__webglFramebuffer[0],w):Et(x.__webglFramebuffer,w)}else if(F){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),Ut(x.__webglDepthbuffer[W],w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,V)}}else{const W=w.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ut(x.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function we(w,x,F){const W=n.get(w);x!==void 0&&pt(W.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Xt(w)}function R(w){const x=w.texture,F=n.get(w),W=n.get(x);w.addEventListener("dispose",P);const $=w.textures,V=w.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,o.memory.textures++),V){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let vt=0;vt<x.mipmaps.length;vt++)F.__webglFramebuffer[st][vt]=i.createFramebuffer()}else F.__webglFramebuffer[st]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<x.mipmaps.length;st++)F.__webglFramebuffer[st]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(St)for(let st=0,vt=$.length;st<vt;st++){const yt=n.get($[st]);yt.__webglTexture===void 0&&(yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&_t(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<$.length;st++){const vt=$[st];F.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[st]);const yt=r.convert(vt.format,vt.colorSpace),nt=r.convert(vt.type),ht=b(vt.internalFormat,yt,nt,vt.colorSpace,w.isXRRenderTarget===!0),Pt=ce(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ht,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,F.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(F.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,x);for(let st=0;st<6;st++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)pt(F.__webglFramebuffer[st][vt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,vt);else pt(F.__webglFramebuffer[st],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let st=0,vt=$.length;st<vt;st++){const yt=$[st],nt=n.get(yt);let ht=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),Gt(ht,yt),pt(F.__webglFramebuffer,w,yt,i.COLOR_ATTACHMENT0+st,ht,0),m(yt)&&f(ht)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(st=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,W.__webglTexture),Gt(st,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)pt(F.__webglFramebuffer[vt],w,x,i.COLOR_ATTACHMENT0,st,vt);else pt(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,st,0);m(x)&&f(st),e.unbindTexture()}w.depthBuffer&&Xt(w)}function ae(w){const x=w.textures;for(let F=0,W=x.length;F<W;F++){const $=x[F];if(m($)){const V=E(w),St=n.get($).__webglTexture;e.bindTexture(V,St),f(V),e.unbindTexture()}}}const Nt=[],Lt=[];function xt(w){if(w.samples>0){if(_t(w)===!1){const x=w.textures,F=w.width,W=w.height;let $=i.COLOR_BUFFER_BIT;const V=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(w),st=x.length>1;if(st)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const vt=w.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);const nt=n.get(x[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,F,W,0,0,F,W,$,i.NEAREST),c===!0&&(Nt.length=0,Lt.length=0,Nt.push(i.COLOR_ATTACHMENT0+yt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Nt.push(V),Lt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,St.__webglColorRenderbuffer[yt]);const nt=n.get(x[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ce(w){return Math.min(s.maxSamples,w.samples)}function _t(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function kt(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function Se(w,x){const F=w.colorSpace,W=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Mi&&F!==Rn&&(qt.getTransfer(F)===Jt?(W!==Ke||$!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function pe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=we,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=_t}function ym(i,t){function e(n,s=Rn){let r;const o=qt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===Ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xc)return i.BYTE;if(n===_c)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Mc)return i.ALPHA;if(n===Sc)return i.RGB;if(n===Ke)return i.RGBA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===Ec)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===bc)return i.RG;if(n===Do)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===bs||n===ws||n===Ts||n===As)if(o===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===qr||n===Yr||n===Kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$r||n===Zr||n===Jr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$r||n===Zr)return o===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jr)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qr||n===to||n===eo||n===no||n===io||n===so||n===ro||n===oo||n===ao||n===co||n===lo||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qr)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===to)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===oo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ho)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return o===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xo||n===_o||n===vo||n===yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===xo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Mm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
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

}`;class Em{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ie({vertexShader:Mm,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bm extends Ai{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Em,f={},E=e.getContextAttributes();let b=null,M=null;const C=[],A=[],P=new Ct;let I=null;const S=new Le;S.viewport=new Qt;const y=new Le;y.viewport=new Qt;const D=[S,y],N=new Vh;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=C[Y];return J===void 0&&(J=new mr,C[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=C[Y];return J===void 0&&(J=new mr,C[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=C[Y];return J===void 0&&(J=new mr,C[Y]=J),J.getHandSpace()};function X(Y){const J=A.indexOf(Y.inputSource);if(J===-1)return;const pt=C[J];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||o),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function j(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<C.length;Y++){const J=A[Y];J!==null&&(A[Y]=null,C[Y].disconnect(J))}H=null,q=null,m.reset();for(const Y in f)delete f[Y];t.setRenderTarget(b),p=null,u=null,d=null,s=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Z),E.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,Et=null;E.depth&&(Et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=E.stencil?Xi:Wi,Ut=E.stencil?Vi:Yn);const Xt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ze(u.textureWidth,u.textureHeight,{format:Ke,type:sn,depthTexture:new kc(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Ze(p.framebufferWidth,p.framebufferHeight,{format:Ke,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(Y){for(let J=0;J<Y.removed.length;J++){const pt=Y.removed[J],Ut=A.indexOf(pt);Ut>=0&&(A[Ut]=null,C[Ut].disconnect(pt))}for(let J=0;J<Y.added.length;J++){const pt=Y.added[J];let Ut=A.indexOf(pt);if(Ut===-1){for(let Xt=0;Xt<C.length;Xt++)if(Xt>=A.length){A.push(pt),Ut=Xt;break}else if(A[Xt]===null){A[Xt]=pt,Ut=Xt;break}if(Ut===-1)break}const Et=C[Ut];Et&&Et.connect(pt)}}const G=new T,at=new T;function ut(Y,J,pt){G.setFromMatrixPosition(J.matrixWorld),at.setFromMatrixPosition(pt.matrixWorld);const Ut=G.distanceTo(at),Et=J.projectionMatrix.elements,Xt=pt.projectionMatrix.elements,we=Et[14]/(Et[10]-1),R=Et[14]/(Et[10]+1),ae=(Et[9]+1)/Et[5],Nt=(Et[9]-1)/Et[5],Lt=(Et[8]-1)/Et[0],xt=(Xt[8]+1)/Xt[0],ce=we*Lt,_t=we*xt,kt=Ut/(-Lt+xt),Se=kt*-Lt;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Se),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Et[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const pe=we+kt,w=R+kt,x=ce-Se,F=_t+(Ut-Se),W=ae*R/w*pe,$=Nt*R/w*pe;Y.projectionMatrix.makePerspective(x,F,W,$,pe,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function bt(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),N.near=y.near=S.near=J,N.far=y.far=S.far=pt,(H!==N.near||q!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,q=N.far),N.layers.mask=Y.layers.mask|6,S.layers.mask=N.layers.mask&3,y.layers.mask=N.layers.mask&5;const Ut=Y.parent,Et=N.cameras;bt(N,Ut);for(let Xt=0;Xt<Et.length;Xt++)bt(Et[Xt],Ut);Et.length===2?ut(N,S,y):N.projectionMatrix.copy(S.projectionMatrix),Gt(Y,N,Ut)};function Gt(Y,J,pt){pt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Si*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(Y){return f[Y]};let ne=null;function oe(Y,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Ut=!1;pt.length!==N.cameras.length&&(N.cameras.length=0,Ut=!0);for(let R=0;R<pt.length;R++){const ae=pt[R];let Nt=null;if(p!==null)Nt=p.getViewport(ae);else{const xt=d.getViewSubImage(u,ae);Nt=xt.viewport,R===0&&(t.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(M))}let Lt=D[R];Lt===void 0&&(Lt=new Le,Lt.layers.enable(R),Lt.viewport=new Qt,D[R]=Lt),Lt.matrix.fromArray(ae.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ae.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),R===0&&(N.matrix.copy(Lt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ut===!0&&N.cameras.push(Lt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const R=d.getDepthInformation(pt[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(Et&&Et.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let R=0;R<pt.length;R++){const ae=pt[R].camera;if(ae){let Nt=f[ae];Nt||(Nt=new Bc,f[ae]=Nt);const Lt=d.getCameraImage(ae);Nt.sourceTexture=Lt}}}}for(let pt=0;pt<C.length;pt++){const Ut=A[pt],Et=C[pt];Ut!==null&&Et!==void 0&&Et.update(Ut,J,l||o)}ne&&ne(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Kt=new Gc;Kt.setAnimationLoop(oe),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}}const kn=new rn,wm=new le;function Tm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Uc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,b,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,E,b):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=t.get(f),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,kn.copy(M),kn.x*=-1,kn.y*=-1,kn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(wm.makeRotationFromEuler(kn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,E,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Am(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,b){const M=b.program;n.uniformBlockBinding(E,M)}function l(E,b){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const C=b.program;n.updateUBOMapping(E,C);const A=t.render.frame;r[E.id]!==A&&(u(E),r[E.id]=A)}function h(E){const b=d();E.__bindingPointIndex=b;const M=i.createBuffer(),C=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const b=s[E.id],M=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,P=M.length;A<P;A++){const I=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,y=I.length;S<y;S++){const D=I[S];if(p(D,A,S,C)===!0){const N=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let X=0;X<H.length;X++){const j=H[X],Z=_(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,N+q,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,M,C){const A=E.value,P=b+"_"+M;if(C[P]===void 0)return typeof A=="number"||typeof A=="boolean"?C[P]=A:C[P]=A.clone(),!0;{const I=C[P];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return C[P]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(E){const b=E.uniforms;let M=0;const C=16;for(let P=0,I=b.length;P<I;P++){const S=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,D=S.length;y<D;y++){const N=S[y],H=Array.isArray(N.value)?N.value:[N.value];for(let q=0,X=H.length;q<X;q++){const j=H[q],Z=_(j),G=M%C,at=G%Z.boundary,ut=G+at;M+=at,ut!==0&&C-ut<Z.storage&&(M+=C-ut),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=Z.storage}}}const A=M%C;return A>0&&(M+=C-A),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class Rm{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Fe;let A=0,P=0,I=null,S=-1,y=null;const D=new Qt,N=new Qt;let H=null;const q=new Dt(0);let X=0,j=e.width,Z=e.height,G=1,at=null,ut=null;const bt=new Qt(0,0,j,Z),Gt=new Qt(0,0,j,Z);let ne=!1;const oe=new zo;let Kt=!1,Y=!1;const J=new le,pt=new T,Ut=new Qt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function we(){return I===null?G:1}let R=n;function ae(v,U){return e.getContext(v,U)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Q,!1),R===null){const U="webgl2";if(R=ae(U,v),R===null)throw ae(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Nt,Lt,xt,ce,_t,kt,Se,pe,w,x,F,W,$,V,St,st,vt,yt,nt,ht,Pt,Mt,ct,Ft;function L(){Nt=new Of(R),Nt.init(),Mt=new ym(R,Nt),Lt=new Df(R,Nt,t,Mt),xt=new _m(R,Nt),Lt.reversedDepthBuffer&&u&&xt.buffers.depth.setReversed(!0),ce=new Hf(R),_t=new rm,kt=new vm(R,Nt,xt,_t,Lt,Mt,ce),Se=new If(M),pe=new Ff(M),w=new jh(R),ct=new Cf(R,w),x=new kf(R,w,ce,ct),F=new Vf(R,x,w,ce),nt=new Gf(R,Lt,kt),st=new Lf(_t),W=new sm(M,Se,pe,Nt,Lt,ct,st),$=new Tm(M,_t),V=new am,St=new fm(Nt),yt=new Rf(M,Se,pe,xt,F,p,c),vt=new gm(M,F,Lt),Ft=new Am(R,ce,Lt,xt),ht=new Pf(R,Nt,ce),Pt=new Bf(R,Nt,ce),ce.programs=W.programs,M.capabilities=Lt,M.extensions=Nt,M.properties=_t,M.renderLists=V,M.shadowMap=vt,M.state=xt,M.info=ce}L();const it=new bm(M,R);this.xr=it,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const v=Nt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Nt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(j,Z,!1))},this.getSize=function(v){return v.set(j,Z)},this.setSize=function(v,U,k=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=v,Z=U,e.width=Math.floor(v*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=v+"px",e.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(j*G,Z*G).floor()},this.setDrawingBufferSize=function(v,U,k){j=v,Z=U,G=k,e.width=Math.floor(v*k),e.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(bt)},this.setViewport=function(v,U,k,B){v.isVector4?bt.set(v.x,v.y,v.z,v.w):bt.set(v,U,k,B),xt.viewport(D.copy(bt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Gt)},this.setScissor=function(v,U,k,B){v.isVector4?Gt.set(v.x,v.y,v.z,v.w):Gt.set(v,U,k,B),xt.scissor(N.copy(Gt).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(v){xt.setScissorTest(ne=v)},this.setOpaqueSort=function(v){at=v},this.setTransparentSort=function(v){ut=v},this.getClearColor=function(v){return v.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,k=!0){let B=0;if(v){let z=!1;if(I!==null){const tt=I.texture.format;z=tt===Lo||tt===Do||tt===Po}if(z){const tt=I.texture.type,lt=tt===sn||tt===Yn||tt===Gi||tt===Vi||tt===Ro||tt===Co,mt=yt.getClearColor(),dt=yt.getClearAlpha(),Rt=mt.r,It=mt.g,wt=mt.b;lt?(g[0]=Rt,g[1]=It,g[2]=wt,g[3]=dt,R.clearBufferuiv(R.COLOR,0,g)):(_[0]=Rt,_[1]=It,_[2]=wt,_[3]=dt,R.clearBufferiv(R.COLOR,0,_))}else B|=R.COLOR_BUFFER_BIT}U&&(B|=R.DEPTH_BUFFER_BIT),k&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),yt.dispose(),V.dispose(),St.dispose(),_t.dispose(),Se.dispose(),pe.dispose(),F.dispose(),ct.dispose(),Ft.dispose(),W.dispose(),it.dispose(),it.removeEventListener("sessionstart",Je),it.removeEventListener("sessionend",Ko),Ln.stop()};function rt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const v=ce.autoReset,U=vt.enabled,k=vt.autoUpdate,B=vt.needsUpdate,z=vt.type;L(),ce.autoReset=v,vt.enabled=U,vt.autoUpdate=k,vt.needsUpdate=B,vt.type=z}function Q(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){const U=v.target;U.removeEventListener("dispose",K),gt(U)}function gt(v){zt(v),_t.remove(v)}function zt(v){const U=_t.get(v).programs;U!==void 0&&(U.forEach(function(k){W.releaseProgram(k)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,B,z,tt){U===null&&(U=Et);const lt=z.isMesh&&z.matrixWorld.determinant()<0,mt=Qc(v,U,k,B,z);xt.setMaterial(B,lt);let dt=k.index,Rt=1;if(B.wireframe===!0){if(dt=x.getWireframeAttribute(k),dt===void 0)return;Rt=2}const It=k.drawRange,wt=k.attributes.position;let Vt=It.start*Rt,Zt=(It.start+It.count)*Rt;tt!==null&&(Vt=Math.max(Vt,tt.start*Rt),Zt=Math.min(Zt,(tt.start+tt.count)*Rt)),dt!==null?(Vt=Math.max(Vt,0),Zt=Math.min(Zt,dt.count)):wt!=null&&(Vt=Math.max(Vt,0),Zt=Math.min(Zt,wt.count));const fe=Zt-Vt;if(fe<0||fe===1/0)return;ct.setup(z,B,mt,k,dt);let se,te=ht;if(dt!==null&&(se=w.get(dt),te=Pt,te.setIndex(se)),z.isMesh)B.wireframe===!0?(xt.setLineWidth(B.wireframeLinewidth*we()),te.setMode(R.LINES)):te.setMode(R.TRIANGLES);else if(z.isLine){let Tt=B.linewidth;Tt===void 0&&(Tt=1),xt.setLineWidth(Tt*we()),z.isLineSegments?te.setMode(R.LINES):z.isLineLoop?te.setMode(R.LINE_LOOP):te.setMode(R.LINE_STRIP)}else z.isPoints?te.setMode(R.POINTS):z.isSprite&&te.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Tt=z._multiDrawStarts,he=z._multiDrawCounts,jt=z._multiDrawCount,Oe=dt?w.get(dt).bytesPerElement:1,$n=_t.get(B).currentProgram.getUniforms();for(let ke=0;ke<jt;ke++)$n.setValue(R,"_gl_DrawID",ke),te.render(Tt[ke]/Oe,he[ke])}else if(z.isInstancedMesh)te.renderInstances(Vt,fe,z.count);else if(k.isInstancedBufferGeometry){const Tt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,he=Math.min(k.instanceCount,Tt);te.renderInstances(Vt,fe,he)}else te.render(Vt,fe)};function ie(v,U,k){v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=Ue,v.needsUpdate=!0,Qi(v,U,k),v.side=Pn,v.needsUpdate=!0,Qi(v,U,k),v.side=tn):Qi(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),f=St.get(k),f.init(U),b.push(f),k.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),v!==k&&v.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const tt=z.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){const mt=tt[lt];ie(mt,k,z),B.add(mt)}else ie(tt,k,z),B.add(tt)}),f=b.pop(),B},this.compileAsync=function(v,U,k=null){const B=this.compile(v,U,k);return new Promise(z=>{function tt(){if(B.forEach(function(lt){_t.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){z(v);return}setTimeout(tt,10)}Nt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let $t=null;function an(v){$t&&$t(v)}function Je(){Ln.stop()}function Ko(){Ln.start()}const Ln=new Gc;Ln.setAnimationLoop(an),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(v){$t=v,it.setAnimationLoop(v),v===null?Ln.stop():Ln.start()},it.addEventListener("sessionstart",Je),it.addEventListener("sessionend",Ko),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(U),U=it.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,U,I),f=St.get(v,b.length),f.init(U),b.push(f),J.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),oe.setFromProjectionMatrix(J,nn,U.reversedDepth),Y=this.localClippingEnabled,Kt=st.init(this.clippingPlanes,Y),m=V.get(v,E.length),m.init(),E.push(m),it.enabled===!0&&it.isPresenting===!0){const tt=M.xr.getDepthSensingMesh();tt!==null&&js(tt,U,-1/0,M.sortObjects)}js(v,U,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(at,ut),Xt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Xt&&yt.addToRenderList(m,v),this.info.render.frame++,Kt===!0&&st.beginShadows();const k=f.state.shadowsArray;vt.render(k,v,U),Kt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,z=m.transmissive;if(f.setupLights(),U.isArrayCamera){const tt=U.cameras;if(z.length>0)for(let lt=0,mt=tt.length;lt<mt;lt++){const dt=tt[lt];Zo(B,z,v,dt)}Xt&&yt.render(v);for(let lt=0,mt=tt.length;lt<mt;lt++){const dt=tt[lt];$o(m,v,dt,dt.viewport)}}else z.length>0&&Zo(B,z,v,U),Xt&&yt.render(v),$o(m,v,U);I!==null&&P===0&&(kt.updateMultisampleRenderTarget(I),kt.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(M,v,U),ct.resetDefaultState(),S=-1,y=null,b.pop(),b.length>0?(f=b[b.length-1],Kt===!0&&st.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function js(v,U,k,B){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||oe.intersectsSprite(v)){B&&Ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);const lt=F.update(v),mt=v.material;mt.visible&&m.push(v,lt,mt,k,Ut.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||oe.intersectsObject(v))){const lt=F.update(v),mt=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ut.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ut.copy(lt.boundingSphere.center)),Ut.applyMatrix4(v.matrixWorld).applyMatrix4(J)),Array.isArray(mt)){const dt=lt.groups;for(let Rt=0,It=dt.length;Rt<It;Rt++){const wt=dt[Rt],Vt=mt[wt.materialIndex];Vt&&Vt.visible&&m.push(v,lt,Vt,k,Ut.z,wt)}}else mt.visible&&m.push(v,lt,mt,k,Ut.z,null)}}const tt=v.children;for(let lt=0,mt=tt.length;lt<mt;lt++)js(tt[lt],U,k,B)}function $o(v,U,k,B){const z=v.opaque,tt=v.transmissive,lt=v.transparent;f.setupLightsView(k),Kt===!0&&st.setGlobalState(M.clippingPlanes,k),B&&xt.viewport(D.copy(B)),z.length>0&&Ji(z,U,k),tt.length>0&&Ji(tt,U,k),lt.length>0&&Ji(lt,U,k),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Zo(v,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Ze(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?xn:sn,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const tt=f.state.transmissionRenderTarget[B.id],lt=B.viewport||D;tt.setSize(lt.z*M.transmissionResolutionScale,lt.w*M.transmissionResolutionScale);const mt=M.getRenderTarget(),dt=M.getActiveCubeFace(),Rt=M.getActiveMipmapLevel();M.setRenderTarget(tt),M.getClearColor(q),X=M.getClearAlpha(),X<1&&M.setClearColor(16777215,.5),M.clear(),Xt&&yt.render(k);const It=M.toneMapping;M.toneMapping=Cn;const wt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Kt===!0&&st.setGlobalState(M.clippingPlanes,B),Ji(v,k,B),kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Zt=0,fe=U.length;Zt<fe;Zt++){const se=U[Zt],te=se.object,Tt=se.geometry,he=se.material,jt=se.group;if(he.side===tn&&te.layers.test(B.layers)){const Oe=he.side;he.side=Ue,he.needsUpdate=!0,Jo(te,k,B,Tt,he,jt),he.side=Oe,he.needsUpdate=!0,Vt=!0}}Vt===!0&&(kt.updateMultisampleRenderTarget(tt),kt.updateRenderTargetMipmap(tt))}M.setRenderTarget(mt,dt,Rt),M.setClearColor(q,X),wt!==void 0&&(B.viewport=wt),M.toneMapping=It}function Ji(v,U,k){const B=U.isScene===!0?U.overrideMaterial:null;for(let z=0,tt=v.length;z<tt;z++){const lt=v[z],mt=lt.object,dt=lt.geometry,Rt=lt.group;let It=lt.material;It.allowOverride===!0&&B!==null&&(It=B),mt.layers.test(k.layers)&&Jo(mt,U,k,dt,It,Rt)}}function Jo(v,U,k,B,z,tt){v.onBeforeRender(M,U,k,B,z,tt),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(M,U,k,B,v,tt),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=Ue,z.needsUpdate=!0,M.renderBufferDirect(k,U,B,z,v,tt),z.side=Pn,z.needsUpdate=!0,M.renderBufferDirect(k,U,B,z,v,tt),z.side=tn):M.renderBufferDirect(k,U,B,z,v,tt),v.onAfterRender(M,U,k,B,z,tt)}function Qi(v,U,k){U.isScene!==!0&&(U=Et);const B=_t.get(v),z=f.state.lights,tt=f.state.shadowsArray,lt=z.state.version,mt=W.getParameters(v,z.state,tt,U,k),dt=W.getProgramCacheKey(mt);let Rt=B.programs;B.environment=v.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(v.isMeshStandardMaterial?pe:Se).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Rt===void 0&&(v.addEventListener("dispose",K),Rt=new Map,B.programs=Rt);let It=Rt.get(dt);if(It!==void 0){if(B.currentProgram===It&&B.lightsStateVersion===lt)return ta(v,mt),It}else mt.uniforms=W.getUniforms(v),v.onBeforeCompile(mt,M),It=W.acquireProgram(mt,dt),Rt.set(dt,It),B.uniforms=mt.uniforms;const wt=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(wt.clippingPlanes=st.uniform),ta(v,mt),B.needsLights=el(v),B.lightsStateVersion=lt,B.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMap.value=z.state.directionalShadowMap,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotShadowMap.value=z.state.spotShadowMap,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMap.value=z.state.pointShadowMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.currentProgram=It,B.uniformsList=null,It}function Qo(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Rs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function ta(v,U){const k=_t.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Qc(v,U,k,B,z){U.isScene!==!0&&(U=Et),kt.resetTextureUnits();const tt=U.fog,lt=B.isMeshStandardMaterial?U.environment:null,mt=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Mi,dt=(B.isMeshStandardMaterial?pe:Se).get(B.envMap||lt),Rt=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!k.morphAttributes.position,Vt=!!k.morphAttributes.normal,Zt=!!k.morphAttributes.color;let fe=Cn;B.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(fe=M.toneMapping);const se=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=se!==void 0?se.length:0,Tt=_t.get(B),he=f.state.lights;if(Kt===!0&&(Y===!0||v!==y)){const Ce=v===y&&B.id===S;st.setState(B,v,Ce)}let jt=!1;B.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==he.state.version||Tt.outputColorSpace!==mt||z.isBatchedMesh&&Tt.batching===!1||!z.isBatchedMesh&&Tt.batching===!0||z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Tt.instancing===!1||!z.isInstancedMesh&&Tt.instancing===!0||z.isSkinnedMesh&&Tt.skinning===!1||!z.isSkinnedMesh&&Tt.skinning===!0||z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null||Tt.envMap!==dt||B.fog===!0&&Tt.fog!==tt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==st.numPlanes||Tt.numIntersection!==st.numIntersection)||Tt.vertexAlphas!==Rt||Tt.vertexTangents!==It||Tt.morphTargets!==wt||Tt.morphNormals!==Vt||Tt.morphColors!==Zt||Tt.toneMapping!==fe||Tt.morphTargetsCount!==te)&&(jt=!0):(jt=!0,Tt.__version=B.version);let Oe=Tt.currentProgram;jt===!0&&(Oe=Qi(B,U,z));let $n=!1,ke=!1,Li=!1;const ue=Oe.getUniforms(),Ge=Tt.uniforms;if(xt.useProgram(Oe.program)&&($n=!0,ke=!0,Li=!0),B.id!==S&&(S=B.id,ke=!0),$n||y!==v){xt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ue.setValue(R,"projectionMatrix",v.projectionMatrix),ue.setValue(R,"viewMatrix",v.matrixWorldInverse);const Ne=ue.map.cameraPosition;Ne!==void 0&&Ne.setValue(R,pt.setFromMatrixPosition(v.matrixWorld)),Lt.logarithmicDepthBuffer&&ue.setValue(R,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ue.setValue(R,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,ke=!0,Li=!0)}if(z.isSkinnedMesh){ue.setOptional(R,z,"bindMatrix"),ue.setOptional(R,z,"bindMatrixInverse");const Ce=z.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),ue.setValue(R,"boneTexture",Ce.boneTexture,kt))}z.isBatchedMesh&&(ue.setOptional(R,z,"batchingTexture"),ue.setValue(R,"batchingTexture",z._matricesTexture,kt),ue.setOptional(R,z,"batchingIdTexture"),ue.setValue(R,"batchingIdTexture",z._indirectTexture,kt),ue.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(R,"batchingColorTexture",z._colorsTexture,kt));const Ve=k.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&nt.update(z,k,Oe),(ke||Tt.receiveShadow!==z.receiveShadow)&&(Tt.receiveShadow=z.receiveShadow,ue.setValue(R,"receiveShadow",z.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ge.envMap.value=dt,Ge.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Ge.envMapIntensity.value=U.environmentIntensity),ke&&(ue.setValue(R,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights&&tl(Ge,Li),tt&&B.fog===!0&&$.refreshFogUniforms(Ge,tt),$.refreshMaterialUniforms(Ge,B,G,Z,f.state.transmissionRenderTarget[v.id]),Rs.upload(R,Qo(Tt),Ge,kt)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Rs.upload(R,Qo(Tt),Ge,kt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ue.setValue(R,"center",z.center),ue.setValue(R,"modelViewMatrix",z.modelViewMatrix),ue.setValue(R,"normalMatrix",z.normalMatrix),ue.setValue(R,"modelMatrix",z.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ce=B.uniformsGroups;for(let Ne=0,qs=Ce.length;Ne<qs;Ne++){const In=Ce[Ne];Ft.update(In,Oe),Ft.bind(In,Oe)}}return Oe}function tl(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function el(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,U,k){const B=_t.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_t.get(v.texture).__webglTexture=U,_t.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const k=_t.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const nl=R.createFramebuffer();this.setRenderTarget=function(v,U=0,k=0){I=v,A=U,P=k;let B=!0,z=null,tt=!1,lt=!1;if(v){const dt=_t.get(v);if(dt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(dt.__webglFramebuffer===void 0)kt.setupRenderTarget(v);else if(dt.__hasExternalTextures)kt.rebindTextures(v,_t.get(v.texture).__webglTexture,_t.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const wt=v.depthTexture;if(dt.__boundDepthTexture!==wt){if(wt!==null&&_t.has(wt)&&(v.width!==wt.image.width||v.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(v)}}const Rt=v.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const It=_t.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(It[U])?z=It[U][k]:z=It[U],tt=!0):v.samples>0&&kt.useMultisampledRTT(v)===!1?z=_t.get(v).__webglMultisampledFramebuffer:Array.isArray(It)?z=It[k]:z=It,D.copy(v.viewport),N.copy(v.scissor),H=v.scissorTest}else D.copy(bt).multiplyScalar(G).floor(),N.copy(Gt).multiplyScalar(G).floor(),H=ne;if(k!==0&&(z=nl),xt.bindFramebuffer(R.FRAMEBUFFER,z)&&B&&xt.drawBuffers(v,z),xt.viewport(D),xt.scissor(N),xt.setScissorTest(H),tt){const dt=_t.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,dt.__webglTexture,k)}else if(lt){const dt=U;for(let Rt=0;Rt<v.textures.length;Rt++){const It=_t.get(v.textures[Rt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Rt,It.__webglTexture,k,dt)}}else if(v!==null&&k!==0){const dt=_t.get(v.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,dt.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(v,U,k,B,z,tt,lt,mt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt){xt.bindFramebuffer(R.FRAMEBUFFER,dt);try{const Rt=v.textures[mt],It=Rt.format,wt=Rt.type;if(!Lt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-B&&k>=0&&k<=v.height-z&&(v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+mt),R.readPixels(U,k,B,z,Mt.convert(It),Mt.convert(wt),tt))}finally{const Rt=I!==null?_t.get(I).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,B,z,tt,lt,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(dt=dt[lt]),dt)if(U>=0&&U<=v.width-B&&k>=0&&k<=v.height-z){xt.bindFramebuffer(R.FRAMEBUFFER,dt);const Rt=v.textures[mt],It=Rt.format,wt=Rt.type;if(!Lt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Vt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Vt),R.bufferData(R.PIXEL_PACK_BUFFER,tt.byteLength,R.STREAM_READ),v.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+mt),R.readPixels(U,k,B,z,Mt.convert(It),Mt.convert(wt),0);const Zt=I!==null?_t.get(I).__webglFramebuffer:null;xt.bindFramebuffer(R.FRAMEBUFFER,Zt);const fe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ah(R,fe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Vt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,tt),R.deleteBuffer(Vt),R.deleteSync(fe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,k=0){const B=Math.pow(2,-k),z=Math.floor(v.image.width*B),tt=Math.floor(v.image.height*B),lt=U!==null?U.x:0,mt=U!==null?U.y:0;kt.setTexture2D(v,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,lt,mt,z,tt),xt.unbindTexture()};const il=R.createFramebuffer(),sl=R.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,B=null,z=0,tt=null){tt===null&&(z!==0?(qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=z,z=0):tt=0);let lt,mt,dt,Rt,It,wt,Vt,Zt,fe;const se=v.isCompressedTexture?v.mipmaps[tt]:v.image;if(k!==null)lt=k.max.x-k.min.x,mt=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,Rt=k.min.x,It=k.min.y,wt=k.isBox3?k.min.z:0;else{const Ve=Math.pow(2,-z);lt=Math.floor(se.width*Ve),mt=Math.floor(se.height*Ve),v.isDataArrayTexture?dt=se.depth:v.isData3DTexture?dt=Math.floor(se.depth*Ve):dt=1,Rt=0,It=0,wt=0}B!==null?(Vt=B.x,Zt=B.y,fe=B.z):(Vt=0,Zt=0,fe=0);const te=Mt.convert(U.format),Tt=Mt.convert(U.type);let he;U.isData3DTexture?(kt.setTexture3D(U,0),he=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(kt.setTexture2DArray(U,0),he=R.TEXTURE_2D_ARRAY):(kt.setTexture2D(U,0),he=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const jt=R.getParameter(R.UNPACK_ROW_LENGTH),Oe=R.getParameter(R.UNPACK_IMAGE_HEIGHT),$n=R.getParameter(R.UNPACK_SKIP_PIXELS),ke=R.getParameter(R.UNPACK_SKIP_ROWS),Li=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Rt),R.pixelStorei(R.UNPACK_SKIP_ROWS,It),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wt);const ue=v.isDataArrayTexture||v.isData3DTexture,Ge=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const Ve=_t.get(v),Ce=_t.get(U),Ne=_t.get(Ve.__renderTarget),qs=_t.get(Ce.__renderTarget);xt.bindFramebuffer(R.READ_FRAMEBUFFER,Ne.__webglFramebuffer),xt.bindFramebuffer(R.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let In=0;In<dt;In++)ue&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(v).__webglTexture,z,wt+In),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.get(U).__webglTexture,tt,fe+In)),R.blitFramebuffer(Rt,It,lt,mt,Vt,Zt,lt,mt,R.DEPTH_BUFFER_BIT,R.NEAREST);xt.bindFramebuffer(R.READ_FRAMEBUFFER,null),xt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||_t.has(v)){const Ve=_t.get(v),Ce=_t.get(U);xt.bindFramebuffer(R.READ_FRAMEBUFFER,il),xt.bindFramebuffer(R.DRAW_FRAMEBUFFER,sl);for(let Ne=0;Ne<dt;Ne++)ue?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ve.__webglTexture,z,wt+Ne):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ve.__webglTexture,z),Ge?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ce.__webglTexture,tt,fe+Ne):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ce.__webglTexture,tt),z!==0?R.blitFramebuffer(Rt,It,lt,mt,Vt,Zt,lt,mt,R.COLOR_BUFFER_BIT,R.NEAREST):Ge?R.copyTexSubImage3D(he,tt,Vt,Zt,fe+Ne,Rt,It,lt,mt):R.copyTexSubImage2D(he,tt,Vt,Zt,Rt,It,lt,mt);xt.bindFramebuffer(R.READ_FRAMEBUFFER,null),xt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ge?v.isDataTexture||v.isData3DTexture?R.texSubImage3D(he,tt,Vt,Zt,fe,lt,mt,dt,te,Tt,se.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(he,tt,Vt,Zt,fe,lt,mt,dt,te,se.data):R.texSubImage3D(he,tt,Vt,Zt,fe,lt,mt,dt,te,Tt,se):v.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,tt,Vt,Zt,lt,mt,te,Tt,se.data):v.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,tt,Vt,Zt,se.width,se.height,te,se.data):R.texSubImage2D(R.TEXTURE_2D,tt,Vt,Zt,lt,mt,te,Tt,se);R.pixelStorei(R.UNPACK_ROW_LENGTH,jt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Oe),R.pixelStorei(R.UNPACK_SKIP_PIXELS,$n),R.pixelStorei(R.UNPACK_SKIP_ROWS,ke),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Li),tt===0&&U.generateMipmaps&&R.generateMipmap(he),xt.unbindTexture()},this.initRenderTarget=function(v){_t.get(v).__webglFramebuffer===void 0&&kt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?kt.setTextureCube(v,0):v.isData3DTexture?kt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?kt.setTexture2DArray(v,0):kt.setTexture2D(v,0),xt.unbindTexture()},this.resetState=function(){A=0,P=0,I=null,xt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const ec={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ShiftLeft:"pounce",ShiftRight:"pounce",KeyE:"interact",Enter:"interact",KeyF:"fire",Escape:"pause"};class Cm{constructor(t){this.el=t,this.isTouch=matchMedia("(pointer: coarse)").matches,addEventListener("keydown",e=>{const n=ec[e.code];if(!n){/^Digit[1-4]$/.test(e.code)&&this.edges.add("slot"+e.code.slice(5));return}e.code==="Space"&&e.preventDefault(),this.keys[n]||this.edges.add(n),this.keys[n]=!0}),addEventListener("keyup",e=>{const n=ec[e.code];n&&(this.keys[n]=!1)}),addEventListener("blur",()=>{Object.keys(this.keys).forEach(e=>this.keys[e]=!1)}),t.addEventListener("pointerdown",e=>this.onDown(e)),t.addEventListener("pointermove",e=>this.onMove(e)),t.addEventListener("pointerup",e=>this.onUp(e)),t.addEventListener("pointercancel",e=>this.onUp(e)),t.addEventListener("wheel",e=>{this.wheelDelta+=Math.sign(e.deltaY)},{passive:!0}),t.addEventListener("contextmenu",e=>{e.preventDefault(),this.edges.add("pounce")}),document.addEventListener("touchmove",e=>e.preventDefault(),{passive:!1})}keys={up:!1,down:!1,left:!1,right:!1,jump:!1,pounce:!1,interact:!1,fire:!1,pause:!1};edges=new Set;wheelDelta=0;mouseDragX=0;dragging=!1;lastX=0;joyId=null;joyStart={x:0,y:0};joyVec={x:0,y:0};touchButtons=new Map;isTouch;requestCycle(){this.wheelDelta+=1}setTouchButton(t,e){const n=this.touchButtons.get(t)??!1;e&&!n&&this.edges.add(t),this.touchButtons.set(t,e)}onDown(t){if(this.el.setPointerCapture?.(t.pointerId),this.edges.add("any"),t.pointerType==="touch"&&t.clientX<innerWidth*.45&&this.joyId===null){this.joyId=t.pointerId,this.joyStart={x:t.clientX,y:t.clientY},this.joyVec={x:0,y:0};return}t.pointerType==="mouse"&&t.button===0&&(this.dragging=!0,this.lastX=t.clientX,this.edges.add("fire"))}onMove(t){if(t.pointerId===this.joyId){const e=(t.clientX-this.joyStart.x)/60,n=(t.clientY-this.joyStart.y)/60,s=Math.hypot(e,n),r=s>1?1/s:1;this.joyVec={x:e*r,y:-n*r};return}this.dragging&&(this.mouseDragX+=(t.clientX-this.lastX)/innerWidth,this.lastX=t.clientX),t.pointerType==="touch"&&t.clientX>innerWidth*.5&&(this.mouseDragX+=(t.movementX??0)/innerWidth)}onUp(t){t.pointerId===this.joyId&&(this.joyId=null,this.joyVec={x:0,y:0}),t.pointerType==="mouse"&&(this.dragging=!1)}pollGamepad(t){const e=navigator.getGamepads?.()[0];if(!e)return;const n=r=>Math.abs(r)>.18?r:0;t.moveX+=n(e.axes[0]??0),t.moveY+=-n(e.axes[1]??0),e.buttons[0]?.pressed?(this.gpHeld.has(0)||(t.jumpPressed=!0,this.gpHeld.add(0)),t.jump=!0):this.gpHeld.delete(0);const s=(r,o)=>{e.buttons[r]?.pressed?this.gpHeld.has(r)||(t[o]=!0,this.gpHeld.add(r)):this.gpHeld.delete(r)};s(1,"pounce"),s(2,"interact"),s(5,"fire")}gpHeld=new Set;poll(){let t=(this.keys.right?1:0)-(this.keys.left?1:0),e=(this.keys.up?1:0)-(this.keys.down?1:0);const n=Math.hypot(t,e);n>1&&(t/=n,e/=n),t+=this.joyVec.x,e+=this.joyVec.y;const s={moveX:Math.max(-1,Math.min(1,t)),moveY:Math.max(-1,Math.min(1,e)),jump:this.keys.jump||(this.touchButtons.get("jump")??!1),jumpPressed:this.edges.has("jump"),pounce:this.edges.has("pounce"),interact:this.edges.has("interact"),fire:this.edges.has("fire"),cycle:this.wheelDelta===0?0:Math.sign(this.wheelDelta),camNudge:Math.max(-1,Math.min(1,this.mouseDragX*4)),pause:this.edges.has("pause"),any:this.edges.size>0};return this.pollGamepad(s),this.edges.clear(),this.wheelDelta=0,this.mouseDragX*=.82,s}}const Pm="../../assets/sfx/",Dm="../../music/gluesong.mp3";class Lm{constructor(t,e){this.onMuteChange=e,this.muted=t,this.music=new Audio(new URL(Dm,document.baseURI).href),this.music.loop=!0,this.music.volume=.28,this.music.muted=!0,this.music.play().then(()=>{this.muted||(this.music.muted=!1)}).catch(()=>{});const n=()=>{this.unlocked=!0,this.ensureCtx(),this.muted||(this.music.muted=!1,this.music.play().catch(()=>{})),removeEventListener("pointerdown",n),removeEventListener("keydown",n)};addEventListener("pointerdown",n),addEventListener("keydown",n),document.addEventListener("visibilitychange",()=>{document.hidden?this.music.pause():!this.muted&&this.unlocked&&this.music.play().catch(()=>{})})}ctx=null;buffers=new Map;music;engineOsc=null;engineGain=null;muted;unlocked=!1;ensureCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setMuted(t){this.muted=t,this.music.muted=t,!t&&this.unlocked&&this.music.play().catch(()=>{}),this.engineGain&&(this.engineGain.gain.value=t?0:.05),this.onMuteChange(t)}musicVolume(t){this.music.volume=t}async play(t,e=.5,n=1){if(this.muted||!this.unlocked)return;const s=this.ensureCtx();let r=this.buffers.get(t);if(!r)try{const c=await fetch(new URL(`${Pm}${t}.wav`,document.baseURI).href);r=await s.decodeAudioData(await c.arrayBuffer()),this.buffers.set(t,r)}catch{return}const o=s.createBufferSource();o.buffer=r,o.playbackRate.value=n;const a=s.createGain();a.gain.value=e,o.connect(a).connect(s.destination),o.start()}engine(t,e=0){if(!this.unlocked)return;const n=this.ensureCtx();if(t&&!this.engineOsc){this.engineOsc=n.createOscillator(),this.engineOsc.type="sawtooth",this.engineGain=n.createGain(),this.engineGain.gain.value=this.muted?0:.05;const s=n.createBiquadFilter();s.type="lowpass",s.frequency.value=260,this.engineOsc.connect(s).connect(this.engineGain).connect(n.destination),this.engineOsc.start()}this.engineOsc&&(this.engineOsc.frequency.value=46+e*60),!t&&this.engineOsc&&(this.engineOsc.stop(),this.engineOsc.disconnect(),this.engineOsc=null)}}const nc="duck-job-v1";function Eo(){return{v:1,chaptersDone:[],pieces:[],ducks:[],weapons:[],weaponTiers:{},grades:{},pearls:0,gear:{owned:[],collar:null,charms:[],snacks:[]},bountiesCleared:0,secrets:{},muted:!1,tier:null,settings:{brightness:1.15,bloom:!0,musicVolume:.28}}}function Im(i){const t=Eo();if(typeof i!="object"||i===null)return t;const e=i,n=s=>Array.isArray(s)?s:[];if(t.chaptersDone=n(e.chaptersDone).filter(s=>typeof s=="string"),t.pieces=n(e.pieces).filter(s=>typeof s=="string"),t.ducks=n(e.ducks).filter(s=>typeof s=="number"),t.weapons=n(e.weapons).filter(s=>s==="ball"||s==="boba"||s==="whistle"||s==="ankh"),typeof e.weaponTiers=="object"&&e.weaponTiers!==null&&(t.weaponTiers=e.weaponTiers),typeof e.grades=="object"&&e.grades!==null&&(t.grades=e.grades),typeof e.pearls=="number"&&isFinite(e.pearls)&&(t.pearls=Math.max(0,Math.floor(e.pearls))),typeof e.gear=="object"&&e.gear!==null){const s=e.gear;t.gear.owned=n(s.owned).filter(r=>typeof r=="string"),t.gear.collar=typeof s.collar=="string"?s.collar:null,t.gear.charms=n(s.charms).filter(r=>typeof r=="string"),t.gear.snacks=n(s.snacks).filter(r=>typeof r=="string")}if(typeof e.bountiesCleared=="number"&&(t.bountiesCleared=e.bountiesCleared),typeof e.secrets=="object"&&e.secrets!==null&&(t.secrets=e.secrets),typeof e.muted=="boolean"&&(t.muted=e.muted),(e.tier==="ultra"||e.tier==="mobile")&&(t.tier=e.tier),typeof e.settings=="object"&&e.settings!==null){const s=e.settings;typeof s.brightness=="number"&&isFinite(s.brightness)&&(t.settings.brightness=Math.min(2.4,Math.max(.7,s.brightness))),typeof s.bloom=="boolean"&&(t.settings.bloom=s.bloom),typeof s.musicVolume=="number"&&isFinite(s.musicVolume)&&(t.settings.musicVolume=Math.min(1,Math.max(0,s.musicVolume)))}return t}class Um{data;constructor(){this.data=this.load()}load(){try{const t=localStorage.getItem(nc);return t?Im(JSON.parse(t)):Eo()}catch{return Eo()}}write(){try{localStorage.setItem(nc,JSON.stringify(this.data))}catch{}}patch(t){t(this.data),this.write()}}const O={midnight:725030,dockWater:1319498,horizonGlow:2833006,asphalt:1712448,concrete:3818600,sand:13218185,pine:1915445,grass:2377020,victoryRed:13904426,taillight:16720418,bentley:14262363,bentleyEar:11763521,duck:16765503,duckBill:16747586,heartNeon:16731533,ramenGold:16758311,taroPurple:11765995,crtGreen:3407752,grandmaLilac:13350888,edwardPale:14542832,lincolnMud:5984834,star:16774872},Tr=i=>`#${i.toString(16).padStart(6,"0")}`,zm=`
.dj-hud { position: fixed; inset: 0; pointer-events: none; z-index: 10;
  font-family: 'Nunito', system-ui, sans-serif; color: #fff; }
.dj-card { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px; padding: 8px 14px; }
.dj-top { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 14px; display: flex; gap: 10px; align-items: center; }
.dj-hearts { font-size: 18px; letter-spacing: 2px; }
.dj-pearls { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${Tr(O.taroPurple)}; }
.dj-pieces { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${Tr(O.heartNeon)}; }
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
  color: ${Tr(O.crtGreen)}; }
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
`;class Nm{constructor(t,e,n){this.onMute=e,this.onPause=n;const s=document.createElement("style");s.textContent=zm,document.head.appendChild(s),this.root=document.createElement("div"),this.root.className="dj-hud",this.root.innerHTML=`
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
    `,t.appendChild(this.root);const r=o=>this.root.querySelector(`[data-r="${o}"]`);this.hearts=r("hearts"),this.pearls=r("pearls"),this.pieces=r("pieces"),this.chapter=r("chapter"),this.toastEl=r("toast"),this.promptEl=r("prompt"),this.fadeEl=r("fade"),this.touchLayer=r("touch"),r("mute").addEventListener("click",()=>this.onMute()),r("pause").addEventListener("click",()=>this.onPause()),this.setHearts(3,3),this.setPearls(0),this.setPieces(0)}root;hearts;pearls;pieces;chapter;toastEl;promptEl;fadeEl;touchLayer;toastTimer=0;chapterTimer=0;buildTouchControls(t){if(!t.isTouch)return;this.touchLayer.classList.add("on");const e=(s,r,o,a)=>{const c=document.createElement("div");c.className="dj-tbtn",c.textContent=s,c.style.right=`${o}px`,c.style.bottom=`calc(${a}px + env(safe-area-inset-bottom))`,c.addEventListener("pointerdown",l=>{l.stopPropagation(),t.setTouchButton(r,!0)}),c.addEventListener("pointerup",()=>t.setTouchButton(r,!1)),c.addEventListener("pointercancel",()=>t.setTouchButton(r,!1)),this.touchLayer.appendChild(c)};e("JUMP","jump",24,96),e("DASH","pounce",96,44),e("USE","interact",24,170),e("FIRE","fire",96,122);const n=document.createElement("div");n.className="dj-tbtn",n.textContent="SWAP",n.style.right="170px",n.style.bottom="calc(190px + env(safe-area-inset-bottom))",n.style.width="52px",n.style.height="52px",n.addEventListener("pointerdown",s=>{s.stopPropagation(),t.requestCycle()}),this.touchLayer.appendChild(n)}setHearts(t,e){this.hearts.textContent="❤".repeat(t)+"♡".repeat(Math.max(0,e-t))}setPearls(t){this.pearls.textContent=`⬤ ${t}`}setPieces(t){this.pieces.textContent=`✉ ${t}/7`}chapterCard(t,e){this.chapter.querySelector(".t").textContent=t,this.chapter.querySelector(".s").textContent=e,this.chapter.style.opacity="1",this.chapterTimer=4.4}toast(t,e=2.6){this.toastEl.textContent=t,this.toastEl.classList.add("show"),this.toastTimer=e}prompt(t){t?(this.promptEl.textContent=t,this.promptEl.classList.add("show")):this.promptEl.classList.remove("show")}fade(t){this.fadeEl.style.opacity=t?"1":"0"}update(t){this.toastTimer>0&&(this.toastTimer-=t,this.toastTimer<=0&&this.toastEl.classList.remove("show")),this.chapterTimer>0&&(this.chapterTimer-=t,this.chapterTimer<=0&&(this.chapter.style.opacity="0"))}overlay(){const t=document.createElement("div");return t.className="dj-overlay",this.root.appendChild(t),t}}class Fm{cam;cinematicControl=!1;zones=[];defaultOffset=new T(0,6,-8);curOffset=new T(0,6,-8);curFov=55;nudgeYaw=0;shakeAmp=0;shakeT=0;lookTarget=new T;constructor(t){this.cam=new Le(55,t,.1,900)}configure(t,e){this.zones=t,this.defaultOffset.set(e.x,e.y,e.z),this.curOffset.copy(this.defaultOffset)}kick(t=.25){this.shakeAmp=Math.max(this.shakeAmp,t)}snapTo(t){this.cam.position.copy(t).add(this.curOffset),this.lookTarget.copy(t)}update(t,e,n,s){if(this.cinematicControl)return;let r=this.defaultOffset,o=55,a=.35;for(const d of this.zones)if(e.x>=d.min.x&&e.x<=d.max.x&&e.y>=d.min.y&&e.y<=d.max.y&&e.z>=d.min.z&&e.z<=d.max.z){r=new T(d.offset.x,d.offset.y,d.offset.z),o=d.fov??55,a=d.lookAhead??.35;break}this.curOffset.x=me.damp(this.curOffset.x,r.x,2.5,t),this.curOffset.y=me.damp(this.curOffset.y,r.y,2.5,t),this.curOffset.z=me.damp(this.curOffset.z,r.z,2.5,t),this.curFov=me.damp(this.curFov,o,2.5,t),Math.abs(this.cam.fov-this.curFov)>.05&&(this.cam.fov=this.curFov,this.cam.updateProjectionMatrix()),this.nudgeYaw=me.damp(this.nudgeYaw,s*.5,4,t);const c=new T(e.x+n.x*a,e.y+.6,e.z+n.z*a);this.lookTarget.x=me.damp(this.lookTarget.x,c.x,6,t),this.lookTarget.y=me.damp(this.lookTarget.y,c.y,6,t),this.lookTarget.z=me.damp(this.lookTarget.z,c.z,6,t);const l=this.curOffset.clone().applyAxisAngle(Om,this.nudgeYaw),h=e.clone().add(l);this.cam.position.x=me.damp(this.cam.position.x,h.x,5,t),this.cam.position.y=me.damp(this.cam.position.y,h.y,5,t),this.cam.position.z=me.damp(this.cam.position.z,h.z,5,t),this.shakeAmp>.001&&(this.shakeT+=t*40,this.cam.position.x+=Math.sin(this.shakeT*1.1)*this.shakeAmp*.12,this.cam.position.y+=Math.cos(this.shakeT*1.7)*this.shakeAmp*.1,this.shakeAmp=me.damp(this.shakeAmp,0,7,t)),this.cam.lookAt(this.lookTarget)}get yaw(){const t=new T;return this.cam.getWorldDirection(t),Math.atan2(-t.x,-t.z)}}const Om=new T(0,1,0),Cs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const km=new Vo(-1,1,1,-1,0,1);class Bm extends Me{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}}const Hm=new Bm;class qc{constructor(t){this._mesh=new et(Hm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,km)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Yc extends Zi{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ns.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new qc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ic extends Zi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Gm extends Zi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Vm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Ze(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Yc(Cs),this.copyPass.material.blending=gn,this.clock=new Wh}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ic!==void 0&&(o instanceof ic?n=!0:o instanceof Gm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Wm extends Zi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Dt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Xm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Dt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class wi extends Zi{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Dt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ze(r,o,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Ze(r,o,{type:xn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Ze(r,o,{type:xn});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=Xm;this.highPassUniforms=Ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ns.clone(Cs.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:Cs.vertexShader,fragmentShader:Cs.fragmentShader,blending:Is,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Dt,this._oldClearAlpha=1,this._basic=new vn,this._fsQuad=new qc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=wi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=wi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}wi.BlurDirectionX=new Ct(1,0);wi.BlurDirectionY=new Ct(0,1);const jm={uniforms:{tDiffuse:{value:null},uVignette:{value:.55},uGrain:{value:.035},uTime:{value:0},uFlash:{value:0},uWarm:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uVignette;
    uniform float uGrain;
    uniform float uTime;
    uniform float uFlash;
    uniform float uWarm;
    varying vec2 vUv;
    float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453); }
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      // warm grade lerp (sunrise scenes)
      c.rgb = mix(c.rgb, c.rgb * vec3(1.12, 0.98, 0.85) + vec3(0.03, 0.012, 0.0), uWarm);
      // vignette
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - uVignette * smoothstep(0.42, 0.86, d);
      // grain
      c.rgb += (rand(vUv * uTime) - 0.5) * uGrain;
      // flash
      c.rgb = mix(c.rgb, vec3(1.0), uFlash);
      gl_FragColor = c;
    }
  `};class qm{constructor(t,e,n){this.renderer=t,this.enabled=e==="ultra",this.composer=new Vm(t),this.renderPass=new Wm(new $i,new Le),this.composer.addPass(this.renderPass),this.bloom=new wi(new Ct(innerWidth,innerHeight),.45,.55,.82),this.composer.addPass(this.bloom),this.grade=new Yc(jm),this.composer.addPass(this.grade);const s=r=>{const o=document.createElement("div");return o.style.cssText=`position:fixed;left:0;right:0;${r?"top":"bottom"}:0;height:0;background:#000;z-index:40;transition:height 0.6s cubic-bezier(0.4,0,0.2,1);pointer-events:none;`,n.appendChild(o),o};this.barsTop=s(!0),this.barsBottom=s(!1)}composer;renderPass;bloom;grade;barsTop;barsBottom;active=!1;timeScale=1;flash=0;t=0;enabled;resize(){this.composer.setSize(innerWidth,innerHeight)}setCinematic(t){this.active=t;const e=t?Math.max(0,(innerHeight-innerWidth/2.39)/2):0;this.barsTop.style.height=`${Math.min(e,innerHeight*.16)}px`,this.barsBottom.style.height=this.barsTop.style.height,this.bloom.strength=t?.85:.45,t||(this.timeScale=1,this.grade.uniforms.uWarm.value=0)}flashWhite(t=1){this.flash=t}setWarm(t){this.grade.uniforms.uWarm.value=t}setBloom(t){this.bloom.enabled=t}render(t,e,n){if(this.t+=n,this.flash=Math.max(0,this.flash-n*1.6),!this.enabled&&!this.active){this.renderer.render(t,e);return}this.renderPass.scene=t,this.renderPass.camera=e,this.grade.uniforms.uTime.value=this.t,this.grade.uniforms.uFlash.value=this.flash,this.grade.uniforms.uVignette.value=this.active?.7:.5,this.grade.uniforms.uGrain.value=this.active?.05:.03,this.composer.render()}}const di=250,pn=6,Ps=[{id:"ch1",z:45,name:"THE GYM"},{id:"ch2",z:72,name:"LINCOLN AFTER DARK"},{id:"ch3",z:99,name:"HAYDEN'S TOLL BRIDGE"},{id:"ch4",z:126,name:"THE BEACH"},{id:"ch5",z:153,name:"THE DOCK & STARS"},{id:"ch6",z:180,name:"TWILIGHT FOREST"},{id:"ch7",z:207,name:"SUNRISE POINT"}],Wn=-62;function Ym(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:(di-100)/2},size:{x:pn*2+6,y:.5,z:di+120},color:O.asphalt});for(let t=-70;t<di;t+=6)i.push({kind:"box",pos:{x:0,y:.01,z:t},size:{x:.22,y:.02,z:2.6},color:12568286,ghost:!0});i.push({kind:"box",pos:{x:0,y:-.6,z:60},size:{x:220,y:.5,z:420},color:922672,ghost:!0});for(const t of[-1,1])i.push({kind:"box",pos:{x:(pn+1.6)*t,y:-.2,z:(di-100)/2},size:{x:2.4,y:.6,z:di+120},color:O.concrete});for(const t of Ps)i.push({kind:"box",pos:{x:pn+5,y:-.18,z:t.z},size:{x:7,y:.56,z:10},color:O.asphalt});return i.push({kind:"box",pos:{x:-14,y:-.18,z:Wn},size:{x:14,y:.56,z:16},color:O.concrete}),i.push({kind:"box",pos:{x:-16,y:1.6,z:Wn},size:{x:7,y:3.2,z:10},color:2765650}),{id:"hub",name:"THE HIGHWAY",tagline:"the ducks stole the letter. drive.",skyGlow:O.heartNeon,fogDensity:.011,prims:i,entities:[{type:"spawn",pos:{x:-2,y:0,z:2},yaw:Math.PI/2}],cameraZones:[],cameraOffset:{x:0,y:5.2,z:-7.5},parSeconds:0,bounds:{min:{x:-40,y:-10,z:-90},max:{x:40,y:30,z:di+20}}}}function Km(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Me;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=sc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);const g=sc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function sc(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new ze(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function $m(i){const t=new bi({color:i.color,emissive:i.emissive??0,emissiveIntensity:i.emissiveIntensity??1,flatShading:i.flatShading??!0,transparent:i.transparent??!1,opacity:i.opacity??1}),e=i.rim??.25,n=i.gloss??0;return t.onBeforeCompile=s=>{s.uniforms.djRim={value:e},s.uniforms.djGloss={value:n},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`dj-toon-${e}-${n}`,t}const rc=new Map;function At(i,t={}){const e=JSON.stringify([i,t]);let n=rc.get(e);return n||(n=$m({color:i,...t}),rc.set(e,n)),n}function _e(i,t=1.6){return At(i,{emissive:i,emissiveIntensity:t,rim:0})}const oc=i=>new T(i.x,i.y,i.z);function Zm(i){if(i.kind==="cylinder")return new de(i.size.x/2,i.size.x/2,i.size.y,12);if(i.kind==="ramp"){const t=new Me,e=i.size.x/2,n=i.size.y,s=i.size.z/2,r=new Float32Array([-e,0,-s,e,0,-s,e,0,s,-e,0,-s,e,0,s,-e,0,s,-e,0,-s,-e,n,s,e,n,s,-e,0,-s,e,n,s,e,0,-s,-e,0,s,-e,n,s,e,n,s,-e,0,s,e,n,s,e,0,s,-e,0,-s,-e,0,s,-e,n,s,e,0,-s,e,n,s,e,0,s]);return t.setAttribute("position",new ze(r,3)),t.computeVertexNormals(),t}return new Yt(i.size.x,i.size.y,i.size.z)}class jo{group=new Ht;colliders=[];constructor(t){const e=new Map;for(const n of t.prims){if(!n.invisible){const s=Zm(n),r=new le().makeRotationY(n.yaw??0).setPosition(n.pos.x,n.pos.y+(n.kind==="ramp",0),n.pos.z);n.kind==="box"||n.kind,s.applyMatrix4(r);const o=JSON.stringify([n.color,n.emissive??0,n.emissiveIntensity??0]),a=e.get(o)??[];a.push(s),e.set(o,a)}n.ghost||this.colliders.push(this.makeCollider(n))}for(const[n,s]of e){const[r,o,a]=JSON.parse(n),c=Km(s,!1);if(!c)continue;const l=new et(c,o?At(r,{emissive:o,emissiveIntensity:a}):At(r));l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),s.forEach(h=>h.dispose())}}makeCollider(t){return t.kind==="ramp"?{kind:"ramp",center:oc(t.pos),half:new T(t.size.x/2,t.size.y,t.size.z/2),yaw:t.yaw??0,enabled:!0}:{kind:"box",center:oc({x:t.pos.x,y:t.pos.y,z:t.pos.z}),half:new T(t.size.x/2,t.size.y/2,t.size.z/2),yaw:t.yaw??0,enabled:!0}}addCollider(t){return this.colliders.push(t),t}groundAt(t,e,n){let s=-1/0;const r=new T;for(const o of this.colliders){if(!o.enabled||(r.set(t-o.center.x,0,e-o.center.z),o.yaw&&r.applyAxisAngle(Ar,-o.yaw),Math.abs(r.x)>o.half.x||Math.abs(r.z)>o.half.z))continue;let a;if(o.kind==="ramp"){const c=(r.z+o.half.z)/(o.half.z*2);a=o.center.y+c*o.half.y}else a=o.center.y+o.half.y;a<=n+.35&&a>s&&(s=a)}return s}resolveWalls(t,e,n){const s=new T;for(const r of this.colliders){if(!r.enabled||r.kind==="ramp")continue;const o=r.center.y+r.half.y,a=r.center.y-r.half.y;if(o<t.y+.3||a>t.y+n)continue;s.set(t.x-r.center.x,0,t.z-r.center.z),r.yaw&&s.applyAxisAngle(Ar,-r.yaw);const c=r.half.x+e-Math.abs(s.x),l=r.half.z+e-Math.abs(s.z);c<=0||l<=0||(c<l?s.x+=c*Math.sign(s.x||1):s.z+=l*Math.sign(s.z||1),r.yaw&&s.applyAxisAngle(Ar,r.yaw),t.x=r.center.x+s.x,t.z=r.center.z+s.z)}}}const Ar=new T(0,1,0);function re(i,t,e,n,s={}){const r=new et(new Yt(i,t,e),At(n,s));return r.castShadow=!0,r.receiveShadow=!0,r}function qn(i,t,e,n,s=10,r={}){const o=new et(new de(i,t,e,s),At(n,r));return o.castShadow=!0,o.receiveShadow=!0,o}function Ds(i,t,e=10,n={}){const s=new et(new be(i,e,Math.max(6,e-2)),At(t,n));return s.castShadow=!0,s.receiveShadow=!0,s}function Kc(i,t,e){const n=document.createElement("canvas");n.width=i,n.height=t;const s=n.getContext("2d");e(s);const r=new Oc(n);return r.anisotropy=4,r}function Jm(){const i=new Ht,t=new Ht,e=re(.62,.42,.95,O.bentley);e.position.y=.42,t.add(e);const n=re(.56,.34,.3,O.bentley);n.position.set(0,.38,.45),t.add(n);const s=new Ht;s.position.set(0,.72,.55);const r=re(.46,.4,.42,O.bentley);s.add(r);const o=re(.26,.2,.24,O.bentleyEar);o.position.set(0,-.08,.3),s.add(o);const a=re(.1,.08,.06,2234900);a.position.set(0,-.03,.44),s.add(a);for(const g of[-1,1]){const _=Ds(.045,1577484,8);_.position.set(.12*g,.08,.22),s.add(_)}const c=g=>{const _=new Ht;_.position.set(.2*g,.18,-.02);const m=re(.1,.62,.3,O.bentleyEar);return m.position.y=-.28,_.add(m),_.rotation.z=.5*g,s.add(_),_},l=c(1),h=c(-1);t.add(s);const d=[];for(const[g,_]of[[-.22,.32],[.22,.32],[-.22,-.34],[.22,-.34]]){const m=new Ht;m.position.set(g,.24,_);const f=re(.14,.34,.16,O.bentley);f.position.y=-.14,m.add(f),t.add(m),d.push(m)}const u=new Ht;u.position.set(0,.55,-.48);const p=re(.09,.09,.34,O.bentleyEar);return p.position.z=-.15,u.add(p),u.rotation.x=-.7,t.add(u),i.add(t),{group:i,earL:l,earR:h,tail:u,head:s,body:t,legs:d}}function Qm(){const i=new Ht,t={gloss:.85,rim:.35,flatShading:!1,emissive:4851720,emissiveIntensity:1},e=re(1.76,.42,4.1,O.victoryRed,t);e.position.y=.5,i.add(e);const n=new et(new de(.62,.86,1.5,4,1),At(O.victoryRed,t));n.geometry.rotateY(Math.PI/4),n.geometry.scale(1.42,1,.5),n.rotation.x=Math.PI/2,n.position.set(0,.48,2.5),n.castShadow=!0,i.add(n);const s={gloss:.75,rim:.45,flatShading:!1},r=re(1.28,.05,.78,1383728,s);r.rotation.x=-.62,r.position.set(0,.86,.28),i.add(r);const o=re(1.24,.05,.72,1383728,s);o.position.set(0,1.02,-.42),i.add(o);const a=re(1.24,.05,.62,1383728,s);a.rotation.x=.72,a.position.set(0,.88,-1.02),i.add(a);const c=re(1.18,.3,1.36,1383728,s);c.position.set(0,.78,-.42),i.add(c);const l=re(1.7,.16,.7,O.victoryRed,t);l.position.set(0,.66,-1.85),i.add(l);const h=re(1.5,.06,.18,O.victoryRed,t);h.position.set(0,.78,-2.08),i.add(h);const d=re(1.72,.34,.06,1707794,{gloss:.3,flatShading:!1});d.position.set(0,.55,-2.13),i.add(d);const u=[];for(const f of[-.64,-.3,.3,.64]){const E=new et(new de(.115,.115,.03,14),At(853769,{flatShading:!1}));E.rotation.x=Math.PI/2,E.position.set(f,.55,-2.16),i.add(E);const b=new et(new de(.085,.085,.03,14),_e(O.taillight,1.7));b.rotation.x=Math.PI/2,b.position.set(f,.55,-2.17),i.add(b),u.push(b)}for(const f of[-.24,-.1,.1,.24]){const E=qn(.05,.05,.12,13159894,10,{gloss:.5,flatShading:!1});E.rotation.x=Math.PI/2,E.position.set(f,.3,-2.1),i.add(E)}const p=[];for(const f of[-.55,.55]){const E=re(.3,.09,.06,O.star,{emissive:O.star,emissiveIntensity:1.2});E.position.set(f,.56,2.94),i.add(E);const b=new Hc(16773836,0,40,.5,.45,1.2);b.position.set(f,.6,2.9),b.target.position.set(f*1.2,0,14),i.add(b,b.target),p.push(b)}const g=[];for(const[f,E]of[[-.85,1.55],[.85,1.55],[-.85,-1.45],[.85,-1.45]]){const b=new Ht,M=qn(.36,.36,.26,1053471,14,{rim:.1,flatShading:!1});M.rotation.z=Math.PI/2,b.add(M);const C=qn(.18,.18,.28,13159894,8,{gloss:.6,flatShading:!1});C.rotation.z=Math.PI/2,b.add(C),b.position.set(f,.36,E),i.add(b),g.push(b)}const _=Kc(128,64,f=>{f.fillStyle="#e8e4d8",f.fillRect(0,0,128,64),f.fillStyle="#14224A",f.font='bold 34px "Space Grotesk", sans-serif',f.textAlign="center",f.textBaseline="middle",f.fillText("LAINIE",64,36)}),m=new et(new yn(.44,.22),new bi({map:_}));return m.position.set(0,.32,-2.145),m.rotation.y=Math.PI,i.add(m),{group:i,wheels:g,headlights:p,taillights:u}}function Ti(i=O.duck){const t=new Ht,e=Ds(.22,i,10);e.scale.set(1,.85,1.25),e.position.y=.24,t.add(e);const n=new Ht;n.position.set(0,.5,.14);const s=Ds(.13,i,10);n.add(s);const r=re(.12,.05,.14,O.duckBill);r.position.set(0,-.02,.15),n.add(r);for(const a of[-1,1]){const c=Ds(.025,1577484,6);c.position.set(.07*a,.05,.09),n.add(c)}t.add(n);const o=a=>{const c=new Ht;c.position.set(.2*a,.28,0);const l=re(.06,.16,.3,i);return l.position.y=-.06,c.add(l),t.add(c),c};return{group:t,head:n,wingL:o(1),wingR:o(-1)}}function ac(){const i=new Ht,t=qn(.06,.09,5.4,2765650,8);t.position.y=2.7,i.add(t);const e=re(.1,.08,1.6,2765650);e.position.set(0,5.3,.7),i.add(e);const n=re(.24,.1,.5,O.ramenGold,{emissive:O.ramenGold,emissiveIntensity:1.8});return n.position.set(0,5.22,1.35),i.add(n),i}function t0(i){const t=new Ht,e=re(.08,.3,i,5857663,{gloss:.25,flatShading:!1});e.position.y=.62,t.add(e);const n=Math.max(2,Math.round(i/2.4));for(let s=0;s<n;s++){const r=re(.1,.62,.12,3818600);r.position.set(0,.31,-i/2+(s+.5)*(i/n)),t.add(r)}return t}function $c(i=4,t=O.pine){const e=new Ht,n=qn(.1,.16,i*.3,3811870,7);n.position.y=i*.15,e.add(n);let s=i*.28,r=i*.24;for(let o=0;o<3;o++){const a=new et(new Fo(r,i*.32,8),At(t));a.castShadow=!0,a.position.y=s+i*.14,e.add(a),s+=i*.22,r*=.72}return e}function Fs(i,t={}){const e=t.w??3,n=t.h??1.4,s=Kc(512,Math.round(512*n/e),c=>{const l=c.canvas.height;c.fillStyle=t.bg??"#14224A",c.fillRect(0,0,512,l),c.strokeStyle=t.fg??"#FF4D8D",c.lineWidth=8,c.strokeRect(10,10,492,l-20),c.fillStyle=t.fg??"#FF4D8D",c.textAlign="center",c.textBaseline="middle";const h=Math.min(54,(l-40)/i.length-6);c.font=`700 ${h}px "Space Grotesk", sans-serif`,i.forEach((d,u)=>{c.fillText(d,256,l/(i.length+1)*(u+1)+4)})}),r=new Ht,o=new et(new yn(e,n),new vn({map:s}));o.position.y=2.2,r.add(o);const a=new Dn(t.glow??O.heartNeon,6,6);a.position.set(0,2.2,.4),r.add(a);for(const c of[-1,1]){const l=qn(.05,.05,2.2,2765650,6);l.position.set((e/2-.2)*c,1.1,0),r.add(l)}return r}function e0(i,t=1.1){const e=new Ht,n=re(t,t*1.16,.04,16118504,{rim:.1,flatShading:!1});e.add(n);const s=new kh().load(i);s.colorSpace=Fe;const r=new et(new yn(t*.86,t*.86),new vn({map:s}));return r.position.set(0,t*.07,.025),e.add(r),e}function qo(){const i=new Ht,t=re(.5,.02,.6,16118504,{rim:.05});t.rotation.z=.08,i.add(t);const e=qn(.09,.09,.05,O.heartNeon,12,{emissive:O.heartNeon,emissiveIntensity:1.4});return e.position.y=.04,i.add(e),i}function Zc(){const i=Ti(O.ramenGold);return i.group.traverse(t=>{t instanceof et&&t.material instanceof bi&&(t.material=At(O.ramenGold,{emissive:O.ramenGold,emissiveIntensity:.5,gloss:.7,flatShading:!1}))}),i.group}const n0={walkSpeed:5.2,accel:42,friction:26,gravity:24,jumpVel:8.6,jumpCutMultiplier:2.6,coyoteTime:.12,jumpBuffer:.15,pounceSpeed:11.5,pounceTime:.28,pounceCooldown:.9,maxFall:22,speedMultiplier:1};function i0(){return{vx:0,vy:0,vz:0,grounded:!1,coyote:0,buffer:0,pouncing:0,pounceCd:0,jumpHeld:!1,facingX:0,facingZ:1,justJumped:!1,justLanded:!1,justPounced:!1}}function s0(i,t,e,n,s,r){i.justJumped=!1,i.justLanded=!1,i.justPounced=!1;const o=i.grounded,a=s<=r+.02&&i.vy<=.001&&r>-1/0;if(i.grounded=a,a?(i.coyote=e.coyoteTime,o||(i.justLanded=!0)):i.coyote=Math.max(0,i.coyote-n),i.buffer=t.jumpPressed?e.jumpBuffer:Math.max(0,i.buffer-n),i.pounceCd=Math.max(0,i.pounceCd-n),t.pounce&&i.pounceCd<=0&&i.pouncing<=0){const l=Math.hypot(t.x,t.y),h=l>.15?t.x/l:i.facingX,d=l>.15?t.y/l:i.facingZ;i.vx=h*e.pounceSpeed*e.speedMultiplier,i.vz=d*e.pounceSpeed*e.speedMultiplier,a?i.vy=2.2:i.vy=Math.max(i.vy,2.2),i.pouncing=e.pounceTime,i.pounceCd=e.pounceCooldown,i.grounded=!1,i.justPounced=!0}if(i.pouncing>0)i.pouncing-=n,i.vy-=e.gravity*.55*n;else{const l=e.walkSpeed*e.speedMultiplier,h=Math.hypot(t.x,t.y);if(h>.05){const p=t.x/Math.max(h,1),g=t.y/Math.max(h,1);i.vx=Es(i.vx,p*l*Math.min(h,1),e.accel*n),i.vz=Es(i.vz,g*l*Math.min(h,1),e.accel*n),i.facingX=p,i.facingZ=g}else i.vx=Es(i.vx,0,e.friction*n),i.vz=Es(i.vz,0,e.friction*n);i.buffer>0&&(i.grounded||i.coyote>0)&&(i.vy=e.jumpVel,i.buffer=0,i.coyote=0,i.grounded=!1,i.justJumped=!0);const u=i.vy>0&&!t.jumpHeld?e.gravity*e.jumpCutMultiplier:e.gravity;i.grounded?i.vy=Math.max(0,i.vy):i.vy=Math.max(-e.maxFall,i.vy-u*n)}let c=i.vy*n;return i.vy<=0&&r>-1/0&&s+c<=r&&(c=r-s,i.vy=0),{dx:i.vx*n,dy:c,dz:i.vz*n}}function Es(i,t,e){return i<t?Math.min(t,i+e):Math.max(t,i-e)}class Yo{rig;pos=new T;state=i0();cfg={...n0};radius=.34;height=.9;squash=0;t=0;events={jumped:!1,landed:!1,pounced:!1};constructor(){this.rig=Jm()}applyCosmetics(t,e){const n=this.rig.head;if(t.includes("cap")){const s=new et(new de(.26,.28,.14,10),At(O.victoryRed,{flatShading:!1}));s.position.set(0,.26,-.02);const r=new et(new Yt(.3,.04,.24),At(O.victoryRed,{flatShading:!1}));r.position.set(0,.22,-.3),n.add(s,r)}if(t.includes("sunglasses")){const s=new et(new Yt(.4,.09,.05),At(592402,{gloss:.9,flatShading:!1}));s.position.set(0,.08,.24),n.add(s)}if(t.includes("glasses"))for(const s of[-1,1]){const r=new et(new on(.07,.015,6,12),At(13159894,{gloss:.6,flatShading:!1}));r.position.set(.12*s,.08,.25),n.add(r)}if(t.includes("bandana")){const s=new et(new de(.3,.34,.16,8),At(O.taroPurple,{flatShading:!1}));s.position.set(0,-.22,0),n.add(s)}if(t.includes("crown")){const s=new et(new de(.2,.24,.18,8),At(O.ramenGold,{emissive:O.ramenGold,emissiveIntensity:.6,gloss:.9,flatShading:!1}));s.position.set(0,.32,0),n.add(s)}if(e){const s=new et(new on(.24,.03,8,18),At(O.star,{emissive:O.star,emissiveIntensity:1.6}));s.rotation.x=Math.PI/2,s.position.set(0,.48,0),n.add(s)}this.trail=t.includes("trailHearts")?O.heartNeon:t.includes("trailStars")?O.star:null}trail=null;spawnAt(t,e,n,s=0){this.pos.set(t,e,n),this.state.vx=this.state.vy=this.state.vz=0,this.state.facingX=Math.sin(s),this.state.facingZ=Math.cos(s),this.rig.group.position.copy(this.pos)}update(t,e,n,s){const r=Math.cos(s),o=Math.sin(s),a=e.moveX*r-e.moveY*o,c=-e.moveX*o-e.moveY*r,l=n.groundAt(this.pos.x,this.pos.z,this.pos.y+.3),h=s0(this.state,{x:a,y:c,jumpPressed:e.jumpPressed,jumpHeld:e.jump,pounce:e.pounce},this.cfg,t,this.pos.y,l);this.pos.x+=h.dx,this.pos.y+=h.dy,this.pos.z+=h.dz,n.resolveWalls(this.pos,this.radius,this.height),this.events={jumped:this.state.justJumped,landed:this.state.justLanded,pounced:this.state.justPounced},this.t+=t;const d=this.rig.group;d.position.copy(this.pos);const u=Math.hypot(this.state.vx,this.state.vz);if(u>.4){const E=Math.atan2(this.state.facingX,this.state.facingZ);d.rotation.y=r0(d.rotation.y,E,14,t)}this.state.justLanded&&(this.squash=1),(this.state.justJumped||this.state.justPounced)&&(this.squash=-.7),this.squash=cc(this.squash,0,9,t);const p=1-this.squash*.25,g=1+this.squash*.18;this.rig.body.scale.set(g,p,g);const _=Math.min(1,u/this.cfg.walkSpeed),m=this.t*13;this.rig.legs.forEach((E,b)=>{const M=b%2===0?0:Math.PI;E.rotation.x=Math.sin(m+M)*.7*_});const f=-this.state.vy*.05+Math.sin(m)*.12*_;this.rig.earL.rotation.z=.5+f,this.rig.earR.rotation.z=-.5-f,this.rig.earL.rotation.x=this.state.grounded?0:-.6,this.rig.earR.rotation.x=this.state.grounded?0:-.6,this.rig.tail.rotation.x=-.7+Math.sin(this.t*8)*.25*(.4+_),this.rig.body.rotation.x=this.state.pouncing>0?-.35:cc(this.rig.body.rotation.x,0,10,t)}}function cc(i,t,e,n){return me.damp(i,t,e,n)}function r0(i,t,e,n){let s=(t-i)%(Math.PI*2);return s>Math.PI&&(s-=Math.PI*2),s<-Math.PI&&(s+=Math.PI*2),i+s*(1-Math.exp(-14*n))}class Jc{rig;state={z:0,x:0,speed:0,driving:!1};maxSpeed=26;laneHalf=5.4;speedMultiplier=1;constructor(){this.rig=Qm()}place(t,e,n=0){this.state.x=t,this.state.z=e,this.rig.group.position.set(t,0,e),this.rig.group.rotation.y=n}setHeadlights(t){for(const e of this.rig.headlights)e.intensity=t?260:0}update(t,e,n){const s=this.state,r=n*this.maxSpeed*this.speedMultiplier;s.speed=me.damp(s.speed,r,1.6,t),s.z+=s.speed*t,s.x+=e*9*t*Math.min(1,Math.abs(s.speed)/6+.2),s.x=me.clamp(s.x,-this.laneHalf,this.laneHalf);const o=this.rig.group;o.position.set(s.x,0,s.z),o.rotation.y=e*-.18*Math.sign(s.speed||1);const a=s.speed*t*2.6;for(const c of this.rig.wheels)c.rotation.x+=a;o.rotation.z=me.damp(o.rotation.z,e*-.06,6,t)}}const o0=`
  varying vec3 vWorld;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,a0=`
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
`;class Ws{group=new Ht;uniforms;stars;starMat;constructor(){this.uniforms={uTop:{value:new Dt(O.midnight)},uHorizon:{value:new Dt(O.horizonGlow)},uGlow:{value:new Dt(O.heartNeon)},uGlowStrength:{value:.22},uSun:{value:0}};const t=new et(new be(420,24,16),new Ie({vertexShader:o0,fragmentShader:a0,uniforms:this.uniforms,side:Ue,depthWrite:!1,fog:!1}));t.renderOrder=-100,this.group.add(t);const e=700,n=new Float32Array(e*3);for(let r=0;r<e;r++){const o=Math.random()*Math.PI*2,a=Math.acos(Math.random()*.85),c=400;n[r*3]=c*Math.sin(a)*Math.cos(o),n[r*3+1]=c*Math.cos(a)+10,n[r*3+2]=c*Math.sin(a)*Math.sin(o)}const s=new Me;s.setAttribute("position",new ze(n,3)),this.starMat=new No({color:O.star,size:1.6,sizeAttenuation:!0,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),this.stars=new Fc(s,this.starMat),this.stars.renderOrder=-99,this.group.add(this.stars)}set(t){this.uniforms.uTop.value.setHex(t.top),this.uniforms.uHorizon.value.setHex(t.horizon),this.uniforms.uGlow.value.setHex(t.glow),this.uniforms.uGlowStrength.value=t.glowStrength??.22}setSunrise(t){this.uniforms.uSun.value=t;const e=new Dt(O.midnight).lerp(new Dt(3821455),t),n=new Dt(O.horizonGlow).lerp(new Dt(16751186),t);this.uniforms.uTop.value.copy(e),this.uniforms.uHorizon.value.copy(n),this.starMat.opacity=.85*(1-t)}update(t){this.stars.rotation.y+=t*.004}}const Oi=2600;class Xs{points;geo;pos;col;parts=[];cursor=0;constructor(t){this.geo=new Me,this.pos=new Float32Array(Oi*3),this.col=new Float32Array(Oi*3);for(let n=0;n<Oi;n++)this.pos[n*3+1]=-1e3,this.parts.push({life:0,maxLife:1,vel:new T,gravity:0,drag:0});this.geo.setAttribute("position",new ze(this.pos,3)),this.geo.setAttribute("color",new ze(this.col,3));const e=new No({size:.16,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Is});this.points=new Fc(this.geo,e),this.points.frustumCulled=!1,t.add(this.points)}burst(t,e,n={}){const s=(n.colors??[O.heartNeon,O.ramenGold,O.star]).map(r=>new Dt(r));for(let r=0;r<e;r++){const o=this.cursor;this.cursor=(this.cursor+1)%Oi;const a=this.parts[o];a.maxLife=a.life=(n.life??1.2)*(.6+Math.random()*.8),a.gravity=n.gravity??6,a.drag=n.drag??1.2;const c=(n.speed??4)*(.4+Math.random()),l=Math.random()*Math.PI*2,h=(Math.random()-.3)*(n.spread??1.2);a.vel.set(Math.cos(l)*c*Math.cos(h),Math.sin(h)*c+(n.up??2.5),Math.sin(l)*c*Math.cos(h)),this.pos[o*3]=t.x+(Math.random()-.5)*.3,this.pos[o*3+1]=t.y+(Math.random()-.5)*.3,this.pos[o*3+2]=t.z+(Math.random()-.5)*.3;const d=s[Math.random()*s.length|0];this.col[o*3]=d.r,this.col[o*3+1]=d.g,this.col[o*3+2]=d.b}}update(t){for(let e=0;e<Oi;e++){const n=this.parts[e];if(!(n.life<=0)){if(n.life-=t,n.life<=0){this.pos[e*3+1]=-1e3;continue}n.vel.y-=n.gravity*t,n.vel.multiplyScalar(Math.max(0,1-n.drag*t)),this.pos[e*3]+=n.vel.x*t,this.pos[e*3+1]+=n.vel.y*t,this.pos[e*3+2]+=n.vel.z*t,Math.min(1,n.life/(n.maxLife*.4)),this.col[e*3]*=.999}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}class Kn{constructor(t,e,n,s,r){this.steps=t,this.duration=e,this.camera=n,this.cinema=s,this.onDone=r,s.setCinematic(!0),n.cinematicControl=!0;const o=a=>{a instanceof KeyboardEvent&&a.code!=="Escape"||(a.stopPropagation(),this.finish())};this.skipHandler=o,setTimeout(()=>{addEventListener("pointerdown",o),addEventListener("keydown",o)},350)}time=0;fired=new Set;curKey=null;prevKey=null;keyStart=0;glide=0;done=!1;skipHandler;update(t){if(!this.done){if(this.time+=t,this.steps.forEach((e,n)=>{this.time>=e.t&&!this.fired.has(n)&&(this.fired.add(n),e.cam&&(this.prevKey=this.curKey??e.cam,this.curKey=e.cam,this.keyStart=this.time,this.glide=e.glide??0),e.slowmo!==void 0&&(this.cinema.timeScale=e.slowmo),e.flash&&this.cinema.flashWhite(e.flash),e.do?.())}),this.curKey){const e=this.camera.cam;if(this.glide>0&&this.prevKey){const n=Math.min(1,(this.time-this.keyStart)/this.glide),s=n*n*(3-2*n);e.position.lerpVectors(this.prevKey.pos,this.curKey.pos,s);const r=this.prevKey.look.clone().lerp(this.curKey.look,s);e.lookAt(r);const o=this.prevKey.fov??55,a=this.curKey.fov??55;Math.abs(e.fov-(o+(a-o)*s))>.01&&(e.fov=o+(a-o)*s,e.updateProjectionMatrix())}else e.position.copy(this.curKey.pos),e.lookAt(this.curKey.look),this.curKey.fov&&Math.abs(e.fov-this.curKey.fov)>.01&&(e.fov=this.curKey.fov,e.updateProjectionMatrix())}this.time>=this.duration&&this.finish()}}finish(){this.done||(this.done=!0,removeEventListener("pointerdown",this.skipHandler),removeEventListener("keydown",this.skipHandler),this.cinema.setCinematic(!1),this.cinema.timeScale=1,this.camera.cinematicControl=!1,this.onDone())}}function c0(i,t,e){const n=Math.round(500*Math.min(1,i.parSeconds/Math.max(i.timeSeconds,1))),s=i.ducksThisRun*50,r=i.secretFound?100:0,o=-Math.min(300,i.deaths*80),a=400,c=Math.max(0,n+s+r+o+a);let l="C";c>=850&&i.deaths===0?l="S":c>=700?l="GOLD":c>=500&&(l="B");let d={C:20,B:35,GOLD:50,S:75}[l];return t&&(d+=100),d+=i.ducksThisRun*15,i.secretFound&&(d+=25),i.bounty&&(d+=40+i.modifierCount*20),e&&(d=Math.round(d*1.25)),{score:c,medal:l,payout:d,breakdown:[{label:"CLEAR",value:a},{label:"TIME",value:n},{label:"GOLDEN DUCKS",value:s},{label:"SECRET",value:r},{label:"DAMAGE",value:o}]}}const lc=["C","B","GOLD","S"];function l0(i,t){return t?lc.indexOf(i)>lc.indexOf(t):!0}const Rr=[{id:"ramen",name:"RAMEN CUP",desc:"auto full-heal once at 1 heart",category:"snack",price:15,emoji:"🍜"},{id:"bobaShield",name:"BOBA SHIELD",desc:"absorbs the first 2 hits each run",category:"snack",price:20,emoji:"🧋"},{id:"cookie",name:"GRANDMA'S COOKIE",desc:"one puzzle hint per run [H]",category:"snack",price:25,emoji:"🍪"},{id:"foam",name:"FOAM COLLAR",desc:"+1 max heart",category:"collar",price:250,emoji:"🦴"},{id:"puffer",name:"PUFFER VEST",desc:"falls & water cost no heart",category:"collar",price:300,emoji:"🦺"},{id:"duckdown",name:"DUCKDOWN COLLAR",desc:"+2 max hearts, -10% speed",category:"collar",price:450,emoji:"🪶"},{id:"racing",name:"RACING COLLAR",desc:"+15% speed, -1 max heart",category:"collar",price:400,emoji:"🏁"},{id:"magnet",name:"MAGNET",desc:"pickups fly to you",category:"charm",price:150,emoji:"🧲"},{id:"scout",name:"SCOUT",desc:"pings when a secret is near",category:"charm",price:200,emoji:"📡"},{id:"barkAmp",name:"BARK AMP",desc:"pounce bonks a wider radius",category:"charm",price:250,emoji:"📢"},{id:"coupon",name:"HAYDEN'S COUPON",desc:"shop prices -20% (he is furious)",category:"charm",price:220,emoji:"🧾"},{id:"pearlcut",name:"PEARL CUT",desc:"+25% pearl payouts",category:"charm",price:300,emoji:"💰"},{id:"slowpaw",name:"SLOW PAW",desc:"pounce cooldown -40%",category:"charm",price:260,emoji:"🐾"},{id:"secondwind",name:"SECOND WIND",desc:"survive one lethal hit per run",category:"charm",price:350,emoji:"💫"},{id:"ballII",name:"BALL LAUNCHER II",desc:"triple ricochet",category:"weaponTier",price:400,emoji:"🎾"},{id:"whistleII",name:"DUCK WHISTLE II",desc:"half cooldown",category:"weaponTier",price:400,emoji:"📯"},{id:"ankhII",name:"ANKH II",desc:"bigger reveal + stun radius",category:"weaponTier",price:600,emoji:"☥"},{id:"cap",name:"BACKWARDS CAP",desc:"corbin's. obviously.",category:"cosmetic",price:120,emoji:"🧢"},{id:"sunglasses",name:"SUNGLASSES",desc:"at night. iconic.",category:"cosmetic",price:100,emoji:"🕶"},{id:"bandana",name:"BANDANA",desc:"roguish.",category:"cosmetic",price:80,emoji:"🧣"},{id:"glasses",name:"TINY ROUND GLASSES",desc:"lainie's look.",category:"cosmetic",price:150,emoji:"👓"},{id:"trailHearts",name:"HEART TRAIL",desc:"you leave love behind",category:"cosmetic",price:90,emoji:"💗"},{id:"trailStars",name:"STAR TRAIL",desc:"you leave night behind",category:"cosmetic",price:90,emoji:"✨"},{id:"underglowPink",name:"UNDERGLOW: NEON PINK",desc:"the C6 approves",category:"cosmetic",price:110,emoji:"🌸"},{id:"underglowGold",name:"UNDERGLOW: RAMEN GOLD",desc:"tasteful. warm.",category:"cosmetic",price:110,emoji:"🍯"},{id:"hornQuack",name:"HORN: QUACK",desc:"the ducks respect it",category:"cosmetic",price:60,emoji:"🦆"},{id:"hornBark",name:"HORN: BARK",desc:"boof at speed",category:"cosmetic",price:60,emoji:"🐕"},{id:"chromeDuck",name:"CHROME DUCK ORNAMENT",desc:"hood royalty. prestige.",category:"cosmetic",price:800,emoji:"🏆"}];function bo(i,t){return t?Math.round(i.price*.8):i.price}function h0(i,t,e,n){return i.category!=="snack"&&e.includes(i.id)?!1:t>=bo(i,n)}const u0=[{id:"noWeapons",name:"UNARMED",desc:"weapons confiscated"},{id:"doubleDucks",name:"DOUBLE DUCKS",desc:"twice the waterfowl"},{id:"oneHeart",name:"ONE HEART",desc:"no mistakes"},{id:"rushHour",name:"RUSH HOUR",desc:"par time -30%"},{id:"fogRolls",name:"FOG ROLLS IN",desc:"visibility: emotional"},{id:"greed",name:"GREED",desc:"pearls ×2 · hits cost 5 pearls"}];function d0(i){const t=[...u0],e=s=>t[s%t.length],n=[];for(let s=0;s<3;s++){const r=e(i*7+s*3+1);let o=e(i*11+s*5+4);o.id===r.id&&(o=e(i*11+s*5+5)),n.push([r,o])}return n}const f0={snack:"SNACKS (one run each)",collar:"COLLARS (wear one)",charm:"CHARMS (equip two)",weaponTier:"WEAPON UPGRADES",cosmetic:"DRIP"};function p0(i,t){const e=i.hud.overlay();e.style.justifyContent="flex-start",e.style.overflowY="auto",e.style.padding="30px 16px";const n=()=>{const s=i.save.data,r=s.gear.charms.includes("coupon"),o=["snack","collar","charm","weaponTier","cosmetic"].map(a=>{const c=Rr.filter(l=>l.category===a).map(l=>{const h=l.category==="snack"?s.gear.snacks.filter(_=>_===l.id).length:s.gear.owned.includes(l.id),d=bo(l,r),u=h0(l,s.pearls,s.gear.owned,r),p=l.category==="collar"&&s.gear.collar===l.id||l.category==="charm"&&s.gear.charms.includes(l.id);let g="";return l.category==="snack"?g=`<button class="dj-btn" data-buy="${l.id}" ${s.pearls<d?"disabled":""}>BUY ${d}⬤${h?` (×${h})`:""}</button>`:typeof h=="boolean"&&h?l.category==="collar"||l.category==="charm"?g=`<button class="dj-btn" data-equip="${l.id}" style="${p?"background:#33FF8833":""}">${p?"EQUIPPED":"EQUIP"}</button>`:g='<span style="color:#33FF88;font-weight:800">OWNED</span>':g=`<button class="dj-btn" data-buy="${l.id}" ${u?"":"disabled"}>BUY ${d}⬤</button>`,`<div style="display:flex;align-items:center;gap:12px;justify-content:space-between;padding:6px 0">
              <div style="min-width:0"><b>${l.emoji} ${l.name}</b><div style="font-size:12px;opacity:0.75">${l.desc}</div></div>
              <div style="flex-shrink:0">${g}</div></div>`}).join("");return`<div class="dj-card" style="width:min(520px,92vw);margin-bottom:12px;padding:14px 18px">
          <div style="font-family:'Space Grotesk';letter-spacing:2px;color:#CBB7E8;margin-bottom:6px">${f0[a]}</div>${c}</div>`}).join("");e.innerHTML=`
      <h1 style="letter-spacing:4px">GRANDMA'S DINER</h1>
      <div style="opacity:0.8;font-style:italic">"SPEAK UP. ALSO, BUY SOMETHING." — ${"⬤".repeat(0)} <b style="color:#B388EB">${s.pearls} ⬤</b></div>
      ${o}
      <button class="dj-btn" data-a="close" style="margin-bottom:30px">LEAVE (SHE WAVES)</button>
    `,e.querySelectorAll("[data-buy]").forEach(a=>{a.addEventListener("click",()=>{const c=Rr.find(h=>h.id===a.dataset.buy),l=bo(c,i.save.data.gear.charms.includes("coupon"));i.save.data.pearls<l||(i.save.patch(h=>{if(h.pearls-=l,c.category==="snack"?h.gear.snacks.push(c.id):h.gear.owned.push(c.id),c.category==="collar"&&!h.gear.collar&&(h.gear.collar=c.id),c.category==="charm"&&h.gear.charms.length<2&&h.gear.charms.push(c.id),c.category==="weaponTier"){const d=c.id.replace("II","");h.weaponTiers[d]=2}}),i.hud.setPearls(i.save.data.pearls),i.audio.play("register",.7),i.audio.play("fanfare",.35,1.2),i.hud.toast(`CAPSULE POP — ${c.emoji} ${c.name}`,2.4),n())})}),e.querySelectorAll("[data-equip]").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.equip,l=Rr.find(h=>h.id===c);i.save.patch(h=>{l.category==="collar"?h.gear.collar=h.gear.collar===c?null:c:l.category==="charm"&&(h.gear.charms.includes(c)?h.gear.charms=h.gear.charms.filter(d=>d!==c):(h.gear.charms.length>=2&&h.gear.charms.shift(),h.gear.charms.push(c)))}),i.audio.play("click",.5),n()})}),e.querySelector('[data-a="close"]').addEventListener("click",()=>{e.remove(),t()})};n()}const m0=new T(0,.6,-.2);class g0{constructor(t){this.ctx=t;const e=Ym();this.world=new jo(e),this.scene.add(this.world.group),this.scene.fog=new Pi(O.midnight,e.fogDensity??.011),this.sky=new Ws,this.sky.set({top:O.midnight,horizon:O.horizonGlow,glow:e.skyGlow}),this.scene.add(this.sky.group);const n=new Gs(8228816,1317432,1.15);this.scene.add(n),this.sun=new Wo(11057407,1.5),this.sun.position.set(20,40,-20),t.tier==="ultra"&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-50,this.sun.shadow.camera.right=50,this.sun.shadow.camera.top=60,this.sun.shadow.camera.bottom=-60,this.sun.shadow.camera.far=140,this.sun.shadow.bias=-8e-4),this.scene.add(this.sun);for(let c=-70;c<245;c+=22){const l=ac();l.position.set(-8.4,0,c),l.rotation.y=Math.PI/2,this.scene.add(l);const h=ac();if(h.position.set(pn+2.4,0,c+11),h.rotation.y=-Math.PI/2,this.scene.add(h),this.ctx.tier==="ultra"&&c%44===0){const d=new Dn(O.ramenGold,30,16,1.8);d.position.set(-7.4,5,c+1.3),this.scene.add(d)}}for(const c of[-1,1])for(let l=-60;l<240;l+=24){if(c===1&&Ps.some(d=>Math.abs(d.z-l)<12))continue;const h=t0(22);h.position.set((pn+3)*c,0,l+11),this.scene.add(h)}const s=x0(7);for(let c=0;c<60;c++){const l=s()>.5?1:-1,h=$c(3+s()*4);h.position.set(l*(pn+10+s()*22),0,-80+s()*330),this.scene.add(h)}for(const c of Ps){const l=this.isUnlocked(c.id),h=Fs([`EXIT ${c.id.slice(2)}`,c.name],l?{}:{fg:"#5b6070"});h.position.set(pn+8.4,0,c.z),h.rotation.y=-Math.PI/2,this.scene.add(h)}const r=Fs(["GRANDMA'S","DINER"],{fg:"#CBB7E8",glow:O.grandmaLilac});r.position.set(-14,0,Wn+9),r.rotation.y=Math.PI/2,this.scene.add(r),this.car=new Jc,this.car.place(2.4,6,0),this.car.setHeadlights(!1),this.scene.add(this.car.rig.group),this.player=new Yo,this.player.applyCosmetics(t.save.data.gear.owned,!!t.save.data.secrets.halo),this.player.spawnAt(-2,0,2,Math.PI/2),this.scene.add(this.player.rig.group);const o=t.save.data.gear.owned;if(o.includes("underglowPink")||o.includes("underglowGold")){const c=new Dn(o.includes("underglowPink")?O.heartNeon:O.ramenGold,24,6,1.4);c.position.set(0,.12,0),this.car.rig.group.add(c)}if(o.includes("chromeDuck")){const c=new et(new be(.09,10,8),new bi({color:15922424,emissive:5594214}));c.position.set(0,.72,2.3);const l=new et(new be(.05,8,6),new bi({color:15922424,emissive:5594214}));l.position.set(0,.82,2.34),this.car.rig.group.add(c,l)}o.includes("racing")&&(this.car.speedMultiplier=1.15),t.camera.configure([],{x:0,y:5.2,z:-7.5}),t.camera.snapTo(this.player.pos),this.fx=new Xs(this.scene);const a=[[19,-16,3.8,Wn],[20,0,.5,238],[21,pn+5,.5,215]];for(const[c,l,h,d]of a){if(t.save.data.ducks.includes(c))continue;const u=Zc();u.position.set(l,h,d),this.scene.add(u),this.hubDucks.push({id:c,obj:u,taken:!1})}if(!t.save.data.secrets.introSeen)this.playHeist();else{const c=new Date,l=c.getMonth()===1&&c.getDate()===14,h=c.getMonth()===7;t.hud.chapterCard("THE HIGHWAY",l?"happy valentine’s day, lainie.":h?"est. august 2023 🎂":"the ducks stole the letter. drive.")}addEventListener("pointerdown",this.cornerTap),addEventListener("pointerdown",this.dogTap)}scene=new $i;world;player;car;sky;mode="walk";exitCooldown=0;reverseTime=0;dinerFound=!1;sun;fx;cutscene=null;heroDone=!1;shopOpen=!1;hornTaps=0;hornTimer=0;duckCode=[];bentleyTaps=0;idleTime=0;grandmaToldYou=!1;hubDucks=[];cornerTap=t=>{const e=t.clientX/innerWidth,n=t.clientY/innerHeight,s=e<.18&&n<.18?0:e>.82&&n<.18?1:e<.18&&n>.82?2:e>.82&&n>.82?3:e>.4&&e<.6&&n>.4&&n<.6?4:-1;if(s===-1)return;const r=[0,1,2,3,4];this.duckCode.push(s),this.duckCode.length>5&&this.duckCode.shift(),r.every((o,a)=>this.duckCode[a]===o)&&(this.duckCode=[],this.duckMode())};dogTap=t=>{if(this.mode!=="walk")return;const e=this.player.pos.clone().setY(this.player.pos.y+.5).project(this.ctx.camera.cam),n=(e.x*.5+.5)*innerWidth,s=(-e.y*.5+.5)*innerHeight;Math.hypot(t.clientX-n,t.clientY-s)<70&&(this.bentleyTaps++,this.ctx.audio.play("bark",.4+this.bentleyTaps*.07,1+this.bentleyTaps*.06),this.bentleyTaps>=7&&(this.bentleyTaps=0,this.ctx.hud.toast("BOOF. TAIL: WAGGING. (certified dog botherer)",2.6),this.fx.burst(this.player.pos.clone().setY(1.2),40,{colors:[O.heartNeon],speed:3,up:3,life:1}),this.ctx.save.patch(r=>{r.secrets.botherer=!0})))};duckMode(){this.ctx.audio.play("quack",.8),this.ctx.audio.play("quack",.8,.8),this.ctx.audio.play("quack",.8,1.2),this.ctx.hud.toast("DUCK MODE. POND ZERO REVEALED. (it was always the ducks)",3.4),this.ctx.save.patch(e=>{e.secrets.pondzero=!0});const t=this.mode==="walk"?this.player.pos.clone():this.car.rig.group.position.clone();for(let e=0;e<30;e++){const n=Ti(),s=Math.floor(e/2),r=e%2===0?1:-1;n.group.position.set(t.x+r*s*1.3,9+s*.3,t.z-50),this.scene.add(n.group);const o=performance.now(),a=()=>{const c=(performance.now()-o)/1e3;if(c>8){n.group.removeFromParent();return}n.group.position.z+=.4,n.wingL.rotation.z=.6+Math.sin(c*14+e)*.5,n.wingR.rotation.z=-.6-Math.sin(c*14+e)*.5,requestAnimationFrame(a)};a()}}playHeist(){const t=this.car.rig.group.position.clone(),e=[],n=qo();n.position.set(t.x,4.2,t.z),n.visible=!1,this.scene.add(n);const s=(r,o,a)=>new T(r,o,a);this.cutscene=new Kn([{t:0,cam:{pos:s(t.x,14,t.z-1),look:t,fov:40}},{t:.2,cam:{pos:s(t.x-3,1.2,t.z-6),look:s(t.x,.8,t.z),fov:44},glide:2.6},{t:2.2,do:()=>{n.visible=!0;for(let r=0;r<4;r++){const o=Ti();o.group.position.set(t.x+Math.cos(r*1.6)*2.4,7+r,t.z+Math.sin(r*1.6)*2.4),this.scene.add(o.group),e.push(o.group)}this.ctx.audio.play("quack",.7)}},{t:2.4,cam:{pos:s(t.x+4,3.4,t.z-4),look:s(t.x,4,t.z),fov:50},glide:1.4,slowmo:.35,do:()=>{for(const r of e)r.position.y=5.2}},{t:3.9,flash:.5,slowmo:1,do:()=>{n.visible=!1,this.fx.burst(n.position,260,{colors:[16118504,O.heartNeon,O.duck],speed:6,up:4,gravity:3,life:2}),this.ctx.audio.play("impact",.6),this.ctx.audio.play("quack",.8,.8)}},{t:4.5,cam:{pos:s(t.x,2.2,t.z-9),look:s(t.x,8,t.z+30),fov:62},glide:1.8,do:()=>{for(const[r,o]of e.entries()){const a=s((r-1.5)*3,4+r,24),c=o.position.clone(),l=performance.now(),h=()=>{const d=(performance.now()-l)/1600;if(d>1||!o.parent){o.removeFromParent();return}o.position.lerpVectors(c,c.clone().add(a),d*d),requestAnimationFrame(h)};h()}this.ctx.audio.play("whoosh",.5)}},{t:6.4,do:()=>{this.ctx.hud.chapterCard("THE DUCK JOB","the ducks stole the letter. send the dog."),this.ctx.audio.play("howl",.4,1.3)}}],8.2,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.save.patch(r=>{r.secrets.introSeen=!0}),this.ctx.camera.snapTo(this.player.pos),this.ctx.hud.chapterCard("THE HIGHWAY","the ducks stole the letter. drive.")})}playHeroReveal(){const t=this.car.rig.group.position.clone(),e=(n,s,r)=>new T(t.x+Math.sin(n)*s,r,t.z+Math.cos(n)*s);this.cutscene=new Kn([{t:0,cam:{pos:e(Math.PI,5,.7),look:new T(t.x,.7,t.z),fov:38}},{t:.1,cam:{pos:e(Math.PI*.5,5.4,.9),look:new T(t.x,.6,t.z),fov:38},glide:1.9},{t:2,cam:{pos:e(Math.PI*.08,6,1.4),look:new T(t.x,.7,t.z),fov:42},glide:1.8},{t:3.8,flash:.35,do:()=>{this.car.setHeadlights(!0),this.ctx.audio.play("boing",.3,.5)},cam:{pos:e(0,7.5,.8),look:new T(t.x,.8,t.z),fov:48},glide:1.2},{t:5,do:()=>this.ctx.hud.toast("BENTLEY CAN DRIVE. DO NOT ASK.",2.5)}],5.8,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.camera.snapTo(this.car.rig.group.position)})}isUnlocked(t){if(t==="ch1")return!0;const e=Number(t.slice(2));return this.ctx.save.data.chaptersDone.includes(`ch${e-1}`)}update(t){if(this.fx.update(t),this.shopOpen)return;if(this.cutscene&&!this.cutscene.done){this.cutscene.update(t),this.sky.update(t);return}const e=this.ctx.input.poll();if(this.sky.update(t),this.exitCooldown=Math.max(0,this.exitCooldown-t),this.mode==="walk"){this.player.update(t,e,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.35),this.player.events.landed&&this.ctx.audio.play("land",.25),this.player.events.pounced&&(this.ctx.audio.play("whoosh",.4),this.ctx.camera.kick(.18),this.fx.burst(this.player.pos,14,{colors:[9081784],speed:2,up:1,life:.5})),this.player.events.landed&&this.fx.burst(this.player.pos,10,{colors:[9081784],speed:1.6,up:.8,life:.4});const s=Math.hypot(this.player.state.vx,this.player.state.vz)>.3;this.idleTime=s||e.any?0:this.idleTime+t,this.idleTime>30&&!this.grandmaToldYou&&(this.grandmaToldYou=!0,this.ctx.hud.toast("GRANDMA SAYS: SPEAK UP. ALSO, GO FIND THE DUCKS.",3),this.ctx.audio.play("chatter",.4,.8));const r=this.ctx.save.data.secrets.pondzero||this.ctx.save.data.ducks.length>=21,o=new T(-14,0,Wn-10);if(r&&this.player.pos.distanceTo(o)<5&&(this.ctx.hud.prompt("[E] POND ZERO (?)"),e.interact)){this.ctx.go("play",{id:"pondzero"});return}const a=this.player.pos.distanceTo(this.car.rig.group.position),c=new T(-14,0,Wn),l=this.player.pos.distanceTo(c)<6;if(l?this.ctx.hud.prompt("[E] GRANDMA'S DINER (SHOP)"):this.ctx.hud.prompt(a<3.2?"[E] TAKE THE CORVETTE":null),l&&e.interact){this.shopOpen=!0,this.ctx.audio.play("insertcoin",.5),p0(this.ctx,()=>{this.shopOpen=!1});return}a<3.2&&e.interact&&(this.mode="drive",this.player.rig.group.visible=!1,this.car.setHeadlights(!0),this.ctx.audio.engine(!0,0),this.ctx.audio.play("click",.5),this.ctx.camera.configure([],{x:0,y:4.6,z:-9.5}),this.heroDone||(this.heroDone=!0,this.playHeroReveal())),this.ctx.camera.update(t,this.player.pos,new T(this.player.state.vx,0,this.player.state.vz),e.camNudge)}else{const s=e.moveX,r=e.moveY;if(this.car.update(t,s,r),this.ctx.audio.engine(!0,Math.abs(this.car.state.speed)/this.car.maxSpeed),this.player.pos.copy(this.car.rig.group.position).add(m0),this.car.state.speed<-3?this.reverseTime+=t:this.reverseTime=0,!this.dinerFound&&(this.reverseTime>4||this.car.state.z<Wn+20)&&(this.dinerFound=!0,this.ctx.save.patch(o=>{o.secrets.diner=!0}),this.ctx.hud.toast("GRANDMA'S DINER FOUND. SHE SAYS SPEAK UP.",3.5),this.ctx.audio.play("ding",.6)),e.fire){const o=this.ctx.save.data.gear.owned;this.ctx.audio.play(o.includes("hornQuack")?"quack":o.includes("hornBark")?"bark":"boing",.7,o.includes("hornQuack")||o.includes("hornBark")?1:.6),this.hornTaps++,clearTimeout(this.hornTimer),this.hornTimer=window.setTimeout(()=>{this.hornTaps=0},1200),this.hornTaps>=3&&(this.hornTaps=0,this.ctx.hud.toast("♥ ♥ ♥ (the horn knows the rhythm)",2),this.fx.burst(this.car.rig.group.position.clone().setY(1.4),30,{colors:[O.heartNeon],speed:3,up:3,life:1}))}if(this.ctx.hud.prompt(Math.abs(this.car.state.speed)<1.5?"[E] HOP OUT":null),e.interact&&Math.abs(this.car.state.speed)<1.5&&(this.mode="walk",this.player.rig.group.visible=!0,this.player.spawnAt(this.car.state.x-2.2,0,this.car.state.z,0),this.car.setHeadlights(!1),this.ctx.audio.engine(!1),this.ctx.camera.configure([],{x:0,y:5.2,z:-7.5})),this.exitCooldown<=0){for(const o of Ps)if(Math.abs(this.car.state.z-o.z)<4&&this.car.state.x>pn-2.2){if(this.isUnlocked(o.id)){this.exitCooldown=99,this.ctx.audio.engine(!1),this.ctx.audio.play("insertcoin",.6),this.ctx.save.data.chaptersDone.includes(o.id)?this.offerRun(o.id,o.name):this.ctx.go("play",{id:o.id});return}else this.ctx.hud.toast("EXIT LOCKED. FINISH THE PREVIOUS CHAPTER.",2.2),this.ctx.audio.play("wrong",.4);this.exitCooldown=3}}this.car.state.z=me.clamp(this.car.state.z,-85,245),this.ctx.camera.update(t,this.car.rig.group.position,new T(0,0,this.car.state.speed*.4),e.camNudge)}const n=this.mode==="walk"?this.player.pos:this.car.rig.group.position;for(const s of this.hubDucks)s.taken||(s.obj.rotation.y+=t*2,s.obj.position.distanceTo(n)<1.8&&(s.taken=!0,s.obj.visible=!1,this.ctx.save.patch(r=>{r.ducks.includes(s.id)||r.ducks.push(s.id)}),this.ctx.hud.toast(`GOLDEN DUCK ${this.ctx.save.data.ducks.length}/21`,2.2),this.ctx.audio.play("quack",.7,.8)));e.pause&&this.ctx.togglePause()}offerRun(t,e){const n=Number(t.slice(2))*13+this.ctx.save.data.bountiesCleared,s=d0(n),r=this.ctx.hud.overlay(),o=s.map((a,c)=>`<button class="dj-btn" data-b="${c}" style="min-width:280px">
        🦆 ${a[0].name} + ${a[1].name}<br/>
        <span style="font-size:11px;opacity:0.7">${a[0].desc} · ${a[1].desc}</span><br/>
        <span style="color:#B388EB;font-size:12px">bonus pearls +80</span></button>`).join("");r.innerHTML=`
      <h1 style="letter-spacing:4px">${e}</h1>
      <button class="dj-btn" data-a="story" style="min-width:280px">STORY RERUN<br/><span style="font-size:11px;opacity:0.7">no modifiers, chase the S rank</span></button>
      <div style="font-family:'Space Grotesk';letter-spacing:3px;color:#FFD23F;margin-top:8px">DUCK BOUNTIES</div>
      ${o}
      <button class="dj-btn" data-a="never">NEVER MIND</button>
    `,r.querySelector('[data-a="story"]').addEventListener("click",()=>{r.remove(),this.ctx.go("play",{id:t})}),r.querySelector('[data-a="never"]').addEventListener("click",()=>{r.remove(),this.exitCooldown=3}),r.querySelectorAll("[data-b]").forEach(a=>{a.addEventListener("click",()=>{const c=s[Number(a.dataset.b)];r.remove(),this.ctx.go("play",{id:t,mods:[c[0].id,c[1].id]})})})}dispose(){removeEventListener("pointerdown",this.cornerTap),removeEventListener("pointerdown",this.dogTap),this.ctx.audio.engine(!1)}}function x0(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function _0(i,t){const e=new Set;for(const n of i)if("plates"in n.when)n.when.plates.every(s=>t.plates[s])&&e.add(n.open);else if("switches"in n.when)n.when.switches.every(s=>t.switches[s])&&e.add(n.open);else if("rotors"in n.when){const s=n.when.rotors;Object.keys(s).every(r=>(t.rotors?.[r]??-1)===s[r])&&e.add(n.open)}else"paidExact"in n.when?(t.paid?.[n.when.paidExact.slot]??0)===n.when.paidExact.amount&&e.add(n.open):t.keyNear[n.open]&&e.add(n.open);return e}function v0(i,t,e){return e?i===t:i>=t}class y0{constructor(t,e,n,s,r){this.id=t,this.kind=e,this.weight=n,this.value=s,this.obj=M0(e,n),this.obj.position.copy(r),this.home=r.clone()}obj;carried=!1;home;get pos(){return this.obj.position}}function M0(i,t){const e=new Ht;if(i==="dumbbell"){const n=.16+t*.08,s=new et(new de(.05,.05,.7,8),At(13159894,{gloss:.4,flatShading:!1}));s.rotation.z=Math.PI/2,s.position.y=n,e.add(s);for(const o of[-.3,.3]){const a=new et(new de(n,n,.12,12),At(3094614,{gloss:.3,flatShading:!1}));a.rotation.z=Math.PI/2,a.position.set(o,n,0),e.add(a)}const r=new et(new Yt(.16,.16,.02),_e(O.ramenGold,.8));r.position.set(0,n+.16,0),e.add(r),e.weightScale=n}else if(i==="block"){const n=new et(new Yt(.8,.8,.8),At(9072461));n.position.y=.4,n.castShadow=!0,e.add(n)}else if(i==="coin"){const n=new et(new de(.22,.22,.06,14),_e(O.ramenGold,1.2));n.position.y=.35,e.add(n)}else if(i==="key"){const n=new et(new de(.05,.05,.5,8),_e(O.crtGreen,1.1));n.rotation.x=Math.PI/2,n.position.y=.4,e.add(n);const s=new et(new on(.14,.05,8,12),_e(O.crtGreen,1.1));s.position.set(0,.4,-.3),e.add(s)}else{const n=new et(new Yt(.9,1.2,.08),At(14542832,{gloss:.9,rim:.5,flatShading:!1}));n.position.y=.6,e.add(n)}return e.traverse(n=>{n.castShadow=!0}),e}class S0{constructor(t,e,n,s){this.id=t,this.pos=e,this.needWeight=n,this.exact=s,this.obj=new et(new de(.9,1,.12,16),At(2305102,{emissive:O.heartNeon,emissiveIntensity:.12})),this.obj.position.copy(e),this.obj.position.y+=.06,this.obj.receiveShadow=!0}obj;satisfied=!1;restingWeight=0;setSatisfied(t){if(t===this.satisfied)return;this.satisfied=t;const e=this.obj.material;e.emissive.setHex(t?O.crtGreen:O.heartNeon),e.emissiveIntensity=t?.9:.12}}class E0{constructor(t,e,n,s,r,o,a=!1,c){this.id=t,this.needsKey=r,this.isLift=a,this.obj=new et(new Yt(n.x,n.y,n.z),At(s,{emissive:s,emissiveIntensity:.14})),this.obj.position.copy(e),this.obj.castShadow=!0,this.closedY=e.y,this.openY=a&&c?c.y:e.y-n.y-.2,this.collider=o.addCollider({kind:"box",center:this.obj.position,half:new T(n.x/2,n.y/2,n.z/2),yaw:0,enabled:!0})}obj;collider;open=!1;closedY;openY;update(t){const e=this.open?this.openY:this.closedY;this.obj.position.y=me.damp(this.obj.position.y,e,3,t)}}class b0{carriables=[];plates=[];gates=[];carrying=null;add(t,e,n){if(t.type==="carry"){const s=new y0(t.id,t.kind,t.weight??1,t.value??0,new T(t.pos.x,t.pos.y,t.pos.z));this.carriables.push(s),n.add(s.obj)}else if(t.type==="plate"){const s=new S0(t.id,new T(t.pos.x,t.pos.y,t.pos.z),t.needWeight??1,t.exactWeight??!1);this.plates.push(s),n.add(s.obj)}else if(t.type==="door"||t.type==="lift"){const s=new E0(t.id,new T(t.pos.x,t.pos.y,t.pos.z),new T(t.size.x,t.size.y,t.size.z),t.color??O.dockWater,t.type==="door"?t.needsKey??!1:!1,e,t.type==="lift",t.type==="lift"?new T(t.to.x,t.to.y,t.to.z):void 0);this.gates.push(s),n.add(s.obj)}}nearest(t){let e=null,n=2.1;for(const s of this.carriables){if(s.carried)continue;const r=s.pos.distanceTo(t.pos);r<n&&(n=r,e=s)}return e}interact(t){if(this.carrying){const n=this.carrying;return n.carried=!1,n.pos.set(t.pos.x+t.state.facingX*.9,t.pos.y,t.pos.z+t.state.facingZ*.9),this.carrying=null,"dropped"}const e=this.nearest(t);return e?(e.carried=!0,this.carrying=e,"picked"):null}update(t,e,n){if(this.carrying)this.carrying.pos.set(e.pos.x,e.pos.y+1.25,e.pos.z),this.carrying.obj.rotation.y+=t*1.5;else for(const s of this.carriables){if(s.carried)continue;const r=n.groundAt(s.pos.x,s.pos.z,s.pos.y+.4);r>-1/0&&Math.abs(s.pos.y-r)>.01&&(s.pos.y=me.damp(s.pos.y,r,10,t))}for(const s of this.plates){let r=0;for(const c of this.carriables){if(c.carried)continue;const l=c.pos.x-s.pos.x,h=c.pos.z-s.pos.z;l*l+h*h<1&&Math.abs(c.pos.y-s.pos.y)<.6&&(r+=c.weight)}const o=e.pos.x-s.pos.x,a=e.pos.z-s.pos.z;o*o+a*a<1&&Math.abs(e.pos.y-s.pos.y)<.7&&(r+=1),s.restingWeight=r,s.setSatisfied(v0(r,s.needWeight,s.exact))}for(const s of this.gates)s.update(t),s.collider.center.copy(s.obj.position)}}const Cr={ball:"BALL LAUNCHER",boba:"BOBA BLASTER",whistle:"DUCK WHISTLE",ankh:"THE ANKH"};class w0{constructor(t){this.scene=t,t.add(this.group);for(let e=0;e<12;e++){const n=new et(new be(.14,10,8),_e(O.crtGreen,.9));n.visible=!1,this.group.add(n),this.pool.push({obj:n,vel:new T,life:0,active:!1,kind:"ball"})}this.ankhLight=new Dn(O.grandmaLilac,0,9,1.6),t.add(this.ankhLight)}owned=[];tiers={};equipped=null;pool=[];group=new Ht;switchTargets=[];bobaSpots=[];whistleCd=0;allyDuck=null;allyTarget=null;ankhActive=!1;ankhLight;onHitTarget=null;onBonk=null;onBobaPlatform=null;setLoadout(t,e){this.owned=[...t],this.tiers={...e},!this.equipped&&this.owned.length&&(this.equipped=this.owned[0])}cycle(t){if(!this.owned.length)return;const e=this.equipped?this.owned.indexOf(this.equipped):0;this.equipped=this.owned[(e+t+this.owned.length)%this.owned.length]}fire(t){if(!this.equipped)return null;const e=this.equipped;if(e==="ball"||e==="boba"){const n=this.pool.find(s=>!s.active);return n?(n.active=!0,n.kind=e,n.life=2.6,n.obj.material.color.setHex(e==="ball"?O.crtGreen:O.taroPurple),n.obj.material.emissive.setHex(e==="ball"?O.crtGreen:O.taroPurple),n.obj.visible=!0,n.obj.position.set(t.pos.x,t.pos.y+.8,t.pos.z),n.vel.set(t.state.facingX,.42,t.state.facingZ).normalize().multiplyScalar(13.5),e):null}return e==="whistle"?this.whistleCd>0?null:(this.whistleCd=this.tiers.whistle===2?4:8,this.summonAlly(t),e):e==="ankh"?(this.ankhActive=!this.ankhActive,e):null}summonAlly(t){if(!this.allyDuck){const e=new Ht,n=new et(new be(.2,10,8),At(O.duck,{flatShading:!1}));n.position.y=.2,e.add(n);const s=new et(new be(.11,8,6),At(O.duck,{flatShading:!1}));s.position.set(0,.44,.1),e.add(s);const r=new et(new Yt(.1,.04,.12),At(O.duckBill));r.position.set(0,.42,.22),e.add(r),this.scene.add(e),this.allyDuck=e}this.allyDuck.visible=!0,this.allyDuck.position.set(t.pos.x+1,t.pos.y+2,t.pos.z),this.allyTarget=null}sendAlly(t){this.allyDuck?.visible&&(this.allyTarget=t.clone())}addSwitchTarget(t,e){const n=new Ht,s=new et(new on(.34,.07,8,16),_e(O.ramenGold,1.4));n.add(s);const r=new et(new be(.12,8,6),_e(O.heartNeon,1.2));n.add(r),n.position.copy(e),this.group.add(n),this.switchTargets.push({id:t,obj:n,hit:!1})}addBobaSpot(t){const e=new et(new Bs(.45,12),new vn({color:O.taroPurple,transparent:!0,opacity:.35,side:tn}));e.position.copy(t),e.rotation.x=-Math.PI/2,this.group.add(e);const n={pos:t.clone(),filled:!1};return this.bobaSpots.push(n),n}update(t,e,n,s){this.whistleCd=Math.max(0,this.whistleCd-t);for(const r of this.pool){if(!r.active)continue;r.life-=t,r.vel.y-=14*t,r.obj.position.addScaledVector(r.vel,t);const o=this.tiers.ball===2&&r.kind==="ball",a=n.groundAt(r.obj.position.x,r.obj.position.z,r.obj.position.y+.2);r.obj.position.y<a+.14&&(o&&r.life>.4?(r.obj.position.y=a+.14,r.vel.y=Math.abs(r.vel.y)*.72):r.life=0);for(const c of this.switchTargets)!c.hit&&r.obj.position.distanceTo(c.obj.position)<.55&&(c.hit=!0,c.obj.children[1].scale.setScalar(1.6),this.onHitTarget?.(c.id),r.life=0);if(r.kind==="boba"){for(const c of this.bobaSpots)if(!c.filled&&r.obj.position.distanceTo(c.pos)<.8){c.filled=!0;const l=new et(new de(.7,.62,.3,12),At(O.taroPurple,{emissive:O.taroPurple,emissiveIntensity:.5,flatShading:!1}));l.position.copy(c.pos),this.group.add(l),n.addCollider({kind:"box",center:l.position,half:new T(.65,.15,.65),yaw:0,enabled:!0}),this.onBobaPlatform?.(c),r.life=0}}for(const c of s)c.alive&&r.obj.position.distanceTo(c.obj.position)<.7&&c.bonk(r.vel)&&(this.onBonk?.(),r.life=0);r.life<=0&&(r.active=!1,r.obj.visible=!1)}if(this.allyDuck?.visible&&this.allyTarget){const r=this.allyTarget.clone().sub(this.allyDuck.position);r.length()>.3&&(this.allyDuck.position.addScaledVector(r.normalize(),4.5*t),this.allyDuck.rotation.y=Math.atan2(r.x,r.z))}if(this.ankhActive&&this.equipped==="ankh"){this.ankhLight.intensity=26,this.ankhLight.position.set(e.pos.x,e.pos.y+1.4,e.pos.z);const r=this.tiers.ankh===2?10:6;for(const o of s){const a=o;typeof a.stunned=="number"&&o.obj.position.distanceTo(e.pos)<r&&(a.stunned=Math.max(a.stunned,1.5))}}else this.ankhLight.intensity=0}}class hc{constructor(t,e=2.2){this.waypoints=t,this.speed=e,this.rig=Ti(),this.obj=this.rig.group,this.obj.position.copy(t[0])}rig;obj;alive=!0;idx=0;t=Math.random()*10;stunned=0;knock=new T;bonk(t){return this.stunned>0?!1:(this.stunned=2.2,this.knock.copy(t).setY(0).normalize().multiplyScalar(6),!0)}update(t,e,n){if(this.t+=t,this.stunned>0){this.stunned-=t,this.obj.position.addScaledVector(this.knock,t),this.knock.multiplyScalar(1-4*t),this.obj.rotation.z=Math.sin(this.t*30)*.3*Math.min(1,this.stunned);return}this.obj.rotation.z=0;const r=this.waypoints[this.idx].clone().sub(this.obj.position).setY(0);r.length()<.4?this.idx=(this.idx+1)%this.waypoints.length:(r.normalize(),this.obj.position.addScaledVector(r,this.speed*t),this.obj.rotation.y=Math.atan2(r.x,r.z)),this.obj.rotation.z=Math.sin(this.t*9)*.12,this.rig.wingL.rotation.z=.3+Math.sin(this.t*9)*.15,this.rig.wingR.rotation.z=-.3-Math.sin(this.t*9)*.15,this.obj.position.distanceTo(e.pos)<.85&&n("duck")}}class T0{constructor(t,e=3){this.range=e,this.origin=t.clone(),this.obj=new Ht;const n=new et(new be(.3,10,8),At(13915434,{gloss:.3,flatShading:!1}));n.scale.set(1.4,.7,1),n.position.y=.25,n.castShadow=!0,this.obj.add(n);for(const s of[-1,1]){const r=new et(new be(.14,8,6),At(13915434,{flatShading:!1}));r.position.set(.45*s,.22,.25),this.obj.add(r)}this.obj.position.copy(t)}obj;alive=!0;t=Math.random()*7;origin;bonk(){return!1}update(t,e,n){this.t+=t,this.obj.position.x=this.origin.x+Math.sin(this.t*1.6)*this.range,this.obj.rotation.y=Math.cos(this.t*1.6)>0?Math.PI/2:-Math.PI/2,this.obj.position.distanceTo(e.pos)<.8&&n("crab")}}class A0{constructor(t,e=2.4){this.radius=e,this.origin=t.clone(),this.obj=new Ht;const n=new et(new be(.16,10,8),_e(O.edwardPale,2.2));this.obj.add(n);const s=new et(new be(.3,10,8),new vn({color:O.edwardPale,transparent:!0,opacity:.22}));this.obj.add(s),this.obj.position.copy(t)}obj;alive=!0;t=Math.random()*9;origin;stunned=0;bonk(){return!1}update(t,e,n){if(this.t+=t,this.stunned>0){this.stunned-=t,this.obj.position.y=this.origin.y+Math.sin(this.t*40)*.05;return}this.obj.position.set(this.origin.x+Math.cos(this.t*1.1)*this.radius,this.origin.y+Math.sin(this.t*2.3)*.5,this.origin.z+Math.sin(this.t*1.1)*this.radius),this.obj.position.distanceTo(e.pos)<.7&&n("sparkle")}}class R0{obj;alive=!0;t=0;target=null;onSteal=null;constructor(t){this.obj=new Ht;const e=new et(new Yt(.5,.2,.5),At(3818600,{gloss:.4,flatShading:!1}));this.obj.add(e);for(const[s,r]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]]){const o=new et(new de(.14,.14,.02,8),At(5857663));o.position.set(s,.14,r),this.obj.add(o)}const n=new et(new be(.07,8,6),_e(O.ramenGold,2));n.position.set(0,-.05,.26),this.obj.add(n),this.obj.position.copy(t),this.obj.position.y+=2.4}bonk(){return!1}update(t,e,n){if(this.t+=t,this.obj.position.y+=Math.sin(this.t*3)*.004,this.obj.rotation.y+=t*.8,this.target){const s=this.target.clone().sub(this.obj.position);s.y=0,s.length()<.6?(this.onSteal?.(),this.target=null):this.obj.position.addScaledVector(s.normalize(),3.4*t)}}}const C0={ch1:"GRANDMA SAYS: 3 = 3. THE DOG COUNTS AS ONE.",ch2:"GRANDMA SAYS: EVERY WIRE ARM MUST POINT AT THE NEXT ROTOR.",ch3:"GRANDMA SAYS: 2+2+2+1. LEAVE THE BIG COIN. HE WANTS YOU TO OVERPAY.",ch4:"GRANDMA SAYS: LOW TIDE TO PUSH. HIGH TIDE TO FLOAT. MID TO THINK.",ch5:"GRANDMA SAYS: SLASH, SLASH, BACKSLASH, BACKSLASH, SLASH.",ch6:"GRANDMA SAYS: THE ANKH SHOWS THE SOCKETS. HIDE BEHIND ROCKS."};class xi{constructor(t,e,n=[]){this.ctx=t,this.def=e,this.mods=new Set(n);for(const c of e.logic??[])"paidExact"in c.when&&(this.slotTargets[c.when.paidExact.slot]=c.when.paidExact.amount);this.world=new jo(e),this.scene.add(this.world.group),this.scene.fog=new Pi(O.midnight,e.fogDensity??.016),this.sky=new Ws,this.sky.set({top:O.midnight,horizon:O.horizonGlow,glow:e.skyGlow}),this.scene.add(this.sky.group);const s=new Gs(8228816,1317432,1.15);this.scene.add(s);const r=new Wo(11057407,1.5);if(r.position.set(18,34,-14),t.tier==="ultra"){r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const c=46;r.shadow.camera.left=-c,r.shadow.camera.right=c,r.shadow.camera.top=c,r.shadow.camera.bottom=-c,r.shadow.camera.far=130,r.shadow.bias=-8e-4}this.scene.add(r),this.player=new Yo,this.player.applyCosmetics(t.save.data.gear.owned,!!t.save.data.secrets.halo),this.scene.add(this.player.rig.group),this.weapons=new w0(this.scene),this.weapons.setLoadout(t.save.data.weapons,t.save.data.weaponTiers),this.weapons.onHitTarget=c=>{this.switchLatch[c]=!0,t.audio.play("correct",.5)},this.weapons.onBonk=()=>{t.audio.play("quack",.6),this.ctx.camera.kick(.15)};for(const c of e.entities)this.spawnEntity(c);const o=t.save.data.gear,a=o.charms;if(o.collar==="foam"&&(this.maxHearts+=1),o.collar==="duckdown"&&(this.maxHearts+=2,this.player.cfg.speedMultiplier*=.9),o.collar==="racing"&&(this.maxHearts=Math.max(1,this.maxHearts-1),this.player.cfg.speedMultiplier*=1.15),a.includes("slowpaw")&&(this.player.cfg.pounceCooldown*=.6),this.secondWind=a.includes("secondwind"),this.snackRamen=o.snacks.includes("ramen"),this.snackShield=o.snacks.includes("bobaShield")?2:0,this.snackCookie=o.snacks.includes("cookie")?1:0,this.mods.has("oneHeart")&&(this.maxHearts=1),this.mods.has("noWeapons")&&this.weapons.setLoadout([],{}),this.mods.has("fogRolls")&&(this.scene.fog.density=(e.fogDensity??.016)*2.2),this.mods.has("doubleDucks")){for(const c of e.entities)if(c.type==="duck"){const l=(c.patrol??[c.pos]).map(h=>new T(h.x+1.5,h.y,h.z+1.5));this.addEnemy(new hc(l,(c.speed??2.2)*1.2))}}this.hearts=this.maxHearts,this.player.spawnAt(this.spawnPos.x,this.spawnPos.y,this.spawnPos.z,this.spawnYaw),t.camera.configure(e.cameraZones,e.cameraOffset),t.camera.snapTo(this.player.pos),t.hud.chapterCard(e.name,e.tagline),t.hud.setHearts(this.hearts,this.maxHearts),this.fx=new Xs(this.scene),t.audio.play("levelstart",.5),this.hintKey=c=>{c.code==="KeyH"&&(this.snackCookie>this.hintsUsed?(this.hintsUsed++,this.ctx.hud.toast(C0[this.def.id]??"FOLLOW THE GLOW. TRUST THE DOG.",4.5),this.ctx.audio.play("ding",.6)):this.snackCookie>0&&this.ctx.hud.toast("COOKIE ALREADY EATEN.",1.6))},addEventListener("keydown",this.hintKey)}scene=new $i;world;player;sky;im=new b0;weapons;enemies=[];pickups=[];hazards=[];secretWalls=[];goalPos=new T;spawnPos=new T;spawnYaw=0;hearts=3;maxHearts=3;iframes=0;runTime=0;deaths=0;switchLatch={};done=!1;drone=null;rotors=[];slots=[];valves=[];zones=[];onZone=null;slotTargets={};fx;cutscene=null;mods;pearlsThisRun=0;ducksThisRun=0;secretThisRun=!1;snackRamen=!1;snackShield=0;snackCookie=0;secondWind=!1;hintsUsed=0;hintKey;spawnEntity(t){const e=n=>new T(n.x,n.y,n.z);switch(t.type){case"spawn":this.spawnPos.copy(e(t.pos)),this.spawnYaw=t.yaw??0;break;case"goal":{this.goalPos.copy(e(t.pos));const n=new Ht,s=new et(new on(1.15,.13,10,24),_e(O.heartNeon,1.8));s.position.y=1.4,n.add(s);const r=new Dn(O.heartNeon,30,10,1.6);r.position.y=1.4,n.add(r),n.position.copy(this.goalPos),this.scene.add(n);break}case"letterPiece":{const n=qo();n.position.copy(e(t.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"piece",taken:this.ctx.save.data.pieces.includes(this.def.id)}),this.pickups[this.pickups.length-1].taken&&(n.visible=!1);break}case"goldenDuck":{const n=Zc();n.position.copy(e(t.pos)),this.scene.add(n);const s=this.ctx.save.data.ducks.includes(t.id);s&&(n.visible=!1),this.pickups.push({obj:n,kind:"goldenDuck",id:t.id,needs:t.needs,taken:s});break}case"pearl":{const n=new et(new be(.16,10,8),_e(O.taroPurple,1.2));n.position.copy(e(t.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"pearl",taken:!1});break}case"weaponPickup":{if(this.ctx.save.data.weapons.includes(t.weapon))break;const n=new Ht,s=new et(new de(.5,.62,.5,12),At(2305102));s.position.y=.25,n.add(s);const r=new et(new ko(.32),_e(O.crtGreen,1.6));r.position.y=1.1,n.add(r);const o=new Dn(O.crtGreen,20,7,1.6);o.position.y=1.2,n.add(o),n.position.copy(e(t.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"weapon",weapon:t.weapon,taken:!1});break}case"duck":this.addEnemy(new hc((t.patrol??[t.pos]).map(e),t.speed));break;case"crab":this.addEnemy(new T0(e(t.pos),t.range));break;case"wisp":this.addEnemy(new A0(e(t.pos),t.radius));break;case"drone":{this.drone=new R0(e(t.pos)),this.addEnemy(this.drone);break}case"hazard":{const n=e(t.shape.pos),s=e(t.shape.size).multiplyScalar(.5);if(this.hazards.push({min:n.clone().sub(s),max:n.clone().add(s),kind:t.kind}),t.kind==="mud"){const r=new et(new Yt(t.shape.size.x,.08,t.shape.size.z),At(O.lincolnMud,{rim:0}));r.position.set(n.x,t.shape.pos.y+t.shape.size.y/2,n.z),this.scene.add(r)}break}case"carry":case"plate":case"door":case"lift":this.im.add(t,this.world,this.scene);break;case"switchTarget":this.weapons.addSwitchTarget(t.id,e(t.pos)),this.switchLatch[t.id]=!1;break;case"rotor":{const n=new Ht,s=new et(new de(.5,.6,.5,10),At(2765650));if(s.position.y=.25,n.add(s),t.kind==="mirror"){const o=new et(new Yt(1.6,1.1,.1),At(14542832,{gloss:.95,rim:.5,flatShading:!1,emissive:2240580,emissiveIntensity:.6}));o.position.y=1.1,o.rotation.y=Math.PI/4,n.add(o)}else{const o=new et(new Yt(.3,.2,2.4),_e(O.ramenGold,1.3));o.position.y=.6,n.add(o)}const r=t.state??0;n.rotation.y=t.kind==="mirror"?r*Math.PI/2:r*Math.PI*2/t.states,n.position.copy(e(t.pos)),this.scene.add(n),this.rotors.push({id:t.id,obj:n,states:t.states,state:r,kind:t.kind});break}case"slot":{const n=new Ht,s=new et(new Yt(1.2,1.3,1.2),At(3818600));s.position.y=.65,n.add(s);const r=new et(new Yt(.5,.1,.3),_e(O.ramenGold,1.5));r.position.set(0,1.36,0),n.add(r);const o=new et(new yn(1.4,.5),new vn({transparent:!0}));o.position.set(0,1.9,0),n.add(o),n.position.copy(e(t.pos)),this.scene.add(n),this.slots.push({id:t.id,obj:n,sum:0,label:o}),this.updateSlotLabel(this.slots[this.slots.length-1]);break}case"valve":{const n=new Ht,s=new et(new de(.12,.16,1,8),At(3818600));s.position.y=.5,n.add(s);const r=new et(new on(.4,.08,8,14),_e(O.crtGreen,.8));r.position.y=1.1,r.rotation.x=Math.PI/2,n.add(r),n.position.copy(e(t.pos)),this.scene.add(n),this.valves.push({id:t.id,obj:n,state:0});break}case"interactZone":this.zones.push({id:t.id,pos:e(t.pos),radius:t.radius,label:t.label,used:!1});break;case"bobaSpot":this.weapons.addBobaSpot(e(t.pos));break;case"secretWall":{const n=new et(new Yt(t.size.x,t.size.y,t.size.z),At(t.color,{}));n.position.copy(e(t.pos)),this.scene.add(n),this.secretWalls.push({mesh:n,found:!1});break}case"sign":{const n=Fs(t.lines,t.fg?{fg:t.fg}:{});n.position.copy(e(t.pos)),n.rotation.y=t.yaw??0,this.scene.add(n);break}case"polaroid":{const n=e0(new URL(`../../${t.photo}`,document.baseURI).href);n.position.copy(e(t.pos)),n.rotation.y=t.yaw??0,this.scene.add(n);break}}}allyFetch=null;collect(t){if(t.taken=!0,t.obj.visible=!1,t.kind==="piece")this.ctx.save.patch(e=>{e.pieces.includes(this.def.id)||e.pieces.push(this.def.id)}),this.ctx.hud.setPieces(this.ctx.save.data.pieces.length),this.ctx.hud.toast("LETTER PIECE RECOVERED ✉",2.2),this.ctx.audio.play("sparkle",.7);else if(t.kind==="goldenDuck"&&t.id!==void 0)this.ducksThisRun++,this.ctx.save.patch(e=>{e.ducks.includes(t.id)||e.ducks.push(t.id)}),this.ctx.hud.toast(`GOLDEN DUCK ${this.ctx.save.data.ducks.length}/21`,2.2),this.ctx.audio.play("quack",.7,.8);else if(t.kind==="pearl"){const e=this.mods.has("greed")?2:1;this.pearlsThisRun+=e,this.ctx.save.patch(n=>{n.pearls+=e}),this.ctx.hud.setPearls(this.ctx.save.data.pearls),this.ctx.audio.play("coin",.4)}else t.kind==="weapon"&&t.weapon&&(this.ctx.save.patch(e=>{e.weapons.includes(t.weapon)||e.weapons.push(t.weapon)}),this.weapons.setLoadout(this.ctx.save.data.weapons,this.ctx.save.data.weaponTiers),this.weapons.equipped=t.weapon,this.ctx.audio.play("fanfare",.6),this.playWeaponVignette(t.weapon,this.player.pos.clone()))}playWeaponVignette(t,e){const n=new Hc(16777215,300,20,.5,.4,1.4);n.position.set(e.x,8,e.z),n.target.position.copy(e),this.scene.add(n,n.target);const s=(r,o,a)=>new T(e.x+Math.sin(r)*o,a,e.z+Math.cos(r)*o);this.cutscene=new Kn([{t:0,cam:{pos:s(-.6,4,1.4),look:e.clone().setY(e.y+.8),fov:42}},{t:.1,cam:{pos:s(.9,4,1.8),look:e.clone().setY(e.y+.8),fov:40},glide:2.2},{t:.4,do:()=>{this.ctx.hud.toast(`${Cr[t]} ACQUIRED`,2.6),this.fx.burst(e.clone().setY(e.y+1),60,{colors:[O.crtGreen,O.star],speed:3,up:3,life:1})}}],2.6,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,n.removeFromParent(),this.ctx.camera.snapTo(this.player.pos)})}updateSlotLabel(t){const e=this.slotTargets[t.id],n=document.createElement("canvas");n.width=256,n.height=96;const s=n.getContext("2d");s.fillStyle="rgba(10,14,32,0.85)",s.fillRect(0,0,256,96),s.fillStyle="#FFB627",s.font='700 40px "Space Grotesk", sans-serif',s.textAlign="center",s.fillText(`${t.sum}${e!==void 0?" / "+e:""}`,128,60);const r=new Oc(n),o=t.label.material;o.map?.dispose(),o.map=r,o.needsUpdate=!0}addEnemy(t){this.enemies.push(t),this.scene.add(t.obj)}hurt(t){if(!(this.iframes>0||this.done)){if((t==="water"||t==="fall"||t==="mud")&&this.ctx.save.data.gear.collar==="puffer"){this.iframes=.8,this.ctx.audio.play("splash",.3);return}if(this.mods.has("greed")){const e=Math.min(5,this.ctx.save.data.pearls);this.ctx.save.patch(n=>{n.pearls-=e}),this.ctx.hud.setPearls(this.ctx.save.data.pearls)}if(this.snackShield>0){this.snackShield--,this.iframes=1.2,this.ctx.hud.toast(`BOBA SHIELD ABSORBED IT. ${this.snackShield} LEFT.`,1.6),this.ctx.audio.play("pop",.6);return}if(this.hearts-=1,this.iframes=1.2,this.hearts===1&&this.snackRamen&&(this.snackRamen=!1,this.hearts=this.maxHearts,this.ctx.hud.toast("RAMEN CUP. FULLY RESTORED. 🍜",2),this.ctx.audio.play("correct",.7)),this.hearts<=0&&this.secondWind&&(this.secondWind=!1,this.hearts=1,this.ctx.hud.toast("SECOND WIND. ONE MORE CHANCE.",2.2),this.ctx.audio.play("sparkle",.8)),this.deaths+=this.hearts<=0?1:0,this.ctx.hud.setHearts(Math.max(0,this.hearts),this.maxHearts),this.ctx.audio.play("hit",.55),this.ctx.camera.kick(.4),this.hearts<=0){this.ctx.audio.play("powerdown",.6);const e=Math.ceil(this.pearlsThisRun*.4);e>0?(this.ctx.save.patch(n=>{n.pearls=Math.max(0,n.pearls-e)}),this.ctx.hud.setPearls(this.ctx.save.data.pearls),this.ctx.hud.toast(`RUN OVER. THE DUCKS TOOK ${e} ⬤.`,2.6)):this.ctx.hud.toast("RUN OVER. THE DUCKS ARE LAUGHING.",2.6),this.pearlsThisRun=0,this.snackShield=this.ctx.save.data.gear.snacks.includes("bobaShield")?2:0,this.snackRamen=this.ctx.save.data.gear.snacks.includes("ramen"),this.hearts=this.maxHearts,this.ctx.hud.setHearts(this.hearts,this.maxHearts),this.respawn()}else this.player.state.vx*=-1.6,this.player.state.vz*=-1.6}}respawn(){this.player.spawnAt(this.spawnPos.x,this.spawnPos.y,this.spawnPos.z,this.spawnYaw),this.ctx.camera.snapTo(this.player.pos)}update(t){if(this.done)return;if(this.fx.update(t),this.cutscene&&!this.cutscene.done){this.cutscene.update(t),this.sky.update(t);return}const e=this.ctx.input.poll();if(this.sky.update(t),this.runTime+=t,this.iframes=Math.max(0,this.iframes-t),this.player.rig.group.visible=this.iframes<=0||Math.floor(this.iframes*14)%2===0,this.player.update(t,e,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.3),this.player.trail!==null&&Math.hypot(this.player.state.vx,this.player.state.vz)>3&&Math.random()<t*20&&this.fx.burst(this.player.pos.clone().setY(this.player.pos.y+.4),1,{colors:[this.player.trail],speed:.4,up:.8,gravity:.4,life:.7}),this.player.events.landed&&(this.ctx.audio.play("land",.22),this.fx.burst(this.player.pos,10,{colors:[9081784],speed:1.6,up:.8,life:.4})),this.player.events.pounced){this.ctx.audio.play("whoosh",.4),this.ctx.camera.kick(.15),this.fx.burst(this.player.pos,14,{colors:[9081784],speed:2,up:1,life:.5});const u=this.ctx.save.data.gear.charms.includes("barkAmp")?2.6:1.2;for(const p of this.enemies)p.alive&&p.obj.position.distanceTo(this.player.pos)<u&&p.bonk(new T(this.player.state.facingX,0,this.player.state.facingZ))&&this.ctx.audio.play("quack",.6)}const n=this.zones.find(u=>!u.used&&u.pos.distanceTo(this.player.pos)<u.radius),s=this.slots.find(u=>u.obj.position.distanceTo(this.player.pos)<2.2),r=this.rotors.find(u=>u.obj.position.distanceTo(this.player.pos)<2),o=this.valves.find(u=>u.obj.position.distanceTo(this.player.pos)<2),a=this.im.nearest(this.player),c=this.im.carrying?.kind==="coin";if(n?this.ctx.hud.prompt(`[E] ${n.label}`):s&&c?this.ctx.hud.prompt("[E] INSERT COIN"):r?this.ctx.hud.prompt("[E] ROTATE"):o?this.ctx.hud.prompt("[E] TURN VALVE"):this.im.carrying?this.ctx.hud.prompt("[E] PUT DOWN"):a?this.ctx.hud.prompt("[E] PICK UP"):this.ctx.hud.prompt(null),e.interact)if(n)n.used=!0,this.onZone?.(n.id);else if(s&&c&&this.im.carrying){const u=this.im.carrying;s.sum+=u.value||1,this.im.carrying=null,u.carried=!1,u.obj.visible=!1,u.pos.set(0,-100,0),this.ctx.audio.play("register",.6);const p=this.slotTargets[s.id];if(p!==void 0&&s.sum>p){s.sum=0,this.ctx.hud.toast('OVERPAID. "NO REFUNDS." — HAYDEN',2.6),this.ctx.audio.play("error",.6);for(const g of this.im.carriables)g.kind==="coin"&&(g.obj.visible=!0,g.pos.copy(g.home))}this.updateSlotLabel(s)}else r?(r.state=(r.state+1)%r.states,r.obj.rotation.y=r.kind==="mirror"?r.state*Math.PI/2:r.state*Math.PI*2/r.states,this.ctx.audio.play("click",.55)):o?(o.state=(o.state+1)%3,o.obj.rotation.y+=1.2,this.ctx.audio.play("reel",.5)):this.im.interact(this.player)&&this.ctx.audio.play("pop",.45);if(this.im.update(t,this.player,this.world),e.cycle&&(this.weapons.cycle(e.cycle),this.weapons.equipped&&this.ctx.hud.toast(Cr[this.weapons.equipped],1)),e.fire){const u=this.weapons.fire(this.player);if((u==="ball"||u==="boba")&&this.ctx.audio.play("boing",.4),u==="ankh"&&this.ctx.audio.play("sparkle",.5),u==="whistle"){this.ctx.audio.play("quack",.7,1.4);const p=this.pickups.find(g=>!g.taken&&g.kind==="goldenDuck"&&g.needs==="whistle"&&g.obj.position.distanceTo(this.player.pos)<16);p&&(this.weapons.sendAlly(p.obj.position),this.allyFetch=p)}}this.allyFetch&&!this.allyFetch.taken&&this.weapons.allyDuck?.visible&&this.weapons.allyDuck.position.distanceTo(this.allyFetch.obj.position)<.6&&this.collect(this.allyFetch),this.weapons.update(t,this.player,this.world,this.enemies);const l={plates:{},switches:this.switchLatch,keyNear:{},rotors:Object.fromEntries(this.rotors.map(u=>[u.id,u.state])),paid:Object.fromEntries(this.slots.map(u=>[u.id,u.sum]))};for(const u of this.im.plates)l.plates[u.id]=u.satisfied;for(const u of this.im.gates)if(u.needsKey){const p=this.im.carrying?.kind==="key"?this.im.carrying:this.im.carriables.find(g=>g.kind==="key");l.keyNear[u.id]=!!p&&p.pos.distanceTo(u.obj.position)<3.2}const h=_0(this.def.logic??[],l);for(const u of this.im.gates){const p=h.has(u.id);p&&!u.open&&this.ctx.audio.play("ding",.5),u.open=p}for(const u of this.enemies)u.alive&&u.update(t,this.player,p=>this.hurt(p));if(this.drone&&!this.drone.target){const u=this.im.carriables.find(p=>p.kind==="coin"&&!p.carried&&p.obj.visible&&p.pos.distanceTo(p.home)>1.5);u&&(this.drone.target=u.pos,this.drone.onSteal=()=>{u.pos.copy(u.home),this.ctx.hud.toast("DRONE REPOSSESSED A COIN. — HAYDEN",2),this.ctx.audio.play("chatter",.4)})}for(const u of this.hazards){const p=this.player.pos;if(p.x>u.min.x&&p.x<u.max.x&&p.y>u.min.y-.2&&p.y<u.max.y+.5&&p.z>u.min.z&&p.z<u.max.z){u.kind==="water"&&this.ctx.audio.play("splash",.5),this.hurt(u.kind),this.respawn();break}}this.player.pos.y<this.def.bounds.min.y&&(this.hurt("fall"),this.respawn());for(const u of this.secretWalls){const p=u.mesh.position.distanceTo(this.player.pos);if(!u.found&&p<1.4){u.found=!0;const g=u.mesh.material;g.transparent=!0,g.opacity=.3,this.secretThisRun=!0,this.ctx.hud.toast("SECRET ROOM. OBVIOUSLY.",2.4),this.ctx.audio.play("sparkle",.6),this.ctx.save.patch(_=>{_.secrets[`${this.def.id}-room`]=!0})}else if(u.found){const g=u.mesh.material;g.transparent=!0,g.opacity=p<3?.3:.95}}if(this.ctx.save.data.gear.charms.includes("scout"))for(const u of this.secretWalls)!u.found&&u.mesh.position.distanceTo(this.player.pos)<6&&Math.floor(this.runTime*.5)!==Math.floor((this.runTime-t)*.5)&&this.ctx.audio.play("ding",.25,1.6);const d=this.ctx.save.data.gear.charms.includes("magnet");for(const u of this.pickups)if(!u.taken){if(u.obj.rotation.y+=t*2,d&&u.kind==="pearl"){const p=u.obj.position.distanceTo(this.player.pos);p<4&&p>.9&&u.obj.position.lerp(this.player.pos.clone().setY(this.player.pos.y+.5),t*4)}if(u.obj.position.distanceTo(this.player.pos)<1.1){if(u.kind==="goldenDuck"&&u.needs&&!this.ctx.save.data.weapons.includes(u.needs)){this.ctx.hud.toast(`THIS DUCK RESPECTS ONLY THE ${Cr[u.needs]}.`,2);continue}this.collect(u)}}this.player.pos.distanceTo(this.goalPos)<1.6&&this.finish(),this.onUpdate(t,e),this.ctx.camera.update(t,this.player.pos,new T(this.player.state.vx,0,this.player.state.vz),e.camNudge),e.pause&&this.ctx.togglePause()}onUpdate(t,e){}finish(){if(this.done)return;this.done=!0,this.ctx.audio.play("win",.7);const t=this.ctx.save,e=!t.data.chaptersDone.includes(this.def.id),n=this.mods.has("rushHour")?this.def.parSeconds*.7:this.def.parSeconds,s=c0({timeSeconds:this.runTime,parSeconds:n,deaths:this.deaths,ducksThisRun:this.ducksThisRun,secretFound:this.secretThisRun,bounty:this.mods.size>0,modifierCount:this.mods.size},e,t.data.gear.charms.includes("pearlcut")),r=t.data.grades[this.def.id],o=l0(s.medal,r?.medal);t.patch(a=>{a.chaptersDone.includes(this.def.id)||a.chaptersDone.push(this.def.id),a.pearls+=s.payout,this.mods.size>0&&(a.bountiesCleared+=1),a.gear.snacks=[];const c=a.grades[this.def.id];a.grades[this.def.id]={medal:o?s.medal:c?.medal??s.medal,bestScore:Math.max(c?.bestScore??0,s.score),bestTime:Math.min(c?.bestTime??1/0,this.runTime)},this.def.id==="ch7"&&this.deaths===0&&(a.secrets.halo=!0)}),this.ctx.hud.setPearls(t.data.pearls),this.showTally(s,e,o,r?.bestScore??0)}showTally(t,e,n,s){const r=this.ctx.hud.overlay(),o={C:"#8a93b8",B:"#c8cdd6",GOLD:"#FFB627",S:"#FF4D8D"},a=t.breakdown.map(d=>`<div style="display:flex;justify-content:space-between;gap:40px;font-family:'Space Grotesk',monospace"><span>${d.label}</span><b data-count="${d.value}">0</b></div>`).join("");r.innerHTML=`
      <h1 style="letter-spacing:6px">${this.def.name}</h1>
      <div class="dj-card" style="min-width:300px;display:flex;flex-direction:column;gap:8px;padding:18px 22px">${a}
        <hr style="border-color:rgba(255,255,255,0.15)" />
        <div style="display:flex;justify-content:space-between"><span>SCORE</span><b data-count="${t.score}">0</b></div>
        <div style="display:flex;justify-content:space-between"><span>PAYOUT</span><b style="color:#B388EB" data-count="${t.payout}">0</b></div>
      </div>
      <div style="font-family:'Space Grotesk',sans-serif;font-size:44px;font-weight:700;color:${o[t.medal]};letter-spacing:8px">${t.medal==="S"?"S RANK":t.medal}</div>
      ${t.score>s&&s>0?'<div style="color:#33FF88;font-weight:800">NEW BEST</div>':""}
      ${e?'<div style="color:#FFB627">FIRST CLEAR +100 ⬤</div>':""}
      <button class="dj-btn" data-a="go">BACK TO THE HIGHWAY</button>
    `;const c=[...r.querySelectorAll("[data-count]")],l=performance.now(),h=()=>{const d=Math.min(1,(performance.now()-l)/1400);for(const u of c){const p=Number(u.dataset.count);u.textContent=String(Math.round(p*(d<1?d*d:1)))}d<1?requestAnimationFrame(h):n&&(this.ctx.audio.play("fanfare",.5),this.fx.burst(this.player.pos.clone().setY(this.player.pos.y+2),120,{speed:5,up:4,life:1.6}))};h(),this.ctx.audio.play("register",.5),r.querySelector('[data-a="go"]').addEventListener("click",()=>{r.remove(),this.ctx.go("hub")})}dispose(){removeEventListener("keydown",this.hintKey),this.ctx.hud.prompt(null)}}const Ls={low:-1.6,mid:-.6,high:.7};function P0(){const i=[],t=O.sand;return i.push({kind:"box",pos:{x:0,y:-.25,z:-16},size:{x:44,y:.5,z:16},color:t}),i.push({kind:"box",pos:{x:0,y:-1.15,z:0},size:{x:44,y:.5,z:16},color:11902844}),i.push({kind:"box",pos:{x:0,y:-.25,z:16},size:{x:26,y:.5,z:16},color:t}),i.push({kind:"box",pos:{x:0,y:1.2,z:21},size:{x:10,y:2.4,z:1},color:14205331}),i.push({kind:"cylinder",pos:{x:-5.5,y:1.6,z:21},size:{x:2,y:3.2,z:2},color:14205331}),i.push({kind:"cylinder",pos:{x:5.5,y:1.6,z:21},size:{x:2,y:3.2,z:2},color:14205331}),i.push({kind:"box",pos:{x:-3.4,y:.5,z:19.4},size:{x:3,y:1,z:3},color:14205331}),i.push({kind:"box",pos:{x:3.4,y:1,z:19.4},size:{x:3,y:2,z:3},color:14205331}),i.push({kind:"box",pos:{x:18,y:1.5,z:10},size:{x:6,y:5,z:10},color:3817557}),i.push({kind:"box",pos:{x:18,y:-.25,z:2},size:{x:8,y:.5,z:6},color:t}),i.push({kind:"box",pos:{x:-16,y:.6,z:-6},size:{x:6,y:1.2,z:6},color:14205331}),i.push({kind:"box",pos:{x:-19,y:1.4,z:0},size:{x:5,y:1.4,z:5},color:14205331}),i.push({kind:"box",pos:{x:-16,y:2.3,z:6},size:{x:4,y:1.2,z:4},color:14205331}),{id:"ch4",name:"THE BEACH",tagline:"sand in the corvette. we do not speak of it.",skyGlow:5093631,fogDensity:.014,prims:i,cameraOffset:{x:0,y:7.2,z:-9},cameraZones:[{min:{x:-13,y:-2,z:10},max:{x:13,y:5,z:26},offset:{x:0,y:5.4,z:-10.5},fov:50}],parSeconds:240,bounds:{min:{x:-26,y:-8,z:-28},max:{x:26,y:30,z:28}},logic:[{when:{plates:["pa","pb","pc"]},open:"castle"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-22},yaw:0},{type:"goal",pos:{x:0,y:.6,z:22.5}},{type:"sign",pos:{x:6,y:0,z:-20},lines:["THE BEACH","shoes: optional. crabs: not."],yaw:Math.PI},{type:"sign",pos:{x:-8,y:0,z:-12},lines:["TIDE MACHINE","low · mid · high"],fg:"#4DB8FF"},{type:"valve",id:"tide",pos:{x:-6,y:0,z:-12}},{type:"carry",id:"b1",pos:{x:-8,y:-.9,z:-2},kind:"block",weight:2},{type:"carry",id:"b2",pos:{x:4,y:-.9,z:2},kind:"block",weight:2},{type:"carry",id:"b3",pos:{x:12,y:-.9,z:-4},kind:"block",weight:2},{type:"plate",id:"pa",pos:{x:0,y:-.9,z:6},needWeight:2},{type:"plate",id:"pb",pos:{x:-3.4,y:1,z:19.4},needWeight:2},{type:"plate",id:"pc",pos:{x:3.4,y:2,z:19.4},needWeight:2},{type:"door",id:"castle",pos:{x:0,y:1,z:21},size:{x:2.4,y:2,z:1.2},color:O.heartNeon},{type:"crab",pos:{x:-6,y:-.9,z:0},range:4},{type:"crab",pos:{x:8,y:-.9,z:4},range:3},{type:"crab",pos:{x:2,y:0,z:-10},range:5},{type:"interactZone",id:"rescue",pos:{x:-16,y:2.9,z:6},radius:2,label:"HELP THE DUCK"},{type:"weaponPickup",weapon:"whistle",pos:{x:-16,y:2.9,z:6}},{type:"letterPiece",pos:{x:6,y:-.7,z:8}},{type:"secretWall",pos:{x:15.4,y:1,z:5.2},size:{x:.8,y:3,z:4},color:3817557},{type:"polaroid",pos:{x:18,y:1.2,z:4},photo:"assets/photos/couple_snow.jpeg",yaw:-1.2},{type:"goldenDuck",id:11,pos:{x:20,y:.4,z:2}},{type:"pearl",pos:{x:19,y:.5,z:3.5}},{type:"pearl",pos:{x:21,y:.5,z:3.5}},{type:"goldenDuck",id:10,pos:{x:-19,y:2.6,z:0}},{type:"goldenDuck",id:12,pos:{x:18,y:4.6,z:10},needs:"boba"},{type:"bobaSpot",pos:{x:14.6,y:1.4,z:8}},{type:"bobaSpot",pos:{x:15.5,y:3,z:10}},{type:"pearl",pos:{x:0,y:.4,z:-18}},{type:"pearl",pos:{x:-10,y:.4,z:-14}},{type:"pearl",pos:{x:-16,y:1.6,z:-6}},{type:"pearl",pos:{x:0,y:-.7,z:2}},{type:"pearl",pos:{x:10,y:-.7,z:0}},{type:"pearl",pos:{x:0,y:.6,z:18}}]}}const D0=[Ls.low,Ls.mid,Ls.high];class L0 extends xi{water;waterY=Ls.low;announced=-1;constructor(t,e=[]){super(t,P0(),e),this.water=new et(new yn(60,40),new bi({color:O.dockWater,transparent:!0,opacity:.78,emissive:1718894,emissiveIntensity:.5})),this.water.rotation.x=-Math.PI/2,this.water.position.set(0,this.waterY,2),this.scene.add(this.water),this.onZone=n=>{n==="rescue"&&(this.ctx.hud.toast("THE DUCK IS FINE. THE DUCK IS GRATEFUL.",2.6),this.ctx.audio.play("quack",.8,1.2))}}onUpdate(t){const e=this.valves.find(s=>s.id==="tide");if(!e)return;const n=D0[e.state];e.state!==this.announced&&(this.announced=e.state,this.ctx.hud.toast(["TIDE: LOW","TIDE: MID","TIDE: HIGH"][e.state],1.6)),this.waterY=me.damp(this.waterY,n,1.2,t),this.water.position.y=this.waterY,this.water.position.y+=Math.sin(this.runTime*1.4)*.05;for(const s of this.im.carriables){if(s.kind!=="block"||s.carried)continue;const r=this.water.position.y;r>s.pos.y&&(s.pos.y=r)}this.player.pos.y<this.water.position.y-.35&&(this.ctx.audio.play("splash",.6),this.hurt("water"),this.respawn())}}const I0={x:0,z:-10},Pr={x:12,z:14},uc={m1:0,m2:0,m3:1,m4:1,m5:0};function U0(i){const t={m1:{x:0,z:-2},m2:{x:8,z:-2},m3:{x:8,z:8},m4:{x:-8,z:8},m5:{x:-8,z:14}};return Object.keys(t).map(e=>({pos:t[e],state:i[e]??0}))}function z0(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:-14},size:{x:34,y:.5,z:10},color:O.grass});const n=(s,r,o,a)=>{i.push({kind:"box",pos:{x:s,y:-.15,z:r},size:{x:o,y:.3,z:a},color:6508858})};n(0,-4,3.4,12),n(4,-2,12,3),n(8,3,3,13),n(0,8,19,3),n(-8,11,3,9),n(2,14,17,3.4),n(12,14,5,5);for(const[s,r]of[[0,-2],[8,-2],[8,8],[-8,8],[-8,14],[12,14],[4,8],[0,14]])i.push({kind:"cylinder",pos:{x:s,y:-1.4,z:r},size:{x:.5,y:2.6,z:.5},color:3813154});return i.push({kind:"box",pos:{x:4,y:-2.4,z:1.5},size:{x:4.4,y:.3,z:4.4},color:2765650}),i.push({kind:"box",pos:{x:0,y:-3.1,z:4},size:{x:80,y:.4,z:70},color:O.dockWater,ghost:!0}),i.push({kind:"cylinder",pos:{x:0,y:.25,z:-10},size:{x:1,y:.5,z:1},color:3094614}),i.push({kind:"box",pos:{x:0,y:.95,z:-10},size:{x:.42,y:.42,z:.42},color:O.star,emissive:O.star,emissiveIntensity:2.6,ghost:!0}),i.push({kind:"cylinder",pos:{x:12,y:1.2,z:14},size:{x:.7,y:2,z:.7},color:3094614}),{id:"ch5",name:"THE DOCK & STARS",tagline:"lying on the dock. watching.",skyGlow:10336511,fogDensity:.017,prims:i,cameraOffset:{x:0,y:6.6,z:-9.4},cameraZones:[],parSeconds:260,bounds:{min:{x:-24,y:-8,z:-22},max:{x:24,y:30,z:26}},logic:[],entities:[{type:"spawn",pos:{x:0,y:0,z:-13},yaw:0},{type:"goal",pos:{x:12,y:0,z:17}},{type:"sign",pos:{x:4,y:0,z:-13},lines:["THE DOCK","mind the cold water"],yaw:Math.PI},{type:"sign",pos:{x:-3.4,y:0,z:-9},lines:["ROUTE THE STARLIGHT","into the telescope"],fg:"#9DB8FF"},{type:"rotor",id:"m1",pos:{x:0,y:0,z:-2},states:2,state:1,kind:"mirror"},{type:"rotor",id:"m2",pos:{x:8,y:0,z:-2},states:2,state:1,kind:"mirror"},{type:"rotor",id:"m3",pos:{x:8,y:0,z:8},states:2,state:0,kind:"mirror"},{type:"rotor",id:"m4",pos:{x:-8,y:0,z:8},states:2,state:0,kind:"mirror"},{type:"rotor",id:"m5",pos:{x:-8,y:0,z:14},states:2,state:1,kind:"mirror"},{type:"wisp",pos:{x:4,y:1,z:3},radius:2.4},{type:"wisp",pos:{x:-3,y:1.2,z:11},radius:2.6},{type:"letterPiece",pos:{x:0,y:.4,z:8}},{type:"secretWall",pos:{x:4,y:-1.2,z:3.9},size:{x:4.4,y:2.2,z:.5},color:2765650},{type:"weaponPickup",weapon:"ankh",pos:{x:4,y:-2.1,z:.2}},{type:"sign",pos:{x:5.5,y:-2.4,z:2.6},lines:["the safety-pin tattoo","ascended. she still hates it."],fg:"#CBB7E8"},{type:"goldenDuck",id:14,pos:{x:2.6,y:-1.9,z:.2}},{type:"goldenDuck",id:13,pos:{x:0,y:1,z:16}},{type:"goldenDuck",id:15,pos:{x:17,y:.6,z:8},needs:"ankh"},{type:"hazard",kind:"water",shape:{pos:{x:0,y:-2.8,z:4},size:{x:80,y:1.2,z:70}}},{type:"pearl",pos:{x:0,y:.3,z:-6}},{type:"pearl",pos:{x:4,y:.3,z:-2}},{type:"pearl",pos:{x:8,y:.3,z:4}},{type:"pearl",pos:{x:0,y:.3,z:8}},{type:"pearl",pos:{x:-8,y:.3,z:11}},{type:"pearl",pos:{x:6,y:.3,z:14}}]}}const N0={px:[1,0],nx:[-1,0],pz:[0,1],nz:[0,-1]},F0={pz:"px",nz:"nx",px:"pz",nx:"nz"},O0={pz:"nx",nz:"px",px:"nz",nx:"pz"};function k0(i,t,e,n,s=60,r=1.1){const o=[{...i}];let a={...i},c=t;const l=new Set;for(let h=0;h<12;h++){const[d,u]=N0[c];let p=1/0,g=null;for(const _ of e){if(l.has(_))continue;const m=_.pos.x-a.x,f=_.pos.z-a.z,E=m*d+f*u,b=Math.abs(m*u-f*d);E>.4&&E<p&&b<r&&(p=E,g=_)}{const _=n.x-a.x,m=n.z-a.z,f=_*d+m*u,E=Math.abs(_*u-m*d);if(f>.4&&E<r&&f<p)return o.push({x:a.x+d*f,z:a.z+u*f}),{points:o,hitTarget:!0}}if(!g||p>s)return o.push({x:a.x+d*Math.min(s,24),z:a.z+u*Math.min(s,24)}),{points:o,hitTarget:!1};a={x:g.pos.x,z:g.pos.z},o.push({...a}),l.add(g),c=g.state%2===0?F0[c]:O0[c]}return{points:o,hitTarget:!1}}class B0{constructor(t,e=O.star){this.y=t,this.color=e}group=new Ht;segments=[];render(t){for(;this.segments.length<t.points.length-1;){const e=new et(new Yt(.09,.09,1),_e(this.color,2.4));this.group.add(e),this.segments.push(e)}for(let e=0;e<this.segments.length;e++){const n=this.segments[e];if(e>=t.points.length-1){n.visible=!1;continue}const s=t.points[e],r=t.points[e+1],o=Math.hypot(r.x-s.x,r.z-s.z);n.visible=o>.01,n.scale.z=o,n.position.set((s.x+r.x)/2,this.y,(s.z+r.z)/2),n.rotation.y=Math.atan2(r.x-s.x,r.z-s.z)}}}class H0 extends xi{beam=new B0(1.1);solved=!1;constellation=null;goalBlocker;constructor(t,e=[]){super(t,z0(),e),this.scene.add(this.beam.group),this.goalBlocker=this.world.addCollider({kind:"box",center:new T(10.2,1,14),half:new T(.4,2,2.6),yaw:0,enabled:!0})}onUpdate(t){const e={};for(const s of this.rotors)e[s.id]=s.state;const n=k0(I0,"pz",U0(e),Pr);if(this.beam.render(n),n.hitTarget&&!this.solved){this.solved=!0,this.goalBlocker.enabled=!1;const s=Object.keys(uc).every(r=>e[r]===uc[r]);this.playIgnition(n,s)}}playIgnition(t,e){this.ctx.audio.play("sparkle",.8);const n=new T(Pr.x,1.4,Pr.z),s=new T(0,20,40);this.igniteConstellation(),this.constellation&&this.constellation.children.forEach((r,o)=>{r.visible=!1,setTimeout(()=>{r.visible=!0,o%5===0&&this.ctx.audio.play("ding",.3,1+o*.02)},1400+o*90)}),t.points.forEach((r,o)=>{setTimeout(()=>{this.fx.burst(new T(r.x,1.2,r.z),30,{colors:[16774872,10336511],speed:2.4,up:2,life:.8}),this.ctx.audio.play("pop",.4,1+o*.08)},250*o)}),this.cutscene=new Kn([{t:0,cam:{pos:n.clone().add(new T(-3,1.2,-4)),look:n,fov:46}},{t:.8,cam:{pos:new T(0,6,-4),look:s,fov:60},glide:2.4},{t:3.4,do:()=>{this.ctx.hud.toast(e?"THE SKY REMEMBERS.":"AN UNCONVENTIONAL ROUTING. RESPECT.",3),this.ctx.audio.play("win",.6)}}],5.6,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.camera.snapTo(this.player.pos)})}igniteConstellation(){if(this.constellation)return;this.constellation=new Ht;const t=n=>{const s=16*Math.sin(n)**3,r=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);return[s,r]};for(let n=0;n<26;n++){const[s,r]=t(n/26*Math.PI*2),o=new et(new be(.28,8,6),_e(O.star,3));o.position.set(s*.9,18+r*.9,40),this.constellation.add(o)}const e=new Dn(O.heartNeon,300,80,1.4);e.position.set(0,18,38),this.constellation.add(e),this.scene.add(this.constellation)}}const An={x:0,z:18},G0=[{id:"sk1",x:-8,z:6},{id:"sk2",x:0,z:2},{id:"sk3",x:9,z:8}];function V0(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:44,y:.5,z:52},color:1386543}),i.push({kind:"box",pos:{x:0,y:1.2,z:18},size:{x:6,y:2.4,z:5},color:3817557}),i.push({kind:"box",pos:{x:0,y:.6,z:24},size:{x:10,y:1.2,z:4},color:1386543});for(const[e,n,s]of[[-10,-2,2.2],[6,-6,1.8],[12,2,2.6],[-14,10,2],[-4,12,1.6],[10,14,2]])i.push({kind:"box",pos:{x:e,y:s/2,z:n},size:{x:s,y:s,z:s},color:3225935});return i.push({kind:"box",pos:{x:18,y:-.15,z:-8},size:{x:8,y:.3,z:3},color:4016747,invisible:!0}),i.push({kind:"box",pos:{x:24,y:-.25,z:-8},size:{x:6,y:.5,z:8},color:3225935}),{id:"ch6",name:"TWILIGHT FOREST",tagline:"he sparkles. that's not a personality.",skyGlow:14542832,fogDensity:.035,prims:i,cameraOffset:{x:0,y:6,z:-8.8},cameraZones:[{min:{x:-20,y:-1,z:-14},max:{x:20,y:4,z:14},offset:{x:0,y:4.6,z:-7.6},fov:58}],parSeconds:260,bounds:{min:{x:-24,y:-6,z:-20},max:{x:30,y:30,z:30}},logic:[],entities:[{type:"spawn",pos:{x:0,y:0,z:-16},yaw:0},{type:"goal",pos:{x:0,y:1.2,z:24}},{type:"sign",pos:{x:5,y:0,z:-14},lines:["TWILIGHT FOREST","sparkle warning: severe"],yaw:Math.PI,fg:"#DDE7F0"},{type:"carry",id:"s1",pos:{x:-14,y:0,z:-8},kind:"mirrorShield",weight:2},{type:"carry",id:"s2",pos:{x:14,y:0,z:-2},kind:"mirrorShield",weight:2},{type:"carry",id:"s3",pos:{x:-6,y:0,z:14},kind:"mirrorShield",weight:2},{type:"wisp",pos:{x:-6,y:1,z:2},radius:3},{type:"wisp",pos:{x:8,y:1.2,z:10},radius:2.4},{type:"wisp",pos:{x:2,y:1,z:-8},radius:3.4},{type:"letterPiece",pos:{x:-18,y:.4,z:4}},{type:"goldenDuck",id:17,pos:{x:24,y:.5,z:-8}},{type:"polaroid",pos:{x:26,y:1.2,z:-10},photo:"assets/photos/bentley.jpeg",yaw:-.8},{type:"pearl",pos:{x:23,y:.5,z:-6}},{type:"pearl",pos:{x:25,y:.5,z:-6}},{type:"sign",pos:{x:24,y:0,z:-11},lines:["GLITTER STASH","he has a problem."],fg:"#DDE7F0"},{type:"goldenDuck",id:16,pos:{x:12,y:3,z:2}},{type:"goldenDuck",id:18,pos:{x:-14,y:4.5,z:10},needs:"whistle"},{type:"pearl",pos:{x:0,y:.4,z:-10}},{type:"pearl",pos:{x:-10,y:.4,z:0}},{type:"pearl",pos:{x:10,y:.4,z:6}},{type:"pearl",pos:{x:0,y:.4,z:10}}]}}class W0 extends xi{edward;beamArm;sweepAngle=0;reflections=0;reflectedThisPass=new Set;lastSector=0;sockets=[];yeeted=!1;goalBlocker;constructor(t,e=[]){super(t,V0(),e);const n=(()=>{let a=11;return()=>(a=a*16807%2147483647)/2147483647})();for(let a=0;a<40;a++){const c=$c(2.5+n()*3.5,1915445),l=-21+n()*42,h=-18+n()*40;Math.hypot(l-An.x,h-An.z)<7||Math.abs(l)+Math.abs(h)<6||(c.position.set(l,0,h),this.scene.add(c))}this.edward=new Ht;const s=new et(new Yt(.6,1.5,.4),At(2764613,{flatShading:!1}));s.position.y=3.15,this.edward.add(s);const r=new et(new Yt(.4,.45,.4),At(O.edwardPale,{gloss:.9,rim:.6,flatShading:!1}));r.position.y=4.1,this.edward.add(r);const o=new et(new Yt(.44,.18,.44),At(7034163));o.position.y=4.38,this.edward.add(o),this.edward.position.set(An.x,0,An.z),this.scene.add(this.edward),this.beamArm=new et(new Yt(.24,.24,30),_e(O.edwardPale,2)),this.beamArm.position.set(An.x,1.2,An.z),this.scene.add(this.beamArm);for(const a of G0){const c=new et(new on(.8,.09,8,18),new vn({color:O.grandmaLilac,transparent:!0,opacity:.16}));c.rotation.x=Math.PI/2,c.position.set(a.x,.12,a.z),this.scene.add(c),this.sockets.push({id:a.id,pos:new T(a.x,0,a.z),ring:c,filled:!1})}this.goalBlocker=this.world.addCollider({kind:"box",center:new T(0,1.5,21.4),half:new T(5,2.5,.5),yaw:0,enabled:!0})}onUpdate(t){if(this.yeeted)return;const e=this.weapons.ankhActive&&this.weapons.equipped==="ankh";for(const a of this.sockets)if(a.ring.material.opacity=a.filled?.9:e?.85:.16,!a.filled){const c=this.im.carriables.find(l=>l.kind==="mirrorShield"&&!l.carried&&l.pos.distanceTo(a.pos)<1.2);c&&(a.filled=!0,c.pos.set(a.pos.x,0,a.pos.z),this.ctx.audio.play("correct",.6),this.ctx.hud.toast(`SHIELD SET. ${this.sockets.filter(l=>l.filled).length}/3`,1.8))}this.sweepAngle+=t*.85;const n=new T(Math.sin(this.sweepAngle),0,Math.cos(this.sweepAngle));this.beamArm.position.set(An.x+n.x*15,1.2,An.z+n.z*15),this.beamArm.rotation.y=Math.atan2(n.x,n.z);const s=Math.floor(this.sweepAngle/(Math.PI*2));s!==this.lastSector&&(this.lastSector=s,this.reflectedThisPass.clear());const r=this.player.pos.clone().sub(this.edward.position).setY(0),o=r.dot(n);if(o>1&&o<30){const a=Math.abs(r.x*n.z-r.z*n.x),c=this.world.groundAt(this.player.pos.x,this.player.pos.z,this.player.pos.y+2.5)>this.player.pos.y+.5;a<.9&&!c&&this.player.pos.y<2.5&&this.hurt("sparkle");for(const l of this.sockets){if(!l.filled||this.reflectedThisPass.has(l.id))continue;const h=l.pos.clone().sub(this.edward.position).setY(0),d=h.dot(n),u=Math.abs(h.x*n.z-h.z*n.x);d>1&&d<30&&u<1.1&&(this.reflectedThisPass.add(l.id),this.reflections++,this.ctx.audio.play("sparkle",.8,.8),this.ctx.camera.kick(.35),this.ctx.hud.toast(`REFLECTED. ${this.reflections}/3`,1.6),this.reflections>=3&&this.yeet())}}}yeet(){this.yeeted=!0,this.goalBlocker.enabled=!1;const t=this.edward.position.clone(),e=t.clone().setY(3.4);this.cutscene=new Kn([{t:0,cam:{pos:t.clone().add(new T(0,2.2,-8)),look:e,fov:44},slowmo:.2},{t:.1,cam:{pos:t.clone().add(new T(-2,2.6,-5)),look:e,fov:38},glide:1.2},{t:1.3,flash:1,slowmo:1,do:()=>{this.beamArm.visible=!1,this.ctx.audio.play("impact",.7),this.fx.burst(e,220,{colors:[14542832,16777215],speed:7,up:6,gravity:2,life:1.6});const n=performance.now(),s=()=>{const r=(performance.now()-n)/1e3;r>2.6||!this.edward.parent||(this.edward.position.set(t.x+r*9,r*15-2.4*r*r,t.z+r*16),this.edward.rotation.z+=.14,requestAnimationFrame(s))};s()}},{t:1.45,cam:{pos:t.clone().add(new T(-9,3,-10)),look:t.clone().add(new T(12,16,20)),fov:58},glide:1.6},{t:2.6,do:()=>{this.ctx.audio.play("howl",.8),this.fx.burst(t.clone().add(new T(20,22,34)),40,{colors:[16777215],speed:2,up:0,gravity:.5,life:1}),this.ctx.hud.toast("EDWARD HAS LEFT THE TREELINE.",3)}}],4.4,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.camera.snapTo(this.player.pos)})}}function X0(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:46,y:.5,z:34},color:1844296}),i.push({kind:"box",pos:{x:18,y:-.25,z:-6},size:{x:12,y:.5,z:8},color:1844296}),i.push({kind:"box",pos:{x:0,y:-.25,z:19},size:{x:8,y:.5,z:8},color:O.concrete}),i.push({kind:"box",pos:{x:0,y:1.6,z:-17},size:{x:46,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-12.75,y:1.6,z:17},size:{x:20.5,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:12.75,y:1.6,z:17},size:{x:20.5,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-23,y:1.6,z:0},size:{x:.8,y:3.2,z:34},color:2568282}),i.push({kind:"box",pos:{x:23,y:1.6,z:5.25},size:{x:.8,y:3.2,z:23.5},color:2568282}),i.push({kind:"box",pos:{x:23,y:1.6,z:-12.75},size:{x:.8,y:3.2,z:8.5},color:2568282}),i.push({kind:"box",pos:{x:24.4,y:1.6,z:-6},size:{x:.8,y:3.2,z:9},color:2568282}),i.push({kind:"box",pos:{x:18.7,y:1.6,z:-1.6},size:{x:12,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:18.7,y:1.6,z:-10.4},size:{x:12,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-19.5,y:2.85,z:0},size:{x:6,y:.4,z:8},color:3094614}),i.push({kind:"box",pos:{x:0,y:4.6,z:0},size:{x:40,y:.3,z:1.2},color:3292003}),i.push({kind:"box",pos:{x:-14,y:3.4,z:3.5},size:{x:1.6,y:.3,z:1.6},color:3752558}),i.push({kind:"box",pos:{x:-9,y:4,z:1.8},size:{x:1.6,y:.3,z:1.6},color:3752558}),i.push({kind:"box",pos:{x:-19,y:5.4,z:-13},size:{x:4,y:.4,z:4},color:3752558});for(const n of[-10,-6,-2])i.push({kind:"box",pos:{x:8,y:.35,z:n},size:{x:2.6,y:.7,z:1},color:3094614});return i.push({kind:"box",pos:{x:14,y:.8,z:10},size:{x:6,y:1.6,z:1.2},color:3094614}),{id:"ch1",name:"THE GYM",tagline:"it started at the gym.",skyGlow:O.ramenGold,fogDensity:.012,prims:i,cameraOffset:{x:0,y:6.9,z:-8.2},cameraZones:[{min:{x:-23,y:-1,z:-10},max:{x:-8,y:4,z:10},offset:{x:4,y:8.5,z:-8},fov:50}],parSeconds:170,bounds:{min:{x:-30,y:-6,z:-24},max:{x:30,y:30,z:26}},logic:[{when:{plates:["pl","pr"]},open:"lift1"},{when:{key:!0},open:"gate"},{when:{switches:["st1"]},open:"bonus"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-11},yaw:0},{type:"goal",pos:{x:0,y:0,z:20}},{type:"sign",pos:{x:5,y:0,z:-13},lines:["LAINIE FITNESS","members: 2 (+1 dog)"],yaw:Math.PI},{type:"plate",id:"pl",pos:{x:-14,y:0,z:-4},needWeight:3,exactWeight:!0},{type:"plate",id:"pr",pos:{x:-14,y:0,z:4},needWeight:3,exactWeight:!0},{type:"carry",id:"d1",pos:{x:-9,y:0,z:-8},kind:"dumbbell",weight:1},{type:"carry",id:"d2",pos:{x:-7,y:0,z:1},kind:"dumbbell",weight:2},{type:"carry",id:"d3",pos:{x:-17,y:0,z:9},kind:"dumbbell",weight:3},{type:"carry",id:"d4",pos:{x:-5,y:0,z:7},kind:"dumbbell",weight:1},{type:"sign",pos:{x:-14,y:0,z:-9.5},lines:["BALANCE.","both sides. exactly."],fg:"#33FF88"},{type:"lift",id:"lift1",pos:{x:-11,y:.2,z:0},size:{x:2.6,y:.4,z:2.6},to:{x:-11,y:2.8,z:0},color:3752558},{type:"carry",id:"key",pos:{x:-19.5,y:3.1,z:0},kind:"key"},{type:"door",id:"gate",pos:{x:0,y:1.5,z:17},size:{x:4,y:3,z:.7},color:O.heartNeon,needsKey:!0},{type:"duck",pos:{x:4,y:0,z:4},patrol:[{x:4,y:0,z:4},{x:10,y:0,z:4},{x:10,y:0,z:-2},{x:4,y:0,z:-2}]},{type:"duck",pos:{x:-4,y:0,z:10},patrol:[{x:-4,y:0,z:10},{x:4,y:0,z:12}],speed:3},{type:"letterPiece",pos:{x:0,y:.6,z:0}},{type:"secretWall",pos:{x:23,y:1.6,z:-6},size:{x:.8,y:3.2,z:4.9},color:2568282},{type:"weaponPickup",weapon:"ball",pos:{x:20,y:0,z:-6}},{type:"polaroid",pos:{x:22.5,y:1.4,z:-8.8},photo:"assets/photos/couple_mirror1.jpeg",yaw:-.6},{type:"goldenDuck",id:2,pos:{x:17,y:.4,z:-8.5}},{type:"goldenDuck",id:1,pos:{x:0,y:5.2,z:0}},{type:"goldenDuck",id:3,pos:{x:-19,y:6,z:-13},needs:"boba"},{type:"bobaSpot",pos:{x:-19,y:3.6,z:-9.5}},{type:"bobaSpot",pos:{x:-19,y:4.6,z:-11.2}},{type:"switchTarget",id:"st1",pos:{x:12,y:2.6,z:15}},{type:"door",id:"bonus",pos:{x:16,y:1.2,z:16.6},size:{x:2.2,y:2.4,z:.7},color:O.ramenGold},{type:"pearl",pos:{x:16,y:.5,z:18.5}},{type:"pearl",pos:{x:17,y:.5,z:18.5}},{type:"pearl",pos:{x:15,y:.5,z:18.5}},{type:"pearl",pos:{x:-3,y:.4,z:-8}},{type:"pearl",pos:{x:-8,y:.4,z:-5}},{type:"pearl",pos:{x:-11,y:3.4,z:0}},{type:"pearl",pos:{x:-14,y:4,z:3.5}},{type:"pearl",pos:{x:-9,y:4.6,z:1.8}},{type:"pearl",pos:{x:6,y:.4,z:12}}]}}function j0(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:16,y:.5,z:60},color:1580862}),i.push({kind:"box",pos:{x:16,y:-.25,z:18},size:{x:20,y:.5,z:14},color:1580862});const n=[[-11,2.2,-20,6,10],[-11,1.8,-6,6,8],[-11,2.6,8,6,9],[-11,2,20,6,8],[11,2.2,-22,6,8],[11,1.6,-10,6,7],[11,2.4,2,6,8],[16,2.2,27.5,16,5],[27.5,2,18,5,12]];for(const[s,r,o,a,c]of n)i.push({kind:"box",pos:{x:s,y:r/2,z:o},size:{x:a,y:r,z:c},color:2305104});return i.push({kind:"box",pos:{x:-7.9,y:2.4,z:8},size:{x:.2,y:1,z:1.4},color:O.ramenGold,emissive:O.ramenGold,emissiveIntensity:1.6,ghost:!0}),i.push({kind:"box",pos:{x:22,y:1.6,z:12.4},size:{x:8,y:3.2,z:.8},color:2305104}),i.push({kind:"box",pos:{x:22,y:1.6,z:23.6},size:{x:8,y:3.2,z:.8},color:2305104}),i.push({kind:"box",pos:{x:25.6,y:1.6,z:18},size:{x:.8,y:3.2,z:12},color:2305104}),i.push({kind:"box",pos:{x:0,y:-.25,z:36},size:{x:10,y:.5,z:12},color:O.concrete}),i.push({kind:"box",pos:{x:-13,y:-.25,z:-14},size:{x:10,y:.5,z:10},color:1580862}),{id:"ch2",name:"LINCOLN AFTER DARK",tagline:"population: small. exits: one.",skyGlow:O.taroPurple,fogDensity:.02,prims:i,cameraOffset:{x:0,y:7.2,z:-8.6},cameraZones:[{min:{x:8,y:-1,z:12},max:{x:28,y:4,z:24},offset:{x:-5,y:6.5,z:-6},fov:52}],parSeconds:200,bounds:{min:{x:-22,y:-6,z:-32},max:{x:32,y:30,z:44}},logic:[{when:{rotors:{r1:1,r2:0,r3:3,r4:2}},open:"exit"},{when:{switches:["jar1"]},open:"shopdoor"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-26},yaw:0},{type:"goal",pos:{x:0,y:0,z:40}},{type:"sign",pos:{x:4.5,y:0,z:-24},lines:["LINCOLN, MAINE","famous for: nothing"],yaw:Math.PI},{type:"sign",pos:{x:-5,y:0,z:30},lines:["ONE (1) EXIT","power required"],fg:"#33FF88"},{type:"rotor",id:"r1",pos:{x:-4,y:0,z:-14},states:4,state:3,kind:"barrier"},{type:"rotor",id:"r2",pos:{x:4,y:0,z:-2},states:4,state:2,kind:"barrier"},{type:"rotor",id:"r3",pos:{x:-4,y:0,z:10},states:4,state:1,kind:"barrier"},{type:"rotor",id:"r4",pos:{x:3,y:0,z:24},states:4,state:0,kind:"barrier"},{type:"door",id:"exit",pos:{x:0,y:1.5,z:33},size:{x:6,y:3,z:.7},color:O.crtGreen},{type:"hazard",kind:"mud",shape:{pos:{x:-3,y:0,z:-8},size:{x:5,y:.4,z:4}}},{type:"hazard",kind:"mud",shape:{pos:{x:5,y:0,z:5},size:{x:5,y:.4,z:5}}},{type:"hazard",kind:"mud",shape:{pos:{x:-2,y:0,z:17},size:{x:6,y:.4,z:4}}},{type:"duck",pos:{x:0,y:0,z:6},patrol:[{x:-5,y:0,z:6},{x:5,y:0,z:6}]},{type:"duck",pos:{x:2,y:0,z:20},patrol:[{x:2,y:0,z:20},{x:-4,y:0,z:26},{x:4,y:0,z:28}],speed:2.8},{type:"duck",pos:{x:14,y:0,z:18},patrol:[{x:12,y:0,z:15},{x:20,y:0,z:21}],speed:3.2},{type:"switchTarget",id:"jar1",pos:{x:21,y:3.8,z:13}},{type:"door",id:"shopdoor",pos:{x:18.4,y:1.4,z:18},size:{x:.7,y:2.8,z:4},color:O.taroPurple},{type:"weaponPickup",weapon:"boba",pos:{x:22.5,y:0,z:18}},{type:"sign",pos:{x:20,y:0,z:10},lines:["BOBA SHOP","opening: never"],fg:"#B388EB",yaw:.4},{type:"pearl",pos:{x:24,y:.5,z:15}},{type:"pearl",pos:{x:24,y:.5,z:21}},{type:"letterPiece",pos:{x:-6.5,y:.5,z:8}},{type:"secretWall",pos:{x:-13,y:1.6,z:-9.6},size:{x:8,y:3.2,z:.8},color:2305104},{type:"polaroid",pos:{x:-13,y:1.3,z:-16},photo:"assets/photos/couple_mirror2.jpeg"},{type:"goldenDuck",id:5,pos:{x:-16,y:.4,z:-16}},{type:"pearl",pos:{x:-10,y:.5,z:-16}},{type:"pearl",pos:{x:-12,y:.5,z:-17}},{type:"goldenDuck",id:4,pos:{x:11,y:3,z:2}},{type:"goldenDuck",id:6,pos:{x:-11,y:6,z:8},needs:"whistle"},{type:"carry",id:"block1",pos:{x:7,y:0,z:-3},kind:"block",weight:2},{type:"pearl",pos:{x:0,y:.4,z:-18}},{type:"pearl",pos:{x:-2,y:.4,z:0}},{type:"pearl",pos:{x:3,y:.4,z:14}},{type:"pearl",pos:{x:0,y:.4,z:28}},{type:"pearl",pos:{x:11,y:3.2,z:0}}]}}function q0(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:-12},size:{x:18,y:.5,z:24},color:1844032}),i.push({kind:"box",pos:{x:0,y:-.25,z:12},size:{x:8,y:.5,z:24},color:O.concrete}),i.push({kind:"box",pos:{x:0,y:-.25,z:32},size:{x:14,y:.5,z:16},color:1844032}),i.push({kind:"box",pos:{x:0,y:-4,z:12},size:{x:60,y:.5,z:24},color:O.dockWater,ghost:!0});for(const e of[-1,1])i.push({kind:"box",pos:{x:3.8*e,y:.5,z:12},size:{x:.4,y:1,z:24},color:3818600});return i.push({kind:"box",pos:{x:6.5,y:-2.2,z:10},size:{x:5,y:.4,z:6},color:2765650}),i.push({kind:"box",pos:{x:3.4,y:1.4,z:-1},size:{x:2.6,y:2.8,z:2.6},color:3818600}),i.push({kind:"box",pos:{x:3.4,y:3,z:-1},size:{x:3.2,y:.3,z:3.2},color:5857663}),i.push({kind:"box",pos:{x:7,y:.5,z:-4},size:{x:1.4,y:1,z:1.4},color:4864808}),i.push({kind:"box",pos:{x:6,y:1,z:-2},size:{x:1.4,y:2,z:1.4},color:4864808}),i.push({kind:"cylinder",pos:{x:-6,y:1.5,z:-6},size:{x:1,y:3,z:1},color:3818600}),{id:"ch3",name:"HAYDEN'S TOLL BRIDGE",tagline:"this dash will be invoiced.",skyGlow:O.ramenGold,fogDensity:.016,prims:i,cameraOffset:{x:0,y:7,z:-8.6},cameraZones:[{min:{x:-4,y:-1,z:2},max:{x:4,y:4,z:24},offset:{x:-9,y:4.5,z:0},fov:54}],parSeconds:210,bounds:{min:{x:-20,y:-8,z:-26},max:{x:20,y:30,z:42}},logic:[{when:{paidExact:{slot:"till",amount:7}},open:"tollgate"},{when:{switches:["jar"]},open:"jarhatch"}],entities:[{type:"spawn",pos:{x:-3,y:0,z:-20},yaw:0},{type:"goal",pos:{x:0,y:0,z:36}},{type:"sign",pos:{x:-5,y:0,z:-3},lines:["TOLL: 7 ⬤ EXACT","itemized: crossing 5,","convenience 1, vibes 1"],fg:"#FFB627"},{type:"sign",pos:{x:5.5,y:0,z:-18},lines:["HAYDEN LLC","no refunds. ever."],yaw:Math.PI},{type:"slot",id:"till",pos:{x:1.4,y:0,z:-1},accepts:"coin"},{type:"door",id:"tollgate",pos:{x:0,y:1.4,z:1},size:{x:7.4,y:2.8,z:.6},color:O.ramenGold},{type:"carry",id:"c1",pos:{x:-6,y:0,z:-14},kind:"coin",weight:0,value:2},{type:"carry",id:"c2",pos:{x:6,y:0,z:-10},kind:"coin",weight:0,value:1},{type:"carry",id:"c3",pos:{x:-6,y:3.2,z:-6},kind:"coin",weight:0,value:2},{type:"carry",id:"c4",pos:{x:3.4,y:3.4,z:-1},kind:"coin",weight:0,value:2},{type:"carry",id:"c5",pos:{x:0,y:0,z:-7},kind:"coin",weight:0,value:5},{type:"switchTarget",id:"jar",pos:{x:-6,y:3.6,z:-6}},{type:"door",id:"jarhatch",pos:{x:-6,y:.9,z:-5.2},size:{x:1.2,y:1.8,z:.3},color:5857663},{type:"drone",pos:{x:0,y:0,z:-6}},{type:"duck",pos:{x:-2,y:0,z:28},patrol:[{x:-4,y:0,z:26},{x:4,y:0,z:30}]},{type:"duck",pos:{x:2,y:0,z:34},patrol:[{x:4,y:0,z:32},{x:-4,y:0,z:36}],speed:3},{type:"letterPiece",pos:{x:0,y:.5,z:12}},{type:"secretWall",pos:{x:6.5,y:-1,z:13.2},size:{x:5,y:2.2,z:.6},color:2765650},{type:"goldenDuck",id:8,pos:{x:6.5,y:-1.8,z:8}},{type:"pearl",pos:{x:5.5,y:-1.8,z:9}},{type:"pearl",pos:{x:7.5,y:-1.8,z:9}},{type:"pearl",pos:{x:6.5,y:-1.8,z:11}},{type:"sign",pos:{x:6.5,y:-2.2,z:12},lines:["HAYDEN'S VAULT","shhh."],fg:"#FFB627"},{type:"goldenDuck",id:7,pos:{x:3.4,y:3.9,z:-1}},{type:"goldenDuck",id:9,pos:{x:-8,y:-1.5,z:16},needs:"ankh"},{type:"hazard",kind:"water",shape:{pos:{x:0,y:-3.6,z:12},size:{x:60,y:1.4,z:24}}},{type:"pearl",pos:{x:0,y:.4,z:-16}},{type:"pearl",pos:{x:2,y:.4,z:6}},{type:"pearl",pos:{x:-2,y:.4,z:18}},{type:"pearl",pos:{x:0,y:.4,z:26}}]}}const Dr=["ok. ducks handled. letter recovered.","lainie —","from the gym to the dock to whatever this game is,","you are my favorite person,","and i love you more than the ducks.","(the ducks demanded a recount.)","— corbin"];function Y0(){return{id:"ch7",name:"SUNRISE POINT",tagline:"one more stop.",skyGlow:16751186,fogDensity:.012,prims:[{kind:"box",pos:{x:0,y:-.25,z:0},size:{x:14,y:.5,z:60},color:O.asphalt},{kind:"box",pos:{x:0,y:-.25,z:34},size:{x:26,y:.5,z:14},color:O.concrete},{kind:"box",pos:{x:0,y:.4,z:40.6},size:{x:26,y:.8,z:.8},color:3818600},{kind:"box",pos:{x:-12.6,y:.4,z:34},size:{x:.8,y:.8,z:14},color:3818600},{kind:"box",pos:{x:12.6,y:.4,z:34},size:{x:.8,y:.8,z:14},color:3818600}],entities:[{type:"spawn",pos:{x:-2,y:0,z:6},yaw:0}],cameraZones:[],cameraOffset:{x:0,y:5.6,z:-8},parSeconds:0,bounds:{min:{x:-30,y:-8,z:-30},max:{x:30,y:40,z:60}},logic:[]}}function K0(){const i=new Ht,t=new et(new Yt(.42,.62,.3),At(O.heartNeon,{flatShading:!1}));t.position.y=.85,i.add(t);const e=new et(new Yt(.34,.34,.32),At(15780008,{flatShading:!1}));e.position.y=1.35,i.add(e);const n=new et(new Yt(.38,.16,.36),At(16111470,{flatShading:!1}));n.position.y=1.53,i.add(n);const s=new et(new Yt(.12,.4,.12),At(16111470,{flatShading:!1}));s.position.set(0,1.38,-.24),s.rotation.x=.3,i.add(s);for(const r of[-1,1]){const o=new et(new on(.06,.012,6,10),At(2765650,{gloss:.6,flatShading:!1}));o.position.set(.08*r,1.37,.17),i.add(o)}return i}class $0{constructor(t){this.ctx=t;const e=Y0();this.world=new jo(e),this.scene.add(this.world.group),this.scene.fog=new Pi(O.midnight,e.fogDensity),this.sky=new Ws,this.sky.set({top:O.midnight,horizon:O.horizonGlow,glow:e.skyGlow}),this.scene.add(this.sky.group),this.scene.add(new Gs(10135773,2760760,1.7));const n=new Wo(16763296,1.8);n.position.set(0,20,60),this.scene.add(n);for(const c of[-8,0,8]){const l=new Dn(O.ramenGold,30,14,1.6);l.position.set(c,2.4,39),this.scene.add(l)}this.car=new Jc,this.car.place(3,24,0),this.scene.add(this.car.rig.group),this.lainie=K0(),this.lainie.position.set(6,0,30),this.scene.add(this.lainie),this.player=new Yo,this.player.applyCosmetics(t.save.data.gear.owned,!!t.save.data.secrets.halo),this.player.spawnAt(-2,0,6,0),this.scene.add(this.player.rig.group),this.easel=new Ht;const s=new et(new de(.05,.05,2,6),At(4864808));s.position.set(-.5,1,.2),s.rotation.z=.2;const r=s.clone();r.position.x=.5,r.rotation.z=-.2;const o=new et(new Yt(1.7,1.3,.08),At(16118504,{rim:.1}));o.position.set(0,1.5,0),this.easel.add(s,r,o),this.easel.position.copy(this.easelPos),this.easel.rotation.y=Math.PI,this.scene.add(this.easel);const a=Fs(["SUNRISE POINT","almost there."],{fg:"#FF9A52"});a.position.set(5,0,8),a.rotation.y=Math.PI,this.scene.add(a),this.fx=new Xs(this.scene),t.camera.configure(e.cameraZones,e.cameraOffset),t.camera.snapTo(this.player.pos),t.hud.chapterCard("SUNRISE POINT","one more stop."),t.audio.play("levelstart",.5),new URLSearchParams(location.search).has("debug")&&(window.__fin=()=>({pos:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z},assembled:this.assembled,cutscene:!!this.cutscene,cutsceneDone:this.cutscene?.done??null,letterShown:this.letterShown}))}scene=new $i;world;player;car;sky;fx;cutscene=null;easel;easelPos=new T(0,0,36);assembled=!1;sunrise=0;sunriseTarget=0;lainie;update(t){if(this.fx.update(t),this.sky.update(t),this.sunrise!==this.sunriseTarget&&(this.sunrise=me.damp(this.sunrise,this.sunriseTarget,.35,t),this.sky.setSunrise(this.sunrise),this.ctx.cinema.setWarm(this.sunrise*.85),this.scene.fog.color.lerpColors(new Dt(O.midnight),new Dt(9062970),this.sunrise)),this.cutscene&&!this.cutscene.done){this.cutscene.update(t);return}if(this.assembled)return;const e=this.ctx.input.poll();this.player.update(t,e,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.3);const n=this.player.pos.z>30&&this.player.pos.distanceTo(this.easelPos)<9,s=this.ctx.save.data.pieces.length;this.ctx.hud.prompt(n?`[E] ASSEMBLE THE LETTER (${s}/7 PIECES)`:null),n&&e.interact&&(s<6?(this.ctx.hud.toast(`SOME PIECES ARE STILL HIDING. (${s}/7 — check the chapters)`,3.2),this.ctx.audio.play("wrong",.5)):(this.assembled=!0,this.playFinale(s))),this.ctx.camera.update(t,this.player.pos,new T(this.player.state.vx,0,this.player.state.vz),e.camNudge),e.pause&&this.ctx.togglePause()}playFinale(t){this.ctx.hud.prompt(null);const e=this.easelPos.clone(),n=(o,a,c)=>new T(o,a,c),s=()=>{for(let o=0;o<7;o++){const a=qo(),c=o<t;a.scale.setScalar(.55),a.position.set((Math.random()-.5)*30,8+o*2,e.z-20-o*4),this.scene.add(a);const l=n(e.x-.5+o%3*.5,1.25+Math.floor(o/3)*.42,e.z-.08),h=a.position.clone(),d=performance.now()+o*420,u=()=>{const p=(performance.now()-d)/700;if(p<0){requestAnimationFrame(u);return}if(p>=1){a.position.copy(l),a.rotation.set(Math.PI/2,0,0),c||(a.visible=!1),this.fx.burst(l,12,{colors:[O.heartNeon],speed:1.4,up:1,life:.6}),this.ctx.audio.play("pop",.4,1+o*.06);return}a.position.lerpVectors(h,l,p*p),a.rotation.x+=.1,requestAnimationFrame(u)};u()}},r=()=>{for(let o=0;o<30;o++){const a=Ti(),c=Math.floor(o/2),l=o%2===0?1:-1;a.group.position.set(l*c*1.4,10+c*.3,e.z-60),this.scene.add(a.group);const h=performance.now(),d=()=>{const u=(performance.now()-h)/1e3;if(u>7){a.group.removeFromParent();return}a.group.position.z+=.35,a.wingL.rotation.z=.6+Math.sin(u*14+o)*.5,a.wingR.rotation.z=-.6-Math.sin(u*14+o)*.5,requestAnimationFrame(d)};d()}this.ctx.audio.play("quack",.6,1.1)};this.ctx.audio.musicVolume(.45),this.cutscene=new Kn([{t:0,cam:{pos:n(e.x-1.6,1.6,e.z-2.4),look:n(e.x,1.5,e.z),fov:42},do:s},{t:4.6,cam:{pos:n(3,1.4,16),look:n(3,.8,24),fov:46},glide:.01,do:()=>{this.player.rig.group.position.set(3.4,.75,23.4),this.player.rig.group.rotation.y=0,this.lainie.position.set(2.4,.5,23.6),this.lainie.rotation.y=0,this.car.setHeadlights(!0),this.ctx.audio.engine(!0,.3)}},{t:6.2,cam:{pos:n(-4,2.2,30),look:n(3,1,38),fov:50},glide:2.2,do:()=>{this.sunriseTarget=1;const o=performance.now(),a=()=>{const c=(performance.now()-o)/1e3;if(c>5){this.ctx.audio.engine(!1);return}const l=24+Math.min(10,c*2.6);this.car.rig.group.position.z=l,this.player.rig.group.position.z=l-.6,this.lainie.position.z=l-.4;for(const h of this.car.rig.wheels)h.rotation.x+=.08;requestAnimationFrame(a)};a()}},{t:10.5,cam:{pos:n(0,1.6,30),look:n(0,6,80),fov:58},glide:3.4},{t:12.5,do:()=>{this.ctx.audio.play("fanfare",.7),this.fx.burst(n(0,6,40),500,{colors:[O.heartNeon,O.ramenGold,16777215],speed:8,up:6,gravity:2.4,life:2.6}),r()}},{t:14.5,do:()=>this.showLetter()}],60,this.ctx.camera,this.ctx.cinema,()=>{this.showLetter()})}letterShown=!1;showLetter(){if(this.letterShown)return;this.letterShown=!0,this.ctx.save.patch(a=>{a.chaptersDone.includes("ch7")||a.chaptersDone.push("ch7"),a.secrets.finaleSeen=!0,a.pearls+=200});const t=this.ctx.hud.overlay();t.style.background="rgba(6,9,24,0.35)";const e=new URL("../../assets/photos/couple_beach.jpeg",document.baseURI).href;t.innerHTML=`
      <div style="max-width:min(560px,92vw);text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px">
        <div data-r="letter" style="font-family:'Nunito';font-size:17px;line-height:1.9;text-align:left;min-height:240px;text-transform:lowercase"></div>
        <img src="${e}" alt="us" style="width:min(300px,70vw);border:10px solid #f5f2e8;border-radius:4px;transform:rotate(-2deg);opacity:0;transition:opacity 2.4s" data-r="photo" />
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;opacity:0;transition:opacity 1s" data-r="btns">
          <button class="dj-btn" data-a="hub">BACK TO THE HIGHWAY</button>
          <button class="dj-btn" data-a="site">BACK TO LAINIE.EXE 💌</button>
        </div>
      </div>`;const n=t.querySelector('[data-r="letter"]');let s=0,r=0;const o=()=>{if(s>=Dr.length){t.querySelector('[data-r="photo"]').style.opacity="1",setTimeout(()=>{t.querySelector('[data-r="btns"]').style.opacity="1"},1600);return}const a=Dr[s];r++,r%2===0&&this.ctx.audio.play("type",.12,1+Math.random()*.2),n.innerHTML=Dr.slice(0,s).map(c=>`<div>${c}</div>`).join("")+`<div>${a.slice(0,r)}<span style="opacity:0.5">▌</span></div>`,r>=a.length?(s++,r=0,setTimeout(o,460)):setTimeout(o,34)};o(),t.querySelector('[data-a="hub"]').addEventListener("click",()=>{t.remove(),this.ctx.cinema.setWarm(0),this.ctx.go("hub")}),t.querySelector('[data-a="site"]').addEventListener("click",()=>{location.href=new URL("../../index.html",document.baseURI).href})}dispose(){this.ctx.audio.engine(!1),this.ctx.audio.musicVolume(this.ctx.save.data.settings.musicVolume),this.ctx.cinema.setWarm(0),this.ctx.hud.prompt(null)}}class Z0{constructor(t){this.ctx=t,this.sky=new Ws,this.sky.set({top:1714248,horizon:9067082,glow:O.duck,glowStrength:.3}),this.sky.setSunrise(.45),this.scene.add(this.sky.group),this.scene.fog=new Pi(2761784,.02),this.scene.add(new Gs(13677722,2762824,1.7));const e=new et(new Bs(20,28),At(O.dockWater,{gloss:.6,flatShading:!1,emissive:1716304,emissiveIntensity:.5}));e.rotation.x=-Math.PI/2,this.scene.add(e);const n=new et(new Bo(20,34,28),At(O.grass));n.rotation.x=-Math.PI/2,n.position.y=.02,this.scene.add(n);for(let s=0;s<24;s++){const r=s/24*Math.PI*2,o=new et(new de(.04,.06,1.6+Math.random(),5),At(2968117));o.position.set(Math.cos(r)*(19+Math.random()*2),.8,Math.sin(r)*(19+Math.random()*2)),this.scene.add(o)}this.duck=Ti(),this.duck.group.position.set(0,.05,-14),this.scene.add(this.duck.group),this.fx=new Xs(this.scene),t.camera.configure([],{x:0,y:3,z:-5}),t.camera.snapTo(this.duck.group.position),t.hud.chapterCard("POND ZERO","it explains nothing. on purpose."),t.audio.play("quack",.5)}scene=new $i;duck;sky;fx;cutscene=null;t=0;saluted=!1;update(t){if(this.t+=t,this.fx.update(t),this.sky.update(t),this.cutscene&&!this.cutscene.done){this.cutscene.update(t);return}const e=this.ctx.input.poll(),n=Math.cos(this.ctx.camera.yaw),s=Math.sin(this.ctx.camera.yaw),r=e.moveX*n-e.moveY*s,o=-e.moveX*s-e.moveY*n;this.duck.group.position.x+=r*3*t,this.duck.group.position.z+=o*3*t,this.duck.group.position.y=.05+Math.abs(Math.sin(this.t*8))*.04,Math.hypot(r,o)>.1&&(this.duck.group.rotation.y=Math.atan2(r,o)),this.duck.group.rotation.z=Math.sin(this.t*8)*.08,e.jump,(e.fire||e.pounce)&&this.ctx.audio.play("quack",.6,.9+Math.random()*.3);const a=Math.hypot(this.duck.group.position.x,this.duck.group.position.z);this.ctx.hud.prompt(a<2.5&&!this.saluted?"[E] ...?":null),a<2.5&&e.interact&&!this.saluted&&(this.saluted=!0,this.playStinger()),this.ctx.camera.update(t,this.duck.group.position,new T(r,0,o),e.camNudge),e.pause&&this.ctx.togglePause()}playStinger(){const t=this.duck.group.position.clone();this.cutscene=new Kn([{t:0,cam:{pos:t.clone().add(new T(0,.8,3.4)),look:t.clone().setY(.4),fov:40}},{t:1.2,do:()=>{this.duck.group.rotation.y=Math.PI,this.duck.wingR.rotation.z=-2.4,this.ctx.audio.play("quack",.8,.7)}},{t:3,flash:.8,do:()=>{this.ctx.hud.toast("IT WAS ALWAYS THE DUCKS.",4),this.ctx.audio.play("taskdone",.7),this.ctx.save.patch(e=>{e.secrets.pondzeroDone=!0,e.pearls+=300}),this.fx.burst(t.clone().setY(1),200,{colors:[O.duck,O.ramenGold],speed:5,up:4,life:2})}}],6.5,this.ctx.camera,this.ctx.cinema,()=>{this.ctx.go("hub")})}dispose(){this.ctx.hud.prompt(null)}}const dc={ch1:(i,t)=>new xi(i,X0(),t),ch2:(i,t)=>new xi(i,j0(),t),ch3:(i,t)=>new xi(i,q0(),t),ch4:(i,t)=>new L0(i,t),ch5:(i,t)=>new H0(i,t),ch6:(i,t)=>new W0(i,t),ch7:i=>new $0(i),pondzero:i=>new Z0(i)},Lr=1/120,J0=.1;class Q0{ctx;current=null;currentName="";accumulator=0;lastTime=performance.now();paused=!1;pauseOverlay=null;constructor(){const t=document.getElementById("app"),e=document.createElement("canvas");e.className="game",t.appendChild(e);const n=new Um,s=matchMedia("(pointer: coarse)").matches,r=n.data.tier??(s?"mobile":"ultra"),o=new Rm({canvas:e,antialias:!0,powerPreference:"high-performance"});o.outputColorSpace=Fe,o.toneMapping=mc,o.toneMappingExposure=n.data.settings.brightness,r==="ultra"?(o.shadowMap.enabled=!0,o.shadowMap.type=pc,o.setPixelRatio(Math.min(devicePixelRatio,3))):o.setPixelRatio(Math.min(devicePixelRatio,2)),o.setSize(innerWidth,innerHeight);const a=new Fm(innerWidth/innerHeight),c=new qm(o,r,t);c.setBloom(n.data.settings.bloom);const l=new Cm(e),h=new Lm(n.data.muted,u=>n.patch(p=>{p.muted=u}));h.musicVolume(n.data.settings.musicVolume);const d=new Nm(t,()=>h.setMuted(!h.muted),()=>this.togglePause());d.buildTouchControls(l),d.setPearls(n.data.pearls),d.setPieces(n.data.pieces.length),this.ctx={renderer:o,camera:a,cinema:c,input:l,audio:h,save:n,hud:d,tier:r,go:(u,p)=>this.go(u,p),togglePause:()=>this.togglePause()},addEventListener("resize",()=>this.onResize()),visualViewport?.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&!this.paused&&this.togglePause()}),e.addEventListener("webglcontextlost",u=>u.preventDefault()),new URLSearchParams(location.search).has("debug")&&(window.__dj={go:(u,p)=>this.go(u,p),state:()=>({scene:this.currentName,paused:this.paused,save:this.ctx.save.data}),ctx:this.ctx}),this.go("hub"),requestAnimationFrame(u=>this.frame(u))}go(t,e){this.ctx.hud.fade(!0);const n=()=>{this.current?.dispose(),this.ctx.cinema.setCinematic(!1),this.ctx.cinema.timeScale=1,this.ctx.cinema.setWarm(0),this.ctx.camera.cinematicControl=!1;const s=typeof e?.id=="string"?e.id:null;if(t==="play"&&s&&dc[s]){const r=Array.isArray(e?.mods)?e.mods:[];this.current=dc[s](this.ctx,r),this.currentName=`play:${s}`}else this.current=new g0(this.ctx),this.currentName="hub";this.ctx.hud.fade(!1)};this.current?setTimeout(n,420):n()}onResize(){this.ctx.renderer.setSize(innerWidth,innerHeight),this.ctx.cinema.resize(),this.ctx.camera.cam.aspect=innerWidth/innerHeight,this.ctx.camera.cam.updateProjectionMatrix()}togglePause(){if(this.paused=!this.paused,this.paused){const t=this.ctx.hud.overlay(),e=this.ctx.save.data.settings,n="display:flex;flex-direction:column;gap:6px",s="display:flex;justify-content:space-between;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px;letter-spacing:1px",r="accent-color:#FF4D8D;width:100%;height:22px;cursor:pointer";t.innerHTML=`
        <h1>PAUSED</h1>
        <div class="dj-card" style="display:flex;flex-direction:column;gap:16px;min-width:min(340px,86vw);padding:20px 24px">
          <div style="font-family:'Space Grotesk';letter-spacing:2px;color:#CBB7E8;font-size:12px">SETTINGS</div>
          <label style="${n}">
            <span style="${s}"><span>☀ BRIGHTNESS</span><span data-r="bval">${Math.round(e.brightness*100)}%</span></span>
            <input type="range" data-a="brightness" min="0.7" max="2.4" step="0.05" value="${e.brightness}" style="${r}" />
          </label>
          <label style="${n}">
            <span style="${s}"><span>♪ MUSIC</span><span data-r="mval">${Math.round(e.musicVolume*100)}%</span></span>
            <input type="range" data-a="music" min="0" max="1" step="0.05" value="${e.musicVolume}" style="${r}" />
          </label>
          <button class="dj-btn" data-a="bloom">GLOW (BLOOM): ${e.bloom?"ON":"OFF"}</button>
          <button class="dj-btn" data-a="tier">GRAPHICS: ${this.ctx.tier.toUpperCase()} — TAP TO SWITCH</button>
          <button class="dj-btn" data-a="mute">MUSIC: ${this.ctx.audio.muted?"MUTED":"ON"}</button>
          <div style="font-size:11px;opacity:0.6;text-align:center">graphics change reloads · everything else is live</div>
        </div>
        <button class="dj-btn" data-a="resume" style="font-size:15px;padding:12px 28px">RESUME</button>
      `;const o=l=>t.querySelector(l),a=o('[data-a="brightness"]');a.addEventListener("input",()=>{const l=Number(a.value);this.ctx.renderer.toneMappingExposure=l,o('[data-r="bval"]').textContent=`${Math.round(l*100)}%`,this.ctx.save.patch(h=>{h.settings.brightness=l})});const c=o('[data-a="music"]');c.addEventListener("input",()=>{const l=Number(c.value);this.ctx.audio.musicVolume(l),this.ctx.audio.muted&&l>0&&this.ctx.audio.setMuted(!1),o('[data-r="mval"]').textContent=`${Math.round(l*100)}%`,this.ctx.save.patch(h=>{h.settings.musicVolume=l})}),o('[data-a="bloom"]').addEventListener("click",l=>{const h=!this.ctx.save.data.settings.bloom;this.ctx.cinema.setBloom(h),this.ctx.save.patch(d=>{d.settings.bloom=h}),l.currentTarget.textContent=`GLOW (BLOOM): ${h?"ON":"OFF"}`}),o('[data-a="tier"]').addEventListener("click",()=>{const l=this.ctx.tier==="ultra"?"mobile":"ultra";this.ctx.save.patch(h=>{h.tier=l}),location.reload()}),o('[data-a="mute"]').addEventListener("click",l=>{this.ctx.audio.setMuted(!this.ctx.audio.muted),l.currentTarget.textContent=`MUSIC: ${this.ctx.audio.muted?"MUTED":"ON"}`}),o('[data-a="resume"]').addEventListener("click",()=>this.togglePause()),this.pauseOverlay=t}else this.pauseOverlay?.remove(),this.pauseOverlay=null,this.lastTime=performance.now()}frame(t){requestAnimationFrame(s=>this.frame(s));const e=Math.min(J0,(t-this.lastTime)/1e3);if(this.lastTime=t,this.paused||!this.current)return;this.accumulator+=e*this.ctx.cinema.timeScale;let n=0;for(;this.accumulator>=Lr&&n<12;)this.current.update(Lr),this.accumulator-=Lr,n++;this.ctx.hud.update(e),this.ctx.cinema.render(this.current.scene,this.ctx.camera.cam,e)}}new Q0;
