const token = '5356985784:AAHC7s1a4dNW9F7EeQsCAtSksgj2BwPU6vs';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

const webApiUrl = 'https://proxy-cars.ru'


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const text = msg.text;

  if(text === '/start'){
     await bot.sendMessage(chatId,'Добро пожаловать', {
        reply_markup: {
            keyboard: [
                [{ text: 'Открыть приложение',web_app: {url: webApiUrl}}]
            ] 
        }
    })
     await bot.sendMessage(chatId,'Ниже появится кнопка, заполните форму', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть приложение', web_app: {url: webApiUrl}}]
            ] 
        }
    })
  }
//   bot.sendMessage(chatId, 'Received your message');
});