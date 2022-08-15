import { useEffect, useState } from 'react';
import { THEME_ICONS } from '../../constants/appConstants';
import { THEMES } from '../../shared/enums';
import { addBodyNoScroll, combineClasses, getCategories, removeBodyNoScroll } from '../../utils/utils';
import classes from './Navbar.module.scss';
import { XIcon } from '@heroicons/react/outline';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { Text, LinkTo } from '../../components';
import { useTheme } from 'next-themes';

interface IProps {
    openSidebar: boolean;
    closeNavSidebar: () => void;
    navSetup: any;
    changeTheme: () => void;
}

const NavSidebar = ({ openSidebar = false, closeNavSidebar, navSetup, changeTheme }: IProps) => {
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        openSidebar
            ? addBodyNoScroll()
            : () => {
                return;
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
                    <p className=''>menu</p>
                    <div className={classes.sideNavCloseIcon}><XIcon className='text-slate-800 dark:text-white' /></div>
                </div>
                <hr />
                <div className='my-15'>
                    {
                        navSetup.sideNavLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <LinkTo href={each.path} key={i} passHref className='text-[16px] block my-3'>
                                    {each.label}
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
                                        <LinkTo href={'/blog'} passHref className='block mb-2 text-sm'>
                                            All Articles
                                        </LinkTo>
                                        {
                                            CATEGORIES.map(each => (
                                                <LinkTo href={"/blog?category=" + each} key={each} passHref className='block mb-2 text-sm'>
                                                    <span style={{ textTransform: 'capitalize' }}>{each}</span>
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
                                <hr />
                                <Text subtitle className='mt-3 !text-[18px]'>Examples and tutorials</Text>
                                <LinkTo href='/pages/all-components.tsx' passHref className='text-[16px] block my-3'>
                                    All Components
                                </LinkTo>
                                <LinkTo href='/pages/style-guide.tsx' passHref className='text-[16px] block my-3'>
                                    Style Guide
                                </LinkTo>
                                <LinkTo href='/pages/blog/layouts/home-layout.tsx' passHref className='text-[16px] block my-3'>
                                    Home Page Layout
                                </LinkTo>
                                <LinkTo href='/pages/blog/layouts/blog-with-sidebar-layout.tsx' passHref className='text-[16px] block my-3'>
                                    Page Layout for article with sidebar
                                </LinkTo>
                                <LinkTo href='/pages/blog/layouts/blog-with-centered-layout.tsx' passHref className='text-[16px] block my-3'>
                                    Page Layout for centered article
                                </LinkTo>
                                <LinkTo href='/pages/blog/tutorial/how-to-setup-blog.tsx' passHref className='text-[16px] block my-3'>
                                    How to setup your blog
                                </LinkTo>
                                <LinkTo href='/pages/blog/tutorial/how-to-write-your-first-article.tsx' passHref className='text-[16px] block my-3'>
                                    How to write your first article
                                </LinkTo>
                                <LinkTo href='/pages/blog/tutorial/how-to-deploy-blog.tsx' passHref className='text-[16px] block my-3'>
                                    How to export the blog
                                </LinkTo>
                                <LinkTo href='/icons' passHref className='text-[16px] block my-3'>
                                    Icons
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
                    <button name="theme-switch" aria-label="theme-switch" className={combineClasses(classes.theme_switch, 'dark:text-white text-black')} onClick={() => changeTheme()}>
                        {
                            theme === THEMES.DARK ? <SunIcon className="w-[28px]" /> : <MoonIcon className="w-[25px]" />
                        }
                    </button>
                </div>
                <hr />
                <div className='my-5'>
                    <p className='text-sm font-light dark:text-gray-400 text-gray-500 mb-1'>Copyright © 2022</p>
                    <LinkTo href="/privacy-policy" passHref className='text-sm font-light dark:text-gray-400 text-gray-500 pr-3'>
                        Privacy Policy
                    </LinkTo>
                    <LinkTo href="/terms-and-condition" passHref className='text-sm font-light dark:text-gray-400 text-gray-500'>
                        Terms and Conditions
                    </LinkTo>
                </div>
            </aside>
        </>
    )
}

export default NavSidebar