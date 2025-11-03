import { useMemo } from "react";
import { type Plant } from "../../api";
import type { Section } from "../../App";
import { PlantComponent } from "../Plant/Plant";
import styles from "./section.module.css";
import { Button } from "../Button/Button";

export const SectionComponent = ({
  config,
  data,
  sessionData,
  setData,
  setSessionData,
}: {
  config: Section;
  data: Plant[];
  sessionData: Plant[];
  setData: React.Dispatch<React.SetStateAction<Plant[]>>;
  setSessionData: React.Dispatch<React.SetStateAction<Plant[]>>;
}) => {
  const { id, title, statusMessage, editable, sortable, maintenanceDeadline } =
    config;

  const filteredData = useMemo(() => {
    if (id === 1) {
      return data.filter((item) => {
        return item.maintenance.some((s) =>
          maintenanceDeadline.diff(s.deadline) === 1 ? true : false
        );
      });
    }

    if (id === 2) {
      return data.filter((item) => {
        return item.maintenance.some((s) =>
          s.deadline.diff(maintenanceDeadline, "day") < 0 ? true : false
        );
      });
    }

    return data;
  }, [data, id, maintenanceDeadline]);

  const onUpdateFinish = () => setData(sessionData);

  return (
    <div className={styles.section}>
      <h1>{title}</h1>

      {filteredData.length === 0 ? (
        <h1>All good!</h1>
      ) : (
        <>
          <p>
            {filteredData.length} {statusMessage}
          </p>
          <div className={styles.row}>
            {filteredData.map((plant) => (
              <PlantComponent
                key={plant.id}
                plant={plant}
                isEditable={editable}
                setSessionData={setSessionData}
              />
            ))}
          </div>
          {editable ? (
            <div className={styles.buttonContainer}>
              <Button onClick={onUpdateFinish}>Finished?</Button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
