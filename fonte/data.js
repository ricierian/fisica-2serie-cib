/* ===== Ajudantes usados em todas as listas ===== */
const f = (n, d) => `<span class="frac"><span>${n}</span><span>${d}</span></span>`;
const L = ['A','B','C','D','E'];
const nf = v => String(v).replace('.', ',');
let _uid = 0;

/* Figura SVG genérica (segue o tema claro/escuro). vb = "0 0 L A" */
const fig = (vb, aria, inner, w) => `<figure class="fig"${w ? ` style="max-width:${w}px"` : ''}><svg viewBox="${vb}" class="plot" role="img" aria-label="${aria}">${inner}</svg></figure>`;
/* Ponta de seta: devolve [defs, url] com id único */
function seta(cor){ const id = 'sa' + (++_uid); return [`<defs><marker id="${id}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="${cor}"/></marker></defs>`, `url(#${id})`]; }

/* Pontos de uma senoide: y = A·sen(2π(x − x0)/λ + fase) */
function sen(A, lam, xa, xb, fase, n){ n = n || 120; fase = fase || 0; const p = []; for (let k = 0; k <= n; k++){ const x = xa + (xb - xa) * k / n; p.push([+x.toFixed(4), +(A * Math.sin(2 * Math.PI * x / lam + fase)).toFixed(4)]); } return p; }

/* Gráfico cartesiano. o = {aria, xmin, xmax, ymin, ymax, xt, yt, xl, yl, L:[{p, c, dash, w, lab, lp}], pts, ann:[[x,y,txt,anchor,cor]], dims:[[x1,y1,x2,y2,txt,dx,dy]], H, W} */
function plot(o){
  const W = o.W || 340, H = o.H || 236, l = o.l || 46, r = 18, t = 28, b = 40;
  const x0 = o.xmin || 0, y0 = o.ymin || 0;
  const sx = x => +(l + (x - x0) / (o.xmax - x0) * (W - l - r)).toFixed(1);
  const sy = y => +(H - b - (y - y0) / (o.ymax - y0) * (H - t - b)).toFixed(1);
  const [defs, mk] = seta('var(--ink)');
  let s = `<svg viewBox="0 0 ${W} ${H}" class="plot" role="img" aria-label="${o.aria}">${defs}`;
  (o.xt || []).forEach(x => { s += `<line x1="${sx(x)}" y1="${sy(y0)}" x2="${sx(x)}" y2="${sy(o.ymax)}" stroke="var(--line)"/>`; if (!o.noxl) s += `<text x="${sx(x)}" y="${sy(y0)+16}" text-anchor="middle" class="pt">${nf(x)}</text>`; });
  (o.yt || []).forEach(y => { s += `<line x1="${sx(x0)}" y1="${sy(y)}" x2="${sx(o.xmax)}" y2="${sy(y)}" stroke="var(--line)"/><text x="${sx(x0)-7}" y="${sy(y)+4}" text-anchor="end" class="pt">${nf(y)}</text>`; });
  const yax = (y0 < 0 && o.ymax > 0) ? 0 : y0;
  s += `<line x1="${sx(x0)}" y1="${sy(yax)}" x2="${sx(o.xmax)}" y2="${sy(yax)}" stroke="var(--muted)" stroke-width="1.5"/><line x1="${sx(x0)}" y1="${sy(y0)}" x2="${sx(x0)}" y2="${sy(o.ymax)}" stroke="var(--muted)" stroke-width="1.5"/>`;
  s += `<text x="${W-r}" y="${H-6}" text-anchor="end" class="pt">${o.xl}</text><text x="${sx(x0)}" y="16" text-anchor="middle" class="pt">${o.yl}</text>`;
  o.L.forEach(ln => {
    s += `<polyline points="${ln.p.map(([x,y]) => sx(x)+','+sy(y)).join(' ')}" fill="none" stroke="${ln.c}" stroke-width="${ln.w || 3}" stroke-linecap="round" stroke-linejoin="round"${ln.dash ? ` stroke-dasharray="${ln.dash}"` : ''}/>`;
    if (ln.lab){ const [x, y] = ln.lp || ln.p[ln.p.length-1]; s += `<text x="${sx(x)}" y="${sy(y)}" class="pt pt-lab" fill="${ln.c}">${ln.lab}</text>`; }
  });
  (o.dims || []).forEach(([xa, ya, xb, yb, txt, dx, dy]) => {
    s += `<line x1="${sx(xa)}" y1="${sy(ya)}" x2="${sx(xb)}" y2="${sy(yb)}" stroke="var(--ink)" stroke-width="1.4" marker-start="${mk}" marker-end="${mk}"/>`;
    if (txt) s += `<text x="${(sx(xa)+sx(xb))/2 + (dx||0)}" y="${(sy(ya)+sy(yb))/2 + (dy||-6)}" text-anchor="middle" class="pt pt-strong">${txt}</text>`;
  });
  (o.pts || []).forEach(([x, y]) => { s += `<circle cx="${sx(x)}" cy="${sy(y)}" r="4.5" fill="var(--ink)" stroke="var(--surface)" stroke-width="2"/>`; });
  (o.ann || []).forEach(([x, y, txt, a, c]) => { s += `<text x="${sx(x)}" y="${sy(y)}" text-anchor="${a || 'middle'}" class="pt pt-strong"${c ? ` fill="${c}"` : ''}>${txt}</text>`; });
  return `<figure class="fig">${s}</svg></figure>`;
}

/* Tabela simples: cab = [..], linhas = [[..],[..]] */
const tabela = (cab, linhas, esq) => `<div class="tblwrap tbl-txt${esq ? ' tbl-esq' : ''}"><table>${cab ? `<tr>${cab.map(c => `<th>${c}</th>`).join('')}</tr>` : ''}${linhas.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
