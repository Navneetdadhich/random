
// how to enter values in tinder
const tinder = {}

tinder.id = 45;
tinder.name = "nvnt";

// console.log(tinder);



// -------------------------------------------------------



// nested objects

const myobj = {

    username : {
        firstname : "nvnt",
        lastname : {
            middlename : "kumar",
            laastname : "dadhich"
                }
    }


}
// accessing nesting objects
// console.log(myobj.username.lastname.middlename);



// ------------------------------------------------------------------------------



// how to combine objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)



const obj3 = {...obj1, ...obj2}
// console.log(obj3);




// -----------------------------------------------------------------

// accessing objects with index


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// console.log(users[1].email, "and second value is ", users[1].id);



// accessing keys and values of an object and other methods

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));


// entries method return all the value and keys in array form
// console.log(Object.entries(tinder));


// to check the value in the object returns true if have
// console.log(tinder.hasOwnProperty('name'));


// --------------------------------------------------------
// destructuring of objects


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);   we cant use this type of syntax after renaming the name
// console.log(instructor);     we have to use this name instead of couresInstructor




// -------------------------------------------------------

// format of JSON files or apis


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


//apis in array format 
[
    {},
    {},
    {}
]
