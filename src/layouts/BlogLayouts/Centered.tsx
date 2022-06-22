import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { ContainerWidths, NavbarType, THEMES } from '../../shared/enums';
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
            className={combineClasses(classes.centered_article_wrapper, theme === THEMES.DARK ? classes.dark : null)}
            style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '0px' : '50px' }}
            >
            <Navbar container={ContainerWidths.DEFAULT} />
            <div className="container-large px-15 px-sm-0 pt-100 pb-50">
                <article className={combineClasses(classes.article_content, 'pb-20 px-15')}>
                    {children}
                </article>
            </div>
        </section>
    )
}

export default Centered