//mongoosejs.com
const mongoose = require('mongoose');

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch((err) => console.log(err));
    
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    genre: [String],
});

const book = mongoose.model("Book", bookSchema);

// Book.findByIdAndUpdate('67b21ae84075aa90368f4c50',
//     { price : -100},
// )   .then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err);
//         })    // This can work as constraints are not applied on update operation

 book.findByIdAndUpdate('67b21ae84075aa90368f4c50',
        { price : -100},
        { runValidators: true }     // This show constraints error as "runValidators" is used to apply the constraint even though update operation
        )  .then(res => {
                console.log(res);
             }).catch(err => {
                console.log(err.errors.price.properties.message);   // this will print the error you defined above in "price" field.
            })    

// let book1 = new book({
//     title: "Mathematics X",
//     author: "R.D. Sharma",
//     price: 1200,
//     genre: ["Comics", "Algebra", "Statistics"],
// });
// book1.save()
//     .then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     })
