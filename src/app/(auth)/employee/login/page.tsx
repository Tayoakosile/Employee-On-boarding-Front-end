"use client";

import { AuthForm } from "@/components/AuthForm";
import { AuthLayout } from "@/components/AuthLayout";

export default function EmployeeLoginPage() {
  const handleLogin = (data: {
    fullName?: string;
    email: string;
    password: string;
  }) => {
    console.log("Employee Login:", data);
  };

  return (
    <AuthLayout
      heading="Employee Login"
      subtext="Log in with your employee account provided via invite link."
      imageUrl="https://i.postimg.cc/SK1001XQ/employee-bg.jpg"
    >
      <AuthForm type="login" onSubmit={handleLogin} />
    </AuthLayout>
  );
}
