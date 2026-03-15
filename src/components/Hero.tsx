export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-muted text-sm mb-3 tracking-widest uppercase">
          Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-text leading-none tracking-tight mb-4">
          Caleb Galdston
          <span className="cursor-blink text-accent">_</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted mt-4 mb-6">
          Math-CS &middot; Data Science
        </p>
        <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
          UCSD Math-CS grad based in Boston. I build machine learning systems
          for climate, physics, music, and sports — and I&apos;m looking for my
          next role in data science.
        </p>
        <div className="flex gap-4 mt-10">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-text text-bg text-sm font-medium rounded-md hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-border text-muted text-sm font-medium rounded-md hover:text-text hover:border-text transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
