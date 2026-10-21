/* Information comes into focus: diffuse color becomes a softly defined sphere.
   Six WebGradients palettes flow continuously through a seamless 30-second loop. */
(()=>{
 const canvas=document.getElementById('gradient-sphere');if(!canvas)return;
 const gl=canvas.getContext('webgl',{alpha:true,premultipliedAlpha:true,antialias:false,powerPreference:'low-power'});if(!gl)return;
 const vertex='attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}';
 const fragment=`precision highp float;
 uniform vec2 resolution;uniform float colorTime,outlineTime,focus;
 uniform vec3 paletteA,paletteB;
 void main(){
 vec2 px=vec2(gl_FragCoord.x,resolution.y-gl_FragCoord.y),center=resolution*.5;
 float basis=min(min(resolution.x,resolution.y),1296.0),mr=basis*1.6,t=colorTime;
 vec2 points[6];
 points[0]=vec2(sin(t*.41)*.30+cos(t*.27)*.15,cos(t*.38)*.28+sin(t*.19)*.12);
 points[1]=vec2(sin(t*.33+1.2)*.32+cos(t*.61)*.14,cos(t*.29+.5)*.28+sin(t*.44)*.12);
 points[2]=vec2(sin(t*.37+2.5)*.34+cos(t*.53)*.16,cos(t*.43+1.1)*.30+sin(t*.28)*.14);
 points[3]=vec2(sin(t*.29+4.)*.30+cos(t*.61)*.13,cos(t*.35+2.3)*.26+sin(t*.47)*.12);
 points[4]=vec2(sin(t*.51+3.1)*.28+cos(t*.38)*.14,cos(t*.44+1.7)*.24+sin(t*.33)*.12);
 points[5]=vec2(sin(t*.45+5.2)*.26+cos(t*.72)*.12,cos(t*.39+3.8)*.22+sin(t*.56)*.10);
 vec3 colors[6];colors[0]=mix(paletteA,vec3(1.),.12);colors[1]=paletteA;colors[2]=mix(paletteA,paletteB,.28);colors[3]=mix(paletteA,paletteB,.65);colors[4]=paletteB;colors[5]=mix(paletteB,vec3(1.),.06);
 float radii[6];radii[0]=.55+sin(t*.5)*.05;radii[1]=.48+sin(t*.6+1.)*.04;radii[2]=.44+sin(t*.7+2.)*.04;radii[3]=.44+sin(t*.8+3.)*.04;radii[4]=.38+sin(t*.9+4.)*.03;radii[5]=.34+sin(t+5.)*.03;
 float frequencies[6];frequencies[0]=.73;frequencies[1]=.61;frequencies[2]=.89;frequencies[3]=.67;frequencies[4]=.95;frequencies[5]=.79;
 float weight=0.;vec3 sum=vec3(0.);
 for(int i=0;i<6;i++){
 vec2 delta=px-center-points[i]*mr;float angle=atan(delta.y,delta.x),phase=float(i)*1.05,f=frequencies[i];
 float warp=sin(angle*2.+t*f*1.3+phase)*.18+sin(angle*3.-t*f*.9+phase*1.3)*.12+sin(angle*5.+t*f*1.7+phase*.7)*.07+cos(angle*4.-t*f*1.1+phase*1.6)*.09;
 float radius=max(1.,mr*radii[i]*(1.+warp));float opacity=1.-smoothstep(.1,1.,length(delta)/radius);
 weight+=opacity;sum+=mix(vec3(1.),colors[i],pow(opacity,.45))*opacity;
 }
 vec2 dv=px-center;float angle=atan(dv.y,dv.x),p=outlineTime;
 float shape=sin(angle*2.+p)*.18+sin(angle*3.-p*1.13)*.12+sin(angle*5.+p*.87)*.07+cos(angle*4.-p*1.6)*.09;
 float distance=length(dv)/(max(basis*.325,1.)*(1.+shape*2.1*.06));
 float wave=sin(angle*2.+p*.7)*.4+sin(angle*3.-p*.5)*.3+cos(angle*5.+p*.9)*.2;
 float softness=mix(.56,.14,focus);
 float edge=1.-softness*(1.+wave*.30);
 float alpha=clamp(weight,0.,1.)*(1.-smoothstep(edge,1.,distance));vec3 color=weight>.001?sum/weight:vec3(1.);
 // Preserve soft alpha edges while making each palette visibly distinct.
 float luminance=dot(color,vec3(.2126,.7152,.0722));
 color=clamp(mix(vec3(luminance),color,1.35)*.97,0.,1.);
 gl_FragColor=vec4(color*alpha,alpha);
 }`;
 function compile(type,source){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;}
 try{
 const program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))return;
 gl.useProgram(program);const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);const a=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,2,gl.FLOAT,false,0,0);
 const res=gl.getUniformLocation(program,'resolution'),ct=gl.getUniformLocation(program,'colorTime'),ot=gl.getUniformLocation(program,'outlineTime'),fc=gl.getUniformLocation(program,'focus');
 // Selected from webgradients.com: cool clarity, warmth, then a return to lilac.
 const palettes=[
  ['Deep Blue','#e0c3fc','#8ec5fc'],
  ['Winter Neva','#a1c4fd','#c2e9fb'],
  ['Tempting Azure','#84fab0','#8fd3f4'],
  ['Juicy Peach','#ffecd2','#fcb69f'],
  ['Warm Flame','#ff9a9e','#fad0c4'],
  ['Night Fade','#a18cd1','#fbc2eb']
 ].map(([name,...hex])=>({name,colors:hex.map(c=>[1,3,5].map(i=>parseInt(c.slice(i,i+2),16)/255))}));
 const pa=gl.getUniformLocation(program,'paletteA'),pb=gl.getUniformLocation(program,'paletteB');
 const paletteDuration=5;
 const media=matchMedia('(prefers-reduced-motion:reduce)');let active=true,time=0,last=performance.now(),frame;
 function size(){canvas.width=Math.max(1,Math.round(canvas.clientWidth));canvas.height=Math.max(1,Math.round(canvas.clientHeight));gl.viewport(0,0,canvas.width,canvas.height);paint();}
 function paint(){
 const x=Math.max(0,Math.min(1,(time-.25)/3.0));
 const reveal=x*x*x*(x*(x*6-15)+10);
 const focus=media.matches ? .92 : reveal*(.92+.025*Math.sin(time*.32));
 // Smoothstep has zero slope at every stop, including the last-to-first join.
 const phase=(time/paletteDuration)%palettes.length,index=Math.floor(phase),fraction=phase-index;
 const blend=fraction*fraction*(3-2*fraction),from=palettes[index],to=palettes[(index+1)%palettes.length];
 const color=slot=>from.colors[slot].map((v,i)=>v+(to.colors[slot][i]-v)*blend);
 gl.uniform3fv(pa,color(0));gl.uniform3fv(pb,color(1));
 gl.uniform2f(res,canvas.width,canvas.height);gl.uniform1f(ct,time*.72);gl.uniform1f(ot,time*.56);gl.uniform1f(fc,focus);gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
 }
 function tick(now){frame=requestAnimationFrame(tick);const dt=Math.max(0,Math.min((now-last)/1000,.05));last=now;if(!active||document.hidden||media.matches)return;time+=dt;paint();}
 size();canvas.parentElement.classList.add('webgl-ready');new ResizeObserver(size).observe(canvas);new IntersectionObserver(entries=>{active=entries[0].isIntersecting;},{threshold:.01}).observe(canvas);frame=requestAnimationFrame(tick);
 canvas.addEventListener('webglcontextlost',()=>{cancelAnimationFrame(frame);canvas.parentElement.classList.remove('webgl-ready');});
 }catch(error){canvas.parentElement.classList.remove('webgl-ready');}
})();
