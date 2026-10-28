/* Apply saved colors before first paint; no network or account storage. */
(function(){
 'use strict';
 const key='inq-appearance-v1';
 const presets={sage:{name:'세이지',color:'#f3f6f2'},cream:{name:'크림',color:'#faf5e9'},sky:{name:'하늘',color:'#eef5fb'},rose:{name:'로즈',color:'#fbf0f2'},lavender:{name:'라벤더',color:'#f3f0fa'},paper:{name:'화이트',color:'#ffffff'},night:{name:'다크',color:'#151d24'}};
 const rgb=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
 const hex=a=>'#'+a.map(v=>Math.round(v).toString(16).padStart(2,'0')).join('');
 const mix=(a,b,t)=>hex(rgb(a).map((v,i)=>v*(1-t)+rgb(b)[i]*t));
 const luminance=h=>rgb(h).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4;}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
 const contrast=(a,b)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
 const validHex=s=>typeof s==='string'&&/^#[\da-f]{6}$/i.test(s);
 const media=matchMedia('(prefers-color-scheme: dark)');
 let pref={choice:'system',custom:'#f3f6f2'};
 try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&(saved.choice==='system'||saved.choice==='custom'||presets[saved.choice]))pref={choice:saved.choice,custom:validHex(saved.custom)?saved.custom:'#f3f6f2'};}catch(e){}
 function apply(){
  const bg=pref.choice==='system'?(media.matches?presets.night.color:presets.sage.color):pref.choice==='custom'?pref.custom:presets[pref.choice].color;
  const fg=contrast(bg,'#111111')>=4.5?'#111111':contrast(bg,'#000000')>=4.5?'#000000':'#ffffff';const dark=fg==='#ffffff';
  const surface=mix(bg,dark?'#000000':'#ffffff',dark?.38:.84),surface2=mix(bg,dark?'#000000':'#ffffff',dark?.18:.42);
  const readable=(candidate)=>[bg,surface,surface2].every(c=>contrast(candidate,c)>=4.5)?candidate:fg;
  const ink=readable(dark?'#9bd7df':'#235462'),muted=readable(dark?'#bdc9cd':'#58686c');
  const vars={bg,surface,surface2,fg,muted,ink,accent:readable(dark?'#f6bd83':'#8a4b19'),line:mix(surface,fg,.20),'on-ink':contrast(ink,'#ffffff')>=4.5?'#ffffff':'#111111','on-phase':'#ffffff',p1:'#ad4535',p2:'#896016',p3:'#317447',p4:'#246f7a',p5:'#365fa0',p6:'#70519c',p7:'#9a406b'};
  const root=document.documentElement;root.dataset.theme=dark?'dark':'light';root.dataset.appearance=pref.choice;root.style.colorScheme=dark?'dark':'light';for(const[k,v]of Object.entries(vars))root.style.setProperty('--'+k,v);
  document.dispatchEvent(new CustomEvent('appearancechange',{detail:{...pref,bg,dark}}));return {bg,dark,vars};
 }
 function set(choice,custom=pref.custom){if(!(choice==='system'||choice==='custom'||presets[choice])||!validHex(custom))return false;pref={choice,custom:custom.toLowerCase()};apply();try{localStorage.setItem(key,JSON.stringify(pref));return true;}catch(e){return false;}}
 window.appAppearance={presets,get:()=>({...pref}),set,apply,contrast};
 media.addEventListener('change',()=>{if(pref.choice==='system')apply();});
 apply();
})();
