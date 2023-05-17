2.// find the minimum element in an array

let arr=[3,4,5,6,3,5,6,2,4]
let minimum = Infinity;

for (let el of arr) {
    if(el<minimum) minimum = el;
}
console.log(minimum)