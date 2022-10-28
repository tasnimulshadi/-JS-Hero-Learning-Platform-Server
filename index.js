const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//cors policy
const cors = require('cors');
app.use(cors());


//Api >> all categories
app.get('/categories', (req, res) => {
    res.send(categories)
});


//Api >> all courses
app.get('/courses', (req, res) => {
    res.send(courses)
});



// run server
app.listen(port, () => {
    console.log(port)
});
