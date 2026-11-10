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
              I&apos;m an M.S. student in Electrical and Computer Engineering
              at UC Santa Barbara, focusing on communications, control, and
              signal processing. Before that, I earned a B.S. in
              Mathematics-Computer Science with a minor in Data Science from
              UC San Diego. My interests center on optimization, control
              systems, and signal processing.
            </p>
            <p>
              Alongside grad school, I work remotely as a District Data
              Specialist for Fitchburg Public Schools in Massachusetts, where I
              build automated Java and SQL data pipelines, certify state
              reporting for a 5,500-student district, and built an enrollment
              projection model used for capacity planning.
            </p>
            <p>
              My projects span a wide range: applying deep learning to climate
              model emulation, building recommendation systems, training RL
              agents in gym environments, and generating symbolic music with
              transformers. I&apos;m currently looking for internships and
              roles in systems engineering, controls, and optimization.
            </p>
            <p>
              Outside of work, I spend my time powerlifting, running, skiing, reading,
              and obsessively following the Red Sox.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Python",
                "PyTorch",
                "MATLAB",
                "Simulink",
                "C/C++",
                "Java",
                "SQL",
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