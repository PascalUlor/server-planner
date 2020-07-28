const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'Hello from your Backend Engineer!!!'
    });
});

app.get('*', (req, res) => {
    res.status(404).json({
        status: 404,
        message: 'Invalid Route'
    });
});

app.listen(port, ()=>{
    console.log(`Application started on http://localhost:${port}`)
});