/* ===== Lista 6 · Refração ===== */
const TOOLS6 = [
  ['Índice de refração', `n = ${f('c','v')} &nbsp; (sem unidade, n ≥ 1)<br>c = 3,0 · 10<sup>8</sup> m/s`],
  ['Lei de Snell', `n<sub>1</sub> · sen θ<sub>1</sub> = n<sub>2</sub> · sen θ<sub>2</sub><br>${f('sen θ<sub>1</sub>','sen θ<sub>2</sub>')} = ${f('v<sub>1</sub>','v<sub>2</sub>')} = ${f('n<sub>2</sub>','n<sub>1</sub>')}<br>Ângulos medidos a partir da <b>normal</b>.`],
  ['Regras práticas', `Meio mais refringente (n maior): luz mais lenta e raio mais perto da normal.<br>Na refração, f não muda; λ muda junto com v.`],
  ['Ângulo limite', `sen L = ${f('n<sub>menor</sub>','n<sub>maior</sub>')}<br>Reflexão total: luz indo do meio mais refringente para o menos, com θ &gt; L.`],
  ['Dispersão', `n depende da cor. No vidro: n<sub>vermelho</sub> &lt; … &lt; n<sub>violeta</sub><br>O violeta é o mais lento e o mais desviado.`],
  ['Senos', tabela(['θ','30°','37°','45°','53°','60°'],[['sen θ','0,50','0,60','0,71','0,80','0,87']])],
];

/* Interface horizontal com normal; ângulos em graus a partir da normal */
function interface(o){
  const cx = 170, cy = 92, R = 84, rad = a => a * Math.PI / 180;
  const [d, mk] = seta('var(--ray)');
  const pi = [cx - R * Math.sin(rad(o.a1)), cy - R * Math.cos(rad(o.a1))];
  let s = `${d}<rect x="10" y="${cy}" width="320" height="${184 - cy}" fill="var(--sign)" opacity=".16"/><line x1="10" y1="${cy}" x2="330" y2="${cy}" stroke="var(--sign)" stroke-width="2"/>
    <line x1="${cx}" y1="10" x2="${cx}" y2="178" stroke="var(--muted)" stroke-dasharray="5 4"/><text x="${cx + 4}" y="20" class="pt">normal</text>
    <line x1="${pi[0].toFixed(1)}" y1="${pi[1].toFixed(1)}" x2="${cx}" y2="${cy}" stroke="var(--ray)" stroke-width="2.6" marker-end="${mk}"/>
    <text x="20" y="${cy - 8}" class="pt pt-strong">${o.m1}</text><text x="20" y="${cy + 20}" class="pt pt-strong">${o.m2}</text>`;
  const arc = (a, up, lab) => { const r = 34, sgn = up ? -1 : 1, x2 = cx + (up ? -1 : 1) * r * Math.sin(rad(a)), y2 = cy + sgn * r * Math.cos(rad(a)); return `<path d="M${cx} ${cy + sgn * r} A${r} ${r} 0 0 ${up ? 0 : 0} ${x2.toFixed(1)} ${y2.toFixed(1)}" fill="none" stroke="var(--ink)" stroke-width="1.2"/><text x="${(cx + (up ? -1 : 1) * 46 * Math.sin(rad(a / 2))).toFixed(1)}" y="${(cy + sgn * 46 * Math.cos(rad(a / 2)) + 4).toFixed(1)}" text-anchor="middle" class="pt pt-strong">${lab}</text>`; };
  if (o.a2 !== undefined){
    const pr = [cx + R * Math.sin(rad(o.a2)), cy + R * Math.cos(rad(o.a2))];
    s += `<line x1="${cx}" y1="${cy}" x2="${pr[0].toFixed(1)}" y2="${pr[1].toFixed(1)}" stroke="var(--ray)" stroke-width="2.6" marker-end="${mk}"/>`;
    if (o.l2) s += arc(o.a2, false, o.l2);
  }
  if (o.l1) s += arc(o.a1, true, o.l1);
  (o.cand || []).forEach(([a, n]) => { const p = [cx + 78 * Math.sin(rad(a)), cy + 78 * Math.cos(rad(a))]; s += `<line x1="${cx}" y1="${cy}" x2="${p[0].toFixed(1)}" y2="${p[1].toFixed(1)}" stroke="var(--ink)" stroke-width="1.6" stroke-dasharray="6 4"/><text x="${(cx + 90 * Math.sin(rad(a)) + (a === 0 ? 10 : 0)).toFixed(1)}" y="${(cy + 90 * Math.cos(rad(a)) + 4).toFixed(1)}" text-anchor="middle" class="pt pt-strong">${n}</text>`; });
  return fig('0 0 340 196', o.aria, s);
}

