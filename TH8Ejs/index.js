const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/about', (req, res)=>{
    res.render('about');
})

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/contact', (req, res)=>{
    res.render('contact');
})

app.get('/post', (req, res)=>{
    res.render('post');
})

app.listen(PORT, ()=> {
    console.log('App listening on port' + PORT);
})