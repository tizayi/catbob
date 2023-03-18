import { Message } from "discord.js";

export default {
  callback: (message: Message, ...args: string[]): void => {
    const fullString = args.join("");
    const basedValue = hashCode(fullString);
    if (basedValue > 0) {
      message.reply("Not based");
    } else {
      message.reply("based");
    }
  },
};

const hashCode = (input: string): number => {
  return input.split("").reduce((a: number, b: string) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
};
