import ReactDOM from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay/ModalOverlay";
import "../../../GlobalStyles.css";

const overlay = document.getElementById("overlays");

const Modal = ({children, modalVisible, changeVisibility}: {children: any, modalVisible: boolean, changeVisibility: Function}) => {

        return (
            <>
            {modalVisible && ReactDOM.createPortal(<Backdrop/>, overlay!)}
            {modalVisible && ReactDOM.createPortal(<ModalOverlay handleClick={changeVisibility}>{children}</ModalOverlay>, overlay!)}
            </>
        );
}
export default Modal;