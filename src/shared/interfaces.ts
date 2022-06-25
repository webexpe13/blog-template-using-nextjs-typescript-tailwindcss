export interface IAuthor {
  profilePic?: string;
  name: string;
  designation?: string;
  bio?: string;
  social?: {
    icon: any;
    link: string;
  }[];
}

export interface IArticleHeaderData {
  author: IAuthor;
  date: string;
  articleTitle: string;
  tags: string;
  thumbnail: string;
  shortIntro: string;
  category?: string;
}

export interface iArticle {
  path: string;
  featureArticle?: boolean;
  preview: IArticleHeaderData,
  seo?: any
}