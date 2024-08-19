(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="167",Bl=0,ga=1,kl=2,Pc=1,zl=2,ln=3,Cn=0,Pt=1,Kt=2,bn=0,Ei=1,va=2,xa=3,ya=4,Hl=5,Hn=100,Vl=101,Gl=102,Wl=103,Xl=104,ql=200,Yl=201,Kl=202,Jl=203,oo=204,ao=205,jl=206,$l=207,Zl=208,Ql=209,eu=210,tu=211,nu=212,iu=213,ru=214,su=0,ou=1,au=2,Yr=3,cu=4,lu=5,uu=6,hu=7,Lc=0,fu=1,du=2,wn=0,pu=1,mu=2,_u=3,gu=4,vu=5,xu=6,yu=7,Ic=300,Ci=301,Ri=302,co=303,lo=304,ts=306,uo=1e3,Gn=1001,ho=1002,kt=1003,Su=1004,ar=1005,Wt=1006,ys=1007,Wn=1008,dn=1009,Dc=1010,Uc=1011,$i=1012,Jo=1013,Xn=1014,un=1015,nr=1016,jo=1017,$o=1018,Pi=1020,Nc=35902,Fc=1021,Oc=1022,Xt=1023,Bc=1024,kc=1025,Ti=1026,Li=1027,zc=1028,Zo=1029,Hc=1030,Qo=1031,ea=1033,Or=33776,Br=33777,kr=33778,zr=33779,fo=35840,po=35841,mo=35842,_o=35843,go=36196,vo=37492,xo=37496,yo=37808,So=37809,Mo=37810,Eo=37811,To=37812,bo=37813,wo=37814,Ao=37815,Co=37816,Ro=37817,Po=37818,Lo=37819,Io=37820,Do=37821,Hr=36492,Uo=36494,No=36495,Vc=36283,Fo=36284,Oo=36285,Bo=36286,Mu=3200,Eu=3201,Gc=0,Tu=1,Tn="",qt="srgb",Rn="srgb-linear",ta="display-p3",ns="display-p3-linear",Kr="linear",rt="srgb",Jr="rec709",jr="p3",ti=7680,Sa=519,bu=512,wu=513,Au=514,Wc=515,Cu=516,Ru=517,Pu=518,Lu=519,Ma=35044,Ea="300 es",hn=2e3,$r=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ss=Math.PI/180,ko=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function Iu(n,e){return(n%e+e)%e}function Ms(n,e,t){return(1-t)*n+t*e}function zi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,o,a,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],v=i[5],S=i[8],M=r[0],_=r[3],g=r[6],P=r[1],T=r[4],w=r[7],G=r[2],N=r[5],F=r[8];return s[0]=o*M+a*P+l*G,s[3]=o*_+a*T+l*N,s[6]=o*g+a*w+l*F,s[1]=u*M+f*P+d*G,s[4]=u*_+f*T+d*N,s[7]=u*g+f*w+d*F,s[2]=h*M+v*P+S*G,s[5]=h*_+v*T+S*N,s[8]=h*g+v*w+S*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,v=u*s-o*l,S=t*d+i*h+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=d*M,e[1]=(r*u-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=h*M,e[4]=(f*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=v*M,e[7]=(i*l-u*t)*M,e[8]=(o*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new He;function Xc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Du(){const n=Zr("canvas");return n.style.display="block",n}const Ta={};function Ki(n){n in Ta||(Ta[n]=!0,console.warn(n))}function Uu(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const ba=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wa=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[Rn]:{transfer:Kr,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[qt]:{transfer:rt,primaries:Jr,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ns]:{transfer:Kr,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(wa),fromReference:n=>n.applyMatrix3(ba)},[ta]:{transfer:rt,primaries:jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(wa),fromReference:n=>n.applyMatrix3(ba).convertLinearToSRGB()}},Nu=new Set([Rn,ns]),et={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Nu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Hi[e].toReference,r=Hi[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Hi[n].primaries},getTransfer:function(n){return n===Tn?Kr:Hi[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Hi[e].luminanceCoefficients)}};function bi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ni;class Fu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ni===void 0&&(ni=Zr("canvas")),ni.width=e.width,ni.height=e.height;const i=ni.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bi(t[i]/255)*255):t[i]=bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ou=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(bs(r[o].image)):s.push(bs(r[o]))}else s=bs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function bs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bu=0;class Lt extends Ui{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Gn,r=Gn,s=Wt,o=Wn,a=Xt,l=dn,u=Lt.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=Ni(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uo:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uo:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ic;Lt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,r=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],v=l[5],S=l[9],M=l[2],_=l[6],g=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-M)<.01&&Math.abs(S-_)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+M)<.1&&Math.abs(S+_)<.1&&Math.abs(u+v+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(u+1)/2,w=(v+1)/2,G=(g+1)/2,N=(f+h)/4,F=(d+M)/4,W=(S+_)/4;return T>w&&T>G?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=N/i,s=F/i):w>G?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=N/r,s=W/r):G<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(G),i=F/s,r=W/s),this.set(i,r,s,t),this}let P=Math.sqrt((_-S)*(_-S)+(d-M)*(d-M)+(h-f)*(h-f));return Math.abs(P)<.001&&(P=1),this.x=(_-S)/P,this.y=(d-M)/P,this.z=(h-f)/P,this.w=Math.acos((u+v+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ku extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends ku{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Yc extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],v=s[o+1],S=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=v,e[t+2]=S,e[t+3]=M;return}if(d!==M||l!==h||u!==v||f!==S){let _=1-a;const g=l*h+u*v+f*S+d*M,P=g>=0?1:-1,T=1-g*g;if(T>Number.EPSILON){const G=Math.sqrt(T),N=Math.atan2(G,g*P);_=Math.sin(_*N)/G,a=Math.sin(a*N)/G}const w=a*P;if(l=l*_+h*w,u=u*_+v*w,f=f*_+S*w,d=d*_+M*w,_===1-a){const G=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=G,u*=G,f*=G,d*=G}}e[t]=l,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],v=s[o+2],S=s[o+3];return e[t]=a*S+f*d+l*v-u*h,e[t+1]=l*S+f*h+u*d-a*v,e[t+2]=u*S+f*v+a*h-l*d,e[t+3]=f*S-a*d-l*h-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),v=l(r/2),S=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*v*S,this._y=u*v*d-h*f*S,this._z=u*f*S+h*v*d,this._w=u*f*d-h*v*S;break;case"YXZ":this._x=h*f*d+u*v*S,this._y=u*v*d-h*f*S,this._z=u*f*S-h*v*d,this._w=u*f*d+h*v*S;break;case"ZXY":this._x=h*f*d-u*v*S,this._y=u*v*d+h*f*S,this._z=u*f*S+h*v*d,this._w=u*f*d-h*v*S;break;case"ZYX":this._x=h*f*d-u*v*S,this._y=u*v*d+h*f*S,this._z=u*f*S-h*v*d,this._w=u*f*d+h*v*S;break;case"YZX":this._x=h*f*d+u*v*S,this._y=u*v*d+h*f*S,this._z=u*f*S-h*v*d,this._w=u*f*d-h*v*S;break;case"XZY":this._x=h*f*d-u*v*S,this._y=u*v*d-h*f*S,this._z=u*f*S+h*v*d,this._w=u*f*d+h*v*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],f=t[6],d=t[10],h=i+a+d;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(f-l)*v,this._y=(s-u)*v,this._z=(o-r)*v}else if(i>a&&i>d){const v=2*Math.sqrt(1+i-a-d);this._w=(f-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+u)/v}else if(a>d){const v=2*Math.sqrt(1+a-i-d);this._w=(s-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+f)/v}else{const v=2*Math.sqrt(1+d-i-a);this._w=(o-r)/v,this._x=(s+u)/v,this._y=(l+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*r+t*this._y,this._z=v*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-t)*f)/u,h=Math.sin(t*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new V,Aa=new ir;class rr{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(s,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),lr.subVectors(this.max,Vi),ii.subVectors(e.a,Vi),ri.subVectors(e.b,Vi),si.subVectors(e.c,Vi),gn.subVectors(ri,ii),vn.subVectors(si,ri),In.subVectors(ii,si);let t=[0,-gn.z,gn.y,0,-vn.z,vn.y,0,-In.z,In.y,gn.z,0,-gn.x,vn.z,0,-vn.x,In.z,0,-In.x,-gn.y,gn.x,0,-vn.y,vn.x,0,-In.y,In.x,0];return!As(t,ii,ri,si,lr)||(t=[1,0,0,0,1,0,0,0,1],!As(t,ii,ri,si,lr))?!1:(ur.crossVectors(gn,vn),t=[ur.x,ur.y,ur.z],As(t,ii,ri,si,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new V,new V,new V,new V,new V,new V,new V,new V],Ht=new V,cr=new rr,ii=new V,ri=new V,si=new V,gn=new V,vn=new V,In=new V,Vi=new V,lr=new V,ur=new V,Dn=new V;function As(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Dn.fromArray(n,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),l=e.dot(Dn),u=t.dot(Dn),f=i.dot(Dn);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Hu=new rr,Gi=new V,Cs=new V;class na{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Hu.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Gi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Cs)),this.expandByPoint(Gi.copy(e.center).sub(Cs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new V,Rs=new V,hr=new V,xn=new V,Ps=new V,fr=new V,Ls=new V;class Vu{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rs.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Rs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=xn.dot(this.direction),l=-xn.dot(hr),u=xn.lengthSq(),f=Math.abs(1-o*o);let d,h,v,S;if(f>0)if(d=o*l-a,h=o*a-l,S=s*f,d>=0)if(h>=-S)if(h<=S){const M=1/f;d*=M,h*=M,v=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),v=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),v=-d*d+h*(h+2*l)+u;else h<=-S?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),v=-d*d+h*(h+2*l)+u):h<=S?(d=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),v=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),v=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rs).addScaledVector(hr,h),v}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const i=rn.dot(this.direction),r=rn.dot(rn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,r,s){Ps.subVectors(t,e),fr.subVectors(i,e),Ls.crossVectors(Ps,fr);let o=this.direction.dot(Ls),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const l=a*this.direction.dot(fr.crossVectors(xn,fr));if(l<0)return null;const u=a*this.direction.dot(Ps.cross(xn));if(u<0||l+u>o)return null;const f=-a*xn.dot(Ls);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,o,a,l,u,f,d,h,v,S,M,_){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,f,d,h,v,S,M,_)}set(e,t,i,r,s,o,a,l,u,f,d,h,v,S,M,_){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=f,g[10]=d,g[14]=h,g[3]=v,g[7]=S,g[11]=M,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/oi.setFromMatrixColumn(e,0).length(),s=1/oi.setFromMatrixColumn(e,1).length(),o=1/oi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,v=o*d,S=a*f,M=a*d;t[0]=l*f,t[4]=-l*d,t[8]=u,t[1]=v+S*u,t[5]=h-M*u,t[9]=-a*l,t[2]=M-h*u,t[6]=S+v*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,v=l*d,S=u*f,M=u*d;t[0]=h+M*a,t[4]=S*a-v,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=v*a-S,t[6]=M+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,v=l*d,S=u*f,M=u*d;t[0]=h-M*a,t[4]=-o*d,t[8]=S+v*a,t[1]=v+S*a,t[5]=o*f,t[9]=M-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,v=o*d,S=a*f,M=a*d;t[0]=l*f,t[4]=S*u-v,t[8]=h*u+M,t[1]=l*d,t[5]=M*u+h,t[9]=v*u-S,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,v=o*u,S=a*l,M=a*u;t[0]=l*f,t[4]=M-h*d,t[8]=S*d+v,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=v*d+S,t[10]=h-M*d}else if(e.order==="XZY"){const h=o*l,v=o*u,S=a*l,M=a*u;t[0]=l*f,t[4]=-d,t[8]=u*f,t[1]=h*d+M,t[5]=o*f,t[9]=v*d-S,t[2]=S*d-v,t[6]=a*f,t[10]=M*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gu,e,Wu)}lookAt(e,t,i){const r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),yn.crossVectors(i,Dt),yn.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),yn.crossVectors(i,Dt)),yn.normalize(),dr.crossVectors(Dt,yn),r[0]=yn.x,r[4]=dr.x,r[8]=Dt.x,r[1]=yn.y,r[5]=dr.y,r[9]=Dt.y,r[2]=yn.z,r[6]=dr.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],v=i[13],S=i[2],M=i[6],_=i[10],g=i[14],P=i[3],T=i[7],w=i[11],G=i[15],N=r[0],F=r[4],W=r[8],R=r[12],A=r[1],k=r[5],J=r[9],q=r[13],Q=r[2],Y=r[6],$=r[10],ue=r[14],K=r[3],ve=r[7],ye=r[11],Ae=r[15];return s[0]=o*N+a*A+l*Q+u*K,s[4]=o*F+a*k+l*Y+u*ve,s[8]=o*W+a*J+l*$+u*ye,s[12]=o*R+a*q+l*ue+u*Ae,s[1]=f*N+d*A+h*Q+v*K,s[5]=f*F+d*k+h*Y+v*ve,s[9]=f*W+d*J+h*$+v*ye,s[13]=f*R+d*q+h*ue+v*Ae,s[2]=S*N+M*A+_*Q+g*K,s[6]=S*F+M*k+_*Y+g*ve,s[10]=S*W+M*J+_*$+g*ye,s[14]=S*R+M*q+_*ue+g*Ae,s[3]=P*N+T*A+w*Q+G*K,s[7]=P*F+T*k+w*Y+G*ve,s[11]=P*W+T*J+w*$+G*ye,s[15]=P*R+T*q+w*ue+G*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],v=e[14],S=e[3],M=e[7],_=e[11],g=e[15];return S*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*v-i*l*v)+M*(+t*l*v-t*u*h+s*o*h-r*o*v+r*u*f-s*l*f)+_*(+t*u*d-t*a*v-s*o*d+i*o*v+s*a*f-i*u*f)+g*(-r*a*f-t*l*d+t*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],v=e[11],S=e[12],M=e[13],_=e[14],g=e[15],P=d*_*u-M*h*u+M*l*v-a*_*v-d*l*g+a*h*g,T=S*h*u-f*_*u-S*l*v+o*_*v+f*l*g-o*h*g,w=f*M*u-S*d*u+S*a*v-o*M*v-f*a*g+o*d*g,G=S*d*l-f*M*l-S*a*h+o*M*h+f*a*_-o*d*_,N=t*P+i*T+r*w+s*G;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=P*F,e[1]=(M*h*s-d*_*s-M*r*v+i*_*v+d*r*g-i*h*g)*F,e[2]=(a*_*s-M*l*s+M*r*u-i*_*u-a*r*g+i*l*g)*F,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*v-i*l*v)*F,e[4]=T*F,e[5]=(f*_*s-S*h*s+S*r*v-t*_*v-f*r*g+t*h*g)*F,e[6]=(S*l*s-o*_*s-S*r*u+t*_*u+o*r*g-t*l*g)*F,e[7]=(o*h*s-f*l*s+f*r*u-t*h*u-o*r*v+t*l*v)*F,e[8]=w*F,e[9]=(S*d*s-f*M*s-S*i*v+t*M*v+f*i*g-t*d*g)*F,e[10]=(o*M*s-S*a*s+S*i*u-t*M*u-o*i*g+t*a*g)*F,e[11]=(f*a*s-o*d*s-f*i*u+t*d*u+o*i*v-t*a*v)*F,e[12]=G*F,e[13]=(f*M*r-S*d*r+S*i*h-t*M*h-f*i*_+t*d*_)*F,e[14]=(S*a*r-o*M*r-S*i*l+t*M*l+o*i*_-t*a*_)*F,e[15]=(o*d*r-f*a*r+f*i*l-t*d*l-o*i*h+t*a*h)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,f=o+o,d=a+a,h=s*u,v=s*f,S=s*d,M=o*f,_=o*d,g=a*d,P=l*u,T=l*f,w=l*d,G=i.x,N=i.y,F=i.z;return r[0]=(1-(M+g))*G,r[1]=(v+w)*G,r[2]=(S-T)*G,r[3]=0,r[4]=(v-w)*N,r[5]=(1-(h+g))*N,r[6]=(_+P)*N,r[7]=0,r[8]=(S+T)*F,r[9]=(_-P)*F,r[10]=(1-(h+M))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=oi.set(r[0],r[1],r[2]).length();const o=oi.set(r[4],r[5],r[6]).length(),a=oi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const u=1/s,f=1/o,d=1/a;return Vt.elements[0]*=u,Vt.elements[1]*=u,Vt.elements[2]*=u,Vt.elements[4]*=f,Vt.elements[5]*=f,Vt.elements[6]*=f,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=hn){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let v,S;if(a===hn)v=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===$r)v=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=hn){const l=this.elements,u=1/(t-e),f=1/(i-r),d=1/(o-s),h=(t+e)*u,v=(i+r)*f;let S,M;if(a===hn)S=(o+s)*d,M=-2*d;else if(a===$r)S=s*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=M,l[14]=-S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const oi=new V,Vt=new ct,Gu=new V(0,0,0),Wu=new V(1,1,1),yn=new V,dr=new V,Dt=new V,Ca=new ct,Ra=new ir;class Zt{constructor(e=0,t=0,i=0,r=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ca.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ca,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xu=0;const Pa=new V,ai=new ir,sn=new ct,pr=new V,Wi=new V,qu=new V,Yu=new ir,La=new V(1,0,0),Ia=new V(0,1,0),Da=new V(0,0,1),Ua={type:"added"},Ku={type:"removed"},ci={type:"childadded",child:null},Is={type:"childremoved",child:null};class Et extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new V,t=new Zt,i=new ir,r=new V(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new He}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Ia,e)}rotateZ(e){return this.rotateOnAxis(Da,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Ia,e)}translateZ(e){return this.translateOnAxis(Da,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pr.copy(e):pr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Wi,pr,this.up):sn.lookAt(pr,Wi,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),ai.setFromRotationMatrix(sn),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ua),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ku),Is.child=e,this.dispatchEvent(Is),Is.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ua),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,qu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),v=o(e.animations),S=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),S.length>0&&(i.nodes=S)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Et.DEFAULT_UP=new V(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new V,on=new V,Ds=new V,an=new V,li=new V,ui=new V,Na=new V,Us=new V,Ns=new V,Fs=new V;class Jt{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Gt.subVectors(e,t),r.cross(Gt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Gt.subVectors(r,t),on.subVectors(i,t),Ds.subVectors(e,t);const o=Gt.dot(Gt),a=Gt.dot(on),l=Gt.dot(Ds),u=on.dot(on),f=on.dot(Ds),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,v=(u*l-a*f)*h,S=(o*f-a*l)*h;return s.set(1-v-S,S,v)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,an)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,an.x),l.addScaledVector(o,an.y),l.addScaledVector(a,an.z),l)}static isFrontFacing(e,t,i,r){return Gt.subVectors(i,t),on.subVectors(e,t),Gt.cross(on).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Gt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Jt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;li.subVectors(r,i),ui.subVectors(s,i),Us.subVectors(e,i);const l=li.dot(Us),u=ui.dot(Us);if(l<=0&&u<=0)return t.copy(i);Ns.subVectors(e,r);const f=li.dot(Ns),d=ui.dot(Ns);if(f>=0&&d<=f)return t.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(i).addScaledVector(li,o);Fs.subVectors(e,s);const v=li.dot(Fs),S=ui.dot(Fs);if(S>=0&&v<=S)return t.copy(s);const M=v*u-l*S;if(M<=0&&u>=0&&S<=0)return a=u/(u-S),t.copy(i).addScaledVector(ui,a);const _=f*S-v*d;if(_<=0&&d-f>=0&&v-S>=0)return Na.subVectors(s,r),a=(d-f)/(d-f+(v-S)),t.copy(r).addScaledVector(Na,a);const g=1/(_+M+h);return o=M*g,a=h*g,t.copy(i).addScaledVector(li,o).addScaledVector(ui,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Os(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Iu(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Os(o,s,e+1/3),this.g=Os(o,s,e),this.b=Os(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=Jc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return et.fromWorkingColorSpace(St.copy(this),e),Math.round(Mt(St.r*255,0,255))*65536+Math.round(Mt(St.g*255,0,255))*256+Math.round(Mt(St.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(St.copy(this),t);const i=St.r,r=St.g,s=St.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=qt){et.fromWorkingColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Sn),this.setHSL(Sn.h+e,Sn.s+t,Sn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(mr);const i=Ms(Sn.h,mr.h,t),r=Ms(Sn.s,mr.s,t),s=Ms(Sn.l,mr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ye;Ye.NAMES=Jc;let Ju=0;class sr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=Ei,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=ao,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==oo&&(i.blendSrc=this.blendSrc),this.blendDst!==ao&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ia extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new V,_r=new we;class jt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ki("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_r.fromBufferAttribute(this,t),_r.applyMatrix3(e),this.setXY(t,_r.x,_r.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=zi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),i=Rt(i,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),e}}class jc extends jt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $c extends jt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $t extends jt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ju=0;const Bt=new ct,Bs=new Et,hi=new V,Ut=new rr,Xi=new rr,vt=new V;class Pn extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?$c:jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return Bs.lookAt(e),Bs.updateMatrix(),this.applyMatrix4(Bs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ut.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Ut.min,Xi.min),Ut.expandByPoint(vt),vt.addVectors(Ut.max,Xi.max),Ut.expandByPoint(vt)):(Ut.expandByPoint(Xi.min),Ut.expandByPoint(Xi.max))}Ut.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)vt.fromBufferAttribute(a,u),l&&(hi.fromBufferAttribute(e,u),vt.add(hi)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let W=0;W<i.count;W++)a[W]=new V,l[W]=new V;const u=new V,f=new V,d=new V,h=new we,v=new we,S=new we,M=new V,_=new V;function g(W,R,A){u.fromBufferAttribute(i,W),f.fromBufferAttribute(i,R),d.fromBufferAttribute(i,A),h.fromBufferAttribute(s,W),v.fromBufferAttribute(s,R),S.fromBufferAttribute(s,A),f.sub(u),d.sub(u),v.sub(h),S.sub(h);const k=1/(v.x*S.y-S.x*v.y);isFinite(k)&&(M.copy(f).multiplyScalar(S.y).addScaledVector(d,-v.y).multiplyScalar(k),_.copy(d).multiplyScalar(v.x).addScaledVector(f,-S.x).multiplyScalar(k),a[W].add(M),a[R].add(M),a[A].add(M),l[W].add(_),l[R].add(_),l[A].add(_))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let W=0,R=P.length;W<R;++W){const A=P[W],k=A.start,J=A.count;for(let q=k,Q=k+J;q<Q;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const T=new V,w=new V,G=new V,N=new V;function F(W){G.fromBufferAttribute(r,W),N.copy(G);const R=a[W];T.copy(R),T.sub(G.multiplyScalar(G.dot(R))).normalize(),w.crossVectors(N,R);const k=w.dot(l[W])<0?-1:1;o.setXYZW(W,T.x,T.y,T.z,k)}for(let W=0,R=P.length;W<R;++W){const A=P[W],k=A.start,J=A.count;for(let q=k,Q=k+J;q<Q;q+=3)F(e.getX(q+0)),F(e.getX(q+1)),F(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,u=new V,f=new V,d=new V;if(e)for(let h=0,v=e.count;h<v;h+=3){const S=e.getX(h+0),M=e.getX(h+1),_=e.getX(h+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,_),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,S),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,_),a.add(f),l.add(f),u.add(f),i.setXYZ(S,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let h=0,v=t.count;h<v;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let v=0,S=0;for(let M=0,_=l.length;M<_;M++){a.isInterleavedBufferAttribute?v=l[M]*a.data.stride+a.offset:v=l[M]*f;for(let g=0;g<f;g++)h[S++]=u[v++]}return new jt(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],v=e(h,i);l.push(v)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const v=u[d];f.push(v.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,v=d.length;h<v;h++)f.push(d[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fa=new ct,Un=new Vu,gr=new na,Oa=new V,fi=new V,di=new V,pi=new V,ks=new V,vr=new V,xr=new we,yr=new we,Sr=new we,Ba=new V,ka=new V,za=new V,Mr=new V,Er=new V;class wt extends Et{constructor(e=new Pn,t=new ia){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(ks.fromBufferAttribute(d,e),o?vr.addScaledVector(ks,f):vr.addScaledVector(ks.sub(t),f))}t.add(vr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(gr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(gr,Oa)===null||Un.origin.distanceToSquared(Oa)>(e.far-e.near)**2))&&(Fa.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Fa),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,M=h.length;S<M;S++){const _=h[S],g=o[_.materialIndex],P=Math.max(_.start,v.start),T=Math.min(a.count,Math.min(_.start+_.count,v.start+v.count));for(let w=P,G=T;w<G;w+=3){const N=a.getX(w),F=a.getX(w+1),W=a.getX(w+2);r=Tr(this,g,e,i,u,f,d,N,F,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),M=Math.min(a.count,v.start+v.count);for(let _=S,g=M;_<g;_+=3){const P=a.getX(_),T=a.getX(_+1),w=a.getX(_+2);r=Tr(this,o,e,i,u,f,d,P,T,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let S=0,M=h.length;S<M;S++){const _=h[S],g=o[_.materialIndex],P=Math.max(_.start,v.start),T=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let w=P,G=T;w<G;w+=3){const N=w,F=w+1,W=w+2;r=Tr(this,g,e,i,u,f,d,N,F,W),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const S=Math.max(0,v.start),M=Math.min(l.count,v.start+v.count);for(let _=S,g=M;_<g;_+=3){const P=_,T=_+1,w=_+2;r=Tr(this,o,e,i,u,f,d,P,T,w),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function $u(n,e,t,i,r,s,o,a){let l;if(e.side===Pt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Cn,a),l===null)return null;Er.copy(a),Er.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Er);return u<t.near||u>t.far?null:{distance:u,point:Er.clone(),object:n}}function Tr(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,fi),n.getVertexPosition(l,di),n.getVertexPosition(u,pi);const f=$u(n,e,t,i,fi,di,pi,Mr);if(f){r&&(xr.fromBufferAttribute(r,a),yr.fromBufferAttribute(r,l),Sr.fromBufferAttribute(r,u),f.uv=Jt.getInterpolation(Mr,fi,di,pi,xr,yr,Sr,new we)),s&&(xr.fromBufferAttribute(s,a),yr.fromBufferAttribute(s,l),Sr.fromBufferAttribute(s,u),f.uv1=Jt.getInterpolation(Mr,fi,di,pi,xr,yr,Sr,new we)),o&&(Ba.fromBufferAttribute(o,a),ka.fromBufferAttribute(o,l),za.fromBufferAttribute(o,u),f.normal=Jt.getInterpolation(Mr,fi,di,pi,Ba,ka,za,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new V,materialIndex:0};Jt.getNormal(fi,di,pi,d.normal),f.face=d}return f}class Ln extends Pn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,v=0;S("z","y","x",-1,-1,i,t,e,o,s,0),S("z","y","x",1,-1,i,t,-e,o,s,1),S("x","z","y",1,1,e,i,t,r,o,2),S("x","z","y",1,-1,e,i,-t,r,o,3),S("x","y","z",1,-1,e,t,i,r,s,4),S("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function S(M,_,g,P,T,w,G,N,F,W,R){const A=w/F,k=G/W,J=w/2,q=G/2,Q=N/2,Y=F+1,$=W+1;let ue=0,K=0;const ve=new V;for(let ye=0;ye<$;ye++){const Ae=ye*k-q;for(let Ge=0;Ge<Y;Ge++){const Ze=Ge*A-J;ve[M]=Ze*P,ve[_]=Ae*T,ve[g]=Q,u.push(ve.x,ve.y,ve.z),ve[M]=0,ve[_]=0,ve[g]=N>0?1:-1,f.push(ve.x,ve.y,ve.z),d.push(Ge/F),d.push(1-ye/W),ue+=1}}for(let ye=0;ye<W;ye++)for(let Ae=0;Ae<F;Ae++){const Ge=h+Ae+Y*ye,Ze=h+Ae+Y*(ye+1),ee=h+(Ae+1)+Y*(ye+1),fe=h+(Ae+1)+Y*ye;l.push(Ge,Ze,fe),l.push(Ze,ee,fe),K+=6}a.addGroup(v,K,R),v+=K,h+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=Ii(n[t]);for(const r in i)e[r]=i[r]}return e}function Zu(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Qu={clone:Ii,merge:bt};var eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eh,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qc extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new V,Ha=new we,Va=new we;class Nt extends Qc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Ha,Va),t.subVectors(Va,Ha)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,_i=1;class nh extends Et{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(mi,_i,e,t);r.layers=this.layers,this.add(r);const s=new Nt(mi,_i,e,t);s.layers=this.layers,this.add(s);const o=new Nt(mi,_i,e,t);o.layers=this.layers,this.add(o);const a=new Nt(mi,_i,e,t);a.layers=this.layers,this.add(a);const l=new Nt(mi,_i,e,t);l.layers=this.layers,this.add(l);const u=new Nt(mi,_i,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===hn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,h,v),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class el extends Lt{constructor(e,t,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ih extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new el(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ln(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Pt,blending:bn});s.uniforms.tEquirect.value=t;const o=new wt(r,s),a=t.minFilter;return t.minFilter===Wn&&(t.minFilter=Wt),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const zs=new V,rh=new V,sh=new He;class kn{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=zs.subVectors(i,t).cross(rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sh.getNormalMatrix(e),r=this.coplanarPoint(zs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new na,br=new V;class ra{constructor(e=new kn,t=new kn,i=new kn,r=new kn,s=new kn,o=new kn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=hn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],v=r[8],S=r[9],M=r[10],_=r[11],g=r[12],P=r[13],T=r[14],w=r[15];if(i[0].setComponents(l-s,h-u,_-v,w-g).normalize(),i[1].setComponents(l+s,h+u,_+v,w+g).normalize(),i[2].setComponents(l+o,h+f,_+S,w+P).normalize(),i[3].setComponents(l-o,h-f,_-S,w-P).normalize(),i[4].setComponents(l-a,h-d,_-M,w-T).normalize(),t===hn)i[5].setComponents(l+a,h+d,_+M,w+T).normalize();else if(t===$r)i[5].setComponents(a,d,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(br.x=r.normal.x>0?e.max.x:e.min.x,br.y=r.normal.y>0?e.max.y:e.min.y,br.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(br)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function tl(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function oh(n){const e=new WeakMap;function t(a,l){const u=a.array,f=a.usage,d=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,f),a.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const f=l.array,d=l._updateRange,h=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&h.length===0&&n.bufferSubData(u,0,f),h.length!==0){for(let v=0,S=h.length;v<S;v++){const M=h[v];n.bufferSubData(u,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Fi extends Pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=t/l,v=[],S=[],M=[],_=[];for(let g=0;g<f;g++){const P=g*h-o;for(let T=0;T<u;T++){const w=T*d-s;S.push(w,-P,0),M.push(0,0,1),_.push(T/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let P=0;P<a;P++){const T=P+u*g,w=P+u*(g+1),G=P+1+u*(g+1),N=P+1+u*g;v.push(T,w,N),v.push(w,G,N)}this.setIndex(v),this.setAttribute("position",new $t(S,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.widthSegments,e.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
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
#endif`,lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dh=`#ifdef USE_AOMAP
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
#endif`,ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mh=`#ifdef USE_BATCHING
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
#endif`,_h=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yh=`#ifdef USE_IRIDESCENCE
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
#endif`,Sh=`#ifdef USE_BUMPMAP
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
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ph=`#define PI 3.141592653589793
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
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ih=`vec3 transformedNormal = objectNormal;
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
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kh=`#ifdef USE_GRADIENTMAP
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
}`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zh=`uniform bool receiveShadow;
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
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,of=`struct PhysicalMaterial {
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
}`,af=`
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`#ifdef USE_MORPHTARGETS
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
#endif`,Tf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pf=`#ifdef USE_NORMALMAP
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
#endif`,Lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,If=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jf=`#ifdef USE_SKINNING
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
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,td=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#ifdef USE_TRANSMISSION
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,od=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ad=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cd=`uniform sampler2D t2D;
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
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dd=`#include <common>
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
}`,pd=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,md=`#define DISTANCE
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
}`,_d=`#define DISTANCE
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
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`uniform float scale;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Sd=`#include <common>
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
}`,Md=`uniform vec3 diffuse;
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
}`,Ed=`#define LAMBERT
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
}`,Td=`#define LAMBERT
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
}`,bd=`#define MATCAP
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
}`,wd=`#define MATCAP
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
}`,Ad=`#define NORMAL
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
}`,Cd=`#define NORMAL
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
}`,Rd=`#define PHONG
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
}`,Pd=`#define PHONG
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
}`,Ld=`#define STANDARD
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
}`,Id=`#define STANDARD
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
}`,Dd=`#define TOON
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
}`,Ud=`#define TOON
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
}`,Nd=`uniform float size;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,Bd=`uniform vec3 color;
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
}`,kd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,zd=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:ah,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:uh,alphatest_fragment:hh,alphatest_pars_fragment:fh,aomap_fragment:dh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:_h,begin_vertex:gh,beginnormal_vertex:vh,bsdfs:xh,iridescence_fragment:yh,bumpmap_pars_fragment:Sh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:Th,clipping_planes_vertex:bh,color_fragment:wh,color_pars_fragment:Ah,color_pars_vertex:Ch,color_vertex:Rh,common:Ph,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Dh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Bh,envmap_fragment:kh,envmap_common_pars_fragment:zh,envmap_pars_fragment:Hh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:Qh,envmap_vertex:Gh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:$h,lights_pars_begin:Zh,lights_toon_fragment:ef,lights_toon_pars_fragment:tf,lights_phong_fragment:nf,lights_phong_pars_fragment:rf,lights_physical_fragment:sf,lights_physical_pars_fragment:of,lights_fragment_begin:af,lights_fragment_maps:cf,lights_fragment_end:lf,logdepthbuf_fragment:uf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:ff,logdepthbuf_vertex:df,map_fragment:pf,map_pars_fragment:mf,map_particle_fragment:_f,map_particle_pars_fragment:gf,metalnessmap_fragment:vf,metalnessmap_pars_fragment:xf,morphinstance_vertex:yf,morphcolor_vertex:Sf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Ef,morphtarget_vertex:Tf,normal_fragment_begin:bf,normal_fragment_maps:wf,normal_pars_fragment:Af,normal_pars_vertex:Cf,normal_vertex:Rf,normalmap_pars_fragment:Pf,clearcoat_normal_fragment_begin:Lf,clearcoat_normal_fragment_maps:If,clearcoat_pars_fragment:Df,iridescence_pars_fragment:Uf,opaque_fragment:Nf,packing:Ff,premultiplied_alpha_fragment:Of,project_vertex:Bf,dithering_fragment:kf,dithering_pars_fragment:zf,roughnessmap_fragment:Hf,roughnessmap_pars_fragment:Vf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Wf,shadowmap_vertex:Xf,shadowmask_pars_fragment:qf,skinbase_vertex:Yf,skinning_pars_vertex:Kf,skinning_vertex:Jf,skinnormal_vertex:jf,specularmap_fragment:$f,specularmap_pars_fragment:Zf,tonemapping_fragment:Qf,tonemapping_pars_fragment:ed,transmission_fragment:td,transmission_pars_fragment:nd,uv_pars_fragment:id,uv_pars_vertex:rd,uv_vertex:sd,worldpos_vertex:od,background_vert:ad,background_frag:cd,backgroundCube_vert:ld,backgroundCube_frag:ud,cube_vert:hd,cube_frag:fd,depth_vert:dd,depth_frag:pd,distanceRGBA_vert:md,distanceRGBA_frag:_d,equirect_vert:gd,equirect_frag:vd,linedashed_vert:xd,linedashed_frag:yd,meshbasic_vert:Sd,meshbasic_frag:Md,meshlambert_vert:Ed,meshlambert_frag:Td,meshmatcap_vert:bd,meshmatcap_frag:wd,meshnormal_vert:Ad,meshnormal_frag:Cd,meshphong_vert:Rd,meshphong_frag:Pd,meshphysical_vert:Ld,meshphysical_frag:Id,meshtoon_vert:Dd,meshtoon_frag:Ud,points_vert:Nd,points_frag:Fd,shadow_vert:Od,shadow_frag:Bd,sprite_vert:kd,sprite_frag:zd},_e={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Yt={basic:{uniforms:bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:bt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:bt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:bt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:bt([_e.points,_e.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:bt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:bt([_e.common,_e.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:bt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:bt([_e.sprite,_e.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:bt([_e.common,_e.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:bt([_e.lights,_e.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Yt.physical={uniforms:bt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const wr={r:0,b:0,g:0},Fn=new Zt,Hd=new ct;function Vd(n,e,t,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,u,f,d=null,h=0,v=null;function S(P){let T=P.isScene===!0?P.background:null;return T&&T.isTexture&&(T=(P.backgroundBlurriness>0?t:e).get(T)),T}function M(P){let T=!1;const w=S(P);w===null?g(a,l):w&&w.isColor&&(g(w,1),T=!0);const G=n.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,o):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(P,T){const w=S(T);w&&(w.isCubeTexture||w.mapping===ts)?(f===void 0&&(f=new wt(new Ln(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Ii(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(G,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Fn.copy(T.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Hd.makeRotationFromEuler(Fn)),f.material.toneMapped=et.getTransfer(w.colorSpace)!==rt,(d!==w||h!==w.version||v!==n.toneMapping)&&(f.material.needsUpdate=!0,d=w,h=w.version,v=n.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new wt(new Fi(2,2),new pn({name:"BackgroundMaterial",uniforms:Ii(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,u.material.toneMapped=et.getTransfer(w.colorSpace)!==rt,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||h!==w.version||v!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,h=w.version,v=n.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null))}function g(P,T){P.getRGB(wr,Zc(n)),i.buffers.color.setClear(wr.r,wr.g,wr.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(P,T=1){a.set(P),l=T,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(P){l=P,g(a,l)},render:M,addToRenderList:_}}function Gd(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(A,k,J,q,Q){let Y=!1;const $=d(q,J,k);s!==$&&(s=$,u(s.object)),Y=v(A,q,J,Q),Y&&S(A,q,J,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,w(A,k,J,q),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function u(A){return n.bindVertexArray(A)}function f(A){return n.deleteVertexArray(A)}function d(A,k,J){const q=J.wireframe===!0;let Q=i[A.id];Q===void 0&&(Q={},i[A.id]=Q);let Y=Q[k.id];Y===void 0&&(Y={},Q[k.id]=Y);let $=Y[q];return $===void 0&&($=h(l()),Y[q]=$),$}function h(A){const k=[],J=[],q=[];for(let Q=0;Q<t;Q++)k[Q]=0,J[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:q,object:A,attributes:{},index:null}}function v(A,k,J,q){const Q=s.attributes,Y=k.attributes;let $=0;const ue=J.getAttributes();for(const K in ue)if(ue[K].location>=0){const ye=Q[K];let Ae=Y[K];if(Ae===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(Ae=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(Ae=A.instanceColor)),ye===void 0||ye.attribute!==Ae||Ae&&ye.data!==Ae.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function S(A,k,J,q){const Q={},Y=k.attributes;let $=0;const ue=J.getAttributes();for(const K in ue)if(ue[K].location>=0){let ye=Y[K];ye===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(ye=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(ye=A.instanceColor));const Ae={};Ae.attribute=ye,ye&&ye.data&&(Ae.data=ye.data),Q[K]=Ae,$++}s.attributes=Q,s.attributesNum=$,s.index=q}function M(){const A=s.newAttributes;for(let k=0,J=A.length;k<J;k++)A[k]=0}function _(A){g(A,0)}function g(A,k){const J=s.newAttributes,q=s.enabledAttributes,Q=s.attributeDivisors;J[A]=1,q[A]===0&&(n.enableVertexAttribArray(A),q[A]=1),Q[A]!==k&&(n.vertexAttribDivisor(A,k),Q[A]=k)}function P(){const A=s.newAttributes,k=s.enabledAttributes;for(let J=0,q=k.length;J<q;J++)k[J]!==A[J]&&(n.disableVertexAttribArray(J),k[J]=0)}function T(A,k,J,q,Q,Y,$){$===!0?n.vertexAttribIPointer(A,k,J,Q,Y):n.vertexAttribPointer(A,k,J,q,Q,Y)}function w(A,k,J,q){M();const Q=q.attributes,Y=J.getAttributes(),$=k.defaultAttributeValues;for(const ue in Y){const K=Y[ue];if(K.location>=0){let ve=Q[ue];if(ve===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(ve=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(ve=A.instanceColor)),ve!==void 0){const ye=ve.normalized,Ae=ve.itemSize,Ge=e.get(ve);if(Ge===void 0)continue;const Ze=Ge.buffer,ee=Ge.type,fe=Ge.bytesPerElement,Ee=ee===n.INT||ee===n.UNSIGNED_INT||ve.gpuType===Jo;if(ve.isInterleavedBufferAttribute){const xe=ve.data,Le=xe.stride,Ne=ve.offset;if(xe.isInstancedInterleavedBuffer){for(let Be=0;Be<K.locationSize;Be++)g(K.location+Be,xe.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Be=0;Be<K.locationSize;Be++)_(K.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Be=0;Be<K.locationSize;Be++)T(K.location+Be,Ae/K.locationSize,ee,ye,Le*fe,(Ne+Ae/K.locationSize*Be)*fe,Ee)}else{if(ve.isInstancedBufferAttribute){for(let xe=0;xe<K.locationSize;xe++)g(K.location+xe,ve.meshPerAttribute);A.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let xe=0;xe<K.locationSize;xe++)_(K.location+xe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let xe=0;xe<K.locationSize;xe++)T(K.location+xe,Ae/K.locationSize,ee,ye,Ae*fe,Ae/K.locationSize*xe*fe,Ee)}}else if($!==void 0){const ye=$[ue];if(ye!==void 0)switch(ye.length){case 2:n.vertexAttrib2fv(K.location,ye);break;case 3:n.vertexAttrib3fv(K.location,ye);break;case 4:n.vertexAttrib4fv(K.location,ye);break;default:n.vertexAttrib1fv(K.location,ye)}}}}P()}function G(){W();for(const A in i){const k=i[A];for(const J in k){const q=k[J];for(const Q in q)f(q[Q].object),delete q[Q];delete k[J]}delete i[A]}}function N(A){if(i[A.id]===void 0)return;const k=i[A.id];for(const J in k){const q=k[J];for(const Q in q)f(q[Q].object),delete q[Q];delete k[J]}delete i[A.id]}function F(A){for(const k in i){const J=i[k];if(J[A.id]===void 0)continue;const q=J[A.id];for(const Q in q)f(q[Q].object),delete q[Q];delete J[A.id]}}function W(){R(),o=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:W,resetDefaultState:R,dispose:G,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:_,disableUnusedAttributes:P}}function Wd(n,e,t){let i;function r(u){i=u}function s(u,f){n.drawArrays(i,u,f),t.update(f,i,1)}function o(u,f,d){d!==0&&(n.drawArraysInstanced(i,u,f,d),t.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let v=0;for(let S=0;S<d;S++)v+=f[S];t.update(v,i,1)}function l(u,f,d,h){if(d===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<u.length;S++)o(u[S],f[S],h[S]);else{v.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let S=0;for(let M=0;M<d;M++)S+=f[M];for(let M=0;M<h.length;M++)t.update(S,i,h[M])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xd(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Xt&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const F=N===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==dn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==un&&!F)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),M=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,G=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:g,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:w,maxSamples:G}}function qd(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new kn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const v=d.length!==0||h||i!==0||r;return r=h,i=d.length,v},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,v){const S=d.clippingPlanes,M=d.clipIntersection,_=d.clipShadows,g=n.get(d);if(!r||S===null||S.length===0||s&&!_)s?f(null):u();else{const P=s?0:i,T=P*4;let w=g.clippingState||null;l.value=w,w=f(S,h,T,v);for(let G=0;G!==T;++G)w[G]=t[G];g.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=P}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,v,S){const M=d!==null?d.length:0;let _=null;if(M!==0){if(_=l.value,S!==!0||_===null){const g=v+M*4,P=h.matrixWorldInverse;a.getNormalMatrix(P),(_===null||_.length<g)&&(_=new Float32Array(g));for(let T=0,w=v;T!==M;++T,w+=4)o.copy(d[T]).applyMatrix4(P,a),o.normal.toArray(_,w),_[w+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function Yd(n){let e=new WeakMap;function t(o,a){return a===co?o.mapping=Ci:a===lo&&(o.mapping=Ri),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===co||a===lo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ih(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class nl extends Qc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const yi=4,Ga=[.125,.215,.35,.446,.526,.582],Vn=20,Hs=new nl,Wa=new Ye;let Vs=null,Gs=0,Ws=0,Xs=!1;const zn=(1+Math.sqrt(5))/2,gi=1/zn,Xa=[new V(-zn,gi,0),new V(zn,gi,0),new V(-gi,0,zn),new V(gi,0,zn),new V(0,zn,-gi),new V(0,zn,gi),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ka(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs,Gs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget(),Gs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:nr,format:Xt,colorSpace:Rn,depthBuffer:!1},r=Ya(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ya(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(s)),this._blurMaterial=Jd(s,e,t)}return r}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,r){const a=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Wa),f.toneMapping=wn,f.autoClear=!1;const v=new ia({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),S=new wt(new Ln,v);let M=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,M=!0):(v.color.copy(Wa),M=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):P===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const T=this._cubeSize;Ar(r,P*T,g>2?T:0,T,T),f.setRenderTarget(r),M&&f.render(S,a),f.render(e,a)}S.geometry.dispose(),S.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ci||e.mapping===Ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ka());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ar(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xa[(r-s-1)%Xa.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new wt(this._lodPlanes[r],u),h=u.uniforms,v=this._sizeLods[i]-1,S=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Vn-1),M=s/S,_=isFinite(s)?1+Math.floor(f*M):Vn;_>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Vn}`);const g=[];let P=0;for(let F=0;F<Vn;++F){const W=F/M,R=Math.exp(-W*W/2);g.push(R),F===0?P+=R:F<_&&(P+=2*R)}for(let F=0;F<g.length;F++)g[F]=g[F]/P;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=S,h.mipInt.value=T-i;const w=this._sizeLods[r],G=3*w*(r>T-yi?r-T+yi:0),N=4*(this._cubeSize-w);Ar(t,G,N,3*w,2*w),l.setRenderTarget(t),l.render(d,Hs)}}function Kd(n){const e=[],t=[],i=[];let r=n;const s=n-yi+1+Ga.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-yi?l=Ga[o-n+yi-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],v=6,S=6,M=3,_=2,g=1,P=new Float32Array(M*S*v),T=new Float32Array(_*S*v),w=new Float32Array(g*S*v);for(let N=0;N<v;N++){const F=N%3*2/3-1,W=N>2?0:-1,R=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];P.set(R,M*S*N),T.set(h,_*S*N);const A=[N,N,N,N,N,N];w.set(A,g*S*N)}const G=new Pn;G.setAttribute("position",new jt(P,M)),G.setAttribute("uv",new jt(T,_)),G.setAttribute("faceIndex",new jt(w,g)),e.push(G),r>yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ya(n,e,t){const i=new qn(n,e,t);return i.texture.mapping=ts,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Jd(n,e,t){const i=new Float32Array(Vn),r=new V(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ka(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ja(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function sa(){return`

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
	`}function jd(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===co||l===lo,f=l===Ci||l===Ri;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new qa(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const v=a.image;return u&&v&&v.height>0||f&&v&&r(v)?(t===null&&(t=new qa(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function $d(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ki("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Zd(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const S in h.attributes)e.remove(h.attributes[S]);for(const S in h.morphAttributes){const M=h.morphAttributes[S];for(let _=0,g=M.length;_<g;_++)e.remove(M[_])}h.removeEventListener("dispose",o),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const S in h)e.update(h[S],n.ARRAY_BUFFER);const v=d.morphAttributes;for(const S in v){const M=v[S];for(let _=0,g=M.length;_<g;_++)e.update(M[_],n.ARRAY_BUFFER)}}function u(d){const h=[],v=d.index,S=d.attributes.position;let M=0;if(v!==null){const P=v.array;M=v.version;for(let T=0,w=P.length;T<w;T+=3){const G=P[T+0],N=P[T+1],F=P[T+2];h.push(G,N,N,F,F,G)}}else if(S!==void 0){const P=S.array;M=S.version;for(let T=0,w=P.length/3-1;T<w;T+=3){const G=T+0,N=T+1,F=T+2;h.push(G,N,N,F,F,G)}}else return;const _=new(Xc(h)?$c:jc)(h,1);_.version=M;const g=s.get(d);g&&e.remove(g),s.set(d,_)}function f(d){const h=s.get(d);if(h){const v=d.index;v!==null&&h.version<v.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Qd(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,v){n.drawElements(i,v,s,h*o),t.update(v,i,1)}function u(h,v,S){S!==0&&(n.drawElementsInstanced(i,v,s,h*o,S),t.update(v,i,S))}function f(h,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,s,h,0,S);let _=0;for(let g=0;g<S;g++)_+=v[g];t.update(_,i,1)}function d(h,v,S,M){if(S===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<h.length;g++)u(h[g]/o,v[g],M[g]);else{_.multiDrawElementsInstancedWEBGL(i,v,0,s,h,0,M,0,S);let g=0;for(let P=0;P<S;P++)g+=v[P];for(let P=0;P<M.length;P++)t.update(g,i,M[P])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function ep(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tp(n,e,t){const i=new WeakMap,r=new st;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let R=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),S===!0&&(T=2),M===!0&&(T=3);let w=a.attributes.position.count*T,G=1;w>e.maxTextureSize&&(G=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*G*4*d),F=new Yc(N,w,G,d);F.type=un,F.needsUpdate=!0;const W=T*4;for(let A=0;A<d;A++){const k=_[A],J=g[A],q=P[A],Q=w*G*4*A;for(let Y=0;Y<k.count;Y++){const $=Y*W;v===!0&&(r.fromBufferAttribute(k,Y),N[Q+$+0]=r.x,N[Q+$+1]=r.y,N[Q+$+2]=r.z,N[Q+$+3]=0),S===!0&&(r.fromBufferAttribute(J,Y),N[Q+$+4]=r.x,N[Q+$+5]=r.y,N[Q+$+6]=r.z,N[Q+$+7]=0),M===!0&&(r.fromBufferAttribute(q,Y),N[Q+$+8]=r.x,N[Q+$+9]=r.y,N[Q+$+10]=r.z,N[Q+$+11]=q.itemSize===4?r.w:1)}}h={count:d,texture:F,size:new we(w,G)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let M=0;M<u.length;M++)v+=u[M];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function np(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class il extends Lt{constructor(e,t,i,r,s,o,a,l,u,f=Ti){if(f!==Ti&&f!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ti&&(i=Xn),i===void 0&&f===Li&&(i=Pi),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const rl=new Lt,ja=new il(1,1),sl=new Yc,ol=new zu,al=new el,$a=[],Za=[],Qa=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function Oi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=$a[r];if(s===void 0&&(s=new Float32Array(r),$a[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=Za[e];t===void 0&&(t=new Int32Array(e),Za[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ip(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function sp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function op(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function ap(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,i))return;tc.set(i),n.uniformMatrix2fv(this.addr,!1,tc),_t(t,i)}}function cp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,i))return;ec.set(i),n.uniformMatrix3fv(this.addr,!1,ec),_t(t,i)}}function lp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,i))return;Qa.set(i),n.uniformMatrix4fv(this.addr,!1,Qa),_t(t,i)}}function up(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function fp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function dp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function pp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function _p(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function gp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function vp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ja.compareFunction=Wc,s=ja):s=rl,t.setTexture2D(e||s,r)}function xp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ol,r)}function yp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||al,r)}function Sp(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sl,r)}function Mp(n){switch(n){case 5126:return ip;case 35664:return rp;case 35665:return sp;case 35666:return op;case 35674:return ap;case 35675:return cp;case 35676:return lp;case 5124:case 35670:return up;case 35667:case 35671:return hp;case 35668:case 35672:return fp;case 35669:case 35673:return dp;case 5125:return pp;case 36294:return mp;case 36295:return _p;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return vp;case 35679:case 36299:case 36307:return xp;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return Sp}}function Ep(n,e){n.uniform1fv(this.addr,e)}function Tp(n,e){const t=Oi(e,this.size,2);n.uniform2fv(this.addr,t)}function bp(n,e){const t=Oi(e,this.size,3);n.uniform3fv(this.addr,t)}function wp(n,e){const t=Oi(e,this.size,4);n.uniform4fv(this.addr,t)}function Ap(n,e){const t=Oi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Cp(n,e){const t=Oi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Rp(n,e){const t=Oi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Pp(n,e){n.uniform1iv(this.addr,e)}function Lp(n,e){n.uniform2iv(this.addr,e)}function Ip(n,e){n.uniform3iv(this.addr,e)}function Dp(n,e){n.uniform4iv(this.addr,e)}function Up(n,e){n.uniform1uiv(this.addr,e)}function Np(n,e){n.uniform2uiv(this.addr,e)}function Fp(n,e){n.uniform3uiv(this.addr,e)}function Op(n,e){n.uniform4uiv(this.addr,e)}function Bp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||rl,s[o])}function kp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ol,s[o])}function zp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||al,s[o])}function Hp(n,e,t){const i=this.cache,r=e.length,s=is(t,r);mt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||sl,s[o])}function Vp(n){switch(n){case 5126:return Ep;case 35664:return Tp;case 35665:return bp;case 35666:return wp;case 35674:return Ap;case 35675:return Cp;case 35676:return Rp;case 5124:case 35670:return Pp;case 35667:case 35671:return Lp;case 35668:case 35672:return Ip;case 35669:case 35673:return Dp;case 5125:return Up;case 36294:return Np;case 36295:return Fp;case 36296:return Op;case 35678:case 36198:case 36298:case 36306:case 35682:return Bp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Hp}}class Gp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mp(t.type)}}class Wp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vp(t.type)}}class Xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const qs=/(\w+)(\])?(\[|\.)?/g;function nc(n,e){n.seq.push(e),n.map[e.id]=e}function qp(n,e,t){const i=n.name,r=i.length;for(qs.lastIndex=0;;){const s=qs.exec(i),o=qs.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){nc(t,u===void 0?new Gp(a,n,e):new Wp(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Xp(a),nc(t,d)),t=d}}}class Vr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);qp(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Yp=37297;let Kp=0;function Jp(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function jp(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===jr&&t===Jr?i="LinearDisplayP3ToLinearSRGB":e===Jr&&t===jr&&(i="LinearSRGBToLinearDisplayP3"),n){case Rn:case ns:return[i,"LinearTransferOETF"];case qt:case ta:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Jp(n.getShaderSource(e),o)}else return r}function $p(n,e){const t=jp(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zp(n,e){let t;switch(e){case pu:t="Linear";break;case mu:t="Reinhard";break;case _u:t="OptimizedCineon";break;case gu:t="ACESFilmic";break;case xu:t="AgX";break;case yu:t="Neutral";break;case vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cr=new V;function Qp(){et.getLuminanceCoefficients(Cr);const n=Cr.x.toFixed(4),e=Cr.y.toFixed(4),t=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function em(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function tm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Yi(n){return n!==""}function sc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function oc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const im=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(n){return n.replace(im,sm)}const rm=new Map;function sm(n,e){let t=ze[e];if(t===void 0){const i=rm.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(n){return n.replace(om,am)}function am(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function lm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ci:case Ri:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function um(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function hm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case fu:e="ENVMAP_BLENDING_MIX";break;case du:e="ENVMAP_BLENDING_ADD";break}return e}function fm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dm(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cm(t),u=lm(t),f=um(t),d=hm(t),h=fm(t),v=em(t),S=tm(s),M=r.createProgram();let _,g,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Yi).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Yi).join(`
`),g.length>0&&(g+=`
`)):(_=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),g=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?ze.tonemapping_pars_fragment:"",t.toneMapping!==wn?Zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),Qp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),o=zo(o),o=sc(o,t),o=oc(o,t),a=zo(a),a=sc(a,t),a=oc(a,t),o=ac(o),a=ac(a),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const T=P+_+o,w=P+g+a,G=ic(r,r.VERTEX_SHADER,T),N=ic(r,r.FRAGMENT_SHADER,w);r.attachShader(M,G),r.attachShader(M,N),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function F(k){if(n.debug.checkShaderErrors){const J=r.getProgramInfoLog(M).trim(),q=r.getShaderInfoLog(G).trim(),Q=r.getShaderInfoLog(N).trim();let Y=!0,$=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,G,N);else{const ue=rc(r,G,"vertex"),K=rc(r,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+ue+`
`+K)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(q===""||Q==="")&&($=!1);$&&(k.diagnostics={runnable:Y,programLog:J,vertexShader:{log:q,prefix:_},fragmentShader:{log:Q,prefix:g}})}r.deleteShader(G),r.deleteShader(N),W=new Vr(r,M),R=nm(r,M)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(M,Yp)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kp++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=G,this.fragmentShader=N,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _m(e),t.set(e,i)),i}}class _m{constructor(e){this.id=pm++,this.code=e,this.usedTimes=0}}function gm(n,e,t,i,r,s,o){const a=new Kc,l=new mm,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(R){return u.add(R),R===0?"uv":`uv${R}`}function _(R,A,k,J,q){const Q=J.fog,Y=q.geometry,$=R.isMeshStandardMaterial?J.environment:null,ue=(R.isMeshStandardMaterial?t:e).get(R.envMap||$),K=ue&&ue.mapping===ts?ue.image.height:null,ve=S[R.type];R.precision!==null&&(v=r.getMaxPrecision(R.precision),v!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",v,"instead."));const ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ae=ye!==void 0?ye.length:0;let Ge=0;Y.morphAttributes.position!==void 0&&(Ge=1),Y.morphAttributes.normal!==void 0&&(Ge=2),Y.morphAttributes.color!==void 0&&(Ge=3);let Ze,ee,fe,Ee;if(ve){const Ke=Yt[ve];Ze=Ke.vertexShader,ee=Ke.fragmentShader}else Ze=R.vertexShader,ee=R.fragmentShader,l.update(R),fe=l.getVertexShaderID(R),Ee=l.getFragmentShaderID(R);const xe=n.getRenderTarget(),Le=q.isInstancedMesh===!0,Ne=q.isBatchedMesh===!0,Be=!!R.map,nt=!!R.matcap,U=!!ue,lt=!!R.aoMap,je=!!R.lightMap,$e=!!R.bumpMap,Te=!!R.normalMap,ot=!!R.displacementMap,Ue=!!R.emissiveMap,Fe=!!R.metalnessMap,L=!!R.roughnessMap,E=R.anisotropy>0,X=R.clearcoat>0,se=R.dispersion>0,le=R.iridescence>0,re=R.sheen>0,Pe=R.transmission>0,me=E&&!!R.anisotropyMap,oe=X&&!!R.clearcoatMap,Oe=X&&!!R.clearcoatNormalMap,ae=X&&!!R.clearcoatRoughnessMap,ge=le&&!!R.iridescenceMap,We=le&&!!R.iridescenceThicknessMap,he=re&&!!R.sheenColorMap,m=re&&!!R.sheenRoughnessMap,Se=!!R.specularMap,ke=!!R.specularColorMap,it=!!R.specularIntensityMap,H=Pe&&!!R.transmissionMap,de=Pe&&!!R.thicknessMap,te=!!R.gradientMap,ne=!!R.alphaMap,pe=R.alphaTest>0,Ie=!!R.alphaHash,qe=!!R.extensions;let ut=wn;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ut=n.toneMapping);const pt={shaderID:ve,shaderType:R.type,shaderName:R.name,vertexShader:Ze,fragmentShader:ee,defines:R.defines,customVertexShaderID:fe,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:v,batching:Ne,batchingColor:Ne&&q._colorsTexture!==null,instancing:Le,instancingColor:Le&&q.instanceColor!==null,instancingMorph:Le&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Rn,alphaToCoverage:!!R.alphaToCoverage,map:Be,matcap:nt,envMap:U,envMapMode:U&&ue.mapping,envMapCubeUVHeight:K,aoMap:lt,lightMap:je,bumpMap:$e,normalMap:Te,displacementMap:h&&ot,emissiveMap:Ue,normalMapObjectSpace:Te&&R.normalMapType===Tu,normalMapTangentSpace:Te&&R.normalMapType===Gc,metalnessMap:Fe,roughnessMap:L,anisotropy:E,anisotropyMap:me,clearcoat:X,clearcoatMap:oe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ae,dispersion:se,iridescence:le,iridescenceMap:ge,iridescenceThicknessMap:We,sheen:re,sheenColorMap:he,sheenRoughnessMap:m,specularMap:Se,specularColorMap:ke,specularIntensityMap:it,transmission:Pe,transmissionMap:H,thicknessMap:de,gradientMap:te,opaque:R.transparent===!1&&R.blending===Ei&&R.alphaToCoverage===!1,alphaMap:ne,alphaTest:pe,alphaHash:Ie,combine:R.combine,mapUv:Be&&M(R.map.channel),aoMapUv:lt&&M(R.aoMap.channel),lightMapUv:je&&M(R.lightMap.channel),bumpMapUv:$e&&M(R.bumpMap.channel),normalMapUv:Te&&M(R.normalMap.channel),displacementMapUv:ot&&M(R.displacementMap.channel),emissiveMapUv:Ue&&M(R.emissiveMap.channel),metalnessMapUv:Fe&&M(R.metalnessMap.channel),roughnessMapUv:L&&M(R.roughnessMap.channel),anisotropyMapUv:me&&M(R.anisotropyMap.channel),clearcoatMapUv:oe&&M(R.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&M(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&M(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&M(R.iridescenceMap.channel),iridescenceThicknessMapUv:We&&M(R.iridescenceThicknessMap.channel),sheenColorMapUv:he&&M(R.sheenColorMap.channel),sheenRoughnessMapUv:m&&M(R.sheenRoughnessMap.channel),specularMapUv:Se&&M(R.specularMap.channel),specularColorMapUv:ke&&M(R.specularColorMap.channel),specularIntensityMapUv:it&&M(R.specularIntensityMap.channel),transmissionMapUv:H&&M(R.transmissionMap.channel),thicknessMapUv:de&&M(R.thicknessMap.channel),alphaMapUv:ne&&M(R.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Te||E),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(Be||ne),fog:!!Q,useFog:R.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ge,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:Be&&R.map.isVideoTexture===!0&&et.getTransfer(R.map.colorSpace)===rt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Kt,flipSided:R.side===Pt,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qe&&R.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&R.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return pt.vertexUv1s=u.has(1),pt.vertexUv2s=u.has(2),pt.vertexUv3s=u.has(3),u.clear(),pt}function g(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)A.push(k),A.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(P(A,R),T(A,R),A.push(n.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function P(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function T(R,A){a.disableAll(),A.supportsVertexTextures&&a.enable(0),A.instancing&&a.enable(1),A.instancingColor&&a.enable(2),A.instancingMorph&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),A.dispersion&&a.enable(20),A.batchingColor&&a.enable(21),R.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.doubleSided&&a.enable(10),A.flipSided&&a.enable(11),A.useDepthPacking&&a.enable(12),A.dithering&&a.enable(13),A.transmission&&a.enable(14),A.sheen&&a.enable(15),A.opaque&&a.enable(16),A.pointsUvs&&a.enable(17),A.decodeVideoTexture&&a.enable(18),A.alphaToCoverage&&a.enable(19),R.push(a.mask)}function w(R){const A=S[R.type];let k;if(A){const J=Yt[A];k=Qu.clone(J.uniforms)}else k=R.uniforms;return k}function G(R,A){let k;for(let J=0,q=f.length;J<q;J++){const Q=f[J];if(Q.cacheKey===A){k=Q,++k.usedTimes;break}}return k===void 0&&(k=new dm(n,A,R,s),f.push(k)),k}function N(R){if(--R.usedTimes===0){const A=f.indexOf(R);f[A]=f[f.length-1],f.pop(),R.destroy()}}function F(R){l.remove(R)}function W(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:w,acquireProgram:G,releaseProgram:N,releaseShaderCache:F,programs:f,dispose:W}}function vm(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function xm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function lc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,v,S,M,_){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:v,groupOrder:S,renderOrder:d.renderOrder,z:M,group:_},n[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=v,g.groupOrder=S,g.renderOrder=d.renderOrder,g.z=M,g.group=_),e++,g}function a(d,h,v,S,M,_){const g=o(d,h,v,S,M,_);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):t.push(g)}function l(d,h,v,S,M,_){const g=o(d,h,v,S,M,_);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,h){t.length>1&&t.sort(d||xm),i.length>1&&i.sort(h||lc),r.length>1&&r.sort(h||lc)}function f(){for(let d=e,h=n.length;d<h;d++){const v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function ym(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new uc,n.set(i,[o])):r>=s.length?(o=new uc,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new Ye};break;case"SpotLight":t={position:new V,direction:new V,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Mm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Em=0;function Tm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bm(n){const e=new Sm,t=Mm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,s=new ct,o=new ct;function a(u){let f=0,d=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let v=0,S=0,M=0,_=0,g=0,P=0,T=0,w=0,G=0,N=0,F=0;u.sort(Tm);for(let R=0,A=u.length;R<A;R++){const k=u[R],J=k.color,q=k.intensity,Q=k.distance,Y=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=J.r*q,d+=J.g*q,h+=J.b*q;else if(k.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(k.sh.coefficients[$],q);F++}else if(k.isDirectionalLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,K=t.get(k);K.shadowIntensity=ue.intensity,K.shadowBias=ue.bias,K.shadowNormalBias=ue.normalBias,K.shadowRadius=ue.radius,K.shadowMapSize=ue.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=k.shadow.matrix,P++}i.directional[v]=$,v++}else if(k.isSpotLight){const $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(J).multiplyScalar(q),$.distance=Q,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,i.spot[M]=$;const ue=k.shadow;if(k.map&&(i.spotLightMap[G]=k.map,G++,ue.updateMatrices(k),k.castShadow&&N++),i.spotLightMatrix[M]=ue.matrix,k.castShadow){const K=t.get(k);K.shadowIntensity=ue.intensity,K.shadowBias=ue.bias,K.shadowNormalBias=ue.normalBias,K.shadowRadius=ue.radius,K.shadowMapSize=ue.mapSize,i.spotShadow[M]=K,i.spotShadowMap[M]=Y,w++}M++}else if(k.isRectAreaLight){const $=e.get(k);$.color.copy(J).multiplyScalar(q),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),i.rectArea[_]=$,_++}else if(k.isPointLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){const ue=k.shadow,K=t.get(k);K.shadowIntensity=ue.intensity,K.shadowBias=ue.bias,K.shadowNormalBias=ue.normalBias,K.shadowRadius=ue.radius,K.shadowMapSize=ue.mapSize,K.shadowCameraNear=ue.camera.near,K.shadowCameraFar=ue.camera.far,i.pointShadow[S]=K,i.pointShadowMap[S]=Y,i.pointShadowMatrix[S]=k.shadow.matrix,T++}i.point[S]=$,S++}else if(k.isHemisphereLight){const $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(q),$.groundColor.copy(k.groundColor).multiplyScalar(q),i.hemi[g]=$,g++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const W=i.hash;(W.directionalLength!==v||W.pointLength!==S||W.spotLength!==M||W.rectAreaLength!==_||W.hemiLength!==g||W.numDirectionalShadows!==P||W.numPointShadows!==T||W.numSpotShadows!==w||W.numSpotMaps!==G||W.numLightProbes!==F)&&(i.directional.length=v,i.spot.length=M,i.rectArea.length=_,i.point.length=S,i.hemi.length=g,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=w+G-N,i.spotLightMap.length=G,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,W.directionalLength=v,W.pointLength=S,W.spotLength=M,W.rectAreaLength=_,W.hemiLength=g,W.numDirectionalShadows=P,W.numPointShadows=T,W.numSpotShadows=w,W.numSpotMaps=G,W.numLightProbes=F,i.version=Em++)}function l(u,f){let d=0,h=0,v=0,S=0,M=0;const _=f.matrixWorldInverse;for(let g=0,P=u.length;g<P;g++){const T=u[g];if(T.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),d++}else if(T.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(_),v++}else if(T.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),o.identity(),s.copy(T.matrixWorld),s.premultiply(_),o.extractRotation(s),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),S++}else if(T.isPointLight){const w=i.point[h];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(_),h++}else if(T.isHemisphereLight){const w=i.hemi[M];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(_),M++}}}return{setup:a,setupView:l,state:i}}function hc(n){const e=new bm(n),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wm(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new hc(n),e.set(r,[a])):s>=o.length?(a=new hc(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Am extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cm extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pm=`uniform sampler2D shadow_pass;
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
}`;function Lm(n,e,t){let i=new ra;const r=new we,s=new we,o=new st,a=new Am({depthPacking:Eu}),l=new Cm,u={},f=t.maxTextureSize,d={[Cn]:Pt,[Pt]:Cn,[Kt]:Kt},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Rm,fragmentShader:Pm}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const S=new Pn;S.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new wt(S,h),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let g=this.type;this.render=function(N,F,W){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;const R=n.getRenderTarget(),A=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),J=n.state;J.setBlending(bn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const q=g!==ln&&this.type===ln,Q=g===ln&&this.type!==ln;for(let Y=0,$=N.length;Y<$;Y++){const ue=N[Y],K=ue.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ve=K.getFrameExtents();if(r.multiply(ve),s.copy(K.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ve.x),r.x=s.x*ve.x,K.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ve.y),r.y=s.y*ve.y,K.mapSize.y=s.y)),K.map===null||q===!0||Q===!0){const Ae=this.type!==ln?{minFilter:kt,magFilter:kt}:{};K.map!==null&&K.map.dispose(),K.map=new qn(r.x,r.y,Ae),K.map.texture.name=ue.name+".shadowMap",K.camera.updateProjectionMatrix()}n.setRenderTarget(K.map),n.clear();const ye=K.getViewportCount();for(let Ae=0;Ae<ye;Ae++){const Ge=K.getViewport(Ae);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),J.viewport(o),K.updateMatrices(ue,Ae),i=K.getFrustum(),w(F,W,K.camera,ue,this.type)}K.isPointLightShadow!==!0&&this.type===ln&&P(K,W),K.needsUpdate=!1}g=this.type,_.needsUpdate=!1,n.setRenderTarget(R,A,k)};function P(N,F){const W=e.update(M);h.defines.VSM_SAMPLES!==N.blurSamples&&(h.defines.VSM_SAMPLES=N.blurSamples,v.defines.VSM_SAMPLES=N.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new qn(r.x,r.y)),h.uniforms.shadow_pass.value=N.map.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(F,null,W,h,M,null),v.uniforms.shadow_pass.value=N.mapPass.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(F,null,W,v,M,null)}function T(N,F,W,R){let A=null;const k=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)A=k;else if(A=W.isPointLight===!0?l:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const J=A.uuid,q=F.uuid;let Q=u[J];Q===void 0&&(Q={},u[J]=Q);let Y=Q[q];Y===void 0&&(Y=A.clone(),Q[q]=Y,F.addEventListener("dispose",G)),A=Y}if(A.visible=F.visible,A.wireframe=F.wireframe,R===ln?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:d[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,W.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=n.properties.get(A);J.light=W}return A}function w(N,F,W,R,A){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===ln)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const q=e.update(N),Q=N.material;if(Array.isArray(Q)){const Y=q.groups;for(let $=0,ue=Y.length;$<ue;$++){const K=Y[$],ve=Q[K.materialIndex];if(ve&&ve.visible){const ye=T(N,ve,R,A);N.onBeforeShadow(n,N,F,W,q,ye,K),n.renderBufferDirect(W,null,q,ye,N,K),N.onAfterShadow(n,N,F,W,q,ye,K)}}}else if(Q.visible){const Y=T(N,Q,R,A);N.onBeforeShadow(n,N,F,W,q,Y,null),n.renderBufferDirect(W,null,q,Y,N,null),N.onAfterShadow(n,N,F,W,q,Y,null)}}const J=N.children;for(let q=0,Q=J.length;q<Q;q++)w(J[q],F,W,R,A)}function G(N){N.target.removeEventListener("dispose",G);for(const W in u){const R=u[W],A=N.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function Im(n){function e(){let H=!1;const de=new st;let te=null;const ne=new st(0,0,0,0);return{setMask:function(pe){te!==pe&&!H&&(n.colorMask(pe,pe,pe,pe),te=pe)},setLocked:function(pe){H=pe},setClear:function(pe,Ie,qe,ut,pt){pt===!0&&(pe*=ut,Ie*=ut,qe*=ut),de.set(pe,Ie,qe,ut),ne.equals(de)===!1&&(n.clearColor(pe,Ie,qe,ut),ne.copy(de))},reset:function(){H=!1,te=null,ne.set(-1,0,0,0)}}}function t(){let H=!1,de=null,te=null,ne=null;return{setTest:function(pe){pe?Ee(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(pe){de!==pe&&!H&&(n.depthMask(pe),de=pe)},setFunc:function(pe){if(te!==pe){switch(pe){case su:n.depthFunc(n.NEVER);break;case ou:n.depthFunc(n.ALWAYS);break;case au:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case cu:n.depthFunc(n.EQUAL);break;case lu:n.depthFunc(n.GEQUAL);break;case uu:n.depthFunc(n.GREATER);break;case hu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){H=pe},setClear:function(pe){ne!==pe&&(n.clearDepth(pe),ne=pe)},reset:function(){H=!1,de=null,te=null,ne=null}}}function i(){let H=!1,de=null,te=null,ne=null,pe=null,Ie=null,qe=null,ut=null,pt=null;return{setTest:function(Ke){H||(Ke?Ee(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(Ke){de!==Ke&&!H&&(n.stencilMask(Ke),de=Ke)},setFunc:function(Ke,Ct,Tt){(te!==Ke||ne!==Ct||pe!==Tt)&&(n.stencilFunc(Ke,Ct,Tt),te=Ke,ne=Ct,pe=Tt)},setOp:function(Ke,Ct,Tt){(Ie!==Ke||qe!==Ct||ut!==Tt)&&(n.stencilOp(Ke,Ct,Tt),Ie=Ke,qe=Ct,ut=Tt)},setLocked:function(Ke){H=Ke},setClear:function(Ke){pt!==Ke&&(n.clearStencil(Ke),pt=Ke)},reset:function(){H=!1,de=null,te=null,ne=null,pe=null,Ie=null,qe=null,ut=null,pt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],v=null,S=!1,M=null,_=null,g=null,P=null,T=null,w=null,G=null,N=new Ye(0,0,0),F=0,W=!1,R=null,A=null,k=null,J=null,q=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,$=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Y=$>=1):ue.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Y=$>=2);let K=null,ve={};const ye=n.getParameter(n.SCISSOR_BOX),Ae=n.getParameter(n.VIEWPORT),Ge=new st().fromArray(ye),Ze=new st().fromArray(Ae);function ee(H,de,te,ne){const pe=new Uint8Array(4),Ie=n.createTexture();n.bindTexture(H,Ie),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<te;qe++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,pe):n.texImage2D(de+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pe);return Ie}const fe={};fe[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ee(n.DEPTH_TEST),s.setFunc(Yr),$e(!1),Te(ga),Ee(n.CULL_FACE),lt(bn);function Ee(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function xe(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Le(H,de){return f[H]!==de?(n.bindFramebuffer(H,de),f[H]=de,H===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=de),H===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Ne(H,de){let te=h,ne=!1;if(H){te=d.get(de),te===void 0&&(te=[],d.set(de,te));const pe=H.textures;if(te.length!==pe.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ie=0,qe=pe.length;Ie<qe;Ie++)te[Ie]=n.COLOR_ATTACHMENT0+Ie;te.length=pe.length,ne=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ne=!0);ne&&n.drawBuffers(te)}function Be(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const nt={[Hn]:n.FUNC_ADD,[Vl]:n.FUNC_SUBTRACT,[Gl]:n.FUNC_REVERSE_SUBTRACT};nt[Wl]=n.MIN,nt[Xl]=n.MAX;const U={[ql]:n.ZERO,[Yl]:n.ONE,[Kl]:n.SRC_COLOR,[oo]:n.SRC_ALPHA,[eu]:n.SRC_ALPHA_SATURATE,[Zl]:n.DST_COLOR,[jl]:n.DST_ALPHA,[Jl]:n.ONE_MINUS_SRC_COLOR,[ao]:n.ONE_MINUS_SRC_ALPHA,[Ql]:n.ONE_MINUS_DST_COLOR,[$l]:n.ONE_MINUS_DST_ALPHA,[tu]:n.CONSTANT_COLOR,[nu]:n.ONE_MINUS_CONSTANT_COLOR,[iu]:n.CONSTANT_ALPHA,[ru]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(H,de,te,ne,pe,Ie,qe,ut,pt,Ke){if(H===bn){S===!0&&(xe(n.BLEND),S=!1);return}if(S===!1&&(Ee(n.BLEND),S=!0),H!==Hl){if(H!==M||Ke!==W){if((_!==Hn||T!==Hn)&&(n.blendEquation(n.FUNC_ADD),_=Hn,T=Hn),Ke)switch(H){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.ONE,n.ONE);break;case xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ya:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case va:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xa:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ya:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}g=null,P=null,w=null,G=null,N.set(0,0,0),F=0,M=H,W=Ke}return}pe=pe||de,Ie=Ie||te,qe=qe||ne,(de!==_||pe!==T)&&(n.blendEquationSeparate(nt[de],nt[pe]),_=de,T=pe),(te!==g||ne!==P||Ie!==w||qe!==G)&&(n.blendFuncSeparate(U[te],U[ne],U[Ie],U[qe]),g=te,P=ne,w=Ie,G=qe),(ut.equals(N)===!1||pt!==F)&&(n.blendColor(ut.r,ut.g,ut.b,pt),N.copy(ut),F=pt),M=H,W=!1}function je(H,de){H.side===Kt?xe(n.CULL_FACE):Ee(n.CULL_FACE);let te=H.side===Pt;de&&(te=!te),$e(te),H.blending===Ei&&H.transparent===!1?lt(bn):lt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),s.setFunc(H.depthFunc),s.setTest(H.depthTest),s.setMask(H.depthWrite),r.setMask(H.colorWrite);const ne=H.stencilWrite;o.setTest(ne),ne&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ue(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ee(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function $e(H){R!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),R=H)}function Te(H){H!==Bl?(Ee(n.CULL_FACE),H!==A&&(H===ga?n.cullFace(n.BACK):H===kl?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),A=H}function ot(H){H!==k&&(Y&&n.lineWidth(H),k=H)}function Ue(H,de,te){H?(Ee(n.POLYGON_OFFSET_FILL),(J!==de||q!==te)&&(n.polygonOffset(de,te),J=de,q=te)):xe(n.POLYGON_OFFSET_FILL)}function Fe(H){H?Ee(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function L(H){H===void 0&&(H=n.TEXTURE0+Q-1),K!==H&&(n.activeTexture(H),K=H)}function E(H,de,te){te===void 0&&(K===null?te=n.TEXTURE0+Q-1:te=K);let ne=ve[te];ne===void 0&&(ne={type:void 0,texture:void 0},ve[te]=ne),(ne.type!==H||ne.texture!==de)&&(K!==te&&(n.activeTexture(te),K=te),n.bindTexture(H,de||fe[H]),ne.type=H,ne.texture=de)}function X(){const H=ve[K];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function We(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(H){Ge.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function m(H){Ze.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ze.copy(H))}function Se(H,de){let te=l.get(de);te===void 0&&(te=new WeakMap,l.set(de,te));let ne=te.get(H);ne===void 0&&(ne=n.getUniformBlockIndex(de,H.name),te.set(H,ne))}function ke(H,de){const ne=l.get(de).get(H);a.get(de)!==ne&&(n.uniformBlockBinding(de,ne,H.__bindingPointIndex),a.set(de,ne))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},K=null,ve={},f={},d=new WeakMap,h=[],v=null,S=!1,M=null,_=null,g=null,P=null,T=null,w=null,G=null,N=new Ye(0,0,0),F=0,W=!1,R=null,A=null,k=null,J=null,q=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ee,disable:xe,bindFramebuffer:Le,drawBuffers:Ne,useProgram:Be,setBlending:lt,setMaterial:je,setFlipSided:$e,setCullFace:Te,setLineWidth:ot,setPolygonOffset:Ue,setScissorTest:Fe,activeTexture:L,bindTexture:E,unbindTexture:X,compressedTexImage2D:se,compressedTexImage3D:le,texImage2D:ge,texImage3D:We,updateUBOMapping:Se,uniformBlockBinding:ke,texStorage2D:Oe,texStorage3D:ae,texSubImage2D:re,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:oe,scissor:he,viewport:m,reset:it}}function fc(n,e,t,i){const r=Dm(i);switch(t){case Fc:return n*e;case Bc:return n*e;case kc:return n*e*2;case zc:return n*e/r.components*r.byteLength;case Zo:return n*e/r.components*r.byteLength;case Hc:return n*e*2/r.components*r.byteLength;case Qo:return n*e*2/r.components*r.byteLength;case Oc:return n*e*3/r.components*r.byteLength;case Xt:return n*e*4/r.components*r.byteLength;case ea:return n*e*4/r.components*r.byteLength;case Or:case Br:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case kr:case zr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:case _o:return Math.max(n,16)*Math.max(e,8)/4;case fo:case mo:return Math.max(n,8)*Math.max(e,8)/2;case go:case vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case To:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Hr:case Uo:case No:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vc:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oo:case Bo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dm(n){switch(n){case dn:case Dc:return{byteLength:1,components:1};case $i:case Uc:case nr:return{byteLength:2,components:1};case jo:case $o:return{byteLength:2,components:4};case Xn:case Jo:case un:return{byteLength:4,components:1};case Nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Um(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new we,f=new WeakMap;let d;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,E){return v?new OffscreenCanvas(L,E):Zr("canvas")}function M(L,E,X){let se=1;const le=Fe(L);if((le.width>X||le.height>X)&&(se=X/Math.max(le.width,le.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(se*le.width),Pe=Math.floor(se*le.height);d===void 0&&(d=S(re,Pe));const me=E?S(re,Pe):d;return me.width=re,me.height=Pe,me.getContext("2d").drawImage(L,0,0,re,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+Pe+")."),me}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function _(L){return L.generateMipmaps&&L.minFilter!==kt&&L.minFilter!==Wt}function g(L){n.generateMipmap(L)}function P(L,E,X,se,le=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=E;if(E===n.RED&&(X===n.FLOAT&&(re=n.R32F),X===n.HALF_FLOAT&&(re=n.R16F),X===n.UNSIGNED_BYTE&&(re=n.R8)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.R8UI),X===n.UNSIGNED_SHORT&&(re=n.R16UI),X===n.UNSIGNED_INT&&(re=n.R32UI),X===n.BYTE&&(re=n.R8I),X===n.SHORT&&(re=n.R16I),X===n.INT&&(re=n.R32I)),E===n.RG&&(X===n.FLOAT&&(re=n.RG32F),X===n.HALF_FLOAT&&(re=n.RG16F),X===n.UNSIGNED_BYTE&&(re=n.RG8)),E===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(re=n.RG8UI),X===n.UNSIGNED_SHORT&&(re=n.RG16UI),X===n.UNSIGNED_INT&&(re=n.RG32UI),X===n.BYTE&&(re=n.RG8I),X===n.SHORT&&(re=n.RG16I),X===n.INT&&(re=n.RG32I)),E===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(re=n.RGB9_E5),E===n.RGBA){const Pe=le?Kr:et.getTransfer(se);X===n.FLOAT&&(re=n.RGBA32F),X===n.HALF_FLOAT&&(re=n.RGBA16F),X===n.UNSIGNED_BYTE&&(re=Pe===rt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function T(L,E){let X;return L?E===null||E===Xn||E===Pi?X=n.DEPTH24_STENCIL8:E===un?X=n.DEPTH32F_STENCIL8:E===$i&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xn||E===Pi?X=n.DEPTH_COMPONENT24:E===un?X=n.DEPTH_COMPONENT32F:E===$i&&(X=n.DEPTH_COMPONENT16),X}function w(L,E){return _(L)===!0||L.isFramebufferTexture&&L.minFilter!==kt&&L.minFilter!==Wt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),F(E),E.isVideoTexture&&f.delete(E)}function N(L){const E=L.target;E.removeEventListener("dispose",N),R(E)}function F(L){const E=i.get(L);if(E.__webglInit===void 0)return;const X=L.source,se=h.get(X);if(se){const le=se[E.__cacheKey];le.usedTimes--,le.usedTimes===0&&W(L),Object.keys(se).length===0&&h.delete(X)}i.remove(L)}function W(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const X=L.source,se=h.get(X);delete se[E.__cacheKey],o.memory.textures--}function R(L){const E=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let le=0;le<E.__webglFramebuffer[se].length;le++)n.deleteFramebuffer(E.__webglFramebuffer[se][le]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=L.textures;for(let se=0,le=X.length;se<le;se++){const re=i.get(X[se]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),o.memory.textures--),i.remove(X[se])}i.remove(L)}let A=0;function k(){A=0}function J(){const L=A;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),A+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function Q(L,E){const X=i.get(L);if(L.isVideoTexture&&ot(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ze(X,L,E);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function Y(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Ze(X,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function $(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){Ze(X,L,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function ue(L,E){const X=i.get(L);if(L.version>0&&X.__version!==L.version){ee(X,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}const K={[uo]:n.REPEAT,[Gn]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},ve={[kt]:n.NEAREST,[Su]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[Wt]:n.LINEAR,[ys]:n.LINEAR_MIPMAP_NEAREST,[Wn]:n.LINEAR_MIPMAP_LINEAR},ye={[bu]:n.NEVER,[Lu]:n.ALWAYS,[wu]:n.LESS,[Wc]:n.LEQUAL,[Au]:n.EQUAL,[Pu]:n.GEQUAL,[Cu]:n.GREATER,[Ru]:n.NOTEQUAL};function Ae(L,E){if(E.type===un&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Wt||E.magFilter===ys||E.magFilter===ar||E.magFilter===Wn||E.minFilter===Wt||E.minFilter===ys||E.minFilter===ar||E.minFilter===Wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,K[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,K[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,K[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ve[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===kt||E.minFilter!==ar&&E.minFilter!==Wn||E.type===un&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ge(L,E){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const se=E.source;let le=h.get(se);le===void 0&&(le={},h.set(se,le));const re=q(E);if(re!==L.__cacheKey){le[re]===void 0&&(le[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),le[re].usedTimes++;const Pe=le[L.__cacheKey];Pe!==void 0&&(le[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&W(E)),L.__cacheKey=re,L.__webglTexture=le[re].texture}return X}function Ze(L,E,X){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const le=Ge(L,E),re=E.source;t.bindTexture(se,L.__webglTexture,n.TEXTURE0+X);const Pe=i.get(re);if(re.version!==Pe.__version||le===!0){t.activeTexture(n.TEXTURE0+X);const me=et.getPrimaries(et.workingColorSpace),oe=E.colorSpace===Tn?null:et.getPrimaries(E.colorSpace),Oe=E.colorSpace===Tn||me===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let ae=M(E.image,!1,r.maxTextureSize);ae=Ue(E,ae);const ge=s.convert(E.format,E.colorSpace),We=s.convert(E.type);let he=P(E.internalFormat,ge,We,E.colorSpace,E.isVideoTexture);Ae(se,E);let m;const Se=E.mipmaps,ke=E.isVideoTexture!==!0,it=Pe.__version===void 0||le===!0,H=re.dataReady,de=w(E,ae);if(E.isDepthTexture)he=T(E.format===Li,E.type),it&&(ke?t.texStorage2D(n.TEXTURE_2D,1,he,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,he,ae.width,ae.height,0,ge,We,null));else if(E.isDataTexture)if(Se.length>0){ke&&it&&t.texStorage2D(n.TEXTURE_2D,de,he,Se[0].width,Se[0].height);for(let te=0,ne=Se.length;te<ne;te++)m=Se[te],ke?H&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,m.width,m.height,ge,We,m.data):t.texImage2D(n.TEXTURE_2D,te,he,m.width,m.height,0,ge,We,m.data);E.generateMipmaps=!1}else ke?(it&&t.texStorage2D(n.TEXTURE_2D,de,he,ae.width,ae.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,We,ae.data)):t.texImage2D(n.TEXTURE_2D,0,he,ae.width,ae.height,0,ge,We,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ke&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,he,Se[0].width,Se[0].height,ae.depth);for(let te=0,ne=Se.length;te<ne;te++)if(m=Se[te],E.format!==Xt)if(ge!==null)if(ke){if(H)if(E.layerUpdates.size>0){const pe=fc(m.width,m.height,E.format,E.type);for(const Ie of E.layerUpdates){const qe=m.data.subarray(Ie*pe/m.data.BYTES_PER_ELEMENT,(Ie+1)*pe/m.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ie,m.width,m.height,1,ge,qe,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,m.width,m.height,ae.depth,ge,m.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,he,m.width,m.height,ae.depth,0,m.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,m.width,m.height,ae.depth,ge,We,m.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,he,m.width,m.height,ae.depth,0,ge,We,m.data)}else{ke&&it&&t.texStorage2D(n.TEXTURE_2D,de,he,Se[0].width,Se[0].height);for(let te=0,ne=Se.length;te<ne;te++)m=Se[te],E.format!==Xt?ge!==null?ke?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,m.width,m.height,ge,m.data):t.compressedTexImage2D(n.TEXTURE_2D,te,he,m.width,m.height,0,m.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?H&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,m.width,m.height,ge,We,m.data):t.texImage2D(n.TEXTURE_2D,te,he,m.width,m.height,0,ge,We,m.data)}else if(E.isDataArrayTexture)if(ke){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,de,he,ae.width,ae.height,ae.depth),H)if(E.layerUpdates.size>0){const te=fc(ae.width,ae.height,E.format,E.type);for(const ne of E.layerUpdates){const pe=ae.data.subarray(ne*te/ae.data.BYTES_PER_ELEMENT,(ne+1)*te/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,ge,We,pe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,We,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,ae.width,ae.height,ae.depth,0,ge,We,ae.data);else if(E.isData3DTexture)ke?(it&&t.texStorage3D(n.TEXTURE_3D,de,he,ae.width,ae.height,ae.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,We,ae.data)):t.texImage3D(n.TEXTURE_3D,0,he,ae.width,ae.height,ae.depth,0,ge,We,ae.data);else if(E.isFramebufferTexture){if(it)if(ke)t.texStorage2D(n.TEXTURE_2D,de,he,ae.width,ae.height);else{let te=ae.width,ne=ae.height;for(let pe=0;pe<de;pe++)t.texImage2D(n.TEXTURE_2D,pe,he,te,ne,0,ge,We,null),te>>=1,ne>>=1}}else if(Se.length>0){if(ke&&it){const te=Fe(Se[0]);t.texStorage2D(n.TEXTURE_2D,de,he,te.width,te.height)}for(let te=0,ne=Se.length;te<ne;te++)m=Se[te],ke?H&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,ge,We,m):t.texImage2D(n.TEXTURE_2D,te,he,ge,We,m);E.generateMipmaps=!1}else if(ke){if(it){const te=Fe(ae);t.texStorage2D(n.TEXTURE_2D,de,he,te.width,te.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,We,ae)}else t.texImage2D(n.TEXTURE_2D,0,he,ge,We,ae);_(E)&&g(se),Pe.__version=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ee(L,E,X){if(E.image.length!==6)return;const se=Ge(L,E),le=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+X);const re=i.get(le);if(le.version!==re.__version||se===!0){t.activeTexture(n.TEXTURE0+X);const Pe=et.getPrimaries(et.workingColorSpace),me=E.colorSpace===Tn?null:et.getPrimaries(E.colorSpace),oe=E.colorSpace===Tn||Pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Oe=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!Oe&&!ae?ge[ne]=M(E.image[ne],!0,r.maxCubemapSize):ge[ne]=ae?E.image[ne].image:E.image[ne],ge[ne]=Ue(E,ge[ne]);const We=ge[0],he=s.convert(E.format,E.colorSpace),m=s.convert(E.type),Se=P(E.internalFormat,he,m,E.colorSpace),ke=E.isVideoTexture!==!0,it=re.__version===void 0||se===!0,H=le.dataReady;let de=w(E,We);Ae(n.TEXTURE_CUBE_MAP,E);let te;if(Oe){ke&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Se,We.width,We.height);for(let ne=0;ne<6;ne++){te=ge[ne].mipmaps;for(let pe=0;pe<te.length;pe++){const Ie=te[pe];E.format!==Xt?he!==null?ke?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,Ie.width,Ie.height,he,Ie.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Se,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,0,0,Ie.width,Ie.height,he,m,Ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe,Se,Ie.width,Ie.height,0,he,m,Ie.data)}}}else{if(te=E.mipmaps,ke&&it){te.length>0&&de++;const ne=Fe(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,de,Se,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,he,m,ge[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Se,ge[ne].width,ge[ne].height,0,he,m,ge[ne].data);for(let pe=0;pe<te.length;pe++){const qe=te[pe].image[ne].image;ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,qe.width,qe.height,he,m,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Se,qe.width,qe.height,0,he,m,qe.data)}}else{ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he,m,ge[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Se,he,m,ge[ne]);for(let pe=0;pe<te.length;pe++){const Ie=te[pe];ke?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,0,0,he,m,Ie.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,pe+1,Se,he,m,Ie.image[ne])}}}_(E)&&g(n.TEXTURE_CUBE_MAP),re.__version=le.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function fe(L,E,X,se,le,re){const Pe=s.convert(X.format,X.colorSpace),me=s.convert(X.type),oe=P(X.internalFormat,Pe,me,X.colorSpace);if(!i.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>re),ge=Math.max(1,E.height>>re);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,re,oe,ae,ge,E.depth,0,Pe,me,null):t.texImage2D(le,re,oe,ae,ge,0,Pe,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Te(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,le,i.get(X).__webglTexture,0,$e(E)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,le,i.get(X).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(L,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const se=E.depthTexture,le=se&&se.isDepthTexture?se.type:null,re=T(E.stencilBuffer,le),Pe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=$e(E);Te(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,re,E.width,E.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,re,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,L)}else{const se=E.textures;for(let le=0;le<se.length;le++){const re=se[le],Pe=s.convert(re.format,re.colorSpace),me=s.convert(re.type),oe=P(re.internalFormat,Pe,me,re.colorSpace),Oe=$e(E);X&&Te(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,oe,E.width,E.height):Te(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Oe,oe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,oe,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const se=i.get(E.depthTexture).__webglTexture,le=$e(E);if(E.depthTexture.format===Ti)Te(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(E.depthTexture.format===Li)Te(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Le(L){const E=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");xe(E.__webglFramebuffer,L)}else if(X){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]=n.createRenderbuffer(),Ee(E.__webglDepthbuffer[se],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),Ee(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(L,E,X){const se=i.get(L);E!==void 0&&fe(se.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Le(L)}function Be(L){const E=L.texture,X=i.get(L),se=i.get(E);L.addEventListener("dispose",N);const le=L.textures,re=L.isWebGLCubeRenderTarget===!0,Pe=le.length>1;if(Pe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,o.memory.textures++),re){X.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[me]=[];for(let oe=0;oe<E.mipmaps.length;oe++)X.__webglFramebuffer[me][oe]=n.createFramebuffer()}else X.__webglFramebuffer[me]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)X.__webglFramebuffer[me]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let me=0,oe=le.length;me<oe;me++){const Oe=i.get(le[me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Te(L)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let me=0;me<le.length;me++){const oe=le[me];X.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[me]);const Oe=s.convert(oe.format,oe.colorSpace),ae=s.convert(oe.type),ge=P(oe.internalFormat,Oe,ae,oe.colorSpace,L.isXRRenderTarget===!0),We=$e(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ge,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,X.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Ee(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let oe=0;oe<E.mipmaps.length;oe++)fe(X.__webglFramebuffer[me][oe],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,oe);else fe(X.__webglFramebuffer[me],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);_(E)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,oe=le.length;me<oe;me++){const Oe=le[me],ae=i.get(Oe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Ae(n.TEXTURE_2D,Oe),fe(X.__webglFramebuffer,L,Oe,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),_(Oe)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),Ae(me,E),E.mipmaps&&E.mipmaps.length>0)for(let oe=0;oe<E.mipmaps.length;oe++)fe(X.__webglFramebuffer[oe],L,E,n.COLOR_ATTACHMENT0,me,oe);else fe(X.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,me,0);_(E)&&g(me),t.unbindTexture()}L.depthBuffer&&Le(L)}function nt(L){const E=L.textures;for(let X=0,se=E.length;X<se;X++){const le=E[X];if(_(le)){const re=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Pe=i.get(le).__webglTexture;t.bindTexture(re,Pe),g(re),t.unbindTexture()}}}const U=[],lt=[];function je(L){if(L.samples>0){if(Te(L)===!1){const E=L.textures,X=L.width,se=L.height;let le=n.COLOR_BUFFER_BIT;const re=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(L),me=E.length>1;if(me)for(let oe=0;oe<E.length;oe++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let oe=0;oe<E.length;oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[oe]);const Oe=i.get(E[oe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Oe,0)}n.blitFramebuffer(0,0,X,se,0,0,X,se,le,n.NEAREST),l===!0&&(U.length=0,lt.length=0,U.push(n.COLOR_ATTACHMENT0+oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(U.push(re),lt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let oe=0;oe<E.length;oe++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[oe]);const Oe=i.get(E[oe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function $e(L){return Math.min(r.maxSamples,L.samples)}function Te(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ot(L){const E=o.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function Ue(L,E){const X=L.colorSpace,se=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Rn&&X!==Tn&&(et.getTransfer(X)===rt?(se!==Xt||le!==dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}function Fe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=$,this.setTextureCube=ue,this.rebindTextures=Ne,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Te}function Nm(n,e){function t(i,r=Tn){let s;const o=et.getTransfer(r);if(i===dn)return n.UNSIGNED_BYTE;if(i===jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dc)return n.BYTE;if(i===Uc)return n.SHORT;if(i===$i)return n.UNSIGNED_SHORT;if(i===Jo)return n.INT;if(i===Xn)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===nr)return n.HALF_FLOAT;if(i===Fc)return n.ALPHA;if(i===Oc)return n.RGB;if(i===Xt)return n.RGBA;if(i===Bc)return n.LUMINANCE;if(i===kc)return n.LUMINANCE_ALPHA;if(i===Ti)return n.DEPTH_COMPONENT;if(i===Li)return n.DEPTH_STENCIL;if(i===zc)return n.RED;if(i===Zo)return n.RED_INTEGER;if(i===Hc)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===ea)return n.RGBA_INTEGER;if(i===Or||i===Br||i===kr||i===zr)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Or)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Or)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fo||i===po||i===mo||i===_o)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===po)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_o)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===go||i===vo||i===xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===go||i===vo)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===So||i===Mo||i===Eo||i===To||i===bo||i===wo||i===Ao||i===Co||i===Ro||i===Po||i===Lo||i===Io||i===Do)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===So)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Mo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===To)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ao)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Co)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ro)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Po)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lo)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Io)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Do)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hr||i===Uo||i===No)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hr)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Uo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===No)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vc||i===Fo||i===Oo||i===Bo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Fm extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rr extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class Ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,i),g=this._getHandJoint(u,M);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),v=.02,S=.005;u.inputState.pinching&&h>v+S?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=v-S&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Bm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,km=`
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

}`;class zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pn({vertexShader:Bm,fragmentShader:km,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hm extends Ui{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,v=null,S=null;const M=new zm,_=t.getContextAttributes();let g=null,P=null;const T=[],w=[],G=new we;let N=null;const F=new Nt;F.layers.enable(1),F.viewport=new st;const W=new Nt;W.layers.enable(2),W.viewport=new st;const R=[F,W],A=new Fm;A.layers.enable(1),A.layers.enable(2);let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let fe=T[ee];return fe===void 0&&(fe=new Ys,T[ee]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ee){let fe=T[ee];return fe===void 0&&(fe=new Ys,T[ee]=fe),fe.getGripSpace()},this.getHand=function(ee){let fe=T[ee];return fe===void 0&&(fe=new Ys,T[ee]=fe),fe.getHandSpace()};function q(ee){const fe=w.indexOf(ee.inputSource);if(fe===-1)return;const Ee=T[fe];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,u||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Q(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",Y);for(let ee=0;ee<T.length;ee++){const fe=w[ee];fe!==null&&(w[ee]=null,T[ee].disconnect(fe))}k=null,J=null,M.reset(),e.setRenderTarget(g),v=null,h=null,d=null,r=null,P=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(G.width,G.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(G),r.renderState.layers===void 0){const fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),P=new qn(v.framebufferWidth,v.framebufferHeight,{format:Xt,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let fe=null,Ee=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=_.stencil?Li:Ti,Ee=_.stencil?Pi:Xn);const Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),P=new qn(h.textureWidth,h.textureHeight,{format:Xt,type:dn,depthTexture:new il(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(ee){for(let fe=0;fe<ee.removed.length;fe++){const Ee=ee.removed[fe],xe=w.indexOf(Ee);xe>=0&&(w[xe]=null,T[xe].disconnect(Ee))}for(let fe=0;fe<ee.added.length;fe++){const Ee=ee.added[fe];let xe=w.indexOf(Ee);if(xe===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=w.length){w.push(Ee),xe=Ne;break}else if(w[Ne]===null){w[Ne]=Ee,xe=Ne;break}if(xe===-1)break}const Le=T[xe];Le&&Le.connect(Ee)}}const $=new V,ue=new V;function K(ee,fe,Ee){$.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const xe=$.distanceTo(ue),Le=fe.projectionMatrix.elements,Ne=Ee.projectionMatrix.elements,Be=Le[14]/(Le[10]-1),nt=Le[14]/(Le[10]+1),U=(Le[9]+1)/Le[5],lt=(Le[9]-1)/Le[5],je=(Le[8]-1)/Le[0],$e=(Ne[8]+1)/Ne[0],Te=Be*je,ot=Be*$e,Ue=xe/(-je+$e),Fe=Ue*-je;fe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Fe),ee.translateZ(Ue),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const L=Be+Ue,E=nt+Ue,X=Te-Fe,se=ot+(xe-Fe),le=U*nt/E*L,re=lt*nt/E*L;ee.projectionMatrix.makePerspective(X,se,le,re,L,E),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function ve(ee,fe){fe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(fe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;M.texture!==null&&(ee.near=M.depthNear,ee.far=M.depthFar),A.near=W.near=F.near=ee.near,A.far=W.far=F.far=ee.far,(k!==A.near||J!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),k=A.near,J=A.far,F.near=k,F.far=J,W.near=k,W.far=J,F.updateProjectionMatrix(),W.updateProjectionMatrix(),ee.updateProjectionMatrix());const fe=ee.parent,Ee=A.cameras;ve(A,fe);for(let xe=0;xe<Ee.length;xe++)ve(Ee[xe],fe);Ee.length===2?K(A,F,W):A.projectionMatrix.copy(F.projectionMatrix),ye(ee,A,fe)};function ye(ee,fe,Ee){Ee===null?ee.matrix.copy(fe.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(fe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(fe.projectionMatrix),ee.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ko*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(ee){l=ee,h!==null&&(h.fixedFoveation=ee),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ee)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(A)};let Ae=null;function Ge(ee,fe){if(f=fe.getViewerPose(u||o),S=fe,f!==null){const Ee=f.views;v!==null&&(e.setRenderTargetFramebuffer(P,v.framebuffer),e.setRenderTarget(P));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Ne=0;Ne<Ee.length;Ne++){const Be=Ee[Ne];let nt=null;if(v!==null)nt=v.getViewport(Be);else{const lt=d.getViewSubImage(h,Be);nt=lt.viewport,Ne===0&&(e.setRenderTargetTextures(P,lt.colorTexture,h.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(P))}let U=R[Ne];U===void 0&&(U=new Nt,U.layers.enable(Ne),U.viewport=new st,R[Ne]=U),U.matrix.fromArray(Be.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Be.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(nt.x,nt.y,nt.width,nt.height),Ne===0&&(A.matrix.copy(U.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(U)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ne=d.getDepthInformation(Ee[0]);Ne&&Ne.isValid&&Ne.texture&&M.init(e,Ne,r.renderState)}}for(let Ee=0;Ee<T.length;Ee++){const xe=w[Ee],Le=T[Ee];xe!==null&&Le!==void 0&&Le.update(xe,fe,u||o)}Ae&&Ae(ee,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),S=null}const Ze=new tl;Ze.setAnimationLoop(Ge),this.setAnimationLoop=function(ee){Ae=ee},this.dispose=function(){}}}const On=new Zt,Vm=new ct;function Gm(n,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function i(_,g){g.color.getRGB(_.fogColor.value,Zc(n)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function r(_,g,P,T,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),d(_,g)):g.isMeshPhongMaterial?(s(_,g),f(_,g)):g.isMeshStandardMaterial?(s(_,g),h(_,g),g.isMeshPhysicalMaterial&&v(_,g,w)):g.isMeshMatcapMaterial?(s(_,g),S(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),M(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,P,T):g.isSpriteMaterial?u(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===Pt&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===Pt&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const P=e.get(g),T=P.envMap,w=P.envMapRotation;T&&(_.envMap.value=T,On.copy(w),On.x*=-1,On.y*=-1,On.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),_.envMapRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(On)),_.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,P,T){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*P,_.scale.value=T*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function u(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function f(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function d(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function h(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function v(_,g,P){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pt&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=P.texture,_.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function S(_,g){g.matcap&&(_.matcap.value=g.matcap)}function M(_,g){const P=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(P.matrixWorld),_.nearDistance.value=P.shadow.camera.near,_.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wm(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(P,T){const w=T.program;i.uniformBlockBinding(P,w)}function u(P,T){let w=r[P.id];w===void 0&&(S(P),w=f(P),r[P.id]=w,P.addEventListener("dispose",_));const G=T.program;i.updateUBOMapping(P,G);const N=e.render.frame;s[P.id]!==N&&(h(P),s[P.id]=N)}function f(P){const T=d();P.__bindingPointIndex=T;const w=n.createBuffer(),G=P.__size,N=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,G,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,w),w}function d(){for(let P=0;P<a;P++)if(o.indexOf(P)===-1)return o.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(P){const T=r[P.id],w=P.uniforms,G=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let N=0,F=w.length;N<F;N++){const W=Array.isArray(w[N])?w[N]:[w[N]];for(let R=0,A=W.length;R<A;R++){const k=W[R];if(v(k,N,R,G)===!0){const J=k.__offset,q=Array.isArray(k.value)?k.value:[k.value];let Q=0;for(let Y=0;Y<q.length;Y++){const $=q[Y],ue=M($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,J+Q,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,Q),Q+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,J,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(P,T,w,G){const N=P.value,F=T+"_"+w;if(G[F]===void 0)return typeof N=="number"||typeof N=="boolean"?G[F]=N:G[F]=N.clone(),!0;{const W=G[F];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return G[F]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function S(P){const T=P.uniforms;let w=0;const G=16;for(let F=0,W=T.length;F<W;F++){const R=Array.isArray(T[F])?T[F]:[T[F]];for(let A=0,k=R.length;A<k;A++){const J=R[A],q=Array.isArray(J.value)?J.value:[J.value];for(let Q=0,Y=q.length;Q<Y;Q++){const $=q[Q],ue=M($),K=w%G,ve=K%ue.boundary,ye=K+ve;w+=ve,ye!==0&&G-ye<ue.storage&&(w+=G-ye),J.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=w,w+=ue.storage}}}const N=w%G;return N>0&&(w+=G-N),P.__size=w,P.__cache={},this}function M(P){const T={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(T.boundary=4,T.storage=4):P.isVector2?(T.boundary=8,T.storage=8):P.isVector3||P.isColor?(T.boundary=16,T.storage=12):P.isVector4?(T.boundary=16,T.storage=16):P.isMatrix3?(T.boundary=48,T.storage=48):P.isMatrix4?(T.boundary=64,T.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),T}function _(P){const T=P.target;T.removeEventListener("dispose",_);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function g(){for(const P in r)n.deleteBuffer(r[P]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}class Xm{constructor(e={}){const{canvas:t=Du(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),S=new Int32Array(4);let M=null,_=null;const g=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=wn,this.toneMappingExposure=1;const T=this;let w=!1,G=0,N=0,F=null,W=-1,R=null;const A=new st,k=new st;let J=null;const q=new Ye(0);let Q=0,Y=t.width,$=t.height,ue=1,K=null,ve=null;const ye=new st(0,0,Y,$),Ae=new st(0,0,Y,$);let Ge=!1;const Ze=new ra;let ee=!1,fe=!1;const Ee=new ct,xe=new V,Le=new st,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function nt(){return F===null?ue:1}let U=i;function lt(x,b){return t.getContext(x,b)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",pe,!1),U===null){const b="webgl2";if(U=lt(b,x),U===null)throw lt(b)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let je,$e,Te,ot,Ue,Fe,L,E,X,se,le,re,Pe,me,oe,Oe,ae,ge,We,he,m,Se,ke,it;function H(){je=new $d(U),je.init(),Se=new Nm(U,je),$e=new Xd(U,je,e,Se),Te=new Im(U),ot=new ep(U),Ue=new vm,Fe=new Um(U,je,Te,Ue,$e,Se,ot),L=new Yd(T),E=new jd(T),X=new oh(U),ke=new Gd(U,X),se=new Zd(U,X,ot,ke),le=new np(U,se,X,ot),We=new tp(U,$e,Fe),Oe=new qd(Ue),re=new gm(T,L,E,je,$e,ke,Oe),Pe=new Gm(T,Ue),me=new ym,oe=new wm(je),ge=new Vd(T,L,E,Te,le,h,l),ae=new Lm(T,le,$e),it=new Wm(U,ot,$e,Te),he=new Wd(U,je,ot),m=new Qd(U,je,ot),ot.programs=re.programs,T.capabilities=$e,T.extensions=je,T.properties=Ue,T.renderLists=me,T.shadowMap=ae,T.state=Te,T.info=ot}H();const de=new Hm(T,U);this.xr=de,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=je.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=je.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(x){x!==void 0&&(ue=x,this.setSize(Y,$,!1))},this.getSize=function(x){return x.set(Y,$)},this.setSize=function(x,b,D=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,$=b,t.width=Math.floor(x*ue),t.height=Math.floor(b*ue),D===!0&&(t.style.width=x+"px",t.style.height=b+"px"),this.setViewport(0,0,x,b)},this.getDrawingBufferSize=function(x){return x.set(Y*ue,$*ue).floor()},this.setDrawingBufferSize=function(x,b,D){Y=x,$=b,ue=D,t.width=Math.floor(x*D),t.height=Math.floor(b*D),this.setViewport(0,0,x,b)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(ye)},this.setViewport=function(x,b,D,B){x.isVector4?ye.set(x.x,x.y,x.z,x.w):ye.set(x,b,D,B),Te.viewport(A.copy(ye).multiplyScalar(ue).round())},this.getScissor=function(x){return x.copy(Ae)},this.setScissor=function(x,b,D,B){x.isVector4?Ae.set(x.x,x.y,x.z,x.w):Ae.set(x,b,D,B),Te.scissor(k.copy(Ae).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(x){Te.setScissorTest(Ge=x)},this.setOpaqueSort=function(x){K=x},this.setTransparentSort=function(x){ve=x},this.getClearColor=function(x){return x.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(x=!0,b=!0,D=!0){let B=0;if(x){let O=!1;if(F!==null){const j=F.texture.format;O=j===ea||j===Qo||j===Zo}if(O){const j=F.texture.type,Z=j===dn||j===Xn||j===$i||j===Pi||j===jo||j===$o,ie=ge.getClearColor(),ce=ge.getClearAlpha(),be=ie.r,Re=ie.g,Me=ie.b;Z?(v[0]=be,v[1]=Re,v[2]=Me,v[3]=ce,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=be,S[1]=Re,S[2]=Me,S[3]=ce,U.clearBufferiv(U.COLOR,0,S))}else B|=U.COLOR_BUFFER_BIT}b&&(B|=U.DEPTH_BUFFER_BIT),D&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),me.dispose(),oe.dispose(),Ue.dispose(),L.dispose(),E.dispose(),le.dispose(),ke.dispose(),it.dispose(),re.dispose(),de.dispose(),de.removeEventListener("sessionstart",Tt),de.removeEventListener("sessionend",$n),en.stop()};function te(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ne(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const x=ot.autoReset,b=ae.enabled,D=ae.autoUpdate,B=ae.needsUpdate,O=ae.type;H(),ot.autoReset=x,ae.enabled=b,ae.autoUpdate=D,ae.needsUpdate=B,ae.type=O}function pe(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ie(x){const b=x.target;b.removeEventListener("dispose",Ie),qe(b)}function qe(x){ut(x),Ue.remove(x)}function ut(x){const b=Ue.get(x).programs;b!==void 0&&(b.forEach(function(D){re.releaseProgram(D)}),x.isShaderMaterial&&re.releaseShaderCache(x))}this.renderBufferDirect=function(x,b,D,B,O,j){b===null&&(b=Ne);const Z=O.isMesh&&O.matrixWorld.determinant()<0,ie=C(x,b,D,B,O);Te.setMaterial(B,Z);let ce=D.index,be=1;if(B.wireframe===!0){if(ce=se.getWireframeAttribute(D),ce===void 0)return;be=2}const Re=D.drawRange,Me=D.attributes.position;let Xe=Re.start*be,Ve=(Re.start+Re.count)*be;j!==null&&(Xe=Math.max(Xe,j.start*be),Ve=Math.min(Ve,(j.start+j.count)*be)),ce!==null?(Xe=Math.max(Xe,0),Ve=Math.min(Ve,ce.count)):Me!=null&&(Xe=Math.max(Xe,0),Ve=Math.min(Ve,Me.count));const Je=Ve-Xe;if(Je<0||Je===1/0)return;ke.setup(O,B,ie,D,ce);let ht,De=he;if(ce!==null&&(ht=X.get(ce),De=m,De.setIndex(ht)),O.isMesh)B.wireframe===!0?(Te.setLineWidth(B.wireframeLinewidth*nt()),De.setMode(U.LINES)):De.setMode(U.TRIANGLES);else if(O.isLine){let Ce=B.linewidth;Ce===void 0&&(Ce=1),Te.setLineWidth(Ce*nt()),O.isLineSegments?De.setMode(U.LINES):O.isLineLoop?De.setMode(U.LINE_LOOP):De.setMode(U.LINE_STRIP)}else O.isPoints?De.setMode(U.POINTS):O.isSprite&&De.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)De.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))De.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,xt=O._multiDrawCounts,Qe=O._multiDrawCount,zt=ce?X.get(ce).bytesPerElement:1,ei=Ue.get(B).currentProgram.getUniforms();for(let It=0;It<Qe;It++)ei.setValue(U,"_gl_DrawID",It),De.render(Ce[It]/zt,xt[It])}else if(O.isInstancedMesh)De.renderInstances(Xe,Je,O.count);else if(D.isInstancedBufferGeometry){const Ce=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,xt=Math.min(D.instanceCount,Ce);De.renderInstances(Xe,Je,xt)}else De.render(Xe,Je)};function pt(x,b,D){x.transparent===!0&&x.side===Kt&&x.forceSinglePass===!1?(x.side=Pt,x.needsUpdate=!0,c(x,b,D),x.side=Cn,x.needsUpdate=!0,c(x,b,D),x.side=Kt):c(x,b,D)}this.compile=function(x,b,D=null){D===null&&(D=x),_=oe.get(D),_.init(b),P.push(_),D.traverseVisible(function(O){O.isLight&&O.layers.test(b.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),x!==D&&x.traverseVisible(function(O){O.isLight&&O.layers.test(b.layers)&&(_.pushLight(O),O.castShadow&&_.pushShadow(O))}),_.setupLights();const B=new Set;return x.traverse(function(O){const j=O.material;if(j)if(Array.isArray(j))for(let Z=0;Z<j.length;Z++){const ie=j[Z];pt(ie,D,O),B.add(ie)}else pt(j,D,O),B.add(j)}),P.pop(),_=null,B},this.compileAsync=function(x,b,D=null){const B=this.compile(x,b,D);return new Promise(O=>{function j(){if(B.forEach(function(Z){Ue.get(Z).currentProgram.isReady()&&B.delete(Z)}),B.size===0){O(x);return}setTimeout(j,10)}je.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Ke=null;function Ct(x){Ke&&Ke(x)}function Tt(){en.stop()}function $n(){en.start()}const en=new tl;en.setAnimationLoop(Ct),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(x){Ke=x,de.setAnimationLoop(x),x===null?en.stop():en.start()},de.addEventListener("sessionstart",Tt),de.addEventListener("sessionend",$n),this.render=function(x,b){if(b!==void 0&&b.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),b.parent===null&&b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(b),b=de.getCamera()),x.isScene===!0&&x.onBeforeRender(T,x,b,F),_=oe.get(x,P.length),_.init(b),P.push(_),Ee.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),Ze.setFromProjectionMatrix(Ee),fe=this.localClippingEnabled,ee=Oe.init(this.clippingPlanes,fe),M=me.get(x,g.length),M.init(),g.push(M),de.enabled===!0&&de.isPresenting===!0){const j=T.xr.getDepthSensingMesh();j!==null&&Zn(j,b,-1/0,T.sortObjects)}Zn(x,b,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(K,ve),Be=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Be&&ge.addToRenderList(M,x),this.info.render.frame++,ee===!0&&Oe.beginShadows();const D=_.state.shadowsArray;ae.render(D,x,b),ee===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=M.opaque,O=M.transmissive;if(_.setupLights(),b.isArrayCamera){const j=b.cameras;if(O.length>0)for(let Z=0,ie=j.length;Z<ie;Z++){const ce=j[Z];ki(B,O,x,ce)}Be&&ge.render(x);for(let Z=0,ie=j.length;Z<ie;Z++){const ce=j[Z];Bi(M,x,ce,ce.viewport)}}else O.length>0&&ki(B,O,x,b),Be&&ge.render(x),Bi(M,x,b);F!==null&&(Fe.updateMultisampleRenderTarget(F),Fe.updateRenderTargetMipmap(F)),x.isScene===!0&&x.onAfterRender(T,x,b),ke.resetDefaultState(),W=-1,R=null,P.pop(),P.length>0?(_=P[P.length-1],ee===!0&&Oe.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?M=g[g.length-1]:M=null};function Zn(x,b,D,B){if(x.visible===!1)return;if(x.layers.test(b.layers)){if(x.isGroup)D=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(b);else if(x.isLight)_.pushLight(x),x.castShadow&&_.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ze.intersectsSprite(x)){B&&Le.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ee);const Z=le.update(x),ie=x.material;ie.visible&&M.push(x,Z,ie,D,Le.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ze.intersectsObject(x))){const Z=le.update(x),ie=x.material;if(B&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Le.copy(x.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),Le.copy(Z.boundingSphere.center)),Le.applyMatrix4(x.matrixWorld).applyMatrix4(Ee)),Array.isArray(ie)){const ce=Z.groups;for(let be=0,Re=ce.length;be<Re;be++){const Me=ce[be],Xe=ie[Me.materialIndex];Xe&&Xe.visible&&M.push(x,Z,Xe,D,Le.z,Me)}}else ie.visible&&M.push(x,Z,ie,D,Le.z,null)}}const j=x.children;for(let Z=0,ie=j.length;Z<ie;Z++)Zn(j[Z],b,D,B)}function Bi(x,b,D,B){const O=x.opaque,j=x.transmissive,Z=x.transparent;_.setupLightsView(D),ee===!0&&Oe.setGlobalState(T.clippingPlanes,D),B&&Te.viewport(A.copy(B)),O.length>0&&tn(O,b,D),j.length>0&&tn(j,b,D),Z.length>0&&tn(Z,b,D),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ki(x,b,D,B){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[B.id]===void 0&&(_.state.transmissionRenderTarget[B.id]=new qn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?nr:dn,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const j=_.state.transmissionRenderTarget[B.id],Z=B.viewport||A;j.setSize(Z.z,Z.w);const ie=T.getRenderTarget();T.setRenderTarget(j),T.getClearColor(q),Q=T.getClearAlpha(),Q<1&&T.setClearColor(16777215,.5),T.clear(),Be&&ge.render(D);const ce=T.toneMapping;T.toneMapping=wn;const be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),_.setupLightsView(B),ee===!0&&Oe.setGlobalState(T.clippingPlanes,B),tn(x,D,B),Fe.updateMultisampleRenderTarget(j),Fe.updateRenderTargetMipmap(j),je.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let Me=0,Xe=b.length;Me<Xe;Me++){const Ve=b[Me],Je=Ve.object,ht=Ve.geometry,De=Ve.material,Ce=Ve.group;if(De.side===Kt&&Je.layers.test(B.layers)){const xt=De.side;De.side=Pt,De.needsUpdate=!0,Qn(Je,D,B,ht,De,Ce),De.side=xt,De.needsUpdate=!0,Re=!0}}Re===!0&&(Fe.updateMultisampleRenderTarget(j),Fe.updateRenderTargetMipmap(j))}T.setRenderTarget(ie),T.setClearColor(q,Q),be!==void 0&&(B.viewport=be),T.toneMapping=ce}function tn(x,b,D){const B=b.isScene===!0?b.overrideMaterial:null;for(let O=0,j=x.length;O<j;O++){const Z=x[O],ie=Z.object,ce=Z.geometry,be=B===null?Z.material:B,Re=Z.group;ie.layers.test(D.layers)&&Qn(ie,b,D,ce,be,Re)}}function Qn(x,b,D,B,O,j){x.onBeforeRender(T,b,D,B,O,j),x.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.transparent===!0&&O.side===Kt&&O.forceSinglePass===!1?(O.side=Pt,O.needsUpdate=!0,T.renderBufferDirect(D,b,B,O,x,j),O.side=Cn,O.needsUpdate=!0,T.renderBufferDirect(D,b,B,O,x,j),O.side=Kt):T.renderBufferDirect(D,b,B,O,x,j),x.onAfterRender(T,b,D,B,O,j)}function c(x,b,D){b.isScene!==!0&&(b=Ne);const B=Ue.get(x),O=_.state.lights,j=_.state.shadowsArray,Z=O.state.version,ie=re.getParameters(x,O.state,j,b,D),ce=re.getProgramCacheKey(ie);let be=B.programs;B.environment=x.isMeshStandardMaterial?b.environment:null,B.fog=b.fog,B.envMap=(x.isMeshStandardMaterial?E:L).get(x.envMap||B.environment),B.envMapRotation=B.environment!==null&&x.envMap===null?b.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",Ie),be=new Map,B.programs=be);let Re=be.get(ce);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===Z)return y(x,ie),Re}else ie.uniforms=re.getUniforms(x),x.onBeforeCompile(ie,T),Re=re.acquireProgram(ie,ce),be.set(ce,Re),B.uniforms=ie.uniforms;const Me=B.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Me.clippingPlanes=Oe.uniform),y(x,ie),B.needsLights=z(x),B.lightsStateVersion=Z,B.needsLights&&(Me.ambientLightColor.value=O.state.ambient,Me.lightProbe.value=O.state.probe,Me.directionalLights.value=O.state.directional,Me.directionalLightShadows.value=O.state.directionalShadow,Me.spotLights.value=O.state.spot,Me.spotLightShadows.value=O.state.spotShadow,Me.rectAreaLights.value=O.state.rectArea,Me.ltc_1.value=O.state.rectAreaLTC1,Me.ltc_2.value=O.state.rectAreaLTC2,Me.pointLights.value=O.state.point,Me.pointLightShadows.value=O.state.pointShadow,Me.hemisphereLights.value=O.state.hemi,Me.directionalShadowMap.value=O.state.directionalShadowMap,Me.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Me.spotShadowMap.value=O.state.spotShadowMap,Me.spotLightMatrix.value=O.state.spotLightMatrix,Me.spotLightMap.value=O.state.spotLightMap,Me.pointShadowMap.value=O.state.pointShadowMap,Me.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function p(x){if(x.uniformsList===null){const b=x.currentProgram.getUniforms();x.uniformsList=Vr.seqWithValue(b.seq,x.uniforms)}return x.uniformsList}function y(x,b){const D=Ue.get(x);D.outputColorSpace=b.outputColorSpace,D.batching=b.batching,D.batchingColor=b.batchingColor,D.instancing=b.instancing,D.instancingColor=b.instancingColor,D.instancingMorph=b.instancingMorph,D.skinning=b.skinning,D.morphTargets=b.morphTargets,D.morphNormals=b.morphNormals,D.morphColors=b.morphColors,D.morphTargetsCount=b.morphTargetsCount,D.numClippingPlanes=b.numClippingPlanes,D.numIntersection=b.numClipIntersection,D.vertexAlphas=b.vertexAlphas,D.vertexTangents=b.vertexTangents,D.toneMapping=b.toneMapping}function C(x,b,D,B,O){b.isScene!==!0&&(b=Ne),Fe.resetTextureUnits();const j=b.fog,Z=B.isMeshStandardMaterial?b.environment:null,ie=F===null?T.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Rn,ce=(B.isMeshStandardMaterial?E:L).get(B.envMap||Z),be=B.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,Re=!!D.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Me=!!D.morphAttributes.position,Xe=!!D.morphAttributes.normal,Ve=!!D.morphAttributes.color;let Je=wn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Je=T.toneMapping);const ht=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,De=ht!==void 0?ht.length:0,Ce=Ue.get(B),xt=_.state.lights;if(ee===!0&&(fe===!0||x!==R)){const Ot=x===R&&B.id===W;Oe.setState(B,x,Ot)}let Qe=!1;B.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==xt.state.version||Ce.outputColorSpace!==ie||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==ce||B.fog===!0&&Ce.fog!==j||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Oe.numPlanes||Ce.numIntersection!==Oe.numIntersection)||Ce.vertexAlphas!==be||Ce.vertexTangents!==Re||Ce.morphTargets!==Me||Ce.morphNormals!==Xe||Ce.morphColors!==Ve||Ce.toneMapping!==Je||Ce.morphTargetsCount!==De)&&(Qe=!0):(Qe=!0,Ce.__version=B.version);let zt=Ce.currentProgram;Qe===!0&&(zt=c(B,b,O));let ei=!1,It=!1,gs=!1;const ft=zt.getUniforms(),_n=Ce.uniforms;if(Te.useProgram(zt.program)&&(ei=!0,It=!0,gs=!0),B.id!==W&&(W=B.id,It=!0),ei||R!==x){ft.setValue(U,"projectionMatrix",x.projectionMatrix),ft.setValue(U,"viewMatrix",x.matrixWorldInverse);const Ot=ft.map.cameraPosition;Ot!==void 0&&Ot.setValue(U,xe.setFromMatrixPosition(x.matrixWorld)),$e.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ft.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),R!==x&&(R=x,It=!0,gs=!0)}if(O.isSkinnedMesh){ft.setOptional(U,O,"bindMatrix"),ft.setOptional(U,O,"bindMatrixInverse");const Ot=O.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ft.setValue(U,"boneTexture",Ot.boneTexture,Fe))}O.isBatchedMesh&&(ft.setOptional(U,O,"batchingTexture"),ft.setValue(U,"batchingTexture",O._matricesTexture,Fe),ft.setOptional(U,O,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",O._indirectTexture,Fe),ft.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",O._colorsTexture,Fe));const vs=D.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&We.update(O,D,zt),(It||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ft.setValue(U,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(_n.envMap.value=ce,_n.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&b.environment!==null&&(_n.envMapIntensity.value=b.environmentIntensity),It&&(ft.setValue(U,"toneMappingExposure",T.toneMappingExposure),Ce.needsLights&&I(_n,gs),j&&B.fog===!0&&Pe.refreshFogUniforms(_n,j),Pe.refreshMaterialUniforms(_n,B,ue,$,_.state.transmissionRenderTarget[x.id]),Vr.upload(U,p(Ce),_n,Fe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Vr.upload(U,p(Ce),_n,Fe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ft.setValue(U,"center",O.center),ft.setValue(U,"modelViewMatrix",O.modelViewMatrix),ft.setValue(U,"normalMatrix",O.normalMatrix),ft.setValue(U,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ot=B.uniformsGroups;for(let xs=0,Ol=Ot.length;xs<Ol;xs++){const _a=Ot[xs];it.update(_a,zt),it.bind(_a,zt)}}return zt}function I(x,b){x.ambientLightColor.needsUpdate=b,x.lightProbe.needsUpdate=b,x.directionalLights.needsUpdate=b,x.directionalLightShadows.needsUpdate=b,x.pointLights.needsUpdate=b,x.pointLightShadows.needsUpdate=b,x.spotLights.needsUpdate=b,x.spotLightShadows.needsUpdate=b,x.rectAreaLights.needsUpdate=b,x.hemisphereLights.needsUpdate=b}function z(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(x,b,D){Ue.get(x.texture).__webglTexture=b,Ue.get(x.depthTexture).__webglTexture=D;const B=Ue.get(x);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=D===void 0,B.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,b){const D=Ue.get(x);D.__webglFramebuffer=b,D.__useDefaultFramebuffer=b===void 0},this.setRenderTarget=function(x,b=0,D=0){F=x,G=b,N=D;let B=!0,O=null,j=!1,Z=!1;if(x){const ce=Ue.get(x);ce.__useDefaultFramebuffer!==void 0?(Te.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):ce.__webglFramebuffer===void 0?Fe.setupRenderTarget(x):ce.__hasExternalTextures&&Fe.rebindTextures(x,Ue.get(x.texture).__webglTexture,Ue.get(x.depthTexture).__webglTexture);const be=x.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(Z=!0);const Re=Ue.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[b])?O=Re[b][D]:O=Re[b],j=!0):x.samples>0&&Fe.useMultisampledRTT(x)===!1?O=Ue.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?O=Re[D]:O=Re,A.copy(x.viewport),k.copy(x.scissor),J=x.scissorTest}else A.copy(ye).multiplyScalar(ue).floor(),k.copy(Ae).multiplyScalar(ue).floor(),J=Ge;if(Te.bindFramebuffer(U.FRAMEBUFFER,O)&&B&&Te.drawBuffers(x,O),Te.viewport(A),Te.scissor(k),Te.setScissorTest(J),j){const ce=Ue.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+b,ce.__webglTexture,D)}else if(Z){const ce=Ue.get(x.texture),be=b||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ce.__webglTexture,D||0,be)}W=-1},this.readRenderTargetPixels=function(x,b,D,B,O,j,Z){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ie=Ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Z!==void 0&&(ie=ie[Z]),ie){Te.bindFramebuffer(U.FRAMEBUFFER,ie);try{const ce=x.texture,be=ce.format,Re=ce.type;if(!$e.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}b>=0&&b<=x.width-B&&D>=0&&D<=x.height-O&&U.readPixels(b,D,B,O,Se.convert(be),Se.convert(Re),j)}finally{const ce=F!==null?Ue.get(F).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(x,b,D,B,O,j,Z){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ie=Ue.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Z!==void 0&&(ie=ie[Z]),ie){Te.bindFramebuffer(U.FRAMEBUFFER,ie);try{const ce=x.texture,be=ce.format,Re=ce.type;if(!$e.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(b>=0&&b<=x.width-B&&D>=0&&D<=x.height-O){const Me=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.bufferData(U.PIXEL_PACK_BUFFER,j.byteLength,U.STREAM_READ),U.readPixels(b,D,B,O,Se.convert(be),Se.convert(Re),0),U.flush();const Xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await Uu(U,Xe,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Me),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,j)}finally{U.deleteBuffer(Me),U.deleteSync(Xe)}return j}}finally{const ce=F!==null?Ue.get(F).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ce)}}},this.copyFramebufferToTexture=function(x,b=null,D=0){x.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),b=arguments[0]||null,x=arguments[1]);const B=Math.pow(2,-D),O=Math.floor(x.image.width*B),j=Math.floor(x.image.height*B),Z=b!==null?b.x:0,ie=b!==null?b.y:0;Fe.setTexture2D(x,0),U.copyTexSubImage2D(U.TEXTURE_2D,D,0,0,Z,ie,O,j),Te.unbindTexture()},this.copyTextureToTexture=function(x,b,D=null,B=null,O=0){x.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,x=arguments[1],b=arguments[2],O=arguments[3]||0,D=null);let j,Z,ie,ce,be,Re;D!==null?(j=D.max.x-D.min.x,Z=D.max.y-D.min.y,ie=D.min.x,ce=D.min.y):(j=x.image.width,Z=x.image.height,ie=0,ce=0),B!==null?(be=B.x,Re=B.y):(be=0,Re=0);const Me=Se.convert(b.format),Xe=Se.convert(b.type);Fe.setTexture2D(b,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,b.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,b.unpackAlignment);const Ve=U.getParameter(U.UNPACK_ROW_LENGTH),Je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ht=U.getParameter(U.UNPACK_SKIP_PIXELS),De=U.getParameter(U.UNPACK_SKIP_ROWS),Ce=U.getParameter(U.UNPACK_SKIP_IMAGES),xt=x.isCompressedTexture?x.mipmaps[O]:x.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ie),U.pixelStorei(U.UNPACK_SKIP_ROWS,ce),x.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,be,Re,j,Z,Me,Xe,xt.data):x.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,be,Re,xt.width,xt.height,Me,xt.data):U.texSubImage2D(U.TEXTURE_2D,O,be,Re,j,Z,Me,Xe,xt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ve),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ht),U.pixelStorei(U.UNPACK_SKIP_ROWS,De),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ce),O===0&&b.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(x,b,D=null,B=null,O=0){x.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,B=arguments[1]||null,x=arguments[2],b=arguments[3],O=arguments[4]||0);let j,Z,ie,ce,be,Re,Me,Xe,Ve;const Je=x.isCompressedTexture?x.mipmaps[O]:x.image;D!==null?(j=D.max.x-D.min.x,Z=D.max.y-D.min.y,ie=D.max.z-D.min.z,ce=D.min.x,be=D.min.y,Re=D.min.z):(j=Je.width,Z=Je.height,ie=Je.depth,ce=0,be=0,Re=0),B!==null?(Me=B.x,Xe=B.y,Ve=B.z):(Me=0,Xe=0,Ve=0);const ht=Se.convert(b.format),De=Se.convert(b.type);let Ce;if(b.isData3DTexture)Fe.setTexture3D(b,0),Ce=U.TEXTURE_3D;else if(b.isDataArrayTexture||b.isCompressedArrayTexture)Fe.setTexture2DArray(b,0),Ce=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,b.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,b.unpackAlignment);const xt=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),zt=U.getParameter(U.UNPACK_SKIP_PIXELS),ei=U.getParameter(U.UNPACK_SKIP_ROWS),It=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Je.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,be),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re),x.isDataTexture||x.isData3DTexture?U.texSubImage3D(Ce,O,Me,Xe,Ve,j,Z,ie,ht,De,Je.data):b.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,O,Me,Xe,Ve,j,Z,ie,ht,Je.data):U.texSubImage3D(Ce,O,Me,Xe,Ve,j,Z,ie,ht,De,Je),U.pixelStorei(U.UNPACK_ROW_LENGTH,xt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,zt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ei),U.pixelStorei(U.UNPACK_SKIP_IMAGES,It),O===0&&b.generateMipmaps&&U.generateMipmap(Ce),Te.unbindTexture()},this.initRenderTarget=function(x){Ue.get(x).__webglFramebuffer===void 0&&Fe.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Fe.setTextureCube(x,0):x.isData3DTexture?Fe.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Fe.setTexture2DArray(x,0):Fe.setTexture2D(x,0),Te.unbindTexture()},this.resetState=function(){G=0,N=0,F=null,Te.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ta?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===ns?"display-p3":"srgb"}}class oa{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new oa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qm extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,v=(o-f)/h;return(r+v)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new we:new V);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new V,r=[],s=[],o=[],a=new V,l=new ct;for(let v=0;v<=e;v++){const S=v/e;r[v]=this.getTangentAt(S,new V)}s[0]=new V,o[0]=new V;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=u&&(u=f,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),o[v]=o[v-1].clone(),a.crossVectors(r[v-1],r[v]),a.length()>Number.EPSILON){a.normalize();const S=Math.acos(Mt(r[v-1].dot(r[v]),-1,1));s[v].applyMatrix4(l.makeRotationAxis(a,S))}o[v].crossVectors(r[v],s[v])}if(t===!0){let v=Math.acos(Mt(s[0].dot(s[e]),-1,1));v/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(v=-v);for(let S=1;S<=e;S++)s[S].applyMatrix4(l.makeRotationAxis(r[S],v*S)),o[S].crossVectors(r[S],s[S])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class aa extends Qt{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new we){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,v=u-this.aY;l=h*f-v*d+this.aX,u=h*d+v*f+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Ym extends aa{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ca(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,f,d){let h=(o-s)/u-(a-s)/(u+f)+(a-o)/f,v=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,v*=f,r(o,a,h,v)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Pr=new V,Ks=new ca,Js=new ca,js=new ca;class Km extends Qt{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new V){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,f;this.closed||a>0?u=r[(a-1)%s]:(Pr.subVectors(r[0],r[1]).add(r[0]),u=Pr);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Pr.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let S=Math.pow(u.distanceToSquared(d),v),M=Math.pow(d.distanceToSquared(h),v),_=Math.pow(h.distanceToSquared(f),v);M<1e-4&&(M=1),S<1e-4&&(S=M),_<1e-4&&(_=M),Ks.initNonuniformCatmullRom(u.x,d.x,h.x,f.x,S,M,_),Js.initNonuniformCatmullRom(u.y,d.y,h.y,f.y,S,M,_),js.initNonuniformCatmullRom(u.z,d.z,h.z,f.z,S,M,_)}else this.curveType==="catmullrom"&&(Ks.initCatmullRom(u.x,d.x,h.x,f.x,this.tension),Js.initCatmullRom(u.y,d.y,h.y,f.y,this.tension),js.initCatmullRom(u.z,d.z,h.z,f.z,this.tension));return i.set(Ks.calc(l),Js.calc(l),js.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new V().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dc(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Jm(n,e){const t=1-n;return t*t*e}function jm(n,e){return 2*(1-n)*n*e}function $m(n,e){return n*n*e}function Ji(n,e,t,i){return Jm(n,e)+jm(n,t)+$m(n,i)}function Zm(n,e){const t=1-n;return t*t*t*e}function Qm(n,e){const t=1-n;return 3*t*t*n*e}function e_(n,e){return 3*(1-n)*n*n*e}function t_(n,e){return n*n*n*e}function ji(n,e,t,i,r){return Zm(n,e)+Qm(n,t)+e_(n,i)+t_(n,r)}class cl extends Qt{constructor(e=new we,t=new we,i=new we,r=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new we){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ji(e,r.x,s.x,o.x,a.x),ji(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class n_ extends Qt{constructor(e=new V,t=new V,i=new V,r=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new V){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ji(e,r.x,s.x,o.x,a.x),ji(e,r.y,s.y,o.y,a.y),ji(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ll extends Qt{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i_ extends Qt{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ul extends Qt{constructor(e=new we,t=new we,i=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ji(e,r.x,s.x,o.x),Ji(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class r_ extends Qt{constructor(e=new V,t=new V,i=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new V){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Ji(e,r.x,s.x,o.x),Ji(e,r.y,s.y,o.y),Ji(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hl extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(dc(a,l.x,u.x,f.x,d.x),dc(a,l.y,u.y,f.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new we().fromArray(r))}return this}}var pc=Object.freeze({__proto__:null,ArcCurve:Ym,CatmullRomCurve3:Km,CubicBezierCurve:cl,CubicBezierCurve3:n_,EllipseCurve:aa,LineCurve:ll,LineCurve3:i_,QuadraticBezierCurve:ul,QuadraticBezierCurve3:r_,SplineCurve:hl});class s_ extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const f=l[u];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new pc[r.type]().fromJSON(r))}return this}}class Ho extends s_{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ll(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new ul(this.currentPoint.clone(),new we(e,t),new we(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new cl(this.currentPoint.clone(),new we(e,t),new we(i,r),new we(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new hl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new aa(e,t,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Gr extends Ho{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new Ho().fromJSON(r))}return this}}const o_={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=fl(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,f,d,h,v;if(i&&(s=h_(n,e,s,t)),n.length>80*t){a=u=n[0],l=f=n[1];for(let S=t;S<r;S+=t)d=n[S],h=n[S+1],d<a&&(a=d),h<l&&(l=h),d>u&&(u=d),h>f&&(f=h);v=Math.max(u-a,f-l),v=v!==0?32767/v:0}return Zi(s,o,t,a,l,v,0),o}};function fl(n,e,t,i,r){let s,o;if(r===M_(n,e,t,i)>0)for(s=e;s<t;s+=i)o=mc(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=mc(s,n[s],n[s+1],o);return o&&rs(o,o.next)&&(er(o),o=o.next),o}function Yn(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rs(t,t.next)||at(t.prev,t,t.next)===0)){if(er(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Zi(n,e,t,i,r,s,o){if(!n)return;!o&&s&&__(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?c_(n,i,r,s):a_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),er(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=l_(Yn(n),e,t),Zi(n,e,t,i,r,s,2)):o===2&&u_(n,e,t,i,r,s):Zi(Yn(n),e,t,i,r,s,1);break}}}function a_(n){const e=n.prev,t=n,i=n.next;if(at(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,f=r<s?r<o?r:o:s<o?s:o,d=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,v=a>l?a>u?a:u:l>u?l:u;let S=i.next;for(;S!==e;){if(S.x>=f&&S.x<=h&&S.y>=d&&S.y<=v&&Si(r,a,s,l,o,u,S.x,S.y)&&at(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function c_(n,e,t,i){const r=n.prev,s=n,o=n.next;if(at(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,f=r.y,d=s.y,h=o.y,v=a<l?a<u?a:u:l<u?l:u,S=f<d?f<h?f:h:d<h?d:h,M=a>l?a>u?a:u:l>u?l:u,_=f>d?f>h?f:h:d>h?d:h,g=Vo(v,S,e,t,i),P=Vo(M,_,e,t,i);let T=n.prevZ,w=n.nextZ;for(;T&&T.z>=g&&w&&w.z<=P;){if(T.x>=v&&T.x<=M&&T.y>=S&&T.y<=_&&T!==r&&T!==o&&Si(a,f,l,d,u,h,T.x,T.y)&&at(T.prev,T,T.next)>=0||(T=T.prevZ,w.x>=v&&w.x<=M&&w.y>=S&&w.y<=_&&w!==r&&w!==o&&Si(a,f,l,d,u,h,w.x,w.y)&&at(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;T&&T.z>=g;){if(T.x>=v&&T.x<=M&&T.y>=S&&T.y<=_&&T!==r&&T!==o&&Si(a,f,l,d,u,h,T.x,T.y)&&at(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;w&&w.z<=P;){if(w.x>=v&&w.x<=M&&w.y>=S&&w.y<=_&&w!==r&&w!==o&&Si(a,f,l,d,u,h,w.x,w.y)&&at(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function l_(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!rs(r,s)&&dl(r,i,i.next,s)&&Qi(r,s)&&Qi(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),er(i),er(i.next),i=n=s),i=i.next}while(i!==n);return Yn(i)}function u_(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&x_(o,a)){let l=pl(o,a);o=Yn(o,o.next),l=Yn(l,l.next),Zi(o,e,t,i,r,s,0),Zi(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function h_(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=fl(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(v_(u));for(r.sort(f_),s=0;s<r.length;s++)t=d_(r[s],t);return t}function f_(n,e){return n.x-e.x}function d_(n,e){const t=p_(n,e);if(!t)return e;const i=pl(t,n);return Yn(i,i.next),Yn(t,t.next)}function p_(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=s&&h>i&&(i=h,r=t.x<t.next.x?t:t.next,h===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let f=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Si(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),Qi(t,n)&&(d<f||d===f&&(t.x>r.x||t.x===r.x&&m_(r,t)))&&(r=t,f=d)),t=t.next;while(t!==a);return r}function m_(n,e){return at(n.prev,n,e.prev)<0&&at(e.next,n,n.next)<0}function __(n,e,t,i){let r=n;do r.z===0&&(r.z=Vo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,g_(r)}function g_(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function Vo(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function v_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Si(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function x_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!y_(n,e)&&(Qi(n,e)&&Qi(e,n)&&S_(n,e)&&(at(n.prev,n,e.prev)||at(n,e.prev,e))||rs(n,e)&&at(n.prev,n,n.next)>0&&at(e.prev,e,e.next)>0)}function at(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rs(n,e){return n.x===e.x&&n.y===e.y}function dl(n,e,t,i){const r=Ir(at(n,e,t)),s=Ir(at(n,e,i)),o=Ir(at(t,i,n)),a=Ir(at(t,i,e));return!!(r!==s&&o!==a||r===0&&Lr(n,t,e)||s===0&&Lr(n,i,e)||o===0&&Lr(t,n,i)||a===0&&Lr(t,e,i))}function Lr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ir(n){return n>0?1:n<0?-1:0}function y_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&dl(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Qi(n,e){return at(n.prev,n,n.next)<0?at(n,e,n.next)>=0&&at(n,n.prev,e)>=0:at(n,e,n.prev)<0||at(n,n.next,e)<0}function S_(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pl(n,e){const t=new Go(n.i,n.x,n.y),i=new Go(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function mc(n,e,t,i){const r=new Go(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function er(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Go(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function M_(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class wi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return wi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];_c(e),gc(i,e);let o=e.length;t.forEach(_c);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,gc(i,t[l]);const a=o_.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function _c(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gc(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class la extends Pn{constructor(e=new Gr([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let f=0;f<e.length;f++)u(e[f]),this.addGroup(a,l,f),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(o,2));function u(f){const d=r.length/3,h=f.extractPoints(t);let v=h.shape;const S=h.holes;wi.isClockWise(v)===!1&&(v=v.reverse());for(let _=0,g=S.length;_<g;_++){const P=S[_];wi.isClockWise(P)===!0&&(S[_]=P.reverse())}const M=wi.triangulateShape(v,S);for(let _=0,g=S.length;_<g;_++){const P=S[_];v=v.concat(P)}for(let _=0,g=v.length;_<g;_++){const P=v[_];r.push(P.x,P.y,0),s.push(0,0,1),o.push(P.x,P.y)}for(let _=0,g=M.length;_<g;_++){const P=M[_],T=P[0]+d,w=P[1]+d,G=P[2]+d;i.push(T,w,G),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return E_(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new la(i,e.curveSegments)}}function E_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class jn extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class T_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=u.length;d<h;d+=2){const v=u[d],S=u[d+1];if(v.global&&(v.lastIndex=0),v.test(f))return S}return null}}}const b_=new T_;class ua{constructor(e){this.manager=e!==void 0?e:b_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ua.DEFAULT_MATERIAL_NAME="__DEFAULT";const cn={};class w_ extends Error{constructor(e,t){super(e),this.response=t}}class A_ extends ua{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(cn[e]!==void 0){cn[e].push({onLoad:t,onProgress:i,onError:r});return}cn[e]=[],cn[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=cn[e],d=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),v=h?parseInt(h):0,S=v!==0;let M=0;const _=new ReadableStream({start(g){P();function P(){d.read().then(({done:T,value:w})=>{if(T)g.close();else{M+=w.byteLength;const G=new ProgressEvent("progress",{lengthComputable:S,loaded:M,total:v});for(let N=0,F=f.length;N<F;N++){const W=f[N];W.onProgress&&W.onProgress(G)}g.enqueue(w),P()}},T=>{g.error(T)})}}});return new Response(_)}else throw new w_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,v=new TextDecoder(h);return u.arrayBuffer().then(S=>v.decode(S))}}}).then(u=>{vc.add(e,u);const f=cn[e];delete cn[e];for(let d=0,h=f.length;d<h;d++){const v=f[d];v.onLoad&&v.onLoad(u)}}).catch(u=>{const f=cn[e];if(f===void 0)throw this.manager.itemError(e),u;delete cn[e];for(let d=0,h=f.length;d<h;d++){const v=f[d];v.onError&&v.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ha extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const $s=new ct,xc=new V,yc=new V;class ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;xc.setFromMatrixPosition(e.matrixWorld),t.position.copy(xc),yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yc),t.updateMatrixWorld(),$s.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($s),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($s)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new ct,qi=new V,Zs=new V;class C_ extends ml{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qi.setFromMatrixPosition(e.matrixWorld),i.position.copy(qi),Zs.copy(i.position),Zs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zs),i.updateMatrixWorld(),r.makeTranslation(-qi.x,-qi.y,-qi.z),Sc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}}class fa extends ha{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new C_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class R_ extends ml{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P_ extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new R_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class L_ extends ha{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class I_{constructor(){this.type="ShapePath",this.color=new Ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ho,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const P=[];for(let T=0,w=g.length;T<w;T++){const G=g[T],N=new Gr;N.curves=G.curves,P.push(N)}return P}function i(g,P){const T=P.length;let w=!1;for(let G=T-1,N=0;N<T;G=N++){let F=P[G],W=P[N],R=W.x-F.x,A=W.y-F.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(F=P[N],R=-R,W=P[G],A=-A),g.y<F.y||g.y>W.y)continue;if(g.y===F.y){if(g.x===F.x)return!0}else{const k=A*(g.x-F.x)-R*(g.y-F.y);if(k===0)return!0;if(k<0)continue;w=!w}}else{if(g.y!==F.y)continue;if(W.x<=g.x&&g.x<=F.x||F.x<=g.x&&g.x<=W.x)return!0}}return w}const r=wi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Gr,l.curves=a.curves,u.push(l),u;let f=!r(s[0].getPoints());f=e?!f:f;const d=[],h=[];let v=[],S=0,M;h[S]=void 0,v[S]=[];for(let g=0,P=s.length;g<P;g++)a=s[g],M=a.getPoints(),o=r(M),o=e?!o:o,o?(!f&&h[S]&&S++,h[S]={s:new Gr,p:M},h[S].s.curves=a.curves,f&&S++,v[S]=[]):v[S].push({h:a,p:M[0]});if(!h[0])return t(s);if(h.length>1){let g=!1,P=0;for(let T=0,w=h.length;T<w;T++)d[T]=[];for(let T=0,w=h.length;T<w;T++){const G=v[T];for(let N=0;N<G.length;N++){const F=G[N];let W=!0;for(let R=0;R<h.length;R++)i(F.p,h[R].p)&&(T!==R&&P++,W?(W=!1,d[R].push(F)):g=!0);W&&d[T].push(F)}}P>0&&g===!1&&(v=d)}let _;for(let g=0,P=h.length;g<P;g++){l=h[g].s,u.push(l),_=v[g];for(let T=0,w=_.length;T<w;T++)l.holes.push(_[T].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);class D_ extends ua{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new A_(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new U_(e)}}class U_{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=N_(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function N_(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const f=i[u];if(f===`
`)a=0,l-=s;else{const d=F_(f,r,a,l,t);a+=d.offsetX,o.push(d.path)}}return o}function F_(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new I_;let a,l,u,f,d,h,v,S;if(s.o){const M=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let _=0,g=M.length;_<g;)switch(M[_++]){case"m":a=M[_++]*e+t,l=M[_++]*e+i,o.moveTo(a,l);break;case"l":a=M[_++]*e+t,l=M[_++]*e+i,o.lineTo(a,l);break;case"q":u=M[_++]*e+t,f=M[_++]*e+i,d=M[_++]*e+t,h=M[_++]*e+i,o.quadraticCurveTo(d,h,u,f);break;case"b":u=M[_++]*e+t,f=M[_++]*e+i,d=M[_++]*e+t,h=M[_++]*e+i,v=M[_++]*e+t,S=M[_++]*e+i,o.bezierCurveTo(d,h,v,S,u,f);break}}return{offsetX:s.ha*e,path:o}}const O_=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`,B_=`
varying vec2 vUv;
uniform vec3 iResolution;
uniform float iTime;
uniform float iImpulse;

float colormap_red(float x) {
    if (x < 0.0) {
        return 54.0 / 255.0;
    } else if (x < 20049.0 / 82979.0) {
        return (829.79 * x + 54.51) / 255.0;
    } else {
        return 1.0;
    }
}

float colormap_green(float x) {
    if (x < 20049.0 / 82979.0) {
        return 0.0;
    } else if (x < 327013.0 / 810990.0) {
        return (8546482679670.0 / 10875673217.0 * x - 2064961390770.0 / 10875673217.0) / 255.0;
    } else if (x <= 1.0) {
        return (103806720.0 / 483977.0 * x + 19607415.0 / 483977.0) / 255.0;
    } else {
        return 1.0;
    }
}

float colormap_blue(float x) {
    if (x < 0.0) {
        return 54.0 / 255.0;
    } else if (x < 7249.0 / 82979.0) {
        return (829.79 * x + 54.51) / 255.0;
    } else if (x < 20049.0 / 82979.0) {
        return 127.0 / 255.0;
    } else if (x < 327013.0 / 810990.0) {
        return (792.02249341361393720147485376583 * x - 64.364790735602331034989206222672) / 255.0;
    } else {
        return 1.0;
    }
}

vec4 colormap(float x) {
    return vec4(colormap_red(x), colormap_green(x), colormap_blue(x), 1.0);
}

// https://iquilezles.org/articles/warp
/*float noise( in vec2 x )
{
    vec2 p = floor(x);
    vec2 f = fract(x);
    f = f*f*(3.0-2.0*f);
    float a = textureLod(iChannel0,(p+vec2(0.5,0.5))/256.0,0.0).x;
	float b = textureLod(iChannel0,(p+vec2(1.5,0.5))/256.0,0.0).x;
	float c = textureLod(iChannel0,(p+vec2(0.5,1.5))/256.0,0.0).x;
	float d = textureLod(iChannel0,(p+vec2(1.5,1.5))/256.0,0.0).x;
    return mix(mix( a, b,f.x), mix( c, d,f.x),f.y);
}*/


float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);

    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

const mat2 mtx = mat2( 0.80,  0.60, -0.60,  0.80 );

float fbm( vec2 p )
{
    float f = 0.0;

    f += 0.500000*noise( p + iTime / 10.  ); p = mtx*p*2.02;
    f += 0.031250*noise( p ); p = mtx*p*2.01;
    f += 0.250000*noise( p ); p = mtx*p*2.03;
    f += 0.125000*noise( p ); p = mtx*p*2.01;
    f += 0.062500*noise( p ); p = mtx*p*2.04;
    f += 0.015625*noise( p + sin(iTime / 10.) );

    return f/0.96875;
}

float pattern( in vec2 p )
{
	return fbm( p + fbm( p + fbm( p ) ) );
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.x;
    float shade = pattern(uv);
    fragColor = vec4(colormap(shade).rgb, iImpulse);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
`,Wo={iTime:{value:0},iImpulse:{value:0},iResolution:{value:new V(window.innerWidth,window.innerHeight,1)}},k_=new Fi(2,2),_l=new pn({vertexShader:O_,fragmentShader:B_,uniforms:Wo});_l.depthWrite=!1;const z_=new wt(k_,_l),Wr=100,Qr=0,mn=[-1.8,-.6,.6,1.8],Ft=new qm;Ft.fog=new oa(16689918,.003);const ss=new Xm({antialias:!0});ss.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ss.domElement);const Di=new Nt(30,window.innerWidth/window.innerHeight,.1,600);Di.position.z=12;Di.position.y=5;Di.rotation.x=Math.PI*-.1;const H_=new L_(4210752,10);Ft.add(H_);const V_=new P_(15724270,1.1);Ft.add(V_);const da=new fa(15658734,1e6,200);da.position.z=-600;da.position.y=10;Ft.add(da);const gl=[],os=(n,e)=>{const t=new fa(n,1e3,500);t.position.y=10,t.position.z=-10*e,Ft.add(t),gl.push(t)};os(15606510,2);os(15615214,5);os(15623918,7);os(15632622,9);const Xr=[],as=n=>{const e=new fa(0,0,100);e.position.x=n,e.position.y=1,e.position.z=-Qr,Ft.add(e),Xr.push(e)};as(mn[0]);as(mn[1]);as(mn[2]);as(mn[3]);const G_=new Fi(5,1e3),W_=new jn({color:16777215}),vl=new wt(G_,W_);vl.rotation.x=-Math.PI/2;Ft.add(vl);const X_=new Ln(5,1,.1),q_=new jn({color:249630993}),cs=new wt(X_,q_);cs.position.z=-Qr;cs.position.y=-.4;Ft.add(cs);const Y_=new Ln(1,.1,1e3),K_=new jn({color:1118481}),ls=n=>{const e=new wt(Y_,K_);e.position.x=n,Ft.add(e)};ls(mn[0]);ls(mn[1]);ls(mn[2]);ls(mn[3]);const xl=[],J_=new jn({color:2289390,emissiveIntensity:100}),j_=new jn({color:2289186}),yl=new jn({color:15658734}),$_=new jn({color:15606306}),Z_=new Ln(1,.6,1),Q_=()=>{const n=new wt(Z_,yl);n.position.z=Wr,xl.push(n),Ft.add(n)};for(let n=0;n<100;n++)Q_();const eg=new D_,tg="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json",ng=await new Promise((n,e)=>{eg.load(tg,n,void 0,e)}),ig=new ia({color:1118481,transparent:!0,opacity:.8,side:Kt}),Sl=n=>{const e=ng.generateShapes(n,.5),t=new la(e);t.computeBoundingBox();const i=-.5*(t.boundingBox.max.x-t.boundingBox.min.x);return t.translate(i,0,0),t},or=new wt(Sl(`   Score: 0
   Combo: 0
   Hits: 0
   Fails: 0`),ig);or.position.z=-15;or.position.y=2;or.position.x=-5;Ft.add(or);Ft.add(z_);const Dr=[1,2,4,8];class rg{hits=0;fails=0;combo=0;score=0;onFail(){this.fails++,this.combo=0,this._updateText()}onSuccess(){this.hits++,this.combo++,this.score+=this.combo>Dr.length-1?Dr[Dr.length-1]:Dr[this.combo],this._updateText()}_updateText(){or.geometry=Sl(`   Score: ${this.score}
   Combo: ${this.combo}
   Hits: ${this.hits}
   Fails: ${this.fails}`)}}function sg(n,e){n.innerHTML="",e.forEach(([t,i])=>{const r=document.createElement("option");r.value=t,r.textContent=i,n.appendChild(r)})}function Mc(n,e,t,i,r){const s=t-e,o=r-i;return(n-e)/s*o+i}function Xo(n,e,t){return n+(e-n)*t}function og(n,e){let t=1/0,i=-1;return n.forEach((r,s)=>{const o=e(r);o<t&&(t=o,i=s)}),n[i]}const ag=new Ye(16711680),cg=new Ye(65280);class lg{constructor(e){this.game=e}lightsIntensity=0;backgroundTime=0;update(e){this.backgroundTime+=e,this.updateCubes(),this.lightsIntensity=Xo(this.lightsIntensity,.5,.01),Wo.iTime.value=this.backgroundTime,Wo.iImpulse.value=this.lightsIntensity,Xr.forEach(t=>t.intensity=Xo(t.intensity,0,.1)),gl.forEach((t,i)=>{t.intensity=this.lightsIntensity*1e3,t.position.x=Math.sin(this.game._gameTime+i*10)*10,t.position.z=Math.cos(this.game._gameTime+i*10)*10})}updateCubes(){const e=this.game.getDisplayNotes();for(let t=0;t<100;t++){const i=xl[t],r=e[t];if(!r){i.position.z=Wr;continue}const s=Mc(r.startTime,this.game._gameTime,this.game.timeTop,Qr,Wr),o=mn[r.note];r.status==null?i.material=yl:r.status?i.material=j_:r.status?console.warn(r.status):i.material=$_,!r.flashed&&r.startTime<this.game._gameTime&&(r.flashed=!0,this.onNotePlay(),console.log("Flashed"),i.material=J_),i.position.x=o,i.position.z=-s}}onNotePlay(){this.lightsIntensity=Math.min(1,this.lightsIntensity*1.1),this.backgroundTime+=.1}onHitOrMiss(e,t){Xr[t].intensity=100,Xr[t].color=e?cg:ag}setFinishSize(e,t){const i=Mc(e,0,t,Qr,Wr);cs.scale.z=i}}const Ec=2,ug=.1;class hg{constructor(e){this.instruments=e,this.setHitTime(.05)}_gameTime=0;timeTop=0;timeBot=0;_bottomNoteIndex=0;_bottomClickableNoteIndex=0;_topClickableNoteIndex=0;_topNoteIndex=0;selectedInstrument=0;hitTime=.05;combo=new rg;visuals=new lg(this);setInstrument(e){console.log("setInstrument",e),this.selectedInstrument=e,this._bottomNoteIndex=0,this._bottomClickableNoteIndex=0,this._topClickableNoteIndex=0,this._topNoteIndex=0,console.log(this.instruments[e].notes)}update(e){this._gameTime=e,this.timeTop=e+Ec,this.timeBot=e-ug;const t=e+this.hitTime,i=e-this.hitTime,r=this.instruments[this.selectedInstrument].notes;for(let s=this._bottomNoteIndex;s<r.length;s++){const o=r[s],a=o.startTime;if(a<this.timeBot)this._bottomNoteIndex=s;else if(a<i)this._bottomClickableNoteIndex=s,o.status===void 0&&(r[s].status=!1,console.warn("Missed note"),this.onFail(o.note,!1));else if(a<t)this._topClickableNoteIndex=s;else if(a<this.timeTop)this._topNoteIndex=s;else break}}getDisplayNotes(){return this.instruments[this.selectedInstrument].notes.slice(this._bottomNoteIndex,this._topNoteIndex+1)}getClickableNotes(){return this.instruments[this.selectedInstrument].notes.slice(this._bottomClickableNoteIndex,this._topClickableNoteIndex+1)}click(e){const i=this.getClickableNotes().filter(s=>e==s.note);if(i.length==0)return this.onFail(e,!0),console.warn("No candidates"),!1;const r=og(i,s=>Math.abs(s.startTime-this._gameTime));return console.log(r.startTime-this._gameTime,r.startTime-this._gameTime>0?"late":"early"),r.status!==void 0?(console.warn(r.status?"Already hit":"Already miss"),this.onFail(e,!0),!1):(r.status=!0,this.onSuccess(e),!0)}onFail(e,t=!1){this.combo.onFail(),t&&this.visuals.onHitOrMiss(!1,e)}onSuccess(e){this.combo.onSuccess(),this.visuals.onHitOrMiss(!0,e)}setHitTime(e){this.hitTime=e,this.visuals.setFinishSize(this.hitTime,Ec)}}function fg(n){console.log(n);const e=n.tracks.map(i=>{const r=new Set,s={name:i.instrument.name,notes:[],number:i.instrument.number};return i.notes.forEach(o=>{const a=o.midi%4,l=`${a}-${Math.floor(o.time/.1)}`;r.has(l)||(r.add(l),s.notes.push({note:a,startTime:o.time,duration:o.duration}))}),s}).filter(i=>i.notes.length>0).sort((i,r)=>i.notes[0].startTime-r.notes[0].startTime),t=e[0].notes[0].startTime;return console.log(e),console.log("startTime",t),{instruments:e,startTime:t}}var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dg(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var Ml={},us={};function pg(n){var e=new At(n),t=e.readChunk();if(t.id!="MThd")throw"Bad MIDI file.  Expected 'MHdr', got: '"+t.id+"'";for(var i=mg(t.data),r=[],s=0;!e.eof()&&s<i.numTracks;s++){var o=e.readChunk();if(o.id!="MTrk")throw"Bad MIDI file.  Expected 'MTrk', got: '"+o.id+"'";var a=_g(o.data);r.push(a)}return{header:i,tracks:r}}function mg(n){var e=new At(n),t=e.readUInt16(),i=e.readUInt16(),r={format:t,numTracks:i},s=e.readUInt16();return s&32768?(r.framesPerSecond=256-(s>>8),r.ticksPerFrame=s&255):r.ticksPerBeat=s,r}function _g(n){for(var e=new At(n),t=[];!e.eof();){var i=s();t.push(i)}return t;var r;function s(){var o={};o.deltaTime=e.readVarInt();var a=e.readUInt8();if((a&240)===240)if(a===255){o.meta=!0;var l=e.readUInt8(),u=e.readVarInt();switch(l){case 0:if(o.type="sequenceNumber",u!==2)throw"Expected length for sequenceNumber event is 2, got "+u;return o.number=e.readUInt16(),o;case 1:return o.type="text",o.text=e.readString(u),o;case 2:return o.type="copyrightNotice",o.text=e.readString(u),o;case 3:return o.type="trackName",o.text=e.readString(u),o;case 4:return o.type="instrumentName",o.text=e.readString(u),o;case 5:return o.type="lyrics",o.text=e.readString(u),o;case 6:return o.type="marker",o.text=e.readString(u),o;case 7:return o.type="cuePoint",o.text=e.readString(u),o;case 32:if(o.type="channelPrefix",u!=1)throw"Expected length for channelPrefix event is 1, got "+u;return o.channel=e.readUInt8(),o;case 33:if(o.type="portPrefix",u!=1)throw"Expected length for portPrefix event is 1, got "+u;return o.port=e.readUInt8(),o;case 47:if(o.type="endOfTrack",u!=0)throw"Expected length for endOfTrack event is 0, got "+u;return o;case 81:if(o.type="setTempo",u!=3)throw"Expected length for setTempo event is 3, got "+u;return o.microsecondsPerBeat=e.readUInt24(),o;case 84:if(o.type="smpteOffset",u!=5)throw"Expected length for smpteOffset event is 5, got "+u;var f=e.readUInt8(),d={0:24,32:25,64:29,96:30};return o.frameRate=d[f&96],o.hour=f&31,o.min=e.readUInt8(),o.sec=e.readUInt8(),o.frame=e.readUInt8(),o.subFrame=e.readUInt8(),o;case 88:if(o.type="timeSignature",u!=2&&u!=4)throw"Expected length for timeSignature event is 4 or 2, got "+u;return o.numerator=e.readUInt8(),o.denominator=1<<e.readUInt8(),u===4?(o.metronome=e.readUInt8(),o.thirtyseconds=e.readUInt8()):(o.metronome=36,o.thirtyseconds=8),o;case 89:if(o.type="keySignature",u!=2)throw"Expected length for keySignature event is 2, got "+u;return o.key=e.readInt8(),o.scale=e.readUInt8(),o;case 127:return o.type="sequencerSpecific",o.data=e.readBytes(u),o;default:return o.type="unknownMeta",o.data=e.readBytes(u),o.metatypeByte=l,o}}else if(a==240){o.type="sysEx";var u=e.readVarInt();return o.data=e.readBytes(u),o}else if(a==247){o.type="endSysEx";var u=e.readVarInt();return o.data=e.readBytes(u),o}else throw"Unrecognised MIDI event type byte: "+a;else{var h;if(a&128)h=e.readUInt8(),r=a;else{if(r===null)throw"Running status byte encountered before status byte";h=a,a=r,o.running=!0}var v=a>>4;switch(o.channel=a&15,v){case 8:return o.type="noteOff",o.noteNumber=h,o.velocity=e.readUInt8(),o;case 9:var S=e.readUInt8();return o.type=S===0?"noteOff":"noteOn",o.noteNumber=h,o.velocity=S,S===0&&(o.byte9=!0),o;case 10:return o.type="noteAftertouch",o.noteNumber=h,o.amount=e.readUInt8(),o;case 11:return o.type="controller",o.controllerType=h,o.value=e.readUInt8(),o;case 12:return o.type="programChange",o.programNumber=h,o;case 13:return o.type="channelAftertouch",o.amount=h,o;case 14:return o.type="pitchBend",o.value=h+(e.readUInt8()<<7)-8192,o;default:throw"Unrecognised MIDI event type: "+v}}}}function At(n){this.buffer=n,this.bufferLen=this.buffer.length,this.pos=0}At.prototype.eof=function(){return this.pos>=this.bufferLen};At.prototype.readUInt8=function(){var n=this.buffer[this.pos];return this.pos+=1,n};At.prototype.readInt8=function(){var n=this.readUInt8();return n&128?n-256:n};At.prototype.readUInt16=function(){var n=this.readUInt8(),e=this.readUInt8();return(n<<8)+e};At.prototype.readInt16=function(){var n=this.readUInt16();return n&32768?n-65536:n};At.prototype.readUInt24=function(){var n=this.readUInt8(),e=this.readUInt8(),t=this.readUInt8();return(n<<16)+(e<<8)+t};At.prototype.readInt24=function(){var n=this.readUInt24();return n&8388608?n-16777216:n};At.prototype.readUInt32=function(){var n=this.readUInt8(),e=this.readUInt8(),t=this.readUInt8(),i=this.readUInt8();return(n<<24)+(e<<16)+(t<<8)+i};At.prototype.readBytes=function(n){var e=this.buffer.slice(this.pos,this.pos+n);return this.pos+=n,e};At.prototype.readString=function(n){var e=this.readBytes(n);return String.fromCharCode.apply(null,e)};At.prototype.readVarInt=function(){for(var n=0;!this.eof();){var e=this.readUInt8();if(e&128)n+=e&127,n<<=7;else return n+e}return n};At.prototype.readChunk=function(){var n=this.readString(4),e=this.readUInt32(),t=this.readBytes(e);return{id:n,length:e,data:t}};var gg=pg;function vg(n,e){if(typeof n!="object")throw"Invalid MIDI data";e=e||{};var t=n.header||{},i=n.tracks||[],r,s=i.length,o=new gt;for(xg(o,t,s),r=0;r<s;r++)yg(o,i[r],e);return o.buffer}function xg(n,e,t){var i=e.format==null?1:e.format,r=128;e.timeDivision?r=e.timeDivision:e.ticksPerFrame&&e.framesPerSecond?r=-(e.framesPerSecond&255)<<8|e.ticksPerFrame&255:e.ticksPerBeat&&(r=e.ticksPerBeat&32767);var s=new gt;s.writeUInt16(i),s.writeUInt16(t),s.writeUInt16(r),n.writeChunk("MThd",s.buffer)}function yg(n,e,t){var i=new gt,r,s=e.length,o=null;for(r=0;r<s;r++)(t.running===!1||!t.running&&!e[r].running)&&(o=null),o=Sg(i,e[r],o,t.useByte9ForNoteOff);n.writeChunk("MTrk",i.buffer)}function Sg(n,e,t,i){var r=e.type,s=e.deltaTime,o=e.text||"",a=e.data||[],l=null;switch(n.writeVarInt(s),r){case"sequenceNumber":n.writeUInt8(255),n.writeUInt8(0),n.writeVarInt(2),n.writeUInt16(e.number);break;case"text":n.writeUInt8(255),n.writeUInt8(1),n.writeVarInt(o.length),n.writeString(o);break;case"copyrightNotice":n.writeUInt8(255),n.writeUInt8(2),n.writeVarInt(o.length),n.writeString(o);break;case"trackName":n.writeUInt8(255),n.writeUInt8(3),n.writeVarInt(o.length),n.writeString(o);break;case"instrumentName":n.writeUInt8(255),n.writeUInt8(4),n.writeVarInt(o.length),n.writeString(o);break;case"lyrics":n.writeUInt8(255),n.writeUInt8(5),n.writeVarInt(o.length),n.writeString(o);break;case"marker":n.writeUInt8(255),n.writeUInt8(6),n.writeVarInt(o.length),n.writeString(o);break;case"cuePoint":n.writeUInt8(255),n.writeUInt8(7),n.writeVarInt(o.length),n.writeString(o);break;case"channelPrefix":n.writeUInt8(255),n.writeUInt8(32),n.writeVarInt(1),n.writeUInt8(e.channel);break;case"portPrefix":n.writeUInt8(255),n.writeUInt8(33),n.writeVarInt(1),n.writeUInt8(e.port);break;case"endOfTrack":n.writeUInt8(255),n.writeUInt8(47),n.writeVarInt(0);break;case"setTempo":n.writeUInt8(255),n.writeUInt8(81),n.writeVarInt(3),n.writeUInt24(e.microsecondsPerBeat);break;case"smpteOffset":n.writeUInt8(255),n.writeUInt8(84),n.writeVarInt(5);var u={24:0,25:32,29:64,30:96},f=e.hour&31|u[e.frameRate];n.writeUInt8(f),n.writeUInt8(e.min),n.writeUInt8(e.sec),n.writeUInt8(e.frame),n.writeUInt8(e.subFrame);break;case"timeSignature":n.writeUInt8(255),n.writeUInt8(88),n.writeVarInt(4),n.writeUInt8(e.numerator);var d=Math.floor(Math.log(e.denominator)/Math.LN2)&255;n.writeUInt8(d),n.writeUInt8(e.metronome),n.writeUInt8(e.thirtyseconds||8);break;case"keySignature":n.writeUInt8(255),n.writeUInt8(89),n.writeVarInt(2),n.writeInt8(e.key),n.writeUInt8(e.scale);break;case"sequencerSpecific":n.writeUInt8(255),n.writeUInt8(127),n.writeVarInt(a.length),n.writeBytes(a);break;case"unknownMeta":e.metatypeByte!=null&&(n.writeUInt8(255),n.writeUInt8(e.metatypeByte),n.writeVarInt(a.length),n.writeBytes(a));break;case"sysEx":n.writeUInt8(240),n.writeVarInt(a.length),n.writeBytes(a);break;case"endSysEx":n.writeUInt8(247),n.writeVarInt(a.length),n.writeBytes(a);break;case"noteOff":var h=i!==!1&&e.byte9||i&&e.velocity==0?144:128;l=h|e.channel,l!==t&&n.writeUInt8(l),n.writeUInt8(e.noteNumber),n.writeUInt8(e.velocity);break;case"noteOn":l=144|e.channel,l!==t&&n.writeUInt8(l),n.writeUInt8(e.noteNumber),n.writeUInt8(e.velocity);break;case"noteAftertouch":l=160|e.channel,l!==t&&n.writeUInt8(l),n.writeUInt8(e.noteNumber),n.writeUInt8(e.amount);break;case"controller":l=176|e.channel,l!==t&&n.writeUInt8(l),n.writeUInt8(e.controllerType),n.writeUInt8(e.value);break;case"programChange":l=192|e.channel,l!==t&&n.writeUInt8(l),n.writeUInt8(e.programNumber);break;case"channelAftertouch":l=208|e.channel,l!==t&&n.writeUInt8(l),n.writeUInt8(e.amount);break;case"pitchBend":l=224|e.channel,l!==t&&n.writeUInt8(l);var v=8192+e.value,S=v&127,M=v>>7&127;n.writeUInt8(S),n.writeUInt8(M);break;default:throw"Unrecognized event type: "+r}return l}function gt(){this.buffer=[]}gt.prototype.writeUInt8=function(n){this.buffer.push(n&255)};gt.prototype.writeInt8=gt.prototype.writeUInt8;gt.prototype.writeUInt16=function(n){var e=n>>8&255,t=n&255;this.writeUInt8(e),this.writeUInt8(t)};gt.prototype.writeInt16=gt.prototype.writeUInt16;gt.prototype.writeUInt24=function(n){var e=n>>16&255,t=n>>8&255,i=n&255;this.writeUInt8(e),this.writeUInt8(t),this.writeUInt8(i)};gt.prototype.writeInt24=gt.prototype.writeUInt24;gt.prototype.writeUInt32=function(n){var e=n>>24&255,t=n>>16&255,i=n>>8&255,r=n&255;this.writeUInt8(e),this.writeUInt8(t),this.writeUInt8(i),this.writeUInt8(r)};gt.prototype.writeInt32=gt.prototype.writeUInt32;gt.prototype.writeBytes=function(n){this.buffer=this.buffer.concat(Array.prototype.slice.call(n,0))};gt.prototype.writeString=function(n){var e,t=n.length,i=[];for(e=0;e<t;e++)i.push(n.codePointAt(e));this.writeBytes(i)};gt.prototype.writeVarInt=function(n){if(n<0)throw"Cannot write negative variable-length integer";if(n<=127)this.writeUInt8(n);else{var e=n,t=[];for(t.push(e&127),e>>=7;e;){var i=e&127|128;t.push(i),e>>=7}this.writeBytes(t.reverse())}};gt.prototype.writeChunk=function(n,e){this.writeString(n),this.writeUInt32(e.length),this.writeBytes(e)};var Mg=vg;us.parseMidi=gg;us.writeMidi=Mg;var es={},Kn={};Object.defineProperty(Kn,"__esModule",{value:!0});Kn.insert=Kn.search=void 0;function El(n,e,t){t===void 0&&(t="ticks");var i=0,r=n.length,s=r;if(r>0&&n[r-1][t]<=e)return r-1;for(;i<s;){var o=Math.floor(i+(s-i)/2),a=n[o],l=n[o+1];if(a[t]===e){for(var u=o;u<n.length;u++){var f=n[u];f[t]===e&&(o=u)}return o}else{if(a[t]<e&&l[t]>e)return o;a[t]>e?s=o:a[t]<e&&(i=o+1)}}return-1}Kn.search=El;function Eg(n,e,t){if(t===void 0&&(t="ticks"),n.length){var i=El(n,e[t],t);n.splice(i+1,0,e)}else n.push(e)}Kn.insert=Eg;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.Header=n.keySignatureKeys=void 0;var e=Kn,t=new WeakMap;n.keySignatureKeys=["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"];var i=function(){function r(s){var o=this;if(this.tempos=[],this.timeSignatures=[],this.keySignatures=[],this.meta=[],this.name="",t.set(this,480),s){t.set(this,s.header.ticksPerBeat),s.tracks.forEach(function(l){l.forEach(function(u){u.meta&&(u.type==="timeSignature"?o.timeSignatures.push({ticks:u.absoluteTime,timeSignature:[u.numerator,u.denominator]}):u.type==="setTempo"?o.tempos.push({bpm:6e7/u.microsecondsPerBeat,ticks:u.absoluteTime}):u.type==="keySignature"&&o.keySignatures.push({key:n.keySignatureKeys[u.key+7],scale:u.scale===0?"major":"minor",ticks:u.absoluteTime}))})});var a=0;s.tracks[0].forEach(function(l){a+=l.deltaTime,l.meta&&(l.type==="trackName"?o.name=l.text:(l.type==="text"||l.type==="cuePoint"||l.type==="marker"||l.type==="lyrics")&&o.meta.push({text:l.text,ticks:a,type:l.type}))}),this.update()}}return r.prototype.update=function(){var s=this,o=0,a=0;this.tempos.sort(function(l,u){return l.ticks-u.ticks}),this.tempos.forEach(function(l,u){var f=u>0?s.tempos[u-1].bpm:s.tempos[0].bpm,d=l.ticks/s.ppq-a,h=60/f*d;l.time=h+o,o=l.time,a+=d}),this.timeSignatures.sort(function(l,u){return l.ticks-u.ticks}),this.timeSignatures.forEach(function(l,u){var f=u>0?s.timeSignatures[u-1]:s.timeSignatures[0],d=(l.ticks-f.ticks)/s.ppq,h=d/f.timeSignature[0]/(f.timeSignature[1]/4);f.measures=f.measures||0,l.measures=h+f.measures})},r.prototype.ticksToSeconds=function(s){var o=(0,e.search)(this.tempos,s);if(o!==-1){var a=this.tempos[o],l=a.time,u=(s-a.ticks)/this.ppq;return l+60/a.bpm*u}else{var f=s/this.ppq;return 60/120*f}},r.prototype.ticksToMeasures=function(s){var o=(0,e.search)(this.timeSignatures,s);if(o!==-1){var a=this.timeSignatures[o],l=(s-a.ticks)/this.ppq;return a.measures+l/(a.timeSignature[0]/a.timeSignature[1])/4}else return s/this.ppq/4},Object.defineProperty(r.prototype,"ppq",{get:function(){return t.get(this)},enumerable:!1,configurable:!0}),r.prototype.secondsToTicks=function(s){var o=(0,e.search)(this.tempos,s,"time");if(o!==-1){var a=this.tempos[o],l=a.time,u=s-l,f=u/(60/a.bpm);return Math.round(a.ticks+f*this.ppq)}else{var d=s/.5;return Math.round(d*this.ppq)}},r.prototype.toJSON=function(){return{keySignatures:this.keySignatures,meta:this.meta,name:this.name,ppq:this.ppq,tempos:this.tempos.map(function(s){return{bpm:s.bpm,ticks:s.ticks}}),timeSignatures:this.timeSignatures}},r.prototype.fromJSON=function(s){this.name=s.name,this.tempos=s.tempos.map(function(o){return Object.assign({},o)}),this.timeSignatures=s.timeSignatures.map(function(o){return Object.assign({},o)}),this.keySignatures=s.keySignatures.map(function(o){return Object.assign({},o)}),this.meta=s.meta.map(function(o){return Object.assign({},o)}),t.set(this,s.ppq),this.update()},r.prototype.setTempo=function(s){this.tempos=[{bpm:s,ticks:0}],this.update()},r}();n.Header=i})(es);var tr={},pa={};(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.ControlChange=n.controlChangeIds=n.controlChangeNames=void 0,n.controlChangeNames={1:"modulationWheel",2:"breath",4:"footController",5:"portamentoTime",7:"volume",8:"balance",10:"pan",64:"sustain",65:"portamentoTime",66:"sostenuto",67:"softPedal",68:"legatoFootswitch",84:"portamentoControl"},n.controlChangeIds=Object.keys(n.controlChangeNames).reduce(function(r,s){return r[n.controlChangeNames[s]]=s,r},{});var e=new WeakMap,t=new WeakMap,i=function(){function r(s,o){e.set(this,o),t.set(this,s.controllerType),this.ticks=s.absoluteTime,this.value=s.value}return Object.defineProperty(r.prototype,"number",{get:function(){return t.get(this)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return n.controlChangeNames[this.number]?n.controlChangeNames[this.number]:null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"time",{get:function(){var s=e.get(this);return s.ticksToSeconds(this.ticks)},set:function(s){var o=e.get(this);this.ticks=o.secondsToTicks(s)},enumerable:!1,configurable:!0}),r.prototype.toJSON=function(){return{number:this.number,ticks:this.ticks,time:this.time,value:this.value}},r}();n.ControlChange=i})(pa);var hs={};Object.defineProperty(hs,"__esModule",{value:!0});hs.createControlChanges=void 0;var Ur=pa;function Tg(){return new Proxy({},{get:function(n,e){if(n[e])return n[e];if(Ur.controlChangeIds.hasOwnProperty(e))return n[Ur.controlChangeIds[e]]},set:function(n,e,t){return Ur.controlChangeIds.hasOwnProperty(e)?n[Ur.controlChangeIds[e]]=t:n[e]=t,!0}})}hs.createControlChanges=Tg;var fs={};Object.defineProperty(fs,"__esModule",{value:!0});fs.PitchBend=void 0;var Qs=new WeakMap,bg=function(){function n(e,t){Qs.set(this,t),this.ticks=e.absoluteTime,this.value=e.value}return Object.defineProperty(n.prototype,"time",{get:function(){var e=Qs.get(this);return e.ticksToSeconds(this.ticks)},set:function(e){var t=Qs.get(this);this.ticks=t.secondsToTicks(e)},enumerable:!1,configurable:!0}),n.prototype.toJSON=function(){return{ticks:this.ticks,time:this.time,value:this.value}},n}();fs.PitchBend=bg;var ds={},An={};Object.defineProperty(An,"__esModule",{value:!0});An.DrumKitByPatchID=An.InstrumentFamilyByID=An.instrumentByPatchID=void 0;An.instrumentByPatchID=["acoustic grand piano","bright acoustic piano","electric grand piano","honky-tonk piano","electric piano 1","electric piano 2","harpsichord","clavi","celesta","glockenspiel","music box","vibraphone","marimba","xylophone","tubular bells","dulcimer","drawbar organ","percussive organ","rock organ","church organ","reed organ","accordion","harmonica","tango accordion","acoustic guitar (nylon)","acoustic guitar (steel)","electric guitar (jazz)","electric guitar (clean)","electric guitar (muted)","overdriven guitar","distortion guitar","guitar harmonics","acoustic bass","electric bass (finger)","electric bass (pick)","fretless bass","slap bass 1","slap bass 2","synth bass 1","synth bass 2","violin","viola","cello","contrabass","tremolo strings","pizzicato strings","orchestral harp","timpani","string ensemble 1","string ensemble 2","synthstrings 1","synthstrings 2","choir aahs","voice oohs","synth voice","orchestra hit","trumpet","trombone","tuba","muted trumpet","french horn","brass section","synthbrass 1","synthbrass 2","soprano sax","alto sax","tenor sax","baritone sax","oboe","english horn","bassoon","clarinet","piccolo","flute","recorder","pan flute","blown bottle","shakuhachi","whistle","ocarina","lead 1 (square)","lead 2 (sawtooth)","lead 3 (calliope)","lead 4 (chiff)","lead 5 (charang)","lead 6 (voice)","lead 7 (fifths)","lead 8 (bass + lead)","pad 1 (new age)","pad 2 (warm)","pad 3 (polysynth)","pad 4 (choir)","pad 5 (bowed)","pad 6 (metallic)","pad 7 (halo)","pad 8 (sweep)","fx 1 (rain)","fx 2 (soundtrack)","fx 3 (crystal)","fx 4 (atmosphere)","fx 5 (brightness)","fx 6 (goblins)","fx 7 (echoes)","fx 8 (sci-fi)","sitar","banjo","shamisen","koto","kalimba","bag pipe","fiddle","shanai","tinkle bell","agogo","steel drums","woodblock","taiko drum","melodic tom","synth drum","reverse cymbal","guitar fret noise","breath noise","seashore","bird tweet","telephone ring","helicopter","applause","gunshot"];An.InstrumentFamilyByID=["piano","chromatic percussion","organ","guitar","bass","strings","ensemble","brass","reed","pipe","synth lead","synth pad","synth effects","world","percussive","sound effects"];An.DrumKitByPatchID={0:"standard kit",8:"room kit",16:"power kit",24:"electronic kit",25:"tr-808 kit",32:"jazz kit",40:"brush kit",48:"orchestra kit",56:"sound fx kit"};Object.defineProperty(ds,"__esModule",{value:!0});ds.Instrument=void 0;var Nr=An,Tc=new WeakMap,wg=function(){function n(e,t){if(this.number=0,Tc.set(this,t),this.number=0,e){var i=e.find(function(r){return r.type==="programChange"});i&&(this.number=i.programNumber)}}return Object.defineProperty(n.prototype,"name",{get:function(){return this.percussion?Nr.DrumKitByPatchID[this.number]:Nr.instrumentByPatchID[this.number]},set:function(e){var t=Nr.instrumentByPatchID.indexOf(e);t!==-1&&(this.number=t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"family",{get:function(){return this.percussion?"drums":Nr.InstrumentFamilyByID[Math.floor(this.number/8)]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"percussion",{get:function(){var e=Tc.get(this);return e.channel===9},enumerable:!1,configurable:!0}),n.prototype.toJSON=function(){return{family:this.family,number:this.number,name:this.name}},n.prototype.fromJSON=function(e){this.number=e.number},n}();ds.Instrument=wg;var ps={};Object.defineProperty(ps,"__esModule",{value:!0});ps.Note=void 0;function Ag(n){var e=Math.floor(n/12)-1;return Tl(n)+e.toString()}function Tl(n){var e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],t=n%12;return e[t]}function Cg(n){var e=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return e.indexOf(n)}var Rg=function(){var n=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,e={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13};return function(t){var i=n.exec(t),r=i[1],s=i[2],o=e[r.toLowerCase()];return o+(parseInt(s,10)+1)*12}}(),vi=new WeakMap,Pg=function(){function n(e,t,i){vi.set(this,i),this.midi=e.midi,this.velocity=e.velocity,this.noteOffVelocity=t.velocity,this.ticks=e.ticks,this.durationTicks=t.ticks-e.ticks}return Object.defineProperty(n.prototype,"name",{get:function(){return Ag(this.midi)},set:function(e){this.midi=Rg(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"octave",{get:function(){return Math.floor(this.midi/12)-1},set:function(e){var t=e-this.octave;this.midi+=t*12},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"pitch",{get:function(){return Tl(this.midi)},set:function(e){this.midi=12*(this.octave+1)+Cg(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"duration",{get:function(){var e=vi.get(this);return e.ticksToSeconds(this.ticks+this.durationTicks)-e.ticksToSeconds(this.ticks)},set:function(e){var t=vi.get(this),i=t.secondsToTicks(this.time+e);this.durationTicks=i-this.ticks},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"time",{get:function(){var e=vi.get(this);return e.ticksToSeconds(this.ticks)},set:function(e){var t=vi.get(this);this.ticks=t.secondsToTicks(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"bars",{get:function(){var e=vi.get(this);return e.ticksToMeasures(this.ticks)},enumerable:!1,configurable:!0}),n.prototype.toJSON=function(){return{duration:this.duration,durationTicks:this.durationTicks,midi:this.midi,name:this.name,ticks:this.ticks,time:this.time,velocity:this.velocity}},n}();ps.Note=Pg;Object.defineProperty(tr,"__esModule",{value:!0});tr.Track=void 0;var eo=Kn,Lg=pa,Ig=hs,Dg=fs,bc=ds,Ug=ps,Fr=new WeakMap,Ng=function(){function n(e,t){var i=this;if(this.name="",this.notes=[],this.controlChanges=(0,Ig.createControlChanges)(),this.pitchBends=[],Fr.set(this,t),e){var r=e.find(function(h){return h.type==="trackName"});this.name=r?r.text:""}if(this.instrument=new bc.Instrument(e,this),this.channel=0,e){for(var s=e.filter(function(h){return h.type==="noteOn"}),o=e.filter(function(h){return h.type==="noteOff"}),a=function(){var h=s.shift();l.channel=h.channel;var v=o.findIndex(function(M){return M.noteNumber===h.noteNumber&&M.absoluteTime>=h.absoluteTime});if(v!==-1){var S=o.splice(v,1)[0];l.addNote({durationTicks:S.absoluteTime-h.absoluteTime,midi:h.noteNumber,noteOffVelocity:S.velocity/127,ticks:h.absoluteTime,velocity:h.velocity/127})}},l=this;s.length;)a();var u=e.filter(function(h){return h.type==="controller"});u.forEach(function(h){i.addCC({number:h.controllerType,ticks:h.absoluteTime,value:h.value/127})});var f=e.filter(function(h){return h.type==="pitchBend"});f.forEach(function(h){i.addPitchBend({ticks:h.absoluteTime,value:h.value/Math.pow(2,13)})});var d=e.find(function(h){return h.type==="endOfTrack"});this.endOfTrackTicks=d!==void 0?d.absoluteTime:void 0}}return n.prototype.addNote=function(e){var t=Fr.get(this),i=new Ug.Note({midi:0,ticks:0,velocity:1},{ticks:0,velocity:0},t);return Object.assign(i,e),(0,eo.insert)(this.notes,i,"ticks"),this},n.prototype.addCC=function(e){var t=Fr.get(this),i=new Lg.ControlChange({controllerType:e.number},t);return delete e.number,Object.assign(i,e),Array.isArray(this.controlChanges[i.number])||(this.controlChanges[i.number]=[]),(0,eo.insert)(this.controlChanges[i.number],i,"ticks"),this},n.prototype.addPitchBend=function(e){var t=Fr.get(this),i=new Dg.PitchBend({},t);return Object.assign(i,e),(0,eo.insert)(this.pitchBends,i,"ticks"),this},Object.defineProperty(n.prototype,"duration",{get:function(){if(!this.notes.length)return 0;for(var e=this.notes[this.notes.length-1].time+this.notes[this.notes.length-1].duration,t=0;t<this.notes.length-1;t++){var i=this.notes[t].time+this.notes[t].duration;e<i&&(e=i)}return e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"durationTicks",{get:function(){if(!this.notes.length)return 0;for(var e=this.notes[this.notes.length-1].ticks+this.notes[this.notes.length-1].durationTicks,t=0;t<this.notes.length-1;t++){var i=this.notes[t].ticks+this.notes[t].durationTicks;e<i&&(e=i)}return e},enumerable:!1,configurable:!0}),n.prototype.fromJSON=function(e){var t=this;this.name=e.name,this.channel=e.channel,this.instrument=new bc.Instrument(void 0,this),this.instrument.fromJSON(e.instrument),e.endOfTrackTicks!==void 0&&(this.endOfTrackTicks=e.endOfTrackTicks);for(var i in e.controlChanges)e.controlChanges[i]&&e.controlChanges[i].forEach(function(r){t.addCC({number:r.number,ticks:r.ticks,value:r.value})});e.notes.forEach(function(r){t.addNote({durationTicks:r.durationTicks,midi:r.midi,ticks:r.ticks,velocity:r.velocity})})},n.prototype.toJSON=function(){for(var e={},t=0;t<127;t++)this.controlChanges.hasOwnProperty(t)&&(e[t]=this.controlChanges[t].map(function(r){return r.toJSON()}));var i={channel:this.channel,controlChanges:e,pitchBends:this.pitchBends.map(function(r){return r.toJSON()}),instrument:this.instrument.toJSON(),name:this.name,notes:this.notes.map(function(r){return r.toJSON()})};return this.endOfTrackTicks!==void 0&&(i.endOfTrackTicks=this.endOfTrackTicks),i},n}();tr.Track=Ng;var ms={};function Fg(n){var e=[];return bl(n,e),e}function bl(n,e){for(var t=0;t<n.length;t++){var i=n[t];Array.isArray(i)?bl(i,e):e.push(i)}}const Og=Object.freeze(Object.defineProperty({__proto__:null,flatten:Fg},Symbol.toStringTag,{value:"Module"})),Bg=dg(Og);var En=Mi&&Mi.__spreadArray||function(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))};Object.defineProperty(ms,"__esModule",{value:!0});ms.encode=void 0;var kg=us,zg=es,Hg=Bg;function Vg(n,e){return[{absoluteTime:n.ticks,channel:e,deltaTime:0,noteNumber:n.midi,type:"noteOn",velocity:Math.floor(n.velocity*127)},{absoluteTime:n.ticks+n.durationTicks,channel:e,deltaTime:0,noteNumber:n.midi,type:"noteOff",velocity:Math.floor(n.noteOffVelocity*127)}]}function Gg(n){return(0,Hg.flatten)(n.notes.map(function(e){return Vg(e,n.channel)}))}function Wg(n,e){return{absoluteTime:n.ticks,channel:e,controllerType:n.number,deltaTime:0,type:"controller",value:Math.floor(n.value*127)}}function Xg(n){for(var e=[],t=0;t<127;t++)n.controlChanges.hasOwnProperty(t)&&n.controlChanges[t].forEach(function(i){e.push(Wg(i,n.channel))});return e}function qg(n,e){return{absoluteTime:n.ticks,channel:e,deltaTime:0,type:"pitchBend",value:n.value}}function Yg(n){var e=[];return n.pitchBends.forEach(function(t){e.push(qg(t,n.channel))}),e}function Kg(n){return{absoluteTime:0,channel:n.channel,deltaTime:0,programNumber:n.instrument.number,type:"programChange"}}function Jg(n){return{absoluteTime:0,deltaTime:0,meta:!0,text:n,type:"trackName"}}function jg(n){return{absoluteTime:n.ticks,deltaTime:0,meta:!0,microsecondsPerBeat:Math.floor(6e7/n.bpm),type:"setTempo"}}function $g(n){return{absoluteTime:n.ticks,deltaTime:0,denominator:n.timeSignature[1],meta:!0,metronome:24,numerator:n.timeSignature[0],thirtyseconds:8,type:"timeSignature"}}function Zg(n){var e=zg.keySignatureKeys.indexOf(n.key);return{absoluteTime:n.ticks,deltaTime:0,key:e+7,meta:!0,scale:n.scale==="major"?0:1,type:"keySignature"}}function Qg(n){return{absoluteTime:n.ticks,deltaTime:0,meta:!0,text:n.text,type:n.type}}function e0(n){var e={header:{format:1,numTracks:n.tracks.length+1,ticksPerBeat:n.header.ppq},tracks:En([En(En(En(En([{absoluteTime:0,deltaTime:0,meta:!0,text:n.header.name,type:"trackName"}],n.header.keySignatures.map(function(t){return Zg(t)}),!0),n.header.meta.map(function(t){return Qg(t)}),!0),n.header.tempos.map(function(t){return jg(t)}),!0),n.header.timeSignatures.map(function(t){return $g(t)}),!0)],n.tracks.map(function(t){return En(En(En([Jg(t.name),Kg(t)],Gg(t),!0),Xg(t),!0),Yg(t),!0)}),!0)};return e.tracks=e.tracks.map(function(t){t=t.sort(function(r,s){return r.absoluteTime-s.absoluteTime});var i=0;return t.forEach(function(r){r.deltaTime=r.absoluteTime-i,i=r.absoluteTime,delete r.absoluteTime}),t.push({deltaTime:0,meta:!0,type:"endOfTrack"}),t}),new Uint8Array((0,kg.writeMidi)(e))}ms.encode=e0;(function(n){var e=Mi&&Mi.__awaiter||function(d,h,v,S){function M(_){return _ instanceof v?_:new v(function(g){g(_)})}return new(v||(v=Promise))(function(_,g){function P(G){try{w(S.next(G))}catch(N){g(N)}}function T(G){try{w(S.throw(G))}catch(N){g(N)}}function w(G){G.done?_(G.value):M(G.value).then(P,T)}w((S=S.apply(d,h||[])).next())})},t=Mi&&Mi.__generator||function(d,h){var v={label:0,sent:function(){if(_[0]&1)throw _[1];return _[1]},trys:[],ops:[]},S,M,_,g;return g={next:P(0),throw:P(1),return:P(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function P(w){return function(G){return T([w,G])}}function T(w){if(S)throw new TypeError("Generator is already executing.");for(;v;)try{if(S=1,M&&(_=w[0]&2?M.return:w[0]?M.throw||((_=M.return)&&_.call(M),0):M.next)&&!(_=_.call(M,w[1])).done)return _;switch(M=0,_&&(w=[w[0]&2,_.value]),w[0]){case 0:case 1:_=w;break;case 4:return v.label++,{value:w[1],done:!1};case 5:v.label++,M=w[1],w=[0];continue;case 7:w=v.ops.pop(),v.trys.pop();continue;default:if(_=v.trys,!(_=_.length>0&&_[_.length-1])&&(w[0]===6||w[0]===2)){v=0;continue}if(w[0]===3&&(!_||w[1]>_[0]&&w[1]<_[3])){v.label=w[1];break}if(w[0]===6&&v.label<_[1]){v.label=_[1],_=w;break}if(_&&v.label<_[2]){v.label=_[2],v.ops.push(w);break}_[2]&&v.ops.pop(),v.trys.pop();continue}w=h.call(d,v)}catch(G){w=[6,G],M=0}finally{S=_=0}if(w[0]&5)throw w[1];return{value:w[0]?w[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0}),n.Header=n.Track=n.Midi=void 0;var i=us,r=es,s=tr,o=ms,a=function(){function d(h){var v=this,S=null;if(h){var M=h instanceof ArrayBuffer?new Uint8Array(h):h;S=(0,i.parseMidi)(M),S.tracks.forEach(function(_){var g=0;_.forEach(function(P){g+=P.deltaTime,P.absoluteTime=g})}),S.tracks=f(S.tracks)}this.header=new r.Header(S),this.tracks=[],h&&(this.tracks=S.tracks.map(function(_){return new s.Track(_,v.header)}),S.header.format===1&&this.tracks[0].duration===0&&this.tracks.shift())}return d.fromUrl=function(h){return e(this,void 0,void 0,function(){var v,S;return t(this,function(M){switch(M.label){case 0:return[4,fetch(h)];case 1:return v=M.sent(),v.ok?[4,v.arrayBuffer()]:[3,3];case 2:return S=M.sent(),[2,new d(S)];case 3:throw new Error("Could not load '".concat(h,"'"))}})})},Object.defineProperty(d.prototype,"name",{get:function(){return this.header.name},set:function(h){this.header.name=h},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"duration",{get:function(){var h=this.tracks.map(function(v){return v.duration});return Math.max.apply(Math,h)},enumerable:!1,configurable:!0}),Object.defineProperty(d.prototype,"durationTicks",{get:function(){var h=this.tracks.map(function(v){return v.durationTicks});return Math.max.apply(Math,h)},enumerable:!1,configurable:!0}),d.prototype.addTrack=function(){var h=new s.Track(void 0,this.header);return this.tracks.push(h),h},d.prototype.toArray=function(){return(0,o.encode)(this)},d.prototype.toJSON=function(){return{header:this.header.toJSON(),tracks:this.tracks.map(function(h){return h.toJSON()})}},d.prototype.fromJSON=function(h){var v=this;this.header=new r.Header,this.header.fromJSON(h.header),this.tracks=h.tracks.map(function(S){var M=new s.Track(void 0,v.header);return M.fromJSON(S),M})},d.prototype.clone=function(){var h=new d;return h.fromJSON(this.toJSON()),h},d}();n.Midi=a;var l=tr;Object.defineProperty(n,"Track",{enumerable:!0,get:function(){return l.Track}});var u=es;Object.defineProperty(n,"Header",{enumerable:!0,get:function(){return u.Header}});function f(d){for(var h=[],v=0;v<d.length;v++)for(var S=h.length,M=new Map,_=Array(16).fill(0),g=0,P=d[v];g<P.length;g++){var T=P[g],w=S,G=T.channel;if(G!==void 0){T.type==="programChange"&&(_[G]=T.programNumber);var N=_[G],F="".concat(N," ").concat(G);M.has(F)?w=M.get(F):(w=S+M.size,M.set(F,w))}h[w]||h.push([]),h[w].push(T)}return h}})(Ml);var ma={exports:{}},Ai=typeof Reflect=="object"?Reflect:null,wc=Ai&&typeof Ai.apply=="function"?Ai.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},qr;Ai&&typeof Ai.ownKeys=="function"?qr=Ai.ownKeys:Object.getOwnPropertySymbols?qr=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:qr=function(e){return Object.getOwnPropertyNames(e)};function t0(n){console&&console.warn&&console.warn(n)}var wl=Number.isNaN||function(e){return e!==e};function tt(){tt.init.call(this)}ma.exports=tt;ma.exports.once=s0;tt.EventEmitter=tt;tt.prototype._events=void 0;tt.prototype._eventsCount=0;tt.prototype._maxListeners=void 0;var Ac=10;function _s(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(tt,"defaultMaxListeners",{enumerable:!0,get:function(){return Ac},set:function(n){if(typeof n!="number"||n<0||wl(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");Ac=n}});tt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};tt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||wl(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Al(n){return n._maxListeners===void 0?tt.defaultMaxListeners:n._maxListeners}tt.prototype.getMaxListeners=function(){return Al(this)};tt.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")wc(l,this,t);else for(var u=l.length,f=Il(l,u),i=0;i<u;++i)wc(f[i],this,t);return!0};function Cl(n,e,t,i){var r,s,o;if(_s(t),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",e,t.listener?t.listener:t),s=n._events),o=s[e]),o===void 0)o=s[e]=t,++n._eventsCount;else if(typeof o=="function"?o=s[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),r=Al(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=e,a.count=o.length,t0(a)}return n}tt.prototype.addListener=function(e,t){return Cl(this,e,t,!1)};tt.prototype.on=tt.prototype.addListener;tt.prototype.prependListener=function(e,t){return Cl(this,e,t,!0)};function n0(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Rl(n,e,t){var i={fired:!1,wrapFn:void 0,target:n,type:e,listener:t},r=n0.bind(i);return r.listener=t,i.wrapFn=r,r}tt.prototype.once=function(e,t){return _s(t),this.on(e,Rl(this,e,t)),this};tt.prototype.prependOnceListener=function(e,t){return _s(t),this.prependListener(e,Rl(this,e,t)),this};tt.prototype.removeListener=function(e,t){var i,r,s,o,a;if(_s(t),r=this._events,r===void 0)return this;if(i=r[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():i0(i,s),i.length===1&&(r[e]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};tt.prototype.off=tt.prototype.removeListener;tt.prototype.removeAllListeners=function(e){var t,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function Pl(n,e,t){var i=n._events;if(i===void 0)return[];var r=i[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?r0(r):Il(r,r.length)}tt.prototype.listeners=function(e){return Pl(this,e,!0)};tt.prototype.rawListeners=function(e){return Pl(this,e,!1)};tt.listenerCount=function(n,e){return typeof n.listenerCount=="function"?n.listenerCount(e):Ll.call(n,e)};tt.prototype.listenerCount=Ll;function Ll(n){var e=this._events;if(e!==void 0){var t=e[n];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}tt.prototype.eventNames=function(){return this._eventsCount>0?qr(this._events):[]};function Il(n,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=n[i];return t}function i0(n,e){for(;e+1<n.length;e++)n[e]=n[e+1];n.pop()}function r0(n){for(var e=new Array(n.length),t=0;t<e.length;++t)e[t]=n[t].listener||n[t];return e}function s0(n,e){return new Promise(function(t,i){function r(o){n.removeListener(e,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),t([].slice.call(arguments))}Dl(n,e,s,{once:!0}),e!=="error"&&o0(n,r,{once:!0})})}function o0(n,e,t){typeof n.on=="function"&&Dl(n,"error",e,t)}function Dl(n,e,t,i){if(typeof n.on=="function")i.once?n.once(e,t):n.on(e,t);else if(typeof n.addEventListener=="function")n.addEventListener(e,function r(s){i.once&&n.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var a0=ma.exports;const Cc=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;function c0(n){n=n||{};var e=typeof n<"u"?n:{},t,i;e.ready=new Promise(function(c,p){t=c,i=p});var r={},s;for(s in e)e.hasOwnProperty(s)&&(r[s]=e[s]);var o=!0,a="";function l(c){return e.locateFile?e.locateFile(c,a):a+c}var u,f;document.currentScript&&(a=document.currentScript.src),Cc&&(a=Cc),a.indexOf("blob:")!==0?a=a.substr(0,a.lastIndexOf("/")+1):a="",u=function(p){var y=new XMLHttpRequest;return y.open("GET",p,!1),y.send(null),y.responseText};var d=e.print||console.log.bind(console),h=e.printErr||console.warn.bind(console);for(s in r)r.hasOwnProperty(s)&&(e[s]=r[s]);r=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit;function v(c,p){return Math.ceil(c/p)*p}var S;e.wasmBinary&&(S=e.wasmBinary),e.noExitRuntime&&e.noExitRuntime,typeof WebAssembly!="object"&&U("no native wasm support detected");var M,_,g=!1;function P(c,p){c||U("Assertion failed: "+p)}var T=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function w(c,p,y){for(var C=p+y,I=p;c[I]&&!(I>=C);)++I;if(I-p>16&&c.subarray&&T)return T.decode(c.subarray(p,I));for(var z="";p<I;){var x=c[p++];if(!(x&128)){z+=String.fromCharCode(x);continue}var b=c[p++]&63;if((x&224)==192){z+=String.fromCharCode((x&31)<<6|b);continue}var D=c[p++]&63;if((x&240)==224?x=(x&15)<<12|b<<6|D:x=(x&7)<<18|b<<12|D<<6|c[p++]&63,x<65536)z+=String.fromCharCode(x);else{var B=x-65536;z+=String.fromCharCode(55296|B>>10,56320|B&1023)}}return z}function G(c,p){return c?w(q,c,p):""}function N(c,p,y,C){if(!(C>0))return 0;for(var I=y,z=y+C-1,x=0;x<c.length;++x){var b=c.charCodeAt(x);if(b>=55296&&b<=57343){var D=c.charCodeAt(++x);b=65536+((b&1023)<<10)|D&1023}if(b<=127){if(y>=z)break;p[y++]=b}else if(b<=2047){if(y+1>=z)break;p[y++]=192|b>>6,p[y++]=128|b&63}else if(b<=65535){if(y+2>=z)break;p[y++]=224|b>>12,p[y++]=128|b>>6&63,p[y++]=128|b&63}else{if(y+3>=z)break;p[y++]=240|b>>18,p[y++]=128|b>>12&63,p[y++]=128|b>>6&63,p[y++]=128|b&63}}return p[y]=0,y-I}function F(c,p,y){return N(c,q,p,y)}function W(c){for(var p=0,y=0;y<c.length;++y){var C=c.charCodeAt(y);C>=55296&&C<=57343&&(C=65536+((C&1023)<<10)|c.charCodeAt(++y)&1023),C<=127?++p:C<=2047?p+=2:C<=65535?p+=3:p+=4}return p}var R=65536;function A(c,p){return c%p>0&&(c+=p-c%p),c}var k,J,q,Q,Y;function $(c){k=c,e.HEAP8=J=new Int8Array(c),e.HEAP16=Q=new Int16Array(c),e.HEAP32=Y=new Int32Array(c),e.HEAPU8=q=new Uint8Array(c),e.HEAPU16=new Uint16Array(c),e.HEAPU32=new Uint32Array(c),e.HEAPF32=new Float32Array(c),e.HEAPF64=new Float64Array(c)}var ue=e.INITIAL_MEMORY||16777216;e.wasmMemory?M=e.wasmMemory:M=new WebAssembly.Memory({initial:ue/R,maximum:2147483648/R}),M&&(k=M.buffer),ue=k.byteLength,$(k);var K=[],ve=[],ye=[],Ae=[];function Ge(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)Ee(e.preRun.shift());X(K)}function Ze(){!e.noFSInit&&!m.init.initialized&&m.init(),X(ve)}function ee(){m.ignorePermissions=!1,X(ye)}function fe(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)xe(e.postRun.shift());X(Ae)}function Ee(c){K.unshift(c)}function xe(c){Ae.unshift(c)}var Le=0,Ne=null;function Be(c){Le++,e.monitorRunDependencies&&e.monitorRunDependencies(Le)}function nt(c){if(Le--,e.monitorRunDependencies&&e.monitorRunDependencies(Le),Le==0&&Ne){var p=Ne;Ne=null,p()}}e.preloadedImages={},e.preloadedAudios={};function U(c){e.onAbort&&e.onAbort(c),c+="",h(c),g=!0,c="abort("+c+"). Build with -s ASSERTIONS=1 for more info.";var p=new WebAssembly.RuntimeError(c);throw i(p),p}function lt(c,p){return String.prototype.startsWith?c.startsWith(p):c.indexOf(p)===0}var je="data:application/octet-stream;base64,";function $e(c){return lt(c,je)}var Te="libtimidity.wasm";$e(Te)||(Te=l(Te));function ot(){try{if(S)return new Uint8Array(S);if(!f)throw"both async and sync fetching of the wasm failed"}catch(c){U(c)}}function Ue(){return!S&&o&&typeof fetch=="function"?fetch(Te,{credentials:"same-origin"}).then(function(c){if(!c.ok)throw"failed to load wasm binary file at '"+Te+"'";return c.arrayBuffer()}).catch(function(){return ot()}):Promise.resolve().then(ot)}function Fe(){var c={a:en};function p(x,b){var D=x.exports;e.asm=D,_=e.asm.k,nt()}Be();function y(x){p(x.instance)}function C(x){return Ue().then(function(b){return WebAssembly.instantiate(b,c)}).then(x,function(b){h("failed to asynchronously prepare wasm: "+b),U(b)})}function I(){if(!S&&typeof WebAssembly.instantiateStreaming=="function"&&!$e(Te)&&typeof fetch=="function")fetch(Te,{credentials:"same-origin"}).then(function(x){var b=WebAssembly.instantiateStreaming(x,c);return b.then(y,function(D){return h("wasm streaming compile failed: "+D),h("falling back to ArrayBuffer instantiation"),C(y)})});else return C(y)}if(e.instantiateWasm)try{var z=e.instantiateWasm(c,p);return z}catch(x){return h("Module.instantiateWasm callback failed with error: "+x),!1}return I(),{}}var L,E;function X(c){for(;c.length>0;){var p=c.shift();if(typeof p=="function"){p(e);continue}var y=p.func;typeof y=="number"?p.arg===void 0?_.get(y)():_.get(y)(p.arg):y(p.arg===void 0?null:p.arg)}}function se(c){return c}function le(c){var p=/\b_Z[\w\d_]+/g;return c.replace(p,function(y){var C=y;return y===C?y:C+" ["+y+"]"})}function re(){var c=new Error;if(!c.stack){try{throw new Error}catch(p){c=p}if(!c.stack)return"(no stack trace available)"}return c.stack.toString()}function Pe(){var c=re();return e.extraStackTrace&&(c+=`
`+e.extraStackTrace()),le(c)}function me(c){return Y[ki()>>2]=c,c}var oe={splitPath:function(c){var p=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return p.exec(c).slice(1)},normalizeArray:function(c,p){for(var y=0,C=c.length-1;C>=0;C--){var I=c[C];I==="."?c.splice(C,1):I===".."?(c.splice(C,1),y++):y&&(c.splice(C,1),y--)}if(p)for(;y;y--)c.unshift("..");return c},normalize:function(c){var p=c.charAt(0)==="/",y=c.substr(-1)==="/";return c=oe.normalizeArray(c.split("/").filter(function(C){return!!C}),!p).join("/"),!c&&!p&&(c="."),c&&y&&(c+="/"),(p?"/":"")+c},dirname:function(c){var p=oe.splitPath(c),y=p[0],C=p[1];return!y&&!C?".":(C&&(C=C.substr(0,C.length-1)),y+C)},basename:function(c){if(c==="/")return"/";c=oe.normalize(c),c=c.replace(/\/$/,"");var p=c.lastIndexOf("/");return p===-1?c:c.substr(p+1)},extname:function(c){return oe.splitPath(c)[3]},join:function(){var c=Array.prototype.slice.call(arguments,0);return oe.normalize(c.join("/"))},join2:function(c,p){return oe.normalize(c+"/"+p)}};function Oe(){if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function"){var c=new Uint8Array(1);return function(){return crypto.getRandomValues(c),c[0]}}else return function(){U("randomDevice")}}var ae={resolve:function(){for(var c="",p=!1,y=arguments.length-1;y>=-1&&!p;y--){var C=y>=0?arguments[y]:m.cwd();if(typeof C!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!C)return"";c=C+"/"+c,p=C.charAt(0)==="/"}return c=oe.normalizeArray(c.split("/").filter(function(I){return!!I}),!p).join("/"),(p?"/":"")+c||"."},relative:function(c,p){c=ae.resolve(c).substr(1),p=ae.resolve(p).substr(1);function y(B){for(var O=0;O<B.length&&B[O]==="";O++);for(var j=B.length-1;j>=0&&B[j]==="";j--);return O>j?[]:B.slice(O,j-O+1)}for(var C=y(c.split("/")),I=y(p.split("/")),z=Math.min(C.length,I.length),x=z,b=0;b<z;b++)if(C[b]!==I[b]){x=b;break}for(var D=[],b=x;b<C.length;b++)D.push("..");return D=D.concat(I.slice(x)),D.join("/")}},ge={ttys:[],init:function(){},shutdown:function(){},register:function(c,p){ge.ttys[c]={input:[],output:[],ops:p},m.registerDevice(c,ge.stream_ops)},stream_ops:{open:function(c){var p=ge.ttys[c.node.rdev];if(!p)throw new m.ErrnoError(43);c.tty=p,c.seekable=!1},close:function(c){c.tty.ops.flush(c.tty)},flush:function(c){c.tty.ops.flush(c.tty)},read:function(c,p,y,C,I){if(!c.tty||!c.tty.ops.get_char)throw new m.ErrnoError(60);for(var z=0,x=0;x<C;x++){var b;try{b=c.tty.ops.get_char(c.tty)}catch{throw new m.ErrnoError(29)}if(b===void 0&&z===0)throw new m.ErrnoError(6);if(b==null)break;z++,p[y+x]=b}return z&&(c.node.timestamp=Date.now()),z},write:function(c,p,y,C,I){if(!c.tty||!c.tty.ops.put_char)throw new m.ErrnoError(60);try{for(var z=0;z<C;z++)c.tty.ops.put_char(c.tty,p[y+z])}catch{throw new m.ErrnoError(29)}return C&&(c.node.timestamp=Date.now()),z}},default_tty_ops:{get_char:function(c){if(!c.input.length){var p=null;if(typeof window<"u"&&typeof window.prompt=="function"?(p=window.prompt("Input: "),p!==null&&(p+=`
`)):typeof readline=="function"&&(p=readline(),p!==null&&(p+=`
`)),!p)return null;c.input=$n(p)}return c.input.shift()},put_char:function(c,p){p===null||p===10?(d(w(c.output,0)),c.output=[]):p!=0&&c.output.push(p)},flush:function(c){c.output&&c.output.length>0&&(d(w(c.output,0)),c.output=[])}},default_tty1_ops:{put_char:function(c,p){p===null||p===10?(h(w(c.output,0)),c.output=[]):p!=0&&c.output.push(p)},flush:function(c){c.output&&c.output.length>0&&(h(w(c.output,0)),c.output=[])}}};function We(c){for(var p=v(c,16384),y=Bi(p);c<p;)J[y+c++]=0;return y}var he={ops_table:null,mount:function(c){return he.createNode(null,"/",16895,0)},createNode:function(c,p,y,C){if(m.isBlkdev(y)||m.isFIFO(y))throw new m.ErrnoError(63);he.ops_table||(he.ops_table={dir:{node:{getattr:he.node_ops.getattr,setattr:he.node_ops.setattr,lookup:he.node_ops.lookup,mknod:he.node_ops.mknod,rename:he.node_ops.rename,unlink:he.node_ops.unlink,rmdir:he.node_ops.rmdir,readdir:he.node_ops.readdir,symlink:he.node_ops.symlink},stream:{llseek:he.stream_ops.llseek}},file:{node:{getattr:he.node_ops.getattr,setattr:he.node_ops.setattr},stream:{llseek:he.stream_ops.llseek,read:he.stream_ops.read,write:he.stream_ops.write,allocate:he.stream_ops.allocate,mmap:he.stream_ops.mmap,msync:he.stream_ops.msync}},link:{node:{getattr:he.node_ops.getattr,setattr:he.node_ops.setattr,readlink:he.node_ops.readlink},stream:{}},chrdev:{node:{getattr:he.node_ops.getattr,setattr:he.node_ops.setattr},stream:m.chrdev_stream_ops}});var I=m.createNode(c,p,y,C);return m.isDir(I.mode)?(I.node_ops=he.ops_table.dir.node,I.stream_ops=he.ops_table.dir.stream,I.contents={}):m.isFile(I.mode)?(I.node_ops=he.ops_table.file.node,I.stream_ops=he.ops_table.file.stream,I.usedBytes=0,I.contents=null):m.isLink(I.mode)?(I.node_ops=he.ops_table.link.node,I.stream_ops=he.ops_table.link.stream):m.isChrdev(I.mode)&&(I.node_ops=he.ops_table.chrdev.node,I.stream_ops=he.ops_table.chrdev.stream),I.timestamp=Date.now(),c&&(c.contents[p]=I),I},getFileDataAsRegularArray:function(c){if(c.contents&&c.contents.subarray){for(var p=[],y=0;y<c.usedBytes;++y)p.push(c.contents[y]);return p}return c.contents},getFileDataAsTypedArray:function(c){return c.contents?c.contents.subarray?c.contents.subarray(0,c.usedBytes):new Uint8Array(c.contents):new Uint8Array(0)},expandFileStorage:function(c,p){var y=c.contents?c.contents.length:0;if(!(y>=p)){var C=1024*1024;p=Math.max(p,y*(y<C?2:1.125)>>>0),y!=0&&(p=Math.max(p,256));var I=c.contents;c.contents=new Uint8Array(p),c.usedBytes>0&&c.contents.set(I.subarray(0,c.usedBytes),0)}},resizeFileStorage:function(c,p){if(c.usedBytes!=p){if(p==0){c.contents=null,c.usedBytes=0;return}if(!c.contents||c.contents.subarray){var y=c.contents;c.contents=new Uint8Array(p),y&&c.contents.set(y.subarray(0,Math.min(p,c.usedBytes))),c.usedBytes=p;return}if(c.contents||(c.contents=[]),c.contents.length>p)c.contents.length=p;else for(;c.contents.length<p;)c.contents.push(0);c.usedBytes=p}},node_ops:{getattr:function(c){var p={};return p.dev=m.isChrdev(c.mode)?c.id:1,p.ino=c.id,p.mode=c.mode,p.nlink=1,p.uid=0,p.gid=0,p.rdev=c.rdev,m.isDir(c.mode)?p.size=4096:m.isFile(c.mode)?p.size=c.usedBytes:m.isLink(c.mode)?p.size=c.link.length:p.size=0,p.atime=new Date(c.timestamp),p.mtime=new Date(c.timestamp),p.ctime=new Date(c.timestamp),p.blksize=4096,p.blocks=Math.ceil(p.size/p.blksize),p},setattr:function(c,p){p.mode!==void 0&&(c.mode=p.mode),p.timestamp!==void 0&&(c.timestamp=p.timestamp),p.size!==void 0&&he.resizeFileStorage(c,p.size)},lookup:function(c,p){throw m.genericErrors[44]},mknod:function(c,p,y,C){return he.createNode(c,p,y,C)},rename:function(c,p,y){if(m.isDir(c.mode)){var C;try{C=m.lookupNode(p,y)}catch{}if(C)for(var I in C.contents)throw new m.ErrnoError(55)}delete c.parent.contents[c.name],c.name=y,p.contents[y]=c,c.parent=p},unlink:function(c,p){delete c.contents[p]},rmdir:function(c,p){var y=m.lookupNode(c,p);for(var C in y.contents)throw new m.ErrnoError(55);delete c.contents[p]},readdir:function(c){var p=[".",".."];for(var y in c.contents)c.contents.hasOwnProperty(y)&&p.push(y);return p},symlink:function(c,p,y){var C=he.createNode(c,p,41471,0);return C.link=y,C},readlink:function(c){if(!m.isLink(c.mode))throw new m.ErrnoError(28);return c.link}},stream_ops:{read:function(c,p,y,C,I){var z=c.node.contents;if(I>=c.node.usedBytes)return 0;var x=Math.min(c.node.usedBytes-I,C);if(x>8&&z.subarray)p.set(z.subarray(I,I+x),y);else for(var b=0;b<x;b++)p[y+b]=z[I+b];return x},write:function(c,p,y,C,I,z){if(p.buffer===J.buffer&&(z=!1),!C)return 0;var x=c.node;if(x.timestamp=Date.now(),p.subarray&&(!x.contents||x.contents.subarray)){if(z)return x.contents=p.subarray(y,y+C),x.usedBytes=C,C;if(x.usedBytes===0&&I===0)return x.contents=p.slice(y,y+C),x.usedBytes=C,C;if(I+C<=x.usedBytes)return x.contents.set(p.subarray(y,y+C),I),C}if(he.expandFileStorage(x,I+C),x.contents.subarray&&p.subarray)x.contents.set(p.subarray(y,y+C),I);else for(var b=0;b<C;b++)x.contents[I+b]=p[y+b];return x.usedBytes=Math.max(x.usedBytes,I+C),C},llseek:function(c,p,y){var C=p;if(y===1?C+=c.position:y===2&&m.isFile(c.node.mode)&&(C+=c.node.usedBytes),C<0)throw new m.ErrnoError(28);return C},allocate:function(c,p,y){he.expandFileStorage(c.node,p+y),c.node.usedBytes=Math.max(c.node.usedBytes,p+y)},mmap:function(c,p,y,C,I,z){if(P(p===0),!m.isFile(c.node.mode))throw new m.ErrnoError(43);var x,b,D=c.node.contents;if(!(z&2)&&D.buffer===k)b=!1,x=D.byteOffset;else{if((C>0||C+y<D.length)&&(D.subarray?D=D.subarray(C,C+y):D=Array.prototype.slice.call(D,C,C+y)),b=!0,x=We(y),!x)throw new m.ErrnoError(48);J.set(D,x)}return{ptr:x,allocated:b}},msync:function(c,p,y,C,I){if(!m.isFile(c.node.mode))throw new m.ErrnoError(43);return I&2||he.stream_ops.write(c,p,0,C,y,!1),0}}},m={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,trackingDelegate:{},tracking:{openFlags:{READ:1,WRITE:2}},ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,handleFSError:function(c){if(!(c instanceof m.ErrnoError))throw c+" : "+Pe();return me(c.errno)},lookupPath:function(c,p){if(c=ae.resolve(m.cwd(),c),p=p||{},!c)return{path:"",node:null};var y={follow_mount:!0,recurse_count:0};for(var C in y)p[C]===void 0&&(p[C]=y[C]);if(p.recurse_count>8)throw new m.ErrnoError(32);for(var I=oe.normalizeArray(c.split("/").filter(function(Z){return!!Z}),!1),z=m.root,x="/",b=0;b<I.length;b++){var D=b===I.length-1;if(D&&p.parent)break;if(z=m.lookupNode(z,I[b]),x=oe.join2(x,I[b]),m.isMountpoint(z)&&(!D||D&&p.follow_mount)&&(z=z.mounted.root),!D||p.follow)for(var B=0;m.isLink(z.mode);){var O=m.readlink(x);x=ae.resolve(oe.dirname(x),O);var j=m.lookupPath(x,{recurse_count:p.recurse_count});if(z=j.node,B++>40)throw new m.ErrnoError(32)}}return{path:x,node:z}},getPath:function(c){for(var p;;){if(m.isRoot(c)){var y=c.mount.mountpoint;return p?y[y.length-1]!=="/"?y+"/"+p:y+p:y}p=p?c.name+"/"+p:c.name,c=c.parent}},hashName:function(c,p){for(var y=0,C=0;C<p.length;C++)y=(y<<5)-y+p.charCodeAt(C)|0;return(c+y>>>0)%m.nameTable.length},hashAddNode:function(c){var p=m.hashName(c.parent.id,c.name);c.name_next=m.nameTable[p],m.nameTable[p]=c},hashRemoveNode:function(c){var p=m.hashName(c.parent.id,c.name);if(m.nameTable[p]===c)m.nameTable[p]=c.name_next;else for(var y=m.nameTable[p];y;){if(y.name_next===c){y.name_next=c.name_next;break}y=y.name_next}},lookupNode:function(c,p){var y=m.mayLookup(c);if(y)throw new m.ErrnoError(y,c);for(var C=m.hashName(c.id,p),I=m.nameTable[C];I;I=I.name_next){var z=I.name;if(I.parent.id===c.id&&z===p)return I}return m.lookup(c,p)},createNode:function(c,p,y,C){var I=new m.FSNode(c,p,y,C);return m.hashAddNode(I),I},destroyNode:function(c){m.hashRemoveNode(c)},isRoot:function(c){return c===c.parent},isMountpoint:function(c){return!!c.mounted},isFile:function(c){return(c&61440)===32768},isDir:function(c){return(c&61440)===16384},isLink:function(c){return(c&61440)===40960},isChrdev:function(c){return(c&61440)===8192},isBlkdev:function(c){return(c&61440)===24576},isFIFO:function(c){return(c&61440)===4096},isSocket:function(c){return(c&49152)===49152},flagModes:{r:0,rs:1052672,"r+":2,w:577,wx:705,xw:705,"w+":578,"wx+":706,"xw+":706,a:1089,ax:1217,xa:1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function(c){var p=m.flagModes[c];if(typeof p>"u")throw new Error("Unknown file open mode: "+c);return p},flagsToPermissionString:function(c){var p=["r","w","rw"][c&3];return c&512&&(p+="w"),p},nodePermissions:function(c,p){return m.ignorePermissions?0:p.indexOf("r")!==-1&&!(c.mode&292)||p.indexOf("w")!==-1&&!(c.mode&146)||p.indexOf("x")!==-1&&!(c.mode&73)?2:0},mayLookup:function(c){var p=m.nodePermissions(c,"x");return p||(c.node_ops.lookup?0:2)},mayCreate:function(c,p){try{var y=m.lookupNode(c,p);return 20}catch{}return m.nodePermissions(c,"wx")},mayDelete:function(c,p,y){var C;try{C=m.lookupNode(c,p)}catch(z){return z.errno}var I=m.nodePermissions(c,"wx");if(I)return I;if(y){if(!m.isDir(C.mode))return 54;if(m.isRoot(C)||m.getPath(C)===m.cwd())return 10}else if(m.isDir(C.mode))return 31;return 0},mayOpen:function(c,p){return c?m.isLink(c.mode)?32:m.isDir(c.mode)&&(m.flagsToPermissionString(p)!=="r"||p&512)?31:m.nodePermissions(c,m.flagsToPermissionString(p)):44},MAX_OPEN_FDS:4096,nextfd:function(c,p){c=c||0,p=p||m.MAX_OPEN_FDS;for(var y=c;y<=p;y++)if(!m.streams[y])return y;throw new m.ErrnoError(33)},getStream:function(c){return m.streams[c]},createStream:function(c,p,y){m.FSStream||(m.FSStream=function(){},m.FSStream.prototype={object:{get:function(){return this.node},set:function(x){this.node=x}},isRead:{get:function(){return(this.flags&2097155)!==1}},isWrite:{get:function(){return(this.flags&2097155)!==0}},isAppend:{get:function(){return this.flags&1024}}});var C=new m.FSStream;for(var I in c)C[I]=c[I];c=C;var z=m.nextfd(p,y);return c.fd=z,m.streams[z]=c,c},closeStream:function(c){m.streams[c]=null},chrdev_stream_ops:{open:function(c){var p=m.getDevice(c.node.rdev);c.stream_ops=p.stream_ops,c.stream_ops.open&&c.stream_ops.open(c)},llseek:function(){throw new m.ErrnoError(70)}},major:function(c){return c>>8},minor:function(c){return c&255},makedev:function(c,p){return c<<8|p},registerDevice:function(c,p){m.devices[c]={stream_ops:p}},getDevice:function(c){return m.devices[c]},getMounts:function(c){for(var p=[],y=[c];y.length;){var C=y.pop();p.push(C),y.push.apply(y,C.mounts)}return p},syncfs:function(c,p){typeof c=="function"&&(p=c,c=!1),m.syncFSRequests++,m.syncFSRequests>1&&h("warning: "+m.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var y=m.getMounts(m.root.mount),C=0;function I(x){return m.syncFSRequests--,p(x)}function z(x){if(x)return z.errored?void 0:(z.errored=!0,I(x));++C>=y.length&&I(null)}y.forEach(function(x){if(!x.type.syncfs)return z(null);x.type.syncfs(x,c,z)})},mount:function(c,p,y){var C=y==="/",I=!y,z;if(C&&m.root)throw new m.ErrnoError(10);if(!C&&!I){var x=m.lookupPath(y,{follow_mount:!1});if(y=x.path,z=x.node,m.isMountpoint(z))throw new m.ErrnoError(10);if(!m.isDir(z.mode))throw new m.ErrnoError(54)}var b={type:c,opts:p,mountpoint:y,mounts:[]},D=c.mount(b);return D.mount=b,b.root=D,C?m.root=D:z&&(z.mounted=b,z.mount&&z.mount.mounts.push(b)),D},unmount:function(c){var p=m.lookupPath(c,{follow_mount:!1});if(!m.isMountpoint(p.node))throw new m.ErrnoError(28);var y=p.node,C=y.mounted,I=m.getMounts(C);Object.keys(m.nameTable).forEach(function(x){for(var b=m.nameTable[x];b;){var D=b.name_next;I.indexOf(b.mount)!==-1&&m.destroyNode(b),b=D}}),y.mounted=null;var z=y.mount.mounts.indexOf(C);y.mount.mounts.splice(z,1)},lookup:function(c,p){return c.node_ops.lookup(c,p)},mknod:function(c,p,y){var C=m.lookupPath(c,{parent:!0}),I=C.node,z=oe.basename(c);if(!z||z==="."||z==="..")throw new m.ErrnoError(28);var x=m.mayCreate(I,z);if(x)throw new m.ErrnoError(x);if(!I.node_ops.mknod)throw new m.ErrnoError(63);return I.node_ops.mknod(I,z,p,y)},create:function(c,p){return p=p!==void 0?p:438,p&=4095,p|=32768,m.mknod(c,p,0)},mkdir:function(c,p){return p=p!==void 0?p:511,p&=1023,p|=16384,m.mknod(c,p,0)},mkdirTree:function(c,p){for(var y=c.split("/"),C="",I=0;I<y.length;++I)if(y[I]){C+="/"+y[I];try{m.mkdir(C,p)}catch(z){if(z.errno!=20)throw z}}},mkdev:function(c,p,y){return typeof y>"u"&&(y=p,p=438),p|=8192,m.mknod(c,p,y)},symlink:function(c,p){if(!ae.resolve(c))throw new m.ErrnoError(44);var y=m.lookupPath(p,{parent:!0}),C=y.node;if(!C)throw new m.ErrnoError(44);var I=oe.basename(p),z=m.mayCreate(C,I);if(z)throw new m.ErrnoError(z);if(!C.node_ops.symlink)throw new m.ErrnoError(63);return C.node_ops.symlink(C,I,c)},rename:function(c,p){var y=oe.dirname(c),C=oe.dirname(p),I=oe.basename(c),z=oe.basename(p),x,b,D;if(x=m.lookupPath(c,{parent:!0}),b=x.node,x=m.lookupPath(p,{parent:!0}),D=x.node,!b||!D)throw new m.ErrnoError(44);if(b.mount!==D.mount)throw new m.ErrnoError(75);var B=m.lookupNode(b,I),O=ae.relative(c,C);if(O.charAt(0)!==".")throw new m.ErrnoError(28);if(O=ae.relative(p,y),O.charAt(0)!==".")throw new m.ErrnoError(55);var j;try{j=m.lookupNode(D,z)}catch{}if(B!==j){var Z=m.isDir(B.mode),ie=m.mayDelete(b,I,Z);if(ie)throw new m.ErrnoError(ie);if(ie=j?m.mayDelete(D,z,Z):m.mayCreate(D,z),ie)throw new m.ErrnoError(ie);if(!b.node_ops.rename)throw new m.ErrnoError(63);if(m.isMountpoint(B)||j&&m.isMountpoint(j))throw new m.ErrnoError(10);if(D!==b&&(ie=m.nodePermissions(b,"w"),ie))throw new m.ErrnoError(ie);try{m.trackingDelegate.willMovePath&&m.trackingDelegate.willMovePath(c,p)}catch(ce){h("FS.trackingDelegate['willMovePath']('"+c+"', '"+p+"') threw an exception: "+ce.message)}m.hashRemoveNode(B);try{b.node_ops.rename(B,D,z)}catch(ce){throw ce}finally{m.hashAddNode(B)}try{m.trackingDelegate.onMovePath&&m.trackingDelegate.onMovePath(c,p)}catch(ce){h("FS.trackingDelegate['onMovePath']('"+c+"', '"+p+"') threw an exception: "+ce.message)}}},rmdir:function(c){var p=m.lookupPath(c,{parent:!0}),y=p.node,C=oe.basename(c),I=m.lookupNode(y,C),z=m.mayDelete(y,C,!0);if(z)throw new m.ErrnoError(z);if(!y.node_ops.rmdir)throw new m.ErrnoError(63);if(m.isMountpoint(I))throw new m.ErrnoError(10);try{m.trackingDelegate.willDeletePath&&m.trackingDelegate.willDeletePath(c)}catch(x){h("FS.trackingDelegate['willDeletePath']('"+c+"') threw an exception: "+x.message)}y.node_ops.rmdir(y,C),m.destroyNode(I);try{m.trackingDelegate.onDeletePath&&m.trackingDelegate.onDeletePath(c)}catch(x){h("FS.trackingDelegate['onDeletePath']('"+c+"') threw an exception: "+x.message)}},readdir:function(c){var p=m.lookupPath(c,{follow:!0}),y=p.node;if(!y.node_ops.readdir)throw new m.ErrnoError(54);return y.node_ops.readdir(y)},unlink:function(c){var p=m.lookupPath(c,{parent:!0}),y=p.node,C=oe.basename(c),I=m.lookupNode(y,C),z=m.mayDelete(y,C,!1);if(z)throw new m.ErrnoError(z);if(!y.node_ops.unlink)throw new m.ErrnoError(63);if(m.isMountpoint(I))throw new m.ErrnoError(10);try{m.trackingDelegate.willDeletePath&&m.trackingDelegate.willDeletePath(c)}catch(x){h("FS.trackingDelegate['willDeletePath']('"+c+"') threw an exception: "+x.message)}y.node_ops.unlink(y,C),m.destroyNode(I);try{m.trackingDelegate.onDeletePath&&m.trackingDelegate.onDeletePath(c)}catch(x){h("FS.trackingDelegate['onDeletePath']('"+c+"') threw an exception: "+x.message)}},readlink:function(c){var p=m.lookupPath(c),y=p.node;if(!y)throw new m.ErrnoError(44);if(!y.node_ops.readlink)throw new m.ErrnoError(28);return ae.resolve(m.getPath(y.parent),y.node_ops.readlink(y))},stat:function(c,p){var y=m.lookupPath(c,{follow:!p}),C=y.node;if(!C)throw new m.ErrnoError(44);if(!C.node_ops.getattr)throw new m.ErrnoError(63);return C.node_ops.getattr(C)},lstat:function(c){return m.stat(c,!0)},chmod:function(c,p,y){var C;if(typeof c=="string"){var I=m.lookupPath(c,{follow:!y});C=I.node}else C=c;if(!C.node_ops.setattr)throw new m.ErrnoError(63);C.node_ops.setattr(C,{mode:p&4095|C.mode&-4096,timestamp:Date.now()})},lchmod:function(c,p){m.chmod(c,p,!0)},fchmod:function(c,p){var y=m.getStream(c);if(!y)throw new m.ErrnoError(8);m.chmod(y.node,p)},chown:function(c,p,y,C){var I;if(typeof c=="string"){var z=m.lookupPath(c,{follow:!C});I=z.node}else I=c;if(!I.node_ops.setattr)throw new m.ErrnoError(63);I.node_ops.setattr(I,{timestamp:Date.now()})},lchown:function(c,p,y){m.chown(c,p,y,!0)},fchown:function(c,p,y){var C=m.getStream(c);if(!C)throw new m.ErrnoError(8);m.chown(C.node,p,y)},truncate:function(c,p){if(p<0)throw new m.ErrnoError(28);var y;if(typeof c=="string"){var C=m.lookupPath(c,{follow:!0});y=C.node}else y=c;if(!y.node_ops.setattr)throw new m.ErrnoError(63);if(m.isDir(y.mode))throw new m.ErrnoError(31);if(!m.isFile(y.mode))throw new m.ErrnoError(28);var I=m.nodePermissions(y,"w");if(I)throw new m.ErrnoError(I);y.node_ops.setattr(y,{size:p,timestamp:Date.now()})},ftruncate:function(c,p){var y=m.getStream(c);if(!y)throw new m.ErrnoError(8);if(!(y.flags&2097155))throw new m.ErrnoError(28);m.truncate(y.node,p)},utime:function(c,p,y){var C=m.lookupPath(c,{follow:!0}),I=C.node;I.node_ops.setattr(I,{timestamp:Math.max(p,y)})},open:function(c,p,y,C,I){if(c==="")throw new m.ErrnoError(44);p=typeof p=="string"?m.modeStringToFlags(p):p,y=typeof y>"u"?438:y,p&64?y=y&4095|32768:y=0;var z;if(typeof c=="object")z=c;else{c=oe.normalize(c);try{var x=m.lookupPath(c,{follow:!(p&131072)});z=x.node}catch{}}var b=!1;if(p&64)if(z){if(p&128)throw new m.ErrnoError(20)}else z=m.mknod(c,y,0),b=!0;if(!z)throw new m.ErrnoError(44);if(m.isChrdev(z.mode)&&(p&=-513),p&65536&&!m.isDir(z.mode))throw new m.ErrnoError(54);if(!b){var D=m.mayOpen(z,p);if(D)throw new m.ErrnoError(D)}p&512&&m.truncate(z,0),p&=-131713;var B=m.createStream({node:z,path:m.getPath(z),flags:p,seekable:!0,position:0,stream_ops:z.stream_ops,ungotten:[],error:!1},C,I);B.stream_ops.open&&B.stream_ops.open(B),e.logReadFiles&&!(p&1)&&(m.readFiles||(m.readFiles={}),c in m.readFiles||(m.readFiles[c]=1,h("FS.trackingDelegate error on read file: "+c)));try{if(m.trackingDelegate.onOpenFile){var O=0;(p&2097155)!==1&&(O|=m.tracking.openFlags.READ),p&2097155&&(O|=m.tracking.openFlags.WRITE),m.trackingDelegate.onOpenFile(c,O)}}catch(j){h("FS.trackingDelegate['onOpenFile']('"+c+"', flags) threw an exception: "+j.message)}return B},close:function(c){if(m.isClosed(c))throw new m.ErrnoError(8);c.getdents&&(c.getdents=null);try{c.stream_ops.close&&c.stream_ops.close(c)}catch(p){throw p}finally{m.closeStream(c.fd)}c.fd=null},isClosed:function(c){return c.fd===null},llseek:function(c,p,y){if(m.isClosed(c))throw new m.ErrnoError(8);if(!c.seekable||!c.stream_ops.llseek)throw new m.ErrnoError(70);if(y!=0&&y!=1&&y!=2)throw new m.ErrnoError(28);return c.position=c.stream_ops.llseek(c,p,y),c.ungotten=[],c.position},read:function(c,p,y,C,I){if(C<0||I<0)throw new m.ErrnoError(28);if(m.isClosed(c))throw new m.ErrnoError(8);if((c.flags&2097155)===1)throw new m.ErrnoError(8);if(m.isDir(c.node.mode))throw new m.ErrnoError(31);if(!c.stream_ops.read)throw new m.ErrnoError(28);var z=typeof I<"u";if(!z)I=c.position;else if(!c.seekable)throw new m.ErrnoError(70);var x=c.stream_ops.read(c,p,y,C,I);return z||(c.position+=x),x},write:function(c,p,y,C,I,z){if(C<0||I<0)throw new m.ErrnoError(28);if(m.isClosed(c))throw new m.ErrnoError(8);if(!(c.flags&2097155))throw new m.ErrnoError(8);if(m.isDir(c.node.mode))throw new m.ErrnoError(31);if(!c.stream_ops.write)throw new m.ErrnoError(28);c.seekable&&c.flags&1024&&m.llseek(c,0,2);var x=typeof I<"u";if(!x)I=c.position;else if(!c.seekable)throw new m.ErrnoError(70);var b=c.stream_ops.write(c,p,y,C,I,z);x||(c.position+=b);try{c.path&&m.trackingDelegate.onWriteToFile&&m.trackingDelegate.onWriteToFile(c.path)}catch(D){h("FS.trackingDelegate['onWriteToFile']('"+c.path+"') threw an exception: "+D.message)}return b},allocate:function(c,p,y){if(m.isClosed(c))throw new m.ErrnoError(8);if(p<0||y<=0)throw new m.ErrnoError(28);if(!(c.flags&2097155))throw new m.ErrnoError(8);if(!m.isFile(c.node.mode)&&!m.isDir(c.node.mode))throw new m.ErrnoError(43);if(!c.stream_ops.allocate)throw new m.ErrnoError(138);c.stream_ops.allocate(c,p,y)},mmap:function(c,p,y,C,I,z){if(I&2&&!(z&2)&&(c.flags&2097155)!==2)throw new m.ErrnoError(2);if((c.flags&2097155)===1)throw new m.ErrnoError(2);if(!c.stream_ops.mmap)throw new m.ErrnoError(43);return c.stream_ops.mmap(c,p,y,C,I,z)},msync:function(c,p,y,C,I){return!c||!c.stream_ops.msync?0:c.stream_ops.msync(c,p,y,C,I)},munmap:function(c){return 0},ioctl:function(c,p,y){if(!c.stream_ops.ioctl)throw new m.ErrnoError(59);return c.stream_ops.ioctl(c,p,y)},readFile:function(c,p){if(p=p||{},p.flags=p.flags||"r",p.encoding=p.encoding||"binary",p.encoding!=="utf8"&&p.encoding!=="binary")throw new Error('Invalid encoding type "'+p.encoding+'"');var y,C=m.open(c,p.flags),I=m.stat(c),z=I.size,x=new Uint8Array(z);return m.read(C,x,0,z,0),p.encoding==="utf8"?y=w(x,0):p.encoding==="binary"&&(y=x),m.close(C),y},writeFile:function(c,p,y){y=y||{},y.flags=y.flags||"w";var C=m.open(c,y.flags,y.mode);if(typeof p=="string"){var I=new Uint8Array(W(p)+1),z=N(p,I,0,I.length);m.write(C,I,0,z,void 0,y.canOwn)}else if(ArrayBuffer.isView(p))m.write(C,p,0,p.byteLength,void 0,y.canOwn);else throw new Error("Unsupported data type");m.close(C)},cwd:function(){return m.currentPath},chdir:function(c){var p=m.lookupPath(c,{follow:!0});if(p.node===null)throw new m.ErrnoError(44);if(!m.isDir(p.node.mode))throw new m.ErrnoError(54);var y=m.nodePermissions(p.node,"x");if(y)throw new m.ErrnoError(y);m.currentPath=p.path},createDefaultDirectories:function(){m.mkdir("/tmp"),m.mkdir("/home"),m.mkdir("/home/web_user")},createDefaultDevices:function(){m.mkdir("/dev"),m.registerDevice(m.makedev(1,3),{read:function(){return 0},write:function(p,y,C,I,z){return I}}),m.mkdev("/dev/null",m.makedev(1,3)),ge.register(m.makedev(5,0),ge.default_tty_ops),ge.register(m.makedev(6,0),ge.default_tty1_ops),m.mkdev("/dev/tty",m.makedev(5,0)),m.mkdev("/dev/tty1",m.makedev(6,0));var c=Oe();m.createDevice("/dev","random",c),m.createDevice("/dev","urandom",c),m.mkdir("/dev/shm"),m.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){m.mkdir("/proc"),m.mkdir("/proc/self"),m.mkdir("/proc/self/fd"),m.mount({mount:function(){var c=m.createNode("/proc/self","fd",16895,73);return c.node_ops={lookup:function(p,y){var C=+y,I=m.getStream(C);if(!I)throw new m.ErrnoError(8);var z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return I.path}}};return z.parent=z,z}},c}},{},"/proc/self/fd")},createStandardStreams:function(){e.stdin?m.createDevice("/dev","stdin",e.stdin):m.symlink("/dev/tty","/dev/stdin"),e.stdout?m.createDevice("/dev","stdout",null,e.stdout):m.symlink("/dev/tty","/dev/stdout"),e.stderr?m.createDevice("/dev","stderr",null,e.stderr):m.symlink("/dev/tty1","/dev/stderr"),m.open("/dev/stdin","r"),m.open("/dev/stdout","w"),m.open("/dev/stderr","w")},ensureErrnoError:function(){m.ErrnoError||(m.ErrnoError=function(p,y){this.node=y,this.setErrno=function(C){this.errno=C},this.setErrno(p),this.message="FS error"},m.ErrnoError.prototype=new Error,m.ErrnoError.prototype.constructor=m.ErrnoError,[44].forEach(function(c){m.genericErrors[c]=new m.ErrnoError(c),m.genericErrors[c].stack="<generic error, no stack>"}))},staticInit:function(){m.ensureErrnoError(),m.nameTable=new Array(4096),m.mount(he,{},"/"),m.createDefaultDirectories(),m.createDefaultDevices(),m.createSpecialDirectories(),m.filesystems={MEMFS:he}},init:function(c,p,y){m.init.initialized=!0,m.ensureErrnoError(),e.stdin=c||e.stdin,e.stdout=p||e.stdout,e.stderr=y||e.stderr,m.createStandardStreams()},quit:function(){m.init.initialized=!1;var c=e._fflush;c&&c(0);for(var p=0;p<m.streams.length;p++){var y=m.streams[p];y&&m.close(y)}},getMode:function(c,p){var y=0;return c&&(y|=365),p&&(y|=146),y},findObject:function(c,p){var y=m.analyzePath(c,p);return y.exists?y.object:(me(y.error),null)},analyzePath:function(c,p){try{var y=m.lookupPath(c,{follow:!p});c=y.path}catch{}var C={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var y=m.lookupPath(c,{parent:!0});C.parentExists=!0,C.parentPath=y.path,C.parentObject=y.node,C.name=oe.basename(c),y=m.lookupPath(c,{follow:!p}),C.exists=!0,C.path=y.path,C.object=y.node,C.name=y.node.name,C.isRoot=y.path==="/"}catch(I){C.error=I.errno}return C},createPath:function(c,p,y,C){c=typeof c=="string"?c:m.getPath(c);for(var I=p.split("/").reverse();I.length;){var z=I.pop();if(z){var x=oe.join2(c,z);try{m.mkdir(x)}catch{}c=x}}return x},createFile:function(c,p,y,C,I){var z=oe.join2(typeof c=="string"?c:m.getPath(c),p),x=m.getMode(C,I);return m.create(z,x)},createDataFile:function(c,p,y,C,I,z){var x=p?oe.join2(typeof c=="string"?c:m.getPath(c),p):c,b=m.getMode(C,I),D=m.create(x,b);if(y){if(typeof y=="string"){for(var B=new Array(y.length),O=0,j=y.length;O<j;++O)B[O]=y.charCodeAt(O);y=B}m.chmod(D,b|146);var Z=m.open(D,"w");m.write(Z,y,0,y.length,0,z),m.close(Z),m.chmod(D,b)}return D},createDevice:function(c,p,y,C){var I=oe.join2(typeof c=="string"?c:m.getPath(c),p),z=m.getMode(!!y,!!C);m.createDevice.major||(m.createDevice.major=64);var x=m.makedev(m.createDevice.major++,0);return m.registerDevice(x,{open:function(b){b.seekable=!1},close:function(b){C&&C.buffer&&C.buffer.length&&C(10)},read:function(b,D,B,O,j){for(var Z=0,ie=0;ie<O;ie++){var ce;try{ce=y()}catch{throw new m.ErrnoError(29)}if(ce===void 0&&Z===0)throw new m.ErrnoError(6);if(ce==null)break;Z++,D[B+ie]=ce}return Z&&(b.node.timestamp=Date.now()),Z},write:function(b,D,B,O,j){for(var Z=0;Z<O;Z++)try{C(D[B+Z])}catch{throw new m.ErrnoError(29)}return O&&(b.node.timestamp=Date.now()),Z}}),m.mkdev(I,z,x)},forceLoadFile:function(c){if(c.isDevice||c.isFolder||c.link||c.contents)return!0;var p=!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(u)try{c.contents=$n(u(c.url),!0),c.usedBytes=c.contents.length}catch{p=!1}else throw new Error("Cannot load without read() or XMLHttpRequest.");return p||me(29),p},createLazyFile:function(c,p,y,C,I){function z(){this.lengthKnown=!1,this.chunks=[]}if(z.prototype.get=function(Z){if(!(Z>this.length-1||Z<0)){var ie=Z%this.chunkSize,ce=Z/this.chunkSize|0;return this.getter(ce)[ie]}},z.prototype.setDataGetter=function(Z){this.getter=Z},z.prototype.cacheLength=function(){var Z=new XMLHttpRequest;if(Z.open("HEAD",y,!1),Z.send(null),!(Z.status>=200&&Z.status<300||Z.status===304))throw new Error("Couldn't load "+y+". Status: "+Z.status);var ie=Number(Z.getResponseHeader("Content-length")),ce,be=(ce=Z.getResponseHeader("Accept-Ranges"))&&ce==="bytes",Re=(ce=Z.getResponseHeader("Content-Encoding"))&&ce==="gzip",Me=1024*1024;be||(Me=ie);var Xe=function(Je,ht){if(Je>ht)throw new Error("invalid range ("+Je+", "+ht+") or no bytes requested!");if(ht>ie-1)throw new Error("only "+ie+" bytes available! programmer error!");var De=new XMLHttpRequest;if(De.open("GET",y,!1),ie!==Me&&De.setRequestHeader("Range","bytes="+Je+"-"+ht),typeof Uint8Array<"u"&&(De.responseType="arraybuffer"),De.overrideMimeType&&De.overrideMimeType("text/plain; charset=x-user-defined"),De.send(null),!(De.status>=200&&De.status<300||De.status===304))throw new Error("Couldn't load "+y+". Status: "+De.status);return De.response!==void 0?new Uint8Array(De.response||[]):$n(De.responseText||"")},Ve=this;Ve.setDataGetter(function(Je){var ht=Je*Me,De=(Je+1)*Me-1;if(De=Math.min(De,ie-1),typeof Ve.chunks[Je]>"u"&&(Ve.chunks[Je]=Xe(ht,De)),typeof Ve.chunks[Je]>"u")throw new Error("doXHR failed!");return Ve.chunks[Je]}),(Re||!ie)&&(Me=ie=1,ie=this.getter(0).length,Me=ie,d("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=ie,this._chunkSize=Me,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var x,b}else var b={isDevice:!1,url:y};var D=m.createFile(c,p,b,C,I);b.contents?D.contents=b.contents:b.url&&(D.contents=null,D.url=b.url),Object.defineProperties(D,{usedBytes:{get:function(){return this.contents.length}}});var B={},O=Object.keys(D.stream_ops);return O.forEach(function(j){var Z=D.stream_ops[j];B[j]=function(){if(!m.forceLoadFile(D))throw new m.ErrnoError(29);return Z.apply(null,arguments)}}),B.read=function(Z,ie,ce,be,Re){if(!m.forceLoadFile(D))throw new m.ErrnoError(29);var Me=Z.node.contents;if(Re>=Me.length)return 0;var Xe=Math.min(Me.length-Re,be);if(Me.slice)for(var Ve=0;Ve<Xe;Ve++)ie[ce+Ve]=Me[Re+Ve];else for(var Ve=0;Ve<Xe;Ve++)ie[ce+Ve]=Me.get(Re+Ve);return Xe},D.stream_ops=B,D},createPreloadedFile:function(c,p,y,C,I,z,x,b,D,B){Browser.init();var O=p?ae.resolve(oe.join2(c,p)):c;function j(Z){function ie(be){B&&B(),b||m.createDataFile(c,p,be,C,I,D),z&&z(),nt()}var ce=!1;e.preloadPlugins.forEach(function(be){ce||be.canHandle(O)&&(be.handle(Z,O,ie,function(){x&&x(),nt()}),ce=!0)}),ce||ie(Z)}Be(),typeof y=="string"?Browser.asyncLoad(y,function(Z){j(Z)},x):j(y)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(c,p,y){p=p||function(){},y=y||function(){};var C=m.indexedDB();try{var I=C.open(m.DB_NAME(),m.DB_VERSION)}catch(z){return y(z)}I.onupgradeneeded=function(){d("creating db");var x=I.result;x.createObjectStore(m.DB_STORE_NAME)},I.onsuccess=function(){var x=I.result,b=x.transaction([m.DB_STORE_NAME],"readwrite"),D=b.objectStore(m.DB_STORE_NAME),B=0,O=0,j=c.length;function Z(){O==0?p():y()}c.forEach(function(ie){var ce=D.put(m.analyzePath(ie).object.contents,ie);ce.onsuccess=function(){B++,B+O==j&&Z()},ce.onerror=function(){O++,B+O==j&&Z()}}),b.onerror=y},I.onerror=y},loadFilesFromDB:function(c,p,y){p=p||function(){},y=y||function(){};var C=m.indexedDB();try{var I=C.open(m.DB_NAME(),m.DB_VERSION)}catch(z){return y(z)}I.onupgradeneeded=y,I.onsuccess=function(){var x=I.result;try{var b=x.transaction([m.DB_STORE_NAME],"readonly")}catch(ie){y(ie);return}var D=b.objectStore(m.DB_STORE_NAME),B=0,O=0,j=c.length;function Z(){O==0?p():y()}c.forEach(function(ie){var ce=D.get(ie);ce.onsuccess=function(){m.analyzePath(ie).exists&&m.unlink(ie),m.createDataFile(oe.dirname(ie),oe.basename(ie),ce.result,!0,!0,!0),B++,B+O==j&&Z()},ce.onerror=function(){O++,B+O==j&&Z()}}),b.onerror=y},I.onerror=y}},Se={mappings:{},DEFAULT_POLLMASK:5,umask:511,calculateAt:function(c,p){if(p[0]!=="/"){var y;if(c===-100)y=m.cwd();else{var C=m.getStream(c);if(!C)throw new m.ErrnoError(8);y=C.path}p=oe.join2(y,p)}return p},doStat:function(c,p,y){try{var C=c(p)}catch(I){if(I&&I.node&&oe.normalize(p)!==oe.normalize(m.getPath(I.node)))return-54;throw I}return Y[y>>2]=C.dev,Y[y+4>>2]=0,Y[y+8>>2]=C.ino,Y[y+12>>2]=C.mode,Y[y+16>>2]=C.nlink,Y[y+20>>2]=C.uid,Y[y+24>>2]=C.gid,Y[y+28>>2]=C.rdev,Y[y+32>>2]=0,E=[C.size>>>0,(L=C.size,+Math.abs(L)>=1?L>0?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)],Y[y+40>>2]=E[0],Y[y+44>>2]=E[1],Y[y+48>>2]=4096,Y[y+52>>2]=C.blocks,Y[y+56>>2]=C.atime.getTime()/1e3|0,Y[y+60>>2]=0,Y[y+64>>2]=C.mtime.getTime()/1e3|0,Y[y+68>>2]=0,Y[y+72>>2]=C.ctime.getTime()/1e3|0,Y[y+76>>2]=0,E=[C.ino>>>0,(L=C.ino,+Math.abs(L)>=1?L>0?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)],Y[y+80>>2]=E[0],Y[y+84>>2]=E[1],0},doMsync:function(c,p,y,C,I){var z=q.slice(c,c+y);m.msync(p,z,I,y,C)},doMkdir:function(c,p){return c=oe.normalize(c),c[c.length-1]==="/"&&(c=c.substr(0,c.length-1)),m.mkdir(c,p,0),0},doMknod:function(c,p,y){switch(p&61440){case 32768:case 8192:case 24576:case 4096:case 49152:break;default:return-28}return m.mknod(c,p,y),0},doReadlink:function(c,p,y){if(y<=0)return-28;var C=m.readlink(c),I=Math.min(y,W(C)),z=J[p+I];return F(C,p,y+1),J[p+I]=z,I},doAccess:function(c,p){if(p&-8)return-28;var y,C=m.lookupPath(c,{follow:!0});if(y=C.node,!y)return-44;var I="";return p&4&&(I+="r"),p&2&&(I+="w"),p&1&&(I+="x"),I&&m.nodePermissions(y,I)?-2:0},doDup:function(c,p,y){var C=m.getStream(y);return C&&m.close(C),m.open(c,p,0,y,y).fd},doReadv:function(c,p,y,C){for(var I=0,z=0;z<y;z++){var x=Y[p+z*8>>2],b=Y[p+(z*8+4)>>2],D=m.read(c,J,x,b,C);if(D<0)return-1;if(I+=D,D<b)break}return I},doWritev:function(c,p,y,C){for(var I=0,z=0;z<y;z++){var x=Y[p+z*8>>2],b=Y[p+(z*8+4)>>2],D=m.write(c,J,x,b,C);if(D<0)return-1;I+=D}return I},varargs:void 0,get:function(){Se.varargs+=4;var c=Y[Se.varargs-4>>2];return c},getStr:function(c){var p=G(c);return p},getStreamFromFD:function(c){var p=m.getStream(c);if(!p)throw new m.ErrnoError(8);return p},get64:function(c,p){return c}};function ke(c,p,y){Se.varargs=y;try{var C=Se.getStreamFromFD(c);switch(p){case 0:{var I=Se.get();if(I<0)return-28;var z;return z=m.open(C.path,C.flags,0,I),z.fd}case 1:case 2:return 0;case 3:return C.flags;case 4:{var I=Se.get();return C.flags|=I,0}case 12:{var I=Se.get(),x=0;return Q[I+x>>1]=2,0}case 13:case 14:return 0;case 16:case 8:return-28;case 9:return me(28),-1;default:return-28}}catch(b){return(typeof m>"u"||!(b instanceof m.ErrnoError))&&U(b),-b.errno}}function it(c,p,y){Se.varargs=y;try{var C=Se.getStreamFromFD(c);switch(p){case 21509:case 21505:return C.tty?0:-59;case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:return C.tty?0:-59;case 21519:{if(!C.tty)return-59;var I=Se.get();return Y[I>>2]=0,0}case 21520:return C.tty?-28:-59;case 21531:{var I=Se.get();return m.ioctl(C,p,I)}case 21523:return C.tty?0:-59;case 21524:return C.tty?0:-59;default:U("bad ioctl syscall "+p)}}catch(z){return(typeof m>"u"||!(z instanceof m.ErrnoError))&&U(z),-z.errno}}function H(c,p,y){Se.varargs=y;try{var C=Se.getStr(c),I=Se.get(),z=m.open(C,p,I);return z.fd}catch(x){return(typeof m>"u"||!(x instanceof m.ErrnoError))&&U(x),-x.errno}}function de(c,p,y){q.copyWithin(c,p,p+y)}function te(){return q.length}function ne(c){try{return M.grow(c-k.byteLength+65535>>>16),$(M.buffer),1}catch{}}function pe(c){c=c>>>0;var p=te(),y=2147483648;if(c>y)return!1;for(var C=16777216,I=1;I<=4;I*=2){var z=p*(1+.2/I);z=Math.min(z,c+100663296);var x=Math.min(y,A(Math.max(C,c,z),65536)),b=ne(x);if(b)return!0}return!1}function Ie(c){try{var p=Se.getStreamFromFD(c);return m.close(p),0}catch(y){return(typeof m>"u"||!(y instanceof m.ErrnoError))&&U(y),y.errno}}function qe(c,p,y,C){try{var I=Se.getStreamFromFD(c),z=Se.doReadv(I,p,y);return Y[C>>2]=z,0}catch(x){return(typeof m>"u"||!(x instanceof m.ErrnoError))&&U(x),x.errno}}function ut(c,p,y,C,I){try{var z=Se.getStreamFromFD(c),x=4294967296,b=y*x+(p>>>0),D=9007199254740992;return b<=-D||b>=D?-61:(m.llseek(z,b,C),E=[z.position>>>0,(L=z.position,+Math.abs(L)>=1?L>0?(Math.min(+Math.floor(L/4294967296),4294967295)|0)>>>0:~~+Math.ceil((L-+(~~L>>>0))/4294967296)>>>0:0)],Y[I>>2]=E[0],Y[I+4>>2]=E[1],z.getdents&&b===0&&C===0&&(z.getdents=null),0)}catch(B){return(typeof m>"u"||!(B instanceof m.ErrnoError))&&U(B),B.errno}}function pt(c,p,y,C){try{var I=Se.getStreamFromFD(c),z=Se.doWritev(I,p,y);return Y[C>>2]=z,0}catch(x){return(typeof m>"u"||!(x instanceof m.ErrnoError))&&U(x),x.errno}}var Ke=function(c,p,y,C){c||(c=this),this.parent=c,this.mount=c.mount,this.mounted=null,this.id=m.nextInode++,this.name=p,this.mode=y,this.node_ops={},this.stream_ops={},this.rdev=C},Ct=365,Tt=146;Object.defineProperties(Ke.prototype,{read:{get:function(){return(this.mode&Ct)===Ct},set:function(c){c?this.mode|=Ct:this.mode&=~Ct}},write:{get:function(){return(this.mode&Tt)===Tt},set:function(c){c?this.mode|=Tt:this.mode&=~Tt}},isFolder:{get:function(){return m.isDir(this.mode)}},isDevice:{get:function(){return m.isChrdev(this.mode)}}}),m.FSNode=Ke,m.staticInit(),e.FS_createPath=m.createPath,e.FS_createDataFile=m.createDataFile,e.FS_createPreloadedFile=m.createPreloadedFile,e.FS_createLazyFile=m.createLazyFile,e.FS_createDevice=m.createDevice,e.FS_unlink=m.unlink;function $n(c,p,y){var C=W(c)+1,I=new Array(C),z=N(c,I,0,I.length);return I.length=z,I}ve.push({func:function(){Zn()}});var en={c:ke,i:it,j:H,f:de,g:pe,d:Ie,h:qe,e:ut,b:pt,a:M};Fe();var Zn=e.___wasm_call_ctors=function(){return(Zn=e.___wasm_call_ctors=e.asm.l).apply(null,arguments)},Bi=e._malloc=function(){return(Bi=e._malloc=e.asm.m).apply(null,arguments)};e._free=function(){return(e._free=e.asm.n).apply(null,arguments)},e._mid_song_start=function(){return(e._mid_song_start=e.asm.o).apply(null,arguments)},e._mid_song_seek=function(){return(e._mid_song_seek=e.asm.p).apply(null,arguments)},e._mid_song_get_total_time=function(){return(e._mid_song_get_total_time=e.asm.q).apply(null,arguments)},e._mid_song_get_time=function(){return(e._mid_song_get_time=e.asm.r).apply(null,arguments)},e._mid_song_read_wave=function(){return(e._mid_song_read_wave=e.asm.s).apply(null,arguments)},e._mid_istream_open_mem=function(){return(e._mid_istream_open_mem=e.asm.t).apply(null,arguments)},e._mid_istream_close=function(){return(e._mid_istream_close=e.asm.u).apply(null,arguments)},e._mid_exit=function(){return(e._mid_exit=e.asm.v).apply(null,arguments)},e._mid_init=function(){return(e._mid_init=e.asm.w).apply(null,arguments)},e._mid_song_load=function(){return(e._mid_song_load=e.asm.x).apply(null,arguments)},e._mid_song_free=function(){return(e._mid_song_free=e.asm.y).apply(null,arguments)},e._mid_alloc_options=function(){return(e._mid_alloc_options=e.asm.z).apply(null,arguments)},e._mid_get_load_request_count=function(){return(e._mid_get_load_request_count=e.asm.A).apply(null,arguments)},e._mid_get_load_request=function(){return(e._mid_get_load_request=e.asm.B).apply(null,arguments)};var ki=e.___errno_location=function(){return(ki=e.___errno_location=e.asm.C).apply(null,arguments)};e.UTF8ToString=G,e.addRunDependency=Be,e.removeRunDependency=nt,e.FS_createPath=m.createPath,e.FS_createDataFile=m.createDataFile,e.FS_createPreloadedFile=m.createPreloadedFile,e.FS_createLazyFile=m.createLazyFile,e.FS_createDevice=m.createDevice,e.FS_unlink=m.unlink,e.FS=m;var tn;Ne=function c(){tn||Qn(),tn||(Ne=c)};function Qn(c){if(Le>0||(Ge(),Le>0))return;function p(){tn||(tn=!0,e.calledRun=!0,!g&&(Ze(),ee(),t(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),fe()))}e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),p()},1)):p()}if(e.run=Qn,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return Qn(),n.ready}/*! timidity. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */const Bn=console.debug,to=console.debug,l0=`
drumset 0

 25	Drum_000/025_Snare_Roll.pat 
 26	Drum_000/026_Snap.pat 
 27	Drum_000/027_High_Q.pat 
 31	Drum_000/031_Sticks.pat 
 32	Drum_000/032_Square_Click.pat 
 33	Drum_000/033_Metronome_Click.pat 
 34	Drum_000/034_Metronome_Bell.pat 
 35	Drum_000/035_Kick_1.pat amp=100
 36	Drum_000/036_Kick_2.pat amp=100
 37	Drum_000/037_Stick_Rim.pat 
 38	Drum_000/038_Snare_1.pat 
 39	Drum_000/039_Clap_Hand.pat amp=100
 40	Drum_000/040_Snare_2.pat 
 41	Drum_000/041_Tom_Low_2.pat amp=100
 42	Drum_000/042_Hi-Hat_Closed.pat 
 43	Drum_000/043_Tom_Low_1.pat amp=100
 44	Drum_000/044_Hi-Hat_Pedal.pat 
 45	Drum_000/045_Tom_Mid_2.pat amp=100
 46	Drum_000/046_Hi-Hat_Open.pat 
 47	Drum_000/047_Tom_Mid_1.pat amp=100
 48	Drum_000/048_Tom_High_2.pat amp=100
 49	Drum_000/049_Cymbal_Crash_1.pat 
 50	Drum_000/050_Tom_High_1.pat amp=100
 51	Drum_000/051_Cymbal_Ride_1.pat 
 52	Drum_000/052_Cymbal_Chinese.pat 
 53	Drum_000/053_Cymbal_Ride_Bell.pat amp=100
 54	Drum_000/054_Tombourine.pat 
 55	Drum_000/055_Cymbal_Splash.pat 
 56	Drum_000/056_Cow_Bell.pat 
 57	Drum_000/057_Cymbal_Crash_2.pat 
 58	Drum_000/058_Vibra-Slap.pat 
 59	Drum_000/059_Cymbal_Ride_2.pat 
 60	Drum_000/060_Bongo_High.pat 
 61	Drum_000/061_Bongo_Low.pat 
 62	Drum_000/062_Conga_High_1_Mute.pat 
 63	Drum_000/063_Conga_High_2_Open.pat 
 64	Drum_000/064_Conga_Low.pat 
 65	Drum_000/065_Timbale_High.pat 
 66	Drum_000/066_Timbale_Low.pat 
 67	Drum_000/067_Agogo_High.pat 
 68	Drum_000/068_Agogo_Low.pat 
 69	Drum_000/069_Cabasa.pat amp=100
 70	Drum_000/070_Maracas.pat 
 71	Drum_000/071_Whistle_1_High_Short.pat 
 72	Drum_000/072_Whistle_2_Low_Long.pat 
 73	Drum_000/073_Guiro_1_Short.pat 
 74	Drum_000/074_Guiro_2_Long.pat 
 75	Drum_000/075_Claves.pat amp=100
 76	Drum_000/076_Wood_Block_1_High.pat 
 77	Drum_000/077_Wood_Block_2_Low.pat 
 78	Drum_000/078_Cuica_1_Mute.pat amp=100
 79	Drum_000/079_Cuica_2_Open.pat amp=100
 80	Drum_000/080_Triangle_1_Mute.pat 
 81	Drum_000/081_Triangle_2_Open.pat 
 82	Drum_000/082_Shaker.pat 
 84	Drum_000/084_Belltree.pat 

bank 0

 0	Tone_000/000_Acoustic_Grand_Piano.pat amp=120 pan=center
 1	Tone_000/001_Acoustic_Brite_Piano.pat 
 2	Tone_000/002_Electric_Grand_Piano.pat 
 4	Tone_000/004_Electric_Piano_1_Rhodes.pat 
 5	Tone_000/005_Electric_Piano_2_Chorused_Yamaha_DX.pat 
 6	Tone_000/006_Harpsichord.pat 
 7	Tone_000/007_Clavinet.pat 
 8	Tone_000/008_Celesta.pat 
 9	Tone_000/009_Glockenspiel.pat 
 13	Tone_000/013_Xylophone.pat 
 14	Tone_000/014_Tubular_Bells.pat 
 15	Tone_000/015_Dulcimer.pat 
 16	Tone_000/016_Hammond_Organ.pat 
 19	Tone_000/019_Church_Organ.pat 
 21	Tone_000/021_Accordion.pat 
 23	Tone_000/023_Tango_Accordion.pat 
 24	Tone_000/024_Nylon_Guitar.pat 
 25	Tone_000/025_Steel_Guitar.pat 
 26	Tone_000/026_Jazz_Guitar.pat 
 27	Tone_000/027_Clean_Electric_Guitar.pat 
 28	Tone_000/028_Muted_Electric_Guitar.pat 
 29	Tone_000/029_Overdriven_Guitar.pat 
 30	Tone_000/030_Distortion_Guitar.pat 
 32	Tone_000/032_Acoustic_Bass.pat 
 33	Tone_000/033_Finger_Bass.pat 
 34	Tone_000/034_Pick_Bass.pat 
 35	Tone_000/035_Fretless_Bass.pat 
 36	Tone_000/036_Slap_Bass_1.pat 
 37	Tone_000/037_Slap_Bass_2.pat 
 38	Tone_000/038_Synth_Bass_1.pat 
 40	Tone_000/040_Violin.pat 
 42	Tone_000/042_Cello.pat 
 44	Tone_000/044_Tremolo_Strings.pat 
 45	Tone_000/045_Pizzicato_Strings.pat 
 46	Tone_000/046_Harp.pat 
 47	Tone_000/047_Timpani.pat 
 48	Tone_000/048_String_Ensemble_1_Marcato.pat 
 53	Tone_000/053_Voice_Oohs.pat 
 56	Tone_000/056_Trumpet.pat 
 57	Tone_000/057_Trombone.pat 
 58	Tone_000/058_Tuba.pat 
 59	Tone_000/059_Muted_Trumpet.pat 
 60	Tone_000/060_French_Horn.pat 
 61	Tone_000/061_Brass_Section.pat 
 64	Tone_000/064_Soprano_Sax.pat 
 65	Tone_000/065_Alto_Sax.pat 
 66	Tone_000/066_Tenor_Sax.pat 
 67	Tone_000/067_Baritone_Sax.pat 
 68	Tone_000/068_Oboe.pat 
 69	Tone_000/069_English_Horn.pat 
 70	Tone_000/070_Bassoon.pat 
 71	Tone_000/071_Clarinet.pat 
 72	Tone_000/072_Piccolo.pat 
 73	Tone_000/073_Flute.pat 
 74	Tone_000/074_Recorder.pat 
 75	Tone_000/075_Pan_Flute.pat 
 76	Tone_000/076_Bottle_Blow.pat 
 79	Tone_000/079_Ocarina.pat 
 80	Tone_000/080_Square_Wave.pat 
 84	Tone_000/084_Charang.pat 
 88	Tone_000/088_New_Age.pat 
 94	Tone_000/094_Halo_Pad.pat 
 95	Tone_000/095_Sweep_Pad.pat 
 98	Tone_000/098_Crystal.pat 
 101	Tone_000/101_Goblins--Unicorn.pat 
 102	Tone_000/102_Echo_Voice.pat 
 104	Tone_000/104_Sitar.pat 
 114	Tone_000/114_Steel_Drums.pat 
 115	Tone_000/115_Wood_Block.pat 
 120	Tone_000/120_Guitar_Fret_Noise.pat 
 122	Tone_000/122_Seashore.pat 
 125	Tone_000/125_Helicopter.pat 

`,u0=44100,h0=32784,qo=2,no=2*qo,xi=16384,f0=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);class d0 extends a0.EventEmitter{destroyed;_baseUrl;_ready;_playing;_pendingFetches;_songPtr;_bufferPtr;_array;_currentUrlOrBuf;_interval;_audioContext;_node;_lib;constructor(e="/"){super(),this.destroyed=!1,e.endsWith("/")||(e+="/"),this._baseUrl=new URL(e,window.location.origin).href,this._ready=!1,this._playing=!1,this._pendingFetches={},this._songPtr=0,this._bufferPtr=0,this._array=new Int16Array(xi*2),this._currentUrlOrBuf=null,this._interval=null,this._startInterval=this._startInterval.bind(this),this._stopInterval=this._stopInterval.bind(this),this._audioContext=new f0,this._node=this._audioContext.createScriptProcessor(xi,0,qo),this._onAudioProcess=this._onAudioProcess.bind(this),this._node.addEventListener("audioprocess",this._onAudioProcess),this._node.connect(this._audioContext.destination),c0({locateFile:t=>new URL(t,this._baseUrl).href}).then(t=>{this._lib=t,this._onLibReady()})}_onLibReady(){if(!this._lib)return;if(this._lib.FS.writeFile("/timidity.cfg",l0),this._lib._mid_init("/timidity.cfg")!==0)return this._destroy(new Error("Failed to initialize libtimidity"));this._bufferPtr=this._lib._malloc(xi*no),to("Initialized libtimidity"),this._ready=!0,this.emit("_ready")}async load(e){if(Bn("load %o",e),this.destroyed)throw new Error("load() called after destroy()");if(this._audioContext.resume(),this._songPtr&&this._destroySong(),this.emit("unstarted"),this._stopInterval(),!this._ready)return this.once("_ready",()=>this.load(e));this.emit("buffering"),this._currentUrlOrBuf=e;let t;if(typeof e=="string"){if(t=await this._fetch(new URL(e,this._baseUrl)),this._currentUrlOrBuf!==e)return}else if(e instanceof Uint8Array)t=e;else throw new Error("load() expects a `string` or `Uint8Array` argument");let i=this._loadSong(t),r=this._lib._mid_get_load_request_count(i);if(r>0){let s=this._getMissingInstruments(i,r);if(to("Fetching instruments: %o",s),await Promise.all(s.map(o=>this._fetchInstrument(o))),this._currentUrlOrBuf!==e)return;this._lib._mid_song_free(i),i=this._loadSong(t),r=this._lib._mid_get_load_request_count(i),r>0&&(s=this._getMissingInstruments(i,r),Bn("Playing with missing instruments: %o",s))}this._songPtr=i,this._lib._mid_song_start(this._songPtr),to("Song and instruments are loaded")}_getMissingInstruments(e,t){const i=[];for(let r=0;r<t;r++){const s=this._lib._mid_get_load_request(e,r),o=this._lib.UTF8ToString(s);i.push(o)}return i}_loadSong(e){if(!this._lib)throw new Error("libtimidity is not loaded");const t=this._lib._mid_alloc_options(u0,h0,qo,xi),i=this._lib._malloc(e.byteLength);this._lib.HEAPU8.set(e,i);const r=this._lib._mid_istream_open_mem(i,e.byteLength),s=this._lib._mid_song_load(r,t);return this._lib._mid_istream_close(r),this._lib._free(t),this._lib._free(i),s===0&&this._destroy(new Error("Failed to load MIDI file")),s}async _fetchInstrument(e){if(this._pendingFetches[e])return this._pendingFetches[e];const t=new URL(e,this._baseUrl),i=this._fetch(t);this._pendingFetches[e]=i;const r=await i;return this._writeInstrumentFile(e,r),delete this._pendingFetches[e],r}_writeInstrumentFile(e,t){const i=e.split("/").slice(0,-1).join("/");this._mkdirp(i),this._lib.FS.writeFile(e,t,{encoding:"binary"})}_mkdirp(e){const t=e.split("/");let i="/";for(const r of t){try{this._lib.FS.mkdir(`${i}${r}`)}catch{}i+=`${r}/`}}async _fetch(e){const t={mode:"cors",credentials:"same-origin"},i=await window.fetch(e.toString(),t);if(i.status!==200)throw new Error(`Could not load ${e}`);const r=await i.arrayBuffer();return new Uint8Array(r)}play(){if(Bn("play"),this.destroyed)throw new Error("play() called after destroy()");this._audioContext.resume(),this._playing=!0,this._ready&&!this._currentUrlOrBuf&&(this.emit("playing"),this._startInterval())}_onAudioProcess(e){const t=this._songPtr&&this._playing?this._readMidiData():0;t>0&&this._currentUrlOrBuf&&(this._currentUrlOrBuf=null,this.emit("playing"),this._startInterval());const i=e.outputBuffer.getChannelData(0),r=e.outputBuffer.getChannelData(1);for(let s=0;s<t;s++)i[s]=this._array[s*2]/32767,r[s]=this._array[s*2+1]/32767;for(let s=t;s<xi;s++)i[s]=0,r[s]=0;this._songPtr&&this._playing&&t===0&&(this.seek(0),this.pause(),this._lib._mid_song_start(this._songPtr),this.emit("ended"))}_readMidiData(){if(!this._lib)throw new Error("libtimidity is not loaded");const e=this._lib._mid_song_read_wave(this._songPtr,this._bufferPtr,xi*no),t=e/no;return t===0?0:(this._array.set(this._lib.HEAP16.subarray(this._bufferPtr/2,(this._bufferPtr+e)/2)),t)}pause(){if(Bn("pause"),this.destroyed)throw new Error("pause() called after destroy()");this._playing=!1,this._stopInterval(),this.emit("paused")}seek(e){if(Bn("seek %d",e),this.destroyed)throw new Error("seek() called after destroy()");if(!this._songPtr)return;const t=Math.floor(e*1e3);this._lib._mid_song_seek(this._songPtr,t),this._onTimeupdate()}get currentTime(){return this.destroyed||!this._songPtr?0:this._lib._mid_song_get_time(this._songPtr)/1e3}get duration(){return this.destroyed||!this._songPtr?1:this._lib._mid_song_get_total_time(this._songPtr)/1e3}_onTimeupdate(){this.emit("timeupdate",this.currentTime)}_startInterval(){this._onTimeupdate(),this._interval=setInterval(()=>this._onTimeupdate(),1e3)}_stopInterval(){this._onTimeupdate(),this._interval&&(clearInterval(this._interval),this._interval=null)}destroy(){if(Bn("destroy"),this.destroyed)throw new Error("destroy() called after destroy()");this._destroy()}_destroy(e){this.destroyed||(this.destroyed=!0,this._stopInterval(),this._array=null,this._songPtr&&this._destroySong(),this._bufferPtr&&(this._lib._free(this._bufferPtr),this._bufferPtr=0),this._node&&(this._node.disconnect(),this._node.removeEventListener("audioprocess",this._onAudioProcess)),this._audioContext&&this._audioContext.close(),e&&this.emit("error",e),Bn("destroyed (err %o)",e))}_destroySong(){this._lib&&(this._lib._mid_song_free(this._songPtr),this._songPtr=0)}}class p0{constructor(e,t,i){this.midi=e,this.startTime=t,this.player=new d0(i)}player;playing=!1;async load(){this.player.load(this.midi)}play(){console.log("play"),this.player.play(),this.playing=!0}stop(){this.player.pause(),this.playing=!1}isPlaying(){return this.playing}audioTime(){return this.player.currentTime+this.startTime}rawAudioTime(){return this.player.currentTime}}const Ul=document.getElementById("changeInst");let Yo=+document.getElementById("timeOffset").value;+document.getElementById("hitTime").value;let Jn,fn;async function Nl(){const n="/midi-hero/songs/song.mid",e="/midi-hero/timidity",t=await Ml.Midi.fromUrl(n),{instruments:i,startTime:r}=fg(t);fn=new p0(n,r,e),Jn=new hg(i),await fn.load(),sg(Ul,i.map((s,o)=>[o,s.name]))}Nl();async function m0(){Jn==null&&await Nl(),fn.isPlaying()?fn.stop():fn.play()}function _0(n,e){Jn.update(n),Jn.visuals.update(e)}let io=0,ro=0,Rc=performance.now(),so=0;function Fl(){requestAnimationFrame(Fl);const n=performance.now()/1e3;if(fn?.isPlaying()){const e=n-Rc;Rc=n,ro+=e;const t=fn.audioTime();console.log(t),console.log(t,fn.rawAudioTime()),t!=io&&fn.rawAudioTime()!=0&&(io=t,ro=0);const i=io+ro;so=Xo(so,i,.5),_0(so+ +Yo,e)}ss.render(Ft,Di)}Fl();const g0={s:0,d:1,k:2,l:3};function v0(n){const e=g0[n.key];e!=null&&(Jn.click(e),n.preventDefault())}function x0(n){Yo=+n.target.value,console.log(Yo)}function y0(n){Jn.setHitTime(+n.target.value),console.log(+n.target.value)}function S0(){Di.aspect=window.innerWidth/window.innerHeight,Di.updateProjectionMatrix(),ss.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",S0);document.body.addEventListener("keydown",v0);document.getElementById("playPause").addEventListener("click",m0);document.getElementById("timeOffset").addEventListener("input",x0);document.getElementById("hitTime").addEventListener("input",y0);Ul.addEventListener("change",n=>Jn.setInstrument(+n.target.value));
