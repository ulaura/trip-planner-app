export const TRIPS = "trips";

export const DELETE_CONFIRMATION_TITLE = "Delete";
export const DELETE_CONFIRMATION_MESSAGE = "Are you sure you want to delete this item?" + "\n" + "You cannot undo this action.";
export const COMPLETE_TRIP_CONFIRMATION_TITLE = "Complete";
export const COMPLETE_TRIP_CONFIRMATION_MESSAGE = "Are you sure you want to update this trip?";

export const IMAGE_PLACEHOLDER=  "https://saint-marks.org/wp-content/uploads/2016/05/placeholder.gif";

export const ADD_NEW_TRIP_TITLE= "Add new trip";
export const UPDATE_TRIP_TITLE= "Update trip";

export const AUTH_ERROR_MESSAGE=[
    {
        code: "auth/invalid-email",
        message: "Invalid email. Please check your email."
    },
    {
        code: "auth/wrong-password",
        message: "Wrong password! Please provide a valid password."
    },
    {
        code: "auth/weak-password",
        message: "Password should be at least 6 characters."
    },
    {
        code: "auth/email-already-in-use",
        message: "Provided email is already in use."
    },
    {
        code: "auth/user-not-found",
        message: "User does not exists."
    }
]