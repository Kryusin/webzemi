'use client'
import { useState, FormEvent, useEffect } from 'react'
import { useMutateAuth } from '@/hooks/useMutateAuth'
import { AllhttpStatus } from '@/components/testdata'
import Login from '@/components/Auth/Login'
import SignUp from '@/components/Auth/Signup'

export default function Auth() {
    const [email, setEmail] = useState<string>('')
    const [pw, setPw] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [isLogin, setIsLogin] = useState(true)
    const { loginMutation, registerMutation } = useMutateAuth()
    const [HttpStatus, setHttpStatus] = useState<Array<number>>(AllhttpStatus)
    const [error, setError] = useState<string>('')

    const submitAuthHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const user = {
                email: email,
                password: pw,
            }
            if (isLogin) {
                await loginMutation.mutateAsync(user)
            } else {
                await registerMutation
                    .mutateAsync({ ...user, name: name })
                    .then(() =>
                        loginMutation.mutate(user)
                    )
            }
        } catch (err: any) {
            setError(err.response.data)
        }
    }

    const changeWay = () => {
        setError('')
        if (isLogin) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    }

    const changeEmail = (value: string) => {
        setEmail(value)
    }

    const changePassword = (value: string) => {
        setPw(value)
    }

    const changeName = (value: string) => {
        setName(value)
    }
    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <div className="absolute flex flex-row gap-20 -z-10 animate-slide">
                {HttpStatus.map((status) => (
                    <div className={`text-[96px]`} style={{ textShadow: "0 40px 20px rgba(0, 0, 0, 0.25)" }} key={status}>{status}</div>
                ))}
            </div>
            {isLogin ? (
                Login({ onSubmit: submitAuthHandler, changeWay, email, password: pw, error, changeEmail, changePassword })
            ) : (
                SignUp({ onSubmit: submitAuthHandler, changeWay, name, email, password: pw, error, changeName, changeEmail, changePassword })
            )}
        </div>
    )
};
