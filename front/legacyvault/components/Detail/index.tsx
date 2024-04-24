import Image from "next/image"
import Text from "@/components/Text"
import Button from "@/components/Button"

export default function Detail() {
    return(
        <>
            {/* languages */}
            <div className="flex flex-row gap-4">
                <Image src="/languages/javascript.svg" alt="search" width={60} height={60}></Image>
                <Text role="title">Javascript</Text>
            </div>

            <div className="flex flex-col pl-[23px] gap-[38px]">
                {/* Error Message */}
                <Text role="errorTitle">Error Message</Text>
                <div className="flex flex-col gap-8">
                    {/* error details */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-[10px] justify-items-center border-b-2 py-2 pl-2">
                            <Text role="errorDetails">error details</Text>
                            <Text role="errorDetails">/</Text>
                            <Text role="errorDescription">Additional information about the error</Text>
                        </div>
                        <div className="text-base">このエラーは、イニシャライザ（定数に代入する値）を持たずに定数を宣言しようとしたときに発生する。</div>
                    </div>
                    {/* Example */}
                    <div className="flex flex-col gap-4">
                        <Text role="note-language">Example</Text>
                        <div className="bg-[#1F2937] px-4 py-4 rounded-lg">
                            <div className="text-[#ffffff] font-bold text-base">const a;</div>
                        </div>
                        <div className="text-base">この例では、代入する値を指定せずにaという定数を宣言しようとしている。この結果、エラー・メッセージUncaught SyntaxError： const 宣言にイニシャライザがありません。</div>
                    </div>
                    {/* Solution */}
                    <div className="flex flex-col gap-6 py-4">
                        <div className="flex flex-col gap-4">
                            <Text role="note-language">Solution</Text>
                            <div className="text-base">このエラーを解決するには、定数を宣言する際にイニシャライザー（定数に代入する値）を指定する必要がある。</div>
                        </div>
                        <div className="bg-[#1F2937] px-4 py-4 rounded-lg">
                            <div className="text-[#ffffff] font-bold text-base">const a = 10;</div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex flex-row gap-[10px] justify-end">
                        <Button role="edit"/>
                        <Button role="delete"/>
                    </div>
                </div>
            </div>
        </>
    )
}