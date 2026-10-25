/* Photographic headset motion study. All scene transforms derive from native scroll. */
const body=document.body,sequence=document.querySelector('.sequence'),stage=document.querySelector('.stage');
const device=document.querySelector('#device-image'),room=document.querySelector('#room-image');
const motion=document.querySelector('#motion'),replay=document.querySelector('#replay'),preference=matchMedia('(prefers-reduced-motion: reduce)');
// Source-space calibration is supplied with the photographic device asset.
const calibration={width:1536,height:1024,selected:'left',left:{x:603,y:445,rx:91,ry:91},right:{x:933,y:445,rx:91,ry:91}};
let staticMode=preference.matches||new URLSearchParams(location.search).has('static'),pending=0,deviceFailed=false;
const clamp=v=>Math.max(0,Math.min(1,v)),ramp=(p,a,b)=>clamp((p-a)/(b-a)),ease=v=>v*v*(3-2*v),mix=(a,b,p)=>a+(b-a)*p;
function props(values){for(const [key,value] of Object.entries(values))sequence.style.setProperty(`--${key}`,value)}
function update(){pending=0;if(staticMode)return;const rect=sequence.getBoundingClientRect(),span=sequence.offsetHeight-innerHeight,p=clamp(-rect.top/span);
 const approach=ease(ramp(p,.12,.4)),withdraw=ease(ramp(p,.66,.9)),near=approach*(1-withdraw);
 const w=stage.clientWidth,h=stage.clientHeight,phone=w<=760,baseW=Math.min(phone?w*1.17:w*.83,1120),baseH=baseW*calibration.height/calibration.width;
 const settle=ease(ramp(p,.86,.96)),left=(w-baseW)/2+settle*w*(phone?0:.13),initialCY=h*(phone?.56:.66)+settle*h*(phone?.21:.18),top=initialCY-calibration.left.y/calibration.height*baseH;
 const initialCX=left+calibration.left.x/calibration.width*baseW,rx=calibration.left.rx/calibration.width*baseW,ry=calibration.left.ry/calibration.height*baseH;
 const cover=Math.sqrt((w/(2*rx))**2+(h/(2*ry))**2)*1.08,scale=Math.exp(Math.log(cover)*near);
 const cx=mix(initialCX,w/2,near),cy=mix(initialCY,h/2,near),tx=cx-initialCX,ty=cy-initialCY;
 props({'device-left':`${left}px`,'device-top':`${top}px`,'device-width':`${baseW}px`,'device-height':`${baseH}px`,'origin-x':`${calibration.left.x/calibration.width*100}%`,'origin-y':`${calibration.left.y/calibration.height*100}%`,'device-tx':`${tx}px`,'device-ty':`${ty}px`,'device-scale':scale,'device-visible':near>.999?'hidden':'visible','room-opacity':.7+near*.3,'reflection-opacity':.65*(1-ramp(near,.25,.75)),'room-scale':1.06-near*.06,'room-x':`${(1-near)*w*.008}px`,'room-shade-opacity':ramp(p,.37,.43)*(1-ramp(p,.63,.69)),'arrival-opacity':1-ramp(p,.08,.19),'arrival-visible':p>.19?'hidden':'visible','arrival-y':`${-ramp(p,.08,.19)*15}px`,'inside-opacity':ramp(p,.4,.45)*(1-ramp(p,.62,.67)),'inside-visible':p>.4&&p<.67?'visible':'hidden','inside-y':`${(1-ramp(p,.4,.45))*15}px`,'closing-opacity':ramp(p,.9,.95),'closing-visible':p>.9?'visible':'hidden'});
 for(const name of ['left','right']){const optic=calibration[name],el=document.querySelector(`#${name}-optic`);el.setAttribute('cx',cx+(optic.x-calibration.left.x)/calibration.width*baseW*scale);el.setAttribute('cy',cy+(optic.y-calibration.left.y)/calibration.height*baseH*scale);el.setAttribute('rx',optic.rx/calibration.width*baseW*scale);el.setAttribute('ry',optic.ry/calibration.height*baseH*scale)}
 document.querySelector('#chapter').textContent=p<.4?'01 / THE HEADSET':p<.66?'02 / THE VIEW':p<.9?'03 / RETURN':'04 / THE INVITATION';
}
function invalidate(){if(!pending)pending=requestAnimationFrame(update)}
function setStatic(value){staticMode=value||deviceFailed;body.classList.toggle('static-mode',staticMode);motion.setAttribute('aria-pressed',String(staticMode));motion.textContent=staticMode?'Motion off':'Motion on';replay.disabled=staticMode;invalidate()}
function go(progress){if(staticMode)return;const start=scrollY+sequence.getBoundingClientRect().top,span=sequence.offsetHeight-innerHeight;scrollTo({top:start+span*progress,behavior:preference.matches?'instant':'smooth'})}
document.querySelector('#enter').addEventListener('click',()=>go(.51));document.querySelector('#leave').addEventListener('click',()=>go(.96));replay.addEventListener('click',()=>scrollTo({top:0,behavior:'instant'}));motion.addEventListener('click',()=>setStatic(!staticMode));
document.querySelector('.vr-skip').addEventListener('click',event=>{if(!staticMode){event.preventDefault();go(.96)}});
preference.addEventListener('change',e=>setStatic(e.matches));addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',invalidate);addEventListener('pageshow',invalidate);document.fonts.ready.then(invalidate);
function failDevice(){deviceFailed=true;body.classList.add('device-unavailable');const message=document.querySelector('#media-message');message.hidden=false;message.textContent='Headset image unavailable. The interior view and invitation remain below.';motion.disabled=true;setStatic(true)}
function failRoom(){room.hidden=true;const message=document.querySelector('#media-message');message.hidden=false;message.textContent='Interior image unavailable. You can still explore the event invitation.'}
device.addEventListener('load',invalidate);device.addEventListener('error',failDevice);room.addEventListener('error',failRoom);
motion.hidden=false;replay.hidden=false;setStatic(staticMode);if(device.complete&&!device.naturalWidth)failDevice();if(room.complete&&!room.naturalWidth)failRoom();invalidate();
