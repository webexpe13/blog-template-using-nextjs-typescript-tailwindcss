import classes from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import { combineClasses, getCategories, transformImagePaths } from "../../utils/utils";
import { LogoType, THEMES } from "../../shared/enums";
import LinkTo from "../LinkTo";
import { useTheme } from "next-themes";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const CenteredNavbar = ({
    openSearch,
    scrolled,
    toggleSideMenu,
    openSidebar = false,
    navSetup }: any) => {
    const { navLinks, socials, logo } = navSetup;

    const CATEGORIES = getCategories();
    const [openDD, setOpenDD] = useState(false)
    const { theme, setTheme } = useTheme();

    return (
        <div className={'container'}>
            <div className="flex items-center justify-between px-3">
                <div className="flex" style={{ width: "120px" }}>
                    <div
                        className={combineClasses(classes.mobileBurgerToggle, "mr-3", openSidebar ? classes.mobileBurgerToggle__close : ' ')}
                        onClick={() => toggleSideMenu()}>
                        <AiOutlineMenu className="dark:text-white text-black text-2xl" />
                    </div>
                    <div className={combineClasses(classes.search_icon_wrapper)} onClick={() => openSearch()}>
                        <button name="search" aria-label="search" className="dark:text-white text-black">
                            <AiOutlineSearch className="text-[24px]" />
                        </button>
                    </div>
                </div>

                <LinkTo href="/" passHref={true}>
                    {
                        logo ?
                            logo.type === LogoType.IMAGE ?
                                <img src={theme === THEMES.DARK ? transformImagePaths(logo.logoLight) : transformImagePaths(logo.logo)} alt="WebExpe" className="cursor-pointer" width="100px" /> :
                                <span className='text-[22px] font-semibold'>{logo.logo}</span>
                            : <span className='text-[22px] font-semibold'>Logo</span>
                    }
                </LinkTo>

                <div className="flex justify-end" style={{ width: "120px" }}>
                    {
                        socials &&
                        socials.map((each: any, i: any) => (
                            <a href={each.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={each.link}
                                className={combineClasses('dark:text-white text-black text-[24px] d-inline-block', i === socials.length - 1 ? 'ml-3' : 'mx-3')}>{each.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className='dark:font-white font-black flex justify-center items-center font-regular text-[14px] d-sm-none mt-3'>
                {
                    navLinks.map((each: any, i: any) => (
                        each.type !== 'dropdown' ? !each.newTab ?
                            <LinkTo href={each.path} key={i} passHref={true} className='mx-2 font-normal'>
                                {each.label}
                            </LinkTo> :
                            <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='block mx-2 flex-wrap font-normal	'>
                                {each.label}
                            </a>
                            : <div className={classes.sidebarCategoryDD_wrapper} key={each.label}>
                                <div className='flex items-center cursor-pointer mx-2' key={each.label} onClick={() => setOpenDD(!openDD)}>
                                    <p className='my-0 font-normal	'>
                                        {each.label}
                                    </p>
                                    <BiChevronDown className="text-[20px]" />
                                </div>
                                {
                                    openDD &&
                                    <div className={combineClasses(classes.sidebarCategoryDD, classes.sidebarCategoryDD__floating, 'bg-white dark:bg-slate-800 shadow-md px-1')}>
                                        <LinkTo href={'/blog'} passHref={true} className='block text-sm p-2 font-normal'>
                                            All Articles
                                        </LinkTo>
                                        {
                                            CATEGORIES.map(each => (
                                                <LinkTo href={"/blog?category=" + each} key={each} passHref className='block text-sm p-2 border-t border-gray-400 font-normal' >
                                                    <span style={{ textTransform: 'capitalize' }}>{each}</span>
                                                </LinkTo>
                                            ))
                                        }
                                    </div>
                                }
                            </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CenteredNavbar;
