"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  EnvelopeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Button from "./base/Button";
import { Github, GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import ProjectsSection from "./Project";
import AchievementsSection from "./Achievements";
import ContactSection from "./Contact";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const scrollToSection = (hash) => {
    const el = document.querySelector(hash);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // update URL hash without page jump
    window.history.replaceState(null, "", `${pathname}${hash}`);
  };

  const navigation = [
    { name: "Home", href: "#home", onclick: scrollToSection },
    { name: "About", href: "#about", onclick: scrollToSection },
    { name: "Projects", href: "#projects", onclick: scrollToSection },
    { name: "Contact", href: "#contact", onclick: scrollToSection },
    { name: "Achievements", href: "#achievements", onclick: scrollToSection },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white" id="home">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1" id="about">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold">AMMAR ABRAHANI</span>
              {/* <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm/6 font-semibold text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Resume <span aria-hidden="true"></span>
            </a>
          </div> */}
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-4xl py-24 sm:py-24 lg:py-24 flex justify-center items-center w-full gap-12 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div>
              <span className="text-sm font-semibold text-gray-900">
                Hello! I'm
              </span>
              <div className="flex items-center space-x-4">
                <h4 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl space-x-4">
                  Ammar Abrahani
                </h4>
                <div className="wave-emoji">
                  <Image
                    width={40}
                    height={40}
                    alt="👋"
                    draggable="false"
                    src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
                    style="height: 1em; width: 1em; margin: 0px 0.05em 0px 0.1em; vertical-align: -0.1em;"
                  />
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Full-Stack Developer
              </p>
              <p className="mt-4 text-base leading-7 text-gray-700">
                Building elegant solutions to complex problems with modern
                technologies.
              </p>
            </div>
            <div className="space-x-4 flex mt-4">
              <Button
                variant="primary"
                className="h-11 text-sm"
                text="Contact"
              />
              <a
                href="#"
                className="inline-flex items-center h-11 px-4 text-sm font-semibold text-gray-900 border rounded hover:bg-gray-100"
              >
                Projects
              </a>

              <div className="flex gap-4">
                <a className="icon-btn cursor-pointer">
                  <GithubIcon className="h-5 w-5" />
                </a>

                <a
                  className="icon-btn cursor-pointer"
                  href="https://www.linkedin.com/in/ammar-abrahani/"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>

                <a className="icon-btn cursor-pointer">
                  <EnvelopeIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="full md:w-1/2 flex justify-center items-center">
            <Image
              src="/images/carbon.png"
              alt="Profile picture"
              width={500}
              height={500}
              priority
              className="rounded-4xl object-cover"
            />
          </div>
        </div>

        <div>
          <ProjectsSection />
        </div>
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
