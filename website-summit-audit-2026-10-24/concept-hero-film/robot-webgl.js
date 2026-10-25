// Original, locally authored geometry and renderer. No external runtime/model.
const TAU=Math.PI*2;
const identity=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
function multiply(a,b){const out=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)out[c*4+r]+=a[k*4+r]*b[c*4+k];return out}
function translation(x=0,y=0,z=0){const m=identity();m[12]=x;m[13]=y;m[14]=z;return m}
function scale(x=1,y=x,z=x){const m=identity();m[0]=x;m[5]=y;m[10]=z;return m}
function rotation(axis,a){const m=identity(),c=Math.cos(a),s=Math.sin(a);if(axis==='x'){m[5]=c;m[6]=s;m[9]=-s;m[10]=c}else if(axis==='y'){m[0]=c;m[2]=-s;m[8]=s;m[10]=c}else{m[0]=c;m[1]=s;m[4]=-s;m[5]=c}return m}
const unit=v=>{const n=Math.hypot(...v)||1;return v.map(x=>x/n)};
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const dot=(a,b)=>a.reduce((s,x,i)=>s+x*b[i],0);
function lookAt(eye,target){const z=unit(eye.map((x,i)=>x-target[i])),x=unit(cross([0,1,0],z)),y=cross(z,x);return new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,eye),-dot(y,eye),-dot(z,eye),1])}
function perspective(aspect,fov){const f=1/Math.tan(fov/2),n=.1,far=60;return new Float32Array([f/aspect,0,0,0,0,f,0,0,0,0,(far+n)/(n-far),-1,0,0,2*far*n/(n-far),0])}
function normalMatrix(m){
  const a=m[0],b=m[4],c=m[8],d=m[1],e=m[5],f=m[9],g=m[2],h=m[6],i=m[10],det=a*(e*i-f*h)-b*(d*i-f*g)+c*(d*h-e*g);
  return new Float32Array([(e*i-f*h)/det,(c*h-b*i)/det,(b*f-c*e)/det,(f*g-d*i)/det,(a*i-c*g)/det,(c*d-a*f)/det,(d*h-e*g)/det,(b*g-a*h)/det,(a*e-b*d)/det]);
}
function surface(fn,rows,columns,normalFn){
  const positions=[],normals=[],indices=[];
  for(let y=0;y<=rows;y++)for(let x=0;x<=columns;x++){
    const u=x/columns,v=y/rows,p=fn(u,v),a=fn(u+.0001,v),b=fn(u,v+.0001);
    const n=normalFn?normalFn(u,v,p):unit(cross(a.map((q,i)=>q-p[i]),b.map((q,i)=>q-p[i])));
    positions.push(...p);normals.push(...n);
  }
  for(let y=0;y<rows;y++)for(let x=0;x<columns;x++){const a=y*(columns+1)+x,b=a+columns+1;indices.push(a,b,a+1,b,b+1,a+1)}
  return {positions,normals,indices};
}
function sphere(){return surface((u,v)=>{const a=u*TAU,b=v*Math.PI;return [Math.cos(a)*Math.sin(b),Math.cos(b),Math.sin(a)*Math.sin(b)]},24,36,(u,v,p)=>p)}
function cylinder(){return surface((u,v)=>[Math.cos(u*TAU),v*2-1,Math.sin(u*TAU)],1,32,u=>[Math.cos(u*TAU),0,Math.sin(u*TAU)])}
function torus(){return surface((u,v)=>{const a=u*TAU,b=v*TAU,r=1+.15*Math.cos(b);return [r*Math.cos(a),.15*Math.sin(b),r*Math.sin(a)]},10,36,(u,v)=>[Math.cos(v*TAU)*Math.cos(u*TAU),Math.sin(v*TAU),Math.cos(v*TAU)*Math.sin(u*TAU)])}
function roundedBox(){
  const positions=[],normals=[],indices=[],steps=6,r=.18;
  for(const [axis,sign]of [[0,1],[0,-1],[1,1],[1,-1],[2,1],[2,-1]]){
    const start=positions.length/3,other=[0,1,2].filter(i=>i!==axis);
    for(let y=0;y<=steps;y++)for(let x=0;x<=steps;x++){
      const p=[0,0,0];p[axis]=sign;p[other[0]]=x/steps*2-1;p[other[1]]=y/steps*2-1;
      const nearest=p.map(v=>Math.max(-1+r,Math.min(1-r,v))),n=unit(p.map((v,i)=>v-nearest[i]));positions.push(...nearest.map((v,i)=>v+n[i]*r));normals.push(...n);
    }
    for(let y=0;y<steps;y++)for(let x=0;x<steps;x++){const a=start+y*(steps+1)+x,b=a+steps+1;indices.push(a,b,a+1,b,b+1,a+1)}
  }
  return {positions,normals,indices};
}
const vertex=`attribute vec3 aPosition;attribute vec3 aNormal;uniform mat4 uModel,uViewProjection;uniform mat3 uNormal;varying vec3 vPosition,vNormal;void main(){vec4 p=uModel*vec4(aPosition,1.);vPosition=p.xyz;vNormal=normalize(uNormal*aNormal);gl_Position=uViewProjection*p;}`;
const fragment=`precision highp float;varying vec3 vPosition,vNormal;uniform vec3 uColor,uEye;uniform float uMetal,uRough,uGlow;
vec3 environment(vec3 r){
  vec3 ink=vec3(.024,.042,.065),sky=vec3(.20,.28,.34);
  vec3 e=mix(ink,sky,smoothstep(-.7,.9,r.y));
  float key=pow(max(0.,dot(r,normalize(vec3(-.65,.65,1.)))),28.);
  float strip=pow(max(0.,dot(r,normalize(vec3(.8,.25,.4)))),70.);
  float overhead=pow(max(0.,dot(r,normalize(vec3(.1,1.,.1)))),14.);
  return e+vec3(.92,.97,1.)*key*2.5+vec3(.32,.83,.90)*strip*1.5+vec3(.8,.86,.91)*overhead*.75;
}
void main(){
  vec3 n=normalize(vNormal);vec3 v=normalize(uEye-vPosition),l=normalize(vec3(-3.,5.,6.));
  float ndv=max(.0,dot(n,v)),ndl=max(.0,dot(n,l));vec3 h=normalize(v+l);
  vec3 f0=mix(vec3(.04),uColor,uMetal);vec3 fresnel=f0+(1.-f0)*pow(1.-ndv,5.);
  vec3 reflected=environment(reflect(-v,n));
  vec3 diffuse=uColor*(.16+ndl*.70+max(0.,dot(n,normalize(vec3(4.,2.,-3.))))*.17)*(1.-uMetal*.55);
  float spec=pow(max(0.,dot(n,h)),mix(180.,22.,uRough))*(1.-uRough*.45);
  vec3 color=diffuse+reflected*fresnel*mix(.9,.38,uRough)+spec*vec3(1.,.97,.91)*.85;
  color+=uColor*uGlow;
  color=color/(color+vec3(.7));color=pow(color,vec3(1./2.2));gl_FragColor=vec4(color,1.);
}`;
const materials={
  silver:{color:[.59,.67,.74],metal:.96,rough:.16},
  edge:{color:[.30,.37,.42],metal:.9,rough:.19},
  dark:{color:[.018,.030,.041],metal:.65,rough:.4},
  visor:{color:[.012,.025,.035],metal:.95,rough:.045},
  light:{color:[.22,.83,.88],metal:.4,rough:.18,glow:2.4},
  white:{color:[.86,.89,.90],metal:.65,rough:.3}
};
function node(position=[0,0,0],rotation=[0,0,0]){return {position,rotation,scale:[1,1,1],children:[]}}
function matrix(n){let m=translation(...n.position);for(const [i,axis]of ['x','y','z'].entries())m=multiply(m,rotation(axis,n.rotation[i]));return multiply(m,scale(...n.scale))}
function shape(parent,geometry,material,position,size,angles=[0,0,0]){const child=node(position,angles);child.geometry=geometry;child.material=material;child.scale=size;parent.children.push(child);return child}
function joint(parent,position,angles=[0,0,0]){const child=node(position,angles);parent.children.push(child);return child}
function buildRobot(){
  const root=node(),torso=joint(root,[0,-.45,0]);
  // Tapered torso, inset sternum, separate armour and exposed collar mechanism.
  shape(torso,'sphere','dark',[0,.07,0],[.67,.90,.36]);
  shape(torso,'box','silver',[0,.27,.14],[.58,.55,.32]);
  shape(torso,'box','edge',[0,-.30,.09],[.49,.17,.24]);
  shape(torso,'box','dark',[0,.33,.475],[.40,.24,.025]);
  shape(torso,'box','visor',[0,.34,.505],[.36,.195,.016]);
  shape(torso,'box','light',[0,.35,.527],[.12,.008,.007]);
  for(const x of [-.27,.27])shape(torso,'box','edge',[x,-.40,.15],[.16,.16,.16],[0,0,x<0?-.18:.18]);
  for(const x of [-.43,.43])for(const y of [.63,.01])shape(torso,'cylinder','dark',[x,y,.47],[.024,.012,.024],[Math.PI/2,0,0]);
  for(let i=0;i<5;i++)shape(torso,'box','dark',[.30,.07+i*.052,.47],[.13,.009,.008],[0,0,-.18]);
  shape(torso,'cylinder','dark',[0,1.01,0],[.18,.24,.18]);
  for(const y of [.85,.99,1.13])shape(torso,'torus','edge',[0,y,0],[.21,.21,.21]);
  const head=joint(root,[0,1.10,0]);
  shape(head,'sphere','silver',[0,.22,0],[.49,.60,.43]);
  shape(head,'box','dark',[0,.25,.273],[.43,.275,.17]);
  shape(head,'box','visor',[0,.26,.35],[.405,.245,.145]);
  shape(head,'box','edge',[0,-.06,.29],[.30,.075,.13],[.15,0,0]);
  for(const x of [-.20,.20]){
    shape(head,'box','light',[x,.30,.495],[.078,.015,.009],[0,0,x<0?-.04:.04]);
    shape(head,'sphere','edge',[x*2.38,.25,-.015],[.075,.23,.23]);
    shape(head,'cylinder','dark',[x*2.48,.25,-.015],[.105,.021,.105],[0,0,Math.PI/2]);
    shape(head,'cylinder','silver',[x*2.60,.25,-.015],[.073,.018,.073],[0,0,Math.PI/2]);
  }
  shape(head,'box','edge',[0,.75,-.09],[.018,.05,.28],[.2,0,0]);
  shape(head,'box','light',[0,.736,.201],[.016,.02,.015]);
  const arms=[];
  for(const side of [-1,1]){
    const shoulder=joint(root,[side*.77,.21,0],[0,0,side*.10]);
    shape(shoulder,'sphere','silver',[0,0,0],[.255,.26,.27]);
    shape(shoulder,'cylinder','dark',[side*.18,0,0],[.175,.04,.175],[0,0,Math.PI/2]);
    shape(shoulder,'cylinder','edge',[side*.225,0,0],[.13,.026,.13],[0,0,Math.PI/2]);
    shape(shoulder,'box','silver',[0,-.43,0],[.155,.32,.17],[0,0,side*.03]);
    for(const x of [-.10,.10])shape(shoulder,'cylinder','edge',[x,-.43,0],[.028,.37,.028]);
    const elbow=joint(shoulder,[0,-.87,0]);
    shape(elbow,'sphere','dark',[0,0,0],[.18,.18,.18]);
    shape(elbow,'cylinder','silver',[0,0,.13],[.10,.045,.10],[Math.PI/2,0,0]);
    const forearm=joint(elbow,[0,-.025,0]);
    shape(forearm,'box','silver',[0,-.32,.01],[.14,.27,.15]);
    shape(forearm,'box','dark',[0,-.29,.164],[.081,.18,.009]);
    shape(forearm,'box','light',[0,-.25,.18],[.016,.075,.006]);
    shape(forearm,'cylinder','edge',[0,-.64,0],[.105,.07,.105]);
    const wrist=joint(forearm,[0,-.72,0],[0,0,0]);
    shape(wrist,'sphere','dark',[0,0,0],[.11,.10,.10]);
    // Hands are authored facing outward when the elbow bends up.
    const hand=joint(wrist,[0,-.06,0],[0,0,0]);
    shape(hand,'box','dark',[0,-.16,0],[.155,.175,.068]);
    shape(hand,'box','silver',[0,-.16,-.055],[.14,.16,.024]);
    shape(hand,'box','edge',[0,-.17,.059],[.112,.12,.014]);
    const fingers=[];
    for(let i=0;i<4;i++){
      const length=[.14,.175,.16,.125][i],finger=joint(hand,[(i-1.5)*.081,-.325,0],[0,0,0]);
      const parts=[];let parent=finger;
      for(let k=0;k<3;k++){
        const segment=k===0?length:length*.73;
        shape(parent,'sphere','dark',[0,0,0],[.042,.04,.043]);
        shape(parent,'box','silver',[0,-segment*.5,-.008],[.031,segment*.43,.036]);
        const knuckle=joint(parent,[0,-segment,0]);parts.push(parent);parent=knuckle;
      }
      fingers.push({finger,parts});
    }
    const thumb=joint(hand,[side*.165,-.13,0],[0,0,side*-.65]);
    for(let k=0;k<2;k++){
      shape(thumb,'sphere','dark',[0,-k*.13,0],[.049,.045,.045]);
      shape(thumb,'box','silver',[0,-.07-k*.13,-.005],[.037,.055,.039]);
    }
    arms.push({shoulder,elbow,forearm,wrist,hand,fingers,thumb,side});
  }
  return {root,head,arms};
}

