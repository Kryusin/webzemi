'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

import Card from "../Card"
import Code from "@/components/Input/Code"
import Text from "@/components/Text"
import Sort from "../Sort"
import LanguageCard from "@/components/LanguageCard"
import TextField from "@/components/Input/TextField"
import SelectBox from "@/components/Input/SelectBox"
import TextArea from "@/components/Input/TextArea"
import Button from "@/components/Button"
import { InputProps } from "@/types"

export default function Home() {
    let [testdata, setTestData] = useState<Array<string>>(['Javascript', 'Typescript', 'Python', 'Go', 'PHP', 'Java', 'Ruby', 'HTML', 'CSS']);
    const [language, setLanguage] = useState<Array<Array<string>>>([[], []]);
    useEffect(() => {
        let language_temp: Array<Array<string>> = [[], []]
        testdata.map((lang: string, index: number) => index % 2 == 0 ? language_temp[0].push(lang) : language_temp[1].push(lang))
        setLanguage(language_temp);
    }, [testdata])


    return (
        <>
            <Text role="title">HOME</Text>
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
                {/* language-card-list */}
                <div className="justify-self-stretch flex flex-row gap-6">
                    {/* {language[0].length >= 1 ? <LanguageCard /> : <p>hello</p>} */}
                    <LanguageCard language={language} />
                </div>
            </div>
        </>
    )
}