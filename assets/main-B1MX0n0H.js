const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/game-Bde-zqtW.js","assets/3d-CKs7Nw1Z.js"])))=>i.map(i=>d[i]);
import{_ as A,S as o,l as at}from"./index-DV_A4RPO.js";const V=.03+.1;function nt(t){return String(V-t)}function lt(t){return V-t}function dt(t){const c=Math.floor(t/60),m=Math.floor(t%60);return`${c}:${m.toString().padStart(2,"0")}`}function D(t){return t.map(c=>({...c,status:void 0}))}function ot(t){return t>=1?{letter:"S+",color:"#50e2e3"}:t>=.99?{letter:"S",color:"#50e2e3"}:t>=.95?{letter:"A",color:"#4ade80"}:t>=.85?{letter:"B",color:"#a3e635"}:t>=.75?{letter:"C",color:"#eab308"}:t>=.6?{letter:"D",color:"#f97316"}:t>=.4?{letter:"E",color:"#ef4444"}:{letter:"F",color:"#991b1b"}}const rt={KeyS:0,KeyD:1,KeyK:2,KeyL:3},ct=`
<div id="failFlash"></div>
<audio id="audioPlayer"></audio>
<div class="header">
    <button class="header-btn" id="backToMarketplace">&larr; Marketplace</button>
    <div class="settings">
        <button class="settings-toggle" id="settingsToggle" title="Settings">&#9881;</button>
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
            <p class="hint">Press <kbd>Space</kbd> or click anywhere to start</p>
        </div>
    </div>
</div>
<div id="endOverlay" class="overlay hidden">
    <div class="panel">
        <div id="endGrade" class="grade"></div>
        <div class="stats">
            <div><span>Score</span><strong id="endScore"></strong></div>
            <div><span>Accuracy</span><strong id="endAccuracy"></strong></div>
            <div><span>Max combo</span><strong id="endMaxCombo"></strong></div>
            <div><span>Hits</span><strong id="endHits"></strong></div>
            <div><span>Fails</span><strong id="endFails"></strong></div>
        </div>
        <div class="actions">
            <button id="endReplay">Play again</button>
            <button id="endBack">Marketplace</button>
        </div>
    </div>
</div>
`;let P=!1,h=null,p=null,i,r=!1,a;function s(t,c){return t.querySelector(c)}function B(){h!==null&&(cancelAnimationFrame(h),h=null)}async function vt(t,c,m,S){p?.abort(),p=new AbortController;const{signal:n}=p;if(B(),!P){t.innerHTML=ct;const{attachRenderer:e}=await A(async()=>{const{attachRenderer:l}=await import("./3d-CKs7Nw1Z.js").then(it=>it._);return{attachRenderer:l}},[]);e(t),P=!0}const{Game:L}=await A(async()=>{const{Game:e}=await import("./game-Bde-zqtW.js");return{Game:e}},__vite__mapDeps([0,1]));a=s(t,"#audioPlayer");const T=s(t,"#hitTime"),x=s(t,"#timeOffset"),C=s(t,"#visibility"),O=s(t,"#volume"),F=s(t,"#settingsToggle"),G=s(t,"#controlsPanel"),u=s(t,"#startOverlay"),H=s(t,"#startCover"),$=s(t,"#startTitle"),R=s(t,"#startAuthor"),K=s(t,"#startDiff"),N=s(t,"#startBpm"),q=s(t,"#startDuration"),I=s(t,"#startNps"),f=s(t,"#endOverlay"),y=s(t,"#endGrade"),U=s(t,"#endScore"),W=s(t,"#endAccuracy"),j=s(t,"#endMaxCombo"),z=s(t,"#endHits"),Y=s(t,"#endFails"),J=s(t,"#endReplay"),Q=s(t,"#endBack"),X=s(t,"#backToMarketplace");u.classList.remove("hidden"),u.querySelector(".panel").classList.add("loading"),f.classList.add("hidden"),r=!1;const b=o.get("timeOffset")??0,E=o.get("hitTime")||.075,k=o.get("visibility")??.25,w=o.get("audioVolume")??.5;T.value=nt(E),x.value=b,C.value=k,O.value=w;const{audio:Z,meta:d,songData:g}=await at(c),v=d.difficulties[+m]??d.difficulties[0];i=new L(D(g.difficulties[m].notes),g.lightEvents,d,v),a.src=URL.createObjectURL(Z),a.volume=w,a.load(),i.setTimeOffset(b),i.setHitWindow(E),i.visuals.backgroundVisuals.updateVisibility(k),H.src=d.coverURL,$.textContent=d.songName,R.textContent=d.songAuthor;const tt=v.characteristic&&v.characteristic!=="Standard"?`${v.characteristic} `:"";K.textContent=`${tt}${v.name}`,N.textContent=`${d.bpm} BPM`,q.textContent=dt(d.duration),I.textContent=`${v.notesPerSecond.toFixed(2)} NPS`,u.querySelector(".panel").classList.remove("loading");function M(){r||(r=!0,u.classList.add("hidden"),a.play())}function et(){const e=i.getStats(),l=ot(e.accuracy);y.textContent=l.letter,y.style.color=l.color,y.style.textShadow=`0 0 40px ${l.color}, 0 0 80px ${l.color}`,U.textContent=String(e.score),W.textContent=`${(e.accuracy*100).toFixed(1)}%`,j.textContent=String(e.maxCombo),z.textContent=String(e.hits),Y.textContent=String(e.fails),f.classList.remove("hidden"),r=!1}function st(e){if(!f.classList.contains("hidden"))return;if(e.key==" "){r?a.paused?a.play():a.pause():M(),e.preventDefault();return}if(!r)return;const l=rt[e.code];l!=null&&(i.click(l),e.preventDefault())}X.addEventListener("click",S,{signal:n}),Q.addEventListener("click",S,{signal:n}),J.addEventListener("click",()=>{f.classList.add("hidden"),u.classList.remove("hidden"),u.querySelector(".panel").classList.remove("loading"),r=!1,i=new L(D(g.difficulties[m].notes),g.lightEvents,d,v),i.setTimeOffset(b),i.setHitWindow(E),i.visuals.backgroundVisuals.updateVisibility(k),a.currentTime=0},{signal:n}),u.addEventListener("click",M,{signal:n}),document.body.addEventListener("keydown",st,{signal:n}),window.addEventListener("resize",i.visuals.resize,{signal:n}),a.addEventListener("ended",et,{signal:n}),document.addEventListener("visibilitychange",()=>{document.hidden&&a.pause()},{signal:n}),F.addEventListener("click",()=>{G.classList.toggle("hidden")},{signal:n}),x.addEventListener("input",e=>{i.setTimeOffset(+e.target.value),o.set("timeOffset",+e.target.value)},{signal:n}),T.addEventListener("input",e=>{const l=lt(+e.target.value);i.setHitWindow(l),o.set("hitTime",l)},{signal:n}),C.addEventListener("input",e=>{i.visuals.backgroundVisuals.updateVisibility(+e.target.value),o.set("visibility",+e.target.value)},{signal:n}),O.addEventListener("input",e=>{a.volume=+e.target.value,o.set("audioVolume",+e.target.value)},{signal:n});function _(){h=requestAnimationFrame(_),!(!i||document.hidden)&&i.update(a.currentTime)}_()}function mt(){p?.abort(),p=null,B(),a&&(a.pause(),a.src=""),i=null,r=!1}export{vt as initGame,mt as stopGame};
