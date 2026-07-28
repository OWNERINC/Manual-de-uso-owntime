const TIPOLOGIA = {

  hero: {
    label: 'Own Time Home Club · Guia Digital',
    headline: 'Winter\nHouse',
    subheadline: 'Sua casa de 3 suítes em Gramado. Use este guia para encontrar tudo que você precisa durante a estadia.',
    location: 'Gramado · Serra Gaúcha · Brasil',
    image: 'assets/images/casa-3-suites.webp'
  },

  stats: [
    { value: '325 m²', label: 'Área Total' },
    { value: '3', label: 'Suítes' },
    { value: '8', label: 'Hóspedes' },
    { value: '2', label: 'Vagas' }
  ],

  description: 'Casa de alto padrão com área gourmet completa e espaços projetados para convívio em meio à Serra Gaúcha.',

  housekeepingDay: 'Segunda-feira',

  facilityOverrides: {
    climatizacao: {
      tabs: [
        {
          id: 'ac',
          title: 'Ar Condicionado',
          body: '<ul class="bs-steps"><li><strong>Sistema:</strong> Sua unidade conta com ar condicionado split individual por ambiente, com controle independente in cada cômodo.</li><li><strong>Como usar:</strong> Pressione o botão Power no controle remoto. Use as teclas ▲/▼ para ajustar a temperatura desejada.</li><li><strong>Temperatura de Conforto:</strong> Recomendamos entre 20°C e 23°C para um ambiente agradável.</li></ul>'
        },
        {
          id: 'piso',
          title: 'Piso Aquecido',
          body: '<ul class="bs-steps"><li><strong>Tecnologia:</strong> O ambiente conta com piso radiante, aquecido por água a gás natural. A temperatura é predeterminada de forma automática e inteligente.</li><li><strong>Consumo (Serviço sob Demanda):</strong> O uso do piso aquecido opera na modalidade serviço sob demanda, com medição realizada proporcionalmente ao período da sua estadia.</li><li><strong>Aviso de Soft Open:</strong> Durante esta fase inicial, o sistema de piso aquecido poderá estar temporariamente inoperante.</li></ul>'
        }
      ]
    },
    churrasqueira: {
      body: '<ul class="bs-steps"><li>A churrasqueira está à disposição para que você reúna família e amigos e aproveite bons momentos durante a sua estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como utilizar</p><ul class="bs-steps"><li>Utilize apenas carvão apropriado e acendedores sólidos ou em gel.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Importante</p><ul class="bs-steps"><li>Não utilize álcool líquido ou outros líquidos inflamáveis para acender o fogo.</li><li>Ao finalizar o uso, deixe as brasas apagarem naturalmente.</li><li>Não jogue água diretamente na churrasqueira, evitando danos à estrutura.</li></ul>'
    },
    jacuzzi: {
      body: '<ul class="bs-steps"><li>O refúgio perfeito após um dia de imersão na serra. Integrada à atmosfera acolhedora da casa de 3 suítes, a jacuzzi foi projetada para entregar uma experiência de relaxamento absoluto e privacidade. Seja para um momento de pausa ou para aproveitar o conforto térmico em contraste com o clima, este é o espaço definitivo para desacelerar com exclusividade.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Detalhes da Experiência</p><ul class="bs-steps"><li><strong>Imersão e Bem-Estar:</strong> Sistema de hidromassagem pensado para o alívio de tensões e descanso completo do corpo e da mente.</li><li><strong>Climatização Ideal:</strong> Água mantida na temperatura perfeita, criando um ambiente sempre convidativo, independentemente da estação do ano.</li><li><strong>Design Integrado:</strong> Estética contemporânea e sofisticada, alinhada à arquitetura da casa para manter a fluidez entre o momento de spa e a convivência.</li></ul><p class="bs-danger"><strong>Atenção</strong>Para a sua segurança e a preservação do equipamento, é expressamente proibido o consumo de bebidas, comidas ou o uso de aparelhos eletrônicos dentro da jacuzzi.</p>'
    }
  },

  guia: [
    {
      id: 'geral',
      label: 'Geral',
      items: [
        { id: 'acesso', icon: 'key', title: 'Acesso às Unidades', body: '<ul class="bs-steps"><li><strong>Abertura:</strong> Aproxime seu cartão da fechadura eletrônica para destravar a porta.</li></ul>' },
        { id: 'iluminacao', icon: 'lightbulb', title: 'Iluminação', body: '<ul class="bs-steps"><li>O projeto de iluminação foi pensado para proporcionar conforto, eficiência e baixo consumo de energia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Uso consciente</p><ul class="bs-steps"><li>Sempre que possível, apague as luzes dos ambientes que não estiver utilizando.</li><li>Assim, você contribui para o uso responsável de energia durante a sua estadia.</li></ul>' },
        { id: 'tv', icon: 'tv', title: 'TV', body: '<ul class="bs-steps"><li>Acesse seus serviços de streaming favoritos diretamente pela TV durante a sua estadia.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Privacidade</p><ul class="bs-steps"><li>Você não precisa se preocupar em sair das suas contas antes do check-out. O sistema realiza a desconexão automática de todos os aplicativos ao final da estadia.</li></ul>' },
        { id: 'ventilacao', icon: 'wind', title: 'Ventilação / Exaustão', body: '<ul class="bs-steps"><li><strong>Operação 100% Automática:</strong> O acionamento e desligamento são inteligentes e autônomos. Nenhuma ação ou ajuste manual é necessário da sua parte.</li><li><strong>Renovação Contínua:</strong> O sistema de ventilação assegura um ambiente fresco e agradável durante toda sua estadia.</li></ul>' },
        { id: 'telefone', icon: 'phone', title: 'Telefone', body: '<ul class="bs-steps"><li><strong>Soft Opening:</strong> O serviço de telefonia interno está indisponível para outras ligações além da recepção.</li><li>Para ligar para a recepção, disque <strong>"9"</strong>.</li></ul>' },
        { id: 'carregadores', icon: 'plug', title: 'Carregador Elétrico', body: '<ul class="bs-steps"><li>Sua unidade conta com um carregador exclusivo para veículos elétricos.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Como utilizar</p><ul class="bs-steps"><li>Estacione na vaga destinada à recarga e conecte o cabo ao veículo para iniciar o carregamento.</li></ul><p class="bs-model-tag" style="margin-top:1.25rem">Cobrança</p><ul class="bs-steps"><li>A liberação da recarga é realizada por meio da tag de acesso do empreendimento. O consumo será lançado juntamente com os demais serviços utilizados durante a estadia.</li></ul>' }
      ]
    }
  ],

  cozinha: [
    { id: 'adega', icon: 'wine', title: 'Adega Climatizada', body: '<ul class="bs-steps"><li><strong>Temperatura Ideal:</strong> Mantenha seus rótulos preservados nas condições perfeitas. O equipamento opera de forma silenciosa e com controle térmico estável para proteger a integridade e as notas de cada vinho.</li><li><strong>Experiência e Curadoria:</strong> O espaço ideal para acomodar a sua coleção pessoal ou as seleções especiais.</li><li><strong>Uso Adequado:</strong> Organize as garrafas com cuidado nas prateleiras e certifique-se de sempre fechar a porta até o final para manter a vedação e a eficiência do sistema de refrigeração.</li></ul>' },
    { id: 'geladeira', icon: 'refrigerator', title: 'Geladeira', body: '<span class="bs-model-tag">Frost Free 500L · Brastemp</span><ul class="bs-steps"><li><strong>Temperatura:</strong> Ajuste pelo painel externo sem precisar abrir a porta.</li><li><strong>Sons Normais:</strong> Estalos ou sons parecidos com ar esvaziando são completamente normais — é a expansão do gás de refrigeração.</li></ul>' },
    { id: 'microondas', icon: 'microwave', title: 'Micro-ondas', body: '<span class="bs-model-tag">Glass Cook 25L · Tramontina</span><ul class="bs-steps"><li><strong>+30s:</strong> Aperte <em>Início</em> para 30s em potência máxima. Repita para adicionar mais tempo.</li><li><strong>Auto Menu:</strong> Gire o botão principal para selecionar programas prontos (pipoca, carnes etc.) e pressione <em>Início</em>.</li><li><strong>Atenção:</strong> É proibido colocar qualquer material metálico no interior.</li></ul>' },
    { id: 'forno-eletrico', icon: 'microwave', title: 'Forno Elétrico', body: '<span class="bs-model-tag">Glass Cook 73L · Tramontina</span><ul class="bs-steps"><li><strong>Para Ligar:</strong> Gire os três botões simultaneamente: <em>Função</em>, <em>Temperatura</em> e <em>Timer</em>.</li><li><strong>Atenção:</strong> Se o Timer estiver no zero, o forno não liga.</li><li><strong>Luz Interna:</strong> Permanece acesa durante todo o período programado no Timer.</li></ul>' },
    { id: 'cafeteira', icon: 'coffee', title: 'Máquina de Café', body: '<span class="bs-model-tag">Nespresso Citiz</span><ul class="bs-steps"><li><strong>Preparo Fácil:</strong> Verifique o nível de água no reservatório traseiro. Levante a alavanca, insira a cápsula de sua preferência e feche-a completamente.</li><li><strong>Seu Café:</strong> Pressione qualquer botão para ligar a máquina. Quando as luzes pararem de piscar, selecione a medida desejada (Espresso ou Lungo) para iniciar a extração.</li><li><strong>Manutenção e Energia:</strong> O equipamento já está devidamente conectado à rede 220V da casa. A cápsula usada cai automaticamente no compartimento interno assim que a alavanca for levantada para o próximo uso.</li></ul>' },
    { id: 'lava-loucas', icon: 'utensils', title: 'Lava-louças', body: '<span class="bs-model-tag">Tramontina Inox</span><ul class="bs-steps"><li><strong>Organização:</strong> Remova o excesso de alimentos da louça antes de acomodá-la nos cestos, garantindo que as hélices girem livremente.</li><li><strong>Preparo:</strong> Insira o detergente específico para lava-louças e o líquido secante nos compartimentos indicados na parte interna da porta.</li><li><strong>Acionamento:</strong> Selecione o ciclo de lavagem desejado no painel de controle e feche a porta com firmeza para que a máquina inicie o processo automaticamente.</li></ul>' },
    { id: 'lava-seca', icon: 'washing-machine', title: 'Lava e Seca', body: '<ul class="bs-steps"><li><strong>Capacidade Ideal:</strong> Suporta até 11kg para ciclos exclusivos de lavagem e 7kg se for utilizar a função contínua de secagem.</li><li><strong>Preparo:</strong> Insira as roupas e adicione os produtos de limpeza (sabão e amaciante) nos compartimentos indicados na gaveta frontal.</li><li><strong>Ciclo Simples:</strong> Gire o seletor central para escolher o programa que melhor atende às suas peças e pressione o botão "Início/Pausa" para começar.</li></ul>' },
    { id: 'fogao', icon: 'cooking-pot', title: 'Fogão + Depurador', body: '<ul class="bs-steps"><li><strong>Uso do Cooktop:</strong> Pressione e gire o manípulo correspondente à boca que deseja utilizar para o acendimento automático. Ajuste a intensidade da chama conforme a necessidade do preparo.</li><li><strong>Controle da Coifa:</strong> Acesse o painel para acionar a iluminação de apoio e ajustar a velocidade de exaustão. O sistema Silent mantém o ambiente purificado com o mínimo de ruído.</li><li><strong>Dica de Conforto:</strong> Ligue a coifa instantes antes de começar a cozinhar e mantenha-a funcionando por mais alguns minutos após o término para garantir a renovação completa do ar.</li></ul>' },
    { id: 'filtro-agua', icon: 'filter', title: 'Filtro de Água', body: '<span class="bs-model-tag">Purificador Facilite · Consul</span><ul class="bs-steps"><li><strong>Gelada ou Natural:</strong> Pressione o botão correspondente no painel.</li><li><strong>Copo:</strong> Segure o botão pressionado e solte quando terminar.</li><li><strong>Jarra:</strong> Aperte até ouvir o "clique" — a água sairá sozinha. Aperte novamente para parar o fluxo.</li><li><strong>Mista:</strong> Pressione "Gelada" e "Natural" ao mesmo tempo.</li></ul>' }
  ],

  servicosAdicionais: [
    { title: 'Arrumação Complementar', price: 'R$ 250,00', desc: 'Turno extra de organização e arrumação interna (escopo idêntico à manutenção). Agendamento até as 15h do dia anterior.' },
    { title: 'Lavagem de Louça Extra', price: 'R$ 80,00', desc: 'Serviço gourmet para higienização e organização de grandes volumes de louça (solicitado quando exceder 50% dos utensílios da unidade).' },
    { title: 'Renovação Integral de Enxoval', price: 'R$ 180,00', desc: 'Substituição completa de roupas de cama e banho das 3 suítes ocupadas, independente do cronograma regular.' },
  ],

}
