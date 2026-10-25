const room=document.querySelector('#conversation');
const network=room.querySelector('.conversation-copy-network'),panel=room.querySelector('.conversation-copy-panel');
const controls=[...room.querySelectorAll('[data-room-beat]')];
const clamp=v=>Math.max(0,Math.min(1,v)),ramp=(v,a,b)=>clamp((v-a)/(b-a)),smooth=v=>v*v*(3-2*v);
let frame=0,dead=false;
const isStatic=()=>document.body.classList.contains('static-mode');
function update(){
 frame=0;if(dead||document.hidden)return;
 if(isStatic()){network.inert=false;panel.inert=false;network.removeAttribute('aria-hidden');panel.removeAttribute('aria-hidden');return}
 const r=room.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight+100)return;
 const p=clamp(-r.top/Math.max(1,room.offsetHeight-innerHeight));
 const wipe=smooth(ramp(p,.20,.52)),first=1-smooth(ramp(p,.16,.34)),second=smooth(ramp(p,.42,.58));
 const active=p>=.36;
 const vars={'--panel-edge':`${(1-wipe)*100}%`,'--room-drift':`${-p*18}px`,'--panel-drift':`${(1-p)*18}px`,'--network-copy':first,'--network-visible':first>.01?'visible':'hidden','--network-y':`${(1-first)*-18}px`,'--panel-copy':second,'--panel-visible':second>.01?'visible':'hidden','--panel-y':`${(1-second)*18}px`,'--room-progress':p,'--room-title-y':`${(1-clamp((innerHeight-r.top)/innerHeight))*22}px`};
 for(const [key,value]of Object.entries(vars))room.style.setProperty(key,value);
 network.inert=first<.01;panel.inert=second<.01;
 network.setAttribute('aria-hidden',String(first<.01));panel.setAttribute('aria-hidden',String(second<.01));
 controls[0].setAttribute('aria-pressed',String(!active));controls[1].setAttribute('aria-pressed',String(active));
}
function invalidate(){if(!frame&&!dead&&!document.hidden)frame=requestAnimationFrame(update)}
for(const button of controls)button.addEventListener('click',()=>{
 if(isStatic())return;
 const p=button.dataset.roomBeat==='panel'?.70:.10;
 scrollTo({top:scrollY+room.getBoundingClientRect().top+(room.offsetHeight-innerHeight)*p,behavior:'smooth'});
});
addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',invalidate);addEventListener('pageshow',invalidate);
document.fonts.ready.then(invalidate);
const mode=new MutationObserver(invalidate);mode.observe(document.body,{attributes:true,attributeFilter:['class']});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0}else invalidate()});
addEventListener('pagehide',event=>{if(!event.persisted){dead=true;cancelAnimationFrame(frame);mode.disconnect()}});
for(const image of room.querySelectorAll('img'))image.addEventListener('error',()=>{image.hidden=true});
invalidate();
