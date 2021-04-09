import { Path } from '../components/Circle/Style';

// Calculates the x and y coordinates to draw a slice
export const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
}

// Generates random indexes to blink
export const generateSequence = (numSlices: number): string[] => {
    const sequence: string[] = [];

    for (let i = 0; i < numSlices;) {
        const randNum: number = Math.floor(Math.random() * numSlices);

        if (sequence.indexOf(`${randNum + 1}`) === -1) {
            sequence.push(`${randNum + 1}`);
            i++;
        }
    }

    return sequence;
}

// Matches the two given sequences to check if they are equal
export const matchSequences = (sequence1: string[], sequence2: string[]) => {
    if (sequence1.length !== sequence2.length) {
        return false;
    } else {
        for (let i = 0; i < sequence1.length; i++) {
            if (sequence1[i] !== sequence2[i]) {
                return false;
            }
        }
    }

    return true;
}

// Generates slices of a circle
export const generateSlices = (numOfSlices: number, slicePercentage: number, intervalId: number, sequence: string[], counter: number, color: string) => {
    let cumulativePercent: number = 0;
    const paths: JSX.Element[] = [];
    const textPaths: JSX.Element[] = [];

    for (let i = 0; i < numOfSlices; i++) {
        const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
        cumulativePercent += slicePercentage;
        const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

        // If the slice is more than 50%, take the large arc (the long way around)
        const largeArcFlag: number = slicePercentage > .5 ? 1 : 0;

        const pathData: string = `M ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} L 0 0`;

        const fillColor: string = (intervalId !== -1 && sequence[counter] === `${i + 1}`) ? color : "transparent";

        // Create slices and text
        paths.push(<Path d={pathData} fill={fillColor} key={i} id={`slice${i}`} />);
        textPaths.push(<textPath key={i} href={`#slice${i}`} textAnchor="middle" startOffset="20%" > {i + 1}</textPath>);
    }

    return { paths: paths, textPaths: textPaths };
}