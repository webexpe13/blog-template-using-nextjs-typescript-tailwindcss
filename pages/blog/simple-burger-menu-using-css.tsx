/**These are necessary imports / components for the page */
import BlogLayout from "../../src/layouts/BlogLayouts";
import { ArticleHeaderLayouts, ArticleImageWidths, BlogLayouts, SectionSeperatorTypes } from "../../src/shared/enums";
import ArticleImage from "../../src/components/ArticleImage";
import ArticleHeader from "../../src/components/ArticleHeader";
import Para from "../../src/components/Para";
import SectionTitle from "../../src/components/SectionTitle";
import SectionSeperator from "../../src/components/SectionSeperator";
import QuotedText from "../../src/components/QuotedText";
import { getArticleDetails } from "../../src/utils/utils";
/**These are necessary imports / components for the page */

const Article = () => {
    const ARTICLE_DETAILS = getArticleDetails();

    return (
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" size={ArticleImageWidths.FUll} />
            <ArticleHeader type={ArticleHeaderLayouts.DEFAULT} />
            <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Para>
            <SectionSeperator type={SectionSeperatorTypes.LINE} />
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

export default Article;