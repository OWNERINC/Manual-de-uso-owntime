const COMMON = {

  brand: {
    name:     'Own Time Home Club',
    location: 'Gramado · Serra Gaúcha',
    concierge: {
      whatsapp:     '+5554999999999',
      checkoutTime: '10h'
    }
  },

  heroIntro: [
    'O empreendimento é composto por 24 casas e 40 apartamentos tipo flat, operando sob o regime de multipropriedade, onde cada proprietário é titular de frações de tempo que conferem o direito de uso exclusivo de sua unidade nos períodos de utilização definidos pelo Calendário Anual. A administração e operação é conduzida pela Own Time Administradora e Casa Hotéis Administradora, responsáveis pela gestão do condomínio e dos sistemas de multipropriedade.',
    'Sua unidade foi projetada com arquitetura contemporânea alpina: materiais naturais como madeira, pedra local e tecidos quentes combinados com iluminação indireta para oferecer a sensação de uma casa perfeita na montanha. Cada ambiente foi pensado para proporcionar o máximo de conforto térmico, acústico e visual, permitindo que você desacelere e viva o seu tempo com presença.',
    'As unidades são mantidas montadas, equipadas e decoradas de acordo com os padrões estabelecidos pela Ownerinc, conforme previsto na Convenção de Condomínio. Não é admitida qualquer alteração no layout, mobiliário ou decoração.'
  ],

  orientacoesGerais: [
    {
      id:       'check-in',
      icon:     'key',
      title:    'Check-in & Segurança',
      subtitle: '',
      body:     '<ul class="bs-steps"><li><strong>Acesso Controlado:</strong> O ingresso ao empreendimento é realizado por reconhecimento facial, com entradas pelas ruas:</li></ul><div style="display:flex;flex-direction:column;gap:0.5rem;margin-top:1rem"><a href="https://maps.app.goo.gl/FmiiuFZ4pBUzGycWA" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:space-between;padding:0.7rem 1rem;border:1px solid var(--color-border);border-radius:8px;text-decoration:none;color:var(--color-text);font-family:var(--font-body);font-size:0.85rem;font-weight:500;-webkit-tap-highlight-color:transparent"><span>João XXIII</span><span style="font-size:0.65rem;letter-spacing:0.1em;color:var(--color-accent-lt);text-transform:uppercase">Ver no mapa ↗</span></a><a href="https://maps.app.goo.gl/u47vsE128QFgDaef9" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:space-between;padding:0.7rem 1rem;border:1px solid var(--color-border);border-radius:8px;text-decoration:none;color:var(--color-text);font-family:var(--font-body);font-size:0.85rem;font-weight:500;-webkit-tap-highlight-color:transparent"><span>Ricardo Sturmhoffel</span><span style="font-size:0.65rem;letter-spacing:0.1em;color:var(--color-accent-lt);text-transform:uppercase">Ver no mapa ↗</span></a></div>'
    },
    {
      id:       'emergencia',
      icon:     'alert-triangle',
      title:    'Em Caso de Emergência',
      subtitle: '',
      body:     '<ul class="bs-steps"><li><strong>Contato Imediato:</strong> Em situações de emergência médica, de segurança ou nas instalações, acione a recepção imediatamente pelo ramal [xx] ou pelo WhatsApp [xxxxxxxx].</li><li><strong>Suporte 24 Horas:</strong> Nossa equipe está integralmente preparada e à disposição a qualquer momento para acionar os protocolos de segurança e coordenar o seu atendimento.</li><li><strong>Atendimento ao Proprietário:</strong> Sugestões e observações podem ser reportadas diretamente à recepção ou à gerência geral, garantindo um acompanhamento dedicado e resolutivo durante toda a sua hospedagem.</li></ul>'
    },
    {
      id:       'checkout',
      icon:     'clock',
      title:    'Check-out',
      subtitle: 'Check-in: 16h · Check-out: 10h',
      body:     '<ul class="bs-steps"><li>A pontualidade na saída garante o tempo necessário para a nossa governança deixar a unidade impecável para o próximo uso.</li><li><strong>Procedimentos de Partida:</strong> Antes de deixar o club house, solicitamos que passe na recepção para devolver os cartões de acesso e realizar o acerto de eventuais consumos extras.</li><li><strong>Pertences:</strong> Lembre-se de conferir seus pertences. Objetos esquecidos ficam armazenados em segurança por até dois meses.</li></ul>'
    },
    {
      id:       'pet',
      icon:     'paw-print',
      title:    'Espaço Pet',
      subtitle: 'Orientações Gerais',
      body:     '<ul class="bs-steps"><li><strong>Boas-vindas:</strong> Seu pet é parte da família e muito bem-vindo! Para que a experiência de todos seja impecável, nossa convenção permite até [número máximo] pets de porte [inserir porte] por unidade.</li><li><strong>Taxas:</strong> Aplica-se uma diária de R$ 85,00 por animal, além de uma taxa de limpeza de [valor] referente à higienização especial da unidade após o uso.</li><li><strong>Comodidades:</strong> Solicite caminhas, comedouros e tapetes higiênicos com 7 dias de antecedência no pré-check-in.</li><li><strong>Serviços Sob Demanda:</strong> Pet walker, banho e tosa disponíveis. Entre em contato com nosso time de anfitriões: [link]</li></ul>'
    }
  ],

  facilities: [
    {
      id:   'climatizacao',
      icon: 'thermometer',
      title: 'Climatização',
      tabs: [
        {
          id: 'ac',
          title: 'Ar Condicionado',
          body: '<ul class="bs-steps"><li><strong>Temperatura de Conforto:</strong> Para um ambiente perfeitamente agradável, sugerimos manter o equipamento configurado entre [inserir temperatura, ex: 22°C a 24°C].</li><li><strong>Observação:</strong> [Alinhar com a Incorp sobre a variação do AC dos apartamentos para as casas e inserir texto aqui].</li></ul>'
        },
        {
          id: 'piso',
          title: 'Piso Aquecido',
          body: '<ul class="bs-steps"><li><strong>Tecnologia:</strong> O ambiente conta com piso radiante, aquecido por água a gás natural. A temperatura é predeterminada de forma automática e inteligente.</li><li><strong>Consumo (Pay per Use):</strong> O uso do piso aquecido, assim como o consumo de água e energia, opera na modalidade pay per use, com medição realizada proporcionalmente ao período da sua estadia.</li><li><strong>Aviso de Soft Open:</strong> Durante esta fase inicial de soft open, o sistema de piso aquecido poderá estar temporariamente inoperante.</li></ul>'
        }
      ]
    },
    {
      id:   'lareira',
      icon: 'flame',
      title: 'Lareira',
      body:  '<ul class="bs-steps"><li><strong>Acendimento e Uso:</strong> Utilize exclusivamente a lenha fornecida pela nossa operação. Para ligar e ajustar a chama, siga este passo a passo: [Instruções operacionais do fabricante — a serem inseridas].</li><li><strong>Atenção ao Vidro:</strong> O vidro frontal atinge altíssimas temperaturas durante o uso. Evite tocá-lo e mantenha crianças sob rigorosa supervisão.</li><li><strong>Prevenção:</strong> É estritamente proibido o uso de líquidos inflamáveis para o acendimento.</li></ul>'
    },
    {
      id:   'conectividade',
      icon: 'wifi',
      title: 'Conectividade',
      body:  '<ul class="bs-steps"><li><strong>Como Conectar:</strong> Rede: [nome da rede] · Senha: [senha] · <a href="#">Clique aqui para logar automaticamente</a></li><li><strong>Alta Performance:</strong> Nossa infraestrutura de alta performance garante velocidade e estabilidade em 100% do complexo, seja no conforto da sua unidade ou nas áreas comuns do Club.</li><li><strong>Multi-dispositivos:</strong> Ideal para múltiplos dispositivos, streaming e videoconferências, sem interrupções.</li></ul>'
    }
  ],

  amenities: [
    {
      id:    'piscinas',
      icon:  'waves',
      title: 'Piscinas',
      hours: '8h às 22h',
      note:  '<ul class="bs-steps"><li>Com águas mantidas entre 30° e 36°C, as piscinas contam com três profundidades: [X], [X] e [X].</li><li>Utilize exclusivamente roupas de banho. Utilize a ducha antes de entrar.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Proibido</p><ul class="bs-steps"><li>Caixas de som</li><li>Alimentos e bebidas</li><li>Recipientes de vidro</li><li>Abertura ou fechamento das esquadrias</li></ul>'
    },
    {
      id:    'sauna',
      icon:  'wind',
      title: 'Saunas',
      hours: '8h às 22h',
      note:  '<ul class="bs-steps"><li>Se desejar utilizá-la fora do período, nossa equipe está à disposição para acioná-la. Solicite via WhatsApp com [Inserir tempo] de antecedência. [link]</li><li>Proibido entrada com bebidas, itens de vidro, ou caixas de som.</li><li>Proibida captação de imagens (Fotos e Vídeos), protegendo a privacidade de todos.</li></ul>'
    },
    {
      id:    'fitness',
      icon:  'dumbbell',
      title: 'Fitness Center',
      hours: '24 horas',
      note:  '<ul class="bs-steps"><li>A sala conta com aparelhos de musculação de ponta, fornecidos por Technogym.</li><li>Sempre que desejar elevar seu treino, dispomos de serviços de personal trainer sob demanda. Basta realizar o agendamento prévio com a nossa equipe. Consulte disponibilidade no contato [link]</li></ul>'
    },
    {
      id:    'spa',
      icon:  'leaf',
      title: 'Spa',
      hours: '10h às 20h · Último atendimento: 19h',
      note:  '<ul class="bs-steps"><li>Nosso menu oferece massagens terapêuticas e relaxantes, tratamentos faciais, rituais corporais e terapias holísticas. Acesse a carta completa através deste contato: [link].</li><li>Agendamentos: Via time de anfitriões. Recomendamos antecedência, especialmente na alta temporada. Cancelamentos exigem aviso prévio de, no mínimo, 4 horas.</li><li>Uso exclusivo para maiores de 16 anos, exceto em tratamentos infantis específicos com responsável.</li></ul>'
    }
  ],

  gastronomy: [
    {
      id:    'restaurante',
      icon:  'utensils',
      title: 'Restaurante',
      hours: '12h às 22h · com o último pedido às 21h30',
      body:  '<ul class="bs-steps"><li><strong>Localização:</strong> Localizado no andar térreo do Club House.</li><li><strong>Ambientes:</strong> Desfrute do serviço à la carte no conforto do nosso salão interno ou no charme da área externa.</li><li><strong>Restrições Alimentares:</strong> Nosso cardápio foi planejado para diferentes paladares. Nossa equipe está à disposição para detalhar ingredientes e adaptar pratos conforme as suas necessidades.</li></ul>'
    },
    {
      id:    'coffee-shop',
      icon:  'coffee',
      title: 'Coffee Shop',
      hours: '8h às 20h',
      body:  '<ul class="bs-steps"><li><strong>Localização:</strong> Localizado no andar térreo do Club House.</li><li><strong>Horário:</strong> Diariamente, das 08h às 20h.</li><li><strong>Cardápio:</strong> Desfrute da nossa curadoria exclusiva de cafés especiais, chás, lanches leves e confeitaria artesanal.</li></ul>'
    },
    {
      id:    'bar',
      icon:  'wine',
      title: 'Bar',
      hours: '17h às 23h',
      body:  '<ul class="bs-steps"><li><strong>Coquetelaria Autoral:</strong> Desfrute de uma carta de drinks sofisticada, com opções clássicas e criações autorais pensadas para surpreender o paladar e elevar o seu momento de descontração.</li><li><strong>Curadoria de Vinhos:</strong> Aprecie uma seleção cuidadosa de rótulos nacionais e internacionais, com um merecido destaque para os prestigiados vinhos da Serra Gaúcha, perfeitos para brindar a sua estadia. [LINK PARA CARDÁPIO]</li></ul>'
    },
    {
      id:    'chef-em-casa',
      icon:  'chef-hat',
      title: 'Chef em Casa',
      hours: 'Agendamento mínimo de 48h via recepção, WhatsApp ou Concierge',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de Chef em Casa está temporariamente indisponível nesta fase inicial. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:    'cafe-da-manha',
      icon:  'salad',
      title: 'Café da Manhã',
      hours: '7h às 11h',
      body:  '<ul class="bs-steps"><li><strong>Serviço:</strong> Para o seu máximo conforto e privacidade, o café da manhã é entregue diretamente na sua casa em formato de cesta, preparada com uma seleção especial.</li><li><strong>Valor:</strong> R$ 120,00 (serve perfeitamente duas pessoas).</li><li><strong>Como Pedir:</strong> Solicite com nossa equipe na recepção ou via WhatsApp.</li></ul>'
    }
  ],

  concierge: [
    {
      id:    'anfitrioes',
      icon:  'users',
      title: 'Time de Anfitriões',
      body:  '<ul class="bs-steps"><li><strong>Suporte e Conveniência 24h:</strong> Nossa equipe de anfitriões está disponível a qualquer hora para apoio e coordenação durante toda a sua estadia.</li><li><strong>Intermediação de Serviços:</strong> Facilitamos a sua rotina e logística externa cuidando de reservas de restaurantes, agendamento de passeios, locação de veículos, contratação de fotógrafos e outras experiências locais com total comodidade.</li><li><strong>Curadoria Autêntica de Gramado:</strong> Oferecemos uma perspectiva exclusiva e refinada da região, traduzida em recomendações personalizadas de cafés discretos, caminhos silenciosos e rótulos selecionados que fogem completamente dos mapas turísticos óbvios.</li></ul>'
    },
    {
      id:    'housekeeping',
      icon:  'sparkles',
      title: 'Housekeeping',
      hours: '',
      body:  '<ul class="bs-steps"><li><strong>Serviço Incluso:</strong> Arrumação simplificada, com lavagem de enxoval e troca de roupas de cama e banho.</li><li><strong>Serviço Adicional (Valor X):</strong> Arrumação completa da unidade, reposição de amenities e organização detalhada dos ambientes no padrão Own Time.</li></ul>'
    },
    {
      id:    'babysitter',
      icon:  'heart',
      title: 'Babysitter',
      body:  '<ul class="bs-steps"><li><strong>Suporte com as Crianças?</strong> Sim! Indicaremos um profissional homologado e de total confiança para garantir a segurança e o bem-estar dos pequenos. Entre em contato com o time de anfitriões. [link]</li></ul>'
    },
    {
      id:    'personal',
      icon:  'activity',
      title: 'Personal Trainer',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de Personal Trainer estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:    'pet-care',
      icon:  'scissors',
      title: 'Pet Care',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de Pet Care estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:    'car-wash',
      icon:  'droplets',
      title: 'Car Wash',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de Car Wash estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:    'shopper',
      icon:  'shopping-bag',
      title: 'Private Shopper',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de Private Shopper estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    }
  ],

  clube: [
    {
      id:   'emporio',
      icon: 'store',
      title: 'Empório',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O Empório estará disponível em breve. Durante esta fase inicial, o serviço encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:   'kids',
      icon: 'baby',
      title: 'Kids',
      hours: '09h às 21h',
      body:  '<ul class="bs-steps"><li><strong>Ambiente:</strong> O espaço foi projetado para que as crianças brinquem com liberdade e segurança, priorizando a diversão longe das telas.</li><li><strong>Supervisão e Cuidado:</strong> Para garantir o bem-estar e a tranquilidade coletiva, é fundamental que as crianças permaneçam sob a supervisão constante de um adulto responsável.</li><li><strong>Programação Especial:</strong> Durante as temporadas e datas comemorativas, o Club oferece um cronograma exclusivo com jogos e atividades dirigidas, pensado para enriquecer a experiência dos pequenos.</li></ul>'
    },
    {
      id:   'teens',
      icon: 'users',
      title: 'Teens',
      hours: '09h às 21h',
      body:  '<ul class="bs-steps"><li><strong>Liberdade e Interação:</strong> Criado para proporcionar liberdade e interação, este ambiente prioriza a diversão dos jovens além das telas.</li><li><strong>Acesso e Monitoramento:</strong> O acesso ao espaço é feito de forma independente por qualquer jovem que porte o cartão da unidade. Para a segurança de todos e total tranquilidade dos pais, o ambiente é acompanhado 24 horas pelo nosso sistema de monitoramento via CFTV.</li></ul>'
    },
    {
      id:   'playground',
      icon: 'trees',
      title: 'Playground Externo',
      hours: '09h às 21h',
      body:  '<ul class="bs-steps"><li><strong>Acompanhamento obrigatório:</strong> O espaço não conta com serviço de recreação. Todas as crianças devem estar acompanhadas e supervisionadas por um adulto responsável em tempo integral.</li><li><strong>Regras de convivência:</strong> É estritamente proibido o consumo de bebidas alcoólicas nesta área.</li><li><strong>Segurança:</strong> Ambiente monitorado continuamente por câmeras de segurança (CCTV).</li></ul>'
    },
    {
      id:   'pulseira',
      icon: 'credit-card',
      title: 'Acesso via Cartão',
      body:  '<ul class="bs-steps"><li><strong>Abertura Ágil:</strong> Aproxime o seu cartão da fechadura eletrônica para destravar a porta da sua unidade de forma rápida e intuitiva.</li><li><strong>Segurança Integrada:</strong> O cartão é de uso pessoal e intransferível. Em caso de perda, informe a recepção imediatamente para realizarmos o bloqueio e a emissão de uma nova via.</li></ul>'
    },
    {
      id:   'golf-carts',
      icon: 'car-front',
      title: 'Transporte Interno',
      body:  '<ul class="bs-steps"><li><strong>Mobilidade e Conforto:</strong> Nossa frota estará totalmente à sua disposição para facilitar o deslocamento por toda a extensão do Club de forma ágil e segura.</li><li><strong>Assistência Imediata:</strong> Nossa equipe de atendimento está pronta para auxiliar com qualquer necessidade de locomoção interna ou transporte de itens pesados. Acione a recepção sempre que precisar.</li></ul>'
    },
    {
      id:   'carregadores',
      icon: 'plug',
      title: 'Carregadores Elétricos',
      body:  '<ul class="bs-steps"><li><strong>Conexão Simples:</strong> Estacione nas vagas exclusivas de recarga e conecte o cabo ao seu veículo para iniciar o reconhecimento.</li><li><strong>Tarifação por Consumo:</strong> O serviço é faturado de forma prática, baseado exclusivamente na energia utilizada. Siga as instruções no painel do carregador para liberar a sessão e acompanhar a cobrança.</li><li><strong>Uso Compartilhado:</strong> Assim que a carga for concluída, pedimos a gentileza de desconectar o equipamento e liberar o espaço para garantir a comodidade de todos.</li></ul>'
    },

  ],

  segurancaAcesso: [
    {
      id:    'monitoramento',
      icon:  'shield',
      title: 'Monitoramento 24 Horas',
      body:  '<ul class="bs-steps"><li><strong>Atendimento:</strong> Portaria e recepção à sua disposição 24 horas por dia.</li><li><strong>Monitoramento:</strong> As áreas comuns são protegidas por um sistema de CFTV equipado com [INSERIR NÚMERO] câmeras em pontos estratégicos.</li><li><strong>Vigilância:</strong> Equipe de segurança especializada realizando o controle contínuo do ambiente.</li></ul>'
    },
    {
      id:    'controle-acesso',
      icon:  'credit-card',
      title: 'Cartão de Acesso',
      body:  '<ul class="bs-steps"><li><strong>Uso e Conservação:</strong> Para abrir as portas, aproxime o cartão do leitor. Para garantir o perfeito funcionamento durante toda a estadia, armazene-o com cuidado, evitando dobrar ou mantê-lo próximo a aparelhos celulares e fechos magnéticos.</li><li><strong>Logística:</strong> Os cartões devem ser retirados na recepção no momento da sua chegada e devolvidos no mesmo local ao encerrar a sua estadia.</li><li><strong>Taxa de Reposição:</strong> Em caso de perda ou extravio, haverá a cobrança de uma taxa de reposição no acerto final.</li></ul>'
    },
    {
      id:    'seguranca-perimetral',
      icon:  'shield-check',
      title: 'Sistema de Segurança Perimetral',
      body:  '<ul class="bs-steps"><li><strong>Proteção Completa:</strong> Sistema de segurança perimetral cobrindo todos os acessos, áreas verdes e limites da propriedade.</li><li><strong>Controle Integrado:</strong> A guarita principal opera em total sinergia com o nosso sistema de monitoramento contínuo.</li></ul>'
    },
  ]

}
