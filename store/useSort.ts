import { create } from 'zustand'


interface FilterState {
    filter: {
        sortBy: string
        state: 'up' | 'down' | null
    },
    setFilter: (arg0: string, arg1: 'up' | 'down' | null) => void
}

const useSearch = create<FilterState>((set) => ({
    filter: {
        sortBy: 'price',
        state: null
    },
    setFilter: (arg0, arg1) => set(() => ({ filter: { sortBy: arg0, state: arg1 } }))
}))

export default useSearch