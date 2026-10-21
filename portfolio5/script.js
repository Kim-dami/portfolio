let portfolioScroller;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Read the original project pages in a native, keyboard-accessible modal.
(()=>{
 const dialog=document.querySelector('.portfolio-dialog');if(!dialog)return;
 const title=dialog.querySelector('h2'),body=dialog.querySelector('.portfolio-dialog-body'),pages=dialog.querySelector('.portfolio-pages'),status=dialog.querySelector('.portfolio-status');
 let opener,request=0;
 const projectData=JSON.parse(document.getElementById('portfolio-project-data').textContent);
 function openProject(button){
  opener=button;const current=++request;
  title.textContent=button.closest('article').querySelector('.eyebrow').textContent.replace(/^0\d \/ /,'');
  pages.replaceChildren();status.hidden=false;status.textContent='포트폴리오를 불러오는 중입니다.';
  portfolioScroller?.stop();document.documentElement.classList.add('portfolio-open');dialog.showModal();body.scrollTop=0;
  try{
   if(current!==request||!dialog.open)return;
   const project=projectData[button.dataset.projectDetail];title.textContent=project.title;
   for(const [i,page] of project.images.entries()){
    const image=document.createElement('img');image.src=page.src;image.alt=page.alt;image.width=page.width;image.height=page.height;image.loading=i===0?'eager':'lazy';image.decoding='async';pages.append(image);
   }
   status.hidden=true;body.scrollTop=0;
  }catch(error){status.textContent='포트폴리오를 불러오지 못했습니다. 닫은 뒤 다시 열어주세요.';}
 }
 document.querySelectorAll('[data-project-detail]').forEach(button=>button.addEventListener('click',()=>openProject(button)));
 dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{request++;document.documentElement.classList.remove('portfolio-open');portfolioScroller?.start();opener?.focus({preventScroll:true});});
})();

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
 const lenis = new Lenis({lerp:.09,smoothWheel:true,anchors:{offset:-60}});portfolioScroller=lenis;
 function frame(time){lenis.raf(time);requestAnimationFrame(frame);}requestAnimationFrame(frame);
}
// The chapter and title tracks use the reference's measured progress windows.
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
  pending=false;const h=innerHeight,w=innerWidth,p=clamp(-chapter.getBoundingClientRect().top/(chapter.offsetHeight-h));
  english.forEach((el,i)=>{const d=i*.06;set(el,clamp(p<.33?(p-d)/.20:1-(p-.45-d)/.15));});
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
  title.style.transform=`translateY(${(1-ease)*h*.2}px) scale(${1+(1-ease)*2.5})`;
  const next=progress<.45?-1:Math.min(cards.length-1,Math.floor(Math.max(0,progress-.65)/.85));
  if(next!==active){active=next;cards.forEach((c,i)=>{c.classList.toggle('is-active',i===active);c.classList.toggle('is-past',i<active);c.inert=i!==active;c.setAttribute('aria-hidden',i===active?'false':'true');});dots.forEach((d,i)=>d.setAttribute('aria-current',i===active?'true':'false'));}
 }
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(render);}};
 dots.forEach((d,i)=>d.addEventListener('click',()=>{const top=window.scrollY+section.getBoundingClientRect().top+innerHeight*(.72+i*.85);if(portfolioScroller)portfolioScroller.scrollTo(top,{duration:.8});else window.scrollTo({top,behavior:'smooth'});}));
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);mq.addEventListener('change',schedule);render();
})();

