import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import { BlogLayouts } from '../../shared/enums';
import { iSEO } from '../../shared/interfaces';
import { CREATE_SEO_CONFIG, getArticleDetails } from '../../utils/utils';
import Centered from './Centered';
import WithSidebar from './WithSidebar';

interface IBlogLayout {
    layout: BlogLayouts,
    children: any
    PAGE_SEO?: iSEO
}

const BlogLayout = ({ layout = BlogLayouts.WITH_SIDEBAR, children, PAGE_SEO }: IBlogLayout) => {
    const ARTICLE_DETAILS = getArticleDetails();
    let SEO_CONFIG = ARTICLE_DETAILS ? CREATE_SEO_CONFIG({...DEFAULT_SEO, ...ARTICLE_DETAILS.seo, ...PAGE_SEO}) : CREATE_SEO_CONFIG({...DEFAULT_SEO, ...PAGE_SEO});

    return (
        <>
            <DefaultSeo {...SEO_CONFIG} />
            {(() => {
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
            })()}
        </>
    )
}
export default BlogLayout;