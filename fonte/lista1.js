/* ===== Lista 1 · Ondulatória: conceitos iniciais e equação fundamental ===== */
const TOOLS1 = [
  ['Frequência e período', `f = ${f('n.º de oscilações','tempo')}<br>T = ${f('tempo','n.º de oscilações')} &nbsp; T = ${f('1','f')}`],
  ['Equação fundamental', `v = λ · f &nbsp;&nbsp; ou &nbsp;&nbsp; v = ${f('λ','T')}`],
  ['Elementos da onda', `Amplitude (A): do equilíbrio até a crista<br>Comprimento de onda (λ): de uma crista à seguinte`],
  ['Classificação', `Mecânica: precisa de meio material<br>Eletromagnética: não precisa de meio<br>Transversal: vibra ⊥ à propagação<br>Longitudinal: vibra ∥ à propagação`],
  ['Mudança de meio', `A frequência não muda (é a da fonte).<br>v e λ mudam na mesma proporção.`],
  ['Unidades', `1 Hz = 1 oscilação por segundo<br>1 cm = 0,01 m · 1 kHz = 1 000 Hz<br>km/h ÷ 3,6 → m/s`],
];

/* Q1: lago com boia */
const FIG1_1 = (() => {
  const pts = []; for (let x = 10; x <= 330; x += 4) pts.push([x, +(72 + 13 * Math.sin(2 * Math.PI * (x - 10) / 110)).toFixed(1)]);
  const yb = +(72 + 13 * Math.sin(2 * Math.PI * (178 - 10) / 110)).toFixed(1);
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 150', 'Corte de um lago: a superfície da água forma ondas que se propagam para a direita; uma pequena boia flutua no ponto P.',
    `${d}<path d="M${pts.map(p => p.join(' ')).join(' L')} L330 140 L10 140 Z" fill="var(--sign)" opacity=".16"/>
    <polyline points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="var(--sign)" stroke-width="3"/>
    <circle cx="178" cy="${yb - 7}" r="8" fill="var(--plot2)" stroke="var(--ink)" stroke-width="1.5"/>
    <text x="178" y="${yb - 22}" text-anchor="middle" class="pt pt-strong">P</text>
    <line x1="232" y1="24" x2="312" y2="24" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/>
    <text x="272" y="16" text-anchor="middle" class="pt">propagação</text>`);
})();

/* Q5: ola no estádio */
const FIG1_5 = (() => {
  let s = ''; const base = 118, n = 31, dx = 10, x0 = 20;
  for (let i = 0; i < n; i++){
    const x = x0 + i * dx, c = Math.cos(2 * Math.PI * (i - 3) / 25), up = c > 0 ? Math.pow(c, 3) : 0;
    const top = base - 22 - 26 * up;
    s += `<line x1="${x}" y1="${base}" x2="${x}" y2="${top.toFixed(1)}" stroke="var(--muted)" stroke-width="2"/><circle cx="${x}" cy="${(top - 4).toFixed(1)}" r="4" fill="var(--sign)"/>`;
  }
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 170', 'Fileira de torcedores: os que estão na crista da ola estão de pé, os demais sentados. Entre duas cristas seguidas há 25 intervalos entre torcedores; a distância entre dois torcedores vizinhos é 80 centímetros.',
    `${d}${s}<line x1="12" y1="${base}" x2="328" y2="${base}" stroke="var(--line)" stroke-width="2"/>
    <line x1="${x0 + 3*dx}" y1="34" x2="${x0 + 28*dx}" y2="34" stroke="var(--ink)" stroke-width="1.4" marker-start="${mk}" marker-end="${mk}"/>
    <text x="${x0 + 15.5*dx}" y="26" text-anchor="middle" class="pt pt-strong">λ (25 intervalos)</text>
    <line x1="${x0 + 14*dx}" y1="${base + 14}" x2="${x0 + 15*dx}" y2="${base + 14}" stroke="var(--ink)" stroke-width="1.2"/>
    <line x1="${x0 + 14*dx}" y1="${base + 9}" x2="${x0 + 14*dx}" y2="${base + 19}" stroke="var(--ink)"/><line x1="${x0 + 15*dx}" y1="${base + 9}" x2="${x0 + 15*dx}" y2="${base + 19}" stroke="var(--ink)"/>
    <text x="${x0 + 14.5*dx}" y="${base + 34}" text-anchor="middle" class="pt pt-strong">80 cm</text>`);
})();

