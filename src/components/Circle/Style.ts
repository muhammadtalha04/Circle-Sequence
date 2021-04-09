import styled from 'styled-components';

export const CircleWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Svg = styled.svg`
    width: 30%;
    height: 30%;
    transform: rotate(-90deg);
`;

export const Path = styled.path`
    border: 2px solid black;
    stroke: black;
    stroke-width: 0.01;
`;

export const SvgText = styled.text`
    font-size: 0.2px;
`;