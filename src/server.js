require('./db/connection');
const express = require ("express");
// const cors = require |("cors");
const {userRouter} = require("./routes/user");
const {postRouter} = require("./routes/posts");

// use port given OR us./user port 5000 as below
const port = process.env.PORT || 5000
const app = express();

// app.use(cors());
// use cors
app.use(express.json());
// json>javascript middleware
app.use(userRouter);
// user rout from routes file
app.use(postRouter);
// port rout from routes file


app.get("/health", (req, res) => {
    // this will be the route to get health from the database
    res.status(200).send({message: "API is working"});
});
// status(200 = code of error for users)

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
// best practice for hosting ^^

