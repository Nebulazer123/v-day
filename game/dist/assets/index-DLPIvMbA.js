(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="180",zl=0,ya=1,Nl=2,Vc=1,Wc=2,_n=3,Fn=0,Nt=1,Yt=2,bn=0,_i=1,Gs=2,_a=3,Ma=4,Fl=5,qn=100,Ol=101,kl=102,Bl=103,Hl=104,Gl=200,Vl=201,Wl=202,jl=203,Xr=204,qr=205,Xl=206,ql=207,Yl=208,$l=209,Kl=210,Zl=211,Jl=212,Ql=213,eh=214,Yr=0,$r=1,Kr=2,bi=3,Zr=4,Jr=5,Qr=6,eo=7,Vo=0,th=1,nh=2,Nn=0,ih=1,sh=2,rh=3,jc=4,oh=5,ah=6,ch=7,Xc=300,Ei=301,wi=302,to=303,no=304,qs=306,io=1e3,Kn=1001,so=1002,nn=1003,lh=1004,as=1005,ln=1006,or=1007,Zn=1008,dn=1009,qc=1010,Yc=1011,Yi=1012,Wo=1013,Jn=1014,Sn=1015,En=1016,jo=1017,Xo=1018,$i=1020,$c=35902,Kc=35899,Zc=1021,Jc=1022,tn=1023,Ki=1026,Zi=1027,Qc=1028,qo=1029,el=1030,Yo=1031,$o=1033,Us=33776,zs=33777,Ns=33778,Fs=33779,ro=35840,oo=35841,ao=35842,co=35843,lo=36196,ho=37492,uo=37496,fo=37808,po=37809,mo=37810,go=37811,xo=37812,vo=37813,yo=37814,_o=37815,Mo=37816,So=37817,bo=37818,Eo=37819,wo=37820,To=37821,Ao=36492,Ro=36494,Co=36495,Po=36283,Lo=36284,Do=36285,Io=36286,hh=3200,dh=3201,tl=0,uh=1,zn="",kt="srgb",Ti="srgb-linear",Vs="linear",Je="srgb",ti=7680,Sa=519,fh=512,ph=513,mh=514,nl=515,gh=516,xh=517,vh=518,yh=519,ba=35044,Ea="300 es",hn=2e3,Ws=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wa=1234567;const Xi=Math.PI/180,Ai=180/Math.PI;function Ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Ko(i,e){return(i%e+e)%e}function _h(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mh(i,e,t){return i!==e?(t-i)/(e-i):0}function qi(i,e,t){return(1-t)*i+t*e}function Sh(i,e,t,n){return qi(i,e,1-Math.exp(-t*n))}function bh(i,e=1){return e-Math.abs(Ko(i,e*2)-e)}function Eh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function wh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Th(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ah(i,e){return i+Math.random()*(e-i)}function Rh(i){return i*(.5-Math.random())}function Ch(i){i!==void 0&&(wa=i);let e=wa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ph(i){return i*Xi}function Lh(i){return i*Ai}function Dh(i){return(i&i-1)===0&&i!==0}function Ih(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Uh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zh(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),p=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rt={DEG2RAD:Xi,RAD2DEG:Ai,generateUUID:Ii,clamp:We,euclideanModulo:Ko,mapLinear:_h,inverseLerp:Mh,lerp:qi,damp:Sh,pingpong:bh,smoothstep:Eh,smootherstep:wh,randInt:Th,randFloat:Ah,randFloatSpread:Rh,seededRandom:Ch,degToRad:Ph,radToDeg:Lh,isPowerOfTwo:Dh,ceilPowerOfTwo:Ih,floorPowerOfTwo:Uh,setQuaternionFromProperEuler:zh,normalize:Lt,denormalize:xi};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ts{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],p=r[o+1],m=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(d!==x||c!==u||l!==p||h!==m){let g=1-a;const f=c*u+l*p+h*m+d*x,b=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const w=Math.sqrt(E),A=Math.atan2(w,f*b);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const y=a*b;if(c=c*g+u*y,l=l*g+p*y,h=h*g+m*y,d=d*g+x*y,g===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],p=r[o+2],m=r[o+3];return e[t]=a*m+h*d+c*p-l*u,e[t+1]=c*m+h*u+l*d-a*p,e[t+2]=l*m+h*p+a*u-c*d,e[t+3]=h*m-a*d-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),p=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d-u*p*m;break;case"YXZ":this._x=u*h*d+l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d+u*p*m;break;case"ZXY":this._x=u*h*d-l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d-u*p*m;break;case"ZYX":this._x=u*h*d-l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d+u*p*m;break;case"YZX":this._x=u*h*d+l*p*m,this._y=l*p*d+u*h*m,this._z=l*h*m-u*p*d,this._w=l*h*d-u*p*m;break;case"XZY":this._x=u*h*d-l*p*m,this._y=l*p*d-u*h*m,this._z=l*h*m+u*p*d,this._w=l*h*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new R,Ta=new ts;class ke{constructor(e,t,n,s,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],m=n[8],x=s[0],g=s[3],f=s[6],b=s[1],E=s[4],y=s[7],w=s[2],A=s[5],C=s[8];return r[0]=o*x+a*b+c*w,r[3]=o*g+a*E+c*A,r[6]=o*f+a*y+c*C,r[1]=l*x+h*b+d*w,r[4]=l*g+h*E+d*A,r[7]=l*f+h*y+d*C,r[2]=u*x+p*b+m*w,r[5]=u*g+p*E+m*A,r[8]=u*f+p*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,m=t*d+n*u+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=u*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cr.makeScale(e,t)),this}rotate(e){return this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new ke;function il(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ji(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nh(){const i=Ji("canvas");return i.style.display="block",i}const Aa={};function Qi(i){i in Aa||(Aa[i]=!0,console.warn(i))}function Fh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ra=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ca=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oh(){const i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Je&&(s.r=wn(s.r),s.g=wn(s.g),s.b=wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Je&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?Vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Qi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Qi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:e,whitePoint:n,transfer:Vs,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:Ra,fromXYZ:Ca,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const qe=Oh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class kh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ni===void 0&&(ni=Ji("canvas")),ni.width=e.width,ni.height=e.height;const s=ni.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ni}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bh=0;class Zo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lr(s[o].image)):r.push(lr(s[o]))}else r=lr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;const hr=new R;class Ct extends Di{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Kn,s=Kn,r=ln,o=Zn,a=tn,c=dn,l=Ct.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Ii(),this.name="",this.source=new Zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hr).x}get height(){return this.source.getSize(hr).y}get depth(){return this.source.getSize(hr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=Xc;Ct.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,s=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(p+1)/2,w=(f+1)/2,A=(h+u)/4,C=(d+x)/4,D=(m+g)/4;return E>y&&E>w?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=C/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=A/s,r=D/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=C/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gh extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ct(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Gh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sl extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vh extends Ct{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kt):Kt.fromBufferAttribute(r,o),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),ls.subVectors(this.max,Oi),ii.subVectors(e.a,Oi),si.subVectors(e.b,Oi),ri.subVectors(e.c,Oi),An.subVectors(si,ii),Rn.subVectors(ri,si),Bn.subVectors(ii,ri);let t=[0,-An.z,An.y,0,-Rn.z,Rn.y,0,-Bn.z,Bn.y,An.z,0,-An.x,Rn.z,0,-Rn.x,Bn.z,0,-Bn.x,-An.y,An.x,0,-Rn.y,Rn.x,0,-Bn.y,Bn.x,0];return!dr(t,ii,si,ri,ls)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,ii,si,ri,ls))?!1:(hs.crossVectors(An,Rn),t=[hs.x,hs.y,hs.z],dr(t,ii,si,ri,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new R,new R,new R,new R,new R,new R,new R,new R],Kt=new R,cs=new ns,ii=new R,si=new R,ri=new R,An=new R,Rn=new R,Bn=new R,Oi=new R,ls=new R,hs=new R,Hn=new R;function dr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hn.fromArray(i,r);const a=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wh=new ns,ki=new R,ur=new R;class Ys{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wh.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(ur)),this.expandByPoint(ki.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mn=new R,fr=new R,ds=new R,Cn=new R,pr=new R,us=new R,mr=new R;class Jo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fr.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(fr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ds),a=Cn.dot(this.direction),c=-Cn.dot(ds),l=Cn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,m;if(h>0)if(d=o*c-a,u=o*a-c,m=r*h,d>=0)if(u>=-m)if(u<=m){const x=1/h;d*=x,u*=x,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(fr).addScaledVector(ds,u),p}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,s,r){pr.subVectors(t,e),us.subVectors(n,e),mr.crossVectors(pr,us);let o=this.direction.dot(mr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const c=a*this.direction.dot(us.crossVectors(Cn,us));if(c<0)return null;const l=a*this.direction.dot(pr.cross(Cn));if(l<0||c+l>o)return null;const h=-a*Cn.dot(mr);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,c,l,h,d,u,p,m,x,g){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,p,m,x,g)}set(e,t,n,s,r,o,a,c,l,h,d,u,p,m,x,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/oi.setFromMatrixColumn(e,0).length(),r=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,p=o*d,m=a*h,x=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+m*l,t[5]=u-x*l,t[9]=-a*c,t[2]=x-u*l,t[6]=m+p*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,p=c*d,m=l*h,x=l*d;t[0]=u+x*a,t[4]=m*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-m,t[6]=x+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,p=c*d,m=l*h,x=l*d;t[0]=u-x*a,t[4]=-o*d,t[8]=m+p*a,t[1]=p+m*a,t[5]=o*h,t[9]=x-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,p=o*d,m=a*h,x=a*d;t[0]=c*h,t[4]=m*l-p,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=p*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,p=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=x-u*d,t[8]=m*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+m,t[10]=u-x*d}else if(e.order==="XZY"){const u=o*c,p=o*l,m=a*c,x=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=o*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=a*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jh,e,Xh)}lookAt(e,t,n){const s=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Pn.crossVectors(n,Vt),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Pn.crossVectors(n,Vt)),Pn.normalize(),fs.crossVectors(Vt,Pn),s[0]=Pn.x,s[4]=fs.x,s[8]=Vt.x,s[1]=Pn.y,s[5]=fs.y,s[9]=Vt.y,s[2]=Pn.z,s[6]=fs.z,s[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],b=n[3],E=n[7],y=n[11],w=n[15],A=s[0],C=s[4],D=s[8],S=s[12],M=s[1],L=s[5],F=s[9],H=s[13],q=s[2],j=s[6],X=s[10],Z=s[14],G=s[3],ae=s[7],de=s[11],we=s[15];return r[0]=o*A+a*M+c*q+l*G,r[4]=o*C+a*L+c*j+l*ae,r[8]=o*D+a*F+c*X+l*de,r[12]=o*S+a*H+c*Z+l*we,r[1]=h*A+d*M+u*q+p*G,r[5]=h*C+d*L+u*j+p*ae,r[9]=h*D+d*F+u*X+p*de,r[13]=h*S+d*H+u*Z+p*we,r[2]=m*A+x*M+g*q+f*G,r[6]=m*C+x*L+g*j+f*ae,r[10]=m*D+x*F+g*X+f*de,r[14]=m*S+x*H+g*Z+f*we,r[3]=b*A+E*M+y*q+w*G,r[7]=b*C+E*L+y*j+w*ae,r[11]=b*D+E*F+y*X+w*de,r[15]=b*S+E*H+y*Z+w*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],m=e[3],x=e[7],g=e[11],f=e[15];return m*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*p-n*c*p)+x*(+t*c*p-t*l*u+r*o*u-s*o*p+s*l*h-r*c*h)+g*(+t*l*d-t*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],m=e[12],x=e[13],g=e[14],f=e[15],b=d*g*l-x*u*l+x*c*p-a*g*p-d*c*f+a*u*f,E=m*u*l-h*g*l-m*c*p+o*g*p+h*c*f-o*u*f,y=h*x*l-m*d*l+m*a*p-o*x*p-h*a*f+o*d*f,w=m*d*c-h*x*c-m*a*u+o*x*u+h*a*g-o*d*g,A=t*b+n*E+s*y+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=b*C,e[1]=(x*u*r-d*g*r-x*s*p+n*g*p+d*s*f-n*u*f)*C,e[2]=(a*g*r-x*c*r+x*s*l-n*g*l-a*s*f+n*c*f)*C,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*p-n*c*p)*C,e[4]=E*C,e[5]=(h*g*r-m*u*r+m*s*p-t*g*p-h*s*f+t*u*f)*C,e[6]=(m*c*r-o*g*r-m*s*l+t*g*l+o*s*f-t*c*f)*C,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*p+t*c*p)*C,e[8]=y*C,e[9]=(m*d*r-h*x*r-m*n*p+t*x*p+h*n*f-t*d*f)*C,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*p-t*a*p)*C,e[12]=w*C,e[13]=(h*x*s-m*d*s+m*n*u-t*x*u-h*n*g+t*d*g)*C,e[14]=(m*a*s-o*x*s-m*n*c+t*x*c+o*n*g-t*a*g)*C,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,m=r*d,x=o*h,g=o*d,f=a*d,b=c*l,E=c*h,y=c*d,w=n.x,A=n.y,C=n.z;return s[0]=(1-(x+f))*w,s[1]=(p+y)*w,s[2]=(m-E)*w,s[3]=0,s[4]=(p-y)*A,s[5]=(1-(u+f))*A,s[6]=(g+b)*A,s[7]=0,s[8]=(m+E)*C,s[9]=(g-b)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=oi.set(s[0],s[1],s[2]).length();const o=oi.set(s[4],s[5],s[6]).length(),a=oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);const l=1/r,h=1/o,d=1/a;return Zt.elements[0]*=l,Zt.elements[1]*=l,Zt.elements[2]*=l,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s);let m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===hn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s);let m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===hn)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const oi=new R,Zt=new ot,jh=new R(0,0,0),Xh=new R(1,1,1),Pn=new R,fs=new R,Vt=new R,Pa=new ot,La=new ts;class un{constructor(e=0,t=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return La.setFromEuler(this),this.setFromQuaternion(La,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qh=0;const Da=new R,ai=new ts,gn=new ot,ps=new R,Bi=new R,Yh=new R,$h=new ts,Ia=new R(1,0,0),Ua=new R(0,1,0),za=new R(0,0,1),Na={type:"added"},Kh={type:"removed"},ci={type:"childadded",child:null},gr={type:"childremoved",child:null};class vt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new R,t=new un,n=new ts,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new ke}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(Ia,e)}rotateY(e){return this.rotateOnAxis(Ua,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Da.copy(e).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ia,e)}translateY(e){return this.translateOnAxis(Ua,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ps.copy(e):ps.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Bi,ps,this.up):gn.lookAt(ps,Bi,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(gn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Na),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kh),gr.child=e,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Na),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,$h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new R(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new R,xn=new R,xr=new R,vn=new R,li=new R,hi=new R,Fa=new R,vr=new R,yr=new R,_r=new R,Mr=new Qe,Sr=new Qe,br=new Qe;class Qt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),xn.subVectors(n,t),xr.subVectors(e,t);const o=Jt.dot(Jt),a=Jt.dot(xn),c=Jt.dot(xr),l=xn.dot(xn),h=xn.dot(xr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(o,vn.y),c.addScaledVector(a,vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mr.setScalar(0),Sr.setScalar(0),br.setScalar(0),Mr.fromBufferAttribute(e,t),Sr.fromBufferAttribute(e,n),br.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mr,r.x),o.addScaledVector(Sr,r.y),o.addScaledVector(br,r.z),o}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),xn.subVectors(e,t),Jt.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Jt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;li.subVectors(s,n),hi.subVectors(r,n),vr.subVectors(e,n);const c=li.dot(vr),l=hi.dot(vr);if(c<=0&&l<=0)return t.copy(n);yr.subVectors(e,s);const h=li.dot(yr),d=hi.dot(yr);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(li,o);_r.subVectors(e,r);const p=li.dot(_r),m=hi.dot(_r);if(m>=0&&p<=m)return t.copy(r);const x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(hi,a);const g=h*m-p*d;if(g<=0&&d-h>=0&&p-m>=0)return Fa.subVectors(r,s),a=(d-h)/(d-h+(p-m)),t.copy(s).addScaledVector(Fa,a);const f=1/(g+x+u);return o=x*f,a=u*f,t.copy(n).addScaledVector(li,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Er(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=qe.workingColorSpace){if(e=Ko(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Er(o,r,e+1/3),this.g=Er(o,r,e),this.b=Er(o,r,e-1/3)}return qe.colorSpaceToWorking(this,s),this}setStyle(e,t=kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return qe.workingToColorSpace(Rt.copy(this),e),Math.round(We(Rt.r*255,0,255))*65536+Math.round(We(Rt.g*255,0,255))*256+Math.round(We(Rt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.workingToColorSpace(Rt.copy(this),t);const n=Rt.r,s=Rt.g,r=Rt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=kt){qe.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,s=Rt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(ms);const n=qi(Ln.h,ms.h,t),s=qi(Ln.s,ms.s,t),r=qi(Ln.l,ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Le;Le.NAMES=rl;let Zh=0;class Ui extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=_i,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=qr,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $t extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new R,gs=new Re;let Jh=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ba&&(e.usage=this.usage),e}}class ol extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class al extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qh=0;const qt=new ot,wr=new vt,di=new R,Wt=new ns,Hi=new ns,Et=new R;class yt extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(il(e)?al:ol)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return wr.lookAt(e),wr.updateMatrix(),this.applyMatrix4(wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(Wt.min,Hi.min),Wt.expandByPoint(Et),Et.addVectors(Wt.max,Hi.max),Wt.expandByPoint(Et)):(Wt.expandByPoint(Hi.min),Wt.expandByPoint(Hi.max))}Wt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Et.fromBufferAttribute(a,l),c&&(di.fromBufferAttribute(e,l),Et.add(di)),s=Math.max(s,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new R,c[D]=new R;const l=new R,h=new R,d=new R,u=new Re,p=new Re,m=new Re,x=new R,g=new R;function f(D,S,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),h.sub(l),d.sub(l),p.sub(u),m.sub(u);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(L),a[D].add(x),a[S].add(x),a[M].add(x),c[D].add(g),c[S].add(g),c[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,S=b.length;D<S;++D){const M=b[D],L=M.start,F=M.count;for(let H=L,q=L+F;H<q;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new R,y=new R,w=new R,A=new R;function C(D){w.fromBufferAttribute(s,D),A.copy(w);const S=a[D];E.copy(S),E.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(A,S);const L=y.dot(c[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,S=b.length;D<S;++D){const M=b[D],L=M.start,F=M.count;for(let H=L,q=L+F;H<q;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),x=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)u[m++]=l[p++]}return new Ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new ot,Gn=new Jo,xs=new Ys,ka=new R,vs=new R,ys=new R,_s=new R,Tr=new R,Ms=new R,Ba=new R,Ss=new R;class Q extends vt{constructor(e=new yt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Tr.fromBufferAttribute(d,e),o?Ms.addScaledVector(Tr,h):Ms.addScaledVector(Tr.sub(t),h))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(r),Gn.copy(e.ray).recast(e.near),!(xs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(xs,ka)===null||Gn.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(Oa.copy(r).invert(),Gn.copy(e.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],f=o[g.materialIndex],b=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,w=E;y<w;y+=3){const A=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);s=bs(this,f,e,n,l,h,d,A,C,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const b=a.getX(g),E=a.getX(g+1),y=a.getX(g+2);s=bs(this,o,e,n,l,h,d,b,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=u.length;m<x;m++){const g=u[m],f=o[g.materialIndex],b=Math.max(g.start,p.start),E=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=b,w=E;y<w;y+=3){const A=y,C=y+1,D=y+2;s=bs(this,f,e,n,l,h,d,A,C,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const b=g,E=g+1,y=g+2;s=bs(this,o,e,n,l,h,d,b,E,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function ed(i,e,t,n,s,r,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Fn,a),c===null)return null;Ss.copy(a),Ss.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ss);return l<t.near||l>t.far?null:{distance:l,point:Ss.clone(),object:i}}function bs(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,vs),i.getVertexPosition(c,ys),i.getVertexPosition(l,_s);const h=ed(i,e,t,n,vs,ys,_s,Ba);if(h){const d=new R;Qt.getBarycoord(Ba,vs,ys,_s,d),s&&(h.uv=Qt.getInterpolatedAttribute(s,a,c,l,d,new Re)),r&&(h.uv1=Qt.getInterpolatedAttribute(r,a,c,l,d,new Re)),o&&(h.normal=Qt.getInterpolatedAttribute(o,a,c,l,d,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new R,materialIndex:0};Qt.getNormal(vs,ys,_s,u.normal),h.face=u,h.barycoord=d}return h}class Ke extends yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(d,2));function m(x,g,f,b,E,y,w,A,C,D,S){const M=y/C,L=w/D,F=y/2,H=w/2,q=A/2,j=C+1,X=D+1;let Z=0,G=0;const ae=new R;for(let de=0;de<X;de++){const we=de*L-H;for(let Ge=0;Ge<j;Ge++){const nt=Ge*M-F;ae[x]=nt*b,ae[g]=we*E,ae[f]=q,l.push(ae.x,ae.y,ae.z),ae[x]=0,ae[g]=0,ae[f]=A>0?1:-1,h.push(ae.x,ae.y,ae.z),d.push(Ge/C),d.push(1-de/D),Z+=1}}for(let de=0;de<D;de++)for(let we=0;we<C;we++){const Ge=u+we+j*de,nt=u+we+j*(de+1),at=u+(we+1)+j*(de+1),Ye=u+(we+1)+j*de;c.push(Ge,nt,Ye),c.push(nt,at,Ye),G+=6}a.addGroup(p,G,S),p+=G,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const s in n)e[s]=n[s]}return e}function td(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const js={clone:Ri,merge:Dt};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ll extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new R,Ha=new Re,Ga=new Re;class Ut extends ll{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ai*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-e/Dn.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,Ga),t.subVectors(Ga,Ha)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ui=-90,fi=1;class sd extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ut(ui,fi,e,t);s.layers=this.layers,this.add(s);const r=new Ut(ui,fi,e,t);r.layers=this.layers,this.add(r);const o=new Ut(ui,fi,e,t);o.layers=this.layers,this.add(o);const a=new Ut(ui,fi,e,t);a.layers=this.layers,this.add(a);const c=new Ut(ui,fi,e,t);c.layers=this.layers,this.add(c);const l=new Ut(ui,fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class hl extends Ct{constructor(e=[],t=Ei,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rd extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new hl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new zt({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:bn});r.uniforms.tEquirect.value=t;const o=new Q(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=ln),new sd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Ne extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const od={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&u>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(od)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class zi{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new zi(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class is extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rr=new R,ad=new R,cd=new ke;class Un{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Rr.subVectors(n,t).cross(ad.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cd.getNormalMatrix(e),s=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Ys,ld=new Re(.5,.5),Es=new R;class ea{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],p=r[7],m=r[8],x=r[9],g=r[10],f=r[11],b=r[12],E=r[13],y=r[14],w=r[15];if(s[0].setComponents(l-o,p-h,f-m,w-b).normalize(),s[1].setComponents(l+o,p+h,f+m,w+b).normalize(),s[2].setComponents(l+a,p+d,f+x,w+E).normalize(),s[3].setComponents(l-a,p-d,f-x,w-E).normalize(),n)s[4].setComponents(c,u,g,y).normalize(),s[5].setComponents(l-c,p-u,f-g,w-y).normalize();else if(s[4].setComponents(l-c,p-u,f-g,w-y).normalize(),t===hn)s[5].setComponents(l+c,p+u,f+g,w+y).normalize();else if(t===Ws)s[5].setComponents(c,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){Vn.center.set(0,0,0);const t=ld.distanceTo(e.center);return Vn.radius=.7071067811865476+t,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Es.x=s.normal.x>0?e.max.x:e.min.x,Es.y=s.normal.y>0?e.max.y:e.min.y,Es.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ta extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Va=new ot,Uo=new Jo,ws=new Ys,Ts=new R;class dl extends vt{constructor(e=new yt,t=new ta){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,e.ray.intersectsSphere(ws)===!1)return;Va.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(Va);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=u,x=p;m<x;m++){const g=l.getX(m);Ts.fromBufferAttribute(d,g),Wa(Ts,g,c,s,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=u,x=p;m<x;m++)Ts.fromBufferAttribute(d,m),Wa(Ts,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wa(i,e,t,n,s,r,o){const a=Uo.distanceSqToPoint(i);if(a<t){const c=new R;Uo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ul extends Ct{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends Ct{constructor(e,t,n=Jn,s,r,o,a=nn,c=nn,l,h=Ki,d=1){if(h!==Ki&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class pl extends Ct{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $s extends yt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new R,h=new Re;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const p=n+d/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class gt extends yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],p=[];let m=0;const x=[],g=n/2;let f=0;b(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(p,2));function b(){const y=new R,w=new R;let A=0;const C=(t-e)/n;for(let D=0;D<=r;D++){const S=[],M=D/r,L=M*(t-e)+e;for(let F=0;F<=s;F++){const H=F/s,q=H*c+a,j=Math.sin(q),X=Math.cos(q);w.x=L*j,w.y=-M*n+g,w.z=L*X,d.push(w.x,w.y,w.z),y.set(j,C,X).normalize(),u.push(y.x,y.y,y.z),p.push(H,1-M),S.push(m++)}x.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){const M=x[S][D],L=x[S+1][D],F=x[S+1][D+1],H=x[S][D+1];(e>0||S!==0)&&(h.push(M,L,H),A+=3),(t>0||S!==r-1)&&(h.push(L,F,H),A+=3)}l.addGroup(f,A,0),f+=A}function E(y){const w=m,A=new Re,C=new R;let D=0;const S=y===!0?e:t,M=y===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*M,0),u.push(0,M,0),p.push(.5,.5),m++;const L=m;for(let F=0;F<=s;F++){const q=F/s*c+a,j=Math.cos(q),X=Math.sin(q);C.x=S*X,C.y=g*M,C.z=S*j,d.push(C.x,C.y,C.z),u.push(0,M,0),A.x=j*.5+.5,A.y=X*.5*M+.5,p.push(A.x,A.y),m++}for(let F=0;F<s;F++){const H=w+F,q=L+F;y===!0?h.push(q,q+1,H):h.push(q+1,q,H),D+=3}l.addGroup(f,D,y===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class es extends gt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new es(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class na extends yt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const E=new R,y=new R,w=new R;for(let A=0;A<t.length;A+=3)p(t[A+0],E),p(t[A+1],y),p(t[A+2],w),c(E,y,w,b)}function c(b,E,y,w){const A=w+1,C=[];for(let D=0;D<=A;D++){C[D]=[];const S=b.clone().lerp(y,D/A),M=E.clone().lerp(y,D/A),L=A-D;for(let F=0;F<=L;F++)F===0&&D===A?C[D][F]=S:C[D][F]=S.clone().lerp(M,F/L)}for(let D=0;D<A;D++)for(let S=0;S<2*(A-D)-1;S++){const M=Math.floor(S/2);S%2===0?(u(C[D][M+1]),u(C[D+1][M]),u(C[D][M])):(u(C[D][M+1]),u(C[D+1][M+1]),u(C[D+1][M]))}}function l(b){const E=new R;for(let y=0;y<r.length;y+=3)E.x=r[y+0],E.y=r[y+1],E.z=r[y+2],E.normalize().multiplyScalar(b),r[y+0]=E.x,r[y+1]=E.y,r[y+2]=E.z}function h(){const b=new R;for(let E=0;E<r.length;E+=3){b.x=r[E+0],b.y=r[E+1],b.z=r[E+2];const y=g(b)/2/Math.PI+.5,w=f(b)/Math.PI+.5;o.push(y,1-w)}m(),d()}function d(){for(let b=0;b<o.length;b+=6){const E=o[b+0],y=o[b+2],w=o[b+4],A=Math.max(E,y,w),C=Math.min(E,y,w);A>.9&&C<.1&&(E<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),w<.2&&(o[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function p(b,E){const y=b*3;E.x=e[y+0],E.y=e[y+1],E.z=e[y+2]}function m(){const b=new R,E=new R,y=new R,w=new R,A=new Re,C=new Re,D=new Re;for(let S=0,M=0;S<r.length;S+=9,M+=6){b.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),A.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),w.copy(b).add(E).add(y).divideScalar(3);const L=g(w);x(A,M+0,b,L),x(C,M+2,E,L),x(D,M+4,y,L)}}function x(b,E,y,w){w<0&&b.x===1&&(o[E]=b.x-1),y.x===0&&y.z===0&&(o[E]=w/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.vertices,e.indices,e.radius,e.details)}}class ia extends na{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ia(e.radius,e.detail)}}class rn extends yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,p=[],m=[],x=[],g=[];for(let f=0;f<h;f++){const b=f*u-o;for(let E=0;E<l;E++){const y=E*d-r;m.push(y,-b,0),x.push(0,0,1),g.push(E/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let b=0;b<a;b++){const E=b+l*f,y=b+l*(f+1),w=b+1+l*(f+1),A=b+1+l*f;p.push(E,y,A),p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ks extends yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,p=new R,m=new Re;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){const f=r+g/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}d+=u}for(let x=0;x<s;x++){const g=x*(n+1);for(let f=0;f<n;f++){const b=f+g,E=b,y=b+n+1,w=b+n+2,A=b+1;a.push(E,y,A),a.push(y,w,A)}}this.setIndex(a),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class wt extends yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,u=new R,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){const b=[],E=f/n;let y=0;f===0&&o===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const A=w/t;d.x=-e*Math.cos(s+A*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+A*r)*Math.sin(o+E*a),m.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(A+y,1-E),b.push(l++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<t;b++){const E=h[f][b+1],y=h[f][b],w=h[f+1][b],A=h[f+1][b+1];(f!==0||o>0)&&p.push(E,y,A),(f!==n-1||c<Math.PI)&&p.push(y,w,A)}this.setIndex(p),this.setAttribute("position",new et(m,3)),this.setAttribute("normal",new et(x,3)),this.setAttribute("uv",new et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Bt extends yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new R,d=new R,u=new R;for(let p=0;p<=n;p++)for(let m=0;m<=s;m++){const x=m/s*r,g=p/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(m/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=s;m++){const x=(s+1)*p+m-1,g=(s+1)*(p-1)+m-1,f=(s+1)*(p-1)+m,b=(s+1)*p+m;o.push(x,g,b),o.push(g,f,b)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bt(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ci extends Ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hd extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dd extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ud{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const fd=new ud;class sa{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sa.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi=new WeakMap;class pd extends sa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=pi.get(o);d===void 0&&(d=[],pi.set(o,d)),d.push({onLoad:t,onError:s})}return o}const a=Ji("img");function c(){h(),t&&t(this);const d=pi.get(this)||[];for(let u=0;u<d.length;u++){const p=d[u];p.onLoad&&p.onLoad(this)}pi.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Cr.remove(`image:${e}`);const u=pi.get(this)||[];for(let p=0;p<u.length;p++){const m=u[p];m.onError&&m.onError(d)}pi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Cr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class md extends sa{constructor(e){super(e)}load(e,t,n,s){const r=new Ct,o=new pd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Zs extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Js extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Pr=new ot,ja=new R,Xa=new R;class ra{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ja.setFromMatrixPosition(e.matrixWorld),t.position.copy(ja),Xa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xa),t.updateMatrixWorld(),Pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gd extends ra{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ai*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ml extends Zs{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const qa=new ot,Gi=new R,Lr=new R;class xd extends ra{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gi),Lr.copy(n.position),Lr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Lr),n.updateMatrixWorld(),s.makeTranslation(-Gi.x,-Gi.y,-Gi.z),qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,n.coordinateSystem,n.reversedDepth)}}class Tn extends Zs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class oa extends ll{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vd extends ra{constructor(){super(new oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aa extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new vd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yd extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Ya=new ot;class Md{constructor(e,t,n=0,s=1/0){this.ray=new Jo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ya.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ya),this}intersectObject(e,t=!0,n=[]){return zo(e,this,n,t),n.sort($a),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)zo(e[s],this,n,t);return n.sort($a),n}}function $a(i,e){return i.distance-e.distance}function zo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)zo(r[o],e,t,!0)}}function Ka(i,e,t,n){const s=Sd(n);switch(t){case Zc:return i*e;case Qc:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case el:return i*e*2/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case Jc:return i*e*3/s.components*s.byteLength;case tn:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case Us:case zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(e,8)/4;case ro:case ao:return Math.max(i,8)*Math.max(e,8)/2;case lo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ao:case Ro:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Do:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sd(i){switch(i){case dn:case qc:return{byteLength:1,components:1};case Yi:case Yc:case En:return{byteLength:2,components:1};case jo:case Xo:return{byteLength:2,components:4};case Jn:case Wo:case Sn:return{byteLength:4,components:1};case $c:case Kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gl(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bd(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,m)=>p.start-m.start);let u=0;for(let p=1;p<d.length;p++){const m=d[u],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,m=d.length;p<m;p++){const x=d[p];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wd=`#ifdef USE_ALPHAHASH
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
#endif`,Td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Ld=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Id=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eu="gl_FragColor = linearToOutputTexel( gl_FragColor );",tu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
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
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,du=`#ifdef USE_GRADIENTMAP
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
}`,uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
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
#endif`,gu=`#ifdef USE_ENVMAP
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
#endif`,xu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mu=`PhysicalMaterial material;
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
#endif`,Su=`struct PhysicalMaterial {
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
}`,bu=`
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
#endif`,Eu=`#if defined( RE_IndirectDiffuse )
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Du=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iu=`#if defined( USE_POINTS_UV )
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
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xu=`#ifdef USE_NORMALMAP
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
#endif`,qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$u=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ef=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lf=`float getShadowMask() {
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
}`,hf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ff=`#ifdef USE_SKINNING
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
#endif`,pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,yf=`#ifdef USE_TRANSMISSION
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wf=`uniform sampler2D t2D;
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pf=`#include <common>
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
}`,Lf=`#if DEPTH_PACKING == 3200
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
}`,Df=`#define DISTANCE
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
}`,If=`#define DISTANCE
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`uniform float scale;
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
}`,Ff=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,kf=`uniform vec3 diffuse;
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
}`,Bf=`#define LAMBERT
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
}`,Hf=`#define LAMBERT
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
}`,Gf=`#define MATCAP
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
}`,Vf=`#define MATCAP
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
}`,Wf=`#define NORMAL
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
}`,jf=`#define NORMAL
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
}`,Xf=`#define PHONG
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
}`,qf=`#define PHONG
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
}`,Yf=`#define STANDARD
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
}`,$f=`#define STANDARD
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
}`,Kf=`#define TOON
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
}`,Zf=`#define TOON
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
}`,Jf=`uniform float size;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 color;
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
}`,np=`uniform float rotation;
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
}`,ip=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Ed,alphahash_pars_fragment:wd,alphamap_fragment:Td,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Ld,batching_pars_vertex:Dd,batching_vertex:Id,begin_vertex:Ud,beginnormal_vertex:zd,bsdfs:Nd,iridescence_fragment:Fd,bumpmap_pars_fragment:Od,clipping_planes_fragment:kd,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Gd,color_fragment:Vd,color_pars_fragment:Wd,color_pars_vertex:jd,color_vertex:Xd,common:qd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Kd,displacementmap_vertex:Zd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:eu,colorspace_pars_fragment:tu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:ou,fog_vertex:au,fog_pars_vertex:cu,fog_fragment:lu,fog_pars_fragment:hu,gradientmap_pars_fragment:du,lightmap_pars_fragment:uu,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:xu,lights_toon_pars_fragment:vu,lights_phong_fragment:yu,lights_phong_pars_fragment:_u,lights_physical_fragment:Mu,lights_physical_pars_fragment:Su,lights_fragment_begin:bu,lights_fragment_maps:Eu,lights_fragment_end:wu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Ru,logdepthbuf_vertex:Cu,map_fragment:Pu,map_pars_fragment:Lu,map_particle_fragment:Du,map_particle_pars_fragment:Iu,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:zu,morphinstance_vertex:Nu,morphcolor_vertex:Fu,morphnormal_vertex:Ou,morphtarget_pars_vertex:ku,morphtarget_vertex:Bu,normal_fragment_begin:Hu,normal_fragment_maps:Gu,normal_pars_fragment:Vu,normal_pars_vertex:Wu,normal_vertex:ju,normalmap_pars_fragment:Xu,clearcoat_normal_fragment_begin:qu,clearcoat_normal_fragment_maps:Yu,clearcoat_pars_fragment:$u,iridescence_pars_fragment:Ku,opaque_fragment:Zu,packing:Ju,premultiplied_alpha_fragment:Qu,project_vertex:ef,dithering_fragment:tf,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:rf,shadowmap_pars_fragment:of,shadowmap_pars_vertex:af,shadowmap_vertex:cf,shadowmask_pars_fragment:lf,skinbase_vertex:hf,skinning_pars_vertex:df,skinning_vertex:uf,skinnormal_vertex:ff,specularmap_fragment:pf,specularmap_pars_fragment:mf,tonemapping_fragment:gf,tonemapping_pars_fragment:xf,transmission_fragment:vf,transmission_pars_fragment:yf,uv_pars_fragment:_f,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:bf,background_vert:Ef,background_frag:wf,backgroundCube_vert:Tf,backgroundCube_frag:Af,cube_vert:Rf,cube_frag:Cf,depth_vert:Pf,depth_frag:Lf,distanceRGBA_vert:Df,distanceRGBA_frag:If,equirect_vert:Uf,equirect_frag:zf,linedashed_vert:Nf,linedashed_frag:Ff,meshbasic_vert:Of,meshbasic_frag:kf,meshlambert_vert:Bf,meshlambert_frag:Hf,meshmatcap_vert:Gf,meshmatcap_frag:Vf,meshnormal_vert:Wf,meshnormal_frag:jf,meshphong_vert:Xf,meshphong_frag:qf,meshphysical_vert:Yf,meshphysical_frag:$f,meshtoon_vert:Kf,meshtoon_frag:Zf,points_vert:Jf,points_frag:Qf,shadow_vert:ep,shadow_frag:tp,sprite_vert:np,sprite_frag:ip},oe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},an={basic:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Dt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Dt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Dt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Le(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Dt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Dt([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Dt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Dt([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Dt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Dt([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Dt([oe.common,oe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Dt([oe.lights,oe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};an.physical={uniforms:Dt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const As={r:0,b:0,g:0},Wn=new un,sp=new ot;function rp(i,e,t,n,s,r,o){const a=new Le(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function m(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1;const w=m(E);w===null?f(a,c):w&&w.isColor&&(f(w,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(E,y){const w=m(y);w&&(w.isCubeTexture||w.mapping===qs)?(h===void 0&&(h=new Q(new Ke(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Ri(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Wn.copy(y.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Wn)),h.material.toneMapped=qe.getTransfer(w.colorSpace)!==Je,(d!==w||u!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Q(new rn(2,2),new zt({name:"BackgroundMaterial",uniforms:Ri(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(w.colorSpace)!==Je,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,y){E.getRGB(As,cl(i)),n.buffers.color.setClear(As.r,As.g,As.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:x,addToRenderList:g,dispose:b}}function op(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(M,L,F,H,q){let j=!1;const X=d(H,F,L);r!==X&&(r=X,l(r.object)),j=p(M,H,F,q),j&&m(M,H,F,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(M,L,F,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,L,F){const H=F.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let j=q[L.id];j===void 0&&(j={},q[L.id]=j);let X=j[H];return X===void 0&&(X=u(c()),j[H]=X),X}function u(M){const L=[],F=[],H=[];for(let q=0;q<t;q++)L[q]=0,F[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,F,H){const q=r.attributes,j=L.attributes;let X=0;const Z=F.getAttributes();for(const G in Z)if(Z[G].location>=0){const de=q[G];let we=j[G];if(we===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),de===void 0||de.attribute!==we||we&&de.data!==we.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function m(M,L,F,H){const q={},j=L.attributes;let X=0;const Z=F.getAttributes();for(const G in Z)if(Z[G].location>=0){let de=j[G];de===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const we={};we.attribute=de,de&&de.data&&(we.data=de.data),q[G]=we,X++}r.attributes=q,r.attributesNum=X,r.index=H}function x(){const M=r.newAttributes;for(let L=0,F=M.length;L<F;L++)M[L]=0}function g(M){f(M,0)}function f(M,L){const F=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;F[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),q[M]!==L&&(i.vertexAttribDivisor(M,L),q[M]=L)}function b(){const M=r.newAttributes,L=r.enabledAttributes;for(let F=0,H=L.length;F<H;F++)L[F]!==M[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function E(M,L,F,H,q,j,X){X===!0?i.vertexAttribIPointer(M,L,F,q,j):i.vertexAttribPointer(M,L,F,H,q,j)}function y(M,L,F,H){x();const q=H.attributes,j=F.getAttributes(),X=L.defaultAttributeValues;for(const Z in j){const G=j[Z];if(G.location>=0){let ae=q[Z];if(ae===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor)),ae!==void 0){const de=ae.normalized,we=ae.itemSize,Ge=e.get(ae);if(Ge===void 0)continue;const nt=Ge.buffer,at=Ge.type,Ye=Ge.bytesPerElement,Y=at===i.INT||at===i.UNSIGNED_INT||ae.gpuType===Wo;if(ae.isInterleavedBufferAttribute){const J=ae.data,pe=J.stride,Ue=ae.offset;if(J.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)f(G.location+Ee,J.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let Ee=0;Ee<G.locationSize;Ee++)E(G.location+Ee,we/G.locationSize,at,de,pe*Ye,(Ue+we/G.locationSize*Ee)*Ye,Y)}else{if(ae.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)f(G.location+J,ae.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let J=0;J<G.locationSize;J++)g(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let J=0;J<G.locationSize;J++)E(G.location+J,we/G.locationSize,at,de,we*Ye,we/G.locationSize*J*Ye,Y)}}else if(X!==void 0){const de=X[Z];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(G.location,de);break;case 3:i.vertexAttrib3fv(G.location,de);break;case 4:i.vertexAttrib4fv(G.location,de);break;default:i.vertexAttrib1fv(G.location,de)}}}}b()}function w(){D();for(const M in n){const L=n[M];for(const F in L){const H=L[F];for(const q in H)h(H[q].object),delete H[q];delete L[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const F in L){const H=L[F];for(const q in H)h(H[q].object),delete H[q];delete L[F]}delete n[M.id]}function C(M){for(const L in n){const F=n[L];if(F[M.id]===void 0)continue;const H=F[M.id];for(const q in H)h(H[q].object),delete H[q];delete F[M.id]}}function D(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function ap(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let m=0;m<d;m++)p+=h[m];t.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],u[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let m=0;for(let x=0;x<d;x++)m+=h[x]*u[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!D)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function lp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Un,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||s;return s=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,E=b*4;let y=f.clippingState||null;c.value=y,y=h(m,u,E,p);for(let w=0;w!==E;++w)y[w]=t[w];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const f=p+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<f)&&(g=new Float32Array(f));for(let E=0,y=p;E!==x;++E,y+=4)o.copy(d[E]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function hp(i){let e=new WeakMap;function t(o,a){return a===to?o.mapping=Ei:a===no&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===to||a===no)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new rd(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const yi=4,Za=[.125,.215,.35,.446,.526,.582],Yn=20,Dr=new oa,Ja=new Le;let Ir=null,Ur=0,zr=0,Nr=!1;const Xn=(1+Math.sqrt(5))/2,mi=1/Xn,Qa=[new R(-Xn,mi,0),new R(Xn,mi,0),new R(-mi,0,Xn),new R(mi,0,Xn),new R(0,Xn,-mi),new R(0,Xn,mi),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],dp=new R;class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=dp}=r;Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Ur,zr),this._renderer.xr.enabled=Nr,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Nr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:En,format:tn,colorSpace:Ti,depthBuffer:!1},s=tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(r)),this._blurMaterial=fp(r,e,t)}return s}_compileMaterial(e){const t=new Q(this._lodPlanes[0],e);this._renderer.compile(t,Dr)}_sceneToCubeUV(e,t,n,s,r){const c=new Ut(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(Ja),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new $t({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new Q(new Ke,x);let f=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,f=!0):(x.color.copy(Ja),f=!0);for(let E=0;E<6;E++){const y=E%3;y===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):y===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const w=this._cubeSize;Rs(s,y*w,E>2?w:0,w,w),d.setRenderTarget(s),f&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=u,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ei||e.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Rs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qa[(s-r-1)%Qa.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Q(this._lodPlanes[s],l),u=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):Yn;g>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const f=[];let b=0;for(let C=0;C<Yn;++C){const D=C/x,S=Math.exp(-D*D/2);f.push(S),C===0?b+=S:C<g&&(b+=2*S)}for(let C=0;C<f.length;C++)f[C]=f[C]/b;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:E}=this;u.dTheta.value=m,u.mipInt.value=E-n;const y=this._sizeLods[s],w=3*y*(s>E-yi?s-E+yi:0),A=4*(this._cubeSize-y);Rs(t,w,A,3*y,2*y),c.setRenderTarget(t),c.render(d,Dr)}}function up(i){const e=[],t=[],n=[];let s=i;const r=i-yi+1+Za.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-yi?c=Za[o-i+yi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,m=6,x=3,g=2,f=1,b=new Float32Array(x*m*p),E=new Float32Array(g*m*p),y=new Float32Array(f*m*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(S,x*m*A),E.set(u,g*m*A);const M=[A,A,A,A,A,A];y.set(M,f*m*A)}const w=new yt;w.setAttribute("position",new Ft(b,x)),w.setAttribute("uv",new Ft(E,g)),w.setAttribute("faceIndex",new Ft(y,f)),e.push(w),s>yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tc(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function fp(i,e,t){const n=new Float32Array(Yn),s=new R(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ca(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function nc(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ic(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ca(){return`

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
	`}function pp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===to||c===no,h=c===Ei||c===wi;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ec(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ec(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Qi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function gp(i,e,t,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,m=d.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let E=0,y=b.length;E<y;E+=3){const w=b[E+0],A=b[E+1],C=b[E+2];u.push(w,A,A,C,C,w)}}else if(m!==void 0){const b=m.array;x=m.version;for(let E=0,y=b.length/3-1;E<y;E+=3){const w=E+0,A=E+1,C=E+2;u.push(w,A,A,C,C,w)}}else return;const g=new(il(u)?al:ol)(u,1);g.version=x;const f=r.get(d);f&&e.remove(f),r.set(d,g)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function xp(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){i.drawElements(n,p,r,u*o),t.update(p,n,1)}function l(u,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,u*o,m),t.update(p,n,m))}function h(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,n,1)}function d(u,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,m);let f=0;for(let b=0;b<m;b++)f+=p[b]*x[b];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function vp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function yp(i,e,t){const n=new WeakMap,s=new Qe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let w=a.attributes.position.count*y,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*A*4*d),D=new sl(C,w,A,d);D.type=Sn,D.needsUpdate=!0;const S=y*4;for(let L=0;L<d;L++){const F=f[L],H=b[L],q=E[L],j=w*A*4*L;for(let X=0;X<F.count;X++){const Z=X*S;m===!0&&(s.fromBufferAttribute(F,X),C[j+Z+0]=s.x,C[j+Z+1]=s.y,C[j+Z+2]=s.z,C[j+Z+3]=0),x===!0&&(s.fromBufferAttribute(H,X),C[j+Z+4]=s.x,C[j+Z+5]=s.y,C[j+Z+6]=s.z,C[j+Z+7]=0),g===!0&&(s.fromBufferAttribute(q,X),C[j+Z+8]=s.x,C[j+Z+9]=s.y,C[j+Z+10]=s.z,C[j+Z+11]=q.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new Re(w,A)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const x=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function _p(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const xl=new Ct,sc=new fl(1,1),vl=new sl,yl=new Vh,_l=new hl,rc=[],oc=[],ac=new Float32Array(16),cc=new Float32Array(9),lc=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qs(i,e){let t=oc[e];t===void 0&&(t=new Int32Array(e),oc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),St(t,n)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),St(t,n)}}function Ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Mt(t,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),St(t,n)}}function Rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function Lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=nl,r=sc):r=xl,t.setTexture2D(e||r,s)}function Fp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yl,s)}function Op(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_l,s)}function kp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vl,s)}function Bp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return Ep;case 35674:return wp;case 35675:return Tp;case 35676:return Ap;case 5124:case 35670:return Rp;case 35667:case 35671:return Cp;case 35668:case 35672:return Pp;case 35669:case 35673:return Lp;case 5125:return Dp;case 36294:return Ip;case 36295:return Up;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return kp}}function Hp(i,e){i.uniform1fv(this.addr,e)}function Gp(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Vp(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Wp(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function jp(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xp(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qp(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yp(i,e){i.uniform1iv(this.addr,e)}function $p(i,e){i.uniform2iv(this.addr,e)}function Kp(i,e){i.uniform3iv(this.addr,e)}function Zp(i,e){i.uniform4iv(this.addr,e)}function Jp(i,e){i.uniform1uiv(this.addr,e)}function Qp(i,e){i.uniform2uiv(this.addr,e)}function em(i,e){i.uniform3uiv(this.addr,e)}function tm(i,e){i.uniform4uiv(this.addr,e)}function nm(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xl,r[o])}function im(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||yl,r[o])}function sm(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||_l,r[o])}function rm(i,e,t){const n=this.cache,s=e.length,r=Qs(t,s);Mt(n,r)||(i.uniform1iv(this.addr,r),St(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vl,r[o])}function om(i){switch(i){case 5126:return Hp;case 35664:return Gp;case 35665:return Vp;case 35666:return Wp;case 35674:return jp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return $p;case 35668:case 35672:return Kp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Qp;case 36295:return em;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return nm;case 35679:case 36299:case 36307:return im;case 35680:case 36300:case 36308:case 36293:return sm;case 36289:case 36303:case 36311:case 36292:return rm}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}}class cm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=om(t.type)}}class lm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function hc(i,e){i.seq.push(e),i.map[e.id]=e}function hm(i,e,t){const n=i.name,s=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hc(t,l===void 0?new am(a,i,e):new cm(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new lm(a),hc(t,d)),t=d}}}class Os{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function dc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const dm=37297;let um=0;function fm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const uc=new ke;function pm(i){qe._getMatrix(uc,qe.workingColorSpace,i);const e=`mat3( ${uc.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(i)){case Vs:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fm(i.getShaderSource(e),a)}else return r}function mm(i,e){const t=pm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gm(i,e){let t;switch(e){case ih:t="Linear";break;case sh:t="Reinhard";break;case rh:t="Cineon";break;case jc:t="ACESFilmic";break;case ah:t="AgX";break;case ch:t="Neutral";break;case oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cs=new R;function xm(){qe.getLuminanceCoefficients(Cs);const i=Cs.x.toFixed(4),e=Cs.y.toFixed(4),t=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ji(i){return i!==""}function pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(i){return i.replace(Mm,bm)}const Sm=new Map;function bm(i,e){let t=He[e];if(t===void 0){const n=Sm.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return No(t)}const Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(Em,wm)}function wm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xc(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case wi:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Cm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vo:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lm(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Tm(t),l=Am(t),h=Rm(t),d=Cm(t),u=Pm(t),p=vm(t),m=ym(r),x=s.createProgram();let g,f,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ji).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ji).join(`
`),f.length>0&&(f+=`
`)):(g=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),f=[xc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?He.tonemapping_pars_fragment:"",t.toneMapping!==Nn?gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),o=No(o),o=pc(o,t),o=mc(o,t),a=No(a),a=pc(a,t),a=mc(a,t),o=gc(o),a=gc(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=b+g+o,y=b+f+a,w=dc(s,s.VERTEX_SHADER,E),A=dc(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(L){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(A)||"",j=F.trim(),X=H.trim(),Z=q.trim();let G=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,A);else{const de=fc(s,w,"vertex"),we=fc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+j+`
`+de+`
`+we)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(X===""||Z==="")&&(ae=!1);ae&&(L.diagnostics={runnable:G,programLog:j,vertexShader:{log:X,prefix:g},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(w),s.deleteShader(A),D=new Os(s,x),S=_m(s,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,dm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=A,this}let Dm=0;class Im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Um(e),t.set(e,n)),n}}class Um{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}}function zm(i,e,t,n,s,r,o){const a=new Qo,c=new Im,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function g(S,M,L,F,H){const q=F.fog,j=H.geometry,X=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),G=Z&&Z.mapping===qs?Z.image.height:null,ae=m[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=de!==void 0?de.length:0;let Ge=0;j.morphAttributes.position!==void 0&&(Ge=1),j.morphAttributes.normal!==void 0&&(Ge=2),j.morphAttributes.color!==void 0&&(Ge=3);let nt,at,Ye,Y;if(ae){const $e=an[ae];nt=$e.vertexShader,at=$e.fragmentShader}else nt=S.vertexShader,at=S.fragmentShader,c.update(S),Ye=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const J=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),Ue=H.isInstancedMesh===!0,Ee=H.isBatchedMesh===!0,je=!!S.map,Tt=!!S.matcap,P=!!Z,ct=!!S.aoMap,Fe=!!S.lightMap,De=!!S.bumpMap,xe=!!S.normalMap,lt=!!S.displacementMap,ve=!!S.emissiveMap,Be=!!S.metalnessMap,bt=!!S.roughnessMap,mt=S.anisotropy>0,T=S.clearcoat>0,v=S.dispersion>0,O=S.iridescence>0,W=S.sheen>0,K=S.transmission>0,V=mt&&!!S.anisotropyMap,be=T&&!!S.clearcoatMap,se=T&&!!S.clearcoatNormalMap,ye=T&&!!S.clearcoatRoughnessMap,_e=O&&!!S.iridescenceMap,ne=O&&!!S.iridescenceThicknessMap,he=W&&!!S.sheenColorMap,Pe=W&&!!S.sheenRoughnessMap,Me=!!S.specularMap,ce=!!S.specularColorMap,Oe=!!S.specularIntensityMap,I=K&&!!S.transmissionMap,ie=K&&!!S.thicknessMap,re=!!S.gradientMap,fe=!!S.alphaMap,ee=S.alphaTest>0,$=!!S.alphaHash,ge=!!S.extensions;let ze=Nn;S.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ze=i.toneMapping);const it={shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:at,defines:S.defines,customVertexShaderID:Ye,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ti,alphaToCoverage:!!S.alphaToCoverage,map:je,matcap:Tt,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:G,aoMap:ct,lightMap:Fe,bumpMap:De,normalMap:xe,displacementMap:u&&lt,emissiveMap:ve,normalMapObjectSpace:xe&&S.normalMapType===uh,normalMapTangentSpace:xe&&S.normalMapType===tl,metalnessMap:Be,roughnessMap:bt,anisotropy:mt,anisotropyMap:V,clearcoat:T,clearcoatMap:be,clearcoatNormalMap:se,clearcoatRoughnessMap:ye,dispersion:v,iridescence:O,iridescenceMap:_e,iridescenceThicknessMap:ne,sheen:W,sheenColorMap:he,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:ce,specularIntensityMap:Oe,transmission:K,transmissionMap:I,thicknessMap:ie,gradientMap:re,opaque:S.transparent===!1&&S.blending===_i&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:ee,alphaHash:$,combine:S.combine,mapUv:je&&x(S.map.channel),aoMapUv:ct&&x(S.aoMap.channel),lightMapUv:Fe&&x(S.lightMap.channel),bumpMapUv:De&&x(S.bumpMap.channel),normalMapUv:xe&&x(S.normalMap.channel),displacementMapUv:lt&&x(S.displacementMap.channel),emissiveMapUv:ve&&x(S.emissiveMap.channel),metalnessMapUv:Be&&x(S.metalnessMap.channel),roughnessMapUv:bt&&x(S.roughnessMap.channel),anisotropyMapUv:V&&x(S.anisotropyMap.channel),clearcoatMapUv:be&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(S.sheenRoughnessMap.channel),specularMapUv:Me&&x(S.specularMap.channel),specularColorMapUv:ce&&x(S.specularColorMap.channel),specularIntensityMapUv:Oe&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:ie&&x(S.thicknessMap.channel),alphaMapUv:fe&&x(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xe||mt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(je||fe),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pe,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:je&&S.map.isVideoTexture===!0&&qe.getTransfer(S.map.colorSpace)===Je,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&qe.getTransfer(S.emissiveMap.colorSpace)===Je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Yt,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ge&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&S.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return it.vertexUv1s=l.has(1),it.vertexUv2s=l.has(2),it.vertexUv3s=l.has(3),l.clear(),it}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(b(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=m[S.type];let L;if(M){const F=an[M];L=js.clone(F.uniforms)}else L=S.uniforms;return L}function w(S,M){let L;for(let F=0,H=h.length;F<H;F++){const q=h[F];if(q.cacheKey===M){L=q,++L.usedTimes;break}}return L===void 0&&(L=new Lm(i,M,S,r),h.push(L)),L}function A(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function Nm(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Fm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yc(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,p,m,x,g){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=x,f.group=g),e++,f}function a(d,u,p,m,x,g){const f=o(d,u,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(d,u,p,m,x,g){const f=o(d,u,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(d,u){t.length>1&&t.sort(d||Fm),n.length>1&&n.sort(u||vc),s.length>1&&s.sort(u||vc)}function h(){for(let d=e,u=i.length;d<u;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Om(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new yc,i.set(n,[o])):s>=r.length?(o=new yc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function km(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Le};break;case"SpotLight":t={position:new R,direction:new R,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hm=0;function Gm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vm(i){const e=new km,t=Bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);const s=new R,r=new ot,o=new ot;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,b=0,E=0,y=0,w=0,A=0,C=0;l.sort(Gm);for(let S=0,M=l.length;S<M;S++){const L=l[S],F=L.color,H=L.intensity,q=L.distance,j=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*H,d+=F.g*H,u+=F.b*H;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],H);C++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Z=L.shadow,G=t.get(L);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=L.shadow.matrix,b++}n.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(H),X.distance=q,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;const Z=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,Z.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[x]=Z.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=j,y++}x++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(F).multiplyScalar(H),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[g]=X,g++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const Z=L.shadow,G=t.get(L);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=L.shadow.matrix,E++}n.point[m]=X,m++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(H),X.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[f]=X,f++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=p,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=C,n.version=Hm++)}function c(l,h){let d=0,u=0,p=0,m=0,x=0;const g=h.matrixWorldInverse;for(let f=0,b=l.length;f<b;f++){const E=l[f];if(E.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),d++}else if(E.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(g),p++}else if(E.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(E.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(g),u++}else if(E.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function _c(i){const e=new Vm(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wm(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new _c(i),e.set(s,[a])):r>=o.length?(a=new _c(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
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
}`;function qm(i,e,t){let n=new ea;const s=new Re,r=new Re,o=new Qe,a=new hd({depthPacking:dh}),c=new dd,l={},h=t.maxTextureSize,d={[Fn]:Nt,[Nt]:Fn,[Yt]:Yt},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:jm,fragmentShader:Xm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new yt;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Q(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let f=this.type;this.render=function(A,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(bn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=f!==_n&&this.type===_n,q=f===_n&&this.type!==_n;for(let j=0,X=A.length;j<X;j++){const Z=A[j],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ae=G.getFrameExtents();if(s.multiply(ae),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,G.mapSize.y=r.y)),G.map===null||H===!0||q===!0){const we=this.type!==_n?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new sn(s.x,s.y,we),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const de=G.getViewportCount();for(let we=0;we<de;we++){const Ge=G.getViewport(we);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),F.viewport(o),G.updateMatrices(Z,we),n=G.getFrustum(),y(C,D,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===_n&&b(G,D),G.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,L)};function b(A,C){const D=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,D,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,D,p,x,null)}function E(A,C,D,S){let M=null;const L=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=M.uuid,H=C.uuid;let q=l[F];q===void 0&&(q={},l[F]=q);let j=q[H];j===void 0&&(j=M.clone(),q[H]=j,C.addEventListener("dispose",w)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,S===_n?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=D}return M}function y(A,C,D,S,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===_n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const H=e.update(A),q=A.material;if(Array.isArray(q)){const j=H.groups;for(let X=0,Z=j.length;X<Z;X++){const G=j[X],ae=q[G.materialIndex];if(ae&&ae.visible){const de=E(A,ae,S,M);A.onBeforeShadow(i,A,C,D,H,de,G),i.renderBufferDirect(D,null,H,de,A,G),A.onAfterShadow(i,A,C,D,H,de,G)}}}else if(q.visible){const j=E(A,q,S,M);A.onBeforeShadow(i,A,C,D,H,j,null),i.renderBufferDirect(D,null,H,j,A,null),A.onAfterShadow(i,A,C,D,H,j,null)}}const F=A.children;for(let H=0,q=F.length;H<q;H++)y(F[H],C,D,S,M)}function w(A){A.target.removeEventListener("dispose",w);for(const D in l){const S=l[D],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Ym={[Yr]:$r,[Kr]:Qr,[Zr]:eo,[bi]:Jr,[$r]:Yr,[Qr]:Kr,[eo]:Zr,[Jr]:bi};function $m(i,e){function t(){let I=!1;const ie=new Qe;let re=null;const fe=new Qe(0,0,0,0);return{setMask:function(ee){re!==ee&&!I&&(i.colorMask(ee,ee,ee,ee),re=ee)},setLocked:function(ee){I=ee},setClear:function(ee,$,ge,ze,it){it===!0&&(ee*=ze,$*=ze,ge*=ze),ie.set(ee,$,ge,ze),fe.equals(ie)===!1&&(i.clearColor(ee,$,ge,ze),fe.copy(ie))},reset:function(){I=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,re=null,fe=null,ee=null;return{setReversed:function($){if(ie!==$){const ge=e.get("EXT_clip_control");$?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ie=$;const ze=ee;ee=null,this.setClear(ze)}},getReversed:function(){return ie},setTest:function($){$?J(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function($){re!==$&&!I&&(i.depthMask($),re=$)},setFunc:function($){if(ie&&($=Ym[$]),fe!==$){switch($){case Yr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case Jr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=$}},setLocked:function($){I=$},setClear:function($){ee!==$&&(ie&&($=1-$),i.clearDepth($),ee=$)},reset:function(){I=!1,re=null,fe=null,ee=null,ie=!1}}}function s(){let I=!1,ie=null,re=null,fe=null,ee=null,$=null,ge=null,ze=null,it=null;return{setTest:function($e){I||($e?J(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function($e){ie!==$e&&!I&&(i.stencilMask($e),ie=$e)},setFunc:function($e,fn,on){(re!==$e||fe!==fn||ee!==on)&&(i.stencilFunc($e,fn,on),re=$e,fe=fn,ee=on)},setOp:function($e,fn,on){($!==$e||ge!==fn||ze!==on)&&(i.stencilOp($e,fn,on),$=$e,ge=fn,ze=on)},setLocked:function($e){I=$e},setClear:function($e){it!==$e&&(i.clearStencil($e),it=$e)},reset:function(){I=!1,ie=null,re=null,fe=null,ee=null,$=null,ge=null,ze=null,it=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],m=null,x=!1,g=null,f=null,b=null,E=null,y=null,w=null,A=null,C=new Le(0,0,0),D=0,S=!1,M=null,L=null,F=null,H=null,q=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=Z>=2);let ae=null,de={};const we=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),nt=new Qe().fromArray(we),at=new Qe().fromArray(Ge);function Ye(I,ie,re,fe){const ee=new Uint8Array(4),$=i.createTexture();i.bindTexture(I,$),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<re;ge++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return $}const Y={};Y[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(bi),De(!1),xe(ya),J(i.CULL_FACE),ct(bn);function J(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function pe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ue(I,ie){return d[I]!==ie?(i.bindFramebuffer(I,ie),d[I]=ie,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ie),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ee(I,ie){let re=p,fe=!1;if(I){re=u.get(ie),re===void 0&&(re=[],u.set(ie,re));const ee=I.textures;if(re.length!==ee.length||re[0]!==i.COLOR_ATTACHMENT0){for(let $=0,ge=ee.length;$<ge;$++)re[$]=i.COLOR_ATTACHMENT0+$;re.length=ee.length,fe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,fe=!0);fe&&i.drawBuffers(re)}function je(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const Tt={[qn]:i.FUNC_ADD,[Ol]:i.FUNC_SUBTRACT,[kl]:i.FUNC_REVERSE_SUBTRACT};Tt[Bl]=i.MIN,Tt[Hl]=i.MAX;const P={[Gl]:i.ZERO,[Vl]:i.ONE,[Wl]:i.SRC_COLOR,[Xr]:i.SRC_ALPHA,[Kl]:i.SRC_ALPHA_SATURATE,[Yl]:i.DST_COLOR,[Xl]:i.DST_ALPHA,[jl]:i.ONE_MINUS_SRC_COLOR,[qr]:i.ONE_MINUS_SRC_ALPHA,[$l]:i.ONE_MINUS_DST_COLOR,[ql]:i.ONE_MINUS_DST_ALPHA,[Zl]:i.CONSTANT_COLOR,[Jl]:i.ONE_MINUS_CONSTANT_COLOR,[Ql]:i.CONSTANT_ALPHA,[eh]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(I,ie,re,fe,ee,$,ge,ze,it,$e){if(I===bn){x===!0&&(pe(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),I!==Fl){if(I!==g||$e!==S){if((f!==qn||y!==qn)&&(i.blendEquation(i.FUNC_ADD),f=qn,y=qn),$e)switch(I){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gs:i.blendFunc(i.ONE,i.ONE);break;case _a:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _a:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ma:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,E=null,w=null,A=null,C.set(0,0,0),D=0,g=I,S=$e}return}ee=ee||ie,$=$||re,ge=ge||fe,(ie!==f||ee!==y)&&(i.blendEquationSeparate(Tt[ie],Tt[ee]),f=ie,y=ee),(re!==b||fe!==E||$!==w||ge!==A)&&(i.blendFuncSeparate(P[re],P[fe],P[$],P[ge]),b=re,E=fe,w=$,A=ge),(ze.equals(C)===!1||it!==D)&&(i.blendColor(ze.r,ze.g,ze.b,it),C.copy(ze),D=it),g=I,S=!1}function Fe(I,ie){I.side===Yt?pe(i.CULL_FACE):J(i.CULL_FACE);let re=I.side===Nt;ie&&(re=!re),De(re),I.blending===_i&&I.transparent===!1?ct(bn):ct(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;a.setTest(fe),fe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function xe(I){I!==zl?(J(i.CULL_FACE),I!==L&&(I===ya?i.cullFace(i.BACK):I===Nl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),L=I}function lt(I){I!==F&&(X&&i.lineWidth(I),F=I)}function ve(I,ie,re){I?(J(i.POLYGON_OFFSET_FILL),(H!==ie||q!==re)&&(i.polygonOffset(ie,re),H=ie,q=re)):pe(i.POLYGON_OFFSET_FILL)}function Be(I){I?J(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function bt(I){I===void 0&&(I=i.TEXTURE0+j-1),ae!==I&&(i.activeTexture(I),ae=I)}function mt(I,ie,re){re===void 0&&(ae===null?re=i.TEXTURE0+j-1:re=ae);let fe=de[re];fe===void 0&&(fe={type:void 0,texture:void 0},de[re]=fe),(fe.type!==I||fe.texture!==ie)&&(ae!==re&&(i.activeTexture(re),ae=re),i.bindTexture(I,ie||Y[I]),fe.type=I,fe.texture=ie)}function T(){const I=de[ae];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){nt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),nt.copy(I))}function Pe(I){at.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function Me(I,ie){let re=l.get(ie);re===void 0&&(re=new WeakMap,l.set(ie,re));let fe=re.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(ie,I.name),re.set(I,fe))}function ce(I,ie){const fe=l.get(ie).get(I);c.get(ie)!==fe&&(i.uniformBlockBinding(ie,fe,I.__bindingPointIndex),c.set(ie,fe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,de={},d={},u=new WeakMap,p=[],m=null,x=!1,g=null,f=null,b=null,E=null,y=null,w=null,A=null,C=new Le(0,0,0),D=0,S=!1,M=null,L=null,F=null,H=null,q=null,nt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:pe,bindFramebuffer:Ue,drawBuffers:Ee,useProgram:je,setBlending:ct,setMaterial:Fe,setFlipSided:De,setCullFace:xe,setLineWidth:lt,setPolygonOffset:ve,setScissorTest:Be,activeTexture:bt,bindTexture:mt,unbindTexture:T,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:_e,texImage3D:ne,updateUBOMapping:Me,uniformBlockBinding:ce,texStorage2D:se,texStorage3D:ye,texSubImage2D:W,texSubImage3D:K,compressedTexSubImage2D:V,compressedTexSubImage3D:be,scissor:he,viewport:Pe,reset:Oe}}function Km(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Re,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return p?new OffscreenCanvas(T,v):Ji("canvas")}function x(T,v,O){let W=1;const K=mt(T);if((K.width>O||K.height>O)&&(W=O/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(W*K.width),be=Math.floor(W*K.height);d===void 0&&(d=m(V,be));const se=v?m(V,be):d;return se.width=V,se.height=be,se.getContext("2d").drawImage(T,0,0,V,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+be+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function g(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,O,W,K=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=v;if(v===i.RED&&(O===i.FLOAT&&(V=i.R32F),O===i.HALF_FLOAT&&(V=i.R16F),O===i.UNSIGNED_BYTE&&(V=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.R8UI),O===i.UNSIGNED_SHORT&&(V=i.R16UI),O===i.UNSIGNED_INT&&(V=i.R32UI),O===i.BYTE&&(V=i.R8I),O===i.SHORT&&(V=i.R16I),O===i.INT&&(V=i.R32I)),v===i.RG&&(O===i.FLOAT&&(V=i.RG32F),O===i.HALF_FLOAT&&(V=i.RG16F),O===i.UNSIGNED_BYTE&&(V=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RG8UI),O===i.UNSIGNED_SHORT&&(V=i.RG16UI),O===i.UNSIGNED_INT&&(V=i.RG32UI),O===i.BYTE&&(V=i.RG8I),O===i.SHORT&&(V=i.RG16I),O===i.INT&&(V=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RGB8UI),O===i.UNSIGNED_SHORT&&(V=i.RGB16UI),O===i.UNSIGNED_INT&&(V=i.RGB32UI),O===i.BYTE&&(V=i.RGB8I),O===i.SHORT&&(V=i.RGB16I),O===i.INT&&(V=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),O===i.UNSIGNED_INT&&(V=i.RGBA32UI),O===i.BYTE&&(V=i.RGBA8I),O===i.SHORT&&(V=i.RGBA16I),O===i.INT&&(V=i.RGBA32I)),v===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),v===i.RGBA){const be=K?Vs:qe.getTransfer(W);O===i.FLOAT&&(V=i.RGBA32F),O===i.HALF_FLOAT&&(V=i.RGBA16F),O===i.UNSIGNED_BYTE&&(V=be===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(T,v){let O;return T?v===null||v===Jn||v===$i?O=i.DEPTH24_STENCIL8:v===Sn?O=i.DEPTH32F_STENCIL8:v===Yi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Jn||v===$i?O=i.DEPTH_COMPONENT24:v===Sn?O=i.DEPTH_COMPONENT32F:v===Yi&&(O=i.DEPTH_COMPONENT16),O}function w(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),D(v),v.isVideoTexture&&h.delete(v)}function C(T){const v=T.target;v.removeEventListener("dispose",C),M(v)}function D(T){const v=n.get(T);if(v.__webglInit===void 0)return;const O=T.source,W=u.get(O);if(W){const K=W[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(T),Object.keys(W).length===0&&u.delete(O)}n.remove(T)}function S(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const O=T.source,W=u.get(O);delete W[v.__cacheKey],o.memory.textures--}function M(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let K=0;K<v.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[W][K]);else i.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)i.deleteFramebuffer(v.__webglFramebuffer[W]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=T.textures;for(let W=0,K=O.length;W<K;W++){const V=n.get(O[W]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(O[W])}n.remove(T)}let L=0;function F(){L=0}function H(){const T=L;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),L+=1,T}function q(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function j(T,v){const O=n.get(T);if(T.isVideoTexture&&Be(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&O.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,v);return}}else T.isExternalTexture&&(O.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function X(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function Z(T,v){const O=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){Y(O,T,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(T,v){const O=n.get(T);if(T.version>0&&O.__version!==T.version){J(O,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const ae={[io]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},de={[nn]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[as]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[or]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},we={[fh]:i.NEVER,[yh]:i.ALWAYS,[ph]:i.LESS,[nl]:i.LEQUAL,[mh]:i.EQUAL,[vh]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function Ge(T,v){if(v.type===Sn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ln||v.magFilter===or||v.magFilter===as||v.magFilter===Zn||v.minFilter===ln||v.minFilter===or||v.minFilter===as||v.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ae[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ae[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ae[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,de[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,we[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==as&&v.minFilter!==Zn||v.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function nt(T,v){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const W=v.source;let K=u.get(W);K===void 0&&(K={},u.set(W,K));const V=q(v);if(V!==T.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[V].usedTimes++;const be=K[T.__cacheKey];be!==void 0&&(K[T.__cacheKey].usedTimes--,be.usedTimes===0&&S(v)),T.__cacheKey=V,T.__webglTexture=K[V].texture}return O}function at(T,v,O){return Math.floor(Math.floor(T/O)/v)}function Ye(T,v,O,W){const V=T.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,O,W,v.data);else{V.sort((ne,he)=>ne.start-he.start);let be=0;for(let ne=1;ne<V.length;ne++){const he=V[be],Pe=V[ne],Me=he.start+he.count,ce=at(Pe.start,v.width,4),Oe=at(he.start,v.width,4);Pe.start<=Me+1&&ce===Oe&&at(Pe.start+Pe.count-1,v.width,4)===ce?he.count=Math.max(he.count,Pe.start+Pe.count-he.start):(++be,V[be]=Pe)}V.length=be+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),_e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,he=V.length;ne<he;ne++){const Pe=V[ne],Me=Math.floor(Pe.start/4),ce=Math.ceil(Pe.count/4),Oe=Me%v.width,I=Math.floor(Me/v.width),ie=ce,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Oe,I,ie,re,O,W,v.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function Y(T,v,O){let W=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=i.TEXTURE_3D);const K=nt(T,v),V=v.source;t.bindTexture(W,T.__webglTexture,i.TEXTURE0+O);const be=n.get(V);if(V.version!==be.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const se=qe.getPrimaries(qe.workingColorSpace),ye=v.colorSpace===zn?null:qe.getPrimaries(v.colorSpace),_e=v.colorSpace===zn||se===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ne=x(v.image,!1,s.maxTextureSize);ne=bt(v,ne);const he=r.convert(v.format,v.colorSpace),Pe=r.convert(v.type);let Me=E(v.internalFormat,he,Pe,v.colorSpace,v.isVideoTexture);Ge(W,v);let ce;const Oe=v.mipmaps,I=v.isVideoTexture!==!0,ie=be.__version===void 0||K===!0,re=V.dataReady,fe=w(v,ne);if(v.isDepthTexture)Me=y(v.format===Zi,v.type),ie&&(I?t.texStorage2D(i.TEXTURE_2D,1,Me,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,he,Pe,null));else if(v.isDataTexture)if(Oe.length>0){I&&ie&&t.texStorage2D(i.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let ee=0,$=Oe.length;ee<$;ee++)ce=Oe[ee],I?re&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,he,Pe,ce.data):t.texImage2D(i.TEXTURE_2D,ee,Me,ce.width,ce.height,0,he,Pe,ce.data);v.generateMipmaps=!1}else I?(ie&&t.texStorage2D(i.TEXTURE_2D,fe,Me,ne.width,ne.height),re&&Ye(v,ne,he,Pe)):t.texImage2D(i.TEXTURE_2D,0,Me,ne.width,ne.height,0,he,Pe,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){I&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Me,Oe[0].width,Oe[0].height,ne.depth);for(let ee=0,$=Oe.length;ee<$;ee++)if(ce=Oe[ee],v.format!==tn)if(he!==null)if(I){if(re)if(v.layerUpdates.size>0){const ge=Ka(ce.width,ce.height,v.format,v.type);for(const ze of v.layerUpdates){const it=ce.data.subarray(ze*ge/ce.data.BYTES_PER_ELEMENT,(ze+1)*ge/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,ze,ce.width,ce.height,1,he,it)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,he,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Me,ce.width,ce.height,ne.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,ne.depth,he,Pe,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Me,ce.width,ce.height,ne.depth,0,he,Pe,ce.data)}else{I&&ie&&t.texStorage2D(i.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let ee=0,$=Oe.length;ee<$;ee++)ce=Oe[ee],v.format!==tn?he!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ce.width,ce.height,he,Pe,ce.data):t.texImage2D(i.TEXTURE_2D,ee,Me,ce.width,ce.height,0,he,Pe,ce.data)}else if(v.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Me,ne.width,ne.height,ne.depth),re)if(v.layerUpdates.size>0){const ee=Ka(ne.width,ne.height,v.format,v.type);for(const $ of v.layerUpdates){const ge=ne.data.subarray($*ee/ne.data.BYTES_PER_ELEMENT,($+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ne.width,ne.height,1,he,Pe,ge)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Pe,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ne.width,ne.height,ne.depth,0,he,Pe,ne.data);else if(v.isData3DTexture)I?(ie&&t.texStorage3D(i.TEXTURE_3D,fe,Me,ne.width,ne.height,ne.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Pe,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ne.width,ne.height,ne.depth,0,he,Pe,ne.data);else if(v.isFramebufferTexture){if(ie)if(I)t.texStorage2D(i.TEXTURE_2D,fe,Me,ne.width,ne.height);else{let ee=ne.width,$=ne.height;for(let ge=0;ge<fe;ge++)t.texImage2D(i.TEXTURE_2D,ge,Me,ee,$,0,he,Pe,null),ee>>=1,$>>=1}}else if(Oe.length>0){if(I&&ie){const ee=mt(Oe[0]);t.texStorage2D(i.TEXTURE_2D,fe,Me,ee.width,ee.height)}for(let ee=0,$=Oe.length;ee<$;ee++)ce=Oe[ee],I?re&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,he,Pe,ce):t.texImage2D(i.TEXTURE_2D,ee,Me,he,Pe,ce);v.generateMipmaps=!1}else if(I){if(ie){const ee=mt(ne);t.texStorage2D(i.TEXTURE_2D,fe,Me,ee.width,ee.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Pe,ne)}else t.texImage2D(i.TEXTURE_2D,0,Me,he,Pe,ne);g(v)&&f(W),be.__version=V.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function J(T,v,O){if(v.image.length!==6)return;const W=nt(T,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const V=n.get(K);if(K.version!==V.__version||W===!0){t.activeTexture(i.TEXTURE0+O);const be=qe.getPrimaries(qe.workingColorSpace),se=v.colorSpace===zn?null:qe.getPrimaries(v.colorSpace),ye=v.colorSpace===zn||be===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const _e=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!_e&&!ne?he[$]=x(v.image[$],!0,s.maxCubemapSize):he[$]=ne?v.image[$].image:v.image[$],he[$]=bt(v,he[$]);const Pe=he[0],Me=r.convert(v.format,v.colorSpace),ce=r.convert(v.type),Oe=E(v.internalFormat,Me,ce,v.colorSpace),I=v.isVideoTexture!==!0,ie=V.__version===void 0||W===!0,re=K.dataReady;let fe=w(v,Pe);Ge(i.TEXTURE_CUBE_MAP,v);let ee;if(_e){I&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,Pe.width,Pe.height);for(let $=0;$<6;$++){ee=he[$].mipmaps;for(let ge=0;ge<ee.length;ge++){const ze=ee[ge];v.format!==tn?Me!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,ze.width,ze.height,Me,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Oe,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,0,0,ze.width,ze.height,Me,ce,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge,Oe,ze.width,ze.height,0,Me,ce,ze.data)}}}else{if(ee=v.mipmaps,I&&ie){ee.length>0&&fe++;const $=mt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,$.width,$.height)}for(let $=0;$<6;$++)if(ne){I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Me,ce,he[$].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,he[$].width,he[$].height,0,Me,ce,he[$].data);for(let ge=0;ge<ee.length;ge++){const it=ee[ge].image[$].image;I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,it.width,it.height,Me,ce,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Oe,it.width,it.height,0,Me,ce,it.data)}}else{I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Me,ce,he[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Oe,Me,ce,he[$]);for(let ge=0;ge<ee.length;ge++){const ze=ee[ge];I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,0,0,Me,ce,ze.image[$]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ge+1,Oe,Me,ce,ze.image[$])}}}g(v)&&f(i.TEXTURE_CUBE_MAP),V.__version=K.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function pe(T,v,O,W,K,V){const be=r.convert(O.format,O.colorSpace),se=r.convert(O.type),ye=E(O.internalFormat,be,se,O.colorSpace),_e=n.get(v),ne=n.get(O);if(ne.__renderTarget=v,!_e.__hasExternalTextures){const he=Math.max(1,v.width>>V),Pe=Math.max(1,v.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,V,ye,he,Pe,v.depth,0,be,se,null):t.texImage2D(K,V,ye,he,Pe,0,be,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,ne.__webglTexture,0,lt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,ne.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(T,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const W=v.depthTexture,K=W&&W.isDepthTexture?W.type:null,V=y(v.stencilBuffer,K),be=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=lt(v);ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,V,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,V,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,V,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,T)}else{const W=v.textures;for(let K=0;K<W.length;K++){const V=W[K],be=r.convert(V.format,V.colorSpace),se=r.convert(V.type),ye=E(V.internalFormat,be,se,V.colorSpace),_e=lt(v);O&&ve(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,ye,v.width,v.height):ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,ye,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ye,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=n.get(v.depthTexture);W.__renderTarget=v,(!W.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const K=W.__webglTexture,V=lt(v);if(v.depthTexture.format===Ki)ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===Zi)ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function je(T){const v=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){const K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=W}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const W=T.texture.mipmaps;W&&W.length>0?Ee(v.__webglFramebuffer[0],T):Ee(v.__webglFramebuffer,T)}else if(O){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=i.createRenderbuffer(),Ue(v.__webglDepthbuffer[W],T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else{const W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ue(v.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(T,v,O){const W=n.get(T);v!==void 0&&pe(W.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&je(T)}function P(T){const v=T.texture,O=n.get(T),W=n.get(v);T.addEventListener("dispose",C);const K=T.textures,V=T.isWebGLCubeRenderTarget===!0,be=K.length>1;if(be||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=v.version,o.memory.textures++),V){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let ye=0;ye<v.mipmaps.length;ye++)O.__webglFramebuffer[se][ye]=i.createFramebuffer()}else O.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)O.__webglFramebuffer[se]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(be)for(let se=0,ye=K.length;se<ye;se++){const _e=n.get(K[se]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&ve(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){const ye=K[se];O.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const _e=r.convert(ye.format,ye.colorSpace),ne=r.convert(ye.type),he=E(ye.internalFormat,_e,ne,ye.colorSpace,T.isXRRenderTarget===!0),Pe=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,O.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)pe(O.__webglFramebuffer[se][ye],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye);else pe(O.__webglFramebuffer[se],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let se=0,ye=K.length;se<ye;se++){const _e=K[se],ne=n.get(_e);let he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ne.__webglTexture),Ge(he,_e),pe(O.__webglFramebuffer,T,_e,i.COLOR_ATTACHMENT0+se,he,0),g(_e)&&f(he)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,W.__webglTexture),Ge(se,v),v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)pe(O.__webglFramebuffer[ye],T,v,i.COLOR_ATTACHMENT0,se,ye);else pe(O.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,se,0);g(v)&&f(se),t.unbindTexture()}T.depthBuffer&&je(T)}function ct(T){const v=T.textures;for(let O=0,W=v.length;O<W;O++){const K=v[O];if(g(K)){const V=b(T),be=n.get(K).__webglTexture;t.bindTexture(V,be),f(V),t.unbindTexture()}}}const Fe=[],De=[];function xe(T){if(T.samples>0){if(ve(T)===!1){const v=T.textures,O=T.width,W=T.height;let K=i.COLOR_BUFFER_BIT;const V=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(T),se=v.length>1;if(se)for(let _e=0;_e<v.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ye=T.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let _e=0;_e<v.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const ne=n.get(v[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,O,W,0,0,O,W,K,i.NEAREST),c===!0&&(Fe.length=0,De.length=0,Fe.push(i.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Fe.push(V),De.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let _e=0;_e<v.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,be.__webglColorRenderbuffer[_e]);const ne=n.get(v[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function ve(T){const v=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Be(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function bt(T,v){const O=T.colorSpace,W=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Ti&&O!==zn&&(qe.getTransfer(O)===Je?(W!==tn||K!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function mt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Tt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ve}function Zm(i,e){function t(n,s=zn){let r;const o=qe.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qc)return i.BYTE;if(n===Yc)return i.SHORT;if(n===Yi)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Zc)return i.ALPHA;if(n===Jc)return i.RGB;if(n===tn)return i.RGBA;if(n===Ki)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Qc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===el)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Us||n===zs||n===Ns||n===Fs)if(o===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Us)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Us)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===oo||n===ao||n===co)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ro)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===ho||n===uo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===ho)return o===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===uo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fo||n===po||n===mo||n===go||n===xo||n===vo||n===yo||n===_o||n===Mo||n===So||n===bo||n===Eo||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===po)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===go)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return o===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ao||n===Ro||n===Co)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ao)return o===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Co)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Po||n===Lo||n===Do||n===Io)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
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

}`;class e0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new pl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:Jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t0 extends Di{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new e0,f={},b=t.getContextAttributes();let E=null,y=null;const w=[],A=[],C=new Re;let D=null;const S=new Ut;S.viewport=new Qe;const M=new Ut;M.viewport=new Qe;const L=[S,M],F=new yd;let H=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=w[Y];return J===void 0&&(J=new Ar,w[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=w[Y];return J===void 0&&(J=new Ar,w[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=w[Y];return J===void 0&&(J=new Ar,w[Y]=J),J.getHandSpace()};function j(Y){const J=A.indexOf(Y.inputSource);if(J===-1)return;const pe=w[J];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,l||o),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<w.length;Y++){const J=A[Y];J!==null&&(A[Y]=null,w[Y].disconnect(J))}H=null,q=null,g.reset();for(const Y in f)delete f[Y];e.setRenderTarget(E),p=null,u=null,d=null,s=null,y=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Z),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ue=null,Ee=null;b.depth&&(Ee=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?Zi:Ki,Ue=b.stencil?$i:Jn);const je={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new sn(u.textureWidth,u.textureHeight,{format:tn,type:dn,depthTexture:new fl(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new sn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(Y){for(let J=0;J<Y.removed.length;J++){const pe=Y.removed[J],Ue=A.indexOf(pe);Ue>=0&&(A[Ue]=null,w[Ue].disconnect(pe))}for(let J=0;J<Y.added.length;J++){const pe=Y.added[J];let Ue=A.indexOf(pe);if(Ue===-1){for(let je=0;je<w.length;je++)if(je>=A.length){A.push(pe),Ue=je;break}else if(A[je]===null){A[je]=pe,Ue=je;break}if(Ue===-1)break}const Ee=w[Ue];Ee&&Ee.connect(pe)}}const G=new R,ae=new R;function de(Y,J,pe){G.setFromMatrixPosition(J.matrixWorld),ae.setFromMatrixPosition(pe.matrixWorld);const Ue=G.distanceTo(ae),Ee=J.projectionMatrix.elements,je=pe.projectionMatrix.elements,Tt=Ee[14]/(Ee[10]-1),P=Ee[14]/(Ee[10]+1),ct=(Ee[9]+1)/Ee[5],Fe=(Ee[9]-1)/Ee[5],De=(Ee[8]-1)/Ee[0],xe=(je[8]+1)/je[0],lt=Tt*De,ve=Tt*xe,Be=Ue/(-De+xe),bt=Be*-De;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(bt),Y.translateZ(Be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const mt=Tt+Be,T=P+Be,v=lt-bt,O=ve+(Ue-bt),W=ct*P/T*mt,K=Fe*P/T*mt;Y.projectionMatrix.makePerspective(v,O,W,K,mt,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function we(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let J=Y.near,pe=Y.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),F.near=M.near=S.near=J,F.far=M.far=S.far=pe,(H!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),H=F.near,q=F.far),F.layers.mask=Y.layers.mask|6,S.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;const Ue=Y.parent,Ee=F.cameras;we(F,Ue);for(let je=0;je<Ee.length;je++)we(Ee[je],Ue);Ee.length===2?de(F,S,M):F.projectionMatrix.copy(S.projectionMatrix),Ge(Y,F,Ue)};function Ge(Y,J,pe){pe===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ai*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(Y){return f[Y]};let nt=null;function at(Y,J){if(h=J.getViewerPose(l||o),m=J,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Ue=!1;pe.length!==F.cameras.length&&(F.cameras.length=0,Ue=!0);for(let P=0;P<pe.length;P++){const ct=pe[P];let Fe=null;if(p!==null)Fe=p.getViewport(ct);else{const xe=d.getViewSubImage(u,ct);Fe=xe.viewport,P===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let De=L[P];De===void 0&&(De=new Ut,De.layers.enable(P),De.viewport=new Qe,L[P]=De),De.matrix.fromArray(ct.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ct.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),P===0&&(F.matrix.copy(De.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ue===!0&&F.cameras.push(De)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const P=d.getDepthInformation(pe[0]);P&&P.isValid&&P.texture&&g.init(P,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let P=0;P<pe.length;P++){const ct=pe[P].camera;if(ct){let Fe=f[ct];Fe||(Fe=new pl,f[ct]=Fe);const De=d.getCameraImage(ct);Fe.sourceTexture=De}}}}for(let pe=0;pe<w.length;pe++){const Ue=A[pe],Ee=w[pe];Ue!==null&&Ee!==void 0&&Ee.update(Ue,J,l||o)}nt&&nt(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Ye=new gl;Ye.setAnimationLoop(at),this.setAnimationLoop=function(Y){nt=Y},this.dispose=function(){}}}const jn=new un,n0=new ot;function i0(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,cl(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,b,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),h(g,f)):f.isMeshStandardMaterial?(r(g,f),u(g,f),f.isMeshPhysicalMaterial&&p(g,f,y)):f.isMeshMatcapMaterial?(r(g,f),m(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),x(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,b,E):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Nt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Nt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const b=e.get(f),E=b.envMap,y=b.envMapRotation;E&&(g.envMap.value=E,jn.copy(y),jn.x*=-1,jn.y*=-1,jn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),g.envMapRotation.value.setFromMatrix4(n0.makeRotationFromEuler(jn)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,b,E){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*b,g.scale.value=E*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function u(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,b){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const b=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function s0(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,E){const y=E.program;n.uniformBlockBinding(b,y)}function l(b,E){let y=s[b.id];y===void 0&&(m(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",g));const w=E.program;n.updateUBOMapping(b,w);const A=e.render.frame;r[b.id]!==A&&(u(b),r[b.id]=A)}function h(b){const E=d();b.__bindingPointIndex=E;const y=i.createBuffer(),w=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const E=s[b.id],y=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,C=y.length;A<C;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,M=D.length;S<M;S++){const L=D[S];if(p(L,A,S,w)===!0){const F=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let j=0;j<H.length;j++){const X=H[j],Z=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+q,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,q),q+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,E,y,w){const A=b.value,C=E+"_"+y;if(w[C]===void 0)return typeof A=="number"||typeof A=="boolean"?w[C]=A:w[C]=A.clone(),!0;{const D=w[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return w[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function m(b){const E=b.uniforms;let y=0;const w=16;for(let C=0,D=E.length;C<D;C++){const S=Array.isArray(E[C])?E[C]:[E[C]];for(let M=0,L=S.length;M<L;M++){const F=S[M],H=Array.isArray(F.value)?F.value:[F.value];for(let q=0,j=H.length;q<j;q++){const X=H[q],Z=x(X),G=y%w,ae=G%Z.boundary,de=G+ae;y+=ae,de!==0&&w-de<Z.storage&&(y+=w-de),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Z.storage}}}const A=y%w;return A>0&&(y+=w-A),b.__size=y,b.__cache={},this}function x(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class r0{constructor(e={}){const{canvas:t=Nh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,f=null;const b=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=kt;let A=0,C=0,D=null,S=-1,M=null;const L=new Qe,F=new Qe;let H=null;const q=new Le(0);let j=0,X=t.width,Z=t.height,G=1,ae=null,de=null;const we=new Qe(0,0,X,Z),Ge=new Qe(0,0,X,Z);let nt=!1;const at=new ea;let Ye=!1,Y=!1;const J=new ot,pe=new R,Ue=new Qe,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Tt(){return D===null?G:1}let P=n;function ct(_,z){return t.getContext(_,z)}try{const _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Go}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ee,!1),P===null){const z="webgl2";if(P=ct(z,_),P===null)throw ct(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Fe,De,xe,lt,ve,Be,bt,mt,T,v,O,W,K,V,be,se,ye,_e,ne,he,Pe,Me,ce,Oe;function I(){Fe=new mp(P),Fe.init(),Me=new Zm(P,Fe),De=new cp(P,Fe,e,Me),xe=new $m(P,Fe),De.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),lt=new vp(P),ve=new Nm,Be=new Km(P,Fe,xe,ve,De,Me,lt),bt=new hp(y),mt=new pp(y),T=new bd(P),ce=new op(P,T),v=new gp(P,T,lt,ce),O=new _p(P,v,T,lt),ne=new yp(P,De,Be),se=new lp(ve),W=new zm(y,bt,mt,Fe,De,ce,se),K=new i0(y,ve),V=new Om,be=new Wm(Fe),_e=new rp(y,bt,mt,xe,O,p,c),ye=new qm(y,O,De),Oe=new s0(P,lt,De,xe),he=new ap(P,Fe,lt),Pe=new xp(P,Fe,lt),lt.programs=W.programs,y.capabilities=De,y.extensions=Fe,y.properties=ve,y.renderLists=V,y.shadowMap=ye,y.state=xe,y.info=lt}I();const ie=new t0(y,P);this.xr=ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const _=Fe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){const _=Fe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(_){_!==void 0&&(G=_,this.setSize(X,Z,!1))},this.getSize=function(_){return _.set(X,Z)},this.setSize=function(_,z,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=_,Z=z,t.width=Math.floor(_*G),t.height=Math.floor(z*G),k===!0&&(t.style.width=_+"px",t.style.height=z+"px"),this.setViewport(0,0,_,z)},this.getDrawingBufferSize=function(_){return _.set(X*G,Z*G).floor()},this.setDrawingBufferSize=function(_,z,k){X=_,Z=z,G=k,t.width=Math.floor(_*k),t.height=Math.floor(z*k),this.setViewport(0,0,_,z)},this.getCurrentViewport=function(_){return _.copy(L)},this.getViewport=function(_){return _.copy(we)},this.setViewport=function(_,z,k,B){_.isVector4?we.set(_.x,_.y,_.z,_.w):we.set(_,z,k,B),xe.viewport(L.copy(we).multiplyScalar(G).round())},this.getScissor=function(_){return _.copy(Ge)},this.setScissor=function(_,z,k,B){_.isVector4?Ge.set(_.x,_.y,_.z,_.w):Ge.set(_,z,k,B),xe.scissor(F.copy(Ge).multiplyScalar(G).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(_){xe.setScissorTest(nt=_)},this.setOpaqueSort=function(_){ae=_},this.setTransparentSort=function(_){de=_},this.getClearColor=function(_){return _.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(_=!0,z=!0,k=!0){let B=0;if(_){let N=!1;if(D!==null){const te=D.texture.format;N=te===$o||te===Yo||te===qo}if(N){const te=D.texture.type,le=te===dn||te===Jn||te===Yi||te===$i||te===jo||te===Xo,me=_e.getClearColor(),ue=_e.getClearAlpha(),Ce=me.r,Ie=me.g,Te=me.b;le?(m[0]=Ce,m[1]=Ie,m[2]=Te,m[3]=ue,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Ce,x[1]=Ie,x[2]=Te,x[3]=ue,P.clearBufferiv(P.COLOR,0,x))}else B|=P.COLOR_BUFFER_BIT}z&&(B|=P.DEPTH_BUFFER_BIT),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),_e.dispose(),V.dispose(),be.dispose(),ve.dispose(),bt.dispose(),mt.dispose(),O.dispose(),ce.dispose(),Oe.dispose(),W.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",on),ie.removeEventListener("sessionend",fa),On.stop()};function re(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const _=lt.autoReset,z=ye.enabled,k=ye.autoUpdate,B=ye.needsUpdate,N=ye.type;I(),lt.autoReset=_,ye.enabled=z,ye.autoUpdate=k,ye.needsUpdate=B,ye.type=N}function ee(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function $(_){const z=_.target;z.removeEventListener("dispose",$),ge(z)}function ge(_){ze(_),ve.remove(_)}function ze(_){const z=ve.get(_).programs;z!==void 0&&(z.forEach(function(k){W.releaseProgram(k)}),_.isShaderMaterial&&W.releaseShaderCache(_))}this.renderBufferDirect=function(_,z,k,B,N,te){z===null&&(z=Ee);const le=N.isMesh&&N.matrixWorld.determinant()<0,me=Cl(_,z,k,B,N);xe.setMaterial(B,le);let ue=k.index,Ce=1;if(B.wireframe===!0){if(ue=v.getWireframeAttribute(k),ue===void 0)return;Ce=2}const Ie=k.drawRange,Te=k.attributes.position;let Ve=Ie.start*Ce,Ze=(Ie.start+Ie.count)*Ce;te!==null&&(Ve=Math.max(Ve,te.start*Ce),Ze=Math.min(Ze,(te.start+te.count)*Ce)),ue!==null?(Ve=Math.max(Ve,0),Ze=Math.min(Ze,ue.count)):Te!=null&&(Ve=Math.max(Ve,0),Ze=Math.min(Ze,Te.count));const ft=Ze-Ve;if(ft<0||ft===1/0)return;ce.setup(N,B,me,k,ue);let st,tt=he;if(ue!==null&&(st=T.get(ue),tt=Pe,tt.setIndex(st)),N.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*Tt()),tt.setMode(P.LINES)):tt.setMode(P.TRIANGLES);else if(N.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),xe.setLineWidth(Ae*Tt()),N.isLineSegments?tt.setMode(P.LINES):N.isLineLoop?tt.setMode(P.LINE_LOOP):tt.setMode(P.LINE_STRIP)}else N.isPoints?tt.setMode(P.POINTS):N.isSprite&&tt.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ae=N._multiDrawStarts,ht=N._multiDrawCounts,Xe=N._multiDrawCount,Ht=ue?T.get(ue).bytesPerElement:1,ei=ve.get(B).currentProgram.getUniforms();for(let Gt=0;Gt<Xe;Gt++)ei.setValue(P,"_gl_DrawID",Gt),tt.render(Ae[Gt]/Ht,ht[Gt])}else if(N.isInstancedMesh)tt.renderInstances(Ve,ft,N.count);else if(k.isInstancedBufferGeometry){const Ae=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ht=Math.min(k.instanceCount,Ae);tt.renderInstances(Ve,ft,ht)}else tt.render(Ve,ft)};function it(_,z,k){_.transparent===!0&&_.side===Yt&&_.forceSinglePass===!1?(_.side=Nt,_.needsUpdate=!0,os(_,z,k),_.side=Fn,_.needsUpdate=!0,os(_,z,k),_.side=Yt):os(_,z,k)}this.compile=function(_,z,k=null){k===null&&(k=_),f=be.get(k),f.init(z),E.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),_!==k&&_.traverseVisible(function(N){N.isLight&&N.layers.test(z.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const B=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let le=0;le<te.length;le++){const me=te[le];it(me,k,N),B.add(me)}else it(te,k,N),B.add(te)}),f=E.pop(),B},this.compileAsync=function(_,z,k=null){const B=this.compile(_,z,k);return new Promise(N=>{function te(){if(B.forEach(function(le){ve.get(le).currentProgram.isReady()&&B.delete(le)}),B.size===0){N(_);return}setTimeout(te,10)}Fe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let $e=null;function fn(_){$e&&$e(_)}function on(){On.stop()}function fa(){On.start()}const On=new gl;On.setAnimationLoop(fn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(_){$e=_,ie.setAnimationLoop(_),_===null?On.stop():On.start()},ie.addEventListener("sessionstart",on),ie.addEventListener("sessionend",fa),this.render=function(_,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),_.isScene===!0&&_.onBeforeRender(y,_,z,D),f=be.get(_,E.length),f.init(z),E.push(f),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),at.setFromProjectionMatrix(J,hn,z.reversedDepth),Y=this.localClippingEnabled,Ye=se.init(this.clippingPlanes,Y),g=V.get(_,b.length),g.init(),b.push(g),ie.enabled===!0&&ie.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&sr(te,z,-1/0,y.sortObjects)}sr(_,z,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(ae,de),je=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,je&&_e.addToRenderList(g,_),this.info.render.frame++,Ye===!0&&se.beginShadows();const k=f.state.shadowsArray;ye.render(k,_,z),Ye===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=g.opaque,N=g.transmissive;if(f.setupLights(),z.isArrayCamera){const te=z.cameras;if(N.length>0)for(let le=0,me=te.length;le<me;le++){const ue=te[le];ma(B,N,_,ue)}je&&_e.render(_);for(let le=0,me=te.length;le<me;le++){const ue=te[le];pa(g,_,ue,ue.viewport)}}else N.length>0&&ma(B,N,_,z),je&&_e.render(_),pa(g,_,z);D!==null&&C===0&&(Be.updateMultisampleRenderTarget(D),Be.updateRenderTargetMipmap(D)),_.isScene===!0&&_.onAfterRender(y,_,z),ce.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(f=E[E.length-1],Ye===!0&&se.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function sr(_,z,k,B){if(_.visible===!1)return;if(_.layers.test(z.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(z);else if(_.isLight)f.pushLight(_),_.castShadow&&f.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||at.intersectsSprite(_)){B&&Ue.setFromMatrixPosition(_.matrixWorld).applyMatrix4(J);const le=O.update(_),me=_.material;me.visible&&g.push(_,le,me,k,Ue.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||at.intersectsObject(_))){const le=O.update(_),me=_.material;if(B&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ue.copy(_.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),Ue.copy(le.boundingSphere.center)),Ue.applyMatrix4(_.matrixWorld).applyMatrix4(J)),Array.isArray(me)){const ue=le.groups;for(let Ce=0,Ie=ue.length;Ce<Ie;Ce++){const Te=ue[Ce],Ve=me[Te.materialIndex];Ve&&Ve.visible&&g.push(_,le,Ve,k,Ue.z,Te)}}else me.visible&&g.push(_,le,me,k,Ue.z,null)}}const te=_.children;for(let le=0,me=te.length;le<me;le++)sr(te[le],z,k,B)}function pa(_,z,k,B){const N=_.opaque,te=_.transmissive,le=_.transparent;f.setupLightsView(k),Ye===!0&&se.setGlobalState(y.clippingPlanes,k),B&&xe.viewport(L.copy(B)),N.length>0&&rs(N,z,k),te.length>0&&rs(te,z,k),le.length>0&&rs(le,z,k),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function ma(_,z,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new sn(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?En:dn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const te=f.state.transmissionRenderTarget[B.id],le=B.viewport||L;te.setSize(le.z*y.transmissionResolutionScale,le.w*y.transmissionResolutionScale);const me=y.getRenderTarget(),ue=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(te),y.getClearColor(q),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),je&&_e.render(k);const Ie=y.toneMapping;y.toneMapping=Nn;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),Ye===!0&&se.setGlobalState(y.clippingPlanes,B),rs(_,k,B),Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ze=0,ft=z.length;Ze<ft;Ze++){const st=z[Ze],tt=st.object,Ae=st.geometry,ht=st.material,Xe=st.group;if(ht.side===Yt&&tt.layers.test(B.layers)){const Ht=ht.side;ht.side=Nt,ht.needsUpdate=!0,ga(tt,k,B,Ae,ht,Xe),ht.side=Ht,ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(Be.updateMultisampleRenderTarget(te),Be.updateRenderTargetMipmap(te))}y.setRenderTarget(me,ue,Ce),y.setClearColor(q,j),Te!==void 0&&(B.viewport=Te),y.toneMapping=Ie}function rs(_,z,k){const B=z.isScene===!0?z.overrideMaterial:null;for(let N=0,te=_.length;N<te;N++){const le=_[N],me=le.object,ue=le.geometry,Ce=le.group;let Ie=le.material;Ie.allowOverride===!0&&B!==null&&(Ie=B),me.layers.test(k.layers)&&ga(me,z,k,ue,Ie,Ce)}}function ga(_,z,k,B,N,te){_.onBeforeRender(y,z,k,B,N,te),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(y,z,k,B,_,te),N.transparent===!0&&N.side===Yt&&N.forceSinglePass===!1?(N.side=Nt,N.needsUpdate=!0,y.renderBufferDirect(k,z,B,N,_,te),N.side=Fn,N.needsUpdate=!0,y.renderBufferDirect(k,z,B,N,_,te),N.side=Yt):y.renderBufferDirect(k,z,B,N,_,te),_.onAfterRender(y,z,k,B,N,te)}function os(_,z,k){z.isScene!==!0&&(z=Ee);const B=ve.get(_),N=f.state.lights,te=f.state.shadowsArray,le=N.state.version,me=W.getParameters(_,N.state,te,z,k),ue=W.getProgramCacheKey(me);let Ce=B.programs;B.environment=_.isMeshStandardMaterial?z.environment:null,B.fog=z.fog,B.envMap=(_.isMeshStandardMaterial?mt:bt).get(_.envMap||B.environment),B.envMapRotation=B.environment!==null&&_.envMap===null?z.environmentRotation:_.envMapRotation,Ce===void 0&&(_.addEventListener("dispose",$),Ce=new Map,B.programs=Ce);let Ie=Ce.get(ue);if(Ie!==void 0){if(B.currentProgram===Ie&&B.lightsStateVersion===le)return va(_,me),Ie}else me.uniforms=W.getUniforms(_),_.onBeforeCompile(me,y),Ie=W.acquireProgram(me,ue),Ce.set(ue,Ie),B.uniforms=me.uniforms;const Te=B.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Te.clippingPlanes=se.uniform),va(_,me),B.needsLights=Ll(_),B.lightsStateVersion=le,B.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Ie,B.uniformsList=null,Ie}function xa(_){if(_.uniformsList===null){const z=_.currentProgram.getUniforms();_.uniformsList=Os.seqWithValue(z.seq,_.uniforms)}return _.uniformsList}function va(_,z){const k=ve.get(_);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.batchingColor=z.batchingColor,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.instancingMorph=z.instancingMorph,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}function Cl(_,z,k,B,N){z.isScene!==!0&&(z=Ee),Be.resetTextureUnits();const te=z.fog,le=B.isMeshStandardMaterial?z.environment:null,me=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ti,ue=(B.isMeshStandardMaterial?mt:bt).get(B.envMap||le),Ce=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!k.morphAttributes.position,Ve=!!k.morphAttributes.normal,Ze=!!k.morphAttributes.color;let ft=Nn;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=y.toneMapping);const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=st!==void 0?st.length:0,Ae=ve.get(B),ht=f.state.lights;if(Ye===!0&&(Y===!0||_!==M)){const Pt=_===M&&B.id===S;se.setState(B,_,Pt)}let Xe=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==ht.state.version||Ae.outputColorSpace!==me||N.isBatchedMesh&&Ae.batching===!1||!N.isBatchedMesh&&Ae.batching===!0||N.isBatchedMesh&&Ae.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ae.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ae.instancing===!1||!N.isInstancedMesh&&Ae.instancing===!0||N.isSkinnedMesh&&Ae.skinning===!1||!N.isSkinnedMesh&&Ae.skinning===!0||N.isInstancedMesh&&Ae.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ae.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ae.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ae.instancingMorph===!1&&N.morphTexture!==null||Ae.envMap!==ue||B.fog===!0&&Ae.fog!==te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==se.numPlanes||Ae.numIntersection!==se.numIntersection)||Ae.vertexAlphas!==Ce||Ae.vertexTangents!==Ie||Ae.morphTargets!==Te||Ae.morphNormals!==Ve||Ae.morphColors!==Ze||Ae.toneMapping!==ft||Ae.morphTargetsCount!==tt)&&(Xe=!0):(Xe=!0,Ae.__version=B.version);let Ht=Ae.currentProgram;Xe===!0&&(Ht=os(B,z,N));let ei=!1,Gt=!1,Fi=!1;const dt=Ht.getUniforms(),jt=Ae.uniforms;if(xe.useProgram(Ht.program)&&(ei=!0,Gt=!0,Fi=!0),B.id!==S&&(S=B.id,Gt=!0),ei||M!==_){xe.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",_.projectionMatrix),dt.setValue(P,"viewMatrix",_.matrixWorldInverse);const Ot=dt.map.cameraPosition;Ot!==void 0&&Ot.setValue(P,pe.setFromMatrixPosition(_.matrixWorld)),De.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,Gt=!0,Fi=!0)}if(N.isSkinnedMesh){dt.setOptional(P,N,"bindMatrix"),dt.setOptional(P,N,"bindMatrixInverse");const Pt=N.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),dt.setValue(P,"boneTexture",Pt.boneTexture,Be))}N.isBatchedMesh&&(dt.setOptional(P,N,"batchingTexture"),dt.setValue(P,"batchingTexture",N._matricesTexture,Be),dt.setOptional(P,N,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",N._indirectTexture,Be),dt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",N._colorsTexture,Be));const Xt=k.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&ne.update(N,k,Ht),(Gt||Ae.receiveShadow!==N.receiveShadow)&&(Ae.receiveShadow=N.receiveShadow,dt.setValue(P,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(jt.envMap.value=ue,jt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&z.environment!==null&&(jt.envMapIntensity.value=z.environmentIntensity),Gt&&(dt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&Pl(jt,Fi),te&&B.fog===!0&&K.refreshFogUniforms(jt,te),K.refreshMaterialUniforms(jt,B,G,Z,f.state.transmissionRenderTarget[_.id]),Os.upload(P,xa(Ae),jt,Be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Os.upload(P,xa(Ae),jt,Be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(P,"center",N.center),dt.setValue(P,"modelViewMatrix",N.modelViewMatrix),dt.setValue(P,"normalMatrix",N.normalMatrix),dt.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Pt=B.uniformsGroups;for(let Ot=0,rr=Pt.length;Ot<rr;Ot++){const kn=Pt[Ot];Oe.update(kn,Ht),Oe.bind(kn,Ht)}}return Ht}function Pl(_,z){_.ambientLightColor.needsUpdate=z,_.lightProbe.needsUpdate=z,_.directionalLights.needsUpdate=z,_.directionalLightShadows.needsUpdate=z,_.pointLights.needsUpdate=z,_.pointLightShadows.needsUpdate=z,_.spotLights.needsUpdate=z,_.spotLightShadows.needsUpdate=z,_.rectAreaLights.needsUpdate=z,_.hemisphereLights.needsUpdate=z}function Ll(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(_,z,k){const B=ve.get(_);B.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ve.get(_.texture).__webglTexture=z,ve.get(_.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,z){const k=ve.get(_);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0};const Dl=P.createFramebuffer();this.setRenderTarget=function(_,z=0,k=0){D=_,A=z,C=k;let B=!0,N=null,te=!1,le=!1;if(_){const ue=ve.get(_);if(ue.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Be.setupRenderTarget(_);else if(ue.__hasExternalTextures)Be.rebindTextures(_,ve.get(_.texture).__webglTexture,ve.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){const Te=_.depthTexture;if(ue.__boundDepthTexture!==Te){if(Te!==null&&ve.has(Te)&&(_.width!==Te.image.width||_.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(_)}}const Ce=_.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(le=!0);const Ie=ve.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ie[z])?N=Ie[z][k]:N=Ie[z],te=!0):_.samples>0&&Be.useMultisampledRTT(_)===!1?N=ve.get(_).__webglMultisampledFramebuffer:Array.isArray(Ie)?N=Ie[k]:N=Ie,L.copy(_.viewport),F.copy(_.scissor),H=_.scissorTest}else L.copy(we).multiplyScalar(G).floor(),F.copy(Ge).multiplyScalar(G).floor(),H=nt;if(k!==0&&(N=Dl),xe.bindFramebuffer(P.FRAMEBUFFER,N)&&B&&xe.drawBuffers(_,N),xe.viewport(L),xe.scissor(F),xe.setScissorTest(H),te){const ue=ve.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,ue.__webglTexture,k)}else if(le){const ue=z;for(let Ce=0;Ce<_.textures.length;Ce++){const Ie=ve.get(_.textures[Ce]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ce,Ie.__webglTexture,k,ue)}}else if(_!==null&&k!==0){const ue=ve.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ue.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(_,z,k,B,N,te,le,me=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue){xe.bindFramebuffer(P.FRAMEBUFFER,ue);try{const Ce=_.textures[me],Ie=Ce.format,Te=Ce.type;if(!De.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=_.width-B&&k>=0&&k<=_.height-N&&(_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(z,k,B,N,Me.convert(Ie),Me.convert(Te),te))}finally{const Ce=D!==null?ve.get(D).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(_,z,k,B,N,te,le,me=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&le!==void 0&&(ue=ue[le]),ue)if(z>=0&&z<=_.width-B&&k>=0&&k<=_.height-N){xe.bindFramebuffer(P.FRAMEBUFFER,ue);const Ce=_.textures[me],Ie=Ce.format,Te=Ce.type;if(!De.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.bufferData(P.PIXEL_PACK_BUFFER,te.byteLength,P.STREAM_READ),_.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+me),P.readPixels(z,k,B,N,Me.convert(Ie),Me.convert(Te),0);const Ze=D!==null?ve.get(D).__webglFramebuffer:null;xe.bindFramebuffer(P.FRAMEBUFFER,Ze);const ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Fh(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,te),P.deleteBuffer(Ve),P.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,z=null,k=0){const B=Math.pow(2,-k),N=Math.floor(_.image.width*B),te=Math.floor(_.image.height*B),le=z!==null?z.x:0,me=z!==null?z.y:0;Be.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,le,me,N,te),xe.unbindTexture()};const Il=P.createFramebuffer(),Ul=P.createFramebuffer();this.copyTextureToTexture=function(_,z,k=null,B=null,N=0,te=null){te===null&&(N!==0?(Qi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let le,me,ue,Ce,Ie,Te,Ve,Ze,ft;const st=_.isCompressedTexture?_.mipmaps[te]:_.image;if(k!==null)le=k.max.x-k.min.x,me=k.max.y-k.min.y,ue=k.isBox3?k.max.z-k.min.z:1,Ce=k.min.x,Ie=k.min.y,Te=k.isBox3?k.min.z:0;else{const Xt=Math.pow(2,-N);le=Math.floor(st.width*Xt),me=Math.floor(st.height*Xt),_.isDataArrayTexture?ue=st.depth:_.isData3DTexture?ue=Math.floor(st.depth*Xt):ue=1,Ce=0,Ie=0,Te=0}B!==null?(Ve=B.x,Ze=B.y,ft=B.z):(Ve=0,Ze=0,ft=0);const tt=Me.convert(z.format),Ae=Me.convert(z.type);let ht;z.isData3DTexture?(Be.setTexture3D(z,0),ht=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Be.setTexture2DArray(z,0),ht=P.TEXTURE_2D_ARRAY):(Be.setTexture2D(z,0),ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const Xe=P.getParameter(P.UNPACK_ROW_LENGTH),Ht=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ei=P.getParameter(P.UNPACK_SKIP_PIXELS),Gt=P.getParameter(P.UNPACK_SKIP_ROWS),Fi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,st.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ce),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const dt=_.isDataArrayTexture||_.isData3DTexture,jt=z.isDataArrayTexture||z.isData3DTexture;if(_.isDepthTexture){const Xt=ve.get(_),Pt=ve.get(z),Ot=ve.get(Xt.__renderTarget),rr=ve.get(Pt.__renderTarget);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Ot.__webglFramebuffer),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let kn=0;kn<ue;kn++)dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(_).__webglTexture,N,Te+kn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(z).__webglTexture,te,ft+kn)),P.blitFramebuffer(Ce,Ie,le,me,Ve,Ze,le,me,P.DEPTH_BUFFER_BIT,P.NEAREST);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||ve.has(_)){const Xt=ve.get(_),Pt=ve.get(z);xe.bindFramebuffer(P.READ_FRAMEBUFFER,Il),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ul);for(let Ot=0;Ot<ue;Ot++)dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Xt.__webglTexture,N,Te+Ot):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Xt.__webglTexture,N),jt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pt.__webglTexture,te,ft+Ot):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,te),N!==0?P.blitFramebuffer(Ce,Ie,le,me,Ve,Ze,le,me,P.COLOR_BUFFER_BIT,P.NEAREST):jt?P.copyTexSubImage3D(ht,te,Ve,Ze,ft+Ot,Ce,Ie,le,me):P.copyTexSubImage2D(ht,te,Ve,Ze,Ce,Ie,le,me);xe.bindFramebuffer(P.READ_FRAMEBUFFER,null),xe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else jt?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(ht,te,Ve,Ze,ft,le,me,ue,tt,Ae,st.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(ht,te,Ve,Ze,ft,le,me,ue,tt,st.data):P.texSubImage3D(ht,te,Ve,Ze,ft,le,me,ue,tt,Ae,st):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,te,Ve,Ze,le,me,tt,Ae,st.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,te,Ve,Ze,st.width,st.height,tt,st.data):P.texSubImage2D(P.TEXTURE_2D,te,Ve,Ze,le,me,tt,Ae,st);P.pixelStorei(P.UNPACK_ROW_LENGTH,Xe),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ht),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ei),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fi),te===0&&z.generateMipmaps&&P.generateMipmap(ht),xe.unbindTexture()},this.initRenderTarget=function(_){ve.get(_).__webglFramebuffer===void 0&&Be.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Be.setTextureCube(_,0):_.isData3DTexture?Be.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Be.setTexture2DArray(_,0):Be.setTexture2D(_,0),xe.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}const la=["moveUp","moveDown","moveLeft","moveRight","cameraLeft","cameraRight","cameraIn","cameraOut","jump","pounce","interact","fire","pause","weapon1","weapon2","weapon3","weapon4"],er={moveUp:"KeyW",moveDown:"KeyS",moveLeft:"KeyA",moveRight:"KeyD",cameraLeft:"ArrowLeft",cameraRight:"ArrowRight",cameraIn:"ArrowUp",cameraOut:"ArrowDown",jump:"Space",pounce:"ShiftLeft",interact:"Enter",fire:"KeyF",pause:"Escape",weapon1:"Digit1",weapon2:"Digit2",weapon3:"Digit3",weapon4:"Digit4"},o0=[{title:"MOVEMENT",actions:[{action:"moveUp",label:"MOVE FORWARD"},{action:"moveDown",label:"MOVE BACK"},{action:"moveLeft",label:"MOVE LEFT"},{action:"moveRight",label:"MOVE RIGHT"}]},{title:"CAMERA",actions:[{action:"cameraLeft",label:"ROTATE LEFT"},{action:"cameraRight",label:"ROTATE RIGHT"},{action:"cameraIn",label:"ZOOM IN"},{action:"cameraOut",label:"ZOOM OUT"}]},{title:"ACTIONS",actions:[{action:"jump",label:"JUMP"},{action:"pounce",label:"POUNCE / DASH"},{action:"interact",label:"INTERACT"},{action:"fire",label:"FIRE / HORN"},{action:"pause",label:"PAUSE"}]},{title:"WEAPONS",actions:[{action:"weapon1",label:"WEAPON SLOT 1"},{action:"weapon2",label:"WEAPON SLOT 2"},{action:"weapon3",label:"WEAPON SLOT 3"},{action:"weapon4",label:"WEAPON SLOT 4"}]}];function a0(i){return typeof i=="string"&&/^[A-Za-z][A-Za-z0-9]{1,31}$/.test(i)}const c0=[["ShiftLeft","ShiftRight"],["Enter","NumpadEnter"]];function Ml(i,e){return i===e||c0.some(t=>t.includes(i)&&t.includes(e))}function Sl(i,e,t){const n={...i},s=n[e],r=la.find(o=>o!==e&&Ml(n[o],t));return n[e]=t,r&&(n[r]=s),n}function Fo(i){let e={...er};if(typeof i!="object"||i===null)return e;const t=i;for(const n of la){const s=t[n];a0(s)&&(e=Sl(e,n,s))}return e}function Or(i,e){return la.find(t=>Ml(e[t],i))??null}function kr(i){const e={ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→"};return e[i]?e[i]:i.startsWith("Key")?i.slice(3):i.startsWith("Digit")?i.slice(5):i.startsWith("Numpad")?`NUM ${i.slice(6).toUpperCase()}`:i==="Space"?"SPACE":i==="ShiftLeft"?"LEFT SHIFT":i==="ShiftRight"?"RIGHT SHIFT":i==="ControlLeft"?"LEFT CTRL":i==="ControlRight"?"RIGHT CTRL":i.replace(/([a-z])([A-Z])/g,"$1 $2").toUpperCase()}function Mc(i){const e=i;return typeof e?.closest=="function"&&!!e.closest(".dj-overlay")}class l0{constructor(e,t=er){this.el=e,this.bindings=Fo(t),this.isTouch=matchMedia("(pointer: coarse)").matches,addEventListener("keydown",n=>{if(Mc(n.target))return;const s=Or(n.code,this.bindings);s&&(n.preventDefault(),this.keyAction(s,!0,n.repeat))}),addEventListener("keyup",n=>{if(Mc(n.target))return;const s=Or(n.code,this.bindings);s&&this.keyAction(s,!1,!1)}),addEventListener("blur",()=>this.reset()),e.addEventListener("pointerdown",n=>this.onDown(n)),e.addEventListener("pointermove",n=>this.onMove(n)),e.addEventListener("pointerup",n=>this.onUp(n)),e.addEventListener("pointercancel",n=>this.onUp(n)),e.addEventListener("wheel",n=>{this.wheelDelta+=Math.sign(n.deltaY)},{passive:!0}),e.addEventListener("contextmenu",n=>{n.preventDefault(),this.edges.add("pounce")}),e.addEventListener("touchmove",n=>n.preventDefault(),{passive:!1})}keys={up:!1,down:!1,left:!1,right:!1,jump:!1,pounce:!1,interact:!1,fire:!1,pause:!1};edges=new Set;wheelDelta=0;zoomIn=!1;zoomOut=!1;mouseDragX=0;mouseAim=null;bindings;joyId=null;joyStart={x:0,y:0};joyVec={x:0,y:0};touchButtons=new Map;isTouch;keyAction(e,t,n){const s=r=>{t&&!this.keys[r]&&this.edges.add(e),this.keys[r]=t};switch(e){case"moveUp":s("up");break;case"moveDown":s("down");break;case"moveLeft":s("left");break;case"moveRight":s("right");break;case"jump":s("jump");break;case"cameraIn":t&&!this.zoomIn&&this.edges.add(e),this.zoomIn=t;break;case"cameraOut":t&&!this.zoomOut&&this.edges.add(e),this.zoomOut=t;break;case"cameraLeft":case"cameraRight":case"pounce":case"interact":case"fire":case"pause":case"weapon1":case"weapon2":case"weapon3":case"weapon4":t&&!n&&this.edges.add(e),e==="pounce"&&(this.keys.pounce=t),e==="interact"&&(this.keys.interact=t),e==="fire"&&(this.keys.fire=t),e==="pause"&&(this.keys.pause=t);break}}setKeyBindings(e){this.bindings=Fo(e),this.reset()}getKeyBindings(){return{...this.bindings}}actionForCode(e){return Or(e,this.bindings)}reset(){Object.keys(this.keys).forEach(e=>this.keys[e]=!1),this.zoomIn=this.zoomOut=!1,this.edges.clear(),this.wheelDelta=0,this.mouseDragX=0,this.joyId=null,this.joyVec={x:0,y:0},this.touchButtons.clear(),this.gpHeld.clear()}requestCycle(){this.wheelDelta+=1}setTouchButton(e,t){const n=this.touchButtons.get(e)??!1;t&&!n&&this.edges.add(e),this.touchButtons.set(e,t)}onDown(e){if(this.edges.add("any"),e.pointerType==="touch"&&e.clientX<innerWidth*.45&&this.joyId===null){this.el.setPointerCapture?.(e.pointerId),this.joyId=e.pointerId,this.joyStart={x:e.clientX,y:e.clientY},this.joyVec={x:0,y:0};return}e.pointerType==="mouse"&&e.button===0&&(this.updateMouseAim(e),this.edges.add("fire"))}onMove(e){if(e.pointerId===this.joyId){const t=(e.clientX-this.joyStart.x)/60,n=(e.clientY-this.joyStart.y)/60,s=Math.hypot(t,n),r=s>1?1/s:1;this.joyVec={x:t*r,y:-n*r};return}e.pointerType==="mouse"&&this.updateMouseAim(e),e.pointerType==="touch"&&e.clientX>innerWidth*.5&&(this.mouseDragX+=(e.movementX??0)/innerWidth)}updateMouseAim(e){const t=this.el.getBoundingClientRect();t.width<=0||t.height<=0||(this.mouseAim={x:(e.clientX-t.left)/t.width*2-1,y:1-(e.clientY-t.top)/t.height*2})}onUp(e){e.pointerId===this.joyId&&(this.joyId=null,this.joyVec={x:0,y:0})}pollGamepad(e){const t=navigator.getGamepads?.()[0];if(!t)return;const n=r=>Math.abs(r)>.18?r:0;e.moveX+=n(t.axes[0]??0),e.moveY+=-n(t.axes[1]??0),t.buttons[0]?.pressed?(this.gpHeld.has(0)||(e.jumpPressed=!0,this.gpHeld.add(0)),e.jump=!0):this.gpHeld.delete(0);const s=(r,o)=>{t.buttons[r]?.pressed?this.gpHeld.has(r)||(e[o]=!0,this.gpHeld.add(r)):this.gpHeld.delete(r)};s(1,"pounce"),s(2,"interact"),s(5,"fire")}gpHeld=new Set;poll(){let e=(this.keys.right?1:0)-(this.keys.left?1:0),t=(this.keys.up?1:0)-(this.keys.down?1:0);const n=Math.hypot(e,t);n>1&&(e/=n,t/=n),e+=this.joyVec.x,t+=this.joyVec.y;const s=["weapon1","weapon2","weapon3","weapon4"].findIndex(o=>this.edges.has(o)),r={moveX:Math.max(-1,Math.min(1,e)),moveY:Math.max(-1,Math.min(1,t)),jump:this.keys.jump||(this.touchButtons.get("jump")??!1),jumpPressed:this.edges.has("jump"),pounce:this.edges.has("pounce"),interact:this.edges.has("interact"),fire:this.edges.has("fire"),cycle:this.wheelDelta===0?0:Math.sign(this.wheelDelta),selectWeapon:s>=0?s:null,aimNdc:this.mouseAim?{...this.mouseAim}:null,camNudge:Math.max(-1,Math.min(1,this.mouseDragX*4)),rotate:this.edges.has("cameraLeft")?-1:this.edges.has("cameraRight")?1:0,zoom:(this.zoomIn?1:0)-(this.zoomOut?1:0),pause:this.edges.has("pause"),any:this.edges.size>0};return this.pollGamepad(r),this.edges.clear(),this.wheelDelta=0,this.mouseDragX*=.82,r}}const h0=[.16,.3,.46,.64,.82],d0=[0,.11,.25,.41,.59,.77],u0=[[0,.18],[.1,.34],[.24,.5],[.4,.67],[.57,.84],[.74,1]],Sc={maxForwardSpeed:29,maxReverseSpeed:10,acceleration:9.5,reverseAcceleration:7,serviceBrake:24,handbrake:34,rollingDrag:1.1,aeroDrag:.016,steeringResponse:7.5,lateralSpeed:10.5},cn=(i,e,t)=>Math.max(e,Math.min(t,i)),Vi=(i,e,t)=>i<e?Math.min(i+t,e):Math.max(i-t,e);function f0(i,e,t,n){const s=cn(n,0,.05),r=cn(e.throttle,-1,1),o=cn(e.steer,-1,1);let a=e.handbrake;if(e.handbrake)i.speed=Vi(i.speed,0,t.handbrake*s);else if(r>0)if(i.speed<-.1)i.speed=Vi(i.speed,0,t.serviceBrake*r*s),a=!0;else{const x=1-Math.pow(Math.max(0,i.speed)/t.maxForwardSpeed,1.7);i.speed+=t.acceleration*r*Math.max(.12,x)*s}else if(r<0)if(i.speed>.1)i.speed=Vi(i.speed,0,t.serviceBrake*-r*s),a=!0;else{const x=1-Math.abs(Math.min(0,i.speed))/t.maxReverseSpeed;i.speed-=t.reverseAcceleration*-r*Math.max(.15,x)*s}else{const x=t.rollingDrag+t.aeroDrag*i.speed*i.speed;i.speed=Vi(i.speed,0,x*s)}i.speed=cn(i.speed,-t.maxReverseSpeed,t.maxForwardSpeed);const c=1-Math.exp(-t.steeringResponse*s);i.steering+=(o-i.steering)*c,Math.abs(o)<.01&&(i.steering=Vi(i.steering,0,3.5*s));const l=Math.min(1,Math.abs(i.speed)/t.maxForwardSpeed);let h=!1;if(i.speed<=0)h=i.gear!==1,i.gear=1;else{const x=cn(Math.round(i.gear||1),1,6);i.gear=x;const g=x<6?h0[x-1]-(1-Math.abs(r))*.025:1/0;x<6&&l>=g?(i.gear=x+1,h=!0):x>1&&l<d0[x-1]&&(i.gear=x-1,h=!0)}const d=1-l*.68,u=Math.sign(i.speed||1),p=i.steering*t.lateralSpeed*d*u*s,m=e.handbrake&&Math.abs(i.speed)>7?Math.min(1,Math.abs(i.steering)*Math.abs(i.speed)/18):0;return{distance:i.speed*s,lateral:p,braking:a,skid:m,shifted:h}}function p0(i,e,t=1){const n=cn(Math.abs(i),0,1),s=cn(Math.abs(e),0,1),r=cn(Math.round(t),1,6),[o,a]=u0[r-1],c=cn((n-o)/Math.max(.01,a-o),0,1),l=cn(800+c*5e3+s*350,780,6400);return{rpm:l,load:s,gain:.026+n*.018+s*.026,rumbleHz:l/60,exhaustHz:l/15,filterHz:190+n*720+s*500,gear:r}}const m0="../../assets/sfx/",g0="../../music/gluesong.mp3";class x0{constructor(e,t){this.onMuteChange=t,this.muted=e,this.music=new Audio(new URL(g0,document.baseURI).href),this.music.loop=!0,this.music.volume=.28,this.music.muted=!0,this.music.play().then(()=>{this.muted||(this.music.muted=!1)}).catch(()=>{});const n=()=>{this.unlocked=!0,this.ensureCtx(),this.muted||(this.music.muted=!1,this.music.play().catch(()=>{})),removeEventListener("pointerdown",n),removeEventListener("keydown",n)};addEventListener("pointerdown",n),addEventListener("keydown",n),document.addEventListener("visibilitychange",()=>{document.hidden?this.music.pause():!this.muted&&this.unlocked&&this.music.play().catch(()=>{})})}ctx=null;buffers=new Map;music;engineOsc=[];engineGain=null;engineFilter=null;tireNoise=null;tireGain=null;muted;unlocked=!1;ensureCtx(){return this.ctx||(this.ctx=new AudioContext),this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}setMuted(e){this.muted=e,this.music.muted=e,!e&&this.unlocked&&this.music.play().catch(()=>{}),this.engineGain&&(this.engineGain.gain.value=e?0:.035),this.onMuteChange(e)}musicVolume(e){this.music.volume=e}async play(e,t=.5,n=1){if(this.muted||!this.unlocked)return;const s=this.ensureCtx();let r=this.buffers.get(e);if(!r)try{const c=await fetch(new URL(`${m0}${e}.wav`,document.baseURI).href);r=await s.decodeAudioData(await c.arrayBuffer()),this.buffers.set(e,r)}catch{return}const o=s.createBufferSource();o.buffer=r,o.playbackRate.value=n;const a=s.createGain();a.gain.value=t,o.connect(a).connect(s.destination),o.start()}engine(e,t=0,n=0,s=0,r=1,o=!1){if(!this.unlocked)return;const a=this.ensureCtx();if(e&&this.engineOsc.length===0){this.engineGain=a.createGain(),this.engineGain.gain.value=0,this.engineFilter=a.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.Q.value=2.4,this.engineFilter.connect(this.engineGain).connect(a.destination);for(const[d,u]of[["sawtooth",.34],["triangle",.52],["square",.08]]){const p=a.createOscillator();p.type=d;const m=a.createGain();m.gain.value=u,p.connect(m).connect(this.engineFilter),p.start(),this.engineOsc.push(p)}const c=a.createBuffer(1,a.sampleRate*2,a.sampleRate),l=c.getChannelData(0);for(let d=0;d<l.length;d++)l[d]=Math.random()*2-1;this.tireNoise=a.createBufferSource(),this.tireNoise.buffer=c,this.tireNoise.loop=!0,this.tireGain=a.createGain(),this.tireGain.gain.value=0;const h=a.createBiquadFilter();h.type="bandpass",h.frequency.value=1300,h.Q.value=.7,this.tireNoise.connect(h).connect(this.tireGain).connect(a.destination),this.tireNoise.start()}if(this.engineOsc.length>0&&this.engineGain&&this.engineFilter){const c=p0(t,n,r),l=a.currentTime,h=[c.exhaustHz,c.exhaustHz*1.012,c.rumbleHz];this.engineOsc.forEach((d,u)=>d.frequency.setTargetAtTime(h[u],l,.045)),this.engineFilter.frequency.setTargetAtTime(c.filterHz,l,.08),o&&!this.muted?(this.engineGain.gain.cancelScheduledValues(l),this.engineGain.gain.setValueAtTime(c.gain*.35,l),this.engineGain.gain.linearRampToValueAtTime(c.gain,l+.13),this.shiftThump(a,l)):this.engineGain.gain.setTargetAtTime(this.muted?0:c.gain,l,.07),this.tireGain?.gain.setTargetAtTime(this.muted?0:Math.min(.055,s*.055),l,.04)}if(!e&&this.engineOsc.length>0){for(const c of this.engineOsc)c.stop(),c.disconnect();this.engineOsc=[],this.tireNoise?.stop(),this.tireNoise?.disconnect(),this.engineGain?.disconnect(),this.engineFilter?.disconnect(),this.engineGain=null,this.engineFilter=null,this.tireNoise=null,this.tireGain=null}}shiftThump(e,t){const n=e.createOscillator(),s=e.createGain();n.type="triangle",n.frequency.setValueAtTime(92,t),n.frequency.exponentialRampToValueAtTime(48,t+.11),s.gain.setValueAtTime(.032,t),s.gain.exponentialRampToValueAtTime(1e-4,t+.13),n.connect(s).connect(e.destination),n.start(t),n.stop(t+.14)}horn(e="stock"){if(e!=="stock"){this.play(e,.75,1);return}if(this.muted||!this.unlocked)return;const t=this.ensureCtx(),n=t.currentTime,s=t.createGain(),r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=720,r.Q.value=.75,s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.12,n+.018),s.gain.setValueAtTime(.12,n+.22),s.gain.exponentialRampToValueAtTime(1e-4,n+.31),r.connect(s).connect(t.destination);for(const o of[405,510]){const a=t.createOscillator();a.type="sawtooth",a.frequency.value=o,a.connect(r),a.start(n),a.stop(n+.32)}}}const bc="duck-job-v1";function Oo(){return{v:1,chaptersDone:[],pieces:[],ducks:[],weapons:[],weaponTiers:{},grades:{},pearls:0,gear:{owned:[],collar:null,charms:[],snacks:[]},bountiesCleared:0,secrets:{},muted:!1,tier:null,settings:{brightness:1.15,bloom:!0,musicVolume:.28,keyBindings:{...er}}}}function v0(i){const e=Oo();if(typeof i!="object"||i===null)return e;const t=i,n=s=>Array.isArray(s)?s:[];if(e.chaptersDone=n(t.chaptersDone).filter(s=>typeof s=="string"),e.pieces=n(t.pieces).filter(s=>typeof s=="string"),e.ducks=n(t.ducks).filter(s=>typeof s=="number"),e.weapons=n(t.weapons).filter(s=>s==="ball"||s==="boba"||s==="whistle"||s==="ankh"),typeof t.weaponTiers=="object"&&t.weaponTiers!==null&&(e.weaponTiers=t.weaponTiers),typeof t.grades=="object"&&t.grades!==null&&(e.grades=t.grades),typeof t.pearls=="number"&&isFinite(t.pearls)&&(e.pearls=Math.max(0,Math.floor(t.pearls))),typeof t.gear=="object"&&t.gear!==null){const s=t.gear;e.gear.owned=n(s.owned).filter(r=>typeof r=="string"),e.gear.collar=typeof s.collar=="string"?s.collar:null,e.gear.charms=n(s.charms).filter(r=>typeof r=="string"),e.gear.snacks=n(s.snacks).filter(r=>typeof r=="string")}if(typeof t.bountiesCleared=="number"&&(e.bountiesCleared=t.bountiesCleared),typeof t.secrets=="object"&&t.secrets!==null&&(e.secrets=t.secrets),typeof t.muted=="boolean"&&(e.muted=t.muted),(t.tier==="ultra"||t.tier==="mobile")&&(e.tier=t.tier),typeof t.settings=="object"&&t.settings!==null){const s=t.settings;typeof s.brightness=="number"&&isFinite(s.brightness)&&(e.settings.brightness=Math.min(2.4,Math.max(.7,s.brightness))),typeof s.bloom=="boolean"&&(e.settings.bloom=s.bloom),typeof s.musicVolume=="number"&&isFinite(s.musicVolume)&&(e.settings.musicVolume=Math.min(1,Math.max(0,s.musicVolume))),e.settings.keyBindings=Fo(s.keyBindings)}return e}class y0{data;constructor(){this.data=this.load()}load(){try{const e=localStorage.getItem(bc);return e?v0(JSON.parse(e)):Oo()}catch{return Oo()}}write(){try{localStorage.setItem(bc,JSON.stringify(this.data))}catch{}}patch(e){e(this.data),this.write()}}const U={midnight:725030,dockWater:1319498,horizonGlow:2833006,asphalt:1712448,concrete:3818600,sand:13218185,pine:1915445,grass:2377020,victoryRed:13904426,taillight:16720418,bentley:13207626,bentleyEar:11104056,bentleyCream:15124373,bentleyMuzzle:4999749,bentleyGrizzle:10130057,bentleyInnerEar:11569783,bentleyAmber:10707231,collarLeather:3351578,collarBrass:13214282,duck:16765503,duckBill:16747586,heartNeon:16731533,ramenGold:16758311,taroPurple:11765995,crtGreen:3407752,grandmaLilac:13350888,edwardPale:14542832,lincolnMud:5984834,star:16774872},yn=i=>`#${i.toString(16).padStart(6,"0")}`,_0={play:'<path d="M8 5l10 7-10 7V5z"/>',restart:'<path d="M4 10a8 8 0 1 1 2 7"/><path d="M4 4v6h6"/>',grid:'<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1z"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.4 2.4 0 1 1 3.7 2c-1 .6-1.5 1.1-1.5 2.2"/><path d="M12 17h.01"/>',back:'<path d="M19 12H5"/><path d="M11 18l-6-6 6-6"/>',hint:'<path d="M9 18h6"/><path d="M10 22h4"/><path d="M8.5 14.5A6 6 0 1 1 15.5 14.5C14.5 15.2 14 16 14 18h-4c0-2-.5-2.8-1.5-3.5z"/>',keyboard:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h.01M11 9h.01M15 9h.01M18 9h.01M7 13h.01M11 13h.01M15 13h3M8 16h8"/>',music:'<path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',pause:'<path d="M9 5v14M15 5v14"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',sparkles:'<path d="M12 3l1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3zM6 14l.8 2.2L9 17l-2.2.8L6 20l-.8-2.2L3 17l2.2-.8L6 14zM18 13l.6 1.4L20 15l-1.4.6L18 17l-.6-1.4L16 15l1.4-.6L18 13z"/>',monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',volume:'<path d="M5 10v4h3l4 4V6L8 10H5z"/><path d="M16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12"/>',home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/>'};function ko(i){return`<svg class="dj-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${_0[i]}</svg>`}function pt(i,e){return`${ko(i)}<span>${e}</span>`}const M0=`
.dj-hud { position: fixed; inset: 0; pointer-events: none; z-index: 10;
  font-family: 'Nunito', system-ui, sans-serif; color: #fff; }
.dj-card { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px; padding: 8px 14px; }
.dj-top { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 14px; display: flex; gap: 10px; align-items: center; }
.dj-hearts { font-size: 18px; letter-spacing: 2px; }
.dj-pearls { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${yn(U.taroPurple)}; }
.dj-pieces { font-family: 'Space Grotesk', monospace; font-weight: 700;
  color: ${yn(U.heartNeon)}; }
.dj-chapter { position: absolute; top: max(12px, env(safe-area-inset-top));
  left: 50%; transform: translateX(-50%); text-align: center;
  transition: opacity 0.6s; opacity: 0; }
.dj-chapter .t { font-family: 'Space Grotesk', sans-serif; font-weight: 700;
  font-size: 16px; letter-spacing: 3px; color: #fff; text-transform: uppercase; }
.dj-chapter .s { font-size: 12px; color: rgba(255,255,255,0.75); font-style: italic; }
.dj-toast { position: absolute; bottom: 18%; left: 50%; transform: translateX(-50%);
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 15px;
  letter-spacing: 1.5px; padding: 10px 20px; opacity: 0; transition: opacity 0.3s, transform 0.3s;
  white-space: normal; text-align: center; max-width: min(620px, 92vw); }
.dj-toast.show { opacity: 1; transform: translateX(-50%) translateY(-6px); }
.dj-prompt { position: absolute; bottom: 26%; left: 50%; transform: translateX(-50%);
  font-weight: 800; font-size: 14px; opacity: 0; transition: opacity 0.2s;
  color: ${yn(U.crtGreen)}; }
.dj-prompt.show { opacity: 1; }
.dj-objective { position: absolute; top: max(58px, calc(env(safe-area-inset-top) + 46px));
  left: 14px; max-width: 60vw; opacity: 0; transition: opacity 0.4s;
  font-family: 'Space Grotesk', sans-serif; font-weight: 600; font-size: 12.5px;
  line-height: 1.5; color: rgba(255,255,255,0.9); }
.dj-objective.show { opacity: 1; }
.dj-objective b { color: ${yn(U.ramenGold)}; }
.dj-corner { position: absolute; right: 14px; top: max(12px, env(safe-area-inset-top));
  display: flex; gap: 8px; pointer-events: auto; }
.dj-btn { background: rgba(11,16,38,0.55); backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.14); border-radius: 12px; color: #fff;
  font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 13px;
  min-height: 44px; padding: 8px 12px; cursor: pointer; touch-action: manipulation;
  display: inline-flex; align-items: center; justify-content: center; gap: 10px; }
.dj-btn:hover { background: rgba(40,50,90,0.7); }
.dj-btn:focus-visible { outline: 3px solid ${yn(U.ramenGold)}; outline-offset: 2px; }
.dj-icon { width: 18px; height: 18px; display: block; flex: 0 0 18px;
  fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.dj-icon-btn { width: 44px; height: 44px; padding: 0; }
.dj-menu { display: flex; flex-direction: column; gap: 10px; min-width: min(320px,86vw); }
.dj-key-card { min-width: min(520px,92vw); max-width: 560px; padding: 18px 20px; }
.dj-key-group { display: grid; gap: 8px; margin-bottom: 18px; }
.dj-key-group:last-child { margin-bottom: 0; }
.dj-key-group h2 { margin: 0; font-size: 12px; letter-spacing: 2px; color: ${yn(U.ramenGold)}; }
.dj-key-row { display: grid; grid-template-columns: minmax(0,1fr) minmax(118px,auto); align-items: center; gap: 12px; }
.dj-key-row > span { font-size: 12px; font-weight: 700; }
.dj-key-row .dj-btn { min-width: 118px; font-size: 12px; }
.dj-key-row .dj-btn[data-capturing="true"] { border-color: ${yn(U.heartNeon)}; color: ${yn(U.heartNeon)}; }
.dj-hint-list { width: min(540px,92vw); display: grid; gap: 10px; }
.dj-hint { line-height: 1.55; text-align: left; padding: 14px 16px; }
.dj-hint b { color: ${yn(U.ramenGold)}; margin-right: 8px; }
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
  background: rgba(6,9,24,0.72); backdrop-filter: blur(8px); pointer-events: auto; touch-action: pan-y; }
.dj-overlay h1 { font-family: 'Space Grotesk', sans-serif; letter-spacing: 4px; }
.dj-fade { position: absolute; inset: 0; background: #06091a; opacity: 0;
  transition: opacity 0.4s; }
@media (max-width: 520px) {
  .dj-key-row { grid-template-columns: 1fr; gap: 6px; }
  .dj-key-row .dj-btn { width: 100%; }
}
`;class S0{constructor(e,t,n){this.onMute=t,this.onPause=n;const s=document.createElement("style");s.textContent=M0,document.head.appendChild(s),this.root=document.createElement("div"),this.root.className="dj-hud",this.root.innerHTML=`
      <div class="dj-top">
        <div class="dj-card dj-hearts" data-r="hearts"></div>
        <div class="dj-card dj-pearls" data-r="pearls"></div>
        <div class="dj-card dj-pieces" data-r="pieces"></div>
      </div>
      <div class="dj-chapter" data-r="chapter"><div class="t"></div><div class="s"></div></div>
      <div class="dj-objective" data-r="objective"></div>
      <div class="dj-card dj-toast" data-r="toast"></div>
      <div class="dj-prompt" data-r="prompt"></div>
      <div class="dj-corner">
        <button class="dj-btn dj-icon-btn" data-r="mute" aria-label="Toggle music" title="Toggle music">${ko("music")}</button>
        <button class="dj-btn dj-icon-btn" data-r="pause" aria-label="Pause game" title="Pause game">${ko("pause")}</button>
      </div>
      <div class="dj-touch" data-r="touch"></div>
      <div class="dj-fade" data-r="fade"></div>
    `,e.appendChild(this.root);const r=o=>this.root.querySelector(`[data-r="${o}"]`);this.hearts=r("hearts"),this.pearls=r("pearls"),this.pieces=r("pieces"),this.chapter=r("chapter"),this.toastEl=r("toast"),this.promptEl=r("prompt"),this.objectiveEl=r("objective"),this.fadeEl=r("fade"),this.touchLayer=r("touch"),r("mute").addEventListener("click",()=>this.onMute()),r("pause").addEventListener("click",()=>this.onPause()),this.setHearts(3,3),this.setPearls(0),this.setPieces(0)}root;hearts;pearls;pieces;chapter;toastEl;promptEl;objectiveEl;fadeEl;touchLayer;toastTimer=0;chapterTimer=0;buildTouchControls(e){if(!e.isTouch)return;this.touchLayer.classList.add("on");const t=(s,r,o,a)=>{const c=document.createElement("div");c.className="dj-tbtn",c.textContent=s,c.style.right=`${o}px`,c.style.bottom=`calc(${a}px + env(safe-area-inset-bottom))`;const l=h=>{h.preventDefault(),e.setTouchButton(r,!1),c.hasPointerCapture?.(h.pointerId)&&c.releasePointerCapture(h.pointerId)};c.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),c.setPointerCapture?.(h.pointerId),e.setTouchButton(r,!0)}),c.addEventListener("pointerup",l),c.addEventListener("pointercancel",l),c.addEventListener("lostpointercapture",()=>e.setTouchButton(r,!1)),this.touchLayer.appendChild(c)};t("JUMP","jump",24,96),t("DASH","pounce",96,44),t("USE","interact",24,170),t("FIRE","fire",96,122);const n=document.createElement("div");n.className="dj-tbtn",n.textContent="SWAP",n.style.right="170px",n.style.bottom="calc(190px + env(safe-area-inset-bottom))",n.style.width="52px",n.style.height="52px",n.addEventListener("pointerdown",s=>{s.stopPropagation(),e.requestCycle()}),this.touchLayer.appendChild(n)}setHearts(e,t){this.hearts.textContent="❤".repeat(e)+"♡".repeat(Math.max(0,t-e))}setPearls(e){this.pearls.textContent=`⬤ ${e}`}setPieces(e){this.pieces.textContent=`✉ ${e}/7`}chapterCard(e,t){this.chapter.querySelector(".t").textContent=e,this.chapter.querySelector(".s").textContent=t,this.chapter.style.opacity="1",this.chapterTimer=4.4}toast(e,t=2.6){this.toastEl.textContent=e,this.toastEl.classList.add("show"),this.toastTimer=t}prompt(e){e?(this.promptEl.textContent=e,this.promptEl.classList.add("show")):this.promptEl.classList.remove("show")}objective(e){e?(this.objectiveEl.innerHTML=e.split(`
`).map(t=>`<div>${t}</div>`).join(""),this.objectiveEl.classList.add("show")):this.objectiveEl.classList.remove("show")}fade(e){this.fadeEl.style.opacity=e?"1":"0"}update(e){this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.toastEl.classList.remove("show")),this.chapterTimer>0&&(this.chapterTimer-=e,this.chapterTimer<=0&&(this.chapter.style.opacity="0"))}overlay(){const e=document.createElement("div");return e.className="dj-overlay",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","Game dialog"),this.root.appendChild(e),e}}class b0{cam;cinematicControl=!1;zones=[];defaultOffset=new R(0,6,-8);curOffset=new R(0,6,-8);curFov=55;nudgeYaw=0;userYaw=0;targetUserYaw=0;zoomMult=1;shakeAmp=0;shakeT=0;lookTarget=new R;constructor(e){this.cam=new Ut(55,e,.1,900)}configure(e,t){this.zones=e,this.defaultOffset.set(t.x,t.y,t.z),this.curOffset.copy(this.defaultOffset)}kick(e=.25){this.shakeAmp=Math.max(this.shakeAmp,e)}snapTo(e){const t=this.curOffset.clone().applyAxisAngle(Ec,this.userYaw).multiplyScalar(this.zoomMult);this.cam.position.copy(e).add(t),this.lookTarget.copy(e)}control(e,t,n){t&&(this.targetUserYaw+=t*(Math.PI/2)),n&&(this.zoomMult=rt.clamp(this.zoomMult-n*1.1*e,.55,2))}update(e,t,n,s){if(this.cinematicControl)return;let r=this.defaultOffset,o=55,a=.35;for(const d of this.zones)if(t.x>=d.min.x&&t.x<=d.max.x&&t.y>=d.min.y&&t.y<=d.max.y&&t.z>=d.min.z&&t.z<=d.max.z){r=new R(d.offset.x,d.offset.y,d.offset.z),o=d.fov??55,a=d.lookAhead??.35;break}this.curOffset.x=rt.damp(this.curOffset.x,r.x,2.5,e),this.curOffset.y=rt.damp(this.curOffset.y,r.y,2.5,e),this.curOffset.z=rt.damp(this.curOffset.z,r.z,2.5,e),this.curFov=rt.damp(this.curFov,o,2.5,e),Math.abs(this.cam.fov-this.curFov)>.05&&(this.cam.fov=this.curFov,this.cam.updateProjectionMatrix()),this.nudgeYaw=rt.damp(this.nudgeYaw,s*.5,4,e),this.userYaw=rt.damp(this.userYaw,this.targetUserYaw,9,e);const c=new R(t.x+n.x*a,t.y+.6,t.z+n.z*a);this.lookTarget.x=rt.damp(this.lookTarget.x,c.x,6,e),this.lookTarget.y=rt.damp(this.lookTarget.y,c.y,6,e),this.lookTarget.z=rt.damp(this.lookTarget.z,c.z,6,e);const l=this.curOffset.clone().applyAxisAngle(Ec,this.userYaw+this.nudgeYaw).multiplyScalar(this.zoomMult),h=t.clone().add(l);this.cam.position.x=rt.damp(this.cam.position.x,h.x,5,e),this.cam.position.y=rt.damp(this.cam.position.y,h.y,5,e),this.cam.position.z=rt.damp(this.cam.position.z,h.z,5,e),this.shakeAmp>.001&&(this.shakeT+=e*40,this.cam.position.x+=Math.sin(this.shakeT*1.1)*this.shakeAmp*.12,this.cam.position.y+=Math.cos(this.shakeT*1.7)*this.shakeAmp*.1,this.shakeAmp=rt.damp(this.shakeAmp,0,7,e)),this.cam.lookAt(this.lookTarget)}get yaw(){const e=new R;return this.cam.getWorldDirection(e),Math.atan2(-e.x,-e.z)}}const Ec=new R(0,1,0),ks={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const E0=new oa(-1,1,1,-1,0,1);class w0 extends yt{constructor(){super(),this.setAttribute("position",new et([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new et([0,2,0,0,2,0],2))}}const T0=new w0;class bl{constructor(e){this._mesh=new Q(T0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,E0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class El extends ss{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=js.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new bl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class wc extends ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class A0 extends ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class R0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new El(ks),this.copyPass.material.blending=bn,this.clock=new _d}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wc!==void 0&&(o instanceof wc?n=!0:o instanceof A0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class C0 extends ss{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const P0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Pi extends ss{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new Le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new sn(r,o,{type:En});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new sn(r,o,{type:En});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=P0;this.highPassUniforms=js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=js.clone(ks.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader,blending:Gs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Le,this._oldClearAlpha=1,this._basic=new $t,this._fsQuad=new bl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Pi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Pi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Pi.BlurDirectionX=new Re(1,0);Pi.BlurDirectionY=new Re(0,1);const L0={uniforms:{tDiffuse:{value:null},uVignette:{value:.55},uGrain:{value:.035},uTime:{value:0},uFlash:{value:0},uWarm:{value:0}},vertexShader:`
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
  `};class D0{constructor(e,t,n){this.renderer=e,this.enabled=t==="ultra",this.composer=new R0(e),this.renderPass=new C0(new is,new Ut),this.composer.addPass(this.renderPass),this.bloom=new Pi(new Re(innerWidth,innerHeight),.45,.55,.82),this.composer.addPass(this.bloom),this.grade=new El(L0),this.composer.addPass(this.grade);const s=r=>{const o=document.createElement("div");return o.style.cssText=`position:fixed;left:0;right:0;${r?"top":"bottom"}:0;height:0;background:#000;z-index:40;transition:height 0.6s cubic-bezier(0.4,0,0.2,1);pointer-events:none;`,n.appendChild(o),o};this.barsTop=s(!0),this.barsBottom=s(!1)}composer;renderPass;bloom;grade;barsTop;barsBottom;active=!1;timeScale=1;flash=0;t=0;enabled;resize(){this.composer.setSize(innerWidth,innerHeight)}setCinematic(e){this.active=e;const t=e?Math.max(0,(innerHeight-innerWidth/2.39)/2):0;this.barsTop.style.height=`${Math.min(t,innerHeight*.16)}px`,this.barsBottom.style.height=this.barsTop.style.height,this.bloom.strength=e?.85:.45,e||(this.timeScale=1,this.grade.uniforms.uWarm.value=0)}flashWhite(e=1){this.flash=e}setWarm(e){this.grade.uniforms.uWarm.value=e}setBloom(e){this.bloom.enabled=e}render(e,t,n){if(this.t+=n,this.flash=Math.max(0,this.flash-n*1.6),!this.enabled&&!this.active){this.renderer.render(e,t);return}this.renderPass.scene=e,this.renderPass.camera=t,this.grade.uniforms.uTime.value=this.t,this.grade.uniforms.uFlash.value=this.flash,this.grade.uniforms.uVignette.value=this.active?.7:.5,this.grade.uniforms.uGrain.value=this.active?.05:.03,this.composer.render()}}const gi=250,It=6,wl=It+1.5,I0=1382699,vi=[{id:"ch1",z:45,name:"THE GYM",accent:U.heartNeon},{id:"ch2",z:72,name:"LINCOLN AFTER DARK",accent:U.lincolnMud},{id:"ch3",z:99,name:"HAYDEN'S TOLL BRIDGE",accent:U.ramenGold},{id:"ch4",z:126,name:"THE BEACH",accent:U.sand},{id:"ch5",z:153,name:"THE DOCK & STARS",accent:U.star},{id:"ch6",z:180,name:"TWILIGHT FOREST",accent:U.crtGreen},{id:"ch7",z:207,name:"SUNRISE POINT",accent:U.taroPurple}],$n=-62;function U0(i,e,t){return i>wl&&Math.abs(e-t.z)<4}function z0(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:(gi-100)/2},size:{x:It*2+6,y:.5,z:gi+120},color:U.asphalt});for(let e=-70;e<gi;e+=6)i.push({kind:"box",pos:{x:0,y:.01,z:e},size:{x:.22,y:.02,z:2.6},color:12568286,ghost:!0});i.push({kind:"box",pos:{x:0,y:-.6,z:60},size:{x:220,y:.5,z:420},color:922672,ghost:!0});for(const e of[-1,1])i.push({kind:"box",pos:{x:(It+1.6)*e,y:-.2,z:(gi-100)/2},size:{x:2.4,y:.6,z:gi+120},color:U.concrete});for(const e of vi){i.push({kind:"box",pos:{x:It+13,y:-.3,z:e.z},size:{x:28,y:.44,z:10},color:U.concrete}),i.push({kind:"box",pos:{x:It+13,y:-.08,z:e.z},size:{x:28,y:.18,z:8},color:I0});for(let t=It+3;t<It+26;t+=5)i.push({kind:"box",pos:{x:t,y:.025,z:e.z},size:{x:2.6,y:.025,z:.18},color:e.accent,emissive:e.accent,emissiveIntensity:.65,ghost:!0});i.push({kind:"box",pos:{x:wl+.25,y:.04,z:e.z},size:{x:.25,y:.04,z:7.2},color:e.accent,emissive:e.accent,emissiveIntensity:1.2,ghost:!0})}return i.push({kind:"box",pos:{x:-14,y:-.18,z:$n},size:{x:14,y:.56,z:16},color:U.concrete}),i.push({kind:"box",pos:{x:-16,y:1.6,z:$n},size:{x:7,y:3.2,z:10},color:2765650}),{id:"hub",name:"THE HIGHWAY",tagline:"the ducks stole the letter. drive.",skyGlow:U.heartNeon,fogDensity:.011,prims:i,entities:[{type:"spawn",pos:{x:-2,y:0,z:2},yaw:Math.PI/2}],cameraZones:[],cameraOffset:{x:0,y:5.2,z:-7.5},parSeconds:0,bounds:{min:{x:-40,y:-10,z:-90},max:{x:40,y:30,z:gi+20}}}}function N0(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new yt;let l=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const d=[];for(let u=0;u<i.length;++u){const p=i[u].index;for(let m=0;m<p.count;++m)d.push(p.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=Tc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][u]);const m=Tc(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function Tc(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Ft(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const d=c/t;for(let u=0,p=h.count;u<p;u++)for(let m=0;m<t;m++){const x=h.getComponent(u,m);a.setComponent(u+d,m,x)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function F0(i){const e=new Ci({color:i.color,emissive:i.emissive??0,emissiveIntensity:i.emissiveIntensity??1,flatShading:i.flatShading??!0,transparent:i.transparent??!1,opacity:i.opacity??1}),t=i.rim??.25,n=i.gloss??0;return e.onBeforeCompile=s=>{s.uniforms.djRim={value:t},s.uniforms.djGloss={value:n},s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},e.customProgramCacheKey=()=>`dj-toon-${t}-${n}`,e}const Ac=new Map;function Se(i,e={}){const t=JSON.stringify([i,e]);let n=Ac.get(t);return n||(n=F0({color:i,...e}),Ac.set(t,n)),n}function _t(i,e=1.6){return Se(i,{emissive:i,emissiveIntensity:e,rim:0})}const Rc=i=>new R(i.x,i.y,i.z);function O0(i){if(i.kind==="cylinder")return new gt(i.size.x/2,i.size.x/2,i.size.y,12);if(i.kind==="ramp"){const e=new yt,t=i.size.x/2,n=i.size.y,s=i.size.z/2,r=new Float32Array([-t,0,-s,t,0,-s,t,0,s,-t,0,-s,t,0,s,-t,0,s,-t,0,-s,-t,n,s,t,n,s,-t,0,-s,t,n,s,t,0,-s,-t,0,s,-t,n,s,t,n,s,-t,0,s,t,n,s,t,0,s,-t,0,-s,-t,0,s,-t,n,s,t,0,-s,t,n,s,t,0,s]);return e.setAttribute("position",new Ft(r,3)),e.computeVertexNormals(),e}return new Ke(i.size.x,i.size.y,i.size.z)}class ha{group=new Ne;colliders=[];constructor(e){const t=new Map;for(const n of e.prims){if(!n.invisible){const s=O0(n),r=new ot().makeRotationY(n.yaw??0).setPosition(n.pos.x,n.pos.y+(n.kind==="ramp",0),n.pos.z);n.kind==="box"||n.kind,s.applyMatrix4(r);const o=JSON.stringify([n.color,n.emissive??0,n.emissiveIntensity??0]),a=t.get(o)??[];a.push(s),t.set(o,a)}n.ghost||this.colliders.push(this.makeCollider(n))}for(const[n,s]of t){const[r,o,a]=JSON.parse(n),c=N0(s,!1);if(!c)continue;const l=new Q(c,o?Se(r,{emissive:o,emissiveIntensity:a}):Se(r));l.castShadow=!0,l.receiveShadow=!0,this.group.add(l),s.forEach(h=>h.dispose())}}makeCollider(e){return e.kind==="ramp"?{kind:"ramp",center:Rc(e.pos),half:new R(e.size.x/2,e.size.y,e.size.z/2),yaw:e.yaw??0,enabled:!0}:{kind:"box",center:Rc({x:e.pos.x,y:e.pos.y,z:e.pos.z}),half:new R(e.size.x/2,e.size.y/2,e.size.z/2),yaw:e.yaw??0,enabled:!0}}addCollider(e){return this.colliders.push(e),e}groundAt(e,t,n){let s=-1/0;const r=new R;for(const o of this.colliders){if(!o.enabled||(r.set(e-o.center.x,0,t-o.center.z),o.yaw&&r.applyAxisAngle(Br,-o.yaw),Math.abs(r.x)>o.half.x||Math.abs(r.z)>o.half.z))continue;let a;if(o.kind==="ramp"){const c=(r.z+o.half.z)/(o.half.z*2);a=o.center.y+c*o.half.y}else a=o.center.y+o.half.y;a<=n&&a>s&&(s=a)}return s}resolveWalls(e,t,n,s=0){const r=new R;for(const o of this.colliders){if(!o.enabled||o.kind==="ramp")continue;const a=o.center.y+o.half.y,c=o.center.y-o.half.y;if(a<=e.y+s||c>e.y+n)continue;r.set(e.x-o.center.x,0,e.z-o.center.z),o.yaw&&r.applyAxisAngle(Br,-o.yaw);const l=o.half.x+t-Math.abs(r.x),h=o.half.z+t-Math.abs(r.z);l<=0||h<=0||(l<h?r.x+=l*Math.sign(r.x||1):r.z+=h*Math.sign(r.z||1),o.yaw&&r.applyAxisAngle(Br,o.yaw),e.x=o.center.x+r.x,e.z=o.center.z+r.z)}}}const Br=new R(0,1,0);function ut(i,e,t,n,s={}){const r=new Q(new Ke(i,e,t),Se(n,s));return r.castShadow=!0,r.receiveShadow=!0,r}function en(i,e,t,n,s=10,r={}){const o=new Q(new gt(i,e,t,s),Se(n,r));return o.castShadow=!0,o.receiveShadow=!0,o}function Mn(i,e,t=10,n={}){const s=new Q(new wt(i,t,Math.max(6,t-2)),Se(e,n));return s.castShadow=!0,s.receiveShadow=!0,s}function tr(i,e,t){const n=document.createElement("canvas");n.width=i,n.height=e;const s=n.getContext("2d");t(s);const r=new ul(n);return r.anisotropy=4,r}function k0(){const i=new Ne,e={flatShading:!1,rim:.16},t=(b,E,y,w,A,C,D,S,M)=>{const L=Mn(b,E,14,e);return L.scale.set(y,w,A),L.position.set(C,D,S),M.add(L),L},n=new Ne;t(.24,U.bentley,.92,1,1.25,0,.56,.18,n),t(.21,U.bentley,.85,.9,1.3,0,.54,-.08,n),t(.22,U.bentley,.9,1,1.05,0,.52,-.32,n),t(.2,U.bentleyEar,.84,.62,1.55,0,.66,-.08,n),t(.16,U.bentleyCream,.78,.7,1.5,0,.42,.04,n),t(.11,U.bentleyCream,.72,1.1,.5,0,.48,.42,n);const s=en(.13,.18,.36,U.bentley,12,e);s.rotation.x=-.5,s.position.set(0,.62,.4),n.add(s);const r=new Q(new Bt(.165,.034,8,20),Se(U.collarLeather,{flatShading:!1,gloss:.25,rim:.08}));r.rotation.x=Math.PI/2-.5,r.position.set(0,.61,.42),n.add(r);const o=ut(.06,.045,.022,U.collarBrass,{gloss:.7,flatShading:!1});o.position.set(.145,.63,.38),o.rotation.z=.5,n.add(o);const a=new Q(new Bt(.032,.01,6,14),Se(U.collarBrass,{gloss:.7,flatShading:!1}));a.position.set(0,.52,.5),n.add(a);const c=new Ne;c.position.set(0,.72,.55),t(.2,U.bentley,1,.92,1,0,.02,-.02,c),t(.165,U.bentley,1.02,.62,.9,0,.12,.02,c),t(.085,U.bentley,1,.85,.9,.105,-.06,.08,c),t(.085,U.bentley,1,.85,.9,-.105,-.06,.08,c),t(.105,U.bentley,1.05,.75,1,0,.03,.13,c);const l=en(.075,.105,.24,U.bentleyMuzzle,12,e);l.rotation.x=Math.PI/2+.06,l.position.set(0,-.015,.22),c.add(l);const h=Mn(.05,1841688,12,{flatShading:!1,gloss:.45,rim:.1});h.scale.set(1.2,.85,.9),h.position.set(0,.015,.34),c.add(h),t(.065,U.bentleyMuzzle,1.05,.5,1.15,0,-.09,.2,c),t(.055,U.bentleyGrizzle,1.15,.6,.95,0,-.125,.235,c);const d=ut(.075,.016,.12,14713754,{flatShading:!1,rim:.05});d.rotation.x=.24,d.position.set(0,-.068,.26),c.add(d);for(const b of[-1,1]){const E=Mn(.046,2760728,12,e);E.scale.set(1.05,1.05,.5),E.position.set(.1*b,.065,.16),c.add(E);const y=Mn(.038,U.bentleyAmber,12,{flatShading:!1,gloss:.5,rim:.05});y.position.set(.1*b,.065,.172),c.add(y);const w=Mn(.018,789e3,8,{flatShading:!1,gloss:.8});w.position.set(.1*b,.065,.203),c.add(w)}const u=b=>{const E=new Ne;E.position.set(.15*b,.14,-.04);const y=new Ne;y.rotation.z=-.8*b,E.add(y);const w=new Q(new es(.105,.44,12),Se(U.bentleyEar,e));w.castShadow=!0,w.scale.z=.5,w.position.y=.21,y.add(w);const A=new Q(new es(.062,.26,10),Se(U.bentleyInnerEar,e));return A.scale.z=.28,A.position.set(0,.14,.042),y.add(A),c.add(E),E},p=u(1),m=u(-1);n.add(c);const x=[];for(const[b,E]of[[-.15,.26],[.15,.26],[-.16,-.32],[.16,-.32]]){const y=E<0,w=new Ne;w.position.set(b,.42,E),y&&t(.11,U.bentley,.62,1.3,1,0,-.02,-.02,w);const A=en(.055,.068,.26,U.bentley,10,e);A.position.y=-.12,w.add(A);const C=en(.042,.052,.22,U.bentley,10,e);C.position.y=-.32,w.add(C);const D=Mn(.058,U.bentleyCream,10,e);D.scale.set(1,.55,1.3),D.position.set(0,-.42,.025),w.add(D),n.add(w),x.push(w)}const g=new Ne;g.position.set(0,.55,-.48);const f=en(.045,.06,.22,U.bentley,10,e);return f.rotation.x=Math.PI/2,f.position.z=-.1,g.add(f),t(.062,U.bentleyEar,.85,.85,1.9,0,0,-.24,g),t(.042,U.bentleyCream,.9,.9,1.5,0,-.005,-.4,g),g.rotation.x=-.7,n.add(g),i.add(n),{group:i,earL:p,earR:m,tail:g,head:c,body:n,legs:x}}function Cc(i,e){const n=[],s=[];for(const[a,c,l,h]of i)for(let d=0;d<12;d++){const u=d/12*Math.PI*2;n.push(Math.cos(u)*c,l+Math.sin(u)*h,a)}for(let a=0;a<i.length-1;a++)for(let c=0;c<12;c++){const l=(c+1)%12,h=a*12+c,d=a*12+l,u=(a+1)*12+l,p=(a+1)*12+c;s.push(h,d,p,d,u,p)}const r=new yt;r.setAttribute("position",new et(n,3)),r.setIndex(s),r.computeVertexNormals();const o=new Q(r,e);return o.castShadow=!0,o.receiveShadow=!0,o}function B0(){const i=new Ne;i.name="CorbinsVictoryRedC6";const e=Se(U.victoryRed,{gloss:.92,rim:.42,flatShading:!1,emissive:3736580,emissiveIntensity:.78}),t={gloss:.92,rim:.42,flatShading:!1,emissive:3736580,emissiveIntensity:.78},n=Cc([[-2.22,.76,.51,.28],[-1.86,.91,.54,.32],[-1.25,.96,.52,.34],[-.3,.91,.5,.31],[.78,.94,.48,.29],[1.58,.91,.46,.25],[2.28,.79,.43,.2],[2.72,.58,.4,.13]],e);n.name="sculpted-c6-body",i.add(n);const s=ut(.72,.055,1.5,U.victoryRed,t);s.position.set(0,.72,1.48),s.rotation.x=-.045,i.add(s);const r=ut(1.5,.055,.38,658192,{gloss:.35,flatShading:!1});r.position.set(0,.23,2.55),i.add(r);const o=ut(.92,.16,.035,329226,{gloss:.2,flatShading:!1});o.position.set(0,.4,2.72),i.add(o);const c=Cc([[-1.31,.52,.8,.09],[-.98,.65,.94,.2],[-.48,.68,1.01,.24],[.02,.67,.99,.22],[.42,.58,.86,.12]],Se(659741,{gloss:.75,rim:.45,flatShading:!1}));c.name="c6-glass-canopy",i.add(c);const l=ut(1.18,.035,.54,461587,{gloss:.8,flatShading:!1});l.position.set(0,1.245,-.42),i.add(l);for(const y of[-.69,.69]){const w=ut(.22,.12,.28,U.victoryRed,t);w.position.set(y,.87,.18),w.rotation.y=y*-.18,i.add(w)}const h=ut(1.76,.12,.68,U.victoryRed,t);h.position.set(0,.76,-1.82),i.add(h);const d=ut(1.62,.075,.24,U.victoryRed,t);d.position.set(0,.91,-2.05),d.rotation.x=-.08,i.add(d);for(const y of[-.62,.62]){const w=ut(.1,.17,.11,U.victoryRed,t);w.position.set(y,.82,-1.98),i.add(w)}const u=ut(1.77,.38,.055,U.victoryRed,t);u.position.set(0,.6,-2.2),i.add(u);const p=[];for(const y of[-.64,-.31,.31,.64]){const w=new Q(new gt(.145,.145,.035,20),Se(2164490,{gloss:.5,flatShading:!1}));w.rotation.x=Math.PI/2,w.position.set(y,.63,-2.235),i.add(w);const A=new Q(new Bt(.091,.027,8,20),_t(U.taillight,1.25));A.rotation.x=Math.PI/2,A.position.set(y,.63,-2.265),A.name="round-taillight",i.add(A),p.push(A)}const m=ut(1.58,.18,.12,658192,{gloss:.28,flatShading:!1});m.position.set(0,.3,-2.2),i.add(m);for(const y of[-.24,-.08,.08,.24]){const w=en(.068,.068,.16,13159894,14,{gloss:.8,flatShading:!1});w.rotation.x=Math.PI/2,w.position.set(y,.27,-2.27),w.name="center-exhaust",i.add(w)}const x=[];for(const y of[-.55,.55]){const w=ut(.39,.075,.045,5465717,{gloss:.95,emissive:2506058,emissiveIntensity:.32,flatShading:!1});w.position.set(y,.55,2.59),w.rotation.y=y*-.33,w.name="swept-headlight-lens",i.add(w);for(const[C,D]of[[-.1,.052],[0,.06],[.1,.046]]){const S=new Q(new wt(D,10,7),_t(16774358,.62));S.position.set(y+C*Math.sign(y),.555,2.625),i.add(S)}const A=new ml(16773836,0,40,.5,.45,1.2);A.position.set(y,.6,2.68),A.target.position.set(y*1.2,0,14),i.add(A,A.target),x.push(A)}for(const y of[-.66,.66]){const w=ut(.24,.08,.04,7702674,{emissive:10337221,emissiveIntensity:.28,flatShading:!1});w.position.set(y,.34,2.66),i.add(w)}const g=[],f=[];for(const[y,w]of[[-.85,1.55],[.85,1.55],[-.85,-1.45],[.85,-1.45]]){const A=new Ne,C=new Ne,D=new Q(new Bt(.285,.095,10,22),Se(526863,{rim:.12,flatShading:!1}));D.rotation.y=Math.PI/2,D.castShadow=!0,C.add(D);const S=en(.07,.07,.29,10463415,12,{gloss:.85,flatShading:!1});S.rotation.z=Math.PI/2,C.add(S);for(let M=0;M<10;M++){const L=ut(.035,.045,.43,13357532,{gloss:.9,flatShading:!1});L.rotation.x=M/10*Math.PI*2,C.add(L)}A.position.set(y,.38,w),A.add(C),i.add(A),g.push(C),w>0&&f.push(A)}const b=tr(128,64,y=>{y.fillStyle="#e8e4d8",y.fillRect(0,0,128,64),y.fillStyle="#14224A",y.font='bold 34px "Space Grotesk", sans-serif',y.textAlign="center",y.textBaseline="middle",y.fillText("LAINIE",64,36)}),E=new Q(new rn(.44,.22),new Ci({map:b}));return E.position.set(0,.32,-2.145),E.rotation.y=Math.PI,i.add(E),{group:i,wheels:g,frontWheelPivots:f,headlights:x,taillights:p}}function Li(i=U.duck){const e=new Ne,t=Mn(.22,i,10);t.scale.set(1,.85,1.25),t.position.y=.24,e.add(t);const n=new Ne;n.position.set(0,.5,.14);const s=Mn(.13,i,10);n.add(s);const r=ut(.12,.05,.14,U.duckBill);r.position.set(0,-.02,.15),n.add(r);for(const a of[-1,1]){const c=Mn(.025,1577484,6);c.position.set(.07*a,.05,.09),n.add(c)}e.add(n);const o=a=>{const c=new Ne;c.position.set(.2*a,.28,0);const l=ut(.06,.16,.3,i);return l.position.y=-.06,c.add(l),e.add(c),c};return{group:e,head:n,wingL:o(1),wingR:o(-1)}}function Pc(){const i=new Ne,e=en(.06,.09,5.4,2765650,8);e.position.y=2.7,i.add(e);const t=ut(.1,.08,1.6,2765650);t.position.set(0,5.3,.7),i.add(t);const n=ut(.24,.1,.5,U.ramenGold,{emissive:U.ramenGold,emissiveIntensity:1.8});return n.position.set(0,5.22,1.35),i.add(n),i}function H0(i){const e=new Ne,t=ut(.08,.3,i,5857663,{gloss:.25,flatShading:!1});t.position.y=.62,e.add(t);const n=Math.max(2,Math.round(i/2.4));for(let s=0;s<n;s++){const r=ut(.1,.62,.12,3818600);r.position.set(0,.31,-i/2+(s+.5)*(i/n)),e.add(r)}return e}function Tl(i=4,e=U.pine){const t=new Ne,n=en(.1,.16,i*.3,3811870,7);n.position.y=i*.15,t.add(n);let s=i*.28,r=i*.24;for(let o=0;o<3;o++){const a=new Q(new es(r,i*.32,8),Se(e));a.castShadow=!0,a.position.y=s+i*.14,t.add(a),s+=i*.22,r*=.72}return t}function Xs(i,e={}){const t=e.w??3,n=e.h??1.4,s=tr(512,Math.round(512*n/t),c=>{const l=c.canvas.height;c.fillStyle=e.bg??"#14224A",c.fillRect(0,0,512,l),c.strokeStyle=e.fg??"#FF4D8D",c.lineWidth=8,c.strokeRect(10,10,492,l-20),c.fillStyle=e.fg??"#FF4D8D",c.textAlign="center",c.textBaseline="middle";const h=Math.min(54,(l-40)/i.length-6);c.font=`700 ${h}px "Space Grotesk", sans-serif`,i.forEach((d,u)=>{c.fillText(d,256,l/(i.length+1)*(u+1)+4)})}),r=new Ne,o=new Q(new rn(t,n),new $t({map:s}));o.position.y=2.2,r.add(o);const a=new Tn(e.glow??U.heartNeon,6,6);a.position.set(0,2.2,.4),r.add(a);for(const c of[-1,1]){const l=en(.05,.05,2.2,2765650,6);l.position.set((t/2-.2)*c,1.1,0),r.add(l)}return r}function G0(i,e=1.1){const t=new Ne,n=ut(e,e*1.16,.04,16118504,{rim:.1,flatShading:!1});t.add(n);const s=new md().load(i);s.colorSpace=kt;const r=new Q(new rn(e*.86,e*.86),new $t({map:s}));return r.position.set(0,e*.07,.025),t.add(r),t}function da(){const i=new Ne,e=ut(.5,.02,.6,16118504,{rim:.05});e.rotation.z=.08,i.add(e);const t=en(.09,.09,.05,U.heartNeon,12,{emissive:U.heartNeon,emissiveIntensity:1.4});return t.position.y=.04,i.add(t),i}function Al(){const i=Li(U.ramenGold);return i.group.traverse(e=>{e instanceof Q&&e.material instanceof Ci&&(e.material=Se(U.ramenGold,{emissive:U.ramenGold,emissiveIntensity:.5,gloss:.7,flatShading:!1}))}),i.group}const V0={walkSpeed:5.2,accel:42,friction:26,gravity:24,jumpVel:8.6,jumpCutMultiplier:2.6,coyoteTime:.12,jumpBuffer:.15,maxJumps:2,airJumpVelMultiplier:.92,pounceSpeed:11.5,pounceTime:.28,pounceCooldown:.9,maxFall:22,speedMultiplier:1};function Lc(){return{vx:0,vy:0,vz:0,grounded:!1,coyote:0,buffer:0,pouncing:0,pounceCd:0,jumpHeld:!1,facingX:0,facingZ:1,airJumps:0,justJumped:!1,justAirJumped:!1,justLanded:!1,justPounced:!1}}function W0(i,e,t,n,s,r){i.justJumped=!1,i.justAirJumped=!1,i.justLanded=!1,i.justPounced=!1;const o=i.grounded,a=s<=r+.02&&i.vy<=.001&&r>-1/0;if(i.grounded=a,a?(i.coyote=t.coyoteTime,i.airJumps=0,o||(i.justLanded=!0)):i.coyote=Math.max(0,i.coyote-n),i.buffer=e.jumpPressed?t.jumpBuffer:Math.max(0,i.buffer-n),i.pounceCd=Math.max(0,i.pounceCd-n),e.pounce&&i.pounceCd<=0&&i.pouncing<=0){const l=Math.hypot(e.x,e.y),h=l>.15?e.x/l:i.facingX,d=l>.15?e.y/l:i.facingZ;i.vx=h*t.pounceSpeed*t.speedMultiplier,i.vz=d*t.pounceSpeed*t.speedMultiplier,a?i.vy=2.2:i.vy=Math.max(i.vy,2.2),i.pouncing=t.pounceTime,i.pounceCd=t.pounceCooldown,i.grounded=!1,i.justPounced=!0}if(i.pouncing>0)i.pouncing-=n,i.vy-=t.gravity*.55*n;else{const l=t.walkSpeed*t.speedMultiplier,h=Math.hypot(e.x,e.y);if(h>.05){const p=e.x/Math.max(h,1),m=e.y/Math.max(h,1);i.vx=Ps(i.vx,p*l*Math.min(h,1),t.accel*n),i.vz=Ps(i.vz,m*l*Math.min(h,1),t.accel*n),i.facingX=p,i.facingZ=m}else i.vx=Ps(i.vx,0,t.friction*n),i.vz=Ps(i.vz,0,t.friction*n);i.buffer>0&&(i.grounded||i.coyote>0)?(i.vy=t.jumpVel,i.buffer=0,i.coyote=0,i.grounded=!1,i.justJumped=!0):i.buffer>0&&i.airJumps<t.maxJumps-1&&(i.vy=t.jumpVel*t.airJumpVelMultiplier,i.buffer=0,i.airJumps++,i.justJumped=!0,i.justAirJumped=!0);const u=i.vy>0&&!e.jumpHeld?t.gravity*t.jumpCutMultiplier:t.gravity;i.grounded?i.vy=Math.max(0,i.vy):i.vy=Math.max(-t.maxFall,i.vy-u*n)}let c=i.vy*n;return i.vy<=0&&r>-1/0&&s+c<=r&&(c=r-s,i.vy=0),{dx:i.vx*n,dy:c,dz:i.vz*n}}function Ps(i,e,t){return i<e?Math.min(e,i+t):Math.max(e,i-t)}class j0{current={x:0,y:0,z:0,yaw:0};remember(e,t,n,s){this.current={x:e,y:t,z:n,yaw:s}}position(){return this.current}}const Dc=.45;class ua{rig;pos=new R;state=Lc();cfg={...V0};radius=.34;height=.9;squash=0;t=0;airSpinT=null;airSpinDuration=.4;safeGround=new j0;events={jumped:!1,airJumped:!1,landed:!1,pounced:!1};constructor(){this.rig=k0()}applyCosmetics(e,t){const n=this.rig.head;if(e.includes("cap")){const s=new Q(new gt(.26,.28,.14,10),Se(U.victoryRed,{flatShading:!1}));s.position.set(0,.26,-.02);const r=new Q(new Ke(.3,.04,.24),Se(U.victoryRed,{flatShading:!1}));r.position.set(0,.22,-.3),n.add(s,r)}if(e.includes("sunglasses")){const s=new Q(new Ke(.4,.09,.05),Se(592402,{gloss:.9,flatShading:!1}));s.position.set(0,.08,.24),n.add(s)}if(e.includes("glasses"))for(const s of[-1,1]){const r=new Q(new Bt(.07,.015,6,12),Se(13159894,{gloss:.6,flatShading:!1}));r.position.set(.12*s,.08,.25),n.add(r)}if(e.includes("bandana")){const s=new Q(new gt(.3,.34,.16,8),Se(U.taroPurple,{flatShading:!1}));s.position.set(0,-.22,0),n.add(s)}if(e.includes("crown")){const s=new Q(new gt(.2,.24,.18,8),Se(U.ramenGold,{emissive:U.ramenGold,emissiveIntensity:.6,gloss:.9,flatShading:!1}));s.position.set(0,.32,0),n.add(s)}if(t){const s=new Q(new Bt(.24,.03,8,18),Se(U.star,{emissive:U.star,emissiveIntensity:1.6}));s.rotation.x=Math.PI/2,s.position.set(0,.48,0),n.add(s)}this.trail=e.includes("trailHearts")?U.heartNeon:e.includes("trailStars")?U.star:null}trail=null;spawnAt(e,t,n,s=0){this.placeAt(e,t,n,s),this.safeGround.remember(e,t,n,s)}respawnAtSafeGround(){const e=this.safeGround.position();this.placeAt(e.x,e.y,e.z,e.yaw)}placeAt(e,t,n,s){this.pos.set(e,t,n),Object.assign(this.state,Lc()),this.state.grounded=!0,this.state.facingX=Math.sin(s),this.state.facingZ=Math.cos(s),this.rig.group.position.copy(this.pos),this.rig.group.rotation.y=s}ridePlatform(e){Math.abs(e)<1e-5||(this.pos.y+=e,this.state.vy=0,this.state.grounded=!0,this.rememberSafeGround(),this.rig.group.position.y=this.pos.y)}faceDirection(e,t){const n=Math.hypot(e,t);n<1e-4||(this.state.facingX=e/n,this.state.facingZ=t/n,this.rig.group.rotation.y=Math.atan2(this.state.facingX,this.state.facingZ))}update(e,t,n,s){const r=Math.cos(s),o=Math.sin(s),a=t.moveX*r-t.moveY*o,c=-t.moveX*o-t.moveY*r,l=this.state.grounded,h=this.pos.y,d=l?Dc:.02,u=n.groundAt(this.pos.x,this.pos.z,this.pos.y+d),p=W0(this.state,{x:a,y:c,jumpPressed:t.jumpPressed,jumpHeld:t.jump,pounce:t.pounce},this.cfg,e,this.pos.y,u);this.pos.x+=p.dx,this.pos.y+=p.dy,this.pos.z+=p.dz,n.resolveWalls(this.pos,this.radius,this.height,l?Dc:0);const m=n.groundAt(this.pos.x,this.pos.z,Math.max(h,this.pos.y)+d);this.state.vy<=0&&m>-1/0&&this.pos.y<=m?(this.state.grounded||(this.state.justLanded=!0),this.pos.y=m,this.state.vy=0,this.state.grounded=!0,this.state.coyote=this.cfg.coyoteTime,this.state.airJumps=0):this.state.grounded&&(this.state.grounded=!1),this.state.grounded&&this.rememberSafeGround(),this.events={jumped:this.state.justJumped,airJumped:this.state.justAirJumped,landed:this.state.justLanded,pounced:this.state.justPounced},this.state.justAirJumped&&(this.airSpinT=0),this.airSpinT!==null&&(this.airSpinT+=e,this.airSpinT>=this.airSpinDuration&&(this.airSpinT=null)),this.t+=e;const x=this.rig.group;x.position.copy(this.pos);const g=Math.hypot(this.state.vx,this.state.vz);if(g>.4){const C=Math.atan2(this.state.facingX,this.state.facingZ);x.rotation.y=X0(x.rotation.y,C,14,e)}this.state.justLanded&&(this.squash=1),(this.state.justJumped||this.state.justPounced)&&(this.squash=-.7),this.squash=Ic(this.squash,0,9,e);const f=this.state.grounded?Math.sin(this.t*2.4)*.012:0,b=(1-this.squash*.25)*(1+f),E=(1+this.squash*.18)*(1-f*.5);this.rig.body.scale.set(E,b,E);const y=Math.min(1,g/this.cfg.walkSpeed),w=this.t*13;this.rig.legs.forEach((C,D)=>{const S=D%2===0?0:Math.PI;C.rotation.x=Math.sin(w+S)*.7*y});const A=-this.state.vy*.05+Math.sin(w)*.12*y;this.rig.earL.rotation.z=.5+A,this.rig.earR.rotation.z=-.5-A,this.rig.earL.rotation.x=this.state.grounded?0:-.6,this.rig.earR.rotation.x=this.state.grounded?0:-.6,this.rig.head.rotation.x=Math.sin(w*.5)*.06*y+y*.08,this.rig.tail.rotation.x=-.7+Math.sin(this.t*8)*.25*(.4+y),this.rig.tail.rotation.y=Math.sin(this.t*9.5)*(.22+.2*y),this.airSpinT!==null?this.rig.body.rotation.x=this.airSpinT/this.airSpinDuration*Math.PI*2:this.rig.body.rotation.x=this.state.pouncing>0?-.35:Ic(this.rig.body.rotation.x,0,10,e)}rememberSafeGround(){this.safeGround.remember(this.pos.x,this.pos.y,this.pos.z,Math.atan2(this.state.facingX,this.state.facingZ))}}function Ic(i,e,t,n){return rt.damp(i,e,t,n)}function X0(i,e,t,n){let s=(e-i)%(Math.PI*2);return s>Math.PI&&(s-=Math.PI*2),s<-Math.PI&&(s+=Math.PI*2),i+s*(1-Math.exp(-14*n))}class Rl{rig;state={z:0,x:0,speed:0,steering:0,gear:1,driving:!1};maxSpeed=Sc.maxForwardSpeed;laneHalf=5.4;speedMultiplier=1;constructor(){this.rig=B0()}place(e,t,n=0){this.state.x=e,this.state.z=t,this.rig.group.position.set(e,0,t),this.rig.group.rotation.y=n}setHeadlights(e){for(const t of this.rig.headlights)t.intensity=e?260:0}update(e,t,n,s=!1){const r=this.state,o={...Sc,maxForwardSpeed:this.maxSpeed*this.speedMultiplier},a=f0(r,{throttle:n,steer:t,handbrake:s},o,e);r.z+=a.distance,r.x+=a.lateral,r.x=rt.clamp(r.x,-this.laneHalf,this.laneHalf);const c=this.rig.group;c.position.set(r.x,0,r.z),c.rotation.y=r.steering*-.15*Math.sign(r.speed||1);const l=r.speed*e/.38;for(const h of this.rig.wheels)h.rotation.x+=l;for(const h of this.rig.frontWheelPivots)h.rotation.y=rt.damp(h.rotation.y,r.steering*-.42,10,e);for(const h of this.rig.taillights){const d=h.material;d.emissiveIntensity=a.braking?4.2:1.25}return c.rotation.z=rt.damp(c.rotation.z,r.steering*-.045,7,e),c.position.y=Math.sin(r.z*2.1)*Math.min(.012,Math.abs(r.speed)*55e-5),a}}const q0=`
  varying vec3 vWorld;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Y0=`
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
`;class nr{group=new Ne;uniforms;stars;starMat;constructor(){this.uniforms={uTop:{value:new Le(U.midnight)},uHorizon:{value:new Le(U.horizonGlow)},uGlow:{value:new Le(U.heartNeon)},uGlowStrength:{value:.22},uSun:{value:0}};const e=new Q(new wt(420,24,16),new zt({vertexShader:q0,fragmentShader:Y0,uniforms:this.uniforms,side:Nt,depthWrite:!1,fog:!1}));e.renderOrder=-100,this.group.add(e);const t=700,n=new Float32Array(t*3);for(let r=0;r<t;r++){const o=Math.random()*Math.PI*2,a=Math.acos(Math.random()*.85),c=400;n[r*3]=c*Math.sin(a)*Math.cos(o),n[r*3+1]=c*Math.cos(a)+10,n[r*3+2]=c*Math.sin(a)*Math.sin(o)}const s=new yt;s.setAttribute("position",new Ft(n,3)),this.starMat=new ta({color:U.star,size:1.6,sizeAttenuation:!0,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}),this.stars=new dl(s,this.starMat),this.stars.renderOrder=-99,this.group.add(this.stars)}set(e){this.uniforms.uTop.value.setHex(e.top),this.uniforms.uHorizon.value.setHex(e.horizon),this.uniforms.uGlow.value.setHex(e.glow),this.uniforms.uGlowStrength.value=e.glowStrength??.22}setSunrise(e){this.uniforms.uSun.value=e;const t=new Le(U.midnight).lerp(new Le(3821455),e),n=new Le(U.horizonGlow).lerp(new Le(16751186),e);this.uniforms.uTop.value.copy(t),this.uniforms.uHorizon.value.copy(n),this.starMat.opacity=.85*(1-e)}update(e){this.stars.rotation.y+=e*.004}}const Wi=2600;class ir{points;geo;pos;col;parts=[];cursor=0;constructor(e){this.geo=new yt,this.pos=new Float32Array(Wi*3),this.col=new Float32Array(Wi*3);for(let n=0;n<Wi;n++)this.pos[n*3+1]=-1e3,this.parts.push({life:0,maxLife:1,vel:new R,gravity:0,drag:0});this.geo.setAttribute("position",new Ft(this.pos,3)),this.geo.setAttribute("color",new Ft(this.col,3));const t=new ta({size:.16,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:Gs});this.points=new dl(this.geo,t),this.points.frustumCulled=!1,e.add(this.points)}burst(e,t,n={}){const s=(n.colors??[U.heartNeon,U.ramenGold,U.star]).map(r=>new Le(r));for(let r=0;r<t;r++){const o=this.cursor;this.cursor=(this.cursor+1)%Wi;const a=this.parts[o];a.maxLife=a.life=(n.life??1.2)*(.6+Math.random()*.8),a.gravity=n.gravity??6,a.drag=n.drag??1.2;const c=(n.speed??4)*(.4+Math.random()),l=Math.random()*Math.PI*2,h=(Math.random()-.3)*(n.spread??1.2);a.vel.set(Math.cos(l)*c*Math.cos(h),Math.sin(h)*c+(n.up??2.5),Math.sin(l)*c*Math.cos(h)),this.pos[o*3]=e.x+(Math.random()-.5)*.3,this.pos[o*3+1]=e.y+(Math.random()-.5)*.3,this.pos[o*3+2]=e.z+(Math.random()-.5)*.3;const d=s[Math.random()*s.length|0];this.col[o*3]=d.r,this.col[o*3+1]=d.g,this.col[o*3+2]=d.b}}update(e){for(let t=0;t<Wi;t++){const n=this.parts[t];if(!(n.life<=0)){if(n.life-=e,n.life<=0){this.pos[t*3+1]=-1e3;continue}n.vel.y-=n.gravity*e,n.vel.multiplyScalar(Math.max(0,1-n.drag*e)),this.pos[t*3]+=n.vel.x*e,this.pos[t*3+1]+=n.vel.y*e,this.pos[t*3+2]+=n.vel.z*e,Math.min(1,n.life/(n.maxLife*.4)),this.col[t*3]*=.999}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}}class Qn{constructor(e,t,n,s,r){this.steps=e,this.duration=t,this.camera=n,this.cinema=s,this.onDone=r,s.setCinematic(!0),n.cinematicControl=!0;const o=a=>{a instanceof KeyboardEvent&&a.code!=="Escape"||(a.preventDefault(),a.stopImmediatePropagation(),this.finish())};this.skipHandler=o,setTimeout(()=>{addEventListener("pointerdown",o,!0),addEventListener("keydown",o,!0)},350)}time=0;fired=new Set;curKey=null;prevKey=null;keyStart=0;glide=0;done=!1;skipHandler;update(e){if(!this.done){if(this.time+=e,this.steps.forEach((t,n)=>{this.time>=t.t&&!this.fired.has(n)&&(this.fired.add(n),t.cam&&(this.prevKey=this.curKey??t.cam,this.curKey=t.cam,this.keyStart=this.time,this.glide=t.glide??0),t.slowmo!==void 0&&(this.cinema.timeScale=t.slowmo),t.flash&&this.cinema.flashWhite(t.flash),t.do?.())}),this.curKey){const t=this.camera.cam;if(this.glide>0&&this.prevKey){const n=Math.min(1,(this.time-this.keyStart)/this.glide),s=n*n*(3-2*n);t.position.lerpVectors(this.prevKey.pos,this.curKey.pos,s);const r=this.prevKey.look.clone().lerp(this.curKey.look,s);t.lookAt(r);const o=this.prevKey.fov??55,a=this.curKey.fov??55;Math.abs(t.fov-(o+(a-o)*s))>.01&&(t.fov=o+(a-o)*s,t.updateProjectionMatrix())}else t.position.copy(this.curKey.pos),t.lookAt(this.curKey.look),this.curKey.fov&&Math.abs(t.fov-this.curKey.fov)>.01&&(t.fov=this.curKey.fov,t.updateProjectionMatrix())}this.time>=this.duration&&this.finish()}}finish(){this.done||(this.done=!0,removeEventListener("pointerdown",this.skipHandler,!0),removeEventListener("keydown",this.skipHandler,!0),this.cinema.setCinematic(!1),this.cinema.timeScale=1,this.camera.cinematicControl=!1,this.onDone())}}function $0(i,e,t){const n=Math.round(500*Math.min(1,i.parSeconds/Math.max(i.timeSeconds,1))),s=i.ducksThisRun*50,r=i.secretFound?100:0,o=-Math.min(300,i.deaths*80),a=400,c=Math.max(0,n+s+r+o+a);let l="C";c>=850&&i.deaths===0?l="S":c>=700?l="GOLD":c>=500&&(l="B");let d={C:20,B:35,GOLD:50,S:75}[l];return e&&(d+=100),d+=i.ducksThisRun*15,i.secretFound&&(d+=25),i.bounty&&(d+=40+i.modifierCount*20),t&&(d=Math.round(d*1.25)),{score:c,medal:l,payout:d,breakdown:[{label:"CLEAR",value:a},{label:"TIME",value:n},{label:"GOLDEN DUCKS",value:s},{label:"SECRET",value:r},{label:"DAMAGE",value:o}]}}const Uc=["C","B","GOLD","S"];function K0(i,e){return e?Uc.indexOf(i)>Uc.indexOf(e):!0}const Hr=[{id:"ramen",name:"RAMEN CUP",desc:"auto full-heal once at 1 heart",category:"snack",price:15,emoji:"🍜"},{id:"bobaShield",name:"BOBA SHIELD",desc:"absorbs the first 2 hits each run",category:"snack",price:20,emoji:"🧋"},{id:"cookie",name:"GRANDMA'S COOKIE",desc:"one puzzle hint per run [H]",category:"snack",price:25,emoji:"🍪"},{id:"foam",name:"FOAM COLLAR",desc:"+1 max heart",category:"collar",price:250,emoji:"🦴"},{id:"puffer",name:"PUFFER VEST",desc:"falls & water cost no heart",category:"collar",price:300,emoji:"🦺"},{id:"duckdown",name:"DUCKDOWN COLLAR",desc:"+2 max hearts, -10% speed",category:"collar",price:450,emoji:"🪶"},{id:"racing",name:"RACING COLLAR",desc:"+15% speed, -1 max heart",category:"collar",price:400,emoji:"🏁"},{id:"magnet",name:"MAGNET",desc:"pickups fly to you",category:"charm",price:150,emoji:"🧲"},{id:"scout",name:"SCOUT",desc:"pings when a secret is near",category:"charm",price:200,emoji:"📡"},{id:"barkAmp",name:"BARK AMP",desc:"pounce bonks a wider radius",category:"charm",price:250,emoji:"📢"},{id:"coupon",name:"HAYDEN'S COUPON",desc:"shop prices -20% (he is furious)",category:"charm",price:220,emoji:"🧾"},{id:"pearlcut",name:"PEARL CUT",desc:"+25% pearl payouts",category:"charm",price:300,emoji:"💰"},{id:"slowpaw",name:"SLOW PAW",desc:"pounce cooldown -40%",category:"charm",price:260,emoji:"🐾"},{id:"secondwind",name:"SECOND WIND",desc:"survive one lethal hit per run",category:"charm",price:350,emoji:"💫"},{id:"ballII",name:"BALL LAUNCHER II",desc:"triple ricochet",category:"weaponTier",price:400,emoji:"🎾"},{id:"whistleII",name:"DUCK WHISTLE II",desc:"half cooldown",category:"weaponTier",price:400,emoji:"📯"},{id:"ankhII",name:"ANKH II",desc:"bigger reveal + stun radius",category:"weaponTier",price:600,emoji:"☥"},{id:"cap",name:"BACKWARDS CAP",desc:"corbin's. obviously.",category:"cosmetic",price:120,emoji:"🧢"},{id:"sunglasses",name:"SUNGLASSES",desc:"at night. iconic.",category:"cosmetic",price:100,emoji:"🕶"},{id:"bandana",name:"BANDANA",desc:"roguish.",category:"cosmetic",price:80,emoji:"🧣"},{id:"glasses",name:"TINY ROUND GLASSES",desc:"lainie's look.",category:"cosmetic",price:150,emoji:"👓"},{id:"trailHearts",name:"HEART TRAIL",desc:"you leave love behind",category:"cosmetic",price:90,emoji:"💗"},{id:"trailStars",name:"STAR TRAIL",desc:"you leave night behind",category:"cosmetic",price:90,emoji:"✨"},{id:"underglowPink",name:"UNDERGLOW: NEON PINK",desc:"the C6 approves",category:"cosmetic",price:110,emoji:"🌸"},{id:"underglowGold",name:"UNDERGLOW: RAMEN GOLD",desc:"tasteful. warm.",category:"cosmetic",price:110,emoji:"🍯"},{id:"hornQuack",name:"HORN: QUACK",desc:"the ducks respect it",category:"cosmetic",price:60,emoji:"🦆"},{id:"hornBark",name:"HORN: BARK",desc:"boof at speed",category:"cosmetic",price:60,emoji:"🐕"},{id:"chromeDuck",name:"CHROME DUCK ORNAMENT",desc:"hood royalty. prestige.",category:"cosmetic",price:800,emoji:"🏆"}];function Z0(i){const e=t=>i.filter(n=>n===t).length;return{ramenHeals:e("ramen"),shieldHits:e("bobaShield")*2,hints:e("cookie")}}function Bo(i,e){return e?Math.round(i.price*.8):i.price}function J0(i,e,t,n){return i.category!=="snack"&&t.includes(i.id)?!1:e>=Bo(i,n)}const Q0=[{id:"noWeapons",name:"UNARMED",desc:"weapons confiscated"},{id:"doubleDucks",name:"DOUBLE DUCKS",desc:"twice the waterfowl"},{id:"oneHeart",name:"ONE HEART",desc:"no mistakes"},{id:"rushHour",name:"RUSH HOUR",desc:"par time -30%"},{id:"fogRolls",name:"FOG ROLLS IN",desc:"visibility: emotional"},{id:"greed",name:"GREED",desc:"pearls ×2 · hits cost 5 pearls"}];function eg(i){const e=[...Q0],t=s=>e[s%e.length],n=[];for(let s=0;s<3;s++){const r=t(i*7+s*3+1);let o=t(i*11+s*5+4);o.id===r.id&&(o=t(i*11+s*5+5)),n.push([r,o])}return n}const tg={snack:"SNACKS (one run each)",collar:"COLLARS (wear one)",charm:"CHARMS (equip two)",weaponTier:"WEAPON UPGRADES",cosmetic:"DRIP"};function ng(i,e){const t=i.hud.overlay();t.style.justifyContent="flex-start",t.style.overflowY="auto",t.style.padding="30px 16px";const n=()=>{const s=i.save.data,r=s.gear.charms.includes("coupon"),o=["snack","collar","charm","weaponTier","cosmetic"].map(a=>{const c=Hr.filter(l=>l.category===a).map(l=>{const h=l.category==="snack"?s.gear.snacks.filter(x=>x===l.id).length:s.gear.owned.includes(l.id),d=Bo(l,r),u=J0(l,s.pearls,s.gear.owned,r),p=l.category==="collar"&&s.gear.collar===l.id||l.category==="charm"&&s.gear.charms.includes(l.id);let m="";return l.category==="snack"?m=`<button class="dj-btn" data-buy="${l.id}" ${s.pearls<d?"disabled":""}>BUY ${d}⬤${h?` (×${h})`:""}</button>`:typeof h=="boolean"&&h?l.category==="collar"||l.category==="charm"?m=`<button class="dj-btn" data-equip="${l.id}" style="${p?"background:#33FF8833":""}">${p?"EQUIPPED":"EQUIP"}</button>`:m='<span style="color:#33FF88;font-weight:800">OWNED</span>':m=`<button class="dj-btn" data-buy="${l.id}" ${u?"":"disabled"}>BUY ${d}⬤</button>`,`<div style="display:flex;align-items:center;gap:12px;justify-content:space-between;padding:6px 0">
              <div style="min-width:0"><b>${l.emoji} ${l.name}</b><div style="font-size:12px;opacity:0.75">${l.desc}</div></div>
              <div style="flex-shrink:0">${m}</div></div>`}).join("");return`<div class="dj-card" style="width:min(520px,92vw);margin-bottom:12px;padding:14px 18px">
          <div style="font-family:'Space Grotesk';letter-spacing:2px;color:#CBB7E8;margin-bottom:6px">${tg[a]}</div>${c}</div>`}).join("");t.innerHTML=`
      <h1 style="letter-spacing:4px">GRANDMA'S DINER</h1>
      <div style="opacity:0.8;font-style:italic">"SPEAK UP. ALSO, BUY SOMETHING." — ${"⬤".repeat(0)} <b style="color:#B388EB">${s.pearls} ⬤</b></div>
      ${o}
      <button class="dj-btn" data-a="close" style="margin-bottom:30px">LEAVE (SHE WAVES)</button>
    `,t.querySelectorAll("[data-buy]").forEach(a=>{a.addEventListener("click",()=>{const c=Hr.find(h=>h.id===a.dataset.buy),l=Bo(c,i.save.data.gear.charms.includes("coupon"));i.save.data.pearls<l||(i.save.patch(h=>{if(h.pearls-=l,c.category==="snack"?h.gear.snacks.push(c.id):h.gear.owned.push(c.id),c.category==="collar"&&!h.gear.collar&&(h.gear.collar=c.id),c.category==="charm"&&h.gear.charms.length<2&&h.gear.charms.push(c.id),c.category==="weaponTier"){const d=c.id.replace("II","");h.weaponTiers[d]=2}}),i.hud.setPearls(i.save.data.pearls),i.audio.play("register",.7),i.audio.play("fanfare",.35,1.2),i.hud.toast(`CAPSULE POP — ${c.emoji} ${c.name}`,2.4),n())})}),t.querySelectorAll("[data-equip]").forEach(a=>{a.addEventListener("click",()=>{const c=a.dataset.equip,l=Hr.find(h=>h.id===c);i.save.patch(h=>{l.category==="collar"?h.gear.collar=h.gear.collar===c?null:c:l.category==="charm"&&(h.gear.charms.includes(c)?h.gear.charms=h.gear.charms.filter(d=>d!==c):(h.gear.charms.length>=2&&h.gear.charms.shift(),h.gear.charms.push(c)))}),i.audio.play("click",.5),n()})}),t.querySelector('[data-a="close"]').addEventListener("click",()=>{t.remove(),e()})};n()}function Bs(){return{step:0,startedAt:0}}const Gr=[0,1,2,3,4],ig=6e3;function sg(i,e,t){let n=i;n.step>0&&t-n.startedAt>ig&&(n=Bs());const s=Gr[n.step];if(e!==s)return e===Gr[0]?{state:{step:1,startedAt:t},triggered:!1}:{state:Bs(),triggered:!1};const r=n.step===0?t:n.startedAt,o=n.step+1;return o===Gr.length?{state:Bs(),triggered:!0}:{state:{step:o,startedAt:r},triggered:!1}}const rg=new R(0,.6,-.2);class og{constructor(e){this.ctx=e;const t=z0();this.dinerFound=!!e.save.data.secrets.diner,this.world=new ha(t),this.scene.add(this.world.group),this.scene.fog=new zi(U.midnight,t.fogDensity??.011),this.sky=new nr,this.sky.set({top:U.midnight,horizon:U.horizonGlow,glow:t.skyGlow}),this.scene.add(this.sky.group);const n=new Js(8228816,1317432,1.15);this.scene.add(n),this.sun=new aa(11057407,1.5),this.sun.position.set(20,40,-20),e.tier==="ultra"&&(this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.left=-50,this.sun.shadow.camera.right=50,this.sun.shadow.camera.top=60,this.sun.shadow.camera.bottom=-60,this.sun.shadow.camera.far=140,this.sun.shadow.bias=-8e-4),this.scene.add(this.sun);for(let c=-70;c<245;c+=22){const l=Pc();l.position.set(-8.4,0,c),l.rotation.y=Math.PI/2,this.scene.add(l);const h=Pc();if(h.position.set(It+2.4,0,c+11),h.rotation.y=-Math.PI/2,this.scene.add(h),this.ctx.tier==="ultra"&&c%44===0){const d=new Tn(U.ramenGold,30,16,1.8);d.position.set(-7.4,5,c+1.3),this.scene.add(d)}}for(const c of[-1,1])for(let l=-60;l<240;l+=24){if(c===1&&vi.some(d=>Math.abs(d.z-l)<12))continue;const h=H0(22);h.position.set((It+3)*c,0,l+11),this.scene.add(h)}const s=ag(7);for(let c=0;c<60;c++){const l=s()>.5?1:-1,h=-80+s()*330;if(l===1&&vi.some(u=>Math.abs(u.z-h)<7))continue;const d=Tl(3+s()*4);d.position.set(l*(It+10+s()*22),0,h),this.scene.add(d)}for(const c of vi){const l=this.isUnlocked(c.id),h=Xs([`EXIT ${c.id.slice(2)}`,c.name],l?{glow:c.accent}:{fg:"#5b6070"});h.position.set(It+10.5,0,c.z-5.4),h.rotation.y=-Math.PI/2,this.scene.add(h);const d=new Tn(l?c.accent:3422282,l?22:5,13,1.8);d.position.set(It+8,2.4,c.z),this.scene.add(d)}const r=Xs(["GRANDMA'S","DINER"],{fg:"#CBB7E8",glow:U.grandmaLilac});r.position.set(-14,0,$n+9),r.rotation.y=Math.PI/2,this.scene.add(r),this.car=new Rl,this.car.place(2.4,6,0),this.car.setHeadlights(!1),this.scene.add(this.car.rig.group),this.player=new ua,this.player.applyCosmetics(e.save.data.gear.owned,!!e.save.data.secrets.halo),this.player.spawnAt(-2,0,2,Math.PI/2),this.scene.add(this.player.rig.group);const o=e.save.data.gear.owned;if(o.includes("underglowPink")||o.includes("underglowGold")){const c=new Tn(o.includes("underglowPink")?U.heartNeon:U.ramenGold,24,6,1.4);c.position.set(0,.12,0),this.car.rig.group.add(c)}if(o.includes("chromeDuck")){const c=new Q(new wt(.09,10,8),new Ci({color:15922424,emissive:5594214}));c.position.set(0,.72,2.3);const l=new Q(new wt(.05,8,6),new Ci({color:15922424,emissive:5594214}));l.position.set(0,.82,2.34),this.car.rig.group.add(c,l)}o.includes("racing")&&(this.car.speedMultiplier=1.15),e.camera.configure([],{x:0,y:5.2,z:-7.5}),e.camera.snapTo(this.player.pos),this.fx=new ir(this.scene);const a=[[19,-16,3.8,$n],[20,0,.5,238],[21,It+5,.5,215]];for(const[c,l,h,d]of a){if(e.save.data.ducks.includes(c))continue;const u=Al();u.position.set(l,h,d),this.scene.add(u),this.hubDucks.push({id:c,obj:u,taken:!1})}if(!e.save.data.secrets.introSeen)this.playHeist();else{const c=new Date,l=c.getMonth()===1&&c.getDate()===14,h=c.getMonth()===7;e.hud.chapterCard("THE HIGHWAY",l?"happy valentine’s day, lainie.":h?"est. august 2023 🎂":"the ducks stole the letter. drive.")}addEventListener("pointerdown",this.cornerTap),addEventListener("pointerdown",this.dogTap)}scene=new is;world;player;car;sky;mode="walk";exitCooldown=0;reverseTime=0;dinerFound=!1;sun;fx;cutscene=null;heroDone=!1;shopOpen=!1;hornTaps=0;hornTimer=0;duckCode=Bs();bentleyTaps=0;idleTime=0;grandmaToldYou=!1;hubDucks=[];cornerTap=e=>{const t=e.clientX/innerWidth,n=e.clientY/innerHeight,s=t<.18&&n<.18?0:t>.82&&n<.18?1:t<.18&&n>.82?2:t>.82&&n>.82?3:t>.4&&t<.6&&n>.4&&n<.6?4:-1;if(s===-1)return;const r=sg(this.duckCode,s,performance.now());this.duckCode=r.state,r.triggered&&this.duckMode()};dogTap=e=>{if(this.mode!=="walk")return;const t=this.player.pos.clone().setY(this.player.pos.y+.5).project(this.ctx.camera.cam),n=(t.x*.5+.5)*innerWidth,s=(-t.y*.5+.5)*innerHeight;Math.hypot(e.clientX-n,e.clientY-s)<70&&(this.bentleyTaps++,this.ctx.audio.play("bark",.4+this.bentleyTaps*.07,1+this.bentleyTaps*.06),this.bentleyTaps>=7&&(this.bentleyTaps=0,this.ctx.hud.toast("BOOF. TAIL: WAGGING. (certified dog botherer)",2.6),this.fx.burst(this.player.pos.clone().setY(1.2),40,{colors:[U.heartNeon],speed:3,up:3,life:1}),this.ctx.save.patch(r=>{r.secrets.botherer=!0})))};duckMode(){this.ctx.audio.play("quack",.8),this.ctx.audio.play("quack",.8,.8),this.ctx.audio.play("quack",.8,1.2),this.ctx.hud.toast("DUCK MODE. POND ZERO REVEALED. (it was always the ducks)",3.4),this.ctx.save.patch(t=>{t.secrets.pondzero=!0});const e=this.mode==="walk"?this.player.pos.clone():this.car.rig.group.position.clone();for(let t=0;t<30;t++){const n=Li(),s=Math.floor(t/2),r=t%2===0?1:-1;n.group.position.set(e.x+r*s*1.3,9+s*.3,e.z-50),this.scene.add(n.group);const o=performance.now(),a=()=>{const c=(performance.now()-o)/1e3;if(c>8){n.group.removeFromParent();return}n.group.position.z+=.4,n.wingL.rotation.z=.6+Math.sin(c*14+t)*.5,n.wingR.rotation.z=-.6-Math.sin(c*14+t)*.5,requestAnimationFrame(a)};a()}}playHeist(){const e=this.car.rig.group.position.clone(),t=[],n=da();n.position.set(e.x,4.2,e.z),n.visible=!1,this.scene.add(n);const s=(r,o,a)=>new R(r,o,a);this.cutscene=new Qn([{t:0,cam:{pos:s(e.x,14,e.z-1),look:e,fov:40}},{t:.2,cam:{pos:s(e.x-3,1.2,e.z-6),look:s(e.x,.8,e.z),fov:44},glide:2.6},{t:2.2,do:()=>{n.visible=!0;for(let r=0;r<4;r++){const o=Li();o.group.position.set(e.x+Math.cos(r*1.6)*2.4,7+r,e.z+Math.sin(r*1.6)*2.4),this.scene.add(o.group),t.push(o.group)}this.ctx.audio.play("quack",.7)}},{t:2.4,cam:{pos:s(e.x+4,3.4,e.z-4),look:s(e.x,4,e.z),fov:50},glide:1.4,slowmo:.35,do:()=>{for(const r of t)r.position.y=5.2}},{t:3.9,flash:.5,slowmo:1,do:()=>{n.visible=!1,this.fx.burst(n.position,260,{colors:[16118504,U.heartNeon,U.duck],speed:6,up:4,gravity:3,life:2}),this.ctx.audio.play("impact",.6),this.ctx.audio.play("quack",.8,.8)}},{t:4.5,cam:{pos:s(e.x,2.2,e.z-9),look:s(e.x,8,e.z+30),fov:62},glide:1.8,do:()=>{for(const[r,o]of t.entries()){const a=s((r-1.5)*3,4+r,24),c=o.position.clone(),l=performance.now(),h=()=>{const d=(performance.now()-l)/1600;if(d>1||!o.parent){o.removeFromParent();return}o.position.lerpVectors(c,c.clone().add(a),d*d),requestAnimationFrame(h)};h()}this.ctx.audio.play("whoosh",.5)}},{t:6.4,do:()=>{this.ctx.hud.chapterCard("THE DUCK JOB","the ducks stole the letter. send the dog."),this.ctx.audio.play("howl",.4,1.3)}}],8.2,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.save.patch(r=>{r.secrets.introSeen=!0}),this.ctx.camera.snapTo(this.player.pos),this.ctx.hud.chapterCard("THE HIGHWAY","the ducks stole the letter. drive.")})}playHeroReveal(){const e=this.car.rig.group.position.clone(),t=(n,s,r)=>new R(e.x+Math.sin(n)*s,r,e.z+Math.cos(n)*s);this.cutscene=new Qn([{t:0,cam:{pos:t(Math.PI,5,.7),look:new R(e.x,.7,e.z),fov:38}},{t:.1,cam:{pos:t(Math.PI*.5,5.4,.9),look:new R(e.x,.6,e.z),fov:38},glide:1.9},{t:2,cam:{pos:t(Math.PI*.08,6,1.4),look:new R(e.x,.7,e.z),fov:42},glide:1.8},{t:3.8,flash:.35,do:()=>{this.car.setHeadlights(!0),this.ctx.audio.play("boing",.3,.5)},cam:{pos:t(0,7.5,.8),look:new R(e.x,.8,e.z),fov:48},glide:1.2},{t:5,do:()=>this.ctx.hud.toast("BENTLEY CAN DRIVE. DO NOT ASK.",2.5)}],5.8,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.camera.snapTo(this.car.rig.group.position)})}isUnlocked(e){if(e==="ch1")return!0;const t=Number(e.slice(2));return this.ctx.save.data.chaptersDone.includes(`ch${t-1}`)}update(e){if(this.fx.update(e),this.shopOpen)return;if(this.cutscene&&!this.cutscene.done){this.cutscene.update(e),this.sky.update(e);return}const t=this.ctx.input.poll();if(this.ctx.camera.control(e,t.rotate,t.zoom),this.sky.update(e),this.exitCooldown=Math.max(0,this.exitCooldown-e),this.mode==="walk"){this.player.update(e,t,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.35,this.player.events.airJumped?1.35:1),this.player.events.landed&&this.ctx.audio.play("land",.25),this.player.events.pounced&&(this.ctx.audio.play("whoosh",.4),this.ctx.camera.kick(.18),this.fx.burst(this.player.pos,14,{colors:[9081784],speed:2,up:1,life:.5})),this.player.events.landed&&this.fx.burst(this.player.pos,10,{colors:[9081784],speed:1.6,up:.8,life:.4});const s=Math.hypot(this.player.state.vx,this.player.state.vz)>.3;this.idleTime=s||t.any?0:this.idleTime+e,this.idleTime>30&&!this.grandmaToldYou&&(this.grandmaToldYou=!0,this.ctx.hud.toast("GRANDMA SAYS: SPEAK UP. ALSO, GO FIND THE DUCKS.",3),this.ctx.audio.play("chatter",.4,.8));const r=this.ctx.save.data.secrets.pondzero||this.ctx.save.data.ducks.length>=21,o=new R(-14,0,$n-10);if(r&&this.player.pos.distanceTo(o)<5&&(this.ctx.hud.prompt("[ENTER] POND ZERO (?)"),t.interact)){this.ctx.go("play",{id:"pondzero"});return}const a=this.player.pos.distanceTo(this.car.rig.group.position),c=new R(-14,0,$n),l=this.player.pos.distanceTo(c)<6;if(l?this.ctx.hud.prompt("[ENTER] GRANDMA'S DINER (SHOP)"):this.ctx.hud.prompt(a<3.2?"[ENTER] TAKE THE CORVETTE":null),l&&t.interact){this.shopOpen=!0,this.ctx.audio.play("insertcoin",.5),ng(this.ctx,()=>{this.shopOpen=!1});return}a<3.2&&t.interact&&(this.mode="drive",this.player.rig.group.visible=!1,this.car.setHeadlights(!0),this.ctx.audio.engine(!0,0),this.ctx.audio.play("click",.5),this.ctx.audio.play("growl",.22,.55),this.ctx.hud.toast("W/S THROTTLE + BRAKE  ·  A/D STEER  ·  SPACE HANDBRAKE  ·  F HORN",3.4),this.ctx.camera.configure([],{x:0,y:4.6,z:-9.5}),this.heroDone||(this.heroDone=!0,this.playHeroReveal())),this.ctx.camera.update(e,this.player.pos,new R(this.player.state.vx,0,this.player.state.vz),t.camNudge)}else{const s=t.moveX,r=t.moveY,o=vi.some(c=>Math.abs(this.car.state.z-c.z)<5);this.car.laneHalf=o?It+28:It-.6;const a=this.car.update(e,s,r,t.jump);if(this.ctx.audio.engine(!0,Math.abs(this.car.state.speed)/(this.car.maxSpeed*this.car.speedMultiplier),Math.abs(r),a.skid,this.car.state.gear,a.shifted),this.player.pos.copy(this.car.rig.group.position).add(rg),this.car.state.speed<-3?this.reverseTime+=e:this.reverseTime=0,!this.dinerFound&&(this.reverseTime>4||this.car.state.z<$n+20)&&(this.dinerFound=!0,this.ctx.save.patch(c=>{c.secrets.diner=!0}),this.ctx.hud.toast("GRANDMA'S DINER FOUND. SHE SAYS SPEAK UP.",3.5),this.ctx.audio.play("ding",.6)),t.fire){const c=this.ctx.save.data.gear.owned;this.ctx.audio.horn(c.includes("hornQuack")?"quack":c.includes("hornBark")?"bark":"stock"),this.hornTaps++,clearTimeout(this.hornTimer),this.hornTimer=window.setTimeout(()=>{this.hornTaps=0},1200),this.hornTaps>=3&&(this.hornTaps=0,this.ctx.hud.toast("♥ ♥ ♥ (the horn knows the rhythm)",2),this.fx.burst(this.car.rig.group.position.clone().setY(1.4),30,{colors:[U.heartNeon],speed:3,up:3,life:1}))}if(this.ctx.hud.prompt(Math.abs(this.car.state.speed)<1.5?"[ENTER] HOP OUT":null),t.interact&&Math.abs(this.car.state.speed)<1.5&&(this.mode="walk",this.player.rig.group.visible=!0,this.player.spawnAt(this.car.state.x-2.2,0,this.car.state.z,0),this.car.setHeadlights(!1),this.ctx.audio.engine(!1),this.ctx.camera.configure([],{x:0,y:5.2,z:-7.5})),this.exitCooldown<=0){for(const c of vi)if(U0(this.car.state.x,this.car.state.z,c)){if(this.isUnlocked(c.id)){this.exitCooldown=99,this.ctx.audio.engine(!1),this.ctx.audio.play("insertcoin",.6),this.ctx.save.data.chaptersDone.includes(c.id)?this.offerRun(c.id,c.name):this.ctx.go("play",{id:c.id});return}else this.ctx.hud.toast("EXIT LOCKED. FINISH THE PREVIOUS CHAPTER.",2.2),this.ctx.audio.play("wrong",.4);this.exitCooldown=3}}this.car.state.z=rt.clamp(this.car.state.z,-85,245),this.ctx.camera.update(e,this.car.rig.group.position,new R(0,0,this.car.state.speed*.4),t.camNudge)}const n=this.mode==="walk"?this.player.pos:this.car.rig.group.position;for(const s of this.hubDucks)s.taken||(s.obj.rotation.y+=e*2,s.obj.position.distanceTo(n)<1.8&&(s.taken=!0,s.obj.visible=!1,this.ctx.save.patch(r=>{r.ducks.includes(s.id)||r.ducks.push(s.id)}),this.ctx.hud.toast(`GOLDEN DUCK ${this.ctx.save.data.ducks.length}/21`,2.2),this.ctx.audio.play("quack",.7,.8)));t.pause&&this.ctx.togglePause()}offerRun(e,t){const n=Number(e.slice(2))*13+this.ctx.save.data.bountiesCleared,s=eg(n),r=this.ctx.hud.overlay(),o=s.map((a,c)=>`<button class="dj-btn" data-b="${c}" style="min-width:280px">
        🦆 ${a[0].name} + ${a[1].name}<br/>
        <span style="font-size:11px;opacity:0.7">${a[0].desc} · ${a[1].desc}</span><br/>
        <span style="color:#B388EB;font-size:12px">bonus pearls +80</span></button>`).join("");r.innerHTML=`
      <h1 style="letter-spacing:4px">${t}</h1>
      <button class="dj-btn" data-a="story" style="min-width:280px">STORY RERUN<br/><span style="font-size:11px;opacity:0.7">no modifiers, chase the S rank</span></button>
      <div style="font-family:'Space Grotesk';letter-spacing:3px;color:#FFD23F;margin-top:8px">DUCK BOUNTIES</div>
      ${o}
      <button class="dj-btn" data-a="never">NEVER MIND</button>
    `,r.querySelector('[data-a="story"]').addEventListener("click",()=>{r.remove(),this.ctx.go("play",{id:e})}),r.querySelector('[data-a="never"]').addEventListener("click",()=>{r.remove(),this.exitCooldown=3}),r.querySelectorAll("[data-b]").forEach(a=>{a.addEventListener("click",()=>{const c=s[Number(a.dataset.b)];r.remove(),this.ctx.go("play",{id:e,mods:[c[0].id,c[1].id]})})})}dispose(){removeEventListener("pointerdown",this.cornerTap),removeEventListener("pointerdown",this.dogTap),this.ctx.audio.engine(!1)}}function ag(i){let e=i;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function cg(i,e){const t=new Set;for(const n of i)if("plates"in n.when)n.when.plates.every(s=>e.plates[s])&&t.add(n.open);else if("switches"in n.when)n.when.switches.every(s=>e.switches[s])&&t.add(n.open);else if("rotors"in n.when){const s=n.when.rotors;Object.keys(s).every(r=>(e.rotors?.[r]??-1)===s[r])&&t.add(n.open)}else"paidExact"in n.when?(e.paid?.[n.when.paidExact.slot]??0)===n.when.paidExact.amount&&t.add(n.open):e.keyNear[n.open]&&t.add(n.open);return t}function lg(i,e,t){return t?i===e:i>=e}function hg(i,e){return i===void 0||e.has(i)}class dg{constructor(e,t,n,s,r){this.id=e,this.kind=t,this.weight=n,this.value=s,this.obj=pg(t,n),this.obj.position.copy(r),this.home=r.clone()}obj;carried=!1;home;get pos(){return this.obj.position}}function ug(i){if(i<=0)return[];if(i===1)return[{x:0,z:0}];const e=i===2?.46:.54;return Array.from({length:i},(t,n)=>{const s=-Math.PI/2+n*Math.PI*2/i;return{x:Math.cos(s)*e,z:Math.sin(s)*e}})}function zc(i){if(i.length===0)return"0";const e=[...i].sort((t,n)=>t-n);return e.length===1?String(e[0]):`${e.join(" + ")} = ${e.reduce((t,n)=>t+n,0)}`}function fg(i){return i<=1?U.crtGreen:i===2?U.taroPurple:U.ramenGold}function pg(i,e){const t=new Ne;if(i==="dumbbell"){const n=.16+e*.08,s=fg(e),r=new Q(new gt(.05,.05,.7,8),Se(13159894,{gloss:.4,flatShading:!1}));r.rotation.z=Math.PI/2,r.position.y=n,t.add(r);for(const c of[-.3,.3]){const l=new Q(new gt(n,n,.12,12),Se(s,{emissive:s,emissiveIntensity:.18,gloss:.35,flatShading:!1}));l.rotation.z=Math.PI/2,l.position.set(c,n,0),t.add(l)}const o=tr(128,128,c=>{c.clearRect(0,0,128,128),c.fillStyle="#0b1026",c.beginPath(),c.arc(64,64,54,0,Math.PI*2),c.fill(),c.strokeStyle=`#${s.toString(16).padStart(6,"0")}`,c.lineWidth=8,c.stroke(),c.fillStyle="#ffffff",c.font='800 72px "Space Grotesk", sans-serif',c.textAlign="center",c.textBaseline="middle",c.fillText(String(e),64,68)}),a=new Q(new rn(Math.max(.38,n*1.35),Math.max(.38,n*1.35)),new $t({map:o,transparent:!0,side:Yt}));a.rotation.x=-Math.PI/2,a.position.set(0,n*2+.035,0),t.add(a),t.weightScale=n}else if(i==="block"){const n=new Q(new Ke(.8,.8,.8),Se(9072461));n.position.y=.4,n.castShadow=!0,t.add(n)}else if(i==="coin"){const n=new Q(new gt(.22,.22,.06,14),_t(U.ramenGold,1.2));n.position.y=.35,t.add(n)}else if(i==="key"){const n=new Q(new gt(.05,.05,.5,8),_t(U.crtGreen,1.1));n.rotation.x=Math.PI/2,n.position.y=.4,t.add(n);const s=new Q(new Bt(.14,.05,8,12),_t(U.crtGreen,1.1));s.position.set(0,.4,-.3),t.add(s)}else{const n=new Q(new Ke(.9,1.2,.08),Se(14542832,{gloss:.9,rim:.5,flatShading:!1}));n.position.y=.6,t.add(n)}return t.traverse(n=>{n.castShadow=!0}),t}class mg{constructor(e,t,n,s){this.id=e,this.pos=t,this.needWeight=n,this.exact=s,this.obj=new Q(new gt(1,1.1,.12,20),Se(2305102,{emissive:U.heartNeon,emissiveIntensity:.2})),this.obj.position.y=.06,this.obj.receiveShadow=!0,this.group.add(this.obj);const r=new Q(new Ks(1.05,1.35,24),new $t({color:U.heartNeon,transparent:!0,opacity:.28,side:Yt}));r.rotation.x=-Math.PI/2,r.position.y=.02,this.group.add(r),this.label=new Q(new rn(1.1,.55),new $t({transparent:!0})),this.label.position.set(0,1.5,0),this.group.add(this.label),this.group.position.copy(t),this.setLabel(0,[])}group=new Ne;obj;label;lastShown="";satisfied=!1;restingWeight=0;snapR=1.6;setLabel(e,t){const n=`${e}:${zc(t)}`;if(n===this.lastShown)return;this.lastShown=n;const s=this.exact?e===this.needWeight:e>=this.needWeight,r=tr(240,120,a=>{a.clearRect(0,0,240,120),a.fillStyle="rgba(11,16,38,0.82)",a.beginPath();const c=22;a.moveTo(c,4),a.arcTo(236,4,236,116,c),a.arcTo(236,116,4,116,c),a.arcTo(4,116,4,4,c),a.arcTo(4,4,236,4,c),a.fill(),a.fillStyle=s?"#33FF88":"#FFB627",a.font=`700 ${t.length>1?31:40}px "Space Grotesk", sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(zc(t),120,42),a.font='700 27px "Space Grotesk", sans-serif',a.fillText(`TARGET ${this.needWeight}`,120,87)}),o=this.label.material;o.map?.dispose(),o.map=r,o.needsUpdate=!0}faceCamera(e){this.label.quaternion.copy(e.quaternion)}update(e,t=[]){this.restingWeight=e,this.setLabel(e,t);const n=lg(e,this.needWeight,this.exact);if(n!==this.satisfied){this.satisfied=n;const s=this.obj.material;s.emissive.setHex(n?U.crtGreen:U.heartNeon),s.emissiveIntensity=n?1.1:.2}}}class gg{constructor(e,t,n,s,r,o,a=!1,c){this.id=e,this.needsKey=r,this.isLift=a,this.obj=new Q(new Ke(n.x,n.y,n.z),Se(s,{emissive:s,emissiveIntensity:.14})),this.obj.position.copy(t),this.obj.castShadow=!0,this.closedY=t.y,this.openY=a&&c?c.y:t.y-n.y-.2,this.collider=o.addCollider({kind:"box",center:this.obj.position,half:new R(n.x/2,n.y/2,n.z/2),yaw:0,enabled:!0})}obj;collider;open=!1;closedY;openY;update(e,t){const n=this.obj.position.y,s=n+this.collider.half.y,r=this.isLift&&!!t&&t.state.grounded&&Math.abs(t.pos.y-s)<.12&&Math.abs(t.pos.x-this.obj.position.x)<=this.collider.half.x&&Math.abs(t.pos.z-this.obj.position.z)<=this.collider.half.z,o=this.open?this.openY:this.closedY;this.obj.position.y=rt.damp(this.obj.position.y,o,3,e),this.collider.center.copy(this.obj.position),r&&t&&t.ridePlatform(this.obj.position.y-n)}}class xg{carriables=[];plates=[];gates=[];carrying=null;add(e,t,n){if(e.type==="carry"){const s=new dg(e.id,e.kind,e.weight??1,e.value??0,new R(e.pos.x,e.pos.y,e.pos.z));this.carriables.push(s),n.add(s.obj)}else if(e.type==="plate"){const s=new mg(e.id,new R(e.pos.x,e.pos.y,e.pos.z),e.needWeight??1,e.exactWeight??!1);this.plates.push(s),n.add(s.group)}else if(e.type==="door"||e.type==="lift"){const s=new gg(e.id,new R(e.pos.x,e.pos.y,e.pos.z),new R(e.size.x,e.size.y,e.size.z),e.color??U.dockWater,e.type==="door"?e.needsKey??!1:!1,t,e.type==="lift",e.type==="lift"?new R(e.to.x,e.to.y,e.to.z):void 0);this.gates.push(s),n.add(s.obj)}}nearest(e){let t=null,n=2.1;for(const s of this.carriables){if(s.carried)continue;const r=s.pos.distanceTo(e.pos);r<n&&(n=r,t=s)}return t}interact(e){if(this.carrying){const n=this.carrying;return n.carried=!1,n.pos.set(e.pos.x+e.state.facingX*.9,e.pos.y,e.pos.z+e.state.facingZ*.9),this.carrying=null,"dropped"}const t=this.nearest(e);return t?(t.carried=!0,this.carrying=t,"picked"):null}update(e,t,n,s){this.carrying&&(this.carrying.pos.set(t.pos.x,t.pos.y+1.25,t.pos.z),this.carrying.obj.rotation.y+=e*1.5);const r=new Map;for(const o of this.carriables){if(o.carried)continue;const a=n.groundAt(o.pos.x,o.pos.z,o.pos.y+.4);a>-1/0&&Math.abs(o.pos.y-a)>.01&&(o.pos.y=rt.damp(o.pos.y,a,10,e));let c=null,l=1/0;for(const h of this.plates){const d=Math.hypot(o.pos.x-h.pos.x,o.pos.z-h.pos.z);d<h.snapR&&d<l&&(l=d,c=h)}if(c){const h=r.get(c)??[];h.push(o),r.set(c,h)}}for(const[o,a]of r){a.sort((l,h)=>l.id.localeCompare(h.id));const c=ug(a.length);for(let l=0;l<a.length;l++){const h=a[l],d=c[l];h.pos.x=rt.damp(h.pos.x,o.pos.x+d.x,12,e),h.pos.z=rt.damp(h.pos.z,o.pos.z+d.z,12,e)}}for(const o of this.plates){const a=(r.get(o)??[]).filter(l=>Math.abs(l.pos.y-o.pos.y)<.7).map(l=>l.weight);let c=a.reduce((l,h)=>l+h,0);if(!o.exact){const l=t.pos.x-o.pos.x,h=t.pos.z-o.pos.z;l*l+h*h<1.2&&Math.abs(t.pos.y-o.pos.y)<.7&&(c+=1,a.push(1))}o.update(c,a),s&&o.faceCamera(s)}for(const o of this.gates)o.update(e,t)}}const Ls={ball:"BALL LAUNCHER",boba:"BOBA BLASTER",whistle:"DUCK WHISTLE",ankh:"THE ANKH"};class vg{constructor(e){this.scene=e,e.add(this.group);for(let t=0;t<12;t++){const n=new Q(new wt(.14,10,8),_t(U.crtGreen,.9));n.visible=!1,this.group.add(n),this.pool.push({obj:n,vel:new R,life:0,active:!1,kind:"ball"})}this.ankhLight=new Tn(U.grandmaLilac,0,9,1.6),e.add(this.ankhLight)}owned=[];tiers={};equipped=null;pool=[];group=new Ne;switchTargets=[];bobaSpots=[];whistleCd=0;allyDuck=null;allyTarget=null;ankhActive=!1;ankhLight;onHitTarget=null;onBonk=null;onBobaPlatform=null;setLoadout(e,t){this.owned=[...e],this.tiers={...t},!this.equipped&&this.owned.length&&(this.equipped=this.owned[0])}cycle(e){if(!this.owned.length)return;const t=this.equipped?this.owned.indexOf(this.equipped):0;this.equipped=this.owned[(t+e+this.owned.length)%this.owned.length]}fire(e,t){if(!this.equipped)return null;const n=this.equipped;if(n==="ball"||n==="boba"){const s=this.pool.find(a=>!a.active);if(!s)return null;s.active=!0,s.kind=n,s.life=2.6,s.obj.material.color.setHex(n==="ball"?U.crtGreen:U.taroPurple),s.obj.material.emissive.setHex(n==="ball"?U.crtGreen:U.taroPurple),s.obj.visible=!0,s.obj.position.set(e.pos.x,e.pos.y+.8,e.pos.z);const r=t?.x??e.state.facingX,o=t?.z??e.state.facingZ;return s.vel.set(r,.42,o).normalize().multiplyScalar(13.5),n}return n==="whistle"?this.whistleCd>0?null:(this.whistleCd=this.tiers.whistle===2?4:8,this.summonAlly(e),n):n==="ankh"?(this.ankhActive=!this.ankhActive,n):null}equipSlot(e){const t=this.owned[e];return t?(this.equipped=t,t):null}summonAlly(e){if(!this.allyDuck){const t=new Ne,n=new Q(new wt(.2,10,8),Se(U.duck,{flatShading:!1}));n.position.y=.2,t.add(n);const s=new Q(new wt(.11,8,6),Se(U.duck,{flatShading:!1}));s.position.set(0,.44,.1),t.add(s);const r=new Q(new Ke(.1,.04,.12),Se(U.duckBill));r.position.set(0,.42,.22),t.add(r),this.scene.add(t),this.allyDuck=t}this.allyDuck.visible=!0,this.allyDuck.position.set(e.pos.x+1,e.pos.y+2,e.pos.z),this.allyTarget=null}sendAlly(e){this.allyDuck?.visible&&(this.allyTarget=e.clone())}addSwitchTarget(e,t){const n=new Ne,s=new Q(new Bt(.34,.07,8,16),_t(U.ramenGold,1.4));n.add(s);const r=new Q(new wt(.12,8,6),_t(U.heartNeon,1.2));n.add(r),n.position.copy(t),this.group.add(n),this.switchTargets.push({id:e,obj:n,hit:!1})}addBobaSpot(e){const t=new Q(new $s(.45,12),new $t({color:U.taroPurple,transparent:!0,opacity:.35,side:Yt}));t.position.copy(e),t.rotation.x=-Math.PI/2,this.group.add(t);const n={pos:e.clone(),filled:!1};return this.bobaSpots.push(n),n}update(e,t,n,s){this.whistleCd=Math.max(0,this.whistleCd-e);for(const r of this.pool){if(!r.active)continue;r.life-=e,r.vel.y-=14*e,r.obj.position.addScaledVector(r.vel,e);const o=this.tiers.ball===2&&r.kind==="ball",a=n.groundAt(r.obj.position.x,r.obj.position.z,r.obj.position.y+.2);r.obj.position.y<a+.14&&(o&&r.life>.4?(r.obj.position.y=a+.14,r.vel.y=Math.abs(r.vel.y)*.72):r.life=0);for(const c of this.switchTargets)!c.hit&&r.obj.position.distanceTo(c.obj.position)<.55&&(c.hit=!0,c.obj.children[1].scale.setScalar(1.6),this.onHitTarget?.(c.id),r.life=0);if(r.kind==="boba"){for(const c of this.bobaSpots)if(!c.filled&&r.obj.position.distanceTo(c.pos)<.8){c.filled=!0;const l=new Q(new gt(.7,.62,.3,12),Se(U.taroPurple,{emissive:U.taroPurple,emissiveIntensity:.5,flatShading:!1}));l.position.copy(c.pos),this.group.add(l),n.addCollider({kind:"box",center:l.position,half:new R(.65,.15,.65),yaw:0,enabled:!0}),this.onBobaPlatform?.(c),r.life=0}}for(const c of s)c.alive&&r.obj.position.distanceTo(c.obj.position)<.7&&c.bonk(r.vel)&&(this.onBonk?.(),r.life=0);r.life<=0&&(r.active=!1,r.obj.visible=!1)}if(this.allyDuck?.visible&&this.allyTarget){const r=this.allyTarget.clone().sub(this.allyDuck.position);r.length()>.3&&(this.allyDuck.position.addScaledVector(r.normalize(),4.5*e),this.allyDuck.rotation.y=Math.atan2(r.x,r.z))}if(this.ankhActive&&this.equipped==="ankh"){this.ankhLight.intensity=26,this.ankhLight.position.set(t.pos.x,t.pos.y+1.4,t.pos.z);const r=this.tiers.ankh===2?10:6;for(const o of s){const a=o;typeof a.stunned=="number"&&o.obj.position.distanceTo(t.pos)<r&&(a.stunned=Math.max(a.stunned,1.5))}}else this.ankhLight.intensity=0}}class Nc{constructor(e,t=2.2){this.waypoints=e,this.speed=t,this.rig=Li(),this.obj=this.rig.group,this.obj.position.copy(e[0])}rig;obj;alive=!0;idx=0;t=Math.random()*10;stunned=0;knock=new R;bonk(e){return this.stunned>0?!1:(this.stunned=2.2,this.knock.copy(e).setY(0).normalize().multiplyScalar(6),!0)}update(e,t,n){if(this.t+=e,this.stunned>0){this.stunned-=e,this.obj.position.addScaledVector(this.knock,e),this.knock.multiplyScalar(1-4*e),this.obj.rotation.z=Math.sin(this.t*30)*.3*Math.min(1,this.stunned);return}this.obj.rotation.z=0;const r=this.waypoints[this.idx].clone().sub(this.obj.position).setY(0);r.length()<.4?this.idx=(this.idx+1)%this.waypoints.length:(r.normalize(),this.obj.position.addScaledVector(r,this.speed*e),this.obj.rotation.y=Math.atan2(r.x,r.z)),this.obj.rotation.z=Math.sin(this.t*9)*.12,this.rig.wingL.rotation.z=.3+Math.sin(this.t*9)*.15,this.rig.wingR.rotation.z=-.3-Math.sin(this.t*9)*.15,this.obj.position.distanceTo(t.pos)<.85&&n("duck")}}class yg{constructor(e,t=3){this.range=t,this.origin=e.clone(),this.obj=new Ne;const n=new Q(new wt(.3,10,8),Se(13915434,{gloss:.3,flatShading:!1}));n.scale.set(1.4,.7,1),n.position.y=.25,n.castShadow=!0,this.obj.add(n);for(const s of[-1,1]){const r=new Q(new wt(.14,8,6),Se(13915434,{flatShading:!1}));r.position.set(.45*s,.22,.25),this.obj.add(r)}this.obj.position.copy(e)}obj;alive=!0;t=Math.random()*7;origin;bonk(){return!1}update(e,t,n){this.t+=e,this.obj.position.x=this.origin.x+Math.sin(this.t*1.6)*this.range,this.obj.rotation.y=Math.cos(this.t*1.6)>0?Math.PI/2:-Math.PI/2,this.obj.position.distanceTo(t.pos)<.8&&n("crab")}}class _g{constructor(e,t=2.4){this.radius=t,this.origin=e.clone(),this.obj=new Ne;const n=new Q(new wt(.16,10,8),_t(U.edwardPale,2.2));this.obj.add(n);const s=new Q(new wt(.3,10,8),new $t({color:U.edwardPale,transparent:!0,opacity:.22}));this.obj.add(s),this.obj.position.copy(e)}obj;alive=!0;t=Math.random()*9;origin;stunned=0;bonk(){return!1}update(e,t,n){if(this.t+=e,this.stunned>0){this.stunned-=e,this.obj.position.y=this.origin.y+Math.sin(this.t*40)*.05;return}this.obj.position.set(this.origin.x+Math.cos(this.t*1.1)*this.radius,this.origin.y+Math.sin(this.t*2.3)*.5,this.origin.z+Math.sin(this.t*1.1)*this.radius),this.obj.position.distanceTo(t.pos)<.7&&n("sparkle")}}class Mg{obj;alive=!0;t=0;target=null;onSteal=null;constructor(e){this.obj=new Ne;const t=new Q(new Ke(.5,.2,.5),Se(3818600,{gloss:.4,flatShading:!1}));this.obj.add(t);for(const[s,r]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]]){const o=new Q(new gt(.14,.14,.02,8),Se(5857663));o.position.set(s,.14,r),this.obj.add(o)}const n=new Q(new wt(.07,8,6),_t(U.ramenGold,2));n.position.set(0,-.05,.26),this.obj.add(n),this.obj.position.copy(e),this.obj.position.y+=2.4}bonk(){return!1}update(e,t,n){if(this.t+=e,this.obj.position.y+=Math.sin(this.t*3)*.004,this.obj.rotation.y+=e*.8,this.target){const s=this.target.clone().sub(this.obj.position);s.y=0,s.length()<.6?(this.onSteal?.(),this.target=null):this.obj.position.addScaledVector(s.normalize(),3.4*e)}}}const Ds=new Md,Fc=new Re,Oc=new Un,kc=new R,Sg=new R(0,1,0);function bg(i,e,t){Fc.set(e.x,e.y),Ds.setFromCamera(Fc,i),Oc.setFromNormalAndCoplanarPoint(Sg,t);let s=Ds.ray.intersectPlane(Oc,kc)?kc.clone().sub(t):Ds.ray.direction.clone().setY(0);return s.y=0,s.lengthSq()<1e-4&&(s=Ds.ray.direction.clone().setY(0)),s.lengthSq()<1e-4?null:s.normalize()}const Ho={ch1:["The three dumbbells are worth 1, 2, and 3. Both glowing scales need exactly 3.","Put the 3-weight on one scale. Put the 1-weight and 2-weight together on the other.","When both counters turn green, stand on the lift. Take the key from the west shelf to the pink gate."],ch2:["Each street rotor has four positions. Interact with one to turn it a quarter-turn.","From south to north, set the four rotors to positions 1, 0, 3, and 2.","The green exit opens when all four rotors match. Shoot the high jar sign to open the boba shop."],ch3:["The toll wants exactly 7. Coin values are printed on the coins; overpaying empties the till.","Any exact combination works. The 5-value coin plus either 2-value coin is the shortest answer.","Carry both coins to the till. If you prefer the smaller coins, 2 + 1 + 2 + 2 also makes 7."],ch4:["At LOW tide, ferry all three driftwood blocks north. Leave the flat plate empty for now.","Set HIGH tide at the south valve, cross on the west dune tops, and float a block beside the lower castle plate.","Double-jump while carrying a block to reach the taller right ledge. Return to LOW tide and fill the flat plate last."],ch5:["Follow the starlight from its source. Each mirror flips the beam by 90 degrees.","The correct mirror states from the star to the telescope are 0, 0, 1, 1, 0.","Route: center post, east post, northeast post, northwest post, north post, then the telescope."],ch6:["Carry all three mirror shields to the faint socket circles. The Ankh makes the real sockets easier to see.","The sockets are left-center, near the middle, and right-center. Put one shield on each.","After the shields are placed, use the rocks as cover and let Edward's sweeping beam strike each shield."],ch7:["Follow the path north toward the easel at Sunrise Point.","You need at least six letter pieces. Missing pieces are in the earlier chapters and can be collected from Level Select.","Stand close to the easel and press your Interact key to assemble the letter."]};function Eg(i,e){const t=Ho[i];return t?.length?t[Math.min(Math.max(0,Math.floor(e)),t.length-1)]:null}class Si{constructor(e,t,n=[]){this.ctx=e,this.def=t,this.mods=new Set(n);for(const l of t.logic??[])"paidExact"in l.when&&(this.slotTargets[l.when.paidExact.slot]=l.when.paidExact.amount);this.world=new ha(t),this.scene.add(this.world.group),this.scene.fog=new zi(U.midnight,t.fogDensity??.016),this.sky=new nr,this.sky.set({top:U.midnight,horizon:U.horizonGlow,glow:t.skyGlow}),this.scene.add(this.sky.group);const s=new Js(8228816,1317432,1.15);this.scene.add(s);const r=new aa(11057407,1.5);if(r.position.set(18,34,-14),e.tier==="ultra"){r.castShadow=!0,r.shadow.mapSize.set(2048,2048);const l=46;r.shadow.camera.left=-l,r.shadow.camera.right=l,r.shadow.camera.top=l,r.shadow.camera.bottom=-l,r.shadow.camera.far=130,r.shadow.bias=-8e-4}this.scene.add(r),this.player=new ua,this.player.applyCosmetics(e.save.data.gear.owned,!!e.save.data.secrets.halo),this.scene.add(this.player.rig.group),this.weapons=new vg(this.scene),this.weapons.setLoadout(e.save.data.weapons,e.save.data.weaponTiers),this.weapons.onHitTarget=l=>{if(this.switchLatch[l]=!0,this.def.id==="ch3"&&l==="jar"){const h=this.im.carriables.find(d=>d.id==="c3");h&&!h.carried&&(h.pos.set(-6,0,-5.4),h.home.copy(h.pos),this.ctx.hud.toast("THE JAR COIN DROPPED TO THE GROUND",2.2))}e.audio.play("correct",.5)},this.weapons.onBonk=()=>{e.audio.play("quack",.6),this.ctx.camera.kick(.15)};for(const l of t.entities)this.spawnEntity(l);const o=e.save.data.gear,a=o.charms;o.collar==="foam"&&(this.maxHearts+=1),o.collar==="duckdown"&&(this.maxHearts+=2,this.player.cfg.speedMultiplier*=.9),o.collar==="racing"&&(this.maxHearts=Math.max(1,this.maxHearts-1),this.player.cfg.speedMultiplier*=1.15),a.includes("slowpaw")&&(this.player.cfg.pounceCooldown*=.6),this.secondWind=a.includes("secondwind");const c=Z0(o.snacks);if(this.snackRamen=c.ramenHeals,this.snackShield=c.shieldHits,this.snackCookie=c.hints,this.mods.has("oneHeart")&&(this.maxHearts=1),this.mods.has("noWeapons")&&this.weapons.setLoadout([],{}),this.mods.has("fogRolls")&&(this.scene.fog.density=(t.fogDensity??.016)*2.2),this.mods.has("doubleDucks")){for(const l of t.entities)if(l.type==="duck"){const h=(l.patrol??[l.pos]).map(d=>new R(d.x+1.5,d.y,d.z+1.5));this.addEnemy(new Nc(h,(l.speed??2.2)*1.2))}}this.hearts=this.maxHearts,this.player.spawnAt(this.spawnPos.x,this.spawnPos.y,this.spawnPos.z,this.spawnYaw),e.camera.configure(t.cameraZones,t.cameraOffset),e.camera.snapTo(this.player.pos),e.hud.chapterCard(t.name,t.tagline),e.hud.setHearts(this.hearts,this.maxHearts),e.hud.objective(t.objective??null),this.fx=new ir(this.scene),e.audio.play("levelstart",.5),this.hintKey=l=>{l.code==="KeyH"&&(this.snackCookie>this.hintsUsed?(this.hintsUsed++,this.ctx.hud.toast(`GRANDMA SAYS: ${Eg(this.def.id,this.hintsUsed-1)??"FOLLOW THE GLOW. TRUST THE DOG."}`,4.5),this.ctx.audio.play("ding",.6)):this.snackCookie>0&&this.ctx.hud.toast("COOKIE ALREADY EATEN.",1.6))},addEventListener("keydown",this.hintKey)}scene=new is;world;player;sky;im=new xg;weapons;enemies=[];pickups=[];hazards=[];secretWalls=[];goalPos=new R;goalRequirement;goalLockedNotice=!1;spawnPos=new R;spawnYaw=0;hearts=3;maxHearts=3;iframes=0;runTime=0;deaths=0;switchLatch={};done=!1;drone=null;rotors=[];slots=[];valves=[];zones=[];onZone=null;slotTargets={};fx;cutscene=null;mods;pearlsThisRun=0;ducksThisRun=0;secretThisRun=!1;snackRamen=0;snackShield=0;snackCookie=0;secondWind=!1;hintsUsed=0;warnedNoWeapon=!1;hintKey;spawnEntity(e){const t=n=>new R(n.x,n.y,n.z);switch(e.type){case"spawn":this.spawnPos.copy(t(e.pos)),this.spawnYaw=e.yaw??0;break;case"goal":{this.goalPos.copy(t(e.pos)),this.goalRequirement=e.requires;const n=new Ne,s=new Q(new Bt(1.15,.13,10,24),_t(U.heartNeon,1.8));s.position.y=1.4,n.add(s);const r=new Tn(U.heartNeon,30,10,1.6);r.position.y=1.4,n.add(r),n.position.copy(this.goalPos),this.scene.add(n);break}case"letterPiece":{const n=da();n.position.copy(t(e.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"piece",taken:this.ctx.save.data.pieces.includes(this.def.id)}),this.pickups[this.pickups.length-1].taken&&(n.visible=!1);break}case"goldenDuck":{const n=Al();n.position.copy(t(e.pos)),this.scene.add(n);const s=this.ctx.save.data.ducks.includes(e.id);s&&(n.visible=!1),this.pickups.push({obj:n,kind:"goldenDuck",id:e.id,needs:e.needs,taken:s});break}case"pearl":{const n=new Q(new wt(.16,10,8),_t(U.taroPurple,1.2));n.position.copy(t(e.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"pearl",taken:!1});break}case"weaponPickup":{if(this.ctx.save.data.weapons.includes(e.weapon))break;const n=new Ne,s=new Q(new gt(.5,.62,.5,12),Se(2305102));s.position.y=.25,n.add(s);const r=new Q(new ia(.32),_t(U.crtGreen,1.6));r.position.y=1.1,n.add(r);const o=new Tn(U.crtGreen,20,7,1.6);o.position.y=1.2,n.add(o),n.position.copy(t(e.pos)),this.scene.add(n),this.pickups.push({obj:n,kind:"weapon",weapon:e.weapon,taken:!1});break}case"duck":this.addEnemy(new Nc((e.patrol??[e.pos]).map(t),e.speed));break;case"crab":this.addEnemy(new yg(t(e.pos),e.range));break;case"wisp":this.addEnemy(new _g(t(e.pos),e.radius));break;case"drone":{this.drone=new Mg(t(e.pos)),this.addEnemy(this.drone);break}case"hazard":{const n=t(e.shape.pos),s=t(e.shape.size).multiplyScalar(.5);if(this.hazards.push({min:n.clone().sub(s),max:n.clone().add(s),kind:e.kind}),e.kind==="mud"){const r=new Q(new Ke(e.shape.size.x,.08,e.shape.size.z),Se(U.lincolnMud,{rim:0}));r.position.set(n.x,e.shape.pos.y+e.shape.size.y/2,n.z),this.scene.add(r)}break}case"carry":case"plate":case"door":case"lift":this.im.add(e,this.world,this.scene);break;case"switchTarget":this.weapons.addSwitchTarget(e.id,t(e.pos)),this.switchLatch[e.id]=!1;break;case"rotor":{const n=new Ne,s=new Q(new gt(.5,.6,.5,10),Se(2765650));if(s.position.y=.25,n.add(s),e.kind==="mirror"){const o=new Q(new Ke(1.6,1.1,.1),Se(14542832,{gloss:.95,rim:.5,flatShading:!1,emissive:2240580,emissiveIntensity:.6}));o.position.y=1.1,o.rotation.y=Math.PI/4,n.add(o)}else{const o=new Q(new Ke(.3,.2,2.4),_t(U.ramenGold,1.3));o.position.y=.6,n.add(o)}const r=e.state??0;n.rotation.y=e.kind==="mirror"?r*Math.PI/2:r*Math.PI*2/e.states,n.position.copy(t(e.pos)),this.scene.add(n),this.rotors.push({id:e.id,obj:n,states:e.states,state:r,kind:e.kind});break}case"slot":{const n=new Ne,s=new Q(new Ke(1.2,1.3,1.2),Se(3818600));s.position.y=.65,n.add(s);const r=new Q(new Ke(.5,.1,.3),_t(U.ramenGold,1.5));r.position.set(0,1.36,0),n.add(r);const o=new Q(new rn(1.4,.5),new $t({transparent:!0}));o.position.set(0,1.9,0),n.add(o),n.position.copy(t(e.pos)),this.scene.add(n),this.slots.push({id:e.id,obj:n,sum:0,label:o}),this.updateSlotLabel(this.slots[this.slots.length-1]);break}case"valve":{const n=new Ne,s=new Q(new gt(.12,.16,1,8),Se(3818600));s.position.y=.5,n.add(s);const r=new Q(new Bt(.4,.08,8,14),_t(U.crtGreen,.8));r.position.y=1.1,r.rotation.x=Math.PI/2,n.add(r),n.position.copy(t(e.pos)),this.scene.add(n),this.valves.push({id:e.id,obj:n,state:0});break}case"interactZone":this.zones.push({id:e.id,pos:t(e.pos),radius:e.radius,label:e.label,used:!1});break;case"bobaSpot":this.weapons.addBobaSpot(t(e.pos));break;case"secretWall":{const n=new Q(new Ke(e.size.x,e.size.y,e.size.z),Se(e.color,{}));n.position.copy(t(e.pos)),this.scene.add(n),this.secretWalls.push({mesh:n,found:!1});break}case"sign":{const n=Xs(e.lines,e.fg?{fg:e.fg}:{});n.position.copy(t(e.pos)),n.rotation.y=e.yaw??0,this.scene.add(n);break}case"polaroid":{const n=G0(new URL(`../../${e.photo}`,document.baseURI).href);n.position.copy(t(e.pos)),n.rotation.y=e.yaw??0,this.scene.add(n);break}}}allyFetch=null;collect(e){if(e.taken=!0,e.obj.visible=!1,e.kind==="piece")this.ctx.save.patch(t=>{t.pieces.includes(this.def.id)||t.pieces.push(this.def.id)}),this.ctx.hud.setPieces(this.ctx.save.data.pieces.length),this.ctx.hud.toast("LETTER PIECE RECOVERED ✉",2.2),this.ctx.audio.play("sparkle",.7);else if(e.kind==="goldenDuck"&&e.id!==void 0)this.ducksThisRun++,this.ctx.save.patch(t=>{t.ducks.includes(e.id)||t.ducks.push(e.id)}),this.ctx.hud.toast(`GOLDEN DUCK ${this.ctx.save.data.ducks.length}/21`,2.2),this.ctx.audio.play("quack",.7,.8);else if(e.kind==="pearl"){const t=this.mods.has("greed")?2:1;this.pearlsThisRun+=t,this.ctx.save.patch(n=>{n.pearls+=t}),this.ctx.hud.setPearls(this.ctx.save.data.pearls),this.ctx.audio.play("coin",.4)}else e.kind==="weapon"&&e.weapon&&(this.ctx.save.patch(t=>{t.weapons.includes(e.weapon)||t.weapons.push(e.weapon)}),this.weapons.setLoadout(this.ctx.save.data.weapons,this.ctx.save.data.weaponTiers),this.weapons.equipped=e.weapon,this.ctx.audio.play("fanfare",.6),this.playWeaponVignette(e.weapon,this.player.pos.clone()))}playWeaponVignette(e,t){const n=new ml(16777215,300,20,.5,.4,1.4);n.position.set(t.x,8,t.z),n.target.position.copy(t),this.scene.add(n,n.target);const s=(r,o,a)=>new R(t.x+Math.sin(r)*o,a,t.z+Math.cos(r)*o);this.cutscene=new Qn([{t:0,cam:{pos:s(-.6,4,1.4),look:t.clone().setY(t.y+.8),fov:42}},{t:.1,cam:{pos:s(.9,4,1.8),look:t.clone().setY(t.y+.8),fov:40},glide:2.2},{t:.4,do:()=>{this.ctx.hud.toast(`${Ls[e]} ACQUIRED`,2.6),this.fx.burst(t.clone().setY(t.y+1),60,{colors:[U.crtGreen,U.star],speed:3,up:3,life:1})}}],2.6,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,n.removeFromParent(),this.ctx.camera.snapTo(this.player.pos)})}updateSlotLabel(e){const t=this.slotTargets[e.id],n=document.createElement("canvas");n.width=256,n.height=96;const s=n.getContext("2d");s.fillStyle="rgba(10,14,32,0.85)",s.fillRect(0,0,256,96),s.fillStyle="#FFB627",s.font='700 40px "Space Grotesk", sans-serif',s.textAlign="center",s.fillText(`${e.sum}${t!==void 0?" / "+t:""}`,128,60);const r=new ul(n),o=e.label.material;o.map?.dispose(),o.map=r,o.needsUpdate=!0}addEnemy(e){this.enemies.push(e),this.scene.add(e.obj)}hurt(e){if(!(this.iframes>0||this.done)){if((e==="water"||e==="fall"||e==="mud")&&this.ctx.save.data.gear.collar==="puffer"){this.iframes=.8,this.ctx.audio.play("splash",.3);return}if(this.mods.has("greed")){const t=Math.min(5,this.ctx.save.data.pearls);this.ctx.save.patch(n=>{n.pearls-=t}),this.ctx.hud.setPearls(this.ctx.save.data.pearls)}if(this.snackShield>0){this.snackShield--,this.iframes=1.2,this.ctx.hud.toast(`BOBA SHIELD ABSORBED IT. ${this.snackShield} LEFT.`,1.6),this.ctx.audio.play("pop",.6);return}if(this.hearts-=1,this.iframes=1.2,this.hearts===1&&this.snackRamen>0&&(this.snackRamen--,this.hearts=this.maxHearts,this.ctx.hud.toast("RAMEN CUP. FULLY RESTORED. 🍜",2),this.ctx.audio.play("correct",.7)),this.hearts<=0&&this.secondWind&&(this.secondWind=!1,this.hearts=1,this.ctx.hud.toast("SECOND WIND. ONE MORE CHANCE.",2.2),this.ctx.audio.play("sparkle",.8)),this.deaths+=this.hearts<=0?1:0,this.ctx.hud.setHearts(Math.max(0,this.hearts),this.maxHearts),this.ctx.audio.play("hit",.55),this.ctx.camera.kick(.4),this.hearts<=0){this.ctx.audio.play("powerdown",.6);const t=Math.ceil(this.pearlsThisRun*.4);t>0?(this.ctx.save.patch(n=>{n.pearls=Math.max(0,n.pearls-t)}),this.ctx.hud.setPearls(this.ctx.save.data.pearls),this.ctx.hud.toast(`RUN OVER. THE DUCKS TOOK ${t} ⬤.`,2.6)):this.ctx.hud.toast("RUN OVER. THE DUCKS ARE LAUGHING.",2.6),this.pearlsThisRun=0,this.hearts=this.maxHearts,this.ctx.hud.setHearts(this.hearts,this.maxHearts),this.respawn(!0)}else this.player.state.vx*=-1.6,this.player.state.vz*=-1.6}}respawn(e=!1){e?this.player.spawnAt(this.spawnPos.x,this.spawnPos.y,this.spawnPos.z,this.spawnYaw):this.player.respawnAtSafeGround(),this.ctx.camera.snapTo(this.player.pos)}update(e){if(this.done)return;if(this.fx.update(e),this.cutscene&&!this.cutscene.done){this.cutscene.update(e),this.sky.update(e);return}const t=this.ctx.input.poll();if(this.ctx.camera.control(e,t.rotate,t.zoom),this.sky.update(e),this.runTime+=e,this.iframes=Math.max(0,this.iframes-e),this.player.rig.group.visible=this.iframes<=0||Math.floor(this.iframes*14)%2===0,this.player.update(e,t,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.3,this.player.events.airJumped?1.35:1),this.player.trail!==null&&Math.hypot(this.player.state.vx,this.player.state.vz)>3&&Math.random()<e*20&&this.fx.burst(this.player.pos.clone().setY(this.player.pos.y+.4),1,{colors:[this.player.trail],speed:.4,up:.8,gravity:.4,life:.7}),this.player.events.landed&&(this.ctx.audio.play("land",.22),this.fx.burst(this.player.pos,10,{colors:[9081784],speed:1.6,up:.8,life:.4})),this.player.events.pounced){this.ctx.audio.play("whoosh",.4),this.ctx.camera.kick(.15),this.fx.burst(this.player.pos,14,{colors:[9081784],speed:2,up:1,life:.5});const m=this.ctx.save.data.gear.charms.includes("barkAmp")?2.6:1.2;for(const x of this.enemies)x.alive&&x.obj.position.distanceTo(this.player.pos)<m&&x.bonk(new R(this.player.state.facingX,0,this.player.state.facingZ))&&this.ctx.audio.play("quack",.6)}const n=this.zones.find(m=>!m.used&&m.pos.distanceTo(this.player.pos)<m.radius),s=this.slots.find(m=>m.obj.position.distanceTo(this.player.pos)<2.2),r=this.rotors.find(m=>m.obj.position.distanceTo(this.player.pos)<2),o=this.valves.find(m=>m.obj.position.distanceTo(this.player.pos)<2),a=this.im.nearest(this.player),c=this.im.carrying?.kind==="coin";if(n?this.ctx.hud.prompt(`[ENTER] ${n.label}`):s&&c?this.ctx.hud.prompt("[ENTER] INSERT COIN"):r?this.ctx.hud.prompt("[ENTER] ROTATE"):o?this.ctx.hud.prompt("[ENTER] TURN VALVE"):this.im.carrying?this.ctx.hud.prompt("[ENTER] PUT DOWN"):a?this.ctx.hud.prompt("[ENTER] PICK UP"):this.ctx.hud.prompt(null),t.interact)if(n)n.used=!0,this.onZone?.(n.id);else if(s&&c&&this.im.carrying){const m=this.im.carrying;s.sum+=m.value||1,this.im.carrying=null,m.carried=!1,m.obj.visible=!1,m.pos.set(0,-100,0),this.ctx.audio.play("register",.6);const x=this.slotTargets[s.id];if(x!==void 0&&s.sum>x){s.sum=0,this.ctx.hud.toast('OVERPAID. "NO REFUNDS." — HAYDEN',2.6),this.ctx.audio.play("error",.6);for(const g of this.im.carriables)g.kind==="coin"&&(g.obj.visible=!0,g.pos.copy(g.home))}this.updateSlotLabel(s)}else if(r)r.state=(r.state+1)%r.states,r.obj.rotation.y=r.kind==="mirror"?r.state*Math.PI/2:r.state*Math.PI*2/r.states,this.ctx.audio.play("click",.55);else if(o)o.state=(o.state+1)%3,o.obj.rotation.y+=1.2,this.ctx.audio.play("reel",.5);else{const m=this.im.interact(this.player);if(m&&this.ctx.audio.play("pop",.45),m==="dropped"){const x=this.im.plates.find(g=>Math.hypot(this.player.pos.x-g.pos.x,this.player.pos.z-g.pos.z)<g.snapR+1.2);x&&this.ctx.hud.toast(x.exact?"ON THE SCALE — each side needs EXACTLY its number":"ON THE PLATE",2.2)}}if(this.im.update(e,this.player,this.world,this.ctx.camera.cam),t.cycle&&(this.weapons.cycle(t.cycle),this.weapons.equipped&&this.ctx.hud.toast(Ls[this.weapons.equipped],1)),t.selectWeapon!==null){const m=this.weapons.equipSlot(t.selectWeapon);m&&this.ctx.hud.toast(Ls[m],1)}const l=t.aimNdc?bg(this.ctx.camera.cam,t.aimNdc,this.player.pos):null;if(l&&(this.weapons.equipped==="ball"||this.weapons.equipped==="boba")&&this.player.faceDirection(l.x,l.z),t.fire){const m=this.weapons.fire(this.player,l);if(!m&&this.weapons.owned.length===0&&!this.warnedNoWeapon&&(this.warnedNoWeapon=!0,this.ctx.hud.toast("NO WEAPON YET — they hide in SECRET ROOMS (walk into odd walls)",3.4),this.ctx.audio.play("wrong",.4)),(m==="ball"||m==="boba")&&this.ctx.audio.play("boing",.4),m==="ankh"&&this.ctx.audio.play("sparkle",.5),m==="whistle"){this.ctx.audio.play("quack",.7,1.4);const x=this.pickups.find(g=>!g.taken&&g.kind==="goldenDuck"&&g.needs==="whistle"&&g.obj.position.distanceTo(this.player.pos)<16);x&&(this.weapons.sendAlly(x.obj.position),this.allyFetch=x)}}this.allyFetch&&!this.allyFetch.taken&&this.weapons.allyDuck?.visible&&this.weapons.allyDuck.position.distanceTo(this.allyFetch.obj.position)<.6&&this.collect(this.allyFetch),this.weapons.update(e,this.player,this.world,this.enemies);const h={plates:{},switches:this.switchLatch,keyNear:{},rotors:Object.fromEntries(this.rotors.map(m=>[m.id,m.state])),paid:Object.fromEntries(this.slots.map(m=>[m.id,m.sum]))};for(const m of this.im.plates)h.plates[m.id]=m.satisfied;for(const m of this.im.gates)if(m.needsKey){const x=this.im.carrying?.kind==="key"?this.im.carrying:this.im.carriables.find(g=>g.kind==="key");h.keyNear[m.id]=!!x&&x.pos.distanceTo(m.obj.position)<3.2}const d=cg(this.def.logic??[],h);for(const m of this.im.gates){const x=d.has(m.id);x&&!m.open&&(this.ctx.audio.play("ding",.5),this.ctx.audio.play("correct",.5),this.ctx.camera.kick(.2),m.isLift?this.ctx.hud.toast("BALANCED! THE LIFT IS RISING — RIDE IT UP",3.2):m.needsKey?this.ctx.hud.toast("THE GATE OPENED — GO THROUGH",2.6):this.ctx.hud.toast("SOMETHING OPENED NEARBY",2.4)),m.open=x}for(const m of this.enemies)m.alive&&m.update(e,this.player,x=>this.hurt(x));if(this.drone&&!this.drone.target){const m=this.im.carriables.find(x=>x.kind==="coin"&&!x.carried&&x.obj.visible&&x.pos.distanceTo(x.home)>1.5);m&&(this.drone.target=m.pos,this.drone.onSteal=()=>{m.pos.copy(m.home),this.ctx.hud.toast("DRONE REPOSSESSED A COIN. — HAYDEN",2),this.ctx.audio.play("chatter",.4)})}for(const m of this.hazards){const x=this.player.pos;if(x.x>m.min.x&&x.x<m.max.x&&x.y>m.min.y-.2&&x.y<m.max.y+.5&&x.z>m.min.z&&x.z<m.max.z){m.kind==="water"&&this.ctx.audio.play("splash",.5),this.hurt(m.kind),this.respawn();break}}this.player.pos.y<this.def.bounds.min.y&&(this.hurt("fall"),this.respawn());for(const m of this.secretWalls){const x=m.mesh.position.distanceTo(this.player.pos);if(!m.found&&x<1.4){m.found=!0;const g=m.mesh.material;g.transparent=!0,g.opacity=.3,this.secretThisRun=!0,this.ctx.hud.toast("SECRET ROOM. OBVIOUSLY.",2.4),this.ctx.audio.play("sparkle",.6),this.ctx.save.patch(f=>{f.secrets[`${this.def.id}-room`]=!0})}else if(m.found){const g=m.mesh.material;g.transparent=!0,g.opacity=x<3?.3:.95}}if(this.ctx.save.data.gear.charms.includes("scout"))for(const m of this.secretWalls)!m.found&&m.mesh.position.distanceTo(this.player.pos)<6&&Math.floor(this.runTime*.5)!==Math.floor((this.runTime-e)*.5)&&this.ctx.audio.play("ding",.25,1.6);const u=this.ctx.save.data.gear.charms.includes("magnet");for(const m of this.pickups)if(!m.taken){if(m.obj.rotation.y+=e*2,u&&m.kind==="pearl"){const x=m.obj.position.distanceTo(this.player.pos);x<4&&x>.9&&m.obj.position.lerp(this.player.pos.clone().setY(this.player.pos.y+.5),e*4)}if(m.obj.position.distanceTo(this.player.pos)<1.1){if(m.kind==="goldenDuck"&&m.needs&&!this.ctx.save.data.weapons.includes(m.needs)){this.ctx.hud.toast(`THIS DUCK RESPECTS ONLY THE ${Ls[m.needs]}.`,2);continue}this.collect(m)}}const p=this.player.pos.distanceTo(this.goalPos)<1.6;p&&hg(this.goalRequirement,d)&&this.canFinish()?this.finish():p&&!this.goalLockedNotice?(this.goalLockedNotice=!0,this.ctx.hud.toast("THE WAY OPENS AFTER THE PUZZLE IS SOLVED.",2.2)):p||(this.goalLockedNotice=!1),this.onUpdate(e,t),this.ctx.camera.update(e,this.player.pos,new R(this.player.state.vx,0,this.player.state.vz),t.camNudge),t.pause&&this.ctx.togglePause()}onUpdate(e,t){}canFinish(){return!0}finish(){if(this.done)return;this.done=!0,this.ctx.audio.play("win",.7);const e=this.ctx.save,t=!e.data.chaptersDone.includes(this.def.id),n=this.mods.has("rushHour")?this.def.parSeconds*.7:this.def.parSeconds,s=$0({timeSeconds:this.runTime,parSeconds:n,deaths:this.deaths,ducksThisRun:this.ducksThisRun,secretFound:this.secretThisRun,bounty:this.mods.size>0,modifierCount:this.mods.size},t,e.data.gear.charms.includes("pearlcut")),r=e.data.grades[this.def.id],o=K0(s.medal,r?.medal);e.patch(a=>{a.chaptersDone.includes(this.def.id)||a.chaptersDone.push(this.def.id),a.pearls+=s.payout,this.mods.size>0&&(a.bountiesCleared+=1),a.gear.snacks=[];const c=a.grades[this.def.id];a.grades[this.def.id]={medal:o?s.medal:c?.medal??s.medal,bestScore:Math.max(c?.bestScore??0,s.score),bestTime:Math.min(c?.bestTime??1/0,this.runTime)},this.def.id==="ch7"&&this.deaths===0&&(a.secrets.halo=!0)}),this.ctx.hud.setPearls(e.data.pearls),this.showTally(s,t,o,r?.bestScore??0)}showTally(e,t,n,s){const r=this.ctx.hud.overlay(),o={C:"#8a93b8",B:"#c8cdd6",GOLD:"#FFB627",S:"#FF4D8D"},a=e.breakdown.map(d=>`<div style="display:flex;justify-content:space-between;gap:40px;font-family:'Space Grotesk',monospace"><span>${d.label}</span><b data-count="${d.value}">0</b></div>`).join("");r.innerHTML=`
      <h1 style="letter-spacing:6px">${this.def.name}</h1>
      <div class="dj-card" style="min-width:300px;display:flex;flex-direction:column;gap:8px;padding:18px 22px">${a}
        <hr style="border-color:rgba(255,255,255,0.15)" />
        <div style="display:flex;justify-content:space-between"><span>SCORE</span><b data-count="${e.score}">0</b></div>
        <div style="display:flex;justify-content:space-between"><span>PAYOUT</span><b style="color:#B388EB" data-count="${e.payout}">0</b></div>
      </div>
      <div style="font-family:'Space Grotesk',sans-serif;font-size:44px;font-weight:700;color:${o[e.medal]};letter-spacing:8px">${e.medal==="S"?"S RANK":e.medal}</div>
      ${e.score>s&&s>0?'<div style="color:#33FF88;font-weight:800">NEW BEST</div>':""}
      ${t?'<div style="color:#FFB627">FIRST CLEAR +100 ⬤</div>':""}
      <button class="dj-btn" data-a="go">BACK TO THE HIGHWAY</button>
    `;const c=[...r.querySelectorAll("[data-count]")],l=performance.now(),h=()=>{const d=Math.min(1,(performance.now()-l)/1400);for(const u of c){const p=Number(u.dataset.count);u.textContent=String(Math.round(p*(d<1?d*d:1)))}d<1?requestAnimationFrame(h):n&&(this.ctx.audio.play("fanfare",.5),this.fx.burst(this.player.pos.clone().setY(this.player.pos.y+2),120,{speed:5,up:4,life:1.6}))};h(),this.ctx.audio.play("register",.5),r.querySelector('[data-a="go"]').addEventListener("click",()=>{r.remove(),this.ctx.go("hub")})}dispose(){removeEventListener("keydown",this.hintKey),this.ctx.hud.prompt(null),this.ctx.hud.objective(null)}}const Hs={low:-1.6,mid:-.6,high:.7},Is={minX:-22,maxX:22,minZ:-8,maxZ:8};function wg(i,e){return i.x>=Is.minX&&i.x<=Is.maxX&&i.z>=Is.minZ&&i.z<=Is.maxZ&&i.y<e-.15}function Tg(){const i=[],e=U.sand;return i.push({kind:"box",pos:{x:0,y:-.25,z:-16},size:{x:44,y:.5,z:16},color:e}),i.push({kind:"box",pos:{x:0,y:-1.15,z:0},size:{x:44,y:.5,z:16},color:11902844}),i.push({kind:"box",pos:{x:0,y:-.25,z:16},size:{x:26,y:.5,z:16},color:e}),i.push({kind:"box",pos:{x:-3.1,y:1.2,z:21},size:{x:3.8,y:2.4,z:1},color:14205331}),i.push({kind:"box",pos:{x:3.1,y:1.2,z:21},size:{x:3.8,y:2.4,z:1},color:14205331}),i.push({kind:"cylinder",pos:{x:-5.5,y:1.6,z:21},size:{x:2,y:3.2,z:2},color:14205331}),i.push({kind:"cylinder",pos:{x:5.5,y:1.6,z:21},size:{x:2,y:3.2,z:2},color:14205331}),i.push({kind:"box",pos:{x:-3.4,y:.5,z:19.4},size:{x:3,y:1,z:3},color:14205331}),i.push({kind:"box",pos:{x:3.4,y:1,z:19.4},size:{x:3,y:2,z:3},color:14205331}),i.push({kind:"box",pos:{x:18,y:1.5,z:10},size:{x:6,y:5,z:10},color:3817557}),i.push({kind:"box",pos:{x:18,y:-.25,z:2},size:{x:8,y:.5,z:6},color:e}),i.push({kind:"box",pos:{x:-16,y:.6,z:-6},size:{x:6,y:1.2,z:6},color:14205331}),i.push({kind:"box",pos:{x:-19,y:1.4,z:0},size:{x:5,y:1.4,z:5},color:14205331}),i.push({kind:"box",pos:{x:-16,y:2.3,z:6},size:{x:4,y:1.2,z:4},color:14205331}),{id:"ch4",name:"THE BEACH",tagline:"sand in the corvette. we do not speak of it.",skyGlow:5093631,fogDensity:.014,prims:i,cameraOffset:{x:0,y:7.2,z:-9},cameraZones:[{min:{x:-13,y:-2,z:10},max:{x:13,y:5,z:26},offset:{x:0,y:5.4,z:-10.5},fov:50}],parSeconds:240,bounds:{min:{x:-26,y:-8,z:-28},max:{x:26,y:30,z:28}},logic:[{when:{plates:["pa","pb","pc"]},open:"castle"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-22},yaw:0},{type:"goal",pos:{x:0,y:.6,z:22.5},requires:"castle"},{type:"sign",pos:{x:6,y:0,z:-20},lines:["THE BEACH","shoes: optional. crabs: not."],yaw:Math.PI},{type:"sign",pos:{x:-8,y:0,z:-12},lines:["TIDE MACHINE","low · mid · high"],fg:"#4DB8FF"},{type:"valve",id:"tide",pos:{x:-6,y:0,z:-12}},{type:"carry",id:"b1",pos:{x:-8,y:-.9,z:-2},kind:"block",weight:2},{type:"carry",id:"b2",pos:{x:4,y:-.9,z:2},kind:"block",weight:2},{type:"carry",id:"b3",pos:{x:12,y:-.9,z:-4},kind:"block",weight:2},{type:"plate",id:"pa",pos:{x:0,y:-.9,z:6},needWeight:2},{type:"plate",id:"pb",pos:{x:-3.4,y:1,z:19.4},needWeight:2},{type:"plate",id:"pc",pos:{x:3.4,y:2,z:19.4},needWeight:2},{type:"door",id:"castle",pos:{x:0,y:1,z:21},size:{x:2.4,y:2,z:1.2},color:U.heartNeon},{type:"crab",pos:{x:-6,y:-.9,z:0},range:4},{type:"crab",pos:{x:8,y:-.9,z:4},range:3},{type:"crab",pos:{x:2,y:0,z:-10},range:5},{type:"interactZone",id:"rescue",pos:{x:-16,y:2.9,z:6},radius:2,label:"HELP THE DUCK"},{type:"weaponPickup",weapon:"whistle",pos:{x:-16,y:2.9,z:6}},{type:"letterPiece",pos:{x:6,y:-.7,z:8}},{type:"secretWall",pos:{x:15.4,y:1,z:5.2},size:{x:.8,y:3,z:4},color:3817557},{type:"polaroid",pos:{x:18,y:1.2,z:4},photo:"assets/photos/couple_snow.jpeg",yaw:-1.2},{type:"goldenDuck",id:11,pos:{x:20,y:.4,z:2}},{type:"pearl",pos:{x:19,y:.5,z:3.5}},{type:"pearl",pos:{x:21,y:.5,z:3.5}},{type:"goldenDuck",id:10,pos:{x:-19,y:2.6,z:0}},{type:"goldenDuck",id:12,pos:{x:18,y:4.6,z:10},needs:"boba"},{type:"bobaSpot",pos:{x:14.6,y:1.4,z:8}},{type:"bobaSpot",pos:{x:15.5,y:3,z:10}},{type:"pearl",pos:{x:0,y:.4,z:-18}},{type:"pearl",pos:{x:-10,y:.4,z:-14}},{type:"pearl",pos:{x:-16,y:1.6,z:-6}},{type:"pearl",pos:{x:0,y:-.7,z:2}},{type:"pearl",pos:{x:10,y:-.7,z:0}},{type:"pearl",pos:{x:0,y:.6,z:18}}]}}const Ag=[Hs.low,Hs.mid,Hs.high];class Rg extends Si{water;waterY=Hs.low;announced=-1;constructor(e,t=[]){super(e,Tg(),t),this.water=new Q(new rn(60,40),new Ci({color:U.dockWater,transparent:!0,opacity:.78,emissive:1718894,emissiveIntensity:.5})),this.water.rotation.x=-Math.PI/2,this.water.position.set(0,this.waterY,2),this.scene.add(this.water),this.onZone=n=>{n==="rescue"&&(this.ctx.hud.toast("THE DUCK IS FINE. THE DUCK IS GRATEFUL.",2.6),this.ctx.audio.play("quack",.8,1.2))}}onUpdate(e){const t=this.valves.find(s=>s.id==="tide");if(!t)return;const n=Ag[t.state];t.state!==this.announced&&(this.announced=t.state,this.ctx.hud.toast(["TIDE: LOW","TIDE: MID","TIDE: HIGH"][t.state],1.6)),this.waterY=rt.damp(this.waterY,n,1.2,e),this.water.position.y=this.waterY,this.water.position.y+=Math.sin(this.runTime*1.4)*.05;for(const s of this.im.carriables){if(s.kind!=="block"||s.carried)continue;const r=this.water.position.y;r>s.pos.y&&(s.pos.y=r)}wg(this.player.pos,this.water.position.y)&&(this.ctx.audio.play("splash",.6),this.hurt("water"),this.respawn())}}const Cg={x:0,z:-10},Vr={x:12,z:14},Bc={m1:0,m2:0,m3:1,m4:1,m5:0};function Pg(i){const e={m1:{x:0,z:-2},m2:{x:8,z:-2},m3:{x:8,z:8},m4:{x:-8,z:8},m5:{x:-8,z:14}};return Object.keys(e).map(t=>({pos:e[t],state:i[t]??0}))}function Lg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:-14},size:{x:34,y:.5,z:10},color:U.grass});const n=(s,r,o,a)=>{i.push({kind:"box",pos:{x:s,y:-.15,z:r},size:{x:o,y:.3,z:a},color:6508858})};n(0,-4,3.4,12),n(4,-2,12,3),n(8,3,3,13),n(0,8,19,3),n(-8,11,3,9),n(2,14,17,3.4),n(12,14,5,5);for(const[s,r]of[[0,-2],[8,-2],[8,8],[-8,8],[-8,14],[12,14],[4,8],[0,14]])i.push({kind:"cylinder",pos:{x:s,y:-1.4,z:r},size:{x:.5,y:2.6,z:.5},color:3813154});return i.push({kind:"box",pos:{x:4,y:-2.4,z:1.5},size:{x:4.4,y:.3,z:4.4},color:2765650}),i.push({kind:"box",pos:{x:0,y:-3.1,z:4},size:{x:80,y:.4,z:70},color:U.dockWater,ghost:!0}),i.push({kind:"cylinder",pos:{x:0,y:.25,z:-10},size:{x:1,y:.5,z:1},color:3094614}),i.push({kind:"box",pos:{x:0,y:.95,z:-10},size:{x:.42,y:.42,z:.42},color:U.star,emissive:U.star,emissiveIntensity:2.6,ghost:!0}),i.push({kind:"cylinder",pos:{x:12,y:1.2,z:14},size:{x:.7,y:2,z:.7},color:3094614}),{id:"ch5",name:"THE DOCK & STARS",tagline:"lying on the dock. watching.",skyGlow:10336511,fogDensity:.017,prims:i,cameraOffset:{x:0,y:6.6,z:-9.4},cameraZones:[],parSeconds:260,bounds:{min:{x:-24,y:-8,z:-22},max:{x:24,y:30,z:26}},logic:[],entities:[{type:"spawn",pos:{x:0,y:0,z:-13},yaw:0},{type:"goal",pos:{x:12,y:0,z:17}},{type:"sign",pos:{x:4,y:0,z:-13},lines:["THE DOCK","mind the cold water"],yaw:Math.PI},{type:"sign",pos:{x:-3.4,y:0,z:-9},lines:["ROUTE THE STARLIGHT","into the telescope"],fg:"#9DB8FF"},{type:"rotor",id:"m1",pos:{x:0,y:0,z:-2},states:2,state:1,kind:"mirror"},{type:"rotor",id:"m2",pos:{x:8,y:0,z:-2},states:2,state:1,kind:"mirror"},{type:"rotor",id:"m3",pos:{x:8,y:0,z:8},states:2,state:0,kind:"mirror"},{type:"rotor",id:"m4",pos:{x:-8,y:0,z:8},states:2,state:0,kind:"mirror"},{type:"rotor",id:"m5",pos:{x:-8,y:0,z:14},states:2,state:1,kind:"mirror"},{type:"wisp",pos:{x:4,y:1,z:3},radius:2.4},{type:"wisp",pos:{x:-3,y:1.2,z:11},radius:2.6},{type:"letterPiece",pos:{x:0,y:.4,z:8}},{type:"secretWall",pos:{x:4,y:-1.2,z:3.9},size:{x:4.4,y:2.2,z:.5},color:2765650},{type:"weaponPickup",weapon:"ankh",pos:{x:4,y:-2.1,z:.2}},{type:"sign",pos:{x:5.5,y:-2.4,z:2.6},lines:["the safety-pin tattoo","ascended. she still hates it."],fg:"#CBB7E8"},{type:"goldenDuck",id:14,pos:{x:2.6,y:-1.9,z:.2}},{type:"goldenDuck",id:13,pos:{x:0,y:1,z:16}},{type:"goldenDuck",id:15,pos:{x:17,y:.6,z:8},needs:"ankh"},{type:"hazard",kind:"water",shape:{pos:{x:0,y:-2.8,z:4},size:{x:80,y:1.2,z:70}}},{type:"pearl",pos:{x:0,y:.3,z:-6}},{type:"pearl",pos:{x:4,y:.3,z:-2}},{type:"pearl",pos:{x:8,y:.3,z:4}},{type:"pearl",pos:{x:0,y:.3,z:8}},{type:"pearl",pos:{x:-8,y:.3,z:11}},{type:"pearl",pos:{x:6,y:.3,z:14}}]}}const Dg={px:[1,0],nx:[-1,0],pz:[0,1],nz:[0,-1]},Ig={pz:"px",nz:"nx",px:"pz",nx:"nz"},Ug={pz:"nx",nz:"px",px:"nz",nx:"pz"};function zg(i,e,t,n,s=60,r=1.1){const o=[{...i}];let a={...i},c=e;const l=new Set;for(let h=0;h<12;h++){const[d,u]=Dg[c];let p=1/0,m=null;for(const x of t){if(l.has(x))continue;const g=x.pos.x-a.x,f=x.pos.z-a.z,b=g*d+f*u,E=Math.abs(g*u-f*d);b>.4&&b<p&&E<r&&(p=b,m=x)}{const x=n.x-a.x,g=n.z-a.z,f=x*d+g*u,b=Math.abs(x*u-g*d);if(f>.4&&b<r&&f<p)return o.push({x:a.x+d*f,z:a.z+u*f}),{points:o,hitTarget:!0}}if(!m||p>s)return o.push({x:a.x+d*Math.min(s,24),z:a.z+u*Math.min(s,24)}),{points:o,hitTarget:!1};a={x:m.pos.x,z:m.pos.z},o.push({...a}),l.add(m),c=m.state%2===0?Ig[c]:Ug[c]}return{points:o,hitTarget:!1}}class Ng{constructor(e,t=U.star){this.y=e,this.color=t}group=new Ne;segments=[];render(e){for(;this.segments.length<e.points.length-1;){const t=new Q(new Ke(.09,.09,1),_t(this.color,2.4));this.group.add(t),this.segments.push(t)}for(let t=0;t<this.segments.length;t++){const n=this.segments[t];if(t>=e.points.length-1){n.visible=!1;continue}const s=e.points[t],r=e.points[t+1],o=Math.hypot(r.x-s.x,r.z-s.z);n.visible=o>.01,n.scale.z=o,n.position.set((s.x+r.x)/2,this.y,(s.z+r.z)/2),n.rotation.y=Math.atan2(r.x-s.x,r.z-s.z)}}}class Fg extends Si{beam=new Ng(1.1);solved=!1;constellation=null;goalBlocker;constructor(e,t=[]){super(e,Lg(),t),this.scene.add(this.beam.group),this.goalBlocker=this.world.addCollider({kind:"box",center:new R(10.2,1,14),half:new R(.4,2,2.6),yaw:0,enabled:!0})}onUpdate(e){const t={};for(const s of this.rotors)t[s.id]=s.state;const n=zg(Cg,"pz",Pg(t),Vr);if(this.beam.render(n),n.hitTarget&&!this.solved){this.solved=!0,this.goalBlocker.enabled=!1;const s=Object.keys(Bc).every(r=>t[r]===Bc[r]);this.playIgnition(n,s)}}canFinish(){return this.solved}playIgnition(e,t){this.ctx.audio.play("sparkle",.8);const n=new R(Vr.x,1.4,Vr.z),s=new R(0,20,40);this.igniteConstellation(),this.constellation&&this.constellation.children.forEach((r,o)=>{r.visible=!1,setTimeout(()=>{r.visible=!0,o%5===0&&this.ctx.audio.play("ding",.3,1+o*.02)},1400+o*90)}),e.points.forEach((r,o)=>{setTimeout(()=>{this.fx.burst(new R(r.x,1.2,r.z),30,{colors:[16774872,10336511],speed:2.4,up:2,life:.8}),this.ctx.audio.play("pop",.4,1+o*.08)},250*o)}),this.cutscene=new Qn([{t:0,cam:{pos:n.clone().add(new R(-3,1.2,-4)),look:n,fov:46}},{t:.8,cam:{pos:new R(0,6,-4),look:s,fov:60},glide:2.4},{t:3.4,do:()=>{this.ctx.hud.toast(t?"THE SKY REMEMBERS.":"AN UNCONVENTIONAL ROUTING. RESPECT.",3),this.ctx.audio.play("win",.6)}}],5.6,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.camera.snapTo(this.player.pos)})}igniteConstellation(){if(this.constellation)return;this.constellation=new Ne;const e=n=>{const s=16*Math.sin(n)**3,r=13*Math.cos(n)-5*Math.cos(2*n)-2*Math.cos(3*n)-Math.cos(4*n);return[s,r]};for(let n=0;n<26;n++){const[s,r]=e(n/26*Math.PI*2),o=new Q(new wt(.28,8,6),_t(U.star,3));o.position.set(s*.9,18+r*.9,40),this.constellation.add(o)}const t=new Tn(U.heartNeon,300,80,1.4);t.position.set(0,18,38),this.constellation.add(t),this.scene.add(this.constellation)}}const In={x:0,z:18},Og=[{id:"sk1",x:-8,z:6},{id:"sk2",x:0,z:2},{id:"sk3",x:9,z:8}];function kg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:44,y:.5,z:52},color:1386543}),i.push({kind:"box",pos:{x:0,y:1.2,z:18},size:{x:6,y:2.4,z:5},color:3817557}),i.push({kind:"box",pos:{x:0,y:.6,z:24},size:{x:10,y:1.2,z:4},color:1386543});for(const[t,n,s]of[[-10,-2,2.2],[6,-6,1.8],[12,2,2.6],[-14,10,2],[-4,12,1.6],[10,14,2]])i.push({kind:"box",pos:{x:t,y:s/2,z:n},size:{x:s,y:s,z:s},color:3225935});return i.push({kind:"box",pos:{x:18,y:-.15,z:-8},size:{x:8,y:.3,z:3},color:4016747,invisible:!0}),i.push({kind:"box",pos:{x:24,y:-.25,z:-8},size:{x:6,y:.5,z:8},color:3225935}),{id:"ch6",name:"TWILIGHT FOREST",tagline:"he sparkles. that's not a personality.",skyGlow:14542832,fogDensity:.035,prims:i,cameraOffset:{x:0,y:6,z:-8.8},cameraZones:[{min:{x:-20,y:-1,z:-14},max:{x:20,y:4,z:14},offset:{x:0,y:4.6,z:-7.6},fov:58}],parSeconds:260,bounds:{min:{x:-24,y:-6,z:-20},max:{x:30,y:30,z:30}},logic:[],entities:[{type:"spawn",pos:{x:0,y:0,z:-16},yaw:0},{type:"goal",pos:{x:0,y:1.2,z:24}},{type:"sign",pos:{x:5,y:0,z:-14},lines:["TWILIGHT FOREST","sparkle warning: severe"],yaw:Math.PI,fg:"#DDE7F0"},{type:"carry",id:"s1",pos:{x:-14,y:0,z:-8},kind:"mirrorShield",weight:2},{type:"carry",id:"s2",pos:{x:14,y:0,z:-2},kind:"mirrorShield",weight:2},{type:"carry",id:"s3",pos:{x:-6,y:0,z:14},kind:"mirrorShield",weight:2},{type:"wisp",pos:{x:-6,y:1,z:2},radius:3},{type:"wisp",pos:{x:8,y:1.2,z:10},radius:2.4},{type:"wisp",pos:{x:2,y:1,z:-8},radius:3.4},{type:"letterPiece",pos:{x:-18,y:.4,z:4}},{type:"goldenDuck",id:17,pos:{x:24,y:.5,z:-8}},{type:"polaroid",pos:{x:26,y:1.2,z:-10},photo:"assets/photos/bentley.jpeg",yaw:-.8},{type:"pearl",pos:{x:23,y:.5,z:-6}},{type:"pearl",pos:{x:25,y:.5,z:-6}},{type:"sign",pos:{x:24,y:0,z:-11},lines:["GLITTER STASH","he has a problem."],fg:"#DDE7F0"},{type:"goldenDuck",id:16,pos:{x:12,y:3,z:2}},{type:"goldenDuck",id:18,pos:{x:-14,y:4.5,z:10},needs:"whistle"},{type:"pearl",pos:{x:0,y:.4,z:-10}},{type:"pearl",pos:{x:-10,y:.4,z:0}},{type:"pearl",pos:{x:10,y:.4,z:6}},{type:"pearl",pos:{x:0,y:.4,z:10}}]}}class Bg extends Si{edward;beamArm;sweepAngle=0;reflections=0;reflectedThisPass=new Set;lastSector=0;sockets=[];yeeted=!1;goalBlocker;constructor(e,t=[]){super(e,kg(),t);const n=(()=>{let a=11;return()=>(a=a*16807%2147483647)/2147483647})();for(let a=0;a<40;a++){const c=Tl(2.5+n()*3.5,1915445),l=-21+n()*42,h=-18+n()*40;Math.hypot(l-In.x,h-In.z)<7||Math.abs(l)+Math.abs(h)<6||(c.position.set(l,0,h),this.scene.add(c))}this.edward=new Ne;const s=new Q(new Ke(.6,1.5,.4),Se(2764613,{flatShading:!1}));s.position.y=3.15,this.edward.add(s);const r=new Q(new Ke(.4,.45,.4),Se(U.edwardPale,{gloss:.9,rim:.6,flatShading:!1}));r.position.y=4.1,this.edward.add(r);const o=new Q(new Ke(.44,.18,.44),Se(7034163));o.position.y=4.38,this.edward.add(o),this.edward.position.set(In.x,0,In.z),this.scene.add(this.edward),this.beamArm=new Q(new Ke(.24,.24,30),_t(U.edwardPale,2)),this.beamArm.position.set(In.x,1.2,In.z),this.scene.add(this.beamArm);for(const a of Og){const c=new Q(new Bt(.8,.09,8,18),new $t({color:U.grandmaLilac,transparent:!0,opacity:.16}));c.rotation.x=Math.PI/2,c.position.set(a.x,.12,a.z),this.scene.add(c),this.sockets.push({id:a.id,pos:new R(a.x,0,a.z),ring:c,filled:!1})}this.goalBlocker=this.world.addCollider({kind:"box",center:new R(0,1.5,21.4),half:new R(5,2.5,.5),yaw:0,enabled:!0})}onUpdate(e){if(this.yeeted)return;const t=this.weapons.ankhActive&&this.weapons.equipped==="ankh";for(const a of this.sockets)if(a.ring.material.opacity=a.filled?.9:t?.85:.16,!a.filled){const c=this.im.carriables.find(l=>l.kind==="mirrorShield"&&!l.carried&&l.pos.distanceTo(a.pos)<1.2);c&&(a.filled=!0,c.pos.set(a.pos.x,0,a.pos.z),this.ctx.audio.play("correct",.6),this.ctx.hud.toast(`SHIELD SET. ${this.sockets.filter(l=>l.filled).length}/3`,1.8))}this.sweepAngle+=e*.85;const n=new R(Math.sin(this.sweepAngle),0,Math.cos(this.sweepAngle));this.beamArm.position.set(In.x+n.x*15,1.2,In.z+n.z*15),this.beamArm.rotation.y=Math.atan2(n.x,n.z);const s=Math.floor(this.sweepAngle/(Math.PI*2));s!==this.lastSector&&(this.lastSector=s,this.reflectedThisPass.clear());const r=this.player.pos.clone().sub(this.edward.position).setY(0),o=r.dot(n);if(o>1&&o<30){const a=Math.abs(r.x*n.z-r.z*n.x),c=this.world.groundAt(this.player.pos.x,this.player.pos.z,this.player.pos.y+2.5)>this.player.pos.y+.5;a<.9&&!c&&this.player.pos.y<2.5&&this.hurt("sparkle");for(const l of this.sockets){if(!l.filled||this.reflectedThisPass.has(l.id))continue;const h=l.pos.clone().sub(this.edward.position).setY(0),d=h.dot(n),u=Math.abs(h.x*n.z-h.z*n.x);d>1&&d<30&&u<1.1&&(this.reflectedThisPass.add(l.id),this.reflections++,this.ctx.audio.play("sparkle",.8,.8),this.ctx.camera.kick(.35),this.ctx.hud.toast(`REFLECTED. ${this.reflections}/3`,1.6),this.reflections>=3&&this.yeet())}}}canFinish(){return this.yeeted}yeet(){this.yeeted=!0,this.goalBlocker.enabled=!1;const e=this.edward.position.clone(),t=e.clone().setY(3.4);this.cutscene=new Qn([{t:0,cam:{pos:e.clone().add(new R(0,2.2,-8)),look:t,fov:44},slowmo:.2},{t:.1,cam:{pos:e.clone().add(new R(-2,2.6,-5)),look:t,fov:38},glide:1.2},{t:1.3,flash:1,slowmo:1,do:()=>{this.beamArm.visible=!1,this.ctx.audio.play("impact",.7),this.fx.burst(t,220,{colors:[14542832,16777215],speed:7,up:6,gravity:2,life:1.6});const n=performance.now(),s=()=>{const r=(performance.now()-n)/1e3;r>2.6||!this.edward.parent||(this.edward.position.set(e.x+r*9,r*15-2.4*r*r,e.z+r*16),this.edward.rotation.z+=.14,requestAnimationFrame(s))};s()}},{t:1.45,cam:{pos:e.clone().add(new R(-9,3,-10)),look:e.clone().add(new R(12,16,20)),fov:58},glide:1.6},{t:2.6,do:()=>{this.ctx.audio.play("howl",.8),this.fx.burst(e.clone().add(new R(20,22,34)),40,{colors:[16777215],speed:2,up:0,gravity:.5,life:1}),this.ctx.hud.toast("EDWARD HAS LEFT THE TREELINE.",3)}}],4.4,this.ctx.camera,this.ctx.cinema,()=>{this.cutscene=null,this.ctx.camera.snapTo(this.player.pos)})}}function Hg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:46,y:.5,z:34},color:1844296}),i.push({kind:"box",pos:{x:18,y:-.25,z:-6},size:{x:12,y:.5,z:8},color:1844296}),i.push({kind:"box",pos:{x:0,y:-.25,z:19},size:{x:8,y:.5,z:8},color:U.concrete}),i.push({kind:"box",pos:{x:16,y:-.25,z:20},size:{x:8,y:.5,z:7},color:U.concrete}),i.push({kind:"box",pos:{x:0,y:1.6,z:-17},size:{x:46,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-12.75,y:1.6,z:17},size:{x:20.5,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:8.7,y:1.6,z:17},size:{x:12.4,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:20.05,y:1.6,z:17},size:{x:5.9,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:-23,y:1.6,z:0},size:{x:.8,y:3.2,z:34},color:2568282}),i.push({kind:"box",pos:{x:23,y:1.6,z:6.725},size:{x:.8,y:3.2,z:20.55},color:2568282}),i.push({kind:"box",pos:{x:23,y:1.6,z:-12.75},size:{x:.8,y:3.2,z:8.5},color:2568282}),i.push({kind:"box",pos:{x:24.4,y:1.6,z:-6},size:{x:.8,y:3.2,z:9},color:2568282}),i.push({kind:"box",pos:{x:18.7,y:1.6,z:-1.6},size:{x:12,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:18.7,y:1.6,z:-10.4},size:{x:12,y:3.2,z:.8},color:2568282}),i.push({kind:"box",pos:{x:12.2,y:.5,z:20},size:{x:.4,y:1,z:7},color:2568282}),i.push({kind:"box",pos:{x:19.8,y:.5,z:20},size:{x:.4,y:1,z:7},color:2568282}),i.push({kind:"box",pos:{x:16,y:.5,z:23.3},size:{x:8,y:1,z:.4},color:2568282}),i.push({kind:"box",pos:{x:-19.5,y:2.85,z:0},size:{x:6,y:.4,z:8},color:3094614}),i.push({kind:"box",pos:{x:-14,y:2.55,z:0},size:{x:6.4,y:.3,z:2.8},color:3752558}),i.push({kind:"box",pos:{x:0,y:4.6,z:0},size:{x:40,y:.3,z:1.2},color:3292003}),i.push({kind:"box",pos:{x:-14,y:3.4,z:3.5},size:{x:1.6,y:.3,z:1.6},color:3752558}),i.push({kind:"box",pos:{x:-9,y:4,z:1.8},size:{x:1.6,y:.3,z:1.6},color:3752558}),i.push({kind:"box",pos:{x:-19,y:5.4,z:-13},size:{x:4,y:.4,z:4},color:3752558});for(const n of[-10,-6,-2])i.push({kind:"box",pos:{x:8,y:.35,z:n},size:{x:2.6,y:.7,z:1},color:3094614});return i.push({kind:"box",pos:{x:14,y:.8,z:10},size:{x:6,y:1.6,z:1.2},color:3094614}),{id:"ch1",name:"THE GYM",tagline:"it started at the gym.",objective:`OBJECTIVE:
<b>1.</b> carry dumbbells [ENTER] onto BOTH scales — exactly 3 each
<b>2.</b> ride the lift up, grab the KEY
<b>3.</b> take the key to the pink GATE`,skyGlow:U.ramenGold,fogDensity:.012,prims:i,cameraOffset:{x:0,y:6.9,z:-8.2},cameraZones:[{min:{x:-23,y:-1,z:-10},max:{x:-8,y:4,z:10},offset:{x:4,y:8.5,z:-8},fov:50}],parSeconds:170,bounds:{min:{x:-30,y:-6,z:-24},max:{x:30,y:30,z:26}},logic:[{when:{plates:["pl","pr"]},open:"lift1"},{when:{key:!0},open:"gate"},{when:{switches:["st1"]},open:"bonus"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-11},yaw:0},{type:"goal",pos:{x:0,y:0,z:20},requires:"gate"},{type:"sign",pos:{x:5,y:0,z:-13},lines:["LAINIE FITNESS","members: 2 (+1 dog)"],yaw:Math.PI},{type:"plate",id:"pl",pos:{x:-14,y:0,z:-4},needWeight:3,exactWeight:!0},{type:"plate",id:"pr",pos:{x:-14,y:0,z:4},needWeight:3,exactWeight:!0},{type:"carry",id:"d1",pos:{x:-9,y:0,z:-8},kind:"dumbbell",weight:1},{type:"carry",id:"d2",pos:{x:-7,y:0,z:1},kind:"dumbbell",weight:2},{type:"carry",id:"d3",pos:{x:-17,y:0,z:9},kind:"dumbbell",weight:3},{type:"sign",pos:{x:-14,y:0,z:-9.5},lines:["BALANCE: 3 EACH SIDE","[3]  vs  [1 + 2] — use every weight"],fg:"#33FF88"},{type:"lift",id:"lift1",pos:{x:-11,y:.2,z:0},size:{x:2.6,y:.4,z:2.6},to:{x:-11,y:2.8,z:0},color:3752558},{type:"carry",id:"key",pos:{x:-19.5,y:3.1,z:0},kind:"key"},{type:"door",id:"gate",pos:{x:0,y:1.5,z:17},size:{x:4,y:3,z:.7},color:U.heartNeon,needsKey:!0},{type:"duck",pos:{x:4,y:0,z:4},patrol:[{x:4,y:0,z:4},{x:10,y:0,z:4},{x:10,y:0,z:-2},{x:4,y:0,z:-2}]},{type:"duck",pos:{x:-4,y:0,z:10},patrol:[{x:-4,y:0,z:10},{x:4,y:0,z:12}],speed:3},{type:"letterPiece",pos:{x:0,y:.6,z:0}},{type:"secretWall",pos:{x:23,y:1.6,z:-6},size:{x:.8,y:3.2,z:4.9},color:2568282},{type:"weaponPickup",weapon:"ball",pos:{x:20,y:0,z:-6}},{type:"polaroid",pos:{x:22.5,y:1.4,z:-8.8},photo:"assets/photos/couple_mirror1.jpeg",yaw:-.6},{type:"goldenDuck",id:2,pos:{x:17,y:.4,z:-8.5}},{type:"goldenDuck",id:1,pos:{x:0,y:5.2,z:0}},{type:"goldenDuck",id:3,pos:{x:-19,y:6,z:-13},needs:"boba"},{type:"bobaSpot",pos:{x:-19,y:3.6,z:-9.5}},{type:"bobaSpot",pos:{x:-19,y:4.6,z:-11.2}},{type:"switchTarget",id:"st1",pos:{x:12,y:2.6,z:15}},{type:"door",id:"bonus",pos:{x:16,y:1.2,z:16.6},size:{x:2.2,y:2.4,z:.7},color:U.ramenGold},{type:"pearl",pos:{x:16,y:.5,z:18.5}},{type:"pearl",pos:{x:17,y:.5,z:18.5}},{type:"pearl",pos:{x:15,y:.5,z:18.5}},{type:"pearl",pos:{x:-3,y:.4,z:-8}},{type:"pearl",pos:{x:-8,y:.4,z:-5}},{type:"pearl",pos:{x:-11,y:3.4,z:0}},{type:"pearl",pos:{x:-14,y:4,z:3.5}},{type:"pearl",pos:{x:-9,y:4.6,z:1.8}},{type:"pearl",pos:{x:6,y:.4,z:12}}]}}function Gg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:0},size:{x:16,y:.5,z:60},color:1580862}),i.push({kind:"box",pos:{x:16,y:-.25,z:18},size:{x:20,y:.5,z:14},color:1580862});const n=[[-11,2.2,-20,6,10],[-11,1.8,-6,6,8],[-11,2.6,8,6,9],[-11,2,20,6,8],[11,2.2,-22,6,8],[11,1.6,-10,6,7],[11,2.4,2,6,8],[16,2.2,27.5,16,5],[27.5,2,18,5,12]];for(const[s,r,o,a,c]of n)i.push({kind:"box",pos:{x:s,y:r/2,z:o},size:{x:a,y:r,z:c},color:2305104});return i.push({kind:"box",pos:{x:-7.9,y:2.4,z:8},size:{x:.2,y:1,z:1.4},color:U.ramenGold,emissive:U.ramenGold,emissiveIntensity:1.6,ghost:!0}),i.push({kind:"box",pos:{x:22,y:1.6,z:12.4},size:{x:8,y:3.2,z:.8},color:2305104}),i.push({kind:"box",pos:{x:22,y:1.6,z:23.6},size:{x:8,y:3.2,z:.8},color:2305104}),i.push({kind:"box",pos:{x:25.6,y:1.6,z:18},size:{x:.8,y:3.2,z:12},color:2305104}),i.push({kind:"box",pos:{x:0,y:-.25,z:36},size:{x:10,y:.5,z:12},color:U.concrete}),i.push({kind:"box",pos:{x:-13,y:-.25,z:-14},size:{x:10,y:.5,z:10},color:1580862}),{id:"ch2",name:"LINCOLN AFTER DARK",tagline:"population: small. exits: one.",skyGlow:U.taroPurple,fogDensity:.02,prims:i,cameraOffset:{x:0,y:7.2,z:-8.6},cameraZones:[{min:{x:8,y:-1,z:12},max:{x:28,y:4,z:24},offset:{x:-5,y:6.5,z:-6},fov:52}],parSeconds:200,bounds:{min:{x:-22,y:-6,z:-32},max:{x:32,y:30,z:44}},logic:[{when:{rotors:{r1:1,r2:0,r3:3,r4:2}},open:"exit"},{when:{switches:["jar1"]},open:"shopdoor"}],entities:[{type:"spawn",pos:{x:0,y:0,z:-26},yaw:0},{type:"goal",pos:{x:0,y:0,z:40},requires:"exit"},{type:"sign",pos:{x:4.5,y:0,z:-24},lines:["LINCOLN, MAINE","famous for: nothing"],yaw:Math.PI},{type:"sign",pos:{x:-5,y:0,z:30},lines:["ONE (1) EXIT","power required"],fg:"#33FF88"},{type:"rotor",id:"r1",pos:{x:-4,y:0,z:-14},states:4,state:3,kind:"barrier"},{type:"rotor",id:"r2",pos:{x:4,y:0,z:-2},states:4,state:2,kind:"barrier"},{type:"rotor",id:"r3",pos:{x:-4,y:0,z:10},states:4,state:1,kind:"barrier"},{type:"rotor",id:"r4",pos:{x:3,y:0,z:24},states:4,state:0,kind:"barrier"},{type:"door",id:"exit",pos:{x:0,y:2.2,z:33},size:{x:10,y:4.4,z:.7},color:U.crtGreen},{type:"hazard",kind:"mud",shape:{pos:{x:-3,y:0,z:-8},size:{x:5,y:.4,z:4}}},{type:"hazard",kind:"mud",shape:{pos:{x:5,y:0,z:5},size:{x:5,y:.4,z:5}}},{type:"hazard",kind:"mud",shape:{pos:{x:-2,y:0,z:17},size:{x:6,y:.4,z:4}}},{type:"duck",pos:{x:0,y:0,z:6},patrol:[{x:-5,y:0,z:6},{x:5,y:0,z:6}]},{type:"duck",pos:{x:2,y:0,z:20},patrol:[{x:2,y:0,z:20},{x:-4,y:0,z:26},{x:4,y:0,z:28}],speed:2.8},{type:"duck",pos:{x:14,y:0,z:18},patrol:[{x:12,y:0,z:15},{x:20,y:0,z:21}],speed:3.2},{type:"switchTarget",id:"jar1",pos:{x:21,y:3.8,z:13}},{type:"door",id:"shopdoor",pos:{x:18.4,y:1.4,z:18},size:{x:.7,y:2.8,z:4},color:U.taroPurple},{type:"weaponPickup",weapon:"boba",pos:{x:22.5,y:0,z:18}},{type:"sign",pos:{x:20,y:0,z:10},lines:["BOBA SHOP","opening: never"],fg:"#B388EB",yaw:.4},{type:"pearl",pos:{x:24,y:.5,z:15}},{type:"pearl",pos:{x:24,y:.5,z:21}},{type:"letterPiece",pos:{x:-6.5,y:.5,z:8}},{type:"secretWall",pos:{x:-13,y:1.6,z:-9.6},size:{x:8,y:3.2,z:.8},color:2305104},{type:"polaroid",pos:{x:-13,y:1.3,z:-16},photo:"assets/photos/couple_mirror2.jpeg"},{type:"goldenDuck",id:5,pos:{x:-16,y:.4,z:-16}},{type:"pearl",pos:{x:-10,y:.5,z:-16}},{type:"pearl",pos:{x:-12,y:.5,z:-17}},{type:"goldenDuck",id:4,pos:{x:11,y:3,z:2}},{type:"goldenDuck",id:6,pos:{x:-11,y:6,z:8},needs:"whistle"},{type:"carry",id:"block1",pos:{x:7,y:0,z:-3},kind:"block",weight:2},{type:"pearl",pos:{x:0,y:.4,z:-18}},{type:"pearl",pos:{x:-2,y:.4,z:0}},{type:"pearl",pos:{x:3,y:.4,z:14}},{type:"pearl",pos:{x:0,y:.4,z:28}},{type:"pearl",pos:{x:11,y:3.2,z:0}}]}}function Vg(){const i=[];i.push({kind:"box",pos:{x:0,y:-.25,z:-12},size:{x:18,y:.5,z:24},color:1844032}),i.push({kind:"box",pos:{x:0,y:-.25,z:12},size:{x:8,y:.5,z:24},color:U.concrete}),i.push({kind:"box",pos:{x:0,y:-.25,z:32},size:{x:14,y:.5,z:16},color:1844032}),i.push({kind:"box",pos:{x:0,y:-4,z:12},size:{x:60,y:.5,z:24},color:U.dockWater,ghost:!0});for(const t of[-1,1])i.push({kind:"box",pos:{x:3.8*t,y:.5,z:12},size:{x:.4,y:1,z:24},color:3818600});return i.push({kind:"box",pos:{x:6.5,y:-2.2,z:10},size:{x:5,y:.4,z:6},color:2765650}),i.push({kind:"box",pos:{x:3.4,y:1.4,z:-1},size:{x:2.6,y:2.8,z:2.6},color:3818600}),i.push({kind:"box",pos:{x:3.4,y:3,z:-1},size:{x:3.2,y:.3,z:3.2},color:5857663}),i.push({kind:"box",pos:{x:7,y:.5,z:-4},size:{x:1.4,y:1,z:1.4},color:4864808}),i.push({kind:"box",pos:{x:6,y:1,z:-2},size:{x:1.4,y:2,z:1.4},color:4864808}),i.push({kind:"cylinder",pos:{x:-6,y:1.5,z:-6},size:{x:1,y:3,z:1},color:3818600}),{id:"ch3",name:"HAYDEN'S TOLL BRIDGE",tagline:"this dash will be invoiced.",skyGlow:U.ramenGold,fogDensity:.016,prims:i,cameraOffset:{x:0,y:7,z:-8.6},cameraZones:[{min:{x:-4,y:-1,z:2},max:{x:4,y:4,z:24},offset:{x:-9,y:4.5,z:0},fov:54}],parSeconds:210,bounds:{min:{x:-20,y:-8,z:-26},max:{x:20,y:30,z:42}},logic:[{when:{paidExact:{slot:"till",amount:7}},open:"tollgate"},{when:{switches:["jar"]},open:"jarhatch"}],entities:[{type:"spawn",pos:{x:-3,y:0,z:-20},yaw:0},{type:"goal",pos:{x:0,y:0,z:36},requires:"tollgate"},{type:"sign",pos:{x:-5,y:0,z:-3},lines:["TOLL: 7 ⬤ EXACT","itemized: crossing 5,","convenience 1, vibes 1"],fg:"#FFB627"},{type:"sign",pos:{x:5.5,y:0,z:-18},lines:["HAYDEN LLC","no refunds. ever."],yaw:Math.PI},{type:"slot",id:"till",pos:{x:1.4,y:0,z:-1},accepts:"coin"},{type:"door",id:"tollgate",pos:{x:0,y:2.2,z:1},size:{x:7.4,y:4.4,z:.6},color:U.ramenGold},{type:"carry",id:"c1",pos:{x:-6,y:0,z:-14},kind:"coin",weight:0,value:2},{type:"carry",id:"c2",pos:{x:6,y:0,z:-10},kind:"coin",weight:0,value:1},{type:"carry",id:"c3",pos:{x:-6,y:3.2,z:-6},kind:"coin",weight:0,value:2},{type:"carry",id:"c4",pos:{x:3.4,y:3.4,z:-1},kind:"coin",weight:0,value:2},{type:"carry",id:"c5",pos:{x:0,y:0,z:-7},kind:"coin",weight:0,value:5},{type:"switchTarget",id:"jar",pos:{x:-6,y:3.6,z:-6}},{type:"door",id:"jarhatch",pos:{x:-6,y:.9,z:-5.2},size:{x:1.2,y:1.8,z:.3},color:5857663},{type:"drone",pos:{x:0,y:0,z:-6}},{type:"duck",pos:{x:-2,y:0,z:28},patrol:[{x:-4,y:0,z:26},{x:4,y:0,z:30}]},{type:"duck",pos:{x:2,y:0,z:34},patrol:[{x:4,y:0,z:32},{x:-4,y:0,z:36}],speed:3},{type:"letterPiece",pos:{x:0,y:.5,z:12}},{type:"secretWall",pos:{x:6.5,y:-1,z:13.2},size:{x:5,y:2.2,z:.6},color:2765650},{type:"goldenDuck",id:8,pos:{x:6.5,y:-1.8,z:8}},{type:"pearl",pos:{x:5.5,y:-1.8,z:9}},{type:"pearl",pos:{x:7.5,y:-1.8,z:9}},{type:"pearl",pos:{x:6.5,y:-1.8,z:11}},{type:"sign",pos:{x:6.5,y:-2.2,z:12},lines:["HAYDEN'S VAULT","shhh."],fg:"#FFB627"},{type:"goldenDuck",id:7,pos:{x:3.4,y:3.9,z:-1}},{type:"goldenDuck",id:9,pos:{x:-8,y:-1.5,z:16},needs:"ankh"},{type:"hazard",kind:"water",shape:{pos:{x:0,y:-3.6,z:12},size:{x:60,y:1.4,z:24}}},{type:"pearl",pos:{x:0,y:.4,z:-16}},{type:"pearl",pos:{x:2,y:.4,z:6}},{type:"pearl",pos:{x:-2,y:.4,z:18}},{type:"pearl",pos:{x:0,y:.4,z:26}}]}}const Wr=["ok. ducks handled. letter recovered.","lainie —","from the gym to the dock to whatever this game is,","you are my favorite person,","and i love you more than the ducks.","(the ducks demanded a recount.)","— corbin"];function Wg(){return{id:"ch7",name:"SUNRISE POINT",tagline:"one more stop.",skyGlow:16751186,fogDensity:.012,prims:[{kind:"box",pos:{x:0,y:-.25,z:0},size:{x:14,y:.5,z:60},color:U.asphalt},{kind:"box",pos:{x:0,y:-.25,z:34},size:{x:26,y:.5,z:14},color:U.concrete},{kind:"box",pos:{x:0,y:.4,z:40.6},size:{x:26,y:.8,z:.8},color:3818600},{kind:"box",pos:{x:-12.6,y:.4,z:34},size:{x:.8,y:.8,z:14},color:3818600},{kind:"box",pos:{x:12.6,y:.4,z:34},size:{x:.8,y:.8,z:14},color:3818600}],entities:[{type:"spawn",pos:{x:-2,y:0,z:6},yaw:0}],cameraZones:[],cameraOffset:{x:0,y:5.6,z:-8},parSeconds:0,bounds:{min:{x:-30,y:-8,z:-30},max:{x:30,y:40,z:60}},logic:[]}}function jg(){const i=new Ne,e=new Q(new Ke(.42,.62,.3),Se(U.heartNeon,{flatShading:!1}));e.position.y=.85,i.add(e);const t=new Q(new Ke(.34,.34,.32),Se(15780008,{flatShading:!1}));t.position.y=1.35,i.add(t);const n=new Q(new Ke(.38,.16,.36),Se(16111470,{flatShading:!1}));n.position.y=1.53,i.add(n);const s=new Q(new Ke(.12,.4,.12),Se(16111470,{flatShading:!1}));s.position.set(0,1.38,-.24),s.rotation.x=.3,i.add(s);for(const r of[-1,1]){const o=new Q(new Bt(.06,.012,6,10),Se(2765650,{gloss:.6,flatShading:!1}));o.position.set(.08*r,1.37,.17),i.add(o)}return i}class Xg{constructor(e){this.ctx=e;const t=Wg();this.world=new ha(t),this.scene.add(this.world.group),this.scene.fog=new zi(U.midnight,t.fogDensity),this.sky=new nr,this.sky.set({top:U.midnight,horizon:U.horizonGlow,glow:t.skyGlow}),this.scene.add(this.sky.group),this.scene.add(new Js(10135773,2760760,1.7));const n=new aa(16763296,1.8);n.position.set(0,20,60),this.scene.add(n);for(const c of[-8,0,8]){const l=new Tn(U.ramenGold,30,14,1.6);l.position.set(c,2.4,39),this.scene.add(l)}this.car=new Rl,this.car.place(3,24,0),this.scene.add(this.car.rig.group),this.lainie=jg(),this.lainie.position.set(6,0,30),this.scene.add(this.lainie),this.player=new ua,this.player.applyCosmetics(e.save.data.gear.owned,!!e.save.data.secrets.halo),this.player.spawnAt(-2,0,6,0),this.scene.add(this.player.rig.group),this.easel=new Ne;const s=new Q(new gt(.05,.05,2,6),Se(4864808));s.position.set(-.5,1,.2),s.rotation.z=.2;const r=s.clone();r.position.x=.5,r.rotation.z=-.2;const o=new Q(new Ke(1.7,1.3,.08),Se(16118504,{rim:.1}));o.position.set(0,1.5,0),this.easel.add(s,r,o),this.easel.position.copy(this.easelPos),this.easel.rotation.y=Math.PI,this.scene.add(this.easel);const a=Xs(["SUNRISE POINT","almost there."],{fg:"#FF9A52"});a.position.set(5,0,8),a.rotation.y=Math.PI,this.scene.add(a),this.fx=new ir(this.scene),e.camera.configure(t.cameraZones,t.cameraOffset),e.camera.snapTo(this.player.pos),e.hud.chapterCard("SUNRISE POINT","one more stop."),e.audio.play("levelstart",.5),new URLSearchParams(location.search).has("debug")&&(window.__fin=()=>({pos:{x:this.player.pos.x,y:this.player.pos.y,z:this.player.pos.z},assembled:this.assembled,cutscene:!!this.cutscene,cutsceneDone:this.cutscene?.done??null,letterShown:this.letterShown}))}scene=new is;world;player;car;sky;fx;cutscene=null;easel;easelPos=new R(0,0,36);assembled=!1;sunrise=0;sunriseTarget=0;lainie;update(e){if(this.fx.update(e),this.sky.update(e),this.sunrise!==this.sunriseTarget&&(this.sunrise=rt.damp(this.sunrise,this.sunriseTarget,.35,e),this.sky.setSunrise(this.sunrise),this.ctx.cinema.setWarm(this.sunrise*.85),this.scene.fog.color.lerpColors(new Le(U.midnight),new Le(9062970),this.sunrise)),this.cutscene&&!this.cutscene.done){this.cutscene.update(e);return}if(this.assembled)return;const t=this.ctx.input.poll();this.ctx.camera.control(e,t.rotate,t.zoom),this.player.update(e,t,this.world,this.ctx.camera.yaw),this.player.events.jumped&&this.ctx.audio.play("jump",.3,this.player.events.airJumped?1.35:1);const n=this.player.pos.z>30&&this.player.pos.distanceTo(this.easelPos)<9,s=this.ctx.save.data.pieces.length;this.ctx.hud.prompt(n?`[ENTER] ASSEMBLE THE LETTER (${s}/7 PIECES)`:null),n&&t.interact&&(s<6?(this.ctx.hud.toast(`SOME PIECES ARE STILL HIDING. (${s}/7 — check the chapters)`,3.2),this.ctx.audio.play("wrong",.5)):(this.assembled=!0,this.playFinale(s))),this.ctx.camera.update(e,this.player.pos,new R(this.player.state.vx,0,this.player.state.vz),t.camNudge),t.pause&&this.ctx.togglePause()}playFinale(e){this.ctx.hud.prompt(null);const t=this.easelPos.clone(),n=(o,a,c)=>new R(o,a,c),s=()=>{for(let o=0;o<7;o++){const a=da(),c=o<e;a.scale.setScalar(.55),a.position.set((Math.random()-.5)*30,8+o*2,t.z-20-o*4),this.scene.add(a);const l=n(t.x-.5+o%3*.5,1.25+Math.floor(o/3)*.42,t.z-.08),h=a.position.clone(),d=performance.now()+o*420,u=()=>{const p=(performance.now()-d)/700;if(p<0){requestAnimationFrame(u);return}if(p>=1){a.position.copy(l),a.rotation.set(Math.PI/2,0,0),c||(a.visible=!1),this.fx.burst(l,12,{colors:[U.heartNeon],speed:1.4,up:1,life:.6}),this.ctx.audio.play("pop",.4,1+o*.06);return}a.position.lerpVectors(h,l,p*p),a.rotation.x+=.1,requestAnimationFrame(u)};u()}},r=()=>{for(let o=0;o<30;o++){const a=Li(),c=Math.floor(o/2),l=o%2===0?1:-1;a.group.position.set(l*c*1.4,10+c*.3,t.z-60),this.scene.add(a.group);const h=performance.now(),d=()=>{const u=(performance.now()-h)/1e3;if(u>7){a.group.removeFromParent();return}a.group.position.z+=.35,a.wingL.rotation.z=.6+Math.sin(u*14+o)*.5,a.wingR.rotation.z=-.6-Math.sin(u*14+o)*.5,requestAnimationFrame(d)};d()}this.ctx.audio.play("quack",.6,1.1)};this.ctx.audio.musicVolume(.45),this.cutscene=new Qn([{t:0,cam:{pos:n(t.x-1.6,1.6,t.z-2.4),look:n(t.x,1.5,t.z),fov:42},do:s},{t:4.6,cam:{pos:n(3,1.4,16),look:n(3,.8,24),fov:46},glide:.01,do:()=>{this.player.rig.group.position.set(3.4,.75,23.4),this.player.rig.group.rotation.y=0,this.lainie.position.set(2.4,.5,23.6),this.lainie.rotation.y=0,this.car.setHeadlights(!0),this.ctx.audio.engine(!0,.3)}},{t:6.2,cam:{pos:n(-4,2.2,30),look:n(3,1,38),fov:50},glide:2.2,do:()=>{this.sunriseTarget=1;const o=performance.now(),a=()=>{const c=(performance.now()-o)/1e3;if(c>5){this.ctx.audio.engine(!1);return}const l=24+Math.min(10,c*2.6);this.car.rig.group.position.z=l,this.player.rig.group.position.z=l-.6,this.lainie.position.z=l-.4;for(const h of this.car.rig.wheels)h.rotation.x+=.08;requestAnimationFrame(a)};a()}},{t:10.5,cam:{pos:n(0,1.6,30),look:n(0,6,80),fov:58},glide:3.4},{t:12.5,do:()=>{this.ctx.audio.play("fanfare",.7),this.fx.burst(n(0,6,40),500,{colors:[U.heartNeon,U.ramenGold,16777215],speed:8,up:6,gravity:2.4,life:2.6}),r()}},{t:14.5,do:()=>this.showLetter()}],60,this.ctx.camera,this.ctx.cinema,()=>{this.showLetter()})}letterShown=!1;showLetter(){if(this.letterShown)return;this.letterShown=!0,this.ctx.save.patch(a=>{a.chaptersDone.includes("ch7")||a.chaptersDone.push("ch7"),a.secrets.finaleSeen=!0,a.pearls+=200});const e=this.ctx.hud.overlay();e.style.background="rgba(6,9,24,0.35)";const t=new URL("../../assets/photos/couple_beach.jpeg",document.baseURI).href;e.innerHTML=`
      <div style="max-width:min(560px,92vw);text-align:center;display:flex;flex-direction:column;align-items:center;gap:14px">
        <div data-r="letter" style="font-family:'Nunito';font-size:17px;line-height:1.9;text-align:left;min-height:240px;text-transform:lowercase"></div>
        <img src="${t}" alt="us" style="width:min(300px,70vw);border:10px solid #f5f2e8;border-radius:4px;transform:rotate(-2deg);opacity:0;transition:opacity 2.4s" data-r="photo" />
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;opacity:0;transition:opacity 1s" data-r="btns">
          <button class="dj-btn" data-a="hub">BACK TO THE HIGHWAY</button>
          <button class="dj-btn" data-a="site">BACK TO LAINIE.EXE 💌</button>
        </div>
      </div>`;const n=e.querySelector('[data-r="letter"]');let s=0,r=0;const o=()=>{if(s>=Wr.length){e.querySelector('[data-r="photo"]').style.opacity="1",setTimeout(()=>{e.querySelector('[data-r="btns"]').style.opacity="1"},1600);return}const a=Wr[s];r++,r%2===0&&this.ctx.audio.play("type",.12,1+Math.random()*.2),n.innerHTML=Wr.slice(0,s).map(c=>`<div>${c}</div>`).join("")+`<div>${a.slice(0,r)}<span style="opacity:0.5">▌</span></div>`,r>=a.length?(s++,r=0,setTimeout(o,460)):setTimeout(o,34)};o(),e.querySelector('[data-a="hub"]').addEventListener("click",()=>{e.remove(),this.ctx.cinema.setWarm(0),this.ctx.go("hub")}),e.querySelector('[data-a="site"]').addEventListener("click",()=>{location.href=new URL("../../index.html",document.baseURI).href})}dispose(){this.ctx.audio.engine(!1),this.ctx.audio.musicVolume(this.ctx.save.data.settings.musicVolume),this.ctx.cinema.setWarm(0),this.ctx.hud.prompt(null)}}class qg{constructor(e){this.ctx=e,this.sky=new nr,this.sky.set({top:1714248,horizon:9067082,glow:U.duck,glowStrength:.3}),this.sky.setSunrise(.45),this.scene.add(this.sky.group),this.scene.fog=new zi(2761784,.02),this.scene.add(new Js(13677722,2762824,1.7));const t=new Q(new $s(20,28),Se(U.dockWater,{gloss:.6,flatShading:!1,emissive:1716304,emissiveIntensity:.5}));t.rotation.x=-Math.PI/2,this.scene.add(t);const n=new Q(new Ks(20,34,28),Se(U.grass));n.rotation.x=-Math.PI/2,n.position.y=.02,this.scene.add(n);for(let s=0;s<24;s++){const r=s/24*Math.PI*2,o=new Q(new gt(.04,.06,1.6+Math.random(),5),Se(2968117));o.position.set(Math.cos(r)*(19+Math.random()*2),.8,Math.sin(r)*(19+Math.random()*2)),this.scene.add(o)}this.duck=Li(),this.duck.group.position.set(0,.05,-14),this.scene.add(this.duck.group),this.fx=new ir(this.scene),e.camera.configure([],{x:0,y:3,z:-5}),e.camera.snapTo(this.duck.group.position),e.hud.chapterCard("POND ZERO","it explains nothing. on purpose."),e.audio.play("quack",.5)}scene=new is;duck;sky;fx;cutscene=null;t=0;saluted=!1;update(e){if(this.t+=e,this.fx.update(e),this.sky.update(e),this.cutscene&&!this.cutscene.done){this.cutscene.update(e);return}const t=this.ctx.input.poll();this.ctx.camera.control(e,t.rotate,t.zoom);const n=Math.cos(this.ctx.camera.yaw),s=Math.sin(this.ctx.camera.yaw),r=t.moveX*n-t.moveY*s,o=-t.moveX*s-t.moveY*n;this.duck.group.position.x+=r*3*e,this.duck.group.position.z+=o*3*e,this.duck.group.position.y=.05+Math.abs(Math.sin(this.t*8))*.04,Math.hypot(r,o)>.1&&(this.duck.group.rotation.y=Math.atan2(r,o)),this.duck.group.rotation.z=Math.sin(this.t*8)*.08,t.jump,(t.fire||t.pounce)&&this.ctx.audio.play("quack",.6,.9+Math.random()*.3);const a=Math.hypot(this.duck.group.position.x,this.duck.group.position.z);this.ctx.hud.prompt(a<2.5&&!this.saluted?"[ENTER] ...?":null),a<2.5&&t.interact&&!this.saluted&&(this.saluted=!0,this.playStinger()),this.ctx.camera.update(e,this.duck.group.position,new R(r,0,o),t.camNudge),t.pause&&this.ctx.togglePause()}playStinger(){const e=this.duck.group.position.clone();this.cutscene=new Qn([{t:0,cam:{pos:e.clone().add(new R(0,.8,3.4)),look:e.clone().setY(.4),fov:40}},{t:1.2,do:()=>{this.duck.group.rotation.y=Math.PI,this.duck.wingR.rotation.z=-2.4,this.ctx.audio.play("quack",.8,.7)}},{t:3,flash:.8,do:()=>{this.ctx.hud.toast("IT WAS ALWAYS THE DUCKS.",4),this.ctx.audio.play("taskdone",.7),this.ctx.save.patch(t=>{t.secrets.pondzeroDone=!0,t.pearls+=300}),this.fx.burst(e.clone().setY(1),200,{colors:[U.duck,U.ramenGold],speed:5,up:4,life:2})}}],6.5,this.ctx.camera,this.ctx.cinema,()=>{this.ctx.go("hub")})}dispose(){this.ctx.hud.prompt(null)}}const Hc={ch1:(i,e)=>new Si(i,Hg(),e),ch2:(i,e)=>new Si(i,Gg(),e),ch3:(i,e)=>new Si(i,Vg(),e),ch4:(i,e)=>new Rg(i,e),ch5:(i,e)=>new Fg(i,e),ch6:(i,e)=>new Bg(i,e),ch7:i=>new Xg(i),pondzero:i=>new qg(i)},Gc=[["ch1","THE GYM"],["ch2","LINCOLN AFTER DARK"],["ch3","HAYDEN'S TOLL BRIDGE"],["ch4","THE BEACH"],["ch5","THE DOCK & STARS"],["ch6","TWILIGHT FOREST"],["ch7","SUNRISE POINT"]],jr=1/120,Yg=.1;class $g{ctx;current=null;currentName="";accumulator=0;lastTime=performance.now();paused=!1;pauseOverlay=null;hintProgress={};constructor(){const e=document.getElementById("app"),t=document.createElement("canvas");t.className="game",e.appendChild(t);const n=new y0,s=matchMedia("(pointer: coarse)").matches,r=n.data.tier??(s?"mobile":"ultra"),o=new r0({canvas:t,antialias:!0,powerPreference:"high-performance"});o.outputColorSpace=kt,o.toneMapping=jc,o.toneMappingExposure=n.data.settings.brightness,r==="ultra"?(o.shadowMap.enabled=!0,o.shadowMap.type=Wc,o.setPixelRatio(Math.min(devicePixelRatio,3))):o.setPixelRatio(Math.min(devicePixelRatio,2)),o.setSize(innerWidth,innerHeight);const a=new b0(innerWidth/innerHeight),c=new D0(o,r,e);c.setBloom(n.data.settings.bloom);const l=new l0(t,n.data.settings.keyBindings),h=new x0(n.data.muted,u=>n.patch(p=>{p.muted=u}));h.musicVolume(n.data.settings.musicVolume);const d=new S0(e,()=>h.setMuted(!h.muted),()=>this.togglePause());d.buildTouchControls(l),d.setPearls(n.data.pearls),d.setPieces(n.data.pieces.length),this.ctx={renderer:o,camera:a,cinema:c,input:l,audio:h,save:n,hud:d,tier:r,go:(u,p)=>this.go(u,p),togglePause:()=>this.togglePause()},addEventListener("resize",()=>this.onResize()),visualViewport?.addEventListener("resize",()=>this.onResize()),document.addEventListener("visibilitychange",()=>{document.hidden&&!this.paused&&this.togglePause()}),t.addEventListener("webglcontextlost",u=>u.preventDefault()),addEventListener("keydown",u=>{this.paused&&this.ctx.input.actionForCode(u.code)==="pause"&&(u.preventDefault(),this.togglePause())}),new URLSearchParams(location.search).has("debug")&&(window.__dj={go:(u,p)=>this.go(u,p),state:()=>({scene:this.currentName,paused:this.paused,save:this.ctx.save.data}),scene:()=>this.current,ctx:this.ctx}),this.go("hub"),requestAnimationFrame(u=>this.frame(u))}go(e,t){this.ctx.hud.fade(!0);const n=()=>{document.querySelectorAll(".dj-overlay").forEach(r=>r.remove()),this.pauseOverlay=null,this.paused=!1,this.ctx.input.reset(),this.current?.dispose(),this.ctx.cinema.setCinematic(!1),this.ctx.cinema.timeScale=1,this.ctx.cinema.setWarm(0),this.ctx.camera.cinematicControl=!1;const s=typeof t?.id=="string"?t.id:null;if(e==="play"&&s&&Hc[s]){const r=Array.isArray(t?.mods)?t.mods:[];this.current=Hc[s](this.ctx,r),this.currentName=`play:${s}`,this.hintProgress[s]=0}else this.current=new og(this.ctx),this.currentName="hub";this.ctx.hud.fade(!1)};this.current?setTimeout(n,420):n()}onResize(){this.ctx.renderer.setSize(innerWidth,innerHeight),this.ctx.cinema.resize(),this.ctx.camera.cam.aspect=innerWidth/innerHeight,this.ctx.camera.cam.updateProjectionMatrix()}togglePause(){this.paused=!this.paused,this.ctx.input.reset(),this.paused?(this.pauseOverlay=this.ctx.hud.overlay(),this.pauseOverlay.addEventListener("keydown",e=>this.trapPauseFocus(this.pauseOverlay,e),!0),this.renderPause("menu")):(this.pauseOverlay?.remove(),this.pauseOverlay=null,this.lastTime=performance.now())}leaveTo(e,t){this.pauseOverlay?.remove(),this.pauseOverlay=null,this.paused=!1,this.lastTime=performance.now(),this.go(e,t)}renderPause(e){const t=this.pauseOverlay;if(!t)return;t.onkeydown=null,delete t.dataset.capturing,t.style.justifyContent=e==="menu"?"center":"flex-start",t.style.overflowY="auto",t.style.padding="28px 16px",e==="menu"?this.pageMenu(t):e==="settings"?this.pageSettings(t):e==="controls"?this.pageControls(t):e==="levels"?this.pageLevels(t):e==="hints"?this.pageHints(t):this.pageHowTo(t);const n=t.querySelector("h1");n&&(n.id="duck-job-dialog-title",t.setAttribute("aria-labelledby",n.id),t.removeAttribute("aria-label")),this.focusPausePage(t)}focusPausePage(e){requestAnimationFrame(()=>{if(!this.paused||this.pauseOverlay!==e)return;e.querySelector('[data-a="resume"], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')?.focus()})}trapPauseFocus(e,t){if(t.key!=="Tab"||e.dataset.capturing==="true")return;const n=[...e.querySelectorAll('button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(o=>o.offsetParent!==null);if(!n.length)return;const s=n.indexOf(document.activeElement),r=t.shiftKey?s<=0?n.length-1:s-1:s<0||s>=n.length-1?0:s+1;t.preventDefault(),n[r].focus()}pageMenu(e){const t=this.currentName.startsWith("play:")?this.currentName.slice(5):null;e.innerHTML=`
      <h1>PAUSED</h1>
      <div class="dj-menu">
        <button class="dj-btn" data-a="resume" style="font-size:15px">${pt("play","RESUME")}</button>
        ${t?`<button class="dj-btn" data-a="restart">${pt("restart","RESTART LEVEL")}</button>`:""}
        ${t&&Ho[t]?`<button class="dj-btn" data-a="hints">${pt("hint","GET A HINT")}</button>`:""}
        <button class="dj-btn" data-a="levels">${pt("grid","LEVEL SELECT")}</button>
        <button class="dj-btn" data-a="settings">${pt("settings","SETTINGS")}</button>
        <button class="dj-btn" data-a="howto">${pt("help","HOW TO PLAY")}</button>
        ${t?`<button class="dj-btn" data-a="hub">${pt("home","BACK TO THE HIGHWAY")}</button>`:""}
      </div>`;const n=(s,r)=>e.querySelector(`[data-a="${s}"]`)?.addEventListener("click",r);n("resume",()=>this.togglePause()),n("restart",()=>this.leaveTo("play",{id:t})),n("hints",()=>{t&&(this.hintProgress[t]=Math.max(1,this.hintProgress[t]??0)),this.renderPause("hints")}),n("levels",()=>this.renderPause("levels")),n("settings",()=>this.renderPause("settings")),n("howto",()=>this.renderPause("howto")),n("hub",()=>this.leaveTo("hub"))}pageSettings(e){const t=this.ctx.save.data.settings,n="display:flex;flex-direction:column;gap:6px",s="display:flex;justify-content:space-between;align-items:center;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:13px;letter-spacing:1px",r="accent-color:#FF4D8D;width:100%;height:24px;cursor:pointer";e.innerHTML=`
      <h1 style="font-size:26px">SETTINGS</h1>
      <div class="dj-card" style="display:flex;flex-direction:column;gap:16px;min-width:min(340px,86vw);padding:20px 24px">
        <label style="${n}">
          <span style="${s}"><span style="display:flex;align-items:center;gap:8px">${pt("sun","BRIGHTNESS")}</span><span data-r="bval">${Math.round(t.brightness*100)}%</span></span>
          <input type="range" data-a="brightness" min="0.7" max="2.4" step="0.05" value="${t.brightness}" style="${r}" />
        </label>
        <label style="${n}">
          <span style="${s}"><span style="display:flex;align-items:center;gap:8px">${pt("music","MUSIC")}</span><span data-r="mval">${Math.round(t.musicVolume*100)}%</span></span>
          <input type="range" data-a="music" min="0" max="1" step="0.05" value="${t.musicVolume}" style="${r}" />
        </label>
        <button class="dj-btn" data-a="bloom">${pt("sparkles",`GLOW (BLOOM): ${t.bloom?"ON":"OFF"}`)}</button>
        <button class="dj-btn" data-a="tier">${pt("monitor",`GRAPHICS: ${this.ctx.tier.toUpperCase()} — TAP TO SWITCH`)}</button>
        <button class="dj-btn" data-a="mute">${pt("volume",`MUSIC: ${this.ctx.audio.muted?"MUTED":"ON"}`)}</button>
        <button class="dj-btn" data-a="controls">${pt("keyboard","KEYBINDS")}</button>
        <div style="font-size:11px;opacity:0.6;text-align:center">graphics change reloads · everything else is live</div>
      </div>
      <button class="dj-btn" data-a="back" style="margin-bottom:24px">${pt("back","BACK")}</button>`;const o=l=>e.querySelector(l),a=o('[data-a="brightness"]');a.addEventListener("input",()=>{const l=Number(a.value);this.ctx.renderer.toneMappingExposure=l,o('[data-r="bval"]').textContent=`${Math.round(l*100)}%`,this.ctx.save.patch(h=>{h.settings.brightness=l})});const c=o('[data-a="music"]');c.addEventListener("input",()=>{const l=Number(c.value);this.ctx.audio.musicVolume(l),this.ctx.audio.muted&&l>0&&this.ctx.audio.setMuted(!1),o('[data-r="mval"]').textContent=`${Math.round(l*100)}%`,this.ctx.save.patch(h=>{h.settings.musicVolume=l})}),o('[data-a="bloom"]').addEventListener("click",l=>{const h=!this.ctx.save.data.settings.bloom;this.ctx.cinema.setBloom(h),this.ctx.save.patch(d=>{d.settings.bloom=h}),l.currentTarget.innerHTML=pt("sparkles",`GLOW (BLOOM): ${h?"ON":"OFF"}`)}),o('[data-a="tier"]').addEventListener("click",()=>{const l=this.ctx.tier==="ultra"?"mobile":"ultra";this.ctx.save.patch(h=>{h.tier=l}),location.reload()}),o('[data-a="mute"]').addEventListener("click",l=>{this.ctx.audio.setMuted(!this.ctx.audio.muted),l.currentTarget.innerHTML=pt("volume",`MUSIC: ${this.ctx.audio.muted?"MUTED":"ON"}`)}),o('[data-a="controls"]').addEventListener("click",()=>this.renderPause("controls")),o('[data-a="back"]').addEventListener("click",()=>this.renderPause("menu"))}pageControls(e){const t=this.ctx.input.getKeyBindings(),n=o0.map(a=>`
      <section class="dj-key-group">
        <h2>${a.title}</h2>
        ${a.actions.map(({action:c,label:l})=>`
          <label class="dj-key-row">
            <span>${l}</span>
            <button class="dj-btn" data-bind="${c}" aria-label="Change ${l.toLowerCase()}">${kr(t[c])}</button>
          </label>`).join("")}
      </section>`).join("");e.innerHTML=`
      <h1 style="font-size:26px">KEYBINDS</h1>
      <div class="dj-card dj-key-card">
        <div data-r="bind-status" style="min-height:22px;font-size:12px;text-align:center;opacity:0.75;margin-bottom:12px" aria-live="polite">
          SELECT AN ACTION, THEN PRESS A KEY
        </div>
        ${n}
      </div>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:24px">
        <button class="dj-btn" data-a="reset">${pt("restart","RESET DEFAULTS")}</button>
        <button class="dj-btn" data-a="back">${pt("back","BACK TO SETTINGS")}</button>
      </div>`;let s=null;const r=e.querySelector('[data-r="bind-status"]'),o=[...e.querySelectorAll("[data-bind]")];for(const a of o)a.addEventListener("click",()=>{s=a.dataset.bind,e.dataset.capturing="true",o.forEach(c=>{const l=c===a;if(c.dataset.capturing=String(l),l)c.textContent="PRESS A KEY…";else{const h=c.dataset.bind;c.textContent=kr(this.ctx.input.getKeyBindings()[h])}}),r.textContent="PRESS THE NEW KEY — CONFLICTS WILL SWAP"});e.onkeydown=a=>{if(!s)return;a.preventDefault(),a.stopPropagation();const c=Sl(this.ctx.input.getKeyBindings(),s,a.code);this.ctx.input.setKeyBindings(c),this.ctx.save.patch(l=>{l.settings.keyBindings={...c}}),this.ctx.audio.play("click",.45),this.renderPause("controls")},e.querySelector('[data-a="reset"]').addEventListener("click",()=>{const a={...er};this.ctx.input.setKeyBindings(a),this.ctx.save.patch(c=>{c.settings.keyBindings=a}),this.ctx.audio.play("click",.45),this.renderPause("controls")}),e.querySelector('[data-a="back"]').addEventListener("click",()=>this.renderPause("settings"))}pageHints(e){const t=this.currentName.startsWith("play:")?this.currentName.slice(5):"",n=Ho[t];if(!n?.length){this.renderPause("menu");return}const s=Math.min(n.length,Math.max(1,this.hintProgress[t]??1));this.hintProgress[t]=s,e.innerHTML=`
      <h1 style="font-size:26px">HINTS</h1>
      <div class="dj-hint-list" aria-live="polite">
        ${n.slice(0,s).map((r,o)=>`
          <div class="dj-card dj-hint"><b>${o+1}.</b>${r}</div>`).join("")}
      </div>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:24px">
        ${s<n.length?`<button class="dj-btn" data-a="next">${pt("hint","SHOW NEXT HINT")}</button>`:""}
        <button class="dj-btn" data-a="back">${pt("back","BACK")}</button>
      </div>`,e.querySelector('[data-a="next"]')?.addEventListener("click",()=>{this.hintProgress[t]=Math.min(n.length,s+1),this.ctx.audio.play("ding",.55),this.renderPause("hints")}),e.querySelector('[data-a="back"]').addEventListener("click",()=>this.renderPause("menu"))}pageLevels(e){const t=this.ctx.save.data,n={C:"#8a93b8",B:"#c8cdd6",GOLD:"#FFB627",S:"#FF4D8D"},s=Gc.map(([o,a],c)=>{const l=t.grades[o],h=t.chaptersDone.includes(o),d=c===0||t.chaptersDone.includes(Gc[c-1][0]),u=l?`<span style="color:${n[l.medal]};font-weight:800">${l.medal}</span>`:h?"✓":d?"":'<span style="opacity:0.5">not reached</span>';return`<button class="dj-btn" data-go="${o}" style="display:flex;justify-content:space-between;gap:14px;width:100%;text-align:left">
        <span><b style="color:#8a93b8">${c+1}.</b> ${a}</span><span>${u}</span></button>`}).join(""),r=t.secrets.pondzero||t.ducks.length>=21?'<button class="dj-btn" data-go="pondzero" style="color:#FFD23F">🦆 POND ZERO</button>':"";e.innerHTML=`
      <h1 style="font-size:26px">LEVEL SELECT</h1>
      <div style="display:flex;flex-direction:column;gap:8px;min-width:min(380px,90vw);max-width:440px">
        ${s}
        <button class="dj-btn" data-go="__hub" style="color:#B388EB">◆ THE HIGHWAY (hub)</button>
        ${r}
      </div>
      <button class="dj-btn" data-a="back" style="margin:14px 0 24px">${pt("back","BACK")}</button>`,e.querySelectorAll("[data-go]").forEach(o=>{o.addEventListener("click",()=>{const a=o.dataset.go;a==="__hub"?this.leaveTo("hub"):this.leaveTo("play",{id:a})})}),e.querySelector('[data-a="back"]').addEventListener("click",()=>this.renderPause("menu"))}pageHowTo(e){const t=this.ctx.input.getKeyBindings(),n=o=>kr(t[o]),s=[[[n("moveUp"),n("moveLeft"),n("moveDown"),n("moveRight")].join(" · "),"move Bentley"],[`${n("cameraLeft")} / ${n("cameraRight")}`,"rotate the camera 90°"],[`${n("cameraIn")} / ${n("cameraOut")}`,"zoom in / out"],[n("jump"),"jump · press again in air for double jump"],[`${n("moveUp")} / ${n("moveDown")} · ${n("moveLeft")} / ${n("moveRight")} · ${n("jump")}`,"in the Corvette: throttle / brake · steer · handbrake"],[n("pounce"),"pounce / dash-attack"],[n("interact"),"interact · pick up · place"],[`CLICK / ${n("fire")}`,"aim at the mouse and fire"],[[n("weapon1"),n("weapon2"),n("weapon3"),n("weapon4")].join(" · "),"pick a weapon slot · scroll also cycles"],[n("pause"),"this menu"]],r=["Balance puzzles: carry items onto the glowing scales — the counter turns green when a side is right.","Weapons hide in SECRET ROOMS — walk into walls that look a little off.","Falling or water costs a heart, then respawns you. Grandma’s Diner (reverse past the start) sells gear."];e.innerHTML=`
      <h1 style="font-size:26px">HOW TO PLAY</h1>
      <div class="dj-card" style="min-width:min(380px,90vw);max-width:460px;padding:18px 22px;display:flex;flex-direction:column;gap:8px">
        ${s.map(([o,a])=>`<div style="display:flex;justify-content:space-between;gap:16px;font-size:13px"><b style="font-family:'Space Grotesk';color:#FFB627;white-space:nowrap">${o}</b><span style="text-align:right;opacity:0.9">${a}</span></div>`).join("")}
        <hr style="border-color:rgba(255,255,255,0.12);margin:6px 0" />
        ${r.map(o=>`<div style="font-size:12px;opacity:0.85;line-height:1.5">• ${o}</div>`).join("")}
      </div>
      <button class="dj-btn" data-a="back" style="margin-bottom:24px">${pt("back","BACK")}</button>`,e.querySelector('[data-a="back"]').addEventListener("click",()=>this.renderPause("menu"))}frame(e){requestAnimationFrame(s=>this.frame(s));const t=Math.min(Yg,(e-this.lastTime)/1e3);if(this.lastTime=e,this.paused||!this.current)return;this.accumulator+=t*this.ctx.cinema.timeScale;let n=0;for(;this.accumulator>=jr&&n<12;)this.current.update(jr),this.accumulator-=jr,n++;this.ctx.hud.update(t),this.ctx.cinema.render(this.current.scene,this.ctx.camera.cam,t)}}new $g;
