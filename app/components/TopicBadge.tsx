import { Topic, topicMeta } from "@/lib/content";

interface TopicBadgeProps {
  topic: Topic;
}

export default function TopicBadge({ topic }: TopicBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--navy)]">
      {topicMeta[topic].label}
    </span>
  );
}
