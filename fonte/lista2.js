/* ===== Lista 2 · Fenômenos ondulatórios ===== */
const TOOLS2 = [
  ['Reflexão', `A onda bate e volta ao mesmo meio.<br>Ângulo de incidência = ângulo de reflexão<br>Eco: d = ${f('v · t','2')} (ida e volta)`],
  ['Refração', `A onda muda de meio: v e λ mudam,<br><b>f não muda</b> (é a da fonte).`],
  ['Difração', `A onda contorna obstáculos e se espalha ao passar por fendas. É mais intensa quando λ é parecido com o tamanho da abertura.`],
  ['Interferência', `Crista + crista: construtiva (reforço)<br>Crista + vale: destrutiva (cancelamento)<br>Fontes em fase: Δd = 1λ, 2λ, 3λ… → construtiva; Δd = 0,5λ, 1,5λ, 2,5λ… → destrutiva`],
  ['Polarização', `Filtra uma direção de vibração.<br>Só acontece com ondas <b>transversais</b>.`],
  ['Equação fundamental', `v = λ · f &nbsp;&nbsp; c = 3,0 · 10<sup>8</sup> m/s<br>1 nm = 10<sup>−9</sup> m · 1 MHz = 10<sup>6</sup> Hz`],
];

const arco = (cx, cy, r, a1, a2) => { const p = a => [(cx + r * Math.cos(a * Math.PI / 180)).toFixed(1), (cy + r * Math.sin(a * Math.PI / 180)).toFixed(1)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); return `M${x1} ${y1} A${r} ${r} 0 0 1 ${x2} ${y2}`; };

/* Q1: porta e difração (vista de cima) */
const FIG2_1 = (() => {
  let s = '';
  [52, 84, 116, 148].forEach(x => { s += `<line x1="${x}" y1="18" x2="${x}" y2="182" stroke="var(--sign)" stroke-width="2.5"/>`; });
  [26, 56, 86, 116].forEach(r => { s += `<path d="${arco(170, 100, r, -78, 78)}" fill="none" stroke="var(--sign)" stroke-width="2.5"/>`; });
  return fig('0 0 340 200', 'Vista de cima: na sala, à esquerda, frentes de onda retas chegam à parede. Elas passam pela porta aberta e, no corredor, à direita, se espalham em semicírculos e chegam até a aluna, que está atrás da parede, fora da linha da porta.',
    `<rect x="164" y="8" width="12" height="74" fill="var(--ink)"/><rect x="164" y="118" width="12" height="74" fill="var(--ink)"/>${s}
    <text x="100" y="196" text-anchor="middle" class="pt">sala</text><text x="262" y="196" text-anchor="middle" class="pt">corredor</text>
    <text x="196" y="104" class="pt pt-strong">porta</text>
    <circle cx="258" cy="166" r="7" fill="var(--plot2)" stroke="var(--ink)" stroke-width="1.5"/><text x="270" y="170" class="pt pt-strong">aluna</text>`);
})();

