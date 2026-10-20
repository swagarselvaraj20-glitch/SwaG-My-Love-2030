import test from "node:test";
import assert from "node:assert/strict";

import { APP_ALLOWED_USERS, DEFAULT_PIN, isAllowedUser, validateLogin } from "../lib/auth-config.js";

test("default PIN is set to 2030", () => {
  assert.equal(DEFAULT_PIN, 2030);
});

test("the app restricts access to two accounts", () => {
  assert.deepEqual(APP_ALLOWED_USERS, ["you@example.com", "fiancee@example.com"]);
  assert.equal(isAllowedUser("you@example.com"), true);
  assert.equal(isAllowedUser("friend@example.com"), false);
});

test("login validation accepts the expected protected credentials", () => {
  assert.equal(
    validateLogin({ email: "you@example.com", password: "change-me", pin: "2030" }),
    true
  );
  assert.equal(
    validateLogin({ email: "you@example.com", password: "wrong-password", pin: "2030" }),
    false
  );
});
