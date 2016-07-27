// @flow

export function merge(left: Array<number>, right: Array<number>): Array<number> {
    let result: Array<number> = [];
    let iRight: number = 0;
    let iLeft: number = 0;
    while (iLeft < left.length && iRight < right.length) {
        if (left[iLeft] < right[iRight]) {
            result.push(left[iLeft++]);
        } else {
            result.push(right[iRight++])
        }
    }

    return result.concat(left.slice(iLeft)).concat(right.slice(iRight));
}

export default function mergeSort(arr: Array<number>): Array<number> {
    const { length } = arr;
    if (length < 2) return arr;

    const middle: number = Math.floor(length / 2);
    const left: Array<number> = arr.slice(0, middle);
    const right: Array<number> = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
