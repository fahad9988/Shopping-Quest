const express = require('express');
const cors = require('cors');
const { connections } = require('./config/db'); 
const { menRouter } = require('./routes/men.route');
const {userRouter}=require('./routes/user.route');
const { cartRouter } = require('./routes/cart.route');
const { authenticator } = require('./middleware/authentication');
const { womenRouter } = require('./routes/women.route');
require('dotenv').config()

const app = express();
app.use(express.json());


app.use(cors({
    origin: "*"
}))
app.use("/men", menRouter)
app.use("/user",userRouter)
app.use("/cart",authenticator)
app.use("/cart",cartRouter)
app.use("/women",womenRouter)

app.get("/", (req, res) => {
    res.send("Welcome to Amazon database");
})

app.listen(8080, async()=>{
    try {
        await connections;
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
    console.log(`listening on port 8080`);
})
