import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const email = "your.email@example.com"; // <-- change this

  return (
    <footer className="relative overflow-hidden border-t border-black/5 py-10 dark:border-white/10">
      {/* Soft aurora hint */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-pink-200/30 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute right-0 -top-24 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-500/10" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            © {new Date().getFullYear()} Your Name
          </p>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-3">
          <FooterIcon href="https://github.com/" label="GitHub">
            <Github className="h-4 w-4" />
          </FooterIcon>

          <FooterIcon href="https://www.linkedin.com/" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterIcon>

          <FooterIcon href={`mailto:${email}`} label="Email">
            <Mail className="h-4 w-4" />
          </FooterIcon>

        </div>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="
        inline-flex h-10 w-10 items-center justify-center rounded-xl
        border border-black/10 bg-white/60 text-gray-900
        transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm
        dark:border-white/10 dark:bg-white/5 dark:text-white
      "
    >
      {children}
    </a>
  );
}
