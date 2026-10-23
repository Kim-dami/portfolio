const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const header = document.querySelector('.case-header');
const cue = document.querySelector('.scroll-cue');
const sections = [...document.querySelectorAll('[data-reveal]')];

// Each complete design section rises once. Large sections trigger at their top.
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), {rootMargin:'0px 0px -6% 0px',threshold:0});
  sections.forEach(section => {
    if (section.getBoundingClientRect().top >= innerHeight * .9) section.classList.add('will-reveal');
    observer.observe(section);
  });
}
let scheduled=false;
function updateFixedUI(){
  scheduled=false;
  header.classList.toggle('is-scrolled',scrollY > 20);
  const atEnd=scrollY+innerHeight>=document.documentElement.scrollHeight-80;
  cue.classList.toggle('is-at-end',atEnd);
  cue.tabIndex=atEnd?-1:0;
}
function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(updateFixedUI);}}
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);updateFixedUI();
cue.addEventListener('click',()=>{
  const target=sections.find(section=>section.getBoundingClientRect().top>header.offsetHeight+32)||document.querySelector('.case-next');
  // Use layout offsets so a pending reveal transform does not shift the target.
  let top=0,node=target;
  if(!target)return;
  while(node){top+=node.offsetTop;node=node.offsetParent;}
  scrollTo({top:top-header.offsetHeight-24,behavior:reducedMotion?'instant':'smooth'});
});

// Keep the full section together when zooming, including its original image seams.
const dialog=document.querySelector('.artboard-dialog');
let opener;
document.querySelectorAll('.expand-artboard').forEach(button=>button.addEventListener('click',()=>{
  opener=button;
  const clone=button.closest('.case-section').querySelector('.case-panel').cloneNode(true);
  clone.querySelectorAll('img').forEach(image=>image.loading='eager');
  dialog.querySelector('.zoom-content').replaceChildren(clone);
  dialog.showModal();fitArtboards(dialog);dialog.scrollTop=0;dialog.scrollLeft=0;
  document.body.classList.add('zoom-open');
}));
dialog.querySelector('.zoom-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{
  document.body.classList.remove('zoom-open');
  dialog.querySelector('.zoom-content').replaceChildren();
  opener?.focus({preventScroll:true});
});

// Scale native Figma artboards within the established case-study content width.
function fitArtboards(root=document){
 root.querySelectorAll('.live-figma-panel').forEach(panel=>{
  const artboard=panel.querySelector('.live-figma');
  if(artboard){artboard.style.height=artboard.dataset.designHeight+"px";artboard.style.transform=`scale(${panel.clientWidth/1400})`;}
 });
}
fitArtboards();
const artboardResize=new ResizeObserver(()=>fitArtboards());
document.querySelectorAll('.live-figma-panel').forEach(panel=>artboardResize.observe(panel));
