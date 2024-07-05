import Link from "next/link"

import Text from "@/components/Text"
import { InputProps, NotesDataProps, } from "@/types"
import { SideBarProps } from "@/types"

export default function Card({ data, onClick }: { data: InputProps, onClick: (value: SideBarProps, data: InputProps) => void }) {
    return (
        <div className="w-[100%] rounded-lg bg-white flex flex-col gap-12 px-4 py-4 hover:shadow-[0px_4px_24px_3px_rgba(0,0,0,0.25)] duration-300" onClick={() => onClick(SideBarProps.Detail, data)}>
            <div className="flex-[1_0_0] flex flex-col gap-6 flex-nowrap justify-center items-center">
                <Text role="errorTitle">{data.error_title}</Text>
                <Text role="description">{data.error_details}</Text>
            </div>
            <div className="flex flex-col gap-2">
                <Text role="errorDetails">例</Text>
                <div className="flex-[1_0_0] rounded-2xl flex flex-col px-9 py-9 bg-show-code text-white font-bold">{data.after_code}</div>
            </div>
        </div>
    )
}
