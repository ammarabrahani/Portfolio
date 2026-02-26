import Image from "next/image";
import { Award } from "lucide-react";

type Achievement = {
  org: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  badgeText?: string;
};

const achievements: Achievement[] = [
  {
    org: "IBM",
    title: "Frontend Development",
    description:
      "Completed professional training in frontend development covering modern UI principles, responsive design, and component-based architecture.",
    image: "/images/ibm.png",
    link: "#",
    badgeText: "Certification",
  },
  {
    org: "IBM",
    title: "Software Engineering",
    description:
      "Gained hands-on experience in software engineering fundamentals, development lifecycle, and best practices for building scalable applications.",
    image: "/images/ibm.png",
    link: "#",
    badgeText: "Certification",
  },
  {
    org: "Udemy",
    title: "Understanding TypeScript (Maximilian Schwarzmüller)",
    description:
      "In-depth course on TypeScript fundamentals, advanced types, generics, and integration with modern JavaScript and frameworks.",
    image: "/images/academind.jpg",
    link: "#",
    badgeText: "Certification",
  },

];


export default function AchievementsSection() {
  return (
    <section className="relative overflow-hidden py-24" id="achievements">
      {/* Soft pastel background blobs (matches your theme) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl dark:bg-pink-500/10" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-500/10" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Achievements And Certifications
            </h2>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 ring-1 ring-black/5 backdrop-blur dark:bg-white/10 dark:ring-white/10">
              <Award className="h-5 w-5 text-gray-900 dark:text-white" />
            </span>
          </div>

          <p className="mt-3 uppercase tracking-[0.18em] text-sm text-gray-500 dark:text-gray-400">
            Achievements, certifications, award letters and some cool stuff that I have done!
          </p>

          {/* Underline (no blues) */}
          <div className="mt-4 h-1 w-20 rounded bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a) => (
            <article
              key={a.title}
              className="
                group rounded-2xl bg-white/70 backdrop-blur-md
                border border-white/60 shadow-sm
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl
                dark:bg-white/5 dark:border-white/10
              "
            >
              {/* Top Logo Area */}
              <div className="flex items-center justify-center p-10">
                <div className="relative h-24 w-44">
                  <Image
                    src={a.image}
                    alt={a.org}
                    fill
                    className="object-contain"
                    
                  />
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {a.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {a.description}
                </p>

                {/* Button */}
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-7 inline-flex h-11 items-center justify-center rounded-md px-6
                      text-sm font-semibold
                      bg-gray-900 text-white
                      transition-all duration-200
                      hover:bg-gray-800
                      dark:bg-white/10 dark:text-white dark:hover:bg-white/15
                    "
                  >
                    {a.badgeText ?? "Certification"}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
