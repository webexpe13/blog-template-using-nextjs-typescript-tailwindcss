import { combineClasses } from "../../utils/utils";
import { SectionSeperatorTypes } from '../../shared/enums';
import classes from './Seperator.module.scss'

const SectionSeperator = ({ type = SectionSeperatorTypes.LINE, color }: { type?: SectionSeperatorTypes; color?: string }) => {
    return (
        <>
            {
                type === SectionSeperatorTypes.LINE ? 
                    <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black')}></div> :
                    <div className={combineClasses(classes.section_seperator_dots)}>
                        {
                            [...Array(5)].map((i) => (
                                <span key={i} className="dark:bg-white"></span>
                            ))
                        }
                    </div>
            }

        </>
    )
}

export default SectionSeperator