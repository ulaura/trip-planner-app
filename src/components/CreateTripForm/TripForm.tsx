import { TripStatus } from "../../Types";
import { IMAGE_PLACEHOLDER } from "../../Constants";
import styles from "./TripForm.module.css";
import { useState } from "react";

const TripForm = ({ saveData }: { saveData: Function }) => {

  const [savePending, setSavePending] = useState(false);

  const handleSubmitForm =async (event: any) => {
    event.preventDefault();

    setSavePending(true);

    const target = event.target;
    const trip = {
      locationName: target.destination.value,
      country: target.country.value,
      continent: [...target.continents].find((continent) => continent.selected).value,
      travelWays: [...target.travelWay].filter((tw) => tw.checked).map((tw) => tw.value),
      totalCosts: target.totalCosts.value,
      dateFrom: target.dateFrom.value,
      dateTo: target.dateTo.value,
      image: target.imageUrl.value || IMAGE_PLACEHOLDER,
      status: TripStatus.UNCOMPLETED,
    };
    await saveData(trip);

    setSavePending(false);
  };

  return (
    <form onSubmit={handleSubmitForm} className={styles.createNewTrip}>
      <header>
        <h2 className={styles.formTitle}>Add new trip plan</h2>
      </header>
      <input
        type="text"
        name="destintion"
        id="destination"
        placeholder="Destination"
      />

      <div className={styles.countryContinentCnt}>
        <input type="text" name="country" id="country" placeholder="Country" />
        <select defaultValue="Continent" name="continents" id="continents">
          <option disabled hidden className="text-muted">
            Continent
          </option>
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
        <input type="date" name="dateFrom" id="dateFrom" />
        <input type="date" name="dateTo" id="dateTo" />
      </div>
      <div className={styles.splitCnt}>
      <input
        type="number"
        name="totalCosts"
        id="totalCosts"
        placeholder="$Total Costs"
        min={0}
      />
      <input type="text" name="imageUrl" placeholder="Image URL" />
      </div>
      <section className={styles.meansOfTransportationCnt}>
        <header>
          <h4 className="title">Travel With</h4>
        </header>
        <article className={styles.meansOfTransportation}>
          <div>
            <label htmlFor="car">Car</label>
            <input type="checkbox" value="Car" name="travelWay" id="car" />
          </div>
          <div>
            <label htmlFor="train">Train</label>
            <input type="checkbox" value="Train" name="travelWay" id="train" />
          </div>

          <div>
            <label htmlFor="bus">Bus</label>
            <input type="checkbox" value="Bus" name="travelWay" id="bus" />
          </div>

          <div>
            <label htmlFor="plane">Plane</label>
            <input type="checkbox" value="Plane" name="travelWay" id="plane" />
          </div>
        </article>
      </section>
      <div className={styles.formBtnCnt}>
        <button disabled={savePending} className="createNewTripFormBtn submit" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default TripForm;
