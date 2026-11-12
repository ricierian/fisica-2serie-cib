/* ===== Consulta rápida (2ª série CIB): formulário, prefixos, grandezas, constantes, pistas e pegadinhas =====
   Formulário: "Essenciais" = fórmulas usadas nas listas deste app. "Para ir além" = complementares do mesmo assunto. */
/* Esquema didático do campo visual de um espelho plano (Formulário → Espelhos planos) */
const FIG_CAMPO = (() => {
  const [d, mk] = seta('var(--ray)');
  let h = ''; for (let y = 72; y < 110; y += 7) h += `<line x1="153" y1="${y}" x2="160" y2="${y - 6}" stroke="var(--sign)" stroke-width="1.2"/>`;
  return fig('0 0 250 182', 'Esquema: espelho plano vertical no meio. O observador O fica à esquerda, abaixo do espelho; sua imagem O linha fica à direita, simétrica. Duas retas tracejadas saem de O linha e passam pelas bordas do espelho; entre elas, à esquerda do espelho, fica o campo visual, sombreado. O ponto P, dentro do campo, é visto: um raio sai de P, reflete no espelho e chega a O. O ponto Q, fora do campo, não é visto.',
    `${d}<polygon points="150,70 90,10 6,10 6,38 150,110" fill="var(--ok)" opacity=".16"/>
    <g stroke="var(--muted)" stroke-width="1.3" stroke-dasharray="5 4"><line x1="230" y1="150" x2="90" y2="10"/><line x1="230" y1="150" x2="6" y2="38"/></g>
    <line x1="150" y1="70" x2="150" y2="110" stroke="var(--sign)" stroke-width="5"/>${h}
    <polyline points="60,40 150,98 70,150" fill="none" stroke="var(--ray)" stroke-width="2.2" marker-end="${mk}"/>
    <line x1="150" y1="98" x2="230" y2="150" stroke="var(--ray)" stroke-width="1.2" stroke-dasharray="3 3" opacity=".7"/>
    <circle cx="70" cy="150" r="6" fill="var(--ink)"/><text x="62" y="174" class="pt pt-strong">O</text>
    <circle cx="230" cy="150" r="6" fill="none" stroke="var(--ink)" stroke-width="1.6" stroke-dasharray="3 2"/><text x="222" y="174" class="pt pt-strong">O′</text>
    <circle cx="60" cy="40" r="5" fill="var(--ok)" stroke="var(--ink)"/><text x="70" y="45" class="pt pt-strong">P <tspan class="pt" style="font-weight:400">(visto)</tspan></text>
    <circle cx="112" cy="140" r="5" fill="var(--plot2)" stroke="var(--ink)"/><text x="121" y="160" class="pt pt-strong">Q <tspan class="pt" style="font-weight:400">(não visto)</tspan></text>
    <text x="10" y="24" class="pt pt-strong" style="fill:var(--ok)">campo visual</text>
    <text x="166" y="80" class="pt">espelho</text>`, 340);
})();

