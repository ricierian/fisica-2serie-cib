/* ===== Lista 3 · Espectro eletromagnético ===== */
const TAB_ESP = tabela(['Radiação','Comprimento de onda (aprox.)'],[['Rádio','acima de 1 m'],['Micro-ondas','1 mm a 1 m'],['Infravermelho','700 nm a 1 mm'],['Luz visível','400 nm a 700 nm'],['Ultravioleta','10 nm a 400 nm'],['Raios X','0,01 nm a 10 nm'],['Raios gama','abaixo de 0,01 nm']]);
const TOOLS3 = [
  ['Equação fundamental', `c = λ · f &nbsp; (no vácuo e, aproximadamente, no ar)<br>c = 3,0 · 10<sup>8</sup> m/s para <b>todas</b> as radiações`],
  ['Ordem do espectro', `rádio → micro-ondas → infravermelho → visível → ultravioleta → raios X → gama<br>Para a direita: f e energia aumentam, λ diminui.`],
  ['Luz visível', `vermelho (≈ 700 nm) → violeta (≈ 400 nm)<br>O violeta tem a maior frequência do visível.`],
  ['Energia e ionização', `A energia de cada fóton cresce com a frequência.<br>Ionizantes (arrancam elétrons): ultravioleta mais energético, raios X e gama.`],
  ['Prefixos', `1 nm = 10<sup>−9</sup> m · 1 μm = 10<sup>−6</sup> m · 1 mm = 10<sup>−3</sup> m<br>1 MHz = 10<sup>6</sup> Hz · 1 GHz = 10<sup>9</sup> Hz`],
  ['Faixas aproximadas', TAB_ESP],
];

/* Q1: espectro com lacunas */
const FIG3_1 = (() => {
  const [d, mk] = seta('var(--ink)');
  const nomes = ['rádio','1','infravermelho','2','ultravioleta','3','raios gama'];
  let s = '';
  nomes.forEach((n, i) => {
    const x = 12 + i * 45.5, lac = /^\d$/.test(n);
    s += `<rect x="${x}" y="46" width="45.5" height="34" fill="${lac ? 'var(--surface)' : 'var(--sign)'}" opacity="${lac ? 1 : (0.18 + i * 0.1).toFixed(2)}" stroke="var(--ink)" stroke-width="1.2"/>`;
    if (lac) s += `<text x="${x + 22.75}" y="69" text-anchor="middle" class="pt pt-strong" style="font-size:16px">${n}</text>`;
    else s += `<text x="${x + 22.75}" y="${i % 4 === 0 ? 100 : 116}" text-anchor="middle" class="pt pt-strong">${n}</text><line x1="${x + 22.75}" y1="81" x2="${x + 22.75}" y2="${i % 4 === 0 ? 89 : 105}" stroke="var(--muted)"/>`;
  });
  return fig('0 0 340 128', 'Faixa do espectro eletromagnético em ordem crescente de frequência, da esquerda para a direita: rádio, lacuna 1, infravermelho, lacuna 2, ultravioleta, lacuna 3, raios gama.',
    `${d}<line x1="40" y1="24" x2="300" y2="24" stroke="var(--ink)" stroke-width="1.8" marker-end="${mk}"/><text x="170" y="16" text-anchor="middle" class="pt">frequência aumenta</text>${s}`);
})();

/* Q7: radiografia */
const FIG3_7 = (() => {
  const [d, mk] = seta('var(--plot2)'); let r = '';
  [40, 62, 84, 106, 128].forEach(y => { r += `<line x1="58" y1="${y}" x2="128" y2="${y}" stroke="var(--plot2)" stroke-width="2" marker-end="${mk}"/>`; });
  return fig('0 0 340 170', 'Aparelho de raios X à esquerda emite um feixe para a direita. O feixe atravessa uma mão, que tem tecidos moles e um osso no meio, e chega a um filme ou sensor à direita.',
    `${d}<rect x="10" y="30" width="40" height="110" rx="6" fill="var(--ink)"/><text x="30" y="160" text-anchor="middle" class="pt">fonte</text>${r}
    <ellipse cx="190" cy="85" rx="44" ry="62" fill="var(--plot2)" opacity=".28" stroke="var(--ink)" stroke-width="1.4"/>
    <rect x="178" y="34" width="24" height="102" rx="12" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.4"/>
    <text x="190" y="164" text-anchor="middle" class="pt">mão (osso no centro)</text>
    <rect x="290" y="20" width="16" height="130" fill="var(--muted)" opacity=".5" stroke="var(--ink)"/><text x="298" y="164" text-anchor="middle" class="pt">filme</text>`);
})();

