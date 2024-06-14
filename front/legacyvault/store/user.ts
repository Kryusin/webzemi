import { create } from 'zustand'

type User = {
    id: number,
    name: string,
    email: string
}

type State = {
    user: User
    updateUser: (payload: User) => void
    resetUser: () => void
}

const useStoreUser = create<State>((set) => ({
    user: { id: 0, name: '' , email: ''},
    updateUser: (payload) =>
        set({
            user: payload,
        }),
    resetUser: () => set({ user: { id: 0, name: '' , email: ''} }),
}))

export default useStoreUser