const FORMULARIO = [
  { nome: 'Ondulatória',
    ess: [
      ['Período e frequência', `f = ${f('n','Δt')} &nbsp;;&nbsp; T = ${f('1','f')}<br><small>n: número de oscilações no intervalo Δt</small>`, true],
      ['Equação fundamental', `v = λ · f &nbsp;;&nbsp; v = ${f('λ','T')}`, true],
      ['Eco (ida e volta)', `d = ${f('v · Δt','2')}`, true],
      ['Mudança de meio (refração)', `f<sub>1</sub> = f<sub>2</sub> &nbsp;;&nbsp; ${f('v<sub>1</sub>','v<sub>2</sub>')} = ${f('λ<sub>1</sub>','λ<sub>2</sub>')}<br><small>a frequência é da fonte e não muda</small>`, true]],
    ext: [
      ['Interferência (fontes em fase)', `construtiva: Δd = n · λ<br>destrutiva: Δd = (n + ½) · λ<br><small>n = 0, 1, 2, …; Δd: diferença de caminho</small>`],
      ['Onda estacionária', `nós vizinhos: d = ${f('λ','2')}<br>ventres vizinhos: d = ${f('λ','2')}`],
      ['Velocidade numa corda', `v = √${f('F','μ')} <small>(μ: massa por comprimento)</small>`],
      ['Corda presa nas pontas', `f<sub>n</sub> = ${f('n · v','2L')} <small>(harmônico n)</small>`],
      ['Tubos sonoros', `aberto: f<sub>n</sub> = ${f('n · v','2L')}<br>fechado: f<sub>n</sub> = ${f('n · v','4L')} <small>(n ímpar)</small>`],
      ['Efeito Doppler', `f′ = f · ${f('v ± v<sub>o</sub>','v ∓ v<sub>f</sub>')}<br><small>sinais de cima: observador e fonte se aproximando</small>`]] },

  { nome: 'Espectro eletromagnético',
    ess: [
      ['Equação fundamental da luz', `c = λ · f <small>(no vácuo e, aproximadamente, no ar)</small>`, true],
      ['Ordem do espectro', `rádio → micro-ondas → infravermelho → visível → ultravioleta → raios X → gama<br><small>para a direita: f e energia aumentam; λ diminui</small>`, true],
      ['Radiação ionizante', `arranca elétrons dos átomos e pode danificar o DNA<br>ultravioleta mais energético, raios X e raios gama<br><small>luz visível, infravermelho, micro-ondas e rádio não são ionizantes</small>`, true]],
    ext: [
      ['Luz visível', `vermelho ≈ 700 nm → violeta ≈ 400 nm<br><small>o violeta tem a maior frequência do visível</small>`],
      ['Energia de um fóton', `E = h · f <small>(h = 6,6 × 10⁻³⁴ J·s)</small>`]] },

  { nome: 'Princípios da óptica',
    ess: [
      ['Sombras (raios paralelos)', `${f('H','h')} = ${f('S','s')} <small>(altura e sombra no mesmo instante)</small>`, true],
      ['Câmara escura', `${f('i','o')} = ${f('p′','p')}`, true],
      ['Ano-luz', `d = c · t <small>(t = 1 ano)</small><br>1 ano-luz ≈ 9,5 × 10¹² km`, true],
      ['Cor de um objeto', `<small>reflete a cor que vemos e absorve as outras; sem luz da sua cor, parece preto</small>`, true]],
    ext: [
      ['Fonte pontual e anteparo', `${f('D<sub>sombra</sub>','D<sub>objeto</sub>')} = ${f('d<sub>fonte–anteparo</sub>','d<sub>fonte–objeto</sub>')}<br><small>a área cresce com o quadrado dessa razão</small>`]] },

  { nome: 'Espelhos planos',
    ess: [
      ['Imagem no espelho plano', `d<sub>imagem</sub> = d<sub>objeto</sub><br><small>virtual, direita, do mesmo tamanho e com esquerda e direita trocadas</small>`, true],
      ['Associação de espelhos', `N = ${f('360°','α')} − 1`, true],
      ['Translação do espelho', `espelho anda x → imagem anda 2x <small>(objeto parado)</small>`, true],
      ['Rotação do espelho', `espelho gira α → raio refletido gira 2α`, true],
      ['Campo visual', `① marque O′, a imagem do observador (simétrica a O)<br>② trace retas de O′ passando pelas bordas do espelho<br>③ o que estiver entre essas retas, na frente do espelho, é visto`, true, FIG_CAMPO]],
    ext: [
      ['Velocidade da imagem', `v<sub>imagem</sub> = v<sub>objeto</sub> <small>(em relação ao espelho, em sentidos opostos)</small>`]] },

  { nome: 'Espelhos esféricos',
    ess: [
      ['Distância focal', `f = ${f('R','2')}<br><small>côncavo: f &gt; 0; convexo: f &lt; 0</small>`, true],
      ['Equação de Gauss', `${f('1','f')} = ${f('1','p')} + ${f('1','p′')}<br><small>p′ &gt; 0: imagem real; p′ &lt; 0: imagem virtual</small>`, true],
      ['Aumento da imagem', `A = ${f('i','o')} = −${f('p′','p')}<br><small>A &gt; 0: direita; A &lt; 0: invertida</small>`, true],
      ['Raios notáveis', `paralelo ao eixo → reflete passando pelo foco<br>passando pelo foco → reflete paralelo ao eixo<br>passando pelo centro C → volta sobre si mesmo<br><small>no convexo, vale o mesmo com os prolongamentos</small>`, true]],
    ext: [
      ['Gauss com dois termos', `f = ${f('p · p′','p + p′')}`],
      ['Aumento sem p′', `A = ${f('f','f − p')}`]] },

  { nome: 'Refração',
    ess: [
      ['Índice de refração', `n = ${f('c','v')} <small>(n ≥ 1)</small>`, true],
      ['Lei de Snell', `n₁ · sen θ₁ = n₂ · sen θ₂<br>${f('sen θ₁','sen θ₂')} = ${f('n₂','n₁')} = ${f('v₁','v₂')} = ${f('λ₁','λ₂')}<br><small>ângulos medidos a partir da normal</small>`, true],
      ['Dispersão', `n<sub>vermelho</sub> &lt; … &lt; n<sub>violeta</sub><br><small>o violeta é o mais lento e o mais desviado</small>`, true]],
    ext: [
      ['Ângulo limite', `sen L = ${f('n<sub>menor</sub>','n<sub>maior</sub>')}<br><small>reflexão total: do meio mais refringente para o menos, com θ &gt; L</small>`],
      ['Dioptro plano (profundidade aparente)', `${f('p′','p')} = ${f('n<sub>observador</sub>','n<sub>objeto</sub>')}`],
      ['Lâmina de faces paralelas', `d = e · ${f('sen(i − r)','cos r')}`],
      ['Desvio num prisma', `δ = i + i′ − A`]] }
];

