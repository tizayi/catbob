import { Message } from "discord.js";

export default {
    callback: (message: Message, ...args: string[]): void => {
        console.log(args);
        message.reply('Welcome to robot hell.');
    }
}