import React from 'react';
import { TextElement } from './Style';

interface TextProps {
    text: string;
    fontSize: string;
    strong?: boolean;
}

const Text: React.FC<TextProps> = ({ text, fontSize, strong }) => {
    return (
        <TextElement fontSize={fontSize} strong={strong}>
            {text}
        </TextElement>
    );
}

export default Text;