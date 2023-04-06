import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    if (basedValue > 0) {
      message.reply("Cringe");
    } else {
      message.reply("Based");
    }
  },
  description: "Catbob is equiped with the latest in basedometer technology",
};

export default command;
