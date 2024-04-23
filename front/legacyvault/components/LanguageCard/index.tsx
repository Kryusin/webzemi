import Image from "next/image"
import { useState } from "react"

import Contents from "./Contents"

export default function LanguageCard({language}: {language:Array<Array<string>>}) {
    return(
        <>
        {language.map((lang:Array<string>) => (
            <>
                <div className="flex-[1_0_0] flex flex-col gap-[33px]">
                    {lang.map((l:string) => (
                        <Contents language={l} key={l}/>
                    ))}
                </div>
            </>
        ))}
        </>
    )
}