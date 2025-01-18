// Required libraries
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let port = 8080;
app.listen(port, () => {
    console.log("Listening to port 8080");
});

let posts = [
    {
        id: uuidv4(),
        username: "Yash Kulshreshtha",
        content: "I got Mr. St Paul's honor which is truly a proud moment.",
    },
    {
        id: uuidv4(),
        username: "Rahul Kumar",
        content: "It is a pleasant weather and I'm enjoying it by having tea and snacks.",
    },
    {
        id: uuidv4(),
        username: "Raj Saxena",
        content: "Happiness is not about getting all you want, it's about enjoying all you have.",
    },
];

// Implement GET RESTAPI -> /posts -> To get data for all posts (Read)
app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

// Implement POST -> /posts -> To add a new post (Create)
// 2 routes-:
// render the form to get new username and content -> GET -> /posts/new
// Add a new post to database -> POST -> /posts
app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

app.post('/posts', (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect('/posts');
});

// Show one post with id
app.get('/posts/:id', (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", { post });
});

//Update the data -> Patch/Put
app.get('/posts/update/:id', (req, res) => {
    let { id } = req.params;
    let data = posts.find((p) => id === p.id);
    if (data) {
        res.render("edit.ejs", { data });
    } else {
        res.status(404).send("Post not found");
    }
});
app.patch('/posts/:id', (req, res) => {
    let { id } = req.params;
    let { content } = req.body;

    let postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex !== -1) {
        posts[postIndex].content = content; // Update the content
        res.redirect('/posts'); // Redirect to posts page
    } else {
        res.status(404).send("Post not found");
    }
});

// Delete data-> delete specific post
app.delete('/posts/:id', (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id); // Filter out the post with the given id
    res.redirect('/posts'); 
});




