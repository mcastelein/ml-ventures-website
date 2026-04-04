interface ProjectCardProps {
  category: string;
  description: string;
  outcomes: string[];
  tags: string[];
}

export default function ProjectCard({
  category,
  description,
  outcomes,
  tags,
}: ProjectCardProps) {
  return (
    <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent-teal/50 transition-all duration-300 flex flex-col gap-4">
      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent-teal/10 text-accent-teal w-fit">
        {category}
      </span>
      <p className="text-text-primary text-sm leading-relaxed">{description}</p>
      <ul className="space-y-1">
        {outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
            <span className="text-accent-teal mt-0.5 shrink-0">→</span>
            {outcome}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded bg-surface-elevated text-text-secondary border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
