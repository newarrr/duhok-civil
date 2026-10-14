(() => {
 'use strict';
 const routeKeys={about:'about',services:'services',awareness:'awareness',centers:'centers',faq:'faqTitle',contact:'contactTitle'};
 function renderRoute(){
  const id=Object.hasOwn(routeKeys,location.hash.slice(1))?location.hash.slice(1):'services';
  document.querySelectorAll('[data-route]').forEach(section=>section.hidden=section.dataset.route!==id);
  const label=tr(routeKeys[id]);
  document.querySelector('#route-title').textContent=label;
  document.querySelector('#route-current').textContent=label;
  document.title=label+' — '+tr('brand')+' — '+tr('duhok');
  document.querySelectorAll('#nav a').forEach(a=>{const active=a.hash==='#'+id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  document.querySelectorAll('a[href^="index.html"],a[href^="account.html"]').forEach(a=>{const u=new URL(a.href);u.searchParams.set('lang',lang);a.href=u.pathname.split('/').pop()+u.search+u.hash;});
  document.querySelectorAll('[data-direct-copy]').forEach(el=>el.textContent=tr(el.dataset.directCopy));
 }
 window.addEventListener('hashchange',()=>{renderRoute();window.scrollTo({top:0,behavior:'instant'});});
 document.addEventListener('click',event=>{if(event.target.closest('[data-lang]'))renderRoute();});
 document.querySelector('#route-services').addEventListener('click',()=>{location.hash='services';});
 renderRoute();
 requestAnimationFrame(()=>window.scrollTo(0,0));
})();
