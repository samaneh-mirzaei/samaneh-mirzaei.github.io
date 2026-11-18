/** Measure the fixed header, including translated and wrapped mobile content. */
export function initNavigation() {
  const header=document.querySelector('.site-header');
  const toggle=document.getElementById('menu-toggle');
  const links=document.getElementById('main-links');
  if(!header||!toggle||!links)return;
  const measure=()=>document.documentElement.style.setProperty('--header-height',header.getBoundingClientRect().height+'px');
  const setOpen=open=>{header.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',String(open));measure();};
  toggle.addEventListener('click',()=>setOpen(toggle.getAttribute('aria-expanded')!=='true'));
  links.addEventListener('click',event=>{if(event.target.closest('a'))setOpen(false)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&toggle.getAttribute('aria-expanded')==='true'){setOpen(false);toggle.focus();}});
  document.addEventListener('click',event=>{if(!header.contains(event.target))setOpen(false)});
  const wide=matchMedia('(min-width: 1001px)');
  wide.addEventListener('change',()=>setOpen(false));
  if('ResizeObserver' in window)new ResizeObserver(measure).observe(header);
  measure();
  // Initial fragment navigation happens before modules finish rendering.
  if(location.hash)requestAnimationFrame(()=>{
    const target=document.getElementById(decodeURIComponent(location.hash.slice(1)));
    target?.scrollIntoView({behavior:'instant',block:'start'});
  });
}
