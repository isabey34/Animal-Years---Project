const myAge = 36;
let earlyYears = 2;
// The value saved to this variable will change.
earlyYears *= 10.5;
let laterYears = myAge - 2;
// The value saved to this variable will change.
laterYears *= 4;
// Later years multiply 4 for dogs year.
// console.log("earlyYears, laterYears");
let myAgeInDogYears = earlyYears + laterYears;

let myName = "İSA".toLowerCase();
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
console.log(earlyYears);
console.log(laterYears);
console.log(myAgeInDogYears);
console.log(myName);
