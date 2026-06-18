/**
 * data-hub.js — Own Time Home Club · Hub Central
 * Conteúdo exclusivo da página de entrada (index.html).
 * Para atualizar imagens dos cards, substitua o campo `image` de cada tipologia.
 */

const HUB = {

  hero: {
    label:       'Own Time Home Club',
    headline:    'Onde você está?',
    subheadline: 'Bem-vindo ao Own Time. Aqui, casa e natureza se encontram com a estrutura de um clube pensado para oferecer conforto, liberdade e tranquilidade em cada detalhe. O Own Time Home Club Gramado é uma nova geração de hospitalidade residencial que une casas compartilhadas de alto padrão com serviços de hotelaria, uma comunidade cuidadosamente cultivada e experiências que conectam profundamente com o destino. Cada chegada é um reencontro. Você não visita e sim retorna, porque encontra familiaridade. Você pertence. Este diretório reúne as principais informações para que você aproveite cada momento com leveza e praticidade.',
    location:    'Gramado · Serra Gaúcha · Brasil'
  },

  intro: {
    heading: 'Bem-vindo ao Own Time.',
    summary: 'Descubra o equilíbrio perfeito entre o conforto de casa, a beleza da natureza e a exclusividade de um clube com serviços de hotelaria de alto padrão. Clique em ler mais e entenda para que serve este diretório.',
    details: [
      'Aqui, casa e natureza se encontram com a estrutura de um clube pensado para oferecer conforto, liberdade e tranquilidade em cada detalhe.',
      'O Own Time Home Club Gramado é uma nova geração de hospitalidade residencial que une casas compartilhadas de alto padrão com serviços de hotelaria, uma comunidade cuidadosamente cultivada e experiências que conectam profundamente com o destino. Cada chegada é um reencontro. Você não visita e sim retorna, porque encontra familiaridade. Você pertence.',
      'Este diretório reúne as principais informações para que você aproveite cada momento com leveza e praticidade. Desde a operação da sua unidade até os serviços do clube, gastronomia, spa e demais conveniências. Tudo o que você precisa saber está aqui, organizado de forma simples e direta.',
      'Sempre que precisar, nossa equipe estará à disposição pelo ramal [xx] ou WhatsApp [xxxxxxxx]. Estamos aqui para garantir que o seu tempo seja, de fato, o melhor tempo.'
    ],
    ctaWhatsapp: 'https://wa.me/5554999999999?text=Olá%2C%20preciso%20de%20ajuda.'
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
      image:     'assets/images/casa 4 suites.png'
    },
    {
      id:        'winter-house',
      href:      './winter-house.html',
      name:      'Winter House',
      subtitle:  'Casa 3 Suítes',
      area:      '325 m²',
      capacidade:'Até 8 hóspedes',
      vagas:     '2 vagas',
      image:     'assets/images/casa 3 suites.png'
    },
    {
      id:        'garden',
      href:      './garden.html',
      name:      'Garden',
      subtitle:  'Apartamento',
      area:      '≈ 60 m²',
      capacidade:'Para pequenos núcleos',
      vagas:     '1 vaga',
      image:     'assets/images/apto garden.jpeg'
    },
    {
      id:        'terraco',
      href:      './terraco.html',
      name:      'Cobertura',
      subtitle:  'Apartamento',
      area:      '≈ 60 m²',
      capacidade:'Para pequenos núcleos',
      vagas:     '1 vaga',
      image:     'assets/images/apto cobertura.png'
    }
  ]

};
