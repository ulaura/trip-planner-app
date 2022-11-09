import styles from "./ModalOverlay.module.css";
// TODO: check props type

const ModalOverlay = (props: any) => {
  return <section className={styles.modalOverlay}>
        {props.children}
  </section>;
};

export default ModalOverlay;
