//7. find the sum of all even elements in an array
let sum = 0;
let arr=[3,4,5,5,2,4,5,2,4,3]
for (let el of arr) {
    if (el % 2 === 0) {
        sum += el;
    }
}
console.log("even sum" + sum);
