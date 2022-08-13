/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider  } from "../../../src/components";

const Article = () => {
    return (
        // pass blogcentered as show below for article page centered layout
        <PageLayout blogcentered>
            <Image src='/public/images/page-layouts/how-to-use-centered.svg' alt="how to use article with centered layout | webexpe.com" size={ImageSize.FUll} />
            <Text p>
                This current article made using <b>blogcentered</b> layout. This layout will be used to write your blog posts or articles.
            </Text>

            <Text subtitle className="mt-10 md:text">
                How to use
            </Text>
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
            <Seperator />
            <Text subtitle className="mt-10 md:text">
                Components Used to write this article
            </Text>
            <Text p>
                Check <u>blog-with-sidebar-layout.tsx</u> in <u>pages/blog/layouts</u> file to see all the mentioned components in use.
            </Text>
            <List>
                <li>
                    We have used the <b>{'<PageLayout blogwithsidebar/>'}</b> as shown in the above image.
                </li>
                <li>
                    <b>{'<Image />'}</b> tag for displaying images. <br /> To use image we have to import <b>Image</b> from components and <b>ImageSize</b> enum from enums. The Image size will help us to set the size of the image. <br /> Available sizes: <b>ImageSize.DEFAULT, ImageSize.FULL, ImageSize.MEDIUM, ImageSize.SMALL, ImageSize.XS</b>.
                    <Image src='/public/images/tutorials/how-to-use-image.svg' alt="how to use image | webexpe.com" className="mt-5" size={ImageSize.DEFAULT} />
                </li>
                <li>
                    <b>{'<Text> Lorem ipsum </Text>'}</b>. <br /> We use this to write content/text. To use image we have to import <b>Text</b> from components. We have different Text types like <b>title, subtitle, p, quote</b> with default styles and by default is paragraph.
                    <div className="flex flex-wrap mt-5">
                        <Image src='/public/images/tutorials/how-to-use-text-title.svg' alt="how to use Text title | webexpe.com" size={ImageSize.SMALL} />
                        <Image src='/public/images/tutorials/how-to-use-text-subtitle.svg' alt="how to use Text subtitle | webexpe.com" size={ImageSize.SMALL} />
                        <Image src='/public/images/tutorials/how-to-use-text.svg' alt="how to use Text paragraph | webexpe.com" size={ImageSize.SMALL} />
                        <Image src='/public/images/tutorials/how-to-use-text-quote.svg' alt="how to use Text quote | webexpe.com" size={ImageSize.SMALL} />
                    </div>
                </li>
                <li>
                    <b>{'<List type={ListType.disc}> <li></li> </List>'}</b> <br />
                    This is used to display lists. We have 3 different types: <b>ListType.disc | ListType.number | ListType.none</b>, by default type is ListType.disc.
                    <Image src='/public/images/tutorials/how-to-use-list.svg' alt="how to use List | webexpe.com" className="mt-5" />
                </li>
                <li>
                    <b>{'<Seperator dots/>'}</b> or <b>{'<Seperator line/>'}</b> <br />
                    This is used to add a section sepertator. We have 2 types: <b>{'<Seperator dots/>'} or {'<Seperator line/>'}</b>, by default it is line.
                </li>
            </List>
            <Text p>
               <b>note:</b> all these components are used in <u>blog-with-sidebar-layout.tsx</u> or <u>blog-with-centerd-layout.tsx</u> in <u>pages/blog/layouts</u>. You can also check <b><LinkTo href="/pages/all-components.tsx" passHref>All Components Demo</LinkTo></b>, list of all components, its types and how to use it..
            </Text>
        </PageLayout>
    )
}

export default Article;