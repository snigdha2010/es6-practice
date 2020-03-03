// function add(a,b){
//     return a+b;
// }
// const result = add(2,4);
// console.log(result);

const add = function (a,b){
    return a+b;
}
//const result = add(1,2);
//console.log(result);

//arrow function 
const emptyparam = () =>4;
const res = emptyparam();
console.log(res);


const singleIT = a => a;
const value = singleIT(2);
console.log(value);

const doubleIT = (a,b) => (a*b);
const result = doubleIT(2,3);
console.log(result);

const multiline = (a,b) =>{
    const plus = a+b;
    const minus = a-b;
    const result = plus*minus; 
    return result; 
}
const lineoutput = multiline(3,2);
console.log(lineoutput);