import Link from "next/link";
import { useEffect, useState } from "react";
import { generateRandomAvtar } from "../../constants/appConstants";
import { IArticleHeaderData } from "../../shared/interfaces";
import { combineClasses, isDarkTheme, transformImagePaths, transformPath } from "../../utils/utils";
import classes from "./ArticleCard.module.scss";

interface IProp {
  article: IArticleHeaderData;
  path: string;
}

const ArticleCard = ({ article, path }: IProp) => {
  const [isDark, setTheme] = useState(false);
  useEffect(() => {
    setTheme(isDarkTheme());
  }, [isDark]);

  return (
    <div className={'w-full sm:w-1/3 px-[15px] mb-[30px] '}>
      <div className={combineClasses(classes.article_card, isDark ? classes.dark : null, 'border-b-[5px] border-blue-500')}>
        <div className={'rounded-t-[4px] overflow-hidden h-[200px]'}>
          <img src={transformImagePaths(article.thumbnail)} alt="" width="100%" />
        </div>

        <div className={'d-block px-[15px] py-0'}>
          <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>{article.date}</p>
          <Link href={transformPath(path)}>
            <a>
              <h1 className={"text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"} >
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

          <div className={combineClasses(classes.article_card_footer, "my-3 flex items-center")}>
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
                <p className={"font-medium text-sm cursor-pointer hover:text-blue-600"}>
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
