import Link from "next/link"
import { IArticleHeaderData } from "../../shared/interfaces"
import { combineClasses } from "../../utils/utils"
import classes from './ArticleHeader.module.scss'
interface IProps {
    headerData: IArticleHeaderData
}
const ArticleHeaderDefault = ({ headerData }: IProps) => {
    return (
        <div className="mb-30">
            <div className={combineClasses("mb-10 d-flex align-center mt-15")}>
                <div className={classes.article_header_author_img}></div>
                <div>
                    <div className="d-flex font-16 font-sm-14">
                        <p className={combineClasses(classes.article_header_author_name, 'font-medium my-0')}>
                            {headerData.author.name}
                        </p>
                        {
                            headerData.category && <>
                                <p className="px-5 font-spaceGray my-0">in</p>
                                <p className="font-medium my-0">
                                    <Link href={'/blog/' + headerData.category}>
                                        <a href="">{headerData.category}</a>
                                    </Link>
                                </p>
                            </>
                        }
                    </div>
                    <p className="font-12 font-spaceGray my-0">{headerData.date}</p>
                </div>
            </div>
            <h1 className={combineClasses(classes.articleTitle, "mt-20 mb-5")}>
                {headerData.articleTitle}
            </h1>
            <div>
                {
                    headerData.tags.split(',').map((each, i) => (
                        <span key={i} className="font-12 font-regular font-spaceGray mr-10" >#{each}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleHeaderDefault