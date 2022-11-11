import CloseModalButton from "../../Buttons/CloseModalButton";
import styles from "./ModalOverlay.module.css";
// TODO: check props type

const ModalOverlay = ({children, handleClick}: {children: any, handleClick: Function}) => {
  return <section className={styles.modalOverlay}>
    <CloseModalButton handleClick={handleClick}/>
        {children}
  </section>;
};

export default ModalOverlay;
