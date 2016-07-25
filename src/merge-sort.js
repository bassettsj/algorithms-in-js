// @flow

export function merge(left: Array<number>, right: Array<number>): Array<number> {
    let result: Array<number> = [];
    let iRight: number = 0;
    let iLeft: number = 0;
    while ((iRight < right.length) && (iLeft < left.length)) {
        if (left[iRight] < right[iLeft]) {
            result.push(left[iLeft++]);
        } else {
            result.push(right[iRight++])
        }
    }

    return result.concat(left.slice(iLeft)).concat(right.slice(iRight))
}


export default function mergeSort(arr: Array<number>): Array<number> {
    const { length } = arr;
    if (length < 2) return arr;

    const middle: number = Math.floor(length / 2);
    const left: Array<number> = arr.splice(0, middle);
    const right: Array<number> = arr.splice(middle);
    console.log(middle, left, right);
    return merge(mergeSort(left), mergeSort(right));
}
