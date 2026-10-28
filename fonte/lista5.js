/* ===== Lista 5 · Espelhos planos e esféricos ===== */
const TOOLS5 = [
  ['Espelho plano', `Imagem virtual, direita, do mesmo tamanho e simétrica: d<sub>imagem</sub> = d<sub>objeto</sub><br>Troca esquerda e direita (enantiomorfa).`],
  ['Movimento e associação', `Espelho translada a → imagem translada 2a<br>Espelho gira α → raio refletido gira 2α<br>n = ${f('360°','α')} − 1 (n.º de imagens)`],
  ['Elementos', `f = ${f('R','2')}<br>Côncavo: f &gt; 0 · Convexo: f &lt; 0`],
  ['Equação de Gauss', `${f('1','f')} = ${f('1','p')} + ${f('1',"p'")}<br>p' &gt; 0: imagem real · p' &lt; 0: virtual`],
  ['Aumento', `A = ${f('i','o')} = −${f("p'",'p')}<br>A &gt; 0: direita · A &lt; 0: invertida<br>|A| &gt; 1: maior · |A| &lt; 1: menor`],
  ['Raios notáveis', `Paralelo ao eixo → reflete passando pelo foco<br>Pelo foco → reflete paralelo ao eixo<br>Pelo centro C → volta sobre si mesmo`],
];

/* Q2: ambulância */
const FIG5_2 = fig('0 0 340 130', 'Frente de uma ambulância, com a palavra AMBULÂNCIA escrita de forma espelhada, com as letras na ordem inversa e viradas.',
  `<rect x="22" y="20" width="296" height="90" rx="14" fill="var(--surface)" stroke="var(--ink)" stroke-width="2"/>
  <rect x="44" y="30" width="252" height="26" rx="5" fill="var(--sign)" opacity=".18"/>
  <g transform="translate(340 0) scale(-1 1)"><text x="170" y="84" text-anchor="middle" style="font-family:var(--f-display);font-weight:700;font-size:30px;fill:#D23B2A;letter-spacing:1px">AMBULÂNCIA</text></g>
  <circle cx="54" cy="96" r="7" fill="#F2B705" stroke="var(--ink)"/><circle cx="286" cy="96" r="7" fill="#F2B705" stroke="var(--ink)"/>`);

/* Q4: campo visual (malha) */
function campo(sol){
  const u = 28, ox = 132, oy = 214; // (0,0) do sistema
  const X = x => ox + x * u, Y = y => oy - y * u;
  let s = '';
  for (let x = -4; x <= 6; x++) s += `<line x1="${X(x)}" y1="${Y(0)}" x2="${X(x)}" y2="${Y(7)}" stroke="var(--line)"/>`;
  for (let y = 0; y <= 7; y++) s += `<line x1="${X(-4)}" y1="${Y(y)}" x2="${X(6)}" y2="${Y(y)}" stroke="var(--line)"/>`;
  s += `<line x1="${X(0)}" y1="${Y(2)}" x2="${X(0)}" y2="${Y(4)}" stroke="var(--sign)" stroke-width="5"/>`;
  for (let y = 2.1; y < 4; y += 0.3) s += `<line x1="${X(0) - 3}" y1="${Y(y)}" x2="${X(0) - 10}" y2="${Y(y) + 7}" stroke="var(--sign)" stroke-width="1.4"/>`;
  if (sol){
    s += `<polygon points="${X(0)},${Y(2)} ${X(6)},${Y(4)} ${X(6)},${Y(7)} ${X(3)},${Y(7)} ${X(0)},${Y(4)}" fill="var(--ok)" opacity=".16"/>`;
    s += `<g stroke="var(--ray)" stroke-width="1.6" stroke-dasharray="5 4"><line x1="${X(-3)}" y1="${Y(1)}" x2="${X(6)}" y2="${Y(4)}"/><line x1="${X(-3)}" y1="${Y(1)}" x2="${X(3)}" y2="${Y(7)}"/></g>`;
    s += `<circle cx="${X(-3)}" cy="${Y(1)}" r="5" fill="none" stroke="var(--ink)" stroke-width="2"/><text x="${X(-3)}" y="${Y(1) + 20}" text-anchor="middle" class="pt pt-strong">O'</text>`;
  }
  s += `<circle cx="${X(3)}" cy="${Y(1)}" r="6" fill="var(--ink)"/><text x="${X(3) + 10}" y="${Y(1) + 18}" class="pt pt-strong">O</text>`;
  [['A',1,1],['B',2,4],['C',5,3],['D',3,5],['E',1,6]].forEach(([n, x, y]) => { s += `<circle cx="${X(x)}" cy="${Y(y)}" r="5" fill="var(--plot2)" stroke="var(--ink)" stroke-width="1.2"/><text x="${X(x) + 8}" y="${Y(y) - 7}" class="pt pt-strong">${n}</text>`; });
  s += `<text x="${X(0) - 14}" y="${Y(4.3)}" text-anchor="end" class="pt pt-strong">espelho</text>`;
  return fig('0 0 340 230', sol ? 'Solução: a imagem O\' do observador fica 3 quadradinhos atrás do espelho. As retas que saem de O\' e passam pelas bordas do espelho limitam o campo visual, sombreado. Ficam dentro dele apenas os pontos B e D.' : 'Malha quadriculada com um espelho plano vertical de 2 quadradinhos de altura. O observador O está 3 quadradinhos à direita do espelho e 1 quadradinho acima da base da malha, abaixo da borda inferior do espelho. Os pontos, em coordenadas (horizontal, vertical) a partir da base do espelho: A (1, 1), B (2, 4), C (5, 3), D (3, 5) e E (1, 6). O espelho vai da altura 2 à altura 4.', s);
}

