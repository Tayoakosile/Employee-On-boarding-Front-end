import { useQuery } from '@tanstack/react-query'
import useApi from './useApi'


const useProfile = () => {
    const { JOL_BASE_URL } = useApi()
    const fetchProfile = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const { data } = await JOL_BASE_URL.get('/profile')
            return data
        },
    })
    return {fetchProfile}
}

export default useProfile