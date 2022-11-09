export interface ITrip {
    id: string;
    locationName: string;
    country: string;
    continent: string;
    image: string;
    travelWays: string[]
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
  