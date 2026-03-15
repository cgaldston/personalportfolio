import { Repo } from "@/types/github";
import { Star, GitFork, ExternalLink } from "lucide-react";

const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3776ab",
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  R: "#198ce7",
  Jupyter: "#f37626",
  "Jupyter Notebook": "#f37626",
};

export default function ProjectCard({ repo }: { repo: Repo }) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] : "#9ca3af";

  const displayName = repo.name
    .replace(/-/g, " ")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl border border-border bg-surface hover:border-text/30 hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-sm font-semibold text-text leading-snug group-hover:text-accent transition-colors">
          {displayName}
        </h3>
        <ExternalLink
          size={14}
          className="shrink-0 text-muted group-hover:text-text transition-colors mt-0.5"
        />
      </div>

      {repo.description && (
        <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-3">
          {repo.description}
        </p>
      )}

      <div className="flex items-center gap-4 text-xs text-muted mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor }}
            />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={12} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={12} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
}
