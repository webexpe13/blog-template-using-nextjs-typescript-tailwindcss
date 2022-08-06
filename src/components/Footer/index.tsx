import Link from "next/link"
import { useEffect, useState } from "react";
import { isDarkTheme } from "../../utils/utils";

const Footer = () => {
    const [isDark, setTheme] = useState(false);
    useEffect(() => {
        setTheme(isDarkTheme());
    }, [isDark]);
    const year = new Date().getFullYear()

    return (
        <div className={isDark ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}>
            <div className="md:container flex items-center md:justify-center justify-around flex-wrap md:text-[14px] text-[12px] py-5">
                <p className="my-0 mr-[10px] md:mr-3">Copyright © {year}</p>
                <Link href="/privacy-policy" passHref={true}>
                    <a className="pr-[10px] md:pr-3">Privacy Policy</a>
                </Link>
                <Link href="/terms-and-condition" passHref={true}>
                    <a>Terms and Conditions</a>
                </Link>
            </div>
        </div>
    )
}

export default Footer