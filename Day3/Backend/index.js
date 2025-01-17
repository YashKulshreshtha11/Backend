const express =  require('express');
const app = express();

let port = 8080;
//Parse POST request data in body
//This middleware is used because express can't identify directly what type of data is stored in request body
//if middleware not used, then req.body gives "data is undefined"
app.use(express.urlencoded({extended:true}))    //middleware

app.use(express.json()) //optional middleware for json request body

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

app.get('/register',(req,res)=>{
    let {name, password} = req.query;
    res.send(`<h1>Standard GET Response</h1><br><h2>Hey! Welcome ${name}..</h2>`)
})
app.post('/register',(req,res)=>{
    console.log(req.body);
    let {name, password} = req.body;
    res.send(`<h1>Standard POST Response</h1><br><h3>Hey! welcome ${name}..</h3>`)
})