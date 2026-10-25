import {createRobotRenderer} from './robot-webgl.js';
const body=document.body,robot=document.querySelector('#robotics'),image=document.querySelector('#robot-image'),canvas=document.querySelector('#robot-canvas');
const stage=robot.querySelector('.robot-stage'),message=document.querySelector('#robot-model-message');
let pending=0,imageFailed=false,renderer=null,modelFailed=false,near=false,dead=false,current=0;
const clamp=v=>Math.max(0,Math.min(1,v)),ramp=(p,a,b)=>clamp((p-a)/(b-a)),ease=v=>v*v*(3-2*v);
const isStatic=()=>body.classList.contains('static-mode');
function set(values){for(const [key,value]of Object.entries(values))robot.style.setProperty(`--${key}`,value)}
function failModel(){modelFailed=true;message.hidden=false;robot.classList.add('model-unavailable');renderer?.dispose();renderer=null;invalidate()}
function init(){if(renderer||modelFailed||dead)return;try{renderer=createRobotRenderer(canvas)}catch{failModel()}}
function update(){
  pending=0;if(dead||document.hidden)return;
  const staticMode=isStatic();robot.classList.toggle('is-static',staticMode||imageFailed||modelFailed);
  const bounds=robot.getBoundingClientRect();near=bounds.bottom>-250&&bounds.top<innerHeight+250;
  if(!near)return;
  init();
  if(staticMode||imageFailed||modelFailed){robot.classList.toggle('is-static',true);if(renderer)renderer.render(.26,true);return}
  const rect=robot.getBoundingClientRect(),target=clamp(-rect.top/(robot.offsetHeight-innerHeight));
  current+=(target-current)*.22;if(Math.abs(target-current)<.0002)current=target;
  const p=current,photo=ramp(p,.44,.54),open=ease(ramp(p,.63,.88));
  const w=stage.clientWidth,h=stage.clientHeight,phone=w<=760;
  const ratio=image.naturalWidth?image.naturalHeight/image.naturalWidth:1918/1080;
  // Both layouts use a full-scene photograph behind the type. Desktop must
  // not become a right-hand image column when the camera pulls back.
  const baseW=Math.max(w,h/ratio),baseH=baseW*ratio,scale=phone?2.05-open*1.05:1.65-open*.65;
  const targetX=w*(phone?.64:.76),targetY=h*(phone?.60:.51);
  const closeX=targetX-baseW*.81*scale,closeY=targetY-baseH*.275*scale;
  const finalX=(w-baseW)/2,finalY=phone?(h-baseH)/2:h*.1-baseH*.17;
  const x=closeX*(1-open)+finalX*open,y=closeY*(1-open)+finalY*open;
  const intro=1-ramp(p,.37,.44),context=ramp(p,.50,.56),takeaway=ramp(p,.81,.89);
  set({'robot-photo-opacity':photo,'robot-model-opacity':1-ramp(p,.40,.49),'robot-photo-width':`${baseW}px`,'robot-photo-height':`${baseH}px`,'robot-image-x':`${x}px`,'robot-image-y':`${y}px`,'robot-scale':scale,'robot-exposure':.86+open*.14,'robot-intro-opacity':intro,'robot-intro-visible':intro>.01?'visible':'hidden','robot-intro-y':`${-(1-intro)*20}px`,'robot-context-opacity':context,'robot-context-visible':context>.01?'visible':'hidden','robot-context-y':`${(1-context)*18}px`,'robot-takeaway-opacity':takeaway,'robot-takeaway-visible':takeaway>.01?'visible':'hidden'});
  robot.querySelector('.robot-phase').textContent=p<.44?'SCROLL TO MEET THE MACHINE':p<.80?'SEE IT. QUESTION IT.':'THE TECHNOLOGY. THE PEOPLE.';
  if(renderer&&p<.51)renderer.render(p);
  if(current!==target)invalidate();
}
function invalidate(){if(!pending&&!dead&&!document.hidden)pending=requestAnimationFrame(update)}
document.querySelector('#reveal-robot').addEventListener('click',()=>{if(isStatic()||imageFailed)return;scrollTo({top:scrollY+robot.getBoundingClientRect().top+(robot.offsetHeight-innerHeight)*.57,behavior:'smooth'})});
image.addEventListener('error',()=>{imageFailed=true;robot.classList.add('robot-unavailable');invalidate()});image.addEventListener('load',invalidate);
canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();failModel()});
canvas.addEventListener('webglcontextrestored',()=>{modelFailed=false;message.hidden=true;robot.classList.remove('model-unavailable');init();invalidate()});
addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',invalidate);addEventListener('pageshow',invalidate);document.fonts.ready.then(invalidate);
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(pending);pending=0}else invalidate()});
let previousStatic=isStatic();
const modeObserver=new MutationObserver(()=>{const value=isStatic();if(value!==previousStatic){previousStatic=value;invalidate()}});modeObserver.observe(body,{attributes:true,attributeFilter:['class']});
addEventListener('pagehide',event=>{if(!event.persisted){dead=true;cancelAnimationFrame(pending);modeObserver.disconnect();renderer?.dispose()}});
if(image.complete&&!image.naturalWidth)imageFailed=true;invalidate();
