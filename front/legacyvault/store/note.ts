import { create } from 'zustand'

type EditedNote = {
    id: number,
    user_id: number,
    ErrorTitle: string,
    language: string,
    ErrorDetails: string,
    BeforeCode: string,
    ErrorReason: string,
    SolutionDetails: string,
    AfterCode: string
}

type State = {
    editedNote: EditedNote
    updateEditedNote: (payload: EditedNote) => void
    resetEditedNote: () => void
}

const useStoreNote = create<State>((set) => ({
    editedNote: { id: 0, user_id: 0, ErrorTitle: '', language:'', ErrorDetails: '', BeforeCode:'', ErrorReason:'', SolutionDetails:'', AfterCode:'' },
    updateEditedNote: (payload) =>
        set({
            editedNote: payload,
        }),
    resetEditedNote: () => set({ editedNote: { id: 0, user_id: 0, ErrorTitle: '', language:'', ErrorDetails: '', BeforeCode:'', ErrorReason:'', SolutionDetails:'', AfterCode:'' } }),
}))

export default useStoreNote