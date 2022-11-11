import { ModalType } from "../../../../Types";
import Modal from "../Modal";
import styles from "./ActionConfirmation.module.css";

const ActionConfirmationModal = ({
  showConfirmation,
  type,
  title,
  message,
  confirm,
  cancel}: {
  showConfirmation: boolean;
  type: ModalType;
  title: string;
  message: string;

  confirm: Function;
  cancel: Function;
}) => {

  return (
    <>
        <Modal modalVisible={showConfirmation} changeVisibility={cancel}>
          <section className={`${styles[`${type}`]} ${styles.actionConfirm}`}>
            <header className={styles.modalHeader}>
              <h2 className={styles.modalHeaderTitle}>{title}</h2>
            </header>
            <div className={styles.iconAndMsgCnt}>
              {(type === ModalType.DANGER && (<i className="fa-solid fa-triangle-exclamation"></i>)) ||
               (type === ModalType.SUCCESS && (<i className="fa-solid fa-circle-check"></i>))}
              <h3><pre className={styles.message}><span>{message}</span></pre></h3>
            </div>
            <footer className={styles.modalActions}>
              <button onClick={() => cancel(false)}  className={`${styles.actionBtn} ${styles.actionBtnCancel}`}>Cancel</button>
              <button onClick={() => confirm()} className={`${styles.actionBtn} ${styles.actionBtnConfirm}`}>Confirm</button>
            </footer>
          </section>
        </Modal>
    </>
  );
};

export default ActionConfirmationModal;
