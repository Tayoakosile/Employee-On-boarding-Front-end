"use client";

import { AuthForm } from "@/components/employee/AuthForm";
import { AuthLayout } from "@/components/employee/AuthLayout";

export default function EmployeeLogin() {
  return (
    <AuthLayout
      heading="Employee Login"
      subtext="Log in with your employee account provided via invite link."
      imageUrl="https://i.postimg.cc/SK1001XQ/employee-bg.jpg"
    >
      <AuthForm type="login" />
    </AuthLayout>
  );
}
