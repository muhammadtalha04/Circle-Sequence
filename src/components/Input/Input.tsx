import React from 'react';
import { InputElement } from './Style';

interface InputProps {
    value: string;
    placeholder: string;
    changeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, placeholder, changeValue }) => {
    return (
        <InputElement value={value} onChange={changeValue} placeholder={placeholder} />
    );
}

export default Input;