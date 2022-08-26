import { ListType } from "../../shared/enums"
import { combineClasses } from "../../utils/utils"
import classes from './List.module.scss'

const List = ({ children, type = ListType.disc, className }: {
    children?: any,
    type?: ListType,
    className?: string
}) => {
    return (
        <ul className={combineClasses(classes.list, type, 'pl-[30px]', className)}>
            {children}
        </ul>
    )
}

export default List