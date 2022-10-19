async function notifyCustomer() {
    try{
        const customer = await getCustomer(1);
        console.log(customer);
        if (customer.isGold) {
            const movies = await getTopMovies(customer.name);
            console.log('Top Movies: ', movies);
            await sendEmail(customer.email, movies);
            console.log('Email sent....');
        }
    }
    catch (err) {
        console.log('Error', err.message);
    }
}


function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading user object from the database...');
            resolve({ id: id, name : 'Kofi Mensah', isGold: true, email: 'email'});   
        }, 2000)
    })
}

function getTopMovies(customername) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Top Movies...');
            resolve(['movie1', 'movie2', 'movie3']);   
        }, 2000)
    })
} 

function sendEmail(movie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sending Email...');
            resolve();   
        }, 2000)
    })
} 