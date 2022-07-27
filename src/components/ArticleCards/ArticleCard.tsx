import Link from "next/link";
import { useEffect, useState } from "react";
import { generateRandomAvtar } from "../../constants/appConstants";
import { IArticleHeaderData } from "../../shared/interfaces";
import { combineClasses, getTheme, setPath, transformImagePaths, transformPath } from "../../utils/utils";
import classes from "./ArticleCard.module.scss";

interface IProp {
  article: IArticleHeaderData;
  path: string;
}

const ArticleCard = ({ article, path }: IProp) => {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  return (
    <div className={'w-full sm:w-1/3 px-[15px] mb-[30px]'}>
      <div className={combineClasses(classes.article_card, theme === 'dark' ? classes.dark : null)}>
        <div className={classes.article_card__image}>
          <img src={transformImagePaths(article.thumbnail)} alt="" width="100%" />
        </div>

        <div className={classes.article_card__content}>
          <p className={combineClasses(classes.article_card__date, "font-normal text-xs pt-3 mb-0 md:mb-3")}>{article.date}</p>
          <Link href={transformPath(path)}>
            <a>
              <h1 className={combineClasses(classes.article_card__title, "text-[22px] font-bold")} >
                {article.articleTitle}
              </h1>
            </a>
          </Link>
          <p className={combineClasses(classes.article_card__intro, "text-sm font-normal mt-2 md:mt-3 mb-5")}>
            {article.shortIntro.slice(0, 100)} ...
          </p>

          <div className={classes.article_card__tags}>
            {
              article.tags.split(',').map((each, i) => (
                <span key={i} className="text-xs font-normal mr-3" >#{each}</span>
              ))
            }
          </div>

          <div className={combineClasses(classes.article_card_footer, "my-3")}>
            <div className={classes.author}>
              <div className={classes.author_img}>
                {article.author.profilePic ? <img src={article.author.profilePic} alt={article.author.name} /> : <img src={generateRandomAvtar()} alt={article.author.name} /> }
              </div>
              <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
                {article.author.name}
              </p>
            </div>
            {
              article.category && <>
                <p className="text-sm px-2 font-regumal">in</p>
                <p className={combineClasses(classes.article_card__category, "font-medium text-sm")}>
                  <Link href={"/blog?category=" + article.category} passHref={true}>
                    {article.category}
                  </Link>
                </p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
