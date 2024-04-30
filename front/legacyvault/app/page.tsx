'use client'
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";
import Setting from "@/components/Setting";
import { InputProps, SideBarProps } from "@/types";
import AddNote from "@/components/AddNote";
import Detail from "@/components/Detail";

import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<SideBarProps>(SideBarProps.Home);
  const [sideChoice, setSideChoice] = useState<string>("all");
  const [errorData, setErrorData] = useState<InputProps>({id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: ''});
  return (
    <div className="flex flex-row gap-0">
      <Sidebar onClick={(value: SideBarProps, side: string) => {
        setOpen(value) 
        setSideChoice(side)
      }}/>
      <div className="flex-[4_0_0] flex flex-col gap-[38px] px-10 py-9 overflow-y-scroll h-screen">
        {open === SideBarProps.Home ? (
          <Home onClick={(value: SideBarProps, data: InputProps) => {
            setOpen(value)
            setErrorData(data)
          }}
          sideChoice = {sideChoice}/>
        ) : open === SideBarProps.AddNote ? (
          <AddNote />
        ) : open === SideBarProps.Setting ? (
          <Setting />
        ) : open === SideBarProps.Detail && (
          <Detail data={errorData}/>
        )}
      </div>
    </div>
  );
}
