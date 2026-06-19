const TIPOLOGIA = {

  hero: {
    label:       'Garden · Apartamento Garden · Guia Digital',
    headline:    'Garden.',
    subheadline: 'Seu apartamento garden em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/apto garden.jpeg'
  },

  stats: [
    { value: '≈ 60 m²', label: 'Área Total' },
    { value: '1',        label: 'Quarto' },
    { value: '1',        label: 'Vaga' }
  ],

  description: 'Apartamento garden de alto padrão com acesso direto ao jardim e hidro jacuzzi exclusivo.',

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso',        icon: 'key',         title: 'Acesso às Unidades',  body: '' },
        { id: 'iluminacao',    icon: 'lightbulb',   title: 'Iluminação',          body: '' },
        { id: 'tv',            icon: 'tv',          title: 'TV',                  body: '' },
        { id: 'ventilacao',    icon: 'fan',         title: 'Ventilação / Exaustão', body: '' },
        { id: 'ar-central',    icon: 'thermometer', title: 'AR Central',          body: '' },
        { id: 'piso-aquecido', icon: 'flame',       title: 'Piso Aquecido',       body: '' },
        { id: 'telefone',      icon: 'phone',       title: 'Telefone',            body: '' }
      ]
    },
    {
      id: 'cozinha',
      label: 'Cozinha',
      items: [
        { id: 'fogao-inducao', icon: 'cooking-pot', title: 'Fogão Indução', body: '' }
      ]
    },
    {
      id: 'eletros',
      label: 'Eletros',
      items: [
        { id: 'adega',          icon: 'wine',            title: 'Adega Climatizada', body: '' },
        { id: 'geladeira',      icon: 'refrigerator',    title: 'Geladeira',         body: '<span class="bs-model-tag">Duplex Inverse 435L · Tramontina</span><ul class="bs-steps"><li><strong>Ligar:</strong> Pressione o interruptor geral (botão com luz verde).</li><li><strong>Temperatura:</strong> Ajuste o frio pelas setas no painel de controle.</li><li><strong>Dica:</strong> Evite deixar a porta aberta — acelera a perda de frio e aumenta o consumo de energia.</li></ul>' },
        { id: 'microondas',     icon: 'microwave',       title: 'Micro-ondas',       body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte <em>Início</em> para ligar 30s em potência máxima. Repita para somar mais tempo.</li><li><strong>Descongelar:</strong> Gire o seletor para "Descongelar", ajuste o tempo e pressione <em>Início</em>.</li><li><strong>Atenção:</strong> Nunca insira metais, papel alumínio ou talheres no interior.</li></ul>' },
        { id: 'forno-eletrico', icon: 'microwave',        title: 'Forno Elétrico',    body: '<span class="bs-model-tag">Epic T Smart 60 · Tramontina</span><ul class="bs-steps"><li><strong>Painel Touch:</strong> Use o visor para ligar e acessar todas as funções.</li><li><strong>Programação:</strong> No ícone "Definições", defina horário para o forno ligar sozinho.</li><li><strong>Air Fry:</strong> Função embutida para preparos saudáveis sem uso de óleo.</li></ul>' },
        { id: 'cafeteira',      icon: 'coffee',          title: 'Máquina de Café',   body: '' },
        { id: 'lava-loucas',    icon: 'utensils',        title: 'Lava-louças',       body: '' },
        { id: 'depurador',      icon: 'air-vent',        title: 'Depurador de Ar',   body: '<span class="bs-model-tag">Coifa Square Isla 40 · Tramontina</span><ul class="bs-steps"><li><strong>Velocidade:</strong> Pressione os botões de 1 a 4 para escolher a força do exaustor. O botão da lâmpada aciona a luz de forma independente.</li><li><strong>Timer:</strong> Segure o botão da velocidade ativa por 3 segundos — a luz piscará e a coifa desligará automaticamente após 5 min.</li><li><strong>Dica:</strong> Ligue 5 minutos antes de cozinhar para melhor sucção do ar.</li></ul>' }
      ]
    },
    {
      id: 'quartos',
      label: 'Quartos',
      items: [
        { id: 'hidro-jacuzzi', icon: 'droplets', title: 'Banheira Hidro Jacuzzi', body: '' }
      ]
    }
  ]

}
