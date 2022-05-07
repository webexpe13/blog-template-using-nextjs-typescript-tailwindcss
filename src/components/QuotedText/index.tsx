import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from './Quoted.module.scss'

interface IProps {
    children: any; 
    size?: number; 
    color?: string; 
    textAlign?: TextAlign
}

const QuotedText = ({ children, size = 18, color, textAlign = TextAlign.LEFT }: IProps) => {
    return (
        <blockquote className={combineClasses(`font-${size}`, classes.quoted_text)} style={{ color: color, textAlign: textAlign }}>
           <q>{children}</q>
        </blockquote>
    )
}

export default QuotedText