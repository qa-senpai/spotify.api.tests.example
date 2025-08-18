import { expect } from "@playwright/test";
import { test } from "./fixtures";

test("create playlist", async ({ request, tokens }) => {
  const { access_token } = tokens;

  const userIdResponse = await request.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const userId = (await userIdResponse.json()).id;

  const playlistName = `Test Playlist ${Date.now()}`;
  const playlistResponse = await request.post(
    `https://api.spotify.com/v1/users/${userId}/playlists`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      data: {
        name: playlistName,
        description: "A test playlist created by Playwright",
        public: false,
      },
    }
  );

  expect(playlistResponse.status()).toBe(201);
});
