import Link from "next/link"
import { useEffect, useState } from "react";
import { THEMES } from "../../shared/enums";
import { getTheme } from "../../utils/utils";

const Footer = () => {
    const [theme, setTheme] = useState(THEMES.LIGHT);
    useEffect(() => {
        getTheme(setTheme);
    }, [theme]);
    const year = new Date().getFullYear()

    return (
        <div className={theme === THEMES.DARK ? "bg-darkBlue font-spaceGray" : "bg-offWhite font-spaceGray"}>
            <div className="container d-flex align-items-center justify-center font-14 font-sm-12 py-15">
                <p className="my-0 mr-20">Copyright © {year}</p>
                <Link href="">
                    <a className="pr-10">Privacy Policy</a>
                </Link>
                <Link href="">
                    <a>Terms and Conditions</a>
                </Link>
            </div>
        </div>
    )
}

export default Footer