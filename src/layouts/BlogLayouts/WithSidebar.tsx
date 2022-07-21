import classes from './BlogLayout.module.scss';
import Navbar from '../../components/Navbar';
import { NavbarType, THEMES } from '../../shared/enums';
import { combineClasses, getArticleDetails, getTheme, transformImagePaths, transformPath } from '../../utils/utils';
import { useEffect, useState } from 'react';
import { ARTICLES_LIST } from '../../../BLOG_CONSTANTS/_ARTICLES_LIST';
import Link from 'next/link';
import { PRIMARY_NAV } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import { generateRandomAvtar } from '../../constants/appConstants';

const WithSidebar = ({ children }: any) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    const ARTICLE_DETAILS = getArticleDetails();
    const author = ARTICLE_DETAILS.preview.author;

    const relatedArticles = ARTICLES_LIST.filter((each) => each.preview.author === author);


    return (
        <>
            <Navbar />
            <section
                className={combineClasses(classes.withSidebar_article_wrapper, theme === THEMES.DARK ? classes.dark : null)}
                style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '0px' : '50px' }}>
                <div className="container px-0 md:px-3 md:flex pb-[50px] pt-[100px]">
                    <article className={combineClasses(classes.article_content, 'pb-[20px] px-3')}>
                        {children}
                    </article>
                    <div className={classes.article_sidebar_wrapper}>
                        <div className={classes.sidebar_author_details}>
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
                            <div className={classes.more_from_author}>
                                <p className='border-b border-gray-300 pb-2 mb-2 font-medium'>More from  Author</p>
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

                        <div className="flex flex-wrap">

                            <div dangerouslySetInnerHTML={{
                                __html: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestore-21&language=en_IN&marketplace=amazon&region=IN&placement=B09N3ZNHTY&asins=B09N3ZNHTY&linkId=c7ed1872e77f058de27c9274a3c008af&show_border=false&link_opens_in_new_window=true"></iframe>`
                            }} />

                            <div dangerouslySetInnerHTML={{
                                __html: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestore-21&language=en_IN&marketplace=amazon&region=IN&placement=B08FN4Q6VZ&asins=B08FN4Q6VZ&linkId=10cf0c67665473cd37743f129cf50ad9&show_border=true&link_opens_in_new_window=true"></iframe>`
                            }} />

                            {/* <div
                                dangerouslySetInnerHTML={{
                                    __html: `
                                <script type="text/javascript" language="javascript">
                                    var aax_size='300x250';
                                    var aax_pubname = 'webexpestore-21';
                                    var aax_src='302';
                                    </script>
                                    <script type="text/javascript" language="javascript" src="http://c.amazon-adsystem.com/aax2/assoc.js"></script>
                            `,
                                }}
                            /> */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WithSidebar;