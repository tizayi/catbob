import { Message } from "discord.js";
import { Command } from "../utils";

const command: Command = {
    callback: (message: Message, args: string[]): void => {
      getQuestions(message, args);
    },
 
  console.log ("dumb")
