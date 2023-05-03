const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('express is running')
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedCategories = categories.find(c => c._id === id);
    res.send(selectedCategories)
}) 

app.listen(port, () => {
    console.log(`express is running on port: ${port}`)
})