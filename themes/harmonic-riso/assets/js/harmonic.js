/* Harmonic Riso
 * Draws text from Fourier harmonics and prints it as three overlapping risograph inks.
 * Progressive enhancement: without JS the hero is a plain <h1> and nav links are plain text.
 */
(() => {
'use strict';

const N = 256;                       // samples per outline, and max harmonics
const STORE = 'harmonic-riso:settings:v1';
const FONT = 'Archivo, "Arial Black", sans-serif';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const darkMQ = matchMedia('(prefers-color-scheme: dark)');
const isDark = () => { const t = document.documentElement.dataset.theme; return t ? t === 'dark' : darkMQ.matches; };
const DPR = () => Math.min(window.devicePixelRatio || 1, 2);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* =====================================================================
   Engine: raster -> outlines (marching squares) -> Fourier coefficients
   ===================================================================== */
function trace(v, W, H){
  const iso = .5, adj = new Map();
  const link = (a, b) => { if (!adj.has(a)) adj.set(a, []); if (!adj.has(b)) adj.set(b, []); adj.get(a).push(b); adj.get(b).push(a); };
  for (let j = 0; j < H - 1; j++) for (let i = 0; i < W - 1; i++){
    const cs = (v[j*W+i] > iso ? 8 : 0) | (v[j*W+i+1] > iso ? 4 : 0) | (v[(j+1)*W+i+1] > iso ? 2 : 0) | (v[(j+1)*W+i] > iso ? 1 : 0);
    if (cs === 0 || cs === 15) continue;
    const t = (j*W+i)*2, b = ((j+1)*W+i)*2, l = (j*W+i)*2+1, r = (j*W+i+1)*2+1;
    switch (cs){
      case 1: case 14: link(l, b); break; case 2: case 13: link(b, r); break;
      case 3: case 12: link(l, r); break; case 4: case 11: link(t, r); break;
      case 6: case 9: link(t, b); break; case 7: case 8: link(l, t); break;
      case 5: link(t, r); link(l, b); break; case 10: link(l, t); link(b, r); break;
    }
  }
  const pos = id => {
    const k = id >> 1, i = k % W, j = (k / W) | 0;
    if (id & 1){ const a = v[j*W+i], c = v[(j+1)*W+i]; return [i, j + (iso - a) / (c - a)]; }
    const a = v[j*W+i], c = v[j*W+i+1]; return [i + (iso - a) / (c - a), j];
  };
  const seen = new Set(), loops = [];
  for (const s of adj.keys()){
    if (seen.has(s)) continue;
    const loop = []; let prev = -1, cur = s;
    for (;;){
      seen.add(cur); loop.push(pos(cur));
      const nb = adj.get(cur), nx = nb[0] !== prev ? nb[0] : nb[1];
      if (nx === undefined || seen.has(nx)) break;
      prev = cur; cur = nx;
    }
    if (loop.length > 8) loops.push(loop);
  }
  return loops;
}
function resample(pts, n){
  const m = pts.length, cum = new Float64Array(m + 1);
  for (let i = 0; i < m; i++){ const a = pts[i], b = pts[(i+1) % m]; cum[i+1] = cum[i] + Math.hypot(b[0]-a[0], b[1]-a[1]); }
  const total = cum[m], out = []; let s = 0;
  for (let k = 0; k < n; k++){
    const d = total * k / n; while (cum[s+1] < d) s++;
    const a = pts[s], b = pts[(s+1) % m], seg = cum[s+1] - cum[s], t = seg ? (d - cum[s]) / seg : 0;
    out.push([a[0] + (b[0]-a[0]) * t, a[1] + (b[1]-a[1]) * t]);
  }
  return { pts: out, total };
}
function dft(pts){
  const n = pts.length, out = [];
  for (let k = -n/2; k < n/2; k++){
    let re = 0, im = 0;
    for (let t = 0; t < n; t++){
      const a = -2*Math.PI*k*t/n, c = Math.cos(a), s = Math.sin(a);
      re += pts[t][0]*c - pts[t][1]*s; im += pts[t][0]*s + pts[t][1]*c;
    }
    re /= n; im /= n; out.push({ k, re, im, amp: Math.hypot(re, im) });
  }
  return out;
}
function order(cs, mode){
  const dc = cs.find(c => c.k === 0), rest = cs.filter(c => c.k !== 0);
  if (mode === 'freq') rest.sort((a, b) => Math.abs(a.k) - Math.abs(b.k) || b.k - a.k);
  else rest.sort((a, b) => b.amp - a.amp);
  return [dc, ...rest];
}
function buildShape(W, H, drawFn){
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d', { willReadFrequently: true }); x.fillStyle = '#000'; drawFn(x);
  const d = x.getImageData(0, 0, W, H).data, v = new Float32Array(W*H);
  for (let i = 0; i < W*H; i++) v[i] = d[i*4+3] / 255;
  const contours = []; let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
  for (const loop of trace(v, W, H)){
    const { pts, total } = resample(loop, N); if (total < 8) continue;
    for (const [px, py] of pts){ x0 = Math.min(x0, px); y0 = Math.min(y0, py); x1 = Math.max(x1, px); y1 = Math.max(y1, py); }
    const cs = dft(pts); contours.push({ freq: order(cs, 'freq'), amp: order(cs, 'amp') });
  }
  return { W, H, contours, bbox: [x0, y0, x1, y1] };
}
const shapeCache = new Map();
function textShape(lines, size, weight){
  const key = `${lines.join('\n')}|${size}|${weight}`;
  if (shapeCache.has(key)) return shapeCache.get(key);
  const f = `${weight} ${size}px ${FONT}`, m = document.createElement('canvas').getContext('2d'); m.font = f;
  const pad = Math.ceil(size * .15), lh = size * 1.05;
  const w = Math.max(...lines.map(l => m.measureText(l).width));
  const shape = buildShape(Math.ceil(w) + pad*2, Math.ceil(size*1.3 + lh*(lines.length - 1)) + pad*2,
    x => { x.font = f; lines.forEach((l, i) => x.fillText(l, pad, pad + size*.98 + i*lh)); });
  shapeCache.set(key, shape);
  return shape;
}

/* =====================================================================
   Oscillation and reconstruction
   ===================================================================== */
// Rotate and breathe each harmonic at or above wob.kmin. Frequencies 0 and ±1 never move,
// so shapes don't drift or spin. Higher frequencies swing harder and faster, which reads as fuzz.
function wobble(c, w, wob){
  const ak = Math.abs(c.k);
  if (!wob || ak < 2 || ak < wob.kmin - 1) return [c.re*w, c.im*w];
  const ramp = Math.min(1, (ak - wob.kmin + 1) / Math.max(1, wob.kmin * .25));
  if (ramp <= 0) return [c.re*w, c.im*w];
  const hi = Math.min(1, ak / 40), sp = (1 + hi * 2.5) * (wob.speed || 1), t = wob.t, f = ramp * wob.amt;
  const d = f * (.45 + 2.2*hi) * Math.sin(t * .0016 * sp * (1 + (ak % 7) * .17) + c.k * 1.7);
  const g = w * (1 + f * (.18 + .7*hi) * Math.sin(t * .0012 * sp * (1 + (ak % 5) * .21) + c.k * 2.3));
  const cd = Math.cos(d), sd = Math.sin(d);
  return [(c.re*cd - c.im*sd) * g, (c.re*sd + c.im*cd) * g];
}
function rebuild(terms, M, wob){
  const xs = new Float32Array(N), ys = new Float32Array(N), full = Math.floor(M), frac = M - full;
  const cnt = Math.min(terms.length, full + (frac > 0 ? 1 : 0));
  for (let q = 0; q < cnt; q++){
    const c = terms[q], [cr, ci] = wobble(c, q === full ? frac : 1, wob);
    const a = 2*Math.PI*c.k/N, sc = Math.cos(a), ss = Math.sin(a); let rr = 1, ri = 0;
    for (let n = 0; n < N; n++){
      xs[n] += cr*rr - ci*ri; ys[n] += cr*ri + ci*rr;
      const t = rr*sc - ri*ss; ri = rr*ss + ri*sc; rr = t;
    }
  }
  return [xs, ys];
}
function pathOf(shape, mode, M, wob, f){
  const p = new Path2D();
  for (const c of shape.contours){
    const [xs, ys] = rebuild(c[mode], M, wob);
    p.moveTo(f.ox + xs[0]*f.s, f.oy + ys[0]*f.s);
    for (let n = 1; n < N; n++) p.lineTo(f.ox + xs[n]*f.s, f.oy + ys[n]*f.s);
    p.closePath();
  }
  return p;
}
// Relative cutoff: frac 0 oscillates every harmonic of a plate, .9 only its top tenth.
const kminFor = (M, frac) => Math.max(2, frac * Math.max(2, M / 2));
function wobsAt(t, Ms, frac, amt){
  if (!state.motionOn) return [null, null, null];
  return Ms.map((M, i) => ({ t: t + i * 2500, amt, kmin: kminFor(M, frac), speed: 1 }));
}

/* =====================================================================
   Risograph renderer
   ===================================================================== */
const PALETTES = {
  Classic: [['Yellow', '#FFE800'], ['Fluorescent pink', '#FF48B0'], ['Blue', '#0078BF']],
  Sunset:  [['Orange', '#FF6C2F'], ['Fluorescent pink', '#FF48B0'], ['Medium blue', '#3255A4']],
  Forest:  [['Sunflower', '#FFB511'], ['Green', '#00A95C'], ['Grape', '#765BA7']],
  Coral:   [['Aqua', '#5EC8E5'], ['Bright red', '#F15060'], ['Teal', '#00838A']],
};
const PLATE = [[-1.2, 1.4], [1.0, .6], [0, 0]];   // registration offsets per plate, in units
const PLATE_POS = ['bottom', 'middle', 'top'];
const grainCache = new WeakMap();
function grainFor(ctx){
  if (grainCache.has(ctx)) return grainCache.get(ctx);
  const g = document.createElement('canvas'); g.width = g.height = 160;
  const gx = g.getContext('2d'), im = gx.createImageData(160, 160);
  for (let i = 0; i < im.data.length; i += 4) im.data[i+3] = Math.random() < .17 ? 255 * (.35 + Math.random() * .65) : 0;
  gx.putImageData(im, 0, 0);
  const p = ctx.createPattern(g, 'repeat'); grainCache.set(ctx, p); return p;
}
function fitTo(shape, cw, ch, o){
  const [a, b, c, d] = o.raster ? [0, 0, shape.W, shape.H] : shape.bbox;
  const bw = c - a, bh = d - b, m = o.margin || 0;
  const s = Math.min((cw - 2*m) / bw, ch / bh) * o.pad;
  const ox = o.align === 'left' ? m - a*s : (cw - bw*s)/2 - a*s;
  return { s, ox, oy: (ch - bh*s)/2 - b*s };
}
function drawRiso(ctx, shape, o){
  const cw = ctx.canvas.width, ch = ctx.canvas.height;
  ctx.clearRect(0, 0, cw, ch);
  if (!shape || !shape.contours.length) return;
  const unit = Math.max(1, Math.min(cw, ch) * .011);
  const f0 = fitTo(shape, cw, ch, { ...o, margin: o.align === 'left' ? unit * 4 : 0 });
  const inks = PALETTES[state.palette].map(([, h]) => h);
  ctx.globalCompositeOperation = isDark() ? 'screen' : 'multiply';
  for (let i = 0; i < 3; i++){
    const dk = o.drift || 0;
    const dx = PLATE[i][0] * o.mis + .5 * dk * o.mis * Math.sin(o.t * .0006 + i * 2.1);
    const dy = PLATE[i][1] * o.mis + .5 * dk * o.mis * Math.cos(o.t * .0005 + i * 1.3);
    const f = { s: f0.s, ox: f0.ox + dx * unit, oy: f0.oy + dy * unit };
    ctx.globalAlpha = .92; ctx.fillStyle = inks[i];
    ctx.fill(pathOf(shape, o.mode, o.Ms[i], o.wobs[i], f), 'evenodd');
    if (i === 2 && o.epi) drawEpi(ctx, shape, o, f, inks[2]);
  }
  ctx.globalAlpha = .4; ctx.globalCompositeOperation = 'destination-out';
  ctx.fillStyle = grainFor(ctx); ctx.fillRect(0, 0, cw, ch);
  ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
}
function drawEpi(ctx, shape, o, f, col){
  const M = o.Ms[2], full = Math.floor(M), lw = Math.max(1, ctx.canvas.width / 900);
  ctx.save(); ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = lw;
  for (const c of shape.contours){
    const terms = c[o.mode], cnt = Math.min(terms.length, Math.ceil(M), 60);
    let x = terms[0].re, y = terms[0].im;
    ctx.globalAlpha = .6; ctx.beginPath();
    for (let q = 1; q < cnt; q++){
      const [cr, ci] = wobble(terms[q], q === full ? M - full : 1, o.wobs[2]);
      const r = Math.hypot(cr, ci) * f.s, a = 2 * Math.PI * terms[q].k * o.tau;
      const nx = x + cr*Math.cos(a) - ci*Math.sin(a), ny = y + cr*Math.sin(a) + ci*Math.cos(a);
      const px = f.ox + x*f.s, py = f.oy + y*f.s;
      if (r > 1.5){ ctx.moveTo(px + r, py); ctx.arc(px, py, r, 0, Math.PI*2); }
      ctx.moveTo(px, py); ctx.lineTo(f.ox + nx*f.s, f.oy + ny*f.s); x = nx; y = ny;
    }
    ctx.stroke();
    ctx.globalAlpha = 1; ctx.beginPath(); ctx.arc(f.ox + x*f.s, f.oy + y*f.s, lw * 3.5, 0, Math.PI*2); ctx.fill();
  }
  ctx.restore();
}

/* =====================================================================
   Settings: site config defaults, overridden by the visitor's saved choices
   ===================================================================== */
let cfg = {};
try { cfg = JSON.parse(document.body.dataset.harmonic || '{}') || {}; } catch (e) {}
const num = (v, d) => (v !== null && v !== undefined && v !== '' && isFinite(+v)) ? +v : d;
const palName = n => Object.keys(PALETTES).find(k => k.toLowerCase() === String(n || '').toLowerCase()) || 'Coral';
// Hugo lowercases param keys, so read them lowercased.
const DEFAULTS = {
  palette: palName(cfg.inks),
  misPct: clamp(num(cfg.misregistration, 25), 0, 100),
  targets: [num(cfg.bottomharmonics, 59), num(cfg.middleharmonics, 30), num(cfg.topharmonics, 13)].map(m => clamp(m, 1, N)),
  amtPct: clamp(num(cfg.motionamount, 40), 0, 100),
  upperPct: clamp(num(cfg.oscillateupper, 81), 10, 100),
  mode: String(cfg.order || 'frequency').toLowerCase().startsWith('c') ? 'amp' : 'freq',
  motion: cfg.motion !== false && !reduce,
  epi: false,
};
const BUILD_UP = cfg.buildup !== false;

function loadSaved(){
  try {
    const s = JSON.parse(localStorage.getItem(STORE) || 'null');
    if (!s || typeof s !== 'object') return {};
    const out = {};
    if (PALETTES[s.palette]) out.palette = s.palette;
    if (isFinite(s.misPct)) out.misPct = clamp(+s.misPct, 0, 100);
    if (Array.isArray(s.targets) && s.targets.length === 3 && s.targets.every(isFinite)) out.targets = s.targets.map(m => clamp(+m, 1, N));
    if (isFinite(s.amtPct)) out.amtPct = clamp(+s.amtPct, 0, 100);
    if (isFinite(s.upperPct)) out.upperPct = clamp(+s.upperPct, 10, 100);
    if (s.mode === 'freq' || s.mode === 'amp') out.mode = s.mode;
    if (typeof s.motion === 'boolean') out.motion = s.motion;
    if (typeof s.epi === 'boolean') out.epi = s.epi;
    return out;
  } catch (e) { return {}; }
}
let saveTimer = 0;
function save(){
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      const { palette, misPct, targets, amtPct, upperPct, mode, motion, epi } = state;
      localStorage.setItem(STORE, JSON.stringify({ palette, misPct, targets, amtPct, upperPct, mode, motion, epi }));
    } catch (e) {}
  }, 250);
}

