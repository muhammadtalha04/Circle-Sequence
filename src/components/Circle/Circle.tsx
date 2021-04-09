import React, { useEffect, useMemo } from 'react';
import { useConfigurationContext } from '../../contexts/ConfigurationContext';
import { ConfActionTypes } from '../../types';
import { getCoordinatesForPercent } from '../../utils';
import { CircleWrapper, Path, Svg, SvgText } from './Style';

const Circle: React.FC = () => {
    const { state, dispatch } = useConfigurationContext();

    const paths: JSX.Element[] = [];
    const textPaths: JSX.Element[] = [];

    // Create slices
    const render = useMemo(() => {
        let cumulativePercent: number = 0;

        for (let i = 0; i < state.numOfSlices; i++) {
            const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
            cumulativePercent += state.slicePercentage;
            const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

            // If the slice is more than 50%, take the large arc (the long way around)
            const largeArcFlag: number = state.slicePercentage > .5 ? 1 : 0;

            const pathData: string = `M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0`;

            const color: string = (state.intervalId !== -1 && state.sequence[state.counter] === `${i}`) ? state.color : "transparent";

            // Create slices and text
            paths.push(<Path d={pathData} fill={color} key={i} id={`slice${i}`} />);
            textPaths.push(<textPath key={i} href={`#slice${i}`} textAnchor="middle" startOffset="20%">{i + 1}</textPath>);
        }

        return paths;
    }, [paths, textPaths, state.color, state.numOfSlices, state.sequence, state.intervalId, state.slicePercentage]);

    // On component mount
    useEffect(() => {
        if (state.counter === state.numOfSlices) {
            clearInterval(state.intervalId);
            dispatch({ type: ConfActionTypes.RESET_COUNTER });
        }
    }, [state, dispatch]);

    return (
        <CircleWrapper>
            <Svg viewBox="-2 -2 4 4">
                {render}
                <SvgText x="0" y="0" fill="black">
                    {textPaths}
                </SvgText>
            </Svg>
        </CircleWrapper>
    );
}

export default Circle;