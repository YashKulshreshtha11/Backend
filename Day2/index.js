const express = require('express');
const app = express();
const path = require('path');

let port = 8080;
app.set("view engine","ejs");

app.set("views", path.join(__dirname, "/views"));

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

app.get('/', (req,res)=>{
    console.log("Request recieved !");
    res.send("<h1>This is the root page</h1>");
})

app.get('/rolldice', (req,res)=>{
    const val = Math.floor(Math.random() * 6)+1;
    res.render("rolldice.ejs", {val});
})

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];

    // if (!userData) {
    //     return res.status(404).send("<h1>User not found</h1>");
    // }
    console.log(data);
    res.render("instagram.ejs",{data});
});
