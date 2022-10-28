const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

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

//Api >> courses by category
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    if (id === '01') {
        res.send(courses)
    }
    else {
        const selectedCourses = courses.filter(courses => courses.category_id === id);
        res.send(selectedCourses);
    }

});

//Api >> single course by id
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selected = courses.find(course => course.id === id);
    res.send(selected);
});


//Api >> single lesson by id
app.get('/course/:course_id/lesson/:lesson_id', (req, res) => {
    const course_id = req.params.course_id;
    const les_id = req.params.lesson_id;
    const course = courses.find(course => course.id === course_id);
    const lesson = course.lessons.find(les => les.lesson_id === les_id);
    // console.log(lesson);
    res.send(lesson);
});


// run server
app.listen(port, () => {
    console.log(port)
});
