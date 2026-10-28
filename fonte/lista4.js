/* ===== Lista 4 · Princípios da óptica geométrica ===== */
const TOOLS4 = [
  ['Princípios', `<b>Propagação retilínea</b>: em meio homogêneo, a luz anda em linha reta.<br><b>Independência</b>: raios que se cruzam não se perturbam.<br><b>Reversibilidade</b>: o caminho de ida também serve de volta.`],
  ['Meios', `Transparente: imagem nítida através dele<br>Translúcido: passa luz, sem imagem nítida<br>Opaco: não deixa a luz passar`],
  ['Cor de um objeto', `O objeto reflete a cor que vemos e absorve as outras.<br>Branco reflete todas · preto absorve todas<br>Sem luz da sua cor para refletir, o objeto parece preto.`],
  ['Sombras (semelhança)', `${f('H','h')} = ${f('S','s')} &nbsp; (altura e sombra, mesmo instante)`],
  ['Câmara escura', `${f('i','o')} = ${f("p'",'p')}<br>i: imagem · o: objeto · p: objeto–orifício · p': profundidade da câmara`],
  ['Ano-luz', `É <b>distância</b>: o que a luz percorre em 1 ano.<br>c = 3,0 · 10<sup>5</sup> km/s · 1 ano ≈ 3,2 · 10<sup>7</sup> s`],
];

/* Câmara escura de orifício */
function camara(lo, lp, lpp, li){
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 160', `Câmara escura de orifício: objeto à esquerda, ${lo}, a uma distância ${lp} do orifício; dentro da caixa, a imagem invertida, ${li}, no fundo, a uma distância ${lpp} do orifício.`,
    `${d}<line x1="44" y1="105" x2="44" y2="57" stroke="var(--plot2)" stroke-width="4" marker-end="${mk}"/>
    <rect x="150" y="36" width="150" height="88" fill="var(--ink)" opacity=".08" stroke="var(--ink)" stroke-width="2"/>
    <rect x="147" y="77" width="6" height="6" fill="var(--surface)"/>
    <g stroke="var(--ray)" stroke-width="1.6" opacity=".9"><line x1="44" y1="55" x2="300" y2="113"/><line x1="44" y1="105" x2="300" y2="47"/></g>
    <line x1="296" y1="47" x2="296" y2="111" stroke="var(--plot2)" stroke-width="4" marker-end="${mk}"/>
    <text x="44" y="124" text-anchor="middle" class="pt pt-strong">${lo}</text><text x="276" y="140" text-anchor="middle" class="pt pt-strong">${li}</text>
    <line x1="44" y1="20" x2="150" y2="20" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="97" y="14" text-anchor="middle" class="pt pt-strong">${lp}</text>
    <line x1="150" y1="20" x2="300" y2="20" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="225" y="14" text-anchor="middle" class="pt pt-strong">${lpp}</text>
    <text x="150" y="150" text-anchor="middle" class="pt">orifício</text>`);
}

/* Q2: bandeira sob luz vermelha */
const FIG4_2 = (() => {
  const [d, mk] = seta('#D23B2A'); let r = '';
  [[58, 40, 210, 50], [58, 52, 210, 90], [58, 64, 210, 128]].forEach(([a, b, c, e]) => { r += `<line x1="${a}" y1="${b}" x2="${c}" y2="${e}" stroke="#D23B2A" stroke-width="2.2" marker-end="${mk}"/>`; });
  return fig('0 0 340 170', 'Quarto escuro: uma lâmpada à esquerda emite só luz vermelha sobre uma bandeira à direita, que tem uma faixa branca em cima e uma faixa verde embaixo.',
    `${d}<circle cx="40" cy="52" r="18" fill="#D23B2A" opacity=".85" stroke="var(--ink)" stroke-width="1.5"/><text x="40" y="92" text-anchor="middle" class="pt">luz vermelha</text>${r}
    <line x1="222" y1="22" x2="222" y2="160" stroke="var(--ink)" stroke-width="3"/>
    <rect x="224" y="28" width="104" height="52" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="276" y="59" text-anchor="middle" class="pt pt-strong">branca</text>
    <rect x="224" y="80" width="104" height="52" fill="none" stroke="var(--ink)" stroke-width="1.5"/><text x="276" y="111" text-anchor="middle" class="pt pt-strong">verde</text>`);
})();

