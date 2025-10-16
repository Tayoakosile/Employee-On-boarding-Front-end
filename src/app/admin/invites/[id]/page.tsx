// "use client";

// import Spinner from "@/components/reusables/LoadingSpinner";
// import useGetInviteCode from "@/hooks/useGetInviteCode";

// const SingleInvite = () => {
//   const { invite, isLoading, isError } = useGetInviteCode();

//   if (isLoading) {
//     return (
//       <div>
//         <Spinner />
//       </div>
//     );
//   }

//   if (isError) {
//     return <div>Error link already used</div>;
//   }
//   return <div>SingleInvite</div>;
// };

// export default SingleInvite;

"use client";

import { Layout } from "@/components/admin/dashboard/layout";
import Spinner from "@/components/reusables/LoadingSpinner";
import useGetInviteCode from "@/hooks/useGetInviteCode";

export default function SingleInvitePage() {
  const { invite, isLoading, isError } = useGetInviteCode();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-dvh">
          <Spinner />
        </div>
      </Layout>
    );
  }

  if (isError) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-dvh">
          <p className="text-red-600 font-medium text-lg">
            Error: This invite link has already been used or is invalid.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-dvh">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            Invitation Active
          </h2>
          <p className="text-gray-600">
            This invitation link is valid and ready to use.
          </p>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200 text-blue-800">
            <p>Invite Code:</p>
            <p className="font-semibold break-all">{invite?.code}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
