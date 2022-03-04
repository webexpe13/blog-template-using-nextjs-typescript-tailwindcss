import { IArticleCardColor, IArticle } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";

interface IProp {
  article: IArticle;
  colors: IArticleCardColor
}

const ArticleCard = (prop: IProp) => {
  const { article, colors } = prop;

  return (
    <div className={classes.article_card_wrap}>
      <div className={classes.article_card} style={{ background: `rgba(${colors.bg}, 1)` }}>
        <div className={classes.article_card__image}>
          <img src={article.thumbnail} alt="" width="100%" />
        </div>
        <div className={classes.article_card__content} style={{ color: `rgba(${colors.font}, 1)` }}>
          <p className="font-medium font-14 mb-5" style={{ color: `rgba(${colors.font}, 0.7) !important` }}>{article.date}</p>
          <h1 className={classes.article_card__title + " font-34 font-bold my-0"} >
            {article.articleTitle}
          </h1>
          <p className={classes.article_card__intro + " font-16 font-medium mt-0 mb-5"} style={{ color: `rgba(${colors.font}, 0.9) !important` }}>
            {article.shortIntro}
          </p>

          <div className={classes.article_card__tags}>
            {
              article.tags.map((each, i) => (
                <span key={i} className="font-14 font-regular mr-10" style={{ color: `rgba(${colors.font}, 0.7) !important` }}>#{each}</span>
              ))
            }
          </div>

          <div className={classes.article_card_footer}>
            <div className={classes.author}>
              <div className={classes.author_img} style={{ background: `rgba(${colors.font}, 1)` }}></div>
              <p className={classes.author_name + ' font-14 font-medium'}>
                {article.author.name}
              </p>
            </div>
            {
              article.category && <>
                <p className="font-14 px-5" style={{ color: `rgba(${colors.font}, 0.6) !important` }}>in</p>
                <p className="font-medium font-14" style={{ color: `rgba(${colors.font}, 1) !important` }}>{article.category?.label}</p>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
