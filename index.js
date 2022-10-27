const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//cors policy
const cors = require('cors');
app.use(cors());


app.get('/', (req, res) => {
    res.send('hello world')
});


// run server
app.listen(port, () => {
    console.log(port)
});
