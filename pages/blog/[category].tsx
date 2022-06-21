import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import ArticleCard from '../../src/components/ArticleCards/ArticleCard';
import Navbar from '../../src/components/Navbar';
import { NavbarType, THEMES } from '../../src/shared/enums';
import { combineClasses, getTheme } from '../../src/utils/utils';
import ARTICLES_LIST from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { PRIMARY_NAV } from '../../BLOG_CONSTANTS/_BLOG_SETUP';
import classes from '../index.module.scss';

const Category = () => {
  const router = useRouter()
  const { category } = router.query;

  const categoryArticles = ARTICLES_LIST.filter((each) => each.preview.category === category);

  const [theme, setTheme] = useState(THEMES.LIGHT);
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);


  return (
    <div className={combineClasses(classes.home_layout_wrapper, theme === THEMES.DARK ? "bg-darkBlue font-spaceGray" : "bg-offWhite font-spaceGray")} style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '100px' : '150px' }}>
      <Navbar />
      <div className={"container px-10"}>
        <div className='d-flex flex-wrap'>
          {
            categoryArticles.map((each, i) => (
              <ArticleCard article={each.preview} path={each.path} key={i} />
            ))
          }
        </div>
      </div>
    </div>)
}

export default Category