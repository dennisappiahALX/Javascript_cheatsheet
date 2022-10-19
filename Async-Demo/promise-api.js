//imagine calling two apis both together 

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation..Calling Twitter Api');
        resolve(1);
    }, 2000);
})


const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Async operation..Calling Facebook Api');
        resolve(2);
    }, 2000);
})

Promise.all([p1, p2])
    .then(result => console.log(result));