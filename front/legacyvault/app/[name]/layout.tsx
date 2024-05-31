import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function Layout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies()
    const token = cookieStore.get('token')
    if (!token) {
        redirect('/')
    }
    return children
}