const bcrypt = require("bcryptjs");

const myFunction = async () =>  {
    const password = "any string"
    const hashedPassword = await bcrypt.hash(password, 8)
    // between 8/10 are the optimum 'salt rounds'

    console.log(hashedPassword);

    // compares password
    const passwordMatch = await bcrypt.compare ("any string",hashedPassword)
    console.log(passwordMatch);
};


myFunction();

// node myNotes/bcrypt_demo.js