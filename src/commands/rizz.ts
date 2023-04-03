import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    axios
      .get("https://vinuxd.vercel.app/api/pickup")
      .then((response) => {
        message.reply(`Hi ${args.join(" ")} , ${response.data.pickup}`);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  },
  description: "Catbob has w rizz.",
};

export default command;
