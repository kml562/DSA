var reversePairs = function(nums) {
    nums.sort((a,b)=>b-a)
let n= nums.length;
let c=0;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
     if(nums[i] >2*nums[j]){
         c++;
     }
    }
}
return c
};
console.log(reversePairs([1,3,2,3,1]))
console.log(reversePairs([2,4,3,5,1]))