# Medication Reminder Bot

## Problema

Quando um medicamento precisa ser tomado em um horário específico, esquecer por alguns minutos ou se distrair durante o dia já pode atrapalhar a rotina.

## Por que fiz este projeto

A ideia por trás do projeto foi ajudar a minha namorada a lembrar de tomar o remédio **no horário exato**, criando um bot simples que envia lembretes automaticamente pelo WhatsApp.

## Como funciona

O **bot** se conecta ao **WhatsApp Web** e utiliza `node-cron` para agendar o envio de mensagens de lembrete ao número configurado, sempre no horário definido.

Para isso, foi usado a biblioteca `whatsapp-web.js`, que permite interagir com o WhatsApp Web. Ela utiliza o `Puppeteer` para acessar funcionalidades internas da aplicação web do whatsApp e possibilitando o envio das mensagens.

Já o agendamento dos lembretes é feito com a biblioteca `node-cron`, no qual é responsável por executar a tarefa automaticamente no horário estipulado.

Tanto o número de destino quanto o fuso horário são definidos atráves das variaveis de ambiente no arquivo `.env`.

## Fluxo do sistema

1. O projeto inicia o cliente do WhatsApp.
2. No terminal exibe o **QR Code** para autenticação.
3. Após a conexão, o evento `ready` é disparado.
4. A rotina de lembrete é registrada com `node-cron`.
5. No horário agendado, o sistema monta o envio usando o número configurado.
6. O serviço do WhatsApp valida o número e envia a mensagem automaticamente.

## Repositórios das bibliotecas utilizadas

- https://github.com/pedroslopez/whatsapp-web.js/
- https://github.com/node-cron/node-cron
