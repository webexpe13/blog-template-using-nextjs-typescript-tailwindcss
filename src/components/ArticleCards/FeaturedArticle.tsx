import { useEffect, useState } from "react";
import { IArticleHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import { combineClasses, getTheme } from "../../utils/utils";
import Link from "next/link";
import { generateRandomAvtar } from "../../constants/appConstants";

interface IProp {
    article: IArticleHeaderData;
    path: string;
}


const FeaturedArticle = ({ article, path }: IProp) => {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        <div className="mb-10 px-3 sm:px-2">
            <div className={combineClasses(classes.featured_article, theme === 'dark' ? classes.dark : null)}>
                <div className={classes.featured_article__content}>
                    <div className={combineClasses(classes.featured_article_footer, "mt-0 mb-10")}>
                        <div className={classes.author}>
                            <div className={classes.author_img}>
                                {article.author.profilePic ? <img src={article.author.profilePic} alt={article.author.name} /> : <img src={generateRandomAvtar()} alt={article.author.name} />}
                            </div>
                            <p className={combineClasses(classes.author_name, 'font-16 font-sm-14 my-0 font-medium')}>
                                {article.author.name}
                            </p>
                        </div>
                        {
                            article.category && <>
                                <p className="font-16 font-sm-14 px-5">in</p>
                                <p className={combineClasses(classes.article_card__category, "font-medium font-16 font-sm-14")}>
                                    <Link href={"/blog/" + article.category}>
                                        {article.category}
                                    </Link>
                                </p>
                            </>
                        }
                    </div>
                    <Link href={path}>
                        <a>
                            <h1 className={combineClasses(classes.featured_article__title, "font-24 font-bold mt-0 mb-10")} >
                                {article.articleTitle}
                            </h1>
                        </a>
                    </Link>
                    <p className={combineClasses(classes.featured_article__intro, "font-14 font-regular mt-0 mb-10")}>
                        {article.shortIntro.slice(0, 150)} ...
                    </p>

                    <div className={classes.featured_article__tags}>
                        {
                            article.tags.split(',').map((each, i) => (
                                <span key={i} className="font-12 font-regular mr-10" >#{each}</span>
                            ))
                        }
                    </div>
                    <p className={combineClasses(classes.featured_article__date, "font-regular font-12 mt-15 mb-0")}>{article.date}</p>
                </div>
                <div className={classes.featured_article__image} style={{ background: `url(${article.thumbnail})` }}>
                    {/* <img src={article.thumbnail} alt={article.articleTitle} /> */}
                </div>
            </div>
        </div>
    )
}

export default FeaturedArticle