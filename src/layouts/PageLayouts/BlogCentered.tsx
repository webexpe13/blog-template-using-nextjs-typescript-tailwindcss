import classes from './PageLayout.module.scss';
import { combineClasses, getArticleDetails, transformImagePaths, transformPath } from '../../utils/utils';
import { SORTED_ARTICLES_BY_DATE } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import Link from 'next/link';
import Seperator from '../../components/Seperator';
import ArticleHeader from '../../components/ArticleHeader';
import Avatar from '../../components/Misc/Avatar';
import ArticleMoreFromAuthor from '../../components/Misc/ArticleMoreFromAuthor';

const Centered = ({ children }: any) => {
    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;
    const relatedArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.author === author);

    return (
        <section className={combineClasses(classes.centered_article_wrapper, 'dark:bg-slate-900 dark:text-white')}>
            <div className="container px-0 md:px-[15px] pt-[50px] pb-[50px]">
                <article className={combineClasses(classes.article_content, 'pb-[30px] px-3 bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 mx-auto font-regular text-lg leading-relaxed')}>
                    <ArticleHeader ARTICLE_DETAILS={ARTICLE_DETAILS} centered />
                    {children}
                </article>
                <Seperator />
                <div className={combineClasses(classes.author_and_more, 'mx-auto')}>
                    <ArticleMoreFromAuthor author={author} relatedArticles={relatedArticles} articleGrid />
                </div>

            </div>
        </section>
    )
}

export default Centered