import { iArticle } from "../../shared/interfaces"
import ArticleHeaderCenter from "./ArticleHeaderCentered"
import ArticleHeaderDefault from "./ArticleHeaderDefault"

interface IArticleHeader {
    centered?: boolean,
    ARTICLE_DETAILS: iArticle
}
const ArticleHeader = ({ centered = false, ARTICLE_DETAILS }: IArticleHeader) => {
    return (
        centered ? <ArticleHeaderCenter headerData={ARTICLE_DETAILS.preview} /> :
            <ArticleHeaderDefault headerData={ARTICLE_DETAILS.preview} />
    )
}

export default ArticleHeader