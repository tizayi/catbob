import { Message } from "discord.js";
import getFiles from "../get-files";
import { getCommandNames } from "../command-handler";
import { Command } from "../utils";

const command: Command = {
  callback: (message: Message, args: string[]): void => {
    const commandFiles = getFiles(`${__dirname}`, ".ts");
    const commandObject = getCommandNames(commandFiles, ".ts");
    const wrapper = "```\n";
    const infoStringArray = Object.entries(commandObject).map((value) => {
      const [name, command] = value;
      return `${name}: ( !${name} ) \n - ${command.description} \n\n`;
    });
    const intro =
      "Hi Iam catbob :smiley: and this is what I can do :point_down: \n ";
    message.reply(intro + wrapper + infoStringArray.join("") + wrapper);
  },
  description: "Give command description",
};

export default command;
