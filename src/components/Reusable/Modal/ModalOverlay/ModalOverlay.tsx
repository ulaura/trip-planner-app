import CloseModalButton from "../../Buttons/CloseModalButton";
import styles from "./ModalOverlay.module.css";
// TODO: check props type

const ModalOverlay = (props: any) => {
  return <section className={styles.modalOverlay}>
    <CloseModalButton/>
        {props.children}
  </section>;
};

export default ModalOverlay;
