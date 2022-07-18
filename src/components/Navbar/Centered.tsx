import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getCategories, getTheme } from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";

const CenteredNavbar = ({
    openSearch,
    scrolled,
    theme = THEMES.LIGHT,
    changeTheme,
    toggleSideMenu,
    openSidebar = false,
    navSetup }: any) => {
    const { navLinks, socials, logo } = navSetup;

    const CATEGORIES = getCategories();
    const [openDD, setOpenDD] = useState(false)

    return (
        <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? classes.hideNav : " ", theme === THEMES.DARK ? classes.dark : null, "py-10")}>
            <div className={'container'}>
                <div className={combineClasses(classes.navbar__container, "px-15")}>
                    <div className="d-flex" style={{ width: "120px" }}>
                        <div
                            className={combineClasses(classes.mobileBurgerToggle, "mr-3", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
                            onClick={() => toggleSideMenu()}>
                            <span></span>
                        </div>
                        <div className={combineClasses(classes.search_icon_wrapper)} onClick={() => openSearch()}>
                            <button>
                                <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
                            </button>
                        </div>
                    </div>

                    <Link href="/" passHref={true}>
                        {
                            logo ?
                                logo.type === LogoType.IMAGE ?
                                    <img src={theme === THEMES.DARK ? logo.logoLight : logo.logo} alt="WebExpe" width="100px" /> :
                                    <a className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-22')}>{logo.logo}</a>
                                : <a className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-22')}>Logo</a>
                        }
                    </Link>

                    <div className="flex justify-end" style={{ width: "120px" }}>
                        {
                            socials &&
                            socials.map((each: any, i: any) => (
                                <a href={each.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={each.link}
                                    className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-12 d-inline-block', i === socials.length - 1 ? 'ml-3' : 'mx-3')}>{each.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', "flex justify-center items-center font-regular font-14 d-sm-none mt-3")}>
                    {
                        navLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <Link href={each.path} key={i} passHref={true}>
                                    <a className='mx-2'>{each.label}</a>
                                </Link> :
                                <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='d-block mx-2 flex-wrap'>
                                    {each.label}
                                </a>
                                : <div className={classes.sidebarCategoryDD_wrapper} key={each.label}>
                                    <div className='flex items-center cursor-pointer mx-2' key={each.label} onClick={() => setOpenDD(!openDD)}>
                                        <p className='my-0 '>
                                            {each.label}
                                        </p>
                                        <i className='icofont-caret-down'></i>
                                    </div>
                                    {
                                        openDD &&
                                        <div className={combineClasses(classes.sidebarCategoryDD, classes.sidebarCategoryDD__floating)}>
                                            <Link href={'/blog'} passHref={true}>
                                                <a className='font-14 block'>All Articles</a>
                                            </Link>
                                            {
                                                CATEGORIES.map(each => (
                                                    <Link href={'/blog/' + each} key={each} passHref={true}>
                                                        <a className='font-14 block' style={{ textTransform: 'capitalize' }}>{each}</a>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    }
                                </div>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
};

export default CenteredNavbar;
