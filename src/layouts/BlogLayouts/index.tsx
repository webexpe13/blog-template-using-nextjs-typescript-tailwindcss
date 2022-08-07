import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import { iSEO } from '../../shared/interfaces';
import { CREATE_SEO_CONFIG, getArticleDetails } from '../../utils/utils';
import Centered from './Centered';
import WithSidebar from './WithSidebar';

interface IBlogLayout {
    children: any
    PAGE_SEO?: iSEO,
    withsidebar?: boolean;
    centered?: boolean;
}

const BlogLayout = ({ children, PAGE_SEO, withsidebar = false, centered = false }: IBlogLayout) => {
    const ARTICLE_DETAILS = getArticleDetails();
    let SEO_CONFIG = ARTICLE_DETAILS ? CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...ARTICLE_DETAILS.seo, ...PAGE_SEO }) : CREATE_SEO_CONFIG({ ...DEFAULT_SEO, ...PAGE_SEO });

    return (
        <>
            <DefaultSeo {...SEO_CONFIG} />
            {
                withsidebar ? <WithSidebar children={children} /> :
                    centered ? <Centered children={children} /> :
                        <WithSidebar children={children} />
            }
            {/* {(() => {
                switch (layout) {
                    case BlogLayouts.WITH_SIDEBAR:
                        return (
                            <WithSidebar children={children} />
                        );
                    case BlogLayouts.CENTERED:
                        return (
                            <Centered children={children} />
                        );
                    default:
                        return (
                            <WithSidebar children={children} />
                        );
                }
            })()} */}
        </>
    )
}
export default BlogLayout;