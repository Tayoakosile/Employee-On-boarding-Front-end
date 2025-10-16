import useApi from '@/hooks/useApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

const useGetInviteCode = () => {
    const { JOL_BASE_URL } = useApi()
    const params = useParams();
    const id = params?.id||params?.token;

    const fetchInvite = async (id: string) => {
        const { data } = await JOL_BASE_URL.get(`/invites/${id}`)
        return data
    }

    const { data: invite, isLoading, error, isFetching, isError } = useQuery({
        queryKey: ['invite', id],
        queryFn: () => fetchInvite(id as string),
        enabled: !!id,
    })

    return {invite, isLoading, error, isFetching, isError }
}

export default useGetInviteCode