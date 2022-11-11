import styles from "./CrossButton.module.css";

const CrossButton = ({handleClick}: {handleClick: Function}) => {
  return (
    <div onClick={() => handleClick()} className={styles.crossButtonWrapper}>
      <div className={styles.crossButton}>
        <div className={styles.crossButtonPlus}></div>
      </div>
    </div>
  );
};

export default CrossButton;
