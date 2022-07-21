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
                        className={combineClasses(`font-regular mb-3 text-[${fontSize}px]`, className)} 
                        style={{ color: color, textAlign: textAlign}}>
                        {children}
                    </p>
                )
                break;
            case TextAs.title:
                ui = (
                    <h1 
                        className={`font-bold my-[10px] text-xl text-[${fontSize}px] ${className}`} 
                        style={{ color: color, textAlign: textAlign }}>
                        {children}
                    </h1>
                )
                break;
            case TextAs.quote:
                ui = (
                    <blockquote 
                        className={combineClasses(classes.quoted_text, className, `text-[${fontSize}px]`)} 
                        style={{ color: color, textAlign: textAlign }}>
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