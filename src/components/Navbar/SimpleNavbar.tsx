import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { combineClasses, transformImagePaths } from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import LinkTo from "../LinkTo";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill , BsFillShareFill} from "react-icons/bs";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import NavCatergoryDD from "../Misc/NavCategoryDD";
import { iNavbar, iNavLink, iNavSocials } from "../../shared/interfaces";


const SimpleNavbar = ({ openSearch, changeTheme, toggleSideMenu, openSidebar = false, navSetup, onShareClick }: iNavbar) => {
  const { navLinks, socials, logo } = navSetup;
  const [openDD, setOpenDD] = useState(false)
  const { theme, setTheme } = useTheme();

  return (
    <div className={combineClasses(classes.navbar__container, 'container flex items-center justify-between', "px-2")}>
      <div className="flex items-center">
        <div
          className={combineClasses(classes.mobileBurgerToggle, "mr-5", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
          onClick={() => toggleSideMenu()}>
          <AiOutlineMenu className="dark:text-white text-black text-2xl" />
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
        <div className='text-[14px] font-normal items-center lg:flex hidden'>
          {
            navLinks.map((each: iNavLink, i: any) => (
              each.type !== 'dropdown' ? !each.newTab ?
                <LinkTo href={each.path} key={i} passHref className='mx-2'>
                  {each.label}
                </LinkTo> :
                <a href={each.path} key={each.path + 1} target="_blank" rel="noopener noreferrer" className='d-block mx-2 flex-wrap'>
                  {each.label}
                </a>
                :
                <NavCatergoryDD label={each.label} openDD={openDD} setOpenDD={() => setOpenDD(!openDD)} floating />
            ))
          }
          {
            socials &&
            <div className="ml-5 pt-1">
              {
                socials.map((each: iNavSocials, i: any) => (
                  <a href={each.link} key={i} target="_blank" rel="noopener noreferrer" className='text-[18px] inline-block mr-4'>{each.icon}</a>
                ))
              }
            </div>
          }
        </div>


        <div className={combineClasses(classes.search_icon_wrapper, 'ml-5 dark:text-white')} onClick={() => openSearch()}>
          <button name="search-button" aria-label="search button">
            <AiOutlineSearch className="dark:text-white text-black text-[22px]" />
          </button>
        </div>

        <div className="" onClick={() => onShareClick()}>
          <button name="share" aria-label="share page">
            <BsFillShareFill className="dark:text-white text-black text-[16px] mt-[7px] ml-2 mr-1" />
          </button>
        </div>


        <button name="theme-switch" aria-label="theme button" className={combineClasses(classes.theme_switch, "pl-3 dark:text-white text-black")} onClick={changeTheme}>
          {
            theme && theme === 'dark' ? <BsFillSunFill className="text-2xl" /> : <BsFillMoonFill className="text-md " />
          }
        </button>
      </div>
    </div>
  );
};

export default SimpleNavbar;
