import { TextAlign } from "../../shared/enums";
interface IProps {
    children: any;
    size?: number;
    color?: string;
    textAlign?: TextAlign
}

const SectionTitle = ({ children, size = 20, color, textAlign = TextAlign.LEFT }: IProps) => {
    return (
        <h3 className={`font-${size} font-bold mt-40 mb-15`} style={{ color: color, textAlign: textAlign }}>
            {children}
        </h3>
    )
}

export default SectionTitle 