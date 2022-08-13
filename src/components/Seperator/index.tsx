import { combineClasses } from "../../utils/utils";
import classes from './Seperator.module.scss';

interface iProps {
    line?: boolean;
    dots?: boolean;
}

const Seperator = ({ line = false, dots = false }: iProps) => {
    return (
        <>
            {
                line ? <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black')}></div> :
                    dots ? <div className={combineClasses(classes.section_seperator_dots)}>
                        {
                            [...Array(5)].map((i) => (
                                <span key={Math.random()} className="dark:bg-white"></span>
                            ))
                        }
                    </div> : 
                    <div className={combineClasses(classes.section_seperator_line, 'dark:border-white border-black')}></div>
            }

        </>
    )
}
export default Seperator