import { IAuthors, ITHEME } from "../shared/interfaces";

export const THEME: ITHEME = {
  "light": {
    bg: "#F5F5F5",
    navBg: "#FFFFFF",
    color: "#000000",
  },
  "dark": {
    bg: "#191A32",
    navBg: "#24243B",
    color: "#FFFFFF",
  },
};

export const THEME_ICONS = {
  "light": {
    search: "/svg/search-dark.svg",
    insta: "/svg/instagram-dark.svg",
    twitter: "/svg/twitter-dark.svg",
    linkedin: "/svg/linkedin-dark.svg",
    themeToggle: "/svg/theme-toggle-light.svg",
    github: "/svg/github-dark.svg",
  },
  "dark": {
    search: "/svg/search-light.svg",
    insta: "/svg/instagram-light.svg",
    twitter: "/svg/twitter-light.svg",
    linkedin: "/svg/linkedin-light.svg",
    themeToggle: "/svg/theme-toggle-dark.svg",
    github: "/svg/github-light.svg",
  },
};
