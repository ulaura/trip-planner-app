import { useState } from "react";
import { UPDATE_TRIP_TITLE } from "../../Constants";
import { ITrip, TravelWay, TripStatus } from "../../Types";
import RainbowDate from "../Reusable/Date/RainbowDate";
import Modal from "../Reusable/Modal/Modal";
import TripForm from "../TripForm/CreateTrip/CreateTrip";
import TripSidebar from "../TripSidebar/TripSidebar";
import styles from "./Trip.module.css";

//TODO: add media style for trip component
//TODO: check imports order in all components
// TODO: Use classnames package instead of string interpolation

const Trip = ({ trip, deleteTrip, updateTrip, saveData }: { trip: ITrip, deleteTrip: Function, updateTrip: Function, saveData: Function}) => {

  const [tripInEdit, setTripInEdit] = useState(false);

  const deleteTripHandler = ()=> {
    deleteTrip(trip.id);
  }

  const completeTripHandler = () => {
    updateTrip({id:trip.id, status: TripStatus.COMPLETED});
  }

  const updateTripHandler = (trip:ITrip) => {
    updateTrip(trip);
    setTripInEdit(false);
  }

  const cloneTripHandler = () => {
    const {id, ...rest} = trip;
    const tripWithoutId = rest;
    tripWithoutId.status = TripStatus.UNCOMPLETED;
    saveData(tripWithoutId);
  }

  return (
    <>
     <Modal modalVisible={tripInEdit} changeVisibility={setTripInEdit}>
      <TripForm formTitle={UPDATE_TRIP_TITLE} trip={trip} submitForm={updateTripHandler}/>
    </Modal>

      <article className="bg-transparent d-flex flex-row-reverse justify-content-end">
      <TripSidebar status={trip.status} deleteTrip={deleteTripHandler} completeTrip={completeTripHandler} cloneTrip={cloneTripHandler} editTrip={setTripInEdit}/>
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
                  (travelWay === TravelWay.CAR && <span>Car <i className="fa-solid fa-car"></i></span>) ||
                  (travelWay === TravelWay.TRAIN && <span>Train <i className="fa-solid fa-train"></i></span>) ||
                  (travelWay === TravelWay.BUS && <span>Bus <i className="fa-solid fa-bus"></i></span>) ||
                  (travelWay === TravelWay.PLANE && <span>Plane <i className="fa-solid fa-plane-arrival"></i></span>);
                return meansOfTravel;
              }).reduce((result, travelWay) =>  (<>{result} -- {travelWay}</>), <></>)}
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
          <h6 className={`d-flex m-0 py-1 text-secondary ${trip.status === TripStatus.COMPLETED ? "text-success" : "text-warning"}`}>{trip.status}</h6>
        </section>
      </div>
      <img className={styles.tripImage} src={trip.image} alt={`${trip.locationName}`}/>
    </article>
    </>
  );
};

export default Trip;
