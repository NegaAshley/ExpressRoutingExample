const express = require("express");
const { route } = require("express/lib/application");
const app = express();

// app.use((req, res) => {
//     res.send('<h1>This is my webpage!</h1>');
//     console.log("We got a new request!");
//     console.dir(req);
// });

//Root route
app.get('/', (req, res) => {
    res.send('Welcome to our homepage!');
});

app.get('/r/:subreddit', (req, res) => {
    res.send(`<h1>Welcome to the ${req.params.subreddit} subreddit</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    res.send(`<h1>Welcome to the ${req.params.subreddit} subreddit.  Viewing postId ${req.params.postId}.</h1>`);
});

app.get('/cats', (req, res) => {
    res.send('Meow!');
});

app.post('/cats', (req, res) => {
    res.send('Post request to /cats!');
});

app.get('/dogs', (req, res) => {
    res.send('Woof!');
});

app.post('/dogs', (req, res) => {
    res.send('Post request to /dogs!');
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send(`<h1>Nothing searched</h1>`);
    } else {
        res.send(`<h1>Search results for ${q}</h1>`);
    }
});

//All other routes.  Must come at end because routes are matched in order.
//Like a switch statement.
app.get('*', (req, res) => {
    res.send(`I don't know that route.`);
});


app.listen(3000, () => {  //Needs to have a port that it's listening on as well as a callback.
    console.log("Listening on port 3000!"); //Can go to browser to look at localhost:3000
});