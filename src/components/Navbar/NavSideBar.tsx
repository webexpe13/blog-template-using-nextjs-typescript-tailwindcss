import { useEffect } from 'react';
import { THEMES } from '../../shared/enums';
import { addBodyNoScroll, combineClasses, removeBodyNoScroll } from '../../utils/utils';
import classes from './Navbar.module.scss';

interface IProps {
    openSidebar: boolean;
    theme: THEMES;
    closeNavSidebar: () => void
}

const NavSidebar = ({ openSidebar = false, theme = THEMES.LIGHT, closeNavSidebar }: IProps) => {

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


    return (
        <>
            {openSidebar ? (
                <div className="backdrop" onClick={closeNavSidebar}></div>
            ) : null}

            <aside className={combineClasses(classes.nav_sidebar_wrapper, classes.shadow, openSidebar && classes.open, theme === THEMES.DARK && classes.dark)}>
                <div className={combineClasses('d-flex align-center justify-space-between', classes.navSidebarHeader)} onClick={closeNavSidebar}>
                    <p className='mt-0 mb-0'>menu</p>
                    <div className={classes.sideNavCloseIcon}><span></span></div>
                </div>
            </aside>
        </>
    )
}

export default NavSidebar