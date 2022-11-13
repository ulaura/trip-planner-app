import { ITrip } from "../../Types";
import Trip from "../Trip/Trip";
import styles from "./TripList.module.css";

const TripList = ({trips, deleteTrip, updateTrip, saveData}: {trips: Array<ITrip>, deleteTrip: Function, updateTrip: Function, saveData: Function}) => {

  return (
    <section className={`${styles.tripList} d-flex flex-column gap-4`}>
      {trips.map((trip: ITrip) => {
        return <Trip key={trip.id} trip={trip} deleteTrip={deleteTrip} updateTrip={updateTrip} saveData={saveData}/>;
      })}
    </section>
  );
};

export default TripList;