/* Q8: fibra óptica */
const FIG6_8 = (() => {
  const [d, mk] = seta('var(--ray)');
  return fig('0 0 340 140', 'Corte longitudinal de uma fibra óptica: um núcleo central envolvido por uma casca. Um raio de luz dentro do núcleo vai e volta entre as paredes do núcleo, em zigue-zague, ao longo da fibra.',
    `${d}<rect x="10" y="22" width="320" height="96" rx="8" fill="var(--sign)" opacity=".14"/><rect x="10" y="44" width="320" height="52" fill="var(--sign)" opacity=".28"/>
    <polyline points="14,70 52,46 112,94 172,46 232,94 292,46 316,61" fill="none" stroke="var(--ray)" stroke-width="2.4" marker-end="${mk}"/>
    <line x1="112" y1="94" x2="112" y2="62" stroke="var(--muted)" stroke-dasharray="4 3"/><text x="118" y="76" class="pt pt-strong">θ</text>
    <text x="170" y="16" text-anchor="middle" class="pt">casca</text><text x="170" y="134" text-anchor="middle" class="pt">casca</text><text x="300" y="86" text-anchor="end" class="pt pt-strong">núcleo</text>`);
})();

/* Q9: pescador e peixe */
function peixe(sol){
  const [d, mk] = seta('var(--ray)');
  const fish = (x, y, op, dash) => `<path d="M${x - 16} ${y} Q${x} ${y - 10} ${x + 14} ${y} Q${x} ${y + 10} ${x - 16} ${y} Z M${x + 14} ${y} L${x + 24} ${y - 7} L${x + 24} ${y + 7} Z" fill="${dash ? 'none' : 'var(--plot2)'}" stroke="var(--ink)" stroke-width="1.4" opacity="${op}"${dash ? ' stroke-dasharray="4 3"' : ''}/>`;
  let s = `${d}<rect x="10" y="80" width="320" height="104" fill="var(--sign)" opacity=".18"/><line x1="10" y1="80" x2="330" y2="80" stroke="var(--sign)" stroke-width="2"/>
    <circle cx="44" cy="30" r="8" fill="none" stroke="var(--ink)" stroke-width="1.6"/><circle cx="47" cy="30" r="2.5" fill="var(--ink)"/><text x="44" y="56" text-anchor="middle" class="pt">pescador</text>
    ${fish(250, 158, 1, false)}<text x="250" y="182" text-anchor="middle" class="pt pt-strong">peixe</text>`;
  if (sol) s += `<polyline points="244,154 170,80 56,34" fill="none" stroke="var(--ray)" stroke-width="2" marker-end="${mk}"/><line x1="170" y1="80" x2="244" y2="110" stroke="var(--muted)" stroke-dasharray="5 4"/>${fish(250, 112, .9, true)}<text x="280" y="100" class="pt pt-strong">imagem</text>`;
  return fig('0 0 340 190', sol ? 'Solução: a luz que sai do peixe se afasta da normal ao passar da água para o ar e chega ao olho do pescador. Prolongando o raio que chega ao olho, a imagem do peixe aparece mais acima, mais rasa que o peixe real.' : 'Um pescador, fora da água, à esquerda, observa um peixe dentro da água, à direita e mais abaixo.', s);
}

