import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { ContainerWidths, THEMES } from '../../shared/enums';
import { combineClasses, getArticleDetails, getTheme } from '../../utils/utils';
import { useEffect, useState } from 'react';
import ARTICLES from '../../../pages/_ARTICLES_LIST';
import Link from 'next/link';

const WithSidebar = ({ children }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;

    const relatedArticles = ARTICLES.filter((each) => each.preview.author === author);


    return (
        <>
            <Navbar container={ContainerWidths.LARGE} />
            <section className={combineClasses(classes.withSidebar_article_wrapper, theme === THEMES.DARK ? classes.dark : null)}>
                <div className="container-large px-15 px-sm-0 d-lg-flex pb-50 pt-100">
                    <article className={combineClasses(classes.article_content, 'pb-20 px-15')}>
                        {children}
                    </article>
                    <div className={classes.article_sidebar_wrapper}>
                        <div className={classes.sidebar_author_details}>
                            <div className={classes.author}>
                                <div className={classes.author_img}></div>
                                <div>
                                    <p className={'font-20 font-semi mb-0 mt-0'}>
                                        {author.name}
                                    </p>
                                    <p className='font-12 mt-0 mb-0'>{author.designation}</p>
                                </div>
                            </div>
                            <p className='font-16 font-light'>{author.bio}</p>
                        </div>
                        <div className={classes.more_from_author}>
                            <p>More from  Author</p>

                            {
                                relatedArticles.map((each, i) =>
                                    <Link href={each.path}>
                                        <div className={classes.more_from_author__articles} key={i}>
                                            <div className={classes.article_image} style={{ background: `url(${each.preview.thumbnail})` }}>
                                            </div>
                                            <div className={classes.article_title}>
                                                {each.preview.articleTitle}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WithSidebar;