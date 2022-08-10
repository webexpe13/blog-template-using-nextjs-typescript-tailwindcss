import { useEffect, useState } from 'react';
import { THEME_ICONS } from '../../constants/appConstants';
import { THEMES } from '../../shared/enums';
import { addBodyNoScroll, combineClasses, getCategories, removeBodyNoScroll } from '../../utils/utils';
import classes from './Navbar.module.scss';
import { XIcon } from '@heroicons/react/outline';
import LinkTo from "../../components/LinkTo"

interface IProps {
    openSidebar: boolean;
    theme: any;
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

            <aside className={combineClasses(classes.nav_sidebar_wrapper, openSidebar && classes.open, 'dark:bg-slate-900 dark:text-white bg-white text-black')}>
                <div className='flex items-center justify-between pb-3' onClick={closeNavSidebar}>
                    <p className='font-light'>menu</p>
                    <div className={classes.sideNavCloseIcon}><XIcon className='text-slate-800 dark:text-white' /></div>
                </div>
                <hr />
                <div className='my-15'>
                    {
                        navSetup.sideNavLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <LinkTo href={each.path} key={i} passHref>
                                    <a className='text-[16px] block my-3'>{each.label}</a>
                                </LinkTo> :
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
                                        <LinkTo href={'/blog'} passHref>
                                            <a className=''>All Articles</a>
                                        </LinkTo>
                                        {
                                            CATEGORIES.map(each => (
                                                <LinkTo href={"/blog?category=" + each} key={each} passHref>
                                                    <a className='' style={{ textTransform: 'capitalize' }}>{each}</a>
                                                </LinkTo>
                                            ))
                                        }
                                    </div>
                                </div>
                        ))
                    }
                    {
                        env === 'development' ?
                            <>
                                <LinkTo href='/icons' passHref>
                                    <a className='text-[16px] block my-3'>Icons</a>
                                </LinkTo>
                                <LinkTo href='/pages/all-components.tsx' passHref>
                                    <a className='text-[16px] block my-3'>All Components</a>
                                </LinkTo>
                                <LinkTo href='/pages/blog/layouts/blog-with-sidebar-layout.tsx' passHref>
                                    <a className='text-[16px] block my-3'>Page Layout for article with sidebar</a>
                                </LinkTo>
                                <LinkTo href='/pages/blog/layouts/blog-with-centered-layout.tsx' passHref>
                                    <a className='text-[16px] block my-3'>Page Layout for centered article</a>
                                </LinkTo>
                                <LinkTo href='/pages/blog/tutorial/how-to-setup-blog.tsx' passHref>
                                    <a className='text-[16px] block my-3'>How to setup your blog</a>
                                </LinkTo>
                                <LinkTo href='/pages/blog/tutorial/how-to-write-your-first-article.tsx' passHref>
                                    <a className='text-[16px] block my-3'>How to write your first article</a>
                                </LinkTo>
                                <LinkTo href='/pages/blog/tutorial/how-to-deploy-blog.tsx' passHref>
                                    <a className='text-[16px] block my-3'>How to export the blog</a>
                                </LinkTo>
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
                    <button name="theme-switch" className={combineClasses(classes.theme_switch)} onClick={() => changeTheme()}>
                        <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
                    </button>
                </div>
                <hr />
                <div className='my-5'>
                    <p className='text-sm font-light text-gray-500 mb-1'>Copyright © 2022</p>
                    <LinkTo href="/privacy-policy" passHref>
                        <a className='text-sm font-light text-gray-500 pr-3'>Privacy Policy</a>
                    </LinkTo>
                    <LinkTo href="/terms-and-condition" passHref>
                        <a className='text-sm font-light text-gray-500'>Terms and Conditions</a>
                    </LinkTo>
                </div>
            </aside>
        </>
    )
}

export default NavSidebar