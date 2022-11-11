import styles from "./CloseModalButton.module.css";

const CloseModalButton = ({handleClick}: {handleClick: Function}) => {
  return (
    <div onClick={() => handleClick(false)} className={styles.closeModalWrapper}>
      <div className={styles.closeModal}>
        <div className={styles.leftright}></div>
        <div className={styles.rightleft}></div>
        <label className={styles.close}>close</label>
      </div>
    </div>
  );
};

export default CloseModalButton;
