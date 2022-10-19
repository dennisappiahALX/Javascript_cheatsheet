//Promises holds the eventual result of an asynchronous operation

const p = new Promise((resolve, reject) => {
    // kick off some async work

    setTimeout(() => {
        resolve(1);  //pending => resolved , fulfilled - returns value of promise to the consumer
        reject(new Error('message'));    //pending => rejected
    }, 2000);
   
});


// p.then( result => console.log('Result', result));
p.catch(err => console.log('Error', err.message));