/* Q2: dois filtros polarizadores */
const FIG2_2 = (() => {
  const [d, mk] = seta('var(--ink)');
  let h1 = '', h2 = '';
  for (let y = 36; y <= 112; y += 8) h2 += `<line x1="214" y1="${y}" x2="230" y2="${y}" stroke="var(--ink)" stroke-width="1.2"/>`;
  for (let x = 110; x <= 124; x += 4) h1 += `<line x1="${x}" y1="32" x2="${x}" y2="116" stroke="var(--ink)" stroke-width="1.2"/>`;
  return fig('0 0 340 160', 'Uma lâmpada emite luz que vibra em todas as direções. O filtro 1, de fendas verticais, deixa passar só a vibração vertical. O filtro 2, de fendas horizontais, girado 90 graus, bloqueia essa luz: depois dele quase não há luz.',
    `${d}<line x1="34" y1="74" x2="214" y2="74" stroke="var(--lane)" stroke-width="5" opacity=".9"/>
    <circle cx="24" cy="74" r="12" fill="var(--lane)" stroke="var(--ink)" stroke-width="1.5"/>
    <g stroke="var(--ink)" stroke-width="1.6"><line x1="72" y1="58" x2="72" y2="90" marker-start="${mk}" marker-end="${mk}"/><line x1="56" y1="74" x2="88" y2="74" marker-start="${mk}" marker-end="${mk}"/><line x1="61" y1="63" x2="83" y2="85" marker-start="${mk}" marker-end="${mk}"/></g>
    <rect x="106" y="28" width="22" height="92" rx="3" fill="var(--sign)" opacity=".18" stroke="var(--sign)"/>${h1}
    <line x1="170" y1="56" x2="170" y2="92" stroke="var(--ink)" stroke-width="1.6" marker-start="${mk}" marker-end="${mk}"/>
    <rect x="210" y="28" width="24" height="92" rx="3" fill="var(--sign)" opacity=".18" stroke="var(--sign)"/>${h2}
    <line x1="240" y1="74" x2="318" y2="74" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="3 5"/>
    <text x="117" y="140" text-anchor="middle" class="pt pt-strong">filtro 1</text><text x="222" y="140" text-anchor="middle" class="pt pt-strong">filtro 2</text>
    <text x="222" y="154" text-anchor="middle" class="pt">(girado 90°)</text><text x="282" y="62" text-anchor="middle" class="pt">escuro</text>`);
})();

/* Q3: película fina */
const FIG2_3 = (() => {
  const [d, mk] = seta('var(--ray)');
  return fig('0 0 340 160', 'Corte de uma película fina, como a parede de uma bolha de sabão. Um raio de luz incide de cima. Parte dele volta já na superfície de cima (raio 1); outra parte entra na película, volta na superfície de baixo e sai por cima (raio 2), paralela ao raio 1. Os dois raios se superpõem.',
    `${d}<rect x="10" y="78" width="320" height="34" fill="var(--sign)" opacity=".2"/><line x1="10" y1="78" x2="330" y2="78" stroke="var(--sign)" stroke-width="1.5"/><line x1="10" y1="112" x2="330" y2="112" stroke="var(--sign)" stroke-width="1.5"/>
    <g fill="none" stroke="var(--ray)" stroke-width="2.4">
      <line x1="56" y1="12" x2="122" y2="78" marker-end="${mk}"/>
      <line x1="122" y1="78" x2="186" y2="14" marker-end="${mk}"/>
      <polyline points="122,78 143,112 164,78"/>
      <line x1="164" y1="78" x2="228" y2="14" marker-end="${mk}"/>
    </g>
    <text x="190" y="12" class="pt pt-strong">1</text><text x="232" y="12" class="pt pt-strong">2</text>
    <text x="262" y="100" class="pt">película</text><text x="20" y="140" class="pt">ar</text><text x="20" y="66" class="pt">ar</text>`);
})();

