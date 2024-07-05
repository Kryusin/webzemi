import { create } from 'zustand'

type User = {
    id: number,
    name: string,
    email: string
}

type State = {
    currentUser: User
    updateUser: (payload: User) => void
    resetUser: () => void
}

const useStoreUser = create<State>((set) => ({
    currentUser: { id: 0, name: '' , email: ''},
    updateUser: (payload) =>
        set({
            currentUser: payload,
        }),
    resetUser: () => set({ currentUser: { id: 0, name: '' , email: ''} }),
}))

export default useStoreUser