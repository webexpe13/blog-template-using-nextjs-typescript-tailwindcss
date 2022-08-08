import { combineClasses } from "../../utils/utils";
import classes from './Seperator.module.scss';

interface iProps {
    color?: string;
    line?: boolean;
    dots?: boolean;
}

const Seperator = ({ color, line = false, dots = false }: iProps) => {
    return (
        <>
            {
                line ? <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black')}></div> :
                    dots ? <div className={combineClasses(classes.section_seperator_dots)}>
                        {
                            [...Array(5)].map((i) => (
                                <span key={i} className="dark:bg-white"></span>
                            ))
                        }
                    </div> : 
                    <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black')}></div>
            }

        </>
    )
}
export default Seperator