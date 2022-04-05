export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  github?: string;
  linkedIn?: string;
  facebook?: string,
  twitter?: string,
  instagram?: string,
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

export interface ITHEME {
  light: {
    bg: string;
    navBg: string;
    color: string;
  };
  dark: {
    bg: string;
    navBg: string;
    color: string;
  };
}

export interface ISocialLinks {
  linkedIn?: string;
  facebook?: string;
  github?: string;
  twitter?: string;
  instagram?: string;
}
