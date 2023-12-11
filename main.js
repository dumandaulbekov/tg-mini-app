import { Telegraf, Markup } from 'telegraf';
import { message } from 'telegraf/filters';

const token = '6926090988:AAEhS7_fVKJj2NsK6K5kG8ScVESHyxb0cjM';
const webAppUrl = 'https://telegram-mini-app.web.app';

const bot = new Telegraf(token);

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp(
        'Отправить сообщение',
        `${webAppUrl}/feedback`
      ),
    ])
  );
});

bot.on(message('web_app_data'), async (ctx) => {
  const data = ctx.webAppData.data.json();

  console.log('data', data);
  ctx.reply(`Ваще сообщение: ${data}` ?? 'empty message');
});

bot.launch();
