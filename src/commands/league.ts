import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";
import { rizzApi } from "../utils";

const command: Command = {
  callback: async (message: Message, args: string[]): Promise<void> => {
    axios
      .get("'https://americas.api.riotgames.com/riot/account/v1/accounts/me'")
      .then((response) => {
        message.reply(response);
      })
      .catch((err) => {
        console.log(`${err}`);
      });
  },
  description: "Catbob has w rizz.",
};

export default command;