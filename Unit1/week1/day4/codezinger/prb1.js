let arr = ['Ashish', 'Yadav', 'Abhishek', 'Rajput', 'Sunil', 'Pundir', 'Prem']
let words ='Ashish Yadav Abhishek Rajput Sunil Pundir Prem'


function reverse(arr) {
    let n = arr.length;
    let newarr = "";
    for (let i = 0; i < n; i++) {
        if (n % 2 === 0) {
            if (i % 2 === 0) {
               // newarr.push(arr[i]);
                newarr += arr[i] + " ";
            }
            else {
               // newarr.unshift(reverse(arr[i]));
                newarr = reversed(arr[i]) + " " + newarr;
            }
        } else {
            if (i % 2 === 1) {
                newarr += arr[i] + " ";
            }
            else {
                newarr = reversed(arr[i]) + " " + newarr;
               // newarr.unshift(reversed(arr[i]));
            }     
        }
     }

return newarr;
}
  
console.log(reverse(arr))


function reversed(str) {
    let i = 0;
    let rev = '';
    for (let el of str) { 
        rev = el + rev;
    }
    return rev;
}
