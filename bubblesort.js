function bubbleSort(arr) {
    let start = Date.now();
    let time;

    let swapped;
    let length = arr.length - 1;
    do {
        swapped = false;
        for (let i = 0; i < length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        length--;
    } while (swapped);

    let finish = Date.now();
    time = finish - start;
    console.log(time);

    return arr;
};

let arr = [];
for (let i = 0; i < 100000; i++) {
    arr.push(Math.floor(Math.random() * 100000) + 1);
};

console.log(bubbleSort(arr));