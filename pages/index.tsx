import type { NextPage } from 'next'
import HomeLayout from '../layouts/HomeLayout';
import classes from './index.module.scss';

import articles from '../constants/articles';
import ArticleCard from '../components/ArticleCards/ArticleCard';
import FeaturedArticle from '../components/ArticleCards/FeaturedArticle';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className="container">
        <FeaturedArticle article={articles[1]} />
        <div className={classes.articles_wrap}>
          {
            articles.map((each, i) => (
              <ArticleCard article={each} key={i} />
            ))
          }
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
