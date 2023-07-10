import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    if (!args[0] || !args[1]) {
      message.reply(
        "You need the number of dice to roll and the size of the dice. \n !dice <size> <number>"
      );
      return;
    }

    const number = parseInt(args[0]);
    const size = parseInt(args[1]);
    if (!number && !size) {
      return;
    }
    let results: number[] = [];
    for (let i = 0; i < number; i++) {
      const result = Math.floor(Math.random() * size) + 1;
      results.push(result);
    }
    message.reply(results.toString());
  },
  description: "Catbob rolls a dice",
};

export default command;
