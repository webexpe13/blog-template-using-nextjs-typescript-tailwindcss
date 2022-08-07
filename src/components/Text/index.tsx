import { TextAlign, TextAs } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from './text.module.scss'

interface IProps {
    children: any;
    color?: string;
    textAlign?: TextAlign;
    className?: string;
    title?: boolean;
    subtitle?: boolean;
    p?: boolean;
    quote?: boolean;
}

const Text = ({ children, color, textAlign = TextAlign.NONE, className, title = false, subtitle = false, p = false, quote = false }: IProps) => {
    const computeComponent = () => {
        let ui = <></>;

        if (title) {
            ui = (
                <h1
                    className={combineClasses(`font-bold text-3xl my-[10px]`, className)}
                    style={{ color: color, textAlign: textAlign }}>
                    {children}
                </h1>
            )
        } else if (subtitle) {
            ui = (
                <h2
                    className={combineClasses(`font-semibold text-xl my-[10px]`, className)}
                    style={{ color: color, textAlign: textAlign }}>
                    {children}
                </h2>
            )
        } else if (p) {
            ui = (
                <p
                    className={combineClasses(`font-regular mb-3 text-md leading-relaxed`, className)}
                    style={{ color: color, textAlign: textAlign }}>
                    {children}
                </p>
            )
        } else if (quote) {
            ui = (
                <blockquote
                    className={combineClasses(classes.quoted_text, className)}
                    style={{ color: color, textAlign: textAlign }}>
                    <q>{children}</q>
                </blockquote>
            )
        } else {
            ui = (
                <p
                    className={combineClasses(`font-regular mb-3 text-md leading-relaxed`, className)}
                    style={{ color: color, textAlign: textAlign }}>
                    {children}
                </p>
            )
        }
        return ui;
    }

    return (
        computeComponent()
    )
}

export default Text