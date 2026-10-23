let portfolioScroller;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Project covers and detail links navigate to standalone case study pages.
const targets = document.querySelectorAll('.intro, .strengths article, .project-copy, .learning, .steps article, .display, .process-title');
if ('IntersectionObserver' in window && !reduced) {
 const observer = new IntersectionObserver(entries => entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
 targets.forEach(target=>{target.classList.add('reveal');observer.observe(target);});
}
if (!reduced) {
 const title=document.querySelector('h1'),copy=document.querySelector('.hero-copy'),blob=document.querySelector('.blob');
 let ticking=false;
 const update=()=>{const p=Math.min(1,Math.max(0,window.scrollY/innerHeight));title.style.transform=`translateY(${-250*p}px)`;copy.style.transform=`translateY(${-130*p}px)`;blob.style.transform=`translateY(${120*p}px)`;ticking=false;};
 addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});update();
 const cursor=document.querySelector('.custom-cursor');
 if(matchMedia('(hover:hover) and (pointer:fine)').matches){
  addEventListener('pointermove',e=>{cursor.style.opacity='1';cursor.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;cursor.classList.toggle('over-link',!!e.target.closest('a,button'));cursor.classList.toggle('view-project',!!e.target.closest('.split-visual[data-project-detail]'));const x=(e.clientX/innerWidth-.5)*2,y=(e.clientY/innerHeight-.5)*2;document.querySelector('.orbit-one').style.translate=`${x*14}px ${y*14}px`;document.querySelector('.orbit-two').style.translate=`${x*-22}px ${y*20}px`;},{passive:true});
  document.addEventListener('mouseleave',()=>cursor.style.opacity='0');
 }
}

if (!reduced && window.Lenis) {
 document.documentElement.style.scrollBehavior='auto';
 const lenis = new Lenis({lerp:.09,smoothWheel:true,anchors:{offset:-(document.querySelector('body > header')?.offsetHeight || 110)-12}});portfolioScroller=lenis;
 function frame(time){lenis.raf(time);requestAnimationFrame(frame);}requestAnimationFrame(frame);
}
// Reveal the English copy as the chapter enters, before the pinned transition.
(()=>{
 const chapter=document.querySelector('.story-chapter'),section=document.querySelector('.services-work');
 if(!chapter||!section)return;
 const english=[...chapter.querySelectorAll('.story-english span')],korean=[...chapter.querySelectorAll('.story-korean span')];
 const clamp=x=>Math.min(1,Math.max(0,x)),mix=(a,b,t)=>a+(b-a)*t;
 if(!reduced){
 document.documentElement.classList.add('motion-ready');
 const set=(el,v)=>{el.style.opacity=v;el.style.filter=`blur(${16*(1-v)}px)`;};
 let pending=false;
 function render(){
  pending=false;const h=innerHeight,top=chapter.getBoundingClientRect().top;
  const p=clamp(-top/(chapter.offsetHeight-chapter.querySelector('.story-pin').offsetHeight));
  const entrance=clamp((h*.8-top)/(h*.35));
  english.forEach((el,i)=>{const d=i*.06;set(el,clamp((entrance-d)/(1-d))*clamp(1-(p-.32-d)/.15));});
  korean.forEach((el,i)=>set(el,clamp((p-.62-i*.06)/.18)));

 }
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(render);}};
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);document.fonts.ready.then(schedule);render();
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}}),{threshold:.2});section.querySelectorAll('.service-work-card').forEach(c=>io.observe(c));
 }

})();
// Editorial reveal: heading first, uncropped portrait, then the three expertise rows.
(()=>{
 const about=document.querySelector('.about-editorial');if(!about||reduced||!('IntersectionObserver' in window))return;
 about.classList.add('about-motion');
 const nodes=about.querySelectorAll('.about-heading h2,.profile-photo,.profile-content>.profile-name,.profile-content>h3,.profile-content>p,.profile-skills>div');
 about.querySelectorAll('.profile-skills>div').forEach((el,i)=>el.style.setProperty('--delay',`${i*110}ms`));
 const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('arrived');reveal.unobserve(e.target);}}),{threshold:.16});
 nodes.forEach(el=>reveal.observe(el));
})();
// One fixed composition; scroll chooses the project without trapping page scrolling.
(()=>{
 const section=document.querySelector('.project-showcase');if(!section)return;
 const title=section.querySelector('.project-heading'),cards=[...section.querySelectorAll('.split-project')],dots=[...section.querySelectorAll('.project-dots button')];
 const mq=matchMedia('(min-width:801px)');let active=-2,pending=false;
 function render(){
  pending=false;const enabled=mq.matches&&!reduced;section.classList.toggle('projects-enhanced',enabled);
  section.style.setProperty('--project-stage-height',`${(1.65+cards.length*.85)*100}vh`);
  if(!enabled){title.style.transform='';title.style.opacity='';cards.forEach(c=>{c.inert=false;c.removeAttribute('aria-hidden');});active=-2;return;}
  const h=innerHeight,progress=Math.max(0,-section.getBoundingClientRect().top/h),intro=Math.min(1,progress/.65),ease=1-Math.pow(1-intro,3);
  const entranceSize=parseFloat(getComputedStyle(document.querySelector('.story-english')).fontSize);
  const titleSize=parseFloat(getComputedStyle(title).fontSize);
  title.style.transform=`translateY(${(1-ease)*h*.2}px) scale(${1+(1-ease)*(entranceSize/titleSize-1)})`;
  const next=progress<.45?-1:Math.min(cards.length-1,Math.floor(Math.max(0,progress-.65)/.85));
  if(next!==active){active=next;cards.forEach((c,i)=>{c.classList.toggle('is-active',i===active);c.classList.toggle('is-past',i<active);c.inert=i!==active;c.setAttribute('aria-hidden',i===active?'false':'true');});dots.forEach((d,i)=>d.setAttribute('aria-current',i===active?'true':'false'));}
 }
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(render);}};
 dots.forEach((d,i)=>d.addEventListener('click',()=>{const top=window.scrollY+section.getBoundingClientRect().top+innerHeight*(.72+i*.85);if(portfolioScroller)portfolioScroller.scrollTo(top,{duration:.8});else window.scrollTo({top,behavior:'smooth'});}));
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);mq.addEventListener('change',schedule);render();
 const returnId=new URLSearchParams(location.search).get('project');
 const returnIndex=cards.findIndex(card=>card.querySelector('[data-project-detail]')?.dataset.projectDetail===returnId);
 if(returnIndex>=0){
  const restore=()=>{
   render();
   const enhanced=mq.matches&&!reduced;
   const target=enhanced?scrollY+section.getBoundingClientRect().top+innerHeight*(.72+returnIndex*.85):scrollY+cards[returnIndex].getBoundingClientRect().top-(document.querySelector('header')?.offsetHeight||72)-16;
   if(portfolioScroller){portfolioScroller.resize();portfolioScroller.scrollTo(target,{immediate:true,force:true});}
   else window.scrollTo({top:target,behavior:'instant'});
   render();
   cards[returnIndex].querySelector('.project-enlarge')?.focus({preventScroll:true});
  };
  // Wait for page layout and fonts; no #work anchor may override this position.
  const layoutReady=document.readyState==='complete'?Promise.resolve():new Promise(resolve=>addEventListener('load',resolve,{once:true}));
  Promise.all([document.fonts.ready,layoutReady]).then(()=>requestAnimationFrame(()=>requestAnimationFrame(restore)));
  addEventListener('pageshow',event=>{if(event.persisted)requestAnimationFrame(restore);});
 }

})();

