const mongoose = require('mongoose');

main()
  .then(()=>{
    console.log("Successfully connected..")     // We could write the entire code in then() for further insertion..
                                                // But Mongoose uses "Operation Buffering" means Mongoose lets you start using your models immediately, without waiting for mongoose to establish a connection to Mongodb.
    })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

User.findOneAndDelete({name : "Eve"})
    .then((res) => {
        console.log(res);
    })
    .catch((err) =>{
        console.log(err);
    })


// User.deleteOne({name : "Bruce"})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) =>{
//         console.log(err);
//     })

// User.findOneAndUpdate({name: "Tony"},{age: 19}, {new: true})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.updateOne({name: "Bruce"},{age: 49})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Bruce", email: "bruce@gmail.com", age: 30},
//     {name: "Peter", email: "peter@gmail.com", age: 40},
// ]).then((res)=>{
//     console.log(res);
// });

// User.findById("67a60a02d5ffc1e79585e338")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// const user1 = new User({
//     name: "Adam",
//     email: "Ada@yahoo.com",
//     age: 23
// });
// user1.save();

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.com",
//     age: 19
// });
// user2.save()        // returns Promise
//   .then((res) => {
//     console.log(res);
//  })
//   .catch((err) => {
//         console.log(err);
//  });