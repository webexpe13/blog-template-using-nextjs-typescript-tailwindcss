import { TextAlign, TextAs } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from './text.module.scss'

interface IProps {
    children: any;
    color?: string;
    textAlign?: TextAlign;
    className?: string;
    as?: TextAs;
}

const Text = ({ children, color, textAlign = TextAlign.NONE, className, as = TextAs.p }: IProps) => {
    const computeComponent = () => {
        let ui = <></>;
        switch (as) {
            case TextAs.p:
                ui = (
                    <p
                        className={combineClasses(`font-regular mb-3 text-md leading-relaxed`, className)}
                        style={{ color: color, textAlign: textAlign }}>
                        {children}
                    </p>
                )
                break;
            case TextAs.title:
                ui = (
                    <h1
                        className={combineClasses(`font-bold my-[10px]`, className)}
                        style={{ color: color, textAlign: textAlign }}>
                        {children}
                    </h1>
                )
                break;
            case TextAs.subTitle:
                ui = (
                    <h2
                        className={combineClasses(`font-semibold my-[10px]`, className)}
                        style={{ color: color, textAlign: textAlign }}>
                        {children}
                    </h2>
                )
                break;
            case TextAs.quote:
                ui = (
                    <blockquote
                        className={combineClasses(classes.quoted_text, className)}
                        style={{ color: color, textAlign: textAlign }}>
                        <q>{children}</q>
                    </blockquote>
                )
                break;
            default:
                ui = (
                    <p
                        className={combineClasses(`font-regular mb-3`, className)}
                        style={{ color: color, textAlign: textAlign }}>
                        {children}
                    </p>
                )
                break;
        }
        return ui;
    }

    return (
        computeComponent()
    )
}

export default Text