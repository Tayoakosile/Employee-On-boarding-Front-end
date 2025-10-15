"use client";

import { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
}

export function AuthForm({ type }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6">
      {type === "register" && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
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
          placeholder="Enter your email"
          required
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
            placeholder="Enter your password"
            required
            minLength={6}
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
            type === "register"
              ? "/auth/employee/login"
              : "/auth/employee/register"
          }
          className="text-blue-700 font-semibold hover:underline"
        >
          {type === "register" ? "Login" : "Contact your admin"}
        </a>
      </p>
    </form>
  );
}
