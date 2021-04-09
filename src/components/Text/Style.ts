import styled from 'styled-components';

interface TextProps {
    fontSize: string;
}

export const TextElement = styled.p<TextProps>`
    font-size: ${props => props.fontSize && props.fontSize}pt;
`;