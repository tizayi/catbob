import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, ...args: string[]): void => {
    console.log(args);
    message.reply("pong");
  },
  description: "Just a test to see if catbob is live",
};

export default command;
