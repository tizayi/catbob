import BasedHandler from "../src/commands/based";

/** @jest-environment jsdom */
import { describe, expect, test, jest } from "@jest/globals";
import { Message } from "discord.js";
import Based from "../src/commands/based"



describe("Tests index.ts", () => {
    test("Call message handler", async () => {
        const message: Message = ({
            channel: {send: jest.fn()},
            reply: jest.fn()
        } as unknown) as Message;

        Based.callback(message, "test");
        expect(message.reply).toHaveBeenCalledWith("Not based") 
    })
})