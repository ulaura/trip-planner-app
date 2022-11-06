import { Link } from "react-router-dom";
import styles from "./PageHeader.module.css";

//TODO: adapt and style page header component to added Links

const PageHeader = () => {
    return (
      <header className={styles.pageHeader}>
        <Link to="/" className={styles.logoTitleWrapper}>
          <img className={styles.headerLogo} src="logo1.png" alt="plane" />
          <h1 className={`${styles.headerTitle} font__family__arizonia a`}>Trip planner</h1>
        </Link>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/destination-conditions">Check destination conditions</Link></li>
          </ul>
        </nav>
      </header>
    );
};

export default PageHeader;
