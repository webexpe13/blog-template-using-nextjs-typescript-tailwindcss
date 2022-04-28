import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { ContainerWidths, THEMES } from '../../shared/enums';
import { combineClasses, getTheme } from '../../utils/utils';
import { useEffect, useState } from 'react';

const WithSidebar = ({ children }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        <section className={combineClasses(classes.withSidebar_article_wrapper, theme === THEMES.DARK ? classes.dark : null)}>
            <Navbar container={ContainerWidths.LARGE} />
            <div className="container-large px-15 px-sm-0">
                <article className={combineClasses(classes.article_content, 'pt-100 px-15')}>
                    {children}
                </article>
                <div>
                    sidebar
                </div>
            </div>
        </section>
    )
}

export default WithSidebar;