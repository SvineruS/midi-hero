const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-9HYAW1Qi.js","assets/3d-DH_mg1Kz.js","assets/index-BAKbBKeO.js","assets/index-Caa2khd4.css"])))=>i.map(i=>d[i]);
import{_ as W,S as y,l as ke,f as Te}from"./index-BAKbBKeO.js";const Ce=`<div id="failFlash"></div>
<audio id="audioPlayer"></audio>
<div class="header">
    <button class="header-btn" id="backToMarketplace">&larr; Marketplace</button>
    <div class="settings">
        <button class="settings-toggle" id="settingsToggle" title="Settings">&#9881;&#xFE0E;</button>
        <div class="controls hidden" id="controlsPanel">
            <label><span>Delay</span><input type="range" min="-1.0" max="0.5" value="0" step="0.001" id="timeOffset"/></label>
            <label><span>Difficulty</span><input type="range" min="0.03" max="0.1" value="0.05" step="0.01" id="hitTime"/></label>
            <label><span>BG lights</span><input type="range" min="0.03" max="0.75" value="0.5" step="0.01" id="visibility"/></label>
            <label><span>Volume</span><input type="range" min="0" max="1" value="0.5" step="0.01" id="volume"/></label>
        </div>
    </div>
</div>
<div id="startOverlay" class="overlay">
    <div class="panel loading">
        <div class="skel-group">
            <div class="skel skel-cover"></div>
            <div class="skel skel-title"></div>
            <div class="skel skel-author"></div>
            <div class="skel-chips">
                <div class="skel skel-chip"></div>
                <div class="skel skel-chip"></div>
                <div class="skel skel-chip"></div>
                <div class="skel skel-chip"></div>
            </div>
            <div class="skel skel-hint"></div>
        </div>
        <img id="startCover" alt=""/>
        <div class="info">
            <h1 id="startTitle"></h1>
            <h2 id="startAuthor"></h2>
            <div class="meta">
                <span id="startDiff"></span>
                <span id="startBpm"></span>
                <span id="startDuration"></span>
                <span id="startNps"></span>
            </div>
            <p id="startHint" class="hint">Press <kbd>Space</kbd> or click anywhere to start</p>
        </div>
    </div>
</div>
<div id="endOverlay" class="overlay hidden">
    <div class="panel" id="endPanel">
        <div id="endGrade" class="grade"></div>
        <div id="endSoloStats" class="stats">
            <div><span>Score</span><strong id="endScore"></strong></div>
            <div><span>Accuracy</span><strong id="endAccuracy"></strong></div>
            <div><span>Max combo</span><strong id="endMaxCombo"></strong></div>
            <div><span>Hits</span><strong id="endHits"></strong></div>
            <div><span>Fails</span><strong id="endFails"></strong></div>
        </div>
        <div id="endLeaderboard" class="leaderboard hidden"></div>
        <div class="actions">
            <button id="endReplay">Play again</button>
            <button id="endBack">Marketplace</button>
        </div>
    </div>
</div>
<div id="scoreTicker" class="score-ticker hidden"></div>
`,xe=6,Oe=22,P=[[3,3],[3,4],[3,9],[3,10]],we=B(34,255,85),_e=B(255,17,51),Pe=B(24,8,64),Me=220,$e=location.protocol==="https:"?"https://chromasdk.io:54236/razer/chromasdk":"http://localhost:54235/razer/chromasdk";let f=null,O=null,w=null;const Q=P.map(()=>({color:0,until:0}));function B(e,i,u){return u<<16|i<<8|e}async function Ae(){if(f)return!0;try{const i=await(await fetch($e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"MIDI HERO",description:"Rhythm game for BeatSaver maps",author:{name:"MIDI HERO",contact:"https://github.com"},device_supported:["keyboard"],category:"game"})})).json();return i?.uri?(f=i.uri,O=setInterval(Re,1e4),w=setInterval(De,40),!0):!1}catch{return!1}}function He(){O&&clearInterval(O),w&&clearInterval(w),O=null,w=null,f&&(fetch(f,{method:"DELETE"}).catch(()=>{}),f=null)}function Ue(e,i){f&&(e<0||e>=P.length||(Q[e]={color:i?we:_e,until:performance.now()+Me}))}function Re(){f&&fetch(f+"/heartbeat",{method:"PUT"}).catch(()=>{})}function De(){if(!f)return;const e=Array.from({length:xe},()=>new Array(Oe).fill(0)),i=performance.now();for(let u=0;u<P.length;u++){const[L,s]=P[u],o=Q[u];e[L][s]=o.until>i?o.color:Pe}fetch(f+"/keyboard",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({effect:"CHROMA_CUSTOM",param:e})}).catch(()=>{})}const X=.03+.1;function Ie(e){return String(X-e)}function Ne(e){return X-e}function J(e){return e.map(i=>({...i,status:void 0}))}function N(e){return e>=1?{letter:"S+",color:"#50e2e3"}:e>=.99?{letter:"S",color:"#50e2e3"}:e>=.95?{letter:"A",color:"#4ade80"}:e>=.85?{letter:"B",color:"#a3e635"}:e>=.75?{letter:"C",color:"#eab308"}:e>=.6?{letter:"D",color:"#f97316"}:e>=.4?{letter:"E",color:"#ef4444"}:{letter:"F",color:"#991b1b"}}const Be={KeyS:0,KeyD:1,KeyK:2,KeyL:3};let Y=!1,_=null,T=null,a,v=!1,l;function n(e,i){return e.querySelector(i)}function Z(){_!==null&&(cancelAnimationFrame(_),_=null)}async function Fe(e,i,u,L,s=null){T?.abort(),T=new AbortController;const{signal:o}=T;if(Z(),!Y){e.innerHTML=Ce;const{attachRenderer:t}=await W(async()=>{const{attachRenderer:r}=await import("./3d-DH_mg1Kz.js").then(d=>d._);return{attachRenderer:r}},[]);t(e),Y=!0}const{Game:g}=await W(async()=>{const{Game:t}=await import("./game-9HYAW1Qi.js");return{Game:t}},__vite__mapDeps([0,1,2,3]));l=n(e,"#audioPlayer");const F=n(e,"#hitTime"),G=n(e,"#timeOffset"),V=n(e,"#visibility"),U=n(e,"#volume"),ee=n(e,"#settingsToggle"),te=n(e,"#controlsPanel"),E=n(e,"#startOverlay"),ne=n(e,"#startCover"),ae=n(e,"#startTitle"),se=n(e,"#startAuthor"),ie=n(e,"#startDiff"),oe=n(e,"#startBpm"),re=n(e,"#startDuration"),le=n(e,"#startNps"),j=n(e,"#startHint"),k=n(e,"#endOverlay"),M=n(e,"#endGrade"),de=n(e,"#endScore"),ce=n(e,"#endAccuracy"),ue=n(e,"#endMaxCombo"),me=n(e,"#endHits"),pe=n(e,"#endFails"),ve=n(e,"#endSoloStats"),$=n(e,"#endLeaderboard"),fe=n(e,"#endReplay"),ge=n(e,"#endBack"),he=n(e,"#backToMarketplace"),b=n(e,"#scoreTicker");E.classList.remove("hidden"),E.querySelector(".panel").classList.add("loading"),k.classList.add("hidden"),b.classList.add("hidden"),b.innerHTML="",v=!1;const A=y.get("timeOffset")??0,H=y.get("hitTime")||.075,R=y.get("visibility")??.25,z=y.get("audioVolume")??.5;F.value=Ie(H),G.value=A,V.value=R,U.value=z,Ae();const{audio:be,meta:m,songData:C}=await ke(i),S=m.difficulties[+u]??m.difficulties[0];a=new g(J(C.difficulties[u].notes),C.lightEvents,m,S),l.src=URL.createObjectURL(be),l.volume=z,l.load(),a.setTimeOffset(A),a.setHitWindow(H),a.visuals.backgroundVisuals.updateVisibility(R),document.title=`${m.songAuthor} — ${m.songName} | MIDI HERO`,ne.src=m.coverURL,ae.textContent=m.songName,se.textContent=m.songAuthor;const ye=S.characteristic&&S.characteristic!=="Standard"?`${S.characteristic} `:"";ie.textContent=`${ye}${S.name}`,oe.textContent=`${m.bpm} BPM`,re.textContent=Te(m.duration),le.textContent=`${S.notesPerSecond.toFixed(2)} NPS`,E.querySelector(".panel").classList.remove("loading");const D=new Map;let K=0;if(s){b.classList.remove("hidden"),x(b,"local",s.localName,0,0,!0);for(const[d]of s.peers)x(b,d,s.getPeerName(d),0,0,!1);s.onPeerScore=(d,p)=>{x(b,d,s.getPeerName(d),p.score,p.combo,!1)},s.onPeerEndStats=(d,p)=>{D.set(d,p)},a.combo.onChange=()=>{const d=performance.now();d-K<250||(K=d,s.sendScore({score:a.combo.score,combo:a.combo.combo,hits:a.combo.hits,fails:a.combo.fails}),x(b,"local",s.localName,a.combo.score,a.combo.combo,!0))},j.textContent="Starting in 3...";let t=3;const r=setInterval(()=>{t--,t>0?j.textContent=`Starting in ${t}...`:(clearInterval(r),I())},1e3)}function I(){v||(v=!0,E.classList.add("hidden"),l.play())}function Ee(){const t=a.getStats(),r=N(t.accuracy);if(M.textContent=r.letter,M.style.color=r.color,M.style.textShadow=`0 0 40px ${r.color}, 0 0 80px ${r.color}`,v=!1,de.textContent=String(t.score),ce.textContent=`${(t.accuracy*100).toFixed(1)}%`,ue.textContent=String(t.maxCombo),me.textContent=String(t.hits),pe.textContent=String(t.fails),ve.classList.remove("hidden"),s){let d=function(){const p=[];p.push({name:s.localName,score:t.score,accuracy:t.accuracy,maxCombo:t.maxCombo,grade:r.letter,gradeColor:r.color,isLocal:!0});for(const[c,h]of D){const Le=N(h.accuracy);p.push({name:s.getPeerName(c),score:h.score,accuracy:h.accuracy,maxCombo:h.maxCombo,grade:h.grade,gradeColor:Le.color,isLocal:!1})}p.sort((c,h)=>h.score-c.score),$.innerHTML=p.map((c,h)=>`
          <div class="leaderboard-row${c.isLocal?" local":""}">
            <span class="leaderboard-rank">#${h+1}</span>
            <span class="leaderboard-grade" style="color:${c.gradeColor};text-shadow:0 0 8px ${c.gradeColor}">${c.grade}</span>
            <span class="leaderboard-name">${c.name}</span>
            <span class="leaderboard-score">${c.score}</span>
            <span class="leaderboard-detail">${(c.accuracy*100).toFixed(1)}% / ${c.maxCombo}x</span>
          </div>
        `).join("")};s.sendEndStats({...t,grade:r.letter}),$.classList.remove("hidden"),d(),s.onPeerEndStats=(p,c)=>{D.set(p,c),d()},setTimeout(()=>k.classList.remove("hidden"),200),b.classList.add("hidden")}else $.classList.add("hidden"),k.classList.remove("hidden")}function Se(t){if(!k.classList.contains("hidden"))return;if(t.key==" "){!v&&!s?I():v&&l.paused?l.play():v&&l.pause(),t.preventDefault();return}if(!v)return;const r=Be[t.code];r!=null&&(a.click(r),t.preventDefault())}he.addEventListener("click",L,{signal:o}),ge.addEventListener("click",L,{signal:o}),fe.addEventListener("click",()=>{s?s.selectSong(i,u):(k.classList.add("hidden"),E.classList.remove("hidden"),E.querySelector(".panel").classList.remove("loading"),v=!1,a=new g(J(C.difficulties[u].notes),C.lightEvents,m,S),a.setTimeOffset(A),a.setHitWindow(H),a.visuals.backgroundVisuals.updateVisibility(R),l.currentTime=0)},{signal:o}),s||E.addEventListener("click",I,{signal:o}),document.body.addEventListener("keydown",Se,{signal:o}),window.addEventListener("resize",a.visuals.resize,{signal:o}),l.addEventListener("ended",Ee,{signal:o}),document.addEventListener("visibilitychange",()=>{document.hidden&&l.pause()},{signal:o}),ee.addEventListener("click",()=>{te.classList.toggle("hidden")},{signal:o}),G.addEventListener("input",t=>{a.setTimeOffset(+t.target.value),y.set("timeOffset",+t.target.value)},{signal:o}),F.addEventListener("input",t=>{const r=Ne(+t.target.value);a.setHitWindow(r),y.set("hitTime",r)},{signal:o}),V.addEventListener("input",t=>{a.visuals.backgroundVisuals.updateVisibility(+t.target.value),y.set("visibility",+t.target.value)},{signal:o}),U.addEventListener("input",t=>{l.volume=+t.target.value,y.set("audioVolume",+t.target.value)},{signal:o});function q(){_=requestAnimationFrame(q),!(!a||document.hidden)&&a.update(l.currentTime)}q()}function x(e,i,u,L,s,o){let g=e.querySelector(`[data-peer="${i}"]`);g||(g=document.createElement("div"),g.className=`score-ticker-row${o?" local":""}`,g.dataset.peer=i,e.appendChild(g)),g.innerHTML=`<span class="ticker-name">${u}</span><span class="ticker-score">${L}</span><span class="ticker-combo">${s}x</span>`}function Ge(){T?.abort(),T=null,Z(),l&&(l.pause(),l.src=""),a=null,v=!1,He()}const je=Object.freeze(Object.defineProperty({__proto__:null,getGrade:N,initGame:Fe,stopGame:Ge},Symbol.toStringTag,{value:"Module"}));export{Ue as f,je as m};
