import { NextSeo } from 'next-seo';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import Navbar from '../../components/Navbar';
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
    ads?: string[];
}

const PageLayout = ({ children, PAGE_SEO, blogwithsidebar = false, blogcentered = false, home = false, ads = [] }: IBlogLayout) => {
    const ARTICLE_DETAILS = getArticleDetails();    
    let SEO_CONFIG = {};
    if (ARTICLE_DETAILS && ARTICLE_DETAILS.seo) {
        SEO_CONFIG = CREATE_SEO_CONFIG({ ...ARTICLE_DETAILS.seo })
    } else if (PAGE_SEO) {
        SEO_CONFIG = CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...PAGE_SEO })
    } else {
        SEO_CONFIG = CREATE_SEO_CONFIG({ ...DEFAULT_SEO })
    }

    return (
        <>
            <NextSeo {...SEO_CONFIG} />
            <Navbar />
            {
                blogwithsidebar ? <WithSidebar children={children} ads={ads} /> :
                    blogcentered ? <Centered children={children} /> :
                        home ? <HomeLayout children={children} /> :
                            <HomeLayout children={children} />
            }
        </>
    )
}
export default PageLayout;