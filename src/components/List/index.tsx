import { ListType } from "../../shared/enums"
import { combineClasses } from "../../utils/utils"
import classes from './List.module.scss'

const List = ({ children, type = ListType.bullet, className }: {
    children?: any,
    type?: ListType,
    className?: any
}) => {
    return (
        <ul className={combineClasses(classes.list, type, 'pl-[30px]', className)}>
            {children}
        </ul>
    )
}

export default List