'use server'
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function checkCookie() {
    const cookie = cookies()
    if (cookie.get('access_token')?.value.length === 0 || cookie.get('access_token')?.value === undefined) {
        redirect('/')
    }
}