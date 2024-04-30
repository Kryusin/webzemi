"use client";
import Logo from "@/components/logo";

import Image from "next/image"
import { useState,useEffect } from "react";
import { SideBarProps,NoteDataProps } from "@/types";
import { allNotes } from "@/scripts/getNotesNumber";
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";


export default function Sidebar({ onClick }: { onClick: (page: SideBarProps, side: string, status: string) => void }) {
    const [languages, setLanguages] = useState(false);
    const [laguageList, setlaguageList] = useState<Array<string>>([])

    const clickHome = () => {
        setLanguages(!languages);
    }
    useEffect(() => {
        let language:Array<string> = []
        const allData = allNotes();
        allData.map(
            (all:NoteDataProps) => language.push(all.language)
        )
        setlaguageList(language)
    }, [])
    
    return (
        <div className="bg-[#1F2937] px-4 py-[45px] flex flex-col gap-12 flex-[1_0_0] h-screen">
            {/* logo */}
            <Logo />
            {/* home-languages-addnote-setting */}
            <div className="justify-self-stretch flex flex-col gap-[26px]">
                {/* home */}
                <div className="flex flex-row justify-between" onClick={clickHome}>
                    <div className="flex flex-row gap-4">
                        <Image src="/sidebar/home.svg" alt="home" width={24} height={24}></Image>
                        <span className="text-white text-xl font-bold">Home</span>
                    </div>
                    {languages ? (
                        <Image src="/sidebar/minus.svg" alt="home" width={24} height={24}></Image>

                    ) : (
                        <Image src="/sidebar/plus.svg" alt="home" width={24} height={24}></Image>
                    )}
                </div>
                {/* languages */}
                {languages && (
                    <div className="px-8 flex flex-col gap-4 h-[270px] overflow-y-scroll non-scroll py-4 bg-[#15202d] rounded-lg">
                        <p className="text-white text-base font-bold" onClick={() => onClick(SideBarProps.Home, "all", "all")}>All</p>
                        {laguageList.map((lang:string) => (
                            <p className="text-white text-base font-bold" key={lang} onClick={() => onClick(SideBarProps.Home, lang, "lang")}>{lang}</p>
                        ))}
                    </div>
                )}
                {/* add note */}
                <div className="flex flex-row gap-4" onClick={() => onClick(SideBarProps.AddNote, "addnote", "addnote")}>
                    <Image src="/sidebar/note.svg" alt="home" width={24} height={24}></Image>
                    <span className="text-white text-xl font-bold">Add Note</span>
                </div>
                {/* setting */}
                <div className="flex flex-row gap-4" onClick={() => onClick(SideBarProps.Setting, "setting", "setting")}>
                    <Image src="/sidebar/setting.svg" alt="home" width={24} height={24}></Image>
                    <span className="text-white text-xl font-bold">Setting</span>
                </div>
            </div>
        </div>
    )
}