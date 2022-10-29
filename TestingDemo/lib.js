const db = require('./db');
const sendEmail = require('./mail')


//Testing Numbers
module.exports.absolute = function (number) {
    if (number > 0) return number;

    if (number < 0) return -number;

    return 0;
}


//Testing strings

module.exports.greet = function (name) {
    return `Welcome ${name}`
}

//Testing arrays
module.exports.getCurriencies = function( ) {
    return ['US', 'EUR', 'AUD']
}


//Testing objects
module.exports.getProduct = function(productId) {

    return {id : productId, price:10}
}

//Testing exceptions
module.exports.registerUser = function(username) {
    if (!username) throw new Error('Username is not defined');

    return {id: new Date().getTime(), username: username};
}

//Mock Functions
module.exports.applyDiscount = function(order) {
    const customer = db.getCustomerSync(order.id); 
//in unit tests, we dont want to test the app compents 
//with any extenal dependencies like database, http service

    if (customer.point > 0)
        order.totalprice *=0.9
}

//Mock functions
