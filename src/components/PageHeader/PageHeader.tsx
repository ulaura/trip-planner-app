import styles from "./PageHeader.module.css";

const PageHeader = () => {
    return (
        <header className={styles.pageHeader}>
            <img className={styles.headerLogo} src="logo1.png" alt="plane" />
            <h1 className={styles.headerTitle}>Trip planner</h1>
        </header>
    )
};

export default PageHeader;
