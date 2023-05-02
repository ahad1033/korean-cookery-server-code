const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('express is running')
});

app.listen(port, () => {
    console.log(`express is running on port: ${port}`)
})