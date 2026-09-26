const { test, expect } = require("@playwright/test");

test("AUTO-008 - empty comment is rejected", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Email").fill(process.env.QA_USER_EMAIL);
  await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD);

  await page
    .getByRole("button", { name: /login|sign in/i })
    .click();

  await page.getByRole("link", { name: /tasks/i }).click();

  await page
    .getByRole("link", { name: "QA User Three Test" })
    .click();

  await page
    .getByRole("button", { name: /add comment|comment/i })
    .click();

  await expect(
    page.getByText(/comment cannot be empty/i)
  ).toBeVisible();
});

test("AUTO-009 - valid comment can be added", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Email").fill(process.env.QA_USER_EMAIL);
  await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD);

  await page
    .getByRole("button", { name: /login|sign in/i })
    .click();

  await page.getByRole("link", { name: /tasks/i }).click();

  await page
    .getByRole("link", { name: "QA User Three Test" })
    .click();

  const comment = `Automation comment ${Date.now()}`;

  await page.getByPlaceholder(/comment/i).fill(comment);

  await page
    .getByRole("button", { name: /add comment|comment/i })
    .click();

  await expect(
    page.getByText(comment)
  ).toBeVisible();
});