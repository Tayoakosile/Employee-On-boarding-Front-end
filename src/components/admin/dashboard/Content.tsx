"use client";

import Link from "next/link";

export default function MainContent() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome back, Admin 👋
      </h1>
      <p className="text-gray-600">
        Manage employees, invitations, and tasks efficiently.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href={"/admin/employees"}>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">Employees</h3>
            <p className="text-gray-500 mt-2">
              View and manage employee information.
            </p>
          </div>
        </Link>

        <Link href={"/admin/invitations"}>
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-800">Invitations</h3>
            <p className="text-gray-500 mt-2">
              Generate and track employee onboarding invites.
            </p>
          </div>
        </Link>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">Tasks</h3>
          <p className="text-gray-500 mt-2">
            Assign or monitor employee onboarding tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
