import { DefaultSeo, NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import { BlogLayouts } from '../../shared/enums';
import { getArticleDetails } from '../../utils/utils';
import Centered from './Centered';
import WithSidebar from './WithSidebar';

interface IBlogLayout {
    layout: BlogLayouts,
    children: any
}

const BlogLayout = ({ layout = BlogLayouts.WITH_SIDEBAR, children }: IBlogLayout) => {
    const ARTICLE_DETAILS = getArticleDetails();   
    
    return (
        <>
            <DefaultSeo {...ARTICLE_DETAILS.seo} />
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