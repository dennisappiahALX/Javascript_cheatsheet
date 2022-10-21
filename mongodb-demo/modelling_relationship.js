// Using References - Normalization - Consistency

 let author_ = {
    name : 'Dennis',
    age : 25
 }

 let cours_e = {
    author_ : 'id'
 }

//Using Embeded Documents ( For Performance) - Denormalization

let course_ = {
    author : {
        name : 'Mosh',
        age : 25
    }
}

// hybrid
let author = {
    name : 'Dennis',
    age : 25
    //50 other properties
 }

 let course = {
    author : {
        id : 'ref',
        name : 'Dennis',
        
    }
}
