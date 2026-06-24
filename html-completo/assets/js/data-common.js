const COMMON = {

  brand: {
    name:     'Own Time Home Club',
    location: 'Gramado · Serra Gaúcha',
    concierge: {
      whatsapp:     '+5554999999999',
      checkoutTime: '12h00'
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
      body:     '<ul class="bs-steps"><li><strong>Acesso Controlado:</strong> O ingresso ao empreendimento é realizado mediante identificação na portaria principal, com entradas convenientes pelas ruas João XXIII e Ricardo Sturmhoffel.</li></ul>'
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
      subtitle: 'Horário Padrão: 12h00',
      body:     '<ul class="bs-steps"><li><strong>Horário e Cuidado:</strong> Solicitamos a liberação da unidade no horário previsto, garantindo que a governança prepare o espaço para o próximo proprietário com o mesmo padrão de excelência da sua chegada.</li><li><strong>Pertences e Acessos:</strong> Verifique seus itens pessoais antes de sair e devolva os dispositivos de acesso na recepção. Conforme a Convenção, objetos esquecidos permanecem guardados à sua disposição por até dois meses.</li><li><strong>Acerto e Feedback:</strong> No momento da saída, pedimos que liquide eventuais consumos extras e nos informe sobre qualquer detalhe da unidade que exija a atenção da nossa equipe para mantermos a perfeição do espaço.</li></ul>'
    },
    {
      id:       'pet',
      icon:     'paw-print',
      title:    'Espaço Pet',
      subtitle: 'Orientações Gerais',
      body:     '<ul class="bs-steps"><li><strong>Convivência e Regras:</strong> Seu pet é parte da família e muito bem-vindo! Nas áreas comuns, mantenha-o sempre na guia e recolha seus resíduos. Para o conforto de todos, o acesso não é permitido nos restaurantes, bares, piscinas e spa.</li><li><strong>Comodidades e Serviços:</strong> Solicite caminhas, comedouros e tapetes higiênicos com 7 dias de antecedência no pré-check-in. Oferecemos também comodidades sob demanda, como Pet Walker e Banho e Tosa.</li><li><strong>Cuidado e Manutenção:</strong> Para assegurar o padrão de excelência na higienização do seu apartamento para o próximo uso, uma taxa de limpeza específica é aplicada durante estadias com animais, conforme a Convenção de Condomínio.</li></ul>'
    }
  ],

  facilities: [
    {
      id:   'climatizacao',
      icon: 'thermometer',
      title: 'Climatização',
      body:  '<ul class="bs-steps"><li><strong>Conforto Personalizado:</strong> A sua unidade possui um sistema de climatização inteligente e individualizado, permitindo que você ajuste a temperatura de cada ambiente de forma independente.</li><li><strong>Eficiência Térmica:</strong> Para garantir o máximo desempenho do equipamento e manter o clima perfeito na sua casa, recomendamos manter portas e janelas fechadas durante o uso.</li><li><strong>Controle e Ajustes:</strong> Configure o ambiente ideal de forma simples seguindo as instruções: [Instruções operacionais do fabricante — a serem inseridas].</li></ul>'
    },
    {
      id:   'lareira',
      icon: 'flame',
      title: 'Lareira',
      body:  '<ul class="bs-steps"><li><strong>Conforto e Tradição:</strong> Com alta eficiência térmica e câmara fechada, sua lareira foi projetada para aquecer os dias na Serra Gaúcha. É o cenário perfeito para o ritual de fogo aceso e bons vinhos, que traduz a essência da experiência Own Time.</li><li><strong>Acendimento e Uso:</strong> Utilize exclusivamente a lenha fornecida e recomendada pela nossa operação. Para ligar e ajustar a chama, siga os passos: [Instruções operacionais do fabricante — a serem inseridas].</li><li><strong>Segurança Contínua:</strong> Nunca utilize líquidos inflamáveis para o acendimento. Durante o uso, o vidro frontal atinge altíssimas temperaturas, portanto, evite tocá-lo e mantenha as crianças sempre sob rigorosa supervisão no ambiente.</li></ul>'
    },
    {
      id:   'hidromassagem',
      icon: 'droplets',
      title: 'Hidromassagem',
      body:  '<ul class="bs-steps"><li><strong>Bem-Estar e Preparo:</strong> Projetada para ser o seu espaço de desaceleração. Antes de acionar a hidromassagem, certifique-se de que o nível da água cubra completamente os jatos, garantindo a eficiência perfeita do sistema.</li><li><strong>Cuidados Essenciais:</strong> Para proteger o equipamento e evitar obstruções, não utilize óleos, produtos espumantes ou sais não recomendados. Após o uso, lembre-se de desligar o motor e manter a tampa fechada para conservar a temperatura da água.</li><li><strong>Instruções e Suporte:</strong> O passo a passo completo de funcionamento pode ser acessado pelo QR Code disponível junto à banheira. Caso precise de auxílio ou identifique qualquer irregularidade, contate a recepção para suporte imediato da nossa equipe de manutenção.</li></ul>'
    },
    {
      id:   'conectividade',
      icon: 'wifi',
      title: 'Conectividade',
      body:  '<ul class="bs-steps"><li><strong>Acesso Rápido:</strong> Conecte-se facilmente à nossa rede utilizando as credenciais: Rede: [nome da rede] | Login: [login] | Senha: [senha]. Para maior comodidade, utilize este [LINK] para logar direto.</li><li><strong>Alta Performance:</strong> Nossa infraestrutura de internet foi dimensionada para garantir velocidade e estabilidade. A rede suporta múltiplos dispositivos simultâneos com excelência, sendo ideal para streaming, videoconferências e navegação fluida.</li><li><strong>Cobertura Total:</strong> Mantenha-se online sem interrupções durante toda a sua estadia. O sinal de alta qualidade está disponível tanto no conforto e privacidade do seu apartamento quanto em todas as áreas comuns do Club.</li></ul>'
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
      body:  '<ul class="bs-steps"><li><strong>Horário e Ambiente:</strong> Operamos diariamente das 12h00 às 22h00 (com o último pedido às 21h30). Desfrute do nosso serviço à la carte escolhendo entre o conforto do salão interno ou o charme da nossa área externa.</li><li><strong>Gastronomia e Conceito:</strong> Com um menu que harmoniza a culinária regional e contemporânea, o espaço traduz a socialização elegante do Own Time: a união perfeita entre o aconchego de estar em casa e a excelência de um serviço autoral.</li><li><strong>Menu Personalizado:</strong> Nosso cardápio foi cuidadosamente planejado para atender a diferentes paladares e perfis. Nossa equipe de salão está inteiramente à disposição para detalhar ingredientes e adaptar pratos a eventuais restrições alimentares.</li></ul>'
    },
    {
      id:    'coffee-shop',
      icon:  'coffee',
      title: 'Coffee Shop',
      hours: '08h00 às 20h00',
      body:  '<ul class="bs-steps"><li><strong>Horário e Atmosfera:</strong> Com funcionamento das 08h00 às 20h00, o espaço oferece um ambiente descontraído e acolhedor, ideal para as suas pausas e encontros ao longo do dia.</li><li><strong>Seleção Artesanal:</strong> Desfrute de uma curadoria exclusiva de cafés especiais, chás reconfortantes, lanches leves e uma confeitaria artesanal preparada com o máximo cuidado.</li><li><strong>O Ponto de Partida:</strong> O cenário perfeito para quem aprecia começar a manhã com um excelente café, garantindo energia, sabor e tranquilidade para aproveitar ao máximo a sua estadia.</li></ul>'
    },
    {
      id:    'bar',
      icon:  'wine',
      title: 'Bar',
      hours: '17h00 às 23h00',
      body:  '<ul class="bs-steps"><li><strong>Coquetelaria Autoral:</strong> Desfrute de uma carta de drinks sofisticada, com opções clássicas e criações autorais pensadas para surpreender o paladar e elevar o seu momento de descontração.</li><li><strong>Curadoria de Vinhos:</strong> Aprecie uma seleção cuidadosa de rótulos nacionais e internacionais, com um merecido destaque para os prestigiados vinhos da Serra Gaúcha, perfeitos para brindar a sua estadia. [LINK PARA CARDÁPIO]</li></ul>'
    },
    {
      id:    'chef-em-casa',
      icon:  'chef-hat',
      title: 'Chef em Casa',
      hours: 'Agendamento mínimo de 48h via recepção, WhatsApp ou Concierge',
      body:  '<ul class="bs-steps"><li><strong>Gastronomia Sob Medida:</strong> Desfrute de um serviço exclusivo de chef particular diretamente na cozinha da sua unidade. O profissional cria um menu personalizado, ideal para jantares em família, celebrações especiais ou para receber amigos com total privacidade e conforto.</li><li><strong>Cardápios e Valores:</strong> As opções de menus autorais e os custos do serviço estão disponíveis sob consulta, permitindo que cada detalhe do evento seja desenhado especificamente para o seu paladar e preferências.</li></ul>'
    },
    {
      id:    'cafe-da-manha',
      icon:  'salad',
      title: 'Café da Manhã',
      hours: '07h00 às 11h00',
      body:  '<ul class="bs-steps"><li><strong>Variedade Artesanal:</strong> Desfrute de pães fresquinhos, frutas selecionadas, opções quentes preparadas na hora e uma confeitaria artística e artesanal, feita com o máximo cuidado para o seu paladar.</li><li><strong>Experiência em Família:</strong> Pensado para acolher a todos, o café da manhã inclui opções e experiências lúdicas dedicadas especialmente para encantar e nutrir as crianças.</li></ul>'
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
      title: 'Housekeeping Adicional',
      body:  '<ul class="bs-steps"><li><strong>Serviços Essenciais Incluídos:</strong> Além das limpezas incluídas nos Serviços Essenciais do condomínio — que contemplam governança com troca de roupas de cama e banho, arrumação simplificada e lavagem de enxoval no meio da semana — você pode solicitar limpezas adicionais para sua unidade durante a estadia.</li><li><strong>O Que Está Incluído:</strong> O serviço adicional contempla arrumação completa, reposição de amenities e organização dos ambientes conforme o padrão Own Time.</li></ul>'
    },
    {
      id:    'babysitter',
      icon:  'heart',
      title: 'Babysitter',
      body:  '<ul class="bs-steps"><li><strong>Cuidado e Tranquilidade:</strong> Um serviço com profissionais qualificados e de total confiança, disponível para que os pais possam desfrutar de momentos a dois com a certeza de que os pequenos estão em excelentes mãos.</li><li><strong>Planejamento e Reserva:</strong> Para garantir a disponibilidade ideal para a sua rotina, o agendamento do serviço deve ser realizado com antecedência diretamente na recepção ou por meio do WhatsApp do Club.</li><li><strong>Ambiente Seguro:</strong> O atendimento pode ser realizado no conforto e na privacidade da sua própria unidade ou nas áreas recreativas, proporcionando uma experiência lúdica, segura e acolhedora para as crianças.</li></ul>'
    },
    {
      id:    'personal',
      icon:  'activity',
      title: 'Personal Trainer',
      body:  '<ul class="bs-steps"><li><strong>Treinamento Personalizado:</strong> Programas desenvolvidos com profissionais certificados para atender o seu nível e objetivos específicos.</li><li><strong>Flexibilidade:</strong> Sessões no Fitness Center ou ao ar livre, individuais ou em grupo, no horário que melhor se adapta à sua estadia.</li><li><strong>Agendamento:</strong> Reserve o seu horário pelo concierge. [LINK]</li></ul>'
    },
    {
      id:    'pet-care',
      icon:  'scissors',
      title: 'Pet Care',
      body:  '<ul class="bs-steps"><li><strong>Serviços Disponíveis:</strong> Pet Walker e Banho & Tosa disponíveis para os companheiros de quatro patas, garantindo cuidado e conforto durante toda a estadia.</li><li><strong>Agendamento:</strong> Reserve com 24 horas de antecedência junto ao time de anfitriões. [LINK]</li></ul>'
    },
    {
      id:    'car-wash',
      icon:  'droplets',
      title: 'Car Wash',
      body:  '<ul class="bs-steps"><li><strong>Serviço Completo:</strong> Lavagem e higienização completa do seu veículo enquanto você relaxa e aproveita a estadia.</li><li><strong>Agendamento:</strong> Solicite na recepção ou pelo WhatsApp do concierge. [LINK]</li></ul>'
    },
    {
      id:    'shopper',
      icon:  'shopping-bag',
      title: 'Private Shopper',
      body:  '<ul class="bs-steps"><li><strong>Curadoria Personalizada:</strong> Assessoria exclusiva de compras e presentes especiais, desenhada especificamente para o seu gosto e preferências.</li><li><strong>Seleção Exclusiva:</strong> Produtos locais, vinhos, artesanato e itens selecionados com carinho especialmente para você. [LINK]</li></ul>'
    }
  ],

  clube: [
    {
      id:   'emporio',
      icon: 'store',
      title: 'Empório',
      body:  '<ul class="bs-steps"><li><strong>Seleção Premium:</strong> Um espaço prático de conveniência interna, planejado com uma curadoria de produtos de alta qualidade e itens essenciais para o seu conforto diário.</li><li><strong>Catálogo Exclusivo:</strong> As instruções detalhadas de funcionamento e a lista completa de produtos estarão disponíveis muito em breve para a sua comodidade.</li><li><strong>Horário e Atendimento:</strong> O espaço opera diariamente das [X] às [X] horas. Para informações adicionais ou suporte imediato, entre em contato acessando este [LINK].</li></ul>'
    },
    {
      id:   'kids',
      icon: 'baby',
      title: 'Kids',
      hours: '09h00 às 21h00',
      body:  '<ul class="bs-steps"><li><strong>Ambiente Lúdico:</strong> O espaço foi cuidadosamente projetado para que as crianças brinquem com liberdade e segurança, priorizando a diversão longe das telas.</li><li><strong>Supervisão Contínua:</strong> Para garantir a tranquilidade e o bem-estar de todos, é fundamental que as crianças permaneçam sempre acompanhadas e sob a supervisão constante de um adulto responsável.</li><li><strong>Programação Especial:</strong> Durante as temporadas e datas comemorativas, nossa equipe organiza um cronograma exclusivo com jogos, aventuras e atividades dirigidas para enriquecer ainda mais a experiência dos pequenos.</li></ul>'
    },
    {
      id:   'teens',
      icon: 'users',
      title: 'Teens',
      hours: '09h00 às 21h00',
      body:  '<ul class="bs-steps"><li><strong>Socialização e Entretenimento:</strong> O espaço é integrado ao Kids e projetado para oferecer liberdade e interação aos jovens, priorizando a diversão além das telas.</li><li><strong>Convivência Segura:</strong> Para garantir um ambiente adequado e a tranquilidade de todas as famílias, o acompanhamento de um adulto responsável é necessário para os menores de 16 anos.</li><li><strong>Programação Dinâmica:</strong> Durante as temporadas e datas comemorativas, nossa equipe prepara um cronograma interativo com atividades exclusivas, pensado especialmente para a energia dos adolescentes.</li></ul>'
    },
    {
      id:   'playground',
      icon: 'trees',
      title: 'Playground Externo',
      body:  '<ul class="bs-steps"><li><strong>Diversão ao Ar Livre:</strong> Um espaço lúdico e seguro, projetado para garantir o entretenimento e estimular as brincadeiras das crianças.</li><li><strong>Supervisão e Cuidado:</strong> Para a tranquilidade de todos, é fundamental que os pequenos estejam sempre acompanhados e supervisionados por um adulto responsável durante o uso.</li><li><strong>Espaço Compartilhado:</strong> Aproveite a área para criar boas memórias em família, lembrando sempre de zelar pelos equipamentos e respeitar o momento de diversão das outras crianças.</li></ul>'
    },
    {
      id:   'pulseira',
      icon: 'watch',
      title: 'Acesso via Pulseira',
      body:  '<ul class="bs-steps"><li><strong>Fase de Soft Opening:</strong> Para garantir que toda a operação atinja o padrão de excelência que você merece, as pulseiras de acesso estão temporariamente indisponíveis neste período inicial.</li><li><strong>Abertura Ágil:</strong> Aproxime a sua pulseira da fechadura eletrônica para destravar a porta da sua unidade de forma rápida e intuitiva.</li><li><strong>Segurança Integrada:</strong> O acessório é de uso pessoal e intransferível. Em caso de perda, informe a recepção imediatamente para realizarmos o bloqueio e a emissão de uma nova via.</li></ul>'
    },
    {
      id:   'golf-carts',
      icon: 'car-front',
      title: 'Carrinhos de Golf',
      body:  '<ul class="bs-steps"><li><strong>Fase de Soft Opening:</strong> Para garantir que toda a operação atinja o padrão de excelência que você merece, os carrinhos de golfe estão temporariamente indisponíveis neste período inicial.</li><li><strong>Mobilidade e Conforto:</strong> Em breve, nossa frota estará totalmente à sua disposição para facilitar o deslocamento por toda a extensão do Club de forma ágil e segura.</li><li><strong>Assistência Imediata:</strong> Durante essa fase, nossa equipe de atendimento está pronta para auxiliar com qualquer necessidade de locomoção interna ou transporte de itens pesados. Acione a recepção sempre que precisar.</li></ul>'
    },
    {
      id:   'carregadores',
      icon: 'plug',
      title: 'Carregadores Elétricos',
      body:  '<ul class="bs-steps"><li><strong>Conexão Simples:</strong> Estacione nas vagas exclusivas de recarga e conecte o cabo ao seu veículo para iniciar o reconhecimento.</li><li><strong>Tarifação por Consumo:</strong> O serviço é faturado de forma prática, baseado exclusivamente na energia utilizada. Siga as instruções no painel do carregador para liberar a sessão e acompanhar a cobrança.</li><li><strong>Uso Compartilhado:</strong> Assim que a carga for concluída, pedimos a gentileza de desconectar o equipamento e liberar o espaço para garantir a comodidade de todos.</li></ul>'
    },
    {
      id:   'piscinas-clube',
      icon: 'waves',
      title: 'Piscinas',
      hours: '08h00 às 22h00',
      body:  '<ul class="bs-steps"><li><strong>Complexo Aquático:</strong> O empreendimento conta com piscina aquecida indoor para adultos, piscina indoor infantil e piscina outdoor, todas mantidas com temperatura controlada para conforto em qualquer estação.</li><li><strong>Supervisão:</strong> Crianças devem estar sempre acompanhadas por um responsável. A manutenção técnica é realizada por empresa especializada contratada pela Administradora.</li></ul>'
    },
    {
      id:   'sauna-clube',
      icon: 'wind',
      title: 'Saunas',
      hours: '16h00 às 21h00',
      body:  '<ul class="bs-steps"><li><strong>Tipos Disponíveis:</strong> O Own Club dispõe de sauna seca e sauna molhada (a vapor), ambas localizadas na área de wellness do Club House.</li><li><strong>Uso Responsável:</strong> Exclusivo para maiores de 16 anos. Recomenda-se hidratação antes e após o uso, com sessões de no máximo 15 a 20 minutos.</li></ul>'
    },
    {
      id:   'spa-clube',
      icon: 'leaf',
      title: 'Spa',
      hours: '10h00 às 20h00 · Último atendimento: 19h00',
      body:  '<ul class="bs-steps"><li><strong>Tratamentos:</strong> O menu inclui massagens relaxantes e terapêuticas, tratamentos faciais, rituais corporais e terapias holísticas. A carta completa está disponível por QR Code no spa ou via recepção.</li><li><strong>Agendamento:</strong> Via concierge ou WhatsApp. Recomendamos reservar com antecedência em alta temporada. Cancelamentos exigem aviso com no mínimo 4 horas de antecedência.</li><li><strong>Orientações:</strong> Chegue com 10 minutos de antecedência. Roupões e pantufas disponíveis no local. Destinado a maiores de 16 anos, salvo em tratamentos específicos para crianças acompanhadas de responsáveis.</li></ul>'
    },
    {
      id:   'academia-clube',
      icon: 'dumbbell',
      title: 'Academia',
      hours: '24 horas',
      body:  '<ul class="bs-steps"><li><strong>Equipamentos:</strong> Sala equipada com aparelhos de musculação e cardiovasculares, para atender desde atletas de performance até quem busca atividade física como equilíbrio entre performance e bem-estar.</li><li><strong>Personal Trainer:</strong> Serviços de personal trainer disponíveis sob demanda mediante agendamento pelo concierge.</li></ul>'
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
