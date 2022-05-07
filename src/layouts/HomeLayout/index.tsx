import { useEffect, useState } from "react";
import classes from "./HomeLayout.module.scss";
import Navbar from "../../components/Navbar";
import { THEME } from "../../constants/appConstants";
import { getTheme } from "../../utils/utils";
import { NavbarLayouts, THEMES } from "../../shared/enums";
import Search from "../../components/Search";


const HomeLayout = ({ children, container }: any) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [showSearch, setShowSearch] = useState();
  useEffect(() => {
    getTheme(setTheme);
  }, [theme]);

  return (
    <>
      <div className={classes.home_layout_wrapper} style={{ background: (THEME as any)[theme].bg }}>
        <Navbar container={container} type={NavbarLayouts.CENTERED} />
        {children}
      </div>

      {!showSearch && (
        <div className={classes.home_layout_wrapper} style={{ background: (THEME as any)[theme].bg }}>
          <Navbar
            container={container}
          // setsearchStr={setSearchStr} 
          />
          {children}
        </div>
      )}
      {
        showSearch && <Search
        // searchStr={searchStr}
        //  setSearchStr={setSearchStr}
        />
      }
    </>
  );
};

export default HomeLayout;
