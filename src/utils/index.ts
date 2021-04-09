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

        if (sequence.indexOf(`${randNum}`) === -1) {
            sequence.push(`${randNum}`);
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