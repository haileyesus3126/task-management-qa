const { test, expect } = require("@playwright/test");

test.describe("Task Permissions", () => {
  test("AUTO-005 - normal user cannot access create task page", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Email").fill(process.env.QA_USER_EMAIL);
    await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD);

    await page
      .getByRole("button", { name: /login|sign in/i })
      .click();

    await expect(
      page.getByText("Dashboard Overview")
    ).toBeVisible({ timeout: 10000 });

    await page.goto("/tasks/create");

    await expect(
      page.getByText(/access denied|unauthorized|forbidden/i)
    ).toBeVisible({ timeout: 10000 });
  });
});