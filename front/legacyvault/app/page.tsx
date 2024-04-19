import Image from "next/image";
import Text from "@/components/Text";
import Logo from "@/components/logo/logo";
import Sort from "@/components/Sort";

export default function Home() {
  return (
    <div className="flex justify-end mr-2">
      <Sort></Sort>
    </div>
  );
}
