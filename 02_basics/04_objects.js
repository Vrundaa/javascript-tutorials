const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2}
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4=Object.assign(obj1,obj2) //here obj1 is target and obj2 is source so obj2 gets added in obj1
//console.log(obj1); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5={1:"a",2:"b"}
const obj6={3:"c",4:"d"}
const obj7=Object.assign({},obj5,obj6) //here {} is the target and obj5 and obj6 are sources so obj5 and obj6 get added in new array
//console.log(obj5); //{ '1': 'a', '2': 'b' } stays as it is
//console.log(obj7); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj8={1:"a",2:"b"}
const obj9={3:"c",4:"d"}
const obj10={...obj8,...obj9} // using spread operator ...
//console.log(obj10); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const tinderUser ={
    id:"123",
    email:"some@gmail.com",
    isActive:true
}
//console.log(tinderUser); //{ id: '123', email: 'some@gmail.com', isActive: true }
// console.log(Object.keys(tinderUser)); // [ 'id', 'email', 'isActive' ]
// console.log(Object.values(tinderUser)); // [ '123', 'some@gmail.com', true ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123' ],  [ 'email', 'some@gmail.com' ],[ 'isActive', true]]
// console.log(tinderUser.hasOwnProperty('isActive')); // true
// console.log(tinderUser.hasOwnProperty('isLogged')); // false


const course={
    coursename:"abc",
    courseinstructore:"xyz"
}

const {courseinstructore} =course // This is called destructured
console.log(courseinstructore); // xyz

const {courseinstructore : instructore} =course
console.log(instructore); // xyz

