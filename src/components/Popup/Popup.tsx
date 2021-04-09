import React from 'react';
import { useConfigurationContext } from '../../contexts/ConfigurationContext';
import { ModalContent, ModalDiv, TextWrapper } from './Style';
import Text from '../Text/Text';
import Button from '../Button/Button';
import { Continue, Reset, TryAgain } from '../../constants';

interface PopupProps {
    tryAgain: React.MouseEventHandler<HTMLButtonElement>;
    resetLevels: React.MouseEventHandler<HTMLButtonElement>;
    onClickContinue: React.MouseEventHandler<HTMLButtonElement>;
}

const Popup: React.FC<PopupProps> = ({ tryAgain, resetLevels, onClickContinue }) => {
    const { state } = useConfigurationContext();

    return (
        <ModalDiv>
            <ModalContent>
                <TextWrapper>
                    <Text text={state.popupText} fontSize="14" strong={true} />
                </TextWrapper>

                {
                    state.popupType === "correct" &&
                    (
                        <Button text={Continue} onButtonClick={onClickContinue} />
                    )
                }

                {
                    state.popupType === "wrong" &&
                    (
                        <React.Fragment>
                            <Button text={TryAgain} onButtonClick={tryAgain} />
                            <Button text={Reset} onButtonClick={resetLevels} />
                        </React.Fragment>
                    )
                }
            </ModalContent>
        </ModalDiv>
    );
}

export default Popup;