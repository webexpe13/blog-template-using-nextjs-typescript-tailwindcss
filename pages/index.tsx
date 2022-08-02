import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import FeaturedArticle from '../src/components/ArticleCards/FeaturedArticle';
import { ARTICLES_LIST } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import HomeLayout from '../src/layouts/HomeLayout';
import SectionSeperator from '../src/components/SectionSeperator';
import { useEffect, useState } from 'react';
import { combineClasses, getTheme, isDarkTheme } from '../src/utils/utils';
import { THEMES } from '../src/shared/enums';

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(isDarkTheme());
  }, []);

  return (
    <HomeLayout className="md:pt-0">
      <section className={combineClasses('w-full md:py-[100px] pt-[130px] pb-20 mb-10', isDark ? 'bg-slate-800' : 'bg-slate-200')}>
        <div className="container">
          <h1 className='text-3xl text-center font-bold'>
            Simple blog template using Next Js, Typescript and Taildwind CSS
          </h1>
        </div>
      </section>
      <div className="container mx-auto">
        <div className={'flex flex-wrap'}>
          {
            ARTICLES_LIST.map((each, i) => (
              each.featureArticle ?
                <FeaturedArticle article={each.preview} path={each.path} key={each.path + i} /> : null
            ))
          }
          <SectionSeperator />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
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