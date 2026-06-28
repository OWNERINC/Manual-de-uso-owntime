const TIPOLOGIA = {

  hero: {
    label:       'Cobertura · Guia Digital',
    headline:    'Cobertura.',
    subheadline: 'Seu apartamento cobertura em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
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

  facilityOverrides: {
    climatizacao: {
      tabs: [
        {
          id: 'ac',
          title: 'Ar Condicionado',
          body: '<ul class="bs-steps"><li><strong>Sistema:</strong> Sua unidade é climatizada por ar central. O controle é feito pelo painel instalado na entrada da unidade.</li><li><strong>Como usar:</strong> Toque em Power para ligar ou desligar. Use as teclas ▲/▼ para ajustar a temperatura.</li><li><strong>Temperatura de Conforto:</strong> Recomendamos entre 20°C e 23°C para um ambiente agradável.</li></ul>'
        },
        {
          id: 'piso',
          title: 'Piso Aquecido',
          body: '<ul class="bs-steps"><li><strong>Tecnologia:</strong> O ambiente conta com piso radiante, aquecido por água a gás natural. A temperatura é predeterminada de forma automática e inteligente.</li><li><strong>Consumo (Pay per Use):</strong> O uso do piso aquecido opera na modalidade pay per use, com medição realizada proporcionalmente ao período da sua estadia.</li><li><strong>Aviso de Soft Open:</strong> Durante esta fase inicial, o sistema de piso aquecido poderá estar temporariamente inoperante.</li></ul>'
        }
      ]
    }
  },

  extraOrientacoes: [
    {
      id:    'manobrista',
      icon:  'car',
      title: 'Serviço de Manobrista',
      body:  '<ul class="bs-steps"><li><strong>Chegue e Relaxe:</strong> Nosso serviço de manobrista está à sua disposição para garantir conforto e praticidade desde o primeiro momento.</li><li><strong>Como Utilizar:</strong> Ao chegar, entregue as chaves do veículo para a nossa equipe na entrada principal.</li><li><strong>Solicitação de Retirada:</strong> Quando precisar sair, basta solicitar o seu carro na recepção ou pelo [inserir WhatsApp/link] com [inserir tempo, ex: 15 minutos] de antecedência. Nossa equipe deixará o veículo pronto e à sua espera.</li></ul>'
    }
  ],

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso',     icon: 'key',         title: 'Acesso às Unidades',   body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li><li><strong>Comunicação:</strong> Utilize o videofone integrado para falar instantaneamente com a portaria ou recepção.</li></ul>' },
        { id: 'iluminacao', icon: 'lightbulb',   title: 'Iluminação',            body: '<ul class="bs-steps"><li><strong>Projeto Eficiente:</strong> Sua casa possui um projeto luminotécnico planejado exclusivamente com equipamentos de baixo consumo.</li><li><strong>Uso Consciente:</strong> Desfrute do conforto dos seus ambientes mantendo o compromisso com a sustentabilidade e a responsabilidade energética.</li></ul>' },
        { id: 'tv',         icon: 'tv',          title: 'TV',                    body: '' },
        { id: 'ventilacao', icon: 'fan',         title: 'Ventilação / Exaustão', body: '<ul class="bs-steps"><li><strong>Operação 100% Automática:</strong> O acionamento e o desligamento são inteligentes e autônomos. Nenhuma ação ou ajuste manual é necessário da sua parte.</li><li><strong>Renovação Contínua:</strong> O ar circula e se renova de forma constante, assegurando um ambiente sempre fresco e agradável durante toda a sua estadia.</li></ul>' },
        { id: 'ar-central', icon: 'thermometer', title: 'AR Central',            body: '' },
        { id: 'telefone',   icon: 'phone',       title: 'Telefone',              body: '<ul class="bs-steps"><li>Para ligar para a recepção, disque <strong>"9"</strong>.</li><li><strong>Soft Opening:</strong> O serviço de telefonia interno está disponível.</li></ul>' },
        { id: 'carregadores', icon: 'plug', title: 'Carregadores Elétricos', body: '<ul class="bs-steps"><li>A garagem do complexo possui <strong>4 vagas de carregamento elétrico compartilhadas</strong>.</li><li><strong>Conexão:</strong> Estacione na vaga de recarga e conecte o cabo ao seu veículo para iniciar a sessão.</li><li><strong>Cobrança:</strong> A liberação é mediante a tag de acesso do empreendimento, gerando fatura junto com os pagamentos de pay-per-use da unidade.</li></ul>' }
      ]
    },
    {
      id: 'mini-spa',
      label: 'Mini Spa Terrace',
      items: [
        { id: 'spa-jacuzzi', icon: 'sparkles', title: 'Mini Spa Terrace Jacuzzi', body: '<ul class="bs-steps"><li><strong>Exclusividade da Cobertura:</strong> Localizado na sua sacada, o Mini Spa oferece uma experiência de relaxamento premium ao ar livre, o cenário perfeito para apreciar a vista e o clima típico da serra.</li><li><strong>Acionamento e Bem-Estar:</strong> Verifique se a água cobre completamente os jatos antes de ligar o sistema de hidromassagem e aquecimento. Para um aproveitamento seguro e revitalizante, sugerimos sessões de 20 a 30 minutos.</li><li><strong>Preservação e Cuidado:</strong> Para garantir a pureza da água e o pleno funcionamento do sistema, não é permitido o consumo de alimentos e bebidas no interior do equipamento. Utilize exclusivamente sais e espumas homologados para spas.</li></ul>' }
      ]
    }
  ],

  cozinha: [
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
