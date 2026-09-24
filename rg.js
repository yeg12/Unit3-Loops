function getNumbersInRange(start, end) {
  let result =[];
  for(let i = start; i <= end; i++){
    result.push(i);
  }
  return result;
  }



console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
console.log(getNumbersInRange(10, 10)); // [10]
console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]

function sumRange(start, end) {
  

}

console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4


let number = 5;

while (number > 0) {
  console.log("Countdown: " + number);
  number++; // subtract 1 each time
}
console.log("Blast off!");