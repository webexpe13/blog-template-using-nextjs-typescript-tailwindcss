import Link from "next/link";
import { useEffect, useState } from "react";
import { IArticleHeaderData } from "../../shared/interfaces";
import { combineClasses, getTheme, setPath } from "../../utils/utils";
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
    <div className={classes.article_card_wrap}>
      <div className={combineClasses(classes.article_card, theme === 'dark' ? classes.dark : null)}>
        <div className={classes.article_card__image}>
          <img src={article.thumbnail} alt="" width="100%" />
        </div>

        <div className={classes.article_card__content}>
          <p className={combineClasses(classes.article_card__date, "font-regular font-12 mt-10 mb-5")}>{article.date}</p>
          <Link href={path}>
            <h1 className={combineClasses(classes.article_card__title, "font-22 font-bold my-0")} >
              {article.articleTitle}
            </h1>
          </Link>
          <p className={combineClasses(classes.article_card__intro, "font-14 font-regular mt-5 mb-5")}>
            {article.shortIntro.slice(0, 100)} ...
          </p>

          <div className={classes.article_card__tags}>
            {
              article.tags.split(',').map((each, i) => (
                <span key={i} className="font-12 font-regular mr-10" >#{each}</span>
              ))
            }
          </div>

          <div className={combineClasses(classes.article_card_footer, "mb-10")}>
            <div className={classes.author}>
              <div className={classes.author_img}></div>
              <p className={combineClasses(classes.author_name, 'font-12 font-medium')}>
                {article.author.name}
              </p>
            </div>
            {
              article.category && <>
                <p className="font-12 px-5">in</p>
                <p className={combineClasses(classes.article_card__category, "font-medium font-12")}>
                  <Link href={"/blog/" + article.category}>
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
