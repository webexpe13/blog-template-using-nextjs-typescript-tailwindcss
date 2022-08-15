import { MAYUR, RUPALI } from "../../BLOG_CONSTANTS/_BLOG_SETUP";
import { iArticle } from "../shared/interfaces";

export const MOCK_ARTICLES_LIST: iArticle[] = [
    {
        path: '/pages/blog/tutorial/how-to-setup-blog.tsx',
        featureArticle: true,
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "How to setup this blog template",
            tags: "demo, blog setup",
            thumbnail: "/public/images/tutorials/how-to-setup-blog.svg",
            shortIntro: "These are the steps to setup your blog",
            category: 'tutorial'
        },
        seo: {
            title: "How to setup this blog template",
            description: "These are the steps to setup your blog",
            keywords: "demo, blog setup",
            ogImage: "/public/images/tutorials/how-to-setup-blog.svg",
            twitterHandle: "@mayur_nalwala",
            author: MAYUR.name
        }
    },
    {
        path: '/pages/blog/layouts/home-layout.tsx',
        preview: {
            author: RUPALI,
            date: "August 08 2022",
            articleTitle: "Home Layout Example",
            tags: "demo, layout, home layout",
            thumbnail: "/public/images/tutorials/home-layouts.svg",
            shortIntro: "In this article we will see Default Home Layout example.",
            category: 'layouts'
        },
        seo: {
            title: "Home Layout Example",
            description:
                "In this article we will see Default Home Layout example.",
            keywords: "next js, tailwind css, typescript, blog template, default layout, default home layout",
            ogImage: "/public/images/tutorials/home-layouts.svg",
            author: RUPALI.name
        }
    },
    {
        path: '/pages/blog/layouts/blog-with-sidebar-layout.tsx',
        preview: {
            author: MAYUR,
            date: "August 08 2022",
            articleTitle: "Page Layout for article with sidebar",
            tags: "demo, with sidebar, default layout",
            thumbnail: "/public/images/tutorials/blog-with-sidebar-layout.svg",
            shortIntro: "In this article we will see Page Layout for blog with sidebar example.",
            category: 'layouts'
        },
        seo: {
            keywords: "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
            ogImage: "/public/images/tutorials/blog-with-sidebar-layout.svg",
        }
    },
    {
        path: '/pages/blog/layouts/blog-with-centered-layout.tsx',
        preview: {
            author: RUPALI,
            date: "August 08 2022",
            articleTitle: "Page Layout for article with centered layout",
            tags: "demo, centered, centered layout",
            thumbnail: "/public/images/tutorials/blog-with-centered-layout.svg",
            shortIntro: "This a demo artile with centered layout and with demo of all the components.",
            category: 'layouts'
        },
        seo: {
            keywords: "demo, centered, centered layout, blog page layout, blog page design with centered layout, webexpe, webexpe.com",
        }
    },
    {
        path: '/pages/blog/tutorial/how-to-write-your-first-article.tsx',
        featureArticle: true,
        preview: {
            author: RUPALI,
            date: "August 08 2022",
            articleTitle: "How to write your first article",
            tags: "demo, first article",
            thumbnail: "/public/images/tutorials/how-to-write-first-article.svg",
            shortIntro: "This a step by step guide on how to write your first article.",
            category: 'tutorial'
        },
        seo: {
            keywords: "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
        }
    },
    {
        path: '/pages/blog/tutorial/how-to-deploy-blog',
        featureArticle: true,
        preview: {
            author: RUPALI,
            date: "August 09 2022",
            articleTitle: "How to Export and deploy on firebase",
            tags: "demo, deploy blog",
            thumbnail: "/public/images/tutorials/how-to-deploy.svg",
            shortIntro: "In this article you will see how to export blog files and what folder to deploy on your hosting.",
            category: 'tutorial'
        }
    },
    {
        path: '/pages/all-components.tsx',
        preview: {
            author: RUPALI,
            date: "August 08 2022",
            articleTitle: "All Components",
            tags: "demo, all components",
            thumbnail: "/public/images/tutorials/all-components.svg",
            shortIntro: "List of all usable components, its types and how to use it.",
            category: 'tutorial'
        },
        seo: {
            keywords: "demo, all components, webexpe, webexpe.com",
        }
    },
    {
        path: '/pages/style-guide.tsx',
        preview: {
            author: MAYUR,
            date: "August 10 2022",
            articleTitle: "Style Guide",
            tags: "demo, all components, style guide, styling tutorial",
            thumbnail: "/public/images/tutorials/style-guide.svg",
            shortIntro: "Styling and theming tutorial.",
            category: 'tutorial'
        },
        seo: {
            keywords: "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com",
        }
    },
    {
        path: '/pages/icons.tsx',
        preview: {
            author: MAYUR,
            date: "August 13 2022",
            articleTitle: "How to use icons",
            tags: "demo, all components, style guide, styling tutorial, icons, how to use icons in website",
            thumbnail: "/public/images/tutorials/how-to-use-icons.svg",
            shortIntro: "How to use icons in your blog website.",
            category: 'tutorial'
        },
        seo: {
            keywords: "demo, all components, style guide, styling, css, tailwind css, tailwind, webexpe, webexpe.com, styling tutorial, icons, how to use icons in website",
        }
    },
]