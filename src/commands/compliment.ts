import { Message } from "discord.js";
import { Command, getApiData } from "../utils";

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    const data = await getApiData<{ compliment: string }>(
      "https://complimentr.com/api"
    );
    message.reply(`Hi ${args.join(",")} , ${data.compliment}`);
  },
  description: "Catbob can compliment people ",
};

export default command;
