import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/cgaldston",
    display: "cgaldston",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/calebgaldston",
    display: "calebgaldston",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:calebgaldston@gmail.com",
    display: "calebgaldston@gmail.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-muted uppercase tracking-widest mb-12">
          Contact
        </h2>

        <p className="text-muted text-base mb-10 max-w-lg leading-relaxed">
          Open to data science roles and interesting problems. Reach out
          anytime.
        </p>

        <ul className="space-y-4">
          {LINKS.map(({ icon: Icon, label, href, display }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-md border border-border bg-surface text-muted group-hover:text-text group-hover:border-text transition-colors">
                  <Icon size={16} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-muted uppercase tracking-wider">
                    {label}
                  </span>
                  <span className="text-sm text-text group-hover:text-accent transition-colors">
                    {display}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
