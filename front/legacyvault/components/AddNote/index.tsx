import Text from "@/components/Text"
import TextField from "@/components/Input/TextField"
import SelectBox from "@/components/Input/SelectBox"
import TextArea from "@/components/Input/TextArea"
import Code from "@/components/Input/Code"
import { useEffect, useState } from "react"
import { InputProps, SideBarProps } from "@/types"

export default function AddNote({ status, data }: { status: string, data: InputProps }) {
    const [input, setInput] = useState<InputProps>({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: "" });
    useEffect(() => {
        if (data.ErrorTitle.length > 0 && status === "edit") {
            setInput(data)
        } else {
            setInput({ id: 0, ErrorTitle: '', language: 'javascript', ErrorDetails: '', BeforeCode: '', ErrorReason: '', SolutionDetails: '', AfterCode: '', createdAt: "" })
        }
        console.log(data)
    }, [data, status])

    return (
        <>
            <Text role="title">{status === "edit" ? "Edit Note" : "Add Note"}</Text>
            <div className="flex-[1_0_0] flex flex-col pl-5 gap-4">
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Title</Text>
                    <TextField
                        value={input.ErrorTitle}
                        onChange={(value: string) => setInput({ ...input, ErrorTitle: value })}
                    ></TextField>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Laguage</Text>
                    <SelectBox value={input.language} onChange={(value: string) => setInput({ ...input, language: value })}></SelectBox>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Details</Text>
                    <TextArea
                        state="detail"
                        data={input.ErrorDetails}
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
                        data={input.ErrorReason}
                        onChange={(value: string) => setInput({ ...input, ErrorReason: value })}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Solution Details</Text>
                    <TextArea
                        state="solution"
                        data={input.SolutionDetails}
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
                    {/* <Button role="edit"></Button> */}
                </div>
            </div>
        </>
    )
}