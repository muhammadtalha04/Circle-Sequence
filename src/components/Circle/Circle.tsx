import React, { useEffect, useMemo } from 'react';
import { useConfigurationContext } from '../../contexts/ConfigurationContext';
import { ConfActionTypes } from '../../types';
import { generateSlices } from '../../utils';
import { CircleWrapper, Svg, SvgText } from './Style';

const Circle: React.FC = () => {
    const { state, dispatch } = useConfigurationContext();

    const textPaths: JSX.Element[] = [];

    // Create slices
    const render = useMemo(() => {
        const { paths, textPaths: tP } = generateSlices(state.numOfSlices, state.slicePercentage, state.intervalId, state.sequence, state.counter, state.color);

        textPaths.push(...tP);

        return paths;
    }, [textPaths, state.color, state.numOfSlices, state.sequence, state.intervalId, state.slicePercentage]);

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