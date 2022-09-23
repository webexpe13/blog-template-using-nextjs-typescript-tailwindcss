import { SORTED_ARTICLES_BY_DATE } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST"
import { iArticle } from "../../shared/interfaces"
import ArticleCard from '../ArticleCards/ArticleCard';
import LinkTo from "../LinkTo";

const HomeNonFeatureArticles = () => {
    const restArticles = SORTED_ARTICLES_BY_DATE.filter((article: iArticle) => !article.featureArticle);
    const articlesToDisplay = 9;
    return (
        <>
            {
                restArticles.length ?
                    restArticles.slice(0, articlesToDisplay).map((each, i) => (
                        <ArticleCard article={each.preview} path={each.path} key={each.path + i} />
                    )) : null
            }

            {
                restArticles.length > articlesToDisplay ?
                    (
                        <div className="w-full flex items-center">
                            <LinkTo
                                href="/pages/blog"
                                className="
                                    w-auto h-auto text-sm py-3 px-10 
                                    text-center dark:bg-slate-800 
                                    bg-blue-500 rounded-full mx-auto text-white font-bold 
                                    hover:!text-blue-900 dark:hover:!text-slate-400 transition-all">
                                View All Articles
                            </LinkTo>
                        </div>
                    ) : null
            }

        </>
    )
}

export default HomeNonFeatureArticles