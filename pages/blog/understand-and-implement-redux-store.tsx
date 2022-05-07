import ArticleHeader from "../../src/components/ArticleHeader";
import ArticleImage from "../../src/components/ArticleImage";
import Para from "../../src/components/Para";
import QuotedText from "../../src/components/QuotedText";
import SectionSeperator from "../../src/components/SectionSeperator";
import SectionTitle from "../../src/components/SectionTitle";
import { MAYUR, RUPALI } from "../../src/constants/BLOG_CONSTANTS";
import BlogLayout from "../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, ArticleImageWidths, BlogLayouts, SectionSeperatorTypes, TextAlign } from "../../src/shared/enums";
import { IArticleHeaderData } from "../../src/shared/interfaces";

const ARTICLE_HEADER: IArticleHeaderData = {
    author: MAYUR,
    date: "March 03 2022",
    articleTitle: "Article Title Lorem ipsum dolor sit amet, consectetur",
    tags: ["css", "css animations", "css tricks"],
    thumbnail: "https://picsum.photos/300/200",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}
const Article = () => {
    return (
        <BlogLayout layout={BlogLayouts.CENTERED}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" size={ArticleImageWidths.DEFAULT} />
            <ArticleHeader type={ArticleHeaderLayouts.CENTERED} headerData={ARTICLE_HEADER} />
            <Para textAlign={TextAlign.RIGHT}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <SectionSeperator type={SectionSeperatorTypes.DOTS} />
            <SectionTitle textAlign={TextAlign.RIGHT}>
                Lorem ipsum dolor sit amet, consectetur elit, <br /> sed do eiusmod tempor
            </SectionTitle>
            <Para textAlign={TextAlign.RIGHT}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <QuotedText textAlign={TextAlign.RIGHT}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </QuotedText>
            <Para textAlign={TextAlign.CENTER}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
        </BlogLayout>
    )
}

Article.preview = {
    author: RUPALI,
    thumbnail: "https://picsum.photos/300/200",
    tags: ["react js", "react redux store", "redux"],
    date: "March 03 2022",
    articleTitle: "Understand and implement redux store",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
}
export default Article;