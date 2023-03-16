import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from 'dotenv'
dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', message => {
    if(message.content === 'ping'){
        message.reply('pong')
    }
    if(message.content === 'hello'){
        message.reply('Welcome to robot hell.')
    }
})

client.login(process.env.TOKEN)