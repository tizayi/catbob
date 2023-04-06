import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    message.reply("Welcome to robot hell.");
  },
  description: "Catbob say hello",
};

export default command;
