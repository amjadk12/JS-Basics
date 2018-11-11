//Sum of prime number

console.log(sumPrime(5));
function sumPrime(limit) {
  let sum = 0;
  for (number = 2; number <= limit; number++) {
    let isPrime = true;
    for (factor = 2; factor < number; factor++)
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    if (isPrime) sum += number;
  }
  return sum;
}

// sum of multiple of 3 and 5
// console.log(sum(10));
// function sum(limit) {
//   let sumNum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sumNum += i;
//   }
//   return sumNum;
// }

// const array = [0, null, undefined, "", 2, 3];
// console.log("test");
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array) if (value) count++;
//   return count;
// }

// let x = 10;
// let y = 3;
// console.log(x + y);
// console.log(x % y);
// console.log(x ** y);
// const userColor = null;
// const defaultColor = "blue";

// let i = 0;

// while (i <= 5) {
//   console.log("Lo:" + i);
//   i++;
