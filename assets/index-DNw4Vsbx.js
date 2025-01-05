(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qa="167",gf=0,Tl=1,vf=2,th=1,_f=2,Nn=3,di=0,It=1,_n=2,ci=0,ar=1,Al=2,Cl=3,Dl=4,bf=5,Di=100,yf=101,xf=102,Sf=103,Ef=104,wf=200,Mf=201,Tf=202,Af=203,sa=204,oa=205,Cf=206,Df=207,Rf=208,Pf=209,If=210,Lf=211,Nf=212,Of=213,Uf=214,Ff=0,Bf=1,zf=2,Gs=3,kf=4,Vf=5,Gf=6,Hf=7,nh=0,Wf=1,jf=2,hi=0,Xf=1,Yf=2,qf=3,$f=4,Kf=5,Zf=6,Jf=7,ih=300,fr=301,dr=302,aa=303,la=304,so=306,ua=1e3,Ii=1001,ca=1002,Zt=1003,Qf=1004,qr=1005,on=1006,Eo=1007,Li=1008,Gn=1009,rh=1010,sh=1011,Fr=1012,$a=1013,Ui=1014,zn=1015,Vr=1016,Ka=1017,Za=1018,pr=1020,oh=35902,ah=1021,lh=1022,an=1023,uh=1024,ch=1025,lr=1026,mr=1027,hh=1028,Ja=1029,fh=1030,Qa=1031,el=1033,Cs=33776,Ds=33777,Rs=33778,Ps=33779,ha=35840,fa=35841,da=35842,pa=35843,ma=36196,ga=37492,va=37496,_a=37808,ba=37809,ya=37810,xa=37811,Sa=37812,Ea=37813,wa=37814,Ma=37815,Ta=37816,Aa=37817,Ca=37818,Da=37819,Ra=37820,Pa=37821,Is=36492,Ia=36494,La=36495,dh=36283,Na=36284,Oa=36285,Ua=36286,ed=3200,td=3201,ph=0,nd=1,ei="",dn="srgb",gi="srgb-linear",tl="display-p3",oo="display-p3-linear",Hs="linear",tt="srgb",Ws="rec709",js="p3",ki=7680,Rl=519,id=512,rd=513,sd=514,mh=515,od=516,ad=517,ld=518,ud=519,Pl=35044,Il="300 es",kn=2e3,Xs=2001;class _r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,Fa=180/Math.PI;function br(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function Et(n,e,t){return Math.max(e,Math.min(t,n))}function cd(n,e){return(n%e+e)%e}function Mo(n,e,t){return(1-t)*n+t*e}function Sr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ce{constructor(e=0,t=0){Ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],m=i[2],f=i[5],v=i[8],g=r[0],p=r[3],h=r[6],b=r[1],_=r[4],E=r[7],I=r[2],D=r[5],A=r[8];return s[0]=o*g+a*b+l*I,s[3]=o*p+a*_+l*D,s[6]=o*h+a*E+l*A,s[1]=u*g+c*b+d*I,s[4]=u*p+c*_+d*D,s[7]=u*h+c*E+d*A,s[2]=m*g+f*b+v*I,s[5]=m*p+f*_+v*D,s[8]=m*h+f*E+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,m=a*l-c*s,f=u*s-o*l,v=t*d+i*m+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=m*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=f*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ge;function gh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){const n=Ys("canvas");return n.style.display="block",n}const Ll={};function Ir(n){n in Ll||(Ll[n]=!0,console.warn(n))}function fd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Nl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ol=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Er={[gi]:{transfer:Hs,primaries:Ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[dn]:{transfer:tt,primaries:Ws,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[oo]:{transfer:Hs,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Ol),fromReference:n=>n.applyMatrix3(Nl)},[tl]:{transfer:tt,primaries:js,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ol),fromReference:n=>n.applyMatrix3(Nl).convertLinearToSRGB()}},dd=new Set([gi,oo]),Ze={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!dd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Er[e].toReference,r=Er[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Er[n].primaries},getTransfer:function(n){return n===ei?Hs:Er[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Er[e].luminanceCoefficients)}};function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vi;class pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=Ys("canvas")),Vi.width=e.width,Vi.height=e.height;const i=Vi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ur(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=br(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Co(r[o].image)):s.push(Co(r[o]))}else s=Co(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Co(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?pd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class Lt extends _r{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Ii,r=Ii,s=on,o=Li,a=an,l=Gn,u=Lt.DEFAULT_ANISOTROPY,c=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=br(),this.name="",this.source=new vh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ua:e.x=e.x-Math.floor(e.x);break;case Ii:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ua:e.y=e.y-Math.floor(e.y);break;case Ii:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ih;Lt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],m=l[1],f=l[5],v=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(c-m)<.01&&Math.abs(d-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(c+m)<.1&&Math.abs(d+g)<.1&&Math.abs(v+p)<.1&&Math.abs(u+f+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,E=(f+1)/2,I=(h+1)/2,D=(c+m)/4,A=(d+g)/4,U=(v+p)/4;return _>E&&_>I?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=D/i,s=A/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=U/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=A/s,r=U/s),this.set(i,r,s,t),this}let b=Math.sqrt((p-v)*(p-v)+(d-g)*(d-g)+(m-c)*(m-c));return Math.abs(b)<.001&&(b=1),this.x=(p-v)/b,this.y=(d-g)/b,this.z=(m-c)/b,this.w=Math.acos((u+f+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends _r{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends vd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _h extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const m=s[o+0],f=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=m,e[t+1]=f,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==m||u!==f||c!==v){let p=1-a;const h=l*m+u*f+c*v+d*g,b=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const I=Math.sqrt(_),D=Math.atan2(I,h*b);p=Math.sin(p*D)/I,a=Math.sin(a*D)/I}const E=a*b;if(l=l*p+m*E,u=u*p+f*E,c=c*p+v*E,d=d*p+g*E,p===1-a){const I=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=I,u*=I,c*=I,d*=I}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],m=s[o+1],f=s[o+2],v=s[o+3];return e[t]=a*v+c*d+l*f-u*m,e[t+1]=l*v+c*m+u*d-a*f,e[t+2]=u*v+c*f+a*m-l*d,e[t+3]=c*v-a*d-l*m-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),m=l(i/2),f=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=m*c*d+u*f*v,this._y=u*f*d-m*c*v,this._z=u*c*v+m*f*d,this._w=u*c*d-m*f*v;break;case"YXZ":this._x=m*c*d+u*f*v,this._y=u*f*d-m*c*v,this._z=u*c*v-m*f*d,this._w=u*c*d+m*f*v;break;case"ZXY":this._x=m*c*d-u*f*v,this._y=u*f*d+m*c*v,this._z=u*c*v+m*f*d,this._w=u*c*d-m*f*v;break;case"ZYX":this._x=m*c*d-u*f*v,this._y=u*f*d+m*c*v,this._z=u*c*v-m*f*d,this._w=u*c*d+m*f*v;break;case"YZX":this._x=m*c*d+u*f*v,this._y=u*f*d+m*c*v,this._z=u*c*v-m*f*d,this._w=u*c*d-m*f*v;break;case"XZY":this._x=m*c*d-u*f*v,this._y=u*f*d-m*c*v,this._z=u*c*v+m*f*d,this._w=u*c*d+m*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],m=i+a+d;if(m>0){const f=.5/Math.sqrt(m+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-u)*f,this._z=(o-r)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+u)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(s-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-r)/f,this._x=(s+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,m=Math.sin(t*c)/u;return this._w=o*d+this._w*m,this._x=i*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new W,Ul=new Gr;class Hr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qt):Qt.fromBufferAttribute(s,o),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$r.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$r.copy(i.boundingBox)),$r.applyMatrix4(e.matrixWorld),this.union($r)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Kr.subVectors(this.max,wr),Gi.subVectors(e.a,wr),Hi.subVectors(e.b,wr),Wi.subVectors(e.c,wr),jn.subVectors(Hi,Gi),Xn.subVectors(Wi,Hi),yi.subVectors(Gi,Wi);let t=[0,-jn.z,jn.y,0,-Xn.z,Xn.y,0,-yi.z,yi.y,jn.z,0,-jn.x,Xn.z,0,-Xn.x,yi.z,0,-yi.x,-jn.y,jn.x,0,-Xn.y,Xn.x,0,-yi.y,yi.x,0];return!Ro(t,Gi,Hi,Wi,Kr)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Gi,Hi,Wi,Kr))?!1:(Zr.crossVectors(jn,Xn),t=[Zr.x,Zr.y,Zr.z],Ro(t,Gi,Hi,Wi,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new W,new W,new W,new W,new W,new W,new W,new W],Qt=new W,$r=new Hr,Gi=new W,Hi=new W,Wi=new W,jn=new W,Xn=new W,yi=new W,wr=new W,Kr=new W,Zr=new W,xi=new W;function Ro(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){xi.fromArray(n,s);const a=r.x*Math.abs(xi.x)+r.y*Math.abs(xi.y)+r.z*Math.abs(xi.z),l=e.dot(xi),u=t.dot(xi),c=i.dot(xi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bd=new Hr,Mr=new W,Po=new W;class nl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);const t=Mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(Po)),this.expandByPoint(Mr.copy(e.center).sub(Po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new W,Io=new W,Jr=new W,Yn=new W,Lo=new W,Qr=new W,No=new W;class yd{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Io.copy(e).add(t).multiplyScalar(.5),Jr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Io);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Jr),a=Yn.dot(this.direction),l=-Yn.dot(Jr),u=Yn.lengthSq(),c=Math.abs(1-o*o);let d,m,f,v;if(c>0)if(d=o*l-a,m=o*a-l,v=s*c,d>=0)if(m>=-v)if(m<=v){const g=1/c;d*=g,m*=g,f=d*(d+o*m+2*a)+m*(o*d+m+2*l)+u}else m=s,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*l)+u;else m=-s,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*l)+u;else m<=-v?(d=Math.max(0,-(-o*s+a)),m=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+m*(m+2*l)+u):m<=v?(d=0,m=Math.min(Math.max(-s,-l),s),f=m*(m+2*l)+u):(d=Math.max(0,-(o*s+a)),m=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+m*(m+2*l)+u);else m=o>0?-s:s,d=Math.max(0,-(o*m+a)),f=-d*d+m*(m+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Io).addScaledVector(Jr,m),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),c>=0?(s=(e.min.y-m.y)*c,o=(e.max.y-m.y)*c):(s=(e.max.y-m.y)*c,o=(e.min.y-m.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-m.z)*d,l=(e.max.z-m.z)*d):(a=(e.max.z-m.z)*d,l=(e.min.z-m.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){Lo.subVectors(t,e),Qr.subVectors(i,e),No.crossVectors(Lo,Qr);let o=this.direction.dot(No),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(Qr.crossVectors(Yn,Qr));if(l<0)return null;const u=a*this.direction.dot(Lo.cross(Yn));if(u<0||l+u>o)return null;const c=-a*Yn.dot(No);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,r,s,o,a,l,u,c,d,m,f,v,g,p){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,m,f,v,g,p)}set(e,t,i,r,s,o,a,l,u,c,d,m,f,v,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=m,h[3]=f,h[7]=v,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ji.setFromMatrixColumn(e,0).length(),s=1/ji.setFromMatrixColumn(e,1).length(),o=1/ji.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const m=o*c,f=o*d,v=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=f+v*u,t[5]=m-g*u,t[9]=-a*l,t[2]=g-m*u,t[6]=v+f*u,t[10]=o*l}else if(e.order==="YXZ"){const m=l*c,f=l*d,v=u*c,g=u*d;t[0]=m+g*a,t[4]=v*a-f,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=f*a-v,t[6]=g+m*a,t[10]=o*l}else if(e.order==="ZXY"){const m=l*c,f=l*d,v=u*c,g=u*d;t[0]=m-g*a,t[4]=-o*d,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*c,t[9]=g-m*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const m=o*c,f=o*d,v=a*c,g=a*d;t[0]=l*c,t[4]=v*u-f,t[8]=m*u+g,t[1]=l*d,t[5]=g*u+m,t[9]=f*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const m=o*l,f=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=g-m*d,t[8]=v*d+f,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*d+v,t[10]=m-g*d}else if(e.order==="XZY"){const m=o*l,f=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=m*d+g,t[5]=o*c,t[9]=f*d-v,t[2]=v*d-f,t[6]=a*c,t[10]=g*d+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,Sd)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),qn.crossVectors(i,Ut),qn.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),qn.crossVectors(i,Ut)),qn.normalize(),es.crossVectors(Ut,qn),r[0]=qn.x,r[4]=es.x,r[8]=Ut.x,r[1]=qn.y,r[5]=es.y,r[9]=Ut.y,r[2]=qn.z,r[6]=es.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],m=i[9],f=i[13],v=i[2],g=i[6],p=i[10],h=i[14],b=i[3],_=i[7],E=i[11],I=i[15],D=r[0],A=r[4],U=r[8],w=r[12],M=r[1],F=r[5],C=r[9],O=r[13],y=r[2],k=r[6],Q=r[10],Y=r[14],ee=r[3],ne=r[7],ae=r[11],V=r[15];return s[0]=o*D+a*M+l*y+u*ee,s[4]=o*A+a*F+l*k+u*ne,s[8]=o*U+a*C+l*Q+u*ae,s[12]=o*w+a*O+l*Y+u*V,s[1]=c*D+d*M+m*y+f*ee,s[5]=c*A+d*F+m*k+f*ne,s[9]=c*U+d*C+m*Q+f*ae,s[13]=c*w+d*O+m*Y+f*V,s[2]=v*D+g*M+p*y+h*ee,s[6]=v*A+g*F+p*k+h*ne,s[10]=v*U+g*C+p*Q+h*ae,s[14]=v*w+g*O+p*Y+h*V,s[3]=b*D+_*M+E*y+I*ee,s[7]=b*A+_*F+E*k+I*ne,s[11]=b*U+_*C+E*Q+I*ae,s[15]=b*w+_*O+E*Y+I*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],m=e[10],f=e[14],v=e[3],g=e[7],p=e[11],h=e[15];return v*(+s*l*d-r*u*d-s*a*m+i*u*m+r*a*f-i*l*f)+g*(+t*l*f-t*u*m+s*o*m-r*o*f+r*u*c-s*l*c)+p*(+t*u*d-t*a*f-s*o*d+i*o*f+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*m+r*o*d-i*o*m+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],m=e[10],f=e[11],v=e[12],g=e[13],p=e[14],h=e[15],b=d*p*u-g*m*u+g*l*f-a*p*f-d*l*h+a*m*h,_=v*m*u-c*p*u-v*l*f+o*p*f+c*l*h-o*m*h,E=c*g*u-v*d*u+v*a*f-o*g*f-c*a*h+o*d*h,I=v*d*l-c*g*l-v*a*m+o*g*m+c*a*p-o*d*p,D=t*b+i*_+r*E+s*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/D;return e[0]=b*A,e[1]=(g*m*s-d*p*s-g*r*f+i*p*f+d*r*h-i*m*h)*A,e[2]=(a*p*s-g*l*s+g*r*u-i*p*u-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*m*s-d*r*u+i*m*u+a*r*f-i*l*f)*A,e[4]=_*A,e[5]=(c*p*s-v*m*s+v*r*f-t*p*f-c*r*h+t*m*h)*A,e[6]=(v*l*s-o*p*s-v*r*u+t*p*u+o*r*h-t*l*h)*A,e[7]=(o*m*s-c*l*s+c*r*u-t*m*u-o*r*f+t*l*f)*A,e[8]=E*A,e[9]=(v*d*s-c*g*s-v*i*f+t*g*f+c*i*h-t*d*h)*A,e[10]=(o*g*s-v*a*s+v*i*u-t*g*u-o*i*h+t*a*h)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*f-t*a*f)*A,e[12]=I*A,e[13]=(c*g*r-v*d*r+v*i*m-t*g*m-c*i*p+t*d*p)*A,e[14]=(v*a*r-o*g*r-v*i*l+t*g*l+o*i*p-t*a*p)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*m+t*a*m)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,m=s*u,f=s*c,v=s*d,g=o*c,p=o*d,h=a*d,b=l*u,_=l*c,E=l*d,I=i.x,D=i.y,A=i.z;return r[0]=(1-(g+h))*I,r[1]=(f+E)*I,r[2]=(v-_)*I,r[3]=0,r[4]=(f-E)*D,r[5]=(1-(m+h))*D,r[6]=(p+b)*D,r[7]=0,r[8]=(v+_)*A,r[9]=(p-b)*A,r[10]=(1-(m+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ji.set(r[0],r[1],r[2]).length();const o=ji.set(r[4],r[5],r[6]).length(),a=ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const u=1/s,c=1/o,d=1/a;return en.elements[0]*=u,en.elements[1]*=u,en.elements[2]*=u,en.elements[4]*=c,en.elements[5]*=c,en.elements[6]*=c,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,t.setFromRotationMatrix(en),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=kn){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),m=(i+r)/(i-r);let f,v;if(a===kn)f=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Xs)f=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=kn){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),m=(t+e)*u,f=(i+r)*c;let v,g;if(a===kn)v=(o+s)*d,g=-2*d;else if(a===Xs)v=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ji=new W,en=new rt,xd=new W(0,0,0),Sd=new W(1,1,1),qn=new W,es=new W,Ut=new W,Fl=new rt,Bl=new Gr;class En{constructor(e=0,t=0,i=0,r=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],m=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ed=0;const zl=new W,Xi=new Gr,Dn=new rt,ts=new W,Tr=new W,wd=new W,Md=new Gr,kl=new W(1,0,0),Vl=new W(0,1,0),Gl=new W(0,0,1),Hl={type:"added"},Td={type:"removed"},Yi={type:"childadded",child:null},Oo={type:"childremoved",child:null};class wt extends _r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new W,t=new En,i=new Gr,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Vl,e)}rotateZ(e){return this.rotateOnAxis(Gl,e)}translateOnAxis(e,t){return zl.copy(e).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Vl,e)}translateZ(e){return this.translateOnAxis(Gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ts.copy(e):ts.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Tr,ts,this.up):Dn.lookAt(ts,Tr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,wd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),m=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),m.length>0&&(i.skeletons=m),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new W(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new W,Rn=new W,Uo=new W,Pn=new W,qi=new W,$i=new W,Wl=new W,Fo=new W,Bo=new W,zo=new W;class bn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){tn.subVectors(r,t),Rn.subVectors(i,t),Uo.subVectors(e,t);const o=tn.dot(tn),a=tn.dot(Rn),l=tn.dot(Uo),u=Rn.dot(Rn),c=Rn.dot(Uo),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const m=1/d,f=(u*l-a*c)*m,v=(o*c-a*l)*m;return s.set(1-f-v,v,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static isFrontFacing(e,t,i,r){return tn.subVectors(i,t),Rn.subVectors(e,t),tn.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),tn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;qi.subVectors(r,i),$i.subVectors(s,i),Fo.subVectors(e,i);const l=qi.dot(Fo),u=$i.dot(Fo);if(l<=0&&u<=0)return t.copy(i);Bo.subVectors(e,r);const c=qi.dot(Bo),d=$i.dot(Bo);if(c>=0&&d<=c)return t.copy(r);const m=l*d-c*u;if(m<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(qi,o);zo.subVectors(e,s);const f=qi.dot(zo),v=$i.dot(zo);if(v>=0&&f<=v)return t.copy(s);const g=f*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector($i,a);const p=c*v-f*d;if(p<=0&&d-c>=0&&f-v>=0)return Wl.subVectors(s,r),a=(d-c)/(d-c+(f-v)),t.copy(r).addScaledVector(Wl,a);const h=1/(p+g+m);return o=g*h,a=m*h,t.copy(i).addScaledVector(qi,o).addScaledVector($i,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},ns={h:0,s:0,l:0};function ko(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=cd(e,1),t=Et(t,0,1),i=Et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ko(o,s,e+1/3),this.g=ko(o,s,e),this.b=ko(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const i=yh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return Ze.fromWorkingColorSpace(xt.copy(this),e),Math.round(Et(xt.r*255,0,255))*65536+Math.round(Et(xt.g*255,0,255))*256+Math.round(Et(xt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=dn){Ze.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(ns);const i=Mo($n.h,ns.h,t),r=Mo($n.s,ns.s,t),s=Mo($n.l,ns.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new He;He.NAMES=yh;let Ad=0;class Wr extends _r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=br(),this.name="",this.type="Material",this.blending=ar,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=oa,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sa&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Di&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class il extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ut=new W,is=new Ce;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ir("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)is.fromBufferAttribute(this,t),is.applyMatrix3(e),this.setXY(t,is.x,is.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix3(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),r=Ct(r,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}}class xh extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sh extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cd=0;const Gt=new rt,Vo=new wt,Ki=new W,Ft=new Hr,Ar=new Hr,mt=new W;class vi extends _r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gh(e)?Sh:xh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Vo.lookAt(e),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(Ft.min,Ar.min),Ft.expandByPoint(mt),mt.addVectors(Ft.max,Ar.max),Ft.expandByPoint(mt)):(Ft.expandByPoint(Ar.min),Ft.expandByPoint(Ar.max))}Ft.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)mt.fromBufferAttribute(a,u),l&&(Ki.fromBufferAttribute(e,u),mt.add(Ki)),r=Math.max(r,i.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new W,l[U]=new W;const u=new W,c=new W,d=new W,m=new Ce,f=new Ce,v=new Ce,g=new W,p=new W;function h(U,w,M){u.fromBufferAttribute(i,U),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),m.fromBufferAttribute(s,U),f.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),c.sub(u),d.sub(u),f.sub(m),v.sub(m);const F=1/(f.x*v.y-v.x*f.y);isFinite(F)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(d,-f.y).multiplyScalar(F),p.copy(d).multiplyScalar(f.x).addScaledVector(c,-v.x).multiplyScalar(F),a[U].add(g),a[w].add(g),a[M].add(g),l[U].add(p),l[w].add(p),l[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let U=0,w=b.length;U<w;++U){const M=b[U],F=M.start,C=M.count;for(let O=F,y=F+C;O<y;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new W,E=new W,I=new W,D=new W;function A(U){I.fromBufferAttribute(r,U),D.copy(I);const w=a[U];_.copy(w),_.sub(I.multiplyScalar(I.dot(w))).normalize(),E.crossVectors(D,w);const F=E.dot(l[U])<0?-1:1;o.setXYZW(U,_.x,_.y,_.z,F)}for(let U=0,w=b.length;U<w;++U){const M=b[U],F=M.start,C=M.count;for(let O=F,y=F+C;O<y;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,f=i.count;m<f;m++)i.setXYZ(m,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,u=new W,c=new W,d=new W;if(e)for(let m=0,f=e.count;m<f;m+=3){const v=e.getX(m+0),g=e.getX(m+1),p=e.getX(m+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let m=0,f=t.count;m<f;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(m+0,c.x,c.y,c.z),i.setXYZ(m+1,c.x,c.y,c.z),i.setXYZ(m+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,m=new u.constructor(l.length*c);let f=0,v=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*c;for(let h=0;h<c;h++)m[v++]=u[f++]}return new xn(m,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const m=u[c],f=e(m,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,m=u.length;d<m;d++){const f=u[d];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let m=0,f=d.length;m<f;m++)c.push(d[m].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new rt,Si=new yd,rs=new nl,Xl=new W,Zi=new W,Ji=new W,Qi=new W,Go=new W,ss=new W,os=new Ce,as=new Ce,ls=new Ce,Yl=new W,ql=new W,$l=new W,us=new W,cs=new W;class At extends wt{constructor(e=new vi,t=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ss.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Go.fromBufferAttribute(d,e),o?ss.addScaledVector(Go,c):ss.addScaledVector(Go.sub(t),c))}t.add(ss)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(s),Si.copy(e.ray).recast(e.near),!(rs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(rs,Xl)===null||Si.origin.distanceToSquared(Xl)>(e.far-e.near)**2))&&(jl.copy(s).invert(),Si.copy(e.ray).applyMatrix4(jl),!(i.boundingBox!==null&&Si.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,m=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=m.length;v<g;v++){const p=m[v],h=o[p.materialIndex],b=Math.max(p.start,f.start),_=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let E=b,I=_;E<I;E+=3){const D=a.getX(E),A=a.getX(E+1),U=a.getX(E+2);r=hs(this,h,e,i,u,c,d,D,A,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=v,h=g;p<h;p+=3){const b=a.getX(p),_=a.getX(p+1),E=a.getX(p+2);r=hs(this,o,e,i,u,c,d,b,_,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=m.length;v<g;v++){const p=m[v],h=o[p.materialIndex],b=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=b,I=_;E<I;E+=3){const D=E,A=E+1,U=E+2;r=hs(this,h,e,i,u,c,d,D,A,U),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=v,h=g;p<h;p+=3){const b=p,_=p+1,E=p+2;r=hs(this,o,e,i,u,c,d,b,_,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Dd(n,e,t,i,r,s,o,a){let l;if(e.side===It?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===di,a),l===null)return null;cs.copy(a),cs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(cs);return u<t.near||u>t.far?null:{distance:u,point:cs.clone(),object:n}}function hs(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Zi),n.getVertexPosition(l,Ji),n.getVertexPosition(u,Qi);const c=Dd(n,e,t,i,Zi,Ji,Qi,us);if(c){r&&(os.fromBufferAttribute(r,a),as.fromBufferAttribute(r,l),ls.fromBufferAttribute(r,u),c.uv=bn.getInterpolation(us,Zi,Ji,Qi,os,as,ls,new Ce)),s&&(os.fromBufferAttribute(s,a),as.fromBufferAttribute(s,l),ls.fromBufferAttribute(s,u),c.uv1=bn.getInterpolation(us,Zi,Ji,Qi,os,as,ls,new Ce)),o&&(Yl.fromBufferAttribute(o,a),ql.fromBufferAttribute(o,l),$l.fromBufferAttribute(o,u),c.normal=bn.getInterpolation(us,Zi,Ji,Qi,Yl,ql,$l,new W),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new W,materialIndex:0};bn.getNormal(Zi,Ji,Qi,d.normal),c.face=d}return c}class _i extends vi{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let m=0,f=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(c,3)),this.setAttribute("uv",new Sn(d,2));function v(g,p,h,b,_,E,I,D,A,U,w){const M=E/A,F=I/U,C=E/2,O=I/2,y=D/2,k=A+1,Q=U+1;let Y=0,ee=0;const ne=new W;for(let ae=0;ae<Q;ae++){const V=ae*F-O;for(let $=0;$<k;$++){const be=$*M-C;ne[g]=be*b,ne[p]=V*_,ne[h]=y,u.push(ne.x,ne.y,ne.z),ne[g]=0,ne[p]=0,ne[h]=D>0?1:-1,c.push(ne.x,ne.y,ne.z),d.push($/A),d.push(1-ae/U),Y+=1}}for(let ae=0;ae<U;ae++)for(let V=0;V<A;V++){const $=m+V+k*ae,be=m+V+k*(ae+1),q=m+(V+1)+k*(ae+1),J=m+(V+1)+k*ae;l.push($,be,J),l.push(be,q,J),ee+=6}a.addGroup(f,ee,w),f+=ee,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Mt(n){const e={};for(let t=0;t<n.length;t++){const i=gr(n[t]);for(const r in i)e[r]=i[r]}return e}function Rd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Eh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Pd={clone:gr,merge:Mt};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class wh extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new W,Kl=new Ce,Zl=new Ce;class zt extends wh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,Kl,Zl),t.subVectors(Zl,Kl)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const er=-90,tr=1;class Nd extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(er,tr,e,t);r.layers=this.layers,this.add(r);const s=new zt(er,tr,e,t);s.layers=this.layers,this.add(s);const o=new zt(er,tr,e,t);o.layers=this.layers,this.add(o);const a=new zt(er,tr,e,t);a.layers=this.layers,this.add(a);const l=new zt(er,tr,e,t);l.layers=this.layers,this.add(l);const u=new zt(er,tr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),m=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,m,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Mh extends Lt{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Od extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _i(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:ci});s.uniforms.tEquirect.value=t;const o=new At(r,s),a=t.minFilter;return t.minFilter===Li&&(t.minFilter=on),new Nd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ho=new W,Ud=new W,Fd=new Ge;class Ai{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ho.subVectors(i,t).cross(Ud.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ho),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fd.getNormalMatrix(e),r=this.coplanarPoint(Ho).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new nl,fs=new W;class rl{constructor(e=new Ai,t=new Ai,i=new Ai,r=new Ai,s=new Ai,o=new Ai){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],m=r[7],f=r[8],v=r[9],g=r[10],p=r[11],h=r[12],b=r[13],_=r[14],E=r[15];if(i[0].setComponents(l-s,m-u,p-f,E-h).normalize(),i[1].setComponents(l+s,m+u,p+f,E+h).normalize(),i[2].setComponents(l+o,m+c,p+v,E+b).normalize(),i[3].setComponents(l-o,m-c,p-v,E-b).normalize(),i[4].setComponents(l-a,m-d,p-g,E-_).normalize(),t===kn)i[5].setComponents(l+a,m+d,p+g,E+_).normalize();else if(t===Xs)i[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fs.x=r.normal.x>0?e.max.x:e.min.x,fs.y=r.normal.y>0?e.max.y:e.min.y,fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Th(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bd(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,u,c),a.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,m=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&m.length===0&&n.bufferSubData(u,0,c),m.length!==0){for(let f=0,v=m.length;f<v;f++){const g=m[f];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class yr extends vi{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,m=t/l,f=[],v=[],g=[],p=[];for(let h=0;h<c;h++){const b=h*m-o;for(let _=0;_<u;_++){const E=_*d-s;v.push(E,-b,0),g.push(0,0,1),p.push(_/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const _=b+u*h,E=b+u*(h+1),I=b+1+u*(h+1),D=b+1+u*h;f.push(_,E,D),f.push(E,I,D)}this.setIndex(f),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cp=`vec3 transformedNormal = objectNormal;
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
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`
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
}`,vp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
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
}`,Ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Fp=`struct PhysicalMaterial {
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
}`,Bp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,tm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,am=`#ifdef USE_NORMALMAP
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
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Em=`float getShadowMask() {
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
}`,wm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mm=`#ifdef USE_SKINNING
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
#endif`,Tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,Xm=`#define DISTANCE
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
}`,Ym=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#include <common>
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
}`,Qm=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,tg=`#define LAMBERT
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
}`,ng=`#define MATCAP
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
}`,ig=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,sg=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,ag=`#define PHONG
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
}`,lg=`#define STANDARD
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
}`,ug=`#define STANDARD
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
}`,cg=`#define TOON
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
}`,hg=`#define TOON
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
}`,fg=`uniform float size;
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
}`,dg=`uniform vec3 diffuse;
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
}`,pg=`#include <common>
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
}`,mg=`uniform vec3 color;
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
}`,gg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:Wd,aomap_fragment:jd,aomap_pars_fragment:Xd,batching_pars_vertex:Yd,batching_vertex:qd,begin_vertex:$d,beginnormal_vertex:Kd,bsdfs:Zd,iridescence_fragment:Jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:ep,clipping_planes_pars_fragment:tp,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:rp,color_pars_fragment:sp,color_pars_vertex:op,color_vertex:ap,common:lp,cube_uv_reflection_fragment:up,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:fp,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:vp,envmap_common_pars_fragment:_p,envmap_pars_fragment:bp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Pp,envmap_vertex:xp,fog_vertex:Sp,fog_pars_vertex:Ep,fog_fragment:wp,fog_pars_fragment:Mp,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:Ap,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Rp,lights_toon_fragment:Ip,lights_toon_pars_fragment:Lp,lights_phong_fragment:Np,lights_phong_pars_fragment:Op,lights_physical_fragment:Up,lights_physical_pars_fragment:Fp,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:kp,logdepthbuf_fragment:Vp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Wp,map_fragment:jp,map_pars_fragment:Xp,map_particle_fragment:Yp,map_particle_pars_fragment:qp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:Kp,morphinstance_vertex:Zp,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:em,morphtarget_vertex:tm,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:rm,normal_pars_vertex:sm,normal_vertex:om,normalmap_pars_fragment:am,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:fm,packing:dm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:gm,dithering_pars_fragment:vm,roughnessmap_fragment:_m,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:xm,shadowmap_vertex:Sm,shadowmask_pars_fragment:Em,skinbase_vertex:wm,skinning_pars_vertex:Mm,skinning_vertex:Tm,skinnormal_vertex:Am,specularmap_fragment:Cm,specularmap_pars_fragment:Dm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Pm,transmission_fragment:Im,transmission_pars_fragment:Lm,uv_pars_fragment:Nm,uv_pars_vertex:Om,uv_vertex:Um,worldpos_vertex:Fm,background_vert:Bm,background_frag:zm,backgroundCube_vert:km,backgroundCube_frag:Vm,cube_vert:Gm,cube_frag:Hm,depth_vert:Wm,depth_frag:jm,distanceRGBA_vert:Xm,distanceRGBA_frag:Ym,equirect_vert:qm,equirect_frag:$m,linedashed_vert:Km,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:eg,meshlambert_frag:tg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:rg,meshnormal_frag:sg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:ug,meshtoon_vert:cg,meshtoon_frag:hg,points_vert:fg,points_frag:dg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:vg},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:Mt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Mt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Mt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Mt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Mt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Mt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Mt([Se.points,Se.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Mt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Mt([Se.common,Se.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Mt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Mt([Se.sprite,Se.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Mt([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Mt([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};mn.physical={uniforms:Mt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ds={r:0,b:0,g:0},wi=new En,_g=new rt;function bg(n,e,t,i,r,s,o){const a=new He(0);let l=s===!0?0:1,u,c,d=null,m=0,f=null;function v(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function g(b){let _=!1;const E=v(b);E===null?h(a,l):E&&E.isColor&&(h(E,1),_=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(b,_){const E=v(_);E&&(E.isCubeTexture||E.mapping===so)?(c===void 0&&(c=new At(new _i(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:gr(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,D,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),wi.copy(_.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(wi)),c.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,(d!==E||m!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=E,m=E.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new At(new yr(2,2),new Hn({name:"BackgroundMaterial",uniforms:gr(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(E.colorSpace)!==tt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||m!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=E,m=E.version,f=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function h(b,_){b.getRGB(ds,Eh(n)),i.buffers.color.setClear(ds.r,ds.g,ds.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(a,l)},render:g,addToRenderList:p}}function yg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(M,F,C,O,y){let k=!1;const Q=d(O,C,F);s!==Q&&(s=Q,u(s.object)),k=f(M,O,C,y),k&&v(M,O,C,y),y!==null&&e.update(y,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,E(M,F,C,O),y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(y).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function d(M,F,C){const O=C.wireframe===!0;let y=i[M.id];y===void 0&&(y={},i[M.id]=y);let k=y[F.id];k===void 0&&(k={},y[F.id]=k);let Q=k[O];return Q===void 0&&(Q=m(l()),k[O]=Q),Q}function m(M){const F=[],C=[],O=[];for(let y=0;y<t;y++)F[y]=0,C[y]=0,O[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:C,attributeDivisors:O,object:M,attributes:{},index:null}}function f(M,F,C,O){const y=s.attributes,k=F.attributes;let Q=0;const Y=C.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const ae=y[ee];let V=k[ee];if(V===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),ae===void 0||ae.attribute!==V||V&&ae.data!==V.data)return!0;Q++}return s.attributesNum!==Q||s.index!==O}function v(M,F,C,O){const y={},k=F.attributes;let Q=0;const Y=C.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let ae=k[ee];ae===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const V={};V.attribute=ae,ae&&ae.data&&(V.data=ae.data),y[ee]=V,Q++}s.attributes=y,s.attributesNum=Q,s.index=O}function g(){const M=s.newAttributes;for(let F=0,C=M.length;F<C;F++)M[F]=0}function p(M){h(M,0)}function h(M,F){const C=s.newAttributes,O=s.enabledAttributes,y=s.attributeDivisors;C[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),y[M]!==F&&(n.vertexAttribDivisor(M,F),y[M]=F)}function b(){const M=s.newAttributes,F=s.enabledAttributes;for(let C=0,O=F.length;C<O;C++)F[C]!==M[C]&&(n.disableVertexAttribArray(C),F[C]=0)}function _(M,F,C,O,y,k,Q){Q===!0?n.vertexAttribIPointer(M,F,C,y,k):n.vertexAttribPointer(M,F,C,O,y,k)}function E(M,F,C,O){g();const y=O.attributes,k=C.getAttributes(),Q=F.defaultAttributeValues;for(const Y in k){const ee=k[Y];if(ee.location>=0){let ne=y[Y];if(ne===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ae=ne.normalized,V=ne.itemSize,$=e.get(ne);if($===void 0)continue;const be=$.buffer,q=$.type,J=$.bytesPerElement,ge=q===n.INT||q===n.UNSIGNED_INT||ne.gpuType===$a;if(ne.isInterleavedBufferAttribute){const _e=ne.data,ye=_e.stride,Ee=ne.offset;if(_e.isInstancedInterleavedBuffer){for(let Re=0;Re<ee.locationSize;Re++)h(ee.location+Re,_e.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Re=0;Re<ee.locationSize;Re++)p(ee.location+Re);n.bindBuffer(n.ARRAY_BUFFER,be);for(let Re=0;Re<ee.locationSize;Re++)_(ee.location+Re,V/ee.locationSize,q,ae,ye*J,(Ee+V/ee.locationSize*Re)*J,ge)}else{if(ne.isInstancedBufferAttribute){for(let _e=0;_e<ee.locationSize;_e++)h(ee.location+_e,ne.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let _e=0;_e<ee.locationSize;_e++)p(ee.location+_e);n.bindBuffer(n.ARRAY_BUFFER,be);for(let _e=0;_e<ee.locationSize;_e++)_(ee.location+_e,V/ee.locationSize,q,ae,V*J,V/ee.locationSize*_e*J,ge)}}else if(Q!==void 0){const ae=Q[Y];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(ee.location,ae);break;case 3:n.vertexAttrib3fv(ee.location,ae);break;case 4:n.vertexAttrib4fv(ee.location,ae);break;default:n.vertexAttrib1fv(ee.location,ae)}}}}b()}function I(){U();for(const M in i){const F=i[M];for(const C in F){const O=F[C];for(const y in O)c(O[y].object),delete O[y];delete F[C]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const F=i[M.id];for(const C in F){const O=F[C];for(const y in O)c(O[y].object),delete O[y];delete F[C]}delete i[M.id]}function A(M){for(const F in i){const C=i[F];if(C[M.id]===void 0)continue;const O=C[M.id];for(const y in O)c(O[y].object),delete O[y];delete C[M.id]}}function U(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:U,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:b}}function xg(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let f=0;for(let v=0;v<d;v++)f+=c[v];t.update(f,i,1)}function l(u,c,d,m){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<u.length;v++)o(u[v],c[v],m[v]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,m,0,d);let v=0;for(let g=0;g<d;g++)v+=c[g];for(let g=0;g<m.length;g++)t.update(v,i,m[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==an&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const A=D===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==zn&&!A)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,I=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:f,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:h,maxVaryings:b,maxFragmentUniforms:_,vertexTextures:E,maxSamples:I}}function Eg(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ai,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){const f=d.length!==0||m||i!==0||r;return r=m,i=d.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){t=c(d,m,0)},this.setState=function(d,m,f){const v=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||v===null||v.length===0||s&&!p)s?c(null):u();else{const b=s?0:i,_=b*4;let E=h.clippingState||null;l.value=E,E=c(v,m,_,f);for(let I=0;I!==_;++I)E[I]=t[I];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,m,f,v){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const h=f+g*4,b=m.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<h)&&(p=new Float32Array(h));for(let _=0,E=f;_!==g;++_,E+=4)o.copy(d[_]).applyMatrix4(b,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function wg(n){let e=new WeakMap;function t(o,a){return a===aa?o.mapping=fr:a===la&&(o.mapping=dr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===aa||a===la)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Od(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ah extends wh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,Jl=[.125,.215,.35,.446,.526,.582],Ri=20,Wo=new Ah,Ql=new He;let jo=null,Xo=0,Yo=0,qo=!1;const Ci=(1+Math.sqrt(5))/2,nr=1/Ci,eu=[new W(-Ci,nr,0),new W(Ci,nr,0),new W(-nr,0,Ci),new W(nr,0,Ci),new W(0,Ci,-nr),new W(0,Ci,nr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class tu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){jo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jo,Xo,Yo),this._renderer.xr.enabled=qo,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:on,minFilter:on,generateMipmaps:!1,type:Vr,format:an,colorSpace:gi,depthBuffer:!1},r=nu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(s)),this._blurMaterial=Tg(s,e,t)}return r}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,i,r){const a=new zt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,m=c.toneMapping;c.getClearColor(Ql),c.toneMapping=hi,c.autoClear=!1;const f=new il({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),v=new At(new _i,f);let g=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,g=!0):(f.color.copy(Ql),g=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):b===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;ps(r,b*_,h>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=m,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===fr||e.mapping===dr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eu[(r-s-1)%eu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new At(this._lodPlanes[r],u),m=u.uniforms,f=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),g=s/v,p=isFinite(s)?1+Math.floor(c*g):Ri;p>Ri&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const h=[];let b=0;for(let A=0;A<Ri;++A){const U=A/g,w=Math.exp(-U*U/2);h.push(w),A===0?b+=w:A<p&&(b+=2*w)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:_}=this;m.dTheta.value=v,m.mipInt.value=_-i;const E=this._sizeLods[r],I=3*E*(r>_-sr?r-_+sr:0),D=4*(this._cubeSize-E);ps(t,I,D,3*E,2*E),l.setRenderTarget(t),l.render(d,Wo)}}function Mg(n){const e=[],t=[],i=[];let r=n;const s=n-sr+1+Jl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-sr?l=Jl[o-n+sr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,m=[c,c,d,c,d,d,c,c,d,d,c,d],f=6,v=6,g=3,p=2,h=1,b=new Float32Array(g*v*f),_=new Float32Array(p*v*f),E=new Float32Array(h*v*f);for(let D=0;D<f;D++){const A=D%3*2/3-1,U=D>2?0:-1,w=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];b.set(w,g*v*D),_.set(m,p*v*D);const M=[D,D,D,D,D,D];E.set(M,h*v*D)}const I=new vi;I.setAttribute("position",new xn(b,g)),I.setAttribute("uv",new xn(_,p)),I.setAttribute("faceIndex",new xn(E,h)),e.push(I),r>sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nu(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Tg(n,e,t){const i=new Float32Array(Ri),r=new W(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function iu(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ru(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function Ag(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===aa||l===la,c=l===fr||l===dr;if(u||c){let d=e.get(a);const m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new tu(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return u&&f&&f.height>0||c&&f&&r(f)?(t===null&&(t=new tu(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Cg(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Dg(n,e,t,i){const r={},s=new WeakMap;function o(d){const m=d.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);for(const v in m.morphAttributes){const g=m.morphAttributes[v];for(let p=0,h=g.length;p<h;p++)e.remove(g[p])}m.removeEventListener("dispose",o),delete r[m.id];const f=s.get(m);f&&(e.remove(f),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function l(d){const m=d.attributes;for(const v in m)e.update(m[v],n.ARRAY_BUFFER);const f=d.morphAttributes;for(const v in f){const g=f[v];for(let p=0,h=g.length;p<h;p++)e.update(g[p],n.ARRAY_BUFFER)}}function u(d){const m=[],f=d.index,v=d.attributes.position;let g=0;if(f!==null){const b=f.array;g=f.version;for(let _=0,E=b.length;_<E;_+=3){const I=b[_+0],D=b[_+1],A=b[_+2];m.push(I,D,D,A,A,I)}}else if(v!==void 0){const b=v.array;g=v.version;for(let _=0,E=b.length/3-1;_<E;_+=3){const I=_+0,D=_+1,A=_+2;m.push(I,D,D,A,A,I)}}else return;const p=new(gh(m)?Sh:xh)(m,1);p.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function c(d){const m=s.get(d);if(m){const f=d.index;f!==null&&m.version<f.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Rg(n,e,t){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,f){n.drawElements(i,f,s,m*o),t.update(f,i,1)}function u(m,f,v){v!==0&&(n.drawElementsInstanced(i,f,s,m*o,v),t.update(f,i,v))}function c(m,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,m,0,v);let p=0;for(let h=0;h<v;h++)p+=f[h];t.update(p,i,1)}function d(m,f,v,g){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<m.length;h++)u(m[h]/o,f[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,s,m,0,g,0,v);let h=0;for(let b=0;b<v;b++)h+=f[b];for(let b=0;b<g.length;b++)t.update(h,i,g[b])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function Pg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Ig(n,e,t){const i=new WeakMap,r=new nt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let m=i.get(a);if(m===void 0||m.count!==d){let w=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",w)};m!==void 0&&m.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let _=0;f===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let E=a.attributes.position.count*_,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const D=new Float32Array(E*I*4*d),A=new _h(D,E,I,d);A.type=zn,A.needsUpdate=!0;const U=_*4;for(let M=0;M<d;M++){const F=p[M],C=h[M],O=b[M],y=E*I*4*M;for(let k=0;k<F.count;k++){const Q=k*U;f===!0&&(r.fromBufferAttribute(F,k),D[y+Q+0]=r.x,D[y+Q+1]=r.y,D[y+Q+2]=r.z,D[y+Q+3]=0),v===!0&&(r.fromBufferAttribute(C,k),D[y+Q+4]=r.x,D[y+Q+5]=r.y,D[y+Q+6]=r.z,D[y+Q+7]=0),g===!0&&(r.fromBufferAttribute(O,k),D[y+Q+8]=r.x,D[y+Q+9]=r.y,D[y+Q+10]=r.z,D[y+Q+11]=O.itemSize===4?r.w:1)}}m={count:d,texture:A,size:new Ce(E,I)},i.set(a,m),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<u.length;g++)f+=u[g];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function Lg(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Ch extends Lt{constructor(e,t,i,r,s,o,a,l,u,c=lr){if(c!==lr&&c!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===lr&&(i=Ui),i===void 0&&c===mr&&(i=pr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Dh=new Lt,su=new Ch(1,1),Rh=new _h,Ph=new _d,Ih=new Mh,ou=[],au=[],lu=new Float32Array(16),uu=new Float32Array(9),cu=new Float32Array(4);function xr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ou[r];if(s===void 0&&(s=new Float32Array(r),ou[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=au[e];t===void 0&&(t=new Int32Array(e),au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ng(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2fv(this.addr,e),pt(t,e)}}function Ug(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;n.uniform3fv(this.addr,e),pt(t,e)}}function Fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4fv(this.addr,e),pt(t,e)}}function Bg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),pt(t,i)}}function zg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),pt(t,i)}}function kg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;lu.set(i),n.uniformMatrix4fv(this.addr,!1,lu),pt(t,i)}}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2iv(this.addr,e),pt(t,e)}}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3iv(this.addr,e),pt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4iv(this.addr,e),pt(t,e)}}function jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;n.uniform2uiv(this.addr,e),pt(t,e)}}function Yg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;n.uniform3uiv(this.addr,e),pt(t,e)}}function qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;n.uniform4uiv(this.addr,e),pt(t,e)}}function $g(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(su.compareFunction=mh,s=su):s=Dh,t.setTexture2D(e||s,r)}function Kg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ph,r)}function Zg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ih,r)}function Jg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rh,r)}function Qg(n){switch(n){case 5126:return Ng;case 35664:return Og;case 35665:return Ug;case 35666:return Fg;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Vg;case 35667:case 35671:return Gg;case 35668:case 35672:return Hg;case 35669:case 35673:return Wg;case 5125:return jg;case 36294:return Xg;case 36295:return Yg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function e0(n,e){n.uniform1fv(this.addr,e)}function t0(n,e){const t=xr(e,this.size,2);n.uniform2fv(this.addr,t)}function n0(n,e){const t=xr(e,this.size,3);n.uniform3fv(this.addr,t)}function i0(n,e){const t=xr(e,this.size,4);n.uniform4fv(this.addr,t)}function r0(n,e){const t=xr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function s0(n,e){const t=xr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function o0(n,e){const t=xr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function a0(n,e){n.uniform1iv(this.addr,e)}function l0(n,e){n.uniform2iv(this.addr,e)}function u0(n,e){n.uniform3iv(this.addr,e)}function c0(n,e){n.uniform4iv(this.addr,e)}function h0(n,e){n.uniform1uiv(this.addr,e)}function f0(n,e){n.uniform2uiv(this.addr,e)}function d0(n,e){n.uniform3uiv(this.addr,e)}function p0(n,e){n.uniform4uiv(this.addr,e)}function m0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Dh,s[o])}function g0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ph,s[o])}function v0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ih,s[o])}function _0(n,e,t){const i=this.cache,r=e.length,s=ao(t,r);dt(i,s)||(n.uniform1iv(this.addr,s),pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rh,s[o])}function b0(n){switch(n){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return r0;case 35675:return s0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return l0;case 35668:case 35672:return u0;case 35669:case 35673:return c0;case 5125:return h0;case 36294:return f0;case 36295:return d0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return _0}}class y0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qg(t.type)}}class x0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}}class S0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const $o=/(\w+)(\])?(\[|\.)?/g;function hu(n,e){n.seq.push(e),n.map[e.id]=e}function E0(n,e,t){const i=n.name,r=i.length;for($o.lastIndex=0;;){const s=$o.exec(i),o=$o.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){hu(t,u===void 0?new y0(a,n,e):new x0(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new S0(a),hu(t,d)),t=d}}}class Ls{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);E0(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const w0=37297;let M0=0;function T0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function A0(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===js&&t===Ws?i="LinearDisplayP3ToLinearSRGB":e===Ws&&t===js&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case oo:return[i,"LinearTransferOETF"];case dn:case tl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function du(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+T0(n.getShaderSource(e),o)}else return r}function C0(n,e){const t=A0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function D0(n,e){let t;switch(e){case Xf:t="Linear";break;case Yf:t="Reinhard";break;case qf:t="OptimizedCineon";break;case $f:t="ACESFilmic";break;case Zf:t="AgX";break;case Jf:t="Neutral";break;case Kf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ms=new W;function R0(){Ze.getLuminanceCoefficients(ms);const n=ms.x.toFixed(4),e=ms.y.toFixed(4),t=ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function I0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function L0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rr(n){return n!==""}function pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const N0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(n){return n.replace(N0,U0)}const O0=new Map;function U0(n,e){let t=Ve[e];if(t===void 0){const i=O0.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const F0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gu(n){return n.replace(F0,B0)}function B0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function z0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===th?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function k0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case nh:e="ENVMAP_BLENDING_MULTIPLY";break;case Wf:e="ENVMAP_BLENDING_MIX";break;case jf:e="ENVMAP_BLENDING_ADD";break}return e}function H0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function W0(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=z0(t),u=k0(t),c=V0(t),d=G0(t),m=H0(t),f=P0(t),v=I0(s),g=r.createProgram();let p,h,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Rr).join(`
`),h.length>0&&(h+=`
`)):(p=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),h=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Ve.tonemapping_pars_fragment:"",t.toneMapping!==hi?D0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,C0("linearToOutputTexel",t.outputColorSpace),R0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Ba(o),o=pu(o,t),o=mu(o,t),a=Ba(a),a=pu(a,t),a=mu(a,t),o=gu(o),a=gu(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=b+p+o,E=b+h+a,I=fu(r,r.VERTEX_SHADER,_),D=fu(r,r.FRAGMENT_SHADER,E);r.attachShader(g,I),r.attachShader(g,D),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(F){if(n.debug.checkShaderErrors){const C=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(I).trim(),y=r.getShaderInfoLog(D).trim();let k=!0,Q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,I,D);else{const Y=du(r,I,"vertex"),ee=du(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+C+`
`+Y+`
`+ee)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||y==="")&&(Q=!1);Q&&(F.diagnostics={runnable:k,programLog:C,vertexShader:{log:O,prefix:p},fragmentShader:{log:y,prefix:h}})}r.deleteShader(I),r.deleteShader(D),U=new Ls(r,g),w=L0(r,g)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,w0)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=D,this}let j0=0;class X0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Y0(e),t.set(e,i)),i}}class Y0{constructor(e){this.id=j0++,this.code=e,this.usedTimes=0}}function q0(n,e,t,i,r,s,o){const a=new bh,l=new X0,u=new Set,c=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return u.add(w),w===0?"uv":`uv${w}`}function p(w,M,F,C,O){const y=C.fog,k=O.geometry,Q=w.isMeshStandardMaterial?C.environment:null,Y=(w.isMeshStandardMaterial?t:e).get(w.envMap||Q),ee=Y&&Y.mapping===so?Y.image.height:null,ne=v[w.type];w.precision!==null&&(f=r.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,V=ae!==void 0?ae.length:0;let $=0;k.morphAttributes.position!==void 0&&($=1),k.morphAttributes.normal!==void 0&&($=2),k.morphAttributes.color!==void 0&&($=3);let be,q,J,ge;if(ne){const Ye=mn[ne];be=Ye.vertexShader,q=Ye.fragmentShader}else be=w.vertexShader,q=w.fragmentShader,l.update(w),J=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const _e=n.getRenderTarget(),ye=O.isInstancedMesh===!0,Ee=O.isBatchedMesh===!0,Re=!!w.map,ze=!!w.matcap,B=!!Y,Xe=!!w.aoMap,x=!!w.lightMap,re=!!w.bumpMap,G=!!w.normalMap,N=!!w.displacementMap,R=!!w.emissiveMap,z=!!w.metalnessMap,T=!!w.roughnessMap,S=w.anisotropy>0,L=w.clearcoat>0,j=w.dispersion>0,te=w.iridescence>0,H=w.sheen>0,ue=w.transmission>0,ce=S&&!!w.anisotropyMap,he=L&&!!w.clearcoatMap,Ie=L&&!!w.clearcoatNormalMap,de=L&&!!w.clearcoatRoughnessMap,xe=te&&!!w.iridescenceMap,ke=te&&!!w.iridescenceThicknessMap,Te=H&&!!w.sheenColorMap,Me=H&&!!w.sheenRoughnessMap,Ue=!!w.specularMap,Oe=!!w.specularColorMap,Qe=!!w.specularIntensityMap,X=ue&&!!w.transmissionMap,pe=ue&&!!w.thicknessMap,oe=!!w.gradientMap,le=!!w.alphaMap,me=w.alphaTest>0,Le=!!w.alphaHash,je=!!w.extensions;let at=hi;w.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(at=n.toneMapping);const vt={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:q,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&O._colorsTexture!==null,instancing:ye,instancingColor:ye&&O.instanceColor!==null,instancingMorph:ye&&O.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:gi,alphaToCoverage:!!w.alphaToCoverage,map:Re,matcap:ze,envMap:B,envMapMode:B&&Y.mapping,envMapCubeUVHeight:ee,aoMap:Xe,lightMap:x,bumpMap:re,normalMap:G,displacementMap:m&&N,emissiveMap:R,normalMapObjectSpace:G&&w.normalMapType===nd,normalMapTangentSpace:G&&w.normalMapType===ph,metalnessMap:z,roughnessMap:T,anisotropy:S,anisotropyMap:ce,clearcoat:L,clearcoatMap:he,clearcoatNormalMap:Ie,clearcoatRoughnessMap:de,dispersion:j,iridescence:te,iridescenceMap:xe,iridescenceThicknessMap:ke,sheen:H,sheenColorMap:Te,sheenRoughnessMap:Me,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:Qe,transmission:ue,transmissionMap:X,thicknessMap:pe,gradientMap:oe,opaque:w.transparent===!1&&w.blending===ar&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:me,alphaHash:Le,combine:w.combine,mapUv:Re&&g(w.map.channel),aoMapUv:Xe&&g(w.aoMap.channel),lightMapUv:x&&g(w.lightMap.channel),bumpMapUv:re&&g(w.bumpMap.channel),normalMapUv:G&&g(w.normalMap.channel),displacementMapUv:N&&g(w.displacementMap.channel),emissiveMapUv:R&&g(w.emissiveMap.channel),metalnessMapUv:z&&g(w.metalnessMap.channel),roughnessMapUv:T&&g(w.roughnessMap.channel),anisotropyMapUv:ce&&g(w.anisotropyMap.channel),clearcoatMapUv:he&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:Me&&g(w.sheenRoughnessMap.channel),specularMapUv:Ue&&g(w.specularMap.channel),specularColorMapUv:Oe&&g(w.specularColorMap.channel),specularIntensityMapUv:Qe&&g(w.specularIntensityMap.channel),transmissionMapUv:X&&g(w.transmissionMap.channel),thicknessMapUv:pe&&g(w.thicknessMap.channel),alphaMapUv:le&&g(w.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(G||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Re||le),fog:!!y,useFog:w.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:Re&&w.map.isVideoTexture===!0&&Ze.getTransfer(w.map.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===_n,flipSided:w.side===It,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:je&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&w.extensions.multiDraw===!0||Ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return vt.vertexUv1s=u.has(1),vt.vertexUv2s=u.has(2),vt.vertexUv3s=u.has(3),u.clear(),vt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)M.push(F),M.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(b(M,w),_(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function b(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function _(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),w.push(a.mask)}function E(w){const M=v[w.type];let F;if(M){const C=mn[M];F=Pd.clone(C.uniforms)}else F=w.uniforms;return F}function I(w,M){let F;for(let C=0,O=c.length;C<O;C++){const y=c[C];if(y.cacheKey===M){F=y,++F.usedTimes;break}}return F===void 0&&(F=new W0(n,M,w,s),c.push(F)),F}function D(w){if(--w.usedTimes===0){const M=c.indexOf(w);c[M]=c[c.length-1],c.pop(),w.destroy()}}function A(w){l.remove(w)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:E,acquireProgram:I,releaseProgram:D,releaseShaderCache:A,programs:c,dispose:U}}function $0(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function K0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function bu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,m,f,v,g,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:m,material:f,groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=m,h.material=f,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function a(d,m,f,v,g,p){const h=o(d,m,f,v,g,p);f.transmission>0?i.push(h):f.transparent===!0?r.push(h):t.push(h)}function l(d,m,f,v,g,p){const h=o(d,m,f,v,g,p);f.transmission>0?i.unshift(h):f.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,m){t.length>1&&t.sort(d||K0),i.length>1&&i.sort(m||_u),r.length>1&&r.sort(m||_u)}function c(){for(let d=e,m=n.length;d<m;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Z0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new bu,n.set(i,[o])):r>=s.length?(o=new bu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function J0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new He};break;case"SpotLight":t={position:new W,direction:new W,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function Q0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ev=0;function tv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nv(n){const e=new J0,t=Q0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new W);const r=new W,s=new rt,o=new rt;function a(u){let c=0,d=0,m=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,v=0,g=0,p=0,h=0,b=0,_=0,E=0,I=0,D=0,A=0;u.sort(tv);for(let w=0,M=u.length;w<M;w++){const F=u[w],C=F.color,O=F.intensity,y=F.distance,k=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)c+=C.r*O,d+=C.g*O,m+=C.b*O;else if(F.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(F.sh.coefficients[Q],O);A++}else if(F.isDirectionalLight){const Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Y=F.shadow,ee=t.get(F);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.directionalShadow[f]=ee,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=F.shadow.matrix,b++}i.directional[f]=Q,f++}else if(F.isSpotLight){const Q=e.get(F);Q.position.setFromMatrixPosition(F.matrixWorld),Q.color.copy(C).multiplyScalar(O),Q.distance=y,Q.coneCos=Math.cos(F.angle),Q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),Q.decay=F.decay,i.spot[g]=Q;const Y=F.shadow;if(F.map&&(i.spotLightMap[I]=F.map,I++,Y.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[g]=Y.matrix,F.castShadow){const ee=t.get(F);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,i.spotShadow[g]=ee,i.spotShadowMap[g]=k,E++}g++}else if(F.isRectAreaLight){const Q=e.get(F);Q.color.copy(C).multiplyScalar(O),Q.halfWidth.set(F.width*.5,0,0),Q.halfHeight.set(0,F.height*.5,0),i.rectArea[p]=Q,p++}else if(F.isPointLight){const Q=e.get(F);if(Q.color.copy(F.color).multiplyScalar(F.intensity),Q.distance=F.distance,Q.decay=F.decay,F.castShadow){const Y=F.shadow,ee=t.get(F);ee.shadowIntensity=Y.intensity,ee.shadowBias=Y.bias,ee.shadowNormalBias=Y.normalBias,ee.shadowRadius=Y.radius,ee.shadowMapSize=Y.mapSize,ee.shadowCameraNear=Y.camera.near,ee.shadowCameraFar=Y.camera.far,i.pointShadow[v]=ee,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=F.shadow.matrix,_++}i.point[v]=Q,v++}else if(F.isHemisphereLight){const Q=e.get(F);Q.skyColor.copy(F.color).multiplyScalar(O),Q.groundColor.copy(F.groundColor).multiplyScalar(O),i.hemi[h]=Q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=m;const U=i.hash;(U.directionalLength!==f||U.pointLength!==v||U.spotLength!==g||U.rectAreaLength!==p||U.hemiLength!==h||U.numDirectionalShadows!==b||U.numPointShadows!==_||U.numSpotShadows!==E||U.numSpotMaps!==I||U.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=p,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=E+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=A,U.directionalLength=f,U.pointLength=v,U.spotLength=g,U.rectAreaLength=p,U.hemiLength=h,U.numDirectionalShadows=b,U.numPointShadows=_,U.numSpotShadows=E,U.numSpotMaps=I,U.numLightProbes=A,i.version=ev++)}function l(u,c){let d=0,m=0,f=0,v=0,g=0;const p=c.matrixWorldInverse;for(let h=0,b=u.length;h<b;h++){const _=u[h];if(_.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(_.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(_.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),m++}else if(_.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function yu(n){const e=new nv(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function iv(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new yu(n),e.set(r,[a])):s>=o.length?(a=new yu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class rv extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sv extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`;function lv(n,e,t){let i=new rl;const r=new Ce,s=new Ce,o=new nt,a=new rv({depthPacking:td}),l=new sv,u={},c=t.maxTextureSize,d={[di]:It,[It]:di,[_n]:_n},m=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:ov,fragmentShader:av}),f=m.clone();f.defines.HORIZONTAL_PASS=1;const v=new vi;v.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(v,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let h=this.type;this.render=function(D,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),C=n.state;C.setBlending(ci),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const O=h!==Nn&&this.type===Nn,y=h===Nn&&this.type!==Nn;for(let k=0,Q=D.length;k<Q;k++){const Y=D[k],ee=Y.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const ne=ee.getFrameExtents();if(r.multiply(ne),s.copy(ee.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ne.x),r.x=s.x*ne.x,ee.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ne.y),r.y=s.y*ne.y,ee.mapSize.y=s.y)),ee.map===null||O===!0||y===!0){const V=this.type!==Nn?{minFilter:Zt,magFilter:Zt}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Fi(r.x,r.y,V),ee.map.texture.name=Y.name+".shadowMap",ee.camera.updateProjectionMatrix()}n.setRenderTarget(ee.map),n.clear();const ae=ee.getViewportCount();for(let V=0;V<ae;V++){const $=ee.getViewport(V);o.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),C.viewport(o),ee.updateMatrices(Y,V),i=ee.getFrustum(),E(A,U,ee.camera,Y,this.type)}ee.isPointLightShadow!==!0&&this.type===Nn&&b(ee,U),ee.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(w,M,F)};function b(D,A){const U=e.update(g);m.defines.VSM_SAMPLES!==D.blurSamples&&(m.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,m.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Fi(r.x,r.y)),m.uniforms.shadow_pass.value=D.map.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(A,null,U,m,g,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(A,null,U,f,g,null)}function _(D,A,U,w){let M=null;const F=U.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)M=F;else if(M=U.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const C=M.uuid,O=A.uuid;let y=u[C];y===void 0&&(y={},u[C]=y);let k=y[O];k===void 0&&(k=M.clone(),y[O]=k,A.addEventListener("dispose",I)),M=k}if(M.visible=A.visible,M.wireframe=A.wireframe,w===Nn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const C=n.properties.get(M);C.light=U}return M}function E(D,A,U,w,M){if(D.visible===!1)return;if(D.layers.test(A.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Nn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,D.matrixWorld);const O=e.update(D),y=D.material;if(Array.isArray(y)){const k=O.groups;for(let Q=0,Y=k.length;Q<Y;Q++){const ee=k[Q],ne=y[ee.materialIndex];if(ne&&ne.visible){const ae=_(D,ne,w,M);D.onBeforeShadow(n,D,A,U,O,ae,ee),n.renderBufferDirect(U,null,O,ae,D,ee),D.onAfterShadow(n,D,A,U,O,ae,ee)}}}else if(y.visible){const k=_(D,y,w,M);D.onBeforeShadow(n,D,A,U,O,k,null),n.renderBufferDirect(U,null,O,k,D,null),D.onAfterShadow(n,D,A,U,O,k,null)}}const C=D.children;for(let O=0,y=C.length;O<y;O++)E(C[O],A,U,w,M)}function I(D){D.target.removeEventListener("dispose",I);for(const U in u){const w=u[U],M=D.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function uv(n){function e(){let X=!1;const pe=new nt;let oe=null;const le=new nt(0,0,0,0);return{setMask:function(me){oe!==me&&!X&&(n.colorMask(me,me,me,me),oe=me)},setLocked:function(me){X=me},setClear:function(me,Le,je,at,vt){vt===!0&&(me*=at,Le*=at,je*=at),pe.set(me,Le,je,at),le.equals(pe)===!1&&(n.clearColor(me,Le,je,at),le.copy(pe))},reset:function(){X=!1,oe=null,le.set(-1,0,0,0)}}}function t(){let X=!1,pe=null,oe=null,le=null;return{setTest:function(me){me?ge(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(me){pe!==me&&!X&&(n.depthMask(me),pe=me)},setFunc:function(me){if(oe!==me){switch(me){case Ff:n.depthFunc(n.NEVER);break;case Bf:n.depthFunc(n.ALWAYS);break;case zf:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case kf:n.depthFunc(n.EQUAL);break;case Vf:n.depthFunc(n.GEQUAL);break;case Gf:n.depthFunc(n.GREATER);break;case Hf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=me}},setLocked:function(me){X=me},setClear:function(me){le!==me&&(n.clearDepth(me),le=me)},reset:function(){X=!1,pe=null,oe=null,le=null}}}function i(){let X=!1,pe=null,oe=null,le=null,me=null,Le=null,je=null,at=null,vt=null;return{setTest:function(Ye){X||(Ye?ge(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Ye){pe!==Ye&&!X&&(n.stencilMask(Ye),pe=Ye)},setFunc:function(Ye,Tn,cn){(oe!==Ye||le!==Tn||me!==cn)&&(n.stencilFunc(Ye,Tn,cn),oe=Ye,le=Tn,me=cn)},setOp:function(Ye,Tn,cn){(Le!==Ye||je!==Tn||at!==cn)&&(n.stencilOp(Ye,Tn,cn),Le=Ye,je=Tn,at=cn)},setLocked:function(Ye){X=Ye},setClear:function(Ye){vt!==Ye&&(n.clearStencil(Ye),vt=Ye)},reset:function(){X=!1,pe=null,oe=null,le=null,me=null,Le=null,je=null,at=null,vt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,m=[],f=null,v=!1,g=null,p=null,h=null,b=null,_=null,E=null,I=null,D=new He(0,0,0),A=0,U=!1,w=null,M=null,F=null,C=null,O=null;const y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Q=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=Q>=2);let ee=null,ne={};const ae=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),$=new nt().fromArray(ae),be=new nt().fromArray(V);function q(X,pe,oe,le){const me=new Uint8Array(4),Le=n.createTexture();n.bindTexture(X,Le),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<oe;je++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(pe+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Le}const J={};J[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),s.setFunc(Gs),re(!1),G(Tl),ge(n.CULL_FACE),Xe(ci);function ge(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function _e(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function ye(X,pe){return c[X]!==pe?(n.bindFramebuffer(X,pe),c[X]=pe,X===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=pe),X===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ee(X,pe){let oe=m,le=!1;if(X){oe=d.get(pe),oe===void 0&&(oe=[],d.set(pe,oe));const me=X.textures;if(oe.length!==me.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,je=me.length;Le<je;Le++)oe[Le]=n.COLOR_ATTACHMENT0+Le;oe.length=me.length,le=!0}}else oe[0]!==n.BACK&&(oe[0]=n.BACK,le=!0);le&&n.drawBuffers(oe)}function Re(X){return f!==X?(n.useProgram(X),f=X,!0):!1}const ze={[Di]:n.FUNC_ADD,[yf]:n.FUNC_SUBTRACT,[xf]:n.FUNC_REVERSE_SUBTRACT};ze[Sf]=n.MIN,ze[Ef]=n.MAX;const B={[wf]:n.ZERO,[Mf]:n.ONE,[Tf]:n.SRC_COLOR,[sa]:n.SRC_ALPHA,[If]:n.SRC_ALPHA_SATURATE,[Rf]:n.DST_COLOR,[Cf]:n.DST_ALPHA,[Af]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[Pf]:n.ONE_MINUS_DST_COLOR,[Df]:n.ONE_MINUS_DST_ALPHA,[Lf]:n.CONSTANT_COLOR,[Nf]:n.ONE_MINUS_CONSTANT_COLOR,[Of]:n.CONSTANT_ALPHA,[Uf]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(X,pe,oe,le,me,Le,je,at,vt,Ye){if(X===ci){v===!0&&(_e(n.BLEND),v=!1);return}if(v===!1&&(ge(n.BLEND),v=!0),X!==bf){if(X!==g||Ye!==U){if((p!==Di||_!==Di)&&(n.blendEquation(n.FUNC_ADD),p=Di,_=Di),Ye)switch(X){case ar:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.ONE,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ar:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Al:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Cl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}h=null,b=null,E=null,I=null,D.set(0,0,0),A=0,g=X,U=Ye}return}me=me||pe,Le=Le||oe,je=je||le,(pe!==p||me!==_)&&(n.blendEquationSeparate(ze[pe],ze[me]),p=pe,_=me),(oe!==h||le!==b||Le!==E||je!==I)&&(n.blendFuncSeparate(B[oe],B[le],B[Le],B[je]),h=oe,b=le,E=Le,I=je),(at.equals(D)===!1||vt!==A)&&(n.blendColor(at.r,at.g,at.b,vt),D.copy(at),A=vt),g=X,U=!1}function x(X,pe){X.side===_n?_e(n.CULL_FACE):ge(n.CULL_FACE);let oe=X.side===It;pe&&(oe=!oe),re(oe),X.blending===ar&&X.transparent===!1?Xe(ci):Xe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);const le=X.stencilWrite;o.setTest(le),le&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),R(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function re(X){w!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),w=X)}function G(X){X!==gf?(ge(n.CULL_FACE),X!==M&&(X===Tl?n.cullFace(n.BACK):X===vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),M=X}function N(X){X!==F&&(k&&n.lineWidth(X),F=X)}function R(X,pe,oe){X?(ge(n.POLYGON_OFFSET_FILL),(C!==pe||O!==oe)&&(n.polygonOffset(pe,oe),C=pe,O=oe)):_e(n.POLYGON_OFFSET_FILL)}function z(X){X?ge(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function T(X){X===void 0&&(X=n.TEXTURE0+y-1),ee!==X&&(n.activeTexture(X),ee=X)}function S(X,pe,oe){oe===void 0&&(ee===null?oe=n.TEXTURE0+y-1:oe=ee);let le=ne[oe];le===void 0&&(le={type:void 0,texture:void 0},ne[oe]=le),(le.type!==X||le.texture!==pe)&&(ee!==oe&&(n.activeTexture(oe),ee=oe),n.bindTexture(X,pe||J[X]),le.type=X,le.texture=pe)}function L(){const X=ne[ee];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Te(X){$.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),$.copy(X))}function Me(X){be.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),be.copy(X))}function Ue(X,pe){let oe=l.get(pe);oe===void 0&&(oe=new WeakMap,l.set(pe,oe));let le=oe.get(X);le===void 0&&(le=n.getUniformBlockIndex(pe,X.name),oe.set(X,le))}function Oe(X,pe){const le=l.get(pe).get(X);a.get(pe)!==le&&(n.uniformBlockBinding(pe,le,X.__bindingPointIndex),a.set(pe,le))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ee=null,ne={},c={},d=new WeakMap,m=[],f=null,v=!1,g=null,p=null,h=null,b=null,_=null,E=null,I=null,D=new He(0,0,0),A=0,U=!1,w=null,M=null,F=null,C=null,O=null,$.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:_e,bindFramebuffer:ye,drawBuffers:Ee,useProgram:Re,setBlending:Xe,setMaterial:x,setFlipSided:re,setCullFace:G,setLineWidth:N,setPolygonOffset:R,setScissorTest:z,activeTexture:T,bindTexture:S,unbindTexture:L,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:xe,texImage3D:ke,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:Ie,texStorage3D:de,texSubImage2D:H,texSubImage3D:ue,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:Te,viewport:Me,reset:Qe}}function xu(n,e,t,i){const r=cv(i);switch(t){case ah:return n*e;case uh:return n*e;case ch:return n*e*2;case hh:return n*e/r.components*r.byteLength;case Ja:return n*e/r.components*r.byteLength;case fh:return n*e*2/r.components*r.byteLength;case Qa:return n*e*2/r.components*r.byteLength;case lh:return n*e*3/r.components*r.byteLength;case an:return n*e*4/r.components*r.byteLength;case el:return n*e*4/r.components*r.byteLength;case Cs:case Ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rs:case Ps:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fa:case pa:return Math.max(n,16)*Math.max(e,8)/4;case ha:case da:return Math.max(n,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case va:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _a:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ba:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Da:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Is:case Ia:case La:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dh:case Na:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Oa:case Ua:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cv(n){switch(n){case Gn:case rh:return{byteLength:1,components:1};case Fr:case sh:case Vr:return{byteLength:2,components:1};case Ka:case Za:return{byteLength:2,components:4};case Ui:case $a:case zn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hv(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ce,c=new WeakMap;let d;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,S){return f?new OffscreenCanvas(T,S):Ys("canvas")}function g(T,S,L){let j=1;const te=z(T);if((te.width>L||te.height>L)&&(j=L/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(j*te.width),ue=Math.floor(j*te.height);d===void 0&&(d=v(H,ue));const ce=S?v(H,ue):d;return ce.width=H,ce.height=ue,ce.getContext("2d").drawImage(T,0,0,H,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+H+"x"+ue+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Zt&&T.minFilter!==on}function h(T){n.generateMipmap(T)}function b(T,S,L,j,te=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=S;if(S===n.RED&&(L===n.FLOAT&&(H=n.R32F),L===n.HALF_FLOAT&&(H=n.R16F),L===n.UNSIGNED_BYTE&&(H=n.R8)),S===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.R8UI),L===n.UNSIGNED_SHORT&&(H=n.R16UI),L===n.UNSIGNED_INT&&(H=n.R32UI),L===n.BYTE&&(H=n.R8I),L===n.SHORT&&(H=n.R16I),L===n.INT&&(H=n.R32I)),S===n.RG&&(L===n.FLOAT&&(H=n.RG32F),L===n.HALF_FLOAT&&(H=n.RG16F),L===n.UNSIGNED_BYTE&&(H=n.RG8)),S===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(H=n.RG8UI),L===n.UNSIGNED_SHORT&&(H=n.RG16UI),L===n.UNSIGNED_INT&&(H=n.RG32UI),L===n.BYTE&&(H=n.RG8I),L===n.SHORT&&(H=n.RG16I),L===n.INT&&(H=n.RG32I)),S===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),S===n.RGBA){const ue=te?Hs:Ze.getTransfer(j);L===n.FLOAT&&(H=n.RGBA32F),L===n.HALF_FLOAT&&(H=n.RGBA16F),L===n.UNSIGNED_BYTE&&(H=ue===tt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function _(T,S){let L;return T?S===null||S===Ui||S===pr?L=n.DEPTH24_STENCIL8:S===zn?L=n.DEPTH32F_STENCIL8:S===Fr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ui||S===pr?L=n.DEPTH_COMPONENT24:S===zn?L=n.DEPTH_COMPONENT32F:S===Fr&&(L=n.DEPTH_COMPONENT16),L}function E(T,S){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Zt&&T.minFilter!==on?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){const S=T.target;S.removeEventListener("dispose",I),A(S),S.isVideoTexture&&c.delete(S)}function D(T){const S=T.target;S.removeEventListener("dispose",D),w(S)}function A(T){const S=i.get(T);if(S.__webglInit===void 0)return;const L=T.source,j=m.get(L);if(j){const te=j[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&U(T),Object.keys(j).length===0&&m.delete(L)}i.remove(T)}function U(T){const S=i.get(T);n.deleteTexture(S.__webglTexture);const L=T.source,j=m.get(L);delete j[S.__cacheKey],o.memory.textures--}function w(T){const S=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let te=0;te<S.__webglFramebuffer[j].length;te++)n.deleteFramebuffer(S.__webglFramebuffer[j][te]);else n.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)n.deleteFramebuffer(S.__webglFramebuffer[j]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const L=T.textures;for(let j=0,te=L.length;j<te;j++){const H=i.get(L[j]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(L[j])}i.remove(T)}let M=0;function F(){M=0}function C(){const T=M;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),M+=1,T}function O(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function y(T,S){const L=i.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.version>0&&L.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(L,T,S);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+S)}function k(T,S){const L=i.get(T);if(T.version>0&&L.__version!==T.version){be(L,T,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+S)}function Q(T,S){const L=i.get(T);if(T.version>0&&L.__version!==T.version){be(L,T,S);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+S)}function Y(T,S){const L=i.get(T);if(T.version>0&&L.__version!==T.version){q(L,T,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+S)}const ee={[ua]:n.REPEAT,[Ii]:n.CLAMP_TO_EDGE,[ca]:n.MIRRORED_REPEAT},ne={[Zt]:n.NEAREST,[Qf]:n.NEAREST_MIPMAP_NEAREST,[qr]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[Eo]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},ae={[id]:n.NEVER,[ud]:n.ALWAYS,[rd]:n.LESS,[mh]:n.LEQUAL,[sd]:n.EQUAL,[ld]:n.GEQUAL,[od]:n.GREATER,[ad]:n.NOTEQUAL};function V(T,S){if(S.type===zn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===on||S.magFilter===Eo||S.magFilter===qr||S.magFilter===Li||S.minFilter===on||S.minFilter===Eo||S.minFilter===qr||S.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ee[S.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ee[S.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ee[S.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,ne[S.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Zt||S.minFilter!==qr&&S.minFilter!==Li||S.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $(T,S){let L=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",I));const j=S.source;let te=m.get(j);te===void 0&&(te={},m.set(j,te));const H=O(S);if(H!==T.__cacheKey){te[H]===void 0&&(te[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[H].usedTimes++;const ue=te[T.__cacheKey];ue!==void 0&&(te[T.__cacheKey].usedTimes--,ue.usedTimes===0&&U(S)),T.__cacheKey=H,T.__webglTexture=te[H].texture}return L}function be(T,S,L){let j=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=n.TEXTURE_3D);const te=$(T,S),H=S.source;t.bindTexture(j,T.__webglTexture,n.TEXTURE0+L);const ue=i.get(H);if(H.version!==ue.__version||te===!0){t.activeTexture(n.TEXTURE0+L);const ce=Ze.getPrimaries(Ze.workingColorSpace),he=S.colorSpace===ei?null:Ze.getPrimaries(S.colorSpace),Ie=S.colorSpace===ei||ce===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let de=g(S.image,!1,r.maxTextureSize);de=R(S,de);const xe=s.convert(S.format,S.colorSpace),ke=s.convert(S.type);let Te=b(S.internalFormat,xe,ke,S.colorSpace,S.isVideoTexture);V(j,S);let Me;const Ue=S.mipmaps,Oe=S.isVideoTexture!==!0,Qe=ue.__version===void 0||te===!0,X=H.dataReady,pe=E(S,de);if(S.isDepthTexture)Te=_(S.format===mr,S.type),Qe&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Te,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Te,de.width,de.height,0,xe,ke,null));else if(S.isDataTexture)if(Ue.length>0){Oe&&Qe&&t.texStorage2D(n.TEXTURE_2D,pe,Te,Ue[0].width,Ue[0].height);for(let oe=0,le=Ue.length;oe<le;oe++)Me=Ue[oe],Oe?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,xe,ke,Me.data):t.texImage2D(n.TEXTURE_2D,oe,Te,Me.width,Me.height,0,xe,ke,Me.data);S.generateMipmaps=!1}else Oe?(Qe&&t.texStorage2D(n.TEXTURE_2D,pe,Te,de.width,de.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,xe,ke,de.data)):t.texImage2D(n.TEXTURE_2D,0,Te,de.width,de.height,0,xe,ke,de.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Te,Ue[0].width,Ue[0].height,de.depth);for(let oe=0,le=Ue.length;oe<le;oe++)if(Me=Ue[oe],S.format!==an)if(xe!==null)if(Oe){if(X)if(S.layerUpdates.size>0){const me=xu(Me.width,Me.height,S.format,S.type);for(const Le of S.layerUpdates){const je=Me.data.subarray(Le*me/Me.data.BYTES_PER_ELEMENT,(Le+1)*me/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,Le,Me.width,Me.height,1,xe,je,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,de.depth,xe,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,oe,Te,Me.width,Me.height,de.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,oe,0,0,0,Me.width,Me.height,de.depth,xe,ke,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,oe,Te,Me.width,Me.height,de.depth,0,xe,ke,Me.data)}else{Oe&&Qe&&t.texStorage2D(n.TEXTURE_2D,pe,Te,Ue[0].width,Ue[0].height);for(let oe=0,le=Ue.length;oe<le;oe++)Me=Ue[oe],S.format!==an?xe!==null?Oe?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,xe,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,oe,Te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,Me.width,Me.height,xe,ke,Me.data):t.texImage2D(n.TEXTURE_2D,oe,Te,Me.width,Me.height,0,xe,ke,Me.data)}else if(S.isDataArrayTexture)if(Oe){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Te,de.width,de.height,de.depth),X)if(S.layerUpdates.size>0){const oe=xu(de.width,de.height,S.format,S.type);for(const le of S.layerUpdates){const me=de.data.subarray(le*oe/de.data.BYTES_PER_ELEMENT,(le+1)*oe/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,xe,ke,me)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,xe,ke,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,de.width,de.height,de.depth,0,xe,ke,de.data);else if(S.isData3DTexture)Oe?(Qe&&t.texStorage3D(n.TEXTURE_3D,pe,Te,de.width,de.height,de.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,xe,ke,de.data)):t.texImage3D(n.TEXTURE_3D,0,Te,de.width,de.height,de.depth,0,xe,ke,de.data);else if(S.isFramebufferTexture){if(Qe)if(Oe)t.texStorage2D(n.TEXTURE_2D,pe,Te,de.width,de.height);else{let oe=de.width,le=de.height;for(let me=0;me<pe;me++)t.texImage2D(n.TEXTURE_2D,me,Te,oe,le,0,xe,ke,null),oe>>=1,le>>=1}}else if(Ue.length>0){if(Oe&&Qe){const oe=z(Ue[0]);t.texStorage2D(n.TEXTURE_2D,pe,Te,oe.width,oe.height)}for(let oe=0,le=Ue.length;oe<le;oe++)Me=Ue[oe],Oe?X&&t.texSubImage2D(n.TEXTURE_2D,oe,0,0,xe,ke,Me):t.texImage2D(n.TEXTURE_2D,oe,Te,xe,ke,Me);S.generateMipmaps=!1}else if(Oe){if(Qe){const oe=z(de);t.texStorage2D(n.TEXTURE_2D,pe,Te,oe.width,oe.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,ke,de)}else t.texImage2D(n.TEXTURE_2D,0,Te,xe,ke,de);p(S)&&h(j),ue.__version=H.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function q(T,S,L){if(S.image.length!==6)return;const j=$(T,S),te=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+L);const H=i.get(te);if(te.version!==H.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const ue=Ze.getPrimaries(Ze.workingColorSpace),ce=S.colorSpace===ei?null:Ze.getPrimaries(S.colorSpace),he=S.colorSpace===ei||ue===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ie=S.isCompressedTexture||S.image[0].isCompressedTexture,de=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!Ie&&!de?xe[le]=g(S.image[le],!0,r.maxCubemapSize):xe[le]=de?S.image[le].image:S.image[le],xe[le]=R(S,xe[le]);const ke=xe[0],Te=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),Ue=b(S.internalFormat,Te,Me,S.colorSpace),Oe=S.isVideoTexture!==!0,Qe=H.__version===void 0||j===!0,X=te.dataReady;let pe=E(S,ke);V(n.TEXTURE_CUBE_MAP,S);let oe;if(Ie){Oe&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ue,ke.width,ke.height);for(let le=0;le<6;le++){oe=xe[le].mipmaps;for(let me=0;me<oe.length;me++){const Le=oe[me];S.format!==an?Te!==null?Oe?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,0,0,Le.width,Le.height,Te,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,0,0,Le.width,Le.height,Te,Me,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me,Ue,Le.width,Le.height,0,Te,Me,Le.data)}}}else{if(oe=S.mipmaps,Oe&&Qe){oe.length>0&&pe++;const le=z(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ue,le.width,le.height)}for(let le=0;le<6;le++)if(de){Oe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,Te,Me,xe[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ue,xe[le].width,xe[le].height,0,Te,Me,xe[le].data);for(let me=0;me<oe.length;me++){const je=oe[me].image[le].image;Oe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,0,0,je.width,je.height,Te,Me,je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,Ue,je.width,je.height,0,Te,Me,je.data)}}else{Oe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Te,Me,xe[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ue,Te,Me,xe[le]);for(let me=0;me<oe.length;me++){const Le=oe[me];Oe?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,0,0,Te,Me,Le.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me+1,Ue,Te,Me,Le.image[le])}}}p(S)&&h(n.TEXTURE_CUBE_MAP),H.__version=te.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function J(T,S,L,j,te,H){const ue=s.convert(L.format,L.colorSpace),ce=s.convert(L.type),he=b(L.internalFormat,ue,ce,L.colorSpace);if(!i.get(S).__hasExternalTextures){const de=Math.max(1,S.width>>H),xe=Math.max(1,S.height>>H);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,H,he,de,xe,S.depth,0,ue,ce,null):t.texImage2D(te,H,he,de,xe,0,ue,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),G(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,te,i.get(L).__webglTexture,0,re(S)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,te,i.get(L).__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(T,S,L){if(n.bindRenderbuffer(n.RENDERBUFFER,T),S.depthBuffer){const j=S.depthTexture,te=j&&j.isDepthTexture?j.type:null,H=_(S.stencilBuffer,te),ue=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=re(S);G(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,H,S.width,S.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,H,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,H,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,T)}else{const j=S.textures;for(let te=0;te<j.length;te++){const H=j[te],ue=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),he=b(H.internalFormat,ue,ce,H.colorSpace),Ie=re(S);L&&G(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,he,S.width,S.height):G(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ie,he,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,he,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),y(S.depthTexture,0);const j=i.get(S.depthTexture).__webglTexture,te=re(S);if(S.depthTexture.format===lr)G(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(S.depthTexture.format===mr)G(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ye(T){const S=i.get(T),L=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");_e(S.__webglFramebuffer,T)}else if(L){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]=n.createRenderbuffer(),ge(S.__webglDepthbuffer[j],T,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ge(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(T,S,L){const j=i.get(T);S!==void 0&&J(j.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&ye(T)}function Re(T){const S=T.texture,L=i.get(T),j=i.get(S);T.addEventListener("dispose",D);const te=T.textures,H=T.isWebGLCubeRenderTarget===!0,ue=te.length>1;if(ue||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=S.version,o.memory.textures++),H){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let he=0;he<S.mipmaps.length;he++)L.__webglFramebuffer[ce][he]=n.createFramebuffer()}else L.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)L.__webglFramebuffer[ce]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(ue)for(let ce=0,he=te.length;ce<he;ce++){const Ie=i.get(te[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&G(T)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const he=te[ce];L.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const Ie=s.convert(he.format,he.colorSpace),de=s.convert(he.type),xe=b(he.internalFormat,Ie,de,he.colorSpace,T.isXRRenderTarget===!0),ke=re(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,xe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(L.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),V(n.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)J(L.__webglFramebuffer[ce][he],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,he);else J(L.__webglFramebuffer[ce],T,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let ce=0,he=te.length;ce<he;ce++){const Ie=te[ce],de=i.get(Ie);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),V(n.TEXTURE_2D,Ie),J(L.__webglFramebuffer,T,Ie,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(Ie)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,j.__webglTexture),V(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let he=0;he<S.mipmaps.length;he++)J(L.__webglFramebuffer[he],T,S,n.COLOR_ATTACHMENT0,ce,he);else J(L.__webglFramebuffer,T,S,n.COLOR_ATTACHMENT0,ce,0);p(S)&&h(ce),t.unbindTexture()}T.depthBuffer&&ye(T)}function ze(T){const S=T.textures;for(let L=0,j=S.length;L<j;L++){const te=S[L];if(p(te)){const H=T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(te).__webglTexture;t.bindTexture(H,ue),h(H),t.unbindTexture()}}}const B=[],Xe=[];function x(T){if(T.samples>0){if(G(T)===!1){const S=T.textures,L=T.width,j=T.height;let te=n.COLOR_BUFFER_BIT;const H=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(T),ce=S.length>1;if(ce)for(let he=0;he<S.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<S.length;he++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Ie=i.get(S[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ie,0)}n.blitFramebuffer(0,0,L,j,0,0,L,j,te,n.NEAREST),l===!0&&(B.length=0,Xe.length=0,B.push(n.COLOR_ATTACHMENT0+he),T.depthBuffer&&T.resolveDepthBuffer===!1&&(B.push(H),Xe.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let he=0;he<S.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const Ie=i.get(S[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const S=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function re(T){return Math.min(r.maxSamples,T.samples)}function G(T){const S=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function N(T){const S=o.render.frame;c.get(T)!==S&&(c.set(T,S),T.update())}function R(T,S){const L=T.colorSpace,j=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||L!==gi&&L!==ei&&(Ze.getTransfer(L)===tt?(j!==an||te!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),S}function z(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=C,this.resetTextureUnits=F,this.setTexture2D=y,this.setTexture2DArray=k,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=Ee,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=x,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=J,this.useMultisampledRTT=G}function fv(n,e){function t(i,r=ei){let s;const o=Ze.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Ka)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Za)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rh)return n.BYTE;if(i===sh)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===$a)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===Vr)return n.HALF_FLOAT;if(i===ah)return n.ALPHA;if(i===lh)return n.RGB;if(i===an)return n.RGBA;if(i===uh)return n.LUMINANCE;if(i===ch)return n.LUMINANCE_ALPHA;if(i===lr)return n.DEPTH_COMPONENT;if(i===mr)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===Ja)return n.RED_INTEGER;if(i===fh)return n.RG;if(i===Qa)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===Cs||i===Ds||i===Rs||i===Ps)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ps)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ha||i===fa||i===da||i===pa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===da)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ma||i===ga||i===va)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ma||i===ga)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===va)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_a||i===ba||i===ya||i===xa||i===Sa||i===Ea||i===wa||i===Ma||i===Ta||i===Aa||i===Ca||i===Da||i===Ra||i===Pa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_a)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ba)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ya)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ea)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ma)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ta)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Aa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ca)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Da)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ra)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pa)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Is||i===Ia||i===La)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Is)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ia)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===La)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dh||i===Na||i===Oa||i===Ua)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Na)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ua)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class dv extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pv={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(u,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],m=c.position.distanceTo(d.position),f=.02,v=.005;u.inputState.pinching&&m>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`;class vv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Lt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Hn({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _v extends _r{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,m=null,f=null,v=null;const g=new vv,p=t.getContextAttributes();let h=null,b=null;const _=[],E=[],I=new Ce;let D=null;const A=new zt;A.layers.enable(1),A.viewport=new nt;const U=new zt;U.layers.enable(2),U.viewport=new nt;const w=[A,U],M=new dv;M.layers.enable(1),M.layers.enable(2);let F=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=_[q];return J===void 0&&(J=new Ko,_[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=_[q];return J===void 0&&(J=new Ko,_[q]=J),J.getGripSpace()},this.getHand=function(q){let J=_[q];return J===void 0&&(J=new Ko,_[q]=J),J.getHandSpace()};function O(q){const J=E.indexOf(q.inputSource);if(J===-1)return;const ge=_[J];ge!==void 0&&(ge.update(q.inputSource,q.frame,u||o),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",y),r.removeEventListener("inputsourceschange",k);for(let q=0;q<_.length;q++){const J=E[q];J!==null&&(E[q]=null,_[q].disconnect(J))}F=null,C=null,g.reset(),e.setRenderTarget(h),f=null,m=null,d=null,r=null,b=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return m!==null?m:f},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",y),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Fi(f.framebufferWidth,f.framebufferHeight,{format:an,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ge=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?mr:lr,ge=p.stencil?pr:Ui);const ye={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),m=d.createProjectionLayer(ye),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),b=new Fi(m.textureWidth,m.textureHeight,{format:an,type:Gn,depthTexture:new Ch(m.textureWidth,m.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(q){for(let J=0;J<q.removed.length;J++){const ge=q.removed[J],_e=E.indexOf(ge);_e>=0&&(E[_e]=null,_[_e].disconnect(ge))}for(let J=0;J<q.added.length;J++){const ge=q.added[J];let _e=E.indexOf(ge);if(_e===-1){for(let Ee=0;Ee<_.length;Ee++)if(Ee>=E.length){E.push(ge),_e=Ee;break}else if(E[Ee]===null){E[Ee]=ge,_e=Ee;break}if(_e===-1)break}const ye=_[_e];ye&&ye.connect(ge)}}const Q=new W,Y=new W;function ee(q,J,ge){Q.setFromMatrixPosition(J.matrixWorld),Y.setFromMatrixPosition(ge.matrixWorld);const _e=Q.distanceTo(Y),ye=J.projectionMatrix.elements,Ee=ge.projectionMatrix.elements,Re=ye[14]/(ye[10]-1),ze=ye[14]/(ye[10]+1),B=(ye[9]+1)/ye[5],Xe=(ye[9]-1)/ye[5],x=(ye[8]-1)/ye[0],re=(Ee[8]+1)/Ee[0],G=Re*x,N=Re*re,R=_e/(-x+re),z=R*-x;J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(z),q.translateZ(R),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const T=Re+R,S=ze+R,L=G-z,j=N+(_e-z),te=B*ze/S*T,H=Xe*ze/S*T;q.projectionMatrix.makePerspective(L,j,te,H,T,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function ne(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),M.near=U.near=A.near=q.near,M.far=U.far=A.far=q.far,(F!==M.near||C!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,C=M.far,A.near=F,A.far=C,U.near=F,U.far=C,A.updateProjectionMatrix(),U.updateProjectionMatrix(),q.updateProjectionMatrix());const J=q.parent,ge=M.cameras;ne(M,J);for(let _e=0;_e<ge.length;_e++)ne(ge[_e],J);ge.length===2?ee(M,A,U):M.projectionMatrix.copy(A.projectionMatrix),ae(q,M,J)};function ae(q,J,ge){ge===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&f===null))return l},this.setFoveation=function(q){l=q,m!==null&&(m.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let V=null;function $(q,J){if(c=J.getViewerPose(u||o),v=J,c!==null){const ge=c.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let _e=!1;ge.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let Ee=0;Ee<ge.length;Ee++){const Re=ge[Ee];let ze=null;if(f!==null)ze=f.getViewport(Re);else{const Xe=d.getViewSubImage(m,Re);ze=Xe.viewport,Ee===0&&(e.setRenderTargetTextures(b,Xe.colorTexture,m.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(b))}let B=w[Ee];B===void 0&&(B=new zt,B.layers.enable(Ee),B.viewport=new nt,w[Ee]=B),B.matrix.fromArray(Re.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(Re.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(ze.x,ze.y,ze.width,ze.height),Ee===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(B)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ee=d.getDepthInformation(ge[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(e,Ee,r.renderState)}}for(let ge=0;ge<_.length;ge++){const _e=E[ge],ye=_[ge];_e!==null&&ye!==void 0&&ye.update(_e,J,u||o)}V&&V(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),v=null}const be=new Th;be.setAnimationLoop($),this.setAnimationLoop=function(q){V=q},this.dispose=function(){}}}const Mi=new En,bv=new rt;function yv(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Eh(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,b,_,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),c(p,h)):h.isMeshStandardMaterial?(s(p,h),m(p,h),h.isMeshPhysicalMaterial&&f(p,h,E)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,b,_):h.isSpriteMaterial?u(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===It&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===It&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const b=e.get(h),_=b.envMap,E=b.envMapRotation;_&&(p.envMap.value=_,Mi.copy(E),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),p.envMapRotation.value.setFromMatrix4(bv.makeRotationFromEuler(Mi)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,b,_){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*b,p.scale.value=_*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function m(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,b){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===It&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const b=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xv(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){const E=_.program;i.uniformBlockBinding(b,E)}function u(b,_){let E=r[b.id];E===void 0&&(v(b),E=c(b),r[b.id]=E,b.addEventListener("dispose",p));const I=_.program;i.updateUBOMapping(b,I);const D=e.render.frame;s[b.id]!==D&&(m(b),s[b.id]=D)}function c(b){const _=d();b.__bindingPointIndex=_;const E=n.createBuffer(),I=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,E),E}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const _=r[b.id],E=b.uniforms,I=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let D=0,A=E.length;D<A;D++){const U=Array.isArray(E[D])?E[D]:[E[D]];for(let w=0,M=U.length;w<M;w++){const F=U[w];if(f(F,D,w,I)===!0){const C=F.__offset,O=Array.isArray(F.value)?F.value:[F.value];let y=0;for(let k=0;k<O.length;k++){const Q=O[k],Y=g(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,C+y,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,y),y+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,C,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,_,E,I){const D=b.value,A=_+"_"+E;if(I[A]===void 0)return typeof D=="number"||typeof D=="boolean"?I[A]=D:I[A]=D.clone(),!0;{const U=I[A];if(typeof D=="number"||typeof D=="boolean"){if(U!==D)return I[A]=D,!0}else if(U.equals(D)===!1)return U.copy(D),!0}return!1}function v(b){const _=b.uniforms;let E=0;const I=16;for(let A=0,U=_.length;A<U;A++){const w=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,F=w.length;M<F;M++){const C=w[M],O=Array.isArray(C.value)?C.value:[C.value];for(let y=0,k=O.length;y<k;y++){const Q=O[y],Y=g(Q),ee=E%I,ne=ee%Y.boundary,ae=ee+ne;E+=ne,ae!==0&&I-ae<Y.storage&&(E+=I-ae),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=Y.storage}}}const D=E%I;return D>0&&(E+=I-D),b.__size=E,b.__cache={},this}function g(b){const _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){const _=b.target;_.removeEventListener("dispose",p);const E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class Sv{constructor(e={}){const{canvas:t=hd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const f=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const h=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=hi,this.toneMappingExposure=1;const _=this;let E=!1,I=0,D=0,A=null,U=-1,w=null;const M=new nt,F=new nt;let C=null;const O=new He(0);let y=0,k=t.width,Q=t.height,Y=1,ee=null,ne=null;const ae=new nt(0,0,k,Q),V=new nt(0,0,k,Q);let $=!1;const be=new rl;let q=!1,J=!1;const ge=new rt,_e=new W,ye=new nt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ze(){return A===null?Y:1}let B=i;function Xe(P,K){return t.getContext(P,K)}try{const P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qa}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",me,!1),B===null){const K="webgl2";if(B=Xe(K,P),B===null)throw Xe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let x,re,G,N,R,z,T,S,L,j,te,H,ue,ce,he,Ie,de,xe,ke,Te,Me,Ue,Oe,Qe;function X(){x=new Cg(B),x.init(),Ue=new fv(B,x),re=new Sg(B,x,e,Ue),G=new uv(B),N=new Pg(B),R=new $0,z=new hv(B,x,G,R,re,Ue,N),T=new wg(_),S=new Ag(_),L=new Bd(B),Oe=new yg(B,L),j=new Dg(B,L,N,Oe),te=new Lg(B,j,L,N),ke=new Ig(B,re,z),Ie=new Eg(R),H=new q0(_,T,S,x,re,Oe,Ie),ue=new yv(_,R),ce=new Z0,he=new iv(x),xe=new bg(_,T,S,G,te,m,l),de=new lv(_,te,re),Qe=new xv(B,N,re,G),Te=new xg(B,x,N),Me=new Rg(B,x,N),N.programs=H.programs,_.capabilities=re,_.extensions=x,_.properties=R,_.renderLists=ce,_.shadowMap=de,_.state=G,_.info=N}X();const pe=new _v(_,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const P=x.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=x.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(k,Q,!1))},this.getSize=function(P){return P.set(k,Q)},this.setSize=function(P,K,ie=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,Q=K,t.width=Math.floor(P*Y),t.height=Math.floor(K*Y),ie===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(k*Y,Q*Y).floor()},this.setDrawingBufferSize=function(P,K,ie){k=P,Q=K,Y=ie,t.width=Math.floor(P*ie),t.height=Math.floor(K*ie),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(M)},this.getViewport=function(P){return P.copy(ae)},this.setViewport=function(P,K,ie,se){P.isVector4?ae.set(P.x,P.y,P.z,P.w):ae.set(P,K,ie,se),G.viewport(M.copy(ae).multiplyScalar(Y).round())},this.getScissor=function(P){return P.copy(V)},this.setScissor=function(P,K,ie,se){P.isVector4?V.set(P.x,P.y,P.z,P.w):V.set(P,K,ie,se),G.scissor(F.copy(V).multiplyScalar(Y).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(P){G.setScissorTest($=P)},this.setOpaqueSort=function(P){ee=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(P=!0,K=!0,ie=!0){let se=0;if(P){let Z=!1;if(A!==null){const ve=A.texture.format;Z=ve===el||ve===Qa||ve===Ja}if(Z){const ve=A.texture.type,we=ve===Gn||ve===Ui||ve===Fr||ve===pr||ve===Ka||ve===Za,Ae=xe.getClearColor(),De=xe.getClearAlpha(),Fe=Ae.r,Be=Ae.g,Ne=Ae.b;we?(f[0]=Fe,f[1]=Be,f[2]=Ne,f[3]=De,B.clearBufferuiv(B.COLOR,0,f)):(v[0]=Fe,v[1]=Be,v[2]=Ne,v[3]=De,B.clearBufferiv(B.COLOR,0,v))}else se|=B.COLOR_BUFFER_BIT}K&&(se|=B.DEPTH_BUFFER_BIT),ie&&(se|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ce.dispose(),he.dispose(),R.dispose(),T.dispose(),S.dispose(),te.dispose(),Oe.dispose(),Qe.dispose(),H.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",cn),pe.removeEventListener("sessionend",bl),bi.stop()};function oe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=N.autoReset,K=de.enabled,ie=de.autoUpdate,se=de.needsUpdate,Z=de.type;X(),N.autoReset=P,de.enabled=K,de.autoUpdate=ie,de.needsUpdate=se,de.type=Z}function me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Le(P){const K=P.target;K.removeEventListener("dispose",Le),je(K)}function je(P){at(P),R.remove(P)}function at(P){const K=R.get(P).programs;K!==void 0&&(K.forEach(function(ie){H.releaseProgram(ie)}),P.isShaderMaterial&&H.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ie,se,Z,ve){K===null&&(K=Ee);const we=Z.isMesh&&Z.matrixWorld.determinant()<0,Ae=ff(P,K,ie,se,Z);G.setMaterial(se,we);let De=ie.index,Fe=1;if(se.wireframe===!0){if(De=j.getWireframeAttribute(ie),De===void 0)return;Fe=2}const Be=ie.drawRange,Ne=ie.attributes.position;let qe=Be.start*Fe,st=(Be.start+Be.count)*Fe;ve!==null&&(qe=Math.max(qe,ve.start*Fe),st=Math.min(st,(ve.start+ve.count)*Fe)),De!==null?(qe=Math.max(qe,0),st=Math.min(st,De.count)):Ne!=null&&(qe=Math.max(qe,0),st=Math.min(st,Ne.count));const ot=st-qe;if(ot<0||ot===1/0)return;Oe.setup(Z,se,Ae,ie,De);let Nt,$e=Te;if(De!==null&&(Nt=L.get(De),$e=Me,$e.setIndex(Nt)),Z.isMesh)se.wireframe===!0?(G.setLineWidth(se.wireframeLinewidth*ze()),$e.setMode(B.LINES)):$e.setMode(B.TRIANGLES);else if(Z.isLine){let Pe=se.linewidth;Pe===void 0&&(Pe=1),G.setLineWidth(Pe*ze()),Z.isLineSegments?$e.setMode(B.LINES):Z.isLineLoop?$e.setMode(B.LINE_LOOP):$e.setMode(B.LINE_STRIP)}else Z.isPoints?$e.setMode(B.POINTS):Z.isSprite&&$e.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)$e.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(x.get("WEBGL_multi_draw"))$e.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Pe=Z._multiDrawStarts,_t=Z._multiDrawCounts,Ke=Z._multiDrawCount,Jt=De?L.get(De).bytesPerElement:1,zi=R.get(se).currentProgram.getUniforms();for(let Ot=0;Ot<Ke;Ot++)zi.setValue(B,"_gl_DrawID",Ot),$e.render(Pe[Ot]/Jt,_t[Ot])}else if(Z.isInstancedMesh)$e.renderInstances(qe,ot,Z.count);else if(ie.isInstancedBufferGeometry){const Pe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,_t=Math.min(ie.instanceCount,Pe);$e.renderInstances(qe,ot,_t)}else $e.render(qe,ot)};function vt(P,K,ie){P.transparent===!0&&P.side===_n&&P.forceSinglePass===!1?(P.side=It,P.needsUpdate=!0,Yr(P,K,ie),P.side=di,P.needsUpdate=!0,Yr(P,K,ie),P.side=_n):Yr(P,K,ie)}this.compile=function(P,K,ie=null){ie===null&&(ie=P),p=he.get(ie),p.init(K),b.push(p),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),P!==ie&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();const se=new Set;return P.traverse(function(Z){const ve=Z.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Ae=ve[we];vt(Ae,ie,Z),se.add(Ae)}else vt(ve,ie,Z),se.add(ve)}),b.pop(),p=null,se},this.compileAsync=function(P,K,ie=null){const se=this.compile(P,K,ie);return new Promise(Z=>{function ve(){if(se.forEach(function(we){R.get(we).currentProgram.isReady()&&se.delete(we)}),se.size===0){Z(P);return}setTimeout(ve,10)}x.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ye=null;function Tn(P){Ye&&Ye(P)}function cn(){bi.stop()}function bl(){bi.start()}const bi=new Th;bi.setAnimationLoop(Tn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(P){Ye=P,pe.setAnimationLoop(P),P===null?bi.stop():bi.start()},pe.addEventListener("sessionstart",cn),pe.addEventListener("sessionend",bl),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(K),K=pe.getCamera()),P.isScene===!0&&P.onBeforeRender(_,P,K,A),p=he.get(P,b.length),p.init(K),b.push(p),ge.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),be.setFromProjectionMatrix(ge),J=this.localClippingEnabled,q=Ie.init(this.clippingPlanes,J),g=ce.get(P,h.length),g.init(),h.push(g),pe.enabled===!0&&pe.isPresenting===!0){const ve=_.xr.getDepthSensingMesh();ve!==null&&bo(ve,K,-1/0,_.sortObjects)}bo(P,K,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ee,ne),Re=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,Re&&xe.addToRenderList(g,P),this.info.render.frame++,q===!0&&Ie.beginShadows();const ie=p.state.shadowsArray;de.render(ie,P,K),q===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=g.opaque,Z=g.transmissive;if(p.setupLights(),K.isArrayCamera){const ve=K.cameras;if(Z.length>0)for(let we=0,Ae=ve.length;we<Ae;we++){const De=ve[we];xl(se,Z,P,De)}Re&&xe.render(P);for(let we=0,Ae=ve.length;we<Ae;we++){const De=ve[we];yl(g,P,De,De.viewport)}}else Z.length>0&&xl(se,Z,P,K),Re&&xe.render(P),yl(g,P,K);A!==null&&(z.updateMultisampleRenderTarget(A),z.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(_,P,K),Oe.resetDefaultState(),U=-1,w=null,b.pop(),b.length>0?(p=b[b.length-1],q===!0&&Ie.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function bo(P,K,ie,se){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ie=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||be.intersectsSprite(P)){se&&ye.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ge);const we=te.update(P),Ae=P.material;Ae.visible&&g.push(P,we,Ae,ie,ye.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||be.intersectsObject(P))){const we=te.update(P),Ae=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ye.copy(P.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ye.copy(we.boundingSphere.center)),ye.applyMatrix4(P.matrixWorld).applyMatrix4(ge)),Array.isArray(Ae)){const De=we.groups;for(let Fe=0,Be=De.length;Fe<Be;Fe++){const Ne=De[Fe],qe=Ae[Ne.materialIndex];qe&&qe.visible&&g.push(P,we,qe,ie,ye.z,Ne)}}else Ae.visible&&g.push(P,we,Ae,ie,ye.z,null)}}const ve=P.children;for(let we=0,Ae=ve.length;we<Ae;we++)bo(ve[we],K,ie,se)}function yl(P,K,ie,se){const Z=P.opaque,ve=P.transmissive,we=P.transparent;p.setupLightsView(ie),q===!0&&Ie.setGlobalState(_.clippingPlanes,ie),se&&G.viewport(M.copy(se)),Z.length>0&&Xr(Z,K,ie),ve.length>0&&Xr(ve,K,ie),we.length>0&&Xr(we,K,ie),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function xl(P,K,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[se.id]===void 0&&(p.state.transmissionRenderTarget[se.id]=new Fi(1,1,{generateMipmaps:!0,type:x.has("EXT_color_buffer_half_float")||x.has("EXT_color_buffer_float")?Vr:Gn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ve=p.state.transmissionRenderTarget[se.id],we=se.viewport||M;ve.setSize(we.z,we.w);const Ae=_.getRenderTarget();_.setRenderTarget(ve),_.getClearColor(O),y=_.getClearAlpha(),y<1&&_.setClearColor(16777215,.5),_.clear(),Re&&xe.render(ie);const De=_.toneMapping;_.toneMapping=hi;const Fe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),p.setupLightsView(se),q===!0&&Ie.setGlobalState(_.clippingPlanes,se),Xr(P,ie,se),z.updateMultisampleRenderTarget(ve),z.updateRenderTargetMipmap(ve),x.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,qe=K.length;Ne<qe;Ne++){const st=K[Ne],ot=st.object,Nt=st.geometry,$e=st.material,Pe=st.group;if($e.side===_n&&ot.layers.test(se.layers)){const _t=$e.side;$e.side=It,$e.needsUpdate=!0,Sl(ot,ie,se,Nt,$e,Pe),$e.side=_t,$e.needsUpdate=!0,Be=!0}}Be===!0&&(z.updateMultisampleRenderTarget(ve),z.updateRenderTargetMipmap(ve))}_.setRenderTarget(Ae),_.setClearColor(O,y),Fe!==void 0&&(se.viewport=Fe),_.toneMapping=De}function Xr(P,K,ie){const se=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,ve=P.length;Z<ve;Z++){const we=P[Z],Ae=we.object,De=we.geometry,Fe=se===null?we.material:se,Be=we.group;Ae.layers.test(ie.layers)&&Sl(Ae,K,ie,De,Fe,Be)}}function Sl(P,K,ie,se,Z,ve){P.onBeforeRender(_,K,ie,se,Z,ve),P.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.transparent===!0&&Z.side===_n&&Z.forceSinglePass===!1?(Z.side=It,Z.needsUpdate=!0,_.renderBufferDirect(ie,K,se,Z,P,ve),Z.side=di,Z.needsUpdate=!0,_.renderBufferDirect(ie,K,se,Z,P,ve),Z.side=_n):_.renderBufferDirect(ie,K,se,Z,P,ve),P.onAfterRender(_,K,ie,se,Z,ve)}function Yr(P,K,ie){K.isScene!==!0&&(K=Ee);const se=R.get(P),Z=p.state.lights,ve=p.state.shadowsArray,we=Z.state.version,Ae=H.getParameters(P,Z.state,ve,K,ie),De=H.getProgramCacheKey(Ae);let Fe=se.programs;se.environment=P.isMeshStandardMaterial?K.environment:null,se.fog=K.fog,se.envMap=(P.isMeshStandardMaterial?S:T).get(P.envMap||se.environment),se.envMapRotation=se.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Fe===void 0&&(P.addEventListener("dispose",Le),Fe=new Map,se.programs=Fe);let Be=Fe.get(De);if(Be!==void 0){if(se.currentProgram===Be&&se.lightsStateVersion===we)return wl(P,Ae),Be}else Ae.uniforms=H.getUniforms(P),P.onBeforeCompile(Ae,_),Be=H.acquireProgram(Ae,De),Fe.set(De,Be),se.uniforms=Ae.uniforms;const Ne=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ne.clippingPlanes=Ie.uniform),wl(P,Ae),se.needsLights=pf(P),se.lightsStateVersion=we,se.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=Be,se.uniformsList=null,Be}function El(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=Ls.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function wl(P,K){const ie=R.get(P);ie.outputColorSpace=K.outputColorSpace,ie.batching=K.batching,ie.batchingColor=K.batchingColor,ie.instancing=K.instancing,ie.instancingColor=K.instancingColor,ie.instancingMorph=K.instancingMorph,ie.skinning=K.skinning,ie.morphTargets=K.morphTargets,ie.morphNormals=K.morphNormals,ie.morphColors=K.morphColors,ie.morphTargetsCount=K.morphTargetsCount,ie.numClippingPlanes=K.numClippingPlanes,ie.numIntersection=K.numClipIntersection,ie.vertexAlphas=K.vertexAlphas,ie.vertexTangents=K.vertexTangents,ie.toneMapping=K.toneMapping}function ff(P,K,ie,se,Z){K.isScene!==!0&&(K=Ee),z.resetTextureUnits();const ve=K.fog,we=se.isMeshStandardMaterial?K.environment:null,Ae=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gi,De=(se.isMeshStandardMaterial?S:T).get(se.envMap||we),Fe=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Be=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ne=!!ie.morphAttributes.position,qe=!!ie.morphAttributes.normal,st=!!ie.morphAttributes.color;let ot=hi;se.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=_.toneMapping);const Nt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,$e=Nt!==void 0?Nt.length:0,Pe=R.get(se),_t=p.state.lights;if(q===!0&&(J===!0||P!==w)){const Vt=P===w&&se.id===U;Ie.setState(se,P,Vt)}let Ke=!1;se.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==_t.state.version||Pe.outputColorSpace!==Ae||Z.isBatchedMesh&&Pe.batching===!1||!Z.isBatchedMesh&&Pe.batching===!0||Z.isBatchedMesh&&Pe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Pe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Pe.instancing===!1||!Z.isInstancedMesh&&Pe.instancing===!0||Z.isSkinnedMesh&&Pe.skinning===!1||!Z.isSkinnedMesh&&Pe.skinning===!0||Z.isInstancedMesh&&Pe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Pe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Pe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Pe.instancingMorph===!1&&Z.morphTexture!==null||Pe.envMap!==De||se.fog===!0&&Pe.fog!==ve||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ie.numPlanes||Pe.numIntersection!==Ie.numIntersection)||Pe.vertexAlphas!==Fe||Pe.vertexTangents!==Be||Pe.morphTargets!==Ne||Pe.morphNormals!==qe||Pe.morphColors!==st||Pe.toneMapping!==ot||Pe.morphTargetsCount!==$e)&&(Ke=!0):(Ke=!0,Pe.__version=se.version);let Jt=Pe.currentProgram;Ke===!0&&(Jt=Yr(se,K,Z));let zi=!1,Ot=!1,yo=!1;const lt=Jt.getUniforms(),Wn=Pe.uniforms;if(G.useProgram(Jt.program)&&(zi=!0,Ot=!0,yo=!0),se.id!==U&&(U=se.id,Ot=!0),zi||w!==P){lt.setValue(B,"projectionMatrix",P.projectionMatrix),lt.setValue(B,"viewMatrix",P.matrixWorldInverse);const Vt=lt.map.cameraPosition;Vt!==void 0&&Vt.setValue(B,_e.setFromMatrixPosition(P.matrixWorld)),re.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&lt.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),w!==P&&(w=P,Ot=!0,yo=!0)}if(Z.isSkinnedMesh){lt.setOptional(B,Z,"bindMatrix"),lt.setOptional(B,Z,"bindMatrixInverse");const Vt=Z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),lt.setValue(B,"boneTexture",Vt.boneTexture,z))}Z.isBatchedMesh&&(lt.setOptional(B,Z,"batchingTexture"),lt.setValue(B,"batchingTexture",Z._matricesTexture,z),lt.setOptional(B,Z,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",Z._indirectTexture,z),lt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",Z._colorsTexture,z));const xo=ie.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0)&&ke.update(Z,ie,Jt),(Ot||Pe.receiveShadow!==Z.receiveShadow)&&(Pe.receiveShadow=Z.receiveShadow,lt.setValue(B,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Wn.envMap.value=De,Wn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&K.environment!==null&&(Wn.envMapIntensity.value=K.environmentIntensity),Ot&&(lt.setValue(B,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&df(Wn,yo),ve&&se.fog===!0&&ue.refreshFogUniforms(Wn,ve),ue.refreshMaterialUniforms(Wn,se,Y,Q,p.state.transmissionRenderTarget[P.id]),Ls.upload(B,El(Pe),Wn,z)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ls.upload(B,El(Pe),Wn,z),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&lt.setValue(B,"center",Z.center),lt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),lt.setValue(B,"normalMatrix",Z.normalMatrix),lt.setValue(B,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Vt=se.uniformsGroups;for(let So=0,mf=Vt.length;So<mf;So++){const Ml=Vt[So];Qe.update(Ml,Jt),Qe.bind(Ml,Jt)}}return Jt}function df(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function pf(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,K,ie){R.get(P.texture).__webglTexture=K,R.get(P.depthTexture).__webglTexture=ie;const se=R.get(P);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=ie===void 0,se.__autoAllocateDepthBuffer||x.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const ie=R.get(P);ie.__webglFramebuffer=K,ie.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,ie=0){A=P,I=K,D=ie;let se=!0,Z=null,ve=!1,we=!1;if(P){const De=R.get(P);De.__useDefaultFramebuffer!==void 0?(G.bindFramebuffer(B.FRAMEBUFFER,null),se=!1):De.__webglFramebuffer===void 0?z.setupRenderTarget(P):De.__hasExternalTextures&&z.rebindTextures(P,R.get(P.texture).__webglTexture,R.get(P.depthTexture).__webglTexture);const Fe=P.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);const Be=R.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Be[K])?Z=Be[K][ie]:Z=Be[K],ve=!0):P.samples>0&&z.useMultisampledRTT(P)===!1?Z=R.get(P).__webglMultisampledFramebuffer:Array.isArray(Be)?Z=Be[ie]:Z=Be,M.copy(P.viewport),F.copy(P.scissor),C=P.scissorTest}else M.copy(ae).multiplyScalar(Y).floor(),F.copy(V).multiplyScalar(Y).floor(),C=$;if(G.bindFramebuffer(B.FRAMEBUFFER,Z)&&se&&G.drawBuffers(P,Z),G.viewport(M),G.scissor(F),G.setScissorTest(C),ve){const De=R.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,De.__webglTexture,ie)}else if(we){const De=R.get(P.texture),Fe=K||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.__webglTexture,ie||0,Fe)}U=-1},this.readRenderTargetPixels=function(P,K,ie,se,Z,ve,we){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=R.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){G.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const De=P.texture,Fe=De.format,Be=De.type;if(!re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-se&&ie>=0&&ie<=P.height-Z&&B.readPixels(K,ie,se,Z,Ue.convert(Fe),Ue.convert(Be),ve)}finally{const De=A!==null?R.get(A).__webglFramebuffer:null;G.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(P,K,ie,se,Z,ve,we){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=R.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&we!==void 0&&(Ae=Ae[we]),Ae){G.bindFramebuffer(B.FRAMEBUFFER,Ae);try{const De=P.texture,Fe=De.format,Be=De.type;if(!re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-se&&ie>=0&&ie<=P.height-Z){const Ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),B.readPixels(K,ie,se,Z,Ue.convert(Fe),Ue.convert(Be),0),B.flush();const qe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);await fd(B,qe,4);try{B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve)}finally{B.deleteBuffer(Ne),B.deleteSync(qe)}return ve}}finally{const De=A!==null?R.get(A).__webglFramebuffer:null;G.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(P,K=null,ie=0){P.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const se=Math.pow(2,-ie),Z=Math.floor(P.image.width*se),ve=Math.floor(P.image.height*se),we=K!==null?K.x:0,Ae=K!==null?K.y:0;z.setTexture2D(P,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,we,Ae,Z,ve),G.unbindTexture()},this.copyTextureToTexture=function(P,K,ie=null,se=null,Z=0){P.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,P=arguments[1],K=arguments[2],Z=arguments[3]||0,ie=null);let ve,we,Ae,De,Fe,Be;ie!==null?(ve=ie.max.x-ie.min.x,we=ie.max.y-ie.min.y,Ae=ie.min.x,De=ie.min.y):(ve=P.image.width,we=P.image.height,Ae=0,De=0),se!==null?(Fe=se.x,Be=se.y):(Fe=0,Be=0);const Ne=Ue.convert(K.format),qe=Ue.convert(K.type);z.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const st=B.getParameter(B.UNPACK_ROW_LENGTH),ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Nt=B.getParameter(B.UNPACK_SKIP_PIXELS),$e=B.getParameter(B.UNPACK_SKIP_ROWS),Pe=B.getParameter(B.UNPACK_SKIP_IMAGES),_t=P.isCompressedTexture?P.mipmaps[Z]:P.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,_t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ae),B.pixelStorei(B.UNPACK_SKIP_ROWS,De),P.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Z,Fe,Be,ve,we,Ne,qe,_t.data):P.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Z,Fe,Be,_t.width,_t.height,Ne,_t.data):B.texSubImage2D(B.TEXTURE_2D,Z,Fe,Be,ve,we,Ne,qe,_t),B.pixelStorei(B.UNPACK_ROW_LENGTH,st),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Nt),B.pixelStorei(B.UNPACK_SKIP_ROWS,$e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pe),Z===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(P,K,ie=null,se=null,Z=0){P.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,se=arguments[1]||null,P=arguments[2],K=arguments[3],Z=arguments[4]||0);let ve,we,Ae,De,Fe,Be,Ne,qe,st;const ot=P.isCompressedTexture?P.mipmaps[Z]:P.image;ie!==null?(ve=ie.max.x-ie.min.x,we=ie.max.y-ie.min.y,Ae=ie.max.z-ie.min.z,De=ie.min.x,Fe=ie.min.y,Be=ie.min.z):(ve=ot.width,we=ot.height,Ae=ot.depth,De=0,Fe=0,Be=0),se!==null?(Ne=se.x,qe=se.y,st=se.z):(Ne=0,qe=0,st=0);const Nt=Ue.convert(K.format),$e=Ue.convert(K.type);let Pe;if(K.isData3DTexture)z.setTexture3D(K,0),Pe=B.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)z.setTexture2DArray(K,0),Pe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const _t=B.getParameter(B.UNPACK_ROW_LENGTH),Ke=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Jt=B.getParameter(B.UNPACK_SKIP_PIXELS),zi=B.getParameter(B.UNPACK_SKIP_ROWS),Ot=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,De),B.pixelStorei(B.UNPACK_SKIP_ROWS,Fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Be),P.isDataTexture||P.isData3DTexture?B.texSubImage3D(Pe,Z,Ne,qe,st,ve,we,Ae,Nt,$e,ot.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,Z,Ne,qe,st,ve,we,Ae,Nt,ot.data):B.texSubImage3D(Pe,Z,Ne,qe,st,ve,we,Ae,Nt,$e,ot),B.pixelStorei(B.UNPACK_ROW_LENGTH,_t),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,zi),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ot),Z===0&&K.generateMipmaps&&B.generateMipmap(Pe),G.unbindTexture()},this.initRenderTarget=function(P){R.get(P).__webglFramebuffer===void 0&&z.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?z.setTextureCube(P,0):P.isData3DTexture?z.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?z.setTexture2DArray(P,0):z.setTexture2D(P,0),G.unbindTexture()},this.resetState=function(){I=0,D=0,A=null,G.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===oo?"display-p3":"srgb"}}class ol{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new ol(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ev extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],m=i[r+1]-c,f=(o-c)/m;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ce:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,r=[],s=[],o=[],a=new W,l=new rt;for(let f=0;f<=e;f++){const v=f/e;r[f]=this.getTangentAt(v,new W)}s[0]=new W,o[0]=new W;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),m=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),m<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Et(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,v))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Et(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],f*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class al extends wn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Ce){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=l-this.aX,f=u-this.aY;l=m*c-f*d+this.aX,u=m*d+f*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class wv extends al{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ll(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let m=(o-s)/u-(a-s)/(u+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;m*=c,f*=c,r(o,a,m,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const vs=new W,Zo=new ll,Jo=new ll,Qo=new ll;class Mv extends wn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new W){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(vs.subVectors(r[0],r[1]).add(r[0]),u=vs);const d=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(vs.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(m),f),p=Math.pow(m.distanceToSquared(c),f);g<1e-4&&(g=1),v<1e-4&&(v=g),p<1e-4&&(p=g),Zo.initNonuniformCatmullRom(u.x,d.x,m.x,c.x,v,g,p),Jo.initNonuniformCatmullRom(u.y,d.y,m.y,c.y,v,g,p),Qo.initNonuniformCatmullRom(u.z,d.z,m.z,c.z,v,g,p)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(u.x,d.x,m.x,c.x,this.tension),Jo.initCatmullRom(u.y,d.y,m.y,c.y,this.tension),Qo.initCatmullRom(u.z,d.z,m.z,c.z,this.tension));return i.set(Zo.calc(l),Jo.calc(l),Qo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new W().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Su(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function Tv(n,e){const t=1-n;return t*t*e}function Av(n,e){return 2*(1-n)*n*e}function Cv(n,e){return n*n*e}function Lr(n,e,t,i){return Tv(n,e)+Av(n,t)+Cv(n,i)}function Dv(n,e){const t=1-n;return t*t*t*e}function Rv(n,e){const t=1-n;return 3*t*t*n*e}function Pv(n,e){return 3*(1-n)*n*n*e}function Iv(n,e){return n*n*n*e}function Nr(n,e,t,i,r){return Dv(n,e)+Rv(n,t)+Pv(n,i)+Iv(n,r)}class Lh extends wn{constructor(e=new Ce,t=new Ce,i=new Ce,r=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ce){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Nr(e,r.x,s.x,o.x,a.x),Nr(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lv extends wn{constructor(e=new W,t=new W,i=new W,r=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new W){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Nr(e,r.x,s.x,o.x,a.x),Nr(e,r.y,s.y,o.y,a.y),Nr(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Nh extends wn{constructor(e=new Ce,t=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ce){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nv extends wn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oh extends wn{constructor(e=new Ce,t=new Ce,i=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ce){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Lr(e,r.x,s.x,o.x),Lr(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ov extends wn{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Lr(e,r.x,s.x,o.x),Lr(e,r.y,s.y,o.y),Lr(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ce){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(Su(a,l.x,u.x,c.x,d.x),Su(a,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ce().fromArray(r))}return this}}var Eu=Object.freeze({__proto__:null,ArcCurve:wv,CatmullRomCurve3:Mv,CubicBezierCurve:Lh,CubicBezierCurve3:Lv,EllipseCurve:al,LineCurve:Nh,LineCurve3:Nv,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:Ov,SplineCurve:Uh});class Uv extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Eu[r.type]().fromJSON(r))}return this}}class za extends Uv{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Nh(this.currentPoint.clone(),new Ce(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Oh(this.currentPoint.clone(),new Ce(e,t),new Ce(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Lh(this.currentPoint.clone(),new Ce(e,t),new Ce(i,r),new Ce(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Uh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new al(e,t,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ns extends za{constructor(e){super(e),this.uuid=br(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new za().fromJSON(r))}return this}}const Fv={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Fh(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,d,m,f;if(i&&(s=Gv(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let v=t;v<r;v+=t)d=n[v],m=n[v+1],d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>c&&(c=m);f=Math.max(u-a,c-l),f=f!==0?32767/f:0}return Br(s,o,t,a,l,f,0),o}};function Fh(n,e,t,i,r){let s,o;if(r===Qv(n,e,t,i)>0)for(s=e;s<t;s+=i)o=wu(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=wu(s,n[s],n[s+1],o);return o&&lo(o,o.next)&&(kr(o),o=o.next),o}function Bi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(lo(t,t.next)||it(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Br(n,e,t,i,r,s,o){if(!n)return;!o&&s&&Yv(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?zv(n,i,r,s):Bv(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),kr(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=kv(Bi(n),e,t),Br(n,e,t,i,r,s,2)):o===2&&Vv(n,e,t,i,r,s):Br(Bi(n),e,t,i,r,s,1);break}}}function Bv(n){const e=n.prev,t=n,i=n.next;if(it(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,d=a<l?a<u?a:u:l<u?l:u,m=r>s?r>o?r:o:s>o?s:o,f=a>l?a>u?a:u:l>u?l:u;let v=i.next;for(;v!==e;){if(v.x>=c&&v.x<=m&&v.y>=d&&v.y<=f&&or(r,a,s,l,o,u,v.x,v.y)&&it(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function zv(n,e,t,i){const r=n.prev,s=n,o=n.next;if(it(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,d=s.y,m=o.y,f=a<l?a<u?a:u:l<u?l:u,v=c<d?c<m?c:m:d<m?d:m,g=a>l?a>u?a:u:l>u?l:u,p=c>d?c>m?c:m:d>m?d:m,h=ka(f,v,e,t,i),b=ka(g,p,e,t,i);let _=n.prevZ,E=n.nextZ;for(;_&&_.z>=h&&E&&E.z<=b;){if(_.x>=f&&_.x<=g&&_.y>=v&&_.y<=p&&_!==r&&_!==o&&or(a,c,l,d,u,m,_.x,_.y)&&it(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=f&&E.x<=g&&E.y>=v&&E.y<=p&&E!==r&&E!==o&&or(a,c,l,d,u,m,E.x,E.y)&&it(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=h;){if(_.x>=f&&_.x<=g&&_.y>=v&&_.y<=p&&_!==r&&_!==o&&or(a,c,l,d,u,m,_.x,_.y)&&it(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=b;){if(E.x>=f&&E.x<=g&&E.y>=v&&E.y<=p&&E!==r&&E!==o&&or(a,c,l,d,u,m,E.x,E.y)&&it(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function kv(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!lo(r,s)&&Bh(r,i,i.next,s)&&zr(r,s)&&zr(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),kr(i),kr(i.next),i=n=s),i=i.next}while(i!==n);return Bi(i)}function Vv(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kv(o,a)){let l=zh(o,a);o=Bi(o,o.next),l=Bi(l,l.next),Br(o,e,t,i,r,s,0),Br(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Gv(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=Fh(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push($v(u));for(r.sort(Hv),s=0;s<r.length;s++)t=Wv(r[s],t);return t}function Hv(n,e){return n.x-e.x}function Wv(n,e){const t=jv(n,e);if(!t)return e;const i=zh(t,n);return Bi(i,i.next),Bi(t,t.next)}function jv(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=s&&m>i&&(i=m,r=t.x<t.next.x?t:t.next,m===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&or(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),zr(t,n)&&(d<c||d===c&&(t.x>r.x||t.x===r.x&&Xv(r,t)))&&(r=t,c=d)),t=t.next;while(t!==a);return r}function Xv(n,e){return it(n.prev,n,e.prev)<0&&it(e.next,n,n.next)<0}function Yv(n,e,t,i){let r=n;do r.z===0&&(r.z=ka(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,qv(r)}function qv(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function ka(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $v(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function or(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Kv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Zv(n,e)&&(zr(n,e)&&zr(e,n)&&Jv(n,e)&&(it(n.prev,n,e.prev)||it(n,e.prev,e))||lo(n,e)&&it(n.prev,n,n.next)>0&&it(e.prev,e,e.next)>0)}function it(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function lo(n,e){return n.x===e.x&&n.y===e.y}function Bh(n,e,t,i){const r=bs(it(n,e,t)),s=bs(it(n,e,i)),o=bs(it(t,i,n)),a=bs(it(t,i,e));return!!(r!==s&&o!==a||r===0&&_s(n,t,e)||s===0&&_s(n,i,e)||o===0&&_s(t,n,i)||a===0&&_s(t,e,i))}function _s(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function bs(n){return n>0?1:n<0?-1:0}function Zv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Bh(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function zr(n,e){return it(n.prev,n,n.next)<0?it(n,e,n.next)>=0&&it(n,n.prev,e)>=0:it(n,e,n.prev)<0||it(n,n.next,e)<0}function Jv(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function zh(n,e){const t=new Va(n.i,n.x,n.y),i=new Va(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function wu(n,e,t,i){const r=new Va(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Va(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qv(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class cr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return cr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Mu(e),Tu(i,e);let o=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Tu(i,t[l]);const a=Fv.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Mu(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Tu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ul extends vi{constructor(e=new Ns([new Ce(0,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Sn(r,3)),this.setAttribute("normal",new Sn(s,3)),this.setAttribute("uv",new Sn(o,2));function u(c){const d=r.length/3,m=c.extractPoints(t);let f=m.shape;const v=m.holes;cr.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,h=v.length;p<h;p++){const b=v[p];cr.isClockWise(b)===!0&&(v[p]=b.reverse())}const g=cr.triangulateShape(f,v);for(let p=0,h=v.length;p<h;p++){const b=v[p];f=f.concat(b)}for(let p=0,h=f.length;p<h;p++){const b=f[p];r.push(b.x,b.y,0),s.push(0,0,1),o.push(b.x,b.y)}for(let p=0,h=g.length;p<h;p++){const b=g[p],_=b[0]+d,E=b[1]+d,I=b[2]+d;i.push(_,E,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return e_(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=t[e.shapes[r]];i.push(o)}return new ul(i,e.curveSegments)}}function e_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class ri extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Au={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class t_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,m=u.length;d<m;d+=2){const f=u[d],v=u[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return v}return null}}}const n_=new t_;class cl{constructor(e){this.manager=e!==void 0?e:n_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";const In={};class i_ extends Error{constructor(e,t){super(e),this.response=t}}class r_ extends cl{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Au.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(In[e]!==void 0){In[e].push({onLoad:t,onProgress:i,onError:r});return}In[e]=[],In[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=In[e],d=u.body.getReader(),m=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),f=m?parseInt(m):0,v=f!==0;let g=0;const p=new ReadableStream({start(h){b();function b(){d.read().then(({done:_,value:E})=>{if(_)h.close();else{g+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:g,total:f});for(let D=0,A=c.length;D<A;D++){const U=c[D];U.onProgress&&U.onProgress(I)}h.enqueue(E),b()}},_=>{h.error(_)})}}});return new Response(p)}else throw new i_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),m=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(m);return u.arrayBuffer().then(v=>f.decode(v))}}}).then(u=>{Au.add(e,u);const c=In[e];delete In[e];for(let d=0,m=c.length;d<m;d++){const f=c[d];f.onLoad&&f.onLoad(u)}}).catch(u=>{const c=In[e];if(c===void 0)throw this.manager.itemError(e),u;delete In[e];for(let d=0,m=c.length;d<m;d++){const f=c[d];f.onError&&f.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class hl extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ea=new rt,Cu=new W,Du=new W;class kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rl,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Du),t.updateMatrixWorld(),ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ru=new rt,Cr=new W,ta=new W;class s_ extends kh{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cr),ta.copy(i.position),ta.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ta),i.updateMatrixWorld(),r.makeTranslation(-Cr.x,-Cr.y,-Cr.z),Ru.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class fl extends hl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new s_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class o_ extends kh{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a_ extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new o_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class l_ extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class u_{constructor(){this.type="ShapePath",this.color=new He,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new za,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const b=[];for(let _=0,E=h.length;_<E;_++){const I=h[_],D=new Ns;D.curves=I.curves,b.push(D)}return b}function i(h,b){const _=b.length;let E=!1;for(let I=_-1,D=0;D<_;I=D++){let A=b[I],U=b[D],w=U.x-A.x,M=U.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=b[D],w=-w,U=b[I],M=-M),h.y<A.y||h.y>U.y)continue;if(h.y===A.y){if(h.x===A.x)return!0}else{const F=M*(h.x-A.x)-w*(h.y-A.y);if(F===0)return!0;if(F<0)continue;E=!E}}else{if(h.y!==A.y)continue;if(U.x<=h.x&&h.x<=A.x||A.x<=h.x&&h.x<=U.x)return!0}}return E}const r=cr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Ns,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const d=[],m=[];let f=[],v=0,g;m[v]=void 0,f[v]=[];for(let h=0,b=s.length;h<b;h++)a=s[h],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!c&&m[v]&&v++,m[v]={s:new Ns,p:g},m[v].s.curves=a.curves,c&&v++,f[v]=[]):f[v].push({h:a,p:g[0]});if(!m[0])return t(s);if(m.length>1){let h=!1,b=0;for(let _=0,E=m.length;_<E;_++)d[_]=[];for(let _=0,E=m.length;_<E;_++){const I=f[_];for(let D=0;D<I.length;D++){const A=I[D];let U=!0;for(let w=0;w<m.length;w++)i(A.p,m[w].p)&&(_!==w&&b++,U?(U=!1,d[w].push(A)):h=!0);U&&d[_].push(A)}}b>0&&h===!1&&(f=d)}let p;for(let h=0,b=m.length;h<b;h++){l=m[h].s,u.push(l),p=f[h];for(let _=0,E=p.length;_<E;_++)l.holes.push(p[_].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qa);class c_ extends cl{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new r_(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},i,r)}parse(e){return new h_(e)}}class h_{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=f_(e,t,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function f_(n,e,t){const i=Array.from(n),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const d=d_(c,r,a,l,t);a+=d.offsetX,o.push(d.path)}}return o}function d_(n,e,t,i,r){const s=r.glyphs[n]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+n+'" does not exists in font family '+r.familyName+".");return}const o=new u_;let a,l,u,c,d,m,f,v;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,h=g.length;p<h;)switch(g[p++]){case"m":a=g[p++]*e+t,l=g[p++]*e+i,o.moveTo(a,l);break;case"l":a=g[p++]*e+t,l=g[p++]*e+i,o.lineTo(a,l);break;case"q":u=g[p++]*e+t,c=g[p++]*e+i,d=g[p++]*e+t,m=g[p++]*e+i,o.quadraticCurveTo(d,m,u,c);break;case"b":u=g[p++]*e+t,c=g[p++]*e+i,d=g[p++]*e+t,m=g[p++]*e+i,f=g[p++]*e+t,v=g[p++]*e+i,o.bezierCurveTo(d,m,f,v,u,c);break}}return{offsetX:s.ha*e,path:o}}const p_=`
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`,m_=`
varying vec2 vUv;
uniform vec3 iResolution;
uniform float iTime;
uniform float iImpulse;

uniform vec3 colorLeft;
uniform vec3 colorRight;
uniform vec3 colorCenter1;
uniform vec3 colorCenter2;
uniform vec3 colorCenter3;

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

vec3 colormap(float x) {
    return vec3(colormap_red(x), colormap_green(x), colormap_blue(x));
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

float gradient(in vec2 coord) {
  return max(-0.5, 1.-length(coord));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord/iResolution.x;
    float shade = pattern(uv);
    
    vec3 color = colormap(shade) * 0.5;
    
    color += gradient(uv - vec2(0.2, 0.5)) * colorLeft; 
    color += gradient(uv - vec2(0.8, 0.5)) * colorRight; 
    color += gradient(uv - vec2(0.5, 0.1)) * colorCenter1; 
    color += gradient(uv - vec2(0.5, 0.5)) * colorCenter2; 
    color += gradient(uv - vec2(0.5, 0.9)) * colorCenter3; 
   
   fragColor = vec4(color.rgb, 1.0);
}

void main() {
    mainImage(gl_FragColor, vUv * iResolution.xy);
}
`,ti={iTime:{value:0},iImpulse:{value:0},iResolution:{value:new W(window.innerWidth,window.innerHeight,1)},colorLeft:{value:new W(0,0,0)},colorRight:{value:new W(0,0,0)},colorCenter1:{value:new W(0,0,0)},colorCenter2:{value:new W(0,0,0)},colorCenter3:{value:new W(0,0,0)}},g_=new yr(2,2),Vh=new Hn({vertexShader:p_,fragmentShader:m_,uniforms:ti});Vh.depthWrite=!1;const v_=new At(g_,Vh);function dl(n,e,t,i,r){const s=t-e,o=r-i;return(n-e)/s*o+i}function pl(n,e,t){return n+(e-n)*t}function __(n,e){let t=1/0,i=-1;return n.forEach((r,s)=>{const o=e(r);o<t&&(t=o,i=s)}),n[i]}const qs=100,uo=0,ln=[-1.8,-.6,.6,1.8],kt=new Ev;kt.fog=new ol(16689918,.003);const $s=new Sv({antialias:!0});$s.setSize(window.innerWidth,window.innerHeight);document.body.appendChild($s.domElement);const Or=new zt(30,window.innerWidth/window.innerHeight,.1,600);Or.position.set(0,5,12);Or.rotation.x=Math.PI*-.1;const b_=new l_(4210752,1);kt.add(b_);const y_=new a_(15724270,1.1);kt.add(y_);const Gh=[],co=(n,e)=>{const t=new fl(n,100,500);t.position.set(0,10,-10*e),kt.add(t),Gh.push(t)};co(15606510,2);co(15615214,5);co(15623918,7);co(15632622,9);const Os=[],ho=n=>{const e=new fl(0,0,100);e.position.set(n,1,-uo),kt.add(e),Os.push(e)};ho(ln[0]);ho(ln[1]);ho(ln[2]);ho(ln[3]);const Zn=(n,e,t)=>{const i=new fl(0,0,5e3);return i.position.set(dl(n,-.5,.5,ln[1],ln[2]),e*3,-10*t),kt.add(i),i},Bt={center1:Zn(0,5,1),center2:Zn(0,5,3),left:Zn(5,1,3),right:Zn(-5,1,3),center3:Zn(0,5,5),hz1:Zn(-1,0,0),hz2:Zn(0,0,0),hz3:Zn(1,0,0)},na=[Bt.center1,Bt.center2,Bt.left,Bt.right,Bt.center3,Bt.hz1,Bt.hz2,Bt.hz3],x_=new yr(5,1e3),S_=new ri({color:16777215}),Hh=new At(x_,S_);Hh.rotation.x=-Math.PI/2;kt.add(Hh);const E_=new _i(5,1,.1),w_=new ri({color:249630993}),ml=new At(E_,w_);ml.position.set(0,-.4,-uo);kt.add(ml);const M_=new _i(1,.1,1e3),T_=new ri({color:1118481}),fo=n=>{const e=new At(M_,T_);e.position.x=n,kt.add(e)};fo(ln[0]);fo(ln[1]);fo(ln[2]);fo(ln[3]);const Wh=[],ia={NEUTRAL:new ri({color:15658734}),SUCCESS:new ri({color:2289186}),FAILED:new ri({color:15606306}),NOW:new ri({color:2289390,emissiveIntensity:100})},A_=new _i(1,.6,1),C_=()=>{const n=new At(A_,new ri({color:15658734}));n.position.z=qs,Wh.push(n),kt.add(n)};for(let n=0;n<100;n++)C_();const D_=new c_,R_="https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/helvetiker_regular.typeface.json",P_=await new Promise((n,e)=>{D_.load(R_,n,void 0,e)}),I_=new il({color:1118481,transparent:!0,opacity:.8,side:_n}),jh=n=>{const e=P_.generateShapes(n,.5),t=new ul(e);t.computeBoundingBox();const i=-.5*(t.boundingBox.max.x-t.boundingBox.min.x);return t.translate(i,0,0),t},jr=new At(jh(`   Score: 0
   Combo: 0
   Hits: 0
   Fails: 0`),I_);jr.position.z=-15;jr.position.y=2;jr.position.x=-5;kt.add(jr);kt.add(v_);const ys=[1,2,4,8];class L_{hits=0;fails=0;combo=0;score=0;onFail(){this.fails++,this.combo=0,this._updateText()}onSuccess(){this.hits++,this.combo++,this.score+=this.combo>ys.length-1?ys[ys.length-1]:ys[this.combo],this._updateText()}_updateText(){jr.geometry=jh(`   Score: ${this.score}
   Combo: ${this.combo}
   Hits: ${this.hits}
   Fails: ${this.fails}`)}}class N_{constructor(e,t){this.game=e,this.cubesVisuals=new O_(this),this.backgroundVisuals=new B_(this),this.finishVisuals=new F_(this),this.lightsVisuals=new U_(this,t)}lightsVisuals;cubesVisuals;backgroundVisuals;finishVisuals;update(e){this.cubesVisuals.update(),this.finishVisuals.update(),this.lightsVisuals.update(),this.backgroundVisuals.update(e),$s.render(kt,Or)}timeNow(){return this.game.timeNow}resize(){Or.aspect=window.innerWidth/window.innerHeight,Or.updateProjectionMatrix(),$s.setSize(window.innerWidth,window.innerHeight)}}class O_{constructor(e){this.visuals=e}update(){const e=this.visuals.game,t=e.notes.getDisplayNotes();for(let i=0;i<100;i++){const r=Wh[i],s=t[i];if(!s){r.position.z=qs;continue}r.position.z=-dl(s.time,e.timeNow,e.notes.timeTop,uo,qs),r.position.x=ln[s.note],r.material=this._getCubeMaterial(s)}}_getCubeMaterial(e){if(e.status==null)return ia.NEUTRAL;if(e.status)return ia.SUCCESS;if(!e.status)return ia.FAILED;throw new Error("Invalid note status")}}class U_{constructor(e,t){this.visuals=e,this.lightEvents=t,this.lightsTarget=na.map(()=>0)}COLORS=[new He(65536),new He(5300963),new He(15820012),new He(16777215)];INTENSITY=500;lightEventIndex=0;lightsTarget;update(){na.forEach((i,r)=>{i.intensity=pl(i.intensity,this.lightsTarget[r],.2)}),this.setBackgroundColor(ti.colorLeft,Bt.left),this.setBackgroundColor(ti.colorRight,Bt.right),this.setBackgroundColor(ti.colorCenter1,Bt.center1),this.setBackgroundColor(ti.colorCenter2,Bt.center2),this.setBackgroundColor(ti.colorCenter3,Bt.center3);const e=this.lightEvents[this.lightEventIndex];if(!e)return;e.time-this.visuals.timeNow()<=0&&(this.lightEventIndex++,this.lightEffect(e))}lightEffect(e){const t=na[e.lightIndex];t.color=this.COLORS[e.colorI],e.modeI==1?t.intensity=this.INTENSITY:(e.modeI==2||e.modeI==3)&&(t.intensity=this.INTENSITY*2),e.modeI==3?this.lightsTarget[e.lightIndex]=0:this.lightsTarget[e.lightIndex]=this.INTENSITY}setBackgroundColor(e,t){const i=t.intensity/this.INTENSITY;e.value.set(t.color.r*i,t.color.g*i,t.color.b*i)}}class F_{constructor(e){this.visuals=e}COLOR_RED=new He(16711680);COLOR_GREEN=new He(65280);update(){Os.forEach(e=>e.intensity=pl(e.intensity,0,.1))}onHitOrMiss(e,t){Os[t].intensity=100,Os[t].color=e?this.COLOR_GREEN:this.COLOR_RED,this.visuals.backgroundVisuals.onNotePlay()}setFinishSize(e,t){const i=dl(e,0,t,uo,qs);ml.scale.z=i}}class B_{constructor(e){this.visuals=e}lightsIntensity=0;backgroundTime=0;update(e){const t=this.visuals.timeNow();this.backgroundTime+=e,this.lightsIntensity=pl(this.lightsIntensity,.5,.01),ti.iTime.value=this.backgroundTime,ti.iImpulse.value=this.lightsIntensity,Gh.forEach((i,r)=>{i.intensity=this.lightsIntensity*1e3,i.position.x=Math.sin(t+r*10)*10,i.position.z=Math.cos(t+r*10)*10})}onNotePlay(){this.lightsIntensity=Math.min(1,this.lightsIntensity*1.1),this.backgroundTime+=.1}}const Pu=2,Iu=.1;class z_{constructor(e,t){this.game=e,this.setNotes(t),this.setHitWindow(.05)}notes=[];timeTop=0;_bottomNoteIndex=0;_bottomClickableNoteIndex=0;_topClickableNoteIndex=0;_topNoteIndex=0;hitWindow=.05;setNotes(e){this.notes=e,this._bottomNoteIndex=0,this._bottomClickableNoteIndex=0,this._topClickableNoteIndex=0,this._topNoteIndex=0}update(){const e=this.game.timeNow;this.timeTop=e+Pu;const t=e+this.hitWindow,i=e-Math.min(this.hitWindow,Iu),r=e-Iu,s=this.notes;for(let o=this._bottomNoteIndex;o<s.length;o++){const a=s[o],l=a.time;if(l<r&&(this._bottomNoteIndex=o),l<i)this._bottomClickableNoteIndex=o,this.noteFinished(a);else if(l<t)this._topClickableNoteIndex=o;else if(l<this.timeTop)this._topNoteIndex=o;else break}}getDisplayNotes(){return this.notes.slice(this._bottomNoteIndex,this._topNoteIndex+1)}getClickableNotes(e){return this.notes.slice(this._bottomClickableNoteIndex,this._topClickableNoteIndex+1).filter(i=>e==i.note)}click(e){const t=this.getClickableNotes(e);if(t.length==0)return this.onFail(e,!0),!1;const i=__(t,this._distance);return i.status!==void 0?(this.onFail(e,!0),!1):(i.status=!0,this.onSuccess(e),!0)}noteFinished(e){e.status===void 0&&(e.status=!1,this.onFail(e.note,!1),console.warn("Missed note"))}onFail(e,t=!1){this.game.combo.onFail(),t&&this.game.visuals.finishVisuals.onHitOrMiss(!1,e)}onSuccess(e){this.game.combo.onSuccess(),this.game.visuals.finishVisuals.onHitOrMiss(!0,e)}setHitWindow(e){this.hitWindow=e,this.game.visuals.finishVisuals.setFinishSize(this.hitWindow,Pu)}_distanceS=e=>e.time-this.game.timeNow;_distance=e=>Math.abs(this._distanceS(e))}class k_{timeNow=0;combo;visuals;notes;constructor(e,t){this.combo=new L_,this.visuals=new N_(this,t),this.notes=new z_(this,e)}update(e){const t=e-this.timeNow;this.timeNow=e,this.notes.update(),this.visuals.update(t)}click(e){this.notes.click(e)}setHitWindow(e){this.notes.setHitWindow(e)}}var xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function V_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function Ss(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Xh={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(n,e){(function(t){n.exports=t()})(function(){return function t(i,r,s){function o(u,c){if(!r[u]){if(!i[u]){var d=typeof Ss=="function"&&Ss;if(!c&&d)return d(u,!0);if(a)return a(u,!0);var m=new Error("Cannot find module '"+u+"'");throw m.code="MODULE_NOT_FOUND",m}var f=r[u]={exports:{}};i[u][0].call(f.exports,function(v){var g=i[u][1][v];return o(g||v)},f,f.exports,t,i,r,s)}return r[u].exports}for(var a=typeof Ss=="function"&&Ss,l=0;l<s.length;l++)o(s[l]);return o}({1:[function(t,i,r){var s=t("./utils"),o=t("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(l){for(var u,c,d,m,f,v,g,p=[],h=0,b=l.length,_=b,E=s.getTypeOf(l)!=="string";h<l.length;)_=b-h,d=E?(u=l[h++],c=h<b?l[h++]:0,h<b?l[h++]:0):(u=l.charCodeAt(h++),c=h<b?l.charCodeAt(h++):0,h<b?l.charCodeAt(h++):0),m=u>>2,f=(3&u)<<4|c>>4,v=1<_?(15&c)<<2|d>>6:64,g=2<_?63&d:64,p.push(a.charAt(m)+a.charAt(f)+a.charAt(v)+a.charAt(g));return p.join("")},r.decode=function(l){var u,c,d,m,f,v,g=0,p=0,h="data:";if(l.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");var b,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===a.charAt(64)&&_--,l.charAt(l.length-2)===a.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=o.uint8array?new Uint8Array(0|_):new Array(0|_);g<l.length;)u=a.indexOf(l.charAt(g++))<<2|(m=a.indexOf(l.charAt(g++)))>>4,c=(15&m)<<4|(f=a.indexOf(l.charAt(g++)))>>2,d=(3&f)<<6|(v=a.indexOf(l.charAt(g++))),b[p++]=u,f!==64&&(b[p++]=c),v!==64&&(b[p++]=d);return b}},{"./support":30,"./utils":32}],2:[function(t,i,r){var s=t("./external"),o=t("./stream/DataWorker"),a=t("./stream/Crc32Probe"),l=t("./stream/DataLengthProbe");function u(c,d,m,f,v){this.compressedSize=c,this.uncompressedSize=d,this.crc32=m,this.compression=f,this.compressedContent=v}u.prototype={getContentWorker:function(){var c=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return c.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),c},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},u.createWorkerFrom=function(c,d,m){return c.pipe(new a).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},i.exports=u},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,i,r){var s=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,i,r){var s=t("./utils"),o=function(){for(var a,l=[],u=0;u<256;u++){a=u;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;l[u]=a}return l}();i.exports=function(a,l){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(u,c,d,m){var f=o,v=m+d;u^=-1;for(var g=m;g<v;g++)u=u>>>8^f[255&(u^c[g])];return-1^u}(0|l,a,a.length,0):function(u,c,d,m){var f=o,v=m+d;u^=-1;for(var g=m;g<v;g++)u=u>>>8^f[255&(u^c.charCodeAt(g))];return-1^u}(0|l,a,a.length,0):0}},{"./utils":32}],5:[function(t,i,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,i,r){var s=null;s=typeof Promise<"u"?Promise:t("lie"),i.exports={Promise:s}},{lie:37}],7:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=t("pako"),a=t("./utils"),l=t("./stream/GenericWorker"),u=s?"uint8array":"array";function c(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}r.magic="\b\0",a.inherits(c,l),c.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(u,d.data),!1)},c.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},r.compressWorker=function(d){return new c("Deflate",d)},r.uncompressWorker=function(){return new c("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,i,r){function s(f,v){var g,p="";for(g=0;g<v;g++)p+=String.fromCharCode(255&f),f>>>=8;return p}function o(f,v,g,p,h,b){var _,E,I=f.file,D=f.compression,A=b!==u.utf8encode,U=a.transformTo("string",b(I.name)),w=a.transformTo("string",u.utf8encode(I.name)),M=I.comment,F=a.transformTo("string",b(M)),C=a.transformTo("string",u.utf8encode(M)),O=w.length!==I.name.length,y=C.length!==M.length,k="",Q="",Y="",ee=I.dir,ne=I.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};v&&!g||(ae.crc32=f.crc32,ae.compressedSize=f.compressedSize,ae.uncompressedSize=f.uncompressedSize);var V=0;v&&(V|=8),A||!O&&!y||(V|=2048);var $=0,be=0;ee&&($|=16),h==="UNIX"?(be=798,$|=function(J,ge){var _e=J;return J||(_e=ge?16893:33204),(65535&_e)<<16}(I.unixPermissions,ee)):(be=20,$|=function(J){return 63&(J||0)}(I.dosPermissions)),_=ne.getUTCHours(),_<<=6,_|=ne.getUTCMinutes(),_<<=5,_|=ne.getUTCSeconds()/2,E=ne.getUTCFullYear()-1980,E<<=4,E|=ne.getUTCMonth()+1,E<<=5,E|=ne.getUTCDate(),O&&(Q=s(1,1)+s(c(U),4)+w,k+="up"+s(Q.length,2)+Q),y&&(Y=s(1,1)+s(c(F),4)+C,k+="uc"+s(Y.length,2)+Y);var q="";return q+=`
\0`,q+=s(V,2),q+=D.magic,q+=s(_,2),q+=s(E,2),q+=s(ae.crc32,4),q+=s(ae.compressedSize,4),q+=s(ae.uncompressedSize,4),q+=s(U.length,2),q+=s(k.length,2),{fileRecord:d.LOCAL_FILE_HEADER+q+U+k,dirRecord:d.CENTRAL_FILE_HEADER+s(be,2)+q+s(F.length,2)+"\0\0\0\0"+s($,4)+s(p,4)+U+k+F}}var a=t("../utils"),l=t("../stream/GenericWorker"),u=t("../utf8"),c=t("../crc32"),d=t("../signature");function m(f,v,g,p){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=v,this.zipPlatform=g,this.encodeFileName=p,this.streamFiles=f,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(m,l),m.prototype.push=function(f){var v=f.meta.percent||0,g=this.entriesCount,p=this._sources.length;this.accumulate?this.contentBuffer.push(f):(this.bytesWritten+=f.data.length,l.prototype.push.call(this,{data:f.data,meta:{currentFile:this.currentFile,percent:g?(v+100*(g-p-1))/g:100}}))},m.prototype.openedSource=function(f){this.currentSourceOffset=this.bytesWritten,this.currentFile=f.file.name;var v=this.streamFiles&&!f.file.dir;if(v){var g=o(f,v,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:g.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(f){this.accumulate=!1;var v=this.streamFiles&&!f.file.dir,g=o(f,v,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(g.dirRecord),v)this.push({data:function(p){return d.DATA_DESCRIPTOR+s(p.crc32,4)+s(p.compressedSize,4)+s(p.uncompressedSize,4)}(f),meta:{percent:100}});else for(this.push({data:g.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var f=this.bytesWritten,v=0;v<this.dirRecords.length;v++)this.push({data:this.dirRecords[v],meta:{percent:100}});var g=this.bytesWritten-f,p=function(h,b,_,E,I){var D=a.transformTo("string",I(E));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(h,2)+s(h,2)+s(b,4)+s(_,4)+s(D.length,2)+D}(this.dirRecords.length,g,f,this.zipComment,this.encodeFileName);this.push({data:p,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(f){this._sources.push(f);var v=this;return f.on("data",function(g){v.processChunk(g)}),f.on("end",function(){v.closedSource(v.previous.streamInfo),v._sources.length?v.prepareNextSource():v.end()}),f.on("error",function(g){v.error(g)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(f){var v=this._sources;if(!l.prototype.error.call(this,f))return!1;for(var g=0;g<v.length;g++)try{v[g].error(f)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var f=this._sources,v=0;v<f.length;v++)f[v].lock()},i.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,i,r){var s=t("../compressions"),o=t("./ZipFileWorker");r.generateWorker=function(a,l,u){var c=new o(l.streamFiles,u,l.platform,l.encodeFileName),d=0;try{a.forEach(function(m,f){d++;var v=function(b,_){var E=b||_,I=s[E];if(!I)throw new Error(E+" is not a valid compression method !");return I}(f.options.compression,l.compression),g=f.options.compressionOptions||l.compressionOptions||{},p=f.dir,h=f.date;f._compressWorker(v,g).withStreamInfo("file",{name:m,dir:p,date:h,comment:f.comment||"",unixPermissions:f.unixPermissions,dosPermissions:f.dosPermissions}).pipe(c)}),c.entriesCount=d}catch(m){c.error(m)}return c}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,i,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=t("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,i,r){var s=t("./utils"),o=t("./external"),a=t("./utf8"),l=t("./zipEntries"),u=t("./stream/Crc32Probe"),c=t("./nodejsUtils");function d(m){return new o.Promise(function(f,v){var g=m.decompressed.getContentWorker().pipe(new u);g.on("error",function(p){v(p)}).on("end",function(){g.streamInfo.crc32!==m.decompressed.crc32?v(new Error("Corrupted zip : CRC32 mismatch")):f()}).resume()})}i.exports=function(m,f){var v=this;return f=s.extend(f||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(m)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",m,!0,f.optimizedBinaryString,f.base64).then(function(g){var p=new l(f);return p.load(g),p}).then(function(g){var p=[o.Promise.resolve(g)],h=g.files;if(f.checkCRC32)for(var b=0;b<h.length;b++)p.push(d(h[b]));return o.Promise.all(p)}).then(function(g){for(var p=g.shift(),h=p.files,b=0;b<h.length;b++){var _=h[b],E=_.fileNameStr,I=s.resolve(_.fileNameStr);v.file(I,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:f.createFolders}),_.dir||(v.file(I).unsafeOriginalName=E)}return p.zipComment.length&&(v.comment=p.zipComment),v})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,i,r){var s=t("../utils"),o=t("../stream/GenericWorker");function a(l,u){o.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(u)}s.inherits(a,o),a.prototype._bindStream=function(l){var u=this;(this._stream=l).pause(),l.on("data",function(c){u.push({data:c,meta:{percent:0}})}).on("error",function(c){u.isPaused?this.generatedError=c:u.error(c)}).on("end",function(){u.isPaused?u._upstreamEnded=!0:u.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,i,r){var s=t("readable-stream").Readable;function o(a,l,u){s.call(this,l),this._helper=a;var c=this;a.on("data",function(d,m){c.push(d)||c._helper.pause(),u&&u(m)}).on("error",function(d){c.emit("error",d)}).on("end",function(){c.push(null)})}t("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(t,i,r){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,i,r){function s(I,D,A){var U,w=a.getTypeOf(D),M=a.extend(A||{},c);M.date=M.date||new Date,M.compression!==null&&(M.compression=M.compression.toUpperCase()),typeof M.unixPermissions=="string"&&(M.unixPermissions=parseInt(M.unixPermissions,8)),M.unixPermissions&&16384&M.unixPermissions&&(M.dir=!0),M.dosPermissions&&16&M.dosPermissions&&(M.dir=!0),M.dir&&(I=h(I)),M.createFolders&&(U=p(I))&&b.call(this,U,!0);var F=w==="string"&&M.binary===!1&&M.base64===!1;A&&A.binary!==void 0||(M.binary=!F),(D instanceof d&&D.uncompressedSize===0||M.dir||!D||D.length===0)&&(M.base64=!1,M.binary=!0,D="",M.compression="STORE",w="string");var C=null;C=D instanceof d||D instanceof l?D:v.isNode&&v.isStream(D)?new g(I,D):a.prepareContent(I,D,M.binary,M.optimizedBinaryString,M.base64);var O=new m(I,C,M);this.files[I]=O}var o=t("./utf8"),a=t("./utils"),l=t("./stream/GenericWorker"),u=t("./stream/StreamHelper"),c=t("./defaults"),d=t("./compressedObject"),m=t("./zipObject"),f=t("./generate"),v=t("./nodejsUtils"),g=t("./nodejs/NodejsStreamInputAdapter"),p=function(I){I.slice(-1)==="/"&&(I=I.substring(0,I.length-1));var D=I.lastIndexOf("/");return 0<D?I.substring(0,D):""},h=function(I){return I.slice(-1)!=="/"&&(I+="/"),I},b=function(I,D){return D=D!==void 0?D:c.createFolders,I=h(I),this.files[I]||s.call(this,I,null,{dir:!0,createFolders:D}),this.files[I]};function _(I){return Object.prototype.toString.call(I)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(I){var D,A,U;for(D in this.files)U=this.files[D],(A=D.slice(this.root.length,D.length))&&D.slice(0,this.root.length)===this.root&&I(A,U)},filter:function(I){var D=[];return this.forEach(function(A,U){I(A,U)&&D.push(U)}),D},file:function(I,D,A){if(arguments.length!==1)return I=this.root+I,s.call(this,I,D,A),this;if(_(I)){var U=I;return this.filter(function(M,F){return!F.dir&&U.test(M)})}var w=this.files[this.root+I];return w&&!w.dir?w:null},folder:function(I){if(!I)return this;if(_(I))return this.filter(function(w,M){return M.dir&&I.test(w)});var D=this.root+I,A=b.call(this,D),U=this.clone();return U.root=A.name,U},remove:function(I){I=this.root+I;var D=this.files[I];if(D||(I.slice(-1)!=="/"&&(I+="/"),D=this.files[I]),D&&!D.dir)delete this.files[I];else for(var A=this.filter(function(w,M){return M.name.slice(0,I.length)===I}),U=0;U<A.length;U++)delete this.files[A[U].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(I){var D,A={};try{if((A=a.extend(I||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=A.type.toLowerCase(),A.compression=A.compression.toUpperCase(),A.type==="binarystring"&&(A.type="string"),!A.type)throw new Error("No output type specified.");a.checkSupport(A.type),A.platform!=="darwin"&&A.platform!=="freebsd"&&A.platform!=="linux"&&A.platform!=="sunos"||(A.platform="UNIX"),A.platform==="win32"&&(A.platform="DOS");var U=A.comment||this.comment||"";D=f.generateWorker(this,A,U)}catch(w){(D=new l("error")).error(w)}return new u(D,A.type||"string",A.mimeType)},generateAsync:function(I,D){return this.generateInternalStream(I).accumulate(D)},generateNodeStream:function(I,D){return(I=I||{}).type||(I.type="nodebuffer"),this.generateInternalStream(I).toNodejsStream(D)}};i.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,i,r){i.exports=t("stream")},{stream:void 0}],17:[function(t,i,r){var s=t("./DataReader");function o(a){s.call(this,a);for(var l=0;l<this.data.length;l++)a[l]=255&a[l]}t("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),d=a.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===u&&this.data[m+2]===c&&this.data[m+3]===d)return m-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var l=a.charCodeAt(0),u=a.charCodeAt(1),c=a.charCodeAt(2),d=a.charCodeAt(3),m=this.readData(4);return l===m[0]&&u===m[1]&&c===m[2]&&d===m[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(t,i,r){var s=t("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var l,u=0;for(this.checkOffset(a),l=this.index+a-1;l>=this.index;l--)u=(u<<8)+this.byteAt(l);return this.index+=a,u},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(t,i,r){var s=t("./Uint8ArrayReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,i,r){var s=t("./DataReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var l=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(t,i,r){var s=t("./ArrayReader");function o(a){s.call(this,a)}t("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,l},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(t,i,r){var s=t("../utils"),o=t("../support"),a=t("./ArrayReader"),l=t("./StringReader"),u=t("./NodeBufferReader"),c=t("./Uint8ArrayReader");i.exports=function(d){var m=s.getTypeOf(d);return s.checkSupport(m),m!=="string"||o.uint8array?m==="nodebuffer"?new u(d):o.uint8array?new c(s.transformTo("uint8array",d)):new a(s.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,i,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,i,r){var s=t("./GenericWorker"),o=t("../utils");function a(l){s.call(this,"ConvertWorker to "+l),this.destType=l}o.inherits(a,s),a.prototype.processChunk=function(l){this.push({data:o.transformTo(this.destType,l.data),meta:l.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(t,i,r){var s=t("./GenericWorker"),o=t("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(a,s),a.prototype.processChunk=function(l){this.streamInfo.crc32=o(l.data,this.streamInfo.crc32||0),this.push(l)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,i,r){var s=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}s.inherits(a,o),a.prototype.processChunk=function(l){if(l){var u=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=u+l.data.length}o.prototype.processChunk.call(this,l)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(t,i,r){var s=t("../utils"),o=t("./GenericWorker");function a(l){o.call(this,"DataWorker");var u=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(c){u.dataIsReady=!0,u.data=c,u.max=c&&c.length||0,u.type=s.getTypeOf(c),u.isPaused||u._tickAndRepeat()},function(c){u.error(c)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,u=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,u);break;case"uint8array":l=this.data.subarray(this.index,u);break;case"array":case"nodebuffer":l=this.data.slice(this.index,u)}return this.index=u,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(t,i,r){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var l=0;l<this._listeners[o].length;l++)this._listeners[o][l].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(l){a.processChunk(l)}),o.on("end",function(){a.end()}),o.on("error",function(l){a.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=s},{}],29:[function(t,i,r){var s=t("../utils"),o=t("./ConvertWorker"),a=t("./GenericWorker"),l=t("../base64"),u=t("../support"),c=t("../external"),d=null;if(u.nodestream)try{d=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(v,g){return new c.Promise(function(p,h){var b=[],_=v._internalType,E=v._outputType,I=v._mimeType;v.on("data",function(D,A){b.push(D),g&&g(A)}).on("error",function(D){b=[],h(D)}).on("end",function(){try{var D=function(A,U,w){switch(A){case"blob":return s.newBlob(s.transformTo("arraybuffer",U),w);case"base64":return l.encode(U);default:return s.transformTo(A,U)}}(E,function(A,U){var w,M=0,F=null,C=0;for(w=0;w<U.length;w++)C+=U[w].length;switch(A){case"string":return U.join("");case"array":return Array.prototype.concat.apply([],U);case"uint8array":for(F=new Uint8Array(C),w=0;w<U.length;w++)F.set(U[w],M),M+=U[w].length;return F;case"nodebuffer":return Buffer.concat(U);default:throw new Error("concat : unsupported type '"+A+"'")}}(_,b),I);p(D)}catch(A){h(A)}b=[]}).resume()})}function f(v,g,p){var h=g;switch(g){case"blob":case"arraybuffer":h="uint8array";break;case"base64":h="string"}try{this._internalType=h,this._outputType=g,this._mimeType=p,s.checkSupport(h),this._worker=v.pipe(new o(h)),v.lock()}catch(b){this._worker=new a("error"),this._worker.error(b)}}f.prototype={accumulate:function(v){return m(this,v)},on:function(v,g){var p=this;return v==="data"?this._worker.on(v,function(h){g.call(p,h.data,h.meta)}):this._worker.on(v,function(){s.delay(g,arguments,p)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(v){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},v)}},i.exports=f},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,i,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),r.blob=o.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,i,r){for(var s=t("./utils"),o=t("./support"),a=t("./nodejsUtils"),l=t("./stream/GenericWorker"),u=new Array(256),c=0;c<256;c++)u[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;u[254]=u[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}r.utf8encode=function(f){return o.nodebuffer?a.newBufferFrom(f,"utf-8"):function(v){var g,p,h,b,_,E=v.length,I=0;for(b=0;b<E;b++)(64512&(p=v.charCodeAt(b)))==55296&&b+1<E&&(64512&(h=v.charCodeAt(b+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),b++),I+=p<128?1:p<2048?2:p<65536?3:4;for(g=o.uint8array?new Uint8Array(I):new Array(I),b=_=0;_<I;b++)(64512&(p=v.charCodeAt(b)))==55296&&b+1<E&&(64512&(h=v.charCodeAt(b+1)))==56320&&(p=65536+(p-55296<<10)+(h-56320),b++),p<128?g[_++]=p:(p<2048?g[_++]=192|p>>>6:(p<65536?g[_++]=224|p>>>12:(g[_++]=240|p>>>18,g[_++]=128|p>>>12&63),g[_++]=128|p>>>6&63),g[_++]=128|63&p);return g}(f)},r.utf8decode=function(f){return o.nodebuffer?s.transformTo("nodebuffer",f).toString("utf-8"):function(v){var g,p,h,b,_=v.length,E=new Array(2*_);for(g=p=0;g<_;)if((h=v[g++])<128)E[p++]=h;else if(4<(b=u[h]))E[p++]=65533,g+=b-1;else{for(h&=b===2?31:b===3?15:7;1<b&&g<_;)h=h<<6|63&v[g++],b--;1<b?E[p++]=65533:h<65536?E[p++]=h:(h-=65536,E[p++]=55296|h>>10&1023,E[p++]=56320|1023&h)}return E.length!==p&&(E.subarray?E=E.subarray(0,p):E.length=p),s.applyFromCharCode(E)}(f=s.transformTo(o.uint8array?"uint8array":"array",f))},s.inherits(d,l),d.prototype.processChunk=function(f){var v=s.transformTo(o.uint8array?"uint8array":"array",f.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var g=v;(v=new Uint8Array(g.length+this.leftOver.length)).set(this.leftOver,0),v.set(g,this.leftOver.length)}else v=this.leftOver.concat(v);this.leftOver=null}var p=function(b,_){var E;for((_=_||b.length)>b.length&&(_=b.length),E=_-1;0<=E&&(192&b[E])==128;)E--;return E<0||E===0?_:E+u[b[E]]>_?E:_}(v),h=v;p!==v.length&&(o.uint8array?(h=v.subarray(0,p),this.leftOver=v.subarray(p,v.length)):(h=v.slice(0,p),this.leftOver=v.slice(p,v.length))),this.push({data:r.utf8decode(h),meta:f.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=d,s.inherits(m,l),m.prototype.processChunk=function(f){this.push({data:r.utf8encode(f.data),meta:f.meta})},r.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,i,r){var s=t("./support"),o=t("./base64"),a=t("./nodejsUtils"),l=t("./external");function u(g){return g}function c(g,p){for(var h=0;h<g.length;++h)p[h]=255&g.charCodeAt(h);return p}t("setimmediate"),r.newBlob=function(g,p){r.checkSupport("blob");try{return new Blob([g],{type:p})}catch{try{var h=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return h.append(g),h.getBlob(p)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(g,p,h){var b=[],_=0,E=g.length;if(E<=h)return String.fromCharCode.apply(null,g);for(;_<E;)p==="array"||p==="nodebuffer"?b.push(String.fromCharCode.apply(null,g.slice(_,Math.min(_+h,E)))):b.push(String.fromCharCode.apply(null,g.subarray(_,Math.min(_+h,E)))),_+=h;return b.join("")},stringifyByChar:function(g){for(var p="",h=0;h<g.length;h++)p+=String.fromCharCode(g[h]);return p},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function m(g){var p=65536,h=r.getTypeOf(g),b=!0;if(h==="uint8array"?b=d.applyCanBeUsed.uint8array:h==="nodebuffer"&&(b=d.applyCanBeUsed.nodebuffer),b)for(;1<p;)try{return d.stringifyByChunk(g,h,p)}catch{p=Math.floor(p/2)}return d.stringifyByChar(g)}function f(g,p){for(var h=0;h<g.length;h++)p[h]=g[h];return p}r.applyFromCharCode=m;var v={};v.string={string:u,array:function(g){return c(g,new Array(g.length))},arraybuffer:function(g){return v.string.uint8array(g).buffer},uint8array:function(g){return c(g,new Uint8Array(g.length))},nodebuffer:function(g){return c(g,a.allocBuffer(g.length))}},v.array={string:m,array:u,arraybuffer:function(g){return new Uint8Array(g).buffer},uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(g)}},v.arraybuffer={string:function(g){return m(new Uint8Array(g))},array:function(g){return f(new Uint8Array(g),new Array(g.byteLength))},arraybuffer:u,uint8array:function(g){return new Uint8Array(g)},nodebuffer:function(g){return a.newBufferFrom(new Uint8Array(g))}},v.uint8array={string:m,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return g.buffer},uint8array:u,nodebuffer:function(g){return a.newBufferFrom(g)}},v.nodebuffer={string:m,array:function(g){return f(g,new Array(g.length))},arraybuffer:function(g){return v.nodebuffer.uint8array(g).buffer},uint8array:function(g){return f(g,new Uint8Array(g.length))},nodebuffer:u},r.transformTo=function(g,p){if(p=p||"",!g)return p;r.checkSupport(g);var h=r.getTypeOf(p);return v[h][g](p)},r.resolve=function(g){for(var p=g.split("/"),h=[],b=0;b<p.length;b++){var _=p[b];_==="."||_===""&&b!==0&&b!==p.length-1||(_===".."?h.pop():h.push(_))}return h.join("/")},r.getTypeOf=function(g){return typeof g=="string"?"string":Object.prototype.toString.call(g)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(g)?"nodebuffer":s.uint8array&&g instanceof Uint8Array?"uint8array":s.arraybuffer&&g instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(g){if(!s[g.toLowerCase()])throw new Error(g+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(g){var p,h,b="";for(h=0;h<(g||"").length;h++)b+="\\x"+((p=g.charCodeAt(h))<16?"0":"")+p.toString(16).toUpperCase();return b},r.delay=function(g,p,h){setImmediate(function(){g.apply(h||null,p||[])})},r.inherits=function(g,p){function h(){}h.prototype=p.prototype,g.prototype=new h},r.extend=function(){var g,p,h={};for(g=0;g<arguments.length;g++)for(p in arguments[g])Object.prototype.hasOwnProperty.call(arguments[g],p)&&h[p]===void 0&&(h[p]=arguments[g][p]);return h},r.prepareContent=function(g,p,h,b,_){return l.Promise.resolve(p).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new l.Promise(function(I,D){var A=new FileReader;A.onload=function(U){I(U.target.result)},A.onerror=function(U){D(U.target.error)},A.readAsArrayBuffer(E)}):E}).then(function(E){var I=r.getTypeOf(E);return I?(I==="arraybuffer"?E=r.transformTo("uint8array",E):I==="string"&&(_?E=o.decode(E):h&&b!==!0&&(E=function(D){return c(D,s.uint8array?new Uint8Array(D.length):new Array(D.length))}(E))),E):l.Promise.reject(new Error("Can't read the data of '"+g+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,i,r){var s=t("./reader/readerFor"),o=t("./utils"),a=t("./signature"),l=t("./zipEntry"),u=t("./support");function c(d){this.files=[],this.loadOptions=d}c.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(m)+", expected "+o.pretty(d)+")")}},isSignature:function(d,m){var f=this.reader.index;this.reader.setIndex(d);var v=this.reader.readString(4)===m;return this.reader.setIndex(f),v},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=u.uint8array?"uint8array":"array",f=o.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(f)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,f,v=this.zip64EndOfCentralSize-44;0<v;)d=this.reader.readInt(2),m=this.reader.readInt(4),f=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:f}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var f=this.centralDirOffset+this.centralDirSize;this.zip64&&(f+=20,f+=12+this.zip64EndOfCentralSize);var v=m-f;if(0<v)this.isSignature(m,a.CENTRAL_FILE_HEADER)||(this.reader.zero=v);else if(v<0)throw new Error("Corrupted zip: missing "+Math.abs(v)+" bytes.")},prepareReader:function(d){this.reader=s(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,i,r){var s=t("./reader/readerFor"),o=t("./utils"),a=t("./compressedObject"),l=t("./crc32"),u=t("./utf8"),c=t("./compressions"),d=t("./support");function m(f,v){this.options=f,this.loadOptions=v}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(f){var v,g;if(f.skip(22),this.fileNameLength=f.readInt(2),g=f.readInt(2),this.fileName=f.readData(this.fileNameLength),f.skip(g),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((v=function(p){for(var h in c)if(Object.prototype.hasOwnProperty.call(c,h)&&c[h].magic===p)return c[h];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,v,f.readData(this.compressedSize))},readCentralPart:function(f){this.versionMadeBy=f.readInt(2),f.skip(2),this.bitFlag=f.readInt(2),this.compressionMethod=f.readString(2),this.date=f.readDate(),this.crc32=f.readInt(4),this.compressedSize=f.readInt(4),this.uncompressedSize=f.readInt(4);var v=f.readInt(2);if(this.extraFieldsLength=f.readInt(2),this.fileCommentLength=f.readInt(2),this.diskNumberStart=f.readInt(2),this.internalFileAttributes=f.readInt(2),this.externalFileAttributes=f.readInt(4),this.localHeaderOffset=f.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");f.skip(v),this.readExtraFields(f),this.parseZIP64ExtraField(f),this.fileComment=f.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var f=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),f==0&&(this.dosPermissions=63&this.externalFileAttributes),f==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var f=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=f.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=f.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=f.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=f.readInt(4))}},readExtraFields:function(f){var v,g,p,h=f.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});f.index+4<h;)v=f.readInt(2),g=f.readInt(2),p=f.readData(g),this.extraFields[v]={id:v,length:g,value:p};f.setIndex(h)},handleUTF8:function(){var f=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=u.utf8decode(this.fileName),this.fileCommentStr=u.utf8decode(this.fileComment);else{var v=this.findExtraFieldUnicodePath();if(v!==null)this.fileNameStr=v;else{var g=o.transformTo(f,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(g)}var p=this.findExtraFieldUnicodeComment();if(p!==null)this.fileCommentStr=p;else{var h=o.transformTo(f,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(h)}}},findExtraFieldUnicodePath:function(){var f=this.extraFields[28789];if(f){var v=s(f.value);return v.readInt(1)!==1||l(this.fileName)!==v.readInt(4)?null:u.utf8decode(v.readData(f.length-5))}return null},findExtraFieldUnicodeComment:function(){var f=this.extraFields[25461];if(f){var v=s(f.value);return v.readInt(1)!==1||l(this.fileComment)!==v.readInt(4)?null:u.utf8decode(v.readData(f.length-5))}return null}},i.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,i,r){function s(v,g,p){this.name=v,this.dir=p.dir,this.date=p.date,this.comment=p.comment,this.unixPermissions=p.unixPermissions,this.dosPermissions=p.dosPermissions,this._data=g,this._dataBinary=p.binary,this.options={compression:p.compression,compressionOptions:p.compressionOptions}}var o=t("./stream/StreamHelper"),a=t("./stream/DataWorker"),l=t("./utf8"),u=t("./compressedObject"),c=t("./stream/GenericWorker");s.prototype={internalStream:function(v){var g=null,p="string";try{if(!v)throw new Error("No output type specified.");var h=(p=v.toLowerCase())==="string"||p==="text";p!=="binarystring"&&p!=="text"||(p="string"),g=this._decompressWorker();var b=!this._dataBinary;b&&!h&&(g=g.pipe(new l.Utf8EncodeWorker)),!b&&h&&(g=g.pipe(new l.Utf8DecodeWorker))}catch(_){(g=new c("error")).error(_)}return new o(g,p,"")},async:function(v,g){return this.internalStream(v).accumulate(g)},nodeStream:function(v,g){return this.internalStream(v||"nodebuffer").toNodejsStream(g)},_compressWorker:function(v,g){if(this._data instanceof u&&this._data.compression.magic===v.magic)return this._data.getCompressedWorker();var p=this._decompressWorker();return this._dataBinary||(p=p.pipe(new l.Utf8EncodeWorker)),u.createWorkerFrom(p,v,g)},_decompressWorker:function(){return this._data instanceof u?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},f=0;f<d.length;f++)s.prototype[d[f]]=m;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,i,r){(function(s){var o,a,l=s.MutationObserver||s.WebKitMutationObserver;if(l){var u=0,c=new l(v),d=s.document.createTextNode("");c.observe(d,{characterData:!0}),o=function(){d.data=u=++u%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var g=s.document.createElement("script");g.onreadystatechange=function(){v(),g.onreadystatechange=null,g.parentNode.removeChild(g),g=null},s.document.documentElement.appendChild(g)}:function(){setTimeout(v,0)};else{var m=new s.MessageChannel;m.port1.onmessage=v,o=function(){m.port2.postMessage(0)}}var f=[];function v(){var g,p;a=!0;for(var h=f.length;h;){for(p=f,f=[],g=-1;++g<h;)p[g]();h=f.length}a=!1}i.exports=function(g){f.push(g)!==1||a||o()}}).call(this,typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,i,r){var s=t("immediate");function o(){}var a={},l=["REJECTED"],u=["FULFILLED"],c=["PENDING"];function d(h){if(typeof h!="function")throw new TypeError("resolver must be a function");this.state=c,this.queue=[],this.outcome=void 0,h!==o&&g(this,h)}function m(h,b,_){this.promise=h,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function f(h,b,_){s(function(){var E;try{E=b(_)}catch(I){return a.reject(h,I)}E===h?a.reject(h,new TypeError("Cannot resolve promise with itself")):a.resolve(h,E)})}function v(h){var b=h&&h.then;if(h&&(typeof h=="object"||typeof h=="function")&&typeof b=="function")return function(){b.apply(h,arguments)}}function g(h,b){var _=!1;function E(A){_||(_=!0,a.reject(h,A))}function I(A){_||(_=!0,a.resolve(h,A))}var D=p(function(){b(I,E)});D.status==="error"&&E(D.value)}function p(h,b){var _={};try{_.value=h(b),_.status="success"}catch(E){_.status="error",_.value=E}return _}(i.exports=d).prototype.finally=function(h){if(typeof h!="function")return this;var b=this.constructor;return this.then(function(_){return b.resolve(h()).then(function(){return _})},function(_){return b.resolve(h()).then(function(){throw _})})},d.prototype.catch=function(h){return this.then(null,h)},d.prototype.then=function(h,b){if(typeof h!="function"&&this.state===u||typeof b!="function"&&this.state===l)return this;var _=new this.constructor(o);return this.state!==c?f(_,this.state===u?h:b,this.outcome):this.queue.push(new m(_,h,b)),_},m.prototype.callFulfilled=function(h){a.resolve(this.promise,h)},m.prototype.otherCallFulfilled=function(h){f(this.promise,this.onFulfilled,h)},m.prototype.callRejected=function(h){a.reject(this.promise,h)},m.prototype.otherCallRejected=function(h){f(this.promise,this.onRejected,h)},a.resolve=function(h,b){var _=p(v,b);if(_.status==="error")return a.reject(h,_.value);var E=_.value;if(E)g(h,E);else{h.state=u,h.outcome=b;for(var I=-1,D=h.queue.length;++I<D;)h.queue[I].callFulfilled(b)}return h},a.reject=function(h,b){h.state=l,h.outcome=b;for(var _=-1,E=h.queue.length;++_<E;)h.queue[_].callRejected(b);return h},d.resolve=function(h){return h instanceof this?h:a.resolve(new this(o),h)},d.reject=function(h){var b=new this(o);return a.reject(b,h)},d.all=function(h){var b=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,E=!1;if(!_)return this.resolve([]);for(var I=new Array(_),D=0,A=-1,U=new this(o);++A<_;)w(h[A],A);return U;function w(M,F){b.resolve(M).then(function(C){I[F]=C,++D!==_||E||(E=!0,a.resolve(U,I))},function(C){E||(E=!0,a.reject(U,C))})}},d.race=function(h){var b=this;if(Object.prototype.toString.call(h)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=h.length,E=!1;if(!_)return this.resolve([]);for(var I=-1,D=new this(o);++I<_;)A=h[I],b.resolve(A).then(function(U){E||(E=!0,a.resolve(D,U))},function(U){E||(E=!0,a.reject(D,U))});var A;return D}},{immediate:36}],38:[function(t,i,r){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,i,r){var s=t("./zlib/deflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/messages"),u=t("./zlib/zstream"),c=Object.prototype.toString,d=0,m=-1,f=0,v=8;function g(h){if(!(this instanceof g))return new g(h);this.options=o.assign({level:m,method:v,chunkSize:16384,windowBits:15,memLevel:8,strategy:f,to:""},h||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var _=s.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(_!==d)throw new Error(l[_]);if(b.header&&s.deflateSetHeader(this.strm,b.header),b.dictionary){var E;if(E=typeof b.dictionary=="string"?a.string2buf(b.dictionary):c.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(_=s.deflateSetDictionary(this.strm,E))!==d)throw new Error(l[_]);this._dict_set=!0}}function p(h,b){var _=new g(b);if(_.push(h,!0),_.err)throw _.msg||l[_.err];return _.result}g.prototype.push=function(h,b){var _,E,I=this.strm,D=this.options.chunkSize;if(this.ended)return!1;E=b===~~b?b:b===!0?4:0,typeof h=="string"?I.input=a.string2buf(h):c.call(h)==="[object ArrayBuffer]"?I.input=new Uint8Array(h):I.input=h,I.next_in=0,I.avail_in=I.input.length;do{if(I.avail_out===0&&(I.output=new o.Buf8(D),I.next_out=0,I.avail_out=D),(_=s.deflate(I,E))!==1&&_!==d)return this.onEnd(_),!(this.ended=!0);I.avail_out!==0&&(I.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(I.output,I.next_out))):this.onData(o.shrinkBuf(I.output,I.next_out)))}while((0<I.avail_in||I.avail_out===0)&&_!==1);return E===4?(_=s.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===d):E!==2||(this.onEnd(d),!(I.avail_out=0))},g.prototype.onData=function(h){this.chunks.push(h)},g.prototype.onEnd=function(h){h===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},r.Deflate=g,r.deflate=p,r.deflateRaw=function(h,b){return(b=b||{}).raw=!0,p(h,b)},r.gzip=function(h,b){return(b=b||{}).gzip=!0,p(h,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,i,r){var s=t("./zlib/inflate"),o=t("./utils/common"),a=t("./utils/strings"),l=t("./zlib/constants"),u=t("./zlib/messages"),c=t("./zlib/zstream"),d=t("./zlib/gzheader"),m=Object.prototype.toString;function f(g){if(!(this instanceof f))return new f(g);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},g||{});var p=this.options;p.raw&&0<=p.windowBits&&p.windowBits<16&&(p.windowBits=-p.windowBits,p.windowBits===0&&(p.windowBits=-15)),!(0<=p.windowBits&&p.windowBits<16)||g&&g.windowBits||(p.windowBits+=32),15<p.windowBits&&p.windowBits<48&&!(15&p.windowBits)&&(p.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var h=s.inflateInit2(this.strm,p.windowBits);if(h!==l.Z_OK)throw new Error(u[h]);this.header=new d,s.inflateGetHeader(this.strm,this.header)}function v(g,p){var h=new f(p);if(h.push(g,!0),h.err)throw h.msg||u[h.err];return h.result}f.prototype.push=function(g,p){var h,b,_,E,I,D,A=this.strm,U=this.options.chunkSize,w=this.options.dictionary,M=!1;if(this.ended)return!1;b=p===~~p?p:p===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof g=="string"?A.input=a.binstring2buf(g):m.call(g)==="[object ArrayBuffer]"?A.input=new Uint8Array(g):A.input=g,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new o.Buf8(U),A.next_out=0,A.avail_out=U),(h=s.inflate(A,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&w&&(D=typeof w=="string"?a.string2buf(w):m.call(w)==="[object ArrayBuffer]"?new Uint8Array(w):w,h=s.inflateSetDictionary(this.strm,D)),h===l.Z_BUF_ERROR&&M===!0&&(h=l.Z_OK,M=!1),h!==l.Z_STREAM_END&&h!==l.Z_OK)return this.onEnd(h),!(this.ended=!0);A.next_out&&(A.avail_out!==0&&h!==l.Z_STREAM_END&&(A.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=a.utf8border(A.output,A.next_out),E=A.next_out-_,I=a.buf2string(A.output,_),A.next_out=E,A.avail_out=U-E,E&&o.arraySet(A.output,A.output,_,E,0),this.onData(I)):this.onData(o.shrinkBuf(A.output,A.next_out)))),A.avail_in===0&&A.avail_out===0&&(M=!0)}while((0<A.avail_in||A.avail_out===0)&&h!==l.Z_STREAM_END);return h===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(h=s.inflateEnd(this.strm),this.onEnd(h),this.ended=!0,h===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(A.avail_out=0))},f.prototype.onData=function(g){this.chunks.push(g)},f.prototype.onEnd=function(g){g===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=g,this.msg=this.strm.msg},r.Inflate=f,r.inflate=v,r.inflateRaw=function(g,p){return(p=p||{}).raw=!0,v(g,p)},r.ungzip=v},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,i,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(l){for(var u=Array.prototype.slice.call(arguments,1);u.length;){var c=u.shift();if(c){if(typeof c!="object")throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(l[d]=c[d])}}return l},r.shrinkBuf=function(l,u){return l.length===u?l:l.subarray?l.subarray(0,u):(l.length=u,l)};var o={arraySet:function(l,u,c,d,m){if(u.subarray&&l.subarray)l.set(u.subarray(c,c+d),m);else for(var f=0;f<d;f++)l[m+f]=u[c+f]},flattenChunks:function(l){var u,c,d,m,f,v;for(u=d=0,c=l.length;u<c;u++)d+=l[u].length;for(v=new Uint8Array(d),u=m=0,c=l.length;u<c;u++)f=l[u],v.set(f,m),m+=f.length;return v}},a={arraySet:function(l,u,c,d,m){for(var f=0;f<d;f++)l[m+f]=u[c+f]},flattenChunks:function(l){return[].concat.apply([],l)}};r.setTyped=function(l){l?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,o)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(t,i,r){var s=t("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var l=new s.Buf8(256),u=0;u<256;u++)l[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;function c(d,m){if(m<65537&&(d.subarray&&a||!d.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(d,m));for(var f="",v=0;v<m;v++)f+=String.fromCharCode(d[v]);return f}l[254]=l[254]=1,r.string2buf=function(d){var m,f,v,g,p,h=d.length,b=0;for(g=0;g<h;g++)(64512&(f=d.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=d.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(v-56320),g++),b+=f<128?1:f<2048?2:f<65536?3:4;for(m=new s.Buf8(b),g=p=0;p<b;g++)(64512&(f=d.charCodeAt(g)))==55296&&g+1<h&&(64512&(v=d.charCodeAt(g+1)))==56320&&(f=65536+(f-55296<<10)+(v-56320),g++),f<128?m[p++]=f:(f<2048?m[p++]=192|f>>>6:(f<65536?m[p++]=224|f>>>12:(m[p++]=240|f>>>18,m[p++]=128|f>>>12&63),m[p++]=128|f>>>6&63),m[p++]=128|63&f);return m},r.buf2binstring=function(d){return c(d,d.length)},r.binstring2buf=function(d){for(var m=new s.Buf8(d.length),f=0,v=m.length;f<v;f++)m[f]=d.charCodeAt(f);return m},r.buf2string=function(d,m){var f,v,g,p,h=m||d.length,b=new Array(2*h);for(f=v=0;f<h;)if((g=d[f++])<128)b[v++]=g;else if(4<(p=l[g]))b[v++]=65533,f+=p-1;else{for(g&=p===2?31:p===3?15:7;1<p&&f<h;)g=g<<6|63&d[f++],p--;1<p?b[v++]=65533:g<65536?b[v++]=g:(g-=65536,b[v++]=55296|g>>10&1023,b[v++]=56320|1023&g)}return c(b,v)},r.utf8border=function(d,m){var f;for((m=m||d.length)>d.length&&(m=d.length),f=m-1;0<=f&&(192&d[f])==128;)f--;return f<0||f===0?m:f+l[d[f]]>m?f:m}},{"./common":41}],43:[function(t,i,r){i.exports=function(s,o,a,l){for(var u=65535&s|0,c=s>>>16&65535|0,d=0;a!==0;){for(a-=d=2e3<a?2e3:a;c=c+(u=u+o[l++]|0)|0,--d;);u%=65521,c%=65521}return u|c<<16|0}},{}],44:[function(t,i,r){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,i,r){var s=function(){for(var o,a=[],l=0;l<256;l++){o=l;for(var u=0;u<8;u++)o=1&o?3988292384^o>>>1:o>>>1;a[l]=o}return a}();i.exports=function(o,a,l,u){var c=s,d=u+l;o^=-1;for(var m=u;m<d;m++)o=o>>>8^c[255&(o^a[m])];return-1^o}},{}],46:[function(t,i,r){var s,o=t("../utils/common"),a=t("./trees"),l=t("./adler32"),u=t("./crc32"),c=t("./messages"),d=0,m=4,f=0,v=-2,g=-1,p=4,h=2,b=8,_=9,E=286,I=30,D=19,A=2*E+1,U=15,w=3,M=258,F=M+w+1,C=42,O=113,y=1,k=2,Q=3,Y=4;function ee(x,re){return x.msg=c[re],re}function ne(x){return(x<<1)-(4<x?9:0)}function ae(x){for(var re=x.length;0<=--re;)x[re]=0}function V(x){var re=x.state,G=re.pending;G>x.avail_out&&(G=x.avail_out),G!==0&&(o.arraySet(x.output,re.pending_buf,re.pending_out,G,x.next_out),x.next_out+=G,re.pending_out+=G,x.total_out+=G,x.avail_out-=G,re.pending-=G,re.pending===0&&(re.pending_out=0))}function $(x,re){a._tr_flush_block(x,0<=x.block_start?x.block_start:-1,x.strstart-x.block_start,re),x.block_start=x.strstart,V(x.strm)}function be(x,re){x.pending_buf[x.pending++]=re}function q(x,re){x.pending_buf[x.pending++]=re>>>8&255,x.pending_buf[x.pending++]=255&re}function J(x,re){var G,N,R=x.max_chain_length,z=x.strstart,T=x.prev_length,S=x.nice_match,L=x.strstart>x.w_size-F?x.strstart-(x.w_size-F):0,j=x.window,te=x.w_mask,H=x.prev,ue=x.strstart+M,ce=j[z+T-1],he=j[z+T];x.prev_length>=x.good_match&&(R>>=2),S>x.lookahead&&(S=x.lookahead);do if(j[(G=re)+T]===he&&j[G+T-1]===ce&&j[G]===j[z]&&j[++G]===j[z+1]){z+=2,G++;do;while(j[++z]===j[++G]&&j[++z]===j[++G]&&j[++z]===j[++G]&&j[++z]===j[++G]&&j[++z]===j[++G]&&j[++z]===j[++G]&&j[++z]===j[++G]&&j[++z]===j[++G]&&z<ue);if(N=M-(ue-z),z=ue-M,T<N){if(x.match_start=re,S<=(T=N))break;ce=j[z+T-1],he=j[z+T]}}while((re=H[re&te])>L&&--R!=0);return T<=x.lookahead?T:x.lookahead}function ge(x){var re,G,N,R,z,T,S,L,j,te,H=x.w_size;do{if(R=x.window_size-x.lookahead-x.strstart,x.strstart>=H+(H-F)){for(o.arraySet(x.window,x.window,H,H,0),x.match_start-=H,x.strstart-=H,x.block_start-=H,re=G=x.hash_size;N=x.head[--re],x.head[re]=H<=N?N-H:0,--G;);for(re=G=H;N=x.prev[--re],x.prev[re]=H<=N?N-H:0,--G;);R+=H}if(x.strm.avail_in===0)break;if(T=x.strm,S=x.window,L=x.strstart+x.lookahead,j=R,te=void 0,te=T.avail_in,j<te&&(te=j),G=te===0?0:(T.avail_in-=te,o.arraySet(S,T.input,T.next_in,te,L),T.state.wrap===1?T.adler=l(T.adler,S,te,L):T.state.wrap===2&&(T.adler=u(T.adler,S,te,L)),T.next_in+=te,T.total_in+=te,te),x.lookahead+=G,x.lookahead+x.insert>=w)for(z=x.strstart-x.insert,x.ins_h=x.window[z],x.ins_h=(x.ins_h<<x.hash_shift^x.window[z+1])&x.hash_mask;x.insert&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[z+w-1])&x.hash_mask,x.prev[z&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=z,z++,x.insert--,!(x.lookahead+x.insert<w)););}while(x.lookahead<F&&x.strm.avail_in!==0)}function _e(x,re){for(var G,N;;){if(x.lookahead<F){if(ge(x),x.lookahead<F&&re===d)return y;if(x.lookahead===0)break}if(G=0,x.lookahead>=w&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+w-1])&x.hash_mask,G=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),G!==0&&x.strstart-G<=x.w_size-F&&(x.match_length=J(x,G)),x.match_length>=w)if(N=a._tr_tally(x,x.strstart-x.match_start,x.match_length-w),x.lookahead-=x.match_length,x.match_length<=x.max_lazy_match&&x.lookahead>=w){for(x.match_length--;x.strstart++,x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+w-1])&x.hash_mask,G=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart,--x.match_length!=0;);x.strstart++}else x.strstart+=x.match_length,x.match_length=0,x.ins_h=x.window[x.strstart],x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+1])&x.hash_mask;else N=a._tr_tally(x,0,x.window[x.strstart]),x.lookahead--,x.strstart++;if(N&&($(x,!1),x.strm.avail_out===0))return y}return x.insert=x.strstart<w-1?x.strstart:w-1,re===m?($(x,!0),x.strm.avail_out===0?Q:Y):x.last_lit&&($(x,!1),x.strm.avail_out===0)?y:k}function ye(x,re){for(var G,N,R;;){if(x.lookahead<F){if(ge(x),x.lookahead<F&&re===d)return y;if(x.lookahead===0)break}if(G=0,x.lookahead>=w&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+w-1])&x.hash_mask,G=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),x.prev_length=x.match_length,x.prev_match=x.match_start,x.match_length=w-1,G!==0&&x.prev_length<x.max_lazy_match&&x.strstart-G<=x.w_size-F&&(x.match_length=J(x,G),x.match_length<=5&&(x.strategy===1||x.match_length===w&&4096<x.strstart-x.match_start)&&(x.match_length=w-1)),x.prev_length>=w&&x.match_length<=x.prev_length){for(R=x.strstart+x.lookahead-w,N=a._tr_tally(x,x.strstart-1-x.prev_match,x.prev_length-w),x.lookahead-=x.prev_length-1,x.prev_length-=2;++x.strstart<=R&&(x.ins_h=(x.ins_h<<x.hash_shift^x.window[x.strstart+w-1])&x.hash_mask,G=x.prev[x.strstart&x.w_mask]=x.head[x.ins_h],x.head[x.ins_h]=x.strstart),--x.prev_length!=0;);if(x.match_available=0,x.match_length=w-1,x.strstart++,N&&($(x,!1),x.strm.avail_out===0))return y}else if(x.match_available){if((N=a._tr_tally(x,0,x.window[x.strstart-1]))&&$(x,!1),x.strstart++,x.lookahead--,x.strm.avail_out===0)return y}else x.match_available=1,x.strstart++,x.lookahead--}return x.match_available&&(N=a._tr_tally(x,0,x.window[x.strstart-1]),x.match_available=0),x.insert=x.strstart<w-1?x.strstart:w-1,re===m?($(x,!0),x.strm.avail_out===0?Q:Y):x.last_lit&&($(x,!1),x.strm.avail_out===0)?y:k}function Ee(x,re,G,N,R){this.good_length=x,this.max_lazy=re,this.nice_length=G,this.max_chain=N,this.func=R}function Re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*A),this.dyn_dtree=new o.Buf16(2*(2*I+1)),this.bl_tree=new o.Buf16(2*(2*D+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(U+1),this.heap=new o.Buf16(2*E+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ze(x){var re;return x&&x.state?(x.total_in=x.total_out=0,x.data_type=h,(re=x.state).pending=0,re.pending_out=0,re.wrap<0&&(re.wrap=-re.wrap),re.status=re.wrap?C:O,x.adler=re.wrap===2?0:1,re.last_flush=d,a._tr_init(re),f):ee(x,v)}function B(x){var re=ze(x);return re===f&&function(G){G.window_size=2*G.w_size,ae(G.head),G.max_lazy_match=s[G.level].max_lazy,G.good_match=s[G.level].good_length,G.nice_match=s[G.level].nice_length,G.max_chain_length=s[G.level].max_chain,G.strstart=0,G.block_start=0,G.lookahead=0,G.insert=0,G.match_length=G.prev_length=w-1,G.match_available=0,G.ins_h=0}(x.state),re}function Xe(x,re,G,N,R,z){if(!x)return v;var T=1;if(re===g&&(re=6),N<0?(T=0,N=-N):15<N&&(T=2,N-=16),R<1||_<R||G!==b||N<8||15<N||re<0||9<re||z<0||p<z)return ee(x,v);N===8&&(N=9);var S=new Re;return(x.state=S).strm=x,S.wrap=T,S.gzhead=null,S.w_bits=N,S.w_size=1<<S.w_bits,S.w_mask=S.w_size-1,S.hash_bits=R+7,S.hash_size=1<<S.hash_bits,S.hash_mask=S.hash_size-1,S.hash_shift=~~((S.hash_bits+w-1)/w),S.window=new o.Buf8(2*S.w_size),S.head=new o.Buf16(S.hash_size),S.prev=new o.Buf16(S.w_size),S.lit_bufsize=1<<R+6,S.pending_buf_size=4*S.lit_bufsize,S.pending_buf=new o.Buf8(S.pending_buf_size),S.d_buf=1*S.lit_bufsize,S.l_buf=3*S.lit_bufsize,S.level=re,S.strategy=z,S.method=G,B(x)}s=[new Ee(0,0,0,0,function(x,re){var G=65535;for(G>x.pending_buf_size-5&&(G=x.pending_buf_size-5);;){if(x.lookahead<=1){if(ge(x),x.lookahead===0&&re===d)return y;if(x.lookahead===0)break}x.strstart+=x.lookahead,x.lookahead=0;var N=x.block_start+G;if((x.strstart===0||x.strstart>=N)&&(x.lookahead=x.strstart-N,x.strstart=N,$(x,!1),x.strm.avail_out===0)||x.strstart-x.block_start>=x.w_size-F&&($(x,!1),x.strm.avail_out===0))return y}return x.insert=0,re===m?($(x,!0),x.strm.avail_out===0?Q:Y):(x.strstart>x.block_start&&($(x,!1),x.strm.avail_out),y)}),new Ee(4,4,8,4,_e),new Ee(4,5,16,8,_e),new Ee(4,6,32,32,_e),new Ee(4,4,16,16,ye),new Ee(8,16,32,32,ye),new Ee(8,16,128,128,ye),new Ee(8,32,128,256,ye),new Ee(32,128,258,1024,ye),new Ee(32,258,258,4096,ye)],r.deflateInit=function(x,re){return Xe(x,re,b,15,8,0)},r.deflateInit2=Xe,r.deflateReset=B,r.deflateResetKeep=ze,r.deflateSetHeader=function(x,re){return x&&x.state?x.state.wrap!==2?v:(x.state.gzhead=re,f):v},r.deflate=function(x,re){var G,N,R,z;if(!x||!x.state||5<re||re<0)return x?ee(x,v):v;if(N=x.state,!x.output||!x.input&&x.avail_in!==0||N.status===666&&re!==m)return ee(x,x.avail_out===0?-5:v);if(N.strm=x,G=N.last_flush,N.last_flush=re,N.status===C)if(N.wrap===2)x.adler=0,be(N,31),be(N,139),be(N,8),N.gzhead?(be(N,(N.gzhead.text?1:0)+(N.gzhead.hcrc?2:0)+(N.gzhead.extra?4:0)+(N.gzhead.name?8:0)+(N.gzhead.comment?16:0)),be(N,255&N.gzhead.time),be(N,N.gzhead.time>>8&255),be(N,N.gzhead.time>>16&255),be(N,N.gzhead.time>>24&255),be(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),be(N,255&N.gzhead.os),N.gzhead.extra&&N.gzhead.extra.length&&(be(N,255&N.gzhead.extra.length),be(N,N.gzhead.extra.length>>8&255)),N.gzhead.hcrc&&(x.adler=u(x.adler,N.pending_buf,N.pending,0)),N.gzindex=0,N.status=69):(be(N,0),be(N,0),be(N,0),be(N,0),be(N,0),be(N,N.level===9?2:2<=N.strategy||N.level<2?4:0),be(N,3),N.status=O);else{var T=b+(N.w_bits-8<<4)<<8;T|=(2<=N.strategy||N.level<2?0:N.level<6?1:N.level===6?2:3)<<6,N.strstart!==0&&(T|=32),T+=31-T%31,N.status=O,q(N,T),N.strstart!==0&&(q(N,x.adler>>>16),q(N,65535&x.adler)),x.adler=1}if(N.status===69)if(N.gzhead.extra){for(R=N.pending;N.gzindex<(65535&N.gzhead.extra.length)&&(N.pending!==N.pending_buf_size||(N.gzhead.hcrc&&N.pending>R&&(x.adler=u(x.adler,N.pending_buf,N.pending-R,R)),V(x),R=N.pending,N.pending!==N.pending_buf_size));)be(N,255&N.gzhead.extra[N.gzindex]),N.gzindex++;N.gzhead.hcrc&&N.pending>R&&(x.adler=u(x.adler,N.pending_buf,N.pending-R,R)),N.gzindex===N.gzhead.extra.length&&(N.gzindex=0,N.status=73)}else N.status=73;if(N.status===73)if(N.gzhead.name){R=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>R&&(x.adler=u(x.adler,N.pending_buf,N.pending-R,R)),V(x),R=N.pending,N.pending===N.pending_buf_size)){z=1;break}z=N.gzindex<N.gzhead.name.length?255&N.gzhead.name.charCodeAt(N.gzindex++):0,be(N,z)}while(z!==0);N.gzhead.hcrc&&N.pending>R&&(x.adler=u(x.adler,N.pending_buf,N.pending-R,R)),z===0&&(N.gzindex=0,N.status=91)}else N.status=91;if(N.status===91)if(N.gzhead.comment){R=N.pending;do{if(N.pending===N.pending_buf_size&&(N.gzhead.hcrc&&N.pending>R&&(x.adler=u(x.adler,N.pending_buf,N.pending-R,R)),V(x),R=N.pending,N.pending===N.pending_buf_size)){z=1;break}z=N.gzindex<N.gzhead.comment.length?255&N.gzhead.comment.charCodeAt(N.gzindex++):0,be(N,z)}while(z!==0);N.gzhead.hcrc&&N.pending>R&&(x.adler=u(x.adler,N.pending_buf,N.pending-R,R)),z===0&&(N.status=103)}else N.status=103;if(N.status===103&&(N.gzhead.hcrc?(N.pending+2>N.pending_buf_size&&V(x),N.pending+2<=N.pending_buf_size&&(be(N,255&x.adler),be(N,x.adler>>8&255),x.adler=0,N.status=O)):N.status=O),N.pending!==0){if(V(x),x.avail_out===0)return N.last_flush=-1,f}else if(x.avail_in===0&&ne(re)<=ne(G)&&re!==m)return ee(x,-5);if(N.status===666&&x.avail_in!==0)return ee(x,-5);if(x.avail_in!==0||N.lookahead!==0||re!==d&&N.status!==666){var S=N.strategy===2?function(L,j){for(var te;;){if(L.lookahead===0&&(ge(L),L.lookahead===0)){if(j===d)return y;break}if(L.match_length=0,te=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++,te&&($(L,!1),L.strm.avail_out===0))return y}return L.insert=0,j===m?($(L,!0),L.strm.avail_out===0?Q:Y):L.last_lit&&($(L,!1),L.strm.avail_out===0)?y:k}(N,re):N.strategy===3?function(L,j){for(var te,H,ue,ce,he=L.window;;){if(L.lookahead<=M){if(ge(L),L.lookahead<=M&&j===d)return y;if(L.lookahead===0)break}if(L.match_length=0,L.lookahead>=w&&0<L.strstart&&(H=he[ue=L.strstart-1])===he[++ue]&&H===he[++ue]&&H===he[++ue]){ce=L.strstart+M;do;while(H===he[++ue]&&H===he[++ue]&&H===he[++ue]&&H===he[++ue]&&H===he[++ue]&&H===he[++ue]&&H===he[++ue]&&H===he[++ue]&&ue<ce);L.match_length=M-(ce-ue),L.match_length>L.lookahead&&(L.match_length=L.lookahead)}if(L.match_length>=w?(te=a._tr_tally(L,1,L.match_length-w),L.lookahead-=L.match_length,L.strstart+=L.match_length,L.match_length=0):(te=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++),te&&($(L,!1),L.strm.avail_out===0))return y}return L.insert=0,j===m?($(L,!0),L.strm.avail_out===0?Q:Y):L.last_lit&&($(L,!1),L.strm.avail_out===0)?y:k}(N,re):s[N.level].func(N,re);if(S!==Q&&S!==Y||(N.status=666),S===y||S===Q)return x.avail_out===0&&(N.last_flush=-1),f;if(S===k&&(re===1?a._tr_align(N):re!==5&&(a._tr_stored_block(N,0,0,!1),re===3&&(ae(N.head),N.lookahead===0&&(N.strstart=0,N.block_start=0,N.insert=0))),V(x),x.avail_out===0))return N.last_flush=-1,f}return re!==m?f:N.wrap<=0?1:(N.wrap===2?(be(N,255&x.adler),be(N,x.adler>>8&255),be(N,x.adler>>16&255),be(N,x.adler>>24&255),be(N,255&x.total_in),be(N,x.total_in>>8&255),be(N,x.total_in>>16&255),be(N,x.total_in>>24&255)):(q(N,x.adler>>>16),q(N,65535&x.adler)),V(x),0<N.wrap&&(N.wrap=-N.wrap),N.pending!==0?f:1)},r.deflateEnd=function(x){var re;return x&&x.state?(re=x.state.status)!==C&&re!==69&&re!==73&&re!==91&&re!==103&&re!==O&&re!==666?ee(x,v):(x.state=null,re===O?ee(x,-3):f):v},r.deflateSetDictionary=function(x,re){var G,N,R,z,T,S,L,j,te=re.length;if(!x||!x.state||(z=(G=x.state).wrap)===2||z===1&&G.status!==C||G.lookahead)return v;for(z===1&&(x.adler=l(x.adler,re,te,0)),G.wrap=0,te>=G.w_size&&(z===0&&(ae(G.head),G.strstart=0,G.block_start=0,G.insert=0),j=new o.Buf8(G.w_size),o.arraySet(j,re,te-G.w_size,G.w_size,0),re=j,te=G.w_size),T=x.avail_in,S=x.next_in,L=x.input,x.avail_in=te,x.next_in=0,x.input=re,ge(G);G.lookahead>=w;){for(N=G.strstart,R=G.lookahead-(w-1);G.ins_h=(G.ins_h<<G.hash_shift^G.window[N+w-1])&G.hash_mask,G.prev[N&G.w_mask]=G.head[G.ins_h],G.head[G.ins_h]=N,N++,--R;);G.strstart=N,G.lookahead=w-1,ge(G)}return G.strstart+=G.lookahead,G.block_start=G.strstart,G.insert=G.lookahead,G.lookahead=0,G.match_length=G.prev_length=w-1,G.match_available=0,x.next_in=S,x.input=L,x.avail_in=T,G.wrap=z,f},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,i,r){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,i,r){i.exports=function(s,o){var a,l,u,c,d,m,f,v,g,p,h,b,_,E,I,D,A,U,w,M,F,C,O,y,k;a=s.state,l=s.next_in,y=s.input,u=l+(s.avail_in-5),c=s.next_out,k=s.output,d=c-(o-s.avail_out),m=c+(s.avail_out-257),f=a.dmax,v=a.wsize,g=a.whave,p=a.wnext,h=a.window,b=a.hold,_=a.bits,E=a.lencode,I=a.distcode,D=(1<<a.lenbits)-1,A=(1<<a.distbits)-1;e:do{_<15&&(b+=y[l++]<<_,_+=8,b+=y[l++]<<_,_+=8),U=E[b&D];t:for(;;){if(b>>>=w=U>>>24,_-=w,(w=U>>>16&255)===0)k[c++]=65535&U;else{if(!(16&w)){if(!(64&w)){U=E[(65535&U)+(b&(1<<w)-1)];continue t}if(32&w){a.mode=12;break e}s.msg="invalid literal/length code",a.mode=30;break e}M=65535&U,(w&=15)&&(_<w&&(b+=y[l++]<<_,_+=8),M+=b&(1<<w)-1,b>>>=w,_-=w),_<15&&(b+=y[l++]<<_,_+=8,b+=y[l++]<<_,_+=8),U=I[b&A];n:for(;;){if(b>>>=w=U>>>24,_-=w,!(16&(w=U>>>16&255))){if(!(64&w)){U=I[(65535&U)+(b&(1<<w)-1)];continue n}s.msg="invalid distance code",a.mode=30;break e}if(F=65535&U,_<(w&=15)&&(b+=y[l++]<<_,(_+=8)<w&&(b+=y[l++]<<_,_+=8)),f<(F+=b&(1<<w)-1)){s.msg="invalid distance too far back",a.mode=30;break e}if(b>>>=w,_-=w,(w=c-d)<F){if(g<(w=F-w)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break e}if(O=h,(C=0)===p){if(C+=v-w,w<M){for(M-=w;k[c++]=h[C++],--w;);C=c-F,O=k}}else if(p<w){if(C+=v+p-w,(w-=p)<M){for(M-=w;k[c++]=h[C++],--w;);if(C=0,p<M){for(M-=w=p;k[c++]=h[C++],--w;);C=c-F,O=k}}}else if(C+=p-w,w<M){for(M-=w;k[c++]=h[C++],--w;);C=c-F,O=k}for(;2<M;)k[c++]=O[C++],k[c++]=O[C++],k[c++]=O[C++],M-=3;M&&(k[c++]=O[C++],1<M&&(k[c++]=O[C++]))}else{for(C=c-F;k[c++]=k[C++],k[c++]=k[C++],k[c++]=k[C++],2<(M-=3););M&&(k[c++]=k[C++],1<M&&(k[c++]=k[C++]))}break}}break}}while(l<u&&c<m);l-=M=_>>3,b&=(1<<(_-=M<<3))-1,s.next_in=l,s.next_out=c,s.avail_in=l<u?u-l+5:5-(l-u),s.avail_out=c<m?m-c+257:257-(c-m),a.hold=b,a.bits=_}},{}],49:[function(t,i,r){var s=t("../utils/common"),o=t("./adler32"),a=t("./crc32"),l=t("./inffast"),u=t("./inftrees"),c=1,d=2,m=0,f=-2,v=1,g=852,p=592;function h(C){return(C>>>24&255)+(C>>>8&65280)+((65280&C)<<8)+((255&C)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(C){var O;return C&&C.state?(O=C.state,C.total_in=C.total_out=O.total=0,C.msg="",O.wrap&&(C.adler=1&O.wrap),O.mode=v,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new s.Buf32(g),O.distcode=O.distdyn=new s.Buf32(p),O.sane=1,O.back=-1,m):f}function E(C){var O;return C&&C.state?((O=C.state).wsize=0,O.whave=0,O.wnext=0,_(C)):f}function I(C,O){var y,k;return C&&C.state?(k=C.state,O<0?(y=0,O=-O):(y=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?f:(k.window!==null&&k.wbits!==O&&(k.window=null),k.wrap=y,k.wbits=O,E(C))):f}function D(C,O){var y,k;return C?(k=new b,(C.state=k).window=null,(y=I(C,O))!==m&&(C.state=null),y):f}var A,U,w=!0;function M(C){if(w){var O;for(A=new s.Buf32(512),U=new s.Buf32(32),O=0;O<144;)C.lens[O++]=8;for(;O<256;)C.lens[O++]=9;for(;O<280;)C.lens[O++]=7;for(;O<288;)C.lens[O++]=8;for(u(c,C.lens,0,288,A,0,C.work,{bits:9}),O=0;O<32;)C.lens[O++]=5;u(d,C.lens,0,32,U,0,C.work,{bits:5}),w=!1}C.lencode=A,C.lenbits=9,C.distcode=U,C.distbits=5}function F(C,O,y,k){var Q,Y=C.state;return Y.window===null&&(Y.wsize=1<<Y.wbits,Y.wnext=0,Y.whave=0,Y.window=new s.Buf8(Y.wsize)),k>=Y.wsize?(s.arraySet(Y.window,O,y-Y.wsize,Y.wsize,0),Y.wnext=0,Y.whave=Y.wsize):(k<(Q=Y.wsize-Y.wnext)&&(Q=k),s.arraySet(Y.window,O,y-k,Q,Y.wnext),(k-=Q)?(s.arraySet(Y.window,O,y-k,k,0),Y.wnext=k,Y.whave=Y.wsize):(Y.wnext+=Q,Y.wnext===Y.wsize&&(Y.wnext=0),Y.whave<Y.wsize&&(Y.whave+=Q))),0}r.inflateReset=E,r.inflateReset2=I,r.inflateResetKeep=_,r.inflateInit=function(C){return D(C,15)},r.inflateInit2=D,r.inflate=function(C,O){var y,k,Q,Y,ee,ne,ae,V,$,be,q,J,ge,_e,ye,Ee,Re,ze,B,Xe,x,re,G,N,R=0,z=new s.Buf8(4),T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!C||!C.state||!C.output||!C.input&&C.avail_in!==0)return f;(y=C.state).mode===12&&(y.mode=13),ee=C.next_out,Q=C.output,ae=C.avail_out,Y=C.next_in,k=C.input,ne=C.avail_in,V=y.hold,$=y.bits,be=ne,q=ae,re=m;e:for(;;)switch(y.mode){case v:if(y.wrap===0){y.mode=13;break}for(;$<16;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(2&y.wrap&&V===35615){z[y.check=0]=255&V,z[1]=V>>>8&255,y.check=a(y.check,z,2,0),$=V=0,y.mode=2;break}if(y.flags=0,y.head&&(y.head.done=!1),!(1&y.wrap)||(((255&V)<<8)+(V>>8))%31){C.msg="incorrect header check",y.mode=30;break}if((15&V)!=8){C.msg="unknown compression method",y.mode=30;break}if($-=4,x=8+(15&(V>>>=4)),y.wbits===0)y.wbits=x;else if(x>y.wbits){C.msg="invalid window size",y.mode=30;break}y.dmax=1<<x,C.adler=y.check=1,y.mode=512&V?10:12,$=V=0;break;case 2:for(;$<16;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(y.flags=V,(255&y.flags)!=8){C.msg="unknown compression method",y.mode=30;break}if(57344&y.flags){C.msg="unknown header flags set",y.mode=30;break}y.head&&(y.head.text=V>>8&1),512&y.flags&&(z[0]=255&V,z[1]=V>>>8&255,y.check=a(y.check,z,2,0)),$=V=0,y.mode=3;case 3:for(;$<32;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}y.head&&(y.head.time=V),512&y.flags&&(z[0]=255&V,z[1]=V>>>8&255,z[2]=V>>>16&255,z[3]=V>>>24&255,y.check=a(y.check,z,4,0)),$=V=0,y.mode=4;case 4:for(;$<16;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}y.head&&(y.head.xflags=255&V,y.head.os=V>>8),512&y.flags&&(z[0]=255&V,z[1]=V>>>8&255,y.check=a(y.check,z,2,0)),$=V=0,y.mode=5;case 5:if(1024&y.flags){for(;$<16;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}y.length=V,y.head&&(y.head.extra_len=V),512&y.flags&&(z[0]=255&V,z[1]=V>>>8&255,y.check=a(y.check,z,2,0)),$=V=0}else y.head&&(y.head.extra=null);y.mode=6;case 6:if(1024&y.flags&&(ne<(J=y.length)&&(J=ne),J&&(y.head&&(x=y.head.extra_len-y.length,y.head.extra||(y.head.extra=new Array(y.head.extra_len)),s.arraySet(y.head.extra,k,Y,J,x)),512&y.flags&&(y.check=a(y.check,k,J,Y)),ne-=J,Y+=J,y.length-=J),y.length))break e;y.length=0,y.mode=7;case 7:if(2048&y.flags){if(ne===0)break e;for(J=0;x=k[Y+J++],y.head&&x&&y.length<65536&&(y.head.name+=String.fromCharCode(x)),x&&J<ne;);if(512&y.flags&&(y.check=a(y.check,k,J,Y)),ne-=J,Y+=J,x)break e}else y.head&&(y.head.name=null);y.length=0,y.mode=8;case 8:if(4096&y.flags){if(ne===0)break e;for(J=0;x=k[Y+J++],y.head&&x&&y.length<65536&&(y.head.comment+=String.fromCharCode(x)),x&&J<ne;);if(512&y.flags&&(y.check=a(y.check,k,J,Y)),ne-=J,Y+=J,x)break e}else y.head&&(y.head.comment=null);y.mode=9;case 9:if(512&y.flags){for(;$<16;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(V!==(65535&y.check)){C.msg="header crc mismatch",y.mode=30;break}$=V=0}y.head&&(y.head.hcrc=y.flags>>9&1,y.head.done=!0),C.adler=y.check=0,y.mode=12;break;case 10:for(;$<32;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}C.adler=y.check=h(V),$=V=0,y.mode=11;case 11:if(y.havedict===0)return C.next_out=ee,C.avail_out=ae,C.next_in=Y,C.avail_in=ne,y.hold=V,y.bits=$,2;C.adler=y.check=1,y.mode=12;case 12:if(O===5||O===6)break e;case 13:if(y.last){V>>>=7&$,$-=7&$,y.mode=27;break}for(;$<3;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}switch(y.last=1&V,$-=1,3&(V>>>=1)){case 0:y.mode=14;break;case 1:if(M(y),y.mode=20,O!==6)break;V>>>=2,$-=2;break e;case 2:y.mode=17;break;case 3:C.msg="invalid block type",y.mode=30}V>>>=2,$-=2;break;case 14:for(V>>>=7&$,$-=7&$;$<32;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if((65535&V)!=(V>>>16^65535)){C.msg="invalid stored block lengths",y.mode=30;break}if(y.length=65535&V,$=V=0,y.mode=15,O===6)break e;case 15:y.mode=16;case 16:if(J=y.length){if(ne<J&&(J=ne),ae<J&&(J=ae),J===0)break e;s.arraySet(Q,k,Y,J,ee),ne-=J,Y+=J,ae-=J,ee+=J,y.length-=J;break}y.mode=12;break;case 17:for(;$<14;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(y.nlen=257+(31&V),V>>>=5,$-=5,y.ndist=1+(31&V),V>>>=5,$-=5,y.ncode=4+(15&V),V>>>=4,$-=4,286<y.nlen||30<y.ndist){C.msg="too many length or distance symbols",y.mode=30;break}y.have=0,y.mode=18;case 18:for(;y.have<y.ncode;){for(;$<3;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}y.lens[T[y.have++]]=7&V,V>>>=3,$-=3}for(;y.have<19;)y.lens[T[y.have++]]=0;if(y.lencode=y.lendyn,y.lenbits=7,G={bits:y.lenbits},re=u(0,y.lens,0,19,y.lencode,0,y.work,G),y.lenbits=G.bits,re){C.msg="invalid code lengths set",y.mode=30;break}y.have=0,y.mode=19;case 19:for(;y.have<y.nlen+y.ndist;){for(;Ee=(R=y.lencode[V&(1<<y.lenbits)-1])>>>16&255,Re=65535&R,!((ye=R>>>24)<=$);){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(Re<16)V>>>=ye,$-=ye,y.lens[y.have++]=Re;else{if(Re===16){for(N=ye+2;$<N;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(V>>>=ye,$-=ye,y.have===0){C.msg="invalid bit length repeat",y.mode=30;break}x=y.lens[y.have-1],J=3+(3&V),V>>>=2,$-=2}else if(Re===17){for(N=ye+3;$<N;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}$-=ye,x=0,J=3+(7&(V>>>=ye)),V>>>=3,$-=3}else{for(N=ye+7;$<N;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}$-=ye,x=0,J=11+(127&(V>>>=ye)),V>>>=7,$-=7}if(y.have+J>y.nlen+y.ndist){C.msg="invalid bit length repeat",y.mode=30;break}for(;J--;)y.lens[y.have++]=x}}if(y.mode===30)break;if(y.lens[256]===0){C.msg="invalid code -- missing end-of-block",y.mode=30;break}if(y.lenbits=9,G={bits:y.lenbits},re=u(c,y.lens,0,y.nlen,y.lencode,0,y.work,G),y.lenbits=G.bits,re){C.msg="invalid literal/lengths set",y.mode=30;break}if(y.distbits=6,y.distcode=y.distdyn,G={bits:y.distbits},re=u(d,y.lens,y.nlen,y.ndist,y.distcode,0,y.work,G),y.distbits=G.bits,re){C.msg="invalid distances set",y.mode=30;break}if(y.mode=20,O===6)break e;case 20:y.mode=21;case 21:if(6<=ne&&258<=ae){C.next_out=ee,C.avail_out=ae,C.next_in=Y,C.avail_in=ne,y.hold=V,y.bits=$,l(C,q),ee=C.next_out,Q=C.output,ae=C.avail_out,Y=C.next_in,k=C.input,ne=C.avail_in,V=y.hold,$=y.bits,y.mode===12&&(y.back=-1);break}for(y.back=0;Ee=(R=y.lencode[V&(1<<y.lenbits)-1])>>>16&255,Re=65535&R,!((ye=R>>>24)<=$);){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(Ee&&!(240&Ee)){for(ze=ye,B=Ee,Xe=Re;Ee=(R=y.lencode[Xe+((V&(1<<ze+B)-1)>>ze)])>>>16&255,Re=65535&R,!(ze+(ye=R>>>24)<=$);){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}V>>>=ze,$-=ze,y.back+=ze}if(V>>>=ye,$-=ye,y.back+=ye,y.length=Re,Ee===0){y.mode=26;break}if(32&Ee){y.back=-1,y.mode=12;break}if(64&Ee){C.msg="invalid literal/length code",y.mode=30;break}y.extra=15&Ee,y.mode=22;case 22:if(y.extra){for(N=y.extra;$<N;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}y.length+=V&(1<<y.extra)-1,V>>>=y.extra,$-=y.extra,y.back+=y.extra}y.was=y.length,y.mode=23;case 23:for(;Ee=(R=y.distcode[V&(1<<y.distbits)-1])>>>16&255,Re=65535&R,!((ye=R>>>24)<=$);){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(!(240&Ee)){for(ze=ye,B=Ee,Xe=Re;Ee=(R=y.distcode[Xe+((V&(1<<ze+B)-1)>>ze)])>>>16&255,Re=65535&R,!(ze+(ye=R>>>24)<=$);){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}V>>>=ze,$-=ze,y.back+=ze}if(V>>>=ye,$-=ye,y.back+=ye,64&Ee){C.msg="invalid distance code",y.mode=30;break}y.offset=Re,y.extra=15&Ee,y.mode=24;case 24:if(y.extra){for(N=y.extra;$<N;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}y.offset+=V&(1<<y.extra)-1,V>>>=y.extra,$-=y.extra,y.back+=y.extra}if(y.offset>y.dmax){C.msg="invalid distance too far back",y.mode=30;break}y.mode=25;case 25:if(ae===0)break e;if(J=q-ae,y.offset>J){if((J=y.offset-J)>y.whave&&y.sane){C.msg="invalid distance too far back",y.mode=30;break}ge=J>y.wnext?(J-=y.wnext,y.wsize-J):y.wnext-J,J>y.length&&(J=y.length),_e=y.window}else _e=Q,ge=ee-y.offset,J=y.length;for(ae<J&&(J=ae),ae-=J,y.length-=J;Q[ee++]=_e[ge++],--J;);y.length===0&&(y.mode=21);break;case 26:if(ae===0)break e;Q[ee++]=y.length,ae--,y.mode=21;break;case 27:if(y.wrap){for(;$<32;){if(ne===0)break e;ne--,V|=k[Y++]<<$,$+=8}if(q-=ae,C.total_out+=q,y.total+=q,q&&(C.adler=y.check=y.flags?a(y.check,Q,q,ee-q):o(y.check,Q,q,ee-q)),q=ae,(y.flags?V:h(V))!==y.check){C.msg="incorrect data check",y.mode=30;break}$=V=0}y.mode=28;case 28:if(y.wrap&&y.flags){for(;$<32;){if(ne===0)break e;ne--,V+=k[Y++]<<$,$+=8}if(V!==(4294967295&y.total)){C.msg="incorrect length check",y.mode=30;break}$=V=0}y.mode=29;case 29:re=1;break e;case 30:re=-3;break e;case 31:return-4;case 32:default:return f}return C.next_out=ee,C.avail_out=ae,C.next_in=Y,C.avail_in=ne,y.hold=V,y.bits=$,(y.wsize||q!==C.avail_out&&y.mode<30&&(y.mode<27||O!==4))&&F(C,C.output,C.next_out,q-C.avail_out)?(y.mode=31,-4):(be-=C.avail_in,q-=C.avail_out,C.total_in+=be,C.total_out+=q,y.total+=q,y.wrap&&q&&(C.adler=y.check=y.flags?a(y.check,Q,q,C.next_out-q):o(y.check,Q,q,C.next_out-q)),C.data_type=y.bits+(y.last?64:0)+(y.mode===12?128:0)+(y.mode===20||y.mode===15?256:0),(be==0&&q===0||O===4)&&re===m&&(re=-5),re)},r.inflateEnd=function(C){if(!C||!C.state)return f;var O=C.state;return O.window&&(O.window=null),C.state=null,m},r.inflateGetHeader=function(C,O){var y;return C&&C.state&&2&(y=C.state).wrap?((y.head=O).done=!1,m):f},r.inflateSetDictionary=function(C,O){var y,k=O.length;return C&&C.state?(y=C.state).wrap!==0&&y.mode!==11?f:y.mode===11&&o(1,O,k,0)!==y.check?-3:F(C,O,k,k)?(y.mode=31,-4):(y.havedict=1,m):f},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,i,r){var s=t("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],u=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(c,d,m,f,v,g,p,h){var b,_,E,I,D,A,U,w,M,F=h.bits,C=0,O=0,y=0,k=0,Q=0,Y=0,ee=0,ne=0,ae=0,V=0,$=null,be=0,q=new s.Buf16(16),J=new s.Buf16(16),ge=null,_e=0;for(C=0;C<=15;C++)q[C]=0;for(O=0;O<f;O++)q[d[m+O]]++;for(Q=F,k=15;1<=k&&q[k]===0;k--);if(k<Q&&(Q=k),k===0)return v[g++]=20971520,v[g++]=20971520,h.bits=1,0;for(y=1;y<k&&q[y]===0;y++);for(Q<y&&(Q=y),C=ne=1;C<=15;C++)if(ne<<=1,(ne-=q[C])<0)return-1;if(0<ne&&(c===0||k!==1))return-1;for(J[1]=0,C=1;C<15;C++)J[C+1]=J[C]+q[C];for(O=0;O<f;O++)d[m+O]!==0&&(p[J[d[m+O]]++]=O);if(A=c===0?($=ge=p,19):c===1?($=o,be-=257,ge=a,_e-=257,256):($=l,ge=u,-1),C=y,D=g,ee=O=V=0,E=-1,I=(ae=1<<(Y=Q))-1,c===1&&852<ae||c===2&&592<ae)return 1;for(;;){for(U=C-ee,M=p[O]<A?(w=0,p[O]):p[O]>A?(w=ge[_e+p[O]],$[be+p[O]]):(w=96,0),b=1<<C-ee,y=_=1<<Y;v[D+(V>>ee)+(_-=b)]=U<<24|w<<16|M|0,_!==0;);for(b=1<<C-1;V&b;)b>>=1;if(b!==0?(V&=b-1,V+=b):V=0,O++,--q[C]==0){if(C===k)break;C=d[m+p[O]]}if(Q<C&&(V&I)!==E){for(ee===0&&(ee=Q),D+=y,ne=1<<(Y=C-ee);Y+ee<k&&!((ne-=q[Y+ee])<=0);)Y++,ne<<=1;if(ae+=1<<Y,c===1&&852<ae||c===2&&592<ae)return 1;v[E=V&I]=Q<<24|Y<<16|D-g|0}}return V!==0&&(v[D+V]=C-ee<<24|64<<16|0),h.bits=Q,0}},{"../utils/common":41}],51:[function(t,i,r){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,i,r){var s=t("../utils/common"),o=0,a=1;function l(R){for(var z=R.length;0<=--z;)R[z]=0}var u=0,c=29,d=256,m=d+1+c,f=30,v=19,g=2*m+1,p=15,h=16,b=7,_=256,E=16,I=17,D=18,A=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],U=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],w=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],M=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],F=new Array(2*(m+2));l(F);var C=new Array(2*f);l(C);var O=new Array(512);l(O);var y=new Array(256);l(y);var k=new Array(c);l(k);var Q,Y,ee,ne=new Array(f);function ae(R,z,T,S,L){this.static_tree=R,this.extra_bits=z,this.extra_base=T,this.elems=S,this.max_length=L,this.has_stree=R&&R.length}function V(R,z){this.dyn_tree=R,this.max_code=0,this.stat_desc=z}function $(R){return R<256?O[R]:O[256+(R>>>7)]}function be(R,z){R.pending_buf[R.pending++]=255&z,R.pending_buf[R.pending++]=z>>>8&255}function q(R,z,T){R.bi_valid>h-T?(R.bi_buf|=z<<R.bi_valid&65535,be(R,R.bi_buf),R.bi_buf=z>>h-R.bi_valid,R.bi_valid+=T-h):(R.bi_buf|=z<<R.bi_valid&65535,R.bi_valid+=T)}function J(R,z,T){q(R,T[2*z],T[2*z+1])}function ge(R,z){for(var T=0;T|=1&R,R>>>=1,T<<=1,0<--z;);return T>>>1}function _e(R,z,T){var S,L,j=new Array(p+1),te=0;for(S=1;S<=p;S++)j[S]=te=te+T[S-1]<<1;for(L=0;L<=z;L++){var H=R[2*L+1];H!==0&&(R[2*L]=ge(j[H]++,H))}}function ye(R){var z;for(z=0;z<m;z++)R.dyn_ltree[2*z]=0;for(z=0;z<f;z++)R.dyn_dtree[2*z]=0;for(z=0;z<v;z++)R.bl_tree[2*z]=0;R.dyn_ltree[2*_]=1,R.opt_len=R.static_len=0,R.last_lit=R.matches=0}function Ee(R){8<R.bi_valid?be(R,R.bi_buf):0<R.bi_valid&&(R.pending_buf[R.pending++]=R.bi_buf),R.bi_buf=0,R.bi_valid=0}function Re(R,z,T,S){var L=2*z,j=2*T;return R[L]<R[j]||R[L]===R[j]&&S[z]<=S[T]}function ze(R,z,T){for(var S=R.heap[T],L=T<<1;L<=R.heap_len&&(L<R.heap_len&&Re(z,R.heap[L+1],R.heap[L],R.depth)&&L++,!Re(z,S,R.heap[L],R.depth));)R.heap[T]=R.heap[L],T=L,L<<=1;R.heap[T]=S}function B(R,z,T){var S,L,j,te,H=0;if(R.last_lit!==0)for(;S=R.pending_buf[R.d_buf+2*H]<<8|R.pending_buf[R.d_buf+2*H+1],L=R.pending_buf[R.l_buf+H],H++,S===0?J(R,L,z):(J(R,(j=y[L])+d+1,z),(te=A[j])!==0&&q(R,L-=k[j],te),J(R,j=$(--S),T),(te=U[j])!==0&&q(R,S-=ne[j],te)),H<R.last_lit;);J(R,_,z)}function Xe(R,z){var T,S,L,j=z.dyn_tree,te=z.stat_desc.static_tree,H=z.stat_desc.has_stree,ue=z.stat_desc.elems,ce=-1;for(R.heap_len=0,R.heap_max=g,T=0;T<ue;T++)j[2*T]!==0?(R.heap[++R.heap_len]=ce=T,R.depth[T]=0):j[2*T+1]=0;for(;R.heap_len<2;)j[2*(L=R.heap[++R.heap_len]=ce<2?++ce:0)]=1,R.depth[L]=0,R.opt_len--,H&&(R.static_len-=te[2*L+1]);for(z.max_code=ce,T=R.heap_len>>1;1<=T;T--)ze(R,j,T);for(L=ue;T=R.heap[1],R.heap[1]=R.heap[R.heap_len--],ze(R,j,1),S=R.heap[1],R.heap[--R.heap_max]=T,R.heap[--R.heap_max]=S,j[2*L]=j[2*T]+j[2*S],R.depth[L]=(R.depth[T]>=R.depth[S]?R.depth[T]:R.depth[S])+1,j[2*T+1]=j[2*S+1]=L,R.heap[1]=L++,ze(R,j,1),2<=R.heap_len;);R.heap[--R.heap_max]=R.heap[1],function(he,Ie){var de,xe,ke,Te,Me,Ue,Oe=Ie.dyn_tree,Qe=Ie.max_code,X=Ie.stat_desc.static_tree,pe=Ie.stat_desc.has_stree,oe=Ie.stat_desc.extra_bits,le=Ie.stat_desc.extra_base,me=Ie.stat_desc.max_length,Le=0;for(Te=0;Te<=p;Te++)he.bl_count[Te]=0;for(Oe[2*he.heap[he.heap_max]+1]=0,de=he.heap_max+1;de<g;de++)me<(Te=Oe[2*Oe[2*(xe=he.heap[de])+1]+1]+1)&&(Te=me,Le++),Oe[2*xe+1]=Te,Qe<xe||(he.bl_count[Te]++,Me=0,le<=xe&&(Me=oe[xe-le]),Ue=Oe[2*xe],he.opt_len+=Ue*(Te+Me),pe&&(he.static_len+=Ue*(X[2*xe+1]+Me)));if(Le!==0){do{for(Te=me-1;he.bl_count[Te]===0;)Te--;he.bl_count[Te]--,he.bl_count[Te+1]+=2,he.bl_count[me]--,Le-=2}while(0<Le);for(Te=me;Te!==0;Te--)for(xe=he.bl_count[Te];xe!==0;)Qe<(ke=he.heap[--de])||(Oe[2*ke+1]!==Te&&(he.opt_len+=(Te-Oe[2*ke+1])*Oe[2*ke],Oe[2*ke+1]=Te),xe--)}}(R,z),_e(j,ce,R.bl_count)}function x(R,z,T){var S,L,j=-1,te=z[1],H=0,ue=7,ce=4;for(te===0&&(ue=138,ce=3),z[2*(T+1)+1]=65535,S=0;S<=T;S++)L=te,te=z[2*(S+1)+1],++H<ue&&L===te||(H<ce?R.bl_tree[2*L]+=H:L!==0?(L!==j&&R.bl_tree[2*L]++,R.bl_tree[2*E]++):H<=10?R.bl_tree[2*I]++:R.bl_tree[2*D]++,j=L,ce=(H=0)===te?(ue=138,3):L===te?(ue=6,3):(ue=7,4))}function re(R,z,T){var S,L,j=-1,te=z[1],H=0,ue=7,ce=4;for(te===0&&(ue=138,ce=3),S=0;S<=T;S++)if(L=te,te=z[2*(S+1)+1],!(++H<ue&&L===te)){if(H<ce)for(;J(R,L,R.bl_tree),--H!=0;);else L!==0?(L!==j&&(J(R,L,R.bl_tree),H--),J(R,E,R.bl_tree),q(R,H-3,2)):H<=10?(J(R,I,R.bl_tree),q(R,H-3,3)):(J(R,D,R.bl_tree),q(R,H-11,7));j=L,ce=(H=0)===te?(ue=138,3):L===te?(ue=6,3):(ue=7,4)}}l(ne);var G=!1;function N(R,z,T,S){q(R,(u<<1)+(S?1:0),3),function(L,j,te,H){Ee(L),be(L,te),be(L,~te),s.arraySet(L.pending_buf,L.window,j,te,L.pending),L.pending+=te}(R,z,T)}r._tr_init=function(R){G||(function(){var z,T,S,L,j,te=new Array(p+1);for(L=S=0;L<c-1;L++)for(k[L]=S,z=0;z<1<<A[L];z++)y[S++]=L;for(y[S-1]=L,L=j=0;L<16;L++)for(ne[L]=j,z=0;z<1<<U[L];z++)O[j++]=L;for(j>>=7;L<f;L++)for(ne[L]=j<<7,z=0;z<1<<U[L]-7;z++)O[256+j++]=L;for(T=0;T<=p;T++)te[T]=0;for(z=0;z<=143;)F[2*z+1]=8,z++,te[8]++;for(;z<=255;)F[2*z+1]=9,z++,te[9]++;for(;z<=279;)F[2*z+1]=7,z++,te[7]++;for(;z<=287;)F[2*z+1]=8,z++,te[8]++;for(_e(F,m+1,te),z=0;z<f;z++)C[2*z+1]=5,C[2*z]=ge(z,5);Q=new ae(F,A,d+1,m,p),Y=new ae(C,U,0,f,p),ee=new ae(new Array(0),w,0,v,b)}(),G=!0),R.l_desc=new V(R.dyn_ltree,Q),R.d_desc=new V(R.dyn_dtree,Y),R.bl_desc=new V(R.bl_tree,ee),R.bi_buf=0,R.bi_valid=0,ye(R)},r._tr_stored_block=N,r._tr_flush_block=function(R,z,T,S){var L,j,te=0;0<R.level?(R.strm.data_type===2&&(R.strm.data_type=function(H){var ue,ce=4093624447;for(ue=0;ue<=31;ue++,ce>>>=1)if(1&ce&&H.dyn_ltree[2*ue]!==0)return o;if(H.dyn_ltree[18]!==0||H.dyn_ltree[20]!==0||H.dyn_ltree[26]!==0)return a;for(ue=32;ue<d;ue++)if(H.dyn_ltree[2*ue]!==0)return a;return o}(R)),Xe(R,R.l_desc),Xe(R,R.d_desc),te=function(H){var ue;for(x(H,H.dyn_ltree,H.l_desc.max_code),x(H,H.dyn_dtree,H.d_desc.max_code),Xe(H,H.bl_desc),ue=v-1;3<=ue&&H.bl_tree[2*M[ue]+1]===0;ue--);return H.opt_len+=3*(ue+1)+5+5+4,ue}(R),L=R.opt_len+3+7>>>3,(j=R.static_len+3+7>>>3)<=L&&(L=j)):L=j=T+5,T+4<=L&&z!==-1?N(R,z,T,S):R.strategy===4||j===L?(q(R,2+(S?1:0),3),B(R,F,C)):(q(R,4+(S?1:0),3),function(H,ue,ce,he){var Ie;for(q(H,ue-257,5),q(H,ce-1,5),q(H,he-4,4),Ie=0;Ie<he;Ie++)q(H,H.bl_tree[2*M[Ie]+1],3);re(H,H.dyn_ltree,ue-1),re(H,H.dyn_dtree,ce-1)}(R,R.l_desc.max_code+1,R.d_desc.max_code+1,te+1),B(R,R.dyn_ltree,R.dyn_dtree)),ye(R),S&&Ee(R)},r._tr_tally=function(R,z,T){return R.pending_buf[R.d_buf+2*R.last_lit]=z>>>8&255,R.pending_buf[R.d_buf+2*R.last_lit+1]=255&z,R.pending_buf[R.l_buf+R.last_lit]=255&T,R.last_lit++,z===0?R.dyn_ltree[2*T]++:(R.matches++,z--,R.dyn_ltree[2*(y[T]+d+1)]++,R.dyn_dtree[2*$(z)]++),R.last_lit===R.lit_bufsize-1},r._tr_align=function(R){q(R,2,3),J(R,_,F),function(z){z.bi_valid===16?(be(z,z.bi_buf),z.bi_buf=0,z.bi_valid=0):8<=z.bi_valid&&(z.pending_buf[z.pending++]=255&z.bi_buf,z.bi_buf>>=8,z.bi_valid-=8)}(R)}},{"../utils/common":41}],53:[function(t,i,r){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,i,r){(function(s){(function(o,a){if(!o.setImmediate){var l,u,c,d,m=1,f={},v=!1,g=o.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(o);p=p&&p.setTimeout?p:o,l={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){b(E)})}:function(){if(o.postMessage&&!o.importScripts){var E=!0,I=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=I,E}}()?(d="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",_,!1):o.attachEvent("onmessage",_),function(E){o.postMessage(d+E,"*")}):o.MessageChannel?((c=new MessageChannel).port1.onmessage=function(E){b(E.data)},function(E){c.port2.postMessage(E)}):g&&"onreadystatechange"in g.createElement("script")?(u=g.documentElement,function(E){var I=g.createElement("script");I.onreadystatechange=function(){b(E),I.onreadystatechange=null,u.removeChild(I),I=null},u.appendChild(I)}):function(E){setTimeout(b,0,E)},p.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var I=new Array(arguments.length-1),D=0;D<I.length;D++)I[D]=arguments[D+1];var A={callback:E,args:I};return f[m]=A,l(m),m++},p.clearImmediate=h}function h(E){delete f[E]}function b(E){if(v)setTimeout(b,0,E);else{var I=f[E];if(I){v=!0;try{(function(D){var A=D.callback,U=D.args;switch(U.length){case 0:A();break;case 1:A(U[0]);break;case 2:A(U[0],U[1]);break;case 3:A(U[0],U[1],U[2]);break;default:A.apply(a,U)}})(I)}finally{h(E),v=!1}}}}function _(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(d)===0&&b(+E.data.slice(d.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof xs<"u"?xs:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Xh);var G_=Xh.exports;const H_=V_(G_);var Es=function(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t},hn=function(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)},Us,rr,Fs,fn;function W_(n){return`\x1B[33m${n}\x1B[39m`}function j_(n){return`\x1B[31m${n}\x1B[39m`}function Lu(n){return`\x1B[2m${n}\x1B[22m`}var ct;(function(n){n[n.NONE=0]="NONE",n[n.ERROR=1]="ERROR",n[n.WARN=2]="WARN",n[n.INFO=3]="INFO",n[n.DEBUG=4]="DEBUG",n[n.TRACE=5]="TRACE"})(ct||(ct={}));class po{constructor(){rr.set(this,ct.INFO),Fs.set(this,(e,t)=>`${Us.LogPrefixes.get(t)} ${Lu(">")} [${Lu(e.join("::"))}]`),fn.set(this,"script")}set logLevel(e){Es(this,rr,e,"f"),this.tInfo(["logger","logLevel"],`Log level set to ${Us.LogPrefixes.get(e)}`)}get logLevel(){return hn(this,rr,"f")}set tagPrint(e){Es(this,Fs,e,"f"),this.tInfo(["logger","tagPrint"],"Update tag print function")}get tagPrint(){return hn(this,Fs,"f")}set untagged(e){Es(this,fn,e.trim(),"f"),this.tInfo(["logger","untagged"],`Update untagged string to ${hn(this,fn,"f")}`)}get untagged(){return hn(this,fn,"f")}log(e,t,i){if(e>hn(this,rr,"f"))return;const r=this.tagPrint(t,e);switch(e){case ct.TRACE:return r?console.trace(r,...i):console.trace(...i);case ct.DEBUG:return r?console.debug(r,...i):console.debug(...i);case ct.INFO:return r?console.info(r,...i):console.info(...i);case ct.WARN:return r?console.warn(r,...i):console.warn(...i);case ct.ERROR:return r?console.error(r,...i):console.error(...i);default:return r?console.log(r,...i):console.log(...i)}}setLevel(e){e=Math.min(Math.max(e,0),5),Es(this,rr,e,"f"),this.tInfo(["logger","setLevel"],`Log level set to ${Us.LogPrefixes.get(e)}`)}tTrace(e,...t){this.log(ct.TRACE,e,t)}tDebug(e,...t){this.log(ct.DEBUG,e,t)}tInfo(e,...t){this.log(ct.INFO,e,t)}tWarn(e,...t){this.log(ct.WARN,e,t)}tError(e,...t){this.log(ct.ERROR,e,t)}trace(...e){this.tTrace([hn(this,fn,"f")],...e)}debug(...e){this.tDebug([hn(this,fn,"f")],...e)}info(...e){this.tInfo([hn(this,fn,"f")],...e)}warn(...e){this.tWarn([hn(this,fn,"f")],...e)}error(...e){this.tError([hn(this,fn,"f")],...e)}}Us=po,rr=new WeakMap,Fs=new WeakMap,fn=new WeakMap;Object.defineProperty(po,"LogLevels",{enumerable:!0,configurable:!0,writable:!0,value:ct});Object.defineProperty(po,"LogPrefixes",{enumerable:!0,configurable:!0,writable:!0,value:new Map([[ct.TRACE,"TRACE"],[ct.DEBUG,"DEBUG"],[ct.INFO,"INFO"],[ct.WARN,W_("WARN")],[ct.ERROR,j_("!!ERROR!!")],[ct.NONE,"NONE"]])});let Vn=new po;X_(Math.random());function X_(n){n=n.toString();let e=0;for(let t=0;t<n.length;t++)e=(e<<5)-e+n.charCodeAt(t),e|=0;return e}function Y_(n,e,t){return e+(t-e)*n}function q_(n,e,t){return(n-e)/(t-e)}function Yh(n,e,t,i,r){const s=q_(n,e,t);return Y_(s,i,r)}function ft(n){return n==null||typeof n!="object"?n:Array.isArray(n)?[...n]:{...n}}function fe(n){if(n==null||typeof n!="object")return n;const e=Array.isArray(n)?Array(n.length):{};for(const t in n)e[t]=fe(n[t]);return e}function $_(n){return/^[a-fA-F0-9]+$/g.test(n)}function Jn(n){return parseInt(n,16)}function ws(n,e,t,i){Array.isArray(n)&&(i=n[3],t=n[2],e=n[1],n=n[0]),n=n,e=e,t=t;let r=0;const s=Math.max(n,e,t),o=Math.min(n,e,t),a=s-o,l=s===0?0:a/s,u=s;switch(s){case o:break;case n:r=e-t+a*(e<t?6:0),r/=6*a;break;case e:r=t-n+a*2,r/=6*a;break;case t:r=n-e+a*4,r/=6*a;break}const c=[r*360,l,u];return typeof i=="number"&&c.push(i),c}function K_(n,e,t,i){Array.isArray(n)&&(i=n[3],t=n[2],e=n[1],n=n[0]),n=n/360,e=e,t=t,n<0&&(n+=Math.abs(Math.floor(n)));let r=0,s=0,o=0;const a=Math.floor(n*6),l=n*6-a,u=t*(1-e),c=t*(1-l*e),d=t*(1-(1-l)*e);switch(a%6){case 0:r=t,s=d,o=u;break;case 1:r=c,s=t,o=u;break;case 2:r=u,s=t,o=d;break;case 3:r=u,s=c,o=t;break;case 4:r=d,s=u,o=t;break;case 5:r=t,s=u,o=c;break}const m=[r,s,o];return typeof i=="number"&&m.push(i),m}function Ms(n){const e=n.toString(16);return e.length===1?"0"+e:e}function Z_(n){return Math.round(n*255)}function On(n){return n/255}function Ht(n,e){if(Array.isArray(n)){const i={r:n[0],g:n[1],b:n[2]};return typeof n[3]=="number"&&(i.a=n[3]),e&&(i.a??=1),i}if(typeof n=="string"||"type"in n)return Ht(fi(n),e);const t={r:n.r,g:n.g,b:n.b};return typeof n.a=="number"&&(t.a=n.a),e&&(t.a??=1),t}function Ln(n){const e=Ht(n);let t=1;for(const i in e)t=Math.max(Math.abs(e[i]),t);for(const i in e)e[i]=Z_(e[i]/t);return`#${Ms(e.r)}${Ms(e.g)}${Ms(e.b)}${typeof e.a=="number"?Ms(e.a):""}`}function rn(n){if(n=n.trim(),n.startsWith("#")&&(n=n.substring(1)),!$_(n))throw new Error("Not valid hexadecimal");let e=[0,0,0];if(n.length===3||n.length===4)e=[On(Jn(n.slice(0,1)+n.slice(0,1))),On(Jn(n.slice(1,2)+n.slice(1,2))),On(Jn(n.slice(2,3)+n.slice(2,3)))],n.length===4&&e.push(On(Jn(n.slice(3,4)+n.slice(3,4))));else if(n.length===6||n.length===8)e=[On(Jn(n.slice(0,2))),On(Jn(n.slice(2,4))),On(Jn(n.slice(4,6)))],n.length===8&&e.push(On(Jn(n.slice(6,8))));else throw new Error("Not valid colour hexadecimal");return e}function ir(n,e="rgba",t="rgba"){if(typeof n=="string"){const i=rn(n);return t==="hsva"?ws(i):i}else if(Array.isArray(n)){if(e==="hsva")return t==="hsva"?[...n]:K_(n);const i=e==="rgba255"?n.map(r=>On(r)):[...n];return t==="hsva"?ws(i):i}else if("type"in n){let i;switch(n.type){case"hsva":i=fi(n.value,"hsva");break;case"rgba":i=fi(n.value,"rgba");break;case"rgba255":i=fi(n.value,"rgba255")}return t==="hsva"?ws(i):i}else{const i=[n.r,n.g,n.b];return typeof n.a=="number"&&i.push(n.a),t==="hsva"?ws(i):i}}function fi(){const n=arguments;if(typeof n[0]=="number"&&typeof n[1]=="number"&&typeof n[2]=="number"){let e=[n[0],n[1],n[2]];return typeof n[3]=="number"&&e.push(n[3]),typeof n[3]=="string"&&(n[3]==="hsva"&&(e=ir(e,"hsva")),n[3]==="rgba255"&&(e=ir(e,"rgba255"))),typeof n[4]=="string"&&(n[4]==="hsva"&&(e=ir(e,"hsva")),n[4]==="rgba255"&&(e=ir(e,"rgba255"))),e}if(typeof n[0]=="number")return typeof n[1]=="boolean"&&n[1]?[n[0]/255,n[0]/255,n[0]/255]:typeof n[1]=="number"?[n[0],n[0],n[0],n[1]]:[n[0],n[0],n[0]];if(typeof n[0]=="string")return rn(n[0]);if(Array.isArray(n[0])){const e=n[0];let t=[e[0],e[1],e[2]];if(!t.every(i=>typeof i=="number"))throw new Error("Unable to parse color; array contain undefined or non-numeric value");return typeof e[3]=="number"&&t.push(e[3]),typeof n[1]=="string"&&(n[1]==="hsva"&&(t=ir(t,"hsva")),n[1]==="rgba255"&&(t=ir(t,"rgba255"))),t}if(typeof n[0]=="object"){const e=n[0];if("type"in e)switch(e.type){case"hsva":return fi(e.value,"hsva");case"rgba":return fi(e.value,"rgba");case"rgba255":return fi(e.value,"rgba255")}if("r"in e&&"g"in e&&"b"in e){const t=[e.r,e.g,e.b];if(!t.every(i=>typeof i=="number"))throw new Error("Unable to parse color; array contain undefined or non-numeric value");return typeof e.a=="number"&&t.push(e.a),t}}throw new Error("Unable to parse color; input is invalid")}class J_{clone(){return new this.constructor(this)}}class Mn extends J_{constructor(){super(...arguments),Object.defineProperty(this,"customData",{enumerable:!0,configurable:!0,writable:!0,value:{}})}setCustomData(e){return this.customData=e,this}resetCustomData(){return this.customData={},this}removeCustomData(e){return typeof e=="string"?delete this.customData[e]:e.forEach(t=>delete this.customData[t]),this}addCustomData(e){for(const t in e)this.customData[t]=e[t];return this}sort(e){return e?.(this),this}perform(e){return e(this),this}isValid(e,t){return e?!!e(this):!0}check(e){return e?!!e(this):!1}}class un extends Mn{constructor(){super(...arguments),Object.defineProperty(this,"time",{enumerable:!0,configurable:!0,writable:!0,value:0})}setTime(e){return this.time=e,this}}var Nu;(function(n){n[n.NONE=-1]="NONE",n[n.RED=0]="RED",n[n.BLUE=1]="BLUE"})(Nu||(Nu={}));var We;(function(n){n[n.UP=0]="UP",n[n.DOWN=1]="DOWN",n[n.LEFT=2]="LEFT",n[n.RIGHT=3]="RIGHT",n[n.UP_LEFT=4]="UP_LEFT",n[n.UP_RIGHT=5]="UP_RIGHT",n[n.DOWN_LEFT=6]="DOWN_LEFT",n[n.DOWN_RIGHT=7]="DOWN_RIGHT",n[n.ANY=8]="ANY"})(We||(We={}));var Ou;(function(n){n[n.LEFT=0]="LEFT",n[n.MIDDLE_LEFT=1]="MIDDLE_LEFT",n[n.MIDDLE_RIGHT=2]="MIDDLE_RIGHT",n[n.RIGHT=3]="RIGHT"})(Ou||(Ou={}));var Uu;(function(n){n[n.BOTTOM=0]="BOTTOM",n[n.MIDDLE=1]="MIDDLE",n[n.TOP=2]="TOP"})(Uu||(Uu={}));var Je;(function(n){n[n.OFF=0]="OFF",n[n.BLUE_ON=1]="BLUE_ON",n[n.BLUE_FLASH=2]="BLUE_FLASH",n[n.BLUE_FADE=3]="BLUE_FADE",n[n.BLUE_TRANSITION=4]="BLUE_TRANSITION",n[n.RED_ON=5]="RED_ON",n[n.RED_FLASH=6]="RED_FLASH",n[n.RED_FADE=7]="RED_FADE",n[n.RED_TRANSITION=8]="RED_TRANSITION",n[n.WHITE_ON=9]="WHITE_ON",n[n.WHITE_FLASH=10]="WHITE_FLASH",n[n.WHITE_FADE=11]="WHITE_FADE",n[n.WHITE_TRANSITION=12]="WHITE_TRANSITION"})(Je||(Je={}));var gt;(function(n){n[n.BACK_LASERS=0]="BACK_LASERS",n[n.RING_LIGHTS=1]="RING_LIGHTS",n[n.LEFT_LASERS=2]="LEFT_LASERS",n[n.RIGHT_LASERS=3]="RIGHT_LASERS",n[n.CENTER_LIGHTS=4]="CENTER_LIGHTS",n[n.COLOR_BOOST=5]="COLOR_BOOST",n[n.EXTRA_LEFT_LIGHTS=6]="EXTRA_LEFT_LIGHTS",n[n.EXTRA_RIGHT_LIGHTS=7]="EXTRA_RIGHT_LIGHTS",n[n.RING_ROTATION=8]="RING_ROTATION",n[n.RING_ZOOM=9]="RING_ZOOM",n[n.EXTRA_LEFT_LASERS=10]="EXTRA_LEFT_LASERS",n[n.EXTRA_RIGHT_LASERS=11]="EXTRA_RIGHT_LASERS",n[n.LEFT_LASER_ROTATION=12]="LEFT_LASER_ROTATION",n[n.RIGHT_LASER_ROTATION=13]="RIGHT_LASER_ROTATION",n[n.EARLY_LANE_ROTATION=14]="EARLY_LANE_ROTATION",n[n.LATE_LANE_ROTATION=15]="LATE_LANE_ROTATION",n[n.UTILITY_EVENT_0=16]="UTILITY_EVENT_0",n[n.UTILITY_EVENT_1=17]="UTILITY_EVENT_1",n[n.UTILITY_EVENT_2=18]="UTILITY_EVENT_2",n[n.UTILITY_EVENT_3=19]="UTILITY_EVENT_3",n[n.SPECIAL_EVENT_0=40]="SPECIAL_EVENT_0",n[n.SPECIAL_EVENT_1=41]="SPECIAL_EVENT_1",n[n.SPECIAL_EVENT_2=42]="SPECIAL_EVENT_2",n[n.SPECIAL_EVENT_3=43]="SPECIAL_EVENT_3",n[n.BPM_CHANGE=100]="BPM_CHANGE",n[n.NJS_CHANGE=1e3]="NJS_CHANGE"})(gt||(gt={}));var Fu;(function(n){n[n.DIVISION=1]="DIVISION",n[n.STEP_AND_OFFSET=2]="STEP_AND_OFFSET"})(Fu||(Fu={}));var Ga;(function(n){n[n.NONE=0]="NONE",n[n.DURATION=1]="DURATION",n[n.DISTRIBUTION=2]="DISTRIBUTION",n[n.ALL=3]="ALL"})(Ga||(Ga={}));var Ha;(function(n){n[n.NO_RANDOM=0]="NO_RANDOM",n[n.KEEP_ORDER=1]="KEEP_ORDER",n[n.RANDOM_ELEMENTS=2]="RANDOM_ELEMENTS",n[n.ALL=3]="ALL"})(Ha||(Ha={}));var Bu;(function(n){n[n.NONE=-1]="NONE",n[n.RED=0]="RED",n[n.BLUE=1]="BLUE",n[n.WHITE=2]="WHITE"})(Bu||(Bu={}));var zu;(function(n){n[n.WAVE=1]="WAVE",n[n.STEP=2]="STEP"})(zu||(zu={}));var Ur;(function(n){n[n.NONE=-1]="NONE",n[n.LINEAR=0]="LINEAR",n[n.IN_QUAD=1]="IN_QUAD",n[n.OUT_QUAD=2]="OUT_QUAD",n[n.INOUT_QUAD=3]="INOUT_QUAD",n[n.IN_SINE=4]="IN_SINE",n[n.OUT_SINE=5]="OUT_SINE",n[n.INOUT_SINE=6]="INOUT_SINE",n[n.IN_CUBIC=7]="IN_CUBIC",n[n.OUT_CUBIC=8]="OUT_CUBIC",n[n.INOUT_CUBIC=9]="INOUT_CUBIC",n[n.IN_QUART=10]="IN_QUART",n[n.OUT_QUART=11]="OUT_QUART",n[n.INOUT_QUART=12]="INOUT_QUART",n[n.IN_QUINT=13]="IN_QUINT",n[n.OUT_QUINT=14]="OUT_QUINT",n[n.INOUT_QUINT=15]="INOUT_QUINT",n[n.IN_EXPO=16]="IN_EXPO",n[n.OUT_EXPO=17]="OUT_EXPO",n[n.INOUT_EXPO=18]="INOUT_EXPO",n[n.IN_CIRC=19]="IN_CIRC",n[n.OUT_CIRC=20]="OUT_CIRC",n[n.INOUT_CIRC=21]="INOUT_CIRC",n[n.IN_BACK=22]="IN_BACK",n[n.OUT_BACK=23]="OUT_BACK",n[n.INOUT_BACK=24]="INOUT_BACK",n[n.IN_ELASTIC=25]="IN_ELASTIC",n[n.OUT_ELASTIC=26]="OUT_ELASTIC",n[n.INOUT_ELASTIC=27]="INOUT_ELASTIC",n[n.IN_BOUNCE=28]="IN_BOUNCE",n[n.OUT_BOUNCE=29]="OUT_BOUNCE",n[n.INOUT_BOUNCE=30]="INOUT_BOUNCE",n[n.BS_INOUT_BACK=100]="BS_INOUT_BACK",n[n.BS_INOUT_ELASTIC=101]="BS_INOUT_ELASTIC",n[n.BS_INOUT_BOUNCE=102]="BS_INOUT_BOUNCE"})(Ur||(Ur={}));var ku;(function(n){n[n.EARLY=0]="EARLY",n[n.LATE=1]="LATE"})(ku||(ku={}));var Pi;(function(n){n[n.INSTANT=0]="INSTANT",n[n.INTERPOLATE=1]="INTERPOLATE",n[n.EXTEND=2]="EXTEND"})(Pi||(Pi={}));var Vu;(function(n){n[n.X=0]="X",n[n.Y=1]="Y",n[n.Z=2]="Z"})(Vu||(Vu={}));var Wa;(function(n){n[n.INT=0]="INT",n[n.FLOAT=1]="FLOAT",n[n.BOOL=2]="BOOL"})(Wa||(Wa={}));var Gu;(function(n){n[n.AUTOMATIC=0]="AUTOMATIC",n[n.CLOCKWISE=1]="CLOCKWISE",n[n.COUNTER_CLOCKWISE=2]="COUNTER_CLOCKWISE"})(Gu||(Gu={}));var Hu;(function(n){n[n.STRAIGHT=0]="STRAIGHT",n[n.CLOCKWISE=1]="CLOCKWISE",n[n.COUNTER_CLOCKWISE=2]="COUNTER_CLOCKWISE"})(Hu||(Hu={}));var yn;(function(n){n[n.NONE=0]="NONE",n[n.COLOR=1]="COLOR",n[n.ROTATION=2]="ROTATION",n[n.TRANSLATION=3]="TRANSLATION",n[n.FX_FLOAT=4]="FX_FLOAT"})(yn||(yn={}));const mo=4,gl={[We.UP]:180,[We.DOWN]:0,[We.LEFT]:270,[We.RIGHT]:90,[We.UP_LEFT]:225,[We.UP_RIGHT]:135,[We.DOWN_LEFT]:315,[We.DOWN_RIGHT]:45,[We.ANY]:0};We.UP+"",We.DOWN,We.DOWN+"",We.UP,We.LEFT+"",We.RIGHT,We.RIGHT+"",We.LEFT,We.UP_LEFT+"",We.DOWN_RIGHT,We.UP_RIGHT+"",We.DOWN_LEFT,We.DOWN_LEFT+"",We.UP_RIGHT,We.DOWN_RIGHT+"",We.UP_LEFT,We.ANY+"",We.ANY;We.UP+"",We.DOWN+"",We.LEFT+"",We.RIGHT+"",We.UP_LEFT+"",We.UP_RIGHT+"",We.DOWN_LEFT+"",We.DOWN_RIGHT+"",We.ANY+"";const qh={0:-60,1:-45,2:-30,3:-15,4:15,5:30,6:45,7:60},$h={"-60":0,"-45":1,"-30":2,"-15":3,15:4,30:5,45:6,60:7};class Un extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"floatValue",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??Un.defaultValue.time,this.type=e.type??Un.defaultValue.type,this.value=e.value??Un.defaultValue.value,this.floatValue=e.floatValue??Un.defaultValue.floatValue,this.customData=fe(e.customData??Un.defaultValue.customData)}isValidType(){return this.type>=0&&this.type<=19||this.type>=40&&this.type<=43||this.type===100}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.isValidType()&&this.value>=0&&!(!this.isLaserRotationEvent()&&this.value>12&&!this.isOldChroma())}setType(e){return this.type=e,this}setValue(e){return this.value=e,this}setFloatValue(e){return this.floatValue=e,this}isOff(){return this.value===Je.OFF}isOn(){return this.value===Je.BLUE_ON||this.value===Je.RED_ON||this.value===Je.WHITE_ON}isFlash(){return this.value===Je.BLUE_FLASH||this.value===Je.RED_FLASH||this.value===Je.WHITE_FLASH}isFade(){return this.value===Je.BLUE_FADE||this.value===Je.RED_FADE||this.value===Je.WHITE_FADE}isTransition(){return this.value===Je.BLUE_TRANSITION||this.value===Je.RED_TRANSITION||this.value===Je.WHITE_TRANSITION}isBlue(){return this.value===Je.BLUE_ON||this.value===Je.BLUE_FLASH||this.value===Je.BLUE_FADE||this.value===Je.BLUE_TRANSITION}isRed(){return this.value===Je.RED_ON||this.value===Je.RED_FLASH||this.value===Je.RED_FADE||this.value===Je.RED_TRANSITION}isWhite(){return this.value===Je.WHITE_ON||this.value===Je.WHITE_FLASH||this.value===Je.WHITE_FADE||this.value===Je.WHITE_TRANSITION}isLightEvent(){return this.type===0||this.type===1||this.type===2||this.type===3||this.type===4||this.type===6||this.type===7||this.type===10||this.type===11}isColorBoost(){return this.type===gt.COLOR_BOOST}isRingEvent(){return this.type===gt.RING_ROTATION||this.type===gt.RING_ZOOM}isLaserRotationEvent(){return this.type===gt.LEFT_LASER_ROTATION||this.type===gt.RIGHT_LASER_ROTATION}isLaneRotationEvent(){return this.type===gt.EARLY_LANE_ROTATION||this.type===gt.LATE_LANE_ROTATION}isExtraEvent(){return this.type===gt.UTILITY_EVENT_0||this.type===gt.UTILITY_EVENT_1||this.type===gt.UTILITY_EVENT_2||this.type===gt.UTILITY_EVENT_3}isSpecialEvent(){return this.type===gt.SPECIAL_EVENT_0||this.type===gt.SPECIAL_EVENT_1||this.type===gt.SPECIAL_EVENT_2||this.type===gt.SPECIAL_EVENT_3}isBpmEvent(){return this.type===gt.BPM_CHANGE}isLightingEvent(){return this.isLightEvent()||this.isRingEvent()||this.isLaserRotationEvent()||this.isExtraEvent()}isOldChroma(){return this.value>=2e9}}Object.defineProperty(Un,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,type:0,value:0,floatValue:0,customData:{}}});class vl extends un{constructor(){super(...arguments),Object.defineProperty(this,"posX",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"posY",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"laneRotation",{enumerable:!0,configurable:!0,writable:!0,value:0})}setPosX(e){return this.posX=e,this}setPosY(e){return this.posY=e,this}setLaneRotation(e){return this.laneRotation=e,this}mirror(e,t){return t?.(this),this.posX=mo-1-this.posX,this}getPosition(e){return e?.(this)??[this.posX-2,this.posY]}getDistance(e,t){const[i,r]=this.getPosition(t),[s,o]=e.getPosition(t);return Math.sqrt(Math.pow(s-i,2)+Math.pow(o-r,2))}isVertical(e,t){const[i]=this.getPosition(t),[r]=e.getPosition(t),s=i-r;return s>-.001&&s<.001}isHorizontal(e,t){const[i,r]=this.getPosition(t),[s,o]=e.getPosition(t),a=r-o;return a>-.001&&a<.001}isDiagonal(e,t){const[i,r]=this.getPosition(t),[s,o]=e.getPosition(t),a=Math.abs(i-s),l=Math.abs(r-o);return a===l}isInline(e,t,i){return t??=.5,this.getDistance(e,i)<=t}isAdjacent(e,t){const i=this.getDistance(e,t);return i>.499&&i<1.001}isWindow(e,t,i){return t??=1.8,this.getDistance(e,i)>t}isSlantedWindow(e,t){return this.isWindow(e,null,t)&&!this.isDiagonal(e,t)&&!this.isHorizontal(e,t)&&!this.isVertical(e,t)}}class _l extends vl{constructor(){super(...arguments),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"direction",{enumerable:!0,configurable:!0,writable:!0,value:0})}setColor(e){return this.color=e,this}setDirection(e){return this.direction=e,this}mirror(e=!0,t){switch(t?.(this),e&&(this.color=(1+this.color)%2),this.direction){case 2:this.direction=3;break;case 3:this.direction=2;break;case 6:this.direction=7;break;case 7:this.direction=6;break;case 4:this.direction=5;break;case 5:this.direction=4;break}return super.mirror(e)}isRed(){return this.color===0}isBlue(){return this.color===1}getAngle(e){return e?.(this)??(gl[this.direction]||0)}isDouble(e,t=.01){return e.time>this.time-t&&e.time<this.time+t&&this.color!==e.color}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.direction>=0&&this.direction<=8}}class Kh extends _l{constructor(){super(...arguments),Object.defineProperty(this,"tailTime",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"tailPosX",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"tailPosY",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"tailLaneRotation",{enumerable:!0,configurable:!0,writable:!0,value:0})}setTailTime(e){return this.tailTime=e,this}setTailPosX(e){return this.tailPosX=e,this}setTailPosY(e){return this.tailPosY=e,this}setTailLaneRotation(e){return this.tailLaneRotation=e,this}mirror(e=!0,t){return t?.(this),this.tailPosX=mo-1-this.tailPosX,super.mirror(e)}getTailPosition(e){return e?.(this)??[this.tailPosX-2,this.tailPosY]}isInverse(){return this.time>this.tailTime}}function Dt(n,e){return n.time-e.time}function Ts(n,e){return Array.isArray(n.customData.coordinates)&&Array.isArray(e.customData.coordinates)?n.time-e.time||n.customData.coordinates[0]-e.customData.coordinates[0]||n.customData.coordinates[1]-e.customData.coordinates[1]:Array.isArray(n.customData._position)&&Array.isArray(e.customData._position)?n.time-e.time||n.customData._position[0]-e.customData._position[0]||n.customData._position[1]-e.customData._position[1]:n.time-e.time||n.posX-e.posX||n.posY-e.posY}function Q_(n,e){return n._time-e._time}function eb(n,e){return Array.isArray(n._customData?._position)&&Array.isArray(e._customData?._position)?n._time-e._time||n._customData._position[0]-e._customData._position[0]||n._customData._position[1]-e._customData._position[1]:n._time-e._time||n._lineIndex-e._lineLayer||n._lineIndex-e._lineLayer}function ja(n){return n==="GlassDesertEnvironment"||n==="MultiplayerEnvironment"}class go extends Mn{constructor(){super(...arguments),Object.defineProperty(this,"filter",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"beatDistribution",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"beatDistributionType",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"easing",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"affectFirst",{enumerable:!0,configurable:!0,writable:!0,value:0})}setFilter(e){return this.filter=e,this}setBeatDistribution(e){return this.beatDistribution=e,this}setBeatDistributionType(e){return this.beatDistributionType=e,this}setEasing(e){return this.easing=e,this}setAffectFirst(e){return this.affectFirst=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.beatDistributionType===1||this.beatDistributionType===2)&&this.easing>=-1&&this.easing<=103&&this.events.every(i=>typeof i=="number"||i.isValid())&&this.filter.isValid()}}class vo extends un{constructor(){super(...arguments),Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:0})}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.id>=0&&this.boxes.every(i=>i.isValid())}}class ht extends Kh{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"lengthMultiplier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tailLengthMultiplier",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"tailDirection",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"midAnchor",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??ht.defaultValue.time,this.posX=e.posX??ht.defaultValue.posX,this.posY=e.posY??ht.defaultValue.posY,this.color=e.color??ht.defaultValue.color,this.direction=e.direction??ht.defaultValue.direction,this.lengthMultiplier=e.lengthMultiplier??ht.defaultValue.lengthMultiplier,this.tailTime=e.tailTime??ht.defaultValue.tailTime,this.tailPosX=e.tailPosX??ht.defaultValue.tailPosX,this.tailPosY=e.tailPosY??ht.defaultValue.tailPosY,this.tailDirection=e.tailDirection??ht.defaultValue.tailDirection,this.tailLengthMultiplier=e.tailLengthMultiplier??ht.defaultValue.tailLengthMultiplier,this.midAnchor=e.midAnchor??ht.defaultValue.midAnchor,this.laneRotation=e.laneRotation??ht.defaultValue.laneRotation,this.tailLaneRotation=e.tailLaneRotation??ht.defaultValue.tailLaneRotation,this.customData=fe(e.customData??ht.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&!(this.isInverse()||this.posX<0||this.posX>3||this.tailPosX<0||this.tailPosX>3||this.posX===this.tailPosX&&this.posY===this.tailPosY&&this.time===this.tailTime)}setLengthMultiplier(e){return this.lengthMultiplier=e,this}setTailLengthMultiplier(e){return this.tailLengthMultiplier=e,this}setTailDirection(e){return this.tailDirection=e,this}setMidAnchor(e){return this.midAnchor=e,this}mirror(e=!0,t){switch(t?.(this),this.tailDirection){case 2:this.tailDirection=3;break;case 3:this.tailDirection=2;break;case 6:this.tailDirection=7;break;case 7:this.tailDirection=6;break;case 4:this.tailDirection=5;break;case 5:this.tailDirection=4;break}return this.midAnchor&&(this.midAnchor=this.midAnchor===1?2:1),super.mirror(e)}getTailAngle(e){return e?.(this)||gl[this.tailDirection]||0}}Object.defineProperty(ht,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,posX:0,posY:0,color:0,direction:0,lengthMultiplier:0,tailTime:0,tailPosX:0,tailPosY:0,tailDirection:0,tailLengthMultiplier:0,midAnchor:0,laneRotation:0,tailLaneRotation:0,customData:{}}});class sn extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"audioChecksum",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sampleCount",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"frequency",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bpmData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lufsData",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.version=e.version??sn.defaultValue.version,this.filename=e.filename??sn.defaultValue.filename,this.audioChecksum=e.audioChecksum??sn.defaultValue.audioChecksum,this.sampleCount=e.sampleCount??sn.defaultValue.sampleCount,this.frequency=e.frequency??sn.defaultValue.frequency,this.bpmData=(e.bpmData??sn.defaultValue.bpmData).map(t=>({startBeat:t?.startBeat||0,startSampleIndex:t?.startSampleIndex||0,endBeat:t?.endBeat||0,endSampleIndex:t?.endSampleIndex||0})),this.lufsData=(e.lufsData??sn.defaultValue.lufsData).map(t=>({startSampleIndex:t?.startSampleIndex||0,endSampleIndex:t?.endSampleIndex||0,lufs:t?.lufs||0})),this.customData=fe(e.customData??sn.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.frequency>=0&&this.sampleCount>=0&&this.bpmData.every(i=>i.endBeat>i.startBeat&&i.endSampleIndex>i.startSampleIndex)}setFilename(e){return this.filename=e,this}setVersion(e){return this.version=e,this}setSampleCount(e){return this.sampleCount=e,this}setFrequency(e){return this.frequency=e,this}fromBpmEvents(e,t=44100,i){if(!e.length)return this;this.frequency=t,i&&(this.sampleCount=i),this.bpmData=[];for(let l=0;l<e.length-1;l++){const u=e[l],c=e[l+1];this.bpmData.push({startSampleIndex:Math.floor(u.time*this.frequency),endSampleIndex:Math.floor(c.time*this.frequency),startBeat:u.time,endBeat:c.time})}const r=e[e.length-1],s=Math.floor(r.time*this.frequency),a=(this.sampleCount-s)/this.frequency*(r.bpm/60);return this.bpmData.push({startSampleIndex:s,endSampleIndex:this.sampleCount,startBeat:r.time,endBeat:r.time+a}),this}getBpmEvents(){return this.bpmData.map(e=>{const t=e.endSampleIndex-e.startSampleIndex,i=(e.endBeat-e.startBeat)/(t/this.frequency)*60;return{time:e.startBeat,bpm:i,customData:{}}})}sort(){return this.bpmData.sort((e,t)=>e.startBeat-t.startBeat),this}}Object.defineProperty(sn,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{version:-1,filename:"AudioData.dat",audioChecksum:"",sampleCount:44100,frequency:0,bpmData:[],lufsData:[],customData:{}}});class Ni extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"bpm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??Ni.defaultValue.time,this.bpm=e.bpm??Ni.defaultValue.bpm,this.customData=fe(e.customData??Ni.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.bpm>0}setBPM(e){return this.bpm=e,this}}Object.defineProperty(Ni,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,bpm:0,customData:{}}});class si extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"executionTime",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"rotation",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.time=e.time??si.defaultValue.time,this.executionTime=e.executionTime??si.defaultValue.executionTime,this.rotation=e.rotation??si.defaultValue.rotation,this.customData=fe(e.customData??si.defaultValue.customData)}setExecutionTime(e){return this.executionTime=e,this}setRotation(e){return this.rotation=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.executionTime===0||this.executionTime===1)}}Object.defineProperty(si,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,executionTime:0,rotation:0,customData:{}}});class $t extends _l{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"angleOffset",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.time=e.time??$t.defaultValue.time,this.posX=e.posX??$t.defaultValue.posX,this.posY=e.posY??$t.defaultValue.posY,this.color=e.color??$t.defaultValue.color,this.direction=e.direction??$t.defaultValue.direction,this.angleOffset=e.angleOffset??$t.defaultValue.angleOffset,this.laneRotation=e.laneRotation??$t.defaultValue.laneRotation,this.customData=fe(e.customData??$t.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.posX>=0&&this.posX<=3&&this.posY>=0&&this.posY<=2&&this.direction>=0&&this.direction<=8}setAngleOffset(e){return this.angleOffset=e,this}mirror(e=!0,t){return t?.(this),super.mirror(e)}getAngle(e){return e?.(this)??(gl[this.direction]||0)+this.angleOffset}}Object.defineProperty($t,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,posX:0,posY:0,color:0,direction:0,angleOffset:0,laneRotation:0,customData:{}}});class gn extends _l{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),this.time=e.time??gn.defaultValue.time,this.posX=e.posX??gn.defaultValue.posX,this.posY=e.posY??gn.defaultValue.posY,this.color=-1,this.direction=e.direction??gn.defaultValue.direction,this.laneRotation=e.laneRotation??gn.defaultValue.laneRotation,this.customData=fe(e.customData??gn.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.posX>=0&&this.posX<=3&&this.posY>=0&&this.posY<=2}}Object.defineProperty(gn,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,posX:0,posY:0,color:-1,direction:0,laneRotation:0,customData:{}}});class Kt extends vl{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"duration",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.time=e.time??Kt.defaultValue.time,this.posX=e.posX??Kt.defaultValue.posX,this.posY=e.posY??Kt.defaultValue.posY,this.width=e.width??Kt.defaultValue.width,this.height=e.height??Kt.defaultValue.height,this.duration=e.duration??Kt.defaultValue.duration,this.laneRotation=e.laneRotation??Kt.defaultValue.laneRotation,this.customData=fe(e.customData??Kt.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&!this.hasZero()&&!this.hasNegative()}setDuration(e){return this.duration=e,this}setWidth(e){return this.width=e,this}setHeight(e){return this.height=e,this}mirror(e,t){return t?.(this),this.posX=mo-1-(this.posX+this.width-1),this}getPosition(e){return e?.(this)??[this.posX-2,this.posY-.5]}isInteractive(){return this.posX<0&&this.width>1-this.posX||this.posX===0&&this.width>1||this.posX===1||this.posX===2}hasZero(){return this.duration===0||this.width===0||this.height===0}hasNegative(){return this.posY<0||this.duration<0||this.width<0||this.height<0}}Object.defineProperty(Kt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,posX:0,posY:0,width:0,height:0,duration:0,laneRotation:0,customData:{}}});class bt extends Kh{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"sliceCount",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"squish",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??bt.defaultValue.time,this.posX=e.posX??bt.defaultValue.posX,this.posY=e.posY??bt.defaultValue.posY,this.color=e.color??bt.defaultValue.color,this.direction=e.direction??bt.defaultValue.direction,this.laneRotation=e.laneRotation??bt.defaultValue.laneRotation,this.tailTime=e.tailTime??bt.defaultValue.tailTime,this.tailPosX=e.tailPosX??bt.defaultValue.tailPosX,this.tailPosY=e.tailPosY??bt.defaultValue.tailPosY,this.tailLaneRotation=e.tailLaneRotation??bt.defaultValue.tailLaneRotation,this.sliceCount=e.sliceCount??bt.defaultValue.sliceCount,this.squish=e.squish??bt.defaultValue.squish,this.customData=fe(e.customData??bt.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(!this.isInverse()||this.posY>=0||this.posY<=2||this.tailPosY>=0||this.tailPosY<=2)}setSliceCount(e){return this.sliceCount=e,this}setSquish(e){return this.squish=e,this}}Object.defineProperty(bt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,posX:0,posY:0,color:0,direction:0,laneRotation:0,tailTime:0,tailPosX:0,tailPosY:0,tailLaneRotation:0,sliceCount:0,squish:0,customData:{}}});class Fn extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"previous",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"easing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??Fn.defaultValue.time,this.value=e.value??Fn.defaultValue.value,this.previous=e.previous??Fn.defaultValue.previous,this.easing=e.easing??Fn.defaultValue.easing,this.customData=fe(e.customData??Fn.defaultValue.customData)}setValue(e){return this.value=e,this}setPrevious(e){return this.previous=e,this}setEasing(e){return this.easing=e,this}}Object.defineProperty(Fn,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,value:0,previous:0,easing:0,customData:{}}});class Wt extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"bpmEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rotationEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"colorNotes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bombNotes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"obstacles",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"arcs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chains",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"njsEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.bpmEvents=(e.bpmEvents??Wt.defaultValue.bpmEvents).map(t=>new Ni(t)),this.rotationEvents=(e.rotationEvents??Wt.defaultValue.rotationEvents).map(t=>new si(t)),this.colorNotes=(e.colorNotes??Wt.defaultValue.colorNotes).map(t=>new $t(t)),this.bombNotes=(e.bombNotes??Wt.defaultValue.bombNotes).map(t=>new gn(t)),this.obstacles=(e.obstacles??Wt.defaultValue.obstacles).map(t=>new Kt(t)),this.arcs=(e.arcs??Wt.defaultValue.arcs).map(t=>new ht(t)),this.chains=(e.chains??Wt.defaultValue.chains).map(t=>new bt(t)),this.njsEvents=(e.njsEvents??Wt.defaultValue.njsEvents).map(t=>new Fn(t)),this.customData=fe(e.customData??Wt.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.bpmEvents.every(i=>i.isValid())&&this.rotationEvents.every(i=>i.isValid())&&this.colorNotes.every(i=>i.isValid())&&this.bombNotes.every(i=>i.isValid())&&this.obstacles.every(i=>i.isValid())&&this.arcs.every(i=>i.isValid())&&this.chains.every(i=>i.isValid())}sort(){return this.bpmEvents.sort(Dt),this.rotationEvents.sort(Dt),this.colorNotes.sort(Ts),this.bombNotes.sort(Ts),this.obstacles.sort(Dt),this.arcs.sort(Ts),this.chains.sort(Ts),this}addBpmEvents(...e){for(const t of e)this.bpmEvents.push(new Ni(t));return this}addRotationEvents(...e){for(const t of e)this.rotationEvents.push(new si(t));return this}addColorNotes(...e){for(const t of e)this.colorNotes.push(new $t(t));return this}addBombNotes(...e){for(const t of e)this.bombNotes.push(new gn(t));return this}addObstacles(...e){for(const t of e)this.obstacles.push(new Kt(t));return this}addArcs(...e){for(const t of e)this.arcs.push(new ht(t));return this}addChains(...e){for(const t of e)this.chains.push(new bt(t));return this}addNjsEvents(...e){for(const t of e)this.njsEvents.push(new Fn(t));return this}}Object.defineProperty(Wt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{bpmEvents:[],rotationEvents:[],colorNotes:[],bombNotes:[],obstacles:[],arcs:[],chains:[],njsEvents:[],customData:{}}});class vn extends vl{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"direction",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.time=e.time??vn.defaultValue.time,this.posX=e.posX??vn.defaultValue.posX,this.posY=e.posY??vn.defaultValue.posY,this.direction=e.direction??vn.defaultValue.direction,this.laneRotation=e.laneRotation??vn.defaultValue.laneRotation,this.customData=fe(e.customData??vn.defaultValue.customData)}setDirection(e){return this.direction=e,this}mirror(e,t){switch(t?.(this),this.posX=mo-1-this.posX,this.direction){case 2:this.direction=3;break;case 3:this.direction=2;break;case 6:this.direction=7;break;case 7:this.direction=6;break;case 4:this.direction=5;break;case 5:this.direction=4;break}return this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.direction>=0&&this.direction<=9&&this.direction!==8}}Object.defineProperty(vn,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,posX:0,posY:0,direction:0,laneRotation:0,customData:{}}});class Oi extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"toggle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??Oi.defaultValue.time,this.toggle=e.toggle??Oi.defaultValue.toggle,this.customData=fe(e.customData??Oi.defaultValue.customData)}setToggle(e){return this.toggle=e,this}}Object.defineProperty(Oi,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,toggle:!1,customData:{}}});class St extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"type",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"p0",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"p1",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reverse",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chunks",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"limit",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"limitAffectsType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"random",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"seed",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.type=e.type??St.defaultValue.type,this.p0=e.p0??St.defaultValue.p0,this.p1=e.p1??St.defaultValue.p1,this.reverse=e.reverse??St.defaultValue.reverse,this.chunks=e.chunks??St.defaultValue.chunks,this.random=e.random??St.defaultValue.random,this.seed=e.seed??St.defaultValue.seed,this.limit=e.limit??St.defaultValue.limit,this.limitAffectsType=e.limitAffectsType??St.defaultValue.limitAffectsType,this.customData=fe(e.customData??St.defaultValue.customData)}setType(e){return this.type=e,this}setP0(e){return this.p0=e,this}setP1(e){return this.p1=e,this}setReverse(e){return this.reverse=e,this}setChunks(e){return this.chunks=e,this}setRandom(e){return this.random=e,this}setSeed(e){return this.seed=e,this}setLimit(e){return this.limit=e,this}setLimitAffectsType(e){return this.limitAffectsType=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.type===1||this.type===2)&&this.p0>=0&&this.p1>=0&&(this.reverse===0||this.reverse===1)&&this.chunks>=0&&this.random>=0&&this.random<=Ha.ALL&&this.limit>=0&&this.limit<=1&&this.limitAffectsType>=0&&this.limitAffectsType<=Ga.ALL}}Object.defineProperty(St,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{type:1,p0:0,p1:0,reverse:0,chunks:0,random:0,seed:0,limit:0,limitAffectsType:0,customData:{}}});class jt extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"previous",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"brightness",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"frequency",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"strobeBrightness",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"strobeFade",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"easing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??jt.defaultValue.time,this.previous=e.previous??jt.defaultValue.previous,this.color=e.color??jt.defaultValue.color,this.frequency=e.frequency??jt.defaultValue.frequency,this.brightness=e.brightness??jt.defaultValue.brightness,this.strobeBrightness=e.strobeBrightness??jt.defaultValue.strobeBrightness,this.strobeFade=e.strobeFade??jt.defaultValue.strobeFade,this.easing=e.easing??jt.defaultValue.easing,this.customData=fe(e.customData??jt.defaultValue.customData)}setPrevious(e){return this.previous=e,this}setColor(e){return this.color=e,this}setBrightness(e){return this.brightness=e,this}setFrequency(e){return this.frequency=e,this}setStrobeBrightness(e){return this.strobeBrightness=e,this}setStrobeFade(e){return this.strobeFade=e,this}setEasing(e){return this.easing=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.previous===0||this.previous===1)&&this.easing>=-1&&this.easing<=103&&this.color>=-1&&this.color<=2&&this.brightness>=0&&this.frequency>=0}}Object.defineProperty(jt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,previous:0,color:0,frequency:0,brightness:0,strobeBrightness:0,strobeFade:0,easing:0,customData:{}}});class Xt extends go{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"brightnessDistribution",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"brightnessDistributionType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.filter=new St(e.filter??Xt.defaultValue.filter),this.beatDistribution=e.beatDistribution??Xt.defaultValue.beatDistribution,this.beatDistributionType=e.beatDistributionType??Xt.defaultValue.beatDistributionType,this.brightnessDistribution=e.brightnessDistribution??Xt.defaultValue.brightnessDistribution,this.brightnessDistributionType=e.brightnessDistributionType??Xt.defaultValue.brightnessDistributionType,this.affectFirst=e.affectFirst??Xt.defaultValue.affectFirst,this.easing=e.easing??Xt.defaultValue.easing,this.events=(e.events??Xt.defaultValue.events).map(t=>new jt(t)),this.customData=fe(e.customData??Xt.defaultValue.customData)}setBrightnessDistribution(e){return this.brightnessDistribution=e,this}setBrightnessDistributionType(e){return this.brightnessDistributionType=e,this}setEvents(e){return this.events=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.brightnessDistributionType===1||this.brightnessDistributionType===2)&&(this.affectFirst===0||this.affectFirst===1)}}Object.defineProperty(Xt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{filter:{type:1,p0:0,p1:0,reverse:0,chunks:0,random:0,seed:0,limit:0,limitAffectsType:0,customData:{}},beatDistribution:0,beatDistributionType:1,brightnessDistribution:0,brightnessDistributionType:1,affectFirst:0,easing:0,events:[],customData:{}}});class oi extends vo{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"boxes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??oi.defaultValue.time,this.id=e.id??oi.defaultValue.id,this.boxes=(e.boxes??oi.defaultValue.boxes).map(t=>new Xt(t)),this.customData=fe(e.customData??oi.defaultValue.customData)}}Object.defineProperty(oi,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,id:0,boxes:[],customData:{}}});class pn extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"previous",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"easing",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"loop",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"rotation",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"direction",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.time=e.time??pn.defaultValue.time,this.easing=e.easing??pn.defaultValue.easing,this.loop=e.loop??pn.defaultValue.loop,this.direction=e.direction??pn.defaultValue.direction,this.previous=e.previous??pn.defaultValue.previous,this.rotation=e.rotation??pn.defaultValue.rotation,this.customData=fe(e.customData??pn.defaultValue.customData)}setPrevious(e){return this.previous=e,this}setEasing(e){return this.easing=e,this}setLoop(e){return this.loop=e,this}setRotation(e){return this.rotation=e,this}setDirection(e){return this.direction=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.previous===0||this.previous===1)&&this.easing>=-1&&this.easing<=103&&this.loop>=0&&this.direction>=0&&this.direction<=2}}Object.defineProperty(pn,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,easing:0,loop:0,direction:0,previous:0,rotation:0,customData:{}}});class Rt extends go{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"rotationDistribution",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rotationDistributionType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"axis",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"flip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.filter=new St(e.filter??Rt.defaultValue.filter),this.axis=e.axis??Rt.defaultValue.axis,this.flip=e.flip??Rt.defaultValue.flip,this.beatDistribution=e.beatDistribution??Rt.defaultValue.beatDistribution,this.beatDistributionType=e.beatDistributionType??Rt.defaultValue.beatDistributionType,this.rotationDistribution=e.rotationDistribution??Rt.defaultValue.rotationDistribution,this.rotationDistributionType=e.rotationDistributionType??Rt.defaultValue.rotationDistributionType,this.affectFirst=e.affectFirst??Rt.defaultValue.affectFirst,this.easing=e.easing??Rt.defaultValue.easing,this.events=(e.events??Rt.defaultValue.events).map(t=>new pn(t)),this.customData=fe(e.customData??Rt.defaultValue.customData)}setRotationDistribution(e){return this.rotationDistribution=e,this}setRotationDistributionType(e){return this.rotationDistributionType=e,this}setAxis(e){return this.axis=e,this}setFlip(e){return this.flip=e,this}setEvents(e){return this.events=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.rotationDistributionType===1||this.rotationDistributionType===2)&&(this.axis===0||this.axis===1||this.axis===2)&&(this.flip===0||this.flip===1)&&(this.affectFirst===0||this.affectFirst===1)}}Object.defineProperty(Rt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{filter:{type:1,p0:0,p1:0,reverse:0,chunks:0,random:0,seed:0,limit:0,limitAffectsType:0,customData:{}},axis:0,flip:0,beatDistribution:0,beatDistributionType:1,rotationDistribution:0,rotationDistributionType:1,affectFirst:0,easing:0,events:[],customData:{}}});class ai extends vo{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"boxes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??ai.defaultValue.time,this.id=e.id??ai.defaultValue.id,this.boxes=(e.boxes??ai.defaultValue.boxes).map(t=>new Rt(t)),this.customData=fe(e.customData??ai.defaultValue.customData)}}Object.defineProperty(ai,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,id:0,boxes:[],customData:{}}});class ni extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"previous",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"easing",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"translation",{enumerable:!0,configurable:!0,writable:!0,value:0}),this.time=e.time??ni.defaultValue.time,this.easing=e.easing??ni.defaultValue.easing,this.previous=e.previous??ni.defaultValue.previous,this.translation=e.translation??ni.defaultValue.translation,this.customData=fe(e.customData??ni.defaultValue.customData)}setPrevious(e){return this.previous=e,this}setEasing(e){return this.easing=e,this}setTranslation(e){return this.translation=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.previous===0||this.previous===1)&&this.easing>=-1&&this.easing<=103}}Object.defineProperty(ni,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,easing:0,previous:0,translation:0,customData:{}}});class Pt extends go{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"gapDistribution",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"gapDistributionType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"axis",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"flip",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.filter=new St(e.filter??Pt.defaultValue.filter),this.axis=e.axis??Pt.defaultValue.axis,this.flip=e.flip??Pt.defaultValue.flip,this.beatDistribution=e.beatDistribution??Pt.defaultValue.beatDistribution,this.beatDistributionType=e.beatDistributionType??Pt.defaultValue.beatDistributionType,this.gapDistribution=e.gapDistribution??Pt.defaultValue.gapDistribution,this.gapDistributionType=e.gapDistributionType??Pt.defaultValue.gapDistributionType,this.affectFirst=e.affectFirst??Pt.defaultValue.affectFirst,this.easing=e.easing??Pt.defaultValue.easing,this.events=(e.events??Pt.defaultValue.events).map(t=>new ni(t)),this.customData=fe(e.customData??Pt.defaultValue.customData)}setGapDistribution(e){return this.gapDistribution=e,this}setGapDistributionType(e){return this.gapDistributionType=e,this}setAxis(e){return this.axis=e,this}setFlip(e){return this.flip=e,this}setEvents(e){return this.events=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.gapDistributionType===1||this.gapDistributionType===2)&&(this.axis===0||this.axis===1||this.axis===2)&&(this.flip===0||this.flip===1)&&(this.affectFirst===0||this.affectFirst===1)}}Object.defineProperty(Pt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{filter:{type:1,p0:0,p1:0,reverse:0,chunks:0,random:0,seed:0,limit:0,limitAffectsType:0,customData:{}},axis:0,flip:0,beatDistribution:0,beatDistributionType:1,gapDistribution:0,gapDistributionType:1,affectFirst:0,easing:0,events:[],customData:{}}});class li extends vo{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"boxes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??li.defaultValue.time,this.id=e.id??li.defaultValue.id,this.boxes=(e.boxes??li.defaultValue.boxes).map(t=>new Pt(t)),this.customData=fe(e.customData??li.defaultValue.customData)}}Object.defineProperty(li,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,id:0,boxes:[],customData:{}}});class ii extends un{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"easing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"previous",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??ii.defaultValue.time,this.easing=e.easing??ii.defaultValue.easing,this.previous=e.previous??ii.defaultValue.previous,this.value=e.value??ii.defaultValue.value,this.customData=fe(e.customData??ii.defaultValue.customData)}setEasing(e){return this.easing=e,this}setPrevious(e){return this.previous=e,this}setValue(e){return this.value=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.previous===0||this.previous===1)&&this.easing>=-1&&this.easing<=103}}Object.defineProperty(ii,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,easing:0,previous:0,value:0,customData:{}}});class Yt extends go{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"fxDistribution",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxDistributionType",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.filter=new St(e.filter??Yt.defaultValue.filter),this.beatDistribution=e.beatDistribution??Yt.defaultValue.beatDistribution,this.beatDistributionType=e.beatDistributionType??Yt.defaultValue.beatDistributionType,this.fxDistribution=e.fxDistribution??Yt.defaultValue.fxDistribution,this.fxDistributionType=e.fxDistributionType??Yt.defaultValue.fxDistributionType,this.affectFirst=e.affectFirst??Yt.defaultValue.affectFirst,this.easing=e.easing??Yt.defaultValue.easing,this.events=(e.events??Yt.defaultValue.events).map(t=>new ii(t)),this.customData=fe(e.customData??Yt.defaultValue.customData)}setFxDistribution(e){return this.fxDistribution=e,this}setFxDistributionType(e){return this.fxDistributionType=e,this}setEvents(e){return this.events=e,this}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&(this.fxDistributionType===1||this.fxDistributionType===2)&&(this.affectFirst===0||this.affectFirst===1)}}Object.defineProperty(Yt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{filter:{type:1,p0:0,p1:0,reverse:0,chunks:0,random:0,seed:0,limit:0,limitAffectsType:0,customData:{}},beatDistribution:0,beatDistributionType:1,fxDistribution:0,fxDistributionType:1,affectFirst:0,easing:0,events:[],customData:{}}});class ui extends vo{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"boxes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.time=e.time??ui.defaultValue.time,this.id=e.id??ui.defaultValue.id,this.boxes=(e.boxes??ui.defaultValue.boxes).map(t=>new Yt(t)),this.customData=fe(e.customData??ui.defaultValue.customData)}}Object.defineProperty(ui,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{time:0,id:0,boxes:[],customData:{}}});class hr extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"keyword",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"events",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.keyword=e.keyword??hr.defaultValue.keyword,this.events=(e.events??hr.defaultValue.events).map(t=>t).filter(t=>t),this.customData=fe(e.customData??hr.defaultValue.customData)}setKeyword(e){return this.keyword=e,this}setEvents(e){return this.events=e,this}addEvent(e){return this.events.push(e),this}removeEvent(e){const t=this.events.indexOf(e,0);return t>-1&&this.events.splice(t,1),this}}Object.defineProperty(hr,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{keyword:"",events:[],customData:{}}});class qt extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"waypoints",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"basicEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"colorBoostEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lightColorEventBoxGroups",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lightRotationEventBoxGroups",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lightTranslationEventBoxGroups",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxEventBoxGroups",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"basicEventTypesWithKeywords",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"useNormalEventsAsCompatibleEvents",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.waypoints=(e.waypoints??qt.defaultValue.waypoints).map(t=>new vn(t)),this.basicEvents=(e.basicEvents??qt.defaultValue.basicEvents).map(t=>new Un(t)),this.colorBoostEvents=(e.colorBoostEvents??qt.defaultValue.colorBoostEvents).map(t=>new Oi(t)),this.lightColorEventBoxGroups=(e.lightColorEventBoxGroups??qt.defaultValue.lightColorEventBoxGroups).map(t=>new oi(t)),this.lightRotationEventBoxGroups=(e.lightRotationEventBoxGroups??qt.defaultValue.lightRotationEventBoxGroups).map(t=>new ai(t)),this.lightTranslationEventBoxGroups=(e.lightTranslationEventBoxGroups??qt.defaultValue.lightTranslationEventBoxGroups).map(t=>new li(t)),this.fxEventBoxGroups=(e.fxEventBoxGroups??qt.defaultValue.fxEventBoxGroups).map(t=>new ui(t)),this.basicEventTypesWithKeywords={list:(e.basicEventTypesWithKeywords?.list??qt.defaultValue.basicEventTypesWithKeywords.list).map(t=>new hr(t))},this.useNormalEventsAsCompatibleEvents=!!e.useNormalEventsAsCompatibleEvents,this.customData=fe(e.customData??qt.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.waypoints.every(i=>i.isValid())&&this.basicEvents.every(i=>i.isValid())&&this.colorBoostEvents.every(i=>i.isValid())&&this.lightColorEventBoxGroups.every(i=>i.isValid())&&this.lightRotationEventBoxGroups.every(i=>i.isValid())&&this.lightTranslationEventBoxGroups.every(i=>i.isValid())&&this.fxEventBoxGroups.every(i=>i.isValid())&&this.basicEventTypesWithKeywords.list.every(i=>i.isValid())}sort(){this.waypoints.sort(Dt),this.basicEvents.sort(Dt),this.colorBoostEvents.sort(Dt),this.lightColorEventBoxGroups.sort(Dt),this.lightRotationEventBoxGroups.sort(Dt),this.lightTranslationEventBoxGroups.sort(Dt),this.fxEventBoxGroups.sort(Dt);for(let e=0;e<this.lightColorEventBoxGroups.length;e++)for(let t=0;t<this.lightColorEventBoxGroups[e].boxes.length;t++)this.lightColorEventBoxGroups[e].boxes[t].events.sort(Dt);for(let e=0;e<this.lightRotationEventBoxGroups.length;e++)for(let t=0;t<this.lightRotationEventBoxGroups[e].boxes.length;t++)this.lightRotationEventBoxGroups[e].boxes[t].events.sort(Dt);for(let e=0;e<this.lightTranslationEventBoxGroups.length;e++)for(let t=0;t<this.lightTranslationEventBoxGroups[e].boxes.length;t++)this.lightTranslationEventBoxGroups[e].boxes[t].events.sort(Dt);for(let e=0;e<this.fxEventBoxGroups.length;e++)for(let t=0;t<this.fxEventBoxGroups[e].boxes.length;t++)this.fxEventBoxGroups[e].boxes[t].events.sort(Dt);return this}addWaypoints(...e){for(const t of e)this.waypoints.push(new vn(t));return this}addBasicEvents(...e){for(const t of e)this.basicEvents.push(new Un(t));return this}addColorBoostEvents(...e){for(const t of e)this.colorBoostEvents.push(new Oi(t));return this}addLightColorEventBoxGroups(...e){for(const t of e)this.lightColorEventBoxGroups.push(new oi(t));return this}addLightRotationEventBoxGroups(...e){for(const t of e)this.lightRotationEventBoxGroups.push(new ai(t));return this}addLightTranslationEventBoxGroups(...e){for(const t of e)this.lightTranslationEventBoxGroups.push(new li(t));return this}addFxEventBoxGroups(...e){for(const t of e)this.fxEventBoxGroups.push(new ui(t));return this}}Object.defineProperty(qt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{waypoints:[],basicEvents:[],colorBoostEvents:[],lightColorEventBoxGroups:[],lightRotationEventBoxGroups:[],lightTranslationEventBoxGroups:[],fxEventBoxGroups:[],basicEventTypesWithKeywords:{list:[]},useNormalEventsAsCompatibleEvents:!1,customData:{}}});class Bn extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"difficulty",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lightshow",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lightshowFilename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.version=e.version??Bn.defaultValue.version,this.filename=e.filename??Bn.defaultValue.filename,this.lightshowFilename=e.lightshowFilename??Bn.defaultValue.lightshowFilename,this.difficulty=new Wt(e.difficulty??Bn.defaultValue.difficulty),this.lightshow=new qt(e.lightshow??Bn.defaultValue.lightshow)}isValid(e,t){return super.isValid(e)}get bpmEvents(){return this.difficulty.bpmEvents}set bpmEvents(e){this.difficulty.bpmEvents=e}get rotationEvents(){return this.difficulty.rotationEvents}set rotationEvents(e){this.difficulty.rotationEvents=e}get colorNotes(){return this.difficulty.colorNotes}set colorNotes(e){this.difficulty.colorNotes=e}get bombNotes(){return this.difficulty.bombNotes}set bombNotes(e){this.difficulty.bombNotes=e}get obstacles(){return this.difficulty.obstacles}set obstacles(e){this.difficulty.obstacles=e}get arcs(){return this.difficulty.arcs}set arcs(e){this.difficulty.arcs=e}get chains(){return this.difficulty.chains}set chains(e){this.difficulty.chains=e}get njsEvents(){return this.difficulty.njsEvents}set njsEvents(e){this.difficulty.njsEvents=e}get waypoints(){return this.lightshow.waypoints}set waypoints(e){this.lightshow.waypoints=e}get basicEvents(){return this.lightshow.basicEvents}set basicEvents(e){this.lightshow.basicEvents=e}get colorBoostEvents(){return this.lightshow.colorBoostEvents}set colorBoostEvents(e){this.lightshow.colorBoostEvents=e}get lightColorEventBoxGroups(){return this.lightshow.lightColorEventBoxGroups}set lightColorEventBoxGroups(e){this.lightshow.lightColorEventBoxGroups=e}get lightRotationEventBoxGroups(){return this.lightshow.lightRotationEventBoxGroups}set lightRotationEventBoxGroups(e){this.lightshow.lightRotationEventBoxGroups=e}get lightTranslationEventBoxGroups(){return this.lightshow.lightTranslationEventBoxGroups}set lightTranslationEventBoxGroups(e){this.lightshow.lightTranslationEventBoxGroups=e}get fxEventBoxGroups(){return this.lightshow.fxEventBoxGroups}set fxEventBoxGroups(e){this.lightshow.fxEventBoxGroups=e}get basicEventTypesWithKeywords(){return this.lightshow.basicEventTypesWithKeywords}set basicEventTypesWithKeywords(e){this.lightshow.basicEventTypesWithKeywords=e}get useNormalEventsAsCompatibleEvents(){return this.lightshow.useNormalEventsAsCompatibleEvents}set useNormalEventsAsCompatibleEvents(e){this.lightshow.useNormalEventsAsCompatibleEvents=e}setFilename(e){return this.filename=e,this}setLightshowFilename(e){return this.lightshowFilename=e,this}setVersion(e){return this.version=e,this}sort(e){return this.difficulty.sort(),this.lightshow.sort(),super.sort(e)}addBpmEvents(...e){return this.difficulty.addBpmEvents(...e),this}addRotationEvents(...e){return this.difficulty.addRotationEvents(...e),this}addColorNotes(...e){return this.difficulty.addColorNotes(...e),this}addBombNotes(...e){return this.difficulty.addBombNotes(...e),this}addObstacles(...e){return this.difficulty.addObstacles(...e),this}addArcs(...e){return this.difficulty.addArcs(...e),this}addChains(...e){return this.difficulty.addChains(...e),this}addWaypoints(...e){return this.lightshow.addWaypoints(...e),this}addBasicEvents(...e){return this.lightshow.addBasicEvents(...e),this}addColorBoostEvents(...e){return this.lightshow.addColorBoostEvents(...e),this}addLightColorEventBoxGroups(...e){return this.lightshow.addLightColorEventBoxGroups(...e),this}addLightRotationEventBoxGroups(...e){return this.lightshow.addLightRotationEventBoxGroups(...e),this}addLightTranslationEventBoxGroups(...e){return this.lightshow.addLightTranslationEventBoxGroups(...e),this}addFxEventBoxGroups(...e){return this.lightshow.addFxEventBoxGroups(...e),this}}Object.defineProperty(Bn,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{version:-1,filename:"Unnamed.beatmap.dat",lightshowFilename:"Unnamed.lightshow.dat",customData:{},difficulty:{bpmEvents:[],rotationEvents:[],colorNotes:[],bombNotes:[],obstacles:[],arcs:[],chains:[],njsEvents:[],customData:{}},lightshow:{waypoints:[],basicEvents:[],colorBoostEvents:[],lightColorEventBoxGroups:[],lightRotationEventBoxGroups:[],lightTranslationEventBoxGroups:[],fxEventBoxGroups:[],basicEventTypesWithKeywords:{list:[]},useNormalEventsAsCompatibleEvents:!1,customData:{}}}});const Wu={Standard:0,NoArrows:1,OneSaber:2,Legacy:3,"360Degree":4,"90Degree":5,Lightshow:6,Lawless:7},Ks={Easy:1,Normal:3,Hard:5,Expert:7,ExpertPlus:9,"Expert+":9};class Tt extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"characteristic",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"difficulty",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"lightshowFilename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"authors",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"njs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"njsOffset",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"colorSchemeId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"environmentId",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.characteristic=e.characteristic??Tt.defaultValue.characteristic,this.difficulty=e.difficulty??Tt.defaultValue.difficulty,this.filename=e.filename??Tt.defaultValue.filename,this.lightshowFilename=e.lightshowFilename??Tt.defaultValue.lightshowFilename,this.authors={mappers:(e.authors?.mappers??Tt.defaultValue.authors.mappers).map(t=>t),lighters:(e.authors?.lighters??Tt.defaultValue.authors.lighters).map(t=>t)},this.njs=e.njs??Tt.defaultValue.njs,this.njsOffset=e.njsOffset??Tt.defaultValue.njsOffset,this.colorSchemeId=e.colorSchemeId??Tt.defaultValue.colorSchemeId,this.environmentId=e.environmentId??Tt.defaultValue.environmentId,this.customData=fe(e.customData??Tt.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.njs>0&&this.colorSchemeId>=-1&&this.environmentId>=0}}Object.defineProperty(Tt,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{characteristic:"Standard",difficulty:"Easy",filename:"Unnamed.beatmap.dat",lightshowFilename:"Unnamed.lightshow.dat",authors:{mappers:[],lighters:[]},njs:10,njsOffset:0,colorSchemeId:-1,environmentId:0,customData:{}}});class et extends Mn{static createOne(e={}){return new this(e)}static create(...e){return e.length?e.map(t=>new this(t)):[new this]}constructor(e={}){super(),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"filename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"song",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"audio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"songPreviewFilename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"coverImageFilename",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"environmentBase",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"environmentNames",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"colorSchemes",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"difficulties",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.version=e.version??et.defaultValue.version,this.filename=e.filename??et.defaultValue.filename,this.song={title:e.song?.title??et.defaultValue.song.title,subTitle:e.song?.subTitle??et.defaultValue.song.subTitle,author:e.song?.author??et.defaultValue.song.author},this.audio={filename:e.audio?.filename??et.defaultValue.audio.filename,duration:e.audio?.duration??et.defaultValue.audio.duration,audioDataFilename:e.audio?.audioDataFilename??et.defaultValue.audio.audioDataFilename,bpm:e.audio?.bpm??et.defaultValue.audio.bpm,lufs:e.audio?.lufs??et.defaultValue.audio.lufs,previewStartTime:e.audio?.previewStartTime??et.defaultValue.audio.previewStartTime,previewDuration:e.audio?.previewDuration??et.defaultValue.audio.previewDuration,audioOffset:e.audio?.audioOffset??et.defaultValue.audio.audioOffset,shuffle:e.audio?.shuffle??et.defaultValue.audio.shuffle,shufflePeriod:e.audio?.shufflePeriod??et.defaultValue.audio.shufflePeriod},this.songPreviewFilename=e.songPreviewFilename??et.defaultValue.songPreviewFilename,this.coverImageFilename=e.coverImageFilename??et.defaultValue.coverImageFilename,this.environmentBase={normal:e.environmentBase?.normal??et.defaultValue.environmentBase.normal,allDirections:e.environmentBase?.allDirections??et.defaultValue.environmentBase.allDirections},this.environmentNames=(e.environmentNames??et.defaultValue.environmentNames).map(t=>t),this.colorSchemes=(e.colorSchemes??et.defaultValue.colorSchemes).map(t=>{const i={name:t.name||"",overrideLights:t.overrideLights||!1,overrideNotes:t.overrideNotes||!1,saberLeftColor:{r:t.saberLeftColor?.r||0,g:t.saberLeftColor?.g||0,b:t.saberLeftColor?.b||0,a:t.saberLeftColor?.a||0},saberRightColor:{r:t.saberRightColor?.r||0,g:t.saberRightColor?.g||0,b:t.saberRightColor?.b||0,a:t.saberRightColor?.a||0},environment0Color:{r:t.environment0Color?.r||0,g:t.environment0Color?.g||0,b:t.environment0Color?.b||0,a:t.environment0Color?.a||0},environment1Color:{r:t.environment1Color?.r||0,g:t.environment1Color?.g||0,b:t.environment1Color?.b||0,a:t.environment1Color?.a||0},environment0ColorBoost:{r:t.environment0ColorBoost?.r||0,g:t.environment0ColorBoost?.g||0,b:t.environment0ColorBoost?.b||0,a:t.environment0ColorBoost?.a||0},environment1ColorBoost:{r:t.environment1ColorBoost?.r||0,g:t.environment1ColorBoost?.g||0,b:t.environment1ColorBoost?.b||0,a:t.environment1ColorBoost?.a||0},obstaclesColor:{r:t.obstaclesColor?.r||0,g:t.obstaclesColor?.g||0,b:t.obstaclesColor?.b||0,a:t.obstaclesColor?.a||0}};return t.environmentWColor&&(i.environmentWColor={r:t.environmentWColor?.r||0,g:t.environmentWColor?.g||0,b:t.environmentWColor?.b||0,a:t.environmentWColor?.a||0}),t.environmentWColorBoost&&(i.environmentWColorBoost={r:t.environmentWColorBoost?.r||0,g:t.environmentWColorBoost?.g||0,b:t.environmentWColorBoost?.b||0,a:t.environmentWColorBoost?.a||0}),i}),this.difficulties=(e.difficulties??et.defaultValue.difficulties).map(t=>new Tt(t)),this.customData=fe(e.customData??et.defaultValue.customData)}isValid(e,t){return t?super.isValid(e,t):super.isValid(e,t)&&this.audio.filename!==""&&this.audio.duration>0&&this.audio.previewDuration>0&&this.audio.previewStartTime>0&&this.audio.audioOffset>=0&&this.difficulties.every(i=>i.isValid())}clone(){return super.clone().setFilename(this.filename)}setFilename(e){return this.filename=e,this}setVersion(e){return this.version=e,this}sort(){return this.difficulties.sort((e,t)=>Ks[e.difficulty]-Ks[t.difficulty]).sort((e,t)=>(Wu[e.characteristic]||0)-(Wu[t.characteristic]||0)),this}addMap(e){return this.difficulties.push(new Tt(e)),this}}Object.defineProperty(et,"defaultValue",{enumerable:!0,configurable:!0,writable:!0,value:{version:-1,filename:"Info.dat",song:{title:"Untitled",subTitle:"",author:"NoAuthor"},audio:{filename:"",duration:0,audioDataFilename:"",bpm:0,lufs:0,previewStartTime:0,previewDuration:0,audioOffset:0,shuffle:0,shufflePeriod:.5},songPreviewFilename:"",coverImageFilename:"",environmentBase:{normal:null,allDirections:null},environmentNames:[],colorSchemes:[],difficulties:[],customData:{}}});var Qn;(function(n){n[n.NONE=0]="NONE",n[n.NORMAL=1]="NORMAL",n[n.ARC_HEAD=2]="ARC_HEAD",n[n.ARC_TAIL=3]="ARC_TAIL",n[n.CHAIN_HEAD=4]="CHAIN_HEAD",n[n.CHAIN_ELEMENT=5]="CHAIN_ELEMENT"})(Qn||(Qn={}));Qn.NONE+"",Qn.NORMAL+"",Qn.ARC_HEAD+"",Qn.ARC_TAIL+"",Qn.CHAIN_HEAD+"",Qn.CHAIN_ELEMENT+"";function tb(n){return["helpers","timeProcessor",n]}class Xa{constructor(e,t=[],i=0){Object.defineProperty(this,"bpm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_bpmChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_timeScale",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_offset",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.bpm=e,this._offset=i/1e3,this._timeScale=this.getTimeScale(t.filter(r=>("m"in r||"bpm"in r||"timescale"in r)&&!("o"in r))),this._bpmChange=this.getBpmChangeTime(t.filter(r=>"BPM"in r&&"metronomeOffset"in r||("_bpm"in r||"_BPM"in r)&&"_metronomeOffset"in r||"m"in r&&"o"in r)),this._timeScale.length&&this._bpmChange.length&&Vn.tWarn(tb("constructor"),"BPM change and BPM event should not be used along side together to avoid confusion between editors and in-game behaviour")}get change(){return this._bpmChange}set change(e){this._bpmChange=this.getBpmChangeTime(e)}get timescale(){return this._timeScale}set timescale(e){this._timeScale=this.getTimeScale(e)}get offset(){return this._offset*1e3}set offset(e){this._offset=e/1e3}getBpmChangeTime(e=[]){let t;const i=[];e=[...e].sort((r,s)=>(r.time??r._time??r.b)-(s.time??s._time??s.b));for(let r=0;r<e.length;r++){const s={time:e[r].time??e[r]._time??e[r].b,BPM:e[r].BPM??e[r]._BPM??e[r]._bpm??e[r].m,beatsPerBar:e[r].beatsPerBar??e[r]._beatsPerBar??e[r].p,metronomeOffset:e[r].metronomeOffset??e[r]._metronomeOffset??e[r].o,newTime:0};t?s.newTime=Math.ceil((s.time-t.time)/this.bpm*t.BPM+t.newTime-.01):s.newTime=Math.ceil(s.time-this._offset*this.bpm/60-.01),i.push(s),t=s}return i}getTimeScale(e=[]){return[...e].sort((t,i)=>(t.time??t.b)-(i.time??i.b)).map(t=>"scale"in t?t:"bpm"in t?{time:t.time,bpm:t.bpm,scale:this.bpm/t.bpm}:"m"in t?{time:t.b||0,bpm:t.m||this.bpm,scale:this.bpm/(t.m||this.bpm)}:{time:t.b||0,bpm:this.bpm,scale:1})}offsetBegone(e){return this._offset===0?e:this.toBeatTime(this.toRealTime(e,!1)-this._offset)}getBpmAtTime(e){return this._timeScale.reverse().find(t=>t.time<=e)?.bpm??this.bpm}toRealTimeAtOffset(e,t,i=!0){if(!i)return t/this.bpm*60;for(let r=this._timeScale.length-1;r>=0;r--)if(e>this._timeScale[r].time)return t*this._timeScale[r].scale/this.bpm*60;return t/this.bpm*60}toRealTime(e,t=!0){if(!t)return e/this.bpm*60;let i=0;for(let r=this._timeScale.length-1;r>=0;r--)e>this._timeScale[r].time&&(i+=(e-this._timeScale[r].time)*this._timeScale[r].scale,e=this._timeScale[r].time);return(e+i)/this.bpm*60}toBeatTime(e,t=!0){if(!t)return e*this.bpm/60;let i=0;for(let r=this._timeScale.length-1;r>=0;r--){const s=this.toRealTime(this._timeScale[r].time,t);e>s&&(i+=(e-s)/this._timeScale[r].scale,e=s)}return this.toBeatTime(e+i,!1)}toJsonTime(e){for(let t=this._bpmChange.length-1;t>=0;t--)if(e>this._bpmChange[t].newTime)return(e-this._bpmChange[t].newTime)/this._bpmChange[t].BPM*this.bpm+this._bpmChange[t].time;return this.toBeatTime(this.toRealTime(e,!1)+this._offset)}adjustTime(e){for(let t=this._bpmChange.length-1;t>=0;t--)if(e>this._bpmChange[t].time)return(e-this._bpmChange[t].time)/this.bpm*this._bpmChange[t].BPM+this._bpmChange[t].newTime;return this.offsetBegone(e)}}Object.defineProperty(Xa,"create",{enumerable:!0,configurable:!0,writable:!0,value:(n,e,t)=>new Xa(n,e,t)});function Zh(n){switch(n){case"info":case"difficulty":return"2.0.0";case"lightshow":return"3.0.0";default:return"4.0.0"}}function Jh(n){const e=n._version??n.version;return typeof e!="string"?null:e}function Qh(n,e){const t=ju(n),i=ju(e);for(const r in t){if(t[r]<i[r])return-1;if(t[r]>i[r])return 1}return 0}function ju(n){return n.split(".").map(e=>parseInt(e))}const Xu={serialize(n){return{difficulty:n.difficulty,difficultyRank:Ks[n.difficulty],audioPath:"",jsonPath:n.filename,characteristic:n.characteristic,offset:n.customData._editorOffset,oldOffset:n.customData._editorOldOffset,chromaToggle:n.customData._chromaToggle,customColors:n.customData._customColors,difficultyLabel:n.customData._difficultyLabel,colorLeft:ft(n.customData._colorLeft),colorRight:ft(n.customData._colorRight),envColorLeft:ft(n.customData._envColorLeft),envColorRight:ft(n.customData._envColorRight),obstacleColor:ft(n.customData._obstacleColor)}},deserialize(n={}){return{difficulty:n.difficulty,filename:n.jsonPath,njs:0,njsOffset:0,characteristic:n.characteristic,customData:{_editorOffset:n.offset,_editorOldOffset:n.oldOffset,_chromaToggle:n.chromaToggle,_customColors:n.customColors,_difficultyLabel:n.difficultyLabel,_colorLeft:ft(n.colorLeft),_colorRight:ft(n.colorRight),_envColorLeft:ft(n.envColorLeft),_envColorRight:ft(n.envColorRight),_obstacleColor:ft(n.obstacleColor)}}}},nb={serialize(n){return{songName:n.song.title,songSubName:n.song.subTitle,authorName:n.song.author,beatsPerMinute:n.audio.bpm,previewStartTime:n.audio.previewStartTime,previewDuration:n.audio.previewDuration,coverImagePath:n.coverImageFilename,environmentName:n.environmentBase.normal||n.environmentNames.find(e=>!ja(e))||"DefaultEnvironment",difficultyLevels:n.difficulties.map(Xu.serialize),oneSaber:n.difficulties.some(e=>e.characteristic==="OneSaber"),contributors:fe(n.customData._contributors),customEnvironment:n.customData._customEnvironment,customEnvironmentHash:n.customData._customEnvironmentHash}},deserialize(n={}){return{version:1,song:{title:n.songName,subTitle:n.songSubName,author:n.authorName},audio:{filename:n.difficultyLevels?.find(e=>e?.audioPath)?.audioPath,bpm:n.beatsPerMinute,previewStartTime:n.previewStartTime,previewDuration:n.previewDuration},songPreviewFilename:n.difficultyLevels?.find(e=>e?.audioPath)?.audioPath,coverImageFilename:n.coverImagePath,environmentBase:{normal:n.environmentName},difficulties:n.difficultyLevels?.map(Xu.deserialize),customData:{_contributors:n.contributors,_customEnvironment:n.customEnvironment,_customEnvironmentHash:n.customEnvironmentHash}}}},Yu={serialize(n){return{_difficulty:n.difficulty,_difficultyRank:Ks[n.difficulty],_beatmapFilename:n.filename,_noteJumpMovementSpeed:n.njs,_noteJumpStartBeatOffset:n.njsOffset,_beatmapColorSchemeIdx:n.colorSchemeId,_environmentNameIdx:n.environmentId,_customData:fe(n.customData)}},deserialize(n={}){return{difficulty:n._difficulty,filename:n._beatmapFilename,njs:n._noteJumpMovementSpeed,njsOffset:n._noteJumpStartBeatOffset,colorSchemeId:n._beatmapColorSchemeIdx,environmentId:n._environmentNameIdx,customData:n._customData}}},ib={serialize(n){const e=new Set,t={_version:"2.1.0",_songName:n.song.title,_songSubName:n.song.subTitle,_songAuthorName:n.song.author,_levelAuthorName:"",_beatsPerMinute:n.audio.bpm,_songTimeOffset:n.audio.audioOffset,_shuffle:n.audio.shuffle,_shufflePeriod:n.audio.shufflePeriod,_previewStartTime:n.audio.previewStartTime,_previewDuration:n.audio.previewDuration,_songFilename:n.audio.filename,_coverImageFilename:n.coverImageFilename,_environmentName:n.environmentBase.normal||n.environmentNames.find(i=>!ja(i))||"DefaultEnvironment",_allDirectionsEnvironmentName:n.environmentBase.allDirections||n.environmentNames.find(i=>ja(i))||"GlassDesertEnvironment",_environmentNames:n.environmentNames.map(i=>i),_colorSchemes:n.colorSchemes.map(i=>{const r={useOverride:i.overrideNotes||i.overrideLights,colorScheme:{colorSchemeId:i.name,saberAColor:ft(i.saberLeftColor),saberBColor:ft(i.saberRightColor),environmentColor0:ft(i.environment0Color),environmentColor1:ft(i.environment1Color),obstaclesColor:ft(i.obstaclesColor),environmentColor0Boost:ft(i.environment0ColorBoost),environmentColor1Boost:ft(i.environment1ColorBoost)}};return i.environmentWColor&&(r.colorScheme.environmentColorW=ft(i.environmentWColor)),i.environmentWColorBoost&&(r.colorScheme.environmentColorWBoost=ft(i.environmentWColorBoost)),r}),_customData:fe(n.customData),_difficultyBeatmapSets:n.difficulties.reduce((i,r)=>{let s=i.find(o=>o._beatmapCharacteristicName===r.characteristic);return s||(s={_beatmapCharacteristicName:r.characteristic,_difficultyBeatmaps:[]},i.push(s)),r.authors.mappers.forEach(o=>e.add(o)),r.authors.lighters.forEach(o=>e.add(o)),s._difficultyBeatmaps.push(Yu.serialize(r)),i},[])};return t._levelAuthorName=[...e].join(", "),t},deserialize(n={}){return{version:2,song:{title:n._songName,subTitle:n._songSubName,author:n._songAuthorName},audio:{bpm:n._beatsPerMinute,previewStartTime:n._previewStartTime,previewDuration:n._previewDuration,filename:n._songFilename,audioOffset:n._songTimeOffset,shuffle:n._shuffle,shufflePeriod:n._shufflePeriod},songPreviewFilename:n._songFilename,coverImageFilename:n._coverImageFilename,environmentBase:{normal:n._environmentName,allDirections:n._allDirectionsEnvironmentName},environmentNames:n._environmentNames?.map(t=>t),colorSchemes:n._colorSchemes?.map(t=>{const i={name:t.colorScheme?.colorSchemeId,overrideNotes:!!t.useOverride,overrideLights:!!t.useOverride,saberLeftColor:{r:t.colorScheme?.saberAColor?.r,g:t.colorScheme?.saberAColor?.g,b:t.colorScheme?.saberAColor?.b,a:t.colorScheme?.saberAColor?.a},saberRightColor:{r:t.colorScheme?.saberBColor?.r,g:t.colorScheme?.saberBColor?.g,b:t.colorScheme?.saberBColor?.b,a:t.colorScheme?.saberBColor?.a},environment0Color:{r:t.colorScheme?.environmentColor0?.r,g:t.colorScheme?.environmentColor0?.g,b:t.colorScheme?.environmentColor0?.b,a:t.colorScheme?.environmentColor0?.a},environment1Color:{r:t.colorScheme?.environmentColor1?.r,g:t.colorScheme?.environmentColor1?.g,b:t.colorScheme?.environmentColor1?.b,a:t.colorScheme?.environmentColor1?.a},obstaclesColor:{r:t.colorScheme?.obstaclesColor?.r,g:t.colorScheme?.obstaclesColor?.g,b:t.colorScheme?.obstaclesColor?.b,a:t.colorScheme?.obstaclesColor?.a},environment0ColorBoost:{r:t.colorScheme?.environmentColor0Boost?.r,g:t.colorScheme?.environmentColor0Boost?.g,b:t.colorScheme?.environmentColor0Boost?.b,a:t.colorScheme?.environmentColor0Boost?.a},environment1ColorBoost:{r:t.colorScheme?.environmentColor1Boost?.r,g:t.colorScheme?.environmentColor1Boost?.g,b:t.colorScheme?.environmentColor1Boost?.b,a:t.colorScheme?.environmentColor1Boost?.a}};return t.colorScheme?.environmentColorW&&(i.environmentWColor={r:t.colorScheme?.environmentColorW?.r,g:t.colorScheme?.environmentColorW?.g,b:t.colorScheme?.environmentColorW?.b,a:t.colorScheme?.environmentColorW?.a}),t.colorScheme?.environmentColorWBoost&&(i.environmentWColorBoost={r:t.colorScheme?.environmentColorWBoost?.r,g:t.colorScheme?.environmentColorWBoost?.g,b:t.colorScheme?.environmentColorWBoost?.b,a:t.colorScheme?.environmentColorWBoost?.a}),i}),difficulties:n._difficultyBeatmapSets?.flatMap(t=>t._difficultyBeatmaps?.map(i=>{const r=Yu.deserialize(i);return r.characteristic=t._beatmapCharacteristicName,r.authors={mappers:[n._levelAuthorName]},r})),customData:n._customData}}},qu={serialize(n){return{characteristic:n.characteristic,difficulty:n.difficulty,beatmapAuthors:{mappers:[...n.authors.mappers],lighters:[...n.authors.lighters]},environmentNameIdx:n.environmentId,beatmapColorSchemeIdx:n.colorSchemeId,noteJumpMovementSpeed:n.njs,noteJumpStartBeatOffset:n.njsOffset,lightshowDataFilename:n.lightshowFilename,beatmapDataFilename:n.filename,customData:fe(n.customData)}},deserialize(n={}){return{characteristic:n.characteristic,difficulty:n.difficulty,authors:{mappers:n.beatmapAuthors?.mappers?.map(e=>e),lighters:n.beatmapAuthors?.lighters?.map(e=>e)},filename:n.beatmapDataFilename,lightshowFilename:n.lightshowDataFilename,njs:n.noteJumpMovementSpeed,njsOffset:n.noteJumpStartBeatOffset,colorSchemeId:n.beatmapColorSchemeIdx,environmentId:n.environmentNameIdx,customData:n.customData}}},rb={serialize(n){return{version:"4.0.1",song:{author:n.song.author,title:n.song.title,subTitle:n.song.subTitle},audio:{songFilename:n.audio.filename,songDuration:n.audio.duration,audioDataFilename:n.audio.audioDataFilename,bpm:n.audio.bpm,lufs:n.audio.lufs,previewStartTime:n.audio.previewStartTime,previewDuration:n.audio.previewDuration},songPreviewFilename:n.songPreviewFilename,coverImageFilename:n.coverImageFilename,environmentNames:n.environmentNames.map(e=>e),colorSchemes:n.colorSchemes.map(e=>{const t={colorSchemeName:e.name,overrideNotes:e.overrideNotes,overrideLights:e.overrideLights,saberAColor:Ln(e.saberLeftColor),saberBColor:Ln(e.saberRightColor),environmentColor0:Ln(e.environment0Color),environmentColor1:Ln(e.environment1Color),obstaclesColor:Ln(e.obstaclesColor),environmentColor0Boost:Ln(e.environment0ColorBoost),environmentColor1Boost:Ln(e.environment1ColorBoost)};return e.environmentWColor&&(t.environmentColorW=Ln(e.environmentWColor)),e.environmentWColorBoost&&(t.environmentColorWBoost=Ln(e.environmentWColorBoost)),t}),difficultyBeatmaps:n.difficulties.map(qu.serialize),customData:fe(n.customData)}},deserialize(n={}){return{version:4,song:{author:n.song?.author,title:n.song?.title,subTitle:n.song?.subTitle},audio:{filename:n.audio?.songFilename,duration:n.audio?.songDuration,audioDataFilename:n.audio?.audioDataFilename,bpm:n.audio?.bpm,lufs:n.audio?.lufs,previewStartTime:n.audio?.previewStartTime,previewDuration:n.audio?.previewDuration},songPreviewFilename:n.songPreviewFilename,coverImageFilename:n.coverImageFilename,environmentNames:n.environmentNames?.map(e=>e),colorSchemes:n.colorSchemes?.map(e=>{e=e;const t={name:e.colorSchemeName||"",overrideNotes:e.overrideNotes||n.version==="4.0.0",overrideLights:e.overrideLights||n.version==="4.0.0",saberLeftColor:Ht(rn(e.saberAColor),!0),saberRightColor:Ht(rn(e.saberBColor),!0),environment0Color:Ht(rn(e.environmentColor0),!0),environment1Color:Ht(rn(e.environmentColor1),!0),obstaclesColor:Ht(rn(e.obstaclesColor),!0),environment0ColorBoost:Ht(rn(e.environmentColor0Boost),!0),environment1ColorBoost:Ht(rn(e.environmentColor1Boost),!0)};return e.environmentColorW&&(t.environmentWColor=Ht(rn(e.environmentColorW),!0)),e.environmentColorWBoost&&(t.environmentWColorBoost=Ht(rn(e.environmentColorWBoost),!0)),t}),difficulties:(n.difficultyBeatmaps??[]).map(e=>qu.deserialize(e)),customData:n.customData}}},sb={serialize(n){return{_version:"2.0.0",_songSampleCount:n.sampleCount,_songFrequency:n.frequency,_regions:n.bpmData.map(e=>({_startBeat:e.startBeat,_endBeat:e.endBeat,_startSampleIndex:e.startSampleIndex,_endSampleIndex:e.endSampleIndex}))}},deserialize(n={}){return{version:2,sampleCount:n._songSampleCount,frequency:n._songFrequency,bpmData:n._regions?.map(e=>({startBeat:e?._startBeat,endBeat:e?._endBeat,startSampleIndex:e?._startSampleIndex,endSampleIndex:e?._endSampleIndex}))}}},ob={serialize(n){return{version:"4.0.0",songChecksum:n.audioChecksum,songSampleCount:n.sampleCount,songFrequency:n.frequency,bpmData:n.bpmData.map(e=>({sb:e.startBeat,eb:e.endBeat,si:e.startSampleIndex,ei:e.endSampleIndex})),lufsData:n.lufsData.map(e=>({l:e.lufs,si:e.startSampleIndex,ei:e.endSampleIndex}))}},deserialize(n={}){return{version:4,audioChecksum:n.songChecksum,sampleCount:n.songSampleCount,frequency:n.songFrequency,bpmData:n.bpmData?.map(e=>({startBeat:e?.sb,endBeat:e?.eb,startSampleIndex:e?.si,endSampleIndex:e?.ei})),lufsData:n.lufsData?.map(e=>({lufs:e?.l,startSampleIndex:e?.si,endSampleIndex:e?.ei}))}}},$u={serialize(n){return{_time:n.time,_lineIndex:n.posX,_lineLayer:n.posY,_type:3,_cutDirection:n.direction}},deserialize(n={}){return{time:n._time,posX:n._lineIndex,posY:n._lineLayer,direction:n._cutDirection}}},Ku={serialize(n){return{_time:n.time,_lineIndex:n.posX,_lineLayer:n.posY,_type:n.color,_cutDirection:n.direction}},deserialize(n={}){return{time:n._time,posX:n._lineIndex,posY:n._lineLayer,color:n._type,direction:n._cutDirection}}},Zu={serialize(n){return{_time:n.time,_type:n.type,_value:n.value}},deserialize(n={}){return{time:n._time,type:n._type,value:n._value,floatValue:1}}},Ju={serialize(n){return{_time:n.time,_type:5,_value:n.toggle?1:0}},deserialize(n={}){return{time:n._time,toggle:n._value===1}}},Qu={serialize(n){let e=n.rotation%360;return e>=-60&&e<=60&&e%15===0&&e/15!==0?e=$h[e]||e+1360:e+=1360,{_time:n.time,_type:n.executionTime===1?15:14,_value:e}},deserialize(n={}){const e=n._value??0;return{time:n._time,executionTime:n._type===15?1:0,rotation:e>=1e3?(e-1360)%360:qh[e]??0}}},ec={serialize(n){return{_time:n.time,_type:100,_value:Math.round(n.bpm)}},deserialize(n={}){return{time:n._time,bpm:n._value}}},tc={serialize(n){let e=0;return n.height>=0&&n.posY>=0&&(e=n.height*1e3+n.posY+4001),{_time:n.time,_type:n.posY===2&&n.height===3?1:n.posY===0&&n.height===5?0:e,_lineIndex:n.posX,_duration:n.duration,_width:n.width}},deserialize(n={}){const e=n._type??0,t=e===1?3:e>=1e3&&e<=4e3?Yh(e,1e3,4e3,0,15):e>4e3&&e<=4005e3?0:5,i=e===1?2:e>4e3&&e<=4005e3?Math.floor((e-4001)/1e3):0;return{time:n._time,posY:i,posX:n._lineIndex,duration:n._duration,width:n._width,height:t}}},ab={serialize(n){return{_version:"1.5.0",_beatsPerMinute:120,_beatsPerBar:4,_shuffle:0,_shufflePeriod:.5,_noteJumpSpeed:10,_noteJumpStartBeatOffset:0,_notes:[...n.difficulty.colorNotes.map(Ku.serialize),...n.difficulty.bombNotes.map($u.serialize)],_obstacles:n.difficulty.obstacles.map(tc.serialize),_events:[...n.lightshow.basicEvents.map(Zu.serialize),...n.lightshow.colorBoostEvents.map(Ju.serialize),...n.difficulty.rotationEvents.map(Qu.serialize),...n.difficulty.bpmEvents.map(ec.serialize)],_time:n.difficulty.customData._time,_BPMChanges:n.difficulty.customData._bpmChanges,_bookmarks:n.difficulty.customData._bookmarks}},deserialize(n={}){const e=[],t=[],i=n._notes||[];for(let u=0;u<i.length;u++){const c=i[u];c?._type===3?t.push($u.deserialize(c)):e.push(Ku.deserialize(c))}const r=[],s=[],o=[],a=[],l=n._events||[];for(let u=0;u<l.length;u++){const c=l[u];switch(c?._type){case 5:s.push(Ju.deserialize(c));break;case 14:case 15:o.push(Qu.deserialize(c));break;case 100:case 10:a.push(ec.deserialize(c));break;default:r.push(Zu.deserialize(c))}}return{version:1,difficulty:{colorNotes:e,bombNotes:t,obstacles:n._obstacles?.map(tc.deserialize),bpmEvents:a,rotationEvents:o,customData:{_bpmChanges:n._BPMChanges,_bookmarks:n._bookmarks,_time:n._time}},lightshow:{basicEvents:r,colorBoostEvents:s}}}},nc={serialize(n){return{_time:n.time,_type:n.color,_lineIndex:n.posX,_lineLayer:n.posY,_cutDirection:n.direction,_customData:fe(n.customData)}},deserialize(n={}){return{time:n._time,posX:n._lineIndex,posY:n._lineLayer,color:n._type,direction:n._cutDirection,customData:n._customData}}},lb={serialize(n){return{_colorType:n.color,_headTime:n.time,_headLineIndex:n.posX,_headLineLayer:n.posY,_headCutDirection:n.direction,_headControlPointLengthMultiplier:n.lengthMultiplier,_tailTime:n.tailTime,_tailLineIndex:n.tailPosX,_tailLineLayer:n.tailPosY,_tailCutDirection:n.tailDirection,_tailControlPointLengthMultiplier:n.tailLengthMultiplier,_sliderMidAnchorMode:n.midAnchor,_customData:fe(n.customData)}},deserialize(n={}){return{color:n._colorType,time:n._headTime,posX:n._headLineIndex,posY:n._headLineLayer,direction:n._headCutDirection,lengthMultiplier:n._headControlPointLengthMultiplier,tailTime:n._tailTime,tailPosX:n._tailLineIndex,tailPosY:n._tailLineLayer,tailDirection:n._tailCutDirection,tailLengthMultiplier:n._tailControlPointLengthMultiplier,midAnchor:n._sliderMidAnchorMode,customData:n._customData}}},ic={serialize(n){let e=0;return n.height>=0&&n.posY>=0&&(e=Math.floor(n.height*1e3+n.posY+4001)),{_time:n.time,_type:n.posY===2&&n.height===3?1:n.posY===0&&n.height===5?0:e,_lineIndex:n.posX,_duration:n.duration,_width:n.width,_customData:fe(n.customData)}},deserialize(n={}){const e=n._type??0,t=e===1?3:e>=1e3&&e<=4e3?Yh(e,1e3,4e3,0,15):e>4e3&&e<=4005e3?0:5,i=e===1?2:e>4e3&&e<=4005e3?Math.floor((e-4001)/1e3):0;return{time:n._time,posY:i,posX:n._lineIndex,duration:n._duration,width:n._width,height:t,customData:n._customData}}},rc={serialize(n){return{_time:n.time,_type:n.type,_value:n.value,_floatValue:n.floatValue,_customData:fe(n.customData)}},deserialize(n={}){return{time:n._time,type:n._type,value:n._value,floatValue:n._floatValue,customData:n._customData}}},sc={serialize(n){return{_time:n.time,_lineIndex:n.posX,_lineLayer:n.posY,_offsetDirection:n.direction,_customData:fe(n.customData)}},deserialize(n={}){return{time:n._time,posX:n._lineIndex,posY:n._lineLayer,direction:n._offsetDirection,customData:n._customData}}},oc={serialize(n){return{_keyword:n.keyword,_specialEvents:n.events}},deserialize(n={}){return{keyword:n._keyword,events:n._specialEvents}}},ac={serialize(n){return{_keywords:n.list.map(oc.serialize)}},deserialize(n={}){return{list:n._keywords?.map(oc.deserialize)}}},lc={serialize(n){return{_time:n.time,_type:3,_lineIndex:n.posX,_lineLayer:n.posY,_cutDirection:n.direction,_customData:fe(n.customData)}},deserialize(n={}){return{time:n._time,posX:n._lineIndex,posY:n._lineLayer,customData:n._customData}}},uc={serialize(n){return{_time:n.time,_type:5,_value:n.toggle?1:0,_floatValue:0,_customData:fe(n.customData)}},deserialize(n={}){return{time:n._time,toggle:n._value===1,customData:n._customData}}},cc={serialize(n){let e=n.rotation%360;const t=fe(n.customData);return e>=-60&&e<=60&&e%15===0&&e/15!==0?e=$h[e]||e+1360:(t._rotation=e,e+=1360),{_time:n.time,_type:n.executionTime===1?15:14,_value:e,_floatValue:0,_customData:t}},deserialize(n={}){const e=n._value??0;return{time:n._time,executionTime:n._type===15?1:0,rotation:typeof n._customData?._rotation=="number"?n._customData._rotation:e>=1e3?(e-1360)%360:qh[e]??0,customData:n._customData}}},ra={serialize(n){return{_time:n.time,_type:100,_value:0,_floatValue:n.bpm,_customData:fe(n.customData)}},deserialize(n={}){return{time:n._time,bpm:n._floatValue??n._value,customData:n._customData}}},ub={serialize(n){return{_version:"2.6.0",_notes:[...n.difficulty.colorNotes.map(nc.serialize),...n.difficulty.bombNotes.map(lc.serialize)].sort(eb),_sliders:n.difficulty.arcs.map(lb.serialize),_obstacles:n.difficulty.obstacles.map(ic.serialize),_events:[...n.lightshow.basicEvents.map(rc.serialize),...n.lightshow.colorBoostEvents.map(uc.serialize),...n.difficulty.rotationEvents.map(cc.serialize),...n.difficulty.bpmEvents.map(ra.serialize)].sort(Q_),_waypoints:n.lightshow.waypoints.map(sc.serialize),_specialEventsKeywordFilters:ac.serialize(n.lightshow.basicEventTypesWithKeywords),_customData:fe(n.difficulty.customData)}},deserialize(n={}){const e=[],t=[],i=n._notes||[];for(let c=0;c<i.length;c++){const d=i[c];d?._type===3?t.push(lc.deserialize(d)):e.push(nc.deserialize(d))}const r=Qh(n._version||"2.0.0","2.5.0"),s=[],o=[],a=[],l=[],u=n._events||[];for(let c=0;c<u.length;c++){const d=u[c];switch(d?._type){case 5:o.push(uc.deserialize(d));break;case 14:case 15:a.push(cc.deserialize(d));break;case 100:l.push(ra.deserialize(d));break;default:{const m=rc.deserialize(d);r<0?d._type===10?l.push(ra.deserialize(d)):(m.floatValue=1,s.push(m)):s.push(m)}}}return{version:2,difficulty:{colorNotes:e,bombNotes:t,obstacles:n._obstacles?.map(ic.deserialize),bpmEvents:l,rotationEvents:a,customData:n._customData},lightshow:{basicEvents:s,colorBoostEvents:o,waypoints:n._waypoints?.map(sc.deserialize),basicEventTypesWithKeywords:ac.deserialize(n._specialEventsKeywordFilters)}}}},Zs={serialize(n){return{b:n.time,et:n.type,i:n.value,f:n.floatValue,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,type:n.et,value:n.i,floatValue:n.f,customData:n.customData}}},hc={serialize(n){return{k:n.keyword,e:n.events.map(e=>e)}},deserialize(n={}){return{keyword:n.k,events:n.e?.map(e=>e)}}},Js={serialize(n){return{d:n.list.map(hc.serialize)}},deserialize(n={}){return{list:n.d?.map(hc.deserialize)}}},fc={serialize(n){return{b:n.time,x:n.posX,y:n.posY,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,posX:n.x,posY:n.y,customData:n.customData}}},dc={serialize(n){return{b:n.time,m:n.bpm,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,bpm:n.m,customData:n.customData}}},pc={serialize(n){return{b:n.time,c:n.color,x:n.posX,y:n.posY,d:n.direction,tb:n.tailTime,tx:n.tailPosX,ty:n.tailPosY,sc:n.sliceCount,s:n.squish,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,color:n.c,posX:n.x,posY:n.y,direction:n.d,tailTime:n.tb,tailPosX:n.tx,tailPosY:n.ty,sliceCount:n.sc,squish:n.s,customData:n.customData}}},Qs={serialize(n){return{b:n.time,o:n.toggle,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,toggle:n.o,customData:n.customData}}},mc={serialize(n){return{b:n.time,c:n.color,x:n.posX,y:n.posY,d:n.direction,a:n.angleOffset,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,posX:n.x,posY:n.y,color:n.c,direction:n.d,angleOffset:n.a,customData:n.customData}}},pi={serialize(n){return{f:n.type,p:n.p0,t:n.p1,r:n.reverse,c:n.chunks,n:n.random,s:n.seed,l:n.limit,d:n.limitAffectsType,customData:fe(n.customData)}},deserialize(n={}){return{type:n.f,p0:n.p,p1:n.t,reverse:n.r,chunks:n.c,random:n.n,seed:n.s,limit:n.l,limitAffectsType:n.d,customData:n.customData}}},gc={serialize(n){return{b:n.time,c:n.color,f:n.frequency,i:n.previous?Pi.EXTEND:n.easing===Ur.NONE?Pi.INSTANT:Pi.INTERPOLATE,s:n.brightness,sb:n.strobeBrightness,sf:n.strobeFade,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,color:n.c,frequency:n.f,previous:n.i===Pi.EXTEND?1:0,easing:n.i===Pi.INTERPOLATE?Ur.LINEAR:Ur.NONE,brightness:n.s,strobeBrightness:n.sb,strobeFade:n.sf,customData:n.customData}}},vc={serialize(n){return{f:pi.serialize(n.filter),w:n.beatDistribution,d:n.beatDistributionType,r:n.brightnessDistribution,t:n.brightnessDistributionType,b:n.affectFirst,i:n.easing,e:n.events.map(gc.serialize),customData:fe(n.customData)}},deserialize(n={}){return{filter:pi.deserialize(n.f),beatDistribution:n.w,beatDistributionType:n.d,brightnessDistribution:n.r,brightnessDistributionType:n.t,affectFirst:n.b,easing:n.i,events:n.e?.map(gc.deserialize),customData:n.customData}}},eo={serialize(n){return{b:n.time,g:n.id,e:n.boxes.map(vc.serialize),customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,id:n.g,boxes:n.e?.map(vc.deserialize),customData:n.customData}}},_c={serialize(n){return{b:n.time,e:n.easing,l:n.loop,o:n.direction,p:n.previous,r:n.rotation,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,easing:n.e,loop:n.l,direction:n.o,previous:n.p,rotation:n.r,customData:n.customData}}},bc={serialize(n){return{f:pi.serialize(n.filter),w:n.beatDistribution,d:n.beatDistributionType,s:n.rotationDistribution,t:n.rotationDistributionType,a:n.axis,r:n.flip,b:n.affectFirst,i:n.easing,l:n.events.map(_c.serialize),customData:fe(n.customData)}},deserialize(n={}){return{filter:pi.deserialize(n.f),beatDistribution:n.w,beatDistributionType:n.d,rotationDistribution:n.s,rotationDistributionType:n.t,axis:n.a,flip:n.r,affectFirst:n.b,easing:n.i,events:n.l?.map(_c.deserialize),customData:n.customData}}},to={serialize(n){return{b:n.time,g:n.id,e:n.boxes.map(bc.serialize),customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,id:n.g,boxes:n.e?.map(bc.deserialize),customData:n.customData}}},yc={serialize(n){return{b:n.time,e:n.easing,p:n.previous,t:n.translation,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,easing:n.e,previous:n.p,translation:n.t,customData:n.customData}}},xc={serialize(n){return{f:pi.serialize(n.filter),w:n.beatDistribution,d:n.beatDistributionType,s:n.gapDistribution,t:n.gapDistributionType,a:n.axis,r:n.flip,b:n.affectFirst,i:n.easing,l:n.events.map(yc.serialize),customData:fe(n.customData)}},deserialize(n={}){return{filter:pi.deserialize(n.f),beatDistribution:n.w,beatDistributionType:n.d,gapDistribution:n.s,gapDistributionType:n.t,axis:n.a,flip:n.r,affectFirst:n.b,easing:n.i,events:n.l?.map(yc.deserialize),customData:n.customData}}},no={serialize(n){return{b:n.time,g:n.id,e:n.boxes.map(xc.serialize),customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,id:n.g,boxes:n.e?.map(xc.deserialize),customData:n.customData}}},Sc={serialize(n){return{b:n.time,x:n.posX,y:n.posY,d:n.duration,w:n.width,h:n.height,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,posX:n.x,posY:n.y,duration:n.d,width:n.w,height:n.h,customData:n.customData}}},Ec={serialize(n){return{b:n.time,e:n.executionTime,r:n.rotation,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,executionTime:n.e,rotation:n.r,customData:n.customData}}},wc={serialize(n){return{b:n.time,c:n.color,x:n.posX,y:n.posY,d:n.direction,mu:n.lengthMultiplier,tb:n.tailTime,tx:n.tailPosX,ty:n.tailPosY,tc:n.tailDirection,tmu:n.tailLengthMultiplier,m:n.midAnchor,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,color:n.c,posX:n.x,posY:n.y,direction:n.d,lengthMultiplier:n.mu,tailTime:n.tb,tailPosX:n.tx,tailPosY:n.ty,tailDirection:n.tc,tailLengthMultiplier:n.tmu,midAnchor:n.m,customData:n.customData}}},Mc={serialize(n){return{b:n.time,x:n.posX,y:n.posY,d:n.direction,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,posX:n.x,posY:n.y,direction:n.d,customData:n.customData}}},Tc={serialize(n){return{b:n.time,i:n.easing,p:n.previous,v:n.value,customData:fe(n.customData)}},deserialize(n={}){return{time:n.b,easing:n.i,previous:n.p,value:n.v,customData:n.customData}}},Ac={serialize(n){return{data:{f:pi.serialize(n.filter),w:n.beatDistribution,d:n.beatDistributionType,s:n.fxDistribution,t:n.fxDistributionType,b:n.affectFirst,i:n.easing,l:[],customData:fe(n.customData)},eventData:n.events.map(Tc.serialize)}},deserialize(n={}){return{filter:pi.deserialize(n.data?.f),beatDistribution:n.data?.w,beatDistributionType:n.data?.d,fxDistribution:n.data?.s,fxDistributionType:n.data?.t,affectFirst:n.data?.b,easing:n.data?.i,events:n.eventData?.map(Tc.deserialize),customData:n.data?.customData}}},io={serialize(n){return{object:{t:Wa.FLOAT,b:n.time,g:n.id,e:[],customData:fe(n.customData)},boxData:n.boxes.map(Ac.serialize)}},deserialize(n={}){const e={};return e.time=n.object?.b,e.id=n.object?.g,e.boxes=n.boxData?.map(Ac.deserialize),e.customData=n.object?.customData,e}},cb={serialize(n){const e={version:"3.3.0",bpmEvents:n.difficulty.bpmEvents.map(dc.serialize),rotationEvents:n.difficulty.rotationEvents.map(Ec.serialize),colorNotes:n.difficulty.colorNotes.map(mc.serialize),bombNotes:n.difficulty.bombNotes.map(fc.serialize),obstacles:n.difficulty.obstacles.map(Sc.serialize),sliders:n.difficulty.arcs.map(wc.serialize),burstSliders:n.difficulty.chains.map(pc.serialize),waypoints:n.lightshow.waypoints.map(Mc.serialize),basicBeatmapEvents:n.lightshow.basicEvents.map(Zs.serialize),colorBoostBeatmapEvents:n.lightshow.colorBoostEvents.map(Qs.serialize),lightColorEventBoxGroups:n.lightshow.lightColorEventBoxGroups.map(eo.serialize),lightRotationEventBoxGroups:n.lightshow.lightRotationEventBoxGroups.map(to.serialize),lightTranslationEventBoxGroups:n.lightshow.lightTranslationEventBoxGroups.map(no.serialize),vfxEventBoxGroups:[],basicEventTypesWithKeywords:Js.serialize(n.lightshow.basicEventTypesWithKeywords),_fxEventsCollection:{_fl:[],_il:[]},useNormalEventsAsCompatibleEvents:n.lightshow.useNormalEventsAsCompatibleEvents,customData:fe(n.difficulty.customData)};for(const t of n.lightshow.fxEventBoxGroups.map(io.serialize)){e.vfxEventBoxGroups.push(t.object);for(const i of t.boxData){t.object.e.push(i.data);for(const r of i.eventData)i.data.l.push(e._fxEventsCollection._fl.length),e._fxEventsCollection._fl.push(r)}}return e},deserialize:function(n={}){const e={version:3,difficulty:{},lightshow:{}};e.difficulty.bpmEvents=n.bpmEvents?.map(dc.deserialize),e.difficulty.rotationEvents=n.rotationEvents?.map(Ec.deserialize),e.difficulty.colorNotes=n.colorNotes?.map(mc.deserialize),e.difficulty.bombNotes=n.bombNotes?.map(fc.deserialize),e.difficulty.obstacles=n.obstacles?.map(Sc.deserialize),e.difficulty.arcs=n.sliders?.map(wc.deserialize),e.difficulty.chains=n.burstSliders?.map(pc.deserialize),e.lightshow.waypoints=n.waypoints?.map(Mc.deserialize),e.lightshow.basicEvents=n.basicBeatmapEvents?.map(Zs.deserialize),e.lightshow.colorBoostEvents=n.colorBoostBeatmapEvents?.map(Qs.deserialize),e.lightshow.lightColorEventBoxGroups=n.lightColorEventBoxGroups?.map(eo.deserialize),e.lightshow.lightRotationEventBoxGroups=n.lightRotationEventBoxGroups?.map(to.deserialize),e.lightshow.lightTranslationEventBoxGroups=n.lightTranslationEventBoxGroups?.map(no.deserialize);const t=n._fxEventsCollection?._fl;return e.lightshow.fxEventBoxGroups=n.vfxEventBoxGroups?.map(i=>io.deserialize({object:i,boxData:i.e?.map(r=>({data:r,eventData:r.l?.map(s=>t[s])}))})),e.lightshow.basicEventTypesWithKeywords=Js.deserialize(n.basicEventTypesWithKeywords),e.lightshow.useNormalEventsAsCompatibleEvents=n.useNormalEventsAsCompatibleEvents,e.difficulty.customData=n.customData,e}},Cc={serialize(n){return{object:{b:n.time,i:0,r:n.laneRotation,customData:{}},data:{x:n.posX,y:n.posY,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,laneRotation:n.object?.r,posX:n.data?.x,posY:n.data?.y,customData:n.data?.customData}}},Dc={serialize(n){return{object:{hb:n.time,hr:n.laneRotation,tb:n.tailTime,tr:n.tailLaneRotation,i:0,ci:0,customData:{}},data:{c:n.color,x:n.posX,y:n.posY,d:n.direction,a:0,customData:{}},chainData:{tx:n.tailPosX,ty:n.tailPosY,c:n.sliceCount,s:n.squish,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.hb,laneRotation:n.object?.hr,color:n.data?.c,posX:n.data?.x,posY:n.data?.y,direction:n.data?.d,tailTime:n.object?.tb,tailLaneRotation:n.object?.tr,tailPosX:n.chainData?.tx,tailPosY:n.chainData?.ty,sliceCount:n.chainData?.c,squish:n.chainData?.s,customData:n.chainData?.customData}}},Rc={serialize(n){return{object:{b:n.time,i:0,r:n.laneRotation,customData:{}},data:{c:n.color,x:n.posX,y:n.posY,d:n.direction,a:n.angleOffset,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,laneRotation:n.object?.r,posX:n.data?.x,posY:n.data?.y,color:n.data?.c,direction:n.data?.d,angleOffset:n.data?.a,customData:n.data?.customData}}},Pc={serialize(n){return{object:{b:n.time,i:0,r:n.laneRotation,customData:{}},data:{x:n.posX,y:n.posY,d:n.duration,w:n.width,h:n.height,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,laneRotation:n.object?.r,posX:n.data?.x,posY:n.data?.y,duration:n.data?.d,width:n.data?.w,height:n.data?.h,customData:n.data?.customData}}},Ic={serialize(n){return{object:{ai:0,hb:n.time,hi:0,hr:n.laneRotation,tb:n.tailTime,ti:0,tr:n.tailLaneRotation,customData:{}},data:{m:n.lengthMultiplier,tm:n.tailLengthMultiplier,a:n.midAnchor,customData:fe(n.customData)},headData:{c:n.color,x:n.posX,y:n.posY,d:n.direction,a:0,customData:{}},tailData:{c:n.color,x:n.tailPosX,y:n.tailPosY,d:n.tailDirection,a:0,customData:{}}}},deserialize(n={}){return{time:n.object?.hb,laneRotation:n.object?.hr,tailTime:n.object?.tb,tailLaneRotation:n.object?.tr,color:n.headData?.c,posX:n.headData?.x,posY:n.headData?.y,direction:n.headData?.d,lengthMultiplier:n.data?.m,tailPosX:n.tailData?.x,tailPosY:n.tailData?.y,tailDirection:n.tailData?.d,tailLengthMultiplier:n.data?.tm,midAnchor:n.data?.a,customData:n.data?.customData}}},Lc={serialize(n){return{object:{b:n.time},data:{e:n.executionTime,r:n.rotation,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,executionTime:n.data?.e,rotation:n.data?.r,customData:n.data?.customData}}},Nc={serialize(n){return{object:{b:n.time,i:0,customData:{}},data:{d:n.value,p:n.previous,e:n.easing,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,value:n.data?.d,previous:n.data?.p,easing:n.data?.e,customData:n.data?.customData}}},hb={serialize(n){const e={version:"4.1.0",colorNotes:[],bombNotes:[],obstacles:[],chains:[],arcs:[],spawnRotations:[],colorNotesData:[],bombNotesData:[],obstaclesData:[],chainsData:[],arcsData:[],spawnRotationsData:[],njsEvents:[],njsEventData:[],customData:fe(n.difficulty.customData)};for(const t of n.difficulty.colorNotes.map(Rc.serialize))e.colorNotes.push(t.object),t.object.i=e.colorNotesData.length,e.colorNotesData.push(t.data);for(const t of n.difficulty.bombNotes.map(Cc.serialize))e.bombNotes.push(t.object),t.object.i=e.bombNotesData.length,e.bombNotesData.push(t.data);for(const t of n.difficulty.obstacles.map(Pc.serialize))e.obstacles.push(t.object),t.object.i=e.obstaclesData.length,e.obstaclesData.push(t.data);for(const t of n.difficulty.arcs.map(Ic.serialize))e.arcs.push(t.object),t.object.ai=e.arcsData.length,e.arcsData.push(t.data),t.object.hi=e.colorNotesData.length,e.colorNotesData.push(t.headData),t.object.ti=e.colorNotesData.length,e.colorNotesData.push(t.tailData);for(const t of n.difficulty.chains.map(Dc.serialize))e.chains.push(t.object),t.object.i=e.colorNotesData.length,e.colorNotesData.push(t.data),t.object.ci=e.chainsData.length,e.chainsData.push(t.chainData);for(const t of n.difficulty.rotationEvents.map(Lc.serialize))e.spawnRotations.push(t.object),t.object.i=e.spawnRotationsData.length,e.spawnRotationsData.push(t.data);for(const t of n.difficulty.njsEvents.map(Nc.serialize))e.njsEvents.push(t.object),t.object.i=e.njsEventData.length,e.njsEventData.push(t.data);return e},deserialize(n={}){return{version:4,difficulty:{colorNotes:n.colorNotes?.map(e=>Rc.deserialize({object:e,data:n.colorNotesData?.[e?.i||0]})),bombNotes:n.bombNotes?.map(e=>Cc.deserialize({object:e,data:n.bombNotesData?.[e?.i||0]})),obstacles:n.obstacles?.map(e=>Pc.deserialize({object:e,data:n.obstaclesData?.[e?.i||0]})),arcs:n.arcs?.map(e=>Ic.deserialize({object:e,data:n.arcsData?.[e?.ai||0],headData:n.colorNotesData?.[e?.hi||0],tailData:n.colorNotesData?.[e?.ti||0]})),chains:n.chains?.map(e=>Dc.deserialize({object:e,data:n.colorNotesData?.[e?.i||0],chainData:n.chainsData?.[e?.ci||0]})),rotationEvents:n.spawnRotations?.map(e=>Lc.deserialize({object:e,data:n.spawnRotationsData?.[e?.i||0]})),njsEvents:n.njsEvents?.map(e=>this.deserialize(Nc.deserialize({object:e,data:n.njsEventData?.[e?.i||0]})))||[],customData:n.customData}}}},fb={serialize(n){const e={basicBeatmapEvents:n.lightshow.basicEvents.map(Zs.serialize),colorBoostBeatmapEvents:n.lightshow.colorBoostEvents.map(Qs.serialize),lightColorEventBoxGroups:n.lightshow.lightColorEventBoxGroups.map(eo.serialize),lightRotationEventBoxGroups:n.lightshow.lightRotationEventBoxGroups.map(to.serialize),lightTranslationEventBoxGroups:n.lightshow.lightTranslationEventBoxGroups.map(no.serialize),vfxEventBoxGroups:[],_fxEventsCollection:{_fl:[],_il:[]},customData:fe(n.lightshow.customData)};for(const t of n.lightshow.fxEventBoxGroups.map(io.serialize)){e.vfxEventBoxGroups.push(t.object);for(const i of t.boxData){t.object.e.push(i.data);for(const r of i.eventData)i.data.l.push(e._fxEventsCollection._fl.length),e._fxEventsCollection._fl.push(r)}}return e},deserialize(n={}){const e={version:3,lightshow:{}};e.lightshow.basicEvents=n.basicBeatmapEvents?.map(Zs.deserialize),e.lightshow.colorBoostEvents=n.colorBoostBeatmapEvents?.map(Qs.deserialize),e.lightshow.lightColorEventBoxGroups=n.lightColorEventBoxGroups?.map(eo.deserialize),e.lightshow.lightRotationEventBoxGroups=n.lightRotationEventBoxGroups?.map(to.deserialize),e.lightshow.lightTranslationEventBoxGroups=n.lightTranslationEventBoxGroups?.map(no.deserialize);const t=n._fxEventsCollection?._fl??[];return e.lightshow.fxEventBoxGroups=n.vfxEventBoxGroups?.map(i=>io.deserialize({object:i,boxData:i.e?.map(r=>({data:r,eventData:r.l?.map(s=>t[s])}))})),e.lightshow.customData=n.customData,e}},Oc={serialize(n){return{object:{b:n.time,i:0,r:n.laneRotation,customData:{}},data:{x:n.posX,y:n.posY,d:n.direction,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,laneRotation:n.object?.r,posX:n.data?.x,posY:n.data?.y,direction:n.data?.d,customData:n.data?.customData}}},Uc={serialize(n){return{object:{b:n.time,i:0,customData:{}},data:{t:n.type,i:n.value,f:n.floatValue,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,type:n.data?.t,value:n.data?.i,floatValue:n.data?.f,customData:n.data?.customData}}},Fc={serialize(n){return{object:{b:n.time,i:0,customData:{}},data:{b:n.toggle?1:0,customData:fe(n.customData)}}},deserialize(n={}){return{time:n.object?.b,toggle:!!n.data?.b,customData:n.data?.customData}}},mi={serialize(n){return{f:n.type,p:n.p0,t:n.p1,r:n.reverse,c:n.chunks,n:n.random,s:n.seed,l:n.limit,d:n.limitAffectsType,customData:fe(n.customData)}},deserialize(n={}){return{type:n.f,p0:n.p,p1:n.t,reverse:n.r,chunks:n.c,random:n.n,seed:n.s,limit:n.l,limitAffectsType:n.d,customData:n.customData}}},Bc={serialize(n){return{data:{p:n.previous,c:n.color,e:n.easing,b:n.brightness,f:n.frequency,sb:n.strobeBrightness,sf:n.strobeFade,customData:fe(n.customData)},time:n.time}},deserialize(n={}){return{time:n.time,previous:n.data?.p,color:n.data?.c,frequency:n.data?.f,easing:n.data?.e,brightness:n.data?.b,strobeBrightness:n.data?.sb,strobeFade:n.data?.sf,customData:n.data?.customData}}},zc={serialize(n){return{data:{w:n.beatDistribution,d:n.beatDistributionType,s:n.brightnessDistribution,t:n.brightnessDistributionType,b:n.affectFirst,e:n.easing,customData:fe(n.customData)},eventData:n.events.map(Bc.serialize),filterData:mi.serialize(n.filter)}},deserialize(n={}){return{filter:mi.deserialize(n.filterData),beatDistribution:n.data?.w,beatDistributionType:n.data?.d,brightnessDistribution:n.data?.s,brightnessDistributionType:n.data?.t,affectFirst:n.data?.b,easing:n.data?.e,events:n.eventData?.map(Bc.deserialize),customData:n.data?.customData}}},kc={serialize(n){return{object:{t:yn.COLOR,b:n.time,g:n.id,e:[],customData:fe(n.customData)},boxData:n.boxes.map(zc.serialize)}},deserialize(n={}){return{time:n.object?.b,id:n.object?.g,boxes:n.boxData?.map(zc.deserialize),customData:n.object?.customData}}},Vc={serialize(n){return{data:{p:n.previous,l:n.loop,e:n.easing,r:n.rotation,d:n.direction,customData:fe(n.customData)},time:n.time}},deserialize(n={}){return{time:n.time,previous:n.data?.p,easing:n.data?.e,loop:n.data?.l,rotation:n.data?.r,direction:n.data?.d,customData:n.data?.customData}}},Gc={serialize(n){return{data:{w:n.beatDistribution,d:n.beatDistributionType,s:n.rotationDistribution,t:n.rotationDistributionType,b:n.affectFirst,e:n.easing,a:n.axis,f:n.flip,customData:fe(n.customData)},eventData:n.events.map(Vc.serialize),filterData:mi.serialize(n.filter)}},deserialize(n={}){return{filter:mi.deserialize(n.filterData),beatDistribution:n.data?.w,beatDistributionType:n.data?.d,rotationDistribution:n.data?.s,rotationDistributionType:n.data?.t,affectFirst:n.data?.b,easing:n.data?.e,axis:n.data?.a,flip:n.data?.f,events:n.eventData?.map(Vc.deserialize),customData:n.data?.customData}}},Hc={serialize(n){return{object:{t:yn.ROTATION,b:n.time,g:n.id,e:[],customData:fe(n.customData)},boxData:n.boxes.map(Gc.serialize)}},deserialize(n={}){return{time:n.object?.b,id:n.object?.g,boxes:n.boxData?.map(Gc.deserialize),customData:n.object?.customData}}},Wc={serialize(n){return{data:{p:n.previous,e:n.easing,t:n.translation,customData:fe(n.customData)},time:n.time}},deserialize(n={}){return{time:n.time,previous:n.data?.p,easing:n.data?.e,translation:n.data?.t,customData:n.data?.customData}}},jc={serialize(n){return{data:{w:n.beatDistribution,d:n.beatDistributionType,s:n.gapDistribution,t:n.gapDistributionType,b:n.affectFirst,e:n.easing,a:n.axis,f:n.flip,customData:fe(n.customData)},eventData:n.events.map(Wc.serialize),filterData:mi.serialize(n.filter)}},deserialize(n={}){return{filter:mi.deserialize(n.filterData),beatDistribution:n.data?.w,beatDistributionType:n.data?.d,gapDistribution:n.data?.s,gapDistributionType:n.data?.t,affectFirst:n.data?.b,easing:n.data?.e,axis:n.data?.a,flip:n.data?.f,events:n.eventData?.map(Wc.deserialize),customData:n.data?.customData}}},Xc={serialize(n){return{object:{t:yn.TRANSLATION,b:n.time,g:n.id,e:[],customData:fe(n.customData)},boxData:n.boxes.map(jc.serialize)}},deserialize(n={}){return{time:n.object?.b,id:n.object?.g,boxes:n.boxData?.map(jc.deserialize),customData:n.object?.customData}}},Yc={serialize(n){return{data:{p:n.previous,e:n.easing,v:n.value,customData:fe(n.customData)},time:n.time}},deserialize(n={}){return{time:n.time,previous:n.data?.p,easing:n.data?.e,value:n.data?.v,customData:n.data?.customData}}},qc={serialize(n){return{data:{w:n.beatDistribution,d:n.beatDistributionType,s:n.fxDistribution,t:n.fxDistributionType,b:n.affectFirst,e:n.easing,customData:fe(n.customData)},eventData:n.events.map(Yc.serialize),filterData:mi.serialize(n.filter)}},deserialize(n={}){return{filter:mi.deserialize(n.filterData),beatDistribution:n.data?.w,beatDistributionType:n.data?.d,fxDistribution:n.data?.s,fxDistributionType:n.data?.t,affectFirst:n.data?.b,easing:n.data?.e,events:n.eventData?.map(Yc.deserialize),customData:n.data?.customData}}},$c={serialize(n){return{object:{t:yn.FX_FLOAT,b:n.time,g:n.id,e:[],customData:fe(n.customData)},boxData:n.boxes.map(qc.serialize)}},deserialize(n={}){return{time:n.object?.b,id:n.object?.g,boxes:n.boxData?.map(qc.deserialize),customData:n.object?.customData}}},db={serialize(n){const e={version:"4.0.0",waypoints:[],waypointsData:[],basicEvents:[],basicEventsData:[],colorBoostEvents:[],colorBoostEventsData:[],eventBoxGroups:[],indexFilters:[],lightColorEventBoxes:[],lightColorEvents:[],lightRotationEventBoxes:[],lightRotationEvents:[],lightTranslationEventBoxes:[],lightTranslationEvents:[],fxEventBoxes:[],floatFxEvents:[],basicEventTypesWithKeywords:Js.serialize(n.lightshow.basicEventTypesWithKeywords),useNormalEventsAsCompatibleEvents:n.lightshow.useNormalEventsAsCompatibleEvents,customData:fe(n.difficulty.customData)};for(const t of n.lightshow.waypoints.map(Oc.serialize))e.waypoints.push(t.object),t.object.i=e.waypointsData.length,e.waypointsData.push(t.data);for(const t of n.lightshow.basicEvents.map(Uc.serialize))e.basicEvents.push(t.object),t.object.i=e.basicEventsData.length,e.basicEventsData.push(t.data);for(const t of n.lightshow.colorBoostEvents.map(Fc.serialize))e.colorBoostEvents.push(t.object),t.object.i=e.colorBoostEventsData.length,e.colorBoostEventsData.push(t.data);for(const t of n.lightshow.lightColorEventBoxGroups.map(kc.serialize)){e.eventBoxGroups.push(t.object);for(const i of t.boxData){const r=[];for(const s of i.eventData)r.push({b:s.time,i:e.lightColorEvents.length}),e.lightColorEvents.push(s.data);t.object.e.push({e:e.lightColorEventBoxes.length,f:e.indexFilters.length,l:r,customData:{}}),e.lightColorEventBoxes.push(i.data),e.indexFilters.push(i.filterData)}}for(const t of n.lightshow.lightRotationEventBoxGroups.map(Hc.serialize)){e.eventBoxGroups.push(t.object);for(const i of t.boxData){const r=[];for(const s of i.eventData)r.push({b:s.time,i:e.lightRotationEvents.length}),e.lightRotationEvents.push(s.data);t.object.e.push({e:e.lightRotationEventBoxes.length,f:e.indexFilters.length,l:r,customData:{}}),e.lightRotationEventBoxes.push(i.data),e.indexFilters.push(i.filterData)}}for(const t of n.lightshow.lightTranslationEventBoxGroups.map(Xc.serialize)){e.eventBoxGroups.push(t.object);for(const i of t.boxData){const r=[];for(const s of i.eventData)r.push({b:s.time,i:e.lightTranslationEvents.length}),e.lightTranslationEvents.push(s.data);t.object.e.push({e:e.lightTranslationEventBoxes.length,f:e.indexFilters.length,l:r,customData:{}}),e.lightTranslationEventBoxes.push(i.data),e.indexFilters.push(i.filterData)}}for(const t of n.lightshow.fxEventBoxGroups.map($c.serialize)){e.eventBoxGroups.push(t.object);for(const i of t.boxData){const r=[];for(const s of i.eventData)r.push({b:s.time,i:e.floatFxEvents.length}),e.floatFxEvents.push(s.data);t.object.e.push({e:e.fxEventBoxes.length,f:e.indexFilters.length,l:r,customData:{}}),e.fxEventBoxes.push(i.data),e.indexFilters.push(i.filterData)}}return e},deserialize(n={}){const e={version:4,lightshow:{lightColorEventBoxGroups:[],lightRotationEventBoxGroups:[],lightTranslationEventBoxGroups:[],fxEventBoxGroups:[]}};e.lightshow.waypoints=n.waypoints?.map(d=>Oc.deserialize({object:d,data:n.waypointsData?.[d?.i||0]})),e.lightshow.basicEvents=n.basicEvents?.map(d=>Uc.deserialize({object:d,data:n.basicEventsData?.[d?.i||0]})),e.lightshow.colorBoostEvents=n.colorBoostEvents?.map(d=>Fc.deserialize({object:d,data:n.colorBoostEventsData?.[d?.i||0]}));const t=n.indexFilters??[],i=n.lightColorEventBoxes??[],r=n.lightColorEvents??[],s=n.lightRotationEventBoxes??[],o=n.lightRotationEvents??[],a=n.lightTranslationEventBoxes??[],l=n.lightTranslationEvents??[],u=n.fxEventBoxes??[],c=n.floatFxEvents??[];for(const d of n.eventBoxGroups||[])switch(d?.t||0){case yn.COLOR:e.lightshow.lightColorEventBoxGroups.push(kc.deserialize({object:d,boxData:d?.e?.map(f=>({data:i[f.e||0],filterData:t[f.f||0],eventData:f.l?.map(v=>({time:v.b,data:r[v.i||0]}))}))}));break;case yn.ROTATION:e.lightshow.lightRotationEventBoxGroups.push(Hc.deserialize({object:d,boxData:d?.e?.map(f=>({data:s[f.e||0],filterData:t[f.f||0],eventData:f.l?.map(v=>({time:v.b,data:o[v.i||0]}))}))}));break;case yn.TRANSLATION:e.lightshow.lightTranslationEventBoxGroups.push(Xc.deserialize({object:d,boxData:d?.e?.map(f=>({data:a[f.e||0],filterData:t[f.f||0],eventData:f.l?.map(v=>({time:v.b,data:l[v.i||0]}))}))}));break;case yn.FX_FLOAT:e.lightshow.fxEventBoxGroups.push($c.deserialize({object:d,boxData:d?.e?.map(f=>({data:u[f.e||0],filterData:t[f.f||0],eventData:f.l?.map(v=>({time:v.b,data:c[v.i||0]}))}))}));break}return e.lightshow.basicEventTypesWithKeywords=Js.deserialize(n.basicEventTypesWithKeywords),e.lightshow.useNormalEventsAsCompatibleEvents=!!n.useNormalEventsAsCompatibleEvents,e.lightshow.customData=n.customData,e}},pb={1:nb,2:ib,4:rb},mb={2:sb,4:ob},gb={1:ab,2:ub,3:cb,4:hb},vb={3:fb,4:db};function ef(){return["helpers","schemaCheck"]}function nn(n,e,t){if(e)throw new Error(n);Vn.tWarn(ef(),n),t.push(n)}function Bs(n,e,t,i,r,s=[]){if(Vn.tDebug(ef(),`Looking up ${t}`),Array.isArray(n)){for(let a=0;a<n.length;a++)Bs(n[a],e,`${t}[${a}]`,i,r,s);return s}const o=Object.keys(e);if(!o.length)return s;for(const a in n)a in e||nn(`Unused key ${a} found in ${t}`,r.unused,s);for(let a=0;a<o.length;a++){const l=o[a],u=e[l],c=n[l];if(c===void 0){if(!r.ignoreOptional&&e[l].optional||Qh(i,u.version)===-1)continue;nn(`Missing ${l} in object ${t}!`,r.missing,s);continue}if(c===null){nn(`${l} contain null value in object ${t}!`,r.nullish,s);continue}if(u.type==="array"){Array.isArray(c)||nn(`${l} is not an array in object ${t}!`,r.wrongType,s),Bs(c,u.check,`${t}.${l}`,i,r,s);continue}if(u.type==="object"){!Array.isArray(c)&&typeof c!="object"?nn(`${l} is not an object in object ${t}!`,r.wrongType,s):Bs(c,u.check,`${t}.${l}`,i,r,s);continue}if(u.array){if(!Array.isArray(c)){nn(`${l} is not ${u.type} in object ${t}!`,r.wrongType,s);continue}c.every(d=>typeof d===u.type||u.type==="number"&&typeof d=="number"&&(isNaN(d)||(u.int?d%1!==0:!0)&&(u.unsigned?d<0:!0)))||nn(`${l} is not ${u.type} in object ${t}!`,r.wrongType,s);continue}if(!u.array&&typeof c!==u.type){nn(`${l} is not ${u.type} in object ${t}!`,r.wrongType,s);continue}if(u.type==="number"){if(isNaN(c)){nn(`${t}.${l} is NaN!`,r.nullish,s);continue}if(u.int&&c%1!==0){nn(`${t}.${l} cannot be float!`,r.notInt,s);continue}if(u.unsigned&&c<0){nn(`${t}.${l} cannot be negative!`,r.notUnsigned,s);continue}}}return s}const _b={_time:{type:"number",version:"1.5.0"},_type:{type:"number",int:!0,unsigned:!0,version:"1.5.0"},_lineIndex:{type:"number",int:!0,version:"1.5.0"},_lineLayer:{type:"number",int:!0,version:"1.5.0"},_cutDirection:{type:"number",int:!0,unsigned:!0,version:"1.5.0"}},bb={_time:{type:"number",version:"1.5.0"},_lineIndex:{type:"number",int:!0,version:"1.5.0"},_type:{type:"number",int:!0,unsigned:!0,version:"1.5.0"},_duration:{type:"number",version:"1.5.0"},_width:{type:"number",int:!0,version:"1.5.0"}},yb={_time:{type:"number",version:"1.5.0"},_type:{type:"number",int:!0,version:"1.5.0"},_value:{type:"number",int:!0,version:"1.5.0"}},xb={_version:{type:"string",version:"1.5.0"},_beatsPerMinute:{type:"number",version:"1.5.0"},_beatsPerBar:{type:"number",version:"1.5.0"},_shuffle:{type:"number",version:"1.5.0"},_shufflePeriod:{type:"number",version:"1.5.0"},_noteJumpSpeed:{type:"number",version:"1.5.0",optional:!0},_noteJumpStartBeatOffset:{type:"number",version:"1.5.0",optional:!0},_notes:{type:"array",version:"1.5.0",check:_b},_obstacles:{type:"array",version:"1.5.0",check:bb},_events:{type:"array",version:"1.5.0",check:yb},_time:{type:"number",version:"1.5.0",optional:!0},_BPMChanges:{type:"array",version:"1.5.0",optional:!0,check:{}},_bookmarks:{type:"array",version:"1.5.0",optional:!0,check:{}}},Sb={difficulty:{type:"string",version:"1.0.0"},difficultyRank:{type:"number",version:"1.0.0"},audioPath:{type:"string",version:"1.0.0"},jsonPath:{type:"string",version:"1.0.0"},characteristic:{type:"string",version:"1.0.0"},offset:{type:"number",version:"1.0.0",optional:!0},oldOffset:{type:"number",version:"1.0.0",optional:!0},chromaToggle:{type:"string",version:"1.0.0",optional:!0},customColors:{type:"boolean",version:"1.0.0",optional:!0},difficultyLabel:{type:"string",version:"1.0.0",optional:!0},colorLeft:{type:"object",version:"1.0.0",check:{},optional:!0},colorRight:{type:"object",version:"1.0.0",check:{},optional:!0},envColorLeft:{type:"object",version:"1.0.0",check:{},optional:!0},envColorRight:{type:"object",version:"1.0.0",check:{},optional:!0},obstacleColor:{type:"object",version:"1.0.0",check:{},optional:!0}},Eb={songName:{type:"string",version:"1.0.0"},songSubName:{type:"string",version:"1.0.0"},authorName:{type:"string",version:"1.0.0"},beatsPerMinute:{type:"number",version:"1.0.0"},previewStartTime:{type:"number",version:"1.0.0"},previewDuration:{type:"number",version:"1.0.0"},coverImagePath:{type:"string",version:"1.0.0"},environmentName:{type:"string",version:"1.0.0"},difficultyLevels:{type:"array",version:"1.0.0",check:Sb},oneSaber:{type:"boolean",version:"1.0.0",optional:!0},contributors:{type:"array",version:"1.0.0",optional:!0,check:{}},customEnvironment:{type:"string",version:"1.0.0",optional:!0},customEnvironmentHash:{type:"string",version:"1.0.0",optional:!0}},wb={_time:{type:"number",version:"2.0.0",optional:!0},_type:{type:"number",int:!0,unsigned:!0,version:"2.0.0",optional:!0},_lineIndex:{type:"number",int:!0,version:"2.0.0",optional:!0},_lineLayer:{type:"number",int:!0,version:"2.0.0",optional:!0},_cutDirection:{type:"number",int:!0,unsigned:!0,version:"2.0.0",optional:!0},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Mb={_colorType:{type:"number",version:"2.0.0",optional:!0},_headTime:{type:"number",version:"2.0.0",optional:!0},_headLineIndex:{type:"number",int:!0,version:"2.0.0",optional:!0},_headLineLayer:{type:"number",int:!0,version:"2.0.0",optional:!0},_headCutDirection:{type:"number",int:!0,unsigned:!0,version:"2.0.0",optional:!0},_headControlPointLengthMultiplier:{type:"number",version:"2.0.0",optional:!0},_tailTime:{type:"number",version:"2.0.0",optional:!0},_tailLineIndex:{type:"number",int:!0,version:"2.0.0",optional:!0},_tailLineLayer:{type:"number",int:!0,version:"2.0.0",optional:!0},_tailCutDirection:{type:"number",int:!0,unsigned:!0,version:"2.0.0",optional:!0},_tailControlPointLengthMultiplier:{type:"number",version:"2.0.0",optional:!0},_sliderMidAnchorMode:{type:"number",version:"2.0.0",optional:!0},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Tb={_time:{type:"number",version:"2.0.0",optional:!0},_lineIndex:{type:"number",int:!0,version:"2.0.0",optional:!0},_type:{type:"number",int:!0,unsigned:!0,version:"2.0.0",optional:!0},_duration:{type:"number",version:"2.0.0",optional:!0},_width:{type:"number",int:!0,version:"2.0.0",optional:!0},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Ab={_time:{type:"number",version:"2.0.0",optional:!0},_type:{type:"number",int:!0,version:"2.0.0",optional:!0},_value:{type:"number",int:!0,version:"2.0.0",optional:!0},_floatValue:{type:"number",version:"2.5.0",optional:!0},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Cb={_time:{type:"number",version:"2.2.0",optional:!0},_lineIndex:{type:"number",int:!0,version:"2.2.0",optional:!0},_lineLayer:{type:"number",int:!0,version:"2.2.0",optional:!0},_offsetDirection:{type:"number",int:!0,version:"2.2.0",optional:!0},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Db={_keyword:{type:"string",version:"2.4.0",optional:!0},_specialEvents:{type:"number",int:!0,array:!0,version:"2.4.0",optional:!0}},Rb={_keywords:{type:"array",version:"2.4.0",check:Db,optional:!0}},Pb={_version:{type:"string",version:"2.0.0",optional:!0},_notes:{type:"array",version:"2.0.0",check:wb,optional:!0},_sliders:{type:"array",version:"2.6.0",check:Mb,optional:!0},_obstacles:{type:"array",version:"2.0.0",check:Tb,optional:!0},_events:{type:"array",version:"2.0.0",check:Ab,optional:!0},_waypoints:{type:"array",version:"2.2.0",check:Cb,optional:!0},_specialEventsKeywordFilters:{type:"object",version:"2.4.0",check:Rb,optional:!0},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Ib={_difficulty:{type:"string",version:"2.0.0"},_difficultyRank:{type:"number",version:"2.0.0"},_beatmapFilename:{type:"string",version:"2.0.0"},_noteJumpMovementSpeed:{type:"number",version:"2.0.0"},_noteJumpStartBeatOffset:{type:"number",version:"2.0.0"},_beatmapColorSchemeIdx:{type:"number",version:"2.1.0"},_environmentNameIdx:{type:"number",version:"2.1.0"},_customData:{type:"object",version:"2.0.0",check:{},optional:!0}},Lb={_beatmapCharacteristicName:{type:"string",version:"2.0.0"},_difficultyBeatmaps:{type:"array",version:"2.0.0",check:Ib}},Ti={r:{type:"number",version:"2.1.0"},g:{type:"number",version:"2.1.0"},b:{type:"number",version:"2.1.0"},a:{type:"number",version:"2.1.0"}},Nb={colorSchemeId:{type:"string",version:"2.1.0"},saberAColor:{type:"object",version:"2.1.0",check:Ti},saberBColor:{type:"object",version:"2.1.0",check:Ti},environmentColor0:{type:"object",version:"2.1.0",check:Ti},environmentColor1:{type:"object",version:"2.1.0",check:Ti},obstaclesColor:{type:"object",version:"2.1.0",check:Ti},environmentColor0Boost:{type:"object",version:"2.1.0",check:Ti},environmentColor1Boost:{type:"object",version:"2.1.0",check:Ti}},Ob={useOverride:{type:"boolean",version:"2.1.0"},colorScheme:{type:"object",version:"2.1.0",check:Nb}},Ub={_version:{type:"string",version:"2.0.0",optional:!0},_songName:{type:"string",version:"2.0.0"},_songSubName:{type:"string",version:"2.0.0"},_songAuthorName:{type:"string",version:"2.0.0"},_levelAuthorName:{type:"string",version:"2.0.0"},_beatsPerMinute:{type:"number",version:"2.0.0"},_songTimeOffset:{type:"number",version:"2.0.0"},_shuffle:{type:"number",version:"2.0.0"},_shufflePeriod:{type:"number",version:"2.0.0"},_previewStartTime:{type:"number",version:"2.0.0"},_previewDuration:{type:"number",version:"2.0.0"},_songFilename:{type:"string",version:"2.0.0"},_coverImageFilename:{type:"string",version:"2.0.0"},_environmentName:{type:"string",version:"2.0.0"},_allDirectionsEnvironmentName:{type:"string",version:"2.0.0",optional:!0},_environmentNames:{type:"string",version:"2.1.0",array:!0},_colorSchemes:{type:"array",version:"2.1.0",check:Ob},_customData:{type:"object",version:"2.0.0",check:{},optional:!0},_difficultyBeatmapSets:{type:"array",version:"2.0.0",check:Lb}},Fb={_startSampleIndex:{type:"number",version:"2.0.0",int:!0,unsigned:!0},_endSampleIndex:{type:"number",version:"2.0.0",int:!0,unsigned:!0},_startBeat:{type:"number",version:"2.0.0"},_endBeat:{type:"number",version:"2.0.0"}},Bb={_version:{type:"string",version:"2.0.0"},_songSampleCount:{type:"number",version:"2.0.0",int:!0,unsigned:!0},_songFrequency:{type:"number",version:"2.0.0",int:!0,unsigned:!0},_regions:{type:"object",version:"2.0.0",check:Fb,array:!0}},zb={b:{type:"number",version:"3.0.0",optional:!0},c:{type:"number",int:!0,version:"3.0.0",optional:!0},x:{type:"number",int:!0,version:"3.0.0",optional:!0},y:{type:"number",int:!0,version:"3.0.0",optional:!0},d:{type:"number",int:!0,version:"3.0.0",optional:!0},a:{type:"number",int:!0,version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},kb={b:{type:"number",version:"3.0.0",optional:!0},x:{type:"number",int:!0,version:"3.0.0",optional:!0},y:{type:"number",int:!0,version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Vb={b:{type:"number",version:"3.0.0",optional:!0},c:{type:"number",int:!0,version:"3.0.0",optional:!0},x:{type:"number",int:!0,version:"3.0.0",optional:!0},y:{type:"number",int:!0,version:"3.0.0",optional:!0},d:{type:"number",int:!0,version:"3.0.0",optional:!0},mu:{type:"number",version:"3.0.0",optional:!0},tb:{type:"number",version:"3.0.0",optional:!0},tx:{type:"number",int:!0,version:"3.0.0",optional:!0},ty:{type:"number",int:!0,version:"3.0.0",optional:!0},tc:{type:"number",int:!0,version:"3.0.0",optional:!0},tmu:{type:"number",version:"3.0.0",optional:!0},m:{type:"number",int:!0,version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Gb={b:{type:"number",version:"3.0.0",optional:!0},c:{type:"number",int:!0,version:"3.0.0",optional:!0},x:{type:"number",int:!0,version:"3.0.0",optional:!0},y:{type:"number",int:!0,version:"3.0.0",optional:!0},d:{type:"number",int:!0,version:"3.0.0",optional:!0},tb:{type:"number",version:"3.0.0",optional:!0},tx:{type:"number",int:!0,version:"3.0.0",optional:!0},ty:{type:"number",int:!0,version:"3.0.0",optional:!0},sc:{type:"number",int:!0,version:"3.0.0",optional:!0},s:{type:"number",version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Hb={b:{type:"number",version:"3.0.0",optional:!0},x:{type:"number",int:!0,version:"3.0.0",optional:!0},y:{type:"number",int:!0,version:"3.0.0",optional:!0},d:{type:"number",version:"3.0.0",optional:!0},w:{type:"number",int:!0,version:"3.0.0",optional:!0},h:{type:"number",int:!0,version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},tf={b:{type:"number",version:"3.0.0",optional:!0},et:{type:"number",int:!0,version:"3.0.0",optional:!0},i:{type:"number",int:!0,version:"3.0.0",optional:!0},f:{type:"number",version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Wb={b:{type:"number",version:"3.0.0",optional:!0},m:{type:"number",version:"3.0.0"},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},jb={b:{type:"number",version:"3.0.0",optional:!0},e:{type:"number",int:!0,version:"3.0.0",optional:!0},r:{type:"number",version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},nf={b:{type:"number",version:"3.0.0",optional:!0},o:{type:"boolean",version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},_o={f:{type:"number",int:!0,version:"3.0.0",optional:!0},p:{type:"number",version:"3.0.0",optional:!0},t:{type:"number",version:"3.0.0",optional:!0},r:{type:"number",int:!0,version:"3.0.0",optional:!0},c:{type:"number",int:!0,version:"3.1.0",optional:!0},l:{type:"number",version:"3.1.0",optional:!0},d:{type:"number",int:!0,version:"3.1.0",optional:!0},n:{type:"number",int:!0,version:"3.1.0",optional:!0},s:{type:"number",int:!0,version:"3.1.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Xb={b:{type:"number",version:"3.0.0",optional:!0},c:{type:"number",int:!0,version:"3.0.0",optional:!0},f:{type:"number",version:"3.0.0",optional:!0},i:{type:"number",int:!0,version:"3.0.0",optional:!0},s:{type:"number",version:"3.0.0",optional:!0},sb:{type:"number",version:"3.3.0",optional:!0},sf:{type:"number",int:!0,version:"3.3.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Yb={f:{type:"object",version:"3.0.0",check:_o,optional:!0},w:{type:"number",version:"3.0.0",optional:!0},d:{type:"number",int:!0,version:"3.0.0",optional:!0},r:{type:"number",version:"3.0.0",optional:!0},t:{type:"number",int:!0,version:"3.0.0",optional:!0},e:{type:"array",version:"3.0.0",check:Xb,optional:!0},b:{type:"number",int:!0,version:"3.0.0",optional:!0},i:{type:"number",int:!0,version:"3.2.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},rf={b:{type:"number",version:"3.0.0",optional:!0},g:{type:"number",int:!0,version:"3.0.0",optional:!0},e:{type:"array",version:"3.0.0",check:Yb,optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},qb={b:{type:"number",version:"3.0.0",optional:!0},p:{type:"number",int:!0,version:"3.0.0",optional:!0},e:{type:"number",int:!0,version:"3.0.0",optional:!0},l:{type:"number",version:"3.0.0",optional:!0},r:{type:"number",version:"3.0.0",optional:!0},o:{type:"number",int:!0,version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},$b={f:{type:"object",version:"3.0.0",check:_o,optional:!0},w:{type:"number",version:"3.0.0",optional:!0},d:{type:"number",int:!0,version:"3.0.0",optional:!0},s:{type:"number",version:"3.0.0",optional:!0},t:{type:"number",int:!0,version:"3.0.0",optional:!0},a:{type:"number",int:!0,version:"3.0.0",optional:!0},l:{type:"array",version:"3.0.0",check:qb,optional:!0},r:{type:"number",int:!0,version:"3.0.0",optional:!0},b:{type:"number",int:!0,version:"3.0.0",optional:!0},i:{type:"number",int:!0,version:"3.2.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},sf={b:{type:"number",version:"3.0.0",optional:!0},g:{type:"number",int:!0,version:"3.0.0",optional:!0},e:{type:"array",version:"3.0.0",check:$b,optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Kb={b:{type:"number",version:"3.2.0",optional:!0},p:{type:"number",int:!0,version:"3.2.0",optional:!0},e:{type:"number",int:!0,version:"3.2.0",optional:!0},t:{type:"number",version:"3.2.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},Zb={f:{type:"object",version:"3.2.0",check:_o,optional:!0},w:{type:"number",version:"3.2.0",optional:!0},d:{type:"number",int:!0,version:"3.2.0",optional:!0},s:{type:"number",version:"3.2.0",optional:!0},t:{type:"number",int:!0,version:"3.2.0",optional:!0},a:{type:"number",int:!0,version:"3.2.0",optional:!0},l:{type:"array",version:"3.2.0",check:Kb,optional:!0},r:{type:"number",int:!0,version:"3.2.0",optional:!0},b:{type:"number",int:!0,version:"3.2.0",optional:!0},i:{type:"number",int:!0,version:"3.2.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},of={b:{type:"number",version:"3.2.0",optional:!0},g:{type:"number",int:!0,version:"3.2.0",optional:!0},e:{type:"array",version:"3.2.0",check:Zb,optional:!0},customData:{type:"object",version:"3.2.0",check:{},optional:!0}},Jb={f:{type:"object",version:"3.3.0",check:_o,optional:!0},w:{type:"number",version:"3.3.0",optional:!0},d:{type:"number",int:!0,version:"3.3.0",optional:!0},s:{type:"number",version:"3.3.0",optional:!0},t:{type:"number",int:!0,version:"3.3.0",optional:!0},l:{type:"number",int:!0,array:!0,version:"3.3.0",optional:!0},b:{type:"number",int:!0,version:"3.3.0",optional:!0},i:{type:"number",int:!0,version:"3.3.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},af={b:{type:"number",version:"3.3.0",optional:!0},g:{type:"number",int:!0,version:"3.3.0",optional:!0},e:{type:"array",version:"3.3.0",check:Jb,optional:!0},t:{type:"number",int:!0,version:"3.3.0",optional:!0},customData:{type:"object",version:"3.3.0",check:{},optional:!0}},Qb={k:{type:"string",version:"3.0.0",optional:!0},e:{type:"number",int:!0,array:!0,version:"3.0.0",optional:!0}},lf={d:{type:"array",version:"3.0.0",check:Qb,optional:!0}},ey={b:{type:"number",version:"3.3.0",optional:!0},i:{type:"number",int:!0,version:"3.3.0",optional:!0},p:{type:"number",int:!0,version:"3.3.0",optional:!0},v:{type:"number",version:"3.3.0",optional:!0},customData:{type:"object",version:"3.3.0",check:{},optional:!0}},ty={b:{type:"number",version:"3.3.0",optional:!0},p:{type:"number",int:!0,version:"3.3.0",optional:!0},v:{type:"number",int:!0,version:"3.3.0",optional:!0},customData:{type:"object",version:"3.3.0",check:{},optional:!0}},uf={_fl:{type:"array",version:"3.3.0",check:ey,optional:!0},_il:{type:"array",version:"3.3.0",check:ty,optional:!0}},ny={b:{type:"number",version:"3.0.0",optional:!0},d:{type:"number",int:!0,version:"3.0.0",optional:!0},x:{type:"number",int:!0,version:"3.0.0",optional:!0},y:{type:"number",int:!0,version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},iy={version:{type:"string",version:"3.0.0",optional:!0},bpmEvents:{type:"array",version:"3.0.0",check:Wb,optional:!0},rotationEvents:{type:"array",version:"3.0.0",check:jb,optional:!0},colorNotes:{type:"array",version:"3.0.0",check:zb,optional:!0},bombNotes:{type:"array",version:"3.0.0",check:kb,optional:!0},obstacles:{type:"array",version:"3.0.0",check:Hb,optional:!0},sliders:{type:"array",version:"3.0.0",check:Vb,optional:!0},burstSliders:{type:"array",version:"3.0.0",check:Gb,optional:!0},waypoints:{type:"array",version:"3.0.0",check:ny,optional:!0},basicBeatmapEvents:{type:"array",version:"3.0.0",check:tf,optional:!0},colorBoostBeatmapEvents:{type:"array",version:"3.0.0",check:nf,optional:!0},lightColorEventBoxGroups:{type:"array",version:"3.0.0",check:rf,optional:!0},lightRotationEventBoxGroups:{type:"array",version:"3.0.0",check:sf,optional:!0},lightTranslationEventBoxGroups:{type:"array",version:"3.2.0",check:of,optional:!0},vfxEventBoxGroups:{type:"array",version:"3.3.0",check:af,optional:!0},basicEventTypesWithKeywords:{type:"object",version:"3.0.0",check:lf,optional:!0},_fxEventsCollection:{type:"object",version:"3.3.0",check:uf,optional:!0},useNormalEventsAsCompatibleEvents:{type:"boolean",version:"3.0.0",optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},ry={basicBeatmapEvents:{type:"array",version:"3.0.0",check:tf,optional:!0},colorBoostBeatmapEvents:{type:"array",version:"3.0.0",check:nf,optional:!0},lightColorEventBoxGroups:{type:"array",version:"3.0.0",check:rf,optional:!0},lightRotationEventBoxGroups:{type:"array",version:"3.0.0",check:sf,optional:!0},lightTranslationEventBoxGroups:{type:"array",version:"3.2.0",check:of,optional:!0},vfxEventBoxGroups:{type:"array",version:"3.3.0",check:af,optional:!0},_fxEventsCollection:{type:"object",version:"3.3.0",check:uf,optional:!0},customData:{type:"object",version:"3.0.0",check:{},optional:!0}},ro={b:{type:"number",version:"4.0.0",optional:!0},i:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},zs={b:{type:"number",version:"4.0.0",optional:!0},i:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},r:{type:"number",int:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},sy={hb:{type:"number",version:"4.0.0",optional:!0},hr:{type:"number",int:!0,version:"4.0.0",optional:!0},tb:{type:"number",version:"4.0.0",optional:!0},tr:{type:"number",int:!0,version:"4.0.0",optional:!0},i:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},ci:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Kc={hb:{type:"number",version:"4.0.0",optional:!0},hi:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},hr:{type:"number",int:!0,version:"4.0.0",optional:!0},tb:{type:"number",version:"4.0.0",optional:!0},ti:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},tr:{type:"number",int:!0,version:"4.0.0",optional:!0},ai:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},oy={x:{type:"number",int:!0,version:"4.0.0",optional:!0},y:{type:"number",int:!0,version:"4.0.0",optional:!0},a:{type:"number",int:!0,version:"4.0.0",optional:!0},c:{type:"number",int:!0,version:"4.0.0",optional:!0},d:{type:"number",int:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},ay={x:{type:"number",int:!0,version:"4.0.0",optional:!0},y:{type:"number",int:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},ly={x:{type:"number",int:!0,version:"4.0.0",optional:!0},y:{type:"number",int:!0,version:"4.0.0",optional:!0},d:{type:"number",version:"4.0.0",optional:!0},w:{type:"number",int:!0,version:"4.0.0",optional:!0},h:{type:"number",int:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},uy={tx:{type:"number",int:!0,version:"4.0.0",optional:!0},ty:{type:"number",int:!0,version:"4.0.0",optional:!0},c:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},s:{type:"number",version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},cy={m:{type:"number",version:"4.0.0",optional:!0},tm:{type:"number",version:"4.0.0",optional:!0},a:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},hy={e:{type:"number",int:!0,version:"4.0.0",optional:!0},r:{type:"number",version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},fy={d:{type:"number",version:"4.1.0",optional:!0},p:{type:"number",int:!0,version:"4.1.0",optional:!0},e:{type:"number",int:!0,version:"4.1.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},dy={version:{type:"string",version:"4.0.0"},colorNotes:{type:"object",array:!0,version:"4.0.0",check:zs,optional:!0},bombNotes:{type:"object",array:!0,version:"4.0.0",check:zs,optional:!0},obstacles:{type:"object",array:!0,version:"4.0.0",check:zs,optional:!0},chains:{type:"object",array:!0,version:"4.0.0",check:sy,optional:!0},arcs:{type:"object",array:!0,version:"4.0.0",check:Kc,optional:!0},spawnRotations:{type:"object",array:!0,version:"4.0.0",check:Kc,optional:!0},colorNotesData:{type:"object",array:!0,version:"4.0.0",check:oy,optional:!0},bombNotesData:{type:"object",array:!0,version:"4.0.0",check:ay,optional:!0},obstaclesData:{type:"object",array:!0,version:"4.0.0",check:ly,optional:!0},chainsData:{type:"object",array:!0,version:"4.0.0",check:uy,optional:!0},arcsData:{type:"object",array:!0,version:"4.0.0",check:cy,optional:!0},spawnRotationsData:{type:"object",array:!0,version:"4.0.0",check:hy,optional:!0},njsEvents:{type:"object",array:!0,version:"4.1.0",check:ro,optional:!0},njsEventData:{type:"object",array:!0,version:"4.1.0",check:fy,optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},py={x:{type:"number",int:!0,version:"4.0.0",optional:!0},y:{type:"number",int:!0,version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},my={t:{type:"number",int:!0,version:"4.0.0",optional:!0},i:{type:"number",int:!0,version:"4.0.0",optional:!0},f:{type:"number",version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},gy={b:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},vy={e:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},f:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},l:{type:"object",array:!0,version:"4.0.0",check:ro,optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},_y={t:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},b:{type:"number",version:"4.0.0",optional:!0},g:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"object",array:!0,version:"4.0.0",check:vy,optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},by={f:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},p:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},t:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},r:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},c:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},n:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},s:{type:"number",int:!0,version:"4.0.0",optional:!0},l:{type:"number",unsigned:!0,version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},yy={w:{type:"number",version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},s:{type:"number",version:"4.0.0",optional:!0},t:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},b:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},xy={p:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},c:{type:"number",int:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},b:{type:"number",version:"4.0.0",optional:!0},f:{type:"number",int:!0,version:"4.0.0",optional:!0},sb:{type:"number",version:"4.0.0",optional:!0},sf:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Sy={w:{type:"number",version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},s:{type:"number",version:"4.0.0",optional:!0},t:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},b:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},a:{type:"number",int:!0,version:"4.0.0",optional:!0},f:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Ey={p:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},l:{type:"number",int:!0,version:"4.0.0",optional:!0},r:{type:"number",version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},wy={w:{type:"number",version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},s:{type:"number",version:"4.0.0",optional:!0},t:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},b:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},a:{type:"number",int:!0,version:"4.0.0",optional:!0},f:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},My={p:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},t:{type:"number",version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Ty={w:{type:"number",version:"4.0.0",optional:!0},d:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},s:{type:"number",version:"4.0.0",optional:!0},t:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},b:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Ay={p:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},e:{type:"number",int:!0,version:"4.0.0",optional:!0},v:{type:"number",version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Cy={version:{type:"string",version:"4.0.0"},waypoints:{type:"object",array:!0,version:"4.0.0",check:zs,optional:!0},waypointsData:{type:"object",array:!0,version:"4.0.0",check:py,optional:!0},basicEvents:{type:"object",array:!0,version:"4.0.0",check:ro,optional:!0},basicEventsData:{type:"object",array:!0,version:"4.0.0",check:my,optional:!0},colorBoostEvents:{type:"object",array:!0,version:"4.0.0",check:ro,optional:!0},colorBoostEventsData:{type:"object",array:!0,version:"4.0.0",check:gy,optional:!0},eventBoxGroups:{type:"object",array:!0,version:"4.0.0",check:_y,optional:!0},indexFilters:{type:"object",array:!0,version:"4.0.0",check:by,optional:!0},lightColorEventBoxes:{type:"object",array:!0,version:"4.0.0",check:yy,optional:!0},lightColorEvents:{type:"object",array:!0,version:"4.0.0",check:xy,optional:!0},lightRotationEventBoxes:{type:"object",array:!0,version:"4.0.0",check:Sy,optional:!0},lightRotationEvents:{type:"object",array:!0,version:"4.0.0",check:Ey,optional:!0},lightTranslationEventBoxes:{type:"object",array:!0,version:"4.0.0",check:wy,optional:!0},lightTranslationEvents:{type:"object",array:!0,version:"4.0.0",check:My,optional:!0},fxEventBoxes:{type:"object",array:!0,version:"4.0.0",check:Ty,optional:!0},floatFxEvents:{type:"object",array:!0,version:"4.0.0",check:Ay,optional:!0},basicEventTypesWithKeywords:{type:"object",version:"4.0.0",check:lf},useNormalEventsAsCompatibleEvents:{type:"boolean",version:"4.0.0",optional:!0},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Dy={title:{type:"string",version:"4.0.0",optional:!0},subTitle:{type:"string",version:"4.0.0",optional:!0},author:{type:"string",version:"4.0.0",optional:!0}},Ry={songFilename:{type:"string",version:"4.0.0",optional:!0},songDuration:{type:"number",version:"4.0.0",optional:!0},audioDataFilename:{type:"string",version:"4.0.0",optional:!0},bpm:{type:"number",version:"4.0.0"},lufs:{type:"number",version:"4.0.0"},previewStartTime:{type:"number",version:"4.0.0",optional:!0},previewDuration:{type:"number",version:"4.0.0",optional:!0}},Py={colorSchemeName:{type:"string",version:"4.0.0",optional:!0},overrideNotes:{type:"boolean",version:"4.0.1",optional:!0},saberAColor:{type:"string",version:"4.0.0",optional:!0},saberBColor:{type:"string",version:"4.0.0",optional:!0},obstaclesColor:{type:"string",version:"4.0.0",optional:!0},overrideLights:{type:"boolean",version:"4.0.1",optional:!0},environmentColor0:{type:"string",version:"4.0.0",optional:!0},environmentColor1:{type:"string",version:"4.0.0",optional:!0},environmentColorW:{type:"string",version:"4.0.0",optional:!0},environmentColor0Boost:{type:"string",version:"4.0.0",optional:!0},environmentColor1Boost:{type:"string",version:"4.0.0",optional:!0},environmentColorWBoost:{type:"string",version:"4.0.0",optional:!0}},Iy={mappers:{type:"string",array:!0,version:"4.0.0"},lighters:{type:"string",array:!0,version:"4.0.0"}},Ly={characteristic:{type:"string",version:"4.0.0",optional:!0},difficulty:{type:"string",version:"4.0.0",optional:!0},beatmapAuthors:{type:"object",version:"4.0.0",check:Iy},environmentNameIdx:{type:"number",int:!0,unsigned:!0,version:"4.0.0",optional:!0},beatmapColorSchemeIdx:{type:"number",int:!0,version:"4.0.0",optional:!0},noteJumpMovementSpeed:{type:"number",version:"4.0.0",optional:!0},noteJumpStartBeatOffset:{type:"number",version:"4.0.0",optional:!0},lightshowDataFilename:{type:"string",version:"4.0.0",optional:!0},beatmapDataFilename:{type:"string",version:"4.0.0"},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Ny={version:{type:"string",version:"4.0.0"},song:{type:"object",version:"4.0.0",check:Dy},audio:{type:"object",version:"4.0.0",check:Ry},songPreviewFilename:{type:"string",version:"4.0.0",optional:!0},coverImageFilename:{type:"string",version:"4.0.0",optional:!0},environmentNames:{type:"string",array:!0,version:"4.0.0"},colorSchemes:{type:"object",array:!0,version:"4.0.0",check:Py},difficultyBeatmaps:{type:"object",array:!0,version:"4.0.0",check:Ly},customData:{type:"object",version:"4.0.0",check:{},optional:!0}},Oy={si:{type:"number",version:"4.0.0",int:!0,unsigned:!0},ei:{type:"number",version:"4.0.0",int:!0,unsigned:!0},sb:{type:"number",version:"4.0.0"},eb:{type:"number",version:"4.0.0"}},Uy={si:{type:"number",version:"4.0.0",int:!0,unsigned:!0},ei:{type:"number",version:"4.0.0",int:!0,unsigned:!0},l:{type:"number",version:"4.0.0"}},Fy={version:{type:"string",version:"4.0.0"},songChecksum:{type:"string",version:"4.0.0"},songSampleCount:{type:"number",version:"4.0.0",int:!0,unsigned:!0},songFrequency:{type:"number",version:"4.0.0",int:!0,unsigned:!0},bpmData:{type:"object",version:"4.0.0",check:Oy,array:!0},lufsData:{type:"object",version:"4.0.0",check:Uy,array:!0}},By={1:Eb,2:Ub,4:Ny},zy={2:Bb,4:Fy},ky={1:xb,2:Pb,3:iy,4:dy},Vy={3:ry,4:Cy};function Gy(n){return["validator",n]}const Zc={enabled:!0,throwOn:{unused:!1,missing:!0,ignoreOptional:!1,nullish:!0,wrongType:!0,notInt:!1,notUnsigned:!1}};function Hy(n,e,t,i){const r={enabled:i?.enabled??Zc.enabled,throwOn:{...Zc.throwOn,...i?.throwOn}};let s={};switch(n){case"info":s=By;break;case"audioData":s=zy;break;case"difficulty":s=ky;break;case"lightshow":s=Vy;break}const o=Jh(e)??Zh(n);return Vn.tInfo(Gy("validateJSON"),"Validating beatmap JSON for "+n+" with version",t),Bs(e,s[t],n,o,r.throwOn),e}function ks(n){return["loader",n]}const Dr={forceConvert:!0,schemaCheck:{},sort:!0,preprocess:[],postprocess:[]};function Wy(n,e,t,i={}){const r={forceConvert:i.forceConvert??Dr.forceConvert,schemaCheck:{...Dr.schemaCheck,...i.schemaCheck},sort:i.sort??Dr.sort,preprocess:i.preprocess??Dr.preprocess,postprocess:i.postprocess??Dr.postprocess};let s,o;switch(n){case"info":s=et,o=pb;break;case"audioData":s=sn,o=mb;break;case"difficulty":s=Bn,o=gb;break;case"lightshow":s=Bn,o=vb;break}r.preprocess.forEach((d,m)=>{Vn.tInfo(ks("loadBeatmap"),"Running preprocess function #"+(m+1)),e=d(e)});const a=Jh(e)?.at(0);let l;a?l=parseInt(a):(l=+Zh(n).at(0),Vn.tWarn(ks("loadBeatmap"),"Could not identify beatmap version from JSON, assume implicit version",l));let u;const c=o[l];if(c)r.schemaCheck.enabled&&Hy(n,e,l,r.schemaCheck),u=new s(c.deserialize(e));else throw new Error(`Beatmap version ${l} is not supported, this may be an error in JSON or is newer than currently supported.`);return r.sort&&u.sort(),r.postprocess.forEach((d,m)=>{Vn.tInfo(ks("loadBeatmap"),"Running postprocess function #"+(m+1)),u=d(u)}),u}function jy(n,e,t){const r={};return Vn.tInfo(ks("loadDifficulty"),"Loading difficulty from JSON"),Wy("difficulty",n,null,r)}const Xy={},Yy=Object.freeze(Object.defineProperty({__proto__:null,default:Xy},Symbol.toStringTag,{value:"Module"}));function Jc(){throw new Error("`path` function not provided; please supply `path` function inside the `path` object from the module")}const Qc=Yy,qy={resolve:Qc?.resolve||Jc,basename:Qc?.basename||Jc};function As(){throw new Error("`fs` function not provided; please supply `fs` function inside the `fs` object from the module")}typeof Deno<"u"?(Deno.readTextFile,Deno.readTextFileSync,Deno.writeTextFile,Deno.writeTextFileSync):typeof Bun<"u"&&Bun.write;var eh=function(n,e,t,i){if(t==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?i:t==="a"?i.call(n):i?i.value:e.get(n)},$y=function(n,e,t,i,r){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?r.call(n,t):r?r.value=t:e.set(n,t),t},Pr;function Ky(n){return["globals",n]}class Zy{constructor(){Pr.set(this,"./")}get directory(){return eh(this,Pr,"f")}set directory(e){e=qy.resolve(e.trim()),$y(this,Pr,e,"f"),Vn.tInfo(Ky("directory"),`Global map directory is set to ${eh(this,Pr,"f")}`)}}Pr=new WeakMap;new Zy;function Jy(n,e){const t=jy(JSON.parse(n));console.log(t);const i=Xa.create(e,t.difficulty.customData._bpmChanges),r=[],s=[],o=new Set;for(const a of t.difficulty.colorNotes){const l=i.toRealTime(a.time),u=a.posX,c=`${u}-${Math.floor(l/.1)}`;o.has(c)||(o.add(c),r.push({time:l,note:u,duration:.1}))}for(const a of t.lightshow.basicEvents){if(![0,1,2,3,4,6,7,11].includes(a.type))continue;a.type==11&&(a.type=5);const l=Qy(a.value),u=i.toRealTime(a.time);s.push({time:u,lightIndex:a.type,...l})}return{notes:r,lightEvents:s}}function Qy(n){if(n==0)return{colorI:0,modeI:0};n-=1;const e=n%4;return{colorI:Math.floor(n/4)+1,modeI:e}}async function ex(n){console.log("Searching for song by id",n);const t=await(await fetch(`https://api.beatsaver.com/maps/id/${n}`)).json();return nx(t)}async function tx(n){console.log("Downloading song",n.id);const t=await(await fetch(n.downloadURL)).arrayBuffer(),r=await new H_().loadAsync(t),s=r.file("info.dat")||r.file("Info.dat");if(!s)throw new Error("No info.dat file found in the zip.");const o=JSON.parse(await s.async("text")),a=o._songFilename,l=o._beatsPerMinute,u=[],c=[],d=o._difficultyBeatmapSets.find(g=>g._beatmapCharacteristicName=="Standard");for(const g of d._difficultyBeatmaps){const p=await r.file(g._beatmapFilename).async("text"),{notes:h,lightEvents:b}=Jy(p,l);h.length&&(u.push({difficulty:g._difficulty,rank:g._difficultyRank,notes:h}),c.push(b))}const m=c.reduce((g,p)=>g.length>p.length?g:p,[]),f={difficulties:u,lightEvents:m};return{audio:await r.file(a).async("blob"),meta:n,songData:f}}function nx(n){const e=n.versions[n.versions.length-1];return{id:n.id,songAuthor:n.metadata.songAuthorName,songName:n.metadata.songName,title:n.name,duration:n.metadata.duration,score:n.stats.score,coverURL:n.coverURL,previewURL:e.previewURL,downloadURL:e.downloadURL,difficulties:e.diffs.map(t=>({name:t.difficulty,characteristic:t.characteristic,notes:t.notes})),song:n}}const cf="midihero";async function ix(n){try{return await sx(n)}catch(t){console.warn(t)}const e=await ex(n);return await rx(e)}async function rx(n){const{audio:e,meta:t,songData:i}=await tx(n),r=await caches.open(cf);await r.put(new Request(`/${t.id}/song.ogg`),new Response(e));const s=new Blob([JSON.stringify(i)],{type:"application/json"});await r.put(new Request(`/${t.id}/meta.json`),new Response(s));const o=new Blob([JSON.stringify(i)],{type:"application/json"});return await r.put(new Request(`/${t.id}/notes.json`),new Response(o)),{audio:e,meta:t,songData:i}}async function sx(n){console.log("Loading song from cache",n);const e=await caches.open(cf),[t,i,r]=await Promise.all(["song.ogg","meta.json","notes.json"].map(async s=>e.match(new Request(`/${n}/${s}`))));if(!t||!i||!r)throw new Error("Song not found in cache");return{audio:await t.blob(),meta:await i.json(),songData:await r.json()}}const Vs=document.getElementById("audioPlayer");let Ya=+document.getElementById("timeOffset").value;+document.getElementById("hitTime").value;let vr;async function ox(){let[n,e]=location.hash.substring(1).split("-");n?console.log("loading song",n,"difficulty",e):(console.log("loading default song"),n="9d1b",e="3",location.hash=`#${n}-${e}`);const{audio:t,meta:i,songData:r}=await ix(n);console.log(i,r),vr=new k_(r.difficulties[e].notes,r.lightEvents),Vs.src=URL.createObjectURL(t),Vs.volume=.1,Vs.load(),window.addEventListener("resize",vr.visuals.resize),document.body.addEventListener("keydown",lx),document.getElementById("timeOffset").addEventListener("input",ux),document.getElementById("hitTime").addEventListener("input",cx)}function hf(){requestAnimationFrame(hf),vr&&vr.update(Vs.currentTime+Ya)}hf();ox();const ax={s:0,d:1,k:2,l:3};function lx(n){const e=ax[n.key];e!=null&&(vr.click(e),n.preventDefault())}function ux(n){Ya=+n.target.value,console.log(Ya)}function cx(n){vr.setHitWindow(+n.target.value),console.log(+n.target.value)}
