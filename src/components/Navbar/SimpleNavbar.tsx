import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getCategories, transformImagePaths } from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import { MenuIcon } from '@heroicons/react/outline';
import LinkTo from "../LinkTo";


const SimpleNavbar = ({
  openSearch,
  scrolled = false,
  theme = THEMES.LIGHT,
  changeTheme,
  toggleSideMenu,
  openSidebar = false,
  navSetup
}: any) => {
  const { navLinks, socials, logo } = navSetup;

  const CATEGORIES = getCategories();
  const [openDD, setOpenDD] = useState(false)

  return (
      <div className={combineClasses(classes.navbar__container, 'container flex items-center justify-between', "px-2")}>
        <div className="flex items-center">
          <div
            className={combineClasses(classes.mobileBurgerToggle, "mr-5", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
            onClick={() => toggleSideMenu()}>
            <MenuIcon className="dark:text-white text-black" />
          </div>
          <Link href="/" passHref>
            {
              logo ?
                logo.type === LogoType.IMAGE ?
                  <img src={theme === THEMES.DARK ? transformImagePaths(logo.logoLight) : transformImagePaths(logo.logo)} alt="WebExpe" className="cursor-pointer" width="100px" /> :
                  <a className='text-[22px] font-semibold'>{logo.logo}</a>
                : <a className='text-[22px] font-semibold'>Logo</a>
            }
          </Link>
        </div>

        <div className="flex items-center">
          <div className='text-[14px] font-normal items-center md:flex hidden'>
            {
              navLinks.map((each: any, i: any) => (
                each.type !== 'dropdown' ? !each.newTab ?
                  <LinkTo href={each.path} key={i} passHref>
                    <a className='mx-2'>{each.label}</a>
                  </LinkTo> :
                  <a href={each.path} key={each.path + 1} target="_blank" rel="noopener noreferrer" className='d-block mx-2 flex-wrap'>
                    {each.label}
                  </a>
                  : <div className={classes.sidebarCategoryDD_wrapper} key={i}>
                    <div className='flex items-center cursor-pointer mx-2' onClick={() => setOpenDD(!openDD)}>
                      <p className='my-0'>
                        {each.label}
                      </p>
                      <i className='icofont-caret-down'></i>
                    </div>
                    {
                      openDD &&
                      <div className={combineClasses(classes.sidebarCategoryDD, classes.sidebarCategoryDD__floating, 'bg-white dark:bg-slate-800')}>
                        <Link href={'/blog'} passHref>
                          <a className=''>All Articles</a>
                        </Link>
                        {
                          CATEGORIES.map(each => (
                            <Link href={"/blog?category=" + each} key={each} passHref>
                              <a className='' style={{ textTransform: 'capitalize' }}>{each}</a>
                            </Link>
                          ))
                        }
                      </div>
                    }
                  </div>
              ))
            }
            {
              socials &&
              <div className="ml-5">
                {
                  socials.map((each: any, i: any) => (
                    <a href={each.link} key={i} target="_blank" rel="noopener noreferrer" className='text-[22px] inline-block mr-4'>{each.icon}</a>
                  ))
                }
              </div>
            }
          </div>


          <div className={combineClasses(classes.search_icon_wrapper, 'ml-5 dark:text-white')} onClick={() => openSearch()}>
            <button name="search-button">
              <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
            </button>
          </div>


          <button name="theme-switch" className={combineClasses(classes.theme_switch, "pl-3")} onClick={changeTheme}>
            <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
          </button>
        </div>
      </div>
  );
};

export default SimpleNavbar;
