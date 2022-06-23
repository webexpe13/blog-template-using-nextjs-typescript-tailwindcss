import { THEMES } from "../shared/enums";
import { useRouter } from "next/router";
import { ARTICLES_LIST } from "../../BLOG_CONSTANTS/_ARTICLES_LIST";

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
  // const splits = ARTICLES_LIST.map(each => each.path.split('/'));
  // splits.forEach(each => {
  //   const lastItem = each.length;
  //   if(each.indexOf('blog') + 1 !== lastItem - 1 && !categories.includes(each[each.indexOf('blog') + 1])){
  //     categories.push(each[each.indexOf('blog') + 1])
  //   }
  // })
  ARTICLES_LIST.forEach((each) => {
    if (each.preview.category && !categories.includes(each.preview.category)) {
      categories.push(each.preview.category);
    }
  });
  return categories;
};
