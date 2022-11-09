import { ModalType } from "../../../../Types";
import Modal from "../Modal";


const ActionConfirmation = ({showModal, type, title, message, confirm, cancel}: {showModal: boolean, type: ModalType, title:string, message: string, confirm:Function, cancel: Function}) => {
// TODO: style modal confirmation for different types

    return (
        <>
        {
        showModal && 
        <Modal>
            <div>
                <h1>{title}</h1>
                <h3>{message}</h3>
                <button onClick={() => confirm()}>Confirm</button>
                <button onClick={() => cancel()}>Cancel</button>
            </div>
        </Modal>}
        </>
    );
}


export default ActionConfirmation;