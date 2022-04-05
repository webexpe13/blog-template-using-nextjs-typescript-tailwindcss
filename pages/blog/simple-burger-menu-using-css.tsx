/**These are necessary imports / components for the page */
import BlogLayout from "../../layouts/BlogLayouts";
import { ArticleImageWidths, BlogLayouts } from "../../shared/enums";
import ArticleImage from "../../components/ArticleImage";
import { MAYUR } from "../../constants/BLOG_CONSTANTS";
/**These are necessary imports / components for the page */

const PAGE_SEO = {
}

const SimpleBurgerMenuUsingCSS = () => {
    return (
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" caption="dummy caption" size={ArticleImageWidths.DEFAULT} />
            Simple Burger Menu Using CSS
        </BlogLayout>
    )
}

SimpleBurgerMenuUsingCSS.preview = {
    author: MAYUR,
    thumbnail: "https://picsum.photos/300/200",
    tags: ["css", "css animations", "css tricks"],
    date: "March 03 2022",
    articleTitle: "Simple Burger menu using CSS",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}

export default SimpleBurgerMenuUsingCSS;