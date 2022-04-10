import classes from './Images.module.scss';
import { ArticleImageWidths } from "../../shared/enums"
import { combineClasses } from '../../utils/utils';

interface IArticleImage {
    src: string,
    caption?: string,
    size?: ArticleImageWidths,
    alt?: string
}
const ArticleImage = ({ src, caption, size = ArticleImageWidths.DEFAULT, alt }: IArticleImage) => {
    return (
        <div className={combineClasses(classes.article_image, classes.article_image__wrapper, "py-15")}>
            <img src={src} alt={alt} width="100%" className={classes[size]} />
            {
                caption &&
                <p className={combineClasses(classes.article_image__caption, "my-0 font-12 w-100 text-center")}>{caption}</p>
            }
        </div>
    )
}

export default ArticleImage