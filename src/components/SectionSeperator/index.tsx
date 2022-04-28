import { combineClasses, getTheme } from "../../utils/utils";
import { SectionSeperatorTypes } from '../../shared/enums';
import classes from './Seperator.module.scss'
import { useEffect, useState } from "react";

const SectionSeperator = ({ type = SectionSeperatorTypes.LINE, color }: { type?: SectionSeperatorTypes; color?: string }) => {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        <>
            {
                type === SectionSeperatorTypes.LINE ? 
                    <div className={combineClasses(classes.section_seperator_line, theme === 'dark' ? classes.dark : null)}></div> :
                    <div className={combineClasses(classes.section_seperator_dots, theme === 'dark' ? classes.dark : null)}>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
            }

        </>
    )
}

export default SectionSeperator