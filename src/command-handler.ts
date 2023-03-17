import { Client, Message } from "discord.js";
import getFiles from "./get-files";
import { CommandType } from "./utils";

export default (client: Client) => {
  const commands: CommandType = {};
  const suffix = ".ts";
  const commandFiles = getFiles(`${__dirname}/commands`, suffix);
  console.log(commandFiles);

  for (const command of commandFiles) {
    let commandFile = require(command);
    if (commandFile.default) commandFile = commandFile.default;

    const split = command.replace(/\\/g, "/").split("/");
    const commandName = split[split.length - 1].replace(suffix, "");

    commands[commandName.toLowerCase()] = commandFile;
  }
  console.log(commands);

  client.on("messageCreate", (message: Message) => {
    if (message.author.id == "183691593562193920") {
      message.reply("Please laugh");
      return;
    }
    if (message.author.id == "226677575122944001") {
      message.reply("Urrrrm actually zoe is 4000 years old.");
      return;
    }
    if (message.author.id == "762019533845692426") {
      message.reply("Kirsty for the last time please stop");
      return;
    }

    if (message.author.bot || !message.content.startsWith("!")) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift()!.toLowerCase();

    if (!commands[commandName]) {
      return;
    }

    try {
      commands[commandName].callback(message, ...args);
    } catch (error) {
      console.log(error);
    }
  });
};
