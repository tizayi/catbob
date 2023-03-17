import { Message } from "discord.js";

export default {callback: (message: Message): void => {
    if (message.author.id === "183691593562193920") {
      message.reply("based");
    } else {
      message.reply("Not based");
    }
  }}