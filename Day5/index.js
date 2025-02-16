const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    database: "delta_app",
    password: "12345"
});

// let q ="SHOW TABLES";
// try{
// connection.query(q, (err,result) => {
//     if(err) throw err;
//     console.log(result);
// })
// } catch(err){
//     console.log(err);
// }


let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(),
      faker.internet.email(),
      faker.internet.password(),
    ];
  }

//   console.log(getRandomUser());

//Inserting new data
let q = "INSERT INTO user (id, username, email, password) VALUES ?"
let data = [];
for(let i = 1; i<=100; i++){
    data.push(getRandomUser()); //100 fake users
}


try{
connection.query(q, [data], (err,result) => {
    if(err) throw err;
    console.log(result);
})
} catch(err){
    console.log(err);
}

connection.end;