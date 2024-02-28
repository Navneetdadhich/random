// declaring a symbol
const mysym = Symbol["key1"];

const Myobj = {

    name : "navneet",
    contact : "9882",
    [mysym]: "this is symboll",
    email : "nvnt@gooogle.com",
    "last name" : "dadhich"
   

}

// we can access objects by this method but this is not a good method to practice
console.log(Myobj.email);

// this is the best praactice to access the object values
console.log(Myobj["name"]);
console.log(Myobj["last name"]);

console.log(Myobj[mysym]);



// we can freeze the object so that no one can change the values 
// object.freeze(Myobj);

Myobj.func = function(){
    console.log("hy this is a function ...");
}

// we can write functions with the string interpolation method

Myobj.func2 = function(){
    console.log(`this is second function  and this ${this.email} is the mail from the object `);
}

console.log(Myobj.func());

console.log(Myobj.func2());
