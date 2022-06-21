import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getTheme } from "../../utils/utils";
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
    const { navLinks, showSearch, socials } = navSetup;
    return (
        <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? classes.hideNav : " ", theme === THEMES.DARK ? classes.dark : null, "py-10")}>
            <div className={container}>
                <div className={combineClasses(classes.navbar__container, "px-15")}>
                    <div className="d-flex" style={{width: "120px"}}>
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

                    <Link href="/">
                        <a className={combineClasses(classes.logo, 'd-mob-none')}></a>
                    </Link>

                    <div className="d-flex justify-end" style={{width: "120px"}}>
                        {
                            socials.map((each: any, i: any) => (
                                <a href={each.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={i}
                                    className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', 'font-12 d-inline-block', i === socials.length - 1 ? 'ml-10': 'mx-10')}>{each.icon}
                                </a>
                            ))
                        }
                    </div>
                </div>
                <div className={combineClasses(theme === THEMES.DARK ? 'font-white' : 'font-black', "d-flex justify-center align-center font-regular font-14 d-sm-none mt-15")}>
                    {
                        navLinks.map((each: any) => (
                            each.type !== 'dropdown' ? (
                                <Link href={each.path}>
                                    <a className='mx-20'>{each.label}</a>
                                </Link>
                            ) : <p className='my-0 mx-20'>
                                {each.label}
                            </p>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
};

export default CenteredNavbar;
