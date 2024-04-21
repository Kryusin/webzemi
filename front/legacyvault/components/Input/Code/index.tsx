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
    return (
        <Editor
            height="100px"
            language={language}
            value={beforecode}
            onChange={(value: any) => onChange(value)}
            theme="light"
            onMount={handleEditorDidMount}
            className="rounded-lg overflow-hidden py-4 bg-white"
        />
    )
}