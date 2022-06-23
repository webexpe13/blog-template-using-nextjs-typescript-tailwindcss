import Link from "next/link"
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils"
import classes from './ArticleHeader.module.scss'
interface IProps {
    headerData: IArticleHeaderData
}
const ArticleHeaderCenter = ({ headerData }: IProps) => {
    return (
        <div className="mb-30">
            <h1 className={combineClasses(classes.articleTitle, "mt-20 mb-5 text-center")}>
                {headerData.articleTitle}
            </h1>
            <div className={combineClasses("mb-10 d-flex align-center justify-space-around mt-15 font-14 font-medium", classes.centered_article_header_author)}>
                <p className={'my-0'}>
                    {headerData.author.name}
                </p>
                {
                    headerData.category && <p className="my-0">
                        <Link href={'/blog/' + headerData.category} passHref={true}>
                            <a>{headerData.category}</a>
                        </Link>
                    </p>
                }
                <p className="my-0">{headerData.date}</p>
            </div>
            <div className="text-center">
                {
                    headerData.tags.split(',').map((each, i) => (
                        <span key={i} className="font-12 font-regular font-spaceGray mr-10" >#{each}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleHeaderCenter