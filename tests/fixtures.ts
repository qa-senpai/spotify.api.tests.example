import { test as base, expect } from "@playwright/test";
import fs from "fs";

type Fixtures = {
  tokens: SpotifyTokenResponse;
};

interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export const test = base.extend<Fixtures>({
  tokens: async ({}, use) => {
    const tokens: SpotifyTokenResponse = JSON.parse(
      fs.readFileSync("tokens.json", {
        encoding: "utf8",
      })
    );

    await use(tokens);
  },
});
