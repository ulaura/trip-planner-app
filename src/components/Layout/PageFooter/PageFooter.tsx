import styles from "./PageFooter.module.css";

const PageFooter = () => {
  return (
    <footer className={styles.pageFooter}>
      <h1 className={`${styles.footerTitle} font__family__arizonia`}>
        <span>One life.</span><span> One world.</span><span> Explore it.</span>
      </h1>
      <div>
        <h3 className={`${styles.followMe} font__family__arizonia`}>Follow Me</h3>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a className={styles.socialMedia} href="https://www.instagram.com/laura.urdas/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className={styles.socialMedia} href="https://www.facebook.com/urdas.laura.9">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default PageFooter;
