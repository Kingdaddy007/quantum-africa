const workshop=document.querySelector('.workshop-chapter'),model=document.querySelector('#workshop-model');
const modes=[...document.querySelectorAll('[data-model-mode]')],map=document.querySelector('.connection-map'),footer=document.querySelector('.summit-footer');
const modeCopy={outline:['Reveal the structure.','Start with the lines. See how the parts relate.'],form:['Explore the form.','Bring the parts together. Look at the whole.'],light:['Change the light.','A different setting. A different perspective.']};
const shapes=[
 ['plinth',440,16,300,0,146,0,0],['podium',360,30,230,0,123,0,5],
 ['west',110,130,130,-107,43,-32,45],['tower',110,210,120,15,3,-40,90],
 ['east',100,90,140,122,63,20,30],['bridge',174,18,70,12,-20,55,65]
];
if(CSS.supports('transform-style','preserve-3d')){
 for(const [name,w,h,d,x,y,z,lift]of shapes){
  const mass=document.createElement('div');mass.className=`mass ${name}`;
  for(const [key,value]of Object.entries({mw:w,mh:h,md:d,mx:x,my:y,mz:z,lift}))mass.style.setProperty(`--${key}`,`${value}px`);
  for(const side of ['front','back','left','right','top','bottom']){const face=document.createElement('div');face.className=`face ${side}`;mass.append(face)}
  model.append(mass);
 }
 workshop.classList.add('model-ready');
}
let pending=0,dead=false,currentMode='';
const clamp=v=>Math.max(0,Math.min(1,v)),isStatic=()=>document.body.classList.contains('static-mode');
function selectMode(mode){
 if(mode===currentMode)return;
 currentMode=mode;workshop.dataset.modelView=mode;
 document.querySelector('#model-state-title').textContent=modeCopy[mode][0];
 document.querySelector('#model-state-copy').textContent=modeCopy[mode][1];
 for(const button of modes)button.setAttribute('aria-pressed',String(button.dataset.modelMode===mode));
}
function update(){
 pending=0;if(dead||document.hidden)return;
 if(isStatic()){
  selectMode(currentMode||'form');model.style.setProperty('--model-angle','-30deg');model.style.setProperty('--assembly-lift',0);
  footer.style.setProperty('--footer-shift','0px');map.style.setProperty('--connection-offset',0);map.style.setProperty('--connection-opacity',1);return;
 }
 const rect=workshop.getBoundingClientRect();
 if(rect.bottom>0&&rect.top<innerHeight+150){
  const p=clamp(-rect.top/Math.max(1,workshop.offsetHeight-innerHeight));
  selectMode(p<.32?'outline':p<.68?'form':'light');
  model.style.setProperty('--model-angle',`${-40+p*65}deg`);
  model.style.setProperty('--assembly-lift',Math.max(0,1-p/.55));
 }
 const mr=map.getBoundingClientRect();if(mr.bottom>0&&mr.top<innerHeight+100){const p=clamp((innerHeight-mr.top)/(innerHeight*.8));map.style.setProperty('--connection-offset',1-p);map.style.setProperty('--connection-opacity',.3+p*.7)}
 const remaining=document.querySelector('main').getBoundingClientRect().bottom;
 const reveal=clamp((innerHeight-remaining)/Math.max(1,footer.offsetHeight));footer.style.setProperty('--footer-shift',`${(1-reveal)*-45}px`);
}
function invalidate(){if(!pending&&!dead&&!document.hidden)pending=requestAnimationFrame(update)}
for(const button of modes)button.addEventListener('click',()=>{
 const mode=button.dataset.modelMode;selectMode(mode);
 if(isStatic())return;
 const p={outline:.15,form:.5,light:.85}[mode];
 scrollTo({top:scrollY+workshop.getBoundingClientRect().top+(workshop.offsetHeight-innerHeight)*p,behavior:'smooth'});
});
const playButtons=[...document.querySelectorAll('[data-play]')],playScenes=[...document.querySelectorAll('[data-play-scene]')];
function selectPlay(which){
 for(const button of playButtons)button.setAttribute('aria-pressed',String(button.dataset.play===which));
 for(const scene of playScenes){const active=isStatic()||scene.dataset.playScene===which;scene.classList.toggle('is-selected',scene.dataset.playScene===which);scene.setAttribute('aria-hidden',String(!active));scene.inert=!active}
}
for(const button of playButtons)button.addEventListener('click',()=>selectPlay(button.dataset.play));
// New chapter links align from the actual layout and leave keyboard focus at
// the destination. This also avoids focus scrolling a pinned source stage.
document.addEventListener('click',event=>{
 const anchor=event.target.closest('a[href^="#"]');
 if(!anchor||!anchor.closest('.workshop-chapter,.tail-section,.summit-footer,.conversation-controls')||event.defaultPrevented||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||event.button!==0)return;
 const target=document.getElementById(anchor.hash.slice(1));if(!target)return;
 event.preventDefault();
 const top=anchor.hash==='#closing'?document.documentElement.scrollHeight-innerHeight:scrollY+target.getBoundingClientRect().top-(innerWidth<=760?72:76);
 history.pushState(null,'',anchor.hash);
 const focus=target.querySelector('h2')||target;focus.setAttribute('tabindex','-1');focus.focus({preventScroll:true});
 scrollTo({top,behavior:isStatic()||Math.abs(top-scrollY)>innerHeight*2?'instant':'smooth'});
});
for(const image of document.querySelectorAll('.play-scene img'))image.addEventListener('error',()=>{image.hidden=true});
let wasStatic=isStatic();selectMode(wasStatic?'form':'outline');selectPlay('games');
const observer=new MutationObserver(()=>{const value=isStatic();if(value!==wasStatic){wasStatic=value;selectPlay(playButtons.find(b=>b.getAttribute('aria-pressed')==='true')?.dataset.play||'games');invalidate()}});observer.observe(document.body,{attributes:true,attributeFilter:['class']});
addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',invalidate);addEventListener('pageshow',invalidate);document.fonts.ready.then(invalidate);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(pending);pending=0}else invalidate()});
addEventListener('pagehide',event=>{if(!event.persisted){dead=true;cancelAnimationFrame(pending);observer.disconnect()}});
invalidate();
