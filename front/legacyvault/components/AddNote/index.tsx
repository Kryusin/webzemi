import Text from "@/components/Text"
import TextField from "@/components/Input/TextField"
import SelectBox from "@/components/Input/SelectBox"
import TextArea from "@/components/Input/TextArea"
import Button from "../Button"
import Code from "@/components/Input/Code"
import { useEffect, useState } from "react"
import { InputProps, AddProps, SideBarProps } from "@/types"
import { useMutateNote } from "@/hooks/useMutateNote"
import useStoreUser from "@/store/user"
export default function AddNote({ status, data, onOpen }: { status: string, data: InputProps, onOpen: () => void }) {
    const currentUser = useStoreUser((state) => state.currentUser)
    const [input, setInput] = useState<InputProps>({ id: 0, user_id: currentUser.id, error_title: '', language: 'javascript', error_details: '', before_code: '', error_reason: '', solution_details: '', after_code: '', created_at: new Date(), updated_at: new Date() });
    const [add, addInput] = useState<AddProps>({ user_id: currentUser.id, error_title: '', language: 'javascript', error_detail: '', before_code: '', error_reason: '', solution_detail: '', after_code: '' });
    const { createNoteMutation, updateNoteMutation } = useMutateNote()
    useEffect(() => {
        if (input.error_title.length > 0 || status === "edit") {
            setInput(data)
        } else {
            addInput({ user_id: currentUser.id, error_title: '', language: 'javascript', error_detail: '', before_code: '', error_reason: '', solution_detail: '', after_code: '' })
        }
    }, [data, status])

    const addClick = async () => {
        try {
            if (status === "edit") {
                console.log(input);
                await updateNoteMutation.mutateAsync(input)
            } else {
                console.log(input);
                await createNoteMutation.mutateAsync(add)
            }
            onOpen()
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Text role="title">{status === "edit" ? "Edit Note" : "Add Note"}</Text>
            <div className="flex-[1_0_0] flex flex-col pl-5 gap-4">
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Title</Text>
                    <TextField
                        value={input.error_title}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, error_title: value }));
                            addInput((add) => ({ ...add, error_title: value }));
                        }}
                        name="errorTitle"
                    ></TextField>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Laguage</Text>
                    <SelectBox
                        value={input.language}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, language: value }));
                            addInput((add) => ({ ...add, language: value }));
                        }}
                    ></SelectBox>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Details</Text>
                    <TextArea
                        state="detail"
                        data={input.error_details}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, error_details: value }));
                            addInput((add) => ({ ...add, error_details: value }));
                        }}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Code before modification</Text>
                    <Code
                        language={input.language}
                        beforecode={input.before_code}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, before_code: value }));
                            addInput((add) => ({ ...add, before_code: value }));
                        }}
                    ></Code>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Error Reason</Text>
                    <TextArea
                        state="reason"
                        data={input.error_reason}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, error_reason: value }));
                            addInput((add) => ({ ...add, error_reason: value }));
                        }}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Solution Details</Text>
                    <TextArea
                        state="solution"
                        data={input.solution_details}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, solution_details: value }));
                            addInput((add) => ({ ...add, solution_details: value }));
                        }}
                    ></TextArea>
                </div>
                <div className="justify-self-stretch flex flex-col gap-4">
                    <Text role="errorDetails">Code before modification</Text>
                    <Code
                        language={input.language}
                        beforecode={input.after_code}
                        onChange={(value: string) => {
                            setInput((input) => ({ ...input, after_code: value }));
                            addInput((add) => ({ ...add, after_code: value }));
                        }}
                    ></Code>
                </div>
                {status === "addnote" ? (
                    <div className="justify-self-stretch flex flex-row gap-4 justify-end">
                        <Button role="add" onClick={addClick}></Button>
                    </div>
                ) : (
                    <div className="justify-self-stretch flex flex-row gap-4 justify-end">
                        <Button role="save" onClick={addClick}></Button>
                    </div>
                )}
            </div>
        </>
    )
}
