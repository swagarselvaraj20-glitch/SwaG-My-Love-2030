export const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME || "swag-love-session";
export const DEFAULT_PIN = Number(process.env.APP_DEFAULT_PIN || 2030);
export const APP_ALLOWED_USERS = (process.env.APP_ALLOWED_USERS || "you@example.com,fiancee@example.com")
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

export function isAllowedUser(email) {
  return APP_ALLOWED_USERS.includes(String(email).trim().toLowerCase());
}

export function validateLogin({ email, password, pin }) {
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const normalizedPassword = String(password || "");
  const normalizedPin = String(pin || "");

  const expectedPassword = process.env.APP_PASSWORD || "change-me";
  if (!isAllowedUser(normalizedEmail)) {
    return false;
  }

  if (normalizedPassword !== expectedPassword) {
    return false;
  }

  return Number(normalizedPin) === DEFAULT_PIN;
}
