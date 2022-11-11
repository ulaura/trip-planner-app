import styles from "./TripForm.module.css";

const TripForm = () => {

  const handleSubmitForm = (event: any) => {
    event.preventDefault();
    const target = event.target;
    const destination = target.destintion.value;
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

      <div className={styles.dateCnt}>
        <input type="date" name="dateFrom" id="dateFrom" />
        <input type="date" name="dateTo" id="dateTo" />
      </div>
      <input
        type="number"
        name="totalCosts"
        id="totalCosts"
        placeholder="$Total Costs"
      />

      <section className={styles.meansOfTransportationCnt}>
        <header>
          <h4 className="title">Travel With</h4>
        </header>
        <article className={styles.meansOfTransportation}>
          <div>
            <label htmlFor="car">Car</label>
            <input type="checkbox" value="car" name="car" id="car" />
          </div>
          <div>
            <label htmlFor="train">Train</label>
            <input type="checkbox" value="train" name="train" id="train" />
          </div>

          <div>
            <label htmlFor="bus">Bus</label>
            <input type="checkbox" value="bus" name="bus" id="bus" />
          </div>

          <div>
            <label htmlFor="plane">Plane</label>
            <input type="checkbox" value="plane" name="plane" id="plane" />
          </div>
        </article>
      </section>
      <div className={styles.formBtnCnt}>
        <button className="createNewTripFormBtn submit" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default TripForm;
