import { ListType, ImageSize, TextAlign } from "../../src/shared/enums";

export const HowToUsePageLayout = `
    // import PageLayout from components
    import { ..., PageLayout, ... } from "../../../src/components";
    const Article = () => {
        return (
            <PageLayout home >{/* Home page layout */}</PageLayout>
            {/* or */}
            <PageLayout blogwithsidebar >{/* Blog page with sidebar layout */}</PageLayout>
            {/* or */}
            <PageLayout blogcentered >{/* Blog page centered layout */}</PageLayout>
        )		
    }

    export default Article;
`;

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
`;

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
`;

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
`;

export const HowToUseAccordian = `
    // import Accordian from components
    import { ..., Accordian, ... } from "../../../src/components";
    const Article = () => {
        return (
            <Accordian title="Accordian Title" />
                Accordian Content
            </Accordian>
            {/* or if you want to keep it open by default */}
            <Accordian title="Accordian Title" keepOpen />
                Accordian Content open by default
            </Accordian>
        )		
    }

    export default Article;
`;

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
`;

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
`;

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
`;

export const HowToUseVideo = `
    // import VideoPlayer from components
    import { ..., VideoPlayer, ... } from "../../../src/components";
    const Article = () => {
        return (
            <VideoPlayer url="/public/videos/mov_bbb.mp4" />
        )		
    }

    export default Article;
`;

export const AuthorSetup = `
    // file --> /BLOG_CONSTANTS/_BLOG_SETUP.tsx
    export const AUTHOR_NAME: IAuthor = {
        name: "Full Name",
        designation: "Work Designation",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        profilePic: "",
        social: [
            {
                icon: <AiFillGithub />,
                link: 'https://github.com/'
            },
            {
                icon: <AiFillLinkedin />,
                link: 'https://www.linkedin.com/'
            },
        ]
    }
`;

export const NavbarSetup = `
    // file --> /BLOG_CONSTANTS/_BLOG_SETUP.tsx
    export const PRIMARY_NAV = {
        type: NavbarType.DEFAULT,
        logo: {},
        navLinks: [],
        sideNavLinks: [],
        socials: [],
    }
`;

export const NavbarSetupType = `
    // file --> /BLOG_CONSTANTS/_BLOG_SETUP.tsx
    export const PRIMARY_NAV = {
        type: NavbarType.DEFAULT,
    }
    // or
    export const PRIMARY_NAV = {
        type: NavbarType.CENTERED,
    }
`;

export const NavbarSetup_NAVLINKS = `
    export const PRIMARY_NAV = {
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
`;

export const NavbarSetup_Socials = `
    export const PRIMARY_NAV = {
        socials: [
            {
                link: 'https://www.facebook.com/',
                icon: <AiFillFacebook />
            },
            {
                link: 'https://www.instagram.com/',
                icon: <AiFillInstagram />
            },
            {
                link: 'https://twitter.com/',
                icon: <AiOutlineTwitter />
            },
        ]
    }
`;
export const rightSideAdCode = `
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
            <PageLayout blogwithsidebar ads={ads} >
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
    export const ARTICLES: iArticle[] = [
        ...,
        {
            path: '/pages/blog/your-first-article.tsx',
            featureArticle: true,
            preview: {
                // the author object you created in _BLOG_SETUP file
                author: MAYUR,
                date: "August 6 2022",
                articleTitle: "Your first article",
                shortIntro: "This is a demo file for your first article, you can copy structure of this file to create multile article.",
                tags: "demo, your first article",
                thumbnail: "/public/imp_assets/tutorials/how-to-write-first-article.svg",
                category: 'tutorial'
            },
            seo: {
                title: "Your first article",
                description:
                    "This is a demo file for your first article, you can copy structure of this file to create multile article.",
                keywords: "demo, blog setup, first article",
                ogImage: "/images/tutorials/demo-image.jpg",
                twitterHandle: "@mayur_nalwala",
            }
        },
        ...
    ]
`;
