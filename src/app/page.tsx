"use client";

import Articles from "@/components/ui/articles";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <main className="mx-40 my-20 flex flex-col items-center">
      <Header />
      <Articles />
    </main>
  );
}
