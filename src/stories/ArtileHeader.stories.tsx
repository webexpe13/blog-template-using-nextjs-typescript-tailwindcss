import ArticleHeader from "../components/ArticleHeader";
import { MAYUR } from "../constants/BLOG_CONSTANTS";
import { ArticleHeaderLayouts } from "../shared/enums";
// import '../styles/global.scss'

export default {
    title: "Article Headers",
    component: ArticleHeader 
}

const ArticleHeaderData = {
    author: MAYUR,
    date: "March 03 2022",
    articleTitle: "Article Title Lorem ipsum dolor sit amet, consectetur",
    tags: ["css", "css animations", "css tricks"],
    thumbnail: "https://picsum.photos/300/200",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

const Template = (args : any) => <ArticleHeader {...args} />

export const DefatultArticleHeader = () => <ArticleHeader type={ArticleHeaderLayouts.DEFAULT} headerData={ArticleHeaderData} />
export const CenteredArticleHeader = () => <ArticleHeader type={ArticleHeaderLayouts.CENTERED} headerData={ArticleHeaderData} />
export const ArticleHeaders: any = Template.bind({});

ArticleHeaders.args = {
    type: ArticleHeaderLayouts.CENTERED,
    headerData: ArticleHeaderData
}