/* Q10: tanque visto de cima */
const FIG1_10 = (() => {
  const [d, mk] = seta('var(--ink)'); let s = '';
  [16, 38, 60, 82, 104].forEach(r => { s += `<circle cx="150" cy="122" r="${r}" fill="none" stroke="var(--sign)" stroke-width="2.5"/>`; });
  return fig('0 0 340 244', 'Vista de cima de um tanque: cinco cristas circulares concêntricas em torno do ponto onde a gota cai. A distância entre a crista mais interna e a mais externa, ao longo de um raio, é 12 centímetros.',
    `${d}<rect x="34" y="8" width="232" height="228" rx="10" fill="var(--sign)" opacity=".08"/>${s}
    <circle cx="150" cy="122" r="3.5" fill="var(--ink)"/>
    <line x1="166" y1="122" x2="254" y2="122" stroke="var(--ink)" stroke-width="1.4" marker-start="${mk}" marker-end="${mk}"/>
    <rect x="186" y="104" width="48" height="16" rx="3" fill="var(--eq-bg)"/><text x="210" y="116" text-anchor="middle" class="pt pt-strong">12 cm</text>
    <text x="276" y="40" class="pt">5 cristas</text>`, 300);
})();

const QL1 = [
{
  src:'Inédita', nivel:'básico',
  text:`Uma onda se propaga para a direita na superfície de um lago, como mostra a figura. Uma pequena boia flutua no ponto P.${FIG1_1}Enquanto as ondas passam por ela, a boia:`,
  opts:['é arrastada para a direita, acompanhando a crista da onda','oscila, mas não é levada pela onda','fica parada, pois a onda passa por baixo dela','é arrastada para a esquerda, no sentido contrário ao da onda','afunda, pois a onda empurra a água para baixo'], ans:1,
  hint:'O que uma onda transporta de um lugar para outro: matéria ou energia?',
  steps:[
    ['O que a onda transporta', `<p>Uma onda transporta <b>energia</b> de um ponto a outro, mas <b>não transporta matéria</b>. A água (e o que flutua nela) só oscila em torno de onde já estava.</p>`],
    ['O movimento da boia', `<p>Quando a crista chega, a boia sobe; quando chega o vale, ela desce. Depois que a onda passa, ela está praticamente no mesmo lugar.</p><p>(Na água, as partículas fazem um pequeno vaivém em torno da posição de equilíbrio, mas não acompanham a onda.)</p>`],
  ],
  alt:'Pense na “ola” do estádio: a onda dá a volta na arquibancada, mas cada torcedor só levanta e senta no próprio lugar.',
  warn:'A crista parece “andar” para a direita, e é fácil achar que a boia vai junto (alternativa a). O que se desloca é a perturbação, não a água.',
  mod:'Inédita (mesma ideia da questão do Albert Einstein da Somativa 1: a onda não transporta matéria), com outro contexto e figura nova.'
},
{
  src:'EEAR (modificada)', nivel:'básico',
  text:`Um aluno montou a tabela abaixo para classificar algumas ondas quanto à natureza e à direção de vibração.${tabela(['Onda','Natureza','Vibração'],[['I. Som no ar','mecânica','longitudinal'],['II. Luz do Sol','eletromagnética','transversal'],['III. Onda numa corda de violão','mecânica','transversal'],['IV. Micro-ondas','mecânica','transversal']])}Estão corretas as linhas:`,
  opts:['Apenas I e II','Apenas II e III','Apenas I, II e III','Apenas II, III e IV','I, II, III e IV'], ans:2,
  hint:'Micro-ondas fazem parte do mesmo “grupo” que a luz. E o som: a vibração do ar vai e volta na mesma direção em que o som avança?',
  steps:[
    ['Linha I: som no ar', `<p>O som precisa de um meio (ar, água, sólidos): é <b>mecânico</b>. As camadas de ar vão e voltam na mesma direção em que o som avança: é <b>longitudinal</b>. ✓</p>`],
    ['Linhas II e III', `<p>A luz é <b>eletromagnética</b> e <b>transversal</b> (os campos elétrico e magnético oscilam perpendicularmente à propagação). ✓</p><p>Numa corda de violão, a corda vibra para os lados enquanto a onda corre ao longo dela: <b>mecânica e transversal</b>. ✓</p>`],
    ['Linha IV: micro-ondas', `<p>Micro-ondas são ondas <b>eletromagnéticas</b>, como a luz, e se propagam até no vácuo (é assim que os satélites se comunicam). Por isso a linha IV está errada.</p>`],
  ],
  alt:'Teste rápido para a natureza: “essa onda chega até nós vinda do espaço?”. Se sim (luz, micro-ondas, raios X), é eletromagnética. O som não atravessa o vácuo.',
  warn:'O forno de micro-ondas faz a comida vibrar e esquentar, mas isso não torna a micro-onda uma onda mecânica.',
  mod:'Original (EEAR): quatro afirmações em texto sobre ondas mecânicas, eletromagnéticas e longitudinais. Modificada: virou uma tabela de classificação com outros exemplos.'
},
{
  src:'UEA (modificada)', nivel:'básico',
  text:'Durante uma pescaria, um pescador percebe que seu barco, atingido por ondas iguais e igualmente espaçadas, sobe e desce 12 vezes em 30 segundos. A frequência e o período dessas ondas são, respectivamente:',
  opts:['2,5 Hz e 0,4 s','12 Hz e 30 s','0,4 Hz e 0,4 s','2,5 Hz e 2,5 s','0,4 Hz e 2,5 s'], ans:4,
  hint:'Frequência é quantas oscilações acontecem por segundo. Período é quanto tempo dura uma oscilação.',
  steps:[
    ['Dados', `<ul><li>12 oscilações</li><li>em 30 s</li></ul>`],
    ['Frequência', `<div class="eq">f = ${f('n.º de oscilações','tempo')} = ${f('12','30 s')} = <span class="hl">0,4 Hz</span></div>`],
    ['Período', `<div class="eq">T = ${f('tempo','n.º de oscilações')} = ${f('30 s','12')} = <span class="hl">2,5 s</span></div><p>Conferindo: T = ${f('1','f')} = ${f('1','0,4')} = 2,5 s ✓</p>`],
  ],
  alt:'Faz sentido? Se o barco sobe e desce 12 vezes em 30 s, cada oscilação leva um pouco mais de 2 s. Um período de 0,4 s seria um balanço frenético, mais de 2 por segundo.',
  warn:'Inverter a divisão (30 ÷ 12 para a frequência) leva à alternativa a. Frequência é sempre “quantas por segundo”: oscilações em cima, tempo embaixo.',
  mod:'Original (UEA, Somativa 1): 14 oscilações em 20 s, pedia só a frequência. Modificada: 12 oscilações em 30 s e pede frequência e período.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`A figura representa, num certo instante, o formato de uma corda por onde passa uma onda com velocidade de 24 m/s.${plot({aria:'Gráfico da corda: posição vertical y em centímetros por posição x em centímetros. Senoide com cristas em y igual a 3 centímetros nas posições x igual a 3 e 15 e 27 centímetros, e vales em y igual a menos 3 centímetros.', xmin:0, xmax:30, ymin:-4, ymax:4, xt:[0,3,6,9,12,15,18,21,24,27,30], yt:[-3,0,3], xl:'x (cm)', yl:'y (cm)', L:[{p:sen(3,12,0,30), c:'var(--sign)'}]})}A amplitude, o comprimento de onda e a frequência dessa onda são, respectivamente:`,
  opts:['6 cm, 12 cm e 200 Hz','3 cm, 12 cm e 2 Hz','3 cm, 6 cm e 400 Hz','3 cm, 12 cm e 200 Hz','6 cm, 24 cm e 100 Hz'], ans:3,
  hint:'A amplitude se mede a partir da linha de equilíbrio (y = 0). Para a frequência, passe λ para metros antes de usar v = λ · f.',
  steps:[
    ['Lendo o gráfico', `<ul><li>Amplitude: do equilíbrio (y = 0) até a crista (y = 3 cm) → <b>A = 3 cm</b></li><li>Cristas seguidas em x = 3 cm e x = 15 cm → <b>λ = 12 cm = 0,12 m</b></li></ul>`],
    ['Frequência', `<div class="eq">v = λ · f &nbsp;⇒&nbsp; f = ${f('v','λ')} = ${f('24 m/s','0,12 m')} = <span class="hl">200 Hz</span></div>`],
  ],
  alt:'Em 1 s a onda anda 24 m = 2 400 cm. Quantos comprimentos de onda de 12 cm cabem em 2 400 cm? 2 400 ÷ 12 = 200. São 200 oscilações por segundo.',
  warn:'Da crista ao vale são 6 cm, mas isso é o dobro da amplitude (alternativa a). E dividir 24 por 12 sem converter cm para m dá 2 Hz (alternativa b).',
  mod:'Inédita, no formato do exercício 8 da lista de Ondulatória da apostila (gráfico + v = λ·f), com outros valores.'
},
{
  src:'Enem (modificada)', nivel:'intermediário',
  text:`Uma manifestação comum das torcidas em estádios de futebol é a <i>ola</i>. Os torcedores de uma linha, sem sair do lugar, levantam e sentam sincronizados com os da linha vizinha, e o efeito se propaga pela arquibancada como uma onda.${FIG1_5}Suponha que essa “onda humana” se propague a 36 km/h e que, entre duas cristas seguidas, haja 25 intervalos entre torcedores, cada um de 80 cm. A frequência dessa onda, em hertz, é:`,
  opts:['1,8','0,5','2,0','0,4','1,4'], ans:1,
  hint:'Monte o comprimento de onda a partir dos torcedores (em metros) e passe a velocidade para m/s.',
  steps:[
    ['Comprimento de onda', `<div class="eq">λ = 25 × 0,80 m = 20 m</div>`],
    ['Velocidade em m/s', `<div class="eq">v = 36 km/h ÷ 3,6 = 10 m/s</div>`],
    ['Frequência', `<div class="eq">f = ${f('v','λ')} = ${f('10 m/s','20 m')} = <span class="hl">0,5 Hz</span></div><p>Cada torcedor levanta e senta uma vez a cada 2 s, o que é bem realista.</p>`],
  ],
  alt:'A crista anda 10 m por segundo e precisa andar 20 m para que a próxima crista chegue ao mesmo torcedor. Isso leva 2 s (o período). Então f = 1/2 = 0,5 Hz.',
  warn:'Usar 36 direto (sem converter km/h) dá 36 ÷ 20 = 1,8 (alternativa a). E inverter a fórmula (λ ÷ v) dá 2,0, que é o período, não a frequência.',
  mod:'Original (Enem): 45 km/h, 16 pessoas por período, 80 cm entre elas; resposta ≈ 1,0 Hz. Modificada: 36 km/h e 25 intervalos de 80 cm; resposta 0,5 Hz.'
},
{
  src:'PUCRS (modificada)', nivel:'intermediário',
  text:'Um estudante está num barco ancorado num lago. Uma brisa leve forma pequenas ondas que fazem oscilar uma folha flutuando perto do barco. Ele estima que a distância entre duas cristas sucessivas é de 1,5 m e que passam pela folha 24 cristas por minuto. A frequência e a velocidade de propagação dessas ondas são, respectivamente:',
  opts:['24 Hz e 36 m/s','0,4 Hz e 3,75 m/s','2,5 Hz e 3,75 m/s','0,4 Hz e 1,5 m/s','0,4 Hz e 0,6 m/s'], ans:4,
  hint:'“Por minuto” não é hertz. Quantas cristas passam por segundo?',
  steps:[
    ['Dados', `<ul><li>λ = 1,5 m (distância entre cristas sucessivas)</li><li>24 cristas por minuto</li></ul>`],
    ['Frequência em Hz', `<div class="eq">f = ${f('24','60 s')} = <span class="hl">0,4 Hz</span></div>`],
    ['Velocidade', `<div class="eq">v = λ · f = 1,5 × 0,4 = <span class="hl">0,6 m/s</span></div>`],
  ],
  alt:`Pelo período: T = ${f('60 s','24')} = 2,5 s. A crista anda um λ (1,5 m) em um período: v = ${f('1,5 m','2,5 s')} = 0,6 m/s.`,
  warn:'2,5 s é o período, não a frequência (alternativa c). E dividir λ pela frequência (1,5 ÷ 0,4 = 3,75) é usar a fórmula de trás para frente (alternativa b).',
  mod:'Original (PUCRS): cristas a 40 cm e 30 cristas por minuto. Modificada: 1,5 m e 24 cristas por minuto.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Um alto-falante na borda de uma piscina emite um som de 500 Hz. Parte desse som passa do ar para a água. Use a tabela.${tabela(['Meio','Velocidade do som'],[['Ar (20 °C)','340 m/s'],['Água','1 450 m/s']])}Na água, a frequência e o comprimento de onda desse som são, aproximadamente:`,
  opts:['500 Hz e 0,68 m','2 132 Hz e 0,68 m','500 Hz e 0,34 m','500 Hz e 2,9 m','117 Hz e 2,9 m'], ans:3,
  hint:'Quem define a frequência é a fonte. Quando a onda muda de meio, o que muda é a velocidade e, com ela, o comprimento de onda.',
  steps:[
    ['A frequência não muda', `<p>A frequência é imposta pelo alto-falante: 500 vibrações por segundo no ar continuam sendo 500 por segundo na água. <b>f = 500 Hz</b>.</p>`],
    ['Comprimento de onda na água', `<div class="eq">λ<sub>água</sub> = ${f('v<sub>água</sub>','f')} = ${f('1 450 m/s','500 Hz')} = <span class="hl">2,9 m</span></div>`],
    ['Comparando com o ar', `<div class="eq">λ<sub>ar</sub> = ${f('340','500')} = 0,68 m</div><p>Na água o som é mais rápido, então λ fica maior, na mesma proporção.</p>`],
  ],
  alt:'Imagine uma fila de pessoas passando por uma porta (a fronteira) num ritmo fixo: quantas passam por segundo não muda. Se do outro lado elas andam mais rápido, ficam mais espaçadas: λ maior.',
  warn:'Achar que λ continua 0,68 m (alternativa a) ou que a frequência muda (alternativas b e e) são os erros mais comuns. Na mudança de meio, só v e λ mudam.',
  mod:'Inédita. Usa a velocidade do som na água (1 450 m/s) que já apareceu na Somativa 1.'
},
{
  src:'EEAR (modificada)', nivel:'avançado',
  text:`O gráfico mostra como a posição vertical de <b>um ponto</b> de uma corda varia com o <b>tempo</b> enquanto uma onda periódica passa por ele.${plot({aria:'Gráfico da posição vertical y em centímetros por tempo t em segundos. Senoide de amplitude 5 centímetros que se repete a cada 0,4 segundo, de t igual a 0 até t igual a 1 segundo.', xmin:0, xmax:1, ymin:-6, ymax:6, xt:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1], yt:[-5,0,5], xl:'t (s)', yl:'y (cm)', L:[{p:sen(5,0.4,0,1), c:'var(--sign)'}]})}Sabendo que o comprimento de onda é 2,0 m, a velocidade de propagação da onda é:`,
  opts:['5,0 m/s','0,8 m/s','2,5 m/s','10 m/s','0,2 m/s'], ans:0,
  hint:'Repare no eixo horizontal: é tempo, não posição. O que o gráfico mostra a cada 0,4 s?',
  steps:[
    ['Que gráfico é esse?', `<p>O eixo horizontal é o <b>tempo</b>. A distância de um “pico” ao próximo nesse gráfico não é λ: é o tempo de uma oscilação completa, o <b>período</b>.</p>`],
    ['Lendo o período', `<p>O movimento se repete a cada 0,4 s: <b>T = 0,4 s</b>.</p>`],
    ['Velocidade', `<div class="eq">v = ${f('λ','T')} = ${f('2,0 m','0,4 s')} = <span class="hl">5,0 m/s</span></div>`],
  ],
  alt:`Pela frequência: f = ${f('1','0,4 s')} = 2,5 Hz e v = λ · f = 2,0 × 2,5 = 5,0 m/s.`,
  warn:'Do pico ao vale passam 0,2 s, que é só meio período: usar 0,2 s dá 10 m/s (alternativa d). E 2,5 é a frequência em Hz, não a velocidade (alternativa c).',
  mod:'Original (EEAR): papel quadriculado com eixo de tempo e λ = 8 m. Modificada: gráfico novo com T = 0,4 s e λ = 2,0 m.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`O gráfico mostra a mesma corda em dois instantes: t = 0 (linha contínua) e t = 0,5 s (linha tracejada). A onda se propaga para a direita e, entre os dois instantes, andou <b>menos</b> que um comprimento de onda.${plot({aria:'Gráfico y em centímetros por x em metros. Linha contínua, em t igual a zero: senoide com cristas em x igual a 1,5 e 7,5 metros. Linha tracejada, em t igual a 0,5 segundo: a mesma senoide deslocada, com cristas em x igual a 3 e 9 metros.', xmin:0, xmax:12, ymin:-3, ymax:3, xt:[0,1.5,3,4.5,6,7.5,9,10.5,12], yt:[-2,0,2], xl:'x (m)', yl:'y (cm)', L:[{p:sen(2,6,0,12), c:'var(--sign)'},{p:sen(2,6,0,12,-Math.PI/2), c:'var(--plot2)', dash:'7 5'}]})}A velocidade de propagação e a frequência da onda são, respectivamente:`,
  opts:['3 m/s e 0,5 Hz','3 m/s e 2 Hz','12 m/s e 2 Hz','9 m/s e 1,5 Hz','1,5 m/s e 0,25 Hz'], ans:0,
  hint:'Escolha uma crista da linha contínua e encontre para onde ela foi na linha tracejada (para a direita, menos de um λ).',
  steps:[
    ['Comprimento de onda', `<p>Cristas da linha contínua em x = 1,5 m e x = 7,5 m: <b>λ = 6 m</b>.</p>`],
    ['Quanto a onda andou', `<p>A crista que estava em 1,5 m aparece em 3,0 m na linha tracejada. Em 0,5 s, a onda andou <b>1,5 m</b> para a direita.</p><div class="eq">v = ${f('Δx','Δt')} = ${f('1,5 m','0,5 s')} = <span class="hl">3 m/s</span></div>`],
    ['Frequência', `<div class="eq">f = ${f('v','λ')} = ${f('3 m/s','6 m')} = <span class="hl">0,5 Hz</span></div>`],
  ],
  alt:'1,5 m é um quarto de λ. Então 0,5 s é um quarto do período: T = 4 × 0,5 = 2 s e f = 1/2 = 0,5 Hz. Depois, v = λ/T = 6/2 = 3 m/s.',
  warn:'Se você ligou a crista de 1,5 m à crista de 9 m (ou supôs a onda indo para a esquerda), achou 4,5 m de deslocamento e 9 m/s (alternativa d). O enunciado diz: para a direita e menos de um λ.',
  mod:'Inédita (duas “fotos” da mesma onda).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Uma torneira pinga no centro de um tanque com água, formando ondas circulares. A figura mostra o tanque visto de cima num certo instante.${FIG1_10}A torneira pinga 2 gotas por segundo e cada gota produz uma crista. A distância entre a crista mais interna e a mais externa, ao longo de um raio, é 12 cm. A velocidade de propagação das ondas é:`,
  opts:['4,8 cm/s','24 cm/s','6 cm/s','1,5 cm/s','3 cm/s'], ans:2,
  hint:'Conte os espaços entre as cristas, e não as cristas. Cinco cristas formam quantos comprimentos de onda?',
  steps:[
    ['Comprimento de onda', `<p>Entre 5 cristas há <b>4</b> espaços, e cada espaço é um λ:</p><div class="eq">λ = ${f('12 cm','4')} = 3 cm</div>`],
    ['Frequência', `<p>Cada gota gera uma crista: 2 gotas por segundo → <b>f = 2 Hz</b>.</p>`],
    ['Velocidade', `<div class="eq">v = λ · f = 3 cm × 2 Hz = <span class="hl">6 cm/s</span></div>`],
  ],
  alt:'Em 1 s caem 2 gotas, então a crista mais nova leva 0,5 s para “virar” a anterior, e nesse tempo cada crista anda um λ = 3 cm. v = 3 cm / 0,5 s = 6 cm/s.',
  warn:'Dividir 12 cm por 5 cristas (λ = 2,4 cm) leva a 4,8 cm/s (alternativa a). É o mesmo erro de contar os postes em vez dos espaços entre eles.',
  mod:'Inédita (inspirada no tanque de ondas da questão da Unesp da apostila).'
},
];
