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
              I&apos;m a recent UCSD graduate with a B.S. in
              Mathematics–Computer Science and a minor in Data Science, now
              based in Boston. I&apos;m looking for roles where I can work on
              hard problems — I&apos;m drawn to the space where math, data, and
              software overlap.
            </p>
            <p>
              My projects span a wide range: applying deep learning to climate
              model emulation, training RL agents for volleyball and baseball
              analytics, detecting gravitational wave anomalies, and generating
              symbolic music with transformers. I&apos;m most comfortable in
              Python and PyTorch, and I care about reproducible, well-documented
              experiments.
            </p>
            <p>
              Outside of work I play volleyball, watch a lot of film, and follow
              baseball more closely than is probably healthy.
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