/* ----- Resumo de símbolos e unidades no fim de cada assunto: símbolo | significado | unidade no SI ----- */
const RESUMO_TXT = {
  'Ondulatória': `v | velocidade de propagação da onda | m/s
λ | comprimento de onda | m
f | frequência | Hz
T | período | s
Δt | intervalo de tempo | s
d | distância (no eco, até o obstáculo) | m
Δd | diferença de caminho entre as duas ondas | m
n | número de oscilações; nas fórmulas de interferência e de harmônicos, número inteiro (0, 1, 2…) | sem unidade
F | força de tração na corda | N
μ | densidade linear da corda | kg/m
L | comprimento da corda ou do tubo | m
f<sub>n</sub> | frequência do harmônico n | Hz
f′ | frequência percebida (Doppler) | Hz
v<sub>o</sub>, v<sub>f</sub> | velocidades do observador e da fonte | m/s`,
  'Espectro eletromagnético': `c | velocidade da luz no vácuo (3,0 × 10⁸) | m/s
λ | comprimento de onda | m (também nm)
f | frequência | Hz
E | energia de um fóton | J
h | constante de Planck (6,6 × 10⁻³⁴) | J·s`,
  'Princípios da óptica': `H, h | alturas do objeto maior e do menor | m
S, s | sombras correspondentes | m
i, o | tamanhos da imagem e do objeto | m
p | distância do objeto ao orifício | m
p′ | profundidade da câmara escura | m
d | distância | m (também ano-luz)
c | velocidade da luz (3,0 × 10⁵ km/s) | m/s
t | tempo | s
D | diâmetro (do objeto ou da sombra) | m`,
  'Espelhos planos': `d | distância até o espelho | m
N | número de imagens | sem unidade
α | ângulo entre os espelhos (ou de rotação do espelho) | ° (grau)
x | deslocamento do espelho | m
v | velocidade | m/s`,
  'Espelhos esféricos': `f | distância focal | m
R | raio de curvatura | m
p | distância do objeto ao espelho | m
p′ | distância da imagem ao espelho | m
i, o | tamanhos da imagem e do objeto | m
A | aumento linear | sem unidade`,
  'Refração': `n, n₁, n₂ | índices de refração | sem unidade
c | velocidade da luz no vácuo (3,0 × 10⁸) | m/s
v, v₁, v₂ | velocidade da luz em cada meio | m/s
λ₁, λ₂ | comprimento de onda em cada meio | m
θ₁, θ₂ | ângulos com a normal | ° (grau)
L | ângulo limite | ° (grau)
p, p′ | profundidade real e aparente | m
d | desvio lateral da lâmina | m
e | espessura da lâmina | m
i, r | ângulos de incidência e de refração | ° (grau)
i′ | ângulo de emergência (prisma) | ° (grau)
δ | desvio (prisma) | ° (grau)
A | ângulo de abertura do prisma | ° (grau)`
};
const RESUMO = Object.fromEntries(Object.entries(RESUMO_TXT).map(([k, v]) => [k, v.split('\n').map(l => l.split(' | '))]));

