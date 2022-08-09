/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../../src/shared/enums";
import { PageLayout, ArticleHeader, Text, List, Image, LinkTo, Seperator, Slider  } from "../../../src/components";

const HomeLayoutExample = () => {

    return (
        <PageLayout home>
            <section className={"container pt-20 md:pt-10"}>
                <Text className="!md:text-5xl" title>
                    Default Home Layout example.
                </Text>
                <hr className="my-5" />
                <Text p>
                    This example/demo page is written in Default Home Page Layout. <br />
                    This is the layout we used to create 
                    <LinkTo href="/" passHref> Home</LinkTo>, 
                    <LinkTo href="/pages/about-us.tsx" passHref> About</LinkTo>, 
                    <LinkTo href="/pages/icons.tsx" passHref> Icons</LinkTo>, 
                    <LinkTo href="/pages/privacy-policy.tsx" passHref> Privacy Policy</LinkTo>, 
                    <LinkTo href="/pages/terms-and-condition.tsx" passHref> Terms & Conditions </LinkTo> pages.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    How to use
                </Text>
                <Image src='/public/images/page-layouts/how to use home layout.svg' alt="how to use home layout | webexpe.com" size={ImageSize.DEFAULT} />
                <Text p>
                    The above image gives you a demo on how to use the layout. If you want to see this in action check this article file <br /> 
                    <u>home-layout.tsx</u> in <u>pages/blog/layouts</u>.
                </Text>
            </section>
            <section>
                <div className="container px-3">
                    <Text subtitle className="mt-10 md:text">
                        Features
                    </Text>
                    <Text p>
                        This layout is full width, you can create full width sections using this layout.
                    </Text>
                </div>
                <div className="bg-slate-300 dark:bg-slate-700 py-5">
                    <div className="container text-2xl">
                        Full width section example.
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default HomeLayoutExample