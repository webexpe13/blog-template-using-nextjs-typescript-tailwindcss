import { TextAlign, TextAs } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from './text.module.scss'

interface IProps {
    children: any;
    color?: string;
    textAlign?: TextAlign;
    className?: string;
    as?: TextAs;
    fontSize?: number;
}

const Text = ({ children, fontSize, color, textAlign = TextAlign.LEFT, className, as = TextAs.p }: IProps) => {
    const computeComponent = () => {
        let ui = <></>;
        switch (as) {
            case TextAs.p:
                ui = (
                    <p 
                        className={combineClasses(`font-regular`, className)} 
                        style={{ color: color, textAlign: textAlign, fontSize: fontSize + 'px'}}>
                        {children}
                    </p>
                )
                break;
            case TextAs.title:
                ui = (
                    <h1 
                        className={`font-bold mb-[10px] text-xl ${className}`} 
                        style={{ color: color, textAlign: textAlign, fontSize: fontSize + 'px' }}>
                        {children}
                    </h1>
                )
                break;
            case TextAs.quote:
                ui = (
                    <blockquote 
                        className={combineClasses(classes.quoted_text, className)} 
                        style={{ color: color, textAlign: textAlign, fontSize: fontSize + 'px' }}>
                        <q>{children}</q>
                    </blockquote>
                )
                break;
            default:
                break;
        }
        return ui;
    }

    return (
        computeComponent()
    )
}

export default Text