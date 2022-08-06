import { DefaultSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import Navbar from '../../components/Navbar';
import { iSEO } from '../../shared/interfaces';
import { combineClasses, CREATE_SEO_CONFIG, getArticleDetails, isDarkTheme } from '../../utils/utils';

const HomeLayout = ({ children, className, PAGE_SEO }: {children: any, className: any, PAGE_SEO?: iSEO}) => {    
    const [isDark, setTheme] = useState(false);
    useEffect(() => {
        setTheme(isDarkTheme());
    }, [isDark]);

    const ARTICLE_DETAILS = getArticleDetails();
    let SEO_CONFIG = ARTICLE_DETAILS ? CREATE_SEO_CONFIG({...DEFAULT_SEO, ...ARTICLE_DETAILS.seo, ...PAGE_SEO}) : CREATE_SEO_CONFIG({...DEFAULT_SEO, ...PAGE_SEO});
    
    return (
        <>
            <DefaultSeo {...SEO_CONFIG} />
            <div
                className={combineClasses( isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black", 'pb-[20px] min-h-screen transition-all', className)}>
                <Navbar />
                <div className={combineClasses(className)}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default HomeLayout