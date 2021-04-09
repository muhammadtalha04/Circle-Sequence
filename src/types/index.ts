type Status = "init" | "running" | "completed";
type PopupType = "correct" | "wrong" | "";

export interface ConfigurationState {
    numOfSlices: number;
    slicePercentage: number;
    counter: number;
    intervalId: number;
    sequence: string[];
    color: string;
    status: Status;
    userInput: string;
    popupText: string;
    popupType: PopupType;
}

export interface Action {
    type: string;
    payload?: any;
}

export const ConfActionTypes = {
    SET_DATA: "SET_DATA",
    INCREMENT_LEVEL: "INCREMENT_LEVEL",
    RESET_LEVEL: "RESET_LEVEL",
    INCREMENT_COUNTER: "INCREMENT_COUNTER",
    RESET_COUNTER: "RESET_COUNTER",
    SET_USER_INPUT: "SET_USER_INPUT",
};