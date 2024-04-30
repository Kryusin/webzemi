'use client'
import { useState } from "react"
import Image from "next/image"

import Text from "@/components/Text"
import Card from "@/components/Card"
import { InputProps, NoteDataProps } from "@/types"
import { SideBarProps } from "@/types"
import { Input } from "postcss"

export default function Contents({note, onClick}: {note: NoteDataProps, onClick: (value: SideBarProps, data: InputProps) => void}) {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="flex flex-col gap-[22px]">
            {/* language */}
            <div className="flex flex-row gap-4 px-2" onClick={() => setShow(!show)}>
                <Image src="/home/arrow2.svg" alt="search" width={14} height={8}></Image>
                <Text role="note-language">{note.language}</Text>
            </div>
            {/* card */}
            {show && (
                note.noteData.map((n:InputProps) => (
                    <Card
                    data={n}
                    onClick={onClick}
                    key={n.id}
                />
                ))
            )}
        </div>
    )
}