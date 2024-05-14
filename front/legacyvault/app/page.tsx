"use client"
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import Setting from "@/components/Setting";
import { InputProps, SideBarProps } from "@/types";
import AddNote from "@/components/AddNote";
import Detail from "@/components/Detail";
import SignUp from "@/components/AuthKit/SignUp";

import { useEffect, useState } from "react";

export default function Page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const [open, setOpen] = useState<SideBarProps>(SideBarProps.Home);
  const [sideChoice, setSideChoice] = useState<string>("all");
  const [noteStatus, setNoteStatus] = useState<string>("add");
  const [errorData, setErrorData] = useState<InputProps>({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: '' });
  const [cookie, setCookie] = useState<any>("");

  let result = ""
  if (searchParams) {
    result = JSON.parse(String(searchParams.response ?? '{ "error": null }'));
  }

  // <access_token>というcookieがあるかどうかを確認する。あれば<setCookie>に格納する

  useEffect(() => {
    if (noteStatus !== "edit") {
      setErrorData({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: '' })
    }
    // console.log(`${noteStatus}: ErrorDatad clear`);
  }, [noteStatus])

  if (cookie.length > 0) {
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
  } else {
    return <SignUp searchParams={searchParams} />
  }
}
