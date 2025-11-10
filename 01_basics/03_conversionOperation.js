//************ Conversions **********************

let score = "33aa";
//console.log(typeof score); // string
let valueInNumber = Number (score);
//console.log(valueInNumber); // NaN
//console.log(typeof valueInNumber); // number

let score1 = null;
//console.log(typeof score1); // object
let valueInNumber1 = Number (score1);
//console.log(valueInNumber1); // 0
//console.log(typeof valueInNumber1); // number

// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1
// false ==> 0
// null ==> object

let isLoggedIn = 1
let boolenIsLoggedIn = Boolean(isLoggedIn)
//console.log(typeof boolenIsLoggedIn);
//console.log(boolenIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "some text" => true

// ************** Operations *******************

let value=3;
let negValue=-value;
//console.log(negValue); // -3

//console.log("1" + 2); // 12
//console.log(1 + "2"); // 12
//console.log("1" + 2 + 2); // 122
//console.log(1 + 2 + 2); // 32
//console.log(+true); // 1
//console.log(true+); // error

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1);

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

