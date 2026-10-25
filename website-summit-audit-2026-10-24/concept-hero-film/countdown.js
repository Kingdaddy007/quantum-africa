export const EVENT_START=Date.parse('2026-11-28T11:00:00+01:00');
export function remainingTime(now,deadline=EVENT_START){
  const total=Math.max(0,Math.ceil((deadline-now)/1000));
  return {days:Math.floor(total/86400),hours:Math.floor(total%86400/3600),minutes:Math.floor(total%3600/60),seconds:total%60,expired:now>=deadline};
}
function mount(){
  const host=document.querySelector('#event-time'),units=[...host.querySelectorAll('[data-unit]')],timer=host.querySelector('[role="timer"]'),status=host.querySelector('#countdown-status');
  const preference=matchMedia('(prefers-reduced-motion: reduce)');let scheduled=0;
  function paint(){
    clearTimeout(scheduled);if(document.hidden)return;
    const result=remainingTime(Date.now());
    for(const unit of units){
      const value=String(result[unit.dataset.unit]).padStart(2,'0');
      unit.parentElement.setAttribute('role','group');unit.parentElement.setAttribute('aria-label',`${result[unit.dataset.unit]} ${unit.dataset.unit}`);
      for(const child of unit.parentElement.children)child.setAttribute('aria-hidden','true');
      if(unit.children.length!==value.length){unit.replaceChildren(...[...value].map(char=>{const digit=document.createElement('span');digit.textContent=char;return digit}));continue}
      [...value].forEach((char,i)=>{const digit=unit.children[i];if(digit.textContent===char)return;digit.textContent=char;if(!preference.matches&&!document.body.classList.contains('static-mode'))digit.animate([{transform:'translateY(70%)',opacity:0},{transform:'translateY(0)',opacity:1}],{duration:360,easing:'cubic-bezier(.2,.7,.2,1)'})});
    }
    timer.hidden=result.expired;status.hidden=!result.expired;
    if(!result.expired)scheduled=setTimeout(paint,1000-Date.now()%1000+8);
  }
  document.addEventListener('visibilitychange',()=>{clearTimeout(scheduled);if(!document.hidden)paint()});
  addEventListener('pageshow',paint);paint();
}
if(typeof document!=='undefined')mount();
