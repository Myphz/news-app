import type { Article } from "@/app/api/news/route";

type Props = Article;

export default function Article({ date, link, title }: Props) {
  return (
    <article className="border border-secondary rounded-sm px-6 py-4 w-full">
      <a href={link} target="_blank" className="flex flex-col gap-4">
        <header className="text-4xl font-bold">{title}</header>
        <div>{date}</div>
      </a>
    </article>
  );
}