/* Q5: espelhos a 90° com dado */
const FIG5_5 = (() => {
  let dots = ''; [[-9,-9],[9,-9],[0,0],[-9,9],[9,9]].forEach(([a,b]) => { dots += `<circle cx="${150 + a}" cy="${100 + b}" r="3.2" fill="var(--ink)"/>`; });
  return fig('0 0 340 190', 'Vista de cima: dois espelhos planos verticais formando um ângulo de 90 graus. Um dado, com a face de 5 pontos voltada para os espelhos, está no meio do ângulo.',
    `<line x1="60" y1="170" x2="60" y2="16" stroke="var(--sign)" stroke-width="5"/><line x1="60" y1="170" x2="320" y2="170" stroke="var(--sign)" stroke-width="5"/>
    <path d="M60 140 A30 30 0 0 1 90 170" fill="none" stroke="var(--ink)" stroke-width="1.4"/><text x="94" y="152" class="pt pt-strong">90°</text>
    <rect x="132" y="82" width="36" height="36" rx="6" fill="var(--surface)" stroke="var(--ink)" stroke-width="1.6" transform="rotate(45 150 100)"/>${dots}
    <text x="40" y="96" text-anchor="middle" class="pt" transform="rotate(-90 40 96)">espelho</text><text x="200" y="186" text-anchor="middle" class="pt">espelho</text>`);
})();

/* Q7: espelho côncavo projetando na parede */
const FIG5_7 = (() => {
  const [d, mk] = seta('var(--ink)');
  return fig('0 0 340 170', 'Uma parede à esquerda, um objeto luminoso no meio e um espelho côncavo à direita, voltado para a parede. O objeto está a 30 centímetros do espelho e a 30 centímetros da parede. O espelho projeta na parede uma imagem nítida do objeto.',
    `${d}<rect x="40" y="16" width="14" height="128" fill="var(--muted)" opacity=".45"/><text x="47" y="160" text-anchor="middle" class="pt">parede</text>
    <line x1="54" y1="90" x2="300" y2="90" stroke="var(--muted)" stroke-dasharray="3 4"/>
    <line x1="177" y1="90" x2="177" y2="58" stroke="var(--plot2)" stroke-width="4" marker-end="${mk}"/><text x="177" y="108" text-anchor="middle" class="pt pt-strong">objeto</text>
    <path d="M292 22 Q312 90 292 158" fill="none" stroke="var(--sign)" stroke-width="4"/><text x="300" y="166" text-anchor="middle" class="pt">espelho</text>
    <line x1="54" y1="134" x2="177" y2="134" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="115" y="128" text-anchor="middle" class="pt pt-strong">30 cm</text>
    <line x1="177" y1="134" x2="300" y2="134" stroke="var(--muted)" stroke-width="1.2" marker-start="${mk}" marker-end="${mk}"/><text x="238" y="128" text-anchor="middle" class="pt pt-strong">30 cm</text>`);
})();