/* Q10: prisma */
function prisma(sol){
  const [d, mk] = seta('var(--ray)');
  let s = `${d}<polygon points="60,170 60,30 302,170" fill="var(--sign)" opacity=".2" stroke="var(--sign)" stroke-width="2"/>
    <text x="50" y="182" class="pt pt-strong">A</text><text x="50" y="28" class="pt pt-strong">B</text><text x="306" y="184" class="pt pt-strong">C</text>
    <path d="M60 58 A28 28 0 0 0 84 44" fill="none" stroke="var(--ink)" stroke-width="1.3"/><text x="74" y="74" class="pt pt-strong">60°</text>
    <polyline points="60,160 70,160 70,170" fill="none" stroke="var(--ink)" stroke-width="1.2"/>
    <line x1="8" y1="110" x2="198" y2="110" stroke="var(--ray)" stroke-width="2.6" marker-end="${mk}"/>`;
  if (sol) s += `<line x1="198.6" y1="110" x2="233" y2="170" stroke="var(--ray)" stroke-width="2.6" marker-end="${mk}"/><line x1="168" y1="162" x2="230" y2="55" stroke="var(--muted)" stroke-dasharray="5 4"/><text x="234" y="54" class="pt">normal</text><text x="214" y="122" class="pt pt-strong">60°</text>`;
  return fig('0 0 340 196', sol ? 'Solução: o raio entra pela face AB sem desviar e chega à face BC com ângulo de incidência de 60 graus em relação à normal. Se houver reflexão total, ele é refletido para a face AC.' : 'Prisma de vidro cuja seção é um triângulo retângulo ABC, com ângulo reto em A e ângulo de 60 graus em B. Um raio de luz chega pela esquerda e incide perpendicularmente à face AB.', s);
}

