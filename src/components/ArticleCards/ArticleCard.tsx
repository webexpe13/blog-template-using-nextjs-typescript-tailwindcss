import LinkTo from "../LinkTo";
import { generateRandomAvtar } from "../../constants/appConstants";
import { IArticleHeaderData } from "../../shared/interfaces";
import { combineClasses, transformImagePaths, transformPath } from "../../utils/utils";
import classes from "./ArticleCard.module.scss";

interface IProp {
  article: IArticleHeaderData;
  path: string;
}

const ArticleCard = ({ article, path }: IProp) => {
  return (
    <div className={'w-full sm:w-1/3 px-[15px] mb-[30px]'}>
      <LinkTo href={transformPath(path)} passHref>
        <div className={combineClasses(classes.article_card, 'border-b-[5px] border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg flex flex-col justify-between')}>
          <div>
            <div className={'rounded-t-[4px] overflow-hidden h-[200px]'}>
              <img src={transformImagePaths(article.thumbnail)} alt="" width="100%" />
            </div>

            <div className={'d-block px-[15px] py-0'}>
              <p className={"font-normal text-xs pt-3 mb-0 md:mb-3"}>{article.date}</p>
              <LinkTo href={transformPath(path)} passHref>
                <h1 className={"text-[22px] font-bold cursor-pointer tracking-wide hover:text-blue-600"} >
                  {article.articleTitle}
                </h1>
              </LinkTo>
              <p className={combineClasses(classes.article_card__intro, "text-sm font-normal mt-2 md:mt-1")}>
                {article.shortIntro.slice(0, 100)} ...
              </p>

              <div className={combineClasses(classes.article_card__tags, 'md:mt-1')}>
                {
                  article.tags.split(',').map((each, i) => (
                    <span key={i} className="text-xs font-normal mr-3" >#{each}</span>
                  ))
                }
              </div>
            </div>
          </div>
          <div className={combineClasses(classes.article_card_footer, "mt-4 mb-3 flex items-center px-3")}>
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
                <p className="text-sm px-2 font-regumal">in</p>
                <p className={"font-medium text-sm cursor-pointer hover:text-blue-600"}>
                  <LinkTo href={"/blog?category=" + article.category} passHref={true}>
                    {article.category}
                  </LinkTo>
                </p>
              </>
            }
          </div>
        </div>
      </LinkTo>
    </div>
  );
};

export default ArticleCard;
