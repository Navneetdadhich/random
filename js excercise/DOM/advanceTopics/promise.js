
//--------------------------------------------> promise syntax , resolve

// new Promise(function (resolve, reject) {
    
//     setTimeout(() => {
//         console.log('the promise is called');
//         resolve();
//     }, 1000);

// }).then(function () {
//     console.log('resolve called');
// });


const promiseOne =  new Promise(function (resolve, reject) {
    
   

    setTimeout(() => {
        console.log("setTimeout called");
        let error = true;
        if(error){
            reject('error occurred');
        }
        else{
            resolve('hy successfully excuted');
        }
        
       
    }, 1000);

});

// promiseOne.then(function (msg) {
//     console.log(msg);
// });

// promiseOne.catch((error) => {console.log(error)});

//---------------------------------------------------> we can do the then and catch stufff in async await methods

async function HandlingPromiseOne() {
    try {
        const response = await promiseOne;
        console.log(response);
        
    } catch (error) {
        console.log('E:', error);
    }
}

HandlingPromiseOne();