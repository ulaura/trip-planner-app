import { useEffect, useReducer, useState } from "react";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { ITrip } from "./Types";
import { ADD_NEW_TRIP_TITLE, TRIPS } from "./Constants";
import { firestoreDatabase } from "./services/FirebaseService";
import TripForm from "./components/TripForm/CreateTrip/CreateTrip";
import Modal from "./components/Reusable/Modal/Modal";
import CrossButton from "./components/Reusable/Buttons/CrossButton/CrossButton";
import TripList from "./components/TripList/TripList";
import { useAuth } from "./context/AuthenticationContext";
import styles from "./App.module.css";


const App = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [trips, setTrips] = useState<Array<ITrip>>([]);
  const [tripUpdateCount, incrementTripUpdateCount] = useReducer((x) => x + 1, 0);

  const {user} = useAuth();

  const deleteTripHandler = async (tripId: string) => {
    const tripDoc = doc(firestoreDatabase, TRIPS, tripId);
    await deleteDoc(tripDoc);
    incrementTripUpdateCount();
  }

  const updateTripHandler = ( data: any) => {
    const {id, ...rest} = data;
    const tripDoc = doc(firestoreDatabase, TRIPS, id);
    updateDoc(tripDoc, rest);
    incrementTripUpdateCount();
  };

  const saveDataHandler = (data: ITrip) => {
    const coll = collection(firestoreDatabase, TRIPS);
    addDoc(coll, data);
    incrementTripUpdateCount();
    setDisplayForm(false);
  };

  useEffect(() => {
    const getData = async () => {
      const coll = collection(firestoreDatabase, TRIPS);
      const tripQuery = query(coll, where("userId", "==", user?.uid));
      const response = await getDocs(tripQuery);

        const listOfTrips = response.docs.map(doc => {
            const id = doc.id;
            const data = doc.data();
            return { id, ...data } as ITrip;
        });
        setTrips(listOfTrips.reverse());
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
          <TripForm formTitle={ADD_NEW_TRIP_TITLE} submitForm={saveDataHandler}/>
        </Modal>

      <TripList trips={trips} deleteTrip={deleteTripHandler} updateTrip={updateTripHandler} saveData={saveDataHandler}/>
    </section>
  );
};

export default App;
