function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        let divider = Math.floor(array.length / 2);
        let left = array.slice(0, divider);
        let right = array.slice(divider);
        return merge(mergeSort(left), mergeSort(right));
    }
};

function merge(left, right) {
    let sorted = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
};

let arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000) + 1);
};

function test(algorithm) {
    let time;
    let start = Date.now();
    console.log(algorithm(arr));
    let finish = Date.now();
    time = finish - start;
    console.log(time);
    return;
}

test(mergeSort);
