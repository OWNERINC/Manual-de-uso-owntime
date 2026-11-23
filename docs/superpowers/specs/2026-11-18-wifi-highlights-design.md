# Destaques visuais do Wi-Fi

Data: 2026-11-18  
Status: direção e especificação aprovadas pelo usuário; implementado e validado localmente.

## Objetivo e escopo

Melhorar a hierarquia visual das instruções de Wi-Fi na página inicial e nas
quatro tipologias de `html-completo/`, sem redesenhar o restante do guia.
A direção aprovada combina rede em destaque, blocos por acomodação, exemplos
grandes e uma orientação de senha com destaque próprio.

Não alterar cardápios, metragens, contatos, horários ou outras instruções.
Não publicar sem nova autorização.

## Informações que devem permanecer

- Rede: `OwnHospedes`.
- Na tela de login, selecionar **Sou hóspede**.
- Casas: login com `0` + número da casa; Casa 13 usa `013`.
- Apartamentos: número com hífen antes da letra; Apartamento 101A usa `101-A`.
- Senha para casas e apartamentos: último sobrenome.
- Conferir os dados antes de entrar e procurar o Time de Anfitriões se precisar.
- Manter as informações de cobertura da rede e o contato existente nas unidades.

Não apresentar “último sobrenome” como uma senha fixa para copiar.
Não inventar endereço do portal, QR code ou conexão automática.

## Composição

1. **Rede:** faixa principal com ícone discreto, rótulo legível e `OwnHospedes`
   em tipografia maior. Deve aparecer antes de explicações secundárias.
2. **Primeiro passo:** frase curta com **Sou hóspede** visualmente marcado,
   sem aparência de botão ou controle interativo.
3. **Casas e apartamentos:** dois blocos verticais independentes. Cada bloco
   contém ícone, título, regra de login e exemplo. `013` e `101-A` ganham peso,
   tamanho e contraste. O exemplo não deve parecer outro cartão dentro do bloco.
4. **Senha:** destaque próprio, compartilhado pelos dois tipos de acomodação,
   com ícone de chave, “Último sobrenome” e indicação explícita de que vale
   para casas e apartamentos. Substitui a repetição da senha em cada bloco.
5. **Suporte:** texto secundário e orientações finais abaixo da informação
   essencial. Preservar o botão atual de contato das unidades.

Preservar o cabeçalho, o botão de fechar, a rolagem e o rodapé dos painéis.
Não adicionar abas, animações, etapas interativas ou seleção de acomodação.

## Linguagem visual e acessibilidade

Usar os tokens existentes: fundo `#111111`, superfície `#1A1A1A`, texto branco,
verde-pinheiro e dourado `#C9A96E`. Verde e dourado sinalizam hierarquia, não
substituem o contraste necessário dos textos de leitura.

Manter Roobert, cantos discretos e ícones Lucide já utilizados no projeto.
Não usar degradês, brilhos, grandes sombras ou novos recursos externos.
As regras continuam legíveis sem depender da cor.

O conteúdo deve caber horizontalmente em telas de 320–390 px e poder ser
rolado dentro do painel. Não encurtar ou truncar a rede e os códigos.
Manter seleção de texto, navegação por teclado e controles acessíveis.

## Implementação prevista

Preservar a arquitetura estática existente:

- `data-hub.js`: dados e marcação das instruções do Wi-Fi da home.
- `main-hub.js`: composição do painel da home.
- `data-common.js`: conteúdo de Conectividade compartilhado pelas unidades.
- `bottom-sheet.css`: estilos novos restritos a classes específicas do Wi-Fi.

Manter a marcação das instruções equivalente nos dois arquivos de dados e
cobrir essa equivalência no teste existente, sem introduzir nova dependência
ou refatorar a arquitetura de dados nesta alteração visual.

Atualizar os hashes de CSS e JavaScript nos HTMLs consumidores após as edições.
Preservar todas as alterações anteriores ainda não commitadas.

## Validação e critérios de aceite

- Testes Node do Wi-Fi verificam conteúdo, exemplos, senha compartilhada,
  ausência de senha fixa e hashes atuais.
- Teste de navegador verifica home e quatro tipologias: abertura, fechamento,
  presença dos destaques e ausência de transbordamento horizontal.
- Revisão visual em celular e desktop confere hierarquia, contraste e rolagem.
- Testes de metragens, empréstimos e descontos continuam passando.
- Auditoria de cache e `git diff --check` passam.
- A alteração fica local até autorização explícita de publicação.
