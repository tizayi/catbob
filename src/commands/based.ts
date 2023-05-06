import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]) => {
    const basedValue = hashCode(args.join(""));
    if (basedValue > 0) {
      message.reply("cringe");
    } else {
      message.reply("based");
    }
  },
  description: "Catbob is equiped with the latest in basedometer technology",
};

export default command;