/* ----- Prefixos ----- */
const PREFIXOS = [
  ['tera','T','10¹²','luz visível: f ≈ 500 THz'],
  ['giga','G','10⁹','Wi-Fi de 2,4 GHz'],
  ['mega','M','10⁶','rádio FM de 100 MHz'],
  ['quilo','k','10³','rádio AM de 1 000 kHz'],
  ['hecto','h','10²','1 hPa = 100 Pa (meteorologia)'],
  ['deca','da','10¹','pouco usado'],
  ['deci','d','10⁻¹','1 dm³ = 1 L'],
  ['centi','c','10⁻²','micro-ondas: λ ≈ 12 cm'],
  ['mili','m','10⁻³','ultrassom do morcego: λ de alguns mm'],
  ['micro','µ','10⁻⁶','infravermelho: λ de alguns µm'],
  ['nano','n','10⁻⁹','luz visível: 400 nm a 700 nm'],
  ['pico','p','10⁻¹²','raios gama: λ abaixo de 10 pm']
];

/* ----- Grandezas e unidades (SI) ----- */
const GRANDEZAS_FUND = [
  ['Comprimento','metro','m'],['Massa','quilograma','kg'],['Tempo','segundo','s'],['Corrente elétrica','ampère','A'],
  ['Temperatura','kelvin','K'],['Quantidade de matéria','mol','mol'],['Intensidade luminosa','candela','cd']
];
const GRANDEZAS_DERIV = [
  ['Área','metro quadrado','m²',''],['Volume','metro cúbico','m³','1 m³ = 1 000 L'],['Ângulo','radiano','rad','180° = π rad (na óptica, em geral em graus)'],
  ['Velocidade','metro por segundo','m/s','km/h ÷ 3,6 = m/s'],['Frequência','hertz','Hz','1 Hz = 1 s⁻¹ (oscilações por segundo)'],
  ['Período','segundo','s','T = 1/f'],['Comprimento de onda','metro','m','também nm, µm, cm'],
  ['Força','newton','N','1 N = 1 kg·m/s²'],['Energia','joule','J','1 J = 1 N·m'],['Potência','watt','W','1 W = 1 J/s'],
  ['Índice de refração','(sem unidade)','—','razão entre velocidades: n = c/v'],['Aumento linear','(sem unidade)','—','razão entre tamanhos: A = i/o']
];

/* ----- Constantes e conversões ----- */
const CONSTANTES = [
  ['Velocidade da luz no vácuo','c','3,0 × 10⁸ m/s = 3,0 × 10⁵ km/s'],
  ['Velocidade do som no ar (≈ 20 °C)','v<sub>som</sub>','≈ 340 m/s'],
  ['Velocidade do som na água','v<sub>som</sub>','≈ 1 450 m/s <small>(varia com a temperatura e a salinidade; use o valor do enunciado)</small>'],
  ['Índice de refração do ar','n<sub>ar</sub>','≈ 1,0'],
  ['Índice de refração da água','n<sub>água</sub>','≈ 1,33'],
  ['Índice de refração do vidro comum','n<sub>vidro</sub>','≈ 1,5'],
  ['Índice de refração do diamante','n<sub>diamante</sub>','≈ 2,42'],
  ['Constante de Planck','h','6,6 × 10⁻³⁴ J·s'],
  ['Ano-luz','—','≈ 9,5 × 10¹² km = 9,5 × 10¹⁵ m']
];
const CONVERSOES = [
  ['Velocidade','1 m/s = 3,6 km/h <small>(km/h ÷ 3,6 = m/s)</small>'],
  ['Tempo','1 min = 60 s &nbsp;;&nbsp; 1 h = 3 600 s<br>1 ano ≈ 3,2 × 10⁷ s'],
  ['Frequência','“por minuto” ÷ 60 = por segundo (Hz)<br>1 kHz = 10³ Hz · 1 MHz = 10⁶ Hz · 1 GHz = 10⁹ Hz'],
  ['Comprimento','1 cm = 10⁻² m · 1 mm = 10⁻³ m<br>1 µm = 10⁻⁶ m · 1 nm = 10⁻⁹ m'],
  ['Senos e cossenos', 'sen 30° = cos 60° = 0,50<br>sen 37° = cos 53° ≈ 0,60<br>sen 45° = cos 45° ≈ 0,71<br>sen 53° = cos 37° ≈ 0,80<br>sen 60° = cos 30° ≈ 0,87'],
  ['Ângulo','180° = π rad']
];

