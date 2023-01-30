import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Rifaldhi AW",
  description: "A software engineer who loves to build modern web apps.",
  mainNav: [],
  links: {
    twitter: "https://twitter.com/rifaldhiaw",
    github: "https://github.com/rifaldhiaw",
  },
}
