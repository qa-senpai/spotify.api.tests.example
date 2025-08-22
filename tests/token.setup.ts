import { test } from "../fixtures/fixtures";

test("get token", async ({ client }) => {
  await client.auth.getAndSaveToken();
});
