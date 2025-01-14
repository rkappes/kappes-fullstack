/** Exercise 01 - Fizzbuzz

Write a program that writes all the numbers from 1 to 100, with some exceptions: 
- For numbers divisible by 3, print “fizz” 
- For numbers divisible by 5 (but not 3), print “buzz” 
- For numbers divisible by 3 and 5, print “fizzbuzz”

Use console.log() to write the proper output to the command line.

**/

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz
// ...

const fizzbuzz = () => {
  //for (let k = 1; k < 101; k++) {
  k = 1;
  while (k < 101) {
    if (k % 3 == 0 && k % 5 == 0) {
      console.log("fizzbuzz");
    } else if (k % 5 == 0) {
      console.log("buzz");
    } else if (k % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(k);
    }
    k += 1;
  }
};

fizzbuzz();
