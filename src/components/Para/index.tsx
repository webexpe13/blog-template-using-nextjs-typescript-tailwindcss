import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";

interface IProps {
    children: any;
    size?: number;
    color?: string;
    textAlign?: TextAlign
}

const Para = ({ children, size = 16, color, textAlign = TextAlign.LEFT }: IProps) => {
    return (
        <p className={combineClasses(`font-${size} font-light`)} style={{ color: color, textAlign: textAlign }}>
            {children}
        </p>
    )
}

export default Para