import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { AUTH_COOKIE_NAME, validateLogin } from "@/lib/auth-config";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!validateLogin(body)) {
    return NextResponse.json(
      { error: "Invalid email, password, or four-digit PIN." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: String(body.email).trim().toLowerCase(),
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 8,
  });

  return response;
}
