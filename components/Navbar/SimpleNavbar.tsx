import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { THEME_ICONS } from "../../constants/appConstants";
import { combineClasses, getTheme } from "../../shared/utils";
import { ContainerWidths, THEMES } from "../../shared/enums";

const SimpleNavbar = ({ container = ContainerWidths.DEFAULT, openSearch }: any) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  const changeTheme = () => {
    localStorage.setItem("theme", theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
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
    <nav className={combineClasses(classes.navbar, classes.shadow, scrolled ? " py-0" : " py-10", theme === THEMES.DARK ? classes.dark : null)}>
      <div className={combineClasses(classes.navbar__container, container, "px-15")}>
        <Link href="/">
          <a className={classes.logo}></a>
        </Link>

        <div className="d-flex align-center">
          <div className={classes.search_wrapper} onClick={() => openSearch()}>
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

export default SimpleNavbar;
