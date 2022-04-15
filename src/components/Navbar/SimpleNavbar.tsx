import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getTheme } from "../../utils/utils";
import { ContainerWidths, THEMES } from "../../shared/enums";

const SimpleNavbar = ({
  container = ContainerWidths.DEFAULT,
  openSearch,
  scrolled = false,
  theme = THEMES.LIGHT,
  changeTheme,
  toggleSideMenu,
  openSidebar = false
}: any) => {
  return (
    <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? classes.hideNav : " ", theme === THEMES.DARK ? classes.dark : null, "py-10")}>
      <div className={combineClasses(classes.navbar__container, container, "px-15")}>
        <div className="d-flex align-center">
          <div
            className={combineClasses(classes.mobileBurgerToggle, "mr-10", openSidebar ? classes.mobileBurgerToggle__close : ' ')} 
            onClick={() => toggleSideMenu()}>
            <span></span>
          </div>
          <Link href="/">
            <a className={classes.logo}></a>
          </Link>
        </div>

        <div className="d-flex align-center">
          <div className={classes.search_icon_wrapper} onClick={() => openSearch()}>
            <p className="m-0 font-14 pr-10 display-sm-none">
              Search ...
            </p>
            <button>
              <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
            </button>
          </div>

          <button className={combineClasses(classes.theme_switch, "pl-10 pr-0")} onClick={() => changeTheme()}>
            <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
