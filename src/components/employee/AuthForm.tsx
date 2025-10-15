"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import useAuth from "@/hooks/useAuth";
import Button from "../reusables/Button";
// import FormInput from "../FormInput";

interface AuthFormProps {
  type: "login" | "signup";
}

export function AuthForm({ type }: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { loginAdminControl, handleSubmitForm, loginOrRegisterMutation } = useAuth(type)

  return (
    <form className="space-y-6" onSubmit={type == "login" ? loginAdminControl.handleSubmit(handleSubmitForm) : loginAdminControl.handleSubmit(handleSubmitForm)}>
      {type === "signup" && (
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

      <FormInput control={loginAdminControl.control} name="email" title="Email" />
      <FormInput control={loginAdminControl.control} name="password" title="Password" />
      <Button loading={loginOrRegisterMutation.isPending}>
        {type === "signup" ? "Register" : "Login"}
      </Button>

      <p className="text-sm text-center text-gray-600">
        {type === "signup"
          ? "Already have an account? "
          : "Don’t have an account? "}
        <a
          href={
            type === "signup"
              ? "/auth/employee/login"
              : "/auth/employee/signup"
          }
          className="text-blue-700 font-semibold hover:underline"
        >
          {type === "signup" ? "Login" : "Contact your admin"}
        </a>
      </p>

    </form>
  );
}
