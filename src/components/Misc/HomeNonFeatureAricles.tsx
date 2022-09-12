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
                        <>
                            <LinkTo
                                href="/pages/blog"
                                className="w-auto text-sm py-3 px-10 text-center dark:bg-slate-800 bg-blue-500 rounded-full mx-auto text-white font-bold">
                                View All Articles
                            </LinkTo>
                        </>
                    ) : null
            }

        </>
    )
}

export default HomeNonFeatureArticles