/* Páginas da Consulta rápida */
const CONSULTA = [
  { id: 'formulario', ico: 'ƒ', nome: 'Formulário', resumo: 'As fórmulas por assunto: as usadas nas listas em destaque e, em cada assunto, as complementares para ir além.' },
  { id: 'prefixos', ico: 'µ', nome: 'Prefixos e potências de 10', resumo: 'De tera a pico, com exemplos de ondas e de luz e as armadilhas das conversões.' },
  { id: 'grandezas', ico: 'SI', nome: 'Grandezas e unidades', resumo: 'As 7 grandezas fundamentais do SI e as derivadas que aparecem em ondas e óptica.' },
  { id: 'constantes', ico: 'c', nome: 'Constantes e conversões', resumo: 'Velocidades da luz e do som, índices de refração, senos notáveis e conversões.' },
  { id: 'pistas', ico: '→', nome: 'Pistas do enunciado', resumo: 'Palavras e situações do texto que indicam o conceito cobrado: ondas, espectro e óptica.' },
  { id: 'pegadinhas', ico: '!', nome: 'Pegadinhas clássicas', resumo: 'Os erros que mais derrubam em ondas, espectro e óptica, e como evitar cada um.' }
];

/* Pistas do enunciado: [o que aparece no texto, o que pensar] */
const PISTAS = [
  { nome: 'Ondas', itens: [
    ['boia, rolha, folha que sobe e desce, ola no estádio', '<b>A onda transporta energia, não matéria</b>. O meio só oscila no lugar.'],
    ['eco, sonar, morcego, ultrassonografia, sensor de estacionamento', '<b>Reflexão</b>. d = v · Δt / 2 (ida e volta).'],
    ['“ouve atrás do muro”, “contorna”, porta, fenda, rádio AM atrás do morro', '<b>Difração</b>. Forte quando λ é parecido com o obstáculo.'],
    ['muda de meio, ar → água, região funda → rasa', '<b>Refração</b>. A frequência não muda; v e λ mudam juntos.'],
    ['bolha de sabão colorida, mancha de óleo, cancelamento de ruído, dois alto-falantes', '<b>Interferência</b>. Ondas se reforçam ou se anulam.'],
    ['óculos polarizados, óculos 3D, dois filtros cruzados', '<b>Polarização</b>. Só ondas transversais (o som no ar não).'],
    ['chocolate no micro-ondas, nós e ventres, corda presa nas pontas', '<b>Onda estacionária</b>. Distância entre nós = λ/2.'],
    ['ambulância, radar, “se aproxima”, “se afasta”', '<b>Efeito Doppler</b>. Aproximação → f maior; afastamento → f menor.'],
    ['gráfico com “t (s)” no eixo horizontal', '<b>Gráfico no tempo</b>. De crista a crista se lê o <b>período</b>, não λ.']] },
  { nome: 'Espectro eletromagnético', itens: [
    ['Wi-Fi, celular, forno de micro-ondas, radar', '<b>Micro-ondas</b> (ou rádio). λ de centímetros.'],
    ['controle remoto, câmera térmica, sensor de presença, “calor” de uma brasa', '<b>Infravermelho</b>. Emitido por corpos aquecidos.'],
    ['bronzeado, queimadura solar, protetor solar, esterilização, camada de ozônio', '<b>Ultravioleta</b>. Mais energia por fóton que o visível.'],
    ['radiografia, ossos claros, aeroporto', '<b>Raios X</b>. Ossos absorvem mais que os tecidos moles.'],
    ['radioterapia, cobalto-60, “ionizante”, chumbo', '<b>Raios gama</b> (e X). Arrancam elétrons: ionizantes.'],
    ['“mais rápido”, “mais lento” no vácuo', '<b>Todas</b> as ondas eletromagnéticas andam a c no vácuo.'],
    ['GHz, MHz, nm', '<b>Potências de 10</b>. Converta antes de usar c = λ · f.']] },
  { nome: 'Óptica', itens: [
    ['sombra, eclipse, “mesmo instante”, poste e prédio', '<b>Propagação retilínea</b> e <b>semelhança de triângulos</b>.'],
    ['câmara escura, caixa com furo, imagem invertida', '<b>Câmara escura</b>. i/o = p′/p.'],
    ['“iluminado só com luz vermelha”, cor da roupa sob outra luz', '<b>Cor do objeto</b>. Ele só reflete a luz da sua cor que chega até ele.'],
    ['anos-luz, “a luz que vemos hoje saiu há…”', '<b>Ano-luz é distância</b>. Ver longe é ver o passado.'],
    ['AMBULÂNCIA espelhada, nome na camiseta, provador com dois espelhos', '<b>Espelho plano</b>. Esquerda e direita trocadas; N = 360°/α − 1.'],
    ['retrovisor, saída de garagem, “campo visual maior”, “parece mais longe”', '<b>Espelho convexo</b>. Imagem virtual, direita e menor.'],
    ['espelho de maquiagem ou de dentista, farol, forno solar, “projeta na parede”', '<b>Espelho côncavo</b>. Amplia de perto; projeta imagem real.'],
    ['canudo “quebrado”, piscina mais rasa, peixe “mais alto”', '<b>Refração</b>. A imagem fica mais perto da superfície.'],
    ['fibra óptica, brilho do diamante, prisma que funciona como espelho', '<b>Reflexão total</b>. Do meio mais refringente para o menos, com θ &gt; L.'],
    ['arco-íris, prisma, luz branca separada em cores', '<b>Dispersão</b>. O índice depende da cor; o violeta desvia mais.']] }
];