/* Q5: tanque com região funda e rasa (vista de cima) */
const FIG2_5 = (() => {
  const [d, mk] = seta('var(--ink)'); let s = '';
  [10, 50, 90, 130, 170].forEach(x => { s += `<line x1="${x}" y1="40" x2="${x}" y2="150" stroke="var(--sign)" stroke-width="2.5"/>`; });
  [195, 220, 245, 270, 295, 320].forEach(x => { s += `<line x1="${x}" y1="40" x2="${x}" y2="150" stroke="var(--sign)" stroke-width="2.5"/>`; });
  return fig('0 0 340 182', 'Vista de cima de um tanque de ondas. À esquerda, região funda, com frentes de onda retas separadas por 4,0 centímetros. À direita, região rasa, com frentes separadas por 2,5 centímetros. As ondas vão da esquerda para a direita.',
    `${d}<rect x="4" y="40" width="166" height="110" fill="var(--sign)" opacity=".1"/><rect x="170" y="40" width="166" height="110" fill="var(--sign)" opacity=".26"/>${s}
    <line x1="50" y1="30" x2="90" y2="30" stroke="var(--ink)" stroke-width="1.3" marker-start="${mk}" marker-end="${mk}"/><text x="70" y="22" text-anchor="middle" class="pt pt-strong">4,0 cm</text>
    <line x1="245" y1="30" x2="270" y2="30" stroke="var(--ink)" stroke-width="1.3" marker-start="${mk}" marker-end="${mk}"/><text x="257" y="22" text-anchor="middle" class="pt pt-strong">2,5 cm</text>
    <text x="88" y="170" text-anchor="middle" class="pt">região funda</text><text x="254" y="170" text-anchor="middle" class="pt">região rasa</text>
    <line x1="140" y1="12" x2="200" y2="12" stroke="var(--ink)" stroke-width="1.8" marker-end="${mk}"/>`);
})();

/* Q8: morcego e inseto */
const FIG2_8 = (() => {
  const [d, mk] = seta('var(--ink)'); let s = '';
  [72, 90, 108].forEach((x, k) => { s += `<path d="${arco(x - 30, 70, 30 + 0 * k, -40, 40)}" fill="none" stroke="var(--sign)" stroke-width="2.2"/>`; });
  [262, 244, 226].forEach(x => { s += `<path d="${arco(x + 30, 70, 30, 140, 220)}" fill="none" stroke="var(--plot2)" stroke-width="2.2" stroke-dasharray="5 4"/>`; });
  return fig('0 0 340 150', 'Um morcego, à esquerda, emite pulsos de ultrassom (arcos contínuos) em direção a um inseto, à direita. O eco volta do inseto para o morcego (arcos tracejados). A distância d entre eles é desconhecida.',
    `${d}<path d="M14 66 Q24 52 30 64 Q36 56 42 66 Q48 56 54 64 Q60 52 70 66 Q56 74 42 82 Q28 74 14 66 Z" fill="var(--ink)"/>
    <ellipse cx="300" cy="70" rx="9" ry="5" fill="var(--ink)"/><ellipse cx="296" cy="62" rx="6" ry="4" fill="none" stroke="var(--ink)"/><ellipse cx="304" cy="62" rx="6" ry="4" fill="none" stroke="var(--ink)"/>${s}
    <text x="100" y="28" text-anchor="middle" class="pt">emissão</text><text x="240" y="28" text-anchor="middle" class="pt">eco</text>
    <line x1="42" y1="122" x2="300" y2="122" stroke="var(--ink)" stroke-width="1.3" marker-start="${mk}" marker-end="${mk}"/><text x="171" y="140" text-anchor="middle" class="pt pt-strong">d</text>`);
})();

/* Q10: dois alto-falantes */
const FIG2_10 = (() => {
  const fal = (x, y, n) => `<rect x="${x-16}" y="${y-9}" width="12" height="18" fill="var(--ink)"/><path d="M${x-4} ${y-9} L${x+10} ${y-18} L${x+10} ${y+18} L${x-4} ${y+9} Z" fill="var(--ink)"/><text x="${x-6}" y="${y+34}" text-anchor="middle" class="pt pt-strong">${n}</text>`;
  return fig('0 0 340 210', 'Dois alto-falantes, F1 em cima e F2 embaixo, à esquerda, e um ponto P à direita. P está a 4,0 metros de F1 e a 5,5 metros de F2. Figura fora de escala.',
    `${fal(48, 40, 'F1')}${fal(48, 160, 'F2')}
    <line x1="62" y1="40" x2="292" y2="84" stroke="var(--sign)" stroke-width="2" stroke-dasharray="6 4"/><line x1="62" y1="160" x2="292" y2="84" stroke="var(--plot2)" stroke-width="2" stroke-dasharray="6 4"/>
    <circle cx="296" cy="84" r="6" fill="var(--ink)"/><text x="306" y="80" class="pt pt-strong">P</text>
    <text x="176" y="50" text-anchor="middle" class="pt pt-strong">4,0 m</text><text x="176" y="142" text-anchor="middle" class="pt pt-strong">5,5 m</text>
    <text x="330" y="204" text-anchor="end" class="pt">(fora de escala)</text>`);
})();

