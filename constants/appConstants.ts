import { Authors } from "../shared/enums";
import { IAuthors, ITHEME } from "../shared/interfaces";

export const AUTHORS: IAuthors = {
  [Authors.RUPALI]: {
    name: "Rupali Yadav",
    designation: "IT Analyst at TCS",
    github: "",
    linkedIn: "",
    bio: "",
    profilePic: "",
  },
  [Authors.MAYUR]: {
    name: "Mayur Nalwala",
    designation: "Software Engineer at Paytm",
    github: "",
    linkedIn: "",
    bio: "",
    profilePic: "",
  },
};

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

export const ARTICLE_CARD_THEME = {
  "light": {
    bg: "255, 255, 255",
    textColor: "45, 55, 72",
  },
  "dark": {
    bg: "35, 36, 59",
    textColor: "255, 255, 255",
  },
};

export const FEATURE_CARD_THEME = {
  "light": {
    bg: "255, 255, 255",
    textColor: "45, 55, 72",
  },
  "dark": {
    bg: "42, 43, 82",
    textColor: "255, 255, 255",
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
