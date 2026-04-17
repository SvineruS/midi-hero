export function lerp(x: number, a1: number, a2: number, b1: number, b2: number): number {
    const coef = (x - a1) / (a2 - a1);
    return coef * (b2 - b1) + b1;
}

export function interpolate(current: number, target: number, factor: number): number {
    return current + (target - current) * factor;
}

export function findMinimum<T>(arr: T[], predicate: (x: T) => number): T {
    let min = Infinity;
    let minIndex = -1;
    arr.forEach((x, i) => {
        const val = predicate(x);
        if (val < min) {
            min = val;
            minIndex = i;
        }
    });
    return arr[minIndex];
}
