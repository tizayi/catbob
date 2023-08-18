import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const result = message.author.avatarURL();
    result ? message.reply(result) : "things";
  },
  description: "use it and find out",
};

export default command;
