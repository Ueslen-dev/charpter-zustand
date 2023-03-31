import { create } from "zustand"

export type UserType = {
    name: string,
    email: string
}

export interface UserStoreProps {
    users: UserType[],
    version: number,
    addUser: (user: UserType) => void,
    changeVersion: () => void
}

const userStore = create<UserStoreProps>((set) => ({
    users: [],
    isLoading: false,
    version: 1,

    addUser: (user: UserType) => {
       new Promise(() => {
        setTimeout(() => {
            set((state) => ({
                users: [...state.users, user]
            }))
           }, 500)
       })
    },
    
    changeVersion: () => {
        set((state) => ({
            ...state,
            version: state.version + 1
        }))
    }
}))

export default userStore