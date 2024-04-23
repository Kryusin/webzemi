'use client'
import Sidebar from "@/components/Sidebar";
import Home from "@/components/Home";

import { useState } from "react";
import { PageProps } from "@/types";

export default function Page() {
  const [open, setOpen] = useState<PageProps>(PageProps.Home);
  return (
    <div className="flex flex-row gap-0">
      <Sidebar onClick={(value: PageProps) => setOpen(value)} />
      <div className="flex-[4_0_0] flex flex-col gap-[38px] px-10 py-9 overflow-y-scroll h-screen">
        {open === PageProps.Home ? (
          <div>home</div>
        ) : open === PageProps.AddNote ? (
          <Home />
        ) : open === PageProps.Setting && (
          <div>setting</div>
        )}
      </div>
    </div>
  );
}
