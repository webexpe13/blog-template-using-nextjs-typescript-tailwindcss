import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getCategories, getTheme } from "../../utils/utils";
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

  const CATEGORIES = getCategories();
  const [openDD, setOpenDD] = useState(false)

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
                each.type !== 'dropdown' ? !each.newTab ?
                  <Link href={each.path} key={i}>
                    <a className='mx-10'>{each.label}</a>
                  </Link> :
                  <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='d-block mx-10 flex-wrap'>
                    {each.label}
                  </a>
                  : <div className={classes.sidebarCategoryDD_wrapper}>
                    <div className='d-flex align-center cursor-pointer mx-10' key={i} onClick={() => setOpenDD(!openDD)}>
                      <p className='my-0'>
                        {each.label}
                      </p>
                      <i className='icofont-caret-down'></i>
                    </div>
                    {
                      openDD &&
                      <div className={combineClasses(classes.sidebarCategoryDD, classes.sidebarCategoryDD__floating)}>
                        <Link href={'/blog'}>
                          <a className='font-14 d-block'>All Articles</a>
                        </Link>
                        {
                          CATEGORIES.map(each => (
                            <Link href={'/blog/' + each} key={each}>
                              <a className='font-14 d-block' style={{ textTransform: 'capitalize' }}>{each}</a>
                            </Link>
                          ))
                        }
                      </div>
                    }
                  </div>
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
