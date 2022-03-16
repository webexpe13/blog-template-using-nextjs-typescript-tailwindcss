export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

export const getTheme = (setThemeState: any) => {
  const lsTheme = localStorage.getItem("theme");
  setThemeState(lsTheme ? lsTheme : "light");
};

export const setPath = (path: string, title: string): string => {
  if (path) {
    return path;
  } else {
    return "/blog/" + title.toLocaleLowerCase().split(" ").join("-");
  }
};
