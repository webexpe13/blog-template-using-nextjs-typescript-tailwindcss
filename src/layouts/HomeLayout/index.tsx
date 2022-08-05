import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { DEFAULT_SEO } from '../../../BLOG_CONSTANTS/_BLOG_SETUP';
import Navbar from '../../components/Navbar';
import { THEMES } from '../../shared/enums';
import { combineClasses, CREATE_SEO_CONFIG, getArticleDetails, getTheme } from '../../utils/utils';

const HomeLayout = ({ children, className }: any) => {    
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);
    const ARTICLE_DETAILS = getArticleDetails();

    let SEO = ARTICLE_DETAILS ? ARTICLE_DETAILS.seo : DEFAULT_SEO;

    return (
        <>
            <DefaultSeo {...SEO} />
            <div
                className={combineClasses( theme === THEMES.DARK ? "bg-slate-900 text-white" : "bg-slate-100 text-black", 'pb-[20px] min-h-screen transition-all', className)}>
                {/* style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '100px' : '150px' }} */}
                <Navbar />
                <div className={combineClasses(className)}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default HomeLayout