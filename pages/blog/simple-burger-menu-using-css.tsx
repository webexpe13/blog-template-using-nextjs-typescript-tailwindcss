/**These are necessary imports / components for the page */
import BlogLayout from "../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, ArticleImageWidths, BlogLayouts, SectionSeperatorTypes } from "../../src/shared/enums";
import ArticleImage from "../../src/components/ArticleImage";
import { MAYUR } from "../../src/constants/BLOG_CONSTANTS";
import ArticleHeader from "../../src/components/ArticleHeader";
import { IArticleHeaderData } from "../../src/shared/interfaces";
import Para from "../../src/components/Para";
import SectionTitle from "../../src/components/SectionTitle";
import SectionSeperator from "../../src/components/SectionSeperator";
import QuotedText from "../../src/components/QuotedText";
/**These are necessary imports / components for the page */

const PAGE_SEO = {
}

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
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" size={ArticleImageWidths.DEFAULT} />
            <ArticleHeader type={ArticleHeaderLayouts.DEFAULT} headerData={ARTICLE_HEADER} />
            <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <SectionSeperator type={SectionSeperatorTypes.DOTS} />
            <SectionTitle>
                Lorem ipsum dolor sit amet, consectetur elit, <br /> sed do eiusmod tempor
            </SectionTitle>
            <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <QuotedText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </QuotedText>
            <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
        </BlogLayout>
    )
}

Article.preview = ARTICLE_HEADER
export default Article;