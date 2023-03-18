import { describe, expect, test, jest } from "@jest/globals";
import { Message } from "discord.js";
import axios from "axios";
import Rizz from "../src/commands/rizz";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test rizz handler", () => {
  test("Test test rizz api call", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;

    const pickupLine = {
      data: { pickup: "Did it test when you fell from test" },
    };

    mockedAxios.get.mockResolvedValue(pickupLine);

    Rizz.callback(message, "test");
    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://vinuxd.vercel.app/api/pickup"
    );
  });
});
