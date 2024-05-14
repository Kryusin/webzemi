
import SignUp from "@/components/AuthKit/SignUp";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  const cookie = cookies()
  const accessToken = cookie.get('access_token')
  if (accessToken?.value != undefined && accessToken.value.length > 0) redirect(`${accessToken.value}`)
  return <SignUp />
}
