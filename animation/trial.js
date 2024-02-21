

let a = math.random()

let b = prompt("enter the first number");
let c = prompt("enter the operation");
let d = prompt("enter the second number");

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*"
}


if(random > 0.1){

    alert(`the result is ${eval(`${b} ${c} ${d}`)}`)
}

else{
    c = obj[c]
    alert(`the result is ${eval(`${b} ${c} ${d}`)}`)
}