/* Q9: côncavo, objeto entre C e F */
function concavo(sol){
  const [d, mk] = seta('var(--plot2)'); const [d2, mk2] = seta('var(--ray)');
  let s = `${d}${d2}<line x1="10" y1="100" x2="322" y2="100" stroke="var(--muted)" stroke-width="1.2"/>
    <path d="M304 18 Q316 100 304 182" fill="none" stroke="var(--sign)" stroke-width="4"/>
    ${[190, 250, 310].map((x, i) => `<circle cx="${x}" cy="100" r="3" fill="var(--ink)"/><text x="${x}" y="${i === 2 ? 92 : 118}" text-anchor="middle" class="pt pt-strong">${['C','F','V'][i]}</text>`).join('')}
    <line x1="220" y1="100" x2="220" y2="72" stroke="var(--plot2)" stroke-width="4" marker-end="${mk}"/><text x="220" y="118" text-anchor="middle" class="pt pt-strong">o</text>`;
  if (sol) s += `<g stroke="var(--ray)" stroke-width="1.8" fill="none"><polyline points="220,70 309,70 130,160"/><polyline points="220,70 309,159 130,160"/></g>
    <line x1="130" y1="100" x2="130" y2="158" stroke="var(--plot2)" stroke-width="4" stroke-dasharray="1 0" marker-end="${mk}"/><text x="122" y="94" text-anchor="middle" class="pt pt-strong">i</text>`;
  return fig('0 0 340 196', sol ? 'Construção: o raio que sai do topo do objeto paralelo ao eixo reflete passando pelo foco F; o raio que passa por F reflete paralelo ao eixo. Eles se cruzam além de C, abaixo do eixo, onde fica o topo da imagem: real, invertida e maior que o objeto.' : 'Espelho esférico côncavo à direita, com vértice V, foco F e centro de curvatura C marcados no eixo principal. Um objeto o está entre C e F.', s);
}

/* Q10: pessoa e espelho em movimento */
const FIG5_10 = (() => {
  const [d, mk] = seta('var(--ink)'); let h = '';
  for (let y = 26; y < 140; y += 10) h += `<line x1="262" y1="${y}" x2="270" y2="${y - 7}" stroke="var(--sign)" stroke-width="1.3"/>`;
  return fig('0 0 340 170', 'Uma pessoa à esquerda caminha para a direita, em direção a um espelho plano, a 1,5 metro por segundo. O espelho, sobre um carrinho, se move para a esquerda, em direção à pessoa, a 0,5 metro por segundo. Velocidades em relação ao chão.',
    `${d}<line x1="10" y1="146" x2="330" y2="146" stroke="var(--muted)" stroke-width="2"/>
    <circle cx="60" cy="58" r="10" fill="var(--plot2)" stroke="var(--ink)"/><line x1="60" y1="68" x2="60" y2="112" stroke="var(--ink)" stroke-width="3"/><line x1="60" y1="112" x2="48" y2="144" stroke="var(--ink)" stroke-width="3"/><line x1="60" y1="112" x2="74" y2="144" stroke="var(--ink)" stroke-width="3"/><line x1="60" y1="80" x2="76" y2="98" stroke="var(--ink)" stroke-width="3"/>
    <line x1="86" y1="40" x2="146" y2="40" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/><text x="116" y="32" text-anchor="middle" class="pt pt-strong">1,5 m/s</text>
    <line x1="260" y1="20" x2="260" y2="134" stroke="var(--sign)" stroke-width="5"/>${h}<rect x="244" y="134" width="34" height="8" fill="var(--ink)"/>
    <line x1="246" y1="40" x2="196" y2="40" stroke="var(--ink)" stroke-width="2" marker-end="${mk}"/><text x="221" y="32" text-anchor="middle" class="pt pt-strong">0,5 m/s</text>
    <text x="330" y="164" text-anchor="end" class="pt">velocidades em relação ao chão</text>`);
})();

