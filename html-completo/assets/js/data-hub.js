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

  wifi: {
    ssid:     '[nome da rede]',
    password: '[senha]'
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
    summary: 'Este é o Guia de Uso digital do empreendimento, tudo o que você precisa na palma da mão.',
    details: [
      'Aqui, casa e natureza se encontram com a estrutura de um clube pensado para oferecer conforto, liberdade e tranquilidade em cada detalhe.',
      'O Own Time Home Club Gramado é uma nova geração de hospitalidade residencial que une casas compartilhadas de alto padrão com serviços de hotelaria, uma comunidade cuidadosamente cultivada e experiências que conectam profundamente com o destino.',
      'Cada chegada é um reencontro. Você não visita e sim retorna, porque encontra familiaridade. Você pertence.',
      'Este guia reúne as principais informações para que você aproveite cada momento com leveza e praticidade. Tudo o que você precisa saber está aqui, organizado de forma simples e direta:<ul class="bs-steps"><li>A operação da sua unidade</li><li>Os serviços do clube</li><li>Gastronomia, spa e demais conveniências</li></ul>',
      'Sempre que precisar, nossa equipe estará à disposição pelo ramal 9 ou WhatsApp [xxxxxxxx].',
      'Estamos aqui para garantir que o seu tempo seja, de fato, o melhor tempo.'
    ],
    ctaWhatsapp: 'https://wa.me/5554999999999?text=Olá%2C%20preciso%20de%20ajuda.'
  },

  horarios: [
    {
      section: 'Acesso',
      items: [
        { title: 'Check-in',  hours: 'a partir das 16h' },
        { title: 'Check-out', hours: 'até as 10h' },
      ]
    },
    {
      section: 'Gastronomia',
      items: [
        { title: 'Café da Manhã', hours: '7h às 11h' },
        { title: 'Coffee Shop',   hours: 'Indisponível no soft opening' },
        { title: 'Restaurante',   hours: 'Indisponível no soft opening' },
        { title: 'Bar',           hours: 'Indisponível no soft opening' },
      ]
    },
    {
      section: 'Club House & Bem-Estar',
      items: [
        { title: 'Fitness Center', hours: '24 horas' },
        { title: 'Piscinas',       hours: '8h às 22h' },
        { title: 'Saunas',         hours: '8h às 22h' },
        { title: 'Spa',            hours: '10h às 19h · Seg a Sáb' },
      ]
    },
    {
      section: 'Serviços',
      items: [
        { title: 'Kids & Teens',       hours: '9h às 21h' },
        { title: 'Playground',         hours: '9h às 21h' },
        { title: 'Transporte Interno', hours: '7h às 23h' },
      ]
    }
  ],

  clube: {
    id:       'club-house',
    href:     './clube.html',
    name:     'Club House',
    subtitle: 'Área compartilhada',
    amenities:'Piscina · Sauna · Spa · Academia',
    image:    'assets/images/clubhouse.png'
  },

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
