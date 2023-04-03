import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, ...args: string[]): void => {
    const fullString = args.join("");
    const basedValue = hashCode(fullString);
    console.log(basedValue);
    if (basedValue > 0) {
      message.reply("Cringe");
    } else {
      message.reply("Based");
    }
  },
  description: "Catbob is equiped with the latest in basedometer technology",
};

export default command;
