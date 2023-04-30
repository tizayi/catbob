import { Message } from "discord.js";
import { Command, hashCode } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const basedValue = hashCode(args.join(""));
    let D12 (Random()*12) {
      message.reply(D12);
    } 
      
    
  },
  description: "Rolls a 12 sided dice",
};

export default command;