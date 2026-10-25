const chapter=document.querySelector('#voices'),frames=[...chapter.querySelectorAll('.speaker-frame')];
const previous=document.querySelector('#speaker-prev'),next=document.querySelector('#speaker-next'),count=document.querySelector('#speaker-position');
let pending=0,current=0,position=0,dead=false,announcedTarget=null;
const clamp=v=>Math.max(0,Math.min(1,v)),ramp=(p,a,b)=>clamp((p-a)/(b-a)),ease=v=>v*v*(3-2*v);
const isStatic=()=>document.body.classList.contains('static-mode');
function readableAll(){for(const frame of frames){frame.inert=false;frame.removeAttribute('aria-hidden')}}
function update(){
  pending=0;if(dead||document.hidden)return;
  if(isStatic()){readableAll();return}
  const r=chapter.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight+150)return;
  const span=Math.max(1,chapter.offsetHeight-innerHeight),p=clamp(-r.top/span),target=ramp(p,.06,.95)*(frames.length-1);
  position+=(target-position)*.2;if(Math.abs(target-position)<.0004)position=target;
  current=Math.round(position);const phone=innerWidth<=760;
  // A name-only entry must never borrow a neighbouring person's face.
  const missingPortrait=frames[current].classList.contains('is-type-only'),neighbourVisibility=missingPortrait?ramp(Math.abs(position-current),.35,.5):1;
  frames.forEach((frame,i)=>{
    const d=i-position,dist=Math.abs(d),opacity=clamp(1-dist*.72)*(i===current?1:neighbourVisibility),caption=1-ramp(dist,.12,.43),visible=opacity>.015;
    const properties={
      '--figure-opacity':opacity,'--figure-visibility':visible?'visible':'hidden',
      '--figure-x':`${d*(phone?68:34)}%`,'--figure-y':`${dist*(d<0?10:18)}%`,
      '--figure-z':`${-dist*430}px`,'--figure-roll':`${Math.max(-1.4,Math.min(1.4,d))*-4}deg`,
      '--figure-order':Math.round(100-dist*30),
      '--caption-opacity':caption,'--caption-visibility':caption>.01?'visible':'hidden','--caption-y':`${(1-caption)*18}px`
    };
    for(const [key,value]of Object.entries(properties))frame.style.setProperty(key,value);
    frame.inert=i!==current;frame.setAttribute('aria-hidden',String(i!==current));
  });
  const entry=ease(clamp((innerHeight-r.top)/(innerHeight*.7)));
  chapter.style.setProperty('--speaker-title-y',`${(1-entry)*110}%`);
  chapter.style.setProperty('--backdrop-x',`${-position*16}px`);
  count.textContent=`${String(current+1).padStart(2,'0')} / ${String(frames.length).padStart(2,'0')}`;
  previous.disabled=current===0;next.disabled=current===frames.length-1;
  if(announcedTarget!==null&&Math.abs(position-announcedTarget)<.01){
    const caption=frames[announcedTarget].querySelector('figcaption');
    document.querySelector('#speaker-announcement').textContent=caption.innerText.replace(/\s+/g,' ').trim();announcedTarget=null;
  }
  if(position!==target)invalidate();
}
function invalidate(){if(!pending&&!dead&&!document.hidden)pending=requestAnimationFrame(update)}
function go(step){
  if(isStatic())return;
  const target=Math.max(0,Math.min(frames.length-1,current+step)),p=.06+target/(frames.length-1)*.89;
  announcedTarget=target;
  scrollTo({top:scrollY+chapter.getBoundingClientRect().top+(chapter.offsetHeight-innerHeight)*p,behavior:'smooth'});
}
previous.addEventListener('click',()=>go(-1));next.addEventListener('click',()=>go(1));
for(const image of chapter.querySelectorAll('.speaker-frame img'))image.addEventListener('error',()=>{image.hidden=true;image.closest('.speaker-frame').classList.add('is-type-only');invalidate()});
addEventListener('scroll',invalidate,{passive:true});addEventListener('resize',invalidate);addEventListener('pageshow',invalidate);document.fonts.ready.then(invalidate);
let previousStatic=isStatic();
const observer=new MutationObserver(()=>{const value=isStatic();if(value!==previousStatic){previousStatic=value;if(value)readableAll();invalidate()}});observer.observe(document.body,{attributes:true,attributeFilter:['class']});
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(pending);pending=0}else invalidate()});
addEventListener('pagehide',event=>{if(!event.persisted){dead=true;cancelAnimationFrame(pending);observer.disconnect()}});
invalidate();
