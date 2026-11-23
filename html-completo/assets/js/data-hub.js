/**
 * data-hub.js — Own Time Home Club · Hub Central
 * Conteúdo exclusivo da página de entrada (index.html).
 * Para atualizar imagens dos cards, substitua o campo `image` de cada tipologia.
 */

const HUB = {

  wifi: {
    ssid: 'OwnHospedes',
    instructions: '<div class="wifi-guide"><p class="wifi-intro">Na tela de login, selecione <strong class="wifi-option">Sou hóspede</strong> e preencha os dados conforme sua acomodação.</p><div class="wifi-access"><h4 class="wifi-access__title"><i data-lucide="house" aria-hidden="true"></i>Casas</h4><p class="wifi-access__rule"><strong>Login:</strong> número 0 + número da casa.</p><p class="wifi-example"><span class="wifi-example__label">Exemplo · Casa 13</span><strong class="wifi-example__value">013</strong></p></div><div class="wifi-access"><h4 class="wifi-access__title"><i data-lucide="building-2" aria-hidden="true"></i>Apartamentos</h4><p class="wifi-access__rule"><strong>Login:</strong> número do apartamento com hífen antes da letra.</p><p class="wifi-example"><span class="wifi-example__label">Exemplo · Apartamento 101A</span><strong class="wifi-example__value">101-A</strong></p></div><div class="wifi-password"><i data-lucide="key-round" aria-hidden="true"></i><div><span class="wifi-password__label">Senha · Para casas e apartamentos</span><strong class="wifi-password__value">Último sobrenome</strong></div></div><p class="wifi-help">Confira atentamente os dados informados. Em caso de dificuldade, entre em contato com o Time de Anfitriões.</p></div>'
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
    summary: 'Tudo que você precisa na palma da mão.',
    details: [
      'Aqui, casa e natureza se encontram com a estrutura de um clube pensado para oferecer conforto, liberdade e tranquilidade em cada detalhe.',
      'O Own Time Home Club Gramado é uma nova geração de hospitalidade residencial que une casas compartilhadas de alto padrão com serviços de hotelaria, uma comunidade cuidadosamente cultivada e experiências que conectam profundamente com o destino.',
      'Cada chegada é um reencontro. Você não visita e sim retorna, porque encontra familiaridade. Você pertence.',
      'Este guia reúne as principais informações para que você aproveite cada momento com leveza e praticidade. Tudo o que você precisa saber está aqui, organizado de forma simples e direta:<ul class="bs-steps"><li>A operação da sua unidade</li><li>Os serviços do clube</li><li>Gastronomia, spa e demais conveniências</li></ul>',
      'Sempre que precisar, nossa equipe estará à disposição pelo ramal 9 ou <a href="https://wa.me/555434210620" target="_blank" rel="noopener">WhatsApp da Recepção</a>.',
      'Estamos aqui para garantir que o seu tempo seja, de fato, o melhor tempo.'
    ],
    ctaWhatsapp: 'https://wa.me/555434210620?text=Olá%2C%20preciso%20de%20ajuda.'
  },

  horarios: [
    {
      section: 'Acesso',
      items: [
        { title: 'Check-in',  hours: 'a partir das 16h' },
        { title: 'Check-out', hours: 'até às 10h' },
      ]
    },
    {
      section: 'Gastronomia',
      items: [
        { title: 'Café da Manhã',     hours: '7h às 11h' },
        { title: 'Restaurante',       hours: 'Almoço 12h às 15h · Jantar 19h às 22h30' },
        { title: 'Bar & Coffee Shop', hours: '11h às 22h30' },
      ]
    },
    {
      section: 'Club House & Bem-Estar',
      items: [
        { title: 'Fitness Center', hours: '24 horas' },
        { title: 'Piscinas',       hours: '9h30 às 22h' },
        { title: 'Saunas',         hours: '9h30 às 22h' },
        { title: 'Spa',            hours: 'Agendamento com 24h de antecedência' },
      ]
    },
    {
      section: 'Serviços',
      items: [
        { title: 'Kids',               hours: '9h às 21h' },
        { title: 'Teens',              hours: '9h às 21h' },
        { title: 'Playground Externo', hours: '9h às 21h' },
        { title: 'Transporte Interno', hours: '24 horas' },
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
      area:      '57 m²',
      capacidade:'Até 4 hóspedes',
      vagas:     '1 vaga',
      image:     'assets/images/apto-garden.webp'
    },
    {
      id:        'terraco',
      href:      './terraco.html',
      name:      'Cobertura',
      subtitle:  'Apartamento',
      area:      '65 m²',
      capacidade:'Até 4 hóspedes',
      vagas:     '1 vaga',
      image:     'assets/images/apto-cobertura.webp'
    }
  ]

};
