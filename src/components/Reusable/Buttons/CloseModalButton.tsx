import styles from "./CloseModalButton.module.css";

const CloseModalButton = () => {
  return (
    <div className={styles.closeModalWrapper}>
      <div className={styles.closeModal}>
        <div className={styles.leftright}></div>
        <div className={styles.rightleft}></div>
        <label className={styles.close}>close</label>
      </div>
    </div>
  );
};

export default CloseModalButton;
