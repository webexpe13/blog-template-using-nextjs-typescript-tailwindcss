/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode, rightSideAdCode } from "../../src/constants/codeBlocks";

const Article = () => {
    const ads = [
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B09N3ZNHTY&asins=B09N3ZNHTY&linkId=4105a64f5c32e42007f83bd7a9e20fbb&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B08CHZ3ZQ7&asins=B08CHZ3ZQ7&linkId=8a8653c24dc89b1ee6a3ac2a85c7208b&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B099ZYBSWB&asins=B099ZYBSWB&linkId=b285d1699f1620641c1636f1bc296761&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B09FK2639V&asins=B09FK2639V&linkId=53a2b52b7d82b6c9bb5cf6e61d9a63f3&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B09FKBQ3JM&asins=B09FKBQ3JM&linkId=6d5e15d321246d0b37229f1c9d74aa30&show_border=true&link_opens_in_new_window=true"></iframe>',
        `<script type="text/javascript" src="https://ap.lijit.com/www/delivery/fpi.js?z=1066288&width=300&height=250"></script>`
    ]
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar ads={ads}>
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
            <PageLayout blogwithsidebar>
                {/* Start writing your article here */}
            </PageLayout>
        )		
    }

    export default Article;
                `}
                className="my-5"
            />
                The above code snippet gives you a demo on how to use blogwithsidebar layout. The current article that you see is the basic output/example of blogwithsidebar 
                layout which will consist of a navbar on the top, a side bar and the main content area. The side bar will content author details and more articles by the author.
            {/* </Text> */}
            <Text subtitle className="mt-10 md:text">
                How to use
            </Text>
            <Text p>
                If you want to explore this layout checkout the code for  this article in <br />
                <u>blog-with-sidebar-layout.tsx</u> file inside <u>pages/tutorial</u> folder.
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
                Check <u>blog-with-sidebar-layout.tsx</u> in <u>pages/tutorial</u> file to see all the mentioned components in use.
            </Text>
            <List>
                <li>
                    We have used the <b>{'<PageLayout blogwithsidebar>'}</b> as shown in the above code block.
                </li>
                <li>
                    <b>{'Image'}</b> tag for displaying images. <br /> To use image we have to import <b>Image</b> from components and <b>ImageSize</b> enum from enums. The Image size will help us to set the size of the image. <br /> Available sizes: <b>ImageSize.DEFAULT, ImageSize.FULL, ImageSize.MEDIUM, ImageSize.SMALL, ImageSize.XS</b>.
                    <CodeBlock code={HowToUseImageCode} className="my-5" />
                </li>
                <li>
                    <b>{'Text'}</b>. <br /> We use this to write content/text. To use image we have to import <b>Text</b> from components. We have different Text types like <b>title, subtitle, p, quote</b> with default styles and by default it is of type paragraph.
                    <CodeBlock code={HowToUseTextCode} className="my-5" />
                </li>
                <li>
                    <b>{'List'}</b> <br />
                    This is used to display lists. We have 3 different types: <b>ListType.disc | ListType.number | ListType.none</b>, by default it is of type ListType.disc.
                    <CodeBlock code={HowToUseList} className="my-5" />
                </li>
                <li>
                    <b>{'Seperator'}</b><br />
                    This is used to add a section sepertator. We have 2 types: <b>{'<Seperator dots/>'} or {'<Seperator line/>'}</b>, by default it is of type line.
                    <CodeBlock code={HowToUseSeperator} className="my-5" />
                </li>
            </List>
            <Text p>
                <b>note:</b> all these components are used in <u>blog-with-sidebar-layout.tsx</u> and <u>blog-with-centerd-layout.tsx</u> in <u>pages/tutorial</u>. You can also check <b><LinkTo href="/pages/tutorial/all-components.tsx" passHref>All Components Demo</LinkTo></b>, list of all components, its types and how to use them.
            </Text>
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                For any any queries related to this project / template feel free to connect with us at <u>webexpe13@gmail.com</u>.
                You can also post any comments on our <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions" target="_blank" rel="noopener noreferrer"><u><i>github discussions</i></u></a>.
            </div>
        </PageLayout>
    )
}

export default Article;