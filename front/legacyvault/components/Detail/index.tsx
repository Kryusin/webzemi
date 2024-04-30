import Image from "next/image"
import Text from "@/components/Text"
import Button from "@/components/Button"
import { InputProps,SideBarProps } from "@/types"
import { useEffect, useState } from "react"

export default function Detail({data, onClick}:{data: InputProps, onClick: (page: SideBarProps, status: string) => void}) {
    var capitalize = function(str:string) {
        if (typeof str !== 'string' || !str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return(
        data.ErrorTitle.length > 0 && (
            <>
                <div className="flex flex-row gap-4">
                    <Image src={`/languages/${data.language}.svg`} alt="search" width={60} height={60}></Image>
                    <Text role="title">{capitalize(data.language)}</Text>
                </div>

                <div className="flex flex-col pl-[23px] gap-[38px]">
                    {/* Error Message */}
                    <Text role="errorTitle">{data.ErrorTitle}</Text>
                    <div className="flex flex-col gap-8">
                        {/* error details */}
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-[10px] justify-items-center border-b-2 py-2 pl-2">
                                <Text role="errorDetails">error details</Text>
                                <Text role="errorDetails">/</Text>
                                <Text role="errorDescription">Additional information about the error</Text>
                            </div>
                            <div className="text-base">{data.ErrorDetails}</div>
                        </div>
                        {/* Example */}
                        <div className="flex flex-col gap-4">
                            <Text role="note-language">Example</Text>
                            <div className="bg-[#1F2937] px-4 py-4 rounded-lg">
                                <div className="text-[#ffffff] font-bold text-base">{data.BeforeCode}</div>
                            </div>
                            <div className="text-base">{data.ErrorReason}</div>
                        </div>
                        {/* Solution */}
                        <div className="flex flex-col gap-6 py-4">
                            <div className="flex flex-col gap-4">
                                <Text role="note-language">Solution</Text>
                                <div className="text-base">{data.SolutionDetails}</div>
                            </div>
                            <div className="bg-[#1F2937] px-4 py-4 rounded-lg">
                                <div className="text-[#ffffff] font-bold text-base">{data.AfterCode}</div>
                            </div>
                        </div>
                        {/* Button */}
                        <div className="flex flex-row gap-[10px] justify-end">
                            <Button role="edit" onClick={onClick}/>
                            <Button role="delete" onClick={onClick}/>
                        </div>
                    </div>
                </div>
            </>
        )
    )
}