import TripList from "./components/TripList/TripList";
import styles from "./App.module.css";


const App = () => {
  return (
    <section className={styles.homePage}>
      <TripList />
    </section>
  );
};

export default App;
