import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils";
import LinkTo from "../LinkTo";
import ArticleCardCategory from "../Misc/ArticleCardCategory";
import ArticleTags from "../Misc/ArticleTags";
import Avatar from "../Misc/Avatar";
import classes from './ArticleCard.module.scss';

const SerachArticleCard = ({ article, path }: { article: IArticleHeaderData, path: string }) => (
  <div className="w-full lg:w-1/3 md:w-1/2 px-3 mb-10">
    <LinkTo href={path} passHref={true}>
      <div className={combineClasses(classes.article_card, "px-[15px] py-[10px] border-b-[5px] border-blue-600 dark:bg-slate-800 dark:text-white bg-white text-black drop-shadow-lg")}>
        <p className={combineClasses(classes.article_card__date, "font-medium text-xs mt-3 mb-2")}>{article.date}</p>
        <LinkTo href={path} passHref={true}>
          <h1 className={combineClasses(classes.article_card__title, "text-[22px] font-bold my-0")} >
            {article.articleTitle}
          </h1>
        </LinkTo>
        <ArticleTags tags={article.tags} />
        <div className={"flex items-center mt-3"}>
          <div className="flex items-center">
            <Avatar author={article.author} className="w-[40px] h-[40px] mr-3 text-xl" />
            <LinkTo
              href={"/blog?author=" + article.author.name}
              passHref
              className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </LinkTo>
            {/* <p className={combineClasses(classes.author_name, 'text-sm font-medium')}>
              {article.author.name}
            </p> */}
          </div>
          <ArticleCardCategory category={article.category} />
        </div>
      </div>
    </LinkTo>
  </div>
)
export default SerachArticleCard