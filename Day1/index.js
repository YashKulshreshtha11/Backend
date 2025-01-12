const express = require('express');
const app = express();

let port = 8080;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})

app.get('/',(req,res)=>{
    console.log("Request Recieved");
    let response = "<h1>Hey! I am root</h1>"
    res.send(response);
})
// app.get('/Name',(req,res)=>{
//     console.log("Request Recieved");
//     const response = "<h1>You are on the Name routing</h1> <ul><li>Name: Yash</li></ul>"
//     res.send(response);
// })
// app.get('/Age',(req,res)=>{
//     console.log("Request Recieved");
//     const response = "<h1>You are on the Age Routing</h1> <ul><li>Age: 20</li></ul>"
//     res.send(response);
// })
// app.get('/*',(req,res)=>{
//     console.log("Request Recieved");
//     res.send("Searched Incorrect");
// })
app.get('/search',(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("Not Found..")
    }
    res.send(`<h1>search results for query : ${q}</h1>`);

})

// app.use((req,res)=>{
//     console.log("Request Recieved");
// })