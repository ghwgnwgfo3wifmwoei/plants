import { CheckIcon, GroundIcon, WaterIcon } from "../Icons";
import { IconButton } from "./Button";
import styles from "./plant.module.css";

export const Plant = () => {
  return (
    <div className={styles.plantContainer}>
      <div className={styles.iconsContainer}>
        <WaterIcon />
        <GroundIcon />
      </div>
      <div className={styles.infoContainer}>
        <h2>Plant name</h2>
        <span>Plant desc</span>
        <span>Water</span>
        <span>Fertilize</span>
      </div>
      <IconButton>
        <CheckIcon />
      </IconButton>
    </div>
  );
};
