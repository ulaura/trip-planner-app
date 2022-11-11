export interface ITrip {
    id: string;
    locationName: string;
    country: string;
    continent: string;
    image: string;
    travelWays: Array<TravelWay>,
    totalCosts: number;
    dateFrom: string;
    dateTo: string;
    status: TripStatus;
  }

  export enum TripStatus {
    COMPLETED="Completed",
    UNCOMPLETED="Uncompleted"
  }

  export enum ModalType {
    DANGER="danger",
    SUCCESS="success"
  }
  
  export enum TravelWay {
    CAR="Car",
    TRAIN="Train",
    BUS="Bus",
    PLANE="Plane"
  }