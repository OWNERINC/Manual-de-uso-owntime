/**
 * data-hub.js — Own Time Home Club · Hub Central
 * Conteúdo exclusivo da página de entrada (index.html).
 * Para atualizar imagens dos cards, substitua o campo `image` de cada tipologia.
 */

const HUB = {

  softOpening: {
    active: true,
    label:  'Soft Opening'
  },

  hero: {
    label:       'Own Time Home Club',
    headline:    'Onde você está?',
    subheadline: 'Bem-vindo ao Own Time. Aqui, casa e natureza se encontram com a estrutura de um clube pensado para oferecer conforto, liberdade e tranquilidade em cada detalhe. O Own Time Home Club Gramado é uma nova geração de hospitalidade residencial que une casas compartilhadas de alto padrão com serviços de hotelaria, uma comunidade cuidadosamente cultivada e experiências que conectam profundamente com o destino. Cada chegada é um reencontro. Você não visita e sim retorna, porque encontra familiaridade. Você pertence. Este guia reúne as principais informações para que você aproveite cada momento com leveza e praticidade.',
    location:    'Gramado · Serra Gaúcha · Brasil'
  },

  intro: {
    preHeading: 'Bem-vindo ao',
    heading:    'Own Time.',
    summary: 'Descubra o equilíbrio perfeito entre o conforto de casa, a beleza da natureza e a exclusividade de um clube com serviços de hotelaria de alto padrão.',
    details: [
      'Aqui, casa e natureza se encontram com a estrutura de um clube pensado para oferecer conforto, liberdade e tranquilidade em cada detalhe.',
      'O Own Time Home Club Gramado é uma nova geração de hospitalidade residencial que une casas compartilhadas de alto padrão com serviços de hotelaria, uma comunidade cuidadosamente cultivada e experiências que conectam profundamente com o destino.',
      'Cada chegada é um reencontro. Você não visita e sim retorna, porque encontra familiaridade. Você pertence.',
      'Este guia reúne as principais informações para que você aproveite cada momento com leveza e praticidade. Tudo o que você precisa saber está aqui, organizado de forma simples e direta:<ul class="bs-steps"><li>A operação da sua unidade</li><li>Os serviços do clube</li><li>Gastronomia, spa e demais conveniências</li></ul>',
      'Sempre que precisar, nossa equipe estará à disposição pelo ramal [xx] ou WhatsApp [xxxxxxxx].',
      'Estamos aqui para garantir que o seu tempo seja, de fato, o melhor tempo.'
    ],
    ctaWhatsapp: 'https://wa.me/5554999999999?text=Olá%2C%20preciso%20de%20ajuda.'
  },

  horarios: [
    {
      section: 'Gastronomia',
      items: [
        { title: 'Bar',           hours: '17h00 às 23h00' },
        { title: 'Café da Manhã', hours: '07h00 às 11h00' },
        { title: 'Coffee Shop',   hours: '08h00 às 20h00' },
        { title: 'Restaurante',   hours: '12h00 às 22h00 · Último pedido 21h30' },
      ]
    },
    {
      section: 'Club House',
      items: [
        { title: 'Academia',     hours: '24 horas' },
        { title: 'Kids & Teens', hours: '09h00 às 21h00' },
        { title: 'Piscinas',     hours: '08h00 às 22h00' },
        { title: 'Saunas',       hours: '16h00 às 21h00' },
        { title: 'Spa',          hours: '10h00 às 20h00 · Último atendimento: 19h00' },
      ]
    }
  ],

  tipologias: [
    {
      id:        'fall-house',
      href:      './fall-house.html',
      name:      'Fall House',
      subtitle:  'Casa 4 Suítes',
      area:      '448 m²',
      capacidade:'Até 10 hóspedes',
      vagas:     '2 vagas',
      image:     'assets/images/casa-4-suites.webp'
    },
    {
      id:        'winter-house',
      href:      './winter-house.html',
      name:      'Winter House',
      subtitle:  'Casa 3 Suítes',
      area:      '325 m²',
      capacidade:'Até 8 hóspedes',
      vagas:     '2 vagas',
      image:     'assets/images/casa-3-suites.webp'
    },
    {
      id:        'garden',
      href:      './garden.html',
      name:      'Garden',
      subtitle:  'Apartamento',
      area:      '≈ 60 m²',
      capacidade:'Até 4 hóspedes',
      vagas:     '1 vaga',
      image:     'assets/images/apto-garden.webp'
    },
    {
      id:        'terraco',
      href:      './terraco.html',
      name:      'Cobertura',
      subtitle:  'Apartamento',
      area:      '≈ 60 m²',
      capacidade:'Até 4 hóspedes',
      vagas:     '1 vaga',
      image:     'assets/images/apto-cobertura.webp'
    }
  ]

};
