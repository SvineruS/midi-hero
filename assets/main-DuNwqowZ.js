const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-DABEkCAg.js","assets/3d-DH_mg1Kz.js"])))=>i.map(i=>d[i]);
import{_ as I,S as b,l as be,f as he}from"./index-COpNaPOB.js";const ye=`<div id="failFlash"></div>
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
`,j=.03+.1;function Ee(e){return String(j-e)}function ke(e){return j-e}function q(e){return e.map(v=>({...v,status:void 0}))}function K(e){return e>=1?{letter:"S+",color:"#50e2e3"}:e>=.99?{letter:"S",color:"#50e2e3"}:e>=.95?{letter:"A",color:"#4ade80"}:e>=.85?{letter:"B",color:"#a3e635"}:e>=.75?{letter:"C",color:"#eab308"}:e>=.6?{letter:"D",color:"#f97316"}:e>=.4?{letter:"E",color:"#ef4444"}:{letter:"F",color:"#991b1b"}}const Se={KeyS:0,KeyD:1,KeyK:2,KeyL:3};let U=!1,C=null,S=null,s,m=!1,l;function a(e,v){return e.querySelector(v)}function W(){C!==null&&(cancelAnimationFrame(C),C=null)}async function xe(e,v,E,L,n=null){S?.abort(),S=new AbortController;const{signal:o}=S;if(W(),!U){e.innerHTML=ye;const{attachRenderer:t}=await I(async()=>{const{attachRenderer:i}=await import("./3d-DH_mg1Kz.js").then(r=>r._);return{attachRenderer:i}},[]);t(e),U=!0}const{Game:p}=await I(async()=>{const{Game:t}=await import("./game-DABEkCAg.js");return{Game:t}},__vite__mapDeps([0,1]));l=a(e,"#audioPlayer");const D=a(e,"#hitTime"),_=a(e,"#timeOffset"),N=a(e,"#visibility"),F=a(e,"#volume"),z=a(e,"#settingsToggle"),Y=a(e,"#controlsPanel"),h=a(e,"#startOverlay"),J=a(e,"#startCover"),Q=a(e,"#startTitle"),X=a(e,"#startAuthor"),Z=a(e,"#startDiff"),ee=a(e,"#startBpm"),te=a(e,"#startDuration"),ae=a(e,"#startNps"),G=a(e,"#startHint"),k=a(e,"#endOverlay"),w=a(e,"#endGrade"),se=a(e,"#endScore"),ne=a(e,"#endAccuracy"),ie=a(e,"#endMaxCombo"),le=a(e,"#endHits"),oe=a(e,"#endFails"),re=a(e,"#endSoloStats"),$=a(e,"#endLeaderboard"),de=a(e,"#endReplay"),ce=a(e,"#endBack"),ue=a(e,"#backToMarketplace"),g=a(e,"#scoreTicker");h.classList.remove("hidden"),h.querySelector(".panel").classList.add("loading"),k.classList.add("hidden"),g.classList.add("hidden"),g.innerHTML="",m=!1;const P=b.get("timeOffset")??0,M=b.get("hitTime")||.075,O=b.get("visibility")??.25,R=b.get("audioVolume")??.5;D.value=Ee(M),_.value=P,N.value=O,F.value=R;const{audio:me,meta:c,songData:x}=await be(v),y=c.difficulties[+E]??c.difficulties[0];s=new p(q(x.difficulties[E].notes),x.lightEvents,c,y),l.src=URL.createObjectURL(me),l.volume=R,l.load(),s.setTimeOffset(P),s.setHitWindow(M),s.visuals.backgroundVisuals.updateVisibility(O),document.title=`${c.songAuthor} — ${c.songName} | MIDI HERO`,J.src=c.coverURL,Q.textContent=c.songName,X.textContent=c.songAuthor;const ve=y.characteristic&&y.characteristic!=="Standard"?`${y.characteristic} `:"";Z.textContent=`${ve}${y.name}`,ee.textContent=`${c.bpm} BPM`,te.textContent=he(c.duration),ae.textContent=`${y.notesPerSecond.toFixed(2)} NPS`,h.querySelector(".panel").classList.remove("loading");const H=new Map;let V=0;if(n){g.classList.remove("hidden"),T(g,"local",n.localName,0,0,!0);for(const[r]of n.peers)T(g,r,n.getPeerName(r),0,0,!1);n.onPeerScore=(r,u)=>{T(g,r,n.getPeerName(r),u.score,u.combo,!1)},n.onPeerEndStats=(r,u)=>{H.set(r,u)},s.combo.onChange=()=>{const r=performance.now();r-V<250||(V=r,n.sendScore({score:s.combo.score,combo:s.combo.combo,hits:s.combo.hits,fails:s.combo.fails}),T(g,"local",n.localName,s.combo.score,s.combo.combo,!0))},G.textContent="Starting in 3...";let t=3;const i=setInterval(()=>{t--,t>0?G.textContent=`Starting in ${t}...`:(clearInterval(i),A())},1e3)}function A(){m||(m=!0,h.classList.add("hidden"),l.play())}function pe(){const t=s.getStats(),i=K(t.accuracy);if(w.textContent=i.letter,w.style.color=i.color,w.style.textShadow=`0 0 40px ${i.color}, 0 0 80px ${i.color}`,m=!1,se.textContent=String(t.score),ne.textContent=`${(t.accuracy*100).toFixed(1)}%`,ie.textContent=String(t.maxCombo),le.textContent=String(t.hits),oe.textContent=String(t.fails),re.classList.remove("hidden"),n){let r=function(){const u=[];u.push({name:n.localName,score:t.score,accuracy:t.accuracy,maxCombo:t.maxCombo,grade:i.letter,gradeColor:i.color,isLocal:!0});for(const[d,f]of H){const ge=K(f.accuracy);u.push({name:n.getPeerName(d),score:f.score,accuracy:f.accuracy,maxCombo:f.maxCombo,grade:f.grade,gradeColor:ge.color,isLocal:!1})}u.sort((d,f)=>f.score-d.score),$.innerHTML=u.map((d,f)=>`
          <div class="leaderboard-row${d.isLocal?" local":""}">
            <span class="leaderboard-rank">#${f+1}</span>
            <span class="leaderboard-grade" style="color:${d.gradeColor};text-shadow:0 0 8px ${d.gradeColor}">${d.grade}</span>
            <span class="leaderboard-name">${d.name}</span>
            <span class="leaderboard-score">${d.score}</span>
            <span class="leaderboard-detail">${(d.accuracy*100).toFixed(1)}% / ${d.maxCombo}x</span>
          </div>
        `).join("")};n.sendEndStats({...t,grade:i.letter}),$.classList.remove("hidden"),r(),n.onPeerEndStats=(u,d)=>{H.set(u,d),r()},setTimeout(()=>k.classList.remove("hidden"),200),g.classList.add("hidden")}else $.classList.add("hidden"),k.classList.remove("hidden")}function fe(t){if(!k.classList.contains("hidden"))return;if(t.key==" "){!m&&!n?A():m&&l.paused?l.play():m&&l.pause(),t.preventDefault();return}if(!m)return;const i=Se[t.code];i!=null&&(s.click(i),t.preventDefault())}ue.addEventListener("click",L,{signal:o}),ce.addEventListener("click",L,{signal:o}),de.addEventListener("click",()=>{n?n.selectSong(v,E):(k.classList.add("hidden"),h.classList.remove("hidden"),h.querySelector(".panel").classList.remove("loading"),m=!1,s=new p(q(x.difficulties[E].notes),x.lightEvents,c,y),s.setTimeOffset(P),s.setHitWindow(M),s.visuals.backgroundVisuals.updateVisibility(O),l.currentTime=0)},{signal:o}),n||h.addEventListener("click",A,{signal:o}),document.body.addEventListener("keydown",fe,{signal:o}),window.addEventListener("resize",s.visuals.resize,{signal:o}),l.addEventListener("ended",pe,{signal:o}),document.addEventListener("visibilitychange",()=>{document.hidden&&l.pause()},{signal:o}),z.addEventListener("click",()=>{Y.classList.toggle("hidden")},{signal:o}),_.addEventListener("input",t=>{s.setTimeOffset(+t.target.value),b.set("timeOffset",+t.target.value)},{signal:o}),D.addEventListener("input",t=>{const i=ke(+t.target.value);s.setHitWindow(i),b.set("hitTime",i)},{signal:o}),N.addEventListener("input",t=>{s.visuals.backgroundVisuals.updateVisibility(+t.target.value),b.set("visibility",+t.target.value)},{signal:o}),F.addEventListener("input",t=>{l.volume=+t.target.value,b.set("audioVolume",+t.target.value)},{signal:o});function B(){C=requestAnimationFrame(B),!(!s||document.hidden)&&s.update(l.currentTime)}B()}function T(e,v,E,L,n,o){let p=e.querySelector(`[data-peer="${v}"]`);p||(p=document.createElement("div"),p.className=`score-ticker-row${o?" local":""}`,p.dataset.peer=v,e.appendChild(p)),p.innerHTML=`<span class="ticker-name">${E}</span><span class="ticker-score">${L}</span><span class="ticker-combo">${n}x</span>`}function Te(){S?.abort(),S=null,W(),l&&(l.pause(),l.src=""),s=null,m=!1}export{K as getGrade,xe as initGame,Te as stopGame};
