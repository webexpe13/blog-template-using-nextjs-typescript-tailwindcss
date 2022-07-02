import { useEffect, useState } from "react"
import { ArticleHeaderLayouts, THEMES } from "../../shared/enums"
import { IArticleHeaderData } from "../../shared/interfaces"
import { getArticleDetails, getTheme } from "../../utils/utils"
import ArticleHeaderCenter from "./ArticleHeaderCentered"
import ArticleHeaderDefault from "./ArticleHeaderDefault"

interface IArticleHeader {
    type?: ArticleHeaderLayouts,
}
const ArticleHeader = ({ type = ArticleHeaderLayouts.DEFAULT }: IArticleHeader) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    const ARTICLE_DETAILS = getArticleDetails();

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        (() => {
            switch (type) {
                case ArticleHeaderLayouts.DEFAULT:
                    return (
                        <ArticleHeaderDefault headerData={ARTICLE_DETAILS.preview} />);
                case ArticleHeaderLayouts.CENTERED:
                    return (
                        <ArticleHeaderCenter headerData={ARTICLE_DETAILS.preview} />);
                default:
                    return (
                        <ArticleHeaderDefault headerData={ARTICLE_DETAILS.preview} />
                    );
            }
        })()
    )
}

export default ArticleHeader