import classes from "./HomeLayout.module.scss";
import Navbar from "../../components/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className={classes.home_layout_wrapper}>
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
