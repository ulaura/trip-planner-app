import { useState } from "react";
import { DELETE_CONFIRMATION_MESSAGE, DELETE_CONFIRMATION_TITLE, COMPLETE_TRIP_CONFIRMATION_MESSAGE, COMPLETE_TRIP_CONFIRMATION_TITLE } from "../../Constants";
import { ModalType, TripStatus } from "../../Types";
import ActionConfirmation from "../Reusable/Modal/Confirmations/ActionConfirmation";
import styles from "./TripSidebar.module.css";

const TripSidebar = ({ status, deleteTrip, completeTrip, cloneTrip, editTrip }:{ status: TripStatus, deleteTrip: Function, completeTrip: Function, cloneTrip: Function, editTrip: Function }) => {
  const tripCompleted = status === TripStatus.COMPLETED;
  const [displayDeleteConfirmModal, setDisplayDeleteConfirmModal] = useState(false);
  const [displayCompleteConfirmModal, setDisplayCompleteConfirmModal] = useState(false);

  const deleteTripHandler = () => {
    setDisplayDeleteConfirmModal(false);
    deleteTrip();
  }

  const completeTripHandler = () => {
    setDisplayCompleteConfirmModal(false);
    completeTrip();
  }

  return (
    <section className={styles.tripActionSideBar}>
      <button onClick={() => setDisplayDeleteConfirmModal(true)} className={`${styles.actionDeleteTrip} ${styles.tripSideBarActions}`} data-delete="Delete">
        <i className={` fa-solid fa-trash text-white`}></i>
      </button>
      {!tripCompleted && (
        <button onClick={() => editTrip(true)} className={`${styles.actionEditTrip} ${styles.tripSideBarActions}`} data-edit="Edit">
          <i className="fa-sharp fa-solid fa-pen-to-square text-white"></i>
        </button>
      )}
      {!tripCompleted && (
        <button onClick={() => setDisplayCompleteConfirmModal(true)} className={`${styles.actionCompleteTrip} ${styles.tripSideBarActions}`} data-status="Complete">
          <i className="fa-regular fa-circle-check text-white"></i>
        </button>
      )}
      <button onClick={() => cloneTrip()} className={`${styles.actionCloneTrip} ${styles.tripSideBarActions} `} data-clone="Clone">
        <i className="fa-regular fa-clone text-white"></i>
      </button>

      <ActionConfirmation showConfirmation={displayDeleteConfirmModal} type={ModalType.DANGER} title={DELETE_CONFIRMATION_TITLE} message={DELETE_CONFIRMATION_MESSAGE} confirm={deleteTripHandler} cancel={setDisplayDeleteConfirmModal}/>
      <ActionConfirmation showConfirmation={displayCompleteConfirmModal} type={ModalType.SUCCESS} title={COMPLETE_TRIP_CONFIRMATION_TITLE} message={COMPLETE_TRIP_CONFIRMATION_MESSAGE} confirm={completeTripHandler} cancel={setDisplayCompleteConfirmModal}/>
    </section>
  );
};

export default TripSidebar;
