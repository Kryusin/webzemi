"use client";
import Logo from "@/components/Logo";

import Image from "next/image"
import { useState } from "react";
import { PageProps } from "@/types";

export default function Sidebar({ onClick }: { onClick: (page: PageProps) => void }) {
    const [languages, setLanguages] = useState(false);
    const clickHome = () => {
        setLanguages(!languages);
    }
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
                        // <Image src="/home/arrow.svg" alt="home" width={16} height={16}></Image>

                    ) : (
                        <Image src="/sidebar/plus.svg" alt="home" width={24} height={24}></Image>
                        // <Image src="/home/arrow2.svg" alt="home" width={16} height={16}></Image>
                    )}
                </div>
                {/* languages */}
                {languages && (
                    <div className="px-8 flex flex-col gap-4 h-[270px] overflow-y-scroll non-scroll py-4 bg-[#15202d] rounded-lg">
                        <p className="text-white text-base font-bold" onClick={() => onClick(PageProps.Home)}>All</p>
                        <p className="text-white text-base font-bold">Javascript</p>
                        <p className="text-white text-base font-bold">TypeScript</p>
                        <p className="text-white text-base font-bold">Python</p>
                        <p className="text-white text-base font-bold">Go</p>
                        <p className="text-white text-base font-bold">PHP</p>
                        <p className="text-white text-base font-bold">Java</p>
                        <p className="text-white text-base font-bold">Ruby</p>
                        <p className="text-white text-base font-bold">HTML</p>
                        <p className="text-white text-base font-bold">CSS</p>
                    </div>
                )}
                {/* add note */}
                <div className="flex flex-row gap-4" onClick={() => onClick(PageProps.AddNote)}>
                    <Image src="/sidebar/note.svg" alt="home" width={24} height={24}></Image>
                    <span className="text-white text-xl font-bold">Add Note</span>
                </div>
                {/* setting */}
                <div className="flex flex-row gap-4" onClick={() => onClick(PageProps.Setting)}>
                    <Image src="/sidebar/setting.svg" alt="home" width={24} height={24}></Image>
                    <span className="text-white text-xl font-bold">Setting</span>
                </div>
            </div>
        </div>
    )
}