import { LANG_EVENT } from '../config.js';
import { translate } from '../i18n/translate.js';
export function initArtVideo() {
  const video=document.querySelector('[data-art-video]');
  const button=document.querySelector('[data-art-toggle]');
  if(!video||!button)return;
  const label=button.querySelector('[data-art-button]');
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused=motion.matches,visible=false;
  video.muted=true;
  if(userPaused){video.autoplay=false;video.pause();}
  function update(){const key=video.paused?'art.play':'art.pause';label.dataset.i18n=key;label.textContent=translate(document.documentElement.lang,key);button.dataset.i18nAttr='aria-label:'+key;button.setAttribute('aria-label',label.textContent);}
  function sync(){if(visible&&!userPaused&&!document.hidden)video.play().catch(update);else video.pause();}
  button.addEventListener('click',()=>{userPaused=!video.paused;sync();});
  video.addEventListener('play',update);video.addEventListener('pause',update);
  document.addEventListener(LANG_EVENT,update);document.addEventListener('visibilitychange',sync);
  motion.addEventListener('change',()=>{userPaused=motion.matches;sync();update();});
  if('IntersectionObserver' in window)new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.15}).observe(video);
  else {visible=true;sync();}
  update();
}
