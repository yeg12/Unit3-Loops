// function getNumbersInRange(start, end) {
//   let result =[];
  
//   for(let i = start; i <= end; i++){
//     result.push(i);
//   }
//   return result;
//   }



// console.log(getNumbersInRange(1, 5));  // [1, 2, 3, 4, 5]
// console.log(getNumbersInRange(10, 10)); // [10]
// console.log(getNumbersInRange(3, 8));  // [3, 4, 5, 6, 7, 8]

/* function sumRange(start, end) {
  let result = 0;
  
  for(let i = start; i <= end; i++){
    result += i
  }
  
    return result;
  }
  



console.log(sumRange(1, 5));   // 15
console.log(sumRange(1, 100)); // 5050
console.log(sumRange(4, 4));   // 4
 */
// function countdown(n) {
//   x = [];
//   while (n > 0) {
//     x.push(n);
//     n -=1; // subtract 1 each time
//   }
//   return x
// }

// console.log(countdown(5)); // [5, 4, 3, 2, 1]
// console.log(countdown(1)); // [1]
// console.log(countdown(8)); // [8, 7, 6, 5, 4, 3, 2, 1]

function countVowels(str) {
  x=0

  for (let i = 0; i < str.length; i++){
  let vowels = str[i]  
  if (vowels.includes ("a" or "e" or  "i" or "o" or "u"))
    x += 1
  }
}



console.log(countVowels("hello"));      // 2
console.log(countVowels("javascript")); // 3
console.log(countVowels("xyz"));        // 0
console.log(countVowels("aeiou"));      // 5