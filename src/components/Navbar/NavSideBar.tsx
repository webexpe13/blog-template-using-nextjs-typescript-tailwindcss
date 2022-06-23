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
                <div className={combineClasses('d-flex align-center justify-space-between', classes.navSidebarHeader)} onClick={closeNavSidebar}>
                    <p className='mt-0 mb-0 pt-4 font-light'>menu</p>
                    <div className={classes.sideNavCloseIcon}><span></span></div>
                </div>
                <hr />
                <div className='my-15'>
                    {
                        navSetup.sideNavLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? !each.newTab ?
                                <Link href={each.path} key={i} passHref>
                                    <a className='font-16 font-medium d-block my-15'>{each.label}</a>
                                </Link> :
                                <a href={each.path} key={each.path} target="_blank" rel="noopener noreferrer" className='font-16 font-medium d-inline-block mt-15 flex-wrap'>
                                    {each.label}
                                </a>
                                :
                                <div className={classes.sidebarCategoryDD_wrapper} key={i} >
                                    <div className='d-flex justify-space-between align-center cursor-pointer' onClick={() => setOpenDD(!openDD)}>
                                        <p className='font-16 font-medium my-0'>
                                            {each.label}
                                        </p>
                                        <i className='icofont-caret-down'></i>
                                    </div>
                                    <div className={classes.sidebarCategoryDD} style={{ height: openDD ? '150px' : '0px', padding: openDD ? '10px' : '0px' }}>
                                        <Link href={'/blog'} passHref>
                                            <a className='font-14 d-block'>All Articles</a>
                                        </Link>
                                        {
                                            CATEGORIES.map(each => (
                                                <Link href={'/blog/' + each} key={each} passHref>
                                                    <a className='font-14 d-block' style={{ textTransform: 'capitalize' }}>{each}</a>
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
                                    <a className='font-16 font-medium d-block my-15'>Icons</a>
                                </Link>
                                <Link href='/styles' passHref>
                                    <a className='font-16 font-medium d-block my-15'>Styles Doc</a>
                                </Link>
                                <Link href='/blog/demo-article-default-layout' passHref>
                                    <a className='font-16 font-medium d-block my-15'>Demo Article Default Layout</a>
                                </Link>
                                <Link href='/blog/demo-article-centered-layout' passHref>
                                    <a className='font-16 font-medium d-block my-15'>Demo Article Centered Layout</a>
                                </Link>
                                <Link href='/blog/demo-article-with-category' passHref>
                                    <a className='font-16 font-medium d-block my-15'>Demo Article With category</a>
                                </Link>
                                <Link href='/blog/tutorial/how-to-setup-blog' passHref>
                                    <a className='font-16 font-medium d-block my-15'>How to setup your blog</a>
                                </Link>
                                <Link href='/blog/tutorial/how-to-deploy-blog' passHref>
                                    <a className='font-16 font-medium d-block my-15'>How to export the blog</a>
                                </Link>
                            </>
                            : null
                    }

                </div>
                <hr />
                <div className='my-15'>
                    <p className='mb-10 font-light'>Follow us : </p>
                    {
                        navSetup.socials.map((each: any) => (
                            <a href={each.link} key={each.link} target="_blank" rel="noopener noreferrer" className='font-16 font-medium d-inline-block mr-20 flex-wrap'>{each.icon}</a>
                        ))
                    }
                </div>
                <hr />
                <div className='my-15'>
                    <p className='mb-10 font-light'>Switch To {theme === THEMES.LIGHT ? 'Dark' : 'Light'} Theme :</p>
                    <button className={combineClasses(classes.theme_switch, "pl-0 pr-0")} onClick={() => changeTheme()}>
                        <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
                    </button>
                </div>
                <hr />
                <div className='my-15'>
                    <p className='font-14 font-light font-spaceGray mb-5'>Copyright © 2022</p>
                    <Link href="/privacy-policy" passHref>
                        <a className='font-14 font-light font-spaceGray pr-10'>Privacy Policy</a>
                    </Link>
                    <Link href="/terms-and-condition" passHref>
                        <a className='font-14 font-light font-spaceGray'>Terms and Conditions</a>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default NavSidebar