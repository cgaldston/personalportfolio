import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import { getContributions } from "@/lib/github";

export default async function Home() {
  const contributions = await getContributions();

  return (
    <main className="min-h-screen bg-bg text-text">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <section id="activity" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm text-muted uppercase tracking-widest mb-12">
            GitHub Activity
          </h2>
          <GitHubActivity data={contributions} />
        </div>
      </section>

      <Contact />

      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-xs text-muted text-center">
          Built with Next.js + Tailwind &mdash; Caleb Galdston &copy;{" "}
          {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
}
