const TIPOLOGIA = {

  hero: {
    label:       'Fall House · Casa 4 Suítes · Guia Digital',
    headline:    'Fall\nHouse.',
    subheadline: 'Sua casa de 4 suítes em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/casa 4 suites.png'
  },

  stats: [
    { value: '448 m²', label: 'Área Total' },
    { value: '4',      label: 'Suítes' },
    { value: '10',     label: 'Hóspedes' },
    { value: '2',      label: 'Vagas' }
  ],

  description: 'Casa de alto padrão com 4 suítes, área gourmet completa e espaços projetados para convívio e conforto em meio à Serra Gaúcha.',

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso',        icon: 'key',         title: 'Acesso às Unidades',  body: '' },
        { id: 'iluminacao',    icon: 'lightbulb',   title: 'Iluminação',          body: '' },
        { id: 'tv',            icon: 'tv',          title: 'TV',                  body: '' },
        { id: 'ventilacao',    icon: 'wind',        title: 'Ventilação / Exaustão', body: '' },
        { id: 'piso-aquecido', icon: 'flame',       title: 'Piso Aquecido',       body: '' },
        { id: 'telefone',      icon: 'phone',       title: 'Telefone',            body: '' },
        { id: 'fogo-chao',     icon: 'flame-kindling', title: 'Fogo de Chão',     body: '' },
        { id: 'inverter',      icon: 'thermometer', title: 'Inverter',            body: '' }
      ]
    },
    {
      id: 'cozinha',
      label: 'Cozinha',
      items: [
        { id: 'forno-pizza',    icon: 'pizza',    title: 'Forno de Pizza',   body: '' },
        { id: 'churrasqueira',  icon: 'beef',     title: 'Churrasqueira',    body: '' }
      ]
    },
    {
      id: 'segundo-andar',
      label: 'Segundo Andar',
      items: [
        { id: 'sala-banho',      icon: 'droplets',    title: 'Sala de Banho · SPA Jacuzzi', body: '' },
        { id: 'climatizacao-2a', icon: 'thermometer', title: 'Climatização',               body: '' }
      ]
    },
    {
      id: 'eletros',
      label: 'Eletros',
      items: [
        { id: 'adega',          icon: 'wine',        title: 'Adega Climatizada',   body: '' },
        { id: 'geladeira',      icon: 'refrigerator', title: 'Geladeira',          body: '<span class="bs-model-tag">Frost Free 500L · Brastemp</span><ul class="bs-steps"><li><strong>Temperatura:</strong> Ajuste pelo painel externo sem precisar abrir a porta.</li><li><strong>Sons Normais:</strong> Estalos ou sons parecidos com ar esvaziando são completamente normais — é a expansão do gás de refrigeração.</li></ul>' },
        { id: 'microondas',     icon: 'microwave',   title: 'Micro-ondas',         body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte <em>Início</em> para 30s em potência máxima. Repita para adicionar mais tempo.</li><li><strong>Auto Menu:</strong> Gire o botão principal para selecionar programas prontos (pipoca, carnes etc.) e pressione <em>Início</em>.</li><li><strong>Atenção:</strong> É proibido colocar qualquer material metálico no interior.</li></ul>' },
        { id: 'forno-eletrico', icon: 'microwave',    title: 'Forno Elétrico',      body: '<span class="bs-model-tag">Glass Cook 73L · Tramontina</span><ul class="bs-steps"><li><strong>Para Ligar:</strong> Gire os três botões simultaneamente: <em>Função</em>, <em>Temperatura</em> e <em>Timer</em>.</li><li><strong>Atenção:</strong> Se o Timer estiver no zero, o forno não liga.</li><li><strong>Luz Interna:</strong> Permanece acesa durante todo o período programado no Timer.</li></ul>' },
        { id: 'cafeteira',      icon: 'coffee',      title: 'Máquina de Café',     body: '' },
        { id: 'lava-loucas',    icon: 'sparkles',    title: 'Lava-louças',         body: '' },
        { id: 'lava-seca',      icon: 'washing-machine', title: 'Lava e Seca',     body: '' },
        { id: 'fogao',          icon: 'cooking-pot', title: 'Fogão + Depurador',   body: '' },
        { id: 'filtro-agua',    icon: 'filter',      title: 'Filtro de Água',      body: '<span class="bs-model-tag">Purificador Facilite · Consul</span><ul class="bs-steps"><li><strong>Gelada ou Natural:</strong> Pressione o botão correspondente no painel.</li><li><strong>Copo:</strong> Segure o botão pressionado e solte quando terminar.</li><li><strong>Jarra:</strong> Aperte até ouvir o "clique" — a água sairá sozinha. Aperte novamente para parar o fluxo.</li><li><strong>Mista:</strong> Pressione "Gelada" e "Natural" ao mesmo tempo.</li></ul>' }
      ]
    }
  ]

}
