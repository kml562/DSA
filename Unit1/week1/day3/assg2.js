/*question 2. Segregate even and odd numbers

Input: arr[] =[ 1, 9, 5 ,3 ,2 ,6 ,7 ,11]
Output: 2 6 5 3 1 9 7 11

Input: arr[] = 1 3 2 4 7 6 9 10
Output: 2 4 6 10 7 1 9 3*/

//two pointer swap the elements;

function swap(arr) {
    let i = 0;
    let j = 0;
    while (i < arr.length) { 
        if (arr[i] % 2 === 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
            j++;
        }
        i++;
    }
    return arr
}

//console.log(swap([1, 9, 5, 3, 2, 6, 7, 11]));

// two pointer usin first and last elements

function twoPointers(arr) { 
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[j] % 2 === 0 && arr[i] % 2 === 1) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            i++;
            j--;
        } else if (arr[j]%2===1) {
            j--;
        } else {
            i++;
    }
    }
    return arr;
}
console.log(twoPointers([1, 9, 5, 3, 2, 6, 7, 11]));