// 1. find the maximum element in an array

// brute force method

function bruteForce(arr) {
    let maxel = arr[0];
    for (let el of arr) {
        // if the element is greater than the maxel then maxel will be el;
        if(el>maxel) maxel = el;
    }
    return maxel;
}

console.log(bruteForce([1, 23, 4, 5, 6, 7]))

// Recursive Approach


function rec(arr, n,i) {
 // base condition
    if (i === n - 1) {
        return arr[i];
    }
    // recursuion 
    let maxel = rec(arr, n, i + 1);

    // return the value;
    return Math.max(maxel, arr[i]);
}

console.log(rec([2,43,4,5,22,3],6,0))