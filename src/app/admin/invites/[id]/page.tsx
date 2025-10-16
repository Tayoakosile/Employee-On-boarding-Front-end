'use client'

import Spinner from "@/components/reusables/LoadingSpinner"
import useGetInviteCode from "@/hooks/useGetInviteCode"

const SingleInvite = () => {

    const { invite, isLoading, isError } = useGetInviteCode()


    if (isLoading) {
        return <div><Spinner /></div>
    }

    if (isError) {
        return <div>
            Error link already used
        </div>
    }
    return (
        <div>SingleInvite</div>
    )
}

export default SingleInvite