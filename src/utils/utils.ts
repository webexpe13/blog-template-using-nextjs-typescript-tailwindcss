import { THEMES } from "../shared/enums";
import { useRouter } from "next/router";
import { ARTICLES_LIST } from "../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { iArticle } from "../shared/interfaces";
import { WEBSITE_NAME } from "../../BLOG_CONSTANTS/_BLOG_SETUP";

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

export const getTheme = (setThemeState: any) => {
  const lsTheme = localStorage.getItem("theme");
  setThemeState(lsTheme ? lsTheme : THEMES.LIGHT);
};

export const setPath = (path: string): string => {
  return path.substring(1);
};

export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const isDesktopDevice = () => {
  if (getDeviceType() === "desktop") {
    return true;
  } else {
    return false;
  }
};

export const isMobileDevice = () => {
  if (getDeviceType() === "mobile") {
    return true;
  } else {
    return false;
  }
};

export const addBodyNoScroll = () => {
  document.body.className += "no-scroll";
};

export const removeBodyNoScroll = () => {
  document.body.className = document.body.className.replace("no-scroll", "");
};

export const getArticleDetails = () => {
  const router = useRouter();
  const articlePath = router.pathname;
  return ARTICLES_LIST.filter((each) => each.path === articlePath)[0];
};

export const getCategories = (): string[] => {
  let categories: string[] = [];
  ARTICLES_LIST.forEach((each) => {
    if (each.preview.category && !categories.includes(each.preview.category)) {
      categories.push(each.preview.category);
    }
  });
  return categories;
};

export const CREATE_SEO_CONFIG = (ARTICLE_DETAILS: iArticle) => {
  const { path, preview, seo } = ARTICLE_DETAILS;
  let seo_config = {
    title: seo.title ? seo.title : preview.articleTitle + " | " + WEBSITE_NAME,
    description: seo.description || preview.shortIntro,
    additionalMetaTags: [
      {
        property: "keywords",
        content:
          "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
      },
    ],
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `https://nextjs-simple-blog-template.web.app/${path ? path : null}`,
      site_name: "nextjs-simple-blog-template",
      images: [
        {
          url: `/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "nextjs-simple-blog-template",
        },
      ],
    },
  };
  return seo_config;
};
