import { useSearchStore } from "@/stores/search";

export default function Articles() {
  const getSearch = useSearchStore((state) => state.getSearch);

  return <div>test</div>;
}
