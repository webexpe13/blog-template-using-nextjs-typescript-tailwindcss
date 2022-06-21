import Link from 'next/link';
import { useEffect } from 'react';
import { THEME_ICONS } from '../../constants/appConstants';
import { THEMES } from '../../shared/enums';
import { addBodyNoScroll, combineClasses, removeBodyNoScroll } from '../../utils/utils';
import classes from './Navbar.module.scss';

interface IProps {
    openSidebar: boolean;
    theme: THEMES;
    closeNavSidebar: () => void;
    navSetup: any;
    changeTheme:  () => void;
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

    // const CATEGORIES = getCategories();


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
                        navSetup.navLinks.map((each: any, i: any) => (
                            each.type !== 'dropdown' ? (
                                <Link href={each.path} key={i}>
                                    <a className='font-16 font-medium d-block my-15'>{each.label}</a>
                                </Link>
                            ) : <p className='font-16 font-medium' key={i}>
                                {each.label}
                            </p>
                        ))
                    }
                    {
                        env === 'development' ? <Link href='/icons'>
                            <a className='font-16 font-medium d-block my-15'>Icons</a>
                        </Link> : null
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
                    <Link href="">
                        <a className='font-14 font-light font-spaceGray pr-10'>Privacy Policy</a>
                    </Link>
                    <Link href="">
                        <a className='font-14 font-light font-spaceGray'>Terms and Conditions</a>
                    </Link>
                </div>
            </aside>
        </>
    )
}

export default NavSidebar