// Consider an algorithm that takes as input a positive integer n
// . If n
// is even, the algorithm divides it by two, and if n
// is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n
// is one. For example, the sequence for n=3
// is as follows:
// 3→10→5→16→8→4→2→1

// Your task is to simulate the execution of the algorithm for a given value of n

const check = (n, arr) => {
  //     if(arr.length==1)
  // {
  //     return
  // }
  arr.sort((a, b) => a - b);
  // console.log(arr)
  for (let i = 0; i < n; i++) {
    if (arr[i] != i + 1) {
      console.log(i + 1);
      break;
    }
  }
};
// check(10,[2 ,8, 10 ,6, 5 ,1, 3, 7, 4])

function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let n = +input[0];
  let arr = input[1].split(" ").map(Number);
  check(n, arr);
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
