import classes from './Images.module.scss';
import { ImageSize } from "../../shared/enums"
import { combineClasses, transformImagePaths } from '../../utils/utils';
import Zoom from 'react-medium-image-zoom'

interface IArticleImage {
    src: string,
    caption?: string,
    size?: ImageSize,
    alt?: string,
    className?: string
}
const Image = ({ src, caption, size = ImageSize.DEFAULT, alt, className }: IArticleImage) => {
    return (
        <div className={combineClasses(classes.article_image, classes.article_image__wrapper, className, classes['size_' + size], 'display-block mx-auto my-5')}>
            <Zoom>
                <img src={transformImagePaths(src)} alt={alt} width="100%" className={combineClasses('block')} />
            </Zoom>
            {
                caption &&
                <p className={combineClasses(classes.article_image__caption, "mb-0 mt-2 text-sm w-full text-center")}>{caption}</p>
            }
        </div>
    )
}

export default Image