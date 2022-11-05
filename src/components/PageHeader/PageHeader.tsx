import styles from "./PageHeader.module.css";

const PageHeader = () => {
    return (
      <header className={styles.pageHeader}>
        <div className={styles.logoTitleWrapper}>
          <img className={styles.headerLogo} src="logo1.png" alt="plane" />
          <h1 className={`${styles.headerTitle} font__family__arizonia a`}> Trip planner</h1>
        </div>
      </header>
    );
};

export default PageHeader;
