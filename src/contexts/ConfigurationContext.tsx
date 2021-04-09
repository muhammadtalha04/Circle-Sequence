import { createContext, Dispatch, useContext, useReducer } from 'react';
import { configurationReducer } from '../reducers/ConfigurationReducer';
import { Action, ConfigurationState } from '../types';

interface ConfigurationContextType {
    state: ConfigurationState,
    dispatch: Dispatch<Action>
}

const initialState: ConfigurationContextType = {
    state: {
        numOfSlices: 0,
        slicePercentage: 0,
        counter: 0,
        intervalId: -1,
        color: "blue",
        sequence: [],
        status: "init",
        userInput: "",
    },
    dispatch: () => undefined
};

const ConfigurationContext = createContext<ConfigurationContextType>(initialState);

interface ConfigurationContextProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const ConfigurationProvider: React.FC<ConfigurationContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(configurationReducer, initialState.state);

    return (
        <ConfigurationContext.Provider value={{ state, dispatch }}>
            {children}
        </ConfigurationContext.Provider>
    )
}

export const useConfigurationContext = () => useContext(ConfigurationContext);