const axios = require('axios');

console.log("Getting cat fact...");
axios.get('https://catfact.ninja/fact')
.then(result => {
    console.log(result,'result');
    console.log(result.data.fact);
    console.log('Done!');
})
.catch(err => {
    console.log(err);
});
