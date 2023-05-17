//6. find the average of all elements in an array

let arr = [2, 3, 4, 34, 2, 3, 4, 4, 2, 2, 3];

let n = arr.length;
let sum = 0;
for (let el of arr) {
    sum += el;
}
let average = sum / arr.length;
console.log(average);