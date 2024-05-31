'use client'
import { useEffect } from 'react'
import axios from 'axios'
import Auth from '@/components/Auth'
import { CsrfToken } from '@/types'

export default function Page() {
  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const { data } = await axios.get<CsrfToken>(
        `${process.env.NEXT_PUBLIC_API_URL}/csrf`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])
  return (
    <Auth />
  )
}
