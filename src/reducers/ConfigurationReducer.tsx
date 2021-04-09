import { sliceColor } from '../colors';
import { Action, ConfigurationState, ConfActionTypes } from '../types';

export const configurationReducer = (state: ConfigurationState, action: Action) => {
    switch (action.type) {
        case ConfActionTypes.SET_DATA:
            return {
                ...state,
                ...action.payload
            };

        case ConfActionTypes.INCREMENT_LEVEL:
            return {
                ...state,
                numOfSlices: state.numOfSlices + 1,
                slicePercentage: 1 / (state.numOfSlices + 1),
                counter: 0,
                intervalId: -1,
                color: `${sliceColor}`,
                sequence: [],
                status: "init"
            };

        case ConfActionTypes.RESET_LEVEL:
            return {
                ...state,
                numOfSlices: 1,
                slicePercentage: 1 / 1,
                counter: 0,
                intervalId: -1,
                color: `${sliceColor}`,
                sequence: [],
                status: "init"
            };

        case ConfActionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };

        case ConfActionTypes.RESET_COUNTER:
            return {
                ...state,
                counter: 0,
                intervalId: -1,
                status: "completed"
            };

        case ConfActionTypes.SET_USER_INPUT:
            return {
                ...state,
                userInput: action.payload.userInput
            };

        default:
            return { ...state };
    }
}