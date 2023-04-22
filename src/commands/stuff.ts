import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const result = message.author.avatarURL();
    result ? message.reply(result) : "things";
  },
  description: "test data",
};

export default command;
