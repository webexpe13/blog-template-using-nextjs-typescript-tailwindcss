import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { ContainerWidths, THEMES } from '../../shared/enums';
import { combineClasses, getArticleDetails, getTheme } from '../../utils/utils';
import { useEffect, useState } from 'react';
import ARTICLES from '../../../pages/_ARTICLES_LIST';

const WithSidebar = ({ children }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;

    const relatedArticles = ARTICLES.filter((each) => each.preview.author === author);


    return (
        <section className={combineClasses(classes.withSidebar_article_wrapper, theme === THEMES.DARK ? classes.dark : null)}>
            <Navbar container={ContainerWidths.LARGE} />
            <div className="container-large px-15 px-sm-0 d-lg-flex pb-50 pt-100">
                <article className={combineClasses(classes.article_content, 'pb-20 px-15')}>
                    {children}
                </article>
                <div className={classes.article_sidebar_wrapper}>
                    <div className={classes.more_from_author}>
                        <p>More from  Author</p>

                        {
                            relatedArticles.map((each, i) =>
                                <div className={classes.more_from_author__articles} key={i}>
                                    <div className={classes.article_image} style={{background: `url(${each.preview.thumbnail})`}}>
                                    </div>
                                    <div className={classes.article_title}>
                                        {each.preview.articleTitle}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WithSidebar;