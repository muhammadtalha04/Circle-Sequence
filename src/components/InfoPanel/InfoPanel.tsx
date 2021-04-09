import React from 'react';
import { Loading } from '../../constants';
import { useConfigurationContext } from '../../contexts/ConfigurationContext';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Text from '../Text/Text';
import { PanelWrapper } from './Style';

interface InfoPanelProps {
    clickStartSequence: React.MouseEventHandler<HTMLButtonElement>;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ clickStartSequence, onInputChange, onFormSubmit }) => {
    const { state } = useConfigurationContext();

    return (
        <PanelWrapper>
            {
                state.status === "init" &&
                (
                    <Button text={"Start"} onButtonClick={clickStartSequence} />
                )
            }
            {
                state.status === "running" &&
                (
                    <Text text={Loading} fontSize={"12"} />
                )
            }
            {
                state.status === "completed" &&
                (
                    <Form
                        onInputChange={onInputChange}
                        onFormSubmit={onFormSubmit}
                    />
                )
            }
        </PanelWrapper>
    );
}

export default InfoPanel;