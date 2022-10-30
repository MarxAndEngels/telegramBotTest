const token = '5356985784:AAHC7s1a4dNW9F7EeQsCAtSksgj2BwPU6vs';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

const webApiUrl = 'https://xn----7sb6agkabkedhjf1k.xn--p1ai/'


const phone = '+7(495)260-13-04';
const address = 'г. Москва, Варшавское шоссе, д. 152А';
const dealer_title = 'Пульсар Моторс'

let flag = 1;


bot.on('callback_query', async (query) => {
    const id = query.message.chat.id;
    if(query.data == 'phone'){
        bot.sendMessage(id, phone );
    }
    if(query.data == 'address'){
        bot.sendMessage(id, address);
    }
    flag = 0;
  
  });


  if(flag != 0){
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const text = msg.text;

  let md = `
     *Что может делать телеграм бот?*
     1.Открывайте приложение
     2.Выбирайте автомобиль
     3.Оставляйте заявку и в ближайшее время с вами свяжется менеджер автосалона "${dealer_title}"
  `

     await bot.sendMessage(chatId,md, {
        reply_markup: {
            keyboard: [
                [{ text: 'Выбрать автомобиль',web_app: {url: webApiUrl}}]
            ],
        },
        parse_mode: 'Markdown'
    })
     await bot.sendMessage(chatId,`Оставить заявку на автомобиль`, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: 'Выбрать автомобиль', web_app: {url: webApiUrl}},
                ],
                [
                    { text: 'Узнать телефон автосалона', callback_data: 'phone'},
                    { text: 'Узнать адрес автосалона', callback_data: 'address'},
                ]
            ] 
        },
        
    })
    //  await bot.sendMessage(chatId,`Контактная информация автосалона "${dealer_title}"`, {
    //     reply_markup: {
    //         inline_keyboard: [
    //             [
    //                 { text: 'Узнать телефон автосалона', callback_data: 'phone'},
    //                 { text: 'Узнать адрес автосалона', callback_data: 'address'},
    //             ]
    //         ] 
    //     }
    // })
//   bot.sendMessage(chatId, 'Received your message');
});
  }

