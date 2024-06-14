import axios from 'axios'
import { CsrfToken } from '../types'
import useStore from '../store/note'
import { redirect } from 'next/navigation'

export const useError = () => {
    const resetEditedTask = useStore((state) => state.resetEditedTask)
    const getCsrfToken = async () => {
        const { data } = await axios.get<CsrfToken>(
            `${process.env.REACT_APP_API_URL}/csrf`
        )
        axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrf_token
    }
    const switchErrorHandling = (msg: string) => {
        switch (msg) {
            case 'invalid csrf token':
                getCsrfToken()

                break
            case 'invalid or expired jwt':
                resetEditedTask()
                redirect('/')
                break
            case 'missing or malformed jwt':
                resetEditedTask()
                break
            case 'duplicated key not allowed':
                break
            case 'crypto/bcrypt: hashedPassword is not the hash of the given password':
                break
            case 'record not found':
                break
        }
    }
    return { switchErrorHandling }
}
