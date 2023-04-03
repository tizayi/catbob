import { describe, expect, test, jest } from "@jest/globals";
import { Message } from "discord.js";
import Based from "../src/commands/based";
import Ping from "../src/commands/ping";
import Hello from "../src/commands/hello";

describe("Test simple command reply handlers", () => {
  test("Test based command handler", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;

    Based.callback(message, "test");
    expect(message.reply).toHaveBeenCalledWith("Cringe");
  });

  test("Test ping command handler", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;
    Ping.callback(message);

    expect(message.reply).toHaveBeenCalledWith("pong");
  });

  test("Test hello command handler", async () => {
    const message: Message = {
      channel: { send: jest.fn() },
      reply: jest.fn(),
    } as unknown as Message;
    Hello.callback(message);

    expect(message.reply).toHaveBeenCalledWith("Welcome to robot hell.");
  });
});
