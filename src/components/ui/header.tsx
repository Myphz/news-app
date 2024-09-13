import { Input } from "./input";
import { Button } from "./button";
import { useSearchStore } from "@/stores/search";

export default function Header() {
  const setSearch = useSearchStore((state) => state.setSearch);

  return (
    <header className="flex w-1/3 items-center gap-2">
      <Input
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="secondary">Search</Button>
    </header>
  );
}
