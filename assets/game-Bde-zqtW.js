import{t as G,c as Q,O as W,M as Y,B as j,F as D,S as d,U as _,V as h,W as b,H as x,N as K,C as X,a as u,b as v,A as $,d as q,R as J,e as Z,f as ee,L as te,g as se,h as ie,i as ae,j as oe,k as re,r as B,s as le,l as P,P as R,m as y,n as ne,o as N,p as E,q as O,u as c,v as T,w as I,x as he,y as ue,z as fe,D as k,E as ce}from"./3d-CKs7Nw1Z.js";const C=[1,2,4,8];class de{hits=0;fails=0;combo=0;maxCombo=0;score=0;constructor(){this._updateText()}onFail(){this.fails++,this.combo=0,this._updateText()}onSuccess(){this.hits++,this.combo++,this.combo>this.maxCombo&&(this.maxCombo=this.combo),this.score+=this.combo>C.length-1?C[C.length-1]:C[this.combo],this._updateText()}_updateText(){G.geometry=Q(`   Score: ${this.score}
   Combo: ${this.combo}
   Hits: ${this.hits}
   Fails: ${this.fails}`)}}const V={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class g{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const me=new W(-1,1,1,-1,0,1);class pe extends j{constructor(){super(),this.setAttribute("position",new D([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new D([0,2,0,0,2,0],2))}}const ge=new pe;class A{constructor(e){this._mesh=new Y(ge,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,me)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ve extends g{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof d?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_.clone(e.uniforms),this.material=new d({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new A(this.material)}render(e,t,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class U extends g{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,s){const a=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let o,n;this.inverse?(o=0,n=1):(o=1,n=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),i.buffers.stencil.setFunc(a.ALWAYS,o,4294967295),i.buffers.stencil.setClear(n),i.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(a.EQUAL,1,4294967295),i.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),i.buffers.stencil.setLocked(!0)}}class Te extends g{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class be{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const s=e.getSize(new h);this._width=s.width,this._height=s.height,t=new b(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:x}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ve(V),this.copyPass.material.blending=K,this.clock=new X}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let s=!1;for(let a=0,i=this.passes.length;a<i;a++){const o=this.passes[a];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),o.needsSwap){if(s){const n=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}U!==void 0&&(o instanceof U?s=!0:o instanceof Te&&(s=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new h);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const s=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(s,a),this.renderTarget2.setSize(s,a);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(s,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xe extends g{constructor(e,t,s=null,a=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=s,this.clearColor=a,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new u}render(e,t,s){const a=e.autoClear;e.autoClear=!1;let i,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=a}}const Ce={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new u(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class m extends g{constructor(e,t,s,a){super(),this.strength=t!==void 0?t:1,this.radius=s,this.threshold=a,this.resolution=e!==void 0?new h(e.x,e.y):new h(256,256),this.clearColor=new u(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new b(i,o,{type:x}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const S=new b(i,o,{type:x});S.texture.name="UnrealBloomPass.h"+f,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const w=new b(i,o,{type:x});w.texture.name="UnrealBloomPass.v"+f,w.texture.generateMipmaps=!1,this.renderTargetsVertical.push(w),i=Math.round(i/2),o=Math.round(o/2)}const n=Ce;this.highPassUniforms=_.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new d({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const r=[3,5,7,9,11];i=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new h(1/i,1/o),i=Math.round(i/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const H=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1),new v(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const M=V;this.copyUniforms=_.clone(M.uniforms),this.blendMaterial=new d({uniforms:this.copyUniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,blending:$,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new u,this.oldClearAlpha=1,this.basic=new q,this.fsQuad=new A(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let s=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(s,a);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(s,a),this.renderTargetsVertical[i].setSize(s,a),this.separableBlurMaterials[i].uniforms.invSize.value=new h(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2)}render(e,t,s,a,i){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=s.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let n=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this.fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[r].uniforms.direction.value=m.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[r]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=m.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[r]),e.clear(),this.fsQuad.render(e),n=this.renderTargetsVertical[r];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(s),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new d({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new h(.5,.5)},direction:{value:new h(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new d({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}m.BlurDirectionX=new h(1,0);m.BlurDirectionY=new h(0,1);const _e={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Me extends g{constructor(){super();const e=_e;this.uniforms=_.clone(e.uniforms),this.material=new J({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new A(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Z.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===te?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===se?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ie?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ae?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===oe?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===re&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Se=.2,we=.1,Ne=1.5,Ee=4,F=B.getPixelRatio(),Ie=new b(window.innerWidth*F,window.innerHeight*F,{samples:Ee,type:x}),Pe=new h(window.innerWidth,window.innerHeight),Re=new m(Pe,Se,we,Ne),p=new be(B,Ie);p.setPixelRatio(F);p.addPass(new xe(le,P));p.addPass(Re);p.addPass(new Me);class ye{constructor(e,t){this.game=e,this.cubesVisuals=new Fe(this),this.backgroundVisuals=new Ae(this),this.finishVisuals=new Oe(this),this.lightsVisuals=new Be(this,t)}lightsVisuals;cubesVisuals;backgroundVisuals;finishVisuals;update(e){this.cubesVisuals.update(),this.finishVisuals.update(),this.lightsVisuals.update(),this.backgroundVisuals.update(e),p.render()}timeNow(){return this.game.timeNow}resize(){P.aspect=window.innerWidth/window.innerHeight,P.updateProjectionMatrix(),B.setSize(window.innerWidth,window.innerHeight),p.setSize(window.innerWidth,window.innerHeight)}}class Fe{constructor(e){this.visuals=e}update(){const e=this.visuals.game,t=e.notes.getDisplayNotes();for(let s=0;s<100;s++){const a=fe[s],i=t[s];if(!i){a.position.z=R;continue}let o=y(i.time,e.timeNow,e.notes.timeTop,0,1);o=Math.pow(o,3)+o,a.position.z=-y(o,0,1,k,R),a.position.x=ne[i.note],a.material=this._getCubeMaterial(i)}}_getCubeMaterial(e){if(e.status==null)return N.NEUTRAL;if(e.status)return N.SUCCESS;if(!e.status)return N.FAILED;throw new Error("Invalid note status")}}class Be{constructor(e,t){this.visuals=e,this.lightEvents=t,this.lightsTarget=E.map(()=>0)}COLORS=[new u(65536),new u(5300963),new u(15820012),new u(16777215)];INTENSITY=500;lightEventIndex=0;lightsTarget;update(){E.forEach((s,a)=>{s.intensity=O(s.intensity,this.lightsTarget[a],.2)}),this.setBackgroundColor(c.colorLeft,T.left),this.setBackgroundColor(c.colorRight,T.right),this.setBackgroundColor(c.colorCenter1,T.center1),this.setBackgroundColor(c.colorCenter2,T.center2),this.setBackgroundColor(c.colorCenter3,T.center3);const e=this.lightEvents[this.lightEventIndex];if(!e)return;e.time-this.visuals.timeNow()<=0&&(this.lightEventIndex++,this.lightEffect(e))}lightEffect(e){const t=E[e.lightIndex];if(!t){console.error("Invalid light index",e.lightIndex);return}const s=this.COLORS[e.colorI];if(!s){console.error("Invalid color index",e.colorI);return}t.color=s,e.modeI==1?t.intensity=this.INTENSITY:(e.modeI==2||e.modeI==3)&&(t.intensity=this.INTENSITY*2),e.modeI==3?this.lightsTarget[e.lightIndex]=0:this.lightsTarget[e.lightIndex]=this.INTENSITY}setBackgroundColor(e,t){const s=Math.min(1,t.intensity/this.INTENSITY);e.value.set(t.color.r*s,t.color.g*s,t.color.b*s)}}class Oe{constructor(e){this.visuals=e}COLOR_RED=new u(16711680);COLOR_GREEN=new u(65280);failFlashElem=document.getElementById("failFlash");update(){I.forEach(e=>e.intensity=O(e.intensity,0,.06))}onHitOrMiss(e,t){I[t].intensity=50,I[t].color=e?this.COLOR_GREEN:this.COLOR_RED,e||this.flashFail(),this.visuals.backgroundVisuals.onNotePlay()}flashFail(){this.failFlashElem&&this.failFlashElem.animate([{opacity:.9},{opacity:0}],{duration:280,easing:"ease-out"})}setFinishSize(e,t){const s=y(e,0,t,k,R);he.scale.z=s}}class Ae{constructor(e){this.visuals=e}lightsIntensity=0;backgroundTime=0;update(e){const t=this.visuals.timeNow();this.backgroundTime+=e+.001,this.lightsIntensity=O(this.lightsIntensity,.5,.01),c.iTime.value=this.backgroundTime,ue.forEach((s,a)=>{s.intensity=this.lightsIntensity*1e3,s.position.x=Math.sin(t+a*10)*10,s.position.z=Math.cos(t+a*10)*10})}onNotePlay(){this.lightsIntensity=Math.min(1,this.lightsIntensity*1.1),this.backgroundTime+=.1}updateVisibility(e){c.iVisibility.value=e}}const L=2,z=.1;class De{constructor(e,t){this.game=e,this.setNotes(t),this.setHitWindow(.05)}notes=[];timeTop=0;_bottomNoteIndex=0;_bottomClickableNoteIndex=0;_topClickableNoteIndex=0;_topNoteIndex=0;hitWindow=.05;setNotes(e){this.notes=e,this._bottomNoteIndex=0,this._bottomClickableNoteIndex=0,this._topClickableNoteIndex=0,this._topNoteIndex=0}update(){const e=this.game.timeNow;this.timeTop=e+L;const t=e+this.hitWindow,s=e-Math.min(this.hitWindow,z),a=e-z,i=this.notes;for(let o=Math.max(0,this._bottomNoteIndex);o<i.length;o++){const n=i[o],r=n.time;if(r<a&&(this._bottomNoteIndex=o),r<s)this._bottomClickableNoteIndex=o,this.noteFinished(n);else if(r<t)this._topClickableNoteIndex=o+1;else if(r<this.timeTop)this._topNoteIndex=o+1;else break}}getDisplayNotes(){return this.notes.slice(this._bottomNoteIndex,this._topNoteIndex)}getClickableNotes(e){return this.notes.slice(this._bottomClickableNoteIndex,this._topClickableNoteIndex).filter(s=>e==s.note)}click(e){const t=this.getClickableNotes(e);if(t.length==0)return this.onFail(e,!0),!1;const s=ce(t,this._distance);return s.status!==void 0?(this.onFail(e,!0),!1):(s.status=!0,this.onSuccess(e),!0)}noteFinished(e){e.status===void 0&&(e.status=!1,this.onFail(e.note,!1),console.warn("Missed note"))}onFail(e,t=!1){this.game.combo.onFail(),t&&this.game.visuals.finishVisuals.onHitOrMiss(!1,e)}onSuccess(e){this.game.combo.onSuccess(),this.game.visuals.finishVisuals.onHitOrMiss(!0,e)}setHitWindow(e){this.hitWindow=e,this.game.visuals.finishVisuals.setFinishSize(this.hitWindow,L)}_distanceS=e=>e.time-this.game.timeNow;_distance=e=>Math.abs(this._distanceS(e))}class Le{timeNow=0;timeOffset=0;combo;visuals;notes;meta;difficulty;constructor(e,t,s,a){this.meta=s,this.difficulty=a,this.combo=new de,this.visuals=new ye(this,t),this.notes=new De(this,e)}getStats(){const{hits:e,fails:t,score:s,maxCombo:a}=this.combo,i=e+t,o=i===0?0:e/i;return{score:s,hits:e,fails:t,accuracy:o,maxCombo:a}}update(e){e+=this.timeOffset;const t=e-this.timeNow;this.timeNow=e,this.notes.update(),this.visuals.update(t)}click(e){this.notes.click(e)}setTimeOffset(e){this.timeOffset=e}setHitWindow(e){this.notes.setHitWindow(e)}}export{Le as Game};
