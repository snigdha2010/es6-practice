const age = [12,13,14,14];
const age2 = [18,19];
const age3 = [3];

const allages = age.concat(age2).concat(age3).concat(5);
console.log(allages);

const allages1 = [age,age2,age3,[5]];
console.log(allages1);


//using three dots
const allages2 = [...age,...age2,...age3,5];
console.log(allages2);


const business = 23; 
const sochib = 45 ; 
const fokir = 50; 

const maxMoney = Math.max(business,sochib,fokir);
console.log(maxMoney);

const takapoisa = [business,sochib,fokir];
const maxTaka = Math.max(...takapoisa);
console.log(maxTaka);