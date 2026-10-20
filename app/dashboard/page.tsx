import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AUTH_COOKIE_NAME } from "@/lib/auth-config";

export default function DashboardPage() {
  const cookieStore = cookies();
  const session = cookieStore.get(AUTH_COOKIE_NAME);

  if (!session?.value) {
    redirect("/");
  }

  return (
    <main className="page-shell">
      <section className="card dashboard-card">
        <p className="eyebrow">Protected dashboard</p>
        <h1>Our private memories</h1>
        <p className="lead">
          This dashboard stays behind server-side authentication and private storage controls.
        </p>

        <div className="grid">
          <article>
            <h2>Relationship status</h2>
            <p>Two-account access only. Secure PIN and server-side checks remain enforced.</p>
          </article>
          <article>
            <h2>Private files</h2>
            <p>Photo and document storage should be kept in a private Supabase bucket, not public hosting.</p>
          </article>
          <article>
            <h2>Auth controls</h2>
            <p>Default PIN is 2030 and is configured via environment variables in production.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
