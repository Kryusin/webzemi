'use client'
import { useState } from "react"
import Image from "next/image"

import Text from "@/components/Text"
import Card from "@/components/Card"

export default function Contents({language}: {language: string}) {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className="flex flex-col gap-[22px]">
            {/* language */}
            <div className="flex flex-row gap-4 px-2" onClick={() => setShow(!show)}>
                <Image src="/home/arrow2.svg" alt="search" width={14} height={8}></Image>
                <Text role="note-language">{language}</Text>
            </div>
            {/* card */}
            {show && (
                <Card
                    title="Uncaught SyntaxError: Missing initializer in const declaration"
                    description="このエラーは、JavaScriptのコードでconst宣言が不完全であることを示しています。具体的には、const宣言で初期化子が欠如しています。つまり、定数を宣言する際に初期値を与える必要があります。初期値が与えられていないconst宣言は、JavaScriptエンジンによって認識されず、このエラーが発生します。"
                    answer="const a = 10;"
                />
            )}
        </div>
    )
}