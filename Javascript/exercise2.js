//factory function

function createAddress(street, city, zipcode){
    return {street,
            city,
            zipcode}
}

function Address(street, city, zipcode){
    this.street = street
    this.city = city
    this.zipcode = zipcode
}

let address1 = new Address('a', 'b', 233);
// console.log(address1)

//blog post object
let post = {
    title: 'a',
    body :'b',
    author: 'c',
    views : 10,
    comments : [
        {author: 'a', body:'f'},
        {author: 'a', body:'f'}
    ],
    isLive : true
}

//constructor blog plost
function Post(title, body, author){
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false
}

let post1 = new Post('a','b','d');

console.log(post1)

let courses = [
    {id : 1, title: 'math', lecturer: 'Adom'},
    {id : 2, title: 'Rme', lecturer: 'Kofi'},
];

console.log(courses);

// Try and Catch

