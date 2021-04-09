import styled from 'styled-components';

interface TextProps {
    fontSize: string;
    strong?: boolean;
}

export const TextElement = styled.p<TextProps>`
    font-size: ${props => props.fontSize && props.fontSize}pt;
    ${props => props.strong !== undefined && props.strong === true && `font-weight: bold;`}
`;