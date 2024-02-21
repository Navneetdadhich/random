
// let a = Math.floor(Math.random() * (4 - 1) + 1);
// let b = Math.floor(Math.random() * (4 - 1) + 1);
// let c = Math.floor(Math.random() * (4 - 1) + 1);

// let first = {
//     "1" : " crazy",
//     "2" : " amazing",
//     "3" : " fire",
// }

// let mid = {
//     "1" : " car",
//     "2" : " food",
//     "3" : " dev",
// }

// let last = {
//     "1" : " limited",
//     "2" : " bros",
//     "3" : " solutions",
// }

// console.log(a,b,c);



    // alert(`the business name is ${`${first[a]} ${mid[b]} ${last[c]}`}`);
    // console.log(first[a]+mid[b]+last[c]);


     
let num = prompt("write number");
// let num=3;
let sum=1;
while(num>0){
    sum *= num--;
}

console.log(sum);
alert(`the factorial is ${sum}`);