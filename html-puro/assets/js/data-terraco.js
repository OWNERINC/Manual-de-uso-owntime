const TIPOLOGIA = {

  hero: {
    label:       'Terraço · Apartamento Cobertura · Diretório Digital',
    headline:    'Terraço.',
    subheadline: 'Seu apartamento cobertura em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/apto cobertura.png'
  },

  stats: [
    { value: '≈ 60 m²', label: 'Área Total' },
    { value: '1',        label: 'Quarto' },
    { value: '1',        label: 'Vaga' }
  ],

  description: 'Apartamento cobertura de alto padrão com mini spa terrace jacuzzi exclusivo no terraço privativo.',

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
      id: 'mini-spa',
      label: 'Mini Spa Terrace',
      items: [
        { id: 'spa-jacuzzi', icon: 'sparkles', title: 'Mini Spa Terrace Jacuzzi', body: '' }
      ]
    }
  ]

}
