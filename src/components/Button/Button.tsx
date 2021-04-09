import React from 'react';
import { Btn } from './Style';

interface ButtonProps {
    text: string;
    onButtonClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ text, onButtonClick }) => {
    return (
        <Btn onClick={onButtonClick}>
            {text}
        </Btn>
    );
}

export default Button;