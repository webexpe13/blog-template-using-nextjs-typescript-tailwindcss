import { useRouter } from 'next/router'
import ArticleCard from '../../src/components/ArticleCards/ArticleCard';
import { ARTICLES_LIST } from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import HomeLayout from '../../src/layouts/HomeLayout';

const Category = () => {
  const router = useRouter()
  const { category } = router.query;
  const categoryArticles = ARTICLES_LIST.filter((each) => each.preview.category === category);

  return (
    <HomeLayout>
      <div className={"container"}>
        <h1 className='px-2 mb-[30px] text-[45px] font-bold' style={{ textTransform: 'capitalize' }}>
          {category}
          <hr className='mt-[10px]' />
        </h1>
        <div className='flex flex-wrap'>
          {
            categoryArticles.map((each, i) => (
              <ArticleCard article={each.preview} path={each.path} key={i} />
            ))
          }
        </div>
      </div>
    </HomeLayout>)
}

export default Category