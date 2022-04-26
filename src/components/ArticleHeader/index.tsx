import { useEffect, useState } from "react"
import { ArticleHeaderLayouts, THEMES } from "../../shared/enums"
import { getTheme } from "../../utils/utils"
import ArticleHeaderCenter from "./ArticleHeaderCentered"
import ArticleHeaderDefault from "./ArticleHeaderDefault"

interface IArticleHeader {
    type: ArticleHeaderLayouts
}
const ArticleHeader = ({ type = ArticleHeaderLayouts.DEFAULT }: IArticleHeader) => {
    const [theme, setTheme] = useState(THEMES.LIGHT);

    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        (() => {
            switch (type) {
                case ArticleHeaderLayouts.DEFAULT:
                    return (
                        <ArticleHeaderDefault />);
                case ArticleHeaderLayouts.CENTERED:
                    return (
                        <ArticleHeaderCenter />);
                default:
                    return (
                        <ArticleHeaderDefault />
                    );
            }
        })()
    )
}

export default ArticleHeader