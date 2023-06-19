import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";
import { complimentApi } from "../utils";

const command: Command = {
  callback: async (message: Message, args: string[]) => {
    axios
      .get(complimentApi)
      .then((response) => {
        message.reply(`Hi ${args.join(" ")} , ${response.data.compliment}`);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  description: "Catbob can compliment people ",
};

export default command;
