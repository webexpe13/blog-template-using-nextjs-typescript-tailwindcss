
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

const ARTICLES: iArticle[] = [
    {
        path: '/blog/simple-burger-menu-using-css',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Article Title Lorem ipsum dolor sit amet, consectetur",
            tags: ["css", "css animations", "css tricks"],
            thumbnail: "https://picsum.photos/300/200",
            shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            category: 'javascript'
        },
        seo: {
            title: "Lalalalal",
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
        path: '/blog/understand-and-implement-redux-store',
        preview: {
            author: RUPALI,
            thumbnail: "https://picsum.photos/300/200",
            tags: ["react js", "react redux store", "redux"],
            date: "March 03 2022",
            articleTitle: "Understand and implement redux store",
            shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
            category: 'javascript'
        },
        seo: {
            title: "understand-and-implement-redux-store",
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
        path: '/blog/understand-and-implement-redux-store',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Article Title CSS Lorem ipsum dolor sit amet, consectetur",
            tags: ["css", "css animations", "css tricks"],
            thumbnail: "https://picsum.photos/300/200",
            shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            category: 'css'
        },
        seo: {
            title: "Our Blog",
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
        path: '/blog/understand-and-implement-redux-store',
        preview: {
            author: RUPALI,
            thumbnail: "https://picsum.photos/300/200",
            tags: ["react js", "react redux store", "redux"],
            date: "March 03 2022",
            articleTitle: "Understand and implement redux store",
            shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        },
        seo: {
            title: "Our Blog",
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
        path: '/blog/understand-and-implement-redux-store',
        preview: {
            author: MAYUR,
            date: "March 03 2022",
            articleTitle: "Article Title Lorem ipsum dolor sit amet, consectetur",
            tags: ["css", "css animations", "css tricks"],
            thumbnail: "https://picsum.photos/300/200",
            shortIntro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        seo: {
            title: "Our Blog",
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

export default ARTICLES