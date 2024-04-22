'use client'

import { useState } from "react";

import Image from "next/image";
import Text from "@/components/Text";
<<<<<<< HEAD
import Logo from "@/components/logo";
import Sort from "@/components/Sort";
import TextField from "@/components/Input/TextField";
import SelectBox from "@/components/Input/SelectBox";
import TextArea from "@/components/Input/TextArea";
import Code from "@/components/Input/Code";
import Card from "@/components/Card";
import { CodeProps, NotesProps } from "@/types";
=======
import Logo from "@/components/logo/logo";
>>>>>>> origin/main

export default function Home() {
  const [code, setCode] = useState<CodeProps>({ lang: "javascript", value: { beforecode: "", aftercode: "" } });
  const [notes, setNotes] = useState<NotesProps[]>([
    {
      lang: "python",
      data: [
        {
          title: "Uncaught SyntaxError: Missing initializer in const declaration",
          description: "このエラーは、JavaScriptのコードでconst宣言が不完全であることを示しています。具体的には、const宣言で初期化子が欠如しています。つまり、定数を宣言する際に初期値を与える必要があります。初期値が与えられていないconst宣言は、JavaScriptエンジンによって認識されず、このエラーが発生します。",
          answer: "const a = 10;"
        },
        {
          title: "Uncaught SyntaxError: Missing initializer in const declaration",
          description: "このエラーは、JavaScriptのコードでconst宣言が不完全であることを示しています。具体的には、const宣言で初期化子が欠如しています。つまり、定数を宣言する際に初期値を与える必要があります。初期値が与えられていないconst宣言は、JavaScriptエンジンによって認識されず、このエラーが発生します。",
          answer: "const a = 10;"
        },
        {
          title: "Uncaught SyntaxError: Missing initializer in const declaration",
          description: "このエラーは、JavaScriptのコードでconst宣言が不完全であることを示しています。具体的には、const宣言で初期化子が欠如しています。つまり、定数を宣言する際に初期値を与える必要があります。初期値が与えられていないconst宣言は、JavaScriptエンジンによって認識されず、このエラーが発生します。",
          answer: "const a = 10;"
        }
      ]
    },
    {
      lang: "javascript",
      data: [
        {
          title: "Uncaught SyntaxError: Missing initializer in const declaration",
          description: "このエラーは、JavaScriptのコードでconst宣言が不完全であることを示しています。具体的には、const宣言で初期化子が欠如しています。つまり、定数を宣言する際に初期値を与える必要があります。初期値が与えられていないconst宣言は、JavaScriptエンジンによって認識されず、このエラーが発生します。",
          answer: "const a = 10;"
        }
      ]
    }
  ]);

  return (
    <div className="flex p-4 h-screen">
      <div className="flex flex-col gap-[62px] overflow-scroll h-screen hidden-scroll">
        {notes.map((note) => (
          <div className="flex flex-col gap-[22px]" key={note.lang}>
            <div className="flex gap-4">
              <Image src="/home/arrow.svg" alt="arrow" width={25} height={13} className="rotate-90"></Image>
              <Text role="note-language">{note.lang}</Text>
            </div>
            {note.data.map((d) => (
              <Card title={d.title} description={d.description} answer={d.answer} key={d.title}></Card>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
