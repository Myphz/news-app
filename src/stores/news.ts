import { Article } from "@/app/api/news/route";
import { createWithEqualityFn } from "zustand/traditional";
import { useSearchStore } from "./search";

type NewsStore = {
  articles: Article[];
  isLoading: boolean;
  searchArticles: () => Promise<void>;
};

export const useNewsStore = createWithEqualityFn<NewsStore>()((set) => ({
  articles: [],
  isLoading: false,

  searchArticles: async () => {
    set((state) => ({ ...state, articles: [], isLoading: true }));

    const search = useSearchStore.getState().search;

    const res = await fetch(`/api/news?query=${encodeURIComponent(search)}`);
    const articles = await res.json();

    set((state) => ({ ...state, articles, isLoading: false }));
  },
}));
