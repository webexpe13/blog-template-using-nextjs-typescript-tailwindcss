import classes from './PageLayout.module.scss';
import { combineClasses, getArticleDetails, transformImagePaths, transformPath } from '../../utils/utils';
import { SORTED_ARTICLES_BY_DATE } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import Link from 'next/link';
import { generateRandomAvtar } from '../../constants/appConstants';
import ArticleHeader from '../../components/ArticleHeader';

const WithSidebar = ({ children, ads }: any) => {
    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;

    const relatedArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.author === author);


    return (
        <>
            <section className={combineClasses(classes.withSidebar_article_wrapper, 'dark:bg-slate-900 dark:text-white')}>
                <div className="container px-0 md:px-[15px] md:flex pb-[50px] pt-[50px]">
                    <article className={combineClasses(classes.article_content, 'pb-[20px] px-3 text-black bg-white dark:bg-slate-800 dark:border-none dark:drop-shadow-lg dark:text-white pt-10 md:pt-0 font-regular text-lg leading-relaxed')}>
                        <ArticleHeader ARTICLE_DETAILS={ARTICLE_DETAILS} />
                        {children}
                    </article>
                    <div className={classes.article_sidebar_wrapper}>
                        <div className={combineClasses(classes.sidebar_author_details, 'dark:bg-slate-800 dark:border-none dark:drop-shadow-lg')}>
                            <div className={classes.author}>
                                <div className={classes.author_img}>
                                    {author.profilePic ? <img src={author.profilePic} alt={author.name} /> : <img src={generateRandomAvtar()} alt={author.name} />}
                                </div>
                                <div>
                                    <p className={'text-[20px] font-semibold mb-0 mt-0'}>
                                        {author.name}
                                    </p>
                                    <p className='text-xs mt-0 mb-0'>{author.designation}</p>
                                </div>
                            </div>
                            <p className='text-[16px] font-light mt-2'>{author.bio}</p>
                            {
                                author.social?.length &&
                                <div className='flex items-center flex-wrap'>
                                    {
                                        author.social.map((each, i) =>
                                            <a href={each.link} key={i} target="_blank" className='mr-[15px] text-[32px]'
                                                rel="noopener noreferrer">{each.icon}</a>
                                        )
                                    }
                                </div>
                            }
                        </div>
                        {
                            relatedArticles.length &&
                            <div className={combineClasses(classes.more_from_author, 'dark:bg-slate-800 dark:border-none dark:drop-shadow-lg')}>
                                <p className='border-b border-gray-300 pb-2 mb-3 font-medium'>More from  Author</p>
                                {
                                    relatedArticles.map((each, i) =>
                                        <Link href={transformPath(each.path)} key={i} passHref>
                                            <div className={classes.more_from_author__articles} key={each.path}>
                                                <div className={classes.article_image} style={{ background: `url(${transformImagePaths(each.preview.thumbnail)})` }}>
                                                </div>
                                                <div className={classes.article_title}>
                                                    {each.preview.articleTitle}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }
                            </div>
                        }

                        {
                            ads && ads.length ?
                                <div className="flex flex-wrap">
                                    {
                                        ads.map((each: any, i: any) => (
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