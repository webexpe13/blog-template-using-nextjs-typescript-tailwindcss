import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import { ARTICLES_LIST } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import HomeLayout from '../src/layouts/HomeLayout';

const Home = () => {

  return (
    <HomeLayout>
      <div className="container mx-auto">
        {/* list of rest of the articles below it, one beside the other */}
        <div className={'flex flex-wrap'}>
          {
            ARTICLES_LIST.map((each, i) => (
              each.featureArticle ?
                <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} /> : null
            ))
          }
          <h1 className='px-3 w-full mb-5 text-xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          {
            ARTICLES_LIST.map((each, i) => (
              !each.featureArticle ?
                <ArticleCard article={each.preview} path={each.path} key={i} />
                : null
            ))
          }
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
{/* <ArticleCard article={each.preview} path={each.path} key={i} /> */ }