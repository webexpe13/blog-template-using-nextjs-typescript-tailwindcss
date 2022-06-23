import { TextAlign } from "../../shared/enums";
interface IProps {
    children: any;
    size?: number;
    color?: string;
    textAlign?: TextAlign
    className?: string
}

const SectionTitle = ({ children, size, color, textAlign = TextAlign.LEFT, className }: IProps) => {
    return (
        <h3 className={`font-bold mb-15 ${className}`} style={{ color: color, textAlign: textAlign, fontSize: size ? size+'px' : 'auto' }}>
            {children}
        </h3>
    )
}

export default SectionTitle 