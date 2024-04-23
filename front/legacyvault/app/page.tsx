'use client'
import Sidebar from "@/components/Sidebar";
// import AddNote from "@/components/AddNote";
// import Home from "@/components/Home";
// import Detail from "@/components/Detail"

export default function Page() {
  return (
    <div className="flex flex-row gap-0">
      <Sidebar />
      <div className="flex-[4_0_0] flex flex-col gap-[38px] px-10 py-9 overflow-y-scroll h-screen">
        {/* <AddNote /> */}
        {/* <Home/> */}
        {/* <Detail /> */}
      </div>
    </div>
  );
}
