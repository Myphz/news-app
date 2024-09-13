import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (value: string) => void;
  getSearch: () => SearchStore["search"];
};

export const useSearchStore = create<SearchStore>((set, get) => ({
  search: "",
  setSearch: (value: string) => set({ search: value }),
  getSearch: () => get().search,
}));
