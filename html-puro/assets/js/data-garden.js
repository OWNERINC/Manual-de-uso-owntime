const TIPOLOGIA = {

  hero: {
    label:       'Garden · Apartamento Garden · Diretório Digital',
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
        { id: 'ventilacao',    icon: 'wind',        title: 'Ventilação / Exaustão', body: '' },
        { id: 'ar-central',    icon: 'wind',        title: 'AR Central',          body: '' },
        { id: 'conectividade', icon: 'wifi',        title: 'Conectividade',       body: '' },
        { id: 'telefone',      icon: 'phone',       title: 'Telefone',            body: '' }
      ]
    },
    {
      id: 'cozinha',
      label: 'Cozinha',
      items: [
        { id: 'fogao-inducao', icon: 'flame', title: 'Fogão Indução', body: '' }
      ]
    },
    {
      id: 'eletros',
      label: 'Eletros',
      items: [
        { id: 'adega',          icon: 'wine',            title: 'Adega Climatizada', body: '' },
        { id: 'geladeira',      icon: 'refrigerator',    title: 'Geladeira',         body: '' },
        { id: 'microondas',     icon: 'microwave',       title: 'Micro-ondas',       body: '' },
        { id: 'forno-eletrico', icon: 'square',          title: 'Forno Elétrico',    body: '' },
        { id: 'cafeteira',      icon: 'coffee',          title: 'Máquina de Café',   body: '' },
        { id: 'lava-loucas',    icon: 'utensils',        title: 'Lava-louças',       body: '' },
        { id: 'lava-seca',      icon: 'washer', title: 'Lava e Seca',       body: '' },
        { id: 'fogao',          icon: 'flame',           title: 'Fogão + Depurador', body: '' },
        { id: 'filtro-agua',    icon: 'filter',          title: 'Filtro de Água',    body: '' }
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
