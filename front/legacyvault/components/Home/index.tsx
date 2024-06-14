'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

import Card from "../Card"
import Text from "@/components/Text"
import Sort from "../Sort"
import LanguageCard from "@/components/LanguageCard"
import { InputProps, NoteDataProps, SideBarProps } from "@/types"
import { allNotes } from "@/scripts/getNotesNumber";
import { data } from "../Chartjs";
import { testData } from "@/components/testdata";
import { useQueryNotes } from "@/hooks/useQueryNotes";

export default function Home({ onClick, sideChoice }: { onClick: (value: SideBarProps, data: InputProps) => void, sideChoice: string }) {
    const { data, isLoading } = useQueryNotes()
    const [notesData, setNotesData] = useState<Array<NoteDataProps[]>>([[], []])
    const [choiceData, setChoiceData] = useState<Array<InputProps>>([])
    const [sortData, sortChoiceData] = useState<number>(0)
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        let temp: Array<NoteDataProps[]> = [[], []]
        const allData = allNotes(testData, sortData);
        allData.map((all: NoteDataProps, index: number) => index % 2 == 0 ? temp[0].push(all) : temp[1].push(all))
        setNotesData(temp)
        if (sideChoice != "all") {
            notesData.map((data) => data.filter(value => value.language === sideChoice && setChoiceData(value.noteData)))
        }
    }, [sideChoice, sortData, testData])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let search: Array<NoteDataProps[]> = [[], []]
        const allData = allNotes(testData, sortData);
        const searchArray = allData.map((alldata: NoteDataProps) => alldata.noteData.filter(function (data) {
            return data.ErrorTitle.indexOf(event.target.value) !== -1
        }))
        const filtterarray = searchArray.filter(array => array.length > 0)
        const FilterArray = filtterarray.flat()

        const SearchData = allNotes(FilterArray, sortData)
        SearchData.map((all: NoteDataProps, index: number) => index % 2 == 0 ? search[0].push(all) : search[1].push(all))
        setNotesData(search)
        setInputValue(event.target.value);
    };


    return (
        <>
            <Text role="title">HOME - {sideChoice.charAt(0).toUpperCase() + sideChoice.slice(1)}</Text>
            <div className="flex flex-col gap-[38px] pl-[23px]">
                {/* search-sorted by */}
                <div className="justify-self-stretch flex flex-row justify-between">
                    {/* search */}
                    <div className="bg-[#FFFFFF] flex flex-row rounded-[48px] px-4 py-2 gap-4 h-[50px] w-[60%]">
                        <Image src="/home/search.svg" alt="search" width={18} height={18}></Image>
                        <input type="text" value={inputValue} onChange={handleChange} className="outline-none w-full" />
                    </div>
                    {/* sort */}
                    <Sort onClick={(sort: number) => { sortChoiceData(sort) }} />
                </div>
                {sideChoice === "all" ? (
                    !isLoading && (
                        <div className="justify-self-stretch flex flex-row gap-6">
                            {notesData.length > 0 && <LanguageCard language={data} onClick={onClick} />}
                        </div>
                     )
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