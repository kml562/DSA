//question 3. Find the largest three distinct elements in an array

// find tree elements;
function findTreeElements(arr) {
    let maxel = -Infinity;
    let maxel2 = -Infinity;
    let maxel3 = -Infinity;
    
    for (let el of arr) {
        if (el > maxel) {
            maxel3 = maxel2;
            maxel2 = maxel;
            maxel = el;
        }
        if (maxel2 < el && el != maxel) {
            maxel2 = el;
        }
        if (maxel3 < el && el != maxel && el != maxel2) {
            maxel3 = el;
        }
    }

return [maxel,maxel2,maxel3]
}
console.log(findTreeElements([ 1, 9, 5 ,3 ,2 ,6 ,7 ,11]))