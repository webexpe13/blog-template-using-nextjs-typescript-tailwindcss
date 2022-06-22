import { useState, useEffect } from 'react';
import { PRIMARY_NAV } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import Navbar from '../../components/Navbar';
import { NavbarType, THEMES } from '../../shared/enums';
import { combineClasses, getTheme } from '../../utils/utils';
import classes from './HomeLayout.module.scss';

const HomeLayout = ({ children }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        <div className={combineClasses(classes.home_layout_wrapper, theme === THEMES.DARK ? "bg-darkBlue font-white" : "bg-offWhite font-black", 'pb-20')} style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '100px' : '150px' }}>
            <Navbar />
            {children}
        </div>
    )
}

export default HomeLayout