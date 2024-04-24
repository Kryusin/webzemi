import Link from "next/link"

import Text from "@/components/Text"
import { NotesDataProps, } from "@/types"

export default function Card({ title, description, answer }: NotesDataProps) {
    return (
        <Link href="#" className="justify-self-stretch rounded-lg bg-white flex flex-col gap-12 px-4 py-4 hover:shadow-[0px_4px_24px_3px_rgba(0,0,0,0.25)] duration-300">
            <div className="flex-[1_0_0] flex flex-col gap-6 flex-nowrap justify-center items-center">
                <Text role="errorTitle">{title}</Text>
                <Text role="description">{description}</Text>
            </div>
            <div className="flex flex-col gap-2">
                <Text role="errorDetails">例</Text>
                <div className="flex-[1_0_0] rounded-2xl flex flex-col px-9 py-9 bg-show-code text-white font-bold">{answer}</div>
            </div>
        </Link>
    )
}