const state = { ...DEFAULTS, ...loadSaved(), Ms: [1, 1, 1], gain: 1, tau: 0 };
state.targets = state.targets.slice();
Object.defineProperties(state, {
  mis: { get(){ return this.misPct / 100 * 3; } },
  amt: { get(){ return this.amtPct / 100; } },
  kfrac: { get(){ return 1 - this.upperPct / 100; } },
  motionOn: { get(){ return this.motion; } },
});

function applyInkVars(){
  const s = document.documentElement.style;
  PALETTES[state.palette].forEach(([, h], i) => s.setProperty(`--ink${i}`, h));
}

/* =====================================================================
   Hero wordmark
   ===================================================================== */
const heroC = document.getElementById('riso-hero');
const hero = heroC ? {
  c: heroC, ctx: heroC.getContext('2d'), wrap: heroC.closest('.hero'),
  text: (heroC.dataset.text || document.title).trim(), lines: 0, shape: null, dirty: true, visible: true,
} : null;
let build = null;
const LOGN = Math.log(N);

function heroLines(){
  const r = hero.c.getBoundingClientRect(), wide = r.width / Math.max(1, r.height) >= 2.3;
  const t = hero.text, sp = t.indexOf(' ');
  if (wide || sp < 0) return [t];
  // split at the space nearest the middle
  let best = sp, mid = t.length / 2;
  for (let i = 0; i < t.length; i++) if (t[i] === ' ' && Math.abs(i - mid) < Math.abs(best - mid)) best = i;
  return [t.slice(0, best), t.slice(best + 1)];
}
function sizeHero(){
  const r = hero.c.getBoundingClientRect();
  hero.c.width = Math.max(1, Math.round(r.width * DPR())); hero.c.height = Math.max(1, Math.round(r.height * DPR()));
  const lines = heroLines();
  if (lines.length !== hero.lines){ hero.lines = lines.length; hero.shape = textShape(lines, 180, 900); }
  hero.dirty = true;
}
function drawHero(t){
  drawRiso(hero.ctx, hero.shape, {
    Ms: state.Ms, mode: state.mode, mis: state.mis, pad: .94, align: 'left', t,
    drift: state.motionOn ? state.gain : 0,
    wobs: wobsAt(t, state.Ms, state.kfrac, state.amt * state.gain), epi: state.epi, tau: state.tau,
  });
  if (ui) ui.readouts();
}
function setLayer(i, m, fromSlider){
  state.Ms[i] = clamp(m, 1, N);
  if (!fromSlider && ui) ui.syncPlate(i);
  if (hero) hero.dirty = true;
}
function playBuild(){
  if (!hero) return;
  if (reduce){ state.targets.forEach((m, i) => setLayer(i, m)); return; }
  build = { start: performance.now(), dur: 3000 };
  state.gain = 0;
}

