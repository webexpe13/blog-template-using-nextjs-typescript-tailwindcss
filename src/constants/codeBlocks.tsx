import { ListType, ImageSize, TextAlign } from "../../src/shared/enums"

export const HowToUsePageLayout = `
    // import PageLayout from components
    import { ..., PageLayout, ... } from "../../../src/components";
    const Article = () => {
        return (
            <PageLayout home />{/* Home page layout */}</PageLayout>
            {/* or */}
            <PageLayout blogwithsidebar />{/* Blog page with sidebar layout */}</PageLayout>
            {/* or */}
            <PageLayout blogcentered />{/* Blog page centered layout */}</PageLayout>
        )		
    }

    export default Article;
`

export const HowToUseTextCode = `
    // import TextAlign from enums
    import { ..., TextAlign } from "../../src/shared/enums"
    // import Text from components
    import { ..., Text, ... } from "../../../src/components";
    const Article = () => {
        return (
            <Text>By Default its paragraph tag</Text>
            <Text p>Paragraph</Text>
            <Text title>Title</Text>
            <Text subtitle>Subtitle</Text>
            <Text quote>Quoted text</Text>

            {/* Changing default styles */}
            <Text p className="!text-[20px] !font-bold">Overide text size and weight</Text>

            {/* Text Aligns */}
            <Text p textAlign={TextAlign.CENTER}>Text Align Center</Text>
            <Text p textAlign={TextAlign.LEFT}>Text Align Left</Text>
            <Text p textAlign={TextAlign.RIGHT}>Text Align Right</Text>
            <Text p textAlign={TextAlign.JUSTIFY}>Text Align Justify</Text>
            <Text p textAlign={TextAlign.NONE}>Text Align None</Text>

            {/* Text Aligns via tailwind classes */}
            <Text p className="text-left">...</Text>
            <Text p className="text-right">...</Text>

            {/* Change font colors via color="" */}
            <Text p color="red">Text color red</Text>
            <Text p color="#E2904B">Text color #E2904B</Text>

            {/* Change font colors via tailwind classes */}
            <Text p className="font-blue-600">...</Text>
            <Text p className="font-slate-400">...</Text>
        )		
    }

    export default Article;
`

export const HowToUseImageCode = `
    // import ImageSize from enums
    import { ..., ImageSize } from "../../src/shared/enums"
    // import Image from components
    import { ..., Image, ... } from "../../../src/components";
    const Article = () => {
        return (
            <Image src="/public/images/tutorials/demo-image.jpg" alt="alt text" caption="img caption" className="my-5" />
            <Image src="/public/images/tutorials/demo-image.jpg" alt="alt text" caption="img caption" size={ImageSize.FUll} className="mb-5" />
            <Image src="/public/images/tutorials/demo-image.jpg" alt="alt text" caption="img caption" size={ImageSize.MEDIUM} className="mb-5" />
            <Image src="/public/images/tutorials/demo-image.jpg" alt="alt text" caption="img caption" size={ImageSize.SMALL} className="mb-5" />
            <Image src="/public/images/tutorials/demo-image.jpg" alt="alt text" caption="img caption" size={ImageSize.XS} className="mb-5" />
        )		
    }

    export default Article;
`

export const HowToUseList = `
    // import ListType from enums
    import { ..., ListType } from "../../src/shared/enums"
    // import List from components
    import { ..., List, ... } from "../../../src/components";
    const Article = () => {
        return (
            <List type={ListType.disc}>
                <li>List with disc</li>
            </List>

            {/* or */}
            <List type={ListType.number}>
                <li>List with number</li>
            </List>

            {/* or */}
            <List type={ListType.none}>
                <li>List with no style</li>
            </List>
        )		
    }

    export default Article;
`

export const HowToUseSeperator = `
    // import Seperator from components
    import { ..., Seperator, ... } from "../../../src/components";
    const Article = () => {
        return (
            <Seperator dots />
            {/* or */}
            <Seperator line />
        )		
    }

    export default Article;
`

