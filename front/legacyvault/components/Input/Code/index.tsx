'use client'
import { useRef } from "react"
import { Editor } from "@monaco-editor/react"

export default function Code({
    language,
    beforecode,
    onChange
}: {
    language: string,
    beforecode: string,
    onChange: (value: any) => void
}) {
    // const editorRef = useRef(null);
    // function handleEditorDidMount(editor: any, monaco: any) {
    //     // here is the editor instance
    //     // you can store it in `useRef` for further usage
    //     editorRef.current = editor;
    // }
    return (
        <Editor
            height="100px"
            defaultLanguage="javascript"
            language={language}
            value={beforecode}
            onChange={(value: any) => onChange(value)}
            theme="light"
            // onMount={handleEditorDidMount}
            className="rounded-lg overflow-hidden py-4 bg-white"
        />
    )
}