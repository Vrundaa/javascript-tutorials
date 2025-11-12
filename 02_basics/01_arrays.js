let myArr =[0,1,2,3,4,5];
console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

const myn1=myArr.slice(1,3);
console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]
console.log(myn1); // [ 1, 2 ]

const myn2=myArr.splice(1,3);
console.log("B ",myArr); // B  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ] 


