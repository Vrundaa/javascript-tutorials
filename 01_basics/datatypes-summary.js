// Primirive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primitive)
// Array, Objects, Functions

/*
JavaScript is a dynamically typed language.

What that means:
Type checking happens at runtime, not at compile time.
You don’t need to declare variable types explicitly — the type is determined automatically based on the value assigned.
A variable can hold different types of values at different times.
Example:
Javascript

Copy code
let value = 42;       // value is a Number
console.log(typeof value); // "number"

value = "Hello";      // now value is a String
console.log(typeof value); // "string"

Key Points:
Dynamic typing makes JavaScript flexible and quick to write.
But it can also lead to runtime errors if you accidentally use a variable in an unexpected way.
If you want static typing in JavaScript-like code, you can use TypeScript, which adds compile-time type checking. 
*/

const id = Symbol('123');
const anotherId = Symbol('123');

// Even if we pass same value in symbol, it is still is different
  
console.log(anotherId===id); // false

// +++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++
// Stack (Primitive), Heap (Non-Primitive )

