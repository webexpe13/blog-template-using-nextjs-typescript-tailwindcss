import type { NextPage } from 'next'
import HomeLayout from '../src/layouts/HomeLayout';
import classes from './index.module.scss'; // --> need to know about this
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import ARTICLES_LIST from './_ARTICLES_LIST';
import { ContainerWidths } from '../src/shared/enums';

const Home: NextPage = () => {
  return (
    <HomeLayout container={ContainerWidths.DEFAULT}>
      <div className="container">
        <FeaturedArticle article={ARTICLES_LIST[0].component.preview} path={ARTICLES_LIST[0].path} /> 
        {/* main article  taking full width*/}
        {/* list of rest of the articles below it, one beside the other */}
        <div className={classes.articles_wrap}>
          {
            ARTICLES_LIST.map((each, i) => (
              <ArticleCard article={each.component.preview} path={each.path} key={i} />
            ))
          }
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home
