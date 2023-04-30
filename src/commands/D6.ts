import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    let D6 (Random()*6) {
      message.reply(D6);
    } 
      
    
  },
  description: "Rolls a 6 sided dice",
};

export default command;