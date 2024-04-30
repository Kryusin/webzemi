import Image from "next/image"
import { useState } from "react"

import Contents from "./Contents"
import { InputProps, NoteDataProps } from "@/types"
import { SideBarProps } from "@/types"

export default function LanguageCard({language, onClick}: {language:Array<NoteDataProps[]>, onClick: (value: SideBarProps, data: InputProps) => void}) {
    return(
        language.map((lang:Array<NoteDataProps>, index:number) => (
            <div className="flex-[1_0_0] flex flex-col gap-[33px]" key={index}>
                {lang.map((l:NoteDataProps) => (
                    <Contents note={l} onClick={onClick} key={l.language}/>
                ))}
            </div>
        ))
    )
}