const { test, expect } = require("@playwright/test");

const API =
  "https://task-management-app-backend-fmye.onrender.com/api";

test("AUTO-010 - protected users API rejects missing token", async ({ request }) => {
  const response = await request.get(`${API}/users`);

  expect(response.status()).toBe(401);
});

test("AUTO-011 - protected tasks API rejects fake token", async ({ request }) => {
  const response = await request.get(`${API}/tasks`, {
    headers: {
      Authorization: "Bearer this-is-not-a-valid-token",
    },
  });

  expect(response.status()).toBe(401);
});