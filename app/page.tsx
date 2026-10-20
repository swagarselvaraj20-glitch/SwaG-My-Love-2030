"use client";

import { FormEvent, useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("you@example.com");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("2030");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, pin }),
    });

    const data = await response.json();
    setIsSubmitting(false);

    if (!response.ok) {
      setError(data.error || "Your credentials could not be verified.");
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="page-shell">
      <section className="card">
        <p className="eyebrow">Private access</p>
        <h1>SwaG My Love 2030</h1>
        <p className="lead">
          This space is limited to the two people in the relationship and is protected by a four-digit PIN.
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email address
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>

          <label>
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </label>

          <label>
            4-digit PIN
            <input type="password" inputMode="numeric" maxLength={4} value={pin} onChange={(event) => setPin(event.target.value)} required />
          </label>

          {error ? <p className="error">{error}</p> : null}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Enter private space"}
          </button>
        </form>
      </section>
    </main>
  );
}
