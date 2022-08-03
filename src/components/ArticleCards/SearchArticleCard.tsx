import Link from "next/link";
import { generateRandomAvtar } from "../../constants/appConstants";
import { THEMES } from "../../shared/enums";
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses, transformPath } from "../../utils/utils";
import classes from './ArticleCard.module.scss';

const SerachArticleCard = ({ article, theme = THEMES.LIGHT, path }: { article: IArticleHeaderData, theme: THEMES, path: string }) => (
  <div className="w-full md:w-1/3 px-3 mb-10">
    <div className={combineClasses(classes.article_card, "px-[15px] py-[10px]", theme === THEMES.DARK ? classes.dark : null, 'border-b-[5px] border-sky-400')}>
      <p className={combineClasses(classes.article_card__date, "font-medium text-xs mt-3 mb-2")}>{article.date}</p>
      <Link href={transformPath(path)} passHref={true}>
        <a>
          <h1 className={combineClasses(classes.article_card__title, "text-[22px] font-bold my-0")} >
            {article.articleTitle}
          </h1>
        </a>
      </Link>
      <div className={classes.article_card__tags}>
        {
          article.tags.split(',').map((each, i) => (
            <span key={i} className="text-xs font-normal mr-3" >#{each}</span>
          ))
        }
      </div>
      <div className={"flex items-center my-3"}>
        <div className={classes.author}>
          <div className={classes.author_img}>
            {article.author.profilePic ? <img src={article.author.profilePic} alt={article.author.name} /> : <img src={generateRandomAvtar()} alt={article.author.name} />}
          </div>
          <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
            {article.author.name}
          </p>
        </div>
        {
          article.category && <>
            <p className="text-sm px-[5px] font-normal">in</p>
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
)
export default SerachArticleCard