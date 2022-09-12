import ArticleCard from "../../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { useRouter } from "next/router";
import { PageLayout } from "../../src/components";
import { combineClasses } from "../../src/utils/utils";

const Categories = () => {
    const router = useRouter()
    const { category, author } = router.query;
    const categoryArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.category === category);
    const authorArticles = SORTED_ARTICLES_BY_DATE.filter((each) => each.preview.author.name === author);
    const articles = category ?
        categoryArticles :
        author ? authorArticles :
            SORTED_ARTICLES_BY_DATE;

    return (
        <PageLayout home>
            <div className={combineClasses("container mt-10 md:pt-0 px-0 md:px-3", category ? 'pt-10' : 'pt-14')}>
                {
                    category || author ?
                        <h1 className='px-2 mb-[30px] text-[45px] font-bold' style={{ textTransform: 'capitalize' }}>
                            {category || author}
                            <hr className='mt-[10px]' />
                        </h1> : null
                }

                <div className='flex flex-wrap'>
                    {
                        articles.map((each, i) => (
                            <ArticleCard article={each.preview} path={each.path} key={i} />
                        ))
                    }
                </div>
            </div>
        </PageLayout>
    )
}

export default Categories