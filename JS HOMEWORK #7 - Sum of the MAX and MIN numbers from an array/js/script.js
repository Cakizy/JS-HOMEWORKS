let array = [3, 5, 6, 8, 11];
let max = -Infinity;
let min = Infinity;

function maxmin() {
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
        if (max < array[i]) {
            max = array[i];
        }
    }
    let result = max + min;
    console.log(`Maximum is: ${max} minimum is: ${min} result is: ${result}`);
}
maxmin();