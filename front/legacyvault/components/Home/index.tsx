'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

import Card from "../Card"
import Text from "@/components/Text"
import Sort from "../Sort"
import LanguageCard from "@/components/LanguageCard"
import { InputProps, NoteDataProps, SideBarProps } from "@/types"
import { allNotes, getNotesNumber } from "@/scripts/getNotesNumber";

export default function Home({ onClick, sideChoice }: { onClick: (value: SideBarProps, data: InputProps) => void, sideChoice: string }) {
    const [notesData, setNotesData] = useState<Array<NoteDataProps[]>>([[], []])
    const [choiceData, setChoiceData] = useState<Array<InputProps>>([])

    useEffect(() => {
        let temp: Array<NoteDataProps[]> = [[], []]
        const allData = allNotes();
        allData.map((all: NoteDataProps, index: number) => index % 2 == 0 ? temp[0].push(all) : temp[1].push(all))
        setNotesData(temp)
        if (sideChoice != "all") {
            notesData.map((data) => data.filter(value => value.language === sideChoice && setChoiceData(value.noteData)))
        }
    }, [sideChoice])

    useEffect(() => {
        console.log(choiceData)
    }, [choiceData])


    return (
        <>
            <Text role="title">HOME - {sideChoice.charAt(0).toUpperCase() + sideChoice.slice(1)}</Text>
            <div className="flex flex-col gap-[38px] pl-[23px]">
                {/* search-sorted by */}
                <div className="justify-self-stretch flex flex-row justify-between">
                    {/* search */}
                    <div className="bg-[#FFFFFF] flex flex-row rounded-[48px] px-4 py-2 gap-4 h-[50px] w-[60%]">
                        <Image src="/home/search.svg" alt="search" width={18} height={18}></Image>
                        <input type="text" className="outline-none w-full" />
                    </div>
                    {/* sort */}
                    <Sort />
                </div>
                {sideChoice === "all" ? (
                    <div className="justify-self-stretch flex flex-row gap-6">
                        {notesData.length > 0 && <LanguageCard language={notesData} onClick={onClick} />}
                    </div>
                ) : (
                    <div className="flex-[1_0_0] flex flex-row gap-[33px] flex-wrap">
                        {choiceData.length > 0 && (
                            choiceData.map((data) => (
                                <Card data={data} onClick={onClick} key={data.id} />
                            ))
                        )}
                    </div>
                )}
            </div>
        </>
    )
}