/* =====================================================================
   Brand: the hero wordmark, small, in the header of inner pages
   ===================================================================== */
const brandA = document.querySelector('a[data-riso-brand]');
let brand = null;
function buildBrand(){
  const word = brandA ? (brandA.textContent || '').trim() : ''; if (!word) return;
  const c = document.createElement('canvas'); c.setAttribute('aria-hidden', 'true');
  brandA.appendChild(c); brandA.classList.add('riso-ready');
  const shape = textShape([word], 180, 900), [x0, y0, x1, y1] = shape.bbox;
  const h = parseFloat(getComputedStyle(c).height) || 34;   // set in main.css
  c.style.width = (h * (x1 - x0) / (y1 - y0) / .9) + 'px';
  brand = { c, ctx: c.getContext('2d'), shape, dirty: true };
  sizeBrand();
}
function sizeBrand(){
  if (!brand) return;
  const r = brand.c.getBoundingClientRect();
  brand.c.width = Math.max(1, Math.round(r.width * DPR())); brand.c.height = Math.max(1, Math.round(r.height * DPR()));
  brand.dirty = true;
}
function drawBrand(t){
  drawRiso(brand.ctx, brand.shape, {
    Ms: state.targets, mode: state.mode, mis: state.mis, pad: .9, t,
    drift: state.motionOn ? 1 : 0,
    wobs: wobsAt(t, state.targets, state.kfrac, state.amt), epi: false,
  });
}