/* Q4: sombra da haste e do prédio */
const FIG4_4 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 190', 'Num mesmo instante, uma haste vertical de 1,5 metro projeta sombra de 2,0 metros, e um prédio de altura H desconhecida projeta sombra de 24 metros. Os raios de sol são paralelos. Figura fora de escala.',
    `${d}<line x1="8" y1="150" x2="332" y2="150" stroke="var(--muted)" stroke-width="2"/>
    <line x1="40" y1="150" x2="40" y2="105" stroke="var(--ink)" stroke-width="4"/>
    <line x1="40" y1="150" x2="100" y2="150" stroke="var(--ink)" stroke-width="6" opacity=".35"/>
    <rect x="150" y="40" width="26" height="110" fill="var(--sign)" opacity=".5" stroke="var(--ink)"/>
    <line x1="176" y1="150" x2="322" y2="150" stroke="var(--ink)" stroke-width="6" opacity=".35"/>
    <g stroke="var(--ray)" stroke-width="1.6" stroke-dasharray="5 4"><line x1="24" y1="93" x2="100" y2="150"/><line x1="150" y1="22" x2="322" y2="151"/></g>
    <text x="34" y="128" text-anchor="end" class="pt pt-strong">1,5 m</text><text x="70" y="168" text-anchor="middle" class="pt pt-strong">2,0 m</text>
    <text x="144" y="98" text-anchor="end" class="pt pt-strong">H</text><text x="249" y="168" text-anchor="middle" class="pt pt-strong">24 m</text>
    <text x="332" y="186" text-anchor="end" class="pt">(fora de escala)</text>`);
})();

/* Q5: muro e senhora */
const FIG4_5 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 170', 'Um muro vertical de 3,0 metros projeta no chão uma sombra de 4,5 metros. Uma pessoa de 1,8 metro caminha em direção ao muro, ainda fora da sombra.',
    `${d}<line x1="8" y1="140" x2="332" y2="140" stroke="var(--muted)" stroke-width="2"/>
    <rect x="50" y="50" width="12" height="90" fill="var(--sign)" opacity=".6" stroke="var(--ink)"/>
    <polygon points="62,140 62,50 197,140" fill="var(--ink)" opacity=".12"/>
    <line x1="44" y1="38" x2="210" y2="149" stroke="var(--ray)" stroke-width="1.8" stroke-dasharray="5 4"/>
    <line x1="252" y1="140" x2="252" y2="100" stroke="var(--ink)" stroke-width="3"/><circle cx="252" cy="93" r="7" fill="var(--plot2)" stroke="var(--ink)"/>
    <line x1="238" y1="120" x2="208" y2="120" stroke="var(--ink)" stroke-width="1.6" marker-end="${mk}"/>
    <text x="44" y="98" text-anchor="end" class="pt pt-strong">3,0 m</text><text x="130" y="158" text-anchor="middle" class="pt pt-strong">4,5 m</text><text x="262" y="124" class="pt pt-strong">1,8 m</text>`);
})();

/* Q6: eclipse */
const FIG4_6 = fig('0 0 340 150', 'Fora de escala: o Sol à esquerda, a Terra no meio e a Lua à direita, alinhados. A Lua está inteiramente dentro da sombra (umbra) da Terra.',
  `<circle cx="30" cy="75" r="28" fill="#F2B705" stroke="var(--ink)" stroke-width="1.2"/>
  <polygon points="170,59 340,73.6 340,76.4 170,91" fill="var(--ink)" opacity=".38"/>
  <g stroke="var(--muted)" stroke-dasharray="4 4"><line x1="30" y1="47" x2="340" y2="144"/><line x1="30" y1="103" x2="340" y2="6"/></g>
  <circle cx="170" cy="75" r="16" fill="var(--sign)" stroke="var(--ink)" stroke-width="1.2"/>
  <circle cx="280" cy="75" r="5" fill="var(--muted)" stroke="var(--ink)"/>
  <text x="30" y="124" text-anchor="middle" class="pt pt-strong">Sol</text><text x="170" y="112" text-anchor="middle" class="pt pt-strong">Terra</text>
  <text x="280" y="64" text-anchor="middle" class="pt pt-strong">Lua</text><text x="232" y="104" text-anchor="middle" class="pt">umbra</text>`);

