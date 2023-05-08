const express = require('express');

let app = express();

let PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
    <h1>Hello, world!</h1>`);
})

app.get('/cats', (req, res) => {
    res.send(`
    <h1>Meow</h1>`)
})
app.get('/dogs', (req, res) => {
    res.send(`
    <h1>Woof</h1>`)
})
app.get('/cats_and_dogs', (req, res) => {
    res.send(`
    <h1>Living together</h1>`)
})
app.get('/greet/:name', (req, res) => {
    let nm = req.params.name;

    res.send(`<h1>Hello, ${nm}!</h1>`)
})
app.get('/year/:age', (req, res) => {
    let howOld = req.params.age;
    let date = new Date();
    let year = date.getFullYear();
    let bornYear = year-howOld;

    res.send(`<h1>You were born in ${bornYear}</h1>`)
})
app.listen(PORT, () => {

    console.log(`Listening on port: ${PORT}`);
    
})