import { TextAlign } from "../../shared/enums";
import { combineClasses } from "../../utils/utils";
import classes from './text.module.scss'

interface IProps {
    children?: any;
    color?: string;
    textAlign?: TextAlign;
    className?: string;
    title?: boolean;
    subtitle?: boolean;
    p?: boolean;
    quote?: boolean;
    id?: string;
}

const Text = ({ children, color, textAlign = TextAlign.NONE, className, title = false, subtitle = false, p = false, quote = false, id }: IProps) => {
    const computeComponent = () => {
        let ui = <></>;

        if (title) {
            ui = (
                <h1
                    className={combineClasses(`font-bold text-3xl md:text-4xl my-[10px]`, className)} style={{ color: color, textAlign: textAlign }} id={id}>
                    {children}
                    
                </h1>
            )
        } else if (subtitle) {
            ui = (
                <h2
                    className={combineClasses(`font-semibold text-xl md:text-2xl my-[10px]`, className)}
                    style={{ color: color, textAlign: textAlign }} id={id}>
                    {children}
                </h2>
            )
        } else if (p) {
            ui = (
                <p
                    className={combineClasses(`font-regular mb-3 text-lg leading-relaxed`, className)}
                    style={{ color: color, textAlign: textAlign }} id={id}>
                    {children}
                </p>
            )
        } else if (quote) {
            ui = (
                <blockquote
                    className={combineClasses(classes.quoted_text, className)}
                    style={{ color: color, textAlign: textAlign }} id={id}>
                    <q>{children}</q>
                </blockquote>
            )
        } else {
            ui = (
                <p
                    className={combineClasses(`font-regular mb-3 text-lg leading-relaxed`, className)}
                    style={{ color: color, textAlign: textAlign }} id={id}>
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