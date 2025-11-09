let score = "33aa";
console.log(typeof score); // string
let valueInNumber = Number (score);
console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // number

let score1 = null;
console.log(typeof score1); // object
let valueInNumber1 = Number (score1);
console.log(valueInNumber1); // 0
console.log(typeof valueInNumber1); // number

// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1
// false ==> 0
// null ==> object

let isLoggedIn = 1
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof boolenIsLoggedIn);
console.log(boolenIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "some text" => true

