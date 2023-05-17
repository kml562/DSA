//8. find the sum of all odd elements in an array

let arr = [1, 2, 3, 3, 4, 4, 5, 5,];
let sum = 0;
for (let el of arr) {
    if (el % 2 === 1) {
        sum += el;
    }
}

console.log(sum);




