const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from BotFather
const token = 'YOUR_BOT_TOKEN';

// Create a bot that uses polling
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "Hello! I'm your Telegram bot 🤖");
});

// Echo any message
bot.on('message', (msg) => {
    if (msg.text !== '/start') {
        bot.sendMessage(msg.chat.id, `You said: ${msg.text}`);
    }
});

// Example command
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "Available commands:\n/start\n/help");
});

// Error handling
bot.on('polling_error', (error) => {
    console.log(error);
});
