import ArticleCard from "../../src/components/ArticleCards/ArticleCard";
import { ARTICLES_LIST } from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import HomeLayout from "../../src/layouts/HomeLayout";
import { useRouter } from "next/router";

const Categories = () => {
    const router = useRouter()
    const { category } = router.query;
    const categoryArticles = ARTICLES_LIST.filter((each) => each.preview.category === category);
    const articles = category ? categoryArticles : ARTICLES_LIST;    

    return (
        <HomeLayout>
            <div className={"container mt-10 pt-5 md:pt-0"}>
                {
                    category ?
                        <h1 className='px-2 mb-[30px] text-[45px] font-bold mt-8' style={{ textTransform: 'capitalize' }}>
                            {category}
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
        </HomeLayout>
    )
}

export default Categories