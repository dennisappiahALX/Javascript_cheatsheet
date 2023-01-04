
// Path Module
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// Os module
const os = require('os');

let totalMemory = os.totalmem()

let totalfree = os.freemem()

console.log(`TotalMemory ${totalMemory}`);
console.log(`Totalfree ${totalfree}`);


// File System Module
const fs = require('fs');

let files =fs.readdirSync('./');    
//console.log(files)

let folder_files = fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
})

// Events Module - A signal that something has happened

// HTTP MOdule

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');












