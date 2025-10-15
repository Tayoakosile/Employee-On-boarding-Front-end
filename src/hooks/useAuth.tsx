import { LoginProp } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import useApi from './useApi'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'


const useAuth = (type: string) => {
    const router = useRouter()
    const loginAdminControl = useForm<LoginProp>()
    const registerAdminControl = useForm<LoginProp>()
    const { JOL_BASE_URL } = useApi()
    const isTypeLogin = type === 'login'


    const loginOrRegisterFunc = async (credentials: LoginProp) => {
        const response = await JOL_BASE_URL.post(`/auth/${type
            }`, credentials)
        return response.data
    }

    const loginOrRegisterMutation = useMutation({
        mutationFn: loginOrRegisterFunc,
        onSuccess: () => {
            toast.success(`${type} successful`)
            if (isTypeLogin) {
                setTimeout(() => router.push("/admin/login"), 2000);
            }
        },
        onError: (error) => {
            const error_message = (error as any).response?.data?.message || 'Login failed'
            isTypeLogin ? loginAdminControl.setError('email', { message: error_message }) : registerAdminControl.setError('email', { message: error_message })

            toast.error(error_message)
        }
    })

    const handleSubmitForm = (data: LoginProp) => loginOrRegisterMutation.mutate(data)

    return { loginAdminControl, registerAdminControl, handleSubmitForm, loginOrRegisterMutation }
}

export default useAuth