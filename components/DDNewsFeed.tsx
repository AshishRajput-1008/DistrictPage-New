type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

export default function FeedList({ news }: { news: NewsItem[] }) {
  return (
    <div className="space-y-2">
      {news.map((n, i) => (
        <a
          key={i}
          href={n.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <h3 className="font-medium">{n.title}</h3>
          <p className="text-xs text-gray-500">
            {n.pubDate} · {n.source}
          </p>
        </a>
      ))}
    </div>
  );
}
