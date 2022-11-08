import { ITrip } from "../../Types";
import RainbowDate from "../Reusable/RainbowDate";
import TripSidebar from "../TripSidebar/TripSidebar";
import styles from "./Trip.module.css";

//TODO: add media style for trip component
//TODO: add prettier or eslint to project

const Trip = ({ trip }: { trip: ITrip }) => {

  return (
    <article className="bg-transparent d-flex flex-row-reverse justify-content-end">
      <TripSidebar status={trip.status}/>
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