/* =====================================================================
   Nav links: soft and out of register at rest, sharp and aligned on hover
   ===================================================================== */
const navItems = [];
const REST = [3, 6, 10], HOVER = [8, 26, 150];
function buildNav(){
  document.querySelectorAll('a[data-riso-nav]').forEach((a, idx) => {
    const word = (a.textContent || '').trim(); if (!word) return;
    const c = document.createElement('canvas'); c.setAttribute('aria-hidden', 'true');
    a.appendChild(c); a.classList.add('riso-ready');
    const shape = textShape([word], 72, 700);
    c.style.width = (30 * shape.W / shape.H) + 'px';
    const base = a.getAttribute('aria-current') === 'page' ? .45 : 0;
    const it = { a, c, ctx: c.getContext('2d'), shape, p: base, target: base, base, dirty: true, idx };
    const go = v => { it.target = v; if (reduce) it.p = v; it.dirty = true; };
    a.addEventListener('pointerenter', () => go(1));
    a.addEventListener('pointerleave', () => { if (document.activeElement !== a) go(it.base); });
    a.addEventListener('focus', () => go(1));
    a.addEventListener('blur', () => go(it.base));
    navItems.push(it);
  });
  sizeNav();
}
function sizeNav(){
  for (const it of navItems){
    const r = it.c.getBoundingClientRect();
    it.c.width = Math.max(1, Math.round(r.width * DPR())); it.c.height = Math.max(1, Math.round(r.height * DPR()));
    it.dirty = true;
  }
}
function drawNav(it, t){
  const p = it.p, Ms = REST.map((r, i) => Math.exp(Math.log(r) + (Math.log(HOVER[i]) - Math.log(r)) * p));
  drawRiso(it.ctx, it.shape, {
    Ms, mode: 'amp', mis: 1.6 * (1 - p), pad: .98, raster: true, t, drift: state.motionOn ? 1 - p : 0,
    wobs: wobsAt(t + 1000 * it.idx, Ms, 0, state.amt * (1 - .6 * p)), epi: false,
  });
}