export const HowToUseLinkTo = `
    // import LinkTo from components
    import { ..., LinkTo, ... } from "../../../src/components";
    const Article = () => {
        return (
            {/* link between internal pages */}
            <LinkTo href="url" />
            {/* open link in a new tab */}
            <LinkTo href="url" newTab/>
            {/* open an external link */}
            <LinkTo href="url" external/>
        )		
    }

    export default Article;
`

export const HowToUseSlider = `
    // import Slider from components
    import { ..., Slider, ... } from "../../../src/components";
    const Article = () => {
        return (
            <Slider
                images={[
                    '/public/images/tutorials/demo-image.jpg',
                    '/public/images/tutorials/demo-image.jpg',
                    '/public/images/tutorials/demo-image.jpg',
                    '/public/images/tutorials/demo-image.jpg'
                ]}
            />
        )		
    }

    export default Article;
`

export const AuthorSetup = `
    // file --> /BLOG_CONSTANTS/_BLOG_SETUP.tsx
    export const AUTHOR_NAME: IAuthor = {
        name: "Full Name",
        designation: "Work Designation",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profilePic: "",
        social: [
            {
                icon: <i className="icon-2-Z font-32" />,
                link: 'https://github.com/'
            },
            {
                icon: <i className="icon-I font-36" />,
                link: 'https://www.linkedin.com/'
            },
        ]
    }
`

export const NavbarSetup = `
    // file --> /BLOG_CONSTANTS/_BLOG_SETUP.tsx
    export const PRIMARY_NAV = {
        type: NavbarType.DEFAULT,
        logo: {},
        navLinks: [],
        sideNavLinks: [],
        socials: [],
    }
`

export const NavbarSetupType = `
    // file --> /BLOG_CONSTANTS/_BLOG_SETUP.tsx
    export const PRIMARY_NAV = {
        type: NavbarType.DEFAULT,
    }
    // or
    export const PRIMARY_NAV = {
        type: NavbarType.CENTERED,
    }
`

export const NavbarSetup_NAVLINKS = `
    export const PRIMARY_NAV = {
        ...,
        navLinks: [
            {
                label: 'Home',
                path: '/'
            },
            {
                //IMP: for categories don't add path and add type: dropdown
                label: 'Blog',
                type: 'dropdown'
            },
            {
                label: 'About Us',
                path: '/about-us'
            },
            {
                // to open a link in new tab pass newTab: true
                label: 'Support Us',
                path: 'https://www.buymeacoffee.com/webexpe13z',
                newTab: true
            },
        ]
    }
`

export const NavbarSetup_Socials = `
    export const PRIMARY_NAV = {
        ...,
        socials: [
            {
                link: 'https://www.facebook.com/',
                icon: <i className="icon-F" />
            },
            {
                link: 'https://www.instagram.com/',
                icon: <i className="icon-2-I" />
            },
            {
                link: 'https://twitter.com/',
                icon: <i className="icon-L" />
            },
        ]
    }
`
export const rightSideAdCode= `
    // import PageLayout from components
    import { ..., PageLayout, ... } from "../../../src/components";
    const Article = () => {
        // create ads array and paste your add scripts as a string in quotes
        const ads = [
            'ad script',
            'ad script'
        ]

        return (
            // pass blogwithsidebar as shown
            <PageLayout blogwithsidebar ads={ads} />
                {/* Start writing your article here */}
            </PageLayout>
        )		
    }

    export default Article;
`;
export const Article_Entry_inList = `
    // Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
    import { MAYUR, RUPALI } from './_BLOG_SETUP';

    // file --> /BLOG_CONSTANTS/_ARTICLE_LIST.tsx
    export const ARTICLES_LIST: iArticle[] = [
        ...,
        {
            path: '/pages/blog/tutorial/how-to-setup-blog',
            featureArticle: true,
            preview: {
                // the author object you created in _BLOG_SETUP file
                author: MAYUR,
                date: "March 03 2022",
                articleTitle: "How to setup this blog template",
                tags: "demo, blog setup",
                thumbnail: "/images/tutorials/demo-image.jpg",
                shortIntro: "These are the steps to setup your blog",
            },
            seo: {
                title: "These are the steps to setup your blog",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                keywords: "demo, blog setup",
                ogImage: "/images/tutorials/demo-image.jpg",
                twitterHandle: "@mayur_nalwala",
            }
        },
        ...
    ]
`