import Link from 'next/link';
import { useEffect, useState } from 'react';
import { THEME_ICONS } from '../../constants/appConstants';
import { THEMES } from '../../shared/enums';
import { addBodyNoScroll, combineClasses, getCategories, removeBodyNoScroll } from '../../utils/utils';
import classes from './Navbar.module.scss';

interface IProps {
    openSidebar: boolean;
    theme: THEMES;
    closeNavSidebar: () => void;
    navSetup: any;
    changeTheme: () => void;
}

const NavSidebar = ({ openSidebar = false, theme = THEMES.LIGHT, closeNavSidebar, navSetup, changeTheme }: IProps) => {

    useEffect(() => {
        openSidebar
            ? addBodyNoScroll()
            : () => {
                return;
            };
        return () => {
            removeBodyNoScroll();
        };
    }, [openSidebar]);

    const env = process.env.NODE_ENV;

    const CATEGORIES = getCategories();
    const [openDD, setOpenDD] = useState(false)


    return (
        <>
            {openSidebar ? (
                <div className="backdrop" onClick={closeNavSidebar}></div>
            ) : null}

            <aside className={combineClasses(classes.nav_sidebar_wrapper, classes.shadow, openSidebar && classes.open, theme === THEMES.DARK && classes.dark)}>
                <div className={combineClasses('flex items-center justify-between pb-3')} onClick={closeNavSidebar}>
                    <p className='font-light'>menu</p>
                    <div className={classes.sideNavCloseIcon}><span></span></div>
                </div>
                <hr />
                <div className='my-15'>
                    {
                        navSetup.sideNavLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <Link href={each.path} key={i} passHref>
                                    <a className='text-[16px] block my-3'>{each.label}</a>
                                </Link> :
                                <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='text-[16px] block my-3 flex-wrap'>
                                    {each.label}
                                </a>
                                :
                                <div className={classes.sidebarCategoryDD_wrapper} key={i} >
                                    <div className='flex justify-between items-center cursor-pointer' onClick={() => setOpenDD(!openDD)}>
                                        <p className='text-[16px] my-0'>
                                            {each.label}
                                        </p>
                                        <i className='icofont-caret-down'></i>
                                    </div>
                                    <div className={classes.sidebarCategoryDD} style={{ height: openDD ? 'auto' : '0px', padding: openDD ? '10px' : '0px' }}>
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
                                </div>
                        ))
                    }
                    {
                        env === 'development' ?
                            <>
                                <Link href='/icons' passHref>
                                    <a className='text-[16px] block my-3'>Icons</a>
                                </Link>
                                {/* <Link href='/styles' passHref>
                                    <a className='text-[16px] block my-3'>Styles Doc</a>
                                </Link> */}
                                <Link href='/blog/demo-article-default-layout' passHref>
                                    <a className='text-[16px] block my-3'>Demo Article Default Layout</a>
                                </Link>
                                <Link href='/blog/demo-article-centered-layout' passHref>
                                    <a className='text-[16px] block my-3'>Demo Article Centered Layout</a>
                                </Link>
                                <Link href='/blog/tutorial/demo-article-with-category' passHref>
                                    <a className='text-[16px] block my-3'>Demo Article With category</a>
                                </Link>
                                <Link href='/blog/tutorial/how-to-setup-blog' passHref>
                                    <a className='text-[16px] block my-3'>How to setup your blog</a>
                                </Link>
                                <Link href='/blog/tutorial/how-to-deploy-blog' passHref>
                                    <a className='text-[16px] block my-3'>How to export the blog</a>
                                </Link>
                            </>
                            : null
                    }

                </div>
                <hr />
                <div className='my-5'>
                    {
                        navSetup.socials && <>
                            <p className='font-light'>Follow us : </p> {
                                navSetup.socials.map((each: any) => (
                                    <a href={each.link} key={each.link} target="_blank" rel="noopener noreferrer" className='text-[28px] inline-block mr-5 flex-wrap'>{each.icon}</a>
                                ))
                            }
                            <hr className='mt-5' />
                        </>
                    }
                </div>
                <div className='mt-5 mb-4'>
                    <p className='mb-2 font-light'>Switch To {theme === THEMES.LIGHT ? 'Dark' : 'Light'} Theme :</p>
                    <button className={combineClasses(classes.theme_switch)} onClick={() => changeTheme()}>
                        <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
                    </button>
                </div>
                <hr />
                <div className='my-5'>
                    <p className='text-sm font-light text-gray-500 mb-1'>Copyright © 2022</p>
                    <Link href="/privacy-policy" passHref>
                        <a className='text-sm font-light text-gray-500 pr-3'>Privacy Policy</a>
                    </Link>
                    <Link href="/terms-and-condition" passHref>
                        <a className='text-sm font-light text-gray-500'>Terms and Conditions</a>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default NavSidebar