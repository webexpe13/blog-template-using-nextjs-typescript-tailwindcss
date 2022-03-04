import { Authors } from "../shared/enums";
import { IArticleCardColor, IAuthors } from "../shared/interfaces";

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

export const ARTICLE_CARD_COLORS: IArticleCardColor[] = [
  {
    bg: "208,232,102",
    font: "9,48,222",
  },
  {
    bg: "22,183,86",
    font: "244,247,210",
  },
  {
    bg: "217,0,58",
    font: "234,242,87"
  },
  {
    bg: "89,65,206",
    font: "247,253,198"
  },
  {
    bg: "18,4,99",
    font: "246,246,91"
  },
  {
    bg: "23,70,189",
    font: "73,231,94"
  },
  {
    bg: "226,251,133",
    font: "103,33,223"
  },
  {
    bg: "59,14,110",
    font: "26,195,246"
  },
  {
    bg: "83,5,139",
    font: "251,54,40"
  },
  {
    bg: "16,19,125",
    font: "101,225,82"
  }
];