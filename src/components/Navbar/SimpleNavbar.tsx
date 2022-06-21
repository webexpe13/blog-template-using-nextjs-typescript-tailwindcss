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
  openSidebar = false,
  navSetup
}: any) => {
  const { navLinks, showSearch, socials, width } = navSetup;

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
          <div className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-14 font-regular d-flex align-center d-sm-none')}>
            {
              navLinks.map((each: any, i: any) => (
                each.type !== 'dropdown' ? (
                  <Link href={each.path} key={i}>
                    <a className='d-block mx-15 my-0'>{each.label}</a>
                  </Link>
                ) : <p className='my-0 mx-15' key={i}>
                  {each.label}
                </p>
              ))
            }
            <div className="ml-15">
              {
                socials.map((each: any, i: any) => (
                  <a href={each.link} key={i} target="_blank" rel="noopener noreferrer" className='font-12 d-inline-block mr-20'>{each.icon}</a>
                ))
              }
            </div>
          </div>

          {
            showSearch &&
            <div className={combineClasses(classes.search_icon_wrapper, 'ml-10')} onClick={() => openSearch()}>
              <button>
                <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
              </button>
            </div>
          }


          <button className={combineClasses(classes.theme_switch, "pl-10 pr-0")} onClick={() => changeTheme()}>
            <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
