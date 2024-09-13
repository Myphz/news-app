import { useNewsStore } from "@/stores/news";
import { Button } from "./button";

const TOPICS = [
  "World",
  "Nation",
  "Business",
  "Technology",
  "Entertainment",
  "Science",
  "Sports",
  "Health",
] as const;

export default function Filters() {
  const searchArticlesByTopic = useNewsStore(
    (state) => state.searchArticlesByTopic
  );

  return (
    <div className="flex gap-4">
      {TOPICS.map((topic) => (
        <Button
          onClick={() => searchArticlesByTopic(topic.toUpperCase())}
          key={topic}
          variant="secondary"
          className="text-2xl p-2"
        >
          {topic}
        </Button>
      ))}
    </div>
  );
}
