import axios from "axios";
import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: async (message: Message, args: string[]): Promise<void> => {
    axios
      .get("https://tarot-api.onrender.com/")
      .then((response) => {
        message.reply(`Hi ${args.join(" ")} , ${response.data.pickup}`);
      })
      .catch((err) => {
        console.log(`${err}`);
      });