import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, ...args: string[]): void => {
    const fullString = args.join("");
    const basedValue = hashCode(fullString);
    console.log(basedValue);
    if (basedValue > 0) {
      message.reply("Not based");
    } else {
      message.reply("based");
    }
  },
  description: "Catbob is equiped with the latest in basedometer technology",
};

export default command;

const hashCode = (input: string): number => {
  return input.split("").reduce((a: number, b: string): number => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};
