import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthenticationContext";
import { NavRoute } from "../../../Types";
import styles from "./PageHeader.module.css";

const PageHeader = () => {

  const {isLoggedIn, logout} = useAuth();
  const {pathname} = useLocation();

  return (
    <header className={styles.pageHeader}>
        <Link to={NavRoute.HOME} className={styles.logoTitleWrapper}>
          <img className={styles.headerLogo} src="logo1.png" alt="plane" />
          <h1 className={styles.headerTitle}>Trip planner</h1>
        </Link>
      <nav>
        <ul className={styles.pageHeaderNavbarActions}>
          {isLoggedIn && <li>
            <Link to={NavRoute.HOME} className={`${styles.navLink} ${pathname === NavRoute.HOME && styles.active}`}>
              <div className={styles.navbarItemsIconsContainer}>
                <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
                <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
              </div>
              <div className={styles.navbarItemNameContainer}><span data-text="Home">Home</span></div>
            </Link>
          </li>}
          {!isLoggedIn && <li>
            <Link to={NavRoute.SIGNIN} className={`${styles.navLink} ${pathname === NavRoute.SIGNIN && styles.active}`}>
             <div className={styles.navbarItemsIconsContainer}>
              <i className="fa-solid fa-arrow-right-to-bracket" aria-hidden="true"></i>
              <i className="fa-solid fa-arrow-right-to-bracket" aria-hidden="true"></i>
             </div>
             <div className={styles.navbarItemNameContainer}><span data-text="Sign in">Sign in</span></div>
            </Link>
          </li>}
          {!isLoggedIn && <li>
            <Link to={NavRoute.SIGNUP} className={`${styles.navLink} ${pathname === NavRoute.SIGNUP && styles.active}`}>
             <div className={styles.navbarItemsIconsContainer}>
              <i className="fa-solid fa-user-plus" aria-hidden="true"></i>
              <i className="fa-solid fa-user-plus" aria-hidden="true"></i>
             </div>
             <div className={styles.navbarItemNameContainer}><span data-text="Sign up">Sign up</span></div>
            </Link>
          </li>}
          {isLoggedIn && <li>
            <button onClick={() => logout()} className={`${styles.navLink} border-0`}>
             <div className={styles.navbarItemsIconsContainer}>
              <i className="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i>
              <i className="fa-solid fa-arrow-right-from-bracket" aria-hidden="true"></i>
             </div>
             <div className={styles.navbarItemNameContainer}><span data-text="Log out">Log out</span></div>
            </button>
          </li>}
          {/* <li>
            <Link to="/destination-conditions" className={styles.navLink}>
              <div className={styles.navbarItemsIconsContainer}>
                <i className="fa-solid fa-cloud-sun" aria-hidden="true"></i>
                <i className="fa-solid fa-cloud-sun" aria-hidden="true"></i>
              </div>
              <div className={styles.navbarItemNameContainer}><span data-text="Check destination">Check destination</span></div>
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