const QL6 = [
{
  src:'Inédita', nivel:'básico',
  text:'Num certo tipo de vidro, a luz se propaga a 2,0 · 10<sup>8</sup> m/s. Sendo a velocidade da luz no vácuo igual a 3,0 · 10<sup>8</sup> m/s, o índice de refração desse vidro é:',
  opts:['0,67','1,5','6,0','2,0','1,2'], ans:1,
  hint:'O índice de refração compara a velocidade da luz no vácuo com a velocidade no meio: n = c/v.',
  steps:[
    ['Definição', `<div class="eq">n = ${f('c','v')} = ${f('3,0 · 10<sup>8</sup>','2,0 · 10<sup>8</sup>')} = <span class="hl">1,5</span></div>`],
    ['Interpretação', `<p>No vidro, a luz é 1,5 vez mais lenta que no vácuo. O índice não tem unidade (m/s dividido por m/s).</p>`],
  ],
  alt:'Todo meio material tem n maior que 1, porque nada é mais rápido que a luz no vácuo. Isso já elimina a alternativa a.',
  warn:'Inverter a fração (v/c) dá 0,67 (alternativa a). Um índice menor que 1 significaria luz mais rápida que no vácuo, o que não acontece.',
  mod:'Inédita (mesmo tipo do exercício 3 da lista de Refração da apostila).'
},
{
  src:'Inédita', nivel:'básico',
  text:`Um raio de luz monocromática, propagando-se no ar, incide obliquamente na superfície da água. As linhas tracejadas numeradas são possíveis trajetórias para o raio refratado.${interface({a1:50, m1:'ar', m2:'água', cand:[[66,'1'],[50,'2'],[35,'3'],[0,'4'],[-35,'5']], aria:'Raio de luz no ar chegando à superfície da água, inclinado 50 graus em relação à normal, vindo da esquerda. Abaixo da superfície, cinco linhas tracejadas: a 1, mais inclinada que o prolongamento do raio; a 2, no prolongamento do raio; a 3, mais próxima da normal; a 4, sobre a normal; a 5, voltando para o lado esquerdo da normal.'})}A trajetória que melhor representa o raio refratado é a:`,
  opts:['1','2','3','4','5'], ans:2,
  hint:'Na água a luz é mais lenta que no ar. Quando a luz entra num meio onde é mais lenta, ela se aproxima ou se afasta da normal?',
  steps:[
    ['Comparando os meios', `<p>A água (n ≈ 1,33) é mais refringente que o ar (n ≈ 1): a luz fica mais lenta ao entrar na água.</p>`],
    ['Desvio', `<p>Ao entrar num meio mais refringente, o raio <b>se aproxima da normal</b>, sem passar para o outro lado dela. Essa é a trajetória <b>3</b>.</p><div class="eq">sen θ<sub>2</sub> = ${f('sen 50°','1,33')} ≈ ${f('0,77','1,33')} ≈ 0,58 ⇒ θ<sub>2</sub> ≈ 35°</div>`],
  ],
  alt:'Pense num carrinho que sai do asfalto e entra na areia de lado: a roda que toca a areia primeiro freia antes, e o carrinho “gira” em direção à normal.',
  warn:'A trajetória 4 (sobre a normal) só aconteceria se o raio chegasse perpendicular à superfície. A 2 seria o caso de meios com o mesmo índice.',
  mod:'Inédita (mesmo tipo do exercício 1 da lista de Refração da apostila).'
},
{
  src:'PUCPR (modificada)', nivel:'básico',
  text:'Um feixe de laser verde passa do ar para a água. Sobre a luz desse feixe, considere as afirmações.<br>I. A frequência não muda.<br>II. A velocidade diminui.<br>III. O comprimento de onda aumenta.<br>Está(ão) correta(s):',
  opts:['Apenas I','Apenas III','Apenas II e III','I, II e III','Apenas I e II'], ans:4,
  hint:'A frequência é definida pela fonte. Se v diminui e f fica igual, o que acontece com λ em v = λ · f?',
  steps:[
    ['I e II', `<p>I. Correta: a frequência é a da fonte e não muda na refração. Por isso a cor do laser não muda.</p><p>II. Correta: a água é mais refringente que o ar, então a luz fica mais lenta.</p>`],
    ['III', `<div class="eq">λ = ${f('v','f')}</div><p>Com f constante e v menor, λ <b>diminui</b>. A afirmação III está errada.</p>`],
  ],
  alt:'Mergulhe de olhos abertos numa piscina com uma lanterna verde: a luz continua verde. Se a frequência mudasse, a cor mudaria.',
  warn:'É comum achar que, por mudar de meio, “tudo muda”. Na refração, só v e λ mudam, e sempre no mesmo sentido.',
  mod:'Original (PUCPR, Somativa 1): afirmações sobre velocidade, frequência, cor e o nome do fenômeno. Modificada: três afirmações novas sobre f, v e λ.'
},
{
  src:'UEFS (modificada)', nivel:'intermediário',
  text:`Um raio de luz passa do ar (n = 1,0) para um líquido desconhecido, como na figura. Use sen 53° = 0,80 e sen 37° = 0,60.${interface({a1:53, a2:37, l1:'53°', l2:'37°', m1:'ar', m2:'líquido', aria:'Raio de luz no ar incide na superfície de um líquido com ângulo de 53 graus em relação à normal e se refrata no líquido com ângulo de 37 graus em relação à normal.'})}${tabela(['Líquido','n'],[['Etanol','1,36'],['Glicerina','1,47'],['Benzeno','1,50'],['Água','1,33'],['Dissulfeto de carbono','1,63']])}Pela tabela, o líquido pode ser:`,
  opts:['Etanol','Glicerina','Benzeno','Água','Dissulfeto de carbono'], ans:3,
  hint:'Use a lei de Snell com n do ar igual a 1,0 e isole o índice do líquido.',
  steps:[
    ['Lei de Snell', `<div class="eq">n<sub>ar</sub> · sen 53° = n<sub>líq</sub> · sen 37°</div><div class="eq">1,0 × 0,80 = n<sub>líq</sub> × 0,60</div>`],
    ['Índice do líquido', `<div class="eq">n<sub>líq</sub> = ${f('0,80','0,60')} ≈ <span class="hl">1,33</span></div><p>Pela tabela: <b>água</b>.</p>`],
  ],
  alt:'Antes de calcular: o raio se aproximou da normal (53° → 37°), então o líquido é mais refringente que o ar, como todos da tabela. A conta decide qual deles.',
  warn:`Dividir ao contrário (${f('0,60','0,80')} = 0,75) dá um índice menor que 1, impossível. O seno do ângulo maior fica em cima quando a luz vem do ar.`,
  mod:'Original (UEFS, Exemplo 1 de Refração da apostila): 60° e 30°, ar e vidro. Modificada: 53° e 37°, com tabela para identificar o líquido.'
},
{
  src:'UFRGS (modificada)', nivel:'intermediário',
  text:`Um raio de luz passa de um meio 1 para um meio 2. O ângulo de incidência é 30° e o de refração é 45° (figura). Use sen 30° = 0,50 e sen 45° = 0,71.${interface({a1:30, a2:45, l1:'30°', l2:'45°', m1:'meio 1', m2:'meio 2', aria:'Raio de luz no meio 1 incide na superfície com ângulo de 30 graus em relação à normal e se refrata no meio 2 com ângulo de 45 graus em relação à normal, afastando-se dela.'})}Comparando as velocidades da luz v<sub>1</sub> e v<sub>2</sub> nos dois meios:`,
  opts:['v₂ ≈ 1,4 v₁; o meio 2 é menos refringente','v₂ ≈ 1,4 v₁; o meio 2 é mais refringente','v₂ ≈ 0,7 v₁; o meio 2 é mais refringente','v₂ ≈ 0,7 v₁; o meio 2 é menos refringente','v₂ = v₁, pois a frequência não muda'], ans:0,
  hint:'O raio se afastou da normal. Na lei de Snell, a razão entre os senos é igual à razão entre as velocidades.',
  steps:[
    ['Razão das velocidades', `<div class="eq">${f('v<sub>2</sub>','v<sub>1</sub>')} = ${f('sen θ<sub>2</sub>','sen θ<sub>1</sub>')} = ${f('0,71','0,50')} ≈ 1,4</div><div class="eq">v<sub>2</sub> ≈ <span class="hl">1,4 v<sub>1</sub></span></div>`],
    ['Refringência', `<p>No meio 2 a luz é mais rápida: o meio 2 é <b>menos refringente</b>. Por isso o raio se afastou da normal.</p>`],
  ],
  alt:'Regra visual: ângulo maior com a normal ↔ luz mais rápida ↔ meio menos refringente. O ângulo é maior no meio 2.',
  warn:'Montar a razão ao contrário (sen 30°/sen 45°) dá 0,7 (alternativas c e d). Ângulo e velocidade “andam juntos”: o maior ângulo fica no meio de maior velocidade.',
  mod:'Original (UFRGS, exercício 8 da lista de Refração da apostila): 45° e 30°, luz do ar para um bloco. Modificada: 30° e 45°, com a luz se afastando da normal.'
},
{
  src:'PUCRS (modificada)', nivel:'intermediário',
  text:`Quando a luz branca atravessa um prisma de vidro, ela se separa em cores: é a dispersão da luz. A tabela mostra o índice de refração de um tipo de vidro para algumas cores.${tabela(['Cor','Índice de refração'],[['Vermelho','1,513'],['Amarelo','1,517'],['Verde','1,519'],['Azul','1,528'],['Violeta','1,532']])}Para a luz que atravessa esse vidro, é correto afirmar que:`,
  opts:['a luz vermelha é a que mais se desvia','a luz violeta é a mais rápida dentro do vidro','todas as cores têm a mesma velocidade dentro do vidro','a luz vermelha é a mais rápida dentro do vidro','a luz azul se desvia menos que a luz amarela'], ans:3,
  hint:'Como n e v estão relacionados? n = c/v.',
  steps:[
    ['Índice e velocidade', `<div class="eq">v = ${f('c','n')}</div><p>Quanto menor o índice, maior a velocidade. O vermelho tem o menor índice (1,513): é a cor <b>mais rápida</b> no vidro.</p>`],
    ['Desvio', `<p>Quanto maior o índice, maior o desvio: o violeta é o que mais se desvia, e o vermelho, o que menos se desvia. O azul (1,528) se desvia mais que o amarelo (1,517).</p>`],
  ],
  alt:'No vácuo todas as cores têm a mesma velocidade. Só dentro de um meio material elas ficam com velocidades (um pouco) diferentes, e é isso que separa as cores.',
  warn:'Maior índice não significa maior velocidade (alternativa b): é o contrário. O violeta, com o maior n, é o mais lento.',
  mod:'Original (PUCRS, exercício 9 da lista de Refração da apostila): mesma tabela, alternativas sobre o desvio. Modificada: alternativas sobre a velocidade de cada cor e o desvio.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:'Um bloco de material transparente, de índice de refração √2 ≈ 1,41, está no ar (n = 1,0). Para que um raio de luz sofra reflexão total na superfície do bloco, ele deve se propagar do ___ para o ___ e incidir com ângulo maior que o ângulo limite, que vale ___.',
  opts:['material; ar; 45°','ar; material; 45°','material; ar; 30°','material; ar; 60°','ar; material; 90°'], ans:0,
  hint:'A reflexão total só acontece quando a luz tenta sair para um meio menos refringente. Para o ângulo limite: sen L = n<sub>menor</sub>/n<sub>maior</sub>.',
  steps:[
    ['Sentido', `<p>A reflexão total exige luz indo do meio <b>mais</b> refringente (material) para o <b>menos</b> refringente (ar).</p>`],
    ['Ângulo limite', `<div class="eq">sen L = ${f('n<sub>ar</sub>','n<sub>material</sub>')} = ${f('1','√2')} = ${f('√2','2')} ≈ 0,71 ⇒ L = <span class="hl">45°</span></div>`],
  ],
  alt:'No ângulo limite, o raio refratado sai “rasante” à superfície (90° com a normal). Acima de L, não há mais refração: toda a luz é refletida.',
  warn:'Do ar para o material (alternativa b) a luz se aproxima da normal e sempre consegue entrar: não existe reflexão total nesse sentido.',
  mod:'Inédita (mesmo formato do exercício 10 da lista de Refração da apostila, que usava n = 2 e L = 30°).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Uma fibra óptica tem um núcleo de vidro por onde a luz se propaga, envolvido por uma casca também de vidro. A figura mostra um raio que se propaga dentro do núcleo.${FIG6_8}Considere as afirmações.<br>I. O núcleo é mais refringente que a casca.<br>II. A luz fica “presa” no núcleo porque o ângulo θ é maior que o ângulo limite núcleo–casca.<br>III. O ângulo limite núcleo–casca depende apenas do índice de refração do núcleo.<br>IV. A luz percorre a fibra por sucessivas reflexões totais.<br>Estão corretas:`,
  opts:['Apenas I e II','Apenas II e III','Apenas I, II e IV','Apenas I, III e IV','I, II, III e IV'], ans:2,
  hint:'Para haver reflexão total, de qual meio para qual meio a luz precisa ir? E a fórmula do ângulo limite usa quantos índices?',
  steps:[
    ['I e II', `<p>I. Correta: a reflexão total só ocorre se a luz vai do meio mais refringente (núcleo) para o menos refringente (casca).</p><p>II. Correta: com θ (medido a partir da normal) maior que o ângulo limite, não há refração para a casca, e toda a luz volta para o núcleo.</p>`],
    ['III e IV', `<div class="eq">sen L = ${f('n<sub>casca</sub>','n<sub>núcleo</sub>')}</div><p>III. Errada: L depende dos <b>dois</b> índices.</p><p>IV. Correta: é essa sequência de reflexões totais que guia a luz, mesmo com a fibra curvada.</p>`],
  ],
  alt:'É o mesmo motivo de, olhando de dentro de uma piscina, a superfície da água parecer um espelho a partir de certo ângulo.',
  warn:'Pela figura, θ parece um ângulo “grande”, e alguns acham que ele precisa ser menor que o limite. Para a reflexão total, θ tem de ser <b>maior</b> que L.',
  mod:'Inédita, inspirada no exercício 11 da lista de Refração da apostila (fibra óptica), com afirmações reescritas.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Um pescador, fora da água, vê um peixe parado dentro de um lago (figura).${peixe(false)}A posição em que o peixe <b>parece</b> estar é ___ que a real. Para acertá-lo com um arpão, o pescador deve mirar ___ da imagem; para atingi-lo com um feixe de laser, deve mirar ___ na imagem.`,
  opts:['mais funda; acima; diretamente','mais rasa; acima; abaixo','mais rasa; diretamente; abaixo','igual; diretamente; diretamente','mais rasa; abaixo; diretamente'], ans:4,
  hint:'A luz que sai do peixe passa da água para o ar e se afasta da normal. O olho “prolonga” o raio em linha reta. E o laser faz o caminho da luz ao contrário.',
  steps:[
    ['Onde o peixe parece estar', `<p>A luz do peixe se afasta da normal ao sair da água. O cérebro interpreta que a luz veio em linha reta, então a imagem aparece <b>mais rasa</b> (acima) do que o peixe real.</p>${peixe(true)}`],
    ['Arpão', `<p>O arpão anda em linha reta e não sofre refração: é preciso mirar <b>abaixo</b> da imagem, onde o peixe realmente está.</p>`],
    ['Laser', `<p>O laser é luz: ao entrar na água ele refrata exatamente pelo mesmo caminho, ao contrário (reversibilidade). Mirando <b>diretamente</b> na imagem, ele chega ao peixe.</p>`],
  ],
  alt:'É o mesmo efeito que faz uma piscina parecer mais rasa do que é, e um lápis dentro do copo parecer “quebrado”.',
  warn:'Muitos pensam que o laser também precisa mirar abaixo (alternativa b). Mas o laser segue o mesmo caminho da luz que chega ao olho, só que no sentido contrário.',
  mod:'Inédita.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Um prisma de vidro, cuja seção é o triângulo retângulo ABC da figura, está no ar (n = 1,0). Um raio de luz incide perpendicularmente à face AB.${prisma(false)}O menor índice de refração do vidro para que a luz <b>não</b> saia pela face BC é, aproximadamente (use sen 60° = 0,87):`,
  opts:['1,41','1,15','2,00','1,73','1,50'], ans:1,
  hint:'Na face AB o raio entra sem desviar (incidência normal). Descubra o ângulo de incidência na face BC pela geometria e exija reflexão total.',
  steps:[
    ['Entrando pela face AB', `<p>Incidência perpendicular (θ = 0°): o raio entra sem desviar e segue até a face BC.</p>`],
    ['Ângulo de incidência em BC', `<p>A normal a BC faz com o raio o mesmo ângulo que BC faz com AB, ou seja, o ângulo do vértice B: <b>60°</b>.</p>${prisma(true)}`],
    ['Condição de reflexão total', `<p>Para não sair por BC, 60° deve ser maior (ou igual) que o ângulo limite:</p><div class="eq">sen L ≤ sen 60° ⇒ ${f('1','n')} ≤ 0,87 ⇒ n ≥ ${f('1','0,87')} ≈ <span class="hl">1,15</span></div>`],
  ],
  alt:'Quanto maior n, menor o ângulo limite e mais fácil a reflexão total. Por isso basta um índice de 1,15, menor que o de qualquer vidro comum (cerca de 1,5): esse prisma funciona como um espelho.',
  warn:'1,41 é o resultado para um prisma de 45° (exercício 13 da apostila). Aqui o ângulo de incidência em BC é 60°.',
  mod:'Inédita, a partir do exercício 13 da lista de Refração da apostila, com outro ângulo no prisma.'
},
];
