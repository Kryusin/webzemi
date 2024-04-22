'use client'
import Image from "next/image"
import { useState } from "react"

import Text from "@/components/Text"

export default function Sort() {
    const [Show, setShow] = useState<boolean>(false);
    const [Select, setSelect] = useState<number>(0);
    return (
        <div className="flex justify-end">
            <label htmlFor="sort" className="flex flex-row gap-[13px] px-2 py-4 bg-transparent rounded-full hover:bg-sorted-hover" onClick={() => setShow(!Show)}>
                <Image src="/home/sort.svg" alt="sort" width={16} height={16}></Image>
                <Text role="body">sorted by</Text>
            </label>
            {Show && (
                <div className="absolute top-16 flex flex-col rounded-md bg-white p-1">
                    <label
                        htmlFor="0"
                        className="flex items-center gap-4 px-2 py-4 rounded-md hover:bg-sorted-hover"
                        onClick={(e) => {
                            setSelect(0)
                            setShow(false)
                        }}
                    >
                        <span className={`${Select === 0 && 'bg-black'} bg-transparent w-2 h-2 rounded-full`}></span>
                        <input type="radio" name="sort" value="0" id="0" className="hidden checked:after:bg-black focus:outline-none" />昇順
                    </label>

                    <label
                        htmlFor="1"
                        className="flex items-center gap-4 px-2 py-4 rounded-md hover:bg-sorted-hover"
                        onClick={(e) => {
                            setSelect(1)
                            setShow(false)
                        }}
                    >
                        <span className={`${Select === 1 && 'bg-black'} bg-transparent w-2 h-2 rounded-full`}></span>
                        <input type="radio" name="sort" value="1" id="1" className="hidden checked:after:bg-black focus:outline-none" />降順
                    </label>

                    <label
                        htmlFor="2"
                        className="flex items-center gap-4 px-2 py-4 rounded-md hover:bg-sorted-hover"
                        onClick={(e) => {
                            setSelect(2)
                            setShow(false)
                        }}
                    >
                        <span className={`${Select === 2 && 'bg-black'} bg-transparent w-2 h-2 rounded-full`}></span>
                        <input type="radio" name="sort" value="2" id="2" className="hidden checked:after:bg-black focus:outline-none" />メモが多い順
                    </label>

                    <label
                        htmlFor="3"
                        className="flex items-center gap-4 px-2 py-4 rounded-md hover:bg-sorted-hover"
                        onClick={(e) => {
                            setSelect(3)
                            setShow(false)
                        }}
                    >
                        <span className={`${Select === 3 && 'bg-black'} bg-transparent w-2 h-2 rounded-full`}></span>
                        <input type="radio" name="sort" value="3" id="3" className="hidden checked:after:bg-black focus:outline-none" />メモが少ない順
                    </label>

                </div>
            )}
        </div>
    )
}