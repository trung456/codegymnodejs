const express = require('express');
const app = new express();
app.use(express.static('./public'))

app.listen(3000,()=>{
    console.log('App listening on port 3000');
})

