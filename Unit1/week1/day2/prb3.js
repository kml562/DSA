//3. find the second largest element in an array

let arr = [2, 3, 4, 5, 6, 6, 9];

let largenum = -Infinity;
let secondlargest = -Infinity;

for (let el of arr) {
    if (el > largenum) {
        
        secondlargest = largenum;
        largenum = el;
    }
    else if (el > secondlargest && el != largenum) { 
        secondlargest = el;
    }
}
console.log(secondlargest);