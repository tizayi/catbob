import { describe, expect, test, jest } from "@jest/globals";
import { Message } from "discord.js";
import axios from "axios";
import Insult from "../src/commands/insult";
import Rizz from "../src/commands/rizz";
import Compliment from "../src/commands/compliment";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test api handler", () => {
  test("Test test rizz api call", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;

    const pickupLine = {
      data: { pickup: "Did it test when you fell from test" },
    };

    mockedAxios.get.mockResolvedValue(pickupLine);

    Rizz.callback(message, ["test"]);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://vinuxd.vercel.app/api/pickup"
    );
  });

  test("Test insult api call", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;

    const insult = {
      data: { insult: "Did it test when you fell from test" },
    };

    mockedAxios.get.mockResolvedValue(insult);

    Insult.callback(message, ["test"]);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://evilinsult.com/generate_insult.php?lang=en&type=json"
    );
  });

  test("Test compliment api call", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;

    const complimentData = {
      data: { compliment: "Did it test when you fell from test" },
    };

    mockedAxios.get.mockResolvedValue(complimentData);

    Compliment.callback(message, ["test"]);
    expect(mockedAxios.get).toHaveBeenCalledWith("https://complimentr.com/api");
  });
});
