import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    let D4 (Random()*4) {
      message.reply(D4);
    } 
      
    
  },
  description: "Rolls a 4 sided dice",
};

export default command;