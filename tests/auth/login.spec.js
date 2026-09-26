const { test, expect } = require("@playwright/test");

test.describe("Authentication", () => {

  // AUTO-001
  test("AUTO-001 - valid user can login", async ({ page }) => {
    const email = process.env.QA_USER_EMAIL;
    const password = process.env.QA_USER_PASSWORD;

    if (!email || !password) {
      throw new Error(
        "QA_USER_EMAIL or QA_USER_PASSWORD is missing from .env"
      );
    }

    await page.goto("/");

    await page.getByLabel("Email").fill(email);
    await page.getByLabel("Password").fill(password);

    await page
      .getByRole("button", { name: /login|sign in/i })
      .click();

    await expect(
      page.getByText("Dashboard Overview")
    ).toBeVisible({ timeout: 10000 });
  });


  // AUTO-002
  test("AUTO-002 - invalid password should fail login", async ({ page }) => {
  const email = process.env.QA_USER_EMAIL;

  if (!email) {
    throw new Error("QA_USER_EMAIL is missing from .env");
  }

  await page.goto("/");

  await page.getByLabel("Email").fill(email);
  await page.getByLabel("Password").fill("wrongpassword123");

  const responsePromise = page.waitForResponse(
    response =>
      response.url().includes("/api/auth/login") &&
      response.request().method() === "POST"
  );

  await page
    .getByRole("button", { name: /login|sign in/i })
    .click();

  const response = await responsePromise;

  expect(response.status()).toBe(401);

  await expect(page.getByLabel("Email")).toBeVisible();
  await expect(page.getByLabel("Password")).toBeVisible();
});
  test("AUTO-003 - user can logout", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Email").fill(process.env.QA_USER_EMAIL);
  await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD);

  await page
    .getByRole("button", { name: /login|sign in/i })
    .click();

  await expect(
    page.getByText("Dashboard Overview")
  ).toBeVisible({ timeout: 10000 });

  await page.getByRole("button", { name: /logout/i }).click();

  await expect(
    page.getByLabel("Email")
  ).toBeVisible({ timeout: 10000 });
});

});