import { useEffect, useState } from "react";
import ArticleCard from "../../src/components/ArticleCards/ArticleCard";
import Navbar from "../../src/components/Navbar";
import { NavbarType, THEMES } from "../../src/shared/enums";
import { combineClasses, getTheme } from "../../src/utils/utils";
import classes from '../index.module.scss';
import ARTICLES_LIST from '../../BLOG_CONSTANTS/_ARTICLES_LIST';
import { PRIMARY_NAV } from "../../BLOG_CONSTANTS/_BLOG_SETUP";

const Categories = () => {

    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);

    return (
        <div className={combineClasses(classes.home_layout_wrapper, theme === THEMES.DARK ? "bg-darkBlue font-spaceGray" : "bg-offWhite font-spaceGray")} style={{ paddingTop: PRIMARY_NAV.type === NavbarType.DEFAULT ? '100px' : '150px' }}>
            <Navbar />
            <div className={combineClasses("container")}>
                <div className='d-flex flex-wrap'>
                    {
                        ARTICLES_LIST.map((each, i) => (
                            <ArticleCard article={each.preview} path={each.path} key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories