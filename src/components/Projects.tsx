import { getFeaturedRepos } from "@/lib/github";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const repos = await getFeaturedRepos();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-muted uppercase tracking-widest mb-12">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/cgaldston"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-text transition-colors underline underline-offset-4"
          >
            View all repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
