const string = "Hello";
const length = string.length;

for (let i = 0; i <= length; i++) {
  for (let j = i + 1; j <length; j++) {
    const substring = string.substring(i, j);
    console.log(substring);
  }
}
