import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PageLayout, Text, LinkTo, Slider, Seperator, Image, List } from "../src/components"
import { ListType, ImageSize } from "../src/shared/enums"
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
    const cardBBorder = "border-b-[8px] border-blue-500 bg-white dark:bg-slate-800 shadow-lg rounded-lg px-3 pb-2 pt-1 mb-8"

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
            types: [
                {
                    label: 'Home',
                    href: '#homeLayout'
                },
                {
                    label: 'Blog with sidebar',
                    href: '#blogWithSidebar'
                },
                {
                    label: 'Blog centered',
                    href: '#blogCentered'
                },
            ]
        },
        {
            component: 'Article Headers',
            types: [
                {
                    label: 'Default',
                    href: '#articleHeader'
                },
                {
                    label: 'Centered',
                    href: '#articleHeaderCentered'
                },
            ]
        },
        {
            component: 'Text',
            types: [
                {
                    label: 'Title',
                    href: '#textTitle'
                },
                {
                    label: 'Sub title',
                    href: '#textSubtitle'
                },
                {
                    label: 'Paragraph',
                    href: '#textPara'
                },
                {
                    label: 'Quote',
                    href: '#textQuote'
                },
            ]
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
                            <LinkTo href={each.href} key={each.href}>
                                <a className={combineClasses("text-xl font-semibold mb-3 block", isActive(each.href) && 'text-blue-500')}>{each.component}</a>
                            </LinkTo>
                    }
                    <div className="mb-3">
                        {
                            each.types &&
                            each.types.map((each: any) => (
                                <LinkTo href={each.href} key={each.href}>
                                    <a className={combineClasses(
                                        "block text-gray-500 font-medium py-1 pl-3 border-l",
                                        isActive(each.href) && 'text-blue-500 border-blue-500 border-l-2'
                                    )}>
                                        {each.label}
                                    </a>
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
            <section className="container pt-10">
                <Text title>
                    All Components
                </Text>
                <hr className="my-5" />
                <Text subtitle>
                    List of all components, its types and how to use it.
                </Text>

                <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
                    {/* side btns */}
                    <aside className="md:w-1/5 w-full sticky top-[90px] block rounded-lg p-3 pb-0 bg-white dark:bg-slate-800 shadow-md">
                        {
                            sideBtnsComponents()
                        }
                    </aside>

                    {/* components */}
                    <aside className="md:w-4/5 w-full px-[15px]">
                        <section className={cardBBorder}>
                            <Text subtitle id="layouts" className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Page Layouts.
                            </Text>
                        </section>

                        <section className={cardBBorder}>
                            <Text subtitle id="image" className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Image
                            </Text>
                            Demo
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Default size image with caption" className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Full size image with caption" size={ImageSize.FUll} className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Medium size image with caption" size={ImageSize.MEDIUM} className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="Small size image with caption" size={ImageSize.SMALL} className="mb-5" />
                            <Image src="https://picsum.photos/300/100" alt="how to use Image | webexpe.com" caption="XS size image with caption" size={ImageSize.XS} className="mb-5" />

                            How to use 
                            <Image src="/public/images/tutorials/how-to-use-image-2.svg" alt="how to use Image | webexpe.com" caption="XS size image with caption" className="mb-5" />
                        </section>

                        <section className={cardBBorder}>
                            <Text subtitle id="list" className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                List
                            </Text>
                            Demo
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
                            How to Use
                            <Image src="/public/images/tutorials/how-to-use-list-2.svg" alt="how to use List | webexpe.com" />
                        </section>

                        <section className={cardBBorder}>
                            <Text subtitle id="seperator" className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Section Seperators
                            </Text>
                            <b>{'<Seperator dots/>'}</b> or <b>{'<Seperator line />'}</b>  these are used to add a section divider as shown below. <br /> <br />
                            Demo
                            <Seperator dots />
                            <Seperator line />
                            How to use
                            <Image src="/public/images/tutorials/how-to-use-seperator.svg" alt="how to use Seperator | webexpe.com" />
                        </section>

                        <section className={cardBBorder}>
                            <Text subtitle id="linkto" className="mb-5 pb-3 border-b md:!text-3xl font-bold" >
                                LinkTo
                            </Text>
                            <b>{'<LinkTo href="url" />'}</b> <br />
                            This is used to link between your blog pages or external pages.

                            <Image src="/public/images/tutorials/how-to-use-linkto.svg" alt="how to use LinkTo | webexpe.com" />
                        </section>

                        <section className={cardBBorder}>
                            <Text subtitle id="imageslider" className="mb-5 pb-3 border-b md:!text-3xl font-bold">
                                Image Slider
                            </Text>
                            Demo
                            <Slider className="mb-5"
                                images={[
                                    'https://picsum.photos/300/100',
                                    'https://picsum.photos/300/100',
                                    'https://picsum.photos/300/100',
                                    'https://picsum.photos/300/100'
                                ]}
                            />
                            <Text>
                                How to use
                            </Text>
                            <Image src="/public/images/tutorials/how-to-use-slider.svg" alt="how to use image slider | webexpe.com" />
                        </section>
                    </aside>
                </div>
            </section>
        </PageLayout>
    )
}

export default AllComponents