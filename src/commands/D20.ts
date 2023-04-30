import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    let D20 (Random()*20) {
      message.reply(D20);
    } 
      
    
  },
  description: "Rolls a 20 sided dice",
};

export default command;