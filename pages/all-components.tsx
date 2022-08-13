import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PageLayout, Text, LinkTo, Slider, Seperator, Image, List, ArticleHeader } from "../src/components"
import { ListType, ImageSize, TextAlign } from "../src/shared/enums"
import { combineClasses } from "../src/utils/utils"

interface iSideBtnLinks {
    component: string,
    types?: {
        label: string,
        href: string
    }[],
    href?: string
}

const AllComponents = () => {
    const router = useRouter();
    const routerIncludesHash = router.asPath.includes('#');
    const [activeHash, setActiveHash] = useState('');
    const cardBBorder = "border-b-[8px] border-blue-500 bg-white dark:bg-slate-800 shadow-md md:rounded-lg px-3 pb-2 pt-1 mb-8"

    useEffect(() => {
        if (routerIncludesHash) {
            const split = router.asPath.split('#');
            setActiveHash(split[split.length - 1])
        }
    }, [router])

    const isActive = (href: string) => href === '#' + activeHash

    // all side btn links
    const sideBtns: iSideBtnLinks[] = [
        {
            component: 'Page Layouts',
            href: '#pageLayouts'
        },
        {
            component: 'Text',
            href: '#text'
        },
        {
            component: 'Image',
            href: '#image'
        },
        {
            component: 'List',
            href: '#list'
        },
        {
            component: 'Section seperator',
            href: '#seperator'
        },
        {
            component: 'LinkTo',
            href: '#linkto'
        },
        {
            component: 'Image Slider',
            href: '#imageslider'
        },
    ]

    const sideBtnsComponents = () => {
        return (
            sideBtns.map((each: any, i: any) => (
                <div key={each.component + i}>
                    {
                        each.types ? <p className="text-xl font-semibold mb-3">{each.component}</p> :
                            <LinkTo
                                href={each.href}
                                key={each.href}
                                className={combineClasses("md:text-xl text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5", isActive(each.href) && 'text-blue-500')}
                            >
                                {each.component}
                            </LinkTo>
                    }
                    <div className="mb-3">
                        {
                            each.types &&
                            each.types.map((each: any) => (
                                <LinkTo href={each.href} key={each.href} className={combineClasses(
                                    "block text-gray-500 font-medium py-1 pl-3 border-l",
                                    isActive(each.href) && 'text-blue-500 border-blue-500 border-l-2'
                                )}>
                                    {each.label}
                                </LinkTo>
                            ))
                        }
                    </div>
                </div>
            ))
        )
    }
    return (
        <PageLayout>
            <section className="container md:pt-10 pt-20 px-0 md:px-[15px]">
                <div className="md:px-0 px-3">
                    <Text title className="text-blue-600">
                        All Components
                    </Text>
                    <hr className="my-5" />
                    <Text subtitle>
                        List of all components, its types and how to use it.
                    </Text>
                </div>

                <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
                    {/* side btns */}
                    <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
                        <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 shadow-md mb-5 flex overflow-auto">
                            {
                                sideBtnsComponents()
                            }
                        </div>
                        <div className="md:rounded-lg md:p-3 bg-white dark:bg-slate-800 shadow-md overflow-auto md:text-xl text-md font-semibold block whitespace-nowrap">
                            <LinkTo href="/pages/style-guide.tsx">
                                Style Guide
                            </LinkTo>
                        </div>
                    </aside>

                    {/* components */}
                    <aside className="md:w-4/5 w-full md:px-[15px]">
                        <section className={cardBBorder} id="pageLayouts">
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Page Layouts.
                            </Text>
                            We have 3 page layouts <u><LinkTo href="/pages/blog/layouts/home-layout.tsx">Home</LinkTo></u>, <u><LinkTo href="/pages/blog/layouts/blog-with-sidebar-layout.tsx">Blog with sidebar</LinkTo></u> and  <u><LinkTo href="/pages/blog/layouts/blog-with-centered-layout.tsx">Blog centered</LinkTo></u>. <br />
                            <b>How to use</b>
                            <Image src="/public/images/tutorials/how-to-use-pageLayout.svg" alt="how to use PageLayout | webexpe.com" />
                        </section>

                        <section className={cardBBorder} id="text">
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Text
                            </Text>
                            Text is used to write Paragraphs, Title, Sub title or Quotes in the article. <br /><br />
                            <b>Demo</b>
                            <Text p>This is a paragraph with default styles font size 18px and font weight of 400</Text>
                            <Text title className="inline">This is a Title</Text> with default font size 36px and font weight of 700, and is an <b>h1</b> tag. For better SEO use title only once per page/article.
                            <Text subtitle>This is a Sub Title with default styles font size 24px and font weight of 600. </Text>
                            <Text quote>This is Quoted text with default styles font size 18px and font weight of 400. </Text>
                            <Text p><b>Note:</b> By default we have some standard styles applied to the Text component, so if you need to override like text size, weight you can do as follows: <br /> <b>{'<Text p className="!text-[20px] !font-bold">Overide text size and weight</Text>'}</b> <br /> by adding <b>!</b> in front of the classes we can change the default styles like here font size will be changed to 22px and font weight will change to bold for paragraph </Text>  <br />
                            <b>Parameters</b> <br />
                            We can pass text align and color to the text component. <br />
                            <b>{'<Text p textAlign={TextAlign.CENTER}>Text Align Center</Text>'} <br /> {'<Text p textAlign={TextAlign.LEFT}>Text Align Left</Text>'} <br />
                                {'<Text p textAlign={TextAlign.RIGHT}>Text Align Right</Text>'} <br />
                                {'<Text p textAlign={TextAlign.JUSTIFY}>Text Align Justify</Text>'} <br />
                                {'<Text p textAlign={TextAlign.NONE}>Text Align None</Text>'}
                            </b> <br /> and for color <br />
                            <b>
                                {'<Text p color="red">Text color red</Text>'} <br />
                                {'<Text p color="#E2904B">Text color #E2904B</Text>'}
                            </b> <br /> or we can use tailwind css classes for font colors as shown below. <br />
                            <b>
                                {'<Text p className="font-blue-600">...</Text>'} <br />
                                {'<Text p className="font-slate-400">...</Text>'}
                            </b> you can find more tailwind font color classes on the official docs <LinkTo href="https://tailwindcss.com/docs/text-color" className="underline">here</LinkTo>.
                            <br /><br />
                            <b>How to use</b>
                            <Image src="/public/images/tutorials/how-to-use-text-full.svg" alt="how to use Text | webexpe.com" />
                        </section>

                        <section className={cardBBorder} id="image">
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Image
                            </Text>
                            To add image in your project, first save the image file in <b>{`public --> images`}</b> folder and then add the image path in image tag's src. For demo check <b>/pages/all-components.tsx</b> file in code. <br /><br />
                            <b>Demo</b>
                            <Image src="/public/images/tutorials/demo-image.jpg" alt="how to use Image | webexpe.com" caption="Default size image with caption" className="my-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Full size image with caption" size={ImageSize.FUll} className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Medium size image with caption" size={ImageSize.MEDIUM} className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Small size image with caption" size={ImageSize.SMALL} className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="XS size image with caption" size={ImageSize.XS} className="mb-5" />

                            <b>How to use</b>
                            <Image src="/public/images/tutorials/how-to-use-image-2.svg" alt="how to use Image | webexpe.com" caption="XS size image with caption" className="mb-5" />

                            <div></div>
                        </section>

                        <section className={cardBBorder} id="list" >
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                List
                            </Text>
                            <b>Demo</b>
                            <div className="flex flex-wrap justify-between mt-3">
                                <List type={ListType.disc} className="md:w-1/3">
                                    <li>List with disc</li>
                                    <li>Item </li>
                                    <li>Item </li>
                                </List>
                                <List type={ListType.number} className="md:w-1/3">
                                    <li>List with number</li>
                                    <li>Item </li>
                                    <li>Item </li>
                                </List>
                                <List type={ListType.none} className="md:w-1/3">
                                    <li>List without any marker</li>
                                    <li>Item </li>
                                    <li>Item </li>
                                </List>
                            </div>
                            <b>How to use</b>
                            <Image src="/public/images/tutorials/how-to-use-list-2.svg" alt="how to use List | webexpe.com" />
                        </section>

                        <section className={cardBBorder} id="seperator">
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Section Seperators
                            </Text>
                            <b>{'<Seperator dots/>'}</b> or <b>{'<Seperator line />'}</b>  these are used to add a section divider as shown below. <br /> <br />
                            <b>Demo</b>
                            <Seperator dots />
                            <Seperator line />
                            <b>How to use</b>
                            <Image src="/public/images/tutorials/how-to-use-seperator.svg" alt="how to use Seperator | webexpe.com" />
                        </section>

                        <section className={cardBBorder} id="linkto" >
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold" >
                                LinkTo
                            </Text>
                            <b>{'<LinkTo href="url" />'}</b> <br />
                            This is used to link between your blog pages or external pages.

                            <Image src="/public/images/tutorials/how-to-use-linkto.svg" alt="how to use LinkTo | webexpe.com" />
                        </section>

                        <section className={cardBBorder} id="imageslider">
                            <Text subtitle className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Image Slider
                            </Text>
                            <b>Demo</b>
                            <Slider className="mb-5"
                                images={[
                                    'https://picsum.photos/300/100',
                                    'https://picsum.photos/300/100',
                                    'https://picsum.photos/300/100',
                                    'https://picsum.photos/300/100'
                                ]}
                            />
                            <b>How to use</b>
                            <Image src="/public/images/tutorials/how-to-use-slider.svg" alt="how to use image slider | webexpe.com" />
                        </section>
                    </aside>
                </div>
            </section>
        </PageLayout>
    )
}

export default AllComponents