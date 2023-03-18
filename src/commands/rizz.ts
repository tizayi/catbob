import { Message } from "discord.js";
import axios, { Axios, AxiosResponse } from "axios";

interface PickupLine {
    pickup: string
}

export default {
  callback: async (message: Message, ...args: string[]): Promise<void> => {
    console.log(args);
    const pickup = await getRizz();
    message.reply(`Hi ${args.join(",")} . ${pickup}`);
  },
};

const getRizz = async (): Promise<string> => {
  const response: AxiosResponse<PickupLine, any> = await axios.get("https://vinuxd.vercel.app/api/pickup");
  return response.data.pickup;
};
