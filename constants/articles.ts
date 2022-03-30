import { Authors } from "../shared/enums";
import { IArticle } from "../shared/interfaces";
import { CATEGORY_A } from '../constants/categories';
import { AUTHORS } from '../constants/BLOG_CONSTANTS';

const articles: IArticle[] = [
  {
    author: AUTHORS.mayur,
    thumbnail: "https://picsum.photos/300/200",
    tags: ["css", "css animations", "css tricks"],
    date: "March 03 2022",
    articleTitle: "Simple Burger menu using CSS",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    path: "",
  },
  {
    author: AUTHORS.rupali,
    category: CATEGORY_A,
    thumbnail: "https://picsum.photos/300/200",
    tags: ["react js", "react redux store", "redux"],
    date: "March 03 2022",
    articleTitle: "Understand and implement redux store",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    path: "",
  },
  {
    author: AUTHORS.rupali,
    category: CATEGORY_A,
    thumbnail: "https://picsum.photos/300/200",
    tags: ["react js", "react redux store", "redux"],
    date: "March 03 2022",
    articleTitle: "Understanding somethig else",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    path: "",
  },
];

export default articles;