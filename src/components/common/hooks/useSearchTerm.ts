import { create } from 'zustand';

interface SearchState {
    searchTerm: string;
    setsearchTerm: (term: string) => void;
}

export const useSearchTerm = create<SearchState>()((set) => ({
    searchTerm: '',
    setsearchTerm: (term) => set({ searchTerm: term }),
}));
