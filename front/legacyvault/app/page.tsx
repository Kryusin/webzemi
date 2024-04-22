import Image from "next/image";
import Text from "@/components/Text";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar></Sidebar>
      <main className="flex-[4_0_0] bg-transparent"></main>
    </div>
  );
}