/* Pegadinhas clássicas: [erro, como evitar] */
const PEGADINHAS = [
  { nome: 'Ondas', itens: [
    ['Eco sem dividir por 2', 'O som vai e volta: d = v · Δt / 2.'],
    ['Achar que a frequência muda na refração', 'A frequência é da fonte. Na mudança de meio, v e λ mudam na mesma proporção.'],
    ['Amplitude de pico a vale', 'A amplitude vai do equilíbrio até a crista. De crista a vale são 2A.'],
    ['Contar cristas em vez de espaços', 'Entre 5 cristas há 4 comprimentos de onda.'],
    ['Confundir gráfico no tempo com gráfico no espaço', 'Eixo t: de crista a crista é o período T. Eixo x: é o comprimento de onda λ.'],
    ['Distância entre nós', 'Entre dois nós (ou dois ventres) vizinhos cabe λ/2, não λ.'],
    ['“Por minuto” como hertz', 'Hz é por segundo: divida por 60.'],
    ['Polarizar o som', 'Só ondas transversais se polarizam. O som no ar é longitudinal.']] },
  { nome: 'Espectro eletromagnético', itens: [
    ['“Mais energia, mais rápido”', 'No vácuo, todas andam a 3,0 × 10⁸ m/s. A energia do fóton cresce com a frequência, não a velocidade.'],
    ['Inverter c = λ · f', 'λ = c / f: a velocidade fica em cima.'],
    ['Esquecer o prefixo', 'nm = 10⁻⁹ m · GHz = 10⁹ Hz. Sem converter, a resposta erra por potências de 10.'],
    ['Toda radiação é perigosa', 'Só a ionizante (UV mais energético, X e gama) arranca elétrons. Luz, Wi-Fi e infravermelho não ionizam.'],
    ['Micro-ondas como onda mecânica', 'São eletromagnéticas, como a luz: atravessam o vácuo.']] },
  { nome: 'Óptica', itens: [
    ['Distância até a imagem no espelho plano', 'A imagem está atrás do espelho: da pessoa até a imagem é o dobro da distância até o espelho.'],
    ['Espelho plano inverte de cima para baixo', 'Não inverte: a imagem é direita. Ele troca esquerda e direita.'],
    ['Esquecer o −1 na associação', 'N = 360°/α − 1: o objeto não conta como imagem.'],
    ['Sinal do espelho convexo', 'No convexo, f é negativo (f = −R/2).'],
    ['Somar os inversos errado', '1/p′ = 1/f − 1/p: subtraia, não some.'],
    ['Medir p′ a partir do objeto', 'p e p′ são sempre medidos a partir do espelho.'],
    ['Razão de áreas igual à de diâmetros', 'Diâmetro 4 vezes maior → área 16 vezes maior.'],
    ['Ângulo com a superfície', 'Na refração e na reflexão, os ângulos são medidos a partir da <b>normal</b>.'],
    ['Maior índice, maior velocidade', 'É o contrário: v = c / n.'],
    ['Reflexão total entrando no vidro', 'Só acontece saindo do meio mais refringente para o menos.'],
    ['Ano-luz como tempo', 'Ano-luz é distância: o que a luz percorre em 1 ano.']] }
];
