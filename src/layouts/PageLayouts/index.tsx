import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import { iSEO } from '../../shared/interfaces';
import { CREATE_SEO_CONFIG, getArticleDetails } from '../../utils/utils';
import Centered from './BlogCentered';
import WithSidebar from './BlogWithSidebar';
import HomeLayout from './HomeLayout';

interface IBlogLayout {
    children: any
    PAGE_SEO?: iSEO,
    blogwithsidebar?: boolean;
    blogcentered?: boolean;
    home?: boolean;
}

const PageLayout = ({ children, PAGE_SEO, blogwithsidebar = false, blogcentered = false, home = false }: IBlogLayout) => {
    const ARTICLE_DETAILS = getArticleDetails();
    let SEO_CONFIG = ARTICLE_DETAILS ? CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...ARTICLE_DETAILS.seo, ...PAGE_SEO }) : CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...PAGE_SEO });

    return (
        <>
            <DefaultSeo {...SEO_CONFIG} />
            {
                blogwithsidebar ? <WithSidebar children={children} /> :
                    blogcentered ? <Centered children={children} /> :
                        home ? <HomeLayout children={children} /> :
                            <WithSidebar children={children} />
            }
        </>
    )
}
export default PageLayout;