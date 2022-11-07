import PageFooter from "./components/Layout/PageFooter/PageFooter";
import PageHeader from "./components/Layout/PageHeader/PageHeader";
import Trip from "./components/Trip/Trip";
import styles from "./App.module.css";
import { ITrip, TripStatus } from "./Types";
import TripList from "./components/TripList/TripList";

//TODO: connect firebase
// TODO: read documentation about context api for login authentication with firebase

const App = () => {
  return (
    <>
      <TripList />
    </>
  );
};

export default App;
