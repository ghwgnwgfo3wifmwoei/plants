import { CheckIcon, GroundIcon, WaterIcon } from "../Icons";
import { IconButton } from "./Button";

import styles from "./plant.module.css";

export const Plant = () => {
  return (
    <div className={styles.plantWrapper}>
      <div className={styles.plantContainer}>
        <div className={styles.iconsContainer}>
          <WaterIcon />
          <GroundIcon />
        </div>
        <div className={styles.textContainer}>
          <h2>Plant name</h2>
          <h3>Plant desc</h3>
          <span>Water</span>
          <span>Fertilize</span>
        </div>
      </div>
      <IconButton>
        <CheckIcon />
      </IconButton>
    </div>
  );
};
