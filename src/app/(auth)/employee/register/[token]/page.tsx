"use client";

import { AuthForm } from "@/components/employee/AuthForm";
import { AuthLayout } from "@/components/employee/AuthLayout";
import { GeneralAuthForm } from "@/components/GeneralAuthForm";
import { useParams, useRouter } from "next/navigation";

export default function EmployeeRegisterPage() {
  const { token } = useParams();
  const router = useRouter();

  const handleRegister = (data: {
    fullName?: string;
    email: string;
    password: string;
  }) => {
    console.log("Employee Registration:", { ...data, token });
    router.push("/employee/login");
  };

  return (
    <AuthLayout
      heading="Employee Registration"
      subtext="Complete your registration using the invite link provided by your admin."
      imageUrl="https://i.postimg.cc/SK1001XQ/employee-bg.jpg"
    >
      {/* <AuthForm type="signup" onSubmit={handleRegister} /> */}
      <GeneralAuthForm type="signup" user_type="employee" />
    </AuthLayout>
  );
}
