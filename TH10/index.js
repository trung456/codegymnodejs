const express = require ('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 5000;
const DB_URL = `mongodb://trung:123456@127.0.0.1:27017/app`;
const db = mongoose.connection;

mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => console.log('DB Connected!'));
db.on('error', (err) => {
    console.log('DB connection error:', err.message);
})
app.set('view engine','ejs');
app.set('views','./views');

const producRouter = require('./router/productRouter');
app.use('/product', producRouter);
// app.get('')
app.listen(PORT,()=>{
    console.log('Server running on port '+ PORT);
})