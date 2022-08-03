import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { NavbarType, THEMES } from '../../shared/enums';
import { combineClasses, getTheme } from '../../utils/utils';
import { useEffect, useState } from 'react';
import { PRIMARY_NAV } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';

const Centered = ({ children }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);
    return (
        <section 
            className={combineClasses(classes.centered_article_wrapper, theme === THEMES.DARK ? classes.dark : null)}>
            <Navbar />
            <div className="container pt-[50px] pb-[50px]">
                <article className={combineClasses(classes.article_content, 'pb-[30px] px-3')}>
                    {children}
                </article>
            </div>
        </section>
    )
}

export default Centered