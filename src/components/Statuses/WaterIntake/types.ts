export interface IPointWater {
  title: string;
  value: number;
}

export interface IWaterIntakeProps {
  data?: IPointWater[];
  liters: number;
}
