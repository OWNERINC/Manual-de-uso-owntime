// Gera arquivo de texto com todos os conteúdos do Guia Digital v2

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<span class="bs-model-tag">([^<]+)<\/span>/g, '[Modelo: $1]\n')
    .replace(/<ul[^>]*>/g, '')
    .replace(/<\/ul>/g, '')
    .replace(/<li><strong>([^<]+)<\/strong>\s*/g, '\n  • $1 ')
    .replace(/<\/li>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const SEP   = '─'.repeat(60);
const SEP2  = '═'.repeat(60);
const lines = [];

const add  = (...args) => lines.push(...args.map(String));
const br   = ()        => lines.push('');
const sep  = ()        => lines.push(SEP);
const sep2 = ()        => lines.push(SEP2);

// ── CABEÇALHO ────────────────────────────────────────────
add(SEP2);
add('OWN TIME HOME CLUB · GRAMADO');
add('GUIA DIGITAL — CONTEÚDO COMPLETO DAS ABAS');
add(`Gerado em: ${new Date().toLocaleDateString('pt-BR', {day:'2-digit', month:'2-digit', year:'numeric'})}`);
add(SEP2);
br();

// ─────────────────────────────────────────────────────────
// SEÇÕES COMPARTILHADAS (COMMON)
// ─────────────────────────────────────────────────────────
add('SEÇÕES COMPARTILHADAS — TODAS AS TIPOLOGIAS');
sep2();
br();

// ── ORIENTAÇÕES GERAIS ───────────────────────────────────
add('ORIENTAÇÕES GERAIS');
sep();
br();

const orientacoes = [
  { title: 'Check-in & Segurança', body: '<ul class="bs-steps"><li><strong>Acesso Controlado:</strong> O ingresso ao empreendimento é realizado mediante identificação na portaria principal, com entradas convenientes pelas ruas João XXIII e Ricardo Sturmhoffel.</li></ul>' },
  { title: 'Em Caso de Emergência', body: '<ul class="bs-steps"><li><strong>Contato Imediato:</strong> Em situações de emergência médica, de segurança ou nas instalações, acione a recepção imediatamente pelo ramal [xx] ou pelo WhatsApp [xxxxxxxx].</li><li><strong>Suporte 24 Horas:</strong> Nossa equipe está integralmente preparada e à disposição a qualquer momento para acionar os protocolos de segurança e coordenar o seu atendimento.</li><li><strong>Atendimento ao Proprietário:</strong> Sugestões e observações podem ser reportadas diretamente à recepção ou à gerência geral, garantindo um acompanhamento dedicado e resolutivo durante toda a sua hospedagem.</li></ul>' },
  { title: 'Check-out', subtitle: 'Horário Padrão: 12h00', body: '<ul class="bs-steps"><li><strong>Horário e Cuidado:</strong> Solicitamos a liberação da unidade no horário previsto, garantindo que a governança prepare o espaço para o próximo proprietário com o mesmo padrão de excelência da sua chegada.</li><li><strong>Pertences e Acessos:</strong> Verifique seus itens pessoais antes de sair e devolva os dispositivos de acesso na recepção. Conforme a Convenção, objetos esquecidos permanecem guardados à sua disposição por até dois meses.</li><li><strong>Acerto e Feedback:</strong> No momento da saída, pedimos que liquide eventuais consumos extras e nos informe sobre qualquer detalhe da unidade que exija a atenção da nossa equipe para mantermos a perfeição do espaço.</li></ul>' },
  { title: 'Espaço Pet', subtitle: 'Orientações Gerais', body: '<ul class="bs-steps"><li><strong>Convivência e Regras:</strong> Seu pet é parte da família e muito bem-vindo! Nas áreas comuns, mantenha-o sempre na guia e recolha seus resíduos. Para o conforto de todos, o acesso não é permitido nos restaurantes, bares, piscinas e spa.</li><li><strong>Comodidades e Serviços:</strong> Solicite caminhas, comedouros e tapetes higiênicos com 7 dias de antecedência no pré-check-in. Oferecemos também comodidades sob demanda, como Pet Walker e Banho e Tosa.</li><li><strong>Cuidado e Manutenção:</strong> Para assegurar o padrão de excelência na higienização do seu apartamento para o próximo uso, uma taxa de limpeza específica é aplicada durante estadias com animais, conforme a Convenção de Condomínio.</li></ul>' },
];

for (const item of orientacoes) {
  add(`▶ ${item.title}${item.subtitle ? ' — ' + item.subtitle : ''}`);
  add(stripHtml(item.body));
  br();
}

// ── GUIA DA CASA — COMODIDADES (Facilities) ──────────────
add('COMODIDADES DA UNIDADE');
sep();
br();

const facilities = [
  { title: 'Climatização', body: '<ul class="bs-steps"><li><strong>Conforto Personalizado:</strong> A sua unidade possui um sistema de climatização inteligente e individualizado, permitindo que você ajuste a temperatura de cada ambiente de forma independente.</li><li><strong>Eficiência Térmica:</strong> Para garantir o máximo desempenho do equipamento e manter o clima perfeito na sua casa, recomendamos manter portas e janelas fechadas durante o uso.</li><li><strong>Controle e Ajustes:</strong> Configure o ambiente ideal de forma simples seguindo as instruções: [Instruções operacionais do fabricante — a serem inseridas].</li></ul>' },
  { title: 'Lareira', body: '<ul class="bs-steps"><li><strong>Conforto e Tradição:</strong> Com alta eficiência térmica e câmara fechada, sua lareira foi projetada para aquecer os dias na Serra Gaúcha. É o cenário perfeito para o ritual de fogo aceso e bons vinhos, que traduz a essência da experiência Own Time.</li><li><strong>Acendimento e Uso:</strong> Utilize exclusivamente a lenha fornecida e recomendada pela nossa operação. Para ligar e ajustar a chama, siga os passos: [Instruções operacionais do fabricante — a serem inseridas].</li><li><strong>Segurança Contínua:</strong> Nunca utilize líquidos inflamáveis para o acendimento. Durante o uso, o vidro frontal atinge altíssimas temperaturas, portanto, evite tocá-lo e mantenha as crianças sempre sob rigorosa supervisão no ambiente.</li></ul>' },
  { title: 'Hidromassagem', body: '<ul class="bs-steps"><li><strong>Bem-Estar e Preparo:</strong> Projetada para ser o seu espaço de desaceleração. Antes de acionar a hidromassagem, certifique-se de que o nível da água cubra completamente os jatos, garantindo a eficiência perfeita do sistema.</li><li><strong>Cuidados Essenciais:</strong> Para proteger o equipamento e evitar obstruções, não utilize óleos, produtos espumantes ou sais não recomendados. Após o uso, lembre-se de desligar o motor e manter a tampa fechada para conservar a temperatura da água.</li><li><strong>Instruções e Suporte:</strong> O passo a passo completo de funcionamento pode ser acessado pelo QR Code disponível junto à banheira. Caso precise de auxílio ou identifique qualquer irregularidade, contate a recepção para suporte imediato da nossa equipe de manutenção.</li></ul>' },
  { title: 'Conectividade (Wi-Fi)', body: '<ul class="bs-steps"><li><strong>Acesso Rápido:</strong> Conecte-se facilmente à nossa rede utilizando as credenciais: Rede: [nome da rede] | Login: [login] | Senha: [senha]. Para maior comodidade, utilize este [LINK] para logar direto.</li><li><strong>Alta Performance:</strong> Nossa infraestrutura de internet foi dimensionada para garantir velocidade e estabilidade. A rede suporta múltiplos dispositivos simultâneos com excelência, sendo ideal para streaming, videoconferências e navegação fluida.</li><li><strong>Cobertura Total:</strong> Mantenha-se online sem interrupções durante toda a sua estadia. O sinal de alta qualidade está disponível tanto no conforto e privacidade do seu apartamento quanto em todas as áreas comuns do Club.</li></ul>' },
];

for (const item of facilities) {
  add(`▶ ${item.title}`);
  add(stripHtml(item.body));
  br();
}

// ── CLUB HOUSE ───────────────────────────────────────────
add('CLUB HOUSE');
sep();
br();

const clube = [
  { title: 'Empório', body: '<ul class="bs-steps"><li><strong>Seleção Premium:</strong> Um espaço prático de conveniência interna, planejado com uma curadoria de produtos de alta qualidade e itens essenciais para o seu conforto diário.</li><li><strong>Catálogo Exclusivo:</strong> As instruções detalhadas de funcionamento e a lista completa de produtos estarão disponíveis muito em breve para a sua comodidade.</li><li><strong>Horário e Atendimento:</strong> O espaço opera diariamente das [X] às [X] horas. Para informações adicionais ou suporte imediato, entre em contato acessando este [LINK].</li></ul>' },
  { title: 'Kids', hours: '09h00 às 21h00', body: '<ul class="bs-steps"><li><strong>Ambiente Lúdico:</strong> O espaço foi cuidadosamente projetado para que as crianças brinquem com liberdade e segurança, priorizando a diversão longe das telas.</li><li><strong>Supervisão Contínua:</strong> Para garantir a tranquilidade e o bem-estar de todos, é fundamental que as crianças permaneçam sempre acompanhadas e sob a supervisão constante de um adulto responsável.</li><li><strong>Programação Especial:</strong> Durante as temporadas e datas comemorativas, nossa equipe organiza um cronograma exclusivo com jogos, aventuras e atividades dirigidas para enriquecer ainda mais a experiência dos pequenos.</li></ul>' },
  { title: 'Teens', hours: '09h00 às 21h00', body: '<ul class="bs-steps"><li><strong>Socialização e Entretenimento:</strong> O espaço é integrado ao Kids e projetado para oferecer liberdade e interação aos jovens, priorizando a diversão além das telas.</li><li><strong>Convivência Segura:</strong> Para garantir um ambiente adequado e a tranquilidade de todas as famílias, o acompanhamento de um adulto responsável é necessário para os menores de 16 anos.</li><li><strong>Programação Dinâmica:</strong> Durante as temporadas e datas comemorativas, nossa equipe prepara um cronograma interativo com atividades exclusivas, pensado especialmente para a energia dos adolescentes.</li></ul>' },
  { title: 'Playground Externo', body: '<ul class="bs-steps"><li><strong>Diversão ao Ar Livre:</strong> Um espaço lúdico e seguro, projetado para garantir o entretenimento e estimular as brincadeiras das crianças.</li><li><strong>Supervisão e Cuidado:</strong> Para a tranquilidade de todos, é fundamental que os pequenos estejam sempre acompanhados e supervisionados por um adulto responsável durante o uso.</li><li><strong>Espaço Compartilhado:</strong> Aproveite a área para criar boas memórias em família, lembrando sempre de zelar pelos equipamentos e respeitar o momento de diversão das outras crianças.</li></ul>' },
  { title: 'Acesso via Pulseira', body: '<ul class="bs-steps"><li><strong>Fase de Soft Opening:</strong> Para garantir que toda a operação atinja o padrão de excelência que você merece, as pulseiras de acesso estão temporariamente indisponíveis neste período inicial.</li><li><strong>Abertura Ágil:</strong> Aproxime a sua pulseira da fechadura eletrônica para destravar a porta da sua unidade de forma rápida e intuitiva.</li><li><strong>Segurança Integrada:</strong> O acessório é de uso pessoal e intransferível. Em caso de perda, informe a recepção imediatamente para realizarmos o bloqueio e a emissão de uma nova via.</li></ul>' },
  { title: 'Carrinhos de Golf', body: '<ul class="bs-steps"><li><strong>Fase de Soft Opening:</strong> Para garantir que toda a operação atinja o padrão de excelência que você merece, os carrinhos de golfe estão temporariamente indisponíveis neste período inicial.</li><li><strong>Mobilidade e Conforto:</strong> Em breve, nossa frota estará totalmente à sua disposição para facilitar o deslocamento por toda a extensão do Club de forma ágil e segura.</li><li><strong>Assistência Imediata:</strong> Durante essa fase, nossa equipe de atendimento está pronta para auxiliar com qualquer necessidade de locomoção interna ou transporte de itens pesados. Acione a recepção sempre que precisar.</li></ul>' },
  { title: 'Carregadores Elétricos', body: '<ul class="bs-steps"><li><strong>Conexão Simples:</strong> Estacione nas vagas exclusivas de recarga e conecte o cabo ao seu veículo para iniciar o reconhecimento.</li><li><strong>Tarifação por Consumo:</strong> O serviço é faturado de forma prática, baseado exclusivamente na energia utilizada. Siga as instruções no painel do carregador para liberar a sessão e acompanhar a cobrança.</li><li><strong>Uso Compartilhado:</strong> Assim que a carga for concluída, pedimos a gentileza de desconectar o equipamento e liberar o espaço para garantir a comodidade de todos.</li></ul>' },
  { title: 'Piscinas', hours: '08h00 às 22h00', body: '<ul class="bs-steps"><li><strong>Complexo Aquático:</strong> O empreendimento conta com piscina aquecida indoor para adultos, piscina indoor infantil e piscina outdoor, todas mantidas com temperatura controlada para conforto em qualquer estação.</li><li><strong>Supervisão:</strong> Crianças devem estar sempre acompanhadas por um responsável. A manutenção técnica é realizada por empresa especializada contratada pela Administradora.</li></ul>' },
  { title: 'Saunas', hours: '16h00 às 21h00', body: '<ul class="bs-steps"><li><strong>Tipos Disponíveis:</strong> O Own Club dispõe de sauna seca e sauna molhada (a vapor), ambas localizadas na área de wellness do Club House.</li><li><strong>Uso Responsável:</strong> Exclusivo para maiores de 16 anos. Recomenda-se hidratação antes e após o uso, com sessões de no máximo 15 a 20 minutos.</li></ul>' },
  { title: 'Spa', hours: '10h00 às 20h00 · Último atendimento: 19h00', body: '<ul class="bs-steps"><li><strong>Tratamentos:</strong> O menu inclui massagens relaxantes e terapêuticas, tratamentos faciais, rituais corporais e terapias holísticas. A carta completa está disponível por QR Code no spa ou via recepção.</li><li><strong>Agendamento:</strong> Via concierge ou WhatsApp. Recomendamos reservar com antecedência em alta temporada. Cancelamentos exigem aviso com no mínimo 4 horas de antecedência.</li><li><strong>Orientações:</strong> Chegue com 10 minutos de antecedência. Roupões e pantufas disponíveis no local. Destinado a maiores de 16 anos, salvo em tratamentos específicos para crianças acompanhadas de responsáveis.</li></ul>' },
  { title: 'Academia', hours: '24 horas', body: '<ul class="bs-steps"><li><strong>Equipamentos:</strong> Sala equipada com aparelhos de musculação e cardiovasculares, para atender desde atletas de performance até quem busca atividade física como equilíbrio entre performance e bem-estar.</li><li><strong>Personal Trainer:</strong> Serviços de personal trainer disponíveis sob demanda mediante agendamento pelo concierge.</li></ul>' },
];

for (const item of clube) {
  add(`▶ ${item.title}${item.hours ? '  |  ' + item.hours : ''}`);
  add(stripHtml(item.body));
  br();
}

// ── GASTRONOMIA ───────────────────────────────────────────
add('GASTRONOMIA');
sep();
br();

const gastronomia = [
  { title: 'Café da Manhã', hours: '07h00 às 11h00', body: '<ul class="bs-steps"><li><strong>Variedade Artesanal:</strong> Desfrute de pães fresquinhos, frutas selecionadas, opções quentes preparadas na hora e uma confeitaria artística e artesanal, feita com o máximo cuidado para o seu paladar.</li><li><strong>Experiência em Família:</strong> Pensado para acolher a todos, o café da manhã inclui opções e experiências lúdicas dedicadas especialmente para encantar e nutrir as crianças.</li></ul>' },
  { title: 'Restaurante', hours: '12h00 às 22h00 · Último pedido 21h30', body: '<ul class="bs-steps"><li><strong>Horário e Ambiente:</strong> Operamos diariamente das 12h00 às 22h00 (com o último pedido às 21h30). Desfrute do nosso serviço à la carte escolhendo entre o conforto do salão interno ou o charme da nossa área externa.</li><li><strong>Gastronomia e Conceito:</strong> Com um menu que harmoniza a culinária regional e contemporânea, o espaço traduz a socialização elegante do Own Time: a união perfeita entre o aconchego de estar em casa e a excelência de um serviço autoral.</li><li><strong>Menu Personalizado:</strong> Nosso cardápio foi cuidadosamente planejado para atender a diferentes paladares e perfis. Nossa equipe de salão está inteiramente à disposição para detalhar ingredientes e adaptar pratos a eventuais restrições alimentares.</li></ul>' },
  { title: 'Coffee Shop', hours: '08h00 às 20h00', body: '<ul class="bs-steps"><li><strong>Horário e Atmosfera:</strong> Com funcionamento das 08h00 às 20h00, o espaço oferece um ambiente descontraído e acolhedor, ideal para as suas pausas e encontros ao longo do dia.</li><li><strong>Seleção Artesanal:</strong> Desfrute de uma curadoria exclusiva de cafés especiais, chás reconfortantes, lanches leves e uma confeitaria artesanal preparada com o máximo cuidado.</li><li><strong>O Ponto de Partida:</strong> O cenário perfeito para quem aprecia começar a manhã com um excelente café, garantindo energia, sabor e tranquilidade para aproveitar ao máximo a sua estadia.</li></ul>' },
  { title: 'Bar', hours: '17h00 às 23h00', body: '<ul class="bs-steps"><li><strong>Coquetelaria Autoral:</strong> Desfrute de uma carta de drinks sofisticada, com opções clássicas e criações autorais pensadas para surpreender o paladar e elevar o seu momento de descontração.</li><li><strong>Curadoria de Vinhos:</strong> Aprecie uma seleção cuidadosa de rótulos nacionais e internacionais, com um merecido destaque para os prestigiados vinhos da Serra Gaúcha, perfeitos para brindar a sua estadia. [LINK PARA CARDÁPIO]</li></ul>' },
  { title: 'Chef em Casa', hours: 'Agendamento mínimo de 48h via recepção, WhatsApp ou Concierge', body: '<ul class="bs-steps"><li><strong>Gastronomia Sob Medida:</strong> Desfrute de um serviço exclusivo de chef particular diretamente na cozinha da sua unidade. O profissional cria um menu personalizado, ideal para jantares em família, celebrações especiais ou para receber amigos com total privacidade e conforto.</li><li><strong>Cardápios e Valores:</strong> As opções de menus autorais e os custos do serviço estão disponíveis sob consulta, permitindo que cada detalhe do evento seja desenhado especificamente para o seu paladar e preferências.</li></ul>' },
];

for (const item of gastronomia) {
  add(`▶ ${item.title}  |  ${item.hours}`);
  add(stripHtml(item.body));
  br();
}

// ── CONCIERGE ─────────────────────────────────────────────
add('CONCIERGE & SERVIÇOS');
sep();
br();

const concierge = [
  { title: 'Time de Anfitriões', body: '<ul class="bs-steps"><li><strong>Suporte e Conveniência 24h:</strong> Nossa equipe de anfitriões está disponível a qualquer hora para apoio e coordenação durante toda a sua estadia.</li><li><strong>Intermediação de Serviços:</strong> Facilitamos a sua rotina e logística externa cuidando de reservas de restaurantes, agendamento de passeios, locação de veículos, contratação de fotógrafos e outras experiências locais com total comodidade.</li><li><strong>Curadoria Autêntica de Gramado:</strong> Oferecemos uma perspectiva exclusiva e refinada da região, traduzida em recomendações personalizadas de cafés discretos, caminhos silenciosos e rótulos selecionados que fogem completamente dos mapas turísticos óbvios.</li></ul>' },
  { title: 'Housekeeping Adicional', body: '<ul class="bs-steps"><li><strong>Serviços Essenciais Incluídos:</strong> Além das limpezas incluídas nos Serviços Essenciais do condomínio — que contemplam governança com troca de roupas de cama e banho, arrumação simplificada e lavagem de enxoval no meio da semana — você pode solicitar limpezas adicionais para sua unidade durante a estadia.</li><li><strong>O Que Está Incluído:</strong> O serviço adicional contempla arrumação completa, reposição de amenities e organização dos ambientes conforme o padrão Own Time.</li></ul>' },
  { title: 'Babysitter', body: '<ul class="bs-steps"><li><strong>Cuidado e Tranquilidade:</strong> Um serviço com profissionais qualificados e de total confiança, disponível para que os pais possam desfrutar de momentos a dois com a certeza de que os pequenos estão em excelentes mãos.</li><li><strong>Planejamento e Reserva:</strong> Para garantir a disponibilidade ideal para a sua rotina, o agendamento do serviço deve ser realizado com antecedência diretamente na recepção ou por meio do WhatsApp do Club.</li><li><strong>Ambiente Seguro:</strong> O atendimento pode ser realizado no conforto e na privacidade da sua própria unidade ou nas áreas recreativas, proporcionando uma experiência lúdica, segura e acolhedora para as crianças.</li></ul>' },
  { title: 'Personal Trainer', body: '<ul class="bs-steps"><li><strong>Treinamento Personalizado:</strong> Programas desenvolvidos com profissionais certificados para atender o seu nível e objetivos específicos.</li><li><strong>Flexibilidade:</strong> Sessões no Fitness Center ou ao ar livre, individuais ou em grupo, no horário que melhor se adapta à sua estadia.</li><li><strong>Agendamento:</strong> Reserve o seu horário pelo concierge. [LINK]</li></ul>' },
  { title: 'Pet Care (Pet Walker & Banho e Tosa)', body: '<ul class="bs-steps"><li><strong>Serviços Disponíveis:</strong> Pet Walker e Banho & Tosa disponíveis para os companheiros de quatro patas, garantindo cuidado e conforto durante toda a estadia.</li><li><strong>Agendamento:</strong> Reserve com 24 horas de antecedência junto ao time de anfitriões. [LINK]</li></ul>' },
  { title: 'Car Wash', body: '<ul class="bs-steps"><li><strong>Serviço Completo:</strong> Lavagem e higienização completa do seu veículo enquanto você relaxa e aproveita a estadia.</li><li><strong>Agendamento:</strong> Solicite na recepção ou pelo WhatsApp do concierge. [LINK]</li></ul>' },
  { title: 'Private Shopper', body: '<ul class="bs-steps"><li><strong>Curadoria Personalizada:</strong> Assessoria exclusiva de compras e presentes especiais, desenhada especificamente para o seu gosto e preferências.</li><li><strong>Seleção Exclusiva:</strong> Produtos locais, vinhos, artesanato e itens selecionados com carinho especialmente para você. [LINK]</li></ul>' },
];

for (const item of concierge) {
  add(`▶ ${item.title}`);
  add(stripHtml(item.body));
  br();
}

// ── SEGURANÇA & ACESSO ────────────────────────────────────
add('SEGURANÇA & ACESSO');
sep();
br();

const seguranca = [
  { title: 'Monitoramento 24 Horas', body: 'O empreendimento conta com portaria e recepção funcionando 24 horas, operadas conforme os procedimentos estabelecidos pela Administradora. O sistema inclui CFTV com câmeras em pontos estratégicos das áreas comuns, monitoradas pela equipe de segurança. A vigilância é realizada de forma permanente, integrando os Serviços Essenciais do condomínio.' },
  { title: 'Controle Eletrônico de Acesso', body: 'O acesso ao empreendimento e às unidades é controlado por sistema eletrônico permanente. Os dispositivos de acesso são entregues no momento do check-in e devolvidos na recepção ao final da estadia.' },
  { title: 'Sistema de Segurança Perimetral', body: 'O empreendimento conta com sistema de segurança perimetral que abrange toda a área do condomínio, incluindo acessos, áreas verdes e limites da propriedade. A guarita de controle de acesso principal opera de forma integrada com o sistema de monitoramento.' },
];

for (const item of seguranca) {
  add(`▶ ${item.title}`);
  add(item.body);
  br();
}

// ─────────────────────────────────────────────────────────
// GUIA DA CASA — POR TIPOLOGIA
// ─────────────────────────────────────────────────────────
br();
add('GUIA DA CASA — POR TIPOLOGIA');
sep2();
br();

const tipologias = [
  {
    nome: 'FALL HOUSE — Casa 4 Suítes · 448 m² · Até 10 hóspedes',
    guia: [
      {
        label: 'Geral',
        items: [
          { title: 'Acesso às Unidades', body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li><li><strong>Comunicação:</strong> Utilize o videofone integrado para falar instantaneamente com a portaria ou recepção.</li></ul>' },
          { title: 'Iluminação', body: '<ul class="bs-steps"><li><strong>Projeto Eficiente:</strong> Sua casa possui um projeto luminotécnico planejado exclusivamente com equipamentos de baixo consumo.</li><li><strong>Uso Consciente:</strong> Desfrute do conforto dos seus ambientes mantendo o compromisso com a sustentabilidade e a responsabilidade energética.</li></ul>' },
          { title: 'TV', body: '' },
          { title: 'Ventilação / Exaustão', body: '' },
          { title: 'Piso Aquecido', body: '' },
          { title: 'Telefone', body: '' },
          { title: 'Fogo de Chão', body: '<ul class="bs-steps"><li><strong>Espaço Gourmet:</strong> Aproveite o deck externo equipado com fogo de chão para momentos de lazer e descontração.</li><li><strong>Acendimento Seguro:</strong> Solicite o combustível apropriado e as instruções de uso diretamente pelo [contato].</li><li><strong>Segurança e Alertas:</strong> Nunca utilize gasolina, álcool, fluidos inflamáveis ou qualquer outro material não autorizado. O uso de combustíveis incorretos oferece risco grave de acidentes e danos à estrutura.</li></ul>' },
        ]
      },
      {
        label: 'Cozinha',
        items: [
          { title: 'Forno de Pizza', body: '<ul class="bs-steps"><li><strong>Experiência Gourmet:</strong> Desfrute de momentos únicos preparando pizzas artesanais no conforto da sua casa.</li><li><strong>Acendimento e Uso:</strong> Utilize exclusivamente a lenha ou o material fornecido e recomendado pela nossa equipe. Aguarde o forno atingir a temperatura ideal para garantir o preparo perfeito.</li><li><strong>Segurança e Alertas:</strong> Nunca utilize líquidos inflamáveis, plásticos ou qualquer outro combustível não autorizado para forçar o acendimento. Para solicitar os insumos adequados ou auxílio, acesse o [contato].</li></ul>' },
          { title: 'Churrasqueira', body: '<ul class="bs-steps"><li><strong>Tradição e Lazer:</strong> Aproveite o espaço gourmet para celebrar bons momentos e preparar o seu churrasco com total comodidade.</li><li><strong>Acendimento Seguro:</strong> Utilize apenas carvão apropriado e acendedores sólidos ou em gel. Caso a estrutura conte com sistema de exaustão, certifique-se de acioná-lo antes de acender o fogo.</li><li><strong>Cuidados Essenciais:</strong> Para a sua segurança, é estritamente proibido o uso de álcool líquido ou fluidos altamente inflamáveis. Ao finalizar, deixe as brasas apagarem naturalmente e nunca jogue água diretamente para evitar danos à estrutura.</li></ul>' },
        ]
      },
      {
        label: 'Segundo Andar',
        items: [
          { title: 'Sala de Banho · SPA Jacuzzi', body: '' },
          { title: 'Climatização (2º Andar)', body: '' },
        ]
      },
      {
        label: 'Eletros',
        items: [
          { title: 'Adega Climatizada', body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas. O equipamento opera de forma silenciosa e com controle térmico estável para proteger a integridade e as notas de cada vinho.</li><li><strong>Experiência e Curadoria:</strong> O espaço ideal para acomodar a sua coleção pessoal ou as seleções especiais sugeridas pelo sommelier do Club, Cristiano Ribeiro, prontas para o seu momento de degustação.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado nas prateleiras e certifique-se de sempre fechar a porta até o final para manter a vedação e a eficiência do sistema de refrigeração.</li></ul>' },
          { title: 'Geladeira', body: '<span class="bs-model-tag">Frost Free 500L · Brastemp</span><ul class="bs-steps"><li><strong>Temperatura:</strong> Ajuste pelo painel externo sem precisar abrir a porta.</li><li><strong>Sons Normais:</strong> Estalos ou sons parecidos com ar esvaziando são completamente normais — é a expansão do gás de refrigeração.</li></ul>' },
          { title: 'Micro-ondas', body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte Início para 30s em potência máxima. Repita para adicionar mais tempo.</li><li><strong>Auto Menu:</strong> Gire o botão principal para selecionar programas prontos (pipoca, carnes etc.) e pressione Início.</li><li><strong>Atenção:</strong> É proibido colocar qualquer material metálico no interior.</li></ul>' },
          { title: 'Forno Elétrico', body: '<span class="bs-model-tag">Glass Cook 73L · Tramontina</span><ul class="bs-steps"><li><strong>Para Ligar:</strong> Gire os três botões simultaneamente: Função, Temperatura e Timer.</li><li><strong>Atenção:</strong> Se o Timer estiver no zero, o forno não liga.</li><li><strong>Luz Interna:</strong> Permanece acesa durante todo o período programado no Timer.</li></ul>' },
          { title: 'Máquina de Café', body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água no reservatório traseiro. Levante a alavanca, insira a cápsula de sua preferência e feche-a completamente.</li><li><strong>Seu Café:</strong> Pressione qualquer botão para ligar a máquina. Quando as luzes pararem de piscar, selecione a medida desejada (Espresso ou Lungo) para iniciar a extração.</li><li><strong>Manutenção e Energia:</strong> O equipamento já está devidamente conectado à rede 220V da casa. A cápsula usada cai automaticamente no compartimento interno assim que a alavanca for levantada para o próximo uso.</li></ul>' },
          { title: 'Lava-louças', body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos da louça antes de acomodá-la nos cestos, garantindo que as hélices girem livremente.</li><li><strong>Preparo:</strong> Insira o detergente específico para lava-louças e o líquido secante nos compartimentos indicados na parte interna da porta.</li><li><strong>Acionamento:</strong> Selecione o ciclo de lavagem desejado no painel de controle e feche a porta com firmeza para que a máquina inicie o processo automaticamente.</li></ul>' },
          { title: 'Lava e Seca', body: '<ul class="bs-steps"><li><strong>Capacidade Ideal:</strong> Suporta até 11kg para ciclos exclusivos de lavagem e 7kg se for utilizar a função contínua de secagem.</li><li><strong>Preparo:</strong> Insira as roupas e adicione os produtos de limpeza (sabão e amaciante) nos compartimentos indicados na gaveta frontal.</li><li><strong>Ciclo Simples:</strong> Gire o seletor central para escolher o programa que melhor atende às suas peças e pressione o botão "Início/Pausa" para começar.</li></ul>' },
          { title: 'Fogão + Depurador', body: '<ul class="bs-steps"><li><strong>Uso do Cooktop:</strong> Pressione e gire o manípulo correspondente à boca que deseja utilizar para o acendimento automático. Ajuste a intensidade da chama conforme a necessidade do preparo.</li><li><strong>Controle da Coifa:</strong> Acesse o painel para acionar a iluminação de apoio e ajustar a velocidade de exaustão. O sistema Silent mantém o ambiente purificado com o mínimo de ruído.</li><li><strong>Dica de Conforto:</strong> Ligue a coifa instantes antes de começar a cozinhar e mantenha-a funcionando por mais alguns minutos após o término para garantir a renovação completa do ar.</li></ul>' },
          { title: 'Filtro de Água', body: '<span class="bs-model-tag">Purificador Facilite · Consul</span><ul class="bs-steps"><li><strong>Gelada ou Natural:</strong> Pressione o botão correspondente no painel.</li><li><strong>Copo:</strong> Segure o botão pressionado e solte quando terminar.</li><li><strong>Jarra:</strong> Aperte até ouvir o "clique" — a água sairá sozinha. Aperte novamente para parar o fluxo.</li><li><strong>Mista:</strong> Pressione "Gelada" e "Natural" ao mesmo tempo.</li></ul>' },
        ]
      },
    ]
  },
  {
    nome: 'WINTER HOUSE — Casa 3 Suítes · 325 m² · Até 8 hóspedes',
    guia: [
      {
        label: 'Geral',
        items: [
          { title: 'Acesso às Unidades', body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li><li><strong>Comunicação:</strong> Utilize o videofone integrado para falar instantaneamente com a portaria ou recepção.</li></ul>' },
          { title: 'Iluminação', body: '<ul class="bs-steps"><li><strong>Projeto Eficiente:</strong> Sua casa possui um projeto luminotécnico planejado exclusivamente com equipamentos de baixo consumo.</li><li><strong>Uso Consciente:</strong> Desfrute do conforto dos seus ambientes mantendo o compromisso com a sustentabilidade e a responsabilidade energética.</li></ul>' },
          { title: 'TV', body: '' },
          { title: 'Ventilação / Exaustão', body: '' },
          { title: 'Piso Aquecido', body: '' },
          { title: 'Telefone', body: '' },
        ]
      },
      {
        label: 'Cozinha',
        items: [
          { title: 'Churrasqueira', body: '<ul class="bs-steps"><li><strong>Tradição e Lazer:</strong> Aproveite o espaço gourmet para celebrar bons momentos e preparar o seu churrasco com total comodidade.</li><li><strong>Acendimento Seguro:</strong> Utilize apenas carvão apropriado e acendedores sólidos ou em gel. Caso a estrutura conte com sistema de exaustão, certifique-se de acioná-lo antes de acender o fogo.</li><li><strong>Cuidados Essenciais:</strong> Para a sua segurança, é estritamente proibido o uso de álcool líquido ou fluidos altamente inflamáveis. Ao finalizar, deixe as brasas apagarem naturalmente e nunca jogue água diretamente para evitar danos à estrutura.</li></ul>' },
        ]
      },
      {
        label: 'Segundo Andar',
        items: [
          { title: 'Climatização (2º Andar)', body: '' },
        ]
      },
      {
        label: 'Eletros',
        items: [
          { title: 'Adega Climatizada', body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas. O equipamento opera de forma silenciosa e com controle térmico estável para proteger a integridade e as notas de cada vinho.</li><li><strong>Experiência e Curadoria:</strong> O espaço ideal para acomodar a sua coleção pessoal ou as seleções especiais sugeridas pelo sommelier do Club, Cristiano Ribeiro, prontas para o seu momento de degustação.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado nas prateleiras e certifique-se de sempre fechar a porta até o final para manter a vedação e a eficiência do sistema de refrigeração.</li></ul>' },
          { title: 'Geladeira', body: '<span class="bs-model-tag">Frost Free 500L · Brastemp</span><ul class="bs-steps"><li><strong>Temperatura:</strong> Ajuste pelo painel externo sem precisar abrir a porta.</li><li><strong>Sons Normais:</strong> Estalos ou sons parecidos com ar esvaziando são completamente normais — é a expansão do gás de refrigeração.</li></ul>' },
          { title: 'Micro-ondas', body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte Início para 30s em potência máxima. Repita para adicionar mais tempo.</li><li><strong>Auto Menu:</strong> Gire o botão principal para selecionar programas prontos e pressione Início.</li><li><strong>Atenção:</strong> É proibido colocar qualquer material metálico no interior.</li></ul>' },
          { title: 'Forno Elétrico', body: '<span class="bs-model-tag">Glass Cook 73L · Tramontina</span><ul class="bs-steps"><li><strong>Para Ligar:</strong> Gire os três botões simultaneamente: Função, Temperatura e Timer.</li><li><strong>Atenção:</strong> Se o Timer estiver no zero, o forno não liga.</li><li><strong>Luz Interna:</strong> Permanece acesa durante todo o período programado no Timer.</li></ul>' },
          { title: 'Máquina de Café', body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água no reservatório traseiro. Levante a alavanca, insira a cápsula de sua preferência e feche-a completamente.</li><li><strong>Seu Café:</strong> Pressione qualquer botão para ligar a máquina. Quando as luzes pararem de piscar, selecione a medida desejada (Espresso ou Lungo) para iniciar a extração.</li><li><strong>Manutenção e Energia:</strong> O equipamento já está conectado à rede 220V. A cápsula usada cai automaticamente no compartimento interno.</li></ul>' },
          { title: 'Lava-louças', body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos antes de acomodar a louça nos cestos.</li><li><strong>Preparo:</strong> Insira o detergente e o líquido secante nos compartimentos indicados.</li><li><strong>Acionamento:</strong> Selecione o ciclo no painel e feche a porta com firmeza.</li></ul>' },
          { title: 'Lava e Seca', body: '<ul class="bs-steps"><li><strong>Capacidade Ideal:</strong> Suporta até 11kg para lavagem e 7kg para secagem.</li><li><strong>Preparo:</strong> Insira as roupas e adicione sabão e amaciante na gaveta frontal.</li><li><strong>Ciclo Simples:</strong> Gire o seletor para escolher o programa e pressione "Início/Pausa".</li></ul>' },
          { title: 'Fogão + Depurador', body: '<ul class="bs-steps"><li><strong>Uso do Cooktop:</strong> Pressione e gire o manípulo para acendimento automático. Ajuste a chama conforme necessário.</li><li><strong>Controle da Coifa:</strong> Acesse o painel para acionar iluminação e ajustar velocidade de exaustão.</li><li><strong>Dica de Conforto:</strong> Ligue a coifa antes de cozinhar e mantenha-a após o término.</li></ul>' },
          { title: 'Filtro de Água', body: '<span class="bs-model-tag">Purificador Facilite · Consul</span><ul class="bs-steps"><li><strong>Gelada ou Natural:</strong> Pressione o botão correspondente no painel.</li><li><strong>Copo:</strong> Segure o botão pressionado e solte quando terminar.</li><li><strong>Jarra:</strong> Aperte até ouvir o "clique" — a água sairá sozinha.</li></ul>' },
        ]
      },
    ]
  },
  {
    nome: 'GARDEN — Apartamento Garden · ≈ 60 m²',
    guia: [
      {
        label: 'Geral',
        items: [
          { title: 'Acesso às Unidades', body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li><li><strong>Comunicação:</strong> Utilize o videofone integrado para falar instantaneamente com a portaria ou recepção.</li></ul>' },
          { title: 'Iluminação', body: '<ul class="bs-steps"><li><strong>Projeto Eficiente:</strong> Sua casa possui um projeto luminotécnico planejado exclusivamente com equipamentos de baixo consumo.</li><li><strong>Uso Consciente:</strong> Desfrute do conforto dos seus ambientes mantendo o compromisso com a sustentabilidade e a responsabilidade energética.</li></ul>' },
          { title: 'TV', body: '' },
          { title: 'Ventilação / Exaustão', body: '' },
          { title: 'AR Central', body: '' },
          { title: 'Piso Aquecido', body: '' },
          { title: 'Telefone', body: '' },
        ]
      },
      {
        label: 'Cozinha',
        items: [
          { title: 'Cooktop de Indução e Coifa Tramontina', body: '<ul class="bs-steps"><li><strong>Eficiência por Indução:</strong> Ligue o cooktop de 2 bocas diretamente no painel touch. Lembre-se de utilizar as panelas magnéticas já disponibilizadas na cozinha, ideais para este sistema de aquecimento rápido e seguro.</li><li><strong>Purificação Silenciosa:</strong> Acione a coifa de ilha Black Steel para manter o ar sempre limpo. A tecnologia Silent garante a renovação do ambiente com o máximo de conforto acústico durante seus preparos.</li></ul>' },
        ]
      },
      {
        label: 'Eletros',
        items: [
          { title: 'Adega Climatizada', body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas.</li><li><strong>Experiência e Curadoria:</strong> Seleções sugeridas pelo sommelier do Club, Cristiano Ribeiro.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado e sempre feche a porta até o final.</li></ul>' },
          { title: 'Geladeira', body: '<span class="bs-model-tag">Duplex Inverse 435L · Tramontina</span><ul class="bs-steps"><li><strong>Design Inteligente:</strong> Refrigerador na parte superior e freezer na base para melhor ergonomia.</li><li><strong>Conservação Ideal:</strong> Opera na temperatura recomendada para o clima da serra. Mantenha as portas fechadas.</li></ul>' },
          { title: 'Micro-ondas', body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte Início para 30s em potência máxima. Repita para somar mais tempo.</li><li><strong>Descongelar:</strong> Gire o seletor para "Descongelar", ajuste o tempo e pressione Início.</li><li><strong>Atenção:</strong> Nunca insira metais, papel alumínio ou talheres no interior.</li></ul>' },
          { title: 'Forno Elétrico', body: '<span class="bs-model-tag">Epic T Smart 60 · Tramontina</span><ul class="bs-steps"><li><strong>Controle Inteligente:</strong> Utilize o painel touch Glass Black para as diversas funções de assamento.</li><li><strong>Cuidados Práticos:</strong> Utilize apenas recipientes adequados (vidro temperado, cerâmica ou metal). Após desligar, a ventilação continua por alguns minutos para resfriar com segurança.</li></ul>' },
          { title: 'Máquina de Café', body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água, levante a alavanca, insira a cápsula e feche.</li><li><strong>Seu Café:</strong> Pressione qualquer botão, aguarde as luzes pararem de piscar e selecione Espresso ou Lungo.</li><li><strong>Manutenção:</strong> Já conectado à rede 220V. A cápsula usada cai automaticamente ao levantar a alavanca.</li></ul>' },
          { title: 'Lava-louças', body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos antes de acomodar a louça nos cestos.</li><li><strong>Preparo:</strong> Insira o detergente e o líquido secante nos compartimentos indicados.</li><li><strong>Acionamento:</strong> Selecione o ciclo no painel e feche a porta com firmeza.</li></ul>' },
          { title: 'Depurador de Ar', body: '<span class="bs-model-tag">Coifa Square Isla 40 · Tramontina</span><ul class="bs-steps"><li><strong>Velocidade:</strong> Pressione os botões de 1 a 4 para escolher a força do exaustor.</li><li><strong>Timer:</strong> Segure o botão da velocidade ativa por 3 segundos — a coifa desligará automaticamente após 5 min.</li><li><strong>Dica:</strong> Ligue 5 minutos antes de cozinhar para melhor sucção do ar.</li></ul>' },
        ]
      },
      {
        label: 'Quartos',
        items: [
          { title: 'Banheira Hidro Jacuzzi', body: '<ul class="bs-steps"><li><strong>Imersão e Uso:</strong> Antes de acionar o motor, certifique-se de que o nível da água cubra completamente todos os jatos laterais.</li><li><strong>Bem-Estar e Tempo Ideal:</strong> Recomendamos um tempo máximo de uso de 20 a 30 minutos por sessão.</li><li><strong>Cuidados e Higiene:</strong> Não é permitido o consumo de alimentos e bebidas no interior da banheira. Utilize apenas sais e produtos específicos para hidromassagem.</li></ul>' },
        ]
      },
    ]
  },
  {
    nome: 'TERRAÇO — Apartamento Cobertura · ≈ 60 m²',
    guia: [
      {
        label: 'Geral',
        items: [
          { title: 'Acesso às Unidades', body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li><li><strong>Comunicação:</strong> Utilize o videofone integrado para falar instantaneamente com a portaria ou recepção.</li></ul>' },
          { title: 'Iluminação', body: '<ul class="bs-steps"><li><strong>Projeto Eficiente:</strong> Sua casa possui um projeto luminotécnico planejado exclusivamente com equipamentos de baixo consumo.</li><li><strong>Uso Consciente:</strong> Desfrute do conforto dos seus ambientes mantendo o compromisso com a sustentabilidade e a responsabilidade energética.</li></ul>' },
          { title: 'TV', body: '' },
          { title: 'Ventilação / Exaustão', body: '' },
          { title: 'AR Central', body: '' },
          { title: 'Piso Aquecido', body: '' },
          { title: 'Telefone', body: '' },
        ]
      },
      {
        label: 'Cozinha',
        items: [
          { title: 'Cooktop de Indução e Coifa Tramontina', body: '<ul class="bs-steps"><li><strong>Eficiência por Indução:</strong> Ligue o cooktop de 2 bocas diretamente no painel touch. Utilize as panelas magnéticas disponibilizadas na cozinha.</li><li><strong>Purificação Silenciosa:</strong> Acione a coifa de ilha Black Steel para manter o ar sempre limpo.</li></ul>' },
        ]
      },
      {
        label: 'Eletros',
        items: [
          { title: 'Adega Climatizada', body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas.</li><li><strong>Experiência e Curadoria:</strong> Seleções sugeridas pelo sommelier do Club, Cristiano Ribeiro.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado e sempre feche a porta até o final.</li></ul>' },
          { title: 'Geladeira', body: '<span class="bs-model-tag">Duplex Inverse 435L · Tramontina</span><ul class="bs-steps"><li><strong>Design Inteligente:</strong> Refrigerador na parte superior e freezer na base para melhor ergonomia.</li><li><strong>Conservação Ideal:</strong> Opera na temperatura recomendada para o clima da serra. Mantenha as portas fechadas.</li></ul>' },
          { title: 'Micro-ondas', body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte Início para 30s em potência máxima.</li><li><strong>Descongelar:</strong> Gire o seletor para "Descongelar", ajuste o tempo e pressione Início.</li><li><strong>Atenção:</strong> Nunca insira metais, papel alumínio ou talheres no interior.</li></ul>' },
          { title: 'Forno Elétrico', body: '<span class="bs-model-tag">Epic T Smart 60 · Tramontina</span><ul class="bs-steps"><li><strong>Controle Inteligente:</strong> Utilize o painel touch Glass Black para as diversas funções de assamento.</li><li><strong>Cuidados Práticos:</strong> Use apenas recipientes adequados. A ventilação continua por alguns minutos após desligar.</li></ul>' },
          { title: 'Máquina de Café', body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água, levante a alavanca, insira a cápsula e feche.</li><li><strong>Seu Café:</strong> Pressione qualquer botão, aguarde as luzes e selecione Espresso ou Lungo.</li><li><strong>Manutenção:</strong> Já conectado à rede 220V. A cápsula usada cai automaticamente.</li></ul>' },
          { title: 'Lava-louças', body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos antes de acomodar a louça nos cestos.</li><li><strong>Preparo:</strong> Insira o detergente e o líquido secante nos compartimentos indicados.</li><li><strong>Acionamento:</strong> Selecione o ciclo no painel e feche a porta com firmeza.</li></ul>' },
          { title: 'Depurador de Ar', body: '<span class="bs-model-tag">Coifa Square Isla 40 · Tramontina</span><ul class="bs-steps"><li><strong>Velocidade:</strong> Pressione os botões de 1 a 4 para escolher a força do exaustor.</li><li><strong>Timer:</strong> Segure o botão da velocidade ativa por 3 segundos — desligará automaticamente após 5 min.</li><li><strong>Dica:</strong> Ligue 5 minutos antes de cozinhar para melhor sucção do ar.</li></ul>' },
        ]
      },
      {
        label: 'Mini Spa Terrace',
        items: [
          { title: 'Mini Spa Terrace Jacuzzi', body: '<ul class="bs-steps"><li><strong>Exclusividade da Cobertura:</strong> Localizado na sua sacada, o Mini Spa oferece uma experiência de relaxamento premium ao ar livre.</li><li><strong>Acionamento e Bem-Estar:</strong> Verifique se a água cobre completamente os jatos antes de ligar o sistema. Sugerimos sessões de 20 a 30 minutos.</li><li><strong>Preservação e Cuidado:</strong> Não é permitido o consumo de alimentos e bebidas no interior. Utilize exclusivamente sais e espumas homologados para spas.</li></ul>' },
        ]
      },
    ]
  },
];

for (const tip of tipologias) {
  add(tip.nome);
  sep();
  br();

  for (const aba of tip.guia) {
    add(`  [ Aba: ${aba.label} ]`);
    br();
    for (const item of aba.items) {
      const conteudo = stripHtml(item.body);
      add(`  ▶ ${item.title}`);
      if (conteudo) {
        add(conteudo.split('\n').map(l => '  ' + l).join('\n'));
      } else {
        add('  (sem conteúdo definido)');
      }
      br();
    }
    br();
  }
}

// ─────────────────────────────────────────────────────────
// FIM
// ─────────────────────────────────────────────────────────
sep2();
add('FIM DO DOCUMENTO');
sep2();

import { writeFileSync } from 'fs';
const output = lines.join('\n');
writeFileSync('./conteudo-guia-digital.txt', output, 'utf-8');
console.log(`✓ Arquivo gerado: conteudo-guia-digital.txt (${(output.length / 1024).toFixed(0)} KB)`);
