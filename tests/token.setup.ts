import { test } from "@playwright/test";
import { Auth } from "../apps/controllers/Auth/Auth";

test("get token", async ({ request }) => {
  await new Auth(request).getAndSaveToken();
});
