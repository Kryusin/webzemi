import Text from "@/components/Text"
import TextField from "@/components/Input/TextField"
import SelectBox from "@/components/Input/SelectBox"
import TextArea from "@/components/Input/TextArea"
import Code from "@/components/Input/Code"
import Button from "@/components/Button"
import { useState } from "react"
import { InputProps } from "@/types"

export default function AddNote() {
    const [input, setInput] = useState<InputProps>({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: ""});
    return (
        <>
            <Text role="title">Add Note</Text>
            <div className="flex-[1_0_0] flex flex-col pl-5 gap-4">
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Title</Text>
                    <TextField
                        onChange={(value: string) => setInput({ ...input, ErrorTitle: value })}
                    ></TextField>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Title</Text>
                    <SelectBox nowlang={input.language} onChange={(value: string) => setInput({ ...input, language: value })}></SelectBox>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Details</Text>
                    <TextArea
                        state="detail"
                        onChange={(value: string) => setInput({ ...input, ErrorDetails: value })}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Code before modification</Text>
                    <Code
                        language={input.language}
                        beforecode={input.BeforeCode}
                        onChange={(value: string) => setInput({ ...input, BeforeCode: value })}
                    ></Code>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Reason</Text>
                    <TextArea
                        state="reason"
                        onChange={(value: string) => setInput({ ...input, ErrorReason: value })}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Solution Details</Text>
                    <TextArea
                        state="solution"
                        onChange={(value: string) => setInput({ ...input, SolutionDetails: value })}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Code before modification</Text>
                    <Code
                        language={input.language}
                        beforecode={input.AfterCode}
                        onChange={(value: string) => setInput({ ...input, AfterCode: value })}
                    ></Code>
                </div>
                <div className="justify-self-stretch flex flex-row gap-4 justify-end">
                    <Button role="add"></Button>
                </div>
            </div>
        </>
    )
}