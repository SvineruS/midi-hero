export function populateSelect(selectElement, optionsArray) {
    // Clear any existing options
    selectElement.innerHTML = '';

    // Create and append options
    optionsArray.forEach(([value, option]) => {
        const optionElement = document.createElement('option');
        optionElement.value = value;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    });
}

export function lerp(x: number, a1: number, a2: number, b1: number, b2: number) {
    const a1_a2 = a2 - a1
    const b1_b2 = b2 - b1
    const a1_x = x - a1

    const coef = a1_x / a1_a2
    const b1_x = coef * b1_b2

    const x_ = b1_x + b1
    return x_;
}

export function interpolate(current, target, factor) {
    return current + (target - current) * factor;
}

export function findMininimum(arr: any[], predicate: (x: any) => number) {
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
