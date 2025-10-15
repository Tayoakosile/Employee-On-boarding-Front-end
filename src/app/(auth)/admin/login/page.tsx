"use client";

import { AuthForm } from "@/components/employee/AuthForm";
import { AuthLayout } from "@/components/employee/AuthLayout";

export default function LoginPage() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log("Login Data:", data);
  };

  return (
    <AuthLayout
      heading="Welcome Back!"
      subtext="Login to continue managing Employees."
      imageUrl="https://i.postimg.cc/0yb5zS7V/istockphoto-614211848-612x612.jpg"
    >
      <AuthForm type="login" onSubmit={handleLogin} />
    </AuthLayout>
  );
}
