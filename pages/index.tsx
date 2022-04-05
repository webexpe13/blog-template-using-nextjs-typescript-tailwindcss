import type { NextPage } from 'next'
import HomeLayout from '../layouts/HomeLayout';
import classes from './index.module.scss';

import articles from '../constants/articles';
import ArticleCard from '../components/ArticleCards/ArticleCard';
import FeaturedArticle from '../components/ArticleCards/FeaturedArticle';
import dynamic from 'next/dynamic';
import SimpleBurgerMenuUsingCSS from './blog/simple-burger-menu-using-css';

const ARTICLES: string[] = [
  'simple-burger-menu-using-css',
  'understand-and-implement-redux-store'
]

const Home: NextPage = () => {

  const createArticlesArray = (ARTICLES: string[]) => {
    let res: any = []
    ARTICLES.forEach((article: any) => {
      res.push(dynamic(() => import(`./blog/${article}`), {
        ssr: false
      }))
    });
    return res
  }

  console.log(createArticlesArray(ARTICLES));

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
