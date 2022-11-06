import PageFooter from "./components/PageFooter/PageFooter";
import PageHeader from "./components/PageHeader/PageHeader";
import Trip from "./components/Trip/Trip";
import styles from "./App.module.css";
import { ITrip, TripStatus } from "./Types";

const TRIPS_LIST = [
  {
    id: "e1",
    locationName: "Hallstatt",
    country: "Italy",
    continent: "Europe",
    image:
      "https://upload.travelawaits.com/ta/uploads/2021/04/8c9fb74e59d34c4a6689455a553758c9fb7.jpg",
    travelWays: ["Car", "Train", "Plane", "Bus"],
    totalCosts: 290,
    dateFrom: "2022-05-24",
    dateTo: "2022-06-24",
    status: "Completed" as TripStatus,
  },
  {
    id: "e2",
    locationName: "Tulum",
    country: "Mexico",
    continent: "America",
    image:
      "https://www.wanderlustchloe.com/wp-content/uploads/2022/03/things-to-do-in-Tulum-Mexico-9.jpg",
    travelWays: ["Car", "Train", "Bus"],
    totalCosts: 450,
    dateFrom: "2022-08-28",
    dateTo: "2022-09-15",
    status: "Uncompleted" as TripStatus,
  },
  {
    id: "e3",
    locationName: "Cairo",
    country: "Egypt",
    continent: "Africa",
    image:
      "https://egypttimetravel.com/wp-content/uploads/2020/06/Cairo-Egypt.jpg",
    travelWays: ["Train", "Bus", "Plane"],
    totalCosts: 720,
    dateFrom: "2022-09-17",
    dateTo: "2022-10-07",
    status: "Uncompleted" as TripStatus,
  },
  {
    id: "e4",
    locationName: "Dubrovnik",
    country: "Croatia",
    continent: "Europa",
    image:
      "https://assets.vogue.com/photos/597642e77563be3e6b400a90/master/w_2560%2Cc_limit/00-lede-dubrovnik-croatia-travel-guide.jpg",
    travelWays: ["Car", "Train", "Bus", "Plane"],
    totalCosts: 340,
    dateFrom: "2022-02-12",
    dateTo: "2022-04-18",
    status: "Completed" as TripStatus,
  },
];

const App = () => {
  return (
    <section>
      <PageHeader />
      <section className={`${styles.tripList} d-flex flex-column gap-4`}>
        {TRIPS_LIST.map((trip:ITrip) => {
          return <Trip key={trip.id} trip={trip} />;
        })}
      </section>
      <PageFooter />
    </section>
  );
};

export default App;
