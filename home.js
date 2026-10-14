'use strict';
const homeExtra={
 contact:['اتصل معنا','پەیوەندی ب مە بکە','پەیوەندیمان پێوە بکە','Contact'],media:['المركز الإعلامي','ناڤەندا ڕاگەهاندنێ','ناوەندی ڕاگەیاندن','Media center'],
 protection:['الدفاع المدني ... حماية الأرواح والممتلكات','بەرگرییا شارستانی ... پاراستنا ژیان و سامانان','بەرگری شارستانی ... پاراستنی ژیان و سامان','Civil defense ... protecting lives and property'],
 priority:['سلامتكم أولويتنا','پاراستنا هەوە پێشەنگیا مەیە','سەلامەتیی ئێوە پێشینەی ئێمەیە','Your safety is our priority'],
 beneficiaries:['مستفيدون من التوعية','سوودمەندێن هشیاریێ','سوودمەندانی هۆشیاری','Awareness beneficiaries'],centerCount:['مراكز الدفاع المدني','ناڤەندێن بەرگرییا شارستانی','ناوەندەکانی بەرگری شارستانی','Civil defense centers'],rescueCount:['عمليات الإنقاذ والإطفاء','کارێن ڕزگارکرن و ئاگرڤەمراندنێ','ئۆپەراسیۆنی ڕزگارکردن و ئاگرکوژاندنەوە','Rescue and firefighting'],volunteers:['المتطوعون','خۆبەخش','خۆبەخشەکان','Volunteers'],staff:['عناصر الدفاع المدني','ئەندامێن بەرگرییا شارستانی','ئەندامانی بەرگری شارستانی','Civil defense personnel'],responseRate:['معدل الاستجابة','ڕێژەیا بەرسڤدانێ','ڕێژەی وەڵامدانەوە','Response rate'],
 response:['الاستجابة للطوارئ','بەرسڤدانا فریاکەفتنێ','وەڵامدانەوەی فریاکەوتن','Emergency response'],responseDesc:['إطفاء الحرائق والإنقاذ','ئاگرڤەمراندن و ڕزگارکرن','ئاگرکوژاندنەوە و ڕزگارکردن','Firefighting and rescue'],facility:['السلامة في المنشآت','پاراستن د دامەزراوان دا','سەلامەتی لە دامەزراوەکان','Facility safety'],facilityDesc:['الكشف ومعايير الوقاية','پشکنین و پێڤەرێن پاراستنێ','پشکنین و پێوەرەکانی پاراستن','Inspection and prevention'],servicesDescShort:['خدمات رقمية للمجتمع','خزمەتێن دیجیتالی بۆ کۆمەڵگەهێ','خزمەتگوزاریی دیجیتاڵ بۆ کۆمەڵگە','Digital community services'],awarenessDescShort:['دليل السلامة للمواطنين','ڕێبەرا پاراستنێ بۆ هاوڵاتیان','ڕێبەری سەلامەتی بۆ هاوڵاتیان','Citizen safety guidance'],
 officialResources:['المصادر والأخبار الرسمية','ژێدەر و نووچەیێن فەرمی','سەرچاوە و هەواڵە فەرمییەکان','Official resources and news'],centersPending:['تُضاف مواقع المراكز بعد اعتماد بيانات المديرية.','جهێن ناڤەندان پشتی پەسەندکرنا زانیاریان دێ هێنە زێدەکرن.','شوێنی ناوەندەکان دوای پەسەندکردنی زانیاری زیاد دەکرێت.','Center locations will be added after directorate approval.'],centerDetails:['بيانات المراكز','زانیاریێن ناڤەندان','زانیاریی ناوەندەکان','Center information'],dataNotice:['الأرقام التشغيلية والأخبار المحلية بانتظار البيانات المعتمدة من المديرية.','ژمارە و نووچەیێن دهۆکێ ل هیڤیا زانیاریێن پەسەندکری نە.','ژمارە و هەواڵەکانی دهۆک چاوەڕوانی زانیاریی پەسەندکراون.','Operational figures and local news await approved directorate data.'],
 pending:['بانتظار الاعتماد','ل هیڤیا پەسەندکرنێ','چاوەڕوانی پەسەندکردن','Awaiting approval'],sourceDate:['مصدر حكومي','ژێدەرێ حکومی','سەرچاوەی حکومی','Government source']
};
const texts={...window.HomeCopy,...homeExtra};
let language='ar';try{const stored=localStorage.getItem('cd-language');if(window.CD_i18n.ids.includes(stored))language=stored;}catch{}
const requested=new URLSearchParams(location.search).get('lang');if(window.CD_i18n.ids.includes(requested))language=requested;
const tr=key=>(texts[key]||[key,key,key,key])[window.CD_i18n.ids.indexOf(language)===-1?0:{ar:0,badini:1,sorani:2,en:3}[language]];
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const localized=values=>values[{ar:0,badini:1,sorani:2,en:3}[language]];
const dialog=document.querySelector('#home-dialog');
function render(){
 document.documentElement.lang=window.CD_i18n.tags[language];document.documentElement.dir=language==='en'?'ltr':'rtl';document.documentElement.dataset.locale=language;document.body.classList.toggle('en',language==='en');
 document.querySelectorAll('[data-text]').forEach(el=>el.textContent=tr(el.dataset.text));
 document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===language)));
 document.querySelector('#language-label').textContent={ar:'AR',badini:'BAD',sorani:'SOR',en:'EN'}[language];
 document.querySelector('#search-open').setAttribute('aria-label',tr('searchLabel'));document.querySelector('#menu-open').setAttribute('aria-label',tr('menu'));document.querySelector('#language-open').setAttribute('aria-label',tr('language'));document.querySelector('#dialog-close').setAttribute('aria-label',tr('close'));
 document.querySelector('.field-photo').setAttribute('aria-label',tr('illustrative'));document.title=tr('brand')+' — '+tr('duhok');
 document.querySelectorAll('a[href^="portal.html"],a[href^="account.html"]').forEach(a=>{const u=new URL(a.href);u.searchParams.set('lang',language);a.href=u.pathname.split('/').pop()+u.search+u.hash;});
 document.querySelector('#news-cards').innerHTML=window.CDVerifiedContent.resources.map((r,i)=>`<a class="news-card" href="${esc(r.source)}" target="_blank" rel="noopener noreferrer"><div class="news-photo photo-${i}" aria-hidden="true"></div><h3>${esc(localized(r.title))}</h3><time>${r.publishedAt||esc(tr('sourceDate'))}</time><span class="card-arrow" aria-hidden="true">→</span></a>`).join('');
 document.querySelector('#notices').innerHTML=window.CDVerifiedContent.resources.map(r=>`<a class="notice" href="${esc(r.source)}" target="_blank" rel="noopener noreferrer"><svg class="icon" aria-hidden="true"><use href="#i-${r.icon}"/></svg><span>${esc(localized(r.title))}<small>${r.publishedAt||esc(tr('sourceDate'))}</small></span></a>`).join('');
}
function show(content){document.querySelector('#dialog-content').innerHTML=content;if(!dialog.open)dialog.showModal();}
function links(){return ['about','services','awareness','centers','portal'].map(key=>({label:tr(key),url:key==='portal'?`account.html?lang=${language}`:`portal.html?lang=${language}#${key}`}));}
function search(q=''){const items=links().filter(item=>item.label.toLocaleLowerCase().includes(q.trim().toLocaleLowerCase()));document.querySelector('#search-results').innerHTML=items.map(item=>`<a href="${item.url}">${esc(item.label)} →</a>`).join('')||`<p>${esc(tr('noResults'))}</p>`;}
document.querySelector('#search-open').addEventListener('click',()=>{show(`<h2>${esc(tr('searchLabel'))}</h2><input id="home-search" type="search" aria-label="${esc(tr('searchLabel'))}" placeholder="${esc(tr('searchLabel'))}"><div class="results" id="search-results"></div>`);search();document.querySelector('#home-search').addEventListener('input',e=>search(e.target.value));document.querySelector('#home-search').focus();});
document.querySelector('#menu-open').addEventListener('click',()=>show(`<h2>${esc(tr('menu'))}</h2><div class="results">${links().map(item=>`<a href="${item.url}">${esc(item.label)}</a>`).join('')}</div>`));
document.querySelector('#language-open').addEventListener('click',()=>{const menu=document.querySelector('#languages');menu.hidden=!menu.hidden;document.querySelector('#language-open').setAttribute('aria-expanded',String(!menu.hidden));});
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>{language=button.dataset.lang;try{localStorage.setItem('cd-language',language);}catch{}render();document.querySelector('#languages').hidden=true;document.querySelector('#language-open').setAttribute('aria-expanded','false');}));
document.querySelector('#dialog-close').addEventListener('click',()=>dialog.close());
document.addEventListener('click',event=>{if(!event.target.closest('#language-open,#languages'))document.querySelector('#languages').hidden=true;});
render();
