import { Link } from "react-router-dom";
import styles from "./PageHeader.module.css";

//TODO: adapt and style page header component to added Links

const PageHeader = () => {
  return (
    <header className={styles.pageHeader}>
        <Link to="/" className={styles.logoTitleWrapper}>
          <img className={styles.headerLogo} src="logo1.png" alt="plane" />
          <h1 className={`${styles.headerTitle} font__family__arizonia `}>Trip planner</h1>
        </Link>
      <nav>
        <ul className={styles.pageHeaderNavbarActions}>
          <li>
            <Link to="/home" className={styles.navLink}>
              <div className={styles.navbarItemsIconsContainer}>
                <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
                <i className="fa-solid fa-house-chimney" aria-hidden="true"></i>
              </div>
              <div className={styles.navbarItemNameContainer}><span data-text="Home">Home</span></div>
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.navLink}>
             <div className={styles.navbarItemsIconsContainer}>
              <i className="fa-solid fa-arrow-right-to-bracket" aria-hidden="true"></i>
              <i className="fa-solid fa-arrow-right-to-bracket" aria-hidden="true"></i>
             </div>
             <div className={styles.navbarItemNameContainer}><span data-text="Log in">Log in</span></div>
            </Link>
          </li>
          <li>
            <Link to="/destination-conditions" className={styles.navLink}>
              <div className={styles.navbarItemsIconsContainer}>
                <i className="fa-solid fa-cloud-sun" aria-hidden="true"></i>
                <i className="fa-solid fa-cloud-sun" aria-hidden="true"></i>
              </div>
              <div className={styles.navbarItemNameContainer}><span data-text="Check destination">Check destination</span></div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default PageHeader;
