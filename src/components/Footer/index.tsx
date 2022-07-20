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
        <div className={theme === THEMES.DARK ? "bg-slate-800 text-white" : "bg-slate-100 text-black"}>
            <div className="md:container flex items-center justify-center md:text-[14px] text-[12px] py-5">
                <p className="my-0 mr-10">Copyright © {year}</p>
                <Link href="/privacy-policy" passHref={true}>
                    <a className="pr-10">Privacy Policy</a>
                </Link>
                <Link href="/terms-and-condition" passHref={true}>
                    <a>Terms and Conditions</a>
                </Link>
            </div>
        </div>
    )
}

export default Footer