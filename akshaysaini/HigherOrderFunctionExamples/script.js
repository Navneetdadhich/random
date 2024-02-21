
// const radius = [2, 3, 4, 5];
// const area = function(radius){
//     return Math.PI * radius * radius;
// }

// const calculate = function (radius, logic){
//     const cal = [];
//     for(let i = 0; i<radius.length; i++){
//         cal.push(logic(radius[i]));
//     }
//     return cal;
// }
// console.log(calculate(radius, area));

// -----------------------------------------------

// map example

// const array = [3,1,2,4,5];
// function double (i){
//     return i*2; 
// }
// console.log(array.map(double));

// can be written as
// console.log(array.map((x) => x*2));

// -----------------------------------------------

// filter example

// const arr = [3,1,2,4,5];
// function isOdd (x){
//     return x%2;
// }
// console.log(arr.filter(isOdd));

//can be written as in oneline
// console.log(arr.filter((x) => x>4));

// --------------------------------------------------

// reduce example

// const array = [3,1,2,3,6];

// console.log(array.reduce(function (acc,curr) {
//     acc = acc+curr;
//     return acc;
// },0));

// can be written as 

// arraw function 
//  const ot = array.reduce((arr,curr) => {
//     arr = arr+curr;
//     return arr;
// },0);
// console.log(ot);


// example of reduce - finding maximum

// console.log(array.reduce((arr,curr) => {
//    if(arr < curr){
//     arr = curr;
//    } 
//    return arr;
// },0));


// example of reduce (extreme)

const object = [

    {firstName : "akshay", lastName : "saini", age : 26},
    {firstName : "nvnt", lastName : "dad", age : 74},
    {firstName : "nishu", lastName : "jangid", age : 26},
]

   const result = object.reduce(function(acc, curr){
    if(curr.age === 26){
       acc.push(curr.firstName);
    }
    
    return acc;
        
}, []);

    
console.log(result);
// -----------------------------------------------------