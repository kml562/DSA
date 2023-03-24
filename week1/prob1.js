// Consider an algorithm that takes as input a positive integer n
// . If n
// is even, the algorithm divides it by two, and if n
// is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n
// is one. For example, the sequence for n=3
// is as follows:
// 3→10→5→16→8→4→2→1

// Your task is to simulate the execution of the algorithm for a given value of n




const check=(n)=>{
    if(n==1){
     return  console.log(n);
     
    }
    let str=""
    while(n!=1||n<1){
        if(n%2==0){
            str+=n+" ";
            n=n/2;
        }else{
    str+=n+" ";
    n=3*n+1;
        }
    }
    return console.log(str+1);
}

function runProgram(input) {
    // Write code here
    let n= +input;
    check(n)
  }
  
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  