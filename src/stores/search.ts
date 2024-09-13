import { createWithEqualityFn } from "zustand/traditional";

type SearchStore = {
  search: string;
  setSearch: (value: string) => void;
};

export const useSearchStore = createWithEqualityFn<SearchStore>()((set) => ({
  search: "",
  setSearch: (value: string) => set({ search: value }),
}));
