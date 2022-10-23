
const express = require('express')

const app = express()

const PORT = 5050;


app.get('/', (req,res)=>{
    res.json({
        status: 200,
        message: "index.jss"
    })
}
)

app.listen(PORT, ()=>{
    console.log('server start');
})


const token = '5356985784:AAHC7s1a4dNW9F7EeQsCAtSksgj2BwPU6vs';

const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(token, {polling: true});

const webApiUrl = 'https://xn----7sb6agkabkedhjf1k.xn--p1ai/'


bot.on('message', async (msg) => {
  const chatId = msg.chat.id;

  const text = msg.text;

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
  bot.sendMessage(chatId, 'Received your message');
});