/* Q8: barra de chocolate */
const FIG3_8 = (() => {
  const [d, mk] = seta('var(--ink)'); let s = '';
  [50, 110, 170, 230, 290].forEach(x => { s += `<ellipse cx="${x}" cy="66" rx="13" ry="10" fill="var(--plot2)" opacity=".85"/>`; });
  return fig('0 0 340 120', 'Barra de chocolate vista de cima com cinco pontos derretidos igualmente espaçados. A distância entre dois pontos vizinhos é 6,0 centímetros.',
    `${d}<rect x="14" y="44" width="312" height="44" rx="6" fill="#6B4226" opacity=".55" stroke="var(--ink)" stroke-width="1.4"/>${s}
    <line x1="110" y1="104" x2="170" y2="104" stroke="var(--ink)" stroke-width="1.3" marker-start="${mk}" marker-end="${mk}"/><text x="140" y="118" text-anchor="middle" class="pt pt-strong">6,0 cm</text>
    <text x="170" y="30" text-anchor="middle" class="pt">pontos derretidos</text>`);
})();

/* Q10: transparência da atmosfera (simplificado) */
const FIG3_10 = (() => {
  const faixas = [['gama',1],['raios X',1],['UV',0.85],['visível',0.05],['infraverm.',0.6],['micro-ondas',0.12],['rádio',0.05],['rádio longo',1]];
  let s = ''; const w = 39, x0 = 14;
  faixas.forEach(([n, op], i) => {
    const x = x0 + i * w;
    s += `<rect x="${x}" y="${(104 - op * 82).toFixed(1)}" width="${w}" height="${(op * 82).toFixed(1)}" fill="var(--sign)" opacity=".75"/>`;
    s += `<rect x="${x}" y="22" width="${w}" height="82" fill="none" stroke="var(--line)"/>`;
    s += `<text x="${x + w/2}" y="${i % 2 ? 136 : 120}" text-anchor="middle" class="pt pt-strong" style="font-size:10px">${n}</text>`;
  });
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 178', 'Gráfico simplificado da absorção pela atmosfera. Barras altas indicam radiação absorvida antes de chegar ao solo: raios gama, raios X e quase todo o ultravioleta são absorvidos; a luz visível passa; o infravermelho é parcialmente absorvido; micro-ondas e boa parte das ondas de rádio passam; as ondas de rádio muito longas não passam.',
    `${d}${s}<text x="10" y="14" class="pt">absorção pela atmosfera (simplificado)</text>
    <line x1="80" y1="168" x2="260" y2="168" stroke="var(--ink)" stroke-width="1.6" marker-start="${mk}"/><text x="170" y="160" text-anchor="middle" class="pt">frequência aumenta</text>`);
})();

