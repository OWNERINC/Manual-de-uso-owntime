const COMMON = {

  brand: {
    name:     'Own Time Home Club',
    location: 'Gramado · Serra Gaúcha',
    concierge: {
      whatsapp:     '+5554999999999',
      checkoutTime: '12:00'
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
      body:     'O acesso ao empreendimento e às unidades é controlado por sistema eletrônico permanente. O ingresso é realizado mediante identificação na portaria principal, com acessos pela Rua João XXIII e pela Rua Dr. Sturmhoffel. Os dispositivos de acesso são entregues no momento do check-in, juntamente com a apresentação dos detalhes da unidade e do empreendimento. Para registro e segurança, solicitamos durante o pré-check-in a informação da placa do veículo que será utilizado durante a estadia. O estacionamento conta com 6 vagas transitórias para visitantes e 1 vaga de serviço, além das vagas designadas às unidades.'
    },
    {
      id:       'emergencia',
      icon:     'alert-triangle',
      title:    'Em Caso de Emergência',
      subtitle: '',
      body:     'Em qualquer situação de emergência — médica, de segurança ou relacionada a instalações — contate imediatamente a recepção pelo ramal [xx] ou pelo WhatsApp [xxxxxxxx]. A equipe está preparada para acionar os protocolos de emergência e coordenar o atendimento necessário, 24 horas por dia. Sugestões e reclamações podem ser registradas junto à recepção ou ao gerente geral do empreendimento, e serão tratadas conforme os processos de atendimento ao proprietário durante a hospedagem.'
    },
    {
      id:       'checkout',
      icon:     'clock',
      title:    'Check-out',
      subtitle: 'Horário Padrão: 12h00',
      body:     'Solicitamos a liberação da unidade no horário previsto para que a equipe de governança possa preparar o espaço para o próximo proprietário com o mesmo cuidado e atenção aos detalhes que você encontrou na sua chegada.\n\nProcedimento de saída: Verificar se todos os pertences pessoais foram retirados — objetos esquecidos ficarão à disposição por até 2 meses, conforme previsto na Convenção de Condomínio. Devolver as chaves ou dispositivos de acesso na recepção. Informar eventuais pendências ou irregularidades identificadas na unidade. Liquidar consumos extras não previamente quitados.'
    },
    {
      id:       'pet',
      icon:     'paw-print',
      title:    'Espaço Pet',
      subtitle: 'Orientações Gerais',
      body:     'O Own Time é um empreendimento pet friendly, porque entendemos que para muitas famílias o pet é parte essencial do núcleo familiar.\n\nOrientações gerais: Manter o pet sempre com guia/coleira nas áreas comuns. Não é permitido o acesso de animais às áreas de Alimentos & Bebidas (restaurante, coffee shop e bar), piscinas e spa. O proprietário é responsável pela higiene e limpeza de resíduos nas áreas comuns. Manter o pet sob controle em todos os momentos.\n\nItens e serviços pet: Comedouros, caminhas e tapetes higiênicos estão disponíveis mediante solicitação à recepção — informe durante o contato de pré-chegada com 7 dias de antecedência. Serviços de Pet Walker e Banho e Tosa disponíveis como serviços sob demanda.\n\nConforme a Convenção de Condomínio, será cobrada taxa de limpeza específica em razão da presença de animais durante a estadia.'
    }
  ],

  facilities: [
    {
      id:   'climatizacao',
      icon: 'thermometer',
      title: 'Climatização',
      body:  'Sua unidade conta com sistema de climatização individual por ambiente, permitindo o ajuste independente da temperatura em cada cômodo. Para melhor eficiência do sistema, recomendamos manter portas e janelas fechadas durante o uso do ar-condicionado e/ou aquecimento.\n\nPara definir a temperatura de cada ambiente:\n1. [Instrução operacional do fabricante — a ser inserida]\n2. [Instrução operacional do fabricante — a ser inserida]\n3. [Instrução operacional do fabricante — a ser inserida]\n4. [Instrução operacional do fabricante — a ser inserida]\n5. [Instrução operacional do fabricante — a ser inserida]'
    },
    {
      id:   'lareira',
      icon: 'flame',
      title: 'Lareira',
      body:  'A lareira da sua unidade é um sistema de alta eficiência térmica, equipada com câmara fechada e controle aprimorado de combustão. Projetada para oferecer conforto térmico nos dias frios da Serra Gaúcha, com menor emissão de fumaça e melhor desempenho energético. Um convite ao escapismo e à reconexão, complementando o ritual de lareira acesa e vinho compartilhado que define a experiência Own Time.\n\nOrientações de segurança: Utilize exclusivamente a lenha fornecida ou recomendada pela operação. Não utilize líquidos inflamáveis para acendimento. Não toque no vidro durante o funcionamento, pois a superfície atinge altas temperaturas. Mantenha crianças sempre sob supervisão nas proximidades da lareira.\n\nPassos para acendimento:\n1. [Instrução operacional do fabricante — a ser inserida]\n2. [Instrução operacional do fabricante — a ser inserida]\n3. [Instrução operacional do fabricante — a ser inserida]\n4. [Instrução operacional do fabricante — a ser inserida]'
    },
    {
      id:   'hidromassagem',
      icon: 'droplets',
      title: 'Hidromassagem',
      body:  'A banheira de hidromassagem da sua unidade é um espaço de bem-estar e desaceleração. Para o melhor funcionamento e conservação do equipamento, siga as orientações indicadas na própria banheira e observe as seguintes recomendações: Não utilizar produtos espumantes, óleos ou sais que possam obstruir o sistema de jatos. Verificar o nível de água antes de acionar o sistema: os jatos devem estar completamente submersos. Após o uso, desligar o sistema e manter a tampa fechada para conservação da temperatura. Para instruções completas de funcionamento, utilize o QR Code disponível junto ao equipamento.\n\nCaso identifique qualquer irregularidade no funcionamento, entre em contato com a recepção para que a equipe de manutenção possa avaliar.'
    },
    {
      id:   'conectividade',
      icon: 'wifi',
      title: 'Conectividade',
      body:  'Wi-Fi\n\nRede: [nome da rede] · Login: [login] · Senha: [senha]\n\nA conexão de internet de alta velocidade está disponível em toda a unidade e nas áreas comuns do empreendimento. A rede foi dimensionada para suportar múltiplos dispositivos simultâneos, incluindo streaming, videoconferências e navegação.'
    }
  ],

  amenities: [
    {
      id:    'piscinas',
      icon:  'waves',
      title: 'Piscinas',
      hours: '08h00 às 22h00',
      note:  'O complexo aquático conta com piscina aquecida indoor para adultos, piscina indoor infantil e piscina outdoor, todas mantidas com temperatura controlada para conforto em qualquer estação. Crianças devem estar sempre acompanhadas por um responsável. A responsabilidade técnica pela manutenção das piscinas é realizada por empresa especializada contratada pela Administradora.'
    },
    {
      id:    'sauna',
      icon:  'wind',
      title: 'Sauna',
      hours: '16h00 às 21h00',
      note:  'O Own Club dispõe de sauna seca e sauna molhada (a vapor), ambas localizadas na área de wellness do Club House. O uso é exclusivo para maiores de 16 anos. Recomenda-se hidratação antes e após o uso, e sessões de no máximo 15 a 20 minutos. A sauna integra a proposta de desaceleração e recuperação física e mental que define o pilar de bem-estar do Own Time.'
    },
    {
      id:    'fitness',
      icon:  'dumbbell',
      title: 'Fitness Center',
      hours: '24 horas',
      note:  'A sala de exercícios é equipada com aparelhos de musculação e cardiovasculares. Pensado para atender desde atletas de performance até quem busca atividade física como forma de cuidar da mente, porque, para a comunidade Own Time, a atividade física faz parte da rotina não como obrigação, mas como equilíbrio entre performance e bem-estar. Serviços de personal trainer estão disponíveis sob demanda mediante agendamento.'
    },
    {
      id:    'spa',
      icon:  'leaf',
      title: 'Spa',
      hours: '10h00 às 20h00',
      note:  'Último atendimento: 19h00\n\nO Spa do Own Time é um espaço de recuperação física e mental, não de ostentação. O conceito foi desenvolvido para quem busca massagens, banhos quentes, sauna e espaços que convidam à desaceleração.\n\nO menu de tratamentos inclui massagens relaxantes e terapêuticas, tratamentos faciais, rituais corporais e terapias holísticas. A carta completa está disponível por QR Code no spa ou via recepção.\n\nAgendamento via concierge ou WhatsApp. Recomendamos reservar com antecedência em alta temporada. Cancelamentos ou reagendamentos exigem aviso com no mínimo 4 horas de antecedência.\n\nOrientações: Chegue com 10 minutos de antecedência. Roupões e pantufas disponíveis no local. Preserve o silêncio e a tranquilidade do ambiente. Destinado a maiores de 16 anos, salvo em tratamentos específicos para crianças acompanhadas de responsáveis.'
    }
  ],

  gastronomy: [
    {
      id:    'restaurante',
      icon:  'utensils',
      title: 'Restaurante',
      hours: '12h00 às 22h00 · Último pedido 21h30',
      body:  'Serviço à la carte disponível em ambientes interno e externo, com carta inspirada na gastronomia regional e contemporânea. O restaurante integra o conceito de socialização elegante do Own Time: um espaço onde famílias e amigos compartilham momentos em torno da mesa, com a naturalidade de quem está em casa e a qualidade de um serviço autoral. O menu contempla opções para diferentes perfis e necessidades alimentares. Informações sobre ingredientes e restrições podem ser solicitadas à equipe de salão.'
    },
    {
      id:    'coffee-shop',
      icon:  'coffee',
      title: 'Coffee Shop',
      hours: '08h00 às 20h00',
      body:  'Cafés especiais, chás, opções leves e confeitaria artesanal em ambiente descontraído. O Coffee Shop é o ponto de partida do dia para quem aprecia começar a manhã com café especial.'
    },
    {
      id:    'bar',
      icon:  'wine',
      title: 'Bar',
      hours: '17h00 às 23h00',
      body:  'Carta de drinks autorais e seleção curada de vinhos da Serra Gaúcha e rótulos nacionais e internacionais.'
    },
    {
      id:    'chef-em-casa',
      icon:  'chef-hat',
      title: 'Chef em Casa',
      hours: 'Agendamento com 48h de antecedência via concierge',
      body:  'Serviço exclusivo de chef particular disponível para sua unidade mediante agendamento com antecedência mínima de 48 horas. O chef prepara menu personalizado na cozinha da sua casa, criando uma experiência gastronômica privativa e sob medida: ideal para jantares em família, ocasiões especiais ou simplesmente para quem aprecia cozinhar eventualmente em casa e receber amigos em jantares informais. O agendamento pode ser realizado via recepção ou WhatsApp. Valores e cardápios sob consulta.'
    },
    {
      id:    'cafe-da-manha',
      icon:  'salad',
      title: 'Café da Manhã',
      hours: '',
      body:  'O café da manhã combina produtos regionais, confeitaria artesanal, frutas, pães frescos e opções quentes, incluindo experiências para crianças.'
    }
  ],

  concierge: [
    {
      id:    'anfitrioes',
      icon:  'users',
      title: 'Time de Anfitriões',
      body:  'Disponível 24h. Realiza a intermediação com prestadores externos: locação de automóveis, fotógrafos, turismo, reservas em restaurantes, passeios e experiências locais. O serviço de concierge é o seu ponto de contato para organizar tudo o que estiver além da estrutura interna do empreendimento. Nosso diferencial é uma curadoria sensível e autêntica de Gramado: cafés discretos, caminhos silenciosos, vinhos que não aparecem nos mapas óbvios. O concierge traduz essa filosofia em recomendações personalizadas.'
    },
    {
      id:    'housekeeping',
      icon:  'brush-cleaning',
      title: 'Housekeeping Adicional',
      body:  'Além das limpezas incluídas nos Serviços Essenciais do condomínio — que contemplam governança com troca de roupas de cama e banho, arrumação simplificada e lavagem de enxoval no meio da semana — você pode solicitar limpezas adicionais para sua unidade durante a estadia. O serviço inclui arrumação completa, reposição de amenities e organização dos ambientes.'
    },
    {
      id:    'babysitter',
      icon:  'heart',
      title: 'Babysitter',
      body:  'Serviço de cuidador infantil qualificado, disponível para que os pais possam desfrutar de momentos a dois. O agendamento deve ser feito com antecedência via recepção ou WhatsApp.'
    },
    {
      id:    'personal',
      icon:  'activity',
      title: 'Personal Trainer',
      body:  'Programas personalizados com profissionais certificados. Sessões no Fitness Center ou ao ar livre — individual ou em grupo. Agendamento pelo concierge.'
    },
    {
      id:    'pet-care',
      icon:  'scissors',
      title: 'Pet Care',
      body:  'Serviços de Pet Walker e Banho & Tosa disponíveis para os companheiros de quatro patas. Agendamento com 24h de antecedência junto ao time de anfitriões.'
    },
    {
      id:    'car-wash',
      icon:  'droplets',
      title: 'Car Wash',
      body:  'Lavagem e higienização completa do veículo enquanto você aproveita a estadia. Agendamento na recepção ou pelo WhatsApp do concierge.'
    },
    {
      id:    'shopper',
      icon:  'shopping-bag',
      title: 'Private Shopper',
      body:  'Curadoria de compras e presentes especiais com assessoria personalizada. Produtos locais, vinhos, artesanato e itens selecionados especialmente para você.'
    }
  ],

  clube: [
    {
      id:   'emporio',
      icon: 'store',
      title: 'Empório',
      body:  'Espaço de conveniência interna com seleção de produtos premium e itens essenciais para a sua estadia. Instruções detalhadas de funcionamento e catálogo em breve.'
    },
    {
      id:   'kids',
      icon: 'baby',
      title: 'Kids',
      body:  'Funcionamento: 09h00 às 21h00\n\nEspaço dedicado ao uso recreativo, com ambientes projetados para que as crianças possam brincar com liberdade e segurança, sem excesso de telas. O uso é de responsabilidade do acompanhante: crianças devem permanecer sempre sob supervisão de um responsável. Atividades programadas para o Kids Club incluem jogos, aventuras e atividades lúdicas organizadas pela equipe durante temporadas e datas especiais.'
    },
    {
      id:   'teens',
      icon: 'users',
      title: 'Teens',
      body:  'Funcionamento: 09h00 às 21h00\n\nEspaço recreativo integrado ao Kids Club, voltado para jovens e adolescentes. O ambiente foi projetado para proporcionar liberdade, socialização e entretenimento sem excesso de telas. A presença de um responsável é necessária para menores de 16 anos. Atividades programadas durante temporadas e datas especiais são organizadas pela equipe do clube.'
    },
    {
      id:   'playground',
      icon: 'trees',
      title: 'Playground Externo',
      body:  ''
    },
    {
      id:   'pulseira',
      icon: 'watch',
      title: 'Acesso via Pulseira',
      body:  ''
    },
    {
      id:   'golf-carts',
      icon: 'car-front',
      title: 'Carrinhos de Golf',
      body:  ''
    },
    {
      id:   'carregadores',
      icon: 'plug',
      title: 'Carregadores Elétricos',
      body:  ''
    }
  ],

  segurancaAcesso: [
    {
      id:    'monitoramento',
      icon:  'shield',
      title: 'Monitoramento 24 Horas',
      body:  'O empreendimento conta com portaria e recepção funcionando 24 horas, operadas conforme os procedimentos estabelecidos pela Administradora. O sistema inclui CFTV com câmeras em pontos estratégicos das áreas comuns, monitoradas pela equipe de segurança. A vigilância é realizada de forma permanente, integrando os Serviços Essenciais do condomínio.'
    },
    {
      id:    'controle-acesso',
      icon:  'scan-line',
      title: 'Controle Eletrônico de Acesso',
      body:  'O acesso ao empreendimento e às unidades é controlado por sistema eletrônico permanente. Os dispositivos de acesso são entregues no momento do check-in e devolvidos na recepção ao final da estadia.'
    },
    {
      id:    'seguranca-perimetral',
      icon:  'shield-check',
      title: 'Sistema de Segurança Perimetral',
      body:  'O empreendimento conta com sistema de segurança perimetral que abrange toda a área do condomínio, incluindo acessos, áreas verdes e limites da propriedade. A guarita de controle de acesso principal opera de forma integrada com o sistema de monitoramento.'
    },
  ]

}
