"use client"
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import Setting from "@/components/Setting";
import { InputProps, SideBarProps } from "@/types";
import AddNote from "@/components/AddNote";
import Detail from "@/components/Detail";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import checkCookie from "@/scripts/checkCookie";

export default function Page({ params }: { params: { id: string } }) {

    useEffect(() => {
        checkCookie();
    }, [])

    const [open, setOpen] = useState<SideBarProps>(SideBarProps.Home);
    const [sideChoice, setSideChoice] = useState<string>("all");
    const [noteStatus, setNoteStatus] = useState<string>("add");
    const [errorData, setErrorData] = useState<InputProps>({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: '' });

    useEffect(() => {
        if (noteStatus !== "edit") {
            setErrorData({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: '' })
        }
        // console.log(`${noteStatus}: ErrorDatad clear`);
    }, [noteStatus])

    return (
        <div className="flex flex-row gap-0">
            <Sidebar onClick={(value: SideBarProps, side: string, status: string) => {
                setOpen(value)
                setSideChoice(side)
                setNoteStatus(status)
            }} />
            <div className="flex-[4_0_0] flex flex-col gap-[38px] px-10 py-9 overflow-y-scroll h-screen">
                {open === SideBarProps.Home ? (
                    <Home onClick={(value: SideBarProps, data: InputProps) => {
                        setOpen(value)
                        setErrorData(data)
                    }}
                        sideChoice={sideChoice} />
                ) : open === SideBarProps.AddNote ? (
                    <AddNote status={noteStatus} data={errorData} />
                ) : open === SideBarProps.Setting ? (
                    <Setting />
                ) : open === SideBarProps.Detail && (
                    <Detail data={errorData} onClick={(value: SideBarProps, status: string) => {
                        setNoteStatus(status)
                        setOpen(value)
                    }} />
                )}
            </div>
        </div>
    )
}