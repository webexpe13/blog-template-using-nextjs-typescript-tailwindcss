import ArticleCard from "../../src/components/ArticleCards/ArticleCard";
import { ARTICLES_LIST } from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import HomeLayout from "../../src/layouts/HomeLayout";

const Categories = () => {
    return (
        <HomeLayout>
            <div className={"container"}>
                <div className='d-flex flex-wrap'>
                    {
                        ARTICLES_LIST.map((each, i) => (
                            <ArticleCard article={each.preview} path={each.path} key={i} />
                        ))
                    }
                </div>
            </div>
        </HomeLayout>
    )
}

export default Categories