(() => {
  const root = document.getElementById('forecast-lab');
  if (!root) return;
  const canvas = document.getElementById('forecast-chart');
  const ctx = canvas.getContext('2d');
  const runBtn = document.getElementById('forecast-run');
  const stepBtn = document.getElementById('forecast-step');
  const resetBtn = document.getElementById('forecast-reset');
  const windowSelect = document.getElementById('forecast-window');
  const speedSelect = document.getElementById('forecast-speed');
  const status = document.getElementById('forecast-status');
  const monthEl = document.getElementById('forecast-month');
  const predEl = document.getElementById('forecast-pred');
  const actualEl = document.getElementById('forecast-actual');
  const directionEl = document.getElementById('forecast-direction');
  let all = [], data = [], index = -1, running = false, timer = null;

  function parseCSV(text) {
    const lines = text.trim().split(/\r?\n/); const heads = lines.shift().split(',');
    return lines.map(line => { const vals=line.split(','); const o={}; heads.forEach((h,i)=>o[h]=vals[i]); return {
      date:new Date(o.Date+'T00:00:00'), actual:+o.AAPL, predicted:+o.Predicted, previous:+o.Previous,
      predDirection:o.PredDirection, actualDirection:o.ActualDirection, correct:o.CorrectDirection==='True'
    };});
  }
  function money(v){ return Number.isFinite(v) ? '$'+v.toFixed(2) : '—'; }
  function month(d){ return d.toLocaleDateString('en-US',{month:'short',year:'numeric'}); }
  function css(name){ return getComputedStyle(document.documentElement).getPropertyValue(name).trim(); }
  function sizeCanvas(){ const r=canvas.getBoundingClientRect(), dpr=Math.max(1,Math.min(2,devicePixelRatio||1)); canvas.width=Math.round(r.width*dpr); canvas.height=Math.round(r.height*dpr); ctx.setTransform(dpr,0,0,dpr,0,0); draw(); }
  function resetData(){ const n=+windowSelect.value; data=all.slice(Math.max(0,all.length-n)); index=-1; running=false; clearTimeout(timer); runBtn.textContent='▶ Run forecast'; updateReadout(null); draw(); status.textContent='Ready. Press Run forecast or step through one unseen month at a time.'; }
  function updateReadout(row){ if(!row){monthEl.textContent=predEl.textContent=actualEl.textContent=directionEl.textContent='—'; directionEl.className=''; return;} monthEl.textContent=month(row.date); predEl.textContent=money(row.predicted); actualEl.textContent=money(row.actual); directionEl.textContent=(row.correct?'✓ ':'✕ ')+row.predDirection+' predicted / '+row.actualDirection+' actual'; directionEl.className=row.correct?'metric-good':'metric-bad'; }
  function draw(){ const w=canvas.clientWidth,h=canvas.clientHeight; ctx.clearRect(0,0,w,h); if(!data.length) return; const pad={l:54,r:18,t:24,b:42}; const vals=data.flatMap(d=>[d.actual,d.predicted,d.previous]); let min=Math.min(...vals), max=Math.max(...vals); const extra=(max-min)*.08||1; min-=extra; max+=extra; const x=i=>pad.l+(i/(Math.max(1,data.length-1)))*(w-pad.l-pad.r); const y=v=>pad.t+(max-v)/(max-min)*(h-pad.t-pad.b);
    ctx.strokeStyle='rgba(255,255,255,.08)'; ctx.lineWidth=1; ctx.font='11px system-ui'; ctx.fillStyle='rgba(220,225,235,.62)';
    for(let j=0;j<5;j++){ const yy=pad.t+j*(h-pad.t-pad.b)/4; ctx.beginPath();ctx.moveTo(pad.l,yy);ctx.lineTo(w-pad.r,yy);ctx.stroke(); const val=max-j*(max-min)/4;ctx.fillText('$'+val.toFixed(0),5,yy+4); }
    const upto=Math.max(index,0);
    const line=(key,color,width=2)=>{ ctx.beginPath(); for(let i=0;i<=upto&&i<data.length;i++){ const xx=x(i),yy=y(data[i][key]); i?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);} ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke(); };
    if(index>=0){ line('previous','rgba(200,205,215,.35)',1.2); line('predicted',css('--accent-2')||'#9ecbff',2.6); line('actual','#f5f7fb',2.1); const r=data[index], xx=x(index); ctx.strokeStyle='rgba(255,255,255,.22)';ctx.beginPath();ctx.moveTo(xx,pad.t);ctx.lineTo(xx,h-pad.b);ctx.stroke(); [[r.predicted,css('--accent-2')||'#9ecbff'],[r.actual,'#f5f7fb']].forEach(([v,c])=>{ctx.beginPath();ctx.arc(xx,y(v),4.5,0,Math.PI*2);ctx.fillStyle=c;ctx.fill();}); }
    const tickCount=Math.min(5,data.length); for(let j=0;j<tickCount;j++){const i=Math.round(j*(data.length-1)/(tickCount-1||1));ctx.fillStyle='rgba(220,225,235,.55)';ctx.fillText(String(data[i].date.getFullYear()),x(i)-12,h-15);}
  }
  function advance(auto=false){ if(!data.length) return; if(index>=data.length-1){ running=false;runBtn.textContent='↻ Replay';status.textContent='Replay complete. Change the window or reset to run it again.';return;} index++; const r=data[index]; updateReadout(r); status.textContent='Forecast '+money(r.predicted)+' → actual '+money(r.actual)+(r.correct?' · direction correct.':' · direction missed.'); draw(); if(auto&&running){timer=setTimeout(()=>advance(true),+speedSelect.value);} }
  runBtn.addEventListener('click',()=>{ if(running){running=false;clearTimeout(timer);runBtn.textContent='▶ Resume';return;} if(index>=data.length-1) index=-1; running=true;runBtn.textContent='Ⅱ Pause';advance(true); });
  stepBtn.addEventListener('click',()=>{running=false;clearTimeout(timer);runBtn.textContent='▶ Run forecast';advance(false);});
  resetBtn.addEventListener('click',resetData); windowSelect.addEventListener('change',resetData); speedSelect.addEventListener('change',()=>{});
  fetch(root.dataset.csv).then(r=>{if(!r.ok)throw new Error('CSV unavailable');return r.text();}).then(t=>{all=parseCSV(t);resetData();}).catch(()=>{status.textContent='Could not load the local prediction data. Check the projects folder was uploaded to GitHub.';});
  new ResizeObserver(sizeCanvas).observe(canvas); window.addEventListener('resize',sizeCanvas);
})();
