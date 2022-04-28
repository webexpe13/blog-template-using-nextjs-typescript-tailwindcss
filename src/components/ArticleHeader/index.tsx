import { useEffect, useState } from "react"
import { ArticleHeaderLayouts, THEMES } from "../../shared/enums"
import { IArticleHeaderData } from "../../shared/interfaces"
import { getTheme } from "../../utils/utils"
import ArticleHeaderCenter from "./ArticleHeaderCentered"
import ArticleHeaderDefault from "./ArticleHeaderDefault"

interface IArticleHeader {
    type: ArticleHeaderLayouts,
    headerData: IArticleHeaderData
}
const ArticleHeader = ({ type = ArticleHeaderLayouts.DEFAULT, headerData }: IArticleHeader) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        (() => {
            switch (type) {
                case ArticleHeaderLayouts.DEFAULT:
                    return (
                        <ArticleHeaderDefault headerData={headerData} />);
                case ArticleHeaderLayouts.CENTERED:
                    return (
                        <ArticleHeaderCenter headerData={headerData} />);
                default:
                    return (
                        <ArticleHeaderDefault headerData={headerData} />
                    );
            }
        })()
    )
}

export default ArticleHeader