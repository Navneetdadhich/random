
const arr = ["nvn", "rahul", "nvntt" ]

// ------------------------------------------------------> for each loop with arrow function in js

arr.forEach( (val) => {
    console.log(val);
})


// -------------------------------------------------------> with normal function

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// --------------------------------------------------------> we can access values with this inbuilt print method
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// ---------------------------------------------------> the for each loop have the access of the entire array, index , values
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



// ------------------------------------------------> accessing particular values of an object array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )