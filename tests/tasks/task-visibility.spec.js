const { test, expect } = require("@playwright/test");

test("AUTO-006 - user sees only assigned tasks", async ({ page }) => {
  await page.goto("/");

  await page.getByLabel("Email").fill(process.env.QA_USER_EMAIL);
  await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD);

  await page
    .getByRole("button", { name: /login|sign in/i })
    .click();

  await page.getByRole("link", { name: /tasks/i }).click();

  await expect(
    page.getByRole("link", { name: "QA User Three Test" })
  ).toBeVisible();

  await expect(
    page.getByRole("link", { name: "QA Testing Task" })
  ).not.toBeVisible();

  await expect(
    page.getByRole("link", { name: "QA Rejection Test" })
  ).not.toBeVisible();
});