const QL2 = [
{
  src:'Inédita', nivel:'básico',
  text:`Uma aluna está no corredor, encostada na parede, e não consegue ver os colegas que conversam dentro da sala. Mesmo assim, ela ouve a conversa pela porta aberta. A figura (vista de cima) mostra o que acontece com as ondas sonoras.${FIG2_1}O fenômeno que faz o som se espalhar para os lados logo depois de passar pela porta, chegando até a aluna, é a:`,
  opts:['reflexão','refração','difração','polarização','dispersão'], ans:2,
  hint:'Repare nas frentes de onda depois da porta: elas deixam de ser retas e “abrem” para os lados.',
  steps:[
    ['O que a figura mostra', `<p>As frentes de onda passam pela abertura e se espalham, contornando as bordas da porta. Esse é o fenômeno da <b>difração</b>.</p>`],
    ['Por que o som difrata e a luz não', `<p>A difração fica forte quando o comprimento de onda é parecido com o tamanho da abertura. O som da voz tem λ de dezenas de centímetros a alguns metros, parecido com uma porta. A luz tem λ de centenas de nanômetros, milhões de vezes menor. Por isso o som “dobra a esquina” e a luz, praticamente, não.</p>`],
  ],
  alt:'É por isso que você ouve uma ambulância antes de vê-la virar a esquina.',
  warn:'Num corredor real o som também reflete nas paredes, mas o que a figura mostra (a onda se abrindo logo depois da porta) é a difração.',
  mod:'Inédita (mesma ideia da questão 18 da lista de Ondulatória da apostila: ondas contornando obstáculos).'
},
{
  src:'Inédita', nivel:'básico',
  text:`Num experimento, a luz de uma lâmpada passa por dois filtros polarizadores. Com os dois filtros alinhados, a luz atravessa. Quando o filtro 2 é girado 90°, a luz é praticamente bloqueada, como mostra a figura.${FIG2_2}Esse experimento mostra que a luz é uma onda:`,
  opts:['transversal','longitudinal','mecânica','estacionária','que precisa de um meio material'], ans:0,
  hint:'Só faz sentido “filtrar uma direção de vibração” se a onda vibrar perpendicularmente à direção em que avança.',
  steps:[
    ['O que o filtro faz', `<p>O filtro 1 deixa passar só a vibração numa direção (vertical, na figura): a luz sai <b>polarizada</b>. O filtro 2, girado 90°, só aceita a vibração horizontal, e a luz que chega não tem essa vibração: ela é bloqueada.</p>`],
    ['Conclusão', `<p>A luz vibra em direções perpendiculares à direção em que se propaga. Logo, ela é uma onda <b>transversal</b>. Uma onda longitudinal (como o som) vibra na própria direção de propagação e não pode ser polarizada.</p>`],
  ],
  alt:'Pense numa corda passando por uma grade de ripas verticais: uma onda que faz a corda subir e descer passa; uma que faz a corda ir para os lados é barrada. Com uma onda que só vai e volta ao longo da corda (longitudinal), a grade não faria diferença.',
  warn:'A luz não é mecânica nem precisa de meio: ela chega do Sol atravessando o vácuo. As alternativas c e e misturam luz e som.',
  mod:'Inédita (amplia o exercício 6 da lista de Óptica da apostila: “A polarização é uma propriedade de…”).'
},
{
  src:'Fuvest (modificada)', nivel:'básico',
  text:`As cores que aparecem numa bolha de sabão, ou numa mancha de óleo sobre o asfalto molhado, mudam conforme o ângulo de observação. Elas surgem porque a luz que volta da superfície de cima da película fina se superpõe à luz que volta da superfície de baixo (raios 1 e 2 da figura).${FIG2_3}Os fenômenos físicos diretamente relacionados a essas cores são:`,
  opts:['dilatação e reflexão','interferência e dilatação','difração e convecção','reflexão e interferência','polarização e convecção'], ans:3,
  hint:'Primeiro: o que acontece com a luz quando ela “volta” de uma superfície? Depois: que nome tem a superposição de duas ondas?',
  steps:[
    ['Reflexão', `<p>Os raios 1 e 2 voltam das superfícies da película: isso é <b>reflexão</b>.</p>`],
    ['Interferência', `<p>Os dois raios refletidos se superpõem. Dependendo da espessura da película e da cor (comprimento de onda), eles se reforçam ou se cancelam: é a <b>interferência</b>. Cada cor é reforçada num ponto diferente, e por isso aparecem faixas coloridas que mudam com o ângulo.</p>`],
  ],
  alt:'O mesmo efeito aparece na parte de trás de um CD ou nas asas de algumas borboletas (iridescência).',
  warn:'Dilatação e convecção são fenômenos térmicos: não têm relação com as cores.',
  mod:'Original (Fuvest, Somativa 1): iridescência nas asas de borboletas. Modificada: bolha de sabão e mancha de óleo, com figura da película e alternativas trocadas.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Fones com cancelamento ativo de ruído captam o som do ambiente com um microfone e emitem, no próprio alto-falante, uma onda sonora de mesma frequência e mesma amplitude que o ruído, mas em oposição de fase, como no gráfico.${plot({aria:'Gráfico de pressão por tempo com duas senoides de mesma amplitude e frequência: a do ruído, contínua, e a emitida pelo fone, tracejada. Onde uma tem crista, a outra tem vale.', xmin:0, xmax:4, ymin:-1.4, ymax:1.4, xt:[0,1,2,3,4], noxl:true, yt:[], xl:'tempo', yl:'pressão', L:[{p:sen(1,2,0,4), c:'var(--sign)'},{p:sen(-1,2,0,4), c:'var(--plot2)', dash:'7 5'}], ann:[[0.55,1.22,'ruído','middle','var(--sign)'],[1.55,1.22,'fone','middle','var(--plot2)']]})}O fenômeno explorado e o resultado no ouvido são:`,
  opts:['difração, que desvia o ruído para longe do ouvido','interferência destrutiva, que reduz o ruído','interferência construtiva, que dobra a amplitude','refração, que faz o ruído ser absorvido no fone','polarização, que bloqueia uma direção do ruído'], ans:1,
  hint:'O que acontece quando a crista de uma onda encontra o vale de outra, de mesma amplitude?',
  steps:[
    ['Superposição', `<p>No ouvido chegam as duas ondas ao mesmo tempo. Onde uma tem crista, a outra tem vale: as perturbações se somam e se anulam.</p>${plot({aria:'Soma das duas ondas: uma linha praticamente reta, no zero.', xmin:0, xmax:4, ymin:-1.4, ymax:1.4, xt:[0,1,2,3,4], noxl:true, yt:[], xl:'tempo', yl:'soma', L:[{p:[[0,0],[4,0]], c:'var(--ok)', w:4}]})}`],
    ['Nome do fenômeno', `<p>Superposição com cancelamento é <b>interferência destrutiva</b>. O ruído (principalmente o grave e constante, como o do motor de um avião) fica muito mais fraco.</p>`],
  ],
  alt:'É a mesma ideia de somar +1 com −1: as duas ondas existem, mas a soma delas, no ouvido, é quase zero.',
  warn:'Interferência construtiva (alternativa c) acontece quando crista encontra crista, ou seja, ondas em fase. Aqui elas estão em oposição de fase.',
  mod:'Inédita.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Num tanque de ondas, uma régua vibra com frequência de 3 Hz e produz ondas retas que passam de uma região funda para uma região rasa (figura, vista de cima).${FIG2_5}A velocidade das ondas na região rasa é:`,
  opts:['12 cm/s','0,83 cm/s','19,2 cm/s','4,8 cm/s','7,5 cm/s'], ans:4,
  hint:'Ao passar de uma região para a outra, a frequência continua 3 Hz. Use o comprimento de onda da região rasa.',
  steps:[
    ['A frequência não muda', `<p>Quem define a frequência é a régua: <b>f = 3 Hz</b> nas duas regiões. Mudou a velocidade e, com ela, o comprimento de onda: é uma <b>refração</b>.</p>`],
    ['Velocidade na região rasa', `<div class="eq">v<sub>rasa</sub> = λ<sub>rasa</sub> · f = 2,5 cm × 3 Hz = <span class="hl">7,5 cm/s</span></div>`],
    ['Conferindo com a região funda', `<div class="eq">v<sub>funda</sub> = 4,0 × 3 = 12 cm/s</div><p>Na região rasa a onda fica mais lenta, e λ diminui na mesma proporção.</p>`],
  ],
  alt:`Por proporção: com f fixa, v e λ são proporcionais. ${f('v<sub>rasa</sub>','12')} = ${f('2,5','4,0')} ⇒ v<sub>rasa</sub> = 7,5 cm/s.`,
  warn:'12 cm/s é a velocidade na região funda (alternativa a). A pergunta é sobre a rasa.',
  mod:'Inédita (inspirada no exercício 17 da lista de Ondulatória da apostila, sobre profundidade e velocidade).'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Associe cada situação ao fenômeno ondulatório que melhor a explica.${tabela(['','Situação'],[['1','Ouvir o próprio eco ao gritar diante de um paredão'],['2','Um canudo parece “quebrado” dentro de um copo com água'],['3','Sintonizar uma rádio AM num vale cercado de morros'],['4','Óculos especiais reduzirem o brilho refletido pelo asfalto']], true)}A sequência correta, de 1 a 4, é:`,
  opts:['refração, reflexão, difração, polarização','reflexão, difração, refração, polarização','reflexão, refração, difração, polarização','reflexão, refração, polarização, difração','difração, refração, reflexão, polarização'], ans:2,
  hint:'Eco é som que bateu e voltou. O canudo “quebra” exatamente na superfície da água, onde a luz muda de meio.',
  steps:[
    ['1 e 2', `<ul><li><b>Eco</b>: o som bate no paredão e volta → reflexão.</li><li><b>Canudo “quebrado”</b>: a luz que vem da parte submersa muda de direção ao passar da água para o ar → refração.</li></ul>`],
    ['3 e 4', `<ul><li><b>Rádio AM no vale</b>: as ondas AM têm λ de centenas de metros e contornam os morros → difração.</li><li><b>Óculos polarizados</b>: a luz refletida pelo asfalto vibra principalmente numa direção, e a lente filtra essa direção → polarização.</li></ul>`],
  ],
  alt:'Uma forma de lembrar: reflexão = volta; refração = muda de meio (e de direção); difração = contorna; polarização = filtra a direção de vibração.',
  warn:'Refração e reflexão têm nomes parecidos e costumam ser trocadas (alternativa a). Se a onda muda de meio, é refração.',
  mod:'Inédita.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:'Uma rádio AM transmite em 1 000 kHz e uma rádio FM em 100 MHz. Uma pessoa que mora num vale cercado por morros sintoniza bem a AM, mas a FM chega com muitas falhas. Sendo a velocidade das ondas de rádio igual a 3,0 · 10<sup>8</sup> m/s, os comprimentos de onda e a melhor explicação são:',
  opts:['AM: 300 m; FM: 3 m. A AM difrata mais nos morros.','AM: 3 m; FM: 300 m. A FM difrata mais nos morros.','AM: 300 m; FM: 3 m. A FM difrata mais nos morros.','AM: 0,3 m; FM: 30 m. A AM reflete mais nos morros.','AM: 300 m; FM: 3 m. A AM é mais rápida no ar.'], ans:0,
  hint:'Passe as frequências para hertz (k = 10³, M = 10⁶) e use λ = c/f. Depois: qual λ é parecido com o tamanho de um morro?',
  steps:[
    ['Comprimentos de onda', `<div class="eq">λ<sub>AM</sub> = ${f('3,0 · 10<sup>8</sup>','1 000 · 10<sup>3</sup>')} = ${f('3,0 · 10<sup>8</sup>','10<sup>6</sup>')} = 300 m</div><div class="eq">λ<sub>FM</sub> = ${f('3,0 · 10<sup>8</sup>','100 · 10<sup>6</sup>')} = ${f('3,0 · 10<sup>8</sup>','10<sup>8</sup>')} = 3 m</div>`],
    ['Explicação', `<p>A difração é mais intensa quando λ é comparável ao tamanho do obstáculo. Com λ de centenas de metros, a onda AM contorna os morros com facilidade. A FM, com λ de poucos metros, se comporta quase como “luz”: o morro faz sombra.</p>`],
  ],
  alt:'Frequência maior → λ menor → menos difração. A FM “enxerga” o morro como uma parede; a AM o contorna.',
  warn:'Todas as ondas eletromagnéticas têm praticamente a mesma velocidade no ar (alternativa e). A diferença entre AM e FM está no comprimento de onda.',
  mod:'Inédita (amplia o exercício 18 da lista de Ondulatória da apostila, rádio AM e difração).'
},
{
  src:'UEA (modificada)', nivel:'avançado',
  text:`Um morcego emite pulsos de ultrassom de frequência 34 kHz e localiza um inseto pelo eco, que recebe 0,020 s após a emissão (figura).${FIG2_8}Considere o morcego e o inseto parados e a velocidade do som no ar igual a 340 m/s. A distância d até o inseto e o comprimento de onda do ultrassom são, respectivamente:`,
  opts:['6,8 m e 1 cm','3,4 m e 1 cm','3,4 m e 10 cm','6,8 m e 10 m','1,7 m e 1 mm'], ans:1,
  hint:'Em 0,020 s o som foi até o inseto e voltou. Para λ, passe 34 kHz para hertz.',
  steps:[
    ['Distância (eco)', `<p>O som percorre <b>2d</b> (ida e volta) em 0,020 s:</p><div class="eq">2d = v · t = 340 × 0,020 = 6,8 m</div><div class="eq">d = <span class="hl">3,4 m</span></div>`],
    ['Comprimento de onda', `<div class="eq">λ = ${f('v','f')} = ${f('340 m/s','34 000 Hz')} = 0,01 m = <span class="hl">1 cm</span></div>`],
  ],
  alt:'λ de 1 cm é parecido com o tamanho de um inseto. Ondas assim “batem” no inseto e voltam bem, em vez de contorná-lo. É por isso que morcegos usam ultrassom e não sons graves.',
  warn:'6,8 m é o caminho de ida e volta (alternativa a). A distância até o inseto é a metade. E esquecer o “k” de 34 kHz dá λ = 10 m.',
  mod:'Original (UEA, Somativa 1): sonar de navio medindo a profundidade do oceano. Modificada: morcego e inseto, pedindo também o comprimento de onda.'
},
{
  src:'EFOMM (modificada)', nivel:'avançado',
  text:'O comprimento de onda da luz de um laser é 600 nm no ar, onde ela se propaga a 3,0 · 10<sup>8</sup> m/s. Ao entrar num bloco de acrílico, o comprimento de onda dessa luz passa a ser 400 nm. No acrílico, a velocidade e a frequência dessa luz são, respectivamente:',
  opts:['2,0 · 10<sup>8</sup> m/s e 7,5 · 10<sup>14</sup> Hz','4,5 · 10<sup>8</sup> m/s e 5,0 · 10<sup>14</sup> Hz','2,0 · 10<sup>8</sup> m/s e 5,0 · 10<sup>5</sup> Hz','3,0 · 10<sup>8</sup> m/s e 7,5 · 10<sup>14</sup> Hz','2,0 · 10<sup>8</sup> m/s e 5,0 · 10<sup>14</sup> Hz'], ans:4,
  hint:'Calcule a frequência no ar. Ela é a mesma no acrílico. Depois use v = λ · f com o λ do acrílico.',
  steps:[
    ['Frequência (no ar)', `<div class="eq">f = ${f('c','λ<sub>ar</sub>')} = ${f('3,0 · 10<sup>8</sup>','600 · 10<sup>−9</sup>')} = <span class="hl">5,0 · 10<sup>14</sup> Hz</span></div><p>Na refração a frequência não muda: no acrílico ela também é 5,0 · 10<sup>14</sup> Hz.</p>`],
    ['Velocidade no acrílico', `<div class="eq">v = λ · f = 400 · 10<sup>−9</sup> × 5,0 · 10<sup>14</sup> = <span class="hl">2,0 · 10<sup>8</sup> m/s</span></div>`],
  ],
  alt:`Com f constante, v e λ são proporcionais: λ caiu para ${f('400','600')} = ${f('2','3')} do valor, então v = ${f('2','3')} × 3,0 · 10<sup>8</sup> = 2,0 · 10<sup>8</sup> m/s.`,
  warn:'Calcular a frequência com o λ do acrílico e a velocidade do ar mistura dados de meios diferentes e dá 7,5 · 10¹⁴ Hz (alternativas a e d). E esquecer que 1 nm = 10⁻⁹ m leva ao 10⁵ da alternativa c.',
  mod:'Original (EFOMM): λ = 675 nm no ar e 450 nm no outro meio. Modificada: 600 nm e 400 nm (acrílico).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Dois alto-falantes, ligados ao mesmo aparelho, emitem em fase um som de 340 Hz. Um estudante está no ponto P, a 4,0 m de um deles e a 5,5 m do outro (figura).${FIG2_10}Sendo 340 m/s a velocidade do som, no ponto P ocorre interferência:`,
  opts:['construtiva, pois Δd = 1,5 λ','destrutiva, pois Δd = 3 λ','construtiva, pois Δd = 3 λ','destrutiva, pois Δd = 1,5 λ','construtiva, pois as duas ondas têm a mesma frequência'], ans:3,
  hint:'Calcule λ e veja quantos comprimentos de onda “cabem” na diferença de caminho 5,5 − 4,0.',
  steps:[
    ['Comprimento de onda', `<div class="eq">λ = ${f('v','f')} = ${f('340','340')} = 1,0 m</div>`],
    ['Diferença de caminho', `<div class="eq">Δd = 5,5 − 4,0 = 1,5 m = 1,5 λ</div>`],
    ['Construtiva ou destrutiva?', `<p>As fontes estão em fase. Se Δd for um número inteiro de λ (1λ, 2λ…), crista chega com crista: construtiva. Se sobrar meio λ (0,5λ, 1,5λ…), crista chega com vale: <b>destrutiva</b>. Em P o som fica fraco.</p>`],
  ],
  alt:'Imagine as duas ondas saindo juntas, crista com crista. A do falante mais distante anda 1,5 λ a mais: um λ inteiro não muda nada, mas o meio λ extra transforma a crista em vale.',
  warn:'Ter a mesma frequência é condição para a interferência ficar estável, mas não diz se ela é construtiva ou destrutiva (alternativa e). Quem decide é a diferença de caminho.',
  mod:'Inédita.'
},
];
