import type { NextPage } from 'next'
import HomeLayout from '../layouts/HomeLayout';
import classes from './index.module.scss';

import articles from '../constants/articles';
import ArticleCard from '../components/ArticleCard'
import { ARTICLE_CARD_COLORS } from '../constants/appConstants';

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <div className="">
        <div className={classes.articles_wrap}>
          {
            articles.map((each, i) => (
              <ArticleCard article={each} colors={ARTICLE_CARD_COLORS[Math.floor(Math.random() * ARTICLE_CARD_COLORS.length)]} key={i} />
            ))
          }
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
