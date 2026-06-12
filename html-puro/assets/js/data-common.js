const COMMON = {

  brand: {
    name:     'Own Time Home Club',
    location: 'Gramado · Serra Gaúcha',
    concierge: {
      whatsapp:     '+5554999999999',
      checkoutTime: '12:00'
    }
  },

  orientacoesGerais: [
    {
      id:       'consumos',
      icon:     'zap',
      title:    'Consumos',
      subtitle: 'Energia, Água e Gás',
      body:     ''
    },
    {
      id:       'cafe',
      icon:     'coffee',
      title:    'Café da Manhã',
      subtitle: '',
      body:     ''
    },
    {
      id:       'carrinho',
      icon:     'wine',
      title:    'Carrinho de Bebidas',
      subtitle: '',
      body:     ''
    }
  ],

  facilities: [
    {
      id:   'climatizacao',
      icon: 'thermometer',
      title: 'Climatização',
      body:  'Sistema de ar-condicionado split inverter com controle individualizado por ambiente. Temperatura sugerida entre 20°C e 23°C. O controle remoto está disponível em cada cômodo — para ajuda, solicite ao time de anfitriões.'
    },
    {
      id:   'lareira',
      icon: 'flame',
      title: 'Lareira',
      body:  'Utilize exclusivamente a lenha fornecida pela propriedade. É terminantemente vedado o uso de combustíveis líquidos, papel ou qualquer material não homologado. Para reposição de lenha, basta acionar o concierge.'
    },
    {
      id:   'hidromassagem',
      icon: 'droplets',
      title: 'Hidromassagem',
      body:  'Disponível das 08h às 22h. Reserve ao menos 30 minutos para aquecimento antes do uso. Ao término, higienize a banheira conforme orientações do guia do hóspede. Por preservação da água tratada, evite o uso de cosméticos na banheira.'
    },
    {
      id:   'conectividade',
      icon: 'wifi',
      title: 'Conectividade',
      body:  'Wi-Fi de alta velocidade disponível em todos os ambientes da casa e nas áreas comuns do clube. As credenciais de acesso estão no guia impresso na bancada da cozinha e também podem ser solicitadas ao concierge.'
    }
  ],

  amenities: [
    {
      id:    'piscinas',
      icon:  'waves',
      title: 'Piscinas',
      hours: '07h – 22h',
      note:  'Piscina aquecida coberta e piscina ao ar livre com vista para o bosque de 36 mil m².'
    },
    {
      id:    'sauna',
      icon:  'wind',
      title: 'Sauna',
      hours: '08h – 21h',
      note:  'Sauna finlandesa e sauna a vapor. Toalhas disponíveis na recepção do Spa.'
    },
    {
      id:    'fitness',
      icon:  'dumbbell',
      title: 'Fitness Center',
      hours: '24 horas',
      note:  'Academia equipada com aparelhos Technogym. Acesso incluso para todos os hóspedes.'
    },
    {
      id:    'spa',
      icon:  'sparkles',
      title: 'Spa',
      hours: 'Sob agendamento',
      note:  'Centro de bem-estar completo. Agendamento obrigatório com mínimo de 24h de antecedência.'
    }
  ],

  gastronomy: [
    {
      id:    'restaurante',
      icon:  'utensils',
      title: 'Restaurante',
      hours: 'Café da manhã 07h – 10h  ·  Jantar 19h – 22h',
      body:  'Gastronomia contemporânea inspirada nos sabores e tradições da Serra Gaúcha. Cada prato celebra o território, com ingredientes locais cuidadosamente selecionados. O espaço acolhedor convida à mesa e ao tempo compartilhado.'
    },
    {
      id:    'coffee-shop',
      icon:  'coffee',
      title: 'Coffee Shop',
      hours: 'Aberto das 08h às 18h',
      body:  'Uma seleção cuidadosa de grãos especiais e confeitaria artesanal. O espaço ideal para começar o dia com calma ou fazer uma pausa no meio da tarde, com uma vista para o jardim e a Serra ao fundo.'
    },
    {
      id:    'bar',
      icon:  'wine',
      title: 'Bar',
      hours: 'Aberto das 12h à 00h',
      body:  'Uma coleção de vinhos da Serra Gaúcha e rótulos internacionais, drinques autorais e harmonizações pensadas com cuidado. O ponto de encontro natural do clube ao final de um bom dia.'
    },
    {
      id:    'chef-em-casa',
      icon:  'chef-hat',
      title: 'Chef em Casa',
      hours: 'Agendamento com 48h de antecedência via concierge',
      body:  'Receba um chef dedicado no conforto da sua casa para uma experiência gastronômica exclusiva. O menu é criado especialmente para você e seus convidados, com ingredientes premium e uma apresentação de alto nível.'
    }
  ],

  concierge: [
    {
      id:    'anfitrioes',
      icon:  'bell',
      title: 'Time de Anfitriões',
      body:  'Nossa equipe está disponível 24h para garantir que cada momento da sua estadia seja perfeito. Para solicitações, acione o ramal interno ou o WhatsApp do concierge.'
    },
    {
      id:    'personal',
      icon:  'dumbbell',
      title: 'Personal Trainer',
      body:  'Programas personalizados com profissionais certificados. Sessões no Fitness Center ou ao ar livre — individual ou em grupo. Agendamento pelo concierge.'
    },
    {
      id:    'pet-care',
      icon:  'paw-print',
      title: 'Pet Care',
      body:  'Serviços de Pet Walker e Banho & Tosa disponíveis para os companheiros de quatro patas. Agendamento com 24h de antecedência junto ao time de anfitriões.'
    },
    {
      id:    'car-wash',
      icon:  'car',
      title: 'Car Wash',
      body:  'Lavagem e higienização completa do veículo enquanto você aproveita a estadia. Agendamento na recepção ou pelo WhatsApp do concierge.'
    },
    {
      id:    'shopper',
      icon:  'shopping-bag',
      title: 'Private Shopper',
      body:  'Curadoria de compras e presentes especiais com assessoria personalizada. Produtos locais, vinhos, artesanato e itens selecionados especialmente para você.'
    }
  ],

  clube: [
    {
      id:   'emporio',
      icon: 'store',
      title: 'Empório',
      body:  ''
    },
    {
      id:   'kids',
      icon: 'baby',
      title: 'Kids',
      body:  ''
    },
    {
      id:   'teens',
      icon: 'users',
      title: 'Teens',
      body:  ''
    },
    {
      id:   'piscina',
      icon: 'waves',
      title: 'Piscina',
      body:  ''
    },
    {
      id:   'sauna-seca',
      icon: 'flame',
      title: 'Sauna Seca',
      body:  ''
    },
    {
      id:   'sauna-umida',
      icon: 'droplets',
      title: 'Sauna Húmida',
      body:  ''
    },
    {
      id:   'spa',
      icon: 'sparkles',
      title: 'Spa',
      body:  ''
    },
    {
      id:   'academia',
      icon: 'dumbbell',
      title: 'Academia',
      body:  ''
    },
    {
      id:   'playground',
      icon: 'trees',
      title: 'Playground Externo',
      body:  ''
    },
    {
      id:   'pulseira',
      icon: 'watch',
      title: 'Acesso via Pulseira',
      body:  ''
    },
    {
      id:   'golf-carts',
      icon: 'car',
      title: 'Carrinhos de Golf',
      body:  ''
    },
    {
      id:   'carregadores',
      icon: 'plug',
      title: 'Carregadores Elétricos',
      body:  ''
    }
  ]

}
