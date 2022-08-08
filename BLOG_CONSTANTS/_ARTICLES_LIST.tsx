import { iArticle } from '../src/shared/interfaces';

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAYUR, RUPALI } from './_BLOG_SETUP';

// main article list to display all atricles
/**
 * Example article object
 * {
        path: '/pages/blog/tutorial/how-to-setup-blog',
        featureArticle: true,
        preview: {
            // the author object you created in _BLOG_SETUP file
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "How to setup this plog template",
            tags: "demo, blog setup",
            thumbnail: "/images/demo-image.jpg",
            shortIntro: "These are the steps to setup your blog",
        },
        seo: {
            title: "These are the steps to setup your blog",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            keywords: "demo, blog setup",
            ogImage: "/images/demo-image.jpg",
            twitterHandle: "@mayur_nalwala",
        }
    }
 */
export const ARTICLES_LIST: iArticle[] = [
    {
        path: '/pages/blog/tutorial/how-to-setup-blog',
        featureArticle: true,
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "How to setup this blog template",
            tags: "demo, blog setup",
            thumbnail: "/public/images/blog-setup.jpg",
            shortIntro: "These are the steps to setup your blog",
            category: 'tutorial'
        },
        seo: {
            title: "How to setup this blog template",
            description: "These are the steps to setup your blog",
            keywords: "demo, blog setup",
            ogImage: "/public/images/blog-setup.jpg",
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
            thumbnail: "/public/images/centered-layout-thumb.png",
            shortIntro: "In this article we will see Default Home Layout example.",
        },
        seo: {
            title: "Home Layout Example",
            description:
                "In this article we will see Default Home Layout example.",
            keywords: "next js, tailwind css, typescript, blog template, default layout, default home layout",
            ogImage: "/public/images/centered-layout-thumb.png",
            author: RUPALI.name
        }
    },
    {
        path: '/pages/blog/layouts/blog-with-sidebar-layout.tsx',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Page Layout with sidebar example",
            tags: "demo, with sidebar, default layout",
            thumbnail: "/public/images/default-layout-thumb.jpg",
            shortIntro: "In this article we will see Page Layout for blog with sidebar example.",
        },
        seo: {
            description: "In this article we will see Page Layout for blog with sidebar  example.",
            keywords: "demo, with sidebar, blog page layout, blog page design with sidebar, webexpe, webexpe.com",
            ogImage: "/public/images/default-layout-thumb.jpg",
            twitterHandle: "@mayur_nalwala",
            author: MAYUR.name
        }
    },
    {
        path: '/pages/blog/demo-article-centered-layout',
        preview: {
            author: RUPALI,
            date: "March 03 2022",
            articleTitle: "Demo Article with centered layout",
            tags: "demo,centered, centered layout",
            thumbnail: "/public/images/centered-layout-thumb.png",
            shortIntro: "This a demo artile with centered layout and with demo of all the components.",
        },
        seo: {
            title: "Demo Article with centered layout",
            description:
                "This a demo artile with centered layout and with demo of all the components.",
            keywords: "demo,centered, centered layout",
            ogImage: "/public/images/centered-layout-thumb.png",
            twitterHandle: "@mayur_nalwala",
            author: RUPALI.name
        }
    },
    {
        path: '/pages/blog/tutorial/demo-article-with-category',
        preview: {
            author: RUPALI,
            date: "March 03 2022",
            articleTitle: "Demo Article with category",
            tags: "demo, with category",
            thumbnail: "/public/images/category-thumb.png",
            shortIntro: "This a demo artile with example on how to add category.",
            category: 'tutorial'
        },
        seo: {
            title: "Demo Article with category",
            description:
                "This a demo artile with example on how to add category.",
            keywords: "demo, with category",
            ogImage: "/public/images/category-thumb.png",
            twitterHandle: "@mayur_nalwala",
            author: RUPALI.name
        }
    },
    {
        path: '/pages/blog/tutorial/how-to-deploy-blog',
        featureArticle: true,
        preview: {
            author: RUPALI,
            date: "March 03 2022",
            articleTitle: "How to Export and deploy on firebase",
            tags: "demo, deploy blog",
            thumbnail: "/public/images/deploy.png",
            shortIntro: "In this article you will see how to export blog files and what folder to deploy on your hosting.",
            category: 'tutorial'
        }
    },
]