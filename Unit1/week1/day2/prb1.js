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

