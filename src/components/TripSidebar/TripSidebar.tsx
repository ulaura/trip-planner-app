import { TripStatus } from "../../Types";
import styles from "./TripSidebar.module.css";

const TripSidebar = ({ status }:{ status: TripStatus }) => {
  const tripCompleted = status === TripStatus.COMPLETED;

  return (
    <section className={styles.tripActionSideBar}>
      <div className={`${styles.actionDeleteTrip} ${styles.tripSideBarActions}`} delete-data="Delete">
        <i className={` fa-solid fa-trash text-white`}></i>
      </div>
      {!tripCompleted && (
        <div className={`${styles.actionEditTrip} ${styles.tripSideBarActions}`} edit-data="Edit">
          <i className="fa-sharp fa-solid fa-pen-to-square text-white"></i>
        </div>
      )}
      {!tripCompleted && (
        <div className={`${styles.actionCompleteTrip} ${styles.tripSideBarActions}`} data-status="Complete">
          <i className="fa-regular fa-circle-check text-white"></i>
        </div>
      )}
      <div className={`${styles.actionCloneTrip} ${styles.tripSideBarActions} `} clone-data="Clone">
        <i className="fa-regular fa-clone text-white"></i>
      </div>
    </section>
  );
};

export default TripSidebar;
