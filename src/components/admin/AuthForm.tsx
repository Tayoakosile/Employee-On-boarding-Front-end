"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface AuthFormProps {
  type: "login" | "register";
}

interface FormData {
  fullName?: string;
  email: string;
  password: string;
}

export function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const endpoint =
        type === "register"
          ? "https://esther-backend.fly.dev/api/auth/signup"
          : "https://esther-backend.fly.dev/api/auth/login";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as {
        message?: string;
        token?: string;
      };

      if (!response.ok) throw new Error(data.message || "Something went wrong");

      if (type === "register") {
        setSuccess("Account created successfully!");
        router.push("/auth/admin/login");
      } else {
        setSuccess("Login successful!");
        if (data.token) localStorage.setItem("token", data.token);
        router.push("/admin/dashboard");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {type === "register" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            required
            minLength={6}
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-3 text-gray-500 text-xs"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}
      {success && <p className="text-green-600 text-sm">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-lg bg-blue-900 py-3 text-white font-medium transition shadow-md ${
          loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
      >
        {loading
          ? type === "register"
            ? "Creating Account..."
            : "Logging in..."
          : type === "register"
          ? "Register"
          : "Login"}
      </button>

      <p className="text-sm text-center text-gray-600">
        {type === "register"
          ? "Already have an account? "
          : "Don’t have an account? "}
        <a
          href={
            type === "register" ? "/auth/admin/login" : "/auth/admin/register"
          }
          className="text-blue-700 font-semibold hover:underline"
        >
          {type === "register" ? "Login" : "Register"}
        </a>
      </p>
    </form>
  );
}
