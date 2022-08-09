/**These are necessary imports / components for the page */
import PageLayout from "../../../src/layouts/PageLayouts";
import { ImageSize } from "../../../src/shared/enums";
import Image from "../../../src/components/ArticleImage";
import ArticleHeader from "../../../src/components/ArticleHeader";
import Text from "../../../src/components/Text";
import List from "../../../src/components/List";

const Article = () => {

    const ads = [
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestore-21&language=en_IN&marketplace=amazon&region=IN&placement=B09N3ZNHTY&asins=B09N3ZNHTY&linkId=c7ed1872e77f058de27c9274a3c008af&show_border=false&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestore-21&language=en_IN&marketplace=amazon&region=IN&placement=B08FN4Q6VZ&asins=B08FN4Q6VZ&linkId=10cf0c67665473cd37743f129cf50ad9&show_border=true&link_opens_in_new_window=true"></iframe>'
    ]
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar ads={ads}>
            <ArticleHeader />
            <hr className="mb-5" />
            <Text p>
                This current article made using <b>blogwithsidebar</b> layout. This layout will be used to write your blog posts or articles.
            </Text>

            <Text subtitle className="mt-10 md:text">
                How to use
            </Text>
            <Image src='/public/images/page-layouts/how-to-use-sidebar-article-layout.svg' alt="how to use article with sidebar layout | webexpe.com" size={ImageSize.FUll} />
            <Text p>
                The above image gives you a demo on how to use the layout. If you want to see this in action check this article file <br />
                <u>blog-with-sidebar-layout.tsx</u> in <u>pages/blog/layouts</u>.
            </Text>
            <Text subtitle className="mt-10 md:text">
                Features
            </Text>
            <List>
                <li>
                    This layout is of contained width i.e has a max width same as the navbar, this is to keep the article / blog posts style consistent.
                </li>
                <li>
                    In the sidebar on the right, we have author details and more articles from the author.
                </li>
                <li>
                    We can also place ads on the right sidebar.
                    <Image src='/public/images/page-layouts/how-to-show-ads-script.svg' alt="how to show ads | webexpe.com" className="mt-3 mb-0" />
                    The above image shows how to pass ads in the sidebar layout.
                </li>
            </List>
        </PageLayout>
    )
}

export default Article;