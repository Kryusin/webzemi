'use client'
import { useEffect, useState } from 'react';
import { useMonaco } from '@monaco-editor/react';

import Text from '@/components/Text';
import Image from 'next/image';

export default function SelectBox({
    value,
    onChange
}: {
    value: string,
    onChange: (value: string) => void
}) {
    const [Show, setShow] = useState<boolean>(false);
    const [Language, setLanguage] = useState<string[]>([]);
    const monaco = useMonaco();

    useEffect(() => {
        if (monaco) {
            monaco.languages.getLanguages().map((language: any) => {
                setLanguage((langs) => [...langs, language.id])
            })
        }
    }, [monaco])

    return (
        <div className="flex justify-start">
            <div className="flex flex-row gap-[13px] px-4 py-2 bg-white rounded-lg border-2 border-input focus:border-input-hover" onClick={() => setShow(!Show)}>
                <Text role="body">{value}</Text>
                <Image src="/home/arrow2.svg" alt="sort" width={16} height={16}></Image>
            </div>
            {Show && (
                <div className="absolute top-16 flex flex-col rounded-md bg-white p-1 z-10 h-80 overflow-y-scroll drop-shadow-2xl custom-scroll">
                    {Language.map((lang) => (
                        <div key={lang}>
                            <label
                                htmlFor={lang}
                                className="flex items-center gap-4 px-2 py-4 rounded-md hover:bg-sorted-hover"
                            >
                                <span className={`${value === lang ? 'bg-black' : 'bg-transparent'} w-2 h-2 rounded-full`}></span>
                                <span>{lang}</span>
                            </label>
                            <input
                                type="radio"
                                name="sort"
                                value={lang}
                                id={lang}
                                className="hidden checked:after:bg-black focus:outline-none"
                                onChange={(e) => onChange(e.target.value)}
                                onClick={() => setShow(false)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}