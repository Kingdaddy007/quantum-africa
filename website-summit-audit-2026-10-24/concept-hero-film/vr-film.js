// The scroll transition owns the headset; the native video clock owns film and type.
const sequence=document.querySelector('.sequence'),video=document.querySelector('#vr-video');
const control=document.querySelector('#vr-film-control'),body=document.body;
let inside=false,userPaused=false,failed=false,blocked=false,playPending=false,frame=0,scrollFrame=0;
const clamp=v=>Math.max(0,Math.min(1,v));
const ramp=(v,a,b)=>clamp((v-a)/(b-a));
const isStatic=()=>body.classList.contains('static-mode');
function paintCopy(){
  frame=0;
  const t=video.currentTime;
  const a=ramp(t,1.8,2.2)*(1-ramp(t,4.4,4.8));
  const b=ramp(t,5.5,5.9)*(1-ramp(t,8.2,8.6));
  for(const [name,opacity]of [['a',a],['b',b]]){
    sequence.style.setProperty(`--vr-copy-${name}`,opacity);
    sequence.style.setProperty(`--vr-copy-${name}-visible`,opacity>.01?'visible':'hidden');
    sequence.style.setProperty(`--vr-copy-${name}-y`,`${(1-opacity)*12}px`);
  }
  if(!video.paused&&!video.ended)frame=requestAnimationFrame(paintCopy);
}
function syncControl(){
  const playing=!video.paused&&!video.ended;
  control.textContent=playing?'Pause interior film Ⅱ':'Play interior film ▷';
  control.setAttribute('aria-label',playing?'Pause interior film':'Play interior film');
  control.hidden=failed||video.readyState<2||(video.ended&&!isStatic());
  if(!frame)paintCopy();
}
function pause(){video.pause();syncControl()}
function play(manual=false){
  if(failed||blocked||playPending||document.hidden)return;
  playPending=true;
  video.play().catch(error=>{if(error.name!=='AbortError')blocked=true}).finally(()=>{
    playPending=false;
    // A pending play must not restart after the visitor has already left.
    if(document.hidden||userPaused||(isStatic()?!manual:!inside))video.pause();
    syncControl();
    if(inside&&!isStatic()&&!userPaused&&!blocked&&!failed&&!video.ended&&video.paused&&!document.hidden)invalidate();
  });
}
function update(){
  scrollFrame=0;
  const staticMode=isStatic(),r=sequence.getBoundingClientRect();
  const span=Math.max(1,sequence.offsetHeight-innerHeight),p=clamp(-r.top/span);
  // Video plays whenever VR sequence is in viewport
  const nextInside=!staticMode&&r.bottom>0&&r.top<innerHeight&&p<(inside?.88:.84);
  video.controls=staticMode&&!failed;
  const entered=nextInside&&!inside;
  inside=nextInside;
  body.classList.toggle('vr-film-active',p>=(inside?.36:.395)&&p<(inside?.71:.68));
  if(entered){userPaused=false;blocked=false;if(video.ended)video.currentTime=0}
  if(!inside)pause();
  else if(!userPaused&&!blocked&&video.paused)play();
  syncControl();
}
function invalidate(){if(!scrollFrame)scrollFrame=requestAnimationFrame(update)}
control.addEventListener('click',()=>{
  if(video.paused||video.ended){userPaused=false;blocked=false;if(video.ended)video.currentTime=0;play(true)}
  else{userPaused=true;pause()}
});
video.addEventListener('loadeddata',()=>{if(!failed){video.hidden=false;control.hidden=false;invalidate()}});
video.addEventListener('canplay',()=>{if(!failed){video.hidden=false;invalidate()}});
video.addEventListener('ended',()=>{if(!video.loop){video.currentTime=0;if(inside&&!userPaused)play()}});
function failFilm(){
  failed=true;video.hidden=true;control.hidden=true;pause();
  const message=document.querySelector('#media-message');message.hidden=false;
  message.textContent='Interior film unavailable. The still view and event invitation remain available.';
}
video.addEventListener('error',failFilm);
video.querySelector('source').addEventListener('error',failFilm);
for(const event of ['play','pause','ended','timeupdate','seeked'])video.addEventListener(event,syncControl);
video.addEventListener('play',()=>{if(!frame)paintCopy()});
document.addEventListener('visibilitychange',()=>{
  if(document.hidden)pause();else if(inside&&!userPaused&&!video.ended)play();
});
addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',invalidate);
let previousStatic=isStatic();
new MutationObserver(()=>{const value=isStatic();if(value!==previousStatic){previousStatic=value;invalidate()}}).observe(body,{attributes:true,attributeFilter:['class']});
syncControl();invalidate();
if(video.readyState>=1){video.hidden=false;update()}