const QL3 = [
{
  src:'Inédita', nivel:'básico',
  text:`A figura representa o espectro eletromagnético em ordem crescente de frequência. Algumas faixas foram substituídas pelos números 1, 2 e 3.${FIG3_1}As faixas 1, 2 e 3 correspondem, respectivamente, a:`,
  opts:['raios X, luz visível e micro-ondas','micro-ondas, raios X e luz visível','ondas de TV, luz visível e raios X','raios X, micro-ondas e luz visível','micro-ondas, luz visível e raios X'], ans:4,
  hint:'Entre o rádio e o infravermelho fica a radiação do forno e do Wi-Fi. Entre o infravermelho e o ultravioleta fica o que os nossos olhos enxergam.',
  steps:[
    ['A sequência do espectro', `<div class="eq">rádio → <b>micro-ondas</b> → infravermelho → <b>visível</b> → ultravioleta → <b>raios X</b> → gama</div>`],
    ['Preenchendo', `<ul><li>1: micro-ondas</li><li>2: luz visível</li><li>3: raios X</li></ul>`],
  ],
  alt:'Os próprios nomes ajudam: <b>infra</b>vermelho fica “abaixo” do vermelho e <b>ultra</b>violeta fica “além” do violeta. Entre os dois, só pode estar a luz visível.',
  warn:'Ondas de TV (alternativa c) são ondas de rádio. Elas ficam antes das micro-ondas, não no lugar delas.',
  mod:'Inédita.'
},
{
  src:'Enem (modificada)', nivel:'básico',
  text:'Câmeras térmicas são usadas por bombeiros para encontrar pessoas em ambientes cheios de fumaça. Elas formam imagens a partir da radiação que todo corpo aquecido emite e que, para objetos à temperatura do corpo humano, está principalmente fora da faixa visível. A radiação captada por essas câmeras está na região:',
  opts:['da luz visível','do ultravioleta','dos raios X','do infravermelho','das ondas longas de rádio'], ans:3,
  hint:'Que radiação você sente na pele perto de uma brasa ou de um aquecedor, mesmo sem olhar para ele?',
  steps:[
    ['Radiação térmica', `<p>Todo corpo emite radiação por estar aquecido. Na temperatura do corpo humano (cerca de 37 °C), essa emissão é principalmente no <b>infravermelho</b>.</p>`],
    ['Aplicação', `<p>A câmera térmica “enxerga” o infravermelho: as regiões mais quentes aparecem com cores diferentes. A fumaça atrapalha muito a luz visível, mas atrapalha bem menos esse infravermelho.</p>`],
  ],
  alt:'Sensores de presença de alarmes e termômetros de testa sem contato usam a mesma ideia.',
  warn:'Ultravioleta e raios X não são emitidos em quantidade relevante por corpos à temperatura ambiente: eles exigem fontes muito mais energéticas.',
  mod:'Original (Enem): detector de movimento que capta a radiação emitida pelo corpo. Modificada: câmera térmica de bombeiros.'
},
{
  src:'UFJF (modificada)', nivel:'básico',
  text:'Sobre as ondas eletromagnéticas, considere as afirmações.<br>I. Elas não precisam de um meio material para se propagar.<br>II. No vácuo, os raios gama são mais rápidos que as ondas de rádio.<br>III. O infravermelho tem frequência menor que a da luz visível.<br>IV. O som é uma onda eletromagnética de baixa frequência.<br>Estão corretas:',
  opts:['Apenas I e II','Apenas I e III','Apenas II e IV','Apenas I, III e IV','Apenas II, III e IV'], ans:1,
  hint:'No vácuo, toda radiação eletromagnética tem a mesma velocidade. E o som chega até nós vindo do espaço?',
  steps:[
    ['I e II', `<ul><li>I. Correta: a luz do Sol atravessa o vácuo do espaço.</li><li>II. Errada: no vácuo, <b>todas</b> as ondas eletromagnéticas andam a c = 3,0 · 10<sup>8</sup> m/s. O que muda de uma para outra é f e λ.</li></ul>`],
    ['III e IV', `<ul><li>III. Correta: o infravermelho fica antes do vermelho, com frequência menor.</li><li>IV. Errada: o som é onda <b>mecânica</b> e não se propaga no vácuo.</li></ul>`],
  ],
  alt:'Se os raios gama fossem mais rápidos, numa explosão de estrela distante eles chegariam muito antes da luz visível. Os telescópios mostram que chegam praticamente juntos.',
  warn:'“Mais energético” não quer dizer “mais rápido”. Raios gama carregam mais energia por fóton, mas têm a mesma velocidade no vácuo.',
  mod:'Original (UFJF, Somativa 2): cinco afirmações sobre espectro e luz visível. Modificada: quatro afirmações novas, uma delas sobre o som.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Um roteador de Wi-Fi transmite em 2,4 GHz. Use c = 3,0 · 10<sup>8</sup> m/s e a tabela de faixas aproximadas.${TAB_ESP}A radiação do roteador e o seu comprimento de onda são:`,
  opts:['Rádio, com λ ≈ 1,25 m','Ultravioleta, com λ ≈ 125 nm','Micro-ondas, com λ ≈ 12,5 cm','Rádio, com λ ≈ 8 m','Micro-ondas, com λ ≈ 0,8 m'], ans:2,
  hint:'2,4 GHz = 2,4 · 10⁹ Hz. Use λ = c/f e depois compare com a tabela.',
  steps:[
    ['Converter a frequência', `<div class="eq">f = 2,4 GHz = 2,4 · 10<sup>9</sup> Hz</div>`],
    ['Comprimento de onda', `<div class="eq">λ = ${f('c','f')} = ${f('3,0 · 10<sup>8</sup>','2,4 · 10<sup>9</sup>')} = 0,125 m = <span class="hl">12,5 cm</span></div>`],
    ['Classificar', `<p>12,5 cm está entre 1 mm e 1 m: <b>micro-ondas</b>, a mesma faixa do forno de micro-ondas (2,45 GHz).</p>`],
  ],
  alt:'Atalho: 3 · 10⁸ ÷ 10⁹ = 0,3 m. Como a frequência é 2,4 vezes maior que 10⁹ Hz, λ é 2,4 vezes menor que 0,3 m: cerca de 0,12 m.',
  warn:'Dividir f por c (2,4 · 10⁹ ÷ 3 · 10⁸ = 8) dá a alternativa d. λ = c/f: a velocidade fica em cima.',
  mod:'Inédita (no formato da questão 5 da Somativa 2: calcular λ e classificar pela tabela).'
},
{
  src:'Fuvest (modificada)', nivel:'intermediário',
  text:`Chama-se ionizante a radiação com energia suficiente para arrancar elétrons dos átomos e moléculas do material que ela atinge. Considere as fontes da tabela.${tabela(['Fonte','Radiação emitida'],[['Roteador de Wi-Fi','micro-ondas'],['Lâmpada de LED','luz visível'],['Controle remoto da TV','infravermelho'],['Aparelho de radiografia','raios X'],['Radioterapia com cobalto-60','raios gama']])}Emitem radiação ionizante apenas:`,
  opts:['o roteador e o controle remoto','a lâmpada, a radiografia e a radioterapia','a radiografia e a radioterapia','todas as fontes, pois todas emitem radiação','o roteador, a radiografia e a radioterapia'], ans:2,
  hint:'A energia de cada fóton cresce com a frequência. Quais dessas radiações estão na ponta de alta frequência do espectro?',
  steps:[
    ['Energia cresce com a frequência', `<p>Para arrancar elétrons, cada fóton precisa carregar bastante energia, e isso só acontece nas frequências mais altas: parte do ultravioleta, os <b>raios X</b> e os <b>raios gama</b>.</p>`],
    ['Classificando', `<ul><li>Micro-ondas, visível e infravermelho: <b>não ionizantes</b>.</li><li>Raios X (radiografia) e gama (radioterapia): <b>ionizantes</b>. Por isso exigem proteção com chumbo e controle do tempo de exposição.</li></ul>`],
  ],
  alt:'Na radioterapia, a capacidade de ionizar é justamente o objetivo: danificar o DNA das células do tumor.',
  warn:'Ser “radiação” não significa ser perigosa ou ionizante (alternativa d). A luz da lâmpada também é radiação eletromagnética, e não ioniza.',
  mod:'Original (Fuvest, Somativa 2): textos sobre radiação ionizante e alternativas sobre luz, micro-ondas e efeito fotoelétrico. Modificada: tabela de fontes do cotidiano e da saúde para classificar.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:'Uma pessoa passa uma hora perto de um aquecedor elétrico, que emite principalmente infravermelho, e outra hora ao sol forte, sem protetor. O aquecedor esquenta mais a pele, mas só a exposição ao sol causa a queimadura solar (a vermelhidão que aparece horas depois) e danos ao DNA das células da pele. A melhor explicação é que:',
  opts:['o infravermelho tem frequência maior que a do ultravioleta, mas é absorvido pelo ar','o ultravioleta se propaga no ar muito mais rápido que o infravermelho','o ultravioleta é uma onda mecânica e o infravermelho é eletromagnética, por isso agem de modos diferentes','o infravermelho não chega à pele, pois é refletido pelo ar ao redor do aquecedor','cada fóton de ultravioleta carrega mais energia e pode alterar moléculas'], ans:4,
  hint:'O que importa para quebrar uma ligação química não é o “calor total”, mas a energia de cada pacotinho de radiação.',
  steps:[
    ['Energia por fóton', `<p>A radiação eletromagnética chega em “pacotes” de energia, os fótons. A energia de cada fóton é proporcional à frequência. O ultravioleta tem frequência maior que o infravermelho: cada fóton de UV carrega mais energia.</p>`],
    ['Efeito na pele', `<p>Um fóton de UV tem energia suficiente para alterar moléculas como o DNA. Os fótons de infravermelho não têm, cada um, essa energia: eles fazem as moléculas vibrarem mais, ou seja, <b>esquentam</b>.</p>`],
  ],
  alt:'É como tentar quebrar um vidro: mil bolinhas de algodão (infravermelho) esquentam e cansam, mas não quebram; uma pedra (fóton de UV) quebra, mesmo sozinha.',
  warn:'Todas as ondas eletromagnéticas têm praticamente a mesma velocidade no ar (alternativa b). A diferença está na frequência, e não na velocidade.',
  mod:'Inédita.'
},
{
  src:'Inédita', nivel:'intermediário',
  text:`Numa radiografia, um feixe de raios X atravessa a mão do paciente e atinge um filme (ou sensor), como mostra a figura. Onde chega mais radiação, a imagem fica mais escura.${FIG3_7}Os ossos aparecem claros na radiografia porque:`,
  opts:['absorvem mais raios X que os tecidos moles','refletem os raios X de volta para a fonte, como um espelho','emitem luz visível quando são atingidos pelos raios X','difratam os raios X, que se espalham para fora da mão','são totalmente transparentes aos raios X, assim como a pele'], ans:0,
  hint:'Pense na sombra: o que acontece com a radiação que deveria chegar ao filme logo atrás do osso?',
  steps:[
    ['Interação com a matéria', `<p>Os raios X atravessam com facilidade tecidos moles (pele, músculo), formados principalmente por átomos leves. Os ossos têm muito cálcio, um átomo mais pesado, e <b>absorvem</b> bem mais raios X.</p>`],
    ['A imagem', `<p>Atrás do osso chega pouca radiação ao filme, que fica claro: a radiografia é uma espécie de “sombra” do osso.</p>`],
  ],
  alt:'É o mesmo princípio dos aparelhos de raios X dos aeroportos: objetos metálicos absorvem muito e aparecem bem marcados na imagem.',
  warn:'Se os ossos fossem transparentes aos raios X (alternativa e), eles nem apareceriam na imagem.',
  mod:'Inédita.'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Para medir a velocidade da luz em casa, um estudante retirou o prato giratório de um forno de micro-ondas de 2,45 GHz e aqueceu uma barra de chocolate por poucos segundos. Dentro do forno se forma uma onda estacionária, e o chocolate derrete nos ventres, que ficam separados por <b>meio</b> comprimento de onda. A figura mostra o resultado.${FIG3_8}O valor que ele obteve para a velocidade da luz é, aproximadamente:`,
  opts:['1,5 · 10<sup>8</sup> m/s','5,9 · 10<sup>8</sup> m/s','2,9 · 10<sup>10</sup> m/s','2,9 · 10<sup>8</sup> m/s','1,5 · 10<sup>10</sup> m/s'], ans:3,
  hint:'A distância entre dois pontos derretidos vizinhos é λ/2. Passe para metros e use v = λ · f com f = 2,45 · 10⁹ Hz.',
  steps:[
    ['Comprimento de onda', `<div class="eq">${f('λ','2')} = 6,0 cm &nbsp;⇒&nbsp; λ = 12 cm = 0,12 m</div>`],
    ['Velocidade', `<div class="eq">v = λ · f = 0,12 × 2,45 · 10<sup>9</sup> ≈ <span class="hl">2,9 · 10<sup>8</sup> m/s</span></div><p>Bem perto do valor aceito, 3,0 · 10<sup>8</sup> m/s.</p>`],
  ],
  alt:'Numa corda vibrando em onda estacionária, dois ventres vizinhos também ficam a λ/2 um do outro. No forno é o mesmo padrão, só que com micro-ondas.',
  warn:'Usar os 6,0 cm como se fossem λ leva à metade do valor (alternativa a). E esquecer de passar cm para m dá 10¹⁰ (alternativas c e e).',
  mod:'Inédita (experimento caseiro clássico; relaciona com as ondas estacionárias da Somativa 1).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`Num ponto do espaço, o campo elétrico de uma radiação eletromagnética oscila com o tempo como mostra o gráfico.${plot({aria:'Gráfico do campo elétrico E por tempo t, em unidades de 10 elevado a menos 15 segundos. Senoide que se repete a cada 2 unidades de tempo, de 0 a 6.', xmin:0, xmax:6, ymin:-1.3, ymax:1.3, xt:[0,1,2,3,4,5,6], yt:[], xl:'t (10⁻¹⁵ s)', yl:'E', L:[{p:sen(1,2,0,6), c:'var(--sign)'}]})}Usando c = 3,0 · 10<sup>8</sup> m/s e as faixas aproximadas da caixa de ferramentas, essa radiação é classificada como:`,
  opts:['infravermelho','luz visível','ultravioleta','raios X','micro-ondas'], ans:1,
  hint:'O gráfico é em função do tempo: leia o período. Depois calcule f e λ.',
  steps:[
    ['Período', `<p>O campo se repete a cada 2 unidades do eixo: <b>T = 2,0 · 10<sup>−15</sup> s</b>.</p>`],
    ['Frequência e λ', `<div class="eq">f = ${f('1','T')} = ${f('1','2,0 · 10<sup>−15</sup>')} = 5,0 · 10<sup>14</sup> Hz</div><div class="eq">λ = ${f('c','f')} = ${f('3,0 · 10<sup>8</sup>','5,0 · 10<sup>14</sup>')} = 6,0 · 10<sup>−7</sup> m = <span class="hl">600 nm</span></div>`],
    ['Classificar', `<p>600 nm está entre 400 nm e 700 nm: <b>luz visível</b> (alaranjada).</p>`],
  ],
  alt:'Atalho: λ = c · T = 3,0 · 10⁸ × 2,0 · 10⁻¹⁵ = 6,0 · 10⁻⁷ m. Uma onda anda um λ em um período.',
  warn:'Ler o pico em t = 0,5 e achar T = 0,5 · 10⁻¹⁵ s leva a λ = 150 nm, ultravioleta (alternativa c). O período é o tempo de um ciclo completo.',
  mod:'Inédita, no formato do Exemplo 2 do capítulo de Óptica da apostila (gráfico de E × t e tabela de faixas).'
},
{
  src:'Inédita', nivel:'avançado',
  text:`A figura mostra, de forma simplificada, quanto de cada faixa do espectro vinda do espaço é absorvida pela atmosfera antes de chegar ao solo (barra alta = muita absorção).${FIG3_10}Com base na figura, assinale a alternativa correta.`,
  opts:['Telescópios de raios X precisam ficar em órbita, pois a atmosfera absorve essa radiação.','Radiotelescópios precisam ficar em órbita, pois a atmosfera bloqueia quase todas as ondas de rádio.','A atmosfera nos protege do ultravioleta porque reflete toda a luz visível de volta ao espaço.','Os raios gama não chegam ao solo porque são mais lentos que a luz visível na atmosfera.','A luz visível é quase toda absorvida pela atmosfera, e só o infravermelho chega ao solo.'], ans:0,
  hint:'Procure as faixas com barra alta (não chegam ao solo) e as com barra baixa (chegam).',
  steps:[
    ['Lendo a figura', `<ul><li>Gama, raios X e quase todo o UV: absorvidos (o UV, principalmente pela camada de ozônio).</li><li>Luz visível, micro-ondas e boa parte do rádio: atravessam. Essas são as “janelas” da atmosfera.</li></ul>`],
    ['Consequência', `<p>Telescópios ópticos e radiotelescópios funcionam no solo. Para observar raios X, gama e boa parte do UV, é preciso levar o telescópio para fora da atmosfera, em satélites.</p>`],
  ],
  alt:'A mesma absorção que atrapalha os astrônomos é a que protege a vida na superfície das radiações ionizantes vindas do espaço.',
  warn:'Os raios gama não chegam porque são <b>absorvidos</b>, e não por serem lentos (alternativa d): todas as ondas eletromagnéticas têm a mesma velocidade no vácuo.',
  mod:'Inédita.'
},
];
