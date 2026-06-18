import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Jangho Lee",
  DESCRIPTION: "Postdoctoral Researcher at NYU, specializing in GeoAI and Urban Climate.",
  AUTHOR: "Jangho Lee",
}

// Last Updated Date
export const LAST_UPDATED = "May 30, 2026"

// CV Page
export const WORK: Page = {
  TITLE: "CV",
  DESCRIPTION: "Academic and professional history.",
}

// News Page
export const BLOG: Page = {
  TITLE: "News",
  DESCRIPTION: "Latest updates and spotlights.",
}

// Research Page
export const PROJECTS: Page = {
  TITLE: "Research",
  DESCRIPTION: "Primary research pillars.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search publications and research.",
}

// Manual Latest Updates (Top 3)
export const LATEST_UPDATES = [
  {
    title: "Climate Investment Challenge Winner",
    url: "/news/climate-investment-challenge",
    type: "News",
    summary: "Jangho Lee and Juyeon Kim won the Climate Investment Challenge as a team."
  },
  {
    title: "Google Cloud Platform Research Awards Program Grant",
    url: "/news/google-cloud-platform-research-award",
    type: "News",
    summary: "Awarded for Diffusion-Based Multi-Sensor Satellite Fusion for Land Surface Temperature Downscaling Across African Cities."
  },
  {
    title: "How Far Can We Downscale? Resolution Limits and Physical Interpretability of Diffusion Models for African Precipitation",
    url: "/publications",
    type: "Publication",
    summary: "Recent paper in Machine Learning: Earth on diffusion-model downscaling for African precipitation."
  }
]

// Links - Order: Home, CV, Research, Publications, News
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "CV", 
    HREF: "/work", 
  },
  { 
    TEXT: "Research", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Publications", 
    HREF: "/publications", 
  },
  { 
    TEXT: "News", 
    HREF: "/news", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "jangho.lee@nyu.edu",
    HREF: "mailto:jangho.lee@nyu.edu",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "jangholee92",
    HREF: "https://github.com/jangholee92"
  },
  { 
    NAME: "Google Scholar",
    ICON: "google-scholar",
    TEXT: "Google Scholar",
    HREF: "https://scholar.google.com/citations?user=wBEE2YAAAAAJ&hl=en&authuser=1"
  },
]
