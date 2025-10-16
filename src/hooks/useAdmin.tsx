
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import useApi from './useApi'

const useAdmin = () => {

    const { JOL_BASE_URL } = useApi()



    const fetchEmployeesQuery = useQuery({
        queryKey: ['admins'],
        queryFn: async () => {
            const { data } = await JOL_BASE_URL.get('/employees')
            return data
        },
    })

    const fetchInvitesQuery = useQuery({
        queryKey: ['invites'],
        queryFn: async () => {
            const { data } = await JOL_BASE_URL.get('/invites')
            return data
        },
    })


    return { fetchEmployeesQuery, fetchInvitesQuery }
}

export default useAdmin