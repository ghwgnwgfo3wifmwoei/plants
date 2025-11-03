import { mockData, type Plant } from "./api";
import { useEffect, useState } from "react";
import { SectionComponent } from "./components/Section/Section";

import dayjs, { Dayjs } from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export interface Section {
  id: number;
  title: string;
  statusMessage: string;
  editable: boolean;
  sortable: boolean;
  maintenanceDeadline: Dayjs;
}

const sectionsConfig: Section[] = [
  {
    id: 1,
    title: "Today",
    statusMessage: "plants need you!",
    editable: true,
    sortable: false,
    maintenanceDeadline: dayjs(),
  },
  {
    id: 2,
    title: "This week",
    statusMessage: "more plants need you this week",
    editable: false,
    sortable: false,
    maintenanceDeadline: dayjs().add(7, "day"),
  },
  {
    id: 3,
    title: "Your plants",
    statusMessage: "plants",
    editable: false,
    sortable: true,
    maintenanceDeadline: dayjs().add(9999, "day"),
  },
];

function App() {
  const [data, setData] = useState<Plant[]>([]);
  const [sessionData, setSessionData] = useState<Plant[]>([]);

  useEffect(() => {
    setData(mockData);
    setSessionData(mockData);
  }, []);

  return (
    <div className="container">
      {sectionsConfig.map((config) => (
        <SectionComponent
          key={config.id}
          config={config}
          data={data}
          sessionData={sessionData}
          setData={setData}
          setSessionData={setSessionData}
        />
      ))}
    </div>
  );
}

export default App;
