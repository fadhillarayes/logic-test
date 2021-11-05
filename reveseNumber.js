function reverseNumber(number) {
  // Start Code Here
  var revNumber = 0;
  while (number > 0) {
    revNumber = revNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
}

console.log(reverseNumber(876)); //output: 678
console.log(reverseNumber(2340)); //output: 432
console.log(reverseNumber(1737822)); //output: 2287371
console.log(reverseNumber(124746)); //output: 647421
