import { LANG_EVENT } from '../config.js';
import { ORDERED_PROJECTS as PROJECTS } from '../data/projectCategories.js';
import { translate } from '../i18n/translate.js';

/** Manual carousel: arrows, choices, hover, keyboard, wheel and touch. No autoplay. */
export function initSpotlight() {
  const root=document.querySelector('[data-spotlight]');
  if(!root)return;
  const slides=[...root.querySelectorAll('[data-slide]')];
  const choices=[...root.querySelectorAll('[data-choose]')];
  const stage=root.querySelector('.spotlight-stage');
  const status=root.querySelector('[data-spotlight-status]');
  let active=Number(root.dataset.active)||0;
  let wheelTotal=0;
  let lastWheel=0;
  let lastChange=-Infinity;
  let touchStart=null;
  let suppressClickUntil=0;

  function select(index,announce=true) {
    const next=(index+slides.length)%slides.length;
    if(next===active)return;
    active=next;
    root.dataset.active=String(active);
    slides.forEach((slide,i)=>{slide.hidden=i!==active;});
    choices.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===active)));
    if(announce)status.textContent=translate(document.documentElement.lang,PROJECTS[active].key+'.title');
  }
  function numbers() {
    const formatter=new Intl.NumberFormat(document.documentElement.lang==='fa'?'fa-IR':'en-US',{minimumIntegerDigits:2});
    choices.forEach((button,i)=>button.textContent=formatter.format(i+1));
  }
  root.querySelectorAll('[data-step]').forEach(button=>{
    button.addEventListener('click',()=>select(active+Number(button.dataset.step)));
  });
  choices.forEach((button,index)=>{
    button.addEventListener('click',()=>select(index));
    button.addEventListener('pointerenter',event=>{
      if(event.pointerType==='mouse')select(index,false);
    });
  });
  root.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    event.preventDefault();
    const rtl=document.documentElement.dir==='rtl';
    if(event.key==='Home')select(0);
    else if(event.key==='End')select(slides.length-1);
    else select(active+(event.key==='ArrowRight'?1:-1)*(rtl?-1:1));
    if(event.target.matches('[data-choose]'))choices[active].focus();
  });
  // A wheel gesture changes one project. Leave vertical page scrolling available
  // at either end, and never intercept browser zoom gestures.
  stage.addEventListener('wheel',event=>{
    if(event.ctrlKey||event.metaKey)return;
    const horizontal=Math.abs(event.deltaX)>Math.abs(event.deltaY);
    const delta=(horizontal?event.deltaX:event.deltaY)*(event.deltaMode===1?16:event.deltaMode===2?stage.clientHeight:1)*(horizontal&&document.documentElement.dir==='rtl'?-1:1);
    const direction=Math.sign(delta);
    if(!direction)return;
    if(!horizontal&&((active===0&&direction<0)||(active===slides.length-1&&direction>0)))return;
    event.preventDefault();
    if(event.timeStamp-lastWheel>160)wheelTotal=0;
    lastWheel=event.timeStamp;
    if(event.timeStamp-lastChange<400)return;
    wheelTotal+=delta;
    if(Math.abs(wheelTotal)>=48){select(active+Math.sign(wheelTotal));wheelTotal=0;lastChange=event.timeStamp;}
  },{passive:false});
  stage.addEventListener('touchstart',event=>{
    const touch=event.touches[0];
    touchStart=touch?{x:touch.clientX,y:touch.clientY}:null;
  },{passive:true});
  stage.addEventListener('touchend',event=>{
    if(!touchStart)return;
    const touch=event.changedTouches[0];
    const start=touchStart;touchStart=null;
    if(!touch)return;
    const dx=touch.clientX-start.x,dy=touch.clientY-start.y;
    if(Math.abs(dx)<48||Math.abs(dx)<Math.abs(dy)*1.3)return;
    suppressClickUntil=performance.now()+500;
    select(active+(dx<0?1:-1)*(document.documentElement.dir==='rtl'?-1:1));
  },{passive:true});
  stage.addEventListener('click',event=>{
    if(performance.now()<suppressClickUntil){event.preventDefault();event.stopPropagation();}
  },true);
  stage.addEventListener('touchcancel',()=>{touchStart=null;},{passive:true});
  document.addEventListener(LANG_EVENT,()=>{numbers();status.textContent='';});
  numbers();
}
