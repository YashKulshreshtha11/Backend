const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{
        console.log("connection successful");
   })
   .catch((err)=> console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats= [{
    from:"neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
},
{
    from:"yash",
    to: "arpit",
    msg: "I'm having tea",
    created_at: new Date(),
},
{
    from:"shreya",
    to: "soorya",
    msg: "share me all the pictures",
    created_at: new Date(),
},
{
    from:"manish",
    to: "tanu",
    msg: "give me the idea yaar",
    created_at: new Date(),
},
{
    from:"ajay",
    to: "sujal",
    msg: "Kya kar rha hai",
    created_at: new Date(),
}
];

Chat.insertMany(allChats);
