import React, { useCallback, useEffect, useState } from 'react';
import Circle from './components/Circle/Circle';
import InfoPanel from './components/InfoPanel/InfoPanel';
import Popup from './components/Popup/Popup';
import { CorrectSequenceMessage, WrongSequenceMessage } from './constants';
import { useConfigurationContext } from './contexts/ConfigurationContext';
import { ConfActionTypes } from './types';
import { generateSequence, matchSequences } from './utils';

const App: React.FC = () => {
	const { state, dispatch } = useConfigurationContext();
	const [showPopup, setShowPopup] = useState(false);

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

	// Show/hide popup
	const togglePopup = useCallback(() => {
		setShowPopup(!showPopup);
	}, [showPopup]);
	// --------------------------------------------------------

	// User input change event handler
	const onFormSubmit = useCallback(() => {
		const userSequence: string[] = state.userInput.split(",");

		if (userSequence.length !== state.numOfSlices) {
			alert("Please enter the full sequence");
		} else {
			const result = matchSequences(state.sequence, userSequence);

			if (result) {
				dispatch({ type: ConfActionTypes.SET_DATA, payload: { popupText: CorrectSequenceMessage, popupType: "correct" } });
				togglePopup();
			} else {
				dispatch({ type: ConfActionTypes.SET_DATA, payload: { popupText: WrongSequenceMessage, popupType: "wrong" } });
				togglePopup();
			}
		}
	}, [state.userInput, state.numOfSlices, state.sequence, dispatch, togglePopup]);
	// --------------------------------------------------------

	// Reset levels
	const onResetLevelsClick = useCallback(() => {
		dispatch({ type: ConfActionTypes.RESET_LEVEL });
		togglePopup();
	}, [dispatch, togglePopup]);
	// --------------------------------------------------------

	// Continue
	const onContinueClick = useCallback(() => {
		dispatch({ type: ConfActionTypes.INCREMENT_LEVEL });
		togglePopup();
	}, [dispatch, togglePopup]);
	// --------------------------------------------------------

	// Called on mount
	useEffect(() => {
		// Sets default values
		dispatch({ type: ConfActionTypes.RESET_LEVEL });
	}, [dispatch]);
	// --------------------------------------------------------

	return (
		<React.Fragment>
			{
				showPopup &&
				(
					<Popup
						resetLevels={onResetLevelsClick}
						tryAgain={togglePopup}
						onClickContinue={onContinueClick}
					/>
				)
			}

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
