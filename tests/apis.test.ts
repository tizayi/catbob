// Test if the apis use are still up and available

import { describe, expect, test, jest } from "@jest/globals";
import axios from "axios";
import {
  gameShowApi,
  complimentApi,
  animalApiLibrary,
  rizzApi,
  tarotApi,
} from "../src/utils";

describe("test that all apis are still up", () => {
  test("test game show api", async () => {
    axios.get(gameShowApi).catch((err) => {
      console.log(err);
      fail("game show api has issue ");
    });
  });

  test("test compliment api", async () => {
    axios.get(complimentApi).catch((err) => {
      console.log(err);
      fail("Compliment api has issue");
    });
  });

  test("test insult api", async () => {
    axios.get(complimentApi).catch((err) => {
      console.log(err);
      fail("insult api has issue");
    });
  });

  test("test rizz api", async () => {
    axios.get(rizzApi).catch((err) => {
      console.log(err);
      fail("rizz api has issue");
    });
  });

  test("test tarot api", async () => {
    axios.get(tarotApi).catch((err) => {
      console.log(err);
      fail("tarot api has issue");
    });
  });

  test("test animal apis", async () => {
    for (let [key, value] of Object.entries(animalApiLibrary)) {
      axios.get(value.api).catch((err) => {
        console.log(err);
        fail(`${key} api has issue check if it still exists`);
      });
    }
  });
});
