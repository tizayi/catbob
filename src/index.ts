import { Client, GatewayIntentBits } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(__dirname)
  let handler = require('./command-handler')
  if (handler.default) handler = handler.default

  handler(client)
})


client.login(process.env.TOKEN);
