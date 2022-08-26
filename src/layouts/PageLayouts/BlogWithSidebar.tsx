import classes from './PageLayout.module.scss';
import { combineClasses, getArticleDetails, transformImagePaths, transformPath } from '../../utils/utils';
import { SORTED_ARTICLES_BY_DATE } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import ArticleHeader from '../../components/ArticleHeader';
import ArticleMoreFromAuthor from '../../components/Misc/ArticleMoreFromAuthor';

const WithSidebar = ({ children, ads }: {children: any, ads?: string[]}) => {
    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;
    const relatedArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.author === author);

    return (
        <>
            <section className={combineClasses(classes.withSidebar_article_wrapper, 'dark:bg-slate-900 dark:text-white')}>
                <div className="container px-0 md:px-[15px] lg:flex pb-[50px] pt-[50px]">
                    <article 
                        className={combineClasses(classes.article_content, 'pb-[20px] px-3 text-black bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 font-regular text-lg leading-relaxed')}>
                        <ArticleHeader ARTICLE_DETAILS={ARTICLE_DETAILS} />
                        {children}
                    </article>
                    <div className={classes.article_sidebar_wrapper}>
                        <ArticleMoreFromAuthor author={author} relatedArticles={relatedArticles} />
                        {
                            ads && ads.length ?
                                <div className="flex flex-wrap">
                                    {
                                        ads.map((each: string, i: any) => (
                                            <div dangerouslySetInnerHTML={{
                                                __html: `${each}`
                                            }} key={i} />
                                        ))
                                    }
                                </div>
                                : null
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default WithSidebar;