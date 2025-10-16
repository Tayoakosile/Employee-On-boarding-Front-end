"use client";

// import { AuthForm } from "@/components/admin/AuthForm";
// import { AuthForm } from "@/components/admin/AuthForm";
import { AuthLayout } from "@/components/admin/AuthLayout";
import { GeneralAuthForm } from "@/components/GeneralAuthForm";

export default function AdminRegister() {
  return (
    <AuthLayout
      heading="Create an Admin Account!"
      subtext="Create your account to Invite and manage employees."
      imageUrl="https://i.postimg.cc/0yb5zS7V/istockphoto-614211848-612x612.jpg"
    >
      <GeneralAuthForm type="signup" />
    </AuthLayout>
  );
}
