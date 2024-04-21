'use client'
import { useState } from 'react';

import Text from '@/components/Text';
import Image from 'next/image';

export default function SelectBox({
    language
}: {
    language: Array<string>
}
) {
    const [Show, setShow] = useState<boolean>(false);
    const [Select, setSelect] = useState<string>(language[0]);
    return (
        <div className="flex justify-start">
            <label htmlFor="sort" className="flex flex-row gap-[13px] px-4 py-2 bg-transparent rounded-lg border-2 border-input focus:border-input-hover" onClick={() => setShow(!Show)}>
                <Text role="body">{Select}</Text>
                <Image src="/home/arrow.svg" alt="sort" width={16} height={16}></Image>
            </label>
            {Show && (
                <div className="absolute top-16 flex flex-col rounded-md bg-white p-1">
                    {language.map((lang) => (
                        <label
                            htmlFor={lang}
                            className="flex items-center gap-4 px-2 py-4 rounded-md hover:bg-sorted-hover"
                            onClick={(e) => {
                                setSelect(lang)
                                setShow(false)
                                console.log(lang)
                            }}
                            key={lang}
                        >
                            <span className={`${Select === lang ? 'bg-black' : 'bg-transparent'} w-2 h-2 rounded-full`}></span>
                            <input type="radio" name="sort" value={lang} id={lang} className="hidden checked:after:bg-black focus:outline-none" />{lang}
                        </label>
                    ))}

                </div>
            )}
        </div>
    )
}