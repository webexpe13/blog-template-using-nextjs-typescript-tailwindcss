import { combineClasses } from "../../utils/utils";

const SectionTitle = ({ children, size = 20, color }: { children: any; size?: number; color?: string }) => {
    return (
        <h3 className={`font-${size} font-bold mt-40 mb-15`} style={{ color: color }}>
            {children}
        </h3>
    )
}

export default SectionTitle 