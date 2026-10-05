import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Jangho Lee",
  DESCRIPTION: "Atmospheric scientist at NYU studying AI-driven data downscaling, urban climate, and climate impacts.",
  AUTHOR: "Jangho Lee",
}

// Last Updated Date
export const LAST_UPDATED = "July 14, 2026"

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
  DESCRIPTION: "AI-driven environmental data, urban climate and nature-based solutions, and climate impacts and responses.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search publications and research.",
}

// Manual Latest Updates
export const LATEST_UPDATES = [
  {
    title: "Model architecture and calibration period sensitivity in controlled super-resolution reconstruction of near-surface air temperature",
    url: "/publications",
    type: "Publication",
    summary: "In press in Machine Learning: Earth, examining model-architecture and calibration-period sensitivity in near-surface air-temperature super-resolution."
  },
  {
    title: "CROCUS Micronet: A distributed, AI-enabled urban observation system in Chicago",
    url: "/publications",
    type: "Publication",
    summary: "In press in the Bulletin of the American Meteorological Society, presenting an AI-enabled distributed urban observation system in Chicago."
  },
  {
    title: "Spatiotemporal response of urban bike-sharing ridership to weather, air quality, and future climate change in major U.S. cities",
    url: "/files/2026_LeeBerkelhammer_JEMA.pdf",
    type: "Publication",
    summary: "PDF now available for the Journal of Environmental Management article on urban bike-sharing, environmental conditions, and future climate change."
  },
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
    title: "How far can we downscale? Resolution limits and physical interpretability of diffusion models for African precipitation",
    url: "/publications",
    type: "Publication",
    summary: "Recent paper in Machine Learning: Earth on diffusion-model downscaling for African precipitation."
  },
  {
    title: "AGU GEC Early Career Spotlight",
    url: "/news/agu-spotlight",
    type: "News",
    summary: "Honored to be featured in the AGU Global Environmental Change Early Career Spotlight."
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
