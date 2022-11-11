import { useState } from "react";
import { ModalType, TripStatus } from "../../Types";
import ActionConfirmation from "../Reusable/Modal/Confirmations/ActionConfirmation";
import styles from "./TripSidebar.module.css";

const TripSidebar = ({ status, deleteTrip, completeTrip }:{ status: TripStatus, deleteTrip: Function, completeTrip: Function }) => {
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
        <button className={`${styles.actionEditTrip} ${styles.tripSideBarActions}`} data-edit="Edit">
          <i className="fa-sharp fa-solid fa-pen-to-square text-white"></i>
        </button>
      )}
      {!tripCompleted && (
        <button onClick={() => setDisplayCompleteConfirmModal(true)} className={`${styles.actionCompleteTrip} ${styles.tripSideBarActions}`} data-status="Complete">
          <i className="fa-regular fa-circle-check text-white"></i>
        </button>
      )}
      <button className={`${styles.actionCloneTrip} ${styles.tripSideBarActions} `} data-clone="Clone">
        <i className="fa-regular fa-clone text-white"></i>
      </button>

      <ActionConfirmation showConfirmation={displayDeleteConfirmModal} type={ModalType.DANGER} title="Delete trip" message={"Are you sure you want to delete this trip?"+"\n"+"You cannot undo this action."} confirm={deleteTripHandler} cancel={setDisplayDeleteConfirmModal}/>
      <ActionConfirmation showConfirmation={displayCompleteConfirmModal} type={ModalType.DANGER} title="Complete trip" message="Are you sure you want to complete this trip?" confirm={completeTripHandler} cancel={setDisplayCompleteConfirmModal}/>
    </section>
  );
};

export default TripSidebar;
