import { Client, Message } from "discord.js";
import getFiles from "./get-files";
import { CommandObject } from "./utils";

export default (client: Client) => {
  const suffix = ".ts";
  const commandFiles = getFiles(`${__dirname}/commands`, suffix);
  console.log(commandFiles);

  const commands = getCommandNames(commandFiles, suffix);
  console.log(commands);

  client.on("messageCreate", (message: Message) => {
    if (message.author.bot || !message.content.startsWith("!")) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift()!.toLowerCase();

    if (!commands[commandName]) {
      return;
    }

    try {
      commands[commandName].callback(message, args);
      console.log(
        `[User: ${message.author.username}, Command: ${commandName}, args: ${args}]`
      );
    } catch (error) {
      console.log(error);
    }
  });
};

export const getCommandNames = (
  commandFiles: string[],
  suffix: string
): CommandObject => {
  const commands: CommandObject = {};
  for (const command of commandFiles) {
    let commandFile = require(command);
    if (commandFile.default) commandFile = commandFile.default;

    const split = command.replace(/\\/g, "/").split("/");
    const commandName = split[split.length - 1].replace(suffix, "");

    commands[commandName.toLowerCase()] = commandFile;
  }
  return commands;
};
