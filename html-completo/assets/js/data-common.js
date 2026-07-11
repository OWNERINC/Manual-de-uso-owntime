const COMMON = {

  sugestoes: {
    webhookUrl: 'https://script.google.com/macros/s/AKfycbyW2462HxfS3YQSFe1T78IqwGkIM64gd4zFFNSDkxOofOIiiM-yNaBxu7ZrynkyCCs2VQ/exec'
  },

  brand: {
    name:     'Own Time Home Club',
    location: 'Gramado · Serra Gaúcha',
    concierge: {
      whatsapp:     '+5554999588947',
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
      body:     '<ul class="bs-steps"><li><strong>Acesso Controlado:</strong> O ingresso ao empreendimento é realizado diretamente na guarita.</li></ul><p style="font-size:0.8rem;opacity:0.55;letter-spacing:0.06em;text-transform:uppercase;margin:1.25rem 0 0.6rem">Como chegar</p><div style="display:flex;flex-direction:column;gap:0.5rem"><a href="https://share.google/nXyQHV9wrfuFeu4M3" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;border:1px solid var(--color-border);border-radius:8px;text-decoration:none;color:var(--color-text);font-family:var(--font-body);font-size:0.85rem;font-weight:500;-webkit-tap-highlight-color:transparent"><span>R. João XXIII, 222</span><span style="font-size:0.65rem;letter-spacing:0.1em;color:var(--color-accent-lt);text-transform:uppercase;flex-shrink:0">Mapa ↗</span></a></div>'
    },
    {
      id:       'checkout',
      icon:     'clock',
      title:    'Check-out',
      subtitle: 'Check-in: 16h · Check-out: 10h',
      body:     '<ul class="bs-steps"><li>Ao final da sua estadia, siga estas orientações para concluir o check-out.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como funciona</p><ul class="bs-steps"><li>Antes de deixar o empreendimento, dirija-se à recepção do Club House para devolver os cartões de acesso e concluir o check-out.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Consumos extras</p><ul class="bs-steps"><li>O extrato de eventuais consumos é enviado por WhatsApp antes da saída. Caso identifique alguma divergência, entre em contato com a recepção antes da finalização da cobrança.</li><li>Na ausência de questionamentos, os valores serão debitados na forma de pagamento informada como garantia no momento do check-in.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>Confira se todos os seus pertences foram retirados da unidade antes da saída.</li><li>Objetos esquecidos permanecem armazenados em segurança por até 6 meses.</li><li>Caso precise localizar algum pertence, entre em contato com a recepção.</li></ul>'
    },
    {
      id:       'emergencia',
      icon:     'alert-triangle',
      title:    'Em Caso de Emergência',
      subtitle: '',
      body:     '<ul class="bs-steps"><li>Em caso de emergência ou sempre que precisar de assistência imediata, entre em contato com a recepção.</li><li>Você pode nos acionar pelo ramal 9 ou pelo botão abaixo.</li><li>Nossa equipe está disponível 24 horas para prestar o suporte necessário.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
    },
    {
      id:    'delivery',
      icon:  'package',
      title: 'Delivery',
      body:  '<ul class="bs-steps"><li>Ao solicitar serviços de delivery utilize como endereço de entrega:</li></ul><div style="display:flex;align-items:center;justify-content:space-between;padding:0.7rem 1rem;border:1px solid var(--color-border);border-radius:8px;margin-top:0.75rem;margin-bottom:0.75rem;cursor:pointer" onclick="navigator.clipboard.writeText(\'Rua João XXIII, 222, Gramado - RS\').then(()=>{this.querySelector(\'span\').textContent=\'Copiado ✓\'})"><span>Rua João XXIII, 222 · Gramado - RS</span><span style="font-size:0.65rem;letter-spacing:0.1em;color:var(--color-accent-lt);text-transform:uppercase">Copiar</span></div><ul class="bs-steps"><li>A retirada da sua entrega é feita na recepção do Club House.</li></ul>'
    },
    {
      id:       'pet',
      icon:     'paw-print',
      title:    'Hospedagem com Pet',
      subtitle: '',
      body:     '<p class="bs-model-tag">Taxas</p><ul class="bs-steps"><li>A hospedagem de pets está sujeita à cobrança de uma diária de R$ 85,00 por animal, além da taxa de limpeza final da unidade.</li><li>Para mais informações, consulte a recepção.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Comodidades</p><ul class="bs-steps"><li>Caso deseje, solicite caminhas, comedouros e tapetes higiênicos com pelo menos 7 dias de antecedência ao check-in.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Serviços</p><ul class="bs-steps"><li>Durante o período de Soft Opening, os serviços sob demanda para pets ainda não estão disponíveis.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Recomendações</p><ul class="bs-steps"><li>Mantenha seu pet sempre com guia ou coleira nas áreas comuns do empreendimento.</li><li>O acesso de animais às áreas compartilhadas do Club House não é permitido.</li><li>O proprietário é responsável pela higiene e limpeza dos resíduos do animal nas áreas comuns.</li><li>Mantenha seu pet sob controle durante toda a estadia, evitando situações que possam causar desconforto aos demais proprietários e hóspedes.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
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
          body: '<ul class="bs-steps"><li><strong>Temperatura de Conforto:</strong> Recomendamos manter o ambiente entre 20°C e 23°C para máximo conforto.</li></ul>'
        },
        {
          id: 'piso',
          title: 'Piso Aquecido',
          body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O sistema de piso aquecido está temporariamente inoperante nesta fase inicial. Agradecemos sua compreensão.</li></ul>'
        }
      ]
    },
    {
      id:   'lareira',
      icon: 'flame',
      title: 'Lareira',
      body:  '<p class="bs-model-tag">Acendimento e uso</p><ul class="bs-steps"><li>Utilize exclusivamente a lenha fornecida.</li><li>Para acender a lareira, siga esta sequência:<ol style="margin-top:0.5rem;padding-left:1.25rem;line-height:1.8"><li>Coloque o papel no fundo da fornalha, seguido pelas aparas, a lenha miúda e, por último, as toras maiores.</li><li>Acenda o fogo e feche a porta imediatamente após a ignição. A lareira não deve ser utilizada com a porta aberta.</li><li>Quando o fogo estiver bem estabelecido, utilize o controle de ar para reduzir a entrada de oxigênio e manter a chama estável.</li><li>Para reabastecer, coloque a nova lenha sobre a brasa, evitando aproximá-la do vidro.</li></ol></li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Atenção</p><ul class="bs-steps"><li>O vidro frontal e a estrutura da lareira atingem altas temperaturas durante o funcionamento.</li><li>Mantenha crianças, móveis e objetos afastados do equipamento enquanto ele estiver em uso.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Não é permitido</p><ul class="bs-steps"><li>Utilizar líquidos inflamáveis para acender ou reacender o fogo.</li><li>Utilizar combustíveis ou materiais inadequados, como briquetes, Pallet, querosene ou outros aceleradores de combustão.</li><li>Utilizar a lareira para incinerar lixo ou qualquer outro resíduo.</li></ul>'
    },
    {
      id:   'conectividade',
      icon: 'wifi',
      title: 'Conectividade',
      body:  '<p class="bs-model-tag">Como conectar</p><ul class="bs-steps"><li>Selecione a rede <strong>hospedes</strong>.</li><li>O acesso é realizado com os dados da sua hospedagem: <strong>Sobrenome</strong> do responsável pela reserva e <strong>Número</strong> da unidade.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Informações</p><ul class="bs-steps"><li>A rede está disponível na sua unidade e nas áreas comuns do empreendimento.</li><li>Ideal para múltiplos dispositivos, streaming e videoconferências.</li><li>Em caso de dificuldade para acessar a rede, entre em contato com a recepção.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
    },
    {
      id:   'jacuzzi',
      icon: 'bath',
      title: 'Jacuzzi',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> A Jacuzzi estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:   'churrasqueira',
      icon: 'flame',
      title: 'Churrasqueira',
      body:  '<ul class="bs-steps"><li>A churrasqueira está à disposição para que você reúna família e amigos e aproveite bons momentos durante a sua estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como utilizar</p><ul class="bs-steps"><li>Utilize apenas carvão apropriado e acendedores sólidos ou em gel.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>Não utilize álcool líquido ou outros líquidos inflamáveis para acender o fogo.</li><li>Ao finalizar o uso, deixe as brasas apagarem naturalmente.</li><li>Não jogue água diretamente na churrasqueira, evitando danos à estrutura.</li></ul><p class="bs-danger"><strong>Perigo</strong>Mantenha a tampa aberta após o uso até o resfriamento completo. Fechar o equipamento ainda quente apresenta risco de incêndio.</p>'
    }
  ],

  amenities: [
    {
      id:    'piscinas',
      icon:  'waves',
      title: 'Piscina',
      hours: '8h às 22h',
      note:  '<ul class="bs-steps"><li>Com água mantida entre 30° e 36°C, a piscina conta com três profundidades: · Prainha 17cm · Infantil 44cm · Adulto 120cm</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como aproveitar melhor</p><ul class="bs-steps"><li>Utilize exclusivamente roupas de banho.</li><li>Faça uso da ducha antes de entrar.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Proibido</p><ul class="bs-steps"><li>Caixas de som</li><li>Alimentos e bebidas</li><li>Recipientes de vidro</li><li>Abertura ou fechamento das janelas</li><li>Bebidas alcoólicas</li><li>Fumar</li></ul><ul class="bs-steps" style="margin-top:1rem"><li><strong>Supervisão e Cuidado:</strong> Para garantir o bem-estar e a tranquilidade coletiva, é fundamental que as crianças até 12 anos permaneçam sob a supervisão constante de um adulto responsável.</li></ul>'
    },
    {
      id:    'sauna',
      icon:  'wind',
      title: 'Saunas',
      hours: '',
      note:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> As Saunas estarão disponíveis em breve. Durante esta fase inicial, encontram-se temporariamente indisponíveis. Agradecemos sua compreensão.</li></ul>'
    },
    {
      id:    'fitness',
      icon:  'dumbbell',
      title: 'Fitness Center',
      hours: '24 horas',
      note:  '<ul class="bs-steps"><li>A sala conta com aparelhos de musculação de ponta, fornecidos por Technogym.</li><li><strong>Personal Trainer:</strong> Pode ser solicitado com o Time de Anfitriões.</li></ul>'
    },
    {
      id:    'spa',
      icon:  'leaf',
      title: 'Spa',
      hours: '',
      note:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O Spa estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>'
    }
  ],

  gastronomiaClube: [
    {
      id:    'cafe-manha',
      icon:  'sunrise',
      title: 'Café da Manhã',
      hours: '7h às 10h30',
      body:  '<ul class="bs-steps"><li><strong>Local:</strong> Servido no Restaurante do Club House e disponível também na opção em casa.</li></ul><div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:1.25rem"><button class="bs-trigger" data-bs-target="sheet-cardapio-ala-carte" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;border:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;width:100%;cursor:pointer;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Cardápio À la Carte</button><button class="bs-trigger" data-bs-target="sheet-cardapio-em-casa" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:transparent;color:var(--color-text);border-radius:8px;border:1px solid var(--color-border);font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;width:100%;cursor:pointer;-webkit-tap-highlight-color:transparent"><i data-lucide="home"></i> Café em Casa</button></div>'
    },
    {
      id:    'restaurante',
      icon:  'utensils',
      logo:  'assets/images/tempo logo.webp',
      title: 'Restaurante',
      hours: '12h às 22h · último pedido às 21h30',
      body:  '<ul class="bs-steps"><li><strong>Localização:</strong> No andar térreo do Club House.</li><li><strong>Ambientes:</strong> Desfrute do serviço à la carte no conforto do nosso salão interno ou no charme da área externa.</li><li><strong>Restrições Alimentares:</strong> Nosso cardápio foi planejado para diferentes paladares. Nossa equipe está à disposição para detalhar ingredientes e adaptar pratos conforme as suas necessidades.</li></ul>'
    },
    {
      id:    'bar-coffee',
      icon:  'coffee',
      title: 'Bar & Coffee Shop',
      hours: '',
      body:  '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O Bar e o Coffee Shop estarão disponíveis em breve. Durante esta fase inicial, encontram-se temporariamente indisponíveis. Agradecemos sua compreensão.</li></ul>'
    }
  ],

  telefonesUteis: [
    { id: 'emergencias', icon: 'siren', categoria: 'Emergências', itens: [
      { label: 'SAMU',            tel: '192' },
      { label: 'Bombeiros',       tel: '193' },
      { label: 'Polícia Militar', tel: '190' },
    ]},
    { id: 'owntime', icon: 'users', categoria: 'Own Time', itens: [
      { label: 'Time de Anfitriões', tel: '+5554999588947', wpp: true },
    ]},
    { id: 'ownerinc', icon: 'building-2', categoria: 'Ownerinc', itens: [
      { label: 'Central de Férias', tel: '+5551989220209', wpp: true },
    ]},
    { id: 'gastronomia', icon: 'utensils', categoria: 'Gastronomia', tabs: [
      { id: 'almoco', title: 'Almoço', itens: [
        { label: 'Di Pietro',          instagram: 'https://www.instagram.com/dipietrogramado/' },
        { label: 'Vale Quanto Pesa',   instagram: 'https://www.instagram.com/vqpgramado/' },
        { label: 'Serra Grill',        instagram: 'https://www.instagram.com/serra.grillgramado/' },
      ]},
      { id: 'jantar', title: 'Jantar', itens: [
        { label: 'Pastasciutta',  instagram: 'https://www.instagram.com/cantinapastasciutta/' },
        { label: 'Catherine',     instagram: 'https://www.instagram.com/catherinegramado/' },
        { label: 'Casa Muttoni',  instagram: 'https://www.instagram.com/casamuttoni/' },
      ]},
    ]},
    { id: 'mercados', icon: 'shopping-basket', categoria: 'Mercados & Farmácias', tabs: [
      { id: 'mercados-tab', title: 'Mercados', itens: [
        { label: 'Armazém 845', tel: '(54) 3286-2907' },
        { label: 'Berti',       tel: '(54) 3286-4322' },
        { label: 'Stahl',       tel: '(54) 3286-7757' },
      ]},
      { id: 'farmacias-tab', title: 'Farmácias', itens: [
        { label: 'Panvel',      tel: '(51) 3218-9000' },
        { label: 'Droga Raia',  tel: '(54) 99970-2385' },
      ]},
    ]},
  ],

  gastronomy: [
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
      tabs: [
        {
          id:    'em-casa',
          title: 'Café em Casa',
          pdf:   'assets/cardapios/cafe-em-casa.pdf',
          body:  '<ul class="bs-steps"><li>Comece o dia no seu ritmo com uma cesta de café da manhã entregue diretamente na sua casa.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como solicitar</p><ul class="bs-steps"><li>Os pedidos devem ser realizados até 15h para entrega no dia seguinte.</li><li>As entregas são realizadas diariamente, entre 7h e 22h.</li></ul><div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.75rem"><button class="bs-trigger" data-bs-target="sheet-gastro-cafe-da-manha-pdf-em-casa" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border:none;border-radius:8px;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;cursor:pointer;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Ver Cardápio</button><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:transparent;color:var(--color-accent);border:1.5px solid var(--color-accent);border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Solicitar na Recepção</a></div>'
        },
        {
          id:    'a-la-carte',
          title: 'Café à la Carte',
          pdf:   'assets/cardapios/cafe-a-la-carte.pdf',
          body:  '<ul class="bs-steps"><li>Seleção premium de pães, bolos, charcutarias, queijos, frutas, grãos, iogurtes e outras especialidades servidas à mesa.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como solicitar</p><ul class="bs-steps"><li>Para agendar o horário, entre em contato com o Time de Anfitriões.</li></ul><div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.75rem"><button class="bs-trigger" data-bs-target="sheet-gastro-cafe-da-manha-pdf-a-la-carte" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border:none;border-radius:8px;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;cursor:pointer;-webkit-tap-highlight-color:transparent"><i data-lucide="scroll-text"></i> Ver Cardápio</button><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:transparent;color:var(--color-accent);border:1.5px solid var(--color-accent);border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Solicitar na Recepção</a></div>'
        }
      ]
    }
  ],

  concierge: [
    {
      id:    'anfitrioes',
      icon:  'users',
      title: 'Time de Anfitriões',
      body:  '<ul class="bs-steps"><li>Nossa equipe está à disposição durante toda a estadia para tornar sua experiência ainda mais prática e tranquila.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como podemos ajudar</p><ul class="bs-steps"><li>Reservas em restaurantes</li><li>Agendamento de passeios e experiências</li><li>Locação de veículos</li><li>Indicação de serviços locais</li><li>Apoio com outras solicitações durante a estadia</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Solicitações para sua unidade</p><ul class="bs-steps"><li>Para solicitar berços, ajustes na configuração das camas ou itens adicionais de enxoval, entre em contato com a recepção pelo ramal 9 ou pelo botão abaixo.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
    },
    {
      id:    'housekeeping',
      icon:  'sparkles',
      title: 'Housekeeping',
      hours: '',
      body:  '<p class="bs-model-tag">Serviços de Cortesia Incluídos</p><ul class="bs-steps"><li>Para garantir o máximo conforto e a preservação do padrão estético de sua propriedade, cada estada contempla uma estrutura de governança dividida em duas etapas essenciais, totalmente isentas de custo.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Limpeza de Check-in</p><ul class="bs-steps"><li>Preparação meticulosa da residência para a sua chegada. O imóvel é entregue configurado com higienização detalhada (incluindo vidros), abastecimento de kits de consumíveis essenciais para os toaletes e um suporte funcional para a cozinha (esponja, detergente e pano de prato).</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Arrumação de Manutenção</p><ul class="bs-steps"><li>Realizada de forma programada durante o período de ocupação para preservar o bem-estar e a ordem dos ambientes. Contempla a organização das suítes e áreas sociais, reposição dos insumos de check-in demandados, lavagem mecânica das louças e a substituição do enxoval de cama e banho.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Cenários de Exceção (Cortesia)</p><ul class="bs-steps"><li><strong>Troca de Enxoval por Emergência:</strong> Em situações atípicas e fortuitas que exijam a substituição imediata de peças de cama ou banho, o atendimento será realizado prontamente, sem qualquer ônus adicional, entre em contato com o time de anfitriões.</li></ul><div style="display:flex;gap:0.5rem;margin-top:1.25rem"><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="flex:1;display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a><button class="bs-trigger" data-bs-target="sheet-servicos-adicionais" style="flex:1;display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.85rem 1rem;background:transparent;color:var(--color-accent);border:1px solid var(--color-accent);border-radius:8px;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;cursor:pointer;-webkit-tap-highlight-color:transparent"><i data-lucide="plus-circle"></i> Serviços Adicionais</button></div>'
    },
    {
      id:    'babysitter',
      icon:  'heart',
      title: 'Babysitter',
      body:  '<ul class="bs-steps"><li>Precisa de apoio com as crianças? O Time de Anfitriões pode indicar profissionais qualificados para cuidar dos pequenos durante a sua estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Agendamento</p><ul class="bs-steps"><li>Solicite o serviço com, no mínimo, 48 horas de antecedência.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
    },
    {
      id:    'personal',
      icon:  'activity',
      title: 'Personal Trainer',
      body:  '<ul class="bs-steps"><li>O serviço de personal trainer pode ser solicitado com nosso time de anfitriões.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
    },
    {
      id:    'pet-care',
      icon:  'scissors',
      title: 'Pet Care',
      body:  '<p class="bs-model-tag">Em breve</p><ul class="bs-steps"><li>Estamos preparando o serviço de Pet Care para que seu pet também receba cuidados durante a sua estadia.</li><li>Durante o período de Soft Opening, esse serviço ainda não está disponível.</li></ul>'
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
    },
  ],

  clubeOrientacoes: [
    { id: 'acesso-convidados', icon: 'user-plus', title: 'Acesso de Convidados',
      body: '<ul class="bs-steps"><li>Hóspedes podem receber convidados para utilização das áreas comuns do Club House, mediante autorização prévia da recepção.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como autorizar</p><ul class="bs-steps"><li>Informe à recepção o nome dos convidados antes da chegada.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>As condições de acesso, valores, limite diário de visitantes e regras para crianças podem ser consultados na recepção.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>' },
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
      hours: '9h às 21h',
      body:  '<ul class="bs-steps"><li>Um espaço pensado para que as crianças brinquem com liberdade, criatividade e segurança, aproveitando momentos longe das telas.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>As crianças devem permanecer acompanhadas por um adulto responsável durante todo o período de permanência no espaço.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Programação</p><ul class="bs-steps"><li>A programação de atividades para crianças será disponibilizada em uma próxima etapa da operação e em períodos especiais ao longo do ano.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Não é permitido</p><ul class="bs-steps"><li>Consumir bebidas alcoólicas.</li><li>Fumar.</li><li>Utilizar caixas de som.</li></ul>'
    },
    {
      id:   'teens',
      icon: 'users',
      title: 'Teens',
      hours: '9h às 21h',
      body:  '<ul class="bs-steps"><li>Um espaço pensado para que os jovens aproveitem momentos de lazer, convivência e diversão.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">O que você encontra</p><ul class="bs-steps"><li>Jogos de tabuleiro</li><li>Pebolim</li><li>Sinuca</li><li>Videogames</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Acesso</p><ul class="bs-steps"><li>O acesso é livre para os hóspedes, com o cartão da unidade.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Não é permitido</p><ul class="bs-steps"><li>Consumir bebidas alcoólicas.</li><li>Fumar.</li><li>Utilizar caixas de som.</li></ul>'
    },
    {
      id:   'playground',
      icon: 'trees',
      title: 'Playground Externo',
      hours: '9h às 21h',
      body:  '<ul class="bs-steps"><li>Um espaço ao ar livre para que as crianças possam brincar com segurança e aproveitar momentos em família.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>As crianças devem permanecer acompanhadas por um adulto responsável durante todo o período de permanência.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Não é permitido</p><ul class="bs-steps"><li>Consumir bebidas alcoólicas.</li><li>Fumar.</li></ul>'
    },
    {
      id:   'pulseira',
      icon: 'credit-card',
      title: 'Cartão de acesso',
      body:  '<p class="bs-model-tag">Como utilizar</p><ul class="bs-steps"><li>O cartão permite o acesso à sua unidade e às áreas autorizadas do empreendimento. Sempre que houver uma fechadura eletrônica, basta aproximá-lo do leitor para liberar a entrada.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Cuidados</p><ul class="bs-steps"><li>Mantenha o cartão em local seguro e evite dobrá-lo ou aproximá-lo de aparelhos celulares e fechos magnéticos, preservando seu funcionamento durante toda a estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>Os cartões são entregues pelo Time de Anfitriões no momento do check-in e devem ser devolvidos ao final da estadia.</li><li>Em caso de perda ou extravio, haverá cobrança da taxa de reposição.</li></ul>'
    },
    {
      id:   'golf-carts',
      icon: 'car-front',
      title: 'Transporte Interno',
      hours: '7h às 23h',
      body:  '<p class="bs-model-tag">Em breve</p><ul class="bs-steps"><li>O serviço de transporte interno será disponibilizado em uma próxima etapa da operação.</li><li>Durante o período de Soft Opening, ele permanece temporariamente indisponível.</li><li>Agradecemos pela compreensão.</li></ul>'
    },

  ],

  segurancaAcesso: [
    {
      id:    'monitoramento',
      icon:  'shield',
      title: 'Monitoramento 24 Horas',
      hidden: true,
      body:  '<ul class="bs-steps"><li><strong>Atendimento:</strong> Portaria e recepção à sua disposição 24 horas por dia.</li><li><strong>Monitoramento:</strong> As áreas comuns são protegidas por um sistema de CFTV equipado com 132 câmeras em pontos estratégicos.</li><li><strong>Vigilância:</strong> Equipe de segurança especializada realizando o controle contínuo do ambiente.</li></ul>'
    },
    {
      id:    'controle-acesso',
      icon:  'credit-card',
      title: 'Cartão de Acesso',
      body:  '<p class="bs-model-tag">Como utilizar</p><ul class="bs-steps"><li>O cartão permite o acesso à sua unidade e às áreas autorizadas do empreendimento. Sempre que houver uma fechadura eletrônica, basta aproximá-lo do leitor para liberar a entrada.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Cuidados</p><ul class="bs-steps"><li>Mantenha o cartão em local seguro e evite dobrá-lo ou aproximá-lo de aparelhos celulares e fechos magnéticos, preservando seu funcionamento durante toda a estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>Os cartões são entregues pelo Time de Anfitriões no momento do check-in e devem ser devolvidos ao final da estadia.</li><li>Em caso de perda ou extravio, haverá cobrança da taxa de reposição.</li></ul>'
    },
    {
      id:    'seguranca-perimetral',
      icon:  'shield-check',
      title: 'Sistema de Segurança Perimetral',
      body:  '<ul class="bs-steps"><li><strong>Proteção Completa:</strong> Sistema de segurança perimetral cobrindo todos os acessos, áreas verdes e limites da propriedade.</li><li><strong>Controle Integrado:</strong> A guarita principal opera em total sinergia com o nosso sistema de monitoramento contínuo.</li></ul>'
    },
  ]

}

