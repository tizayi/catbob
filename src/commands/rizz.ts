import { Message } from "discord.js";
import { getApiData } from "../utils";

export default {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    const data = await getApiData<{ pickup: string }>(
      "https://vinuxd.vercel.app/api/pickup"
    );
    message.reply(`Hi ${args.join(",")} , ${data.pickup}`);
  },
  description: "Catbob has w rizz.",
};
