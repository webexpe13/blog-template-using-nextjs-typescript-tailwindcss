import classes from "./HomeLayout.module.scss";
import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { THEME } from "../../constants/appConstants";
import { getTheme } from "../../shared/utils";

const HomeLayout = ({ children, container }: any) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  return (
    <div className={classes.home_layout_wrapper} style={{ background: (THEME as any)[theme].bg }}>
      <Navbar container={container} />
      {children}
    </div>
  );
};

export default HomeLayout;
