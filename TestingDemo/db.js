module.exports.getCustomerSync = function(id) {
    console.log('Reading a customer from MOngoDB..');
    return {id: id, points:11}
}


module.exports.getCustomer = async function(id) {
    return new Promise((resolve, reject) => {
        console.log('Reading from database.....');
        resolve( {id: id, points:11});
    })
}