import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    let D8 (Random()*8) {
      message.reply(D8);
    } 
      
    
  },
  description: "Rolls a 8 sided dice",
};

export default command;