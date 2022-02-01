const express =require("express");
const app = express();
const port = 3030;
const path = require("path");
const router = express.Router()

app.get("/login",(req,res)=> {
    res.sendFile(path.join(__dirname,"views", "./login.html"))})
app.get("/register",(req,res)=> {
    res.sendFile(path.join(__dirname,"views", "./register.html"))})

app.get("/editProfile",(req,res)=> {
        res.sendFile(path.join(__dirname,"views", "./editProfile.html"))})
module.exports = router

app.use(express.static("public"));

app.get("/",(req, res) => {
 res.sendFile(path.join(__dirname,"views", "/home.html"))})


app.listen(port,() =>console.log("servidor ejecutandose en puerto",+ port));