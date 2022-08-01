import { DefaultSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { PRIMARY_NAV } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import Navbar from '../../components/Navbar';
import { NavbarType, THEMES } from '../../shared/enums';
import { combineClasses, getArticleDetails, getTheme } from '../../utils/utils';
import classes from './HomeLayout.module.scss';

const HomeLayout = ({ children, className }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);
    const ARTICLE_DETAILS = getArticleDetails();


    return (
        <>
            <DefaultSeo {...ARTICLE_DETAILS?.seo} />
            <div
                className={combineClasses(classes.home_layout_wrapper, theme === THEMES.DARK ? "bg-slate-800 text-white" : "bg-slate-100 text-black", 'pb-[20px]', className)}>
                {/* style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '100px' : '150px' }} */}
                <Navbar />
                <div className={combineClasses('md:pt-[30px] pt-20', className)}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default HomeLayout