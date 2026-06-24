const TIPOLOGIA = {

  hero: {
    label:       'Fall House · Casa 4 Suítes · Guia Digital',
    headline:    'Fall\nHouse.',
    subheadline: 'Sua casa de 4 suítes em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/casa-4-suites.webp'
  },

  stats: [
    { value: '448 m²', label: 'Área Total' },
    { value: '4',      label: 'Suítes' },
    { value: '10',     label: 'Hóspedes' },
    { value: '2',      label: 'Vagas' }
  ],

  description: 'Casa de alto padrão com 4 suítes, área gourmet completa e espaços projetados para convívio e conforto em meio à Serra Gaúcha.',

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso',        icon: 'key',         title: 'Acesso às Unidades',  body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li><li><strong>Comunicação:</strong> Utilize o videofone integrado para falar instantaneamente com a portaria ou recepção.</li></ul>' },
        { id: 'iluminacao',    icon: 'lightbulb',   title: 'Iluminação',          body: '<ul class="bs-steps"><li><strong>Projeto Eficiente:</strong> Sua casa possui um projeto luminotécnico planejado exclusivamente com equipamentos de baixo consumo.</li><li><strong>Uso Consciente:</strong> Desfrute do conforto dos seus ambientes mantendo o compromisso com a sustentabilidade e a responsabilidade energética.</li></ul>' },
        { id: 'tv',            icon: 'tv',          title: 'TV',                  body: '' },
        { id: 'ventilacao',    icon: 'wind',        title: 'Ventilação / Exaustão', body: '' },
        { id: 'piso-aquecido', icon: 'flame',       title: 'Piso Aquecido',       body: '' },
        { id: 'telefone',      icon: 'phone',       title: 'Telefone',            body: '' },
        { id: 'fogo-chao',     icon: 'flame-kindling', title: 'Fogo de Chão',     body: '<ul class="bs-steps"><li><strong>Espaço Gourmet:</strong> Aproveite o deck externo equipado com fogo de chão para momentos de lazer e descontração.</li><li><strong>Acendimento Seguro:</strong> Solicite o combustível apropriado e as instruções de uso diretamente pelo [contato].</li><li><strong>Segurança e Alertas:</strong> Nunca utilize gasolina, álcool, fluidos inflamáveis ou qualquer outro material não autorizado. O uso de combustíveis incorretos oferece risco grave de acidentes e danos à estrutura.</li></ul>' }
      ]
    },
    {
      id: 'cozinha',
      label: 'Cozinha',
      items: [
        { id: 'forno-pizza',    icon: 'pizza',    title: 'Forno de Pizza',   body: '<ul class="bs-steps"><li><strong>Experiência Gourmet:</strong> Desfrute de momentos únicos preparando pizzas artesanais no conforto da sua casa.</li><li><strong>Acendimento e Uso:</strong> Utilize exclusivamente a lenha ou o material fornecido e recomendado pela nossa equipe. Aguarde o forno atingir a temperatura ideal para garantir o preparo perfeito.</li><li><strong>Segurança e Alertas:</strong> Nunca utilize líquidos inflamáveis, plásticos ou qualquer outro combustível não autorizado para forçar o acendimento. Para solicitar os insumos adequados ou auxílio, acesse o [contato].</li></ul>' },
        { id: 'churrasqueira',  icon: 'beef',     title: 'Churrasqueira',    body: '<ul class="bs-steps"><li><strong>Tradição e Lazer:</strong> Aproveite o espaço gourmet para celebrar bons momentos e preparar o seu churrasco com total comodidade.</li><li><strong>Acendimento Seguro:</strong> Utilize apenas carvão apropriado e acendedores sólidos ou em gel. Caso a estrutura conte com sistema de exaustão, certifique-se de acioná-lo antes de acender o fogo.</li><li><strong>Cuidados Essenciais:</strong> Para a sua segurança, é estritamente proibido o uso de álcool líquido ou fluidos altamente inflamáveis. Ao finalizar, deixe as brasas apagarem naturalmente e nunca jogue água diretamente para evitar danos à estrutura.</li></ul>' }
      ]
    },
    {
      id: 'segundo-andar',
      label: 'Segundo Andar',
      items: [
        { id: 'sala-banho',      icon: 'droplets',    title: 'Sala de Banho · SPA Jacuzzi', body: '' },
        { id: 'climatizacao-2a', icon: 'thermometer', title: 'Climatização',               body: '' }
      ]
    },
    {
      id: 'eletros',
      label: 'Eletros',
      items: [
        { id: 'adega',          icon: 'wine',        title: 'Adega Climatizada',   body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas. O equipamento opera de forma silenciosa e com controle térmico estável para proteger a integridade e as notas de cada vinho.</li><li><strong>Experiência e Curadoria:</strong> O espaço ideal para acomodar a sua coleção pessoal ou as seleções especiais sugeridas pelo sommelier do Club, Cristiano Ribeiro, prontas para o seu momento de degustação.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado nas prateleiras e certifique-se de sempre fechar a porta até o final para manter a vedação e a eficiência do sistema de refrigeração.</li></ul>' },
        { id: 'geladeira',      icon: 'refrigerator', title: 'Geladeira',          body: '<span class="bs-model-tag">Frost Free 500L · Brastemp</span><ul class="bs-steps"><li><strong>Temperatura:</strong> Ajuste pelo painel externo sem precisar abrir a porta.</li><li><strong>Sons Normais:</strong> Estalos ou sons parecidos com ar esvaziando são completamente normais — é a expansão do gás de refrigeração.</li></ul>' },
        { id: 'microondas',     icon: 'microwave',   title: 'Micro-ondas',         body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte <em>Início</em> para 30s em potência máxima. Repita para adicionar mais tempo.</li><li><strong>Auto Menu:</strong> Gire o botão principal para selecionar programas prontos (pipoca, carnes etc.) e pressione <em>Início</em>.</li><li><strong>Atenção:</strong> É proibido colocar qualquer material metálico no interior.</li></ul>' },
        { id: 'forno-eletrico', icon: 'microwave',    title: 'Forno Elétrico',      body: '<span class="bs-model-tag">Glass Cook 73L · Tramontina</span><ul class="bs-steps"><li><strong>Para Ligar:</strong> Gire os três botões simultaneamente: <em>Função</em>, <em>Temperatura</em> e <em>Timer</em>.</li><li><strong>Atenção:</strong> Se o Timer estiver no zero, o forno não liga.</li><li><strong>Luz Interna:</strong> Permanece acesa durante todo o período programado no Timer.</li></ul>' },
        { id: 'cafeteira',      icon: 'coffee',      title: 'Máquina de Café',     body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água no reservatório traseiro. Levante a alavanca, insira a cápsula de sua preferência e feche-a completamente.</li><li><strong>Seu Café:</strong> Pressione qualquer botão para ligar a máquina. Quando as luzes pararem de piscar, selecione a medida desejada (Espresso ou Lungo) para iniciar a extração.</li><li><strong>Manutenção e Energia:</strong> O equipamento já está devidamente conectado à rede 220V da casa. A cápsula usada cai automaticamente no compartimento interno assim que a alavanca for levantada para o próximo uso.</li></ul>' },
        { id: 'lava-loucas',    icon: 'sparkles',    title: 'Lava-louças',         body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos da louça antes de acomodá-la nos cestos, garantindo que as hélices girem livremente.</li><li><strong>Preparo:</strong> Insira o detergente específico para lava-louças e o líquido secante nos compartimentos indicados na parte interna da porta.</li><li><strong>Acionamento:</strong> Selecione o ciclo de lavagem desejado no painel de controle e feche a porta com firmeza para que a máquina inicie o processo automaticamente.</li></ul>' },
        { id: 'lava-seca',      icon: 'washing-machine', title: 'Lava e Seca',     body: '<ul class="bs-steps"><li><strong>Capacidade Ideal:</strong> Suporta até 11kg para ciclos exclusivos de lavagem e 7kg se for utilizar a função contínua de secagem.</li><li><strong>Preparo:</strong> Insira as roupas e adicione os produtos de limpeza (sabão e amaciante) nos compartimentos indicados na gaveta frontal.</li><li><strong>Ciclo Simples:</strong> Gire o seletor central para escolher o programa que melhor atende às suas peças e pressione o botão "Início/Pausa" para começar.</li></ul>' },
        { id: 'fogao',          icon: 'cooking-pot', title: 'Fogão + Depurador',   body: '<ul class="bs-steps"><li><strong>Uso do Cooktop:</strong> Pressione e gire o manípulo correspondente à boca que deseja utilizar para o acendimento automático. Ajuste a intensidade da chama conforme a necessidade do preparo.</li><li><strong>Controle da Coifa:</strong> Acesse o painel para acionar a iluminação de apoio e ajustar a velocidade de exaustão. O sistema Silent mantém o ambiente purificado com o mínimo de ruído.</li><li><strong>Dica de Conforto:</strong> Ligue a coifa instantes antes de começar a cozinhar e mantenha-a funcionando por mais alguns minutos após o término para garantir a renovação completa do ar.</li></ul>' },
        { id: 'filtro-agua',    icon: 'filter',      title: 'Filtro de Água',      body: '<span class="bs-model-tag">Purificador Facilite · Consul</span><ul class="bs-steps"><li><strong>Gelada ou Natural:</strong> Pressione o botão correspondente no painel.</li><li><strong>Copo:</strong> Segure o botão pressionado e solte quando terminar.</li><li><strong>Jarra:</strong> Aperte até ouvir o "clique" — a água sairá sozinha. Aperte novamente para parar o fluxo.</li><li><strong>Mista:</strong> Pressione "Gelada" e "Natural" ao mesmo tempo.</li></ul>' }
      ]
    }
  ]

}
