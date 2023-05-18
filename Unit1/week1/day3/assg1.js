// question 1. Move all zeroes to end of array
// let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

// simple brute force method--

// time complexity is O(n) and space complexity is O(n) in this method--
function bruteForce(arr) {

    // making a new array and filling with zeroes;
    let newarr = new Array(arr.length).fill(0);
    let i = 0;
    let j = 0;
    while (i < arr.length-1) { 
        if (arr[i] != 0) {
            // only increment j when arr[i] is not equal to zero
            newarr[j] = arr[i];
            j++;
        }
        i++;

    }
    // return  the new array
    return newarr;
}

//console.log(bruteForce([0, 1, 0, 3, 3, 3, 31, 0, 0, 4, 4, 0]))

// now we have to optimize the methods==

// two pointers method
// time complexity is O(n) and space complexity is O(1)

function twoPointers(arr) {
    let l = 0; // track non zero elements
    let r = 0;  // shifting the elements by one by one
    while (r < arr.length) { 
        if (arr[r] !== 0) {
            // shifing the elements
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
}
        r++;
    }
    return arr;
}

console.log(twoPointers([0, 1, 0, 3, 3, 3, 31, 0, 0, 4, 4, 0]))


//using splice method==
// time complexity is O(n) and space complexity is O(1)
function splice(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) { 
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
            i--;
            n--;
}

    }
    return arr;
}

console.log(splice([1,0,5,5,0,4]))