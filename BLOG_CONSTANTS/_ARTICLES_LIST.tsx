
import { IArticleHeaderData } from '../src/shared/interfaces';
import { MAYUR, RUPALI } from './_BLOG_SETUP';

interface iArticle {
    path: string;
    preview: IArticleHeaderData,
    seo: {
        title: string;
        description: string;
        additionalMetaTags: any[]
    }
}

export const FEATURE_ARTICLE: iArticle = {
    path: '/blog/tutorial/how-to-setup-blog',
    preview: {
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
        additionalMetaTags: [
            {
                property: "keywords",
                content:
                    "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
            },
        ],
    }
}

export const ARTICLES_LIST: iArticle[] = [
    {
        path: '/blog/tutorial/how-to-setup-blog',
        preview: {
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
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        path: '/blog/demo-article-default-layout',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Demo Article with default layout (with sidebar)",
            tags: "demo, with sidebar, default layout",
            thumbnail: "/images/demo-image.jpg",
            shortIntro: "This a demo artile with sidebar layout and with demo of all the components.",
        },
        seo: {
            title: "Demo Article with default sidebar layout",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        path: '/blog/demo-article-centered-layout',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Demo Article with centered layout",
            tags: "demo,centered, centered layout",
            thumbnail: "/images/demo-image.jpg",
            shortIntro: "This a demo artile with sidebar layout and with demo of all the components.",
        },
        seo: {
            title: "Demo Article with default centered layout",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
    {
        // for article inside a category the path will also change
        // /blog/{category}/{filename}
        path: '/blog/tutorial/demo-article-with-category',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Demo Article with category",
            tags: "demo, with category",
            thumbnail: "/images/demo-image.jpg",
            shortIntro: "This a demo artile with sidebar layout and with demo of all the components.",
            // create a folder of you category example "food-recipies" or "travel" etc and put that exact same name in category
            category: 'tutorial'
        },
        seo: {
            title: "Demo Article with category",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            additionalMetaTags: [
                {
                    property: "keywords",
                    content:
                        "Blog, learn web development, learn javascript, learn css, learn html css js, responsive web development, responsive website",
                },
            ],
        }
    },
]