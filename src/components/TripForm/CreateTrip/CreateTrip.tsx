import { useState } from "react";
import { Continents, ITrip, TravelWay, TripStatus } from "../../../Types";
import { IMAGE_PLACEHOLDER } from "../../../Constants";
import { useAuth } from "../../../context/AuthenticationContext";
import styles from "./CreateTrip.module.css";

const TripForm = ({formTitle, trip, submitForm }: {formTitle: string, trip?: ITrip, submitForm: Function}) => {
  const [locationName, setLocationName] = useState<string>(trip ? trip.locationName : "");
  const [country, setCountry] = useState<string>(trip ? trip.country : "");
  const [continent, setContinent] = useState<string>(trip ? trip.continent : "");
  const [totalCosts, setTotalCosts] = useState<number>(trip ? trip.totalCosts : 0);
  const [dateFrom, setDateFrom] = useState<string>(trip ? trip.dateFrom : "");
  const [dateTo, setDateTo] = useState<string>(trip ? trip.dateTo : "");
  const [image, setImage] = useState<string>(trip ? trip.image : "");

  const [submitPending, setSubmitPending] = useState(false);
  const {user} = useAuth();

  const handleSubmitForm =async (event: any) => {
    event.preventDefault();

    setSubmitPending(true);

    const newTrip: ITrip = {
      userId: user?.uid!,
      locationName: locationName,
      country: country,
      continent:continent ? continent : Continents.EUROPE,
      travelWays: [...event.target.travelWay].filter(tw => tw.checked).map(tw => tw.value),
      totalCosts: totalCosts,
      dateFrom: dateFrom,
      dateTo: dateTo,
      image: image || IMAGE_PLACEHOLDER,
      status: TripStatus.UNCOMPLETED,
    };
    trip && (newTrip.id = trip?.id);
    await submitForm(newTrip);

    setSubmitPending(false);
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.createNewTrip}>
      <header>
        <h2 className={styles.formTitle}>{formTitle}</h2>
      </header>
      <input
        value={locationName}
        onChange={(event) => setLocationName(event.target.value)}
        type="text"
        name="destintion"
        id="destination"
        placeholder="Destination"
        autoComplete="off"
        required
      />

      <div className={styles.countryContinentCnt}>
        <input value={country} onChange={(event) => setCountry(event.target.value)} 
        type="text" name="country" id="country" 
        placeholder="Country" autoComplete="off"
        required/>
        <select 
        name="continents" 
        id="continents"
        value={continent} 
        onChange={(event) => setContinent(event.target.value)}>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Australia">Australia</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      </div>

      <div className={`${styles.dateCnt} ${styles.splitCnt}`}>
        <input value={dateFrom} onChange={(event) => setDateFrom(event.target.value)} type="date" name="dateFrom" id="dateFrom" required/>
        <input value={dateTo} onChange={(event) => setDateTo(event.target.value)} type="date" name="dateTo" id="dateTo" required/>
      </div>
      <div className={styles.splitCnt}>
      <input
      value={totalCosts}
      onChange={event => setTotalCosts(Number(event.target.value))}
        type="number"
        name="totalCosts"
        id="totalCosts"
        placeholder="$Total Costs"
        min={0}
      />
      <input  value={image} onChange={(event) => setImage(event.target.value)} type="text" name="imageUrl" placeholder="Image URL" autoComplete="off"/>
      </div>
      <section className={styles.meansOfTransportationCnt}>
        <header>
          <h4 className="title">Travel With</h4>
        </header>
        <article className={styles.meansOfTransportation}>
          <div>
            <label htmlFor="car">Car</label>
            <input type="checkbox" defaultChecked={trip?.travelWays.some(way => way === TravelWay.CAR)} value="Car" name="travelWay" id="car" />
          </div>
          <div>
            <label htmlFor="train">Train</label>
            <input type="checkbox" defaultChecked={trip?.travelWays.some(way => way === TravelWay.TRAIN)} value="Train" name="travelWay" id="train" />
          </div>
          <div>
            <label htmlFor="bus">Bus</label>
            <input type="checkbox" defaultChecked={trip?.travelWays.some(way => way === TravelWay.BUS)} value="Bus" name="travelWay" id="bus" />
          </div>
          <div>
            <label htmlFor="plane">Plane</label>
            <input type="checkbox" defaultChecked={trip?.travelWays.some(way => way === TravelWay.PLANE)} value="Plane" name="travelWay" id="plane" />
          </div>
        </article>
      </section>
      <div className={styles.formBtnCnt}>
        <button disabled={submitPending} className={`${styles.createNewTripFormBtn} ${styles.submit}`} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TripForm;