export function createRobotRenderer(canvas){
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false,powerPreference:'low-power'});
  if(!gl)throw new Error('WebGL unavailable');
  const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s};
  const vs=shader(gl.VERTEX_SHADER,vertex),fs=shader(gl.FRAGMENT_SHADER,fragment),program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));gl.useProgram(program);
  const locations={};for(const name of ['uModel','uNormal','uViewProjection','uColor','uEye','uMetal','uRough','uGlow'])locations[name]=gl.getUniformLocation(program,name);
  const position=gl.getAttribLocation(program,'aPosition'),normal=gl.getAttribLocation(program,'aNormal');
  const meshes={};let triangles=0;
  for(const [name,data]of Object.entries({sphere:sphere(),cylinder:cylinder(),torus:torus(),box:roundedBox()})){
    const buffer=(target,values)=>{const b=gl.createBuffer();gl.bindBuffer(target,b);gl.bufferData(target,values,gl.STATIC_DRAW);return b};
    meshes[name]={position:buffer(gl.ARRAY_BUFFER,new Float32Array(data.positions)),normal:buffer(gl.ARRAY_BUFFER,new Float32Array(data.normals)),index:buffer(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(data.indices)),count:data.indices.length};
  }
  const robot=buildRobot();let disposed=false,lastRenderKey='',renderCount=0;
  function drawNode(n,parent){
    const world=multiply(parent,matrix(n));
    if(n.geometry){
      const mesh=meshes[n.geometry],material=materials[n.material];triangles+=mesh.count/3;
      gl.bindBuffer(gl.ARRAY_BUFFER,mesh.position);gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,3,gl.FLOAT,false,0,0);
      gl.bindBuffer(gl.ARRAY_BUFFER,mesh.normal);gl.enableVertexAttribArray(normal);gl.vertexAttribPointer(normal,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,mesh.index);
      gl.uniformMatrix4fv(locations.uModel,false,world);gl.uniformMatrix3fv(locations.uNormal,false,normalMatrix(world));
      gl.uniform3fv(locations.uColor,material.color);gl.uniform1f(locations.uMetal,material.metal);gl.uniform1f(locations.uRough,material.rough);gl.uniform1f(locations.uGlow,material.glow||0);gl.drawElements(gl.TRIANGLES,mesh.count,gl.UNSIGNED_SHORT,0);
    }
    for(const child of n.children)drawNode(child,world);
  }
  const clamp=v=>Math.max(0,Math.min(1,v)),ramp=(p,a,b)=>clamp((p-a)/(b-a)),ease=v=>v*v*(3-2*v);
  function render(progress,staticMode=false){
    if(disposed||gl.isContextLost())return;
    const w=canvas.clientWidth,h=canvas.clientHeight;if(!w||!h)return;
    const phone=innerWidth<=760,dpr=Math.min(devicePixelRatio,phone?1.35:1.5);
    const renderKey=`${w}:${h}:${dpr}:${staticMode?'.26':progress.toFixed(5)}`;
    if(renderKey===lastRenderKey)return;
    if(canvas.width!==Math.round(w*dpr)||canvas.height!==Math.round(h*dpr)){canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr)}
    gl.viewport(0,0,canvas.width,canvas.height);gl.enable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);
    const p=staticMode?.26:progress,arrive=ease(ramp(p,0,.13)),leave=ease(ramp(p,.37,.49)),gesture=ease(ramp(p,.13,.28));
    robot.root.position=[(1-arrive)*1.3-leave*1.5+(phone?.40:0),-.1-leave*.3,-(1-arrive)*1.4];
    robot.root.rotation=[.015,-.65+arrive*.85-leave*.85,leave*.06];
    robot.root.scale=[1,1,1].map(()=>.9+arrive*.1-leave*.12);
    robot.head.rotation=[-.06*gesture,-.18+gesture*.22,.035*gesture];
    for(const arm of robot.arms){
      const featured=arm.side===-1;
      arm.shoulder.rotation=[featured?-.08*gesture:0,0,arm.side*(.08+(featured?1.45*gesture:0))];
      arm.elbow.rotation=[featured?-.13*gesture:-.13,0,featured?-1.70*gesture:0];
      arm.wrist.rotation=[featured?-.05*gesture:0,featured?.18*gesture:0,featured?Math.sin(ramp(p,.27,.36)*Math.PI*2)*.14:0];
      arm.hand.rotation=[0,featured?-.18*gesture:0,0];
      arm.fingers.forEach(({finger,parts},i)=>{finger.rotation[2]=(i-1.5)*.055*gesture;parts.forEach((part,k)=>part.rotation[0]=(featured?1-gesture:.60)*(.57+k*.15))});
      arm.thumb.rotation[0]=featured?(1-gesture)*.55:.4;
    }
    const eye=phone?[.35,.65,7.9]:[1.0,.65,6.6],target=[0,.30,0];
    gl.uniformMatrix4fv(locations.uViewProjection,false,multiply(perspective(w/h,(phone?36:35)*Math.PI/180),lookAt(eye,target)));gl.uniform3fv(locations.uEye,eye);
    triangles=0;drawNode(robot.root,identity());
    lastRenderKey=renderKey;canvas.dataset.frames=String(++renderCount);
    canvas.dataset.triangles=String(triangles);canvas.dataset.glError=String(gl.getError());canvas.dataset.pose=p.toFixed(4);canvas.dataset.renderer='native-webgl';
  }
  function dispose(){disposed=true;for(const mesh of Object.values(meshes))for(const key of ['position','normal','index'])gl.deleteBuffer(mesh[key]);gl.deleteProgram(program);gl.deleteShader(vs);gl.deleteShader(fs)}
  return {render,dispose};
}
