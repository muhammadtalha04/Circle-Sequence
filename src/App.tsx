import React, { useCallback, useEffect } from 'react';
import Circle from './components/Circle/Circle';
import InfoPanel from './components/InfoPanel/InfoPanel';
import { useConfigurationContext } from './contexts/ConfigurationContext';
import { ConfActionTypes } from './types';
import { generateSequence, matchSequences } from './utils';

const App: React.FC = () => {
	const { state, dispatch } = useConfigurationContext();
	const numOfSlices = 8;

	// Starts the interval
	const startSequence = useCallback(() => {
		const seq: string[] = generateSequence(state.numOfSlices);

		const intervalId = setInterval(() => {
			dispatch({ type: ConfActionTypes.INCREMENT_COUNTER })
		}, 1000);

		dispatch({ type: ConfActionTypes.SET_DATA, payload: { intervalId: intervalId, sequence: seq, status: "running", userInput: "" } });
	}, [state.numOfSlices, dispatch]);
	// --------------------------------------------------------

	// User input change event handler
	const onUserInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: ConfActionTypes.SET_USER_INPUT, payload: { userInput: event.target.value } });
	}, [dispatch]);
	// --------------------------------------------------------

	// User input change event handler
	const onFormSubmit = useCallback(() => {
		const userSequence: string[] = state.userInput.split(",");

		if (userSequence.length !== state.numOfSlices) {
			alert("Please enter the full sequence");
		} else {
			const result = matchSequences(state.sequence, userSequence);

			if (result) {
				alert("Congratulations! You entered the correct sequence");
			} else {
				alert("Try again");
			}
		}
	}, [state.userInput, state.numOfSlices, state.sequence]);
	// --------------------------------------------------------

	// Called on mount
	useEffect(() => {
		// Sets default values
		dispatch({
			type: ConfActionTypes.SET_DATA,
			payload: {
				numOfSlices: numOfSlices,
				slicePercentage: 1 / numOfSlices,
				counter: 0,
				intervalId: -1,
				color: "red",
				sequence: [],
				status: "init"
			}
		})
	}, [dispatch]);
	// --------------------------------------------------------

	return (
		<React.Fragment>
			<Circle />

			<InfoPanel
				clickStartSequence={startSequence}
				onInputChange={onUserInputChange}
				onFormSubmit={onFormSubmit}
			/>
		</React.Fragment>
	);
}

export default App;
