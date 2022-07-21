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

export const changeTheme = () => {
  const lsTheme = localStorage.getItem("theme");
  localStorage.setItem("theme", lsTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme');

  location.reload();
}

export const getTheme = (setThemeState: any) => {
  const lsTheme = localStorage.getItem("theme");
  setThemeState(lsTheme ? lsTheme : THEMES.LIGHT);
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
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
  const articlePath = "/pages" + router.pathname;
  console.log(router)
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

export const transformPath = (path = '') => {
  return path.replace('/pages', '').replace('.tsx', '');
}

export const transformImagePaths = (path = '') => {
  return path.replace('/public', '');
}