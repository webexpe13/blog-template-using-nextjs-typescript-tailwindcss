import { combineClasses, isDarkTheme } from "../../utils/utils";
import { SectionSeperatorTypes } from '../../shared/enums';
import classes from './Seperator.module.scss'
import { useEffect, useState } from "react";

const SectionSeperator = ({ type = SectionSeperatorTypes.LINE, color }: { type?: SectionSeperatorTypes; color?: string }) => {
    const [isDark, setTheme] = useState(false);
    useEffect(() => {
        setTheme(isDarkTheme());
    }, [isDark]);

    return (
        <>
            {
                type === SectionSeperatorTypes.LINE ? 
                    <div className={combineClasses(classes.section_seperator_line, isDark ? classes.dark : null)}></div> :
                    <div className={combineClasses(classes.section_seperator_dots, isDark ? classes.dark : null)}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
            }

        </>
    )
}

export default SectionSeperator