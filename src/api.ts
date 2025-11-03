import dayjs, { Dayjs } from "dayjs";

export interface Plant {
  id: number;
  name: string;
  description: string;
  imageName: string;
  maintenance: Maintenance[];
}

export interface Maintenance {
  type: string;
  deadline: Dayjs;
  interval_days: number;
}

export const mockData: Plant[] = [
  {
    id: 1,
    name: "Jenny",
    description: "Peace lily",
    imageName: "jenny.jpg",
    maintenance: [
      {
        type: "Water",
        deadline: dayjs(),
        interval_days: 7,
      },
    ],
  },
  {
    id: 2,
    name: "Poppy",
    description: "Money tree",
    imageName: "poppy.jpg",
    maintenance: [
      {
        type: "Water",
        deadline: dayjs().add(7, "day"),
        interval_days: 8,
      },
      {
        type: "Fertilize",
        deadline: dayjs(),
        interval_days: 7,
      },
    ],
  },
  {
    id: 3,
    name: "Pam 2",
    description: "Spider plant",
    imageName: "pam2.jpg",
    maintenance: [
      {
        type: "Water",
        deadline: dayjs(),
        interval_days: 7,
      },
      {
        type: "Fertilize",
        deadline: dayjs(),
        interval_days: 7,
      },
    ],
  },
  {
    id: 4,
    name: "Larry",
    description: "Monstera deliciosa",
    imageName: "larry.jpg",
    maintenance: [
      {
        type: "Water",
        deadline: dayjs().add(1, "day"),
        interval_days: 14,
      },
    ],
  },
  {
    id: 5,
    name: "Pam",
    description: "Monstera deliciosa",
    imageName: "pam2.jpg",
    maintenance: [
      {
        type: "Water",
        deadline: dayjs().add(23, "day"),
        interval_days: 50,
      },
      {
        type: "Fertilize",
        deadline: dayjs().add(15, "day"),
        interval_days: 14,
      },
    ],
  },
  {
    id: 6,
    name: "Bonnie",
    description: "Spider plant",
    imageName: "bonnie.jpg",
    maintenance: [
      {
        type: "Water",
        deadline: dayjs().add(2, "day"),
        interval_days: 7,
      },
      {
        type: "Fertilize",
        deadline: dayjs().add(9, "day"),
        interval_days: 10,
      },
    ],
  },
];
