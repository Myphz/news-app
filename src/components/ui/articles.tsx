import { useNewsStore } from "@/stores/news";
import Article from "./article";

export default function Articles() {
  const [articles, isLoading] = useNewsStore((state) => [
    state.articles,
    state.isLoading,
  ]);

  if (isLoading) return <div>Loading...</div>;

  return articles.map((article) => (
    <Article key={article.title} {...article} />
  ));
}
