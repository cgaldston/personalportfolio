import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-muted uppercase tracking-widest mb-12">
          About
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Headshot */}
          <div className="shrink-0">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden border border-border bg-surface">
              <Image
                src="/headshot.jpg"
                alt="Caleb Galdston"
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              I&apos;m a recent graduate from UC San Diego with a B.S. in
              Mathematics–Computer Science. My work spans machine learning,
              statistical modeling, and data engineering—wherever interesting
              problems meet large-scale data.
            </p>
            <p>
              I&apos;ve applied deep learning to climate science, built
              reinforcement learning agents for sports analytics, and generated
              symbolic music with transformer models. I care about clean code,
              reproducible experiments, and making complex results legible.
            </p>
            <p>
              Outside of work I watch too much film, play volleyball, and
              maintain strong opinions about coffee.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Python",
                "PyTorch",
                "scikit-learn",
                "SQL",
                "R",
                "Next.js",
                "TypeScript",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-surface border border-border text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
