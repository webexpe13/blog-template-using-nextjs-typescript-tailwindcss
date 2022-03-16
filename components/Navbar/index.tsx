import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME, THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getTheme } from "../../shared/utils";

const Navbar = ({ container = 'container' }: any) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  const changeTheme = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    location.reload();
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollYDistance = window.scrollY;
      if (scrollYDistance > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    return () => {
      setScrolled(false);
    };
  }, []);

  return (
    <nav
      className={combineClasses(classes.navbar, theme === "light" ? classes.shadow_light : classes.shadow_dark, scrolled ? " py-0" : " py-10")}
      style={{ background: (THEME as any)[theme].navBg }}
    >
      <div className={combineClasses(classes.navbar__container, container, "px-15")}>
        <Link href="/">
          <a className={classes.logo}></a>
        </Link>

        <div className="d-flex align-center">
          <div className={classes.search_wrapper} style={{ color: (THEME as any)[theme].color }}>
            <p className="m-0 font-14 pr-36">
              Search ...
            </p>
            <button>
              <img src={(THEME_ICONS as any)[theme].search} width="100%" alt="" />
            </button>
          </div>

          <button className={combineClasses(classes.theme_switch, "pl-10 pr-0")} onClick={changeTheme}>
            <img src={(THEME_ICONS as any)[theme].themeToggle} width="100%" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
