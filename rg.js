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

// function countVowels(str) {
//   x = 0;
//   for (let i = 0; i < str.length; i++) {
//     let vowels = str[i];
//     if (
//       vowels === "a" ||
//       vowels === "e" ||
//       vowels === "i" ||
//       vowels === "o" ||
//       vowels === "u"
//     )
//       x++;
//   }
//   return x;
// }

// console.log(countVowels("hello")); // 2
// console.log(countVowels("javascript")); // 3
// console.log(countVowels("xyz")); // 0
// console.log(countVowels("aeiou")); // 5

// function primesUnder(limit) {
  

// }

// console.log(primesUnder(10)); // [2, 3, 5, 7]
// console.log(primesUnder(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
// console.log(primesUnder(2));  // []






function isValidPassword(password) {
  let x = 0;

  if (password === "password") {
    console.log("invalid");
    return false;
  }
  x += 1;

  if (/\d/.test(password)) {
    x += 1;
  }

  if (password.length >= 8) {
    x += 1;
  }

  if (x === 3) {
    console.log("valid");
    return true;
  }

  console.log("invalid");
  return false;
}

isValidPassword("e2sadhbsaj");
console.log(isValidPassword("password"));
console.log(isValidPassword("abc"));
console.log(isValidPassword("abc12345"));
