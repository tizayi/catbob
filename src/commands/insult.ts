import { Message } from "discord.js";
import { Command } from "../utils";
import axios from "axios";
import { insultApi } from "../utils";

const command: Command = {
  callback: async (message: Message, args: string[]): Promise<void> => {
    axios
      .get(insultApi)
      .then((response) => {
        message.reply(`Hi ${args.join(" ")} , ${response.data.insult}`);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  },
  description: "Catbob is in his jocker arc",
};

export default command;
