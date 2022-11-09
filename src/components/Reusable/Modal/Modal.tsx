import ReactDOM from "react-dom";
import Backdrop from "./Backdrop/Backdrop";
import ModalOverlay from "./ModalOverlay/ModalOverlay";

const overlay = document.getElementById("overlays");

const Modal = (props:any) => {
        return (
            <>
            {ReactDOM.createPortal(<Backdrop/>, overlay!)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay!)}
            </>
        );
}
export default Modal;