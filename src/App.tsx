import { useEffect, useReducer, useState } from "react";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { ITrip } from "./Types";
import { firestoreDatabase } from "./services/FirebaseService";
import TripForm from "./components/CreateTripForm/TripForm";
import Modal from "./components/Reusable/Modal/Modal";
import CrossButton from "./components/Reusable/Buttons/CrossButton/CrossButton";
import TripList from "./components/TripList/TripList";
import styles from "./App.module.css";


const App = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [trips, setTrips] = useState<Array<ITrip>>([]);
  const [tripUpdateCount, incrementTripUpdateCount] = useReducer((x) => x + 1, 0);
 
  const deleteTripHandler = async (tripId: string) => {
    const tripDoc = doc(firestoreDatabase, "trips", tripId);
    await deleteDoc(tripDoc);
    incrementTripUpdateCount();
  }

  const updateTripHandler = (tripId: string, data: any) => {
    const tripDoc = doc(firestoreDatabase, "trips", tripId);
    updateDoc(tripDoc, data);
    incrementTripUpdateCount();
  };

  useEffect(() => {
    const getData = async () => {
      const coll = collection(firestoreDatabase, "trips");
      const response = await getDocs(coll);

        const listOfTrips = response.docs.map(doc => {
            const id = doc.id;
            const data = doc.data();
            return { id, ...data } as ITrip;
        });
        setTrips(listOfTrips);
    };

    getData();
  }, [tripUpdateCount]);


  const displayFormHandler = () => {
    setDisplayForm(true);
  }

  return (
    <section className={styles.homePage}>
      <CrossButton handleClick={displayFormHandler}/>
        <Modal modalVisible={displayForm} changeVisibility={setDisplayForm}>
          <TripForm/>
        </Modal>
      <TripList trips={trips} deleteTrip={deleteTripHandler} updateTrip={updateTripHandler}/>
    </section>
  );
};

export default App;
