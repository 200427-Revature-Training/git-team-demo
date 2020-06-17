export function myFunction(a: number | string, b: number | string) {
    if(typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if(typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }

    return NaN;
}
