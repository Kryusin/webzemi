import Image from "next/image";
import Text from "@/components/Text";
import Logo from "@/components/logo/logo";
import Sort from "@/components/Sort";
import TextField from "@/components/Input/TextField";
import SelectBox from "@/components/Input/SelectBox";

export default function Home() {
  const language = ["JavaScript", "TypeScript", "Python", "Ruby", "Go", "Java", "C++", "C#", "Html", "Css"]
  return (
    <div className="flex ml-2">
      <SelectBox language={language}></SelectBox>
    </div>
  );
}
