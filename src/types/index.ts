type Status = "init" | "running" | "completed";

export interface ConfigurationState {
    numOfSlices: number;
    slicePercentage: number;
    counter: number;
    intervalId: number;
    sequence: string[];
    color: string;
    status: Status;
    userInput: string;
}

export interface Action {
    type: string;
    payload?: any;
}

export const ConfActionTypes = {
    SET_DATA: "SET_DATA",
    SET_SLICES_QUANTITY: "SET_SLICES_QUANTITY",
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    RESET_COUNTER: "RESET_COUNTER",
    SET_INTERVAL_ID: "SET_INTERVAL_ID",
    SET_USER_INPUT: "SET_USER_INPUT",
};