/* =====================================================================
   Print settings panel (home page)
   ===================================================================== */
let ui = null;
function buildUI(root){
  const box = root.querySelector('.controls'); if (!box) return null;
  const pal = Object.entries(PALETTES).map(([name, inks]) =>
    `<label><input type="radio" name="riso-pal" value="${name}"><span><span class="sw">${inks.map(([, h]) => `<i style="background:${h}"></i>`).join('')}</span>${name}</span></label>`).join('');
  const plates = [0, 1, 2].map(i =>
    `<div><label class="lbl" for="riso-k${i}"><span class="dot" style="background:var(--ink${i})"></span><span class="nm"></span></label>
     <input id="riso-k${i}" type="range" min="0" max="1000" style="accent-color:var(--ink${i})"><div class="read"></div></div>`).join('');
  box.innerHTML = `
    <fieldset class="stack"><legend>Harmonics per ink</legend>${plates}</fieldset>
    <div class="stack">
      <fieldset><legend>Inks</legend><div class="chips" data-pal>${pal}</div></fieldset>
      <div><label class="lbl" for="riso-mis">Misregistration</label><input id="riso-mis" type="range" min="0" max="100"><div class="read" data-misread></div></div>
      <fieldset><legend>Add harmonics in this order</legend><div class="chips">
        <label><input type="radio" name="riso-mode" value="freq"><span>Lowest frequency first</span></label>
        <label><input type="radio" name="riso-mode" value="amp"><span>Largest circle first</span></label>
      </div></fieldset>
    </div>
    <div class="stack">
      <label class="check"><input type="checkbox" id="riso-motion"> Gentle motion</label>
      <div><label class="lbl" for="riso-amt">Motion amount</label><input id="riso-amt" type="range" min="0" max="100"><div class="read" data-amtread></div></div>
      <div><label class="lbl" for="riso-upper">Oscillating harmonics</label><input id="riso-upper" type="range" min="10" max="100"><div class="read" data-upread></div></div>
    </div>
    <div class="stack">
      <label class="check"><input type="checkbox" id="riso-epi"> Show epicycles</label>
      <div class="ctl-row">
        <button class="btn" type="button" data-replay>Replay build-up</button>
        <button class="btn alt" type="button" data-reset>Reset to defaults</button>
      </div>
    </div>`;

  const q = s => box.querySelector(s);
  const plateEls = [0, 1, 2].map(i => {
    const input = q(`#riso-k${i}`), wrap = input.parentElement;
    const el = { input, name: wrap.querySelector('.nm'), read: wrap.querySelector('.read') };
    input.addEventListener('input', () => {
      if (build){ build = null; state.targets.forEach((m, j) => { if (j !== i) setLayer(j, m); }); }
      const m = Math.exp(input.value / 1000 * LOGN);
      state.targets[i] = Math.round(m); setLayer(i, m, true); save();
    });
    return el;
  });
  const mis = q('#riso-mis'), amt = q('#riso-amt'), upper = q('#riso-upper'), motion = q('#riso-motion'), epi = q('#riso-epi');
  const dirty = () => { if (hero) hero.dirty = true; if (brand) brand.dirty = true; navItems.forEach(i => i.dirty = true); };

  box.querySelectorAll('input[name=riso-pal]').forEach(r => r.addEventListener('change', () => { state.palette = r.value; applyInkVars(); api.labels(); dirty(); save(); }));
  box.querySelectorAll('input[name=riso-mode]').forEach(r => r.addEventListener('change', () => { state.mode = r.value; dirty(); save(); }));
  mis.addEventListener('input', () => { state.misPct = +mis.value; api.readouts(); dirty(); save(); });
  amt.addEventListener('input', () => { state.amtPct = +amt.value; api.readouts(); dirty(); save(); });
  upper.addEventListener('input', () => { state.upperPct = +upper.value; api.readouts(); dirty(); save(); });
  motion.addEventListener('change', () => { state.motion = motion.checked; dirty(); save(); });
  epi.addEventListener('change', () => { state.epi = epi.checked; dirty(); save(); });
  q('[data-replay]').addEventListener('click', playBuild);
  q('[data-reset]').addEventListener('click', () => {
    try { localStorage.removeItem(STORE); } catch (e) {}
    Object.assign(state, { ...DEFAULTS, targets: DEFAULTS.targets.slice() });
    applyInkVars(); api.syncAll(); dirty(); playBuild();
  });

  const api = {
    syncPlate(i){ plateEls[i].input.value = Math.round(Math.log(state.Ms[i]) / LOGN * 1000); },
    labels(){ PALETTES[state.palette].forEach(([n], i) => { plateEls[i].name.textContent = `${n} (${PLATE_POS[i]})`; }); },
    readouts(){
      plateEls.forEach((p, i) => {
        p.read.textContent = `${Math.round(state.Ms[i])} of ${N}` + (state.motionOn ? `, moving from k${Math.round(kminFor(state.Ms[i], state.kfrac))}` : '');
      });
      q('[data-misread]').textContent = `${state.misPct}%`;
      q('[data-amtread]').textContent = `${state.amtPct}%`;
      q('[data-upread]').textContent = state.upperPct >= 100 ? 'every harmonic of each ink' : `upper ${state.upperPct}% of each ink\u2019s harmonics`;
    },
    syncAll(){
      box.querySelector(`input[name=riso-pal][value="${state.palette}"]`).checked = true;
      box.querySelector(`input[name=riso-mode][value="${state.mode}"]`).checked = true;
      mis.value = state.misPct; amt.value = state.amtPct; upper.value = state.upperPct;
      motion.checked = state.motion; epi.checked = state.epi;
      [0, 1, 2].forEach(i => { plateEls[i].input.value = Math.round(Math.log(state.targets[i]) / LOGN * 1000); });
      api.labels(); api.readouts();
    },
  };
  api.syncAll();
  return api;
}

