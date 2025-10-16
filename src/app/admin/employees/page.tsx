"use client";
import AdminTable from "@/components/AdminTable";
import Spinner from "@/components/reusables/LoadingSpinner";
import useAdmin from "@/hooks/useAdmin";
import { User } from "@/types/admin.types";
import dayjs from "dayjs";
import React from "react";

const Employees = () => {
  const headers = [
    { name: "Name", value: "name" },
    { name: "Email", value: "email" },
    { name: "Date Joined", value: "date_joined" },
    { name: "Role", value: "role" },
    { name: "Status", value: "status" },
  ];
  const { fetchEmployeesQuery } = useAdmin();
  const employees = fetchEmployeesQuery.data?.map((employees: User) => {
    return {
      ...employees,
      date_joined: dayjs(employees.createdAt).format("DD-MM-YYYY"),
      status: "Active",
    };
  });

  if (fetchEmployeesQuery.isLoading) {
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-2xl font-semibold text-black mt-6 mb-6">Employees</h1>
      <AdminTable headers={headers} rows={employees} />
    </div>
  );
};
export default Employees;
