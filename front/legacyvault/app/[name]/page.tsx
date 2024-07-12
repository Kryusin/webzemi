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
import useStoreUser from "@/store/user";
import { useQueryClient } from "@tanstack/react-query";
import useStoreNote from "@/store/note";
import { useQueryNotes } from "@/hooks/useQueryNotes";
import { useMutateNote } from "@/hooks/useMutateNote";
import { useMutateAuth } from "@/hooks/useMutateAuth";

export default function Page({ params }: { params: { name: string } }) {

    const queryClient = useQueryClient()
    const { editedNote } = useStoreNote()
    const updateNote = useStoreNote((state) => state.updateEditedNote)
    const { createNoteMutation, updateNoteMutation } = useMutateNote()
    const { logoutMutation } = useMutateAuth();
    const [open, setOpen] = useState<SideBarProps>(SideBarProps.Home);
    const [sideChoice, setSideChoice] = useState<string>("all");
    const [noteStatus, setNoteStatus] = useState<string>("add");
    const [errorData, setErrorData] = useState<InputProps>({ id: 0, user_id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: '' });
    const user = useStoreUser((state) => state.user)

    useEffect(() => {
        if (noteStatus !== "edit") {
            setErrorData({ id: 0, user_id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: '' })
        }
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
