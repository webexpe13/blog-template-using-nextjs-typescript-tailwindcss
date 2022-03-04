import classes from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={classes.navbar + " w-100 py-10"}>
      <div className={classes.navbar__container + " px-15"}>
        <Link href="/">
          <a className={classes.logo}></a>
        </Link>

        <div className={classes.search_wrapper}>
          <input
            type="text"
            id="search"
            className="nav_search_input"
            required
          />
          <button>
            <img src="/svg/search.svg" width="100%" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
