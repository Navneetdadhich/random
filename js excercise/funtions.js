

// 

function rtrn(username = "nvn") {
    if(username === undefined){
        console.log(undefined);
        return;
    }

    return (`${username} welcomes you`);
} 


// const temp = rtrn();
// console.log(temp);



// ------------------------------------------------------------------------------



// ... is a Rest operator which combines values in array and ... can be used as a spread operator

function calculateCartPrice(val, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))



// ------------------------------------------------------------------------------------


// parameters of objects can be given in this form also


function returnObject(firstObject){

    console.log(`${firstObject.username} is the name and the id is ${firstObject.id}`);

}

returnObject({
    username: "rahul",
    id: 699
})

