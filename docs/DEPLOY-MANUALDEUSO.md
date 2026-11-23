# Publicação do manual oficial

## Destinos distintos

- **Manual oficial:** https://manualdeuso.owntime.com.br — servidor da OWNERINC.
- **Firebase v2:** https://owntime-diretorio-v2.web.app — hospedagem separada.

Publicar no Firebase não atualiza o domínio oficial. Não alterar DNS nem
configurações de outros aplicativos para publicar o manual.

## Origem da produção

- Repositório: `https://github.com/OWNERINC/Manual-de-uso-owntime`.
- Branch: `design/hub-clear`.
- Conteúdo: `html-completo/`.
- Acesso administrativo existente: alias SSH `Ownerinc`.
- Serviço: `ownerinc-manualdeuso-deploy.service`.
- Timer: `ownerinc-manualdeuso-deploy.timer`.
- Script: `/opt/ownerinc/scripts/deploy-manualdeuso-from-github.sh`.
- Checkout dedicado: `/opt/ownerinc/apps/manualdeuso/source/repo`.
- Releases: `/opt/ownerinc/apps/manualdeuso/releases`.
- Link da release atual: `/opt/ownerinc/apps/manualdeuso/current`.
- Arquivos servidos: `/root/data/nginx/manualdeuso_owntime_app`,
  montados no container `root-app-1` em `/data/nginx/manualdeuso_owntime_app`.

Não copiar, exibir ou modificar chaves SSH. O serviço já possui sua própria
configuração de acesso ao GitHub.

## Antes da publicação

Obter autorização explícita do usuário e conferir o destino solicitado.
Preservar alterações locais anteriores. Ler o status Git e revisar todos os
arquivos antes de criar um commit com o conteúdo que será publicado.

Executar:

```powershell
node html-completo/tests/wifi.cjs
node html-completo/tests/unit-areas.cjs
node html-completo/tests/material-loans.cjs
node html-completo/tests/discount.cjs
python scripts/cache_bust_static_assets.py --root html-completo --check
git diff --check
```

Consultar a branch remota de produção. A atualização deve ser fast-forward;
não usar force push nem substituir trabalho remoto desconhecido.

O checkout do servidor precisa estar limpo. Conferir como seu proprietário:

```powershell
ssh -o BatchMode=yes Ownerinc "sudo -u deploy git -C /opt/ownerinc/apps/manualdeuso/source/repo status --porcelain"
```

Se houver alterações, interromper a publicação e investigar. O script de
produção sincroniza esse checkout dedicado com a branch remota.

## Publicação

Com o commit revisado e aprovado, enviar a branch de trabalho ao seu remoto
e avançar a branch `design/hub-clear` no remoto `empresa`, sem force push.
O timer detecta a atualização e executa o serviço. Para iniciar a publicação
imediatamente pelo mesmo fluxo:

```powershell
ssh -o BatchMode=yes Ownerinc "systemctl start ownerinc-manualdeuso-deploy.service"
```

O fluxo gera uma release, verifica versões de assets e produz um recibo.
Depois copia o conteúdo para uma área de preparação, preserva a versão
anterior, troca o diretório servido e valida/recarrega o Nginx.

Não reportar conclusão apenas porque o push ou o serviço terminou.

## Verificação

Consultar o recibo público:

`https://manualdeuso.owntime.com.br/.well-known/manualdeuso-deploy.json`

Confirmar que:

- `commit` corresponde ao commit enviado à branch de produção;
- `branch` é `design/hub-clear`;
- HTMLs e versões dos assets correspondem à release;
- páginas do guia, imagens dos cardápios e instruções atualizadas respondem
  corretamente pelo domínio oficial;
- `https://manualdeuso.owntime.com.br/healthz` responde `200`.

Se a publicação falhar, preservar a release anterior. Examinar os logs
somente do serviço do manual e a release atual antes de repetir qualquer
operação ou realizar rollback.
