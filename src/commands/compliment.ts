import { Message } from "discord.js";
import { getApiData } from "../utils";

export default {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    const data = await getApiData<{ compliment: string }>(
      "https://complimentr.com/api"
    );
    message.reply(`Hi ${args.join(",")} , ${data.compliment}`);
  },
};
