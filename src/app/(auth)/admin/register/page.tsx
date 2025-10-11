"use client";

import { AuthForm } from "@/components/AuthForm";
import { AuthLayout } from "@/components/AuthLayout";

export default function RegisterPage() {
  const handleRegister = (data: {
    fullName?: string;
    email: string;
    password: string;
  }) => {
    console.log("Register Data:", data);
  };

  return (
    <AuthLayout
      heading="Welcome Admin!"
      subtext="Create your account to manage Employees."
      imageUrl="https://i.postimg.cc/0yb5zS7V/istockphoto-614211848-612x612.jpg"
    >
      <AuthForm type="register" onSubmit={handleRegister} />
    </AuthLayout>
  );
}
