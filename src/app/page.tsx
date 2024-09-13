"use client";

import Articles from "@/components/ui/articles";
import Searchbar from "@/components/ui/searchbar";

export default function Home() {
  return (
    <main className="mx-80 my-20 flex flex-col items-center gap-20">
      <Searchbar />
      <Articles />
    </main>
  );
}
