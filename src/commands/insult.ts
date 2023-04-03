import { Message } from "discord.js";
import { Command } from "../utils";
import axios from "axios";

const command: Command = {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    axios
      .get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
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
