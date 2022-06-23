import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getCategories, getTheme } from "../../utils/utils";
import { ContainerWidths, THEMES } from "../../shared/enums";

const CenteredNavbar = ({
    container = ContainerWidths.DEFAULT,
    openSearch,
    scrolled,
    theme = THEMES.LIGHT,
    changeTheme,
    toggleSideMenu,
    openSidebar = false,
    navSetup }: any) => {
    const { navLinks, showSearch, socials, logo } = navSetup;

    const CATEGORIES = getCategories();
    const [openDD, setOpenDD] = useState(false)

    return (
        <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? classes.hideNav : " ", theme === THEMES.DARK ? classes.dark : null, "py-10")}>
            <div className={container}>
                <div className={combineClasses(classes.navbar__container, "px-15")}>
                    <div className="d-flex" style={{ width: "120px" }}>
                        <div
                            className={combineClasses(classes.mobileBurgerToggle, "mr-10", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
                            onClick={() => toggleSideMenu()}>
                            <span></span>
                        </div>
                        <div className={combineClasses(classes.search_icon_wrapper, 'pt-4')} onClick={() => openSearch()}>
                            <button>
                                <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
                            </button>
                        </div>
                    </div>

                    <Link href="/" passHref={true}>
                        {
                            logo ? <a className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-22')}>{logo}</a> : <a className={classes.logo}></a>
                        }
                    </Link>

                    <div className="d-flex justify-end" style={{ width: "120px" }}>
                        {
                            socials.map((each: any, i: any) => (
                                <a href={each.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={each.link}
                                    className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-12 d-inline-block', i === socials.length - 1 ? 'ml-10' : 'mx-10')}>{each.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', "d-flex justify-center align-center font-regular font-14 d-sm-none mt-15")}>
                    {
                        navLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <Link href={each.path} key={i} passHref={true}>
                                    <a className='mx-10'>{each.label}</a>
                                </Link> :
                                <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='d-block mx-10 flex-wrap'>
                                    {each.label}
                                </a>
                                : <div className={classes.sidebarCategoryDD_wrapper} key={each.label}>
                                    <div className='d-flex align-center cursor-pointer mx-10' key={each.label} onClick={() => setOpenDD(!openDD)}>
                                        <p className='my-0 '>
                                            {each.label}
                                        </p>
                                        <i className='icofont-caret-down'></i>
                                    </div>
                                    {
                                        openDD &&
                                        <div className={combineClasses(classes.sidebarCategoryDD, classes.sidebarCategoryDD__floating)}>
                                            <Link href={'/blog'} passHref={true}>
                                                <a className='font-14 d-block'>All Articles</a>
                                            </Link>
                                            {
                                                CATEGORIES.map(each => (
                                                    <Link href={'/blog/' + each} key={each} passHref={true}>
                                                        <a className='font-14 d-block' style={{ textTransform: 'capitalize' }}>{each}</a>
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
