import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import { iconsArray } from "../src/constants/appConstants";
import { THEMES } from "../src/shared/enums";
import { combineClasses, getTheme } from "../src/utils/utils";
import classes from './index.module.scss';

const Icons = () => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);
    return (
        <div className={combineClasses(classes.home_layout_wrapper, theme === THEMES.DARK ? "bg-darkBlue font-offWhite" : "bg-offWhite font-black")}>
            <Navbar />
            <div className="container">
                <h1 className="font-light mb-0">
                    Icons
                </h1>
                <p className="mb-32 mt-5">To use these icons, simply copy the text below the icon and paste in {"<i />"} tag, and to change the size and color of the icon use font attributes like font-12 and font-blue in className.
                
                <br /> <br />
                Example: {'<i className="icon-A font-48 font-lightBlue" />'}
                <br />
                <i className="icon-A font-48 font-lightBlue" />
                </p>
                <hr />
                <div className="d-flex flex-wrap justify-space-around">
                    {
                        iconsArray.map((icon, key) => {
                            return (
                                <div key={key} className="d-flex flex-column text-center px-46 px-sm-30 py-15" style={{ flexShrink: 0, minWidth: "100px" }} >
                                    <i className={combineClasses(icon, 'font-80')} />
                                    <p className="font-light font-14">{icon}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Icons;