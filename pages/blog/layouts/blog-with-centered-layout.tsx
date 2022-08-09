/**These are necessary imports / components for the page */
import PageLayout from "../../../src/layouts/PageLayouts";
import { ImageSize } from "../../../src/shared/enums";
import Image from "../../../src/components/ArticleImage";
import ArticleHeader from "../../../src/components/ArticleHeader";
import Text from "../../../src/components/Text";
import List from "../../../src/components/List";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogcentered>
            <ArticleHeader />
            <hr className="mb-5" />
            <Text p>
                This current article made using <b>blogcentered</b> layout. This layout will be used to write your blog posts or articles.
            </Text>

            <Text subtitle className="mt-10 md:text">
                How to use
            </Text>
            <Image src='/public/images/page-layouts/how-to-use-centered-layout.svg' alt="how to use article with centered layout | webexpe.com" size={ImageSize.FUll} />
            <Text p>
                The above image gives you a demo on how to use the layout. If you want to see this in action check this article file <br />
                <u>blog-with-centered-layout.tsx</u> in <u>pages/blog/layouts</u>.
            </Text>
            <Text subtitle className="mt-10 md:text">
                Features
            </Text>
            <List>
                <li>
                    This layout is of contained width and centred, this is to keep the article / blog posts style consistent.
                </li>
                <li>
                    In the bottom, we have author details and more articles from the author.
                </li>
            </List>
        </PageLayout>
    )
}

export default Article;