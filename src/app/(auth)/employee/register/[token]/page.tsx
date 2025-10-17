"use client";

import { AuthLayout } from "@/components/employee/AuthLayout";
import { GeneralAuthForm } from "@/components/GeneralAuthForm";
import Spinner from "@/components/reusables/LoadingSpinner";
import useGetInviteCode from "@/hooks/useGetInviteCode";

export default function EmployeeRegisterPage() {
  const { invite, isLoading, error, isFetching, isError } = useGetInviteCode()

  if (isLoading) {
    return <div><Spinner /></div>;
  }
  if (isError) {
    return <div className="min-h-dvh flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Invalid or Expired Link</h2>
        <p className="mb-4">The invite link you used is either invalid or has expired. Please contact your administrator for a new link.</p>
      </div>
    </div>
  }



  return (
    <AuthLayout
      heading="Employee Registration"
      subtext="Complete your registration using the invite link provided by your admin."
      imageUrl="https://i.postimg.cc/SK1001XQ/employee-bg.jpg"
    >
      <div className="my-8">Valid Invite Code: {invite?.invite?.token}</div>
      <GeneralAuthForm type="signup" user_type="employee" />
    </AuthLayout>
  );
}
