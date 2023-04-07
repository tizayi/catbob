import { Client, GatewayIntentBits, Partials } from "discord.js";
import * as dotenv from "dotenv";
dotenv.config();

const client: Client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  console.log(__dirname);
  let handler = require("./command-handler");
  if (handler.default) handler = handler.default;

  handler(client);
});

client.login(process.env.TOKEN);
