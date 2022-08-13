import { getArticleDetails } from "../../utils/utils"
import ArticleHeaderCenter from "./ArticleHeaderCentered"
import ArticleHeaderDefault from "./ArticleHeaderDefault"

interface IArticleHeader {
    centered?: boolean,
}
const ArticleHeader = ({ centered = false }: IArticleHeader) => {
    const ARTICLE_DETAILS = getArticleDetails();

    return (
        centered ? <ArticleHeaderCenter headerData={ARTICLE_DETAILS.preview} /> :
            <ArticleHeaderDefault headerData={ARTICLE_DETAILS.preview} />
    )
}

export default ArticleHeader