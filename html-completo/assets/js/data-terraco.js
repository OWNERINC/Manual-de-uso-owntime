const TIPOLOGIA = {

  hero: {
    label:       'Own Time Home Club · Guia Digital',
    headline:    'Apartments\nCobertura',
    subheadline: 'Sua cobertura em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location:    'Gramado · Serra Gaúcha · Brasil',
    image:       'assets/images/apto-cobertura.webp'
  },

  stats: [
    { value: '≈ 60 m²', label: 'Área Total' },
    { value: '1',        label: 'Suíte' },
    { value: '1',        label: 'Vaga' }
  ],

  description: 'Apartamento Cobertura de alto padrão com mini spa terrace jacuzzi exclusivo na cobertura privativa.',

  housekeepingDay: 'Terça-feira',

  facilityExcludes: ['jacuzzi'],

  facilityOverrides: {
    climatizacao: {
      tabs: [
        {
          id: 'ac',
          title: 'Ar Condicionado',
          body: '<ul class="bs-steps"><li>O ar central do seu apartamento controla a temperatura global do ambiente. O controle é feito pelo painel instalado na entrada da unidade.</li><li><strong>Ligar / Desligar:</strong> Pressione o botão <em>ON/OFF</em> (ou ícone de energia) no painel de controle.</li><li><strong>Ajustar a Temperatura:</strong> Utilize os botões <em>+ / −</em> ou as setas <em>▲ / ▼</em> para definir a temperatura da sua preferência.</li><li><strong>Temperatura de Conforto:</strong> A faixa entre 22°C e 25°C costuma oferecer o melhor equilíbrio térmico para o ambiente.</li></ul>'
        },
        {
          id: 'piso',
          title: 'Piso Aquecido',
          body: '<ul class="bs-steps"><li><strong>Tecnologia:</strong> O ambiente conta com piso radiante, aquecido por água a gás natural. A temperatura é predeterminada de forma automática e inteligente.</li><li><strong>Consumo (Serviço sob Demanda):</strong> O uso do piso aquecido opera na modalidade serviço sob demanda, com medição realizada proporcionalmente ao período da sua estadia.</li><li><strong>Aviso de Soft Open:</strong> Durante esta fase inicial, o sistema de piso aquecido poderá estar temporariamente inoperante.</li></ul>'
        }
      ]
    }
  },

  extraOrientacoes: [
    {
      id:    'manobrista',
      icon:  'car',
      title: 'Serviço de Manobrista',
      body:  '<ul class="bs-steps"><li><strong>Chegue e Relaxe:</strong> Nosso serviço de manobrista está à sua disposição para garantir conforto e praticidade desde o primeiro momento.</li><li><strong>Como Utilizar:</strong> Ao chegar, entregue as chaves do veículo para a nossa equipe na entrada principal.</li><li><strong>Solicitação de Retirada:</strong> Quando precisar sair, solicite o seu carro com 15 minutos de antecedência. Nossa equipe deixará o veículo pronto e à sua espera.</li></ul><a href="https://wa.me/5554999588947" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;gap:0.5rem;margin-top:1.25rem;padding:0.85rem 1rem;background:var(--color-accent);color:#fff;border-radius:8px;text-decoration:none;font-family:var(--font-body);font-size:0.85rem;font-weight:500;letter-spacing:0.02em;-webkit-tap-highlight-color:transparent"><i data-lucide="message-circle"></i> WhatsApp da Recepção</a>'
    }
  ],

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso',     icon: 'key',         title: 'Acesso às Unidades',   body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li></ul>' },
        { id: 'iluminacao', icon: 'lightbulb',   title: 'Iluminação',            body: '<ul class="bs-steps"><li>O projeto de iluminação foi pensado para proporcionar conforto, eficiência e baixo consumo de energia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Uso consciente</p><ul class="bs-steps"><li>Sempre que possível, apague as luzes dos ambientes que não estiver utilizando.</li><li>Assim, você contribui para o uso responsável de energia durante a sua estadia.</li></ul>' },
        { id: 'tv',         icon: 'tv',          title: 'TV',                    body: '<ul class="bs-steps"><li>Acesse seus serviços de streaming favoritos diretamente pela TV durante a sua estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Privacidade</p><ul class="bs-steps"><li>Você não precisa se preocupar em sair das suas contas antes do check-out. O sistema realiza a desconexão automática de todos os aplicativos ao final da estadia.</li></ul>' },
        { id: 'ventilacao', icon: 'fan',         title: 'Ventilação / Exaustão', body: '<ul class="bs-steps"><li><strong>Operação 100% Automática:</strong> O acionamento e o desligamento são inteligentes e autônomos. Nenhuma ação ou ajuste manual é necessário da sua parte.</li><li><strong>Renovação Contínua:</strong> O ar circula e se renova de forma constante, assegurando um ambiente sempre fresco e agradável durante toda a sua estadia.</li></ul>' },
        { id: 'telefone',   icon: 'phone',       title: 'Telefone',              body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de telefonia interno está indisponível para outras ligações além da recepção.</li><li>Para ligar para a recepção, disque <strong>"9"</strong>.</li></ul>' },
        { id: 'carregadores', icon: 'plug', title: 'Carregadores Elétricos', body: '<ul class="bs-steps"><li>Sua unidade conta com um carregador exclusivo para veículos elétricos.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como utilizar</p><ul class="bs-steps"><li>Estacione na vaga destinada à recarga e conecte o cabo ao veículo para iniciar o carregamento.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Cobrança</p><ul class="bs-steps"><li>A liberação da recarga é realizada por meio da tag de acesso do empreendimento. O consumo será lançado juntamente com os demais serviços utilizados durante a estadia.</li></ul>' }
      ]
    },
    {
      id: 'mini-spa',
      label: 'Mini Spa Terrace',
      items: [
        { id: 'spa-jacuzzi', icon: 'sparkles', title: 'Mini Spa Terrace Jacuzzi', body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O Mini Spa Terrace Jacuzzi estará disponível em breve. Durante esta fase inicial, encontra-se temporariamente indisponível. Agradecemos sua compreensão.</li></ul>' }
      ]
    }
  ],

  cozinha: [
    { id: 'lareira',        icon: 'flame',           title: 'Lareira',                               body: '<p class="bs-model-tag">Acendimento e uso</p><ul class="bs-steps"><li>Utilize exclusivamente a lenha fornecida.</li><li>Para acender a lareira, siga esta sequência: Coloque o papel no fundo da fornalha, seguido pelas aparas, a lenha miúda e, por último, as toras maiores.</li><li>Acenda o fogo e feche a porta imediatamente após a ignição. A lareira não deve ser utilizada com a porta aberta.</li><li>Quando o fogo estiver bem estabelecido, utilize o controle de ar para reduzir a entrada de oxigênio e manter a chama estável.</li><li>Para reabastecer, coloque a nova lenha sobre a brasa, evitando aproximá-la do vidro.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Atenção</p><ul class="bs-steps"><li>O vidro frontal e a estrutura da lareira atingem altas temperaturas durante o funcionamento.</li><li>Mantenha crianças, móveis e objetos afastados do equipamento enquanto ele estiver em uso.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Não é permitido</p><ul class="bs-steps"><li>Utilizar líquidos inflamáveis para acender ou reacender o fogo.</li><li>Utilizar combustíveis ou materiais inadequados, como briquetes, Pallet, querosene ou outros aceleradores de combustão.</li><li>Utilizar a lareira para incinerar lixo ou qualquer outro resíduo.</li></ul><p class="bs-danger"><strong>Perigo</strong>Mantenha a tampa aberta após o uso até o resfriamento completo. Fechar o equipamento ainda quente apresenta risco de incêndio.</p>' },
    { id: 'fogao-inducao',  icon: 'cooking-pot',     title: 'Cooktop de Indução e Coifa Tramontina', body: '<ul class="bs-steps"><li><strong>Eficiência por Indução:</strong> Ligue o cooktop de 2 bocas diretamente no painel touch. Lembre-se de utilizar as panelas magnéticas já disponibilizadas na cozinha, ideais para este sistema de aquecimento rápido e seguro.</li><li><strong>Purificação Silenciosa:</strong> Acione a coifa de ilha Black Steel para manter o ar sempre limpo. A tecnologia Silent garante a renovação do ambiente com o máximo de conforto acústico durante seus preparos.</li></ul>' },
    { id: 'adega',          icon: 'wine',            title: 'Adega Climatizada',                     body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas. O equipamento opera de forma silenciosa e com controle térmico estável para proteger a integridade e as notas de cada vinho.</li><li><strong>Experiência e Curadoria:</strong> O espaço ideal para acomodar a sua coleção pessoal ou as seleções especiais sugeridas pelo sommelier do Club, Cristiano Ribeiro, prontas para o seu momento de degustação.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado nas prateleiras e certifique-se de sempre fechar a porta até o final para manter a vedação e a eficiência do sistema de refrigeração.</li></ul>' },
    { id: 'geladeira',      icon: 'refrigerator',    title: 'Geladeira',                             body: '<span class="bs-model-tag">Duplex Inverse 435L · Tramontina</span><ul class="bs-steps"><li><strong>Design Inteligente:</strong> O formato Inverse posiciona o refrigerador na parte superior e o freezer na base, garantindo muito mais conforto e ergonomia para acessar os itens que você mais utiliza no dia a dia.</li><li><strong>Conservação Ideal:</strong> O equipamento já opera na temperatura recomendada para o clima da serra. Certifique-se apenas de manter as portas devidamente fechadas para garantir a eficiência energética e o frescor dos alimentos.</li></ul>' },
    { id: 'microondas',     icon: 'microwave',       title: 'Micro-ondas',                           body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte <em>Início</em> para ligar 30s em potência máxima. Repita para somar mais tempo.</li><li><strong>Descongelar:</strong> Gire o seletor para "Descongelar", ajuste o tempo e pressione <em>Início</em>.</li><li><strong>Atenção:</strong> Nunca insira metais, papel alumínio ou talheres no interior.</li></ul>' },
    { id: 'forno-eletrico', icon: 'microwave',       title: 'Forno Elétrico',                        body: '<span class="bs-model-tag">Epic T Smart 60 · Tramontina</span><ul class="bs-steps"><li><strong>Controle Inteligente:</strong> Utilize o painel touch Glass Black para acessar de forma intuitiva as diversas funções de assamento e ajustar a temperatura ideal para a sua receita.</li><li><strong>Cuidados Práticos:</strong> Utilize apenas travessas e recipientes adequados para fornos elétricos (vidro temperado, cerâmica ou metal). Após o desligamento, é normal que o sistema de ventilação continue operando silenciosamente por alguns minutos para resfriar o equipamento com segurança.</li></ul>' },
    { id: 'cafeteira',      icon: 'coffee',          title: 'Máquina de Café',                       body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água no reservatório traseiro. Levante a alavanca, insira a cápsula de sua preferência e feche-a completamente.</li><li><strong>Seu Café:</strong> Pressione qualquer botão para ligar a máquina. Quando as luzes pararem de piscar, selecione a medida desejada (Espresso ou Lungo) para iniciar a extração.</li><li><strong>Manutenção e Energia:</strong> O equipamento já está devidamente conectado à rede 220V da casa. A cápsula usada cai automaticamente no compartimento interno assim que a alavanca for levantada para o próximo uso.</li></ul>' },
    { id: 'lava-loucas',    icon: 'utensils',        title: 'Lava-louças',                           body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos da louça antes de acomodá-la nos cestos, garantindo que as hélices girem livremente.</li><li><strong>Preparo:</strong> Insira o detergente específico para lava-louças e o líquido secante nos compartimentos indicados na parte interna da porta.</li><li><strong>Acionamento:</strong> Selecione o ciclo de lavagem desejado no painel de controle e feche a porta com firmeza para que a máquina inicie o processo automaticamente.</li></ul>' },
    { id: 'depurador',      icon: 'air-vent',        title: 'Depurador de Ar',                       body: '<span class="bs-model-tag">Coifa Square Isla 40 · Tramontina</span><ul class="bs-steps"><li><strong>Velocidade:</strong> Pressione os botões de 1 a 4 para escolher a força do exaustor. O botão da lâmpada aciona a luz de forma independente.</li><li><strong>Timer:</strong> Segure o botão da velocidade ativa por 3 segundos — a luz piscará e a coifa desligará automaticamente após 5 min.</li><li><strong>Dica:</strong> Ligue 5 minutos antes de cozinhar para melhor sucção do ar.</li></ul>' }
  ]

}

