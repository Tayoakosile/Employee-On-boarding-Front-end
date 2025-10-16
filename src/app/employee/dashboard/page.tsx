'use client'
import useProfile from '@/hooks/useProfile'

const EmployeeDashboard = () => {
    const { fetchProfile } = useProfile()
    const user_profile = fetchProfile.data
    console.log('user_profile :', user_profile);

    return (
        <div>Employee Profile Dashboard</div>
    )
}

export default EmployeeDashboard