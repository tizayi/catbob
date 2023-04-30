import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    let D10 (Random()*10) {
      message.reply(D10);
    } 
      
    
  },
  description: "Rolls a 10 sided dice",
};

export default command;