/* Q9: disco e sombra */
const FIG4_9 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 190', 'Uma lâmpada pontual à esquerda, um disco opaco de 10 centímetros de diâmetro a 50 centímetros dela e uma parede a 2,0 metros da lâmpada, paralela ao disco. A sombra do disco aparece na parede.',
    `${d}<circle cx="30" cy="80" r="6" fill="#F2B705" stroke="var(--ink)"/>
    <g stroke="var(--ray)" stroke-width="1.5"><line x1="30" y1="80" x2="290" y2="24"/><line x1="30" y1="80" x2="290" y2="136"/></g>
    <line x1="95" y1="66" x2="95" y2="94" stroke="var(--ink)" stroke-width="5"/>
    <rect x="290" y="8" width="10" height="150" fill="var(--muted)" opacity=".4"/><line x1="290" y1="24" x2="290" y2="136" stroke="var(--ink)" stroke-width="5" opacity=".55"/>
    <text x="104" y="62" class="pt pt-strong">10 cm</text><text x="276" y="80" text-anchor="end" class="pt">sombra</text>
    <line x1="30" y1="168" x2="95" y2="168" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="62" y="184" text-anchor="middle" class="pt pt-strong">50 cm</text>
    <line x1="30" y1="150" x2="290" y2="150" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="200" y="144" text-anchor="middle" class="pt pt-strong">2,0 m</text>`);
})();

/* Q10: moeda e Lua */
const FIG4_10 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 190', 'Fora de escala: o olho à esquerda, uma moeda de 1,0 centímetro a 1,1 metro do olho e a Lua cheia ao fundo, a 3,8 vezes 10 elevado a 5 quilômetros. As bordas da moeda coincidem com as bordas da Lua.',
    `${d}<path d="M14 76 Q24 66 34 76 Q24 86 14 76 Z" fill="none" stroke="var(--ink)" stroke-width="1.5"/><circle cx="26" cy="76" r="3" fill="var(--ink)"/>
    <g stroke="var(--ray)" stroke-width="1.4"><line x1="30" y1="76" x2="284" y2="36"/><line x1="30" y1="76" x2="284" y2="116"/></g>
    <line x1="92" y1="66" x2="92" y2="86" stroke="var(--plot2)" stroke-width="5"/>
    <circle cx="284" cy="76" r="40" fill="var(--muted)" opacity=".35" stroke="var(--ink)"/>
    <text x="92" y="106" text-anchor="middle" class="pt pt-strong">1,0 cm</text><text x="284" y="80" text-anchor="middle" class="pt pt-strong">D = ?</text>
    <line x1="26" y1="134" x2="92" y2="134" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="59" y="150" text-anchor="middle" class="pt pt-strong">1,1 m</text>
    <line x1="26" y1="166" x2="284" y2="166" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="170" y="184" text-anchor="middle" class="pt pt-strong">3,8 · 10⁵ km</text>`);
})();

