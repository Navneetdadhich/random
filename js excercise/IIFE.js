

// IIFE stands for immediately invoked function expression

// --------------> written in these two parentheses

// ()()

// -------------------> Named IIFE


(function one(obj) {
    console.log(`Name IIFE -> the name is ${obj}`);
})("nvnt");



// Normal IIFE

( (name)=>{
    console.log(`this is from normal IIFE -> hy i am ${name}`);
}  )("nvnt");