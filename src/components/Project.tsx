import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Virtual Order System (Retail Product Manager)",
    description:
      "A retail-focused web app built with Next.js that manages multiple shop inventories, product catalog, and orders with a clean admin-style dashboard experience.",
    tags: ["Next.js", "React", "TypeScript", "Dashboard", "Inventory"],
    image: "/images/virtual.png",
    github: "https://github.com/ammarabrahani/Virtual-Order-System-React-TS",
    demo: "",
  },
    {
    title: "Cloud Social Media App (AWS)",
    description:
      "A social media-style cloud app with CRUD features, posts, likes, comments, and views, built with React + Node and deployed on AWS services for scalable hosting.",
    tags: ["React", "Node.js", "AWS", "CRUD", "Cloud"],
    image: "/images/aws.webp",
    github: "https://github.com/ammarabrahani/cpp-project-backend",
    demo: "",
  },
  {
    title: "Deep Q-Learning Anomaly Detection",
    description:
      "An anomaly detection project using Deep Q-Learning, packaged with a FastAPI backend for running experiments and serving model predictions through API endpoints.",
    tags: ["Python", "DQL", "FastAPI", "ML", "Anomaly Detection"],
    image: "/images/code_ai.png",
    github: "https://github.com/ammarabrahani/deep-q-learning-anomaly-detection",
    demo: "",
  },
  {
    title: "Scalable Project Management Platform (DevOps CI/CD)",
    description:
      "A full-stack project management product built with React and Node.js, featuring a CI/CD pipeline with Jenkins and quality checks using SonarQube for production-ready deployments.",
    tags: ["React", "Node.js", "Jenkins", "SonarQube", "CI/CD"],
    image: "/images/devops.png",
    github: "#",
    demo: "",
  },
  {
    title: "OSHA Online Center (E-commerce Platform)",
    description:
      "An e-commerce platform for construction-related products with product listing, cart/checkout flow, and an admin-friendly structure for managing catalog and orders.",
    tags: ["E-commerce", "React", "Node.js", "Admin", "Checkout"],
    image: "/images/osha.png",
    github: "#",
    demo: "",
  },

];
export default function ProjectsSection() {
  return (
    <section className="relative overflow-hidden py-24" id="projects">
      {/* 🌸 Pastel background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Projects
          </h2>
<div className="mt-3 h-1 w-16 rounded bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300" />
          <p className="mt-5 max-w-3xl text-lg text-gray-600">
            A selection of projects showcasing my experience in full-stack
            development, cloud platforms, DevOps, and machine learning.
          </p>
        </div>

      {/* Cards */}
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {projects.map((p) => (
    <article
      key={p.title}
      className="
        group rounded-2xl bg-white/70 backdrop-blur-md
        border border-white/60 shadow-sm
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl
        bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200
      ">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-contain p-8 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">
          {p.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          {p.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="
                rounded-full px-3 py-1 text-xs font-semibold
                bg-gray-100 text-gray-700
                ring-1 ring-gray-200
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex h-11 items-center gap-2 rounded-md
                border border-gray-200 bg-white px-4
                text-sm font-semibold text-gray-800
                transition-all
                hover:bg-gray-100 hover:shadow-sm
              "
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}

          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex h-11 items-center gap-2 rounded-md
                bg-gray-900 px-4 text-sm font-semibold text-white
                transition hover:bg-gray-800
              "
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  ))}
</div>

      </div>
    </section>
  );
}
