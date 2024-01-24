const axios = require('axios')
require('dotenv').config()
const Slack = require('@slack/bolt')
const { Message } = require('../models/message')

const slack = new Slack.App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
});

const telegramApiUrl = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/`;

const AlertSlack = async (message)=>{
    try {
        
        await slack.client.chat.postMessage({
            token: process.env.SLACK_BOT_TOKEN,
            channel: process.env.SLACK_CHANNEL,
            text: message,
        });
    } catch (error) {
        console.error('Error Slack sending message:', error.response ? error.response.data : error.message);
    }
}
const AlertTelegram = async (message)=>{
    try {
        await axios.post(`${telegramApiUrl}sendMessage`, {
            chat_id: process.env.CHAT_ID,
            text: message,
        });
    } catch (error) {
        console.error('Error Telegram sending message:', error.response ? error.response.data : error.message);
        
    }
}
module.exports = {
    AlertSlack,
    AlertTelegram
}
