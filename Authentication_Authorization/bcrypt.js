const bcrypt = require('bcrypt');

async function run() {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash('1234', salt);
    console.log(salt);
    console.log(hashed);
}

run();


//Json Web Token is basically a long string that identifies a user
//set vidly_jwtPrivatekey=MySecureVidly///