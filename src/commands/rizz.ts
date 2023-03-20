import { Message } from "discord.js";
import { Command, getApiData } from "../utils";

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    const data = await getApiData<{ pickup: string }>(
      "https://vinuxd.vercel.app/api/pickup"
    );
    message.reply(`Hi ${args.join(",")} , ${data.pickup}`);
  },
  description: "Catbob has w rizz.",
};

export default command;
