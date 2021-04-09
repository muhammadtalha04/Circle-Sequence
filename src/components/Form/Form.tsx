import React from 'react';
import { UserInput } from '../../constants';
import { useConfigurationContext } from '../../contexts/ConfigurationContext';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Div, UserInputWrapper } from './Style';

interface FormProps {
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFormSubmit: React.MouseEventHandler<HTMLButtonElement>;
}

const Form: React.FC<FormProps> = ({ onInputChange, onFormSubmit }) => {
    const { state } = useConfigurationContext();

    return (
        <UserInputWrapper>
            <Div>
                <Input value={state.userInput} placeholder={UserInput} changeValue={onInputChange} />
            </Div>
            <Div>
                <Button text={"Submit"} onButtonClick={onFormSubmit} />
            </Div>
        </UserInputWrapper>
    );
}

export default Form;