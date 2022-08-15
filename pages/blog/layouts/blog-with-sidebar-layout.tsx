/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider } from "../../../src/components";
import CodeBlock from "../../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode, rightSideAdCode } from "../../../src/constants/codeBlocks";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* <Image src='/public/images/page-layouts/how-to-use-sidebar-article-layout.svg' alt="how to use article with sidebar layout | webexpe.com" className="mb-5" size={ImageSize.FUll} /> */}
            <Text p>
                This current article is made using <b>blogwithsidebar</b> layout. This layout will be used to write your blog posts or articles.
            </Text>
            <CodeBlock
                code={`
    // import PageLayout from components
    import { ..., PageLayout, ... } from "../../../src/components";
    const Article = () => {
        return (
            // pass blogwithsidebar as shown
            <PageLayout blogwithsidebar />
                {/* Start writing your article here */}
            </PageLayout>
        )		
    }

    export default Article;
                `}
                className="my-5"
            />
            <Text p>
                The above code snippet gives you a demo on how to use blogwithsidebar layout. The current article that you see is the basic output/example of blogwithsidebar layout which will consist of a navbar on the top, a side bar and the main content area. The side bar will content author details and more articles by the author.
            </Text>
            <Text subtitle className="mt-10 md:text">
                How to use
            </Text>
            <Text p>
                If you want to explore this layout checkout the code for  this article in <br />
                <u>blog-with-sidebar-layout.tsx</u> file inside <u>pages/blog/layouts</u> folder.
            </Text>
            <Text subtitle className="mt-10 md:text">
                Features
            </Text>
            <List type={ListType.disc}>
                <li>
                    This layout is of contained width i.e has a max width same as the navbar, this is to keep the article / blog posts style consistent.
                </li>
                <li>
                    In the sidebar on the right, we have author details and more articles from the author.
                </li>
                <li>
                    We can also place ads on the right sidebar.

                    {/* <Image src='/public/images/page-layouts/how-to-show-ads-script.svg' alt="how to show ads | webexpe.com" className="my-3" /> */}
                    <CodeBlock
                        code={rightSideAdCode}
                        className="my-5"
                    />
                    The above code block shows how to pass ads in the sidebar layout.
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
                    We have used the <b>{'<PageLayout blogwithsidebar/>'}</b> as shown in the above code block.
                </li>
                <li>
                    <b>{'Image'}</b> tag for displaying images. <br /> To use image we have to import <b>Image</b> from components and <b>ImageSize</b> enum from enums. The Image size will help us to set the size of the image. <br /> Available sizes: <b>ImageSize.DEFAULT, ImageSize.FULL, ImageSize.MEDIUM, ImageSize.SMALL, ImageSize.XS</b>.
                    <CodeBlock code={HowToUseImageCode} className="my-5" />
                    {/* <Image src='/public/images/tutorials/how-to-use-image.svg' alt="how to use image | webexpe.com" className="mt-5" size={ImageSize.DEFAULT} /> */}
                </li>
                <li>
                    <b>{'Text'}</b>. <br /> We use this to write content/text. To use image we have to import <b>Text</b> from components. We have different Text types like <b>title, subtitle, p, quote</b> with default styles and by default it is of type paragraph.
                    <CodeBlock code={HowToUseTextCode} className="my-5" />
                </li>
                <li>
                    <b>{'List'}</b> <br />
                    This is used to display lists. We have 3 different types: <b>ListType.disc | ListType.number | ListType.none</b>, by default it is of type ListType.disc.
                    <CodeBlock code={HowToUseList} className="my-5" />
                    {/* <Image src='/public/images/tutorials/how-to-use-list.svg' alt="how to use List | webexpe.com" className="mt-5" /> */}
                </li>
                <li>
                    <b>{'Seperator'}</b><br />
                    This is used to add a section sepertator. We have 2 types: <b>{'<Seperator dots/>'} or {'<Seperator line/>'}</b>, by default it is of type line.
                    <CodeBlock code={HowToUseSeperator} className="my-5" />
                </li>
            </List>
            <Text p>
                <b>note:</b> all these components are used in <u>blog-with-sidebar-layout.tsx</u> and <u>blog-with-centerd-layout.tsx</u> in <u>pages/blog/layouts</u>. You can also check <b><LinkTo href="/pages/all-components.tsx" passHref>All Components Demo</LinkTo></b>, list of all components, its types and how to use them.
            </Text>
        </PageLayout>
    )
}

export default Article;