"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "./InputField";
import AuthCard from "./AuthCard";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {

    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid login credentials");
        setLoading(false);
        return;
      }

      // ROLE-BASED REDIRECTION
      switch (data.role) {
        case "ADMIN":
          // Admin goes to app/admin/page.tsx → URL: /admin
          router.push("/admin");
          break;
        case "REVIEWER":
          router.push("/reviewer/dashboard");
          break;
        case "LAWYER":
          router.push("/lawyer/dashboard");
          break;
        case "PRISONER":
          router.push("/prisoner/dashboard");
          break;
        case "DONOR":
          router.push("/donor/dashboard");
          break;
        default:
          router.push("/"); // fallback
      }

    } catch (err) {
      console.error("Login failed:", err);
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <AuthCard title="Secure Login">

      <form onSubmit={handleLogin} className="auth-form">

        <InputField
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter password"
        />

        {error && <div className="auth-error">{error}</div>}

        <button
          className="auth-button"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

      </form>

    </AuthCard>
  );
}