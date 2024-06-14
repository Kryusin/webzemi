import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import useStoreUser from "@/store/user"
import { Credential, LoginResponse } from '../types'
import { useError } from '../hooks/useError'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

export const useMutateAuth = () => {
    const {user, updateUser, resetUser} = useStoreUser()
    const { switchErrorHandling } = useError()
    const router = useRouter()
    const loginMutation = useMutation(
        async (user: Credential) =>
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, user),
        {
            onSuccess: (user: any) => {
                updateUser(user.data)
                router.push(`/${user.data.name}`)
            },
            onError: (err: any) => {
                if (err.response.data.message) {
                    switchErrorHandling(err.response.data.message)
                } else {
                    switchErrorHandling(err.response.data)
                }
            },
        }
    )
    const registerMutation = useMutation(
        async (user: Credential) =>
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/signup`, user),
        {
            onError: (err: any) => {
                if (err.response.data.message) {
                    switchErrorHandling(err.response.data.message)
                } else {
                    switchErrorHandling(err.response.data)
                }
            },
        }
    )
    const logoutMutation = useMutation(
        async () => await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/logout`),
        {
            onSuccess: () => {
                redirect('/')
            },
            onError: (err: any) => {
                if (err.response.data.message) {
                    switchErrorHandling(err.response.data.message)
                } else {
                    switchErrorHandling(err.response.data)
                }
            },
        }
    )
    return { loginMutation, registerMutation, logoutMutation }
}
