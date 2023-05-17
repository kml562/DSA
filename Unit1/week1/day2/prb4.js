//4. find the second smallest element in an array
let minimum = Infinity;
let secondmin = Infinity;
let arr= [1,3,5,5,6,,6,6,67,3]
for (let el of arr) {
    if (el < minimum) {
        secondmin = minimum;
        minimum = el;
       
    }
    else if (el < secondmin && el != minimum) {
     secondmin = el;
     } 
}
console.log(secondmin)

// if (el > largenum) {     
//     secondlargest = largenum;
//     largenum = el;
// }
// else if (el > secondlargest && el != largenum) { 
//     secondlargest = el;
// }