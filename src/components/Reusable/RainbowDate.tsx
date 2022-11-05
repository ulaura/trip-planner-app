import styles from "./RainbowDate.module.css";

const getDateForYearMonthDayLineFormat = (date: string) => {
  const objectDate = new Date(date);
  const month = objectDate.toLocaleString("en-US", { month: "short" });
  const day = objectDate.toLocaleString("en-US", { day: "2-digit" });
  const year = objectDate.getFullYear();

  return {
    month,
    day,
    year,
  };
};

const RainbowDate = ({ date }: { date: string }) => {
  const { month, day, year } = getDateForYearMonthDayLineFormat(date);
  return (
    <article className={styles.rainbowDate}>
      <small className={`${styles.gridItem} ${styles.headerMonthColor} ${styles.headerFontSize}`}>MONTH</small>
      <small className={`${styles.gridItem} ${styles.headerDayColor} ${styles.headerFontSize}`}>DAY</small>
      <small className={`${styles.gridItem} ${styles.headerYearColor} ${styles.headerFontSize}`}>YEAR</small>

      <div className={`${styles.gridItem} ${styles.monthValueColor}`}>{month}</div>
      <div className={`${styles.gridItem} ${styles.dayValueColor}`}>{day}</div>
      <div className={`${styles.gridItem} ${styles.yearValueColor}`}>{year}</div>
    </article>
  );
};

export default RainbowDate;
