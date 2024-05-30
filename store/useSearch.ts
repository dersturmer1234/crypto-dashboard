import { create } from 'zustand'

interface SearchState {
    searchQuery: string
    setSearchQuery: (arg0: string) => void
}

const useSearch = create<SearchState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set(() => ({ searchQuery: query }))
}))

export default useSearch