/* =====================================================================
   Animation loop
   ===================================================================== */
let lastT = 0;
function frame(t){
  const dt = lastT ? Math.min(64, t - lastT) : 16; lastT = t;
  if (hero){
    // motion pauses during the build-up, then eases back in
    if (build){
      const p = clamp((t - build.start) / build.dur, 0, 1), e = p < .5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2) / 2;
      state.targets.forEach((m, i) => setLayer(i, Math.exp(e * Math.log(m))));
      if (p >= 1) build = null;
    } else if (state.gain < 1){
      state.gain += (1 - state.gain) * (1 - Math.exp(-dt / 350));
      if (state.gain > .998) state.gain = 1;
      hero.dirty = true;
    }
    if (state.epi){ state.tau = (state.tau + dt / 9000) % 1; hero.dirty = true; }
    if (hero.visible && (hero.dirty || state.motionOn)){ drawHero(t); hero.dirty = false; }
  }
  if (brand && (brand.dirty || state.motionOn)){ drawBrand(t); brand.dirty = false; }
  for (const it of navItems){
    if (it.p !== it.target){
      it.p += (it.target - it.p) * (1 - Math.exp(-dt / 90));
      if (Math.abs(it.p - it.target) < .004) it.p = it.target;
      it.dirty = true;
    }
    if (it.dirty || state.motionOn){ drawNav(it, t); it.dirty = false; }
  }
  requestAnimationFrame(frame);
}

/* =====================================================================
   Boot
   ===================================================================== */
async function boot(){
  try {
    await Promise.race([
      Promise.all([document.fonts.load(`900 180px ${FONT}`), document.fonts.load(`700 72px ${FONT}`)]),
      new Promise(r => setTimeout(r, 3000)),
    ]);
  } catch (e) {}
  applyInkVars();
  const panel = document.getElementById('riso-settings');
  if (panel) ui = buildUI(panel);
  if (hero){
    hero.wrap.classList.add('riso-ready');
    sizeHero();
    new IntersectionObserver(es => { hero.visible = es[0].isIntersecting; }).observe(hero.c);
    if (BUILD_UP) playBuild(); else state.targets.forEach((m, i) => setLayer(i, m));
  }
  buildBrand();
  buildNav();
  let rt = 0;
  new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(() => { if (hero) sizeHero(); sizeBrand(); sizeNav(); }, 80); }).observe(document.body);
  darkMQ.addEventListener('change', () => { if (hero) hero.dirty = true; if (brand) brand.dirty = true; navItems.forEach(i => i.dirty = true); });
  requestAnimationFrame(frame);
}
boot();
})();
