"use client"
import AdminTable from '@/components/AdminTable'
import Spinner from '@/components/reusables/LoadingSpinner';
import useAdmin from '@/hooks/useAdmin';
import { User } from '@/types/admin.types';
import dayjs from 'dayjs';
import React from 'react'

const AdminInvites = () => {
  const headers = [


    { name: "Date Created", value: "date_joined" },

    { name: "used", value: "Used" },
  ];
  const { fetchInvitesQuery } = useAdmin()
  console.log('fetchInvites :', fetchInvitesQuery.data);

  const invites = fetchInvitesQuery?.data?.invites?.map((invites: User) => {
    return {
      ...invites,
      date_joined: dayjs(invites.createdAt).format('DD-MM-YYYY'),
      status: "Active"
    }
  })


  if (fetchInvitesQuery.isLoading) {
    return <div className='min-h-dvh flex justify-center items-center'>
      <Spinner />
    </div>
  }
  return (
    <div>

      employees
      <AdminTable headers={headers} rows={invites} />
    </div>
  )
}
export default AdminInvites