// Jason Webtoken example
const jwt = require('jsonwebtoken');

const myFunction = () => {
    const token = jwt.sign({_id: 'abc123'}, 'my secret string', {expiresIn: '5 weeks'});
    console.log(token);
    const randomtoken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE2MTI0NTg1OTcsImV4cCI6MTYxMzA2MzM5N30.SWA3re-IJvYa2ESjhawjMGeb_MljEzT8UCwBzzOu46N";

    const data = jwt.verify(randomtoken , 'my secret string')
    console.log(data);
};
myFunction();
// the secret is normally stored in the .env file

// node myNotes/jwt_demo.js