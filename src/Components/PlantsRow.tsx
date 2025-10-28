import { Plant } from "./Plant";
import styles from "./plantsrow.module.css";

export const PlantsRow = () => {
  return (
    <div className={styles.plantsRow}>
      {Array.from("123456").map((item) => (
        <Plant key={item} />
      ))}
    </div>
  );
};
