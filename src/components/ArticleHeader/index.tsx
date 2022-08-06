import { ArticleHeaderLayouts } from "../../shared/enums"
import { getArticleDetails } from "../../utils/utils"
import ArticleHeaderCenter from "./ArticleHeaderCentered"
import ArticleHeaderDefault from "./ArticleHeaderDefault"

interface IArticleHeader {
    type?: ArticleHeaderLayouts,
}
const ArticleHeader = ({ type = ArticleHeaderLayouts.DEFAULT }: IArticleHeader) => {
    const ARTICLE_DETAILS = getArticleDetails();

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