import { Fragment } from "react"
import Head from "next/head"
import { Activity, LayoutDashboard, User, Video } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Layout } from "@/components/layout"

const techs = [
  "Next.js",
  "React.js",
  "Svelte",
  "React Native",
  "Flutter",
  "Tailwind CSS",
  "Radix UI",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Jest",
  "Vitest",
  "Playwright",
  "Vercel",
  "Cloudflare",
  "GitHub",
]

const projects = [
  {
    title: "Rifaldhi AW",
    description: "Personal website you are currently visiting",
    url: "https://rifaldhiaw.com",
    github: "https://github.com/rifaldhiaw/personal-web",
    icon: User,
  },
  {
    title: "Admin Dashboard",
    description: "Simple and Extensible Admin dashboard demo app",
    url: "https://admin.rifaldhiaw.com",
    github: "https://github.com/rifaldhiaw/test-admin",
    icon: LayoutDashboard,
  },
  {
    title: "Video Call App",
    description: "Simple peer-to-peer video call app, Google Meet clone",
    url: "https://video.rifaldhiaw.com",
    github: "https://github.com/rifaldhiaw/konekty",
    icon: Video,
  },
  {
    title: "Habit Tracker App",
    description: "Simple habit tracker app built with Flutter",
    url: "https://play.google.com/store/apps/details?id=com.aweydev.ezhabit&hl=id&gl=US",
    github: "",
    icon: Activity,
  },
]

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Rifaldhi AW</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container my-44">
        <div className="flex flex-col items-center gap-4">
          <h1
            className={cn(
              "font-extrabold leading-tight tracking-tighter",
              "text-3xl sm:text-3xl md:text-5xl lg:text-7xl"
            )}
          >
            {siteConfig.name}
          </h1>
          <p className="text-center text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <section
        className={cn("p-8", "bg-slate-50 dark:bg-slate-800", "text-center")}
      >
        <div
          className={cn(
            "mx-auto",
            "max-w-[900px]",
            "text-slate-500 dark:text-slate-400",
            "flex flex-wrap justify-center"
          )}
        >
          {techs.map((tech, i) => (
            <Fragment key={tech}>
              <span
                className={cn(
                  "cursor-default rounded-3xl px-4 py-1",
                  "transition-all",
                  "text-xs md:text-base",
                  "hover:text-slate-900 dark:hover:text-slate-300",
                  "hover:shadow-lg dark:hover:shadow-slate-700",
                  "hover:bg-white dark:hover:bg-slate-900",
                  "hover:font-semibold"
                )}
              >
                {tech}
              </span>
              <span className="mx-2">{i < techs.length - 1 && "."}</span>
            </Fragment>
          ))}
        </div>
      </section>

      <section className={cn("container", "my-40", "text-center")}>
        <h2 className="my-24 text-4xl font-bold">Projects</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={cn(
                "cursor-pointer gap-5",
                "flex items-center md:flex-col",
                "border border-slate-200 dark:border-slate-700",
                "rounded-2xl p-8",
                "max-w-[250px]",
                "transition-all hover:shadow-xl dark:hover:shadow-slate-800"
              )}
              onClick={() => window.open(project.url, "_blank")}
            >
              <project.icon size={32} />
              <div className="flex flex-col text-left md:text-center">
                <div>{project.title}</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">
                  {project.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-20"></div>
    </Layout>
  )
}
