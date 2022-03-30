/**These are necessary imports / components for the page */
import BlogLayout from "../../layouts/BlogLayouts";
import { ArticleImageWidths, BlogLayouts } from "../../shared/enums";
import ArticleImage from "../../components/ArticleImage";
/**These are necessary imports / components for the page */

const SimpleBurgerMenuUsingCSS = () => {
    return (
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" caption="dummy caption" size={ArticleImageWidths.DEFAULT} />
            Simple Burger Menu Using CSS
        </BlogLayout>
    )
}
export default SimpleBurgerMenuUsingCSS;