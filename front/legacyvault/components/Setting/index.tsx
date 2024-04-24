import Text from "@/components/Text"
import { testData } from "../testdata";
import Image from 'next/image'
import { options, data } from "../Chartjs";
import { useEffect, useState } from 'react'
import { ChartData, DataProps, InputProps, NoteNumberByDate } from "@/types";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getNotesNumber } from "@/scripts/getNotesNumber";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function Setting() {
    const [noteStatus, setNoteStatus] = useState<InputProps[]>(testData)
    const [language, setLanguage] = useState<string[]>([])
    const [notesNumber, setNotesNumber] = useState<{ language: string, noteData: InputProps[] }[]>([])
    const [noteNumberByDate, setNoteNumberByDate] = useState<ChartData[]>([])
    const [datas, setDatas] = useState<DataProps[]>([]);
    useEffect(() => {
        const temp = noteStatus.map((note) => note.language);
        setLanguage(temp.filter((value, index, self) => self.indexOf(value) === index))
        setNotesNumber(getNotesNumber())
    }, [noteStatus])

    useEffect(() => {
        // 言語別に日付とその日付の総枚数を取得
        const temp = notesNumber.map((note) => {
            // console.log(note)
            const date = new Date();
            const noteData = note.noteData;
            const alreadyDate: string[] = []
            const dateData = noteData.map((data) => {
                const createdAt = new Date(data.createdAt);
                const bool = alreadyDate.some((date) => date === `${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`)
                if (bool) return;
                alreadyDate.push(`${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`)
                return {
                    date: `${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`,
                    noteNumber: noteData.filter((note) => {
                        const noteCreatedAt = new Date(note.createdAt);
                        return createdAt.getFullYear() === noteCreatedAt.getFullYear() && createdAt.getMonth() === noteCreatedAt.getMonth() && createdAt.getDate() === noteCreatedAt.getDate();
                    }).length
                }
            });
            return {
                lang: note.language,
                dateData
            }
        });
        // tempの中にundefinedが入っているのでそれを削除
        let temp2: ChartData[] = temp.map((data) => {
            const dateData: NoteNumberByDate[] = data.dateData.filter((value) => value !== undefined)
            return {
                lang: data.lang,
                dateData
            }
        })
        // temp2の中のdateDataのdateに一週間前の日付がないものがあればその日付と0を追加
        temp2.forEach((data) => {
            const date = new Date();
            const dateData = data.dateData;
            for (let i = 0; i < 7; i++) {
                const createdAt = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i)
                const bool = dateData.some((value) => value.date === `${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`)
                if (!bool) {
                    dateData.push({
                        date: `${createdAt.getFullYear()}/${createdAt.getMonth() + 1}/${createdAt.getDate()}`,
                        noteNumber: 0
                    })
                }
            }
        })

        // temp2の中のdateDataのdateを昇順にソート
        temp2.forEach((data) => {
            data.dateData.sort((a, b) => {
                if (a.date > b.date) return 1;
                if (a.date < b.date) return -1;
                return 0;
            })
        })
        setNoteNumberByDate(temp2)
    }, [notesNumber])

    useEffect(() => {
        // noteNumberByDateの中のdateDataのnoteNumberを取得
        const temp = getData();
        temp.then((data) => setDatas(data))
    }, [noteNumberByDate])

    const getData = async () => {
        const noteNumber = await noteNumberByDate.map((data) => data.dateData.map((value) => value.noteNumber))
        const note = await noteNumber.map((note) => data(note))
        return note
    }
    return (
        <>
            <Text role="title">Add Note</Text>
            <div className="justify-self-stretch flex flex-row gap-9 items-center">
                <Image src="/setting/icon.svg" alt="user" width={100} height={100} className="rounded-full"></Image>
                <Text role="userName">高本龍信</Text>
            </div>
            <div className="justify-self-stretch flex flex-col gap-8">
                <Text role="note-language">Note Status</Text>
                <div className="justify-self-stretch flex flex-row gap-4 flex-wrap overflow-y-scroll hidden-scroll">
                    {language.map((lang: string, index: number) => (
                        <div className="flex flex-col gap-4 px-4 py-4 w-[500px] bg-white rounded" key={lang}>
                            <div className="flex flex-row justify-between">
                                <Text role="edit">{lang}</Text>
                                <Text role="note-language">{noteStatus.filter((note) => note.language === lang).length}</Text>
                            </div>
                            {datas.length !== 0 && <Bar data={datas[index]} options={options} />}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}