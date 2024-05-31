import Image from "next/image"
import { FormEvent } from "react"

export default function SignUp({
    onSubmit,
    changeWay,
    name,
    email,
    password,
    error,
    changeName,
    changeEmail,
    changePassword
}: {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void,
    changeWay: () => void,
    name: string,
    email: string,
    password: string,
    error: string,
    changeName: (value: string) => void,
    changeEmail: (value: string) => void,
    changePassword: (value: string) => void
}) {
    return (
        <form onSubmit={onSubmit} className="min-w-[375px] bg-white rounded-2xl flex flex-col py-[42px] px-9 gap-4">
            <div className="flex flex-col gap-4 items-center">
                <Image src="/logo-Auth.svg" width={32} height={32} alt="legacyvault" />
                <p>Signup in LegacyVault</p>
            </div>
            <span className='text-red-400'>{error}</span>
            <div className="flex flex-col gap-[5px] justify-self-stretch">
                <label htmlFor="name" className='text-sm'>Name<span className='text-red-500'>*</span></label>
                <input
                    type="name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => changeName(e.target.value)}
                    className='justify-self-stretch min-h-[32px] px-[10px] rounded-full text-sm bg-[#00003B]/10 focus:outline-[#00003B]/20'
                    placeholder='Your name'
                />
            </div>
            <div className="flex flex-col gap-[5px] justify-self-stretch">
                <label htmlFor="email" className='text-sm'>Email<span className='text-red-500'>*</span></label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                    className='justify-self-stretch min-h-[32px] px-[10px] rounded-full text-sm bg-[#00003B]/10 focus:outline-[#00003B]/20'
                    placeholder='Your email address'
                />
            </div>
            <div className="flex flex-col gap-[5px] justify-self-stretch">
                <label htmlFor="password" className='text-sm'>Password<span className='text-red-500'>*</span></label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => changePassword(e.target.value)}
                    className='justify-self-stretch min-h-[32px] px-[10px] rounded-full text-sm bg-[#00003B]/10 focus:outline-[#00003B]/20'
                    placeholder='Your Password'
                />
            </div>
            <button type="submit" className='justify-self-stretch min-h-[32px] rounded-full items-center justify-center text-sm bg-[#1F2937] text-white' disabled={!name && !email && !password}>Continue</button>
            <div className='before:bg-[#00003B]/5 before:min-w-[110px] before:max-w-[110px] before:flex-grow-1 before:h-[1px] after:bg-[#00003B]/5 after:min-w-[110px] after:max-w-[110px] after:flex-grow-1 after:h-[1px] flex flex-row gap-8 text-sm'>OR</div>
            <div className='text-[#7A7B9F] text-sm'>アカウントをお持ちですか？<span onClick={changeWay} className='text-black cursor-pointer text-base'>Login</span></div>
        </form>
    )
}
