import { Input } from "./input";
import { Button } from "./button";
import { useSearchStore } from "@/stores/search";
import { useNewsStore } from "@/stores/news";
import { FormEvent, useCallback } from "react";
import SearchIcon from "./search-icon";
import Filters from "./filters";

export default function Searchbar() {
  const setSearch = useSearchStore((state) => state.setSearch);
  const searchArticles = useNewsStore((state) => state.searchArticles);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      searchArticles();
    },
    [searchArticles]
  );

  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <form
        className="flex w-1/3 items-center gap-2 text-xl"
        onSubmit={onSubmit}
      >
        <Input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="secondary" className="text-2xl p-2">
          <SearchIcon />
        </Button>
      </form>
      <Filters />
    </div>
  );
}
