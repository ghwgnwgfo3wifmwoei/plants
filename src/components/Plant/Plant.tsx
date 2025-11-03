import { useState } from "react";
import { type Plant } from "../../api";
import { CheckIcon, GroundIcon, WaterIcon } from "../../Icons";
import { IconButton } from "../Button/Button";
import styles from "./plant.module.css";
import dayjs, { Dayjs } from "dayjs";

export const PlantComponent = ({
  plant,
  isEditable,
  setSessionData,
}: {
  plant: Plant;
  isEditable: boolean;
  setSessionData: React.Dispatch<React.SetStateAction<Plant[]>>;
}) => {
  const { id, name, description, imageName, maintenance } = plant;
  const [clicked, setClicked] = useState(false);

  const generateNextMaintenanceTime = (itemDeadline: Dayjs) => {
    if (dayjs().diff(itemDeadline) > 0) {
      return <span className={styles.blue}>NOW</span>;
    } else {
      return <span>in {itemDeadline.toNow(dayjs())}</span>;
    }
  };

  const click = () => {
    setClicked((prev) => !prev);

    setSessionData((prev) => {
      return prev.map((item) => {
        if (item.id !== id) return item;

        const updatedMaintenance = item.maintenance.map((m) => ({
          ...m,
          deadline: dayjs().add(m.interval_days, "day"),
        }));

        return { ...item, maintenance: updatedMaintenance };
      });
    });
  };

  return (
    <div className={styles.plantWrapper}>
      <div className={styles.plantContainer}>
        <img src={`/images/${imageName}`} />
        <div className={styles.iconsContainer}>
          {maintenance?.map((item) => {
            if (item.type === "Water") return <WaterIcon key={item.type} />;
            if (item.type === "Fertilize")
              return <GroundIcon key={item.type} />;
          })}
        </div>
        <div className={styles.textContainer}>
          <h2>{name}</h2>
          <h3>{description}</h3>
          {maintenance?.map((item) => (
            <span key={item.type}>
              {item.type} {generateNextMaintenanceTime(item.deadline)}
            </span>
          ))}
        </div>
      </div>
      {isEditable ? (
        <IconButton disabled={clicked} onClick={click}>
          <CheckIcon />
        </IconButton>
      ) : null}
    </div>
  );
};
