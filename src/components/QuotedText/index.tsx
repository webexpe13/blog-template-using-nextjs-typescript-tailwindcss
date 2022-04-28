import { combineClasses } from "../../utils/utils";
import classes from './Quoted.module.scss'

const QuotedText = ({ children, size = 18, color }: { children: any; size?: number; color?: string }) => {
    return (
        <blockquote className={combineClasses(`font-${size}`, classes.quoted_text)} style={{ color: color }}>
           <q>{children}</q>
        </blockquote>
    )
}

export default QuotedText