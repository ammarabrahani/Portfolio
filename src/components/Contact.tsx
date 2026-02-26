"use client";

import { useMemo, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const email = "ammarabrahani@gmail.com"; 
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const params = new URLSearchParams({
      subject,
      body: message,
    });
    return `mailto:${email}?${params.toString()}`;
  }, [email, subject, message]);

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* Aurora background (theme) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Let&apos;s Connect <span className="align-middle">🤝</span>
            </h2>

            <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300" />

            <p className="mt-6 max-w-md text-lg leading-7 text-gray-600 dark:text-gray-300">
              I&apos;m currently looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="mt-8 flex items-center gap-4">
              <SocialIcon href="https://github.com/" label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIcon>

              <SocialIcon href="https://www.linkedin.com/" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>

              <SocialIcon href={`mailto:${email}`} label="Email">
                <Mail className="h-5 w-5" />
              </SocialIcon>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Prefer email?{" "}
              <a
                href={`mailto:${email}`}
                className="font-semibold text-gray-900 underline decoration-black/20 underline-offset-4 hover:decoration-black/40
                           dark:text-white dark:decoration-white/20 dark:hover:decoration-white/40"
              >
                {email}
              </a>
            </p>
          </div>

          {/* Right (Form) */}
          <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  Subject
                </label>
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Just saying hi"
                  className="
                    h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-gray-900
                    outline-none transition
                    focus:border-purple-300 focus:ring-2 focus:ring-purple-200/60
                    dark:border-white/10 dark:bg-black/20 dark:text-white
                    dark:focus:border-purple-400/40 dark:focus:ring-purple-500/20
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900 dark:text-white">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="I am reaching out..."
                  rows={6}
                  className="
                    w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900
                    outline-none transition
                    focus:border-purple-300 focus:ring-2 focus:ring-purple-200/60
                    dark:border-white/10 dark:bg-black/20 dark:text-white
                    dark:focus:border-purple-400/40 dark:focus:ring-purple-500/20
                  "
                />
              </div>

              <a
                href={mailtoHref}
                className="
                  inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl
                  bg-gray-900 text-base font-semibold text-white
                  transition-all duration-200
                  hover:bg-gray-800 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)]
                  dark:bg-white/10 dark:text-white dark:hover:bg-white/15
                "
              >
                Open Mailbox <ArrowUpRight className="h-5 w-5" />
              </a>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                This opens your default email app with the subject and message pre-filled.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function SocialIcon({
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
        inline-flex h-12 w-12 items-center justify-center rounded-xl
        border border-white/60 bg-white/70 text-gray-900 shadow-sm backdrop-blur-md
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-md
        dark:border-white/10 dark:bg-white/5 dark:text-white
      "
    >
      {children}
    </a>
  );
}