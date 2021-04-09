import React from 'react';
import { TextElement } from './Style';

interface TextProps {
    text: string;
    fontSize: string;
}

const Text: React.FC<TextProps> = ({ text, fontSize }) => {
    return (
        <TextElement fontSize={fontSize}>
            {text}
        </TextElement>
    );
}

export default Text;