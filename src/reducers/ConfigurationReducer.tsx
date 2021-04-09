import { Action, ConfigurationState, ConfActionTypes } from '../types';

export const configurationReducer = (state: ConfigurationState, action: Action) => {
    switch (action.type) {
        case ConfActionTypes.SET_DATA:
            return { ...state, ...action.payload };

        case ConfActionTypes.SET_SLICES_QUANTITY:
            return { ...state, numOfSlices: action.payload.numOfSlices };

        case ConfActionTypes.SET_INTERVAL_ID:
            return { ...state, intervalId: action.payload.intervalId };

        case ConfActionTypes.INCREMENT_COUNTER:
            return { ...state, counter: state.counter + 1 };

        case ConfActionTypes.RESET_COUNTER:
            return { ...state, counter: 0, intervalId: -1, status: "completed" };

        case ConfActionTypes.SET_USER_INPUT:
            return { ...state, userInput: action.payload.userInput };

        default:
            return { ...state };
    }
}