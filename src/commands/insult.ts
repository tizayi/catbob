import { Message } from "discord.js";
import { Command, getApiData } from "../utils";

export interface InsultData {
  number: number;
  language: string;
  insult: string;
  created: string;
  shown: number;
  createdby: string;
  active: string;
  comment: string;
}

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    const data = await getApiData<InsultData>(
      "https://evilinsult.com/generate_insult.php?lang=en&type=json"
    );
    message.reply(`Hi ${args.join(",")} , ${data.insult}`);
  },
  description: "Catbob is in his jocker arc",
};

export default command;
