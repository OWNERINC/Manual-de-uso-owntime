const TIPOLOGIA = {

  hero: {
    label:       'Winter House · Casa 3 Suítes · Diretório Digital',
    headline:    'Winter\nHouse.',
    subheadline: 'Sua casa de 3 suítes em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/casa 3 suites.png'
  },

  stats: [
    { value: '325 m²', label: 'Área Total' },
    { value: '3',      label: 'Suítes' },
    { value: '8',      label: 'Hóspedes' },
    { value: '2',      label: 'Vagas' }
  ],

  description: 'Casa de alto padrão com 3 suítes, área gourmet completa e espaços projetados para convívio em meio à Serra Gaúcha.',

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
        { id: 'telefone',      icon: 'phone',       title: 'Telefone',            body: '' }
      ]
    },
    {
      id: 'cozinha',
      label: 'Cozinha',
      items: [
        { id: 'churrasqueira',  icon: 'beef',    title: 'Churrasqueira',    body: '' }
      ]
    },
    {
      id: 'segundo-andar',
      label: 'Segundo Andar',
      items: [
        { id: 'climatizacao-2a',     icon: 'thermometer', title: 'Climatização',               body: '' }
      ]
    },
    {
      id: 'eletros',
      label: 'Eletros',
      items: [
        { id: 'adega',          icon: 'wine',        title: 'Adega Climatizada',   body: '' },
        { id: 'geladeira',      icon: 'refrigerator', title: 'Geladeira',          body: '' },
        { id: 'microondas',     icon: 'microwave',   title: 'Micro-ondas',         body: '' },
        { id: 'forno-eletrico', icon: 'square',      title: 'Forno Elétrico',      body: '' },
        { id: 'cafeteira',      icon: 'coffee',      title: 'Máquina de Café',     body: '' },
        { id: 'lava-loucas',    icon: 'utensils',    title: 'Lava-louças',         body: '' },
        { id: 'lava-seca',      icon: 'washer',      title: 'Lava e Seca',         body: '' },
        { id: 'fogao',          icon: 'cooking-pot', title: 'Fogão + Depurador',   body: '' },
        { id: 'filtro-agua',    icon: 'filter',      title: 'Filtro de Água',      body: '' }
      ]
    }
  ]

}
