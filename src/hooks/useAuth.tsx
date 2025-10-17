import { LoginProp } from '@/types/auth.types'
import { useMutation } from '@tanstack/react-query'
import { useForm, } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import useApi from './useApi'
import toast from 'react-hot-toast'
import { useParams, useRouter } from 'next/navigation'
import { loginUserSchema, userSchema } from '@/lib/scheme.util'


const useAuth = (type: string, user_type?: string) => {
    const router = useRouter()
    const loginAdminControl = useForm<LoginProp>({
        resolver: joiResolver(loginUserSchema)
    })
    const registerAdminControl = useForm<LoginProp>({
        resolver: joiResolver(userSchema)
    })
    const { JOL_BASE_URL } = useApi()
    const isTypeLogin = type === 'login'
    const params = useParams();
    const id = params?.id || params?.token;



    const loginOrRegisterFunc = async (credentials: LoginProp) => {

        const response = user_type == "employee" ? await JOL_BASE_URL.post(`/invites/${id}/use`, credentials) : await JOL_BASE_URL.post(`/auth/${type
            }`, credentials)
        return response.data
    }

    const loginOrRegisterMutation = useMutation({
        mutationFn: loginOrRegisterFunc,
        onSuccess: (data) => {
            const isLoggedInUserAnEmployee = data?.user_role?.includes('employee')

            toast.success(`${type} successful`)


            localStorage.setItem(`auth-token`, data?.token)
            if (isTypeLogin) {

                if (isLoggedInUserAnEmployee) {
                    setTimeout(() => router.push("/employee/dashboard"),
                        2000);
                    return;
                }

                setTimeout(() => router.push("/admin/dashboard"), 2000);
                return;
            }
            setTimeout(() => router.push("/admin/login"), 2000);
        },
        onError: (error: { response: { data: { message: string } } }) => {
            const error_message = (error).response?.data?.message || 'Login failed'
            toast.error(error_message)
            if (isTypeLogin) {
                loginAdminControl.setError('email', { message: error_message })
                return;
            }
            registerAdminControl.setError('email', { message: error_message })
        }
    })

    console.log('registerAdminControl.formState.errors :', registerAdminControl.formState.errors, loginAdminControl.formState.errors);


    const handleSubmitForm = (data: LoginProp) => {

        loginOrRegisterMutation.mutate(data)

    }

    return { loginAdminControl, registerAdminControl, handleSubmitForm, loginOrRegisterMutation }
}

export default useAuth