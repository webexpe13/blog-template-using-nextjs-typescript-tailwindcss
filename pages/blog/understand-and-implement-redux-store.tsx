import ArticleImage from "../../components/ArticleImage";
import { RUPALI } from "../../constants/BLOG_CONSTANTS";
import { CATEGORY_A } from "../../constants/categories";
import BlogLayout from "../../layouts/BlogLayouts";
import { ArticleImageWidths, BlogLayouts } from "../../shared/enums";

const UnderstandReduxStore = () => {
    return (
        <BlogLayout layout={BlogLayouts.WITH_SIDEBAR}>
            <ArticleImage src="/images/dummy-banner-img.jpg" alt="dummy image alt text" caption="dummy caption" size={ArticleImageWidths.DEFAULT} />
            Understandig redux store
        </BlogLayout>
    )
}

UnderstandReduxStore.preview = {
    author: RUPALI,
    category: CATEGORY_A,
    thumbnail: "https://picsum.photos/300/200",
    tags: ["react js", "react redux store", "redux"],
    date: "March 03 2022",
    articleTitle: "Understand and implement redux store",
    shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
}
export default UnderstandReduxStore;