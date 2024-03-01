
// map returns values automatically

const arr = [1,2,3]

let value = arr.map( (it) => it <= 2)

// console.log(value);



 value = arr.map( (it) => it+10)

// console.log(value);


// -----------------------------------------> Reduce

// basic definition

const array = [ 1,2,1,2,1]

let result = array.reduce( (acc,curr) => acc + curr,0 )

// console.log(result);

// advance version

const books = [
    {
        bname : "book one",
        bprice : 150
    },

    {
        bname : "book two",
        bprice : 120
    },

    {
        bname : "book third",
        bprice : 200
    }
]

 const rslt = books.reduce( (acc, bks) => acc + bks.bprice, 0 )

 console.log(rslt);
