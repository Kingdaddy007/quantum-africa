const body=document.body,hero=document.querySelector('#hero'),opening=document.querySelector('#brand-opening');
const video=document.querySelector('#hero-video'),poster=document.querySelector('#hero-poster'),filmControl=document.querySelector('#film-control');
const aperture=document.querySelector('#aperture-mark'),mark=document.querySelector('#opening-mark'),name=document.querySelector('.opening-name');
const preference=matchMedia('(prefers-reduced-motion: reduce)');
let introFrame=0,introActive=false,introStart=0,heroVisible=true,filmPausedByUser=false,videoFailed=false;
const clamp=v=>Math.max(0,Math.min(1,v)),ramp=(v,a,b)=>clamp((v-a)/(b-a)),smooth=v=>v*v*(3-2*v);
const isStatic=()=>body.classList.contains('static-mode')||preference.matches;
function rememberArrival(){try{sessionStorage.setItem('quantum-film-arrival-v1','seen')}catch{}}
function hasArrived(){try{return sessionStorage.getItem('quantum-film-arrival-v1')==='seen'}catch{return false}}
function showTitle(){body.classList.remove('hero-ready');void hero.offsetWidth;body.classList.add('hero-ready')}
function updateFilmControl(){const playing=!video.paused&&!video.ended;filmControl.textContent=playing?'Ⅱ':'▷';filmControl.setAttribute('aria-label',playing?'Pause background film':'Play background film')}
async function playFilm(){if(videoFailed||introActive||isStatic()||!heroVisible||filmPausedByUser||document.hidden){video.pause();return}try{await video.play();if(introActive||isStatic()||!heroVisible||filmPausedByUser||document.hidden)video.pause();else poster.hidden=true}catch{if(!introActive&&!isStatic()&&heroVisible&&!filmPausedByUser&&!document.hidden)poster.hidden=false}updateFilmControl()}
function syncFilm(){if(isStatic()){poster.hidden=false;video.pause();filmControl.hidden=true}else{poster.hidden=videoFailed;filmControl.hidden=videoFailed;void playFilm()}}
function finishIntro(){cancelAnimationFrame(introFrame);introActive=false;opening.hidden=true;opening.style.display='none';opening.classList.remove('aperture-active');body.classList.remove('intro-playing');rememberArrival();if(!body.classList.contains('hero-ready'))showTitle();void playFilm()}
function drawIntro(now){if(!introActive)return;const t=(now-introStart)/1000,w=innerWidth,h=innerHeight;
  const base=Math.min(w<=760?.7:.85,h/650),p=smooth(ramp(t,1.05,2.2));
  // The centre of the original bitmap lies inside the central blade. Its
  // 20px minimum distance to the blade edge determines full viewport cover.
  const cover=Math.hypot(w,h)/38+2,scale=base*Math.exp(Math.log(cover/base)*p);
  const transform=`translate(${w/2-256*scale} ${h*.44-256*scale}) scale(${scale})`;
  aperture.setAttribute('transform',transform);mark.style.width='512px';mark.style.height='512px';mark.style.left='0';mark.style.top='0';mark.style.transform=`translate(${w/2-256*base}px,${h*.44-256*base}px) scale(${base})`;
  mark.style.setProperty('--mark-reveal',`${(1-smooth(ramp(t,0,.65)))*100}%`);mark.style.opacity=String(1-ramp(t,.96,1.2));name.style.opacity=String(smooth(ramp(t,.2,.65))*(1-ramp(t,.95,1.18)));
  if(t>=1.02)opening.classList.add('aperture-active');
  if(t>1.48&&!body.classList.contains('hero-ready'))showTitle();
  if(t>=2.25){finishIntro();return}introFrame=requestAnimationFrame(drawIntro);
}
function beginIntro(reason='replay'){cancelAnimationFrame(introFrame);if(isStatic()){finishIntro();return}document.documentElement.classList.remove('skip-intro');opening.dataset.entry=reason;opening.classList.remove('aperture-active');body.classList.remove('hero-ready');body.classList.add('intro-playing');introActive=true;opening.hidden=false;opening.style.display='';introStart=performance.now();video.pause();introFrame=requestAnimationFrame(drawIntro)}
document.querySelector('#skip-opening').addEventListener('click',finishIntro);
document.querySelector('#replay').addEventListener('click',()=>{document.documentElement.classList.remove('skip-intro');window.scrollTo({top:0,behavior:'instant'});history.replaceState(null,'',location.pathname+location.search);filmPausedByUser=false;try{video.currentTime=0}catch{}beginIntro('replay')});
document.querySelector('.skip').addEventListener('click',()=>{finishIntro();hero.scrollIntoView({behavior:'instant'})});
document.querySelector('.header-attend').addEventListener('click',()=>finishIntro());
addEventListener('keydown',e=>{if(e.key==='Escape'&&introActive)finishIntro()});addEventListener('scroll',()=>{if(introActive&&scrollY>30)finishIntro()},{passive:true});
filmControl.addEventListener('click',()=>{filmPausedByUser=!video.paused;syncFilm()});
video.addEventListener('play',updateFilmControl);video.addEventListener('pause',updateFilmControl);
new IntersectionObserver(entries=>{heroVisible=entries[0].intersectionRatio>.2;syncFilm()},{threshold:.2}).observe(hero);
new MutationObserver(()=>{if(isStatic()&&introActive)finishIntro();syncFilm()}).observe(body,{attributes:true,attributeFilter:['class']});
addEventListener('visibilitychange',syncFilm);video.addEventListener('error',()=>{videoFailed=true;syncFilm()});video.querySelector('source').addEventListener('error',()=>{videoFailed=true;syncFilm()});
// No startup loader: the semantic hero is already present. Only a fresh,
// normal-motion visit receives the short automatic branded opening.
if(!location.hash&&!isStatic())beginIntro('automatic');else{opening.dataset.entry=isStatic()?'static':'repeat-or-anchor';opening.hidden=true;opening.style.display='none';body.classList.add('hero-ready');syncFilm()}
const initialAnchor=location.hash;
// Browser scroll restoration can otherwise override a deep link after the
// static document becomes the pinned layout. Align once the page has settled.
if(initialAnchor)history.scrollRestoration='manual';
let arrivalInterrupted=false;
for(const type of ['wheel','touchstart','pointerdown','keydown'])addEventListener(type,()=>{arrivalInterrupted=true},{once:true,passive:true});
function alignArrival(){if(arrivalInterrupted||location.hash!==initialAnchor||!initialAnchor)return;if(initialAnchor==='#invitation'&&!isStatic()){const seq=document.querySelector('.sequence');scrollTo({top:scrollY+seq.getBoundingClientRect().top+(seq.offsetHeight-innerHeight)*.96,behavior:'instant'})}else if(initialAnchor==='#closing'){scrollTo({top:document.documentElement.scrollHeight-innerHeight,behavior:'instant'})}else if(['#hero','#top','#invitation','#robotics','#voices','#speaker-list','#possibilities','#event-time','#attend','#conversation','#workshops','#partnerships','#play','#tickets','#sponsorship','#questions','#contact'].includes(initialAnchor)){document.querySelector(initialAnchor)?.scrollIntoView({behavior:'instant',block:'start'})}}
document.fonts.ready.then(()=>requestAnimationFrame(alignArrival));
addEventListener('pageshow',()=>document.fonts.ready.then(()=>requestAnimationFrame(alignArrival)),{once:true});
