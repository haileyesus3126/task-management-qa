const { test, expect } = require("@playwright/test");

test.describe("User Permissions", () => {
  test("AUTO-004 - normal user cannot access admin users page", async ({ page }) => {
    await page.goto("/");

    await page.getByLabel("Email").fill(process.env.QA_USER_EMAIL);
    await page.getByLabel("Password").fill(process.env.QA_USER_PASSWORD);

    await page
      .getByRole("button", { name: /login|sign in/i })
      .click();

    await expect(
      page.getByText("Dashboard Overview")
    ).toBeVisible({ timeout: 10000 });

    // Try to go directly to an admin-only page
    await page.goto("/users");

    // Normal USER should not gain access.
    // Depending on your app, it may redirect or show an access denied message.
    await expect(
      page.getByText(/access denied|unauthorized|forbidden/i)
    ).toBeVisible({ timeout: 10000 });
  });
});