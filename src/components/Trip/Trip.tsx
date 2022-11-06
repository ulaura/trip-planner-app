
import { ITrip, TripStatus } from "../../Types";
import RainbowDate from "../Reusable/RainbowDate";
import styles from "./Trip.module.css";

//TODO: move sidebard icons to a separate component (TripSideBar)
//TODO: add media style for trip component
//TODO: add colors to sidebar icons

const Trip = ({ trip }: { trip: ITrip }) => {

  const tripCompleted = trip.status === TripStatus.COMPLETED;

  return (
    <article className="bg-transparent d-flex flex-row-reverse justify-content-end">
      <div className={styles.tripActionSideBar}>
        <div className={`${styles.actionDeleteTrip} ${styles.tripSideBarActions}`} delete-data="Delete">
          <i className="fa-solid fa-trash text-white"></i>
        </div>
        { !tripCompleted &&
        <div className={ `${styles.actionEditTrip} ${styles.tripSideBarActions}`} edit-data="Edit">
          <i className="fa-sharp fa-solid fa-pen-to-square text-white"></i>
        </div>
        }
        { !tripCompleted &&
        <div className={`${styles.actionCompleteTrip} ${styles.tripSideBarActions}`} data-status="Complete">
          <i className="fa-regular fa-circle-check text-white"></i>
        </div>
        }
        <div className={`${styles.actionCloneTrip} ${styles.tripSideBarActions} `} clone-data="Clone">
        <i className="fa-regular fa-clone text-white"></i>
        </div>
      </div>

      <div className="bg-white w-100 px-4">
        <header>
          <h2 className="fw-bold m-0">{trip.locationName}</h2>
        </header>
        <section>
          <p className="m-0 fs-5 fw-bold text-secondary">
            {trip.continent} / {trip.country}
          </p>
          <h6 className="d-flex">
            <i className="fa-solid fa-circle-info"></i>
          </h6>
          <p className="m-0">
            <span>Travel with: </span>
            {trip.travelWays
              .map((travelWay: string) => {
                const meansOfTravel =
                  (travelWay === "Car" && <span>Car <i className="fa-solid fa-car"></i></span>) ||
                  (travelWay === "Train" && <span>Train <i className="fa-solid fa-train"></i></span>) ||
                  (travelWay === "Bus" && <span>Bus <i className="fa-solid fa-bus"></i></span>) ||
                  (travelWay === "Plane" && <span>Plane <i className="fa-solid fa-plane-arrival"></i></span>);
                return meansOfTravel;
              }).reduce((result, travelWay) => (<>{result} -- {travelWay}</>))}
          </p>
          <p className="m-0">Total Costs: ${trip.totalCosts}</p>
          <div>
            <span>
              Start:<span> <RainbowDate date={trip.dateFrom}/></span>
            </span>
          </div>
          <div>
            <span>
              End:<span> <RainbowDate date={trip.dateTo}/></span>
            </span>
          </div>
          <h6 className="d-flex m-0 py-1 text-secondary">{trip.status}</h6>
        </section>
      </div>
      <img className={styles.tripImage} src={trip.image} alt={`${trip.locationName}`}/>
    </article>
  );
};

export default Trip;
