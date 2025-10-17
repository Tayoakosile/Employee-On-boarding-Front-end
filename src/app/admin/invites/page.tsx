// "use client";
// import AdminTable from "@/components/AdminTable";
// import Spinner from "@/components/reusables/LoadingSpinner";
// import useAdmin from "@/hooks/useAdmin";
// import { User } from "@/types/admin.types";
// import dayjs from "dayjs";
// import React from "react";

// const AdminInvites = () => {
//   const headers = [
//     { name: "Date Created", value: "date_joined" },

//     { name: "used", value: "Link" },
//   ];link
//   const { fetchInvitesQuery } = useAdmin();
//   console.log("fetchInvites :", fetchInvitesQuery.data);

//   const invites = fetchInvitesQuery?.data?.invites?.map((invites: User) => {
//     return {
//       ...invites,
//       date_joined: dayjs(invites.createdAt).format("DD-MM-YYYY"),
//       status: "Active",
//     };
//   });

//   if (fetchInvitesQuery.isLoading) {
//     return (
//       <div className="min-h-dvh flex justify-center items-center">
//         <Spinner />
//       </div>
//     );
//   }
//   return (
//     <div>
//       employees
//       <AdminTable headers={headers} rows={invites} />
//     </div>
//   );
// };
// export default AdminInvites;

"use client";

import { useState } from "react";
import AdminTable from "@/components/AdminTable";
import Spinner from "@/components/reusables/LoadingSpinner";
import Button from "@/components/reusables/Button";
import useAdmin from "@/hooks/useAdmin";
import { User } from "@/types/admin.types";
import dayjs from "dayjs";
import { Layout } from "@/components/admin/dashboard/layout";
import { useMutation } from "@tanstack/react-query";
import useApi from "@/hooks/useApi";
import toast from "react-hot-toast";

export default function AdminInvitationsPage() {
  const { JOL_BASE_URL } = useApi()


  const { fetchInvitesQuery, } = useAdmin();

  const headers = [
    { name: "Date Created", value: "date_joined" },
    { name: "Used", value: "used" },
    { name: "Link", value: "link" },
  ];

  const invites =
    fetchInvitesQuery?.data?.invites?.map((invite: User) => ({
      ...invite,
      date_joined: dayjs(invite.createdAt).format("DD-MM-YYYY"),
      used: invite.used ? "Yes" : "No",
      link: `${window.location.origin}/employee/register/${invite?.token}`
    })) || [];

  const handleGenerateNewInvite =
    useMutation({
      mutationFn: async () => {
        const { data } = await JOL_BASE_URL.post(`/invites`)
        return data
      }, onSuccess() {
        toast.success("Invite link generated successfully")
      }

    })


  if (fetchInvitesQuery.isLoading) {
    return (
      <div className="min-h-dvh flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  const inviteLink = handleGenerateNewInvite.data?.token ? `${window.location.origin}/employee/register/${handleGenerateNewInvite.data?.token}` : null

  return (
    <Layout>
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">Invitations</h1>
          <Button  loading={handleGenerateNewInvite.isPending} onClick={handleGenerateNewInvite.mutate}>
            Generate Invite Link
          </Button>
        </div>

        {/* Invite Link Display */}
        {inviteLink && (
          <div className="bg-green-100 border border-green-300 text-green-800 p-3 rounded-lg text-sm">
            <p className="font-medium">Invite Link Generated:</p>
            <a
              href={inviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline break-all"
            >{inviteLink}
            </a>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <AdminTable headers={headers} rows={invites} />
        </div>
      </div>
    </Layout>
  );
}
