import { Authors } from "./enums";
export interface IAuthor {
  name: string;
  designation: string;
  github: string;
  linkedIn: string;
  bio?: string;
  profilePic?: string;
}

export interface IAuthors {
  mayur: IAuthor;
  rupali: IAuthor;
}

export interface IRoute {
  name: string;
  path: string;
  icon: string;
  breadcrums: string[];
}

export interface IAllRoutes {
  home: IRoute;
}

export interface IArticle {
  author: IAuthor;
  category?: ICategory;
  date: string;
  articleTitle: string;
  shortIntro: string;
  tags: string[];
  thumbnail: string;
  path: string;
}

export interface ICategory {
  name: string;
  label: string;
  path: string;
  icon?: string;
}

export interface IArticleCardColor {
  bg: string;
  font: String;
}