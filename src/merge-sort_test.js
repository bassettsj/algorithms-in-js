import mergeSort, { merge } from './merge-sort';
import test from 'tape';


test('Merge Function', (t) => {
    t.plan(1);
    const result = merge([1, 2, 3], [1, 2, 3]);
    t.deepEqual(result, [1, 1, 2, 2, 3, 3]);
});
test('Merge Sort', (t) => {
    t.plan(1);
    t.deepEqual(mergeSort([100, 90, 80, 10]), [10, 80, 90, 100]);

});
