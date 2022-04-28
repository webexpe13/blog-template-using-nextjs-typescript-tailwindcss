import { combineClasses } from "../../utils/utils";

const Para = ({ children, size = 16, color }: { children: any; size?: number; color?: string }) => {
    return (
        <p className={combineClasses(`font-${size} font-light`)} style={{ color: color }}>
            {children}
        </p>
    )
}

export default Para