const QL5 = [
{
  src:'Inédita', nivel:'básico',
  text:'Uma pessoa está a 1,5 m de um espelho plano vertical. Ela dá alguns passos e se aproxima 0,5 m do espelho. A nova distância entre a pessoa e a sua imagem é:',
  opts:['1,0 m','2,0 m','3,0 m','2,5 m','0,5 m'], ans:1,
  hint:'Primeiro descubra a nova distância da pessoa ao espelho. A imagem está à mesma distância, do outro lado.',
  steps:[
    ['Nova distância ao espelho', `<div class="eq">1,5 − 0,5 = 1,0 m</div>`],
    ['Distância até a imagem', `<p>A imagem fica 1,0 m atrás do espelho (simetria). Da pessoa até a imagem:</p><div class="eq">1,0 + 1,0 = <span class="hl">2,0 m</span></div>`],
  ],
  alt:'A distância pessoa–imagem é sempre o dobro da distância pessoa–espelho. Se ela se aproxima 0,5 m do espelho, a distância até a imagem diminui o dobro disso: 3,0 − 1,0 = 2,0 m.',
  warn:'1,0 m é a distância da pessoa ao <b>espelho</b> (alternativa a). A imagem está atrás dele.',
  mod:'Inédita (mesma ideia do Exemplo 1 de Espelhos Planos da apostila, o barbeiro).'
},
{
  src:'Inédita', nivel:'básico',
  text:`Na frente de muitas ambulâncias, a palavra AMBULÂNCIA aparece escrita de forma espelhada, como na figura.${FIG5_2}Isso é feito porque:`,
  opts:['o motorista da frente lê a palavra pelo retrovisor, que inverte esquerda e direita','a palavra fica mais visível à noite quando escrita ao contrário, por causa da refração','o espelho plano inverte a imagem de cima para baixo, e a escrita compensa essa inversão','pedestres que estão na calçada leem a palavra com mais facilidade quando ela está espelhada','é uma exigência estética, sem relação com a óptica dos espelhos'], ans:0,
  hint:'Quem está na frente da ambulância vê a ambulância como? Diretamente ou por um espelho?',
  steps:[
    ['Imagem no espelho', `<p>A imagem de um espelho plano tem esquerda e direita trocadas em relação ao objeto: ela é <b>enantiomorfa</b>. É por isso que um texto visto no espelho aparece “ao contrário”.</p>`],
    ['A ambulância', `<p>O motorista que está à frente vê a ambulância pelo retrovisor. Escrita já espelhada, a palavra é espelhada de novo pelo retrovisor e aparece normal: AMBULÂNCIA.</p>`],
  ],
  alt:'Escreva seu nome numa folha e olhe pelo espelho: ele aparece invertido. Agora escreva espelhado e olhe de novo: aparece certo. Espelhar duas vezes desfaz a troca.',
  warn:'O espelho plano <b>não</b> inverte de cima para baixo (alternativa c): a imagem é direita. Ele troca esquerda e direita.',
  mod:'Inédita (mesma ideia da questão da ETEC da Somativa 2, a palavra FÍSICA na camiseta).'
},
{
  src:'Famerp (modificada)', nivel:'básico',
  text:'Em saídas de garagem, cruzamentos estreitos e portas de ônibus, usam-se espelhos esféricos convexos. Para um objeto real, a imagem formada por um espelho convexo é sempre ___, e esse espelho é usado porque ___.',
  opts:['real, invertida e menor; reduz o campo visual','virtual, invertida e maior; amplia o campo visual','real, direita e do mesmo tamanho; amplia o campo visual','virtual, direita e maior; reduz o campo visual','virtual, direita e menor; amplia o campo visual'], ans:4,
  hint:'Lembre do visor do capacete do astronauta (Somativa 2) ou da parte de trás de uma colher: como você aparece nele?',
  steps:[
    ['Características da imagem', `<p>No espelho convexo, os raios refletidos divergem. A imagem é formada pelos prolongamentos (atrás do espelho): <b>virtual</b>, <b>direita</b> e <b>menor</b> que o objeto, qualquer que seja a posição do objeto real.</p>`],
    ['Por que usar', `<p>Como as imagens ficam menores, “cabe” muito mais coisa no espelho: o <b>campo visual é maior</b> que o de um espelho plano do mesmo tamanho.</p>`],
  ],
  alt:'Pela equação: no convexo f < 0. Para qualquer p > 0, a equação de Gauss dá p\' < 0 (virtual) e 0 < A < 1 (direita e menor).',
  warn:'O espelho convexo mostra mais coisas, mas cada uma delas fica menor (alternativa d está errada). Por isso, no retrovisor, os carros parecem mais distantes do que realmente estão.',
  mod:'Original (Famerp, Somativa 2): imagem no visor do capacete do astronauta. Modificada: aplicações em garagens e ônibus, pedindo também a vantagem do espelho.'
},
{
  src:'Univag (modificada)', nivel:'intermediário',
  text:`Na malha quadriculada, O é um observador diante de um espelho plano vertical, representado pelo traço grosso, e A, B, C, D e E são pequenos objetos.${campo(false)}O observador consegue ver, refletidos no espelho, somente os objetos:`,
  opts:['B','B e D','A e C','B, D e E','C, D e E'], ans:1,
  hint:'Marque a imagem O\' do observador, simétrica em relação ao espelho. Trace retas de O\' passando pelas duas bordas do espelho: o campo visual fica entre elas.',
  steps:[
    ['Imagem do observador', `<p>O está 3 quadradinhos à direita do espelho. Sua imagem O' fica 3 quadradinhos à esquerda, na mesma altura.</p>`],
    ['Campo visual', `<p>As retas que saem de O' e passam pelas bordas do espelho limitam a região que o observador vê refletida.</p>${campo(true)}`],
    ['Conclusão', `<p>Dentro da região estão apenas <b>B</b> e <b>D</b>. A fica abaixo da reta inferior; E fica acima da reta superior; C fica abaixo da reta inferior.</p>`],
  ],
  alt:'Outro caminho: para cada objeto, marque sua imagem atrás do espelho e ligue-a ao olho. Se a reta passar pelo espelho, o objeto é visto. É o mesmo resultado, só que com mais traços.',
  warn:'C está mais perto do observador do que D, mas fica fora do campo visual. O que importa é a posição em relação às retas que passam pelas bordas do espelho, e não a distância.',
  mod:'Original (Univag, Somativa 2): malha com observador e objetos R, S, T e U. Modificada: nova malha, novos pontos e outro observador.'
},
{
  src:'EEAR (modificada)', nivel:'intermediário',
  text:`Um dado é colocado entre dois espelhos planos verticais que formam um ângulo de 90°, no plano que divide esse ângulo ao meio (figura, vista de cima). Nos espelhos é possível ver imagens nítidas de apenas uma face do dado, e a soma de todos os pontos dessa face nas imagens é 15.${FIG5_5}A face do dado voltada para os espelhos é a de número:`,
  opts:['3','4','6','5','1'], ans:3,
  hint:'Calcule quantas imagens a associação forma. A soma dos pontos é (número de imagens) × (pontos da face).',
  steps:[
    ['Número de imagens', `<div class="eq">n = ${f('360°','90°')} − 1 = 4 − 1 = 3 imagens</div>`],
    ['Pontos da face', `<div class="eq">3 × (pontos da face) = 15 ⇒ face = <span class="hl">5</span></div>`],
  ],
  alt:'Com dois espelhos a 90°, como num canto de provador de loja, você vê 3 imagens de si mesmo: uma em cada espelho e uma “no canto”.',
  warn:'Usar 360 ÷ 90 = 4 como número de imagens (esquecendo o −1) dá 15 ÷ 4, que não é inteiro. A conta da associação sempre desconta o próprio objeto.',
  mod:'Original (EEAR): espelhos a 60° e soma de 20 pontos (face 4). Modificada: espelhos a 90° e soma de 15 (face 5).'
},
{
  src:'Inédita', nivel:'intermediário',
  text:'Um objeto de 3,0 cm de altura é colocado a 30 cm de um espelho esférico côncavo de distância focal 20 cm, perpendicular ao eixo principal (condições de Gauss). A imagem se forma:',
  opts:['a 60 cm do espelho; 6,0 cm; real e invertida','a 12 cm do espelho; 1,2 cm; virtual e direita','a 60 cm do espelho; 6,0 cm; virtual e direita','a 60 cm do espelho; 1,5 cm; real e invertida','a 10 cm do espelho; 1,0 cm; real e invertida'], ans:0,
  hint:'Isole 1/p\' na equação de Gauss. O sinal de p\' diz se a imagem é real; o sinal de A diz se é direita ou invertida.',
  steps:[
    ['Posição da imagem', `<div class="eq">${f('1',"p'")} = ${f('1','f')} − ${f('1','p')} = ${f('1','20')} − ${f('1','30')} = ${f('3 − 2','60')} = ${f('1','60')}</div><div class="eq">p' = <span class="hl">60 cm</span> &nbsp; (p' &gt; 0: real)</div>`],
    ['Tamanho da imagem', `<div class="eq">A = −${f("p'",'p')} = −${f('60','30')} = −2</div><div class="eq">i = A · o = −2 × 3,0 = <span class="hl">−6,0 cm</span> &nbsp; (sinal −: invertida)</div>`],
  ],
  alt:'O objeto está entre F (20 cm) e C (40 cm). Pela construção com raios notáveis, nessa região a imagem é sempre real, invertida e maior, além de C. Confere com 60 cm e 6,0 cm.',
  warn:'Somar os inversos em vez de subtrair (1/20 + 1/30) dá 12 cm (alternativa b). Na equação de Gauss, 1/f = 1/p + 1/p\': para achar 1/p\', subtraia 1/p de 1/f.',
  mod:'Inédita (mesmo tipo do Exemplo 3 de Espelhos Esféricos da apostila).'
},
{
  src:'Famerp (modificada)', nivel:'intermediário',
  text:`Um objeto luminoso está a 30 cm de uma parede e a 30 cm de um espelho côncavo, que projeta na parede uma imagem nítida do objeto (figura). O espelho obedece às condições de Gauss.${FIG5_7}A distância focal do espelho é:`,
  opts:['15 cm','30 cm','45 cm','20 cm','60 cm'], ans:3,
  hint:'A imagem está na parede. Qual é a distância da parede ao espelho? Essa é a posição da imagem, p\'.',
  steps:[
    ['Dados', `<ul><li>Objeto: p = 30 cm</li><li>Imagem projetada na parede (real): p' = 30 + 30 = 60 cm</li></ul>`],
    ['Equação de Gauss', `<div class="eq">${f('1','f')} = ${f('1','30')} + ${f('1','60')} = ${f('2 + 1','60')} = ${f('3','60')} = ${f('1','20')}</div><div class="eq">f = <span class="hl">20 cm</span></div>`],
  ],
  alt:`Atalho para dois termos: f = ${f("p · p'","p + p'")} = ${f('30 × 60','90')} = 20 cm.`,
  warn:'Usar p\' = 30 cm (a distância do objeto à parede) dá f = 15 cm (alternativa a). A imagem está na parede, e p\' é medido a partir do espelho.',
  mod:'Original (Famerp): objeto a 40 cm da parede e 20 cm do espelho (f = 15 cm). Modificada: 30 cm e 30 cm (f = 20 cm).'
},
{
  src:'Unifesp (modificada)', nivel:'avançado',
  text:'O retrovisor externo de um carro é um espelho esférico convexo com raio de curvatura de 1,6 m. Pelo retrovisor, o motorista vê a imagem de uma moto que está atrás do carro, com altura igual a 1/10 da altura real da moto (condições de Gauss). A distância entre a moto e o espelho é:',
  opts:['8,0 m','0,72 m','8,8 m','0,08 m','7,2 m'], ans:4,
  hint:'No espelho convexo, f é negativo: f = −R/2. A imagem é direita, então A = +1/10. Escreva p\' em função de p e use Gauss.',
  steps:[
    ['Dados', `<ul><li>f = −${f('1,6','2')} = −0,8 m (convexo)</li><li>A = +${f('1','10')} (imagem direita e menor)</li></ul>`],
    ['Relacionando p e p\'', `<div class="eq">A = −${f("p'",'p')} = ${f('1','10')} ⇒ p' = −${f('p','10')}</div>`],
    ['Equação de Gauss', `<div class="eq">${f('1','f')} = ${f('1','p')} + ${f('1',"p'")} = ${f('1','p')} − ${f('10','p')} = −${f('9','p')}</div><div class="eq">−${f('1','0,8')} = −${f('9','p')} ⇒ p = 9 × 0,8 = <span class="hl">7,2 m</span></div>`],
  ],
  alt:`Existe uma fórmula direta para o aumento: A = ${f('f','f − p')}. Com f = −0,8: ${f('1','10')} = ${f('−0,8','−0,8 − p')} ⇒ −0,8 − p = −8 ⇒ p = 7,2 m.`,
  warn:'Tratar o espelho como côncavo (f positivo) e a imagem como invertida leva a 8,8 m (alternativa c). E 8,0 m (alternativa a) sai de supor que a imagem está exatamente no foco (p\' = f), o que só vale para objetos muito distantes.',
  mod:'Original (Unifesp): espelho convexo num parque e criança vendo imagem com 1/3 da altura. Modificada: retrovisor de carro com R = 1,6 m e imagem com 1/10 da altura.'
},
{
  src:'UEFS (modificada)', nivel:'avançado',
  text:`A figura mostra um espelho esférico côncavo gaussiano, com centro de curvatura C, foco F e vértice V, e um objeto o colocado entre C e F.${concavo(false)}A imagem desse objeto é:`,
  opts:['virtual, direita e maior, atrás do espelho','real, invertida e menor, entre F e C','real, invertida e maior, além de C','real, invertida e do mesmo tamanho, sobre C','imprópria, formada no infinito'], ans:2,
  hint:'Use dois raios notáveis saindo do topo do objeto: um paralelo ao eixo e outro passando pelo foco.',
  steps:[
    ['Raios notáveis', `<ul><li>O raio paralelo ao eixo reflete passando por F.</li><li>O raio que passa por F reflete paralelo ao eixo.</li></ul>${concavo(true)}`],
    ['Classificando', `<p>Os raios refletidos se cruzam de verdade, à esquerda de C e abaixo do eixo: a imagem é <b>real</b>, <b>invertida</b>, <b>maior</b> que o objeto e fica <b>além de C</b>.</p>`],
  ],
  alt:'Pela equação, com f = 2 unidades e o objeto em p = 3 unidades (entre F e C): 1/p\' = 1/2 − 1/3 = 1/6, então p\' = 6 (além de C, que está em 4) e A = −2 (invertida e maior).',
  warn:'Imagem real, invertida e menor entre F e C (alternativa b) é o caso do objeto <b>além</b> de C. As duas situações são “trocadas” uma da outra pela reversibilidade da luz.',
  mod:'Original (UEFS): espelho com regiões coloridas e objetos pontuais em duas posições. Modificada: objeto extenso entre C e F, pedindo a classificação da imagem.'
},
{
  src:'UFRGS (modificada)', nivel:'avançado',
  text:`Uma pessoa caminha a 1,5 m/s em direção a um espelho plano vertical, montado num carrinho que se move a 0,5 m/s em direção à pessoa. As duas velocidades são medidas em relação ao chão.${FIG5_10}A imagem da pessoa se aproxima dela com velocidade de:`,
  opts:['2,0 m/s','3,0 m/s','4,0 m/s','5,0 m/s','1,0 m/s'], ans:2,
  hint:'Olhe tudo a partir do espelho: com que velocidade a pessoa se aproxima dele? A imagem faz o mesmo, do outro lado.',
  steps:[
    ['Pessoa em relação ao espelho', `<p>Os dois vêm um em direção ao outro: a distância pessoa–espelho diminui</p><div class="eq">1,5 + 0,5 = 2,0 m/s</div>`],
    ['Imagem em relação ao espelho', `<p>A imagem é sempre simétrica: ela se aproxima do espelho com os mesmos 2,0 m/s, do lado de trás.</p>`],
    ['Imagem em relação à pessoa', `<p>A distância pessoa–imagem é o dobro da distância pessoa–espelho, então diminui com o dobro da rapidez:</p><div class="eq">2 × 2,0 = <span class="hl">4,0 m/s</span></div>`],
  ],
  alt:'Em 1 s, a distância pessoa–espelho diminui 2,0 m. A distância pessoa–imagem, que é o dobro dela, diminui 4,0 m.',
  warn:'Somar só 1,5 + 0,5 = 2,0 m/s (alternativa a) dá a aproximação entre a pessoa e o <b>espelho</b>, e não entre a pessoa e a imagem.',
  mod:'Original (UFRGS, Somativa 2, afirmação II): pessoa se aproximando de um espelho fixo a 2 m/s. Modificada: pessoa e espelho em movimento, pedindo a velocidade relativa da imagem.'
},
];
