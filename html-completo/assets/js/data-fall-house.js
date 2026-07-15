const TIPOLOGIA = {

  hero: {
    label:       'Own Time Home Club · Guia Digital',
    headline:    'Fall\nHouse',
    subheadline: 'Sua casa de 4 suítes em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/casa-4-suites.webp'
  },

  stats: [
    { value: '448 m²', label: 'Área Total' },
    { value: '4',      label: 'Suítes' },
    { value: '10',     label: 'Hóspedes' },
    { value: '2',      label: 'Vagas' }
  ],

  description: 'Casa de alto padrão com área gourmet completa e espaços projetados para convívio e conforto na Serra Gaúcha.',

  housekeepingDay: 'Segunda-feira',

  facilityExcludes: ['jacuzzi'],

  facilityOverrides: {
    climatizacao: {
      tabs: [
        {
          id: 'ac',
          title: 'Ar Condicionado',
          body: '<ul class="bs-steps"><li><strong>Sistema:</strong> Sua unidade conta com ar condicionado split individual por ambiente, com controle independente em cada cômodo.</li><li><strong>Como usar:</strong> Pressione o botão Power no controle remoto. Use as teclas ▲/▼ para ajustar a temperatura desejada.</li><li><strong>Temperatura de Conforto:</strong> Recomendamos entre 20°C e 23°C para um ambiente agradável.</li></ul>'
        },
        {
          id: 'piso',
          title: 'Piso Aquecido',
          body: '<ul class="bs-steps"><li><strong>Tecnologia:</strong> O ambiente conta com piso radiante, aquecido por água a gás natural. A temperatura é predeterminada de forma automática e inteligente.</li><li><strong>Consumo (Serviço sob Demanda):</strong> O uso do piso aquecido opera na modalidade serviço sob demanda, com medição realizada proporcionalmente ao período da sua estadia.</li><li><strong>Aviso de Soft Open:</strong> Durante esta fase inicial, o sistema de piso aquecido poderá estar temporariamente inoperante.</li></ul>'
        }
      ]
    }
  },

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso',     icon: 'key',            title: 'Acesso às Unidades',   body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li></ul>' },
        { id: 'iluminacao', icon: 'lightbulb',      title: 'Iluminação',            body: '<ul class="bs-steps"><li>O projeto de iluminação foi pensado para proporcionar conforto, eficiência e baixo consumo de energia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Uso consciente</p><ul class="bs-steps"><li>Sempre que possível, apague as luzes dos ambientes que não estiver utilizando.</li><li>Assim, você contribui para o uso responsável de energia durante a sua estadia.</li></ul>' },
        { id: 'tv',         icon: 'tv',             title: 'TV',                    body: '<ul class="bs-steps"><li>Acesse seus serviços de streaming favoritos diretamente pela TV durante a sua estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Privacidade</p><ul class="bs-steps"><li>Você não precisa se preocupar em sair das suas contas antes do check-out. O sistema realiza a desconexão automática de todos os aplicativos ao final da estadia.</li></ul>' },
        { id: 'ventilacao', icon: 'wind',           title: 'Ventilação / Exaustão', body: '<ul class="bs-steps"><li><strong>Operação 100% Automática:</strong> O acionamento e desligamento são inteligentes e autônomos. Nenhuma ação ou ajuste manual é necessário da sua parte.</li><li><strong>Renovação Contínua:</strong> O sistema de ventilação assegura um ambiente fresco e agradável durante toda sua estadia.</li></ul>' },
        { id: 'telefone',   icon: 'phone',          title: 'Telefone',              body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de telefonia interno está indisponível para outras ligações além da recepção.</li><li>Para ligar para a recepção, disque <strong>"9"</strong>.</li></ul>' },
        { id: 'fogo-chao',  icon: 'flame-kindling', title: 'Fogo de Chão',          body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O Fogo de Chão estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>' },
        { id: 'carregadores', icon: 'plug', title: 'Carregador Elétrico', body: '<ul class="bs-steps"><li>Sua unidade conta com um carregador exclusivo para veículos elétricos.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como utilizar</p><ul class="bs-steps"><li>Estacione na vaga destinada à recarga e conecte o cabo ao veículo para iniciar o carregamento.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Cobrança</p><ul class="bs-steps"><li>A liberação da recarga é realizada por meio da tag de acesso do empreendimento. O consumo será lançado juntamente com os demais serviços utilizados durante a estadia.</li></ul>' }
      ]
    },
  ],

  cozinha: [
    { id: 'sala-banho', icon: 'droplets', title: 'Sala de Banho · SPA Jacuzzi', body: '<ul class="bs-steps"><li>A nossa equipe está à disposição para encher a sua sala de banho spa jacuzzi (todos os dias das 8h às 20h) e passar in loco as devidas orientações de uso. Faça contato agora com o time de anfitriões.</li></ul><div class="bs-notice"><strong>Nota</strong><ul><li>O tempo de espera para encher é de 2h.</li><li>Não é permitido o uso de sais de banho e nenhum tipo de óleo ou bolhas.</li></ul></div><p class="bs-danger"><strong>Atenção</strong>Para a sua segurança e a preservação do equipamento, é expressamente proibido o consumo de bebidas, comidas ou o uso de aparelhos eletrônicos dentro da jacuzzi.</p>' },
    { id: 'forno-pizza',    icon: 'pizza',           title: 'Forno de Pizza',      body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O Forno de Pizza estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>' },
    { id: 'adega',          icon: 'wine',            title: 'Adega Climatizada',   body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas. O equipamento opera de forma silenciosa e com controle térmico estável para proteger a integridade e as notas de cada vinho.</li><li><strong>Experiência e Curadoria:</strong> O espaço ideal para acomodar a sua coleção pessoal ou as seleções especiais.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado nas prateleiras e certifique-se de sempre fechar a porta até o final para manter a vedação e a eficiência do sistema de refrigeração.</li></ul>' },
    { id: 'geladeira',      icon: 'refrigerator',    title: 'Geladeira',           body: '<span class="bs-model-tag">Frost Free 500L · Brastemp</span><ul class="bs-steps"><li><strong>Temperatura:</strong> Ajuste pelo painel externo sem precisar abrir a porta.</li><li><strong>Sons Normais:</strong> Estalos ou sons parecidos com ar esvaziando são completamente normais — é a expansão do gás de refrigeração.</li></ul>' },
    { id: 'microondas',     icon: 'microwave',       title: 'Micro-ondas',         body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte <em>Início</em> para 30s em potência máxima. Repita para adicionar mais tempo.</li><li><strong>Auto Menu:</strong> Gire o botão principal para selecionar programas prontos (pipoca, carnes etc.) e pressione <em>Início</em>.</li><li><strong>Atenção:</strong> É proibido colocar qualquer material metálico no interior.</li></ul>' },
    { id: 'forno-eletrico', icon: 'microwave',       title: 'Forno Elétrico',      body: '<span class="bs-model-tag">Glass Cook 73L · Tramontina</span><ul class="bs-steps"><li><strong>Para Ligar:</strong> Gire os três botões simultaneamente: <em>Função</em>, <em>Temperatura</em> e <em>Timer</em>.</li><li><strong>Atenção:</strong> Se o Timer estiver no zero, o forno não liga.</li><li><strong>Luz Interna:</strong> Permanece acesa durante todo o período programado no Timer.</li></ul>' },
    { id: 'cafeteira',      icon: 'coffee',          title: 'Máquina de Café',     body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água no reservatório traseiro. Levante a alavanca, insira a cápsula de sua preferência e feche-a completamente.</li><li><strong>Seu Café:</strong> Pressione qualquer botão para ligar a máquina. Quando as luzes pararem de piscar, selecione a medida desejada (Espresso ou Lungo) para iniciar a extração.</li><li><strong>Manutenção e Energia:</strong> O equipamento já está devidamente conectado à rede 220V da casa. A cápsula usada cai automaticamente no compartimento interno assim que a alavanca for levantada para o próximo uso.</li></ul>' },
    { id: 'lava-loucas',    icon: 'sparkles',        title: 'Lava-louças',         body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos da louça antes de acomodá-la nos cestos, garantindo que as hélices girem livremente.</li><li><strong>Preparo:</strong> Insira o detergente específico para lava-louças e o líquido secante nos compartimentos indicados na parte interna da porta.</li><li><strong>Acionamento:</strong> Selecione o ciclo de lavagem desejado no painel de controle e feche a porta com firmeza para que a máquina inicie o processo automaticamente.</li></ul>' },
    { id: 'lava-seca',      icon: 'washing-machine', title: 'Lava e Seca',         body: '<ul class="bs-steps"><li><strong>Capacidade Ideal:</strong> Suporta até 11kg para ciclos exclusivos de lavagem e 7kg se for utilizar a função contínua de secagem.</li><li><strong>Preparo:</strong> Insira as roupas e adicione os produtos de limpeza (sabão e amaciante) nos compartimentos indicados na gaveta frontal.</li><li><strong>Ciclo Simples:</strong> Gire o seletor central para escolher o programa que melhor atende às suas peças e pressione o botão "Início/Pausa" para começar.</li></ul>' },
    { id: 'fogao',          icon: 'cooking-pot',     title: 'Fogão + Depurador',   body: '<ul class="bs-steps"><li><strong>Uso do Cooktop:</strong> Pressione e gire o manípulo correspondente à boca que deseja utilizar para o acendimento automático. Ajuste a intensidade da chama conforme a necessidade do preparo.</li><li><strong>Controle da Coifa:</strong> Acesse o painel para acionar a iluminação de apoio e ajustar a velocidade de exaustão. O sistema Silent mantém o ambiente purificado com o mínimo de ruído.</li><li><strong>Dica de Conforto:</strong> Ligue a coifa instantes antes de começar a cozinhar e mantenha-a funcionando por mais alguns minutos após o término para garantir a renovação completa do ar.</li></ul>' },
    { id: 'filtro-agua',    icon: 'filter',          title: 'Filtro de Água',      body: '<span class="bs-model-tag">Purificador Facilite · Consul</span><ul class="bs-steps"><li><strong>Gelada ou Natural:</strong> Pressione o botão correspondente no painel.</li><li><strong>Copo:</strong> Segure o botão pressionado e solte quando terminar.</li><li><strong>Jarra:</strong> Aperte até ouvir o "clique" — a água sairá sozinha. Aperte novamente para parar o fluxo.</li><li><strong>Mista:</strong> Pressione "Gelada" e "Natural" ao mesmo tempo.</li></ul>' }
  ],

  servicosAdicionais: [
    { title: 'Arrumação Complementar',        price: 'R$ 300,00', desc: 'Turno extra de organização e arrumação interna (escopo idêntico à manutenção). Agendamento até as 15h do dia anterior.' },
    { title: 'Lavagem de Louça Extra',        price: 'R$ 95,00',  desc: 'Serviço gourmet para higienização e organização de grandes volumes de louça (solicitado quando exceder 50% dos utensílios da unidade).' },
    { title: 'Renovação Integral de Enxoval', price: 'R$ 240,00', desc: 'Substituição completa de roupas de cama e banho das 4 suítes ocupadas, independente do cronograma regular.' },
  ],

  orientacoesOverrides: {
    pet: {
      body: '<ul class="bs-steps"><li>Seu pet é parte da família e muito bem-vindo! Para garantir o conforto de todos, conheça as regras e taxas da nossa política pet.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Taxas e Facilidades</p><ul class="bs-steps"><li><strong>Valor da Diária:</strong> A hospedagem do seu pet tem o custo de R$ 85,00 por dia (por animal), com o pagamento realizado diretamente no seu check-out.</li><li><strong>Kit Pet Incluso:</strong> Este valor contempla o empréstimo de caminha e cobertor, além de 1 tapete higiênico e 2 saquinhos de limpeza.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Preservação e Enxoval</p><ul class="bs-steps"><li><strong>Uso Exclusivo:</strong> Solicitamos que utilize exclusivamente os itens fornecidos no Kit Pet para o uso do seu animal.</li><li><strong>Enxoval da Casa:</strong> É expressamente proibido utilizar as toalhas de banho, panos de prato ou toalhas de piso da casa para limpar ou secar o pet e o chão.</li><li><strong>Em Caso de Acidentes:</strong> Se ocorrer qualquer imprevisto com sujeira ou resíduos na unidade, entre em contato imediatamente com a recepção para receber o auxílio adequado.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Regras de Convivência</p><ul class="bs-steps"><li><strong>Áreas Comuns:</strong> Mantenha seu pet sempre com guia ou coleira ao circular pelas áreas de convivência. O proprietário é integralmente responsável pela higiene e coleta imediata dos resíduos do animal.</li><li><strong>Club House:</strong> O acesso de animais de estimação às áreas compartilhadas do Club House não é permitido.</li><li><strong>Restaurante:</strong> Por normas rígidas da Vigilância Sanitária, é estritamente proibida a entrada e permanência de pets nas dependências do restaurante.</li><li><strong>Harmonia da Estadia:</strong> Certifique-se de manter o pet sob controle para garantir o conforto, o silêncio e o bem-estar de todos os hóspedes e proprietários.</li></ul><div class="bs-notice"><strong>Serviços e Praticidade</strong><ul><li><strong>Parceiros Externos:</strong> Caso precise de serviços especiais como banho, hotelzinho ou pet walker, nosso time de anfitriões está à disposição para fornecer contatos de parceiros locais de confiança desde já.</li></ul></div><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> Falar com a Recepção</a>'
    }
  }

}

