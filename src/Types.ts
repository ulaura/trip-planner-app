import { User, UserCredential } from "firebase/auth";

export interface ITrip {
    id?: string;
    locationName: string;
    country: string;
    continent: string;
    image: string;
    travelWays: Array<TravelWay>,
    totalCosts: number;
    dateFrom: string;
    dateTo: string;
    status: TripStatus;
    userId: string;
  }

 export interface IAuthContext {
    user: undefined | null | User,
    isLoggedIn: boolean,
    signin: Function,
    logout: Function,
    signup: Function
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

  export enum NavRoute {
    HOME="/",
    SIGNIN="/signin",
    SIGNUP="/signup",
    LOGOUT="/logout"
  }
