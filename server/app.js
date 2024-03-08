const express= require('express');
require("./db/connection");
const cors = require('cors');

const bodyParser = require('body-parser');
require('dotenv').config();
const PORT= 9000;
const poster = require('./router/post')
const user= require("./router/User");
const app= express();
app.use(express.json())
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({  extended: false }));
app.use(cors());

app.use("/poster",poster);
app.use("/user",user);
app.get("/get",(req,res)=>{
    res.send("Hello")
})
app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})