const QL4 = [
{
  src:'IFBA (modificada)', nivel:'básico',
  text:`Um objeto luminoso é colocado a 30 cm do orifício de uma câmara escura, e a imagem projetada no fundo da câmara mede 6 cm.${camara('objeto','p','p\'','imagem')}O objeto é então afastado até ficar a 90 cm do orifício. A nova imagem mede:`,
  opts:['18 cm','2 cm','3 cm','12 cm','6 cm'], ans:1,
  hint:'A profundidade da câmara não muda. Se a distância do objeto ao orifício triplica, o que acontece com a imagem?',
  steps:[
    ['Semelhança de triângulos', `<div class="eq">${f('i','o')} = ${f("p'",'p')}</div><p>O tamanho do objeto (o) e a profundidade da câmara (p') não mudam. Então i é inversamente proporcional a p.</p>`],
    ['Comparando', `<p>p passou de 30 cm para 90 cm: ficou 3 vezes maior. A imagem fica 3 vezes menor:</p><div class="eq">i = ${f('6 cm','3')} = <span class="hl">2 cm</span></div>`],
  ],
  alt:'É o que acontece quando você fotografa algo distante: quanto mais longe o objeto, menor ele aparece na foto.',
  warn:'Multiplicar por 3 (alternativa a) supõe que a imagem cresce quando o objeto se afasta. É o contrário.',
  mod:'Original (IFBA): objeto a 20 cm com imagem de 8 cm, afastado para 80 cm. Modificada: 30 cm, 6 cm e 90 cm.'
},
{
  src:'Inédita', nivel:'básico',
  text:`Num quarto escuro, uma bandeira com uma faixa branca e uma faixa verde é iluminada <b>somente</b> por luz vermelha. Considere os pigmentos ideais.${FIG4_2}Um observador vê a faixa branca e a faixa verde, respectivamente, com as cores:`,
  opts:['vermelha e verde','branca e verde','vermelha e preta','preta e vermelha','branca e preta'], ans:2,
  hint:'Um objeto só pode refletir a luz que chega até ele. Que luz o branco reflete? E o verde?',
  steps:[
    ['Faixa branca', `<p>O branco reflete todas as cores que recebe. Recebendo só vermelho, reflete vermelho: parece <b>vermelha</b>.</p>`],
    ['Faixa verde', `<p>O pigmento verde ideal reflete só o verde e absorve as outras cores. Como não chega luz verde, ele absorve o vermelho e não reflete nada: parece <b>preta</b>.</p>`],
  ],
  alt:'A cor não está “dentro” do objeto: ela depende da luz que o ilumina. Por isso uma roupa pode parecer de outra cor sob a luz amarelada de uma rua.',
  warn:'A faixa verde não “continua verde” (alternativa a): para parecer verde, ela precisaria receber luz verde para refletir.',
  mod:'Inédita (amplia o exercício 3 da lista de Óptica da apostila, sobre a cor da pétala).'
},
{
  src:'Inédita', nivel:'básico',
  text:`Associe cada situação ao princípio da óptica geométrica que ela ilustra.${tabela(['','Situação'],[['1','Num show, os feixes de dois holofotes se cruzam e cada um segue como se o outro não existisse.'],['2','Se você vê os olhos do motorista pelo retrovisor, ele também pode ver os seus.'],['3','A luz do sol entra por uma fresta e forma um feixe reto no ar empoeirado.']], true)}A sequência correta, de 1 a 3, é:`,
  opts:['independência, reversibilidade, propagação retilínea','reversibilidade, independência, propagação retilínea','propagação retilínea, reversibilidade, independência','independência, propagação retilínea, reversibilidade','reversibilidade, propagação retilínea, independência'], ans:0,
  hint:'Se a luz faz um caminho de ida, ela pode fazer o mesmo caminho de volta. Qual situação fala de ida e volta?',
  steps:[
    ['1: holofotes', `<p>Os feixes se cruzam sem se perturbar: <b>independência dos raios de luz</b>.</p>`],
    ['2: retrovisor', `<p>O caminho da luz que vai dos olhos do motorista até os seus é o mesmo, no sentido contrário, do que vai dos seus até os dele: <b>reversibilidade</b>.</p>`],
    ['3: fresta', `<p>O feixe reto mostra a <b>propagação retilínea</b> da luz num meio homogêneo. A poeira só torna o feixe visível, espalhando um pouco de luz para os nossos olhos.</p>`],
  ],
  alt:'Os três princípios aparecem juntos num jogo de lanterna no escuro: a luz vai reta, dois feixes se cruzam sem problema e quem é iluminado pode “ver” a lanterna.',
  warn:'Independência e reversibilidade costumam ser trocadas (alternativa b). Independência é sobre raios diferentes que se cruzam; reversibilidade é sobre o mesmo caminho percorrido nos dois sentidos.',
  mod:'Inédita.'
},
{
  src:'EEAR (modificada)', nivel:'intermediário',
  text:`Para estimar a altura de um prédio, um estudante fincou uma haste vertical de 1,5 m no chão. No mesmo instante, a sombra da haste mediu 2,0 m e a sombra do prédio, 24 m.${FIG4_4}A altura H do prédio é:`,
  opts:['32 m','24 m','12 m','18 m','36 m'], ans:3,
  hint:'Como os raios do sol são paralelos, os triângulos “objeto + sombra” são semelhantes.',
  steps:[
    ['Semelhança', `<div class="eq">${f('H','24 m')} = ${f('1,5 m','2,0 m')}</div>`],
    ['Resolvendo', `<div class="eq">H = 24 × 0,75 = <span class="hl">18 m</span></div>`],
  ],
  alt:'A sombra do prédio é 12 vezes a da haste (24 ÷ 2). Então o prédio é 12 vezes mais alto: 12 × 1,5 = 18 m.',
  warn:`Montar a proporção invertida (${f('H','24')} = ${f('2,0','1,5')}) dá 32 m (alternativa a). Altura com altura, sombra com sombra.`,
  mod:'Original (EEAR): haste de 1 m com sombra de 2 m e torre com sombra de 30 m. Modificada: 1,5 m, 2,0 m e 24 m, com figura.'
},
{
  src:'PUC-Rio (modificada)', nivel:'intermediário',
  text:`Num certo horário, um muro de 3,0 m de altura projeta no chão horizontal uma sombra de 4,5 m. Uma pessoa de 1,8 m de altura caminha em direção ao muro.${FIG4_5}A que distância máxima do muro ela precisa estar para ficar totalmente coberta pela sombra?`,
  opts:['2,7 m','1,2 m','1,8 m','3,0 m','0,9 m'], ans:2,
  hint:'A pessoa fica totalmente na sombra quando o topo da cabeça dela toca o raio de sol que passa pelo alto do muro.',
  steps:[
    ['O triângulo da sombra', `<p>O raio que passa pelo topo do muro chega ao chão no fim da sombra, a 4,5 m do muro. Para cada 1 m de altura, a sombra se estende 1,5 m (4,5 ÷ 3,0).</p>`],
    ['Onde a cabeça toca o raio', `<p>A partir do fim da sombra, a altura do raio cresce 1 m a cada 1,5 m. Para chegar a 1,8 m:</p><div class="eq">x = 1,8 × 1,5 = 2,7 m (medido a partir do fim da sombra)</div>`],
    ['Distância até o muro', `<div class="eq">d = 4,5 − 2,7 = <span class="hl">1,8 m</span></div>`],
  ],
  alt:`Semelhança direta: ${f('1,8','3,0')} = ${f('x','4,5')} ⇒ x = 2,7 m. Esse x é a sombra de uma “pessoa” na ponta do raio, contada a partir do fim da sombra do muro. Falta 4,5 − 2,7 = 1,8 m até o muro.`,
  warn:'2,7 m é a distância contada a partir do <b>fim</b> da sombra, não do muro (alternativa a).',
  mod:'Original (PUC-Rio): muro de 4,0 m, sombra de 6,0 m, pessoa de 1,6 m. Modificada: 3,0 m, 4,5 m e 1,8 m, com figura.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`A figura, fora de escala, mostra o Sol, a Terra e a Lua alinhados, com a Lua inteiramente dentro da umbra da Terra.${FIG4_6}Nessa situação, ocorre um eclipse:`,
  opts:['total do Sol, na lua nova','parcial da Lua, na lua nova','total da Lua, na lua nova','anular do Sol, na lua cheia','total da Lua, na lua cheia'], ans:4,
  hint:'Quem está na sombra de quem? E, nessa posição, a face da Lua voltada para a Terra está iluminada ou escura?',
  steps:[
    ['Que eclipse é', `<p>A Lua entrou na sombra da Terra: ela deixa de receber a luz direta do Sol. É um <b>eclipse lunar</b>. Como está toda dentro da umbra, é <b>total</b>.</p>`],
    ['Que fase da Lua', `<p>Com a Terra entre o Sol e a Lua, a face da Lua voltada para nós é a iluminada: essa é a <b>lua cheia</b>. Eclipses lunares só acontecem na lua cheia.</p>`],
  ],
  alt:'Eclipse solar: a sombra da Lua cai na Terra (Lua no meio, lua nova). Eclipse lunar: a sombra da Terra cai na Lua (Terra no meio, lua cheia).',
  warn:'Na lua nova é a Lua que fica entre o Sol e a Terra, e o eclipse possível é o solar (alternativas a e c).',
  mod:'Inédita (mesmo tema da questão da Santa Casa da Somativa 2, agora com eclipse lunar e fase da Lua).'
},
{
  src:'Inédita', nivel:'intermediário',
  text:'Sirius, a estrela mais brilhante do céu noturno, está a cerca de 8,6 anos-luz da Terra. Use c = 3,0 · 10<sup>5</sup> km/s e 1 ano ≈ 3,2 · 10<sup>7</sup> s. A luz de Sirius que vemos hoje saiu da estrela há cerca de ___, e a distância até ela é de aproximadamente ___.',
  opts:['8,6 anos; 2,6 · 10<sup>6</sup> km','8,6 segundos; 2,6 · 10<sup>6</sup> km','8,6 anos; 9,6 · 10<sup>12</sup> km','8,6 anos; 8,3 · 10<sup>13</sup> km','1 ano; 8,3 · 10<sup>13</sup> km'], ans:3,
  hint:'Ano-luz é a distância que a luz percorre em 1 ano. Calcule essa distância em km e multiplique por 8,6.',
  steps:[
    ['Quanto vale 1 ano-luz', `<div class="eq">1 ano-luz = c · t = 3,0 · 10<sup>5</sup> × 3,2 · 10<sup>7</sup> = 9,6 · 10<sup>12</sup> km</div>`],
    ['Distância até Sirius', `<div class="eq">d = 8,6 × 9,6 · 10<sup>12</sup> ≈ <span class="hl">8,3 · 10<sup>13</sup> km</span></div>`],
    ['Há quanto tempo a luz saiu', `<p>Se a distância é 8,6 anos-luz, a luz levou <b>8,6 anos</b> para chegar. Vemos Sirius como ela era há 8,6 anos.</p>`],
  ],
  alt:'Olhar para o céu é olhar para o passado: a luz do Sol tem cerca de 8 minutos de “atraso”, e a de Sirius, mais de 8 anos.',
  warn:'9,6 · 10¹² km é só 1 ano-luz (alternativa c): faltou multiplicar por 8,6. E usar 8,6 s no lugar de 8,6 anos (alternativa b) esquece que ano-luz envolve um ano inteiro.',
  mod:'Inédita (mesma ideia do exercício 9 da lista de Óptica da apostila, sobre Andrômeda).'
},
{
  src:'UFSCar (modificada)', nivel:'avançado',
  text:`Uma vela de 30 cm está a 1,2 m do orifício de uma câmara escura cujo fundo pode ser movido, e sua imagem no fundo mede 6 cm.${camara('vela','1,2 m','p\'','6 cm')}A vela é aproximada até ficar a 75 cm do orifício. Para que a imagem continue medindo 6 cm, o fundo da câmara deve ser deslocado:`,
  opts:['9 cm, aproximando-se do orifício','9 cm, afastando-se do orifício','15 cm, aproximando-se do orifício','24 cm, afastando-se do orifício','6 cm, aproximando-se do orifício'], ans:0,
  hint:'Calcule a profundidade da câmara (p\') nas duas situações. O deslocamento é a diferença.',
  steps:[
    ['Situação inicial', `<div class="eq">${f('i','o')} = ${f("p'",'p')} ⇒ ${f('6','30')} = ${f("p'",'120 cm')} ⇒ p' = 24 cm</div>`],
    ['Situação final', `<div class="eq">${f('6','30')} = ${f("p'",'75 cm')} ⇒ p' = 15 cm</div>`],
    ['Deslocamento', `<div class="eq">24 − 15 = <span class="hl">9 cm</span></div><p>Como p' diminuiu, o fundo deve se <b>aproximar</b> do orifício. Faz sentido: com a vela mais perto, a imagem tenderia a crescer; aproximando o fundo, ela volta ao tamanho original.</p>`],
  ],
  alt:`A razão ${f('i','o')} = ${f('6','30')} = ${f('1','5')} não muda. Então p' é sempre p/5: 120/5 = 24 cm e 75/5 = 15 cm.`,
  warn:'15 cm é a nova profundidade da câmara, e não o deslocamento (alternativa c).',
  mod:'Original (UFSCar): vela de 20 cm a 1 m, imagem de 4 cm, aproximada para 50 cm. Modificada: 30 cm, 1,2 m, 6 cm e 75 cm.'
},
{
  src:'CPS (modificada)', nivel:'avançado',
  text:`Uma lâmpada de dimensões desprezíveis ilumina um disco opaco de 10 cm de diâmetro, colocado a 50 cm dela e paralelo a uma parede que está a 2,0 m da lâmpada.${FIG4_9}A área da sombra do disco na parede é quantas vezes maior que a área do disco?`,
  opts:['4 vezes','8 vezes','2 vezes','40 vezes','16 vezes'], ans:4,
  hint:'Primeiro descubra quantas vezes o diâmetro da sombra é maior que o do disco. A área depende do diâmetro ao quadrado.',
  steps:[
    ['Diâmetro da sombra', `<div class="eq">${f('D<sub>sombra</sub>','10 cm')} = ${f('200 cm','50 cm')} = 4 ⇒ D<sub>sombra</sub> = 40 cm</div>`],
    ['Área', `<p>A área de um círculo é proporcional ao quadrado do diâmetro. Se o diâmetro ficou 4 vezes maior:</p><div class="eq">${f('A<sub>sombra</sub>','A<sub>disco</sub>')} = 4<sup>2</sup> = <span class="hl">16</span></div>`],
  ],
  alt:'Pense num quadrado de lado 1 que vira um quadrado de lado 4: cabem 16 quadradinhos dentro dele, e não 4.',
  warn:'4 vezes (alternativa a) é a razão entre os diâmetros. A pergunta é sobre a área.',
  mod:'Original (CPS): sombra da mão na parede, iluminada por uma vela, pedindo a distância da parede. Modificada: disco e lâmpada, pedindo a razão entre as áreas.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Uma moeda de 1,0 cm de diâmetro, segurada a 1,1 m do olho, cobre exatamente o disco da Lua cheia.${FIG4_10}Sabendo que a distância Terra–Lua é de cerca de 3,8 · 10<sup>5</sup> km, o diâmetro da Lua é, aproximadamente:`,
  opts:['3,5 · 10<sup>5</sup> km','3,5 · 10<sup>3</sup> km','4,2 · 10<sup>7</sup> km','3,8 · 10<sup>3</sup> km','35 km'], ans:1,
  hint:'O olho, as bordas da moeda e as bordas da Lua formam dois triângulos semelhantes. Use as mesmas unidades nas razões.',
  steps:[
    ['Semelhança', `<div class="eq">${f('D','3,8 · 10<sup>5</sup> km')} = ${f('1,0 cm','110 cm')}</div><p>(1,1 m = 110 cm, para ficar na mesma unidade da moeda.)</p>`],
    ['Resolvendo', `<div class="eq">D = ${f('3,8 · 10<sup>5</sup>','110')} ≈ 3,5 · 10<sup>3</sup> km</div><p>O valor real é cerca de 3 470 km: a estimativa é muito boa.</p>`],
  ],
  alt:'A Lua está a umas 110 vezes o próprio diâmetro de distância (como a moeda está a 110 vezes o diâmetro dela). 3,8 · 10⁵ ÷ 110 ≈ 3 500 km.',
  warn:'Esquecer de passar 1,1 m para centímetros dá 3,5 · 10⁵ km (alternativa a), maior que a própria distância Terra–Lua: um sinal de que algo deu errado. E nunca faça essa medida olhando para o Sol: a luz solar direta pode danificar a retina.',
  mod:'Inédita (semelhança de triângulos com dado astronômico real).'
},
];
