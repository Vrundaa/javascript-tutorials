// singleton
// Object.create

// object literals
const sym1=Symbol("key1");
const JsUser={
    name:"Vidya",
    city:"Pune",
    "full name":"Vidya Full Name",
    [sym1]: "mykey1"
};

// console.log(JsUser); // { name: 'Vidya', city: 'Pune' }
// console.log(JsUser.name); // Vidya
// console.log(JsUser["name"]); // Vidya
// console.log(JsUser["full name"]); // Vidya Full Name
// console.log(JsUser[sym1]); //mykey1

//Object.freeze(JsUser);
JsUser.greeting = function()
{
    console.log(`Hello user ${this["full name"]}`);
}
JsUser.greeting(); // Hello user Vidya Full Name



