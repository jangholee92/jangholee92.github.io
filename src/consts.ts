import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Jangho Lee",
  DESCRIPTION: "Postdoctoral Researcher at NYU, specializing in GeoAI and Urban Climate.",
  AUTHOR: "Jangho Lee",
}

// Last Updated Date
export const LAST_UPDATED = "April 18, 2026"

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

// Manual Latest Updates (Top 3) - Order: Pub, Pub, News
export const LATEST_UPDATES = [
  {
    title: "Imputation of urban environmental sensor data using gated attention bidirectional long short-term memory (GABiLSTM)",
    url: "/publications",
    type: "Publication",
    summary: "New methodology for Gap-Filling published in Environmental Monitoring and Assessment (2026)."
  },
  {
    title: "Quality Assessment and Control of Urban Environmental Sensors using Physical Thresholding and Machine Learning",
    url: "/publications",
    type: "Publication",
    summary: "New quality control framework published in Big Earth Data (2026)."
  },
  {
    title: "AGU GEC Early Career Spotlight",
    url: "/news/agu-spotlight",
    type: "News",
    summary: "Honored to be featured in the AGU Global Environmental Change (GEC) Early Career Spotlight."
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
