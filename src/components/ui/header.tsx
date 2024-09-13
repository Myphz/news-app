import { Input } from "./input";
import { Button } from "./button";

export default function Header() {
  return (
    <header className="flex w-1/3 items-center gap-2">
      <Input type="search" placeholder="Search..." />
      <Button variant="secondary">Search</Button>
    </header>
  );
}
