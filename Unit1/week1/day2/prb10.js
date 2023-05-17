//10. find the number of odd elements in an array

let arr = [3, 45, 5, 2, 4, 2, 3, 4, 5, 3, 2, 4];

let ans = [];
for (let el of arr) {
    if(el %2===1) ans.push(el);
}

console.log(ans);
