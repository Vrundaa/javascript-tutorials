let myDate = new Date();
//console.log(myDate.toString()); // Wed Nov 12 2025 13:18:00 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString()); // Wed Nov 12 2025
//console.log(myDate.toLocaleString()); // 11/12/2025, 1:18:00 PM
//console.log(typeof myDate); // object

//let myCreatedDate = new Date(2023,0,23); // In JS for Array Month starts with 0 // Mon Jan 23 2023
let myCreatedDate = new Date("01-14-2023"); // In JS For date Month starts with 1 // Sat Jan 14 2023
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate =new Date();
console.log(newDate.getMonth()); // 10, starts with 0





