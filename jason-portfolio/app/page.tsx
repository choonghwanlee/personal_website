"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import TypewriterComponent from "typewriter-effect";
import { Github, ExternalLink, Mail } from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const roles = ["Founder", "Software Engineer", "ML Engineer"];
  const experiences = [
    {
      company: "Hotplate",
      role: "Software Engineer Intern",
      period: "May – August 2023",
      location: "San Fracisco, CA",
      description: [
        "Developed automated CRM tool with OpenAI API that classifies lead dropout/conversion using outbound message history",
        "Decreased time spent manually evaluating leads by 30% with a LangChain LLM agent that analyzes a lead's online store",
      ],
    },
    {
      company: "Uizard",
      role: "ML Research Assistant",
      period: "September – December 2020",
      location: "Remote",
      description: [
        "Researched methods to improve the Transformer architecture's UI layout understanding",
        "Implemented novel tree-based positional encoding for the LayoutLM architecture",
        "Optimized memory usage by 80% via pruning outlier nodes, reducing diemnsionality & filtering irrelevant tokens",
      ],
    },
    {
      company: "Lane Crawford",
      role: "Associate Data Scientist",
      period: "April - December 2020",
      location: "Hong Kong SAR",
      description: [
        "Improved new prodcut demand forecasting by 15% using scikit-learn to build an ensemble of ARIMA and Random Forest models",
        "Implemented an image retrieval model using PyTorch that matches user outfits to similar internal products",
        "Received return offer for a full-time position after summer internship",
      ],
    },
  ];
  const projects = [
    {
      title: "Ganglion Medical",
      description:
        "A mobile medical device that analyzes the pupillary light reflex to help sports teams and neurocritical care units detect brain stroke & concussions. Trained & curated dataset for a video pupil tracking algorithm with 94% precision.",
      image: "/images/ganglion.png?height=400&width=600",
      tags: ["TypeScript", "Flask", "Google Cloud", "Firebase", "PyTorch"],
      links: { live: "https://www.ganglion.ai/" },
    },
    {
      title: "Evalon",
      description:
        "A chatbot QA software that enables enterprise clients to stress test their LLMs before production. Winner of Best LLM Evaluations @Duke AI Hackathon 2024.",
      image: "/images/evalon_manual_qa.png?height=400&width=600",
      tags: ["React", "NextJS", "FastAPI", "Supabase", "OpenAI"],
      links: {
        github: "https://github.com/choonghwanlee/llm_qa",
        live: "https://devpost.com/software/evalon-automated-stress-testing-qa-of-chatbots",
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-100">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-700 bg-[#0a192f]/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="text-[#64ffda]">JL</div>
          <div className="hidden space-x-8 md:flex">
            {["About", "Experience", "Work", "Contact"].map((item, i) => (
              <a
                key={item}
                href={`#${
                  item.toLowerCase() === "work"
                    ? "projects"
                    : item.toLowerCase()
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(
                      item.toLowerCase() === "work"
                        ? "projects"
                        : item.toLowerCase()
                    )
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={cn(
                  "text-sm transition-colors hover:text-[#64ffda]",
                  activeSection ===
                    (item.toLowerCase() === "work"
                      ? "projects"
                      : item.toLowerCase()) && "text-[#64ffda]"
                )}
              >
                <span className="text-[#64ffda]">0{i + 1}.</span> {item}
              </a>
            ))}
          </div>
          <Link
            href="https://drive.google.com/file/d/1o4XdAh7QnV5fbXZ6djk2Wwk5Fx2BEtqO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-[#64ffda] text-[#64ffda] font-bold"
            >
              Resume
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen py-20 items-center px-4 pt-16"
      >
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#64ffda]"
          >
            👋 Hello World, my name is
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-6xl font-bold text-gray-100"
          >
            Jason Lee.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-4xl font-bold text-gray-100 flex items-center gap-2"
          >
            I am a{" "}
            <span className="text-[#64ffda]">
              <TypewriterComponent
                options={{
                  strings: roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-xl text-gray-100"
          >
            I am an incoming Software Engineer @Stripe passionate about building
            safe & socially impactful AI software
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="flex items-center text-2xl font-bold text-gray-100">
            <span className="text-[#64ffda]">01.</span>
            <span className="ml-2">About Me</span>
            <span className="ml-4 h-px flex-1 bg-gray-700" />
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div className="space-y-4 text-gray-100">
              <p>
                Hello! My name is Jason and I am a Master&apos;s in AI student
                @Duke (grad. Spring &apos;25). I started coding in high school
                and have since developed a passion for startups. I believe AI
                can help tackle some of our world&apos;s biggest challenges and
                aspire to build software that unlocks its potential. At the same
                time, I aim to prevent its misuse through research &
                commercialization of AI safety.
              </p>
              <p>
                Fast-forward to today, and I have had the privilege of interning
                at 3 different startups, gaining experience in software, data
                science and ML. I&apos;m also founding Ganglion Medical, a
                mobile medical device for ICU patient monitoring and concussion
                testing.
              </p>
              <div className="mt-8">
                <h3 className="mb-4 text-gray-100">
                  Technologies I have been working with:
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    "TypeScript",
                    "React/React Native",
                    "Python",
                    "PostgreSQL",
                    "Flask/FastAPI",
                    "Google Cloud",
                    "PyTorch",
                    "Transformers",
                  ].map((tech) => (
                    <li key={tech} className="flex items-center">
                      <span className="mr-2 text-[#64ffda]">▹</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative group">
              <div
                className="relative z-10 overflow-hidden rounded-lg"
                style={{ width: "100%", height: "550px" }}
              >
                <Image
                  src="/images/IMG_4582.jpg"
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center" // or 'center', 'bottom', etc.
                />
                <div className="absolute inset-0 mix-blend-multiply" />
              </div>
              <div className="absolute -inset-0.5 rounded-lg bg-[#64ffda] opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="flex items-center text-2xl font-bold text-gray-100">
            <span className="text-[#64ffda]">02.</span>
            <span className="ml-2">Where I Worked</span>
            <span className="ml-4 h-px flex-1 bg-gray-700" />
          </h2>
          <div className="mt-12">
            <Tabs
              defaultValue={experiences[0].company}
              className="w-full flex h-full"
            >
              <TabsList className="w-[200px] flex-col items-start h-full">
                {experiences.map((exp) => (
                  <TabsTrigger
                    key={exp.company}
                    value={exp.company}
                    className="w-full justify-start rounded-none border-l-2 border-gray-700 px-5 py-3 text-left font-mono font-bold text-sm text-gray-300 hover:bg-gray-800/50 hover:text-[#64ffda] data-[state=active]:border-[#64ffda] data-[state=active]:text-[#64ffda]"
                  >
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="flex-grow">
                {experiences.map((exp) => (
                  <TabsContent
                    key={exp.company}
                    value={exp.company}
                    className="mt-0 ml-8"
                  >
                    <h3 className="text-xl font-semibold text-gray-200">
                      {exp.role}{" "}
                      <span className="text-[#64ffda]">@ {exp.company}</span>
                    </h3>
                    <p className="mt-1 text-sm text-gray-300">
                      {exp.period}, {exp.location}
                    </p>
                    <ul className="mt-4 space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex text-gray-300">
                          <span className="mr-2 text-[#64ffda]">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="flex items-center text-2xl font-bold text-gray-100">
            <span className="text-[#64ffda]">03.</span>
            <span className="ml-2">Some Things I Built</span>
            <span className="ml-4 h-px flex-1 bg-gray-700" />
          </h2>
          <div className="mt-12 space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={cn(
                  "relative grid gap-4 md:grid-cols-2",
                  i % 2 === 1 && "md:text-right"
                )}
              >
                <div
                  className={cn("relative z-10", i % 2 === 1 && "md:order-2")}
                >
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.title}
                  </h3>
                  <div className="mt-4 rounded bg-gray-800/50 p-6 backdrop-blur">
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-3 text-sm text-gray-300">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.links?.github}
                      className="text-gray-100 hover:text-[#64ffda]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.links?.live}
                      className="text-gray-100 hover:text-[#64ffda]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div
                  className={cn(
                    "relative aspect-video overflow-hidden rounded-lg",
                    i % 2 === 1 && "md:order-1"
                  )}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-4 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-bold text-gray-100">
            <span className="text-[#64ffda]">04. What is Next?</span>
          </h2>
          <h3 className="mt-4 text-5xl font-bold text-gray-100">
            Get In Touch
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-gray-100">
            I am not currently looking for new opportunities, but I would be
            happy to connect with anyone! Please reach out via email.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 border-[#64ffda] text-[#64ffda]"
            asChild
          >
            <a href="mailto:cl491@duke.edu">
              <Mail className="mr-2 h-4 w-4" />
              Say Hello
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
