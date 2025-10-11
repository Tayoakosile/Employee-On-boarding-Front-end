"use client";

import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (data: {
    fullName?: string;
    email: string;
    password: string;
  }) => void;
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fullName, email, password });
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            minLength={6}
            className="w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-200"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 text-xs"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-900 py-3 text-white font-medium hover:bg-blue-700 transition shadow-md"
      >
        {type === "register" ? "Register" : "Login"}
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
