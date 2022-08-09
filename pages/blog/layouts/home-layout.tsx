import PageLayout from "../../../src/layouts/PageLayouts";
import Text from "../../../src/components/Text";
import Image from "../../../src/components/ArticleImage";
import { ImageSize } from "../../../src/shared/enums";
import Link from "next/link";

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
                    <Link href="/" passHref> Home</Link>, 
                    <Link href="/about-us" passHref> About</Link>, 
                    <Link href="/icons" passHref> Icons</Link>, 
                    <Link href="/privacy-policy" passHref> Privacy Policy</Link>, 
                    <Link href="/terms-and-condition" passHref> Terms & Conditions </Link> pages.
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