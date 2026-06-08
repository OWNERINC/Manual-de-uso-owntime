/**
 * data-hub.js — Own Time Home Club · Hub Central
 * Conteúdo exclusivo da página de entrada (index.html).
 * Para atualizar imagens dos cards, substitua o campo `image` de cada tipologia.
 */

const HUB = {

  hero: {
    label:       'Own Time Home Club',
    headline:    'O lugar onde\nvocê volta.',
    subheadline: 'Gramado, Serra Gaúcha. Uma propriedade compartilhada de alto padrão onde a natureza alpina e o conforto de um lar se encontram a cada retorno.',
    location:    'Gramado · Serra Gaúcha · Brasil'
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
      subtitle:  'Apartamento Garden',
      area:      '≈ 60 m²',
      capacidade:'Para pequenos núcleos',
      vagas:     '1 vaga',
      image:     'assets/images/apto garden.jpeg'
    },
    {
      id:        'terraco',
      href:      './terraco.html',
      name:      'Terraço',
      subtitle:  'Apartamento Terraço',
      area:      '≈ 60 m²',
      capacidade:'Para pequenos núcleos',
      vagas:     '1 vaga',
      image:     'assets/images/apto cobertura.png'
    }
  ]

};
