const { test, expect } = require("@playwright/test");

test("AUTO-007 - assigned user can update progress", async ({ page }) => {
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

  const progressInput = page.getByLabel(/progress/i);

  await progressInput.fill("50");

  await page
    .getByRole("button", { name: /update progress/i })
    .click();

  await expect(
    page.getByText(/50% completed/i